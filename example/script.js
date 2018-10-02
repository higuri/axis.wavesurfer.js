const WaveSurfer = require("wavesurfer.js");
const {WaveSurferAxis} = require("../build/src/index.js");

document.addEventListener("DOMContentLoaded", () => {
  const ws = WaveSurfer.create({
    container: "#waveform",
    minPxPerSec: 2000,
    waveColor: 'violet',
    progressColor: 'purple',
    scrollParent: true,
    plugins: [
      WaveSurferAxis.create({
        width: 2,
        color: "darkgray",
        hideOnReady: false
      })
    ]
  });
  window.setTimeout(() => {
    ws.load("tone.mp3");
  }, 3000);
});
