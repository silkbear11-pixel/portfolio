(function () {
  'use strict';
  const $ = (selector) => document.querySelector(selector);
  const target = 30;
  const text = {
    en: {
      eyebrow: 'A TWO-PLAYER DICE GAME', soundOn: 'Sound on', soundOff: 'Sound off', tagline: 'Two dice. One choice. Push your luck or play it safe.', start: 'Start game', how: 'How to play', live: 'GAME IN PROGRESS', newGame: 'New game', home: 'Home', player: 'PLAYER', yourTurn: 'YOUR TURN', waiting: 'WAITING', total: 'TOTAL SCORE', currentTurn: 'CURRENT TURN', risk: 'Roll to score. Pass to protect your lead.', roll: 'Roll dice', pass: 'Pass turn →', recent: 'RECENT ROLLS', ruleHint: 'ONE = TURN OVER · DOUBLE ONES = RESET SCORE', historyEmpty: 'Your rolls will appear here.', rulesLabel: 'THE RULES', rulesTitle: 'RISK.<br>ROLL.<br>REPEAT.', rule1: 'Two players take turns rolling two dice. The first to reach 30 points wins.', rule2: 'If neither die shows 1, add both dice to your score. Roll again or pass.', rule3: 'Roll one 1 and your turn ends. Roll two 1s and your total score resets to zero.', rule4: 'Pass to hand the dice to the other player without risking a penalty.', footer: 'DES 157A COURSE PROJECT · ENHANCED PORTFOLIO EDITION', caseStudy: 'VIEW CASE STUDY ↗', confirmLabel: 'START OVER?', confirmTitle: 'Reset the match?', confirmBody: 'Both scores and roll history will be cleared.', cancel: 'Cancel', reset: 'Reset game', starting: (p) => `Player ${p} is up. Roll the dice!`, rolling: (p) => `Player ${p} is rolling…`, scored: (p,n) => `Player ${p} rolled ${n}. Roll or pass?`, single: (p) => `Rolled a 1! Player ${p}'s turn.`, snake: (p) => `Double ones! Score reset. Player ${p}'s turn.`, passed: (p) => `Turn passed to Player ${p}.`, win: (p) => `Player ${p} wins!`, historyRoll: (p,a,b) => `P${p}: ${a} + ${b}`, historyPass: (p) => `P${p}: PASS`, historySnake: 'DOUBLE ONES', historyPenalty: 'TURN OVER', historyScore: (n) => `+${n} POINTS`, complete: 'Match complete. Start a new game to play again.'
    },
    ko: {
      eyebrow: '2인용 주사위 게임', soundOn: '소리 켜짐', soundOff: '소리 꺼짐', tagline: '주사위 두 개, 한 번의 선택. 계속 굴릴까, 안전하게 넘길까?', start: '게임 시작', how: '게임 방법', live: '게임 진행 중', newGame: '새 게임', home: '홈', player: '플레이어', yourTurn: '현재 턴', waiting: '대기 중', total: '누적 점수', currentTurn: '현재 턴', risk: '굴리면 점수가 올라가고, 패스하면 차례를 넘겨요.', roll: '주사위 굴리기', pass: '턴 넘기기 →', recent: '최근 기록', ruleHint: '1이 나오면 턴 종료 · 둘 다 1이면 점수 초기화', historyEmpty: '굴린 결과가 여기에 표시돼요.', rulesLabel: '게임 규칙', rulesTitle: '선택하고.<br>굴리고.<br>도전하자.', rule1: '두 플레이어가 주사위 두 개를 번갈아 굴립니다. 먼저 30점을 얻으면 승리합니다.', rule2: '두 주사위 모두 1이 아니면 눈의 합을 점수에 더합니다. 다시 굴리거나 패스할 수 있습니다.', rule3: '주사위 한 개에 1이 나오면 턴이 종료됩니다. 두 개 모두 1이면 누적 점수가 0점이 됩니다.', rule4: '패스하면 벌점을 감수하지 않고 상대방에게 차례를 넘깁니다.', footer: 'DES 157A 수업 프로젝트 · 포트폴리오 개선 버전', caseStudy: '프로젝트 설명 보기 ↗', confirmLabel: '다시 시작할까요?', confirmTitle: '게임을 초기화할까요?', confirmBody: '두 플레이어의 점수와 기록이 모두 지워집니다.', cancel: '취소', reset: '초기화', starting: (p) => `플레이어 ${p} 차례! 주사위를 굴려보세요.`, rolling: (p) => `플레이어 ${p}가 주사위를 굴리는 중…`, scored: (p,n) => `플레이어 ${p}: ${n}점 획득! 다시 굴리거나 패스하세요.`, single: (p) => `1이 나왔어요! 플레이어 ${p} 차례입니다.`, snake: (p) => `둘 다 1! 점수가 0점으로 초기화됩니다. 플레이어 ${p} 차례입니다.`, passed: (p) => `턴을 넘겼어요. 플레이어 ${p} 차례입니다.`, win: (p) => `플레이어 ${p} 승리!`, historyRoll: (p,a,b) => `P${p}: ${a} + ${b}`, historyPass: (p) => `P${p}: 패스`, historySnake: '점수 초기화', historyPenalty: '턴 종료', historyScore: (n) => `+${n}점`, complete: '게임 종료! 새 게임을 시작할 수 있어요.'
    }
  };
  let lang = 'en';
  let active = 0;
  let scores = [0, 0];
  let turns = [];
  let rolling = false;
  let ended = false;
  let started = false;
  let sound = false;
  let resetMode = false;
  let lastEvent = {type:'starting'};
  const dice = [$('#die0'), $('#die1')];
  const bgm = $('#bgm');
  const sfx = $('#diceSound');
  function t(key) { return text[lang][key]; }
  function audioState() {
    $('#soundButton').setAttribute('aria-pressed', String(sound));
    $('#soundButton').querySelector('[data-i18n]').textContent = sound ? t('soundOn') : t('soundOff');
    $('#soundButton').querySelector('[data-i18n]').dataset.i18n = sound ? 'soundOn' : 'soundOff';
    if (sound && started) { bgm.volume = 0.16; bgm.play().catch(() => {}); }
    else { bgm.pause(); }
  }
  function updateLanguage() {
    document.documentElement.lang = lang;
    $('[id=langButton]').textContent = lang === 'en' ? '한국어' : 'English';
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (typeof t(key) === 'string') el.innerHTML = t(key);
    });
    audioState(); render();
  }
  function setDice(a,b) {
    [a,b].forEach((n,i) => { dice[i].dataset.face = String(n); dice[i].setAttribute('aria-label', `${lang==='ko'?'주사위':'Die'} ${i+1}: ${n}`); });
  }
  function statusMessage() {
    const p = active + 1;
    if (lastEvent.type === 'win') return t('win')(lastEvent.player);
    if (lastEvent.type === 'rolling') return t('rolling')(p);
    if (lastEvent.type === 'scored') return t('scored')(lastEvent.player, lastEvent.points);
    if (lastEvent.type === 'single') return t('single')(p);
    if (lastEvent.type === 'snake') return t('snake')(p);
    if (lastEvent.type === 'passed') return t('passed')(p);
    return t('starting')(p);
  }
  function render() {
    [0,1].forEach((i) => {
      $(`#score${i}`).textContent = String(scores[i]).padStart(2,'0');
      $(`#progress${i}`).style.width = `${Math.min(100, scores[i]/target*100)}%`;
      $(`#progressText${i}`).textContent = `${scores[i]} / ${target}`;
      $(`#p${i}`).classList.toggle('active',i===active && !ended);
      $(`#p${i}`).classList.toggle('winner',ended && i===active);
      $(`#turn${i}`).textContent = ended && i===active ? '★' : i===active ? t('yourTurn') : t('waiting');
    });
    $('#status').textContent = statusMessage();
    $('#substatus').textContent = ended ? t('complete') : t('risk');
    $('#rollButton').disabled = rolling || ended;
    $('#passButton').disabled = rolling || ended;
    const list=$('#history'); list.replaceChildren();
    if (!turns.length) {const li=document.createElement('li');li.className='empty';li.textContent=t('historyEmpty');list.append(li);}
    turns.slice(-6).reverse().forEach((entry)=>{
      const li=document.createElement('li');
      if(entry.type==='pass')li.textContent=t('historyPass')(entry.player);
      else {
        let outcome=entry.kind==='snake'?t('historySnake'):entry.kind==='single'?t('historyPenalty'):t('historyScore')(entry.a+entry.b);
        li.textContent=`${t('historyRoll')(entry.player,entry.a,entry.b)} · ${outcome}`;
      }
      list.append(li);
    });
  }
  function resetGame(){
    active=Math.floor(Math.random()*2); scores=[0,0]; turns=[]; ended=false;rolling=false;lastEvent={type:'starting'};
    setDice(1,1);dice.forEach((d)=>d.classList.remove('rolling'));render();
  }
  function begin(){ started=true; $('#intro').classList.add('hidden');$('#arena').classList.remove('hidden');$('#arena').scrollIntoView({behavior:'smooth',block:'start'});resetGame();audioState(); }
  function switchTurn(type){active=1-active;lastEvent={type};render();}
  function roll(){
    if(rolling || ended)return;
    rolling=true;lastEvent={type:'rolling'};render();dice.forEach(d=>d.classList.add('rolling'));
    if(sound){sfx.pause();sfx.currentTime=0;sfx.volume=.45;sfx.play().catch(()=>{});}
    let ticks=0;
    const timer=setInterval(()=>{
      setDice(Math.ceil(Math.random()*6),Math.ceil(Math.random()*6));ticks++;
      if(ticks<9)return;
      clearInterval(timer);
      const a=Math.ceil(Math.random()*6),b=Math.ceil(Math.random()*6),player=active+1;
      setDice(a,b);dice.forEach(d=>d.classList.remove('rolling'));
      const kind=(a===1&&b===1)?'snake':(a===1||b===1)?'single':'scored';
      turns.push({type:'roll',player,a,b,kind});
      rolling=false;
      if(kind==='snake'){scores[active]=0;switchTurn('snake');return;}
      if(kind==='single'){switchTurn('single');return;}
      scores[active]+=a+b;
      if(scores[active]>=target){ended=true;lastEvent={type:'win',player};}
      else lastEvent={type:'scored',player,points:a+b};
      render();
    },85);
  }
  $('#startButton').addEventListener('click',begin);
  $('#rollButton').addEventListener('click',roll);
  $('#passButton').addEventListener('click',()=>{if(rolling||ended)return;turns.push({type:'pass',player:active+1});switchTurn('passed');});
  $('#backHome').addEventListener('click',()=>{if(rolling)return;started=false;bgm.pause();$('#arena').classList.add('hidden');$('#intro').classList.remove('hidden');$('#intro').scrollIntoView({behavior:'smooth'});});
  const dialog=$('#confirmDialog');
  $('#newGame').addEventListener('click',()=>{if(rolling)return;dialog.showModal();});
  $('#cancelReset').addEventListener('click',()=>dialog.close());
  $('#confirmReset').addEventListener('click',()=>{dialog.close();resetGame();});
  $('#langButton').addEventListener('click',()=>{lang=lang==='en'?'ko':'en';updateLanguage();});
  $('#soundButton').addEventListener('click',()=>{sound=!sound;audioState();});
  updateLanguage();
})();
