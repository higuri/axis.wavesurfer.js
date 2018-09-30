const WaveSurfer = require("wavesurfer.js");
const WaveSurferAxis = require("../build/src/index.js");

document.addEventListener("DOMContentLoaded", () => {
  const ws = WaveSurfer.create({
    container: "#waveform",
    fillParent: false,
    minPxPerSec: 1000,
    scrollParent: true,
    plugins: [
      WaveSurferAxis.create({
        width: 2,
        color: "black",
        hideOnReady: false
      })
    ]
  });
  ws.empty();
  window.setTimeout(() => {
    ws.load("tone.mp3");
  }, 3000);
  window.setTimeout(() => {
    ws.destroy();
  }, 6000);
});
