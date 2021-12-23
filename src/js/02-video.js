// import Player from '@vimeo/player';

// const player = new Player('handstick', {
//   id: 19231868,
//   width: 640,
// });

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.on('ended', function () {
  console.log('ended the video!');
});

player.on('timeupdate', function (data) {
  console.log('Percentage watched: ' + data.seconds);
});
