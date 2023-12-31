import {
  CommonModule
} from "./chunk-ZOB57OV3.js";
import {
  Component,
  Input,
  NgModule,
  ViewChild,
  setClassMetadata,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-LSOSXUQ6.js";
import "./chunk-H4PBPCJR.js";
import "./chunk-OXCW2X5T.js";

// node_modules/.pnpm/@videogular+ngx-videogular@8.0.0_@angular+common@16.2.10_@angular+core@16.2.10_@angular+platf_gb3b7xycrrsivnsphc2tzdz42e/node_modules/@videogular/ngx-videogular/fesm2022/videogular-ngx-videogular-modulo.mjs
var _c0 = ["waveCanvas"];
var AudioContext = window["AudioContext"] || window["webkitAudioContext"];
var Gondolo = class _Gondolo {
  constructor(audio, ctx, opts) {
    if (!(this instanceof _Gondolo)) {
      return new _Gondolo(audio, ctx, opts);
    }
    if (!(ctx instanceof AudioContext)) {
      opts = ctx, ctx = null;
    }
    opts = opts || {};
    this.ctx = ctx = ctx || new AudioContext();
    if (!(audio instanceof AudioNode)) {
      audio = audio instanceof Audio || audio instanceof HTMLAudioElement ? ctx.createMediaElementSource(audio) : ctx.createMediaStreamSource(audio);
    }
    this.audioConfigStateResolver(ctx, opts, audio);
    this.audioConfigStateParser(ctx);
  }
  waveform(output, channel) {
    if (!output) {
      output = this.wavedata || (this.wavedata = new Uint8Array((this.analyser[0] || this.analyser).frequencyBinCount));
    }
    const analyser = this.stereo ? this.analyser[channel || 0] : this.analyser;
    analyser.getByteTimeDomainData(output);
    return output;
  }
  frequencies(output, channel) {
    if (!output) {
      output = this.freqdata || (this.freqdata = new Uint8Array((this.analyser[0] || this.analyser).frequencyBinCount));
    }
    const analyser = this.stereo ? this.analyser[channel || 0] : this.analyser;
    analyser.getByteFrequencyData(output);
    return output;
  }
  audioConfigStateResolver(ctx, opts, audio) {
    this.analyser = ctx.createAnalyser();
    this.stereo = !!opts.stereo;
    this.audible = opts.audible !== false;
    this.wavedata = null;
    this.freqdata = null;
    this.splitter = null;
    this.merger = null;
    this.source = audio;
  }
  audioConfigStateParser(ctx) {
    if (!this.stereo) {
      this.output = this.source;
      this.source.connect(this.analyser[0] || this.analyser);
      if (this.audible) {
        (this.analyser[0] || this.analyser).connect(ctx.destination);
      }
    } else {
      this.analyser = [this.analyser[0] || this.analyser];
      this.analyser.push(ctx.createAnalyser());
      this.splitter = ctx.createChannelSplitter(2);
      this.merger = ctx.createChannelMerger(2);
      this.output = this.merger;
      this.source.connect(this.splitter);
      for (let i = 0; i < 2; i++) {
        this.splitter.connect(this.analyser[i], i, 0);
        this.analyser[i].connect(this.merger, 0, i);
      }
      if (this.audible) {
        this.merger.connect(ctx.destination);
      }
    }
  }
};
var _VgModuloComponent = class _VgModuloComponent {
  startVisualizer() {
    if (!this._audioAnalyser) {
      this._audioAnalyser = new Gondolo(this.audioElement);
      const {
        width,
        height
      } = this.moduloConfig.dimensions;
      const canvasElement = this.waveCanvas.nativeElement;
      this._ctx = canvasElement.getContext("2d");
      canvasElement.width = width;
      canvasElement.height = height;
    }
    this.update();
  }
  update() {
    const audioFreq = this._audioAnalyser.waveform();
    const {
      fillStyle,
      strokeStyle,
      lineWidth,
      scaleFactor
    } = this.moduloConfig;
    const {
      width,
      height
    } = this.waveCanvas.nativeElement;
    this._ctx.fillStyle = fillStyle;
    this._ctx.fillRect(0, 0, width, height);
    this._ctx.strokeStyle = strokeStyle;
    this._ctx.lineWidth = lineWidth;
    this._ctx.beginPath();
    this._ctx.moveTo(0, height / 2 - audioFreq[0] * scaleFactor);
    for (let i = 0; i < audioFreq.length; i++) {
      this._ctx.lineTo(width / audioFreq.length * i, height / 2 - audioFreq[i] * scaleFactor);
    }
    this._ctx.moveTo(0, height / 2 + audioFreq[0] * scaleFactor);
    for (let i = 0; i < audioFreq.length; i++) {
      this._ctx.lineTo(width / audioFreq.length * i, height / 2 + audioFreq[i] * scaleFactor);
    }
    this._ctx.stroke();
    window.requestAnimationFrame(() => this.update());
  }
};
_VgModuloComponent.ɵfac = function VgModuloComponent_Factory(t) {
  return new (t || _VgModuloComponent)();
};
_VgModuloComponent.ɵcmp = ɵɵdefineComponent({
  type: _VgModuloComponent,
  selectors: [["vg-modulo"]],
  viewQuery: function VgModuloComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.waveCanvas = _t.first);
    }
  },
  inputs: {
    moduloConfig: "moduloConfig",
    audioElement: "audioElement"
  },
  decls: 2,
  vars: 0,
  consts: [["waveCanvas", ""]],
  template: function VgModuloComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "canvas", null, 0);
    }
  },
  encapsulation: 2
});
var VgModuloComponent = _VgModuloComponent;
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgModuloComponent, [{
    type: Component,
    args: [{
      selector: "vg-modulo",
      template: "<canvas #waveCanvas></canvas>\n"
    }]
  }], null, {
    moduloConfig: [{
      type: Input
    }],
    audioElement: [{
      type: Input
    }],
    waveCanvas: [{
      type: ViewChild,
      args: ["waveCanvas", {
        static: false
      }]
    }]
  });
})();
var _VgModuloModule = class _VgModuloModule {
};
_VgModuloModule.ɵfac = function VgModuloModule_Factory(t) {
  return new (t || _VgModuloModule)();
};
_VgModuloModule.ɵmod = ɵɵdefineNgModule({
  type: _VgModuloModule,
  declarations: [VgModuloComponent],
  imports: [CommonModule],
  exports: [VgModuloComponent]
});
_VgModuloModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var VgModuloModule = _VgModuloModule;
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgModuloModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [VgModuloComponent],
      exports: [VgModuloComponent]
    }]
  }], null, null);
})();
export {
  Gondolo,
  VgModuloComponent,
  VgModuloModule
};
//# sourceMappingURL=@videogular_ngx-videogular_modulo.js.map
