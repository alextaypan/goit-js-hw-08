import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.on('ended', function () {
//   console.log('ended the video!');
// });

const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(throttled, 1000));

function throttled(data) {
  // console.log('Percentage watched: ' + data.seconds);
  localStorage.setItem(STORAGE_KEY, data.seconds);
}

player
  .setCurrentTime(localStorage.getItem(STORAGE_KEY))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case STORAGE_KEY:
        break;

      default:
        break;
    }
  });
