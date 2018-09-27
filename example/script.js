const WaveSurfer = require("wavesurfer.js");
const WaveSurferAxis = require("../src/index.js");

const ws = WaveSurfer.create({
    container: "#waveform",
    plugins: [
        WaveSurferAxis.create()
    ]
});
ws.load("tone.mp3");
ws.axis.foo();
