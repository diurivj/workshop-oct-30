const player = new Tone.Player({
  url: './utils/trackye.[mp3|ogg]',
  loop: true
}).toMaster();

player.volume.value = 5;
document.querySelector('tone-player').bind(player);
document.querySelector('tone-play-toggle').bind(player);

let isPlaying;

document.addEventListener('keydown', function(e) {
  if (isPlaying) return;
  switch (e.keyCode) {
    case 88:
      return sample(0, 3.85);
    case 90:
      return sample(185.8, 187.5);
    case 67:
      return sample(15.4, 23.14);
    case 86:
      return sample(46, 53.73);
    case 66:
      return sample(77.4, 87.07); //83.2
    default:
      return;
  }
});

document.addEventListener('keyup', function(e) {
  isPlaying = false;
  player.stop();
  player.loopStart = 0;
});

function sample(start, end) {
  isPlaying = true;
  player.loopStart = start;
  player.loopEnd = end;
  player.start();
}

// Primer sample 0, 3.85
// Segundo sample 185.8, 187.5
// Tercer sample 15.4, 23.14
// Cuarto sample* 46, 53.73 // 59.997
// 70
