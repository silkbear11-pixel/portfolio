# Pulse v2.0 — Advanced System Intelligence

A local-first PC monitoring portfolio prototype. English dashboard, HTML/CSS/JavaScript frontend, Python/psutil backend and SQLite history.

## Run on Windows
Install Python 3, extract the ZIP, double-click start_windows.bat. Keep the terminal open. The launcher installs psutil if needed and opens a local browser dashboard. No administrator privileges required normally. Stop with Ctrl+C.

## Portfolio preview
Open index.html directly from your disk for simulated data. Live monitoring requires the Python backend. Demo values are not measurements.

## Features
- CPU and logical core utilization, RAM, NVIDIA GPU utilization and temperature (requires nvidia-smi).
- Disk read/write throughput, aggregate network throughput, ICMP latency and timeout rate to 1.1.1.1.
- Top six memory-consuming processes with name filter.
- Session event timeline: CPU/RAM >=90%, GPU temperature >=85 C crossings, ICMP timeouts.
- Local SQLite history sampled every five collection cycles; records older than seven days are pruned during collection. History endpoint returns newest 3,600 records; chart shows last 60. CSV export available.
- Pause freezes the display, not backend sampling.

## Privacy and limitations
Local server binds to 127.0.0.1. No cloud upload. ICMP probes contact 1.1.1.1. History includes process names; delete history.sqlite3 after stopping the agent to clear stored data. Events are session-only. ICMP timeouts are not definitive evidence of game packet loss. Thresholds are heuristic, not root-cause diagnoses. NVIDIA only; no FPS tracking, AI model, AMD telemetry or standalone EXE. Python and JavaScript syntax checks and Linux local API smoke test performed; Windows and browser UI not verified.
