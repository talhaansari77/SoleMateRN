import TrackPlayer from 'react-native-track-player';

// await TrackPlayer.setupPlayer()
// // The player is ready to be used
// // service.js
module.exports = async function () {
  TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());
  TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());
};
