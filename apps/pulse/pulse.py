import csv, io, json, os, platform, re, subprocess, threading, time, webbrowser
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import psutil
import sqlite3
from collections import deque
ROOT=Path(__file__).resolve().parent
lock=threading.Lock(); samples=[]; network=[]; events=deque(maxlen=300); target='1.1.1.1'; running=True

def record(s):
    with sqlite3.connect(ROOT/'history.sqlite3') as db:
        db.execute('CREATE TABLE IF NOT EXISTS telemetry (time REAL PRIMARY KEY, payload TEXT)')
        db.execute('INSERT OR REPLACE INTO telemetry VALUES (?,?)',(s['time'],json.dumps(s)))
        db.execute('DELETE FROM telemetry WHERE time < ?',(time.time()-7*86400,))

def history():
    try:
        with sqlite3.connect(ROOT/'history.sqlite3') as db:
            return [json.loads(r[0]) for r in db.execute('SELECT payload FROM telemetry ORDER BY time DESC LIMIT 3600').fetchall()[::-1]]
    except sqlite3.Error: return []

def ping_loop():
    while running:
        t=target
        try:
            args=['ping','-n','1','-w','1000',t] if os.name=='nt' else ['ping','-c','1','-W','1',t]
            p=subprocess.run(args,capture_output=True,text=True,errors='replace',timeout=3,creationflags=getattr(subprocess,'CREATE_NO_WINDOW',0))
            match=re.search(r'(?:time|시간)\s*([=<])\s*([\d.]+)\s*ms',p.stdout,re.I)
            value=(0.5 if match[1]=='<' else float(match[2])) if match else None
            state='ok' if value is not None else ('timeout' if p.returncode else 'unparsed')
        except FileNotFoundError: value=None; state='unavailable'
        except Exception: value=None; state='error'
        with lock:
            if t==target: network.append({'time':time.time(),'ping':value,'state':state}); network[:]=network[-120:]
            if state=='timeout': events.append({'time':time.time(),'kind':'Network','message':'ICMP probe timed out'})
        time.sleep(1)

def gpu():
    try:
        p=subprocess.run(['nvidia-smi','--query-gpu=utilization.gpu,temperature.gpu,name','--format=csv,noheader,nounits'],capture_output=True,text=True,timeout=2,creationflags=getattr(subprocess,'CREATE_NO_WINDOW',0))
        a=p.stdout.splitlines()[0].split(',',2); return [float(a[0]),float(a[1]),a[2].strip()]
    except Exception: return [None,None,None]

def collect():
    prev=psutil.net_io_counters(); diskprev=psutil.disk_io_counters(); last=time.monotonic(); psutil.cpu_percent(); g=[None,None,None]; i=0
    while running:
        time.sleep(1); now=time.monotonic(); n=psutil.net_io_counters(); dt=now-last; m=psutil.virtual_memory()
        if i%5==0: g=gpu()
        procs=[]
        for p in psutil.process_iter(['name','memory_info']):
            try:
                if p.info['memory_info']: procs.append({'name':p.info['name'],'mb':round(p.info['memory_info'].rss/1048576)})
            except (psutil.NoSuchProcess,psutil.AccessDenied): pass
        s={'time':time.time(),'cpu':psutil.cpu_percent(),'ram':m.percent,'ramUsed':round(m.used/1073741824,1),'ramTotal':round(m.total/1073741824,1),'gpu':g[0],'temp':g[1],'gpuName':g[2],'down':max(0,(n.bytes_recv-prev.bytes_recv)*8/dt/1e6),'up':max(0,(n.bytes_sent-prev.bytes_sent)*8/dt/1e6),'processes':sorted(procs,key=lambda x:x['mb'],reverse=True)[:6]}
        disk=psutil.disk_io_counters()
        s.update({'diskRead':max(0,(disk.read_bytes-diskprev.read_bytes)/dt/1e6) if disk and diskprev else None,'diskWrite':max(0,(disk.write_bytes-diskprev.write_bytes)/dt/1e6) if disk and diskprev else None,'perCore':psutil.cpu_percent(percpu=True),'battery':None})
        diskprev=disk
        with lock:
            samples.append(s); samples[:]=samples[-900:]
            for key,limit in [('cpu',90),('ram',90),('temp',85)]:
                if s[key] is not None and s[key]>=limit and (len(samples)<2 or samples[-2].get(key) is None or samples[-2][key]<limit): events.append({'time':s['time'],'kind':key.upper(),'message':f'{key.upper()} crossed threshold: {s[key]:.0f}'})
        if i%5==0:
            try: record(s)
            except sqlite3.Error: pass
        prev=n; last=now; i+=1
class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path=='/api/status':
            with lock: data=json.dumps({'samples':samples[-120:],'network':network,'target':target,'system':platform.system()+' '+platform.release(),'cores':psutil.cpu_count(),'events':list(events)}).encode()
            self.send_response(200); self.send_header('Content-Type','application/json'); self.send_header('Cache-Control','no-store'); self.end_headers(); self.wfile.write(data)
        elif self.path=='/api/history':
            self.send_response(200); self.send_header('Content-Type','application/json'); self.end_headers(); self.wfile.write(json.dumps(history()).encode())
        elif self.path=='/':
            self.send_response(200); self.send_header('Content-Type','text/html; charset=utf-8'); self.end_headers(); self.wfile.write((ROOT/'index.html').read_bytes())
        else: self.send_error(404)
    def log_message(self,*args): pass
if __name__=='__main__':
    threading.Thread(target=collect,daemon=True).start(); threading.Thread(target=ping_loop,daemon=True).start()
    server=ThreadingHTTPServer(('127.0.0.1',0),Handler); url=f'http://127.0.0.1:{server.server_port}'
    print('Pulse running at '+url+' — keep this window open. Ctrl+C to stop.'); webbrowser.open(url)
    try: server.serve_forever()
    except KeyboardInterrupt: pass
    finally: running=False; server.server_close()
