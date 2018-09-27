class WaveSurferAxis {
    constructor(ws, params) { }
    static create(params) {
        return {
            name: "axis",
            params: params,
            instance: WaveSurferAxis
        }
    }
    init() {}
    destroy() {}
    foo() { console.log("foo!!"); }
}
module.exports = WaveSurferAxis;
