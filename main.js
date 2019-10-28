/******************
 * Primer sample 0, 3.85
 * Segundo sample 185.8, 187.5
 * Tercer sample 15.4, 23.14
 * Cuarto sample 46, 53.73
 * Quinto sample 77.4, 87.07 // 83.2
 ******************/
let isPlaying;
const player = new Tone.Player({
  url: './utils/trackye.[mp3|ogg]',
  loop: true
}).toMaster();

player.volume.value = 5;
document.querySelector('tone-player').bind(player);
document.querySelector('tone-play-toggle').bind(player);

document.addEventListener('keydown', function(e) {
  switch (e.keyCode) {
    case 88:
      return sample(0, 3.85, e.key);
    case 90:
      return sample(185.8, 187.5, e.key);
    case 67:
      return sample(15.4, 23.14, e.key);
    case 86:
      return sample(46, 53.73, e.key);
    case 66:
      return sample(77.4, 87.07, e.key);
    default:
      return;
  }
});

document.addEventListener('keyup', function(e) {
  document.querySelector(`#${e.key}`).classList.remove('pressed');
  isPlaying = false;
  player.stop();
  player.loopStart = 0;
});

document.querySelector('#ArrowUp').onclick = (e) => setControls(1, 'ArrowUp');
document.querySelector('#ArrowDown').onclick = (e) => setControls(-1, 'ArrowDown');
document.querySelector('#ArrowLeft').onclick = (e) => setControls(-0.1, 'ArrowLeft');
document.querySelector('#ArrowRight').onclick = (e) => setControls(0.1, 'ArrowRight');

function sample(start, end, key) {
  if (isPlaying) return;
  const div = document.querySelector(`#${key}`);
  div.classList.add('pressed');
  isPlaying = true;
  player.loopStart = start;
  player.loopEnd = end;
  player.start();
}

function setControls(level, key) {
  const div = document.querySelector(`#${key}`);
  if (level % 1 === 0) {
    player.volume.value += level;
  } else {
    player.playbackRate += level;
  }
  div.classList.add('pressed');
  setTimeout(() => {
    div.classList.remove('pressed');
  }, 100);
}
