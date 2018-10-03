# axis.wavesurfer.js
A [wavesurfer.js](https://github.com/katspaugh/wavesurfer.js) plugin just to display axes. 

![Screenshot](https://raw.githubusercontent.com/higuri/axis.wavesurfer.js/gh-pages/Screenshot.gif "Screenshot")

## Installing
```shell
npm install axis.wavesurfer.js
```

## Usage Example
```javascript
const WaveSurfer = require("wavesurfer.js");
const {WaveSurferAxis} = require("axis.wavesurfer.js");

const wavesurfer = WaveSurfer.create({
  container: "#waveform",
  plugins: [
    WaveSurferAxis.create({
      width: 2,
      color: "darkgray",
      hideOnReady: false
    })
  ]
});
```

## License
[MIT license](https://github.com/higuri/axis.wavesurfer.js/blob/master/LICENSE)
