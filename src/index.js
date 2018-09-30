// WaveSurferAxis
class WaveSurferAxis {
  // WaveSurferAxis.create()
  static create(params) {
    return {
      name: "axis",
      params: params,
      instance: WaveSurferAxis
    };
  }

  // WaveSurferAxis()
  constructor(params, ws) {
    this.params = params;
    this.wavesurfer = ws;
    this.waveContainer = null;
    this.axisX = null;
    this.axisY = null;
    this._onReady = () => {
      if (this.params.hideOnReady) {
        this._removeAxisElements();
      } else {
        // redraw axes with consideration for scroll bar height
        this._appendAxisElements();
      }
    };
    // params.width: width of axes [px]
    if (this.params.width === undefined) {
      this.params.width = 1;
    }
    // params.color: color of axes [css format string]
    if (this.params.color === undefined) {
      this.params.color = "black";
    }
    // params.hideOnReady: if true, hide axes when wav is loaded
    if (this.params.hideOnReady === undefined) {
      this.params.hideOnReady = false;
    }
  }

  // init()
  init() {
    this._checkIfWSElementLoaded((elem) => {
      this.waveContainer = elem;
      this._appendAxisElements();
    });
    this.wavesurfer.on("ready", this._onReady);
  }

  // _checkIfWSElementLoaded(onLoaded);
  _checkIfWSElementLoaded(onLoaded) {
    const childNodes = this.wavesurfer.container.childNodes;
    if (0 < childNodes.length) {
      onLoaded(childNodes[0]);
    } else {
      window.setTimeout(() => {
        this._checkIfWSElementLoaded(onLoaded);
      }, 100);
    }
  }

  // _appendAxisElements()
  _appendAxisElements() {
    if (this.waveContainer === null) {
      return;
    }
    this._removeAxisElements();
    const axisX = document.createElement("div");
    const axisXTop =
      this.waveContainer.clientHeight / 2 - this.params.width / 2;
    axisX.style.cssText =
      `background-color: ${this.params.color};` +
      "position: absolute;" +
      `top: ${axisXTop}px;` +
      "left: 0px;" +
      `width: ${this.waveContainer.offsetWidth}px;` +
      `height: ${this.params.width}px;`;
    const axisY = document.createElement("div");
    axisY.style.cssText =
      `background-color: ${this.params.color};` +
      "position: absolute;" +
      "top: 0px;" +
      "left: 0px;" +
      `width: ${this.params.width}px;` +
      `height: ${this.waveContainer.clientHeight}px;`;
    this.axisX = axisX;
    this.axisY = axisY;
    this.waveContainer.appendChild(axisY);
    this.waveContainer.appendChild(axisX);
  }

  // _removeAxisElements()
  _removeAxisElements() {
    if (this.waveContainer === null) {
      return;
    }
    if (this.axisX !== null) {
      this.waveContainer.removeChild(this.axisX);
      this.axisX = null;
    }
    if (this.axisY !== null) {
      this.waveContainer.removeChild(this.axisY);
      this.axisY = null;
    }
  }

  // destroy()
  destroy() {
    this.wavesurfer.un("ready", this._onReady);
    this._removeAxisElements();
  }
}
module.exports = WaveSurferAxis;
