const WaveSurfer = require("wavesurfer.js");
const WaveSurferAxis = require("../src/index.js");

document.addEventListener("DOMContentLoaded", () => {
  const ws = WaveSurfer.create({
    container: "#waveform",
    fillParent: false,
    minPxPerSec: 500,
    scrollParent: true,
    plugins: [
      WaveSurferAxis.create()
    ]
  });
  ws.empty();
  window.setTimeout(() => {
    ws.load("tone.mp3");
  }, 3000);
});
