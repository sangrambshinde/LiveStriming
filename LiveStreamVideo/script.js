// const videoPlayer = document.getElementById('video-player'); // already aahe
const overlayContainer = document.getElementById('overlay-container');
const overlayText = document.getElementById('overlay-text');
const addOverlayButton = document.getElementById('add-overlay');

addOverlayButton.addEventListener('click', () => {
  const overlayElement = document.createElement('div');
  overlayElement.className = 'overlay';
  overlayElement.innerText = overlayText.value;
  overlayContainer.appendChild(overlayElement);
});

 const videoPlayer = document.getElementById('video-player');
const playButton = document.getElementById('play-button');

const rtspUrl = 'YOUR_RTSP_URL_HERE'; // Replace with the actual RTSP URL

playButton.addEventListener('click', () => {
  videoPlayer.src = rtspUrl;
  videoPlayer.play();
});

// Function to play/pause video
function togglePlayPause() {
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
}

// Function to adjust volume
function adjustVolume() {
  videoPlayer.volume = parseFloat(this.value) / 100;
}

// Event listeners for play, pause, and volume controls
videoPlayer.addEventListener('play', () => console.log('Video playing'));
videoPlayer.addEventListener('pause', () => console.log('Video paused'));
videoPlayer.addEventListener('volumechange', () => console.log('Volume changed'));

videoPlayer.addEventListener('click', togglePlayPause);
videoPlayer.addEventListener('volumeinput', adjustVolume);
