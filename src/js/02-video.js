import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

const LOCAL_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(LOCAL_KEY, seconds);
  console.log(seconds);
}

const time = localStorage.getItem(LOCAL_KEY) || 0;
player
  .setCurrentTime(time)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
console.log(time);
