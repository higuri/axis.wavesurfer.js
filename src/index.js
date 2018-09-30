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
    this.wavesurfer = ws;
  }

  // init()
  init() {
    this._checkIfWSElementLoaded((wsElement) => {
      this._appendAxisElement(wsElement);
    });
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

  // _appendAxisElement()
  _appendAxisElement(wsElement) {
    const container = wsElement;
    const bounds = container.getBoundingClientRect();
    const axisY = document.createElement("div");
    axisY.style.cssText =
      "background-color: black;" +
      "position: absolute;" +
      `top: ${bounds.top}px;` +
      `left: ${bounds.left}px;` +
      `width: 1px;` +
      `height: ${container.offsetHeight}px;`;
    const axisX = document.createElement("div");
    axisX.style.cssText =
      "background-color: black;" +
      "position: absolute;" +
      `top: ${bounds.top + container.offsetHeight/2}px;` +
      `left: ${bounds.left}px;` +
      `width: ${container.offsetWidth}px;` +
      `height: 1px;`;
    document.body.appendChild(axisY);
    document.body.appendChild(axisX);
  }

  // destroy()
  destroy() { /* TODO */ }
}
module.exports = WaveSurferAxis;
