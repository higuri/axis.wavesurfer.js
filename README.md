# axis.wavesurfer.js
A wavesurfer.js plugin to display axes. 

## Installing
```shell
npm install axis.wavesurfer.js
```

## Usage Example
```javascript
const WaveSurfer = require("wavesurfer.js");
const WaveSurferAxis = require("axis.wavesurfer.js");

const wavesurfer = WaveSurfer.create({
  container: "#waveform",
  plugins: [
    WaveSurferAxis.create({
      width: 2,
      color: "black",
      hideOnReady: false
    })
  ]
});
```

## License
[MIT license](LICENSE)
