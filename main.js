clicknow = '';
lives = 3;
timer = 0;
var timeout;

function start() {
  document.getElementById('start').style.visibility = 'hidden';
  document.getElementById('btn_status').style.visibility = 'visible';
  document.getElementById('lives').style.visibility = 'visible';
  document.getElementById('btn_status').innerHTML = 'Wait.';
  makeTimer();
}

function check() {
  if (clicknow != 'true') {
    lives = lives-1;
    document.getElementById('lives').innerHTML = 'LIVES : ' + lives;

    if (lives == 0) {
      document.getElementById('game_over').style.visibility = 'visible';
      document.getElementById('btn_status').style.visibility = 'hidden';
      document.getElementById('lives').style.visibility = 'hidden';
    }
  }
}

function clicking() {
  clicknow = 'true',
  document.getElementById('btn_status').innerHTML = 'CLICK!';
  document.getElementById('btn_status').style.backgroundColor = 'green';
  document.getElementById('btn_status').style.border = 'solid 3px green';
  setTimeout(goBack, 3000);
}

function goBack() {
  document.getElementById('btn_status').innerHTML = 'Wait.';
  document.getElementById('btn_status').style.backgroundColor = 'red';
  document.getElementById('btn_status').style.border = 'solid 3px red';
  lives = lives-1;
  document.getElementById('lives').innerHTML = 'LIVES : ' + lives;

  if (lives == 0) {
    document.getElementById('game_over').style.visibility = 'visible';
    document.getElementById('btn_status').style.visibility = 'hidden';
    document.getElementById('lives').style.visibility = 'hidden';
    clearTimeout(timeout);
    timer = 0;
  }
  makeTimer();
}

function makeTimer() {
  timer = Math.floor(Math.random() * 4000);
  timeout =  setTimeout(clicking, timer);
}

function retry() {
  document.getElementById('game_over').style.visibility = 'hidden';
  document.getElementById('btn_status').style.visibility = 'hidden';
  document.getElementById('lives').style.visibility = 'hidden';
  document.getElementById('start').style.visibility = 'visible';
}