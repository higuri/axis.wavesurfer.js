import * as WaveSurfer from "wavesurfer.js";

// WaveSurferAxis
// TODO: fix d.ts:
// * class -> interface
// * WaveSurferPlugin.constructor
export default class WaveSurferAxis {

  // WaveSurferAxis.create()
  public static create(params: object): WaveSurfer.PluginDefinition {
    return {
      name: "axis",
      params: params,
      instance: WaveSurferAxis as { new(ws: WaveSurfer, params: object): WaveSurfer.WaveSurferPlugin }
    };
  }

  private wavesurfer: WaveSurfer;
  private waveContainer: HTMLElement | null = null;
  private axisX: HTMLDivElement | null = null;
  private axisY: HTMLDivElement | null = null;
  // options:
  private width: number = 1;
  private color: string = "black";
  private hideOnReady: boolean = false;

  // WaveSurferAxis()
  constructor(params: WaveSurferAxisOptions, ws: WaveSurfer) {
    this.wavesurfer = ws;
    if (params.width !== undefined) {
      this.width = params.width;
    }
    if (params.color !== undefined) {
      this.color = params.color;
    }
    if (params.hideOnReady !== undefined) {
      this.hideOnReady = params.hideOnReady;
    }
  }

  // init()
  public init() {
    this._checkIfWSElementLoaded((elem) => {
      this.waveContainer = elem;
      this._appendAxisElements();
    });
    this.wavesurfer.on("ready", () => { this._onReady(); });
  }

  // destroy()
  public destroy() {
    this.wavesurfer.un("ready", () => { this._onReady(); });
    this._removeAxisElements();
  }

  // _checkIfWSElementLoaded()
  private _checkIfWSElementLoaded(onLoaded: (elem: HTMLElement) => void) {
    const childNodes = this.wavesurfer.container.childNodes;
    if (0 < childNodes.length) {
      onLoaded(childNodes[0]);
    } else {
      window.setTimeout(() => {
        this._checkIfWSElementLoaded(onLoaded);
      }, 100);
    }
  }

  // _onReady()
  private _onReady(): void {
    if (this.hideOnReady) {
      this._removeAxisElements();
    } else {
      // redraw axes with consideration for scroll bar height
      this._appendAxisElements();
    }
  }

  // _appendAxisElements()
  private _appendAxisElements() {
    if (this.waveContainer === null) {
      return;
    }
    this._removeAxisElements();
    const axisX = document.createElement("div");
    const axisXTop =
      this.waveContainer.clientHeight / 2 - this.width / 2;
    axisX.style.cssText =
      `background-color: ${this.color};` +
      "position: absolute;" +
      `top: ${axisXTop}px;` +
      "left: 0px;" +
      `width: ${this.waveContainer.offsetWidth}px;` +
      `height: ${this.width}px;`;
    const axisY = document.createElement("div");
    axisY.style.cssText =
      `background-color: ${this.color};` +
      "position: absolute;" +
      "top: 0px;" +
      "left: 0px;" +
      `width: ${this.width}px;` +
      `height: ${this.waveContainer.clientHeight}px;`;
    this.axisX = axisX;
    this.axisY = axisY;
    this.waveContainer.appendChild(axisY);
    this.waveContainer.appendChild(axisX);
  }

  // _removeAxisElements()
  private _removeAxisElements() {
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
}

// WaveSurferAxisOptions
interface WaveSurferAxisOptions {
  // width of axes [px]
  width?: number;
  // color of axes [css format string]
  color?: string;
  // if true, hide axes when wav is loaded
  hideOnReady?: boolean;
}
module.exports = WaveSurferAxis;
