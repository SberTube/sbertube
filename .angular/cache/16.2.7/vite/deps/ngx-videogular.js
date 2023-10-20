import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-ZOB57OV3.js";
import {
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Injectable,
  Input,
  NgModule,
  Output,
  Pipe,
  ViewChild,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresolveDocument,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-LSOSXUQ6.js";
import {
  Observable,
  Subject,
  combineLatest,
  fromEvent,
  map,
  timer
} from "./chunk-H4PBPCJR.js";
import "./chunk-OXCW2X5T.js";

// node_modules/.pnpm/ngx-videogular@13.2.4_@angular+common@16.2.10_@angular+core@16.2.10_rxjs@7.8.1/node_modules/ngx-videogular/fesm2020/ngx-videogular.mjs
var _c0 = ["*"];
var _c1 = ["volumeBar"];
var _c2 = function(a0) {
  return {
    dragging: a0
  };
};
function VgScrubBarCuePoints_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 2);
  }
  if (rf & 2) {
    const cp_r1 = ctx.$implicit;
    ɵɵstyleProp("width", cp_r1.$$style == null ? null : cp_r1.$$style.width)("left", cp_r1.$$style == null ? null : cp_r1.$$style.left);
  }
}
function VgScrubBarCurrentTime_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 2);
  }
}
function VgTimeDisplay_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, "LIVE");
    ɵɵelementEnd();
  }
}
function VgTimeDisplay_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "vgUtc");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind2(2, 1, ctx_r1.getTime(), ctx_r1.vgFormat));
  }
}
function VgTrackSelector_option_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const track_r1 = ctx.$implicit;
    ɵɵproperty("value", track_r1.id)("selected", track_r1.selected === true);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", track_r1.label, " ");
  }
}
function VgQualitySelector_option_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const bitrate_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("value", bitrate_r1.qualityIndex.toString())("selected", bitrate_r1.qualityIndex === (ctx_r0.bitrateSelected == null ? null : ctx_r0.bitrateSelected.qualityIndex));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", bitrate_r1.label, " ");
  }
}
var VgStates = class {
};
VgStates.VG_ENDED = "ended";
VgStates.VG_PAUSED = "paused";
VgStates.VG_PLAYING = "playing";
VgStates.VG_LOADING = "waiting";
VgStates.ɵfac = function VgStates_Factory(t) {
  return new (t || VgStates)();
};
VgStates.ɵprov = ɵɵdefineInjectable({
  token: VgStates,
  factory: VgStates.ɵfac
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgStates, [{
    type: Injectable
  }], null, null);
})();
var VgAPI = class {
  constructor() {
    this.medias = {};
    this.playerReadyEvent = new EventEmitter(true);
    this.isPlayerReady = false;
  }
  onPlayerReady(fsAPI) {
    this.fsAPI = fsAPI;
    this.isPlayerReady = true;
    this.playerReadyEvent.emit(this);
  }
  getDefaultMedia() {
    for (const item in this.medias) {
      if (this.medias[item]) {
        return this.medias[item];
      }
    }
  }
  getMasterMedia() {
    let master;
    for (const id in this.medias) {
      if (this.medias[id].vgMaster === "true" || this.medias[id].vgMaster === true) {
        master = this.medias[id];
        break;
      }
    }
    return master || this.getDefaultMedia();
  }
  isMasterDefined() {
    let result = false;
    for (const id in this.medias) {
      if (this.medias[id].vgMaster === "true" || this.medias[id].vgMaster === true) {
        result = true;
        break;
      }
    }
    return result;
  }
  getMediaById(id = null) {
    let media = this.medias[id];
    if (!id || id === "*") {
      media = this;
    }
    return media;
  }
  play() {
    for (const id in this.medias) {
      if (this.medias[id]) {
        this.medias[id].play();
      }
    }
  }
  pause() {
    for (const id in this.medias) {
      if (this.medias[id]) {
        this.medias[id].pause();
      }
    }
  }
  get duration() {
    return this.$$getAllProperties("duration");
  }
  set currentTime(seconds) {
    this.$$setAllProperties("currentTime", seconds);
  }
  get currentTime() {
    return this.$$getAllProperties("currentTime");
  }
  set state(state) {
    this.$$setAllProperties("state", state);
  }
  get state() {
    return this.$$getAllProperties("state");
  }
  set volume(volume) {
    this.$$setAllProperties("volume", volume);
  }
  get volume() {
    return this.$$getAllProperties("volume");
  }
  set playbackRate(rate) {
    this.$$setAllProperties("playbackRate", rate);
  }
  get playbackRate() {
    return this.$$getAllProperties("playbackRate");
  }
  get canPlay() {
    return this.$$getAllProperties("canPlay");
  }
  get canPlayThrough() {
    return this.$$getAllProperties("canPlayThrough");
  }
  get isMetadataLoaded() {
    return this.$$getAllProperties("isMetadataLoaded");
  }
  get isWaiting() {
    return this.$$getAllProperties("isWaiting");
  }
  get isCompleted() {
    return this.$$getAllProperties("isCompleted");
  }
  get isLive() {
    return this.$$getAllProperties("isLive");
  }
  get isMaster() {
    return this.$$getAllProperties("isMaster");
  }
  get time() {
    return this.$$getAllProperties("time");
  }
  get buffer() {
    return this.$$getAllProperties("buffer");
  }
  get buffered() {
    return this.$$getAllProperties("buffered");
  }
  get subscriptions() {
    return this.$$getAllProperties("subscriptions");
  }
  get textTracks() {
    return this.$$getAllProperties("textTracks");
  }
  seekTime(value, byPercent = false) {
    for (const id in this.medias) {
      if (this.medias[id]) {
        this.$$seek(this.medias[id], value, byPercent);
      }
    }
  }
  $$seek(media, value, byPercent = false) {
    let second;
    let duration = media.duration;
    if (byPercent) {
      if (this.isMasterDefined()) {
        duration = this.getMasterMedia().duration;
      }
      second = value * duration / 100;
    } else {
      second = value;
    }
    media.currentTime = second;
  }
  addTextTrack(type, label, language) {
    for (const id in this.medias) {
      if (this.medias[id]) {
        this.$$addTextTrack(this.medias[id], type, label, language);
      }
    }
  }
  $$addTextTrack(media, type, label, language) {
    media.addTextTrack(type, label, language);
  }
  $$getAllProperties(property) {
    const medias = {};
    let result;
    for (const id in this.medias) {
      if (this.medias[id]) {
        medias[id] = this.medias[id];
      }
    }
    const nMedias = Object.keys(medias).length;
    switch (nMedias) {
      case 0:
        switch (property) {
          case "state":
            result = VgStates.VG_PAUSED;
            break;
          case "playbackRate":
          case "volume":
            result = 1;
            break;
          case "time":
            result = {
              current: 0,
              total: 0,
              left: 0
            };
            break;
        }
        break;
      case 1:
        const firstMediaId = Object.keys(medias)[0];
        result = medias[firstMediaId][property];
        break;
      default:
        const master = this.getMasterMedia();
        result = medias[master.id][property];
    }
    return result;
  }
  $$setAllProperties(property, value) {
    for (const id in this.medias) {
      if (this.medias[id]) {
        this.medias[id][property] = value;
      }
    }
  }
  registerElement(elem) {
    this.videogularElement = elem;
  }
  registerMedia(media) {
    this.medias[media.id] = media;
  }
  unregisterMedia(media) {
    delete this.medias[media.id];
  }
};
VgAPI.ɵfac = function VgAPI_Factory(t) {
  return new (t || VgAPI)();
};
VgAPI.ɵprov = ɵɵdefineInjectable({
  token: VgAPI,
  factory: VgAPI.ɵfac
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgAPI, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var VgBuffering = class {
  constructor(ref, API) {
    this.API = API;
    this.checkInterval = 50;
    this.currentPlayPos = 0;
    this.lastPlayPos = 0;
    this.subscriptions = [];
    this.isBuffering = false;
    this.elem = ref.nativeElement;
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
    this.subscriptions.push(this.target.subscriptions.bufferDetected.subscribe((isBuffering) => this.onUpdateBuffer(isBuffering)));
  }
  onUpdateBuffer(isBuffering) {
    this.isBuffering = isBuffering;
  }
  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
};
VgBuffering.ɵfac = function VgBuffering_Factory(t) {
  return new (t || VgBuffering)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(VgAPI));
};
VgBuffering.ɵcmp = ɵɵdefineComponent({
  type: VgBuffering,
  selectors: [["vg-buffering"]],
  hostVars: 2,
  hostBindings: function VgBuffering_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("is-buffering", ctx.isBuffering);
    }
  },
  inputs: {
    vgFor: "vgFor"
  },
  decls: 3,
  vars: 0,
  consts: [[1, "vg-buffering"], [1, "bufferingContainer"], [1, "loadingSpinner"]],
  template: function VgBuffering_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "div", 1);
      ɵɵelement(2, "div", 2);
      ɵɵelementEnd()();
    }
  },
  styles: ["vg-buffering{display:none;z-index:201}vg-buffering.is-buffering{display:block}.vg-buffering{position:absolute;display:block;width:100%;height:100%}.vg-buffering .bufferingContainer{width:100%;position:absolute;cursor:pointer;top:50%;margin-top:-50px;zoom:1;filter:alpha(opacity=60);opacity:.6}.vg-buffering .loadingSpinner{background-color:#0000;border:5px solid rgba(255,255,255,1);opacity:.9;border-top:5px solid rgba(0,0,0,0);border-left:5px solid rgba(0,0,0,0);border-radius:50px;box-shadow:0 0 35px #fff;width:50px;height:50px;margin:0 auto;-moz-animation:spin .5s infinite linear;-webkit-animation:spin .5s infinite linear}.vg-buffering .loadingSpinner .stop{-webkit-animation-play-state:paused;-moz-animation-play-state:paused}\n"],
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgBuffering, [{
    type: Component,
    args: [{
      selector: "vg-buffering",
      encapsulation: ViewEncapsulation$1.None,
      template: `<div class="vg-buffering">
            <div class="bufferingContainer">
                <div class="loadingSpinner"></div>
            </div>
        </div>`,
      styles: [`
        vg-buffering {
            display: none;
            z-index: 201;
        }
        vg-buffering.is-buffering {
            display: block;
        }

        .vg-buffering {
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
        }
        .vg-buffering .bufferingContainer {
            width: 100%;
            position: absolute;
            cursor: pointer;
            top: 50%;
            margin-top: -50px;
            zoom: 1;
            filter: alpha(opacity=60);
            opacity: 0.6;
        }
        /* Loading Spinner
        * http://www.alessioatzeni.com/blog/css3-loading-animation-loop/
        */
        .vg-buffering .loadingSpinner {
            background-color: rgba(0, 0, 0, 0);
            border: 5px solid rgba(255, 255, 255, 1);
            opacity: .9;
            border-top: 5px solid rgba(0, 0, 0, 0);
            border-left: 5px solid rgba(0, 0, 0, 0);
            border-radius: 50px;
            box-shadow: 0 0 35px #FFFFFF;
            width: 50px;
            height: 50px;
            margin: 0 auto;
            -moz-animation: spin .5s infinite linear;
            -webkit-animation: spin .5s infinite linear;
        }
        .vg-buffering .loadingSpinner .stop {
            -webkit-animation-play-state: paused;
            -moz-animation-play-state: paused;
        }
        @-moz-keyframes spin {
            0% {
                -moz-transform: rotate(0deg);
            }
            100% {
                -moz-transform: rotate(360deg);
            }
        }
        @-moz-keyframes spinoff {
            0% {
                -moz-transform: rotate(0deg);
            }
            100% {
                -moz-transform: rotate(-360deg);
            }
        }
        @-webkit-keyframes spin {
            0% {
                -webkit-transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
            }
        }
        @-webkit-keyframes spinoff {
            0% {
                -webkit-transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(-360deg);
            }
        }
    `]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: VgAPI
    }];
  }, {
    vgFor: [{
      type: Input
    }],
    isBuffering: [{
      type: HostBinding,
      args: ["class.is-buffering"]
    }]
  });
})();
var VgBufferingModule = class {
};
VgBufferingModule.ɵfac = function VgBufferingModule_Factory(t) {
  return new (t || VgBufferingModule)();
};
VgBufferingModule.ɵmod = ɵɵdefineNgModule({
  type: VgBufferingModule,
  declarations: [VgBuffering],
  imports: [CommonModule],
  exports: [VgBuffering]
});
VgBufferingModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgBufferingModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [VgBuffering],
      exports: [VgBuffering]
    }]
  }], null, null);
})();
var VgControlsHidden = class {
  constructor() {
    this.isHiddenSubject = new Subject();
    this.isHidden = this.isHiddenSubject.asObservable();
  }
  state(hidden) {
    this.isHiddenSubject.next(hidden);
  }
};
VgControlsHidden.ɵfac = function VgControlsHidden_Factory(t) {
  return new (t || VgControlsHidden)();
};
VgControlsHidden.ɵprov = ɵɵdefineInjectable({
  token: VgControlsHidden,
  factory: VgControlsHidden.ɵfac
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgControlsHidden, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var VgControls = class {
  constructor(API, ref, hidden) {
    this.API = API;
    this.ref = ref;
    this.hidden = hidden;
    this.isAdsPlaying = "initial";
    this.hideControls = false;
    this.vgAutohide = false;
    this.vgAutohideTime = 3;
    this.subscriptions = [];
    this.elem = ref.nativeElement;
  }
  ngOnInit() {
    this.mouseMove$ = fromEvent(this.API.videogularElement, "mousemove");
    this.subscriptions.push(this.mouseMove$.subscribe(this.show.bind(this)));
    this.touchStart$ = fromEvent(this.API.videogularElement, "touchstart");
    this.subscriptions.push(this.touchStart$.subscribe(this.show.bind(this)));
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
    this.subscriptions.push(this.target.subscriptions.play.subscribe(this.onPlay.bind(this)));
    this.subscriptions.push(this.target.subscriptions.pause.subscribe(this.onPause.bind(this)));
    this.subscriptions.push(this.target.subscriptions.startAds.subscribe(this.onStartAds.bind(this)));
    this.subscriptions.push(this.target.subscriptions.endAds.subscribe(this.onEndAds.bind(this)));
  }
  ngAfterViewInit() {
    if (this.vgAutohide) {
      this.hide();
    } else {
      this.show();
    }
  }
  onPlay() {
    if (this.vgAutohide) {
      this.hide();
    }
  }
  onPause() {
    clearTimeout(this.timer);
    this.hideControls = false;
    this.hidden.state(false);
  }
  onStartAds() {
    this.isAdsPlaying = "none";
  }
  onEndAds() {
    this.isAdsPlaying = "initial";
  }
  hide() {
    if (this.vgAutohide) {
      clearTimeout(this.timer);
      this.hideAsync();
    }
  }
  show() {
    clearTimeout(this.timer);
    this.hideControls = false;
    this.hidden.state(false);
    if (this.vgAutohide) {
      this.hideAsync();
    }
  }
  hideAsync() {
    if (this.API.state === VgStates.VG_PLAYING) {
      this.timer = setTimeout(() => {
        this.hideControls = true;
        this.hidden.state(true);
      }, this.vgAutohideTime * 1e3);
    }
  }
  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
};
VgControls.ɵfac = function VgControls_Factory(t) {
  return new (t || VgControls)(ɵɵdirectiveInject(VgAPI), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(VgControlsHidden));
};
VgControls.ɵcmp = ɵɵdefineComponent({
  type: VgControls,
  selectors: [["vg-controls"]],
  hostVars: 4,
  hostBindings: function VgControls_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("pointer-events", ctx.isAdsPlaying);
      ɵɵclassProp("hide", ctx.hideControls);
    }
  },
  inputs: {
    vgFor: "vgFor",
    vgAutohide: "vgAutohide",
    vgAutohideTime: "vgAutohideTime"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function VgControls_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["vg-controls{position:absolute;display:flex;width:100%;height:50px;z-index:300;bottom:0;background-color:#00000080;transition:bottom 1s}vg-controls.hide{bottom:-50px}\n"],
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgControls, [{
    type: Component,
    args: [{
      selector: "vg-controls",
      encapsulation: ViewEncapsulation$1.None,
      template: `<ng-content></ng-content>`,
      styles: [`
        vg-controls {
            position: absolute;
            display: flex;
            width: 100%;
            height: 50px;
            z-index: 300;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            -webkit-transition: bottom 1s;
            -khtml-transition: bottom 1s;
            -moz-transition: bottom 1s;
            -ms-transition: bottom 1s;
            transition: bottom 1s;
        }
        vg-controls.hide {
            bottom: -50px;
        }
    `]
    }]
  }], function() {
    return [{
      type: VgAPI
    }, {
      type: ElementRef
    }, {
      type: VgControlsHidden
    }];
  }, {
    isAdsPlaying: [{
      type: HostBinding,
      args: ["style.pointer-events"]
    }],
    hideControls: [{
      type: HostBinding,
      args: ["class.hide"]
    }],
    vgFor: [{
      type: Input
    }],
    vgAutohide: [{
      type: Input
    }],
    vgAutohideTime: [{
      type: Input
    }]
  });
})();
var VgUtils = class {
  /**
   * Inspired by Paul Irish
   * https://gist.github.com/paulirish/211209
   * @returns z-Index
   */
  static getZIndex() {
    let zIndex = 1;
    let elementZIndex;
    const tags = document.getElementsByTagName("*");
    for (let i = 0, l = tags.length; i < l; i++) {
      elementZIndex = parseInt(window.getComputedStyle(tags[i])["z-index"], 10);
      if (elementZIndex > zIndex) {
        zIndex = elementZIndex + 1;
      }
    }
    return zIndex;
  }
  // Very simple mobile detection, not 100% reliable
  static isMobileDevice() {
    return typeof window.orientation !== "undefined" || navigator.userAgent.indexOf("IEMobile") !== -1;
  }
  static isiOSDevice() {
    return navigator.userAgent.match(/ip(hone|ad|od)/i) && !navigator.userAgent.match(/(iemobile)[\/\s]?([\w\.]*)/i);
  }
  static isCordova() {
    return document.URL.indexOf("http://") === -1 && document.URL.indexOf("https://") === -1;
  }
};
VgUtils.ɵfac = function VgUtils_Factory(t) {
  return new (t || VgUtils)();
};
VgUtils.ɵprov = ɵɵdefineInjectable({
  token: VgUtils,
  factory: VgUtils.ɵfac,
  providedIn: "root"
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgUtils, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var VgFullscreenAPI = class {
  constructor() {
    this.nativeFullscreen = true;
    this.isFullscreen = false;
    this.onChangeFullscreen = new EventEmitter();
  }
  init(elem, medias) {
    this.videogularElement = elem;
    this.medias = medias;
    const APIs = {
      w3: {
        enabled: "fullscreenEnabled",
        element: "fullscreenElement",
        request: "requestFullscreen",
        exit: "exitFullscreen",
        onchange: "fullscreenchange",
        onerror: "fullscreenerror"
      },
      newWebkit: {
        enabled: "webkitFullscreenEnabled",
        element: "webkitFullscreenElement",
        request: "webkitRequestFullscreen",
        exit: "webkitExitFullscreen",
        onchange: "webkitfullscreenchange",
        onerror: "webkitfullscreenerror"
      },
      oldWebkit: {
        enabled: "webkitIsFullScreen",
        element: "webkitCurrentFullScreenElement",
        request: "webkitRequestFullScreen",
        exit: "webkitCancelFullScreen",
        onchange: "webkitfullscreenchange",
        onerror: "webkitfullscreenerror"
      },
      moz: {
        enabled: "mozFullScreen",
        element: "mozFullScreenElement",
        request: "mozRequestFullScreen",
        exit: "mozCancelFullScreen",
        onchange: "mozfullscreenchange",
        onerror: "mozfullscreenerror"
      },
      ios: {
        enabled: "webkitFullscreenEnabled",
        element: "webkitFullscreenElement",
        request: "webkitEnterFullscreen",
        exit: "webkitExitFullscreen",
        onchange: "webkitendfullscreen",
        onerror: "webkitfullscreenerror"
      },
      ms: {
        enabled: "msFullscreenEnabled",
        element: "msFullscreenElement",
        request: "msRequestFullscreen",
        exit: "msExitFullscreen",
        onchange: "MSFullscreenChange",
        onerror: "MSFullscreenError"
      }
    };
    for (const browser in APIs) {
      if (APIs[browser].enabled in document) {
        this.polyfill = APIs[browser];
        break;
      }
    }
    if (VgUtils.isiOSDevice()) {
      this.polyfill = APIs.ios;
    }
    this.isAvailable = this.polyfill != null;
    if (this.polyfill == null) {
      return;
    }
    let fsElemDispatcher;
    switch (this.polyfill.onchange) {
      case "mozfullscreenchange":
        fsElemDispatcher = document;
        break;
      case "webkitendfullscreen":
        fsElemDispatcher = this.medias.toArray()[0].elem;
        break;
      default:
        fsElemDispatcher = elem;
    }
    this.fsChangeSubscription = fromEvent(fsElemDispatcher, this.polyfill.onchange).subscribe(() => {
      this.onFullscreenChange();
    });
  }
  onFullscreenChange() {
    this.isFullscreen = !!document[this.polyfill.element];
    this.onChangeFullscreen.emit(this.isFullscreen);
  }
  toggleFullscreen(element = null) {
    if (this.isFullscreen) {
      this.exit();
    } else {
      this.request(element);
    }
  }
  request(elem) {
    if (!elem) {
      elem = this.videogularElement;
    }
    this.isFullscreen = true;
    this.onChangeFullscreen.emit(true);
    if (this.isAvailable && this.nativeFullscreen) {
      if (VgUtils.isMobileDevice()) {
        if (!this.polyfill.enabled && elem === this.videogularElement || VgUtils.isiOSDevice()) {
          elem = this.medias.toArray()[0].elem;
        }
        this.enterElementInFullScreen(elem);
      } else {
        this.enterElementInFullScreen(this.videogularElement);
      }
    }
  }
  enterElementInFullScreen(elem) {
    elem[this.polyfill.request]();
  }
  exit() {
    this.isFullscreen = false;
    this.onChangeFullscreen.emit(false);
    if (this.isAvailable && this.nativeFullscreen) {
      document[this.polyfill.exit]();
    }
  }
};
VgFullscreenAPI.ɵfac = function VgFullscreenAPI_Factory(t) {
  return new (t || VgFullscreenAPI)();
};
VgFullscreenAPI.ɵprov = ɵɵdefineInjectable({
  token: VgFullscreenAPI,
  factory: VgFullscreenAPI.ɵfac
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgFullscreenAPI, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var VgFullscreen = class {
  constructor(ref, API, fsAPI) {
    this.API = API;
    this.fsAPI = fsAPI;
    this.isFullscreen = false;
    this.subscriptions = [];
    this.ariaValue = "normal mode";
    this.elem = ref.nativeElement;
    this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
  }
  onChangeFullscreen(fsState) {
    this.ariaValue = fsState ? "fullscren mode" : "normal mode";
    this.isFullscreen = fsState;
  }
  onClick() {
    this.changeFullscreenState();
  }
  onKeyDown(event) {
    if (event.keyCode === 13 || event.keyCode === 32) {
      event.preventDefault();
      this.changeFullscreenState();
    }
  }
  changeFullscreenState() {
    let element = this.target;
    if (this.target instanceof VgAPI) {
      element = null;
    }
    this.fsAPI.toggleFullscreen(element);
  }
  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
};
VgFullscreen.ɵfac = function VgFullscreen_Factory(t) {
  return new (t || VgFullscreen)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(VgAPI), ɵɵdirectiveInject(VgFullscreenAPI));
};
VgFullscreen.ɵcmp = ɵɵdefineComponent({
  type: VgFullscreen,
  selectors: [["vg-fullscreen"]],
  hostBindings: function VgFullscreen_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function VgFullscreen_click_HostBindingHandler() {
        return ctx.onClick();
      })("keydown", function VgFullscreen_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
  },
  decls: 1,
  vars: 5,
  consts: [["tabindex", "0", "role", "button", "aria-label", "fullscreen button", 1, "icon"]],
  template: function VgFullscreen_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 0);
    }
    if (rf & 2) {
      ɵɵclassProp("vg-icon-fullscreen", !ctx.isFullscreen)("vg-icon-fullscreen_exit", ctx.isFullscreen);
      ɵɵattribute("aria-valuetext", ctx.ariaValue);
    }
  },
  styles: ["vg-fullscreen{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;display:flex;justify-content:center;height:50px;width:50px;cursor:pointer;color:#fff;line-height:50px}vg-fullscreen .icon{pointer-events:none}\n"],
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgFullscreen, [{
    type: Component,
    args: [{
      selector: "vg-fullscreen",
      encapsulation: ViewEncapsulation$1.None,
      template: `
        <div class="icon"
             [class.vg-icon-fullscreen]="!isFullscreen"
             [class.vg-icon-fullscreen_exit]="isFullscreen"
             tabindex="0"
             role="button"
             aria-label="fullscreen button"
             [attr.aria-valuetext]="ariaValue">
        </div>`,
      styles: [`
        vg-fullscreen {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            display: flex;
            justify-content: center;
            height: 50px;
            width: 50px;
            cursor: pointer;
            color: white;
            line-height: 50px;
        }

        vg-fullscreen .icon {
            pointer-events: none;
        }
    `]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: VgAPI
    }, {
      type: VgFullscreenAPI
    }];
  }, {
    onClick: [{
      type: HostListener,
      args: ["click"]
    }],
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var VgMute = class {
  constructor(ref, API) {
    this.API = API;
    this.subscriptions = [];
    this.ariaValue = "unmuted";
    this.elem = ref.nativeElement;
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
    this.currentVolume = this.target.volume;
  }
  onClick() {
    this.changeMuteState();
  }
  onKeyDown(event) {
    if (event.keyCode === 13 || event.keyCode === 32) {
      event.preventDefault();
      this.changeMuteState();
    }
  }
  changeMuteState() {
    const volume = this.getVolume();
    if (volume === 0) {
      if (this.target.volume === 0 && this.currentVolume === 0) {
        this.currentVolume = 1;
      }
      this.target.volume = this.currentVolume;
    } else {
      this.currentVolume = volume;
      this.target.volume = 0;
    }
  }
  getVolume() {
    const volume = this.target ? this.target.volume : 0;
    this.ariaValue = volume ? "unmuted" : "muted";
    return volume;
  }
  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
};
VgMute.ɵfac = function VgMute_Factory(t) {
  return new (t || VgMute)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(VgAPI));
};
VgMute.ɵcmp = ɵɵdefineComponent({
  type: VgMute,
  selectors: [["vg-mute"]],
  hostBindings: function VgMute_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function VgMute_click_HostBindingHandler() {
        return ctx.onClick();
      })("keydown", function VgMute_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
  },
  inputs: {
    vgFor: "vgFor"
  },
  decls: 1,
  vars: 9,
  consts: [["tabindex", "0", "role", "button", "aria-label", "mute button", 1, "icon"]],
  template: function VgMute_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 0);
    }
    if (rf & 2) {
      ɵɵclassProp("vg-icon-volume_up", ctx.getVolume() >= 0.75)("vg-icon-volume_down", ctx.getVolume() >= 0.25 && ctx.getVolume() < 0.75)("vg-icon-volume_mute", ctx.getVolume() > 0 && ctx.getVolume() < 0.25)("vg-icon-volume_off", ctx.getVolume() === 0);
      ɵɵattribute("aria-valuetext", ctx.ariaValue);
    }
  },
  styles: ["vg-mute{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;display:flex;justify-content:center;height:50px;width:50px;cursor:pointer;color:#fff;line-height:50px}vg-mute .icon{pointer-events:none}\n"],
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgMute, [{
    type: Component,
    args: [{
      selector: "vg-mute",
      encapsulation: ViewEncapsulation$1.None,
      template: `
        <div class="icon"
             [class.vg-icon-volume_up]="getVolume() >= 0.75"
             [class.vg-icon-volume_down]="getVolume() >= 0.25 && getVolume() < 0.75"
             [class.vg-icon-volume_mute]="getVolume() > 0 && getVolume() < 0.25"
             [class.vg-icon-volume_off]="getVolume() === 0"
             tabindex="0"
             role="button"
             aria-label="mute button"
             [attr.aria-valuetext]="ariaValue">
        </div>`,
      styles: [`
        vg-mute {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            display: flex;
            justify-content: center;
            height: 50px;
            width: 50px;
            cursor: pointer;
            color: white;
            line-height: 50px;
        }
        vg-mute .icon {
            pointer-events: none;
        }
    `]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: VgAPI
    }];
  }, {
    vgFor: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }],
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var VgVolume = class {
  constructor(ref, API) {
    this.API = API;
    this.subscriptions = [];
    this.elem = ref.nativeElement;
    this.isDragging = false;
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
    this.ariaValue = this.getVolume() * 100;
  }
  onClick(event) {
    this.setVolume(this.calculateVolume(event.clientX));
  }
  onMouseDown(event) {
    this.mouseDownPosX = event.clientX;
    this.isDragging = true;
  }
  onDrag(event) {
    if (this.isDragging) {
      this.setVolume(this.calculateVolume(event.clientX));
    }
  }
  onStopDrag(event) {
    if (this.isDragging) {
      this.isDragging = false;
      if (this.mouseDownPosX === event.clientX) {
        this.setVolume(this.calculateVolume(event.clientX));
      }
    }
  }
  arrowAdjustVolume(event) {
    if (event.keyCode === 38 || event.keyCode === 39) {
      event.preventDefault();
      this.setVolume(Math.max(0, Math.min(100, this.getVolume() * 100 + 10)));
    } else if (event.keyCode === 37 || event.keyCode === 40) {
      event.preventDefault();
      this.setVolume(Math.max(0, Math.min(100, this.getVolume() * 100 - 10)));
    }
  }
  calculateVolume(mousePosX) {
    const recObj = this.volumeBarRef.nativeElement.getBoundingClientRect();
    const volumeBarOffsetLeft = recObj.left;
    const volumeBarWidth = recObj.width;
    return (mousePosX - volumeBarOffsetLeft) / volumeBarWidth * 100;
  }
  setVolume(vol) {
    this.target.volume = Math.max(0, Math.min(1, vol / 100));
    this.ariaValue = this.target.volume * 100;
  }
  getVolume() {
    return this.target ? this.target.volume : 0;
  }
  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
};
VgVolume.ɵfac = function VgVolume_Factory(t) {
  return new (t || VgVolume)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(VgAPI));
};
VgVolume.ɵcmp = ɵɵdefineComponent({
  type: VgVolume,
  selectors: [["vg-volume"]],
  viewQuery: function VgVolume_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c1, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.volumeBarRef = _t.first);
    }
  },
  hostBindings: function VgVolume_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mousemove", function VgVolume_mousemove_HostBindingHandler($event) {
        return ctx.onDrag($event);
      }, false, ɵɵresolveDocument)("mouseup", function VgVolume_mouseup_HostBindingHandler($event) {
        return ctx.onStopDrag($event);
      }, false, ɵɵresolveDocument)("keydown", function VgVolume_keydown_HostBindingHandler($event) {
        return ctx.arrowAdjustVolume($event);
      });
    }
  },
  inputs: {
    vgFor: "vgFor"
  },
  decls: 5,
  vars: 9,
  consts: [["tabindex", "0", "role", "slider", "aria-label", "volume level", "aria-level", "polite", "aria-valuemin", "0", "aria-valuemax", "100", "aria-orientation", "horizontal", 1, "volumeBar", 3, "click", "mousedown"], ["volumeBar", ""], [1, "volumeBackground", 3, "ngClass"], [1, "volumeValue"], [1, "volumeKnob"]],
  template: function VgVolume_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0, 1);
      ɵɵlistener("click", function VgVolume_Template_div_click_0_listener($event) {
        return ctx.onClick($event);
      })("mousedown", function VgVolume_Template_div_mousedown_0_listener($event) {
        return ctx.onMouseDown($event);
      });
      ɵɵelementStart(2, "div", 2);
      ɵɵelement(3, "div", 3)(4, "div", 4);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵattribute("aria-valuenow", ctx.ariaValue)("aria-valuetext", ctx.ariaValue + "%");
      ɵɵadvance(2);
      ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c2, ctx.isDragging));
      ɵɵadvance(1);
      ɵɵstyleProp("width", ctx.getVolume() * (100 - 15) + "%");
      ɵɵadvance(1);
      ɵɵstyleProp("left", ctx.getVolume() * (100 - 15) + "%");
    }
  },
  dependencies: [NgClass],
  styles: ["vg-volume{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;display:flex;justify-content:center;height:50px;width:100px;cursor:pointer;color:#fff;line-height:50px}vg-volume .volumeBar{position:relative;display:flex;flex-grow:1;align-items:center}vg-volume .volumeBackground{display:flex;flex-grow:1;height:5px;pointer-events:none;background-color:#333}vg-volume .volumeValue{display:flex;height:5px;pointer-events:none;background-color:#fff;transition:all .2s ease-out}vg-volume .volumeKnob{position:absolute;width:15px;height:15px;left:0;top:50%;transform:translateY(-50%);border-radius:15px;pointer-events:none;background-color:#fff;transition:all .2s ease-out}vg-volume .volumeBackground.dragging .volumeValue,vg-volume .volumeBackground.dragging .volumeKnob{transition:none}\n"],
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgVolume, [{
    type: Component,
    args: [{
      selector: "vg-volume",
      encapsulation: ViewEncapsulation$1.None,
      template: `
        <div
            #volumeBar
            class="volumeBar"
            tabindex="0"
            role="slider"
            aria-label="volume level"
            aria-level="polite"
            [attr.aria-valuenow]="ariaValue"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-orientation="horizontal"
            [attr.aria-valuetext]="ariaValue + '%'"
            (click)="onClick($event)"
            (mousedown)="onMouseDown($event)">
            <div class="volumeBackground" [ngClass]="{dragging: isDragging}">
                <div class="volumeValue" [style.width]="(getVolume() * (100-15)) + '%'"></div>
                <div class="volumeKnob" [style.left]="(getVolume() * (100-15)) + '%'"></div>
            </div>
        </div>
    `,
      styles: [`
        vg-volume {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            display: flex;
            justify-content: center;
            height: 50px;
            width: 100px;
            cursor: pointer;
            color: white;
            line-height: 50px;
        }
        vg-volume .volumeBar {
            position: relative;
            display: flex;
            flex-grow: 1;
            align-items: center;
        }
        vg-volume .volumeBackground {
            display: flex;
            flex-grow: 1;
            height: 5px;
            pointer-events: none;
            background-color: #333;
        }
        vg-volume .volumeValue {
            display: flex;
            height: 5px;
            pointer-events: none;
            background-color: #FFF;
            transition:all 0.2s ease-out;
        }
        vg-volume .volumeKnob {
            position: absolute;
            width: 15px; height: 15px;
            left: 0; top: 50%;
            transform: translateY(-50%);
            border-radius: 15px;
            pointer-events: none;
            background-color: #FFF;
            transition:all 0.2s ease-out;
        }
        vg-volume .volumeBackground.dragging .volumeValue,
        vg-volume .volumeBackground.dragging .volumeKnob {
            transition: none;
        }
    `]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: VgAPI
    }];
  }, {
    vgFor: [{
      type: Input
    }],
    volumeBarRef: [{
      type: ViewChild,
      args: ["volumeBar", {
        static: true
      }]
    }],
    onDrag: [{
      type: HostListener,
      args: ["document:mousemove", ["$event"]]
    }],
    onStopDrag: [{
      type: HostListener,
      args: ["document:mouseup", ["$event"]]
    }],
    arrowAdjustVolume: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var VgPlayPause = class {
  constructor(ref, API) {
    this.API = API;
    this.subscriptions = [];
    this.ariaValue = VgStates.VG_PAUSED;
    this.elem = ref.nativeElement;
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
  }
  onClick() {
    this.playPause();
  }
  onKeyDown(event) {
    if (event.keyCode === 13 || event.keyCode === 32) {
      event.preventDefault();
      this.playPause();
    }
  }
  playPause() {
    const state = this.getState();
    switch (state) {
      case VgStates.VG_PLAYING:
        this.target.pause();
        break;
      case VgStates.VG_PAUSED:
      case VgStates.VG_ENDED:
        this.target.play();
        break;
    }
  }
  getState() {
    this.ariaValue = this.target ? this.target.state : VgStates.VG_PAUSED;
    return this.ariaValue;
  }
  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
};
VgPlayPause.ɵfac = function VgPlayPause_Factory(t) {
  return new (t || VgPlayPause)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(VgAPI));
};
VgPlayPause.ɵcmp = ɵɵdefineComponent({
  type: VgPlayPause,
  selectors: [["vg-play-pause"]],
  hostBindings: function VgPlayPause_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function VgPlayPause_click_HostBindingHandler() {
        return ctx.onClick();
      })("keydown", function VgPlayPause_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
  },
  inputs: {
    vgFor: "vgFor"
  },
  decls: 1,
  vars: 6,
  consts: [["tabindex", "0", "role", "button", 1, "icon"]],
  template: function VgPlayPause_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 0);
    }
    if (rf & 2) {
      ɵɵclassProp("vg-icon-pause", ctx.getState() === "playing")("vg-icon-play_arrow", ctx.getState() === "paused" || ctx.getState() === "ended");
      ɵɵattribute("aria-label", ctx.getState() === "paused" ? "play" : "pause")("aria-valuetext", ctx.ariaValue);
    }
  },
  styles: ["vg-play-pause{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;display:flex;justify-content:center;height:50px;width:50px;cursor:pointer;color:#fff;line-height:50px}vg-play-pause .icon{pointer-events:none}\n"],
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgPlayPause, [{
    type: Component,
    args: [{
      selector: "vg-play-pause",
      encapsulation: ViewEncapsulation$1.None,
      template: `
        <div class="icon"
             [class.vg-icon-pause]="getState() === 'playing'"
             [class.vg-icon-play_arrow]="getState() === 'paused' || getState() === 'ended'"
             tabindex="0"
             role="button"
             [attr.aria-label]="getState() === 'paused'?'play':'pause'"
             [attr.aria-valuetext]="ariaValue">
        </div>`,
      styles: [`
        vg-play-pause {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            display: flex;
            justify-content: center;
            height: 50px;
            width: 50px;
            cursor: pointer;
            color: white;
            line-height: 50px;
        }
        vg-play-pause .icon {
            pointer-events: none;
        }
    `]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: VgAPI
    }];
  }, {
    vgFor: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }],
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var VgPlaybackButton = class {
  constructor(ref, API) {
    this.API = API;
    this.subscriptions = [];
    this.ariaValue = 1;
    this.elem = ref.nativeElement;
    this.playbackValues = ["0.5", "1.0", "1.5", "2.0"];
    this.playbackIndex = 1;
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
  }
  onClick() {
    this.updatePlaybackSpeed();
  }
  onKeyDown(event) {
    if (event.keyCode === 13 || event.keyCode === 32) {
      event.preventDefault();
      this.updatePlaybackSpeed();
    }
  }
  updatePlaybackSpeed() {
    this.playbackIndex = ++this.playbackIndex % this.playbackValues.length;
    if (this.target instanceof VgAPI) {
      this.target.playbackRate = this.playbackValues[this.playbackIndex];
    } else {
      this.target.playbackRate[this.vgFor] = this.playbackValues[this.playbackIndex];
    }
  }
  getPlaybackRate() {
    this.ariaValue = this.target ? this.target.playbackRate : 1;
    return this.ariaValue;
  }
  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
};
VgPlaybackButton.ɵfac = function VgPlaybackButton_Factory(t) {
  return new (t || VgPlaybackButton)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(VgAPI));
};
VgPlaybackButton.ɵcmp = ɵɵdefineComponent({
  type: VgPlaybackButton,
  selectors: [["vg-playback-button"]],
  hostBindings: function VgPlaybackButton_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function VgPlaybackButton_click_HostBindingHandler() {
        return ctx.onClick();
      })("keydown", function VgPlaybackButton_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
  },
  inputs: {
    vgFor: "vgFor",
    playbackValues: "playbackValues"
  },
  decls: 2,
  vars: 2,
  consts: [["tabindex", "0", "role", "button", "aria-label", "playback speed button", 1, "button"]],
  template: function VgPlaybackButton_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "span", 0);
      ɵɵtext(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵattribute("aria-valuetext", ctx.ariaValue);
      ɵɵadvance(1);
      ɵɵtextInterpolate1(" ", ctx.getPlaybackRate(), "x ");
    }
  },
  styles: ["vg-playback-button{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;display:flex;justify-content:center;height:50px;width:50px;cursor:pointer;color:#fff;line-height:50px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}vg-playback-button .button{display:flex;align-items:center;justify-content:center;width:50px}\n"],
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgPlaybackButton, [{
    type: Component,
    args: [{
      selector: "vg-playback-button",
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <span class="button"
          tabindex="0"
          role="button"
          aria-label="playback speed button"
          [attr.aria-valuetext]="ariaValue">
        {{getPlaybackRate()}}x
    </span>`,
      styles: [`
        vg-playback-button {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            display: flex;
            justify-content: center;
            height: 50px;
            width: 50px;
            cursor: pointer;
            color: white;
            line-height: 50px;
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        }
        vg-playback-button .button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
        }
    `]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: VgAPI
    }];
  }, {
    vgFor: [{
      type: Input
    }],
    playbackValues: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }],
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var VgScrubBar = class {
  constructor(ref, API, vgControlsHiddenState) {
    this.API = API;
    this.hideScrubBar = false;
    this.vgSlider = true;
    this.isSeeking = false;
    this.wasPlaying = false;
    this.subscriptions = [];
    this.elem = ref.nativeElement;
    this.subscriptions.push(vgControlsHiddenState.isHidden.subscribe((hide) => this.onHideScrubBar(hide)));
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
  }
  seekStart() {
    if (this.target.canPlay) {
      this.isSeeking = true;
      if (this.target.state === VgStates.VG_PLAYING) {
        this.wasPlaying = true;
      }
      this.target.pause();
    }
  }
  seekMove(offset) {
    if (this.isSeeking) {
      const percentage = Math.max(Math.min(offset * 100 / this.elem.scrollWidth, 99.9), 0);
      this.target.time.current = percentage * this.target.time.total / 100;
      this.target.seekTime(percentage, true);
    }
  }
  seekEnd(offset) {
    this.isSeeking = false;
    if (this.target.canPlay) {
      const percentage = Math.max(Math.min(offset * 100 / this.elem.scrollWidth, 99.9), 0);
      this.target.seekTime(percentage, true);
      if (this.wasPlaying) {
        this.wasPlaying = false;
        this.target.play();
      }
    }
  }
  touchEnd() {
    this.isSeeking = false;
    if (this.wasPlaying) {
      this.wasPlaying = false;
      this.target.play();
    }
  }
  getTouchOffset(event) {
    let offsetLeft = 0;
    let element = event.target;
    while (element) {
      offsetLeft += element.offsetLeft;
      element = element.offsetParent;
    }
    return event.touches[0].pageX - offsetLeft;
  }
  onMouseDownScrubBar($event) {
    if (this.target) {
      if (!this.target.isLive) {
        if (!this.vgSlider) {
          this.seekEnd($event.offsetX);
        } else {
          this.seekStart();
        }
      }
    }
  }
  onMouseMoveScrubBar($event) {
    if (this.target) {
      if (!this.target.isLive && this.vgSlider && this.isSeeking) {
        this.seekMove($event.offsetX);
      }
    }
  }
  onMouseUpScrubBar($event) {
    if (this.target) {
      if (!this.target.isLive && this.vgSlider && this.isSeeking) {
        this.seekEnd($event.offsetX);
      }
    }
  }
  onTouchStartScrubBar($event) {
    if (this.target) {
      if (!this.target.isLive) {
        if (!this.vgSlider) {
          this.seekEnd(this.getTouchOffset($event));
        } else {
          this.seekStart();
        }
      }
    }
  }
  onTouchMoveScrubBar($event) {
    if (this.target) {
      if (!this.target.isLive && this.vgSlider && this.isSeeking) {
        this.seekMove(this.getTouchOffset($event));
      }
    }
  }
  // @ts-ignore
  onTouchCancelScrubBar($event) {
    if (this.target) {
      if (!this.target.isLive && this.vgSlider && this.isSeeking) {
        this.touchEnd();
      }
    }
  }
  // @ts-ignore
  onTouchEndScrubBar($event) {
    if (this.target) {
      if (!this.target.isLive && this.vgSlider && this.isSeeking) {
        this.touchEnd();
      }
    }
  }
  arrowAdjustVolume(event) {
    if (this.target) {
      if (event.keyCode === 38 || event.keyCode === 39) {
        event.preventDefault();
        this.target.seekTime((this.target.time.current + 5e3) / 1e3, false);
      } else if (event.keyCode === 37 || event.keyCode === 40) {
        event.preventDefault();
        this.target.seekTime((this.target.time.current - 5e3) / 1e3, false);
      }
    }
  }
  getPercentage() {
    return this.target ? this.target.time.current * 100 / this.target.time.total + "%" : "0%";
  }
  onHideScrubBar(hide) {
    this.hideScrubBar = hide;
  }
  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
};
VgScrubBar.ɵfac = function VgScrubBar_Factory(t) {
  return new (t || VgScrubBar)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(VgAPI), ɵɵdirectiveInject(VgControlsHidden));
};
VgScrubBar.ɵcmp = ɵɵdefineComponent({
  type: VgScrubBar,
  selectors: [["vg-scrub-bar"]],
  hostVars: 2,
  hostBindings: function VgScrubBar_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mousedown", function VgScrubBar_mousedown_HostBindingHandler($event) {
        return ctx.onMouseDownScrubBar($event);
      })("mousemove", function VgScrubBar_mousemove_HostBindingHandler($event) {
        return ctx.onMouseMoveScrubBar($event);
      }, false, ɵɵresolveDocument)("mouseup", function VgScrubBar_mouseup_HostBindingHandler($event) {
        return ctx.onMouseUpScrubBar($event);
      }, false, ɵɵresolveDocument)("touchstart", function VgScrubBar_touchstart_HostBindingHandler($event) {
        return ctx.onTouchStartScrubBar($event);
      })("touchmove", function VgScrubBar_touchmove_HostBindingHandler($event) {
        return ctx.onTouchMoveScrubBar($event);
      }, false, ɵɵresolveDocument)("touchcancel", function VgScrubBar_touchcancel_HostBindingHandler($event) {
        return ctx.onTouchCancelScrubBar($event);
      }, false, ɵɵresolveDocument)("touchend", function VgScrubBar_touchend_HostBindingHandler($event) {
        return ctx.onTouchEndScrubBar($event);
      }, false, ɵɵresolveDocument)("keydown", function VgScrubBar_keydown_HostBindingHandler($event) {
        return ctx.arrowAdjustVolume($event);
      });
    }
    if (rf & 2) {
      ɵɵclassProp("hide", ctx.hideScrubBar);
    }
  },
  inputs: {
    vgFor: "vgFor",
    vgSlider: "vgSlider"
  },
  ngContentSelectors: _c0,
  decls: 2,
  vars: 2,
  consts: [["tabindex", "0", "role", "slider", "aria-label", "scrub bar", "aria-level", "polite", "aria-valuemin", "0", "aria-valuemax", "100", 1, "scrubBar"]],
  template: function VgScrubBar_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵattribute("aria-valuenow", ctx.getPercentage())("aria-valuetext", ctx.getPercentage() + "%");
    }
  },
  styles: ["vg-scrub-bar{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;position:absolute;width:100%;height:5px;bottom:50px;margin:0;cursor:pointer;align-items:center;background:rgba(0,0,0,.75);z-index:250;transition:bottom 1s,opacity .5s}vg-scrub-bar .scrubBar{position:relative;display:flex;flex-grow:1;align-items:center;height:100%}vg-controls vg-scrub-bar{position:relative;bottom:0;background:transparent;height:50px;flex-grow:1;flex-basis:0;margin:0 10px;transition:initial}vg-scrub-bar.hide{bottom:0;opacity:0}vg-controls vg-scrub-bar.hide{bottom:initial;opacity:initial}\n"],
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgScrubBar, [{
    type: Component,
    args: [{
      selector: "vg-scrub-bar",
      encapsulation: ViewEncapsulation$1.None,
      template: `
        <div class="scrubBar"
             tabindex="0"
             role="slider"
             aria-label="scrub bar"
             aria-level="polite"
             [attr.aria-valuenow]="getPercentage()"
             aria-valuemin="0"
             aria-valuemax="100"
             [attr.aria-valuetext]="getPercentage() + '%'">
            <ng-content></ng-content>
        </div>
    `,
      styles: [`
        vg-scrub-bar {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            position: absolute;
            width: 100%;
            height: 5px;
            bottom: 50px;
            margin: 0;
            cursor: pointer;
            align-items: center;
            background: rgba(0, 0, 0, 0.75);
            z-index: 250;
            -webkit-transition: bottom 1s, opacity 0.5s;
            -khtml-transition: bottom 1s, opacity 0.5s;
            -moz-transition: bottom 1s, opacity 0.5s;
            -ms-transition: bottom 1s, opacity 0.5s;
            transition: bottom 1s, opacity 0.5s;
        }
        vg-scrub-bar .scrubBar {
            position: relative;
            display: flex;
            flex-grow: 1;
            align-items: center;
            height: 100%;
        }
        vg-controls vg-scrub-bar {
            position: relative;
            bottom: 0;
            background: transparent;
            height: 50px;
            flex-grow: 1;
            flex-basis: 0;
            margin: 0 10px;
            -webkit-transition: initial;
            -khtml-transition: initial;
            -moz-transition: initial;
            -ms-transition: initial;
            transition: initial;
        }
        vg-scrub-bar.hide {
            bottom: 0;
            opacity: 0;
        }
        vg-controls vg-scrub-bar.hide {
            bottom: initial;
            opacity: initial;
        }
    `]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: VgAPI
    }, {
      type: VgControlsHidden
    }];
  }, {
    hideScrubBar: [{
      type: HostBinding,
      args: ["class.hide"]
    }],
    vgFor: [{
      type: Input
    }],
    vgSlider: [{
      type: Input
    }],
    onMouseDownScrubBar: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }],
    onMouseMoveScrubBar: [{
      type: HostListener,
      args: ["document:mousemove", ["$event"]]
    }],
    onMouseUpScrubBar: [{
      type: HostListener,
      args: ["document:mouseup", ["$event"]]
    }],
    onTouchStartScrubBar: [{
      type: HostListener,
      args: ["touchstart", ["$event"]]
    }],
    onTouchMoveScrubBar: [{
      type: HostListener,
      args: ["document:touchmove", ["$event"]]
    }],
    onTouchCancelScrubBar: [{
      type: HostListener,
      args: ["document:touchcancel", ["$event"]]
    }],
    onTouchEndScrubBar: [{
      type: HostListener,
      args: ["document:touchend", ["$event"]]
    }],
    arrowAdjustVolume: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var VgScrubBarBufferingTime = class {
  constructor(ref, API) {
    this.API = API;
    this.subscriptions = [];
    this.elem = ref.nativeElement;
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
  }
  getBufferTime() {
    let bufferTime = "0%";
    if (this.target && this.target.buffer && this.target.buffered.length) {
      if (this.target.time.total === 0) {
        bufferTime = "0%";
      } else {
        bufferTime = this.target.buffer.end / this.target.time.total * 100 + "%";
      }
    }
    return bufferTime;
  }
  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
};
VgScrubBarBufferingTime.ɵfac = function VgScrubBarBufferingTime_Factory(t) {
  return new (t || VgScrubBarBufferingTime)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(VgAPI));
};
VgScrubBarBufferingTime.ɵcmp = ɵɵdefineComponent({
  type: VgScrubBarBufferingTime,
  selectors: [["vg-scrub-bar-buffering-time"]],
  inputs: {
    vgFor: "vgFor"
  },
  decls: 1,
  vars: 2,
  consts: [[1, "background"]],
  template: function VgScrubBarBufferingTime_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 0);
    }
    if (rf & 2) {
      ɵɵstyleProp("width", ctx.getBufferTime());
    }
  },
  styles: ["vg-scrub-bar-buffering-time{display:flex;width:100%;height:5px;pointer-events:none;position:absolute}vg-scrub-bar-buffering-time .background{background-color:#ffffff4d}vg-controls vg-scrub-bar-buffering-time{position:absolute;top:calc(50% - 3px)}vg-controls vg-scrub-bar-buffering-time .background{border-radius:2px}\n"],
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgScrubBarBufferingTime, [{
    type: Component,
    args: [{
      selector: "vg-scrub-bar-buffering-time",
      encapsulation: ViewEncapsulation$1.None,
      template: `<div class="background" [style.width]="getBufferTime()"></div>`,
      styles: [`
        vg-scrub-bar-buffering-time {
            display: flex;
            width: 100%;
            height: 5px;
            pointer-events: none;
            position: absolute;
        }
        vg-scrub-bar-buffering-time .background {
            background-color: rgba(255, 255, 255, 0.3);
        }
        vg-controls vg-scrub-bar-buffering-time {
            position: absolute;
            top: calc(50% - 3px);
        }
        vg-controls vg-scrub-bar-buffering-time .background {
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
            border-radius: 2px;
        }
    `]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: VgAPI
    }];
  }, {
    vgFor: [{
      type: Input
    }]
  });
})();
var VgScrubBarCuePoints = class {
  constructor(ref, API) {
    this.API = API;
    this.onLoadedMetadataCalled = false;
    this.cuePoints = [];
    this.subscriptions = [];
    this.totalCues = 0;
    this.elem = ref.nativeElement;
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
    const onTimeUpdate = this.target.subscriptions.loadedMetadata;
    this.subscriptions.push(onTimeUpdate.subscribe(this.onLoadedMetadata.bind(this)));
    if (this.onLoadedMetadataCalled) {
      this.onLoadedMetadata();
    }
  }
  onLoadedMetadata() {
    if (this.vgCuePoints) {
      this.cuePoints = [];
      for (let i = 0, l = this.vgCuePoints.length; i < l; i++) {
        const end = this.vgCuePoints[i].endTime >= 0 ? this.vgCuePoints[i].endTime : this.vgCuePoints[i].startTime + 1;
        const cuePointDuration = (end - this.vgCuePoints[i].startTime) * 1e3;
        let position = "0";
        let percentWidth = "0";
        if (typeof cuePointDuration === "number" && this.target.time.total) {
          percentWidth = cuePointDuration * 100 / this.target.time.total + "%";
          position = this.vgCuePoints[i].startTime * 100 / Math.round(this.target.time.total / 1e3) + "%";
        }
        this.vgCuePoints[i].$$style = {
          width: percentWidth,
          left: position
        };
        this.cuePoints.push(this.vgCuePoints[i]);
      }
    }
  }
  updateCuePoints() {
    if (!this.target) {
      this.onLoadedMetadataCalled = true;
      return;
    }
    this.onLoadedMetadata();
  }
  ngOnChanges(changes) {
    if (changes["vgCuePoints"].currentValue) {
      this.updateCuePoints();
    }
  }
  ngDoCheck() {
    if (this.vgCuePoints) {
      const changes = this.totalCues !== this.vgCuePoints.length;
      if (changes) {
        this.totalCues = this.vgCuePoints.length;
        this.updateCuePoints();
      }
    }
  }
  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
};
VgScrubBarCuePoints.ɵfac = function VgScrubBarCuePoints_Factory(t) {
  return new (t || VgScrubBarCuePoints)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(VgAPI));
};
VgScrubBarCuePoints.ɵcmp = ɵɵdefineComponent({
  type: VgScrubBarCuePoints,
  selectors: [["vg-scrub-bar-cue-points"]],
  inputs: {
    vgCuePoints: "vgCuePoints",
    vgFor: "vgFor"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 2,
  vars: 1,
  consts: [[1, "cue-point-container"], ["class", "cue-point", 3, "width", "left", 4, "ngFor", "ngForOf"], [1, "cue-point"]],
  template: function VgScrubBarCuePoints_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, VgScrubBarCuePoints_span_1_Template, 1, 4, "span", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(1);
      ɵɵproperty("ngForOf", ctx.cuePoints);
    }
  },
  dependencies: [NgForOf],
  styles: ["vg-scrub-bar-cue-points{display:flex;width:100%;height:5px;pointer-events:none;position:absolute}vg-scrub-bar-cue-points .cue-point-container .cue-point{position:absolute;height:5px;background-color:#ffcc00b3}vg-controls vg-scrub-bar-cue-points{position:absolute;top:calc(50% - 3px)}\n"],
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgScrubBarCuePoints, [{
    type: Component,
    args: [{
      selector: "vg-scrub-bar-cue-points",
      encapsulation: ViewEncapsulation$1.None,
      template: `
        <div class="cue-point-container">
            <span *ngFor="let cp of cuePoints" [style.width]="cp.$$style?.width" [style.left]="cp.$$style?.left"
                  class="cue-point"></span>
        </div>
    `,
      styles: [`
        vg-scrub-bar-cue-points {
            display: flex;
            width: 100%;
            height: 5px;
            pointer-events: none;
            position: absolute;
        }
        vg-scrub-bar-cue-points .cue-point-container .cue-point {
            position: absolute;
            height: 5px;
            background-color: rgba(255, 204, 0, 0.7);
        }
        vg-controls vg-scrub-bar-cue-points {
            position: absolute;
            top: calc(50% - 3px);
        }
    `]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: VgAPI
    }];
  }, {
    vgCuePoints: [{
      type: Input
    }],
    vgFor: [{
      type: Input
    }]
  });
})();
var VgScrubBarCurrentTime = class {
  constructor(ref, API) {
    this.API = API;
    this.vgSlider = false;
    this.subscriptions = [];
    this.elem = ref.nativeElement;
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
  }
  getPercentage() {
    return this.target ? this.target.time.current * 100 / this.target.time.total + "%" : "0%";
  }
  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
};
VgScrubBarCurrentTime.ɵfac = function VgScrubBarCurrentTime_Factory(t) {
  return new (t || VgScrubBarCurrentTime)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(VgAPI));
};
VgScrubBarCurrentTime.ɵcmp = ɵɵdefineComponent({
  type: VgScrubBarCurrentTime,
  selectors: [["vg-scrub-bar-current-time"]],
  inputs: {
    vgFor: "vgFor",
    vgSlider: "vgSlider"
  },
  decls: 2,
  vars: 3,
  consts: [[1, "background"], ["class", "slider", 4, "ngIf"], [1, "slider"]],
  template: function VgScrubBarCurrentTime_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 0);
      ɵɵtemplate(1, VgScrubBarCurrentTime_span_1_Template, 1, 0, "span", 1);
    }
    if (rf & 2) {
      ɵɵstyleProp("width", ctx.getPercentage());
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.vgSlider);
    }
  },
  dependencies: [NgIf],
  styles: ["vg-scrub-bar-current-time{display:flex;width:100%;height:5px;pointer-events:none;position:absolute}vg-scrub-bar-current-time .background{background-color:#fff}vg-controls vg-scrub-bar-current-time{position:absolute;top:calc(50% - 3px);border-radius:2px}vg-controls vg-scrub-bar-current-time .background{border:1px solid white;border-radius:2px}vg-scrub-bar-current-time .slider{background:white;height:15px;width:15px;border-radius:50%;box-shadow:0 0 10px #000;margin-top:-5px;margin-left:-10px}\n"],
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgScrubBarCurrentTime, [{
    type: Component,
    args: [{
      selector: "vg-scrub-bar-current-time",
      encapsulation: ViewEncapsulation$1.None,
      template: `<div class="background" [style.width]="getPercentage()"></div><span class="slider" *ngIf="vgSlider"></span>`,
      styles: [`
        vg-scrub-bar-current-time {
            display: flex;
            width: 100%;
            height: 5px;
            pointer-events: none;
            position: absolute;
        }
        vg-scrub-bar-current-time .background {
            background-color: white;
        }
        vg-controls vg-scrub-bar-current-time {
            position: absolute;
            top: calc(50% - 3px);
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
            border-radius: 2px;
        }
        vg-controls vg-scrub-bar-current-time .background {
            border: 1px solid white;
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
            border-radius: 2px;
        }

        vg-scrub-bar-current-time .slider{
            background: white;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            box-shadow: 0px 0px 10px black;
            margin-top: -5px;
            margin-left: -10px;
        }
    `]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: VgAPI
    }];
  }, {
    vgFor: [{
      type: Input
    }],
    vgSlider: [{
      type: Input
    }]
  });
})();
var VgUtcPipe = class {
  transform(value, format) {
    const date = new Date(value);
    let result = format;
    let ss = date.getUTCSeconds();
    let mm = date.getUTCMinutes();
    let hh = date.getUTCHours();
    if (ss < 10) {
      ss = "0" + ss;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (hh < 10) {
      hh = "0" + hh;
    }
    result = result.replace(/ss/g, ss);
    result = result.replace(/mm/g, mm);
    result = result.replace(/hh/g, hh);
    return result;
  }
};
VgUtcPipe.ɵfac = function VgUtcPipe_Factory(t) {
  return new (t || VgUtcPipe)();
};
VgUtcPipe.ɵpipe = ɵɵdefinePipe({
  name: "vgUtc",
  type: VgUtcPipe,
  pure: true
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgUtcPipe, [{
    type: Pipe,
    args: [{
      name: "vgUtc"
    }]
  }], null, null);
})();
var VgTimeDisplay = class {
  constructor(ref, API) {
    this.API = API;
    this.vgProperty = "current";
    this.vgFormat = "mm:ss";
    this.subscriptions = [];
    this.elem = ref.nativeElement;
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
  }
  getTime() {
    let t = 0;
    if (this.target) {
      t = Math.round(this.target.time[this.vgProperty]);
      t = isNaN(t) || this.target.isLive ? 0 : t;
    }
    return t;
  }
  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
};
VgTimeDisplay.ɵfac = function VgTimeDisplay_Factory(t) {
  return new (t || VgTimeDisplay)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(VgAPI));
};
VgTimeDisplay.ɵcmp = ɵɵdefineComponent({
  type: VgTimeDisplay,
  selectors: [["vg-time-display"]],
  inputs: {
    vgFor: "vgFor",
    vgProperty: "vgProperty",
    vgFormat: "vgFormat"
  },
  ngContentSelectors: _c0,
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf"]],
  template: function VgTimeDisplay_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, VgTimeDisplay_span_0_Template, 2, 0, "span", 0);
      ɵɵtemplate(1, VgTimeDisplay_span_1_Template, 3, 4, "span", 0);
      ɵɵprojection(2);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.target == null ? null : ctx.target.isLive);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !(ctx.target == null ? null : ctx.target.isLive));
    }
  },
  dependencies: [NgIf, VgUtcPipe],
  styles: ["vg-time-display{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;display:flex;justify-content:center;height:50px;width:60px;cursor:pointer;color:#fff;line-height:50px;pointer-events:none;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}\n"],
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgTimeDisplay, [{
    type: Component,
    args: [{
      selector: "vg-time-display",
      encapsulation: ViewEncapsulation$1.None,
      template: `
        <span *ngIf="target?.isLive">LIVE</span>
        <span *ngIf="!target?.isLive">{{ getTime() | vgUtc:vgFormat }}</span>
        <ng-content></ng-content>
    `,
      styles: [`
        vg-time-display {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            display: flex;
            justify-content: center;
            height: 50px;
            width: 60px;
            cursor: pointer;
            color: white;
            line-height: 50px;
            pointer-events: none;
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        }
    `]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: VgAPI
    }];
  }, {
    vgFor: [{
      type: Input
    }],
    vgProperty: [{
      type: Input
    }],
    vgFormat: [{
      type: Input
    }]
  });
})();
var VgTrackSelector = class {
  constructor(ref, API) {
    this.API = API;
    this.subscriptions = [];
    this.elem = ref.nativeElement;
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
    const subs = Array.from(this.API.getMasterMedia().elem.children).filter((item) => item.tagName === "TRACK").filter((item) => item.kind === "subtitles").map((item) => ({
      label: item.label,
      selected: item.default === true,
      id: item.srclang
    }));
    this.tracks = [...subs, {
      id: null,
      label: "Off",
      selected: subs.every((item) => item.selected === false)
    }];
    const track = this.tracks.filter((item) => item.selected === true)[0];
    this.trackSelected = track.id;
    this.ariaValue = track.label;
  }
  selectTrack(trackId) {
    this.trackSelected = trackId === "null" ? null : trackId;
    this.ariaValue = "No track selected";
    Array.from(this.API.getMasterMedia().elem.textTracks).forEach((item) => {
      if (item.language === trackId) {
        this.ariaValue = item.label;
        item.mode = "showing";
      } else {
        item.mode = "hidden";
      }
    });
  }
  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
};
VgTrackSelector.ɵfac = function VgTrackSelector_Factory(t) {
  return new (t || VgTrackSelector)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(VgAPI));
};
VgTrackSelector.ɵcmp = ɵɵdefineComponent({
  type: VgTrackSelector,
  selectors: [["vg-track-selector"]],
  inputs: {
    vgFor: "vgFor"
  },
  decls: 5,
  vars: 5,
  consts: [[1, "container"], [1, "track-selected"], ["tabindex", "0", "aria-label", "track selector", 1, "trackSelector", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]],
  template: function VgTrackSelector_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "div", 1);
      ɵɵtext(2);
      ɵɵelementEnd();
      ɵɵelementStart(3, "select", 2);
      ɵɵlistener("change", function VgTrackSelector_Template_select_change_3_listener($event) {
        return ctx.selectTrack($event.target.value);
      });
      ɵɵtemplate(4, VgTrackSelector_option_4_Template, 2, 3, "option", 3);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance(1);
      ɵɵclassProp("vg-icon-closed_caption", !ctx.trackSelected);
      ɵɵadvance(1);
      ɵɵtextInterpolate1(" ", ctx.trackSelected || "", " ");
      ɵɵadvance(1);
      ɵɵattribute("aria-valuetext", ctx.ariaValue);
      ɵɵadvance(1);
      ɵɵproperty("ngForOf", ctx.tracks);
    }
  },
  dependencies: [NgForOf],
  styles: ["vg-track-selector{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;display:flex;justify-content:center;width:50px;height:50px;cursor:pointer;color:#fff;line-height:50px}vg-track-selector .container{position:relative;display:flex;flex-grow:1;align-items:center;padding:0;margin:5px}vg-track-selector select.trackSelector{width:50px;padding:5px 8px;border:none;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:transparent;font-size:16px}vg-track-selector select.trackSelector::-ms-expand{display:none}vg-track-selector select.trackSelector option{color:#000}vg-track-selector .track-selected{position:absolute;width:100%;height:50px;top:-6px;text-align:center;text-transform:uppercase;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;padding-top:2px;pointer-events:none}vg-track-selector .vg-icon-closed_caption:before{width:100%}\n"],
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgTrackSelector, [{
    type: Component,
    args: [{
      selector: "vg-track-selector",
      encapsulation: ViewEncapsulation$1.None,
      template: `
        <div class="container">
            <div class="track-selected"
                [class.vg-icon-closed_caption]="!trackSelected">
                {{ trackSelected || '' }}
            </div>

            <select class="trackSelector"
                    (change)="selectTrack($event.target.value)"
                    tabindex="0"
                    aria-label="track selector"
                    [attr.aria-valuetext]="ariaValue">
                <option
                    *ngFor="let track of tracks"
                    [value]="track.id"
                    [selected]="track.selected === true">
                    {{ track.label }}
                </option>
            </select>
        </div>
    `,
      styles: [`
        vg-track-selector {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            display: flex;
            justify-content: center;
            width: 50px;
            height: 50px;
            cursor: pointer;
            color: white;
            line-height: 50px;
        }
        vg-track-selector .container {
            position: relative;
            display: flex;
            flex-grow: 1;
            align-items: center;

            padding: 0;
            margin: 5px;
        }
        vg-track-selector select.trackSelector {
            width: 50px;
            padding: 5px 8px;
            border: none;
            background: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            color: transparent;
            font-size: 16px;
        }
        vg-track-selector select.trackSelector::-ms-expand {
            display: none;
        }
        vg-track-selector select.trackSelector option {
            color: #000;
        }
        vg-track-selector .track-selected {
            position: absolute;
            width: 100%;
            height: 50px;
            top: -6px;
            text-align: center;
            text-transform: uppercase;
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
            padding-top: 2px;
            pointer-events: none;
        }
        vg-track-selector .vg-icon-closed_caption:before {
            width: 100%;
        }
    `]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: VgAPI
    }];
  }, {
    vgFor: [{
      type: Input
    }]
  });
})();
var VgQualitySelector = class {
  constructor(ref, API) {
    this.API = API;
    this.onBitrateChange = new EventEmitter();
    this.subscriptions = [];
    this.elem = ref.nativeElement;
  }
  ngOnInit() {
  }
  ngOnChanges(changes) {
    if (changes["bitrates"].currentValue && changes["bitrates"].currentValue.length) {
      this.bitrates.forEach((item) => item.label = (item.label || Math.round(item.bitrate / 1e3)).toString());
    }
  }
  selectBitrate(index) {
    this.bitrateSelected = this.bitrates[index];
    this.onBitrateChange.emit(this.bitrates[index]);
  }
  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
};
VgQualitySelector.ɵfac = function VgQualitySelector_Factory(t) {
  return new (t || VgQualitySelector)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(VgAPI));
};
VgQualitySelector.ɵcmp = ɵɵdefineComponent({
  type: VgQualitySelector,
  selectors: [["vg-quality-selector"]],
  inputs: {
    bitrates: "bitrates"
  },
  outputs: {
    onBitrateChange: "onBitrateChange"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 5,
  vars: 5,
  consts: [[1, "container"], [1, "quality-selected"], ["tabindex", "0", "aria-label", "quality selector", 1, "quality-selector", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]],
  template: function VgQualitySelector_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "div", 1);
      ɵɵtext(2);
      ɵɵelementEnd();
      ɵɵelementStart(3, "select", 2);
      ɵɵlistener("change", function VgQualitySelector_Template_select_change_3_listener($event) {
        return ctx.selectBitrate($event.target.value);
      });
      ɵɵtemplate(4, VgQualitySelector_option_4_Template, 2, 3, "option", 3);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance(1);
      ɵɵclassProp("vg-icon-hd", !ctx.bitrateSelected);
      ɵɵadvance(1);
      ɵɵtextInterpolate1(" ", ctx.bitrateSelected == null ? null : ctx.bitrateSelected.label, " ");
      ɵɵadvance(1);
      ɵɵattribute("aria-valuetext", ctx.ariaValue);
      ɵɵadvance(1);
      ɵɵproperty("ngForOf", ctx.bitrates);
    }
  },
  dependencies: [NgForOf],
  styles: ["vg-quality-selector{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;display:flex;justify-content:center;width:50px;height:50px;cursor:pointer;color:#fff;line-height:50px}vg-quality-selector .container{position:relative;display:flex;flex-grow:1;align-items:center;padding:0;margin:5px}vg-quality-selector select.quality-selector{width:50px;padding:5px 8px;border:none;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:transparent;font-size:16px}vg-quality-selector select.quality-selector::-ms-expand{display:none}vg-quality-selector select.quality-selector option{color:#000}vg-quality-selector .quality-selected{position:absolute;width:100%;height:50px;top:-6px;text-align:center;text-transform:uppercase;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;padding-top:2px;pointer-events:none}vg-quality-selector .vg-icon-closed_caption:before{width:100%}\n"],
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgQualitySelector, [{
    type: Component,
    args: [{
      selector: "vg-quality-selector",
      encapsulation: ViewEncapsulation$1.None,
      template: `
        <div class="container">
            <div class="quality-selected"
                 [class.vg-icon-hd]="!bitrateSelected">
                {{ bitrateSelected?.label }}
            </div>

            <select class="quality-selector"
                    (change)="selectBitrate($event.target.value)"
                    tabindex="0"
                    aria-label="quality selector"
                    [attr.aria-valuetext]="ariaValue">
                <option
                    *ngFor="let bitrate of bitrates"
                    [value]="bitrate.qualityIndex.toString()"
                    [selected]="bitrate.qualityIndex === bitrateSelected?.qualityIndex">
                    {{ bitrate.label }}
                </option>
            </select>
        </div>
    `,
      styles: [`
        vg-quality-selector {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            display: flex;
            justify-content: center;
            width: 50px;
            height: 50px;
            cursor: pointer;
            color: white;
            line-height: 50px;
        }
        vg-quality-selector .container {
            position: relative;
            display: flex;
            flex-grow: 1;
            align-items: center;

            padding: 0;
            margin: 5px;
        }
        vg-quality-selector select.quality-selector {
            width: 50px;
            padding: 5px 8px;
            border: none;
            background: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            color: transparent;
            font-size: 16px;
        }
        vg-quality-selector select.quality-selector::-ms-expand {
            display: none;
        }
        vg-quality-selector select.quality-selector option {
            color: #000;
        }
        vg-quality-selector .quality-selected {
            position: absolute;
            width: 100%;
            height: 50px;
            top: -6px;
            text-align: center;
            text-transform: uppercase;
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
            padding-top: 2px;
            pointer-events: none;
        }
        vg-quality-selector .vg-icon-closed_caption:before {
            width: 100%;
        }
    `]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: VgAPI
    }];
  }, {
    bitrates: [{
      type: Input
    }],
    onBitrateChange: [{
      type: Output
    }]
  });
})();
var VgControlsModule = class {
};
VgControlsModule.ɵfac = function VgControlsModule_Factory(t) {
  return new (t || VgControlsModule)();
};
VgControlsModule.ɵmod = ɵɵdefineNgModule({
  type: VgControlsModule,
  declarations: [VgControls, VgFullscreen, VgMute, VgVolume, VgPlayPause, VgPlaybackButton, VgScrubBar, VgScrubBarBufferingTime, VgScrubBarCuePoints, VgScrubBarCurrentTime, VgTimeDisplay, VgUtcPipe, VgTrackSelector, VgQualitySelector],
  imports: [CommonModule],
  exports: [VgControls, VgFullscreen, VgMute, VgVolume, VgPlayPause, VgPlaybackButton, VgScrubBar, VgScrubBarBufferingTime, VgScrubBarCuePoints, VgScrubBarCurrentTime, VgTimeDisplay, VgUtcPipe, VgTrackSelector, VgQualitySelector]
});
VgControlsModule.ɵinj = ɵɵdefineInjector({
  providers: [VgControlsHidden],
  imports: [[CommonModule]]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgControlsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [VgControls, VgFullscreen, VgMute, VgVolume, VgPlayPause, VgPlaybackButton, VgScrubBar, VgScrubBarBufferingTime, VgScrubBarCuePoints, VgScrubBarCurrentTime, VgTimeDisplay, VgUtcPipe, VgTrackSelector, VgQualitySelector],
      exports: [VgControls, VgFullscreen, VgMute, VgVolume, VgPlayPause, VgPlaybackButton, VgScrubBar, VgScrubBarBufferingTime, VgScrubBarCuePoints, VgScrubBarCurrentTime, VgTimeDisplay, VgUtcPipe, VgTrackSelector, VgQualitySelector],
      providers: [VgControlsHidden]
    }]
  }], null, null);
})();
var VgEvents = class {
};
VgEvents.VG_ABORT = "abort";
VgEvents.VG_CAN_PLAY = "canplay";
VgEvents.VG_CAN_PLAY_THROUGH = "canplaythrough";
VgEvents.VG_DURATION_CHANGE = "durationchange";
VgEvents.VG_EMPTIED = "emptied";
VgEvents.VG_ENCRYPTED = "encrypted";
VgEvents.VG_ENDED = "ended";
VgEvents.VG_ERROR = "error";
VgEvents.VG_LOADED_DATA = "loadeddata";
VgEvents.VG_LOADED_METADATA = "loadedmetadata";
VgEvents.VG_LOAD_START = "loadstart";
VgEvents.VG_PAUSE = "pause";
VgEvents.VG_PLAY = "play";
VgEvents.VG_PLAYING = "playing";
VgEvents.VG_PROGRESS = "progress";
VgEvents.VG_RATE_CHANGE = "ratechange";
VgEvents.VG_SEEK = "seek";
VgEvents.VG_SEEKED = "seeked";
VgEvents.VG_SEEKING = "seeking";
VgEvents.VG_STALLED = "stalled";
VgEvents.VG_SUSPEND = "suspend";
VgEvents.VG_TIME_UPDATE = "timeupdate";
VgEvents.VG_VOLUME_CHANGE = "volumechange";
VgEvents.VG_WAITING = "waiting";
VgEvents.VG_LOAD = "load";
VgEvents.VG_ENTER = "enter";
VgEvents.VG_EXIT = "exit";
VgEvents.VG_START_ADS = "startads";
VgEvents.VG_END_ADS = "endads";
VgEvents.ɵfac = function VgEvents_Factory(t) {
  return new (t || VgEvents)();
};
VgEvents.ɵprov = ɵɵdefineInjectable({
  token: VgEvents,
  factory: VgEvents.ɵfac
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgEvents, [{
    type: Injectable
  }], null, null);
})();
var VgMedia = class {
  constructor(api, ref) {
    this.api = api;
    this.ref = ref;
    this.state = VgStates.VG_PAUSED;
    this.time = {
      current: 0,
      total: 0,
      left: 0
    };
    this.buffer = {
      end: 0
    };
    this.canPlay = false;
    this.canPlayThrough = false;
    this.isMetadataLoaded = false;
    this.isWaiting = false;
    this.isCompleted = false;
    this.isLive = false;
    this.isBufferDetected = false;
    this.checkInterval = 200;
    this.currentPlayPos = 0;
    this.lastPlayPos = 0;
    this.playAtferSync = false;
    this.bufferDetected = new Subject();
  }
  ngOnInit() {
    if (this.vgMedia.nodeName) {
      this.elem = this.vgMedia;
    } else {
      this.elem = this.vgMedia.elem;
    }
    this.api.registerMedia(this);
    this.subscriptions = {
      // Native events
      abort: fromEvent(this.elem, VgEvents.VG_ABORT),
      canPlay: fromEvent(this.elem, VgEvents.VG_CAN_PLAY),
      canPlayThrough: fromEvent(this.elem, VgEvents.VG_CAN_PLAY_THROUGH),
      durationChange: fromEvent(this.elem, VgEvents.VG_DURATION_CHANGE),
      emptied: fromEvent(this.elem, VgEvents.VG_EMPTIED),
      encrypted: fromEvent(this.elem, VgEvents.VG_ENCRYPTED),
      ended: fromEvent(this.elem, VgEvents.VG_ENDED),
      error: fromEvent(this.elem, VgEvents.VG_ERROR),
      loadedData: fromEvent(this.elem, VgEvents.VG_LOADED_DATA),
      loadedMetadata: fromEvent(this.elem, VgEvents.VG_LOADED_METADATA),
      loadStart: fromEvent(this.elem, VgEvents.VG_LOAD_START),
      pause: fromEvent(this.elem, VgEvents.VG_PAUSE),
      play: fromEvent(this.elem, VgEvents.VG_PLAY),
      playing: fromEvent(this.elem, VgEvents.VG_PLAYING),
      progress: fromEvent(this.elem, VgEvents.VG_PROGRESS),
      rateChange: fromEvent(this.elem, VgEvents.VG_RATE_CHANGE),
      seeked: fromEvent(this.elem, VgEvents.VG_SEEKED),
      seeking: fromEvent(this.elem, VgEvents.VG_SEEKING),
      stalled: fromEvent(this.elem, VgEvents.VG_STALLED),
      suspend: fromEvent(this.elem, VgEvents.VG_SUSPEND),
      timeUpdate: fromEvent(this.elem, VgEvents.VG_TIME_UPDATE),
      volumeChange: fromEvent(this.elem, VgEvents.VG_VOLUME_CHANGE),
      waiting: fromEvent(this.elem, VgEvents.VG_WAITING),
      // Advertisement only events
      startAds: fromEvent(this.elem, VgEvents.VG_START_ADS),
      endAds: fromEvent(this.elem, VgEvents.VG_END_ADS),
      // See changes on <source> child elements to reload the video file
      mutation: new Observable((observer) => {
        const domObs = new MutationObserver((mutations) => {
          observer.next(mutations);
        });
        domObs.observe(this.elem, {
          childList: true,
          attributes: true
        });
        return () => {
          domObs.disconnect();
        };
      }),
      // Custom buffering detection
      bufferDetected: this.bufferDetected
    };
    this.mutationObs = this.subscriptions.mutation.subscribe(this.onMutation.bind(this));
    this.canPlayObs = this.subscriptions.canPlay.subscribe(this.onCanPlay.bind(this));
    this.canPlayThroughObs = this.subscriptions.canPlayThrough.subscribe(this.onCanPlayThrough.bind(this));
    this.loadedMetadataObs = this.subscriptions.loadedMetadata.subscribe(this.onLoadMetadata.bind(this));
    this.waitingObs = this.subscriptions.waiting.subscribe(this.onWait.bind(this));
    this.progressObs = this.subscriptions.progress.subscribe(this.onProgress.bind(this));
    this.endedObs = this.subscriptions.ended.subscribe(this.onComplete.bind(this));
    this.playingObs = this.subscriptions.playing.subscribe(this.onStartPlaying.bind(this));
    this.playObs = this.subscriptions.play.subscribe(this.onPlay.bind(this));
    this.pauseObs = this.subscriptions.pause.subscribe(this.onPause.bind(this));
    this.timeUpdateObs = this.subscriptions.timeUpdate.subscribe(this.onTimeUpdate.bind(this));
    this.volumeChangeObs = this.subscriptions.volumeChange.subscribe(this.onVolumeChange.bind(this));
    this.errorObs = this.subscriptions.error.subscribe(this.onError.bind(this));
    if (this.vgMaster) {
      this.api.playerReadyEvent.subscribe(() => {
        this.prepareSync();
      });
    }
  }
  prepareSync() {
    const canPlayAll = [];
    for (const media in this.api.medias) {
      if (this.api.medias[media]) {
        canPlayAll.push(this.api.medias[media].subscriptions.canPlay);
      }
    }
    this.canPlayAllSubscription = combineLatest(canPlayAll).pipe(map((...params) => {
      const checkReadyState = (event) => {
        return event.target.readyState === 4;
      };
      const allReady = params.some(checkReadyState);
      if (allReady && !this.syncSubscription) {
        this.startSync();
        this.syncSubscription.unsubscribe();
      }
    })).subscribe();
  }
  startSync() {
    this.syncSubscription = timer(0, 1e3).subscribe(() => {
      for (const media in this.api.medias) {
        if (this.api.medias[media] !== this) {
          const diff = this.api.medias[media].currentTime - this.currentTime;
          if (diff < -0.3 || diff > 0.3) {
            this.playAtferSync = this.state === VgStates.VG_PLAYING;
            this.pause();
            this.api.medias[media].pause();
            this.api.medias[media].currentTime = this.currentTime;
          } else {
            if (this.playAtferSync) {
              this.play();
              this.api.medias[media].play();
              this.playAtferSync = false;
            }
          }
        }
      }
    });
  }
  onMutation(mutations) {
    for (let i = 0, l = mutations.length; i < l; i++) {
      const mut = mutations[i];
      if (mut.type === "attributes" && mut.attributeName === "src") {
        if (mut.target["src"] && mut.target["src"].length > 0 && mut.target["src"].indexOf("blob:") < 0) {
          this.loadMedia();
          break;
        }
      } else if (mut.type === "childList" && mut.removedNodes.length && mut.removedNodes[0].nodeName.toLowerCase() === "source") {
        this.loadMedia();
        break;
      }
    }
  }
  loadMedia() {
    this.vgMedia.pause();
    this.vgMedia.currentTime = 0;
    this.stopBufferCheck();
    this.isBufferDetected = true;
    this.bufferDetected.next(this.isBufferDetected);
    setTimeout(() => this.vgMedia.load(), 10);
  }
  play() {
    if (this.playPromise || this.state !== VgStates.VG_PAUSED && this.state !== VgStates.VG_ENDED) {
      return;
    }
    this.playPromise = this.vgMedia.play();
    if (this.playPromise && this.playPromise.then && this.playPromise.catch) {
      this.playPromise.then(() => {
        this.playPromise = null;
      }).catch(() => {
        this.playPromise = null;
      });
    }
    return this.playPromise;
  }
  pause() {
    if (this.playPromise) {
      this.playPromise.then(() => {
        this.vgMedia.pause();
      });
    } else {
      this.vgMedia.pause();
    }
  }
  get id() {
    let result = void 0;
    if (this.vgMedia) {
      result = this.vgMedia.id;
    }
    return result;
  }
  get duration() {
    return this.vgMedia.duration;
  }
  set currentTime(seconds) {
    this.vgMedia.currentTime = seconds;
  }
  get currentTime() {
    return this.vgMedia.currentTime;
  }
  set volume(volume) {
    this.vgMedia.volume = volume;
  }
  get volume() {
    return this.vgMedia.volume;
  }
  set playbackRate(rate) {
    this.vgMedia.playbackRate = rate;
  }
  get playbackRate() {
    return this.vgMedia.playbackRate;
  }
  get buffered() {
    return this.vgMedia.buffered;
  }
  get textTracks() {
    return this.vgMedia.textTracks;
  }
  // @ts-ignore
  onCanPlay(event) {
    this.isBufferDetected = false;
    this.bufferDetected.next(this.isBufferDetected);
    this.canPlay = true;
    this.ref.detectChanges();
  }
  // @ts-ignore
  onCanPlayThrough(event) {
    this.isBufferDetected = false;
    this.bufferDetected.next(this.isBufferDetected);
    this.canPlayThrough = true;
    this.ref.detectChanges();
  }
  // @ts-ignore
  onLoadMetadata(event) {
    this.isMetadataLoaded = true;
    this.time = {
      current: 0,
      left: 0,
      total: this.duration * 1e3
    };
    this.state = VgStates.VG_PAUSED;
    const t = Math.round(this.time.total);
    this.isLive = t === Infinity;
    this.ref.detectChanges();
  }
  // @ts-ignore
  onWait(event) {
    this.isWaiting = true;
    this.ref.detectChanges();
  }
  // @ts-ignore
  onComplete(event) {
    this.isCompleted = true;
    this.state = VgStates.VG_ENDED;
    this.ref.detectChanges();
  }
  // @ts-ignore
  onStartPlaying(event) {
    this.state = VgStates.VG_PLAYING;
    this.ref.detectChanges();
  }
  // @ts-ignore
  onPlay(event) {
    this.state = VgStates.VG_PLAYING;
    if (this.vgMaster) {
      if (!this.syncSubscription || this.syncSubscription.closed) {
        this.startSync();
      }
    }
    this.startBufferCheck();
    this.ref.detectChanges();
  }
  // @ts-ignore
  onPause(event) {
    this.state = VgStates.VG_PAUSED;
    if (this.vgMaster) {
      if (!this.playAtferSync) {
        this.syncSubscription.unsubscribe();
      }
    }
    this.stopBufferCheck();
    this.ref.detectChanges();
  }
  // @ts-ignore
  onTimeUpdate(event) {
    const end = this.buffered?.length - 1;
    this.time = {
      current: this.currentTime * 1e3,
      total: this.time.total,
      left: (this.duration - this.currentTime) * 1e3
    };
    if (end >= 0) {
      this.buffer = {
        end: this.buffered.end(end) * 1e3
      };
    }
    this.ref.detectChanges();
  }
  // @ts-ignore
  onProgress(event) {
    const end = this.buffered.length - 1;
    if (end >= 0) {
      this.buffer = {
        end: this.buffered.end(end) * 1e3
      };
    }
    this.ref.detectChanges();
  }
  // @ts-ignore
  onVolumeChange(event) {
    this.ref.detectChanges();
  }
  // @ts-ignore
  onError(event) {
    this.ref.detectChanges();
  }
  // http://stackoverflow.com/a/23828241/779529
  bufferCheck() {
    const offset = 1 / this.checkInterval;
    this.currentPlayPos = this.currentTime;
    if (!this.isBufferDetected && this.currentPlayPos < this.lastPlayPos + offset) {
      this.isBufferDetected = true;
    }
    if (this.isBufferDetected && this.currentPlayPos > this.lastPlayPos + offset) {
      this.isBufferDetected = false;
    }
    if (!this.bufferDetected.closed) {
      this.bufferDetected.next(this.isBufferDetected);
    }
    this.lastPlayPos = this.currentPlayPos;
  }
  startBufferCheck() {
    this.checkBufferSubscription = timer(0, this.checkInterval).subscribe(() => {
      this.bufferCheck();
    });
  }
  stopBufferCheck() {
    if (this.checkBufferSubscription) {
      this.checkBufferSubscription.unsubscribe();
    }
    this.isBufferDetected = false;
    this.bufferDetected.next(this.isBufferDetected);
  }
  seekTime(value, byPercent = false) {
    let second;
    const duration = this.duration;
    if (byPercent) {
      second = value * duration / 100;
    } else {
      second = value;
    }
    this.currentTime = second;
  }
  addTextTrack(type, label, language, mode) {
    const newTrack = this.vgMedia.addTextTrack(type, label, language);
    if (mode) {
      newTrack.mode = mode;
    }
    return newTrack;
  }
  ngOnDestroy() {
    this.vgMedia.src = "";
    this.mutationObs.unsubscribe();
    this.canPlayObs.unsubscribe();
    this.canPlayThroughObs.unsubscribe();
    this.loadedMetadataObs.unsubscribe();
    this.waitingObs.unsubscribe();
    this.progressObs.unsubscribe();
    this.endedObs.unsubscribe();
    this.playingObs.unsubscribe();
    this.playObs.unsubscribe();
    this.pauseObs.unsubscribe();
    this.timeUpdateObs.unsubscribe();
    this.volumeChangeObs.unsubscribe();
    this.errorObs.unsubscribe();
    if (this.checkBufferSubscription) {
      this.checkBufferSubscription.unsubscribe();
    }
    if (this.syncSubscription) {
      this.syncSubscription.unsubscribe();
    }
    this.bufferDetected.complete();
    this.bufferDetected.unsubscribe();
    this.api.unregisterMedia(this);
  }
};
VgMedia.ɵfac = function VgMedia_Factory(t) {
  return new (t || VgMedia)(ɵɵdirectiveInject(VgAPI), ɵɵdirectiveInject(ChangeDetectorRef));
};
VgMedia.ɵdir = ɵɵdefineDirective({
  type: VgMedia,
  selectors: [["", "vgMedia", ""]],
  inputs: {
    vgMedia: "vgMedia",
    vgMaster: "vgMaster"
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgMedia, [{
    type: Directive,
    args: [{
      selector: "[vgMedia]"
    }]
  }], function() {
    return [{
      type: VgAPI
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    vgMedia: [{
      type: Input
    }],
    vgMaster: [{
      type: Input
    }]
  });
})();
var VgCuePoints = class {
  constructor(ref) {
    this.ref = ref;
    this.onEnterCuePoint = new EventEmitter();
    this.onUpdateCuePoint = new EventEmitter();
    this.onExitCuePoint = new EventEmitter();
    this.onCompleteCuePoint = new EventEmitter();
    this.subscriptions = [];
    this.cuesSubscriptions = [];
    this.totalCues = 0;
  }
  ngOnInit() {
    this.onLoad$ = fromEvent(this.ref.nativeElement, VgEvents.VG_LOAD);
    this.subscriptions.push(this.onLoad$.subscribe(this.onLoad.bind(this)));
  }
  onLoad(event) {
    if (event.target && event.target.track) {
      const cues = event.target.track.cues;
      this.ref.nativeElement.cues = cues;
      this.updateCuePoints(cues);
    } else if (event.target && event.target.textTracks && event.target.textTracks.length) {
      const cues = event.target.textTracks[0].cues;
      this.ref.nativeElement.cues = cues;
      this.updateCuePoints(cues);
    }
  }
  updateCuePoints(cues) {
    this.cuesSubscriptions.forEach((s) => s.unsubscribe());
    for (let i = 0, l = cues.length; i < l; i++) {
      this.onEnter$ = fromEvent(cues[i], VgEvents.VG_ENTER);
      this.cuesSubscriptions.push(this.onEnter$.subscribe(this.onEnter.bind(this)));
      this.onExit$ = fromEvent(cues[i], VgEvents.VG_EXIT);
      this.cuesSubscriptions.push(this.onExit$.subscribe(this.onExit.bind(this)));
    }
  }
  onEnter(event) {
    this.onEnterCuePoint.emit(event.target);
  }
  onExit(event) {
    this.onExitCuePoint.emit(event.target);
  }
  ngDoCheck() {
    if (this.ref.nativeElement.track && this.ref.nativeElement.track.cues) {
      const changes = this.totalCues !== this.ref.nativeElement.track.cues.length;
      if (changes) {
        this.totalCues = this.ref.nativeElement.track.cues.length;
        this.ref.nativeElement.cues = this.ref.nativeElement.track.cues;
        this.updateCuePoints(this.ref.nativeElement.track.cues);
      }
    }
  }
  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
};
VgCuePoints.ɵfac = function VgCuePoints_Factory(t) {
  return new (t || VgCuePoints)(ɵɵdirectiveInject(ElementRef));
};
VgCuePoints.ɵdir = ɵɵdefineDirective({
  type: VgCuePoints,
  selectors: [["", "vgCuePoints", ""]],
  outputs: {
    onEnterCuePoint: "onEnterCuePoint",
    onUpdateCuePoint: "onUpdateCuePoint",
    onExitCuePoint: "onExitCuePoint",
    onCompleteCuePoint: "onCompleteCuePoint"
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgCuePoints, [{
    type: Directive,
    args: [{
      selector: "[vgCuePoints]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    onEnterCuePoint: [{
      type: Output
    }],
    onUpdateCuePoint: [{
      type: Output
    }],
    onExitCuePoint: [{
      type: Output
    }],
    onCompleteCuePoint: [{
      type: Output
    }]
  });
})();
var VgPlayer = class {
  constructor(ref, api, fsAPI, controlsHidden) {
    this.api = api;
    this.fsAPI = fsAPI;
    this.controlsHidden = controlsHidden;
    this.isFullscreen = false;
    this.isNativeFullscreen = false;
    this.areControlsHidden = false;
    this.onPlayerReady = new EventEmitter();
    this.onMediaReady = new EventEmitter();
    this.subscriptions = [];
    this.elem = ref.nativeElement;
    this.api.registerElement(this.elem);
  }
  ngAfterContentInit() {
    this.medias.toArray().forEach((media) => {
      this.api.registerMedia(media);
    });
    this.fsAPI.init(this.elem, this.medias);
    this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
    this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this)));
    this.api.onPlayerReady(this.fsAPI);
    this.onPlayerReady.emit(this.api);
  }
  onChangeFullscreen(fsState) {
    if (!this.fsAPI.nativeFullscreen) {
      this.isFullscreen = fsState;
      this.zIndex = fsState ? VgUtils.getZIndex().toString() : "auto";
    } else {
      this.isNativeFullscreen = fsState;
    }
  }
  onHideControls(hidden) {
    this.areControlsHidden = hidden;
  }
  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
};
VgPlayer.ɵfac = function VgPlayer_Factory(t) {
  return new (t || VgPlayer)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(VgAPI), ɵɵdirectiveInject(VgFullscreenAPI), ɵɵdirectiveInject(VgControlsHidden));
};
VgPlayer.ɵcmp = ɵɵdefineComponent({
  type: VgPlayer,
  selectors: [["vg-player"]],
  contentQueries: function VgPlayer_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, VgMedia, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.medias = _t);
    }
  },
  hostVars: 8,
  hostBindings: function VgPlayer_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("z-index", ctx.zIndex);
      ɵɵclassProp("fullscreen", ctx.isFullscreen)("native-fullscreen", ctx.isNativeFullscreen)("controls-hidden", ctx.areControlsHidden);
    }
  },
  outputs: {
    onPlayerReady: "onPlayerReady",
    onMediaReady: "onMediaReady"
  },
  features: [ɵɵProvidersFeature([VgAPI, VgFullscreenAPI, VgControlsHidden])],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function VgPlayer_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["vg-player{font-family:videogular;position:relative;display:flex;width:100%;height:100%;overflow:hidden;background-color:#000}vg-player.fullscreen{position:fixed;left:0;top:0}vg-player.native-fullscreen.controls-hidden{cursor:none}\n"],
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgPlayer, [{
    type: Component,
    args: [{
      selector: "vg-player",
      encapsulation: ViewEncapsulation$1.None,
      template: `<ng-content></ng-content>`,
      styles: [`
        vg-player {
            font-family: 'videogular';
            position: relative;
            display: flex;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: black;
        }
        vg-player.fullscreen {
            position: fixed;
            left: 0;
            top: 0;
        }
        vg-player.native-fullscreen.controls-hidden {
            cursor: none;
        }
    `],
      providers: [VgAPI, VgFullscreenAPI, VgControlsHidden]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: VgAPI
    }, {
      type: VgFullscreenAPI
    }, {
      type: VgControlsHidden
    }];
  }, {
    isFullscreen: [{
      type: HostBinding,
      args: ["class.fullscreen"]
    }],
    isNativeFullscreen: [{
      type: HostBinding,
      args: ["class.native-fullscreen"]
    }],
    areControlsHidden: [{
      type: HostBinding,
      args: ["class.controls-hidden"]
    }],
    zIndex: [{
      type: HostBinding,
      args: ["style.z-index"]
    }],
    onPlayerReady: [{
      type: Output
    }],
    onMediaReady: [{
      type: Output
    }],
    medias: [{
      type: ContentChildren,
      args: [VgMedia]
    }]
  });
})();
var VgMediaElement = class {
  get audioTracks() {
    return null;
  }
  // @ts-ignore
  addTextTrack(kind, label, language) {
    return null;
  }
  // @ts-ignore
  canPlayType(type) {
    return null;
  }
  load() {
  }
  msClearEffects() {
  }
  msGetAsCastingSource() {
    return null;
  }
  // @ts-ignore
  msInsertAudioEffect(activatableClassId, effectRequired, config) {
  }
  // @ts-ignore
  msSetMediaKeys(mediaKeys) {
  }
  // @ts-ignore
  msSetMediaProtectionManager(mediaProtectionManager) {
  }
  pause() {
  }
  play() {
    return null;
  }
  // @ts-ignore
  setMediaKeys(mediaKeys) {
    return null;
  }
  // @ts-ignore
  addEventListener(type, listener, useCapture) {
  }
};
var VgImaAds = class {
  constructor(ref, API, fsAPI) {
    this.API = API;
    this.fsAPI = fsAPI;
    this.onAdStart = new EventEmitter();
    this.onAdStop = new EventEmitter();
    this.onSkipAd = new EventEmitter();
    this.isFullscreen = false;
    this.subscriptions = [];
    this.displayState = "none";
    this.elem = ref.nativeElement;
    this.onContentEnded = this.onContentEnded.bind(this);
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    if (typeof google === "undefined") {
      this.onMissingGoogleImaLoader();
      return;
    }
    this.target = this.API.getMediaById(this.vgFor);
    this.initializations();
    this.subscriptions.push(this.target.subscriptions.ended.subscribe(this.onContentEnded.bind(this)));
    this.subscriptions.push(this.target.subscriptions.play.subscribe(this.onUpdateState.bind(this)));
    this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
    this.ima.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded.bind(this), false);
    this.ima.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError.bind(this), false);
    this.loadAds();
  }
  initializations() {
    this.ima = new Ima(this.elem);
    if (this.vgSkipButton) {
      this.skipButton = document.querySelector(this.vgSkipButton);
      this.skipButton.style.display = "none";
      this.skipButton.addEventListener("click", this.onClickSkip.bind(this));
      this.elem.insertBefore(this.skipButton, this.elem.firstChild);
    }
    window.addEventListener("resize", () => {
      const w = this.API.videogularElement.offsetWidth;
      const h = this.API.videogularElement.offsetHeight;
      if (this.ima.adsManager) {
        if (this.isFullscreen) {
          this.ima.adsManager.resize(w, h, google.ima.ViewMode.FULLSCREEN);
        } else {
          this.ima.adsManager.resize(w, h, google.ima.ViewMode.NORMAL);
        }
      }
    });
  }
  loadAds() {
    if (this.vgCompanion) {
      googletag.cmd.push(() => {
        const adUnitPath = "/" + this.vgNetwork + "/" + this.vgUnitPath;
        const slot = googletag.defineSlot(adUnitPath, this.vgCompanionSize, this.vgCompanion);
        if (slot) {
          slot.addService(googletag.companionAds());
          slot.addService(googletag.pubads());
          googletag.companionAds().setRefreshUnfilledSlots(true);
          googletag.pubads().enableVideoAds();
          googletag.enableServices();
        }
      });
    }
  }
  onUpdateState(event) {
    switch (event.type) {
      case VgEvents.VG_PLAY:
        if (!this.ima.adsLoaded) {
          this.API.pause();
          this.ima.adDisplayContainer.initialize();
          this.requestAds(this.vgAdTagUrl);
          this.ima.adsLoaded = true;
        }
        break;
    }
  }
  requestAds(adTagUrl) {
    this.show();
    const adsRequest = new google.ima.AdsRequest();
    const computedStyle = window.getComputedStyle(this.elem);
    adsRequest.adTagUrl = adTagUrl;
    adsRequest.linearAdSlotWidth = parseInt(computedStyle.width, 10);
    adsRequest.linearAdSlotHeight = parseInt(computedStyle.height, 10);
    adsRequest.nonLinearAdSlotWidth = parseInt(computedStyle.width, 10);
    adsRequest.nonLinearAdSlotHeight = parseInt(computedStyle.height, 10);
    this.ima.adsLoader.requestAds(adsRequest);
  }
  onAdsManagerLoaded(evt) {
    this.show();
    this.ima.adsManager = evt.getAdsManager(this.target);
    this.processAdsManager(this.ima.adsManager);
  }
  // @ts-ignore
  processAdsManager(adsManager) {
    const w = this.API.videogularElement.offsetWidth;
    const h = this.API.videogularElement.offsetHeight;
    this.ima.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, this.onContentPauseRequested.bind(this), false);
    this.ima.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, this.onContentResumeRequested.bind(this), false);
    this.ima.adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, this.onSkippableStateChanged.bind(this), false);
    this.ima.adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, this.onAllAdsComplete.bind(this), false);
    this.ima.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, this.onAdComplete.bind(this), false);
    this.ima.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError.bind(this), false);
    this.ima.adsManager.init(w, h, google.ima.ViewMode.NORMAL);
    this.ima.adsManager.start();
  }
  onSkippableStateChanged() {
    const isSkippable = this.ima.adsManager.getAdSkippableState();
    if (isSkippable) {
      this.skipButton.style.display = "block";
    } else {
      this.skipButton.style.display = "none";
    }
  }
  onClickSkip() {
    this.ima.adsManager.skip();
    this.onSkipAd.emit(true);
  }
  onContentPauseRequested() {
    this.show();
    this.API.pause();
    this.onAdStop.emit(true);
  }
  onContentResumeRequested() {
    this.API.play();
    this.onAdStart.emit(true);
    this.hide();
  }
  // @ts-ignore
  onAdError(evt) {
    if (this.ima.adsManager) {
      this.ima.adsManager.destroy();
    }
    this.hide();
    this.API.play();
    this.onAdStop.emit(true);
  }
  onAllAdsComplete() {
    this.hide();
    if (this.ima.adsManager.getCuePoints().join().indexOf("-1") >= 0) {
      this.API.pause();
      this.onAdStop.emit(true);
    }
  }
  onAdComplete() {
    this.ima.currentAd++;
    this.onAdStop.emit(true);
  }
  show() {
    window.dispatchEvent(new CustomEvent(VgEvents.VG_START_ADS));
    this.displayState = "block";
  }
  hide() {
    window.dispatchEvent(new CustomEvent(VgEvents.VG_END_ADS));
    this.displayState = "none";
  }
  onContentEnded() {
    this.ima.adsLoader.contentComplete();
    this.onAdStop.emit(true);
  }
  onChangeFullscreen(fsState) {
    if (!this.fsAPI.nativeFullscreen) {
      this.isFullscreen = fsState;
    }
  }
  onMissingGoogleImaLoader() {
    this.hide();
    this.API.play();
  }
  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
};
VgImaAds.ɵfac = function VgImaAds_Factory(t) {
  return new (t || VgImaAds)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(VgAPI), ɵɵdirectiveInject(VgFullscreenAPI));
};
VgImaAds.ɵcmp = ɵɵdefineComponent({
  type: VgImaAds,
  selectors: [["vg-ima-ads"]],
  hostVars: 2,
  hostBindings: function VgImaAds_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("display", ctx.displayState);
    }
  },
  inputs: {
    vgFor: "vgFor",
    vgNetwork: "vgNetwork",
    vgUnitPath: "vgUnitPath",
    vgCompanion: "vgCompanion",
    vgCompanionSize: "vgCompanionSize",
    vgAdTagUrl: "vgAdTagUrl",
    vgSkipButton: "vgSkipButton"
  },
  outputs: {
    onAdStart: "onAdStart",
    onAdStop: "onAdStop",
    onSkipAd: "onSkipAd"
  },
  decls: 1,
  vars: 0,
  consts: [[1, "vg-ima-ads"]],
  template: function VgImaAds_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 0);
    }
  },
  styles: ["vg-ima-ads{position:absolute;width:100%;height:100%;z-index:300}vg-ima-ads .vg-ima-ads{position:absolute;width:100%;height:100%;pointer-events:none}\n"],
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgImaAds, [{
    type: Component,
    args: [{
      selector: "vg-ima-ads",
      encapsulation: ViewEncapsulation$1.None,
      template: `<div class="vg-ima-ads"></div>`,
      styles: [`
        vg-ima-ads {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 300;
        }
        vg-ima-ads .vg-ima-ads {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }
    `]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: VgAPI
    }, {
      type: VgFullscreenAPI
    }];
  }, {
    vgFor: [{
      type: Input
    }],
    vgNetwork: [{
      type: Input
    }],
    vgUnitPath: [{
      type: Input
    }],
    vgCompanion: [{
      type: Input
    }],
    vgCompanionSize: [{
      type: Input
    }],
    vgAdTagUrl: [{
      type: Input
    }],
    vgSkipButton: [{
      type: Input
    }],
    onAdStart: [{
      type: Output
    }],
    onAdStop: [{
      type: Output
    }],
    onSkipAd: [{
      type: Output
    }],
    displayState: [{
      type: HostBinding,
      args: ["style.display"]
    }]
  });
})();
var Ima = class {
  constructor(imaAdsElement) {
    this.adDisplayContainer = new google.ima.AdDisplayContainer(imaAdsElement);
    this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer);
    this.adsManager = null;
    this.adsLoaded = false;
    this.currentAd = 0;
  }
};
var VgOverlayPlay = class {
  constructor(ref, API, fsAPI, controlsHidden) {
    this.API = API;
    this.fsAPI = fsAPI;
    this.controlsHidden = controlsHidden;
    this.isNativeFullscreen = false;
    this.areControlsHidden = false;
    this.subscriptions = [];
    this.isBuffering = false;
    this.elem = ref.nativeElement;
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
    this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
    this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this)));
    this.subscriptions.push(this.target.subscriptions.bufferDetected.subscribe((isBuffering) => this.onUpdateBuffer(isBuffering)));
  }
  onUpdateBuffer(isBuffering) {
    this.isBuffering = isBuffering;
  }
  onChangeFullscreen(fsState) {
    if (this.fsAPI.nativeFullscreen) {
      this.isNativeFullscreen = fsState;
    }
  }
  onHideControls(hidden) {
    this.areControlsHidden = hidden;
  }
  onClick() {
    const state = this.getState();
    switch (state) {
      case VgStates.VG_PLAYING:
        this.target.pause();
        break;
      case VgStates.VG_PAUSED:
      case VgStates.VG_ENDED:
        this.target.play();
        break;
    }
  }
  getState() {
    let state = VgStates.VG_PAUSED;
    if (this.target) {
      if (this.target.state instanceof Array) {
        for (let i = 0, l = this.target.state.length; i < l; i++) {
          if (this.target.state[i] === VgStates.VG_PLAYING) {
            state = VgStates.VG_PLAYING;
            break;
          }
        }
      } else {
        state = this.target.state;
      }
    }
    return state;
  }
  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
};
VgOverlayPlay.ɵfac = function VgOverlayPlay_Factory(t) {
  return new (t || VgOverlayPlay)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(VgAPI), ɵɵdirectiveInject(VgFullscreenAPI), ɵɵdirectiveInject(VgControlsHidden));
};
VgOverlayPlay.ɵcmp = ɵɵdefineComponent({
  type: VgOverlayPlay,
  selectors: [["vg-overlay-play"]],
  hostVars: 2,
  hostBindings: function VgOverlayPlay_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function VgOverlayPlay_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
    if (rf & 2) {
      ɵɵclassProp("is-buffering", ctx.isBuffering);
    }
  },
  inputs: {
    vgFor: "vgFor"
  },
  decls: 2,
  vars: 6,
  consts: [[1, "vg-overlay-play"], [1, "overlay-play-container"]],
  template: function VgOverlayPlay_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵelement(1, "div", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassProp("native-fullscreen", ctx.isNativeFullscreen)("controls-hidden", ctx.areControlsHidden);
      ɵɵadvance(1);
      ɵɵclassProp("vg-icon-play_arrow", ctx.getState() !== "playing");
    }
  },
  styles: ["vg-overlay-play{z-index:200}vg-overlay-play.is-buffering{display:none}vg-overlay-play .vg-overlay-play{transition:all .5s;cursor:pointer;position:absolute;display:block;color:#fff;width:100%;height:100%;font-size:80px;filter:alpha(opacity=60);opacity:.6}vg-overlay-play .vg-overlay-play.native-fullscreen.controls-hidden{cursor:none}vg-overlay-play .vg-overlay-play .overlay-play-container.vg-icon-play_arrow{pointer-events:none;width:100%;height:100%;position:absolute;display:flex;align-items:center;justify-content:center;font-size:80px}vg-overlay-play .vg-overlay-play:hover{filter:alpha(opacity=100);opacity:1}vg-overlay-play .vg-overlay-play:hover .overlay-play-container.vg-icon-play_arrow:before{transform:scale(1.2)}\n"],
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgOverlayPlay, [{
    type: Component,
    args: [{
      selector: "vg-overlay-play",
      encapsulation: ViewEncapsulation$1.None,
      template: `<div class="vg-overlay-play"
                    [class.native-fullscreen]="isNativeFullscreen"
                    [class.controls-hidden]="areControlsHidden">
                   <div class="overlay-play-container"
                        [class.vg-icon-play_arrow]="getState() !== 'playing'">
                   </div>
               </div>`,
      styles: [`
        vg-overlay-play {
            z-index: 200;
        }
        vg-overlay-play.is-buffering {
            display: none;
        }
        vg-overlay-play .vg-overlay-play {
            transition: all 0.5s;
            cursor: pointer;
            position: absolute;
            display: block;
            color: white;
            width: 100%;
            height: 100%;
            font-size: 80px;
            filter: alpha(opacity=60);
            opacity: 0.6;
        }
        vg-overlay-play .vg-overlay-play.native-fullscreen.controls-hidden {
            cursor: none;
        }
        vg-overlay-play .vg-overlay-play .overlay-play-container.vg-icon-play_arrow {
            pointer-events: none;
            width: 100%;
            height: 100%;
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 80px;
        }
        vg-overlay-play .vg-overlay-play:hover {
            filter: alpha(opacity=100);
            opacity: 1;
        }
        vg-overlay-play .vg-overlay-play:hover .overlay-play-container.vg-icon-play_arrow:before {
            transform: scale(1.2);
        }
    `]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: VgAPI
    }, {
      type: VgFullscreenAPI
    }, {
      type: VgControlsHidden
    }];
  }, {
    vgFor: [{
      type: Input
    }],
    isBuffering: [{
      type: HostBinding,
      args: ["class.is-buffering"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var VgCoreModule = class {
};
VgCoreModule.ɵfac = function VgCoreModule_Factory(t) {
  return new (t || VgCoreModule)();
};
VgCoreModule.ɵmod = ɵɵdefineNgModule({
  type: VgCoreModule,
  declarations: [VgMedia, VgCuePoints, VgPlayer],
  exports: [VgMedia, VgCuePoints, VgPlayer]
});
VgCoreModule.ɵinj = ɵɵdefineInjector({
  providers: [VgAPI, VgFullscreenAPI, VgUtils, VgControlsHidden, VgStates, VgEvents]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgCoreModule, [{
    type: NgModule,
    args: [{
      declarations: [VgMedia, VgCuePoints, VgPlayer],
      exports: [VgMedia, VgCuePoints, VgPlayer],
      providers: [VgAPI, VgFullscreenAPI, VgUtils, VgControlsHidden, VgStates, VgEvents]
    }]
  }], null, null);
})();
var VgImaAdsModule = class {
};
VgImaAdsModule.ɵfac = function VgImaAdsModule_Factory(t) {
  return new (t || VgImaAdsModule)();
};
VgImaAdsModule.ɵmod = ɵɵdefineNgModule({
  type: VgImaAdsModule,
  declarations: [VgImaAds],
  imports: [CommonModule],
  exports: [VgImaAds]
});
VgImaAdsModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgImaAdsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [VgImaAds],
      exports: [VgImaAds]
    }]
  }], null, null);
})();
var VgOverlayPlayModule = class {
};
VgOverlayPlayModule.ɵfac = function VgOverlayPlayModule_Factory(t) {
  return new (t || VgOverlayPlayModule)();
};
VgOverlayPlayModule.ɵmod = ɵɵdefineNgModule({
  type: VgOverlayPlayModule,
  declarations: [VgOverlayPlay],
  imports: [CommonModule],
  exports: [VgOverlayPlay]
});
VgOverlayPlayModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgOverlayPlayModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [VgOverlayPlay],
      exports: [VgOverlayPlay]
    }]
  }], null, null);
})();
var VgDASH = class {
  constructor(ref, API) {
    this.ref = ref;
    this.API = API;
    this.onGetBitrates = new EventEmitter();
    this.subscriptions = [];
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.vgFor = this.ref.nativeElement.getAttribute("vgFor");
    this.target = this.API.getMediaById(this.vgFor);
    this.createPlayer();
  }
  ngOnChanges(changes) {
    if (changes["vgDash"] && changes["vgDash"].currentValue) {
      this.createPlayer();
    } else {
      this.destroyPlayer();
    }
  }
  createPlayer() {
    if (this.dash) {
      this.destroyPlayer();
    }
    if (this.vgDash && (this.vgDash.indexOf(".mpd") > -1 || this.vgDash.indexOf("mpd-time-csf") > -1)) {
      let drmOptions;
      if (this.vgDRMLicenseServer) {
        drmOptions = this.vgDRMLicenseServer;
        if (this.vgDRMToken) {
          for (const drmServer in drmOptions) {
            if (drmServer.hasOwnProperty(drmServer)) {
              drmOptions[drmServer].httpRequestHeaders = {
                Authorization: this.vgDRMToken
              };
            }
          }
        }
      }
      this.dash = dashjs.MediaPlayer().create();
      this.dash.getDebug().setLogToBrowserConsole(false);
      this.dash.initialize(this.ref.nativeElement);
      this.dash.setAutoPlay(false);
      this.dash.on(dashjs.MediaPlayer.events.STREAM_INITIALIZED, () => {
        const audioList = this.dash.getBitrateInfoListFor("audio");
        const videoList = this.dash.getBitrateInfoListFor("video");
        if (audioList.length > 1) {
          audioList.forEach((item) => item.qualityIndex = ++item.qualityIndex);
          audioList.unshift({
            qualityIndex: 0,
            width: 0,
            height: 0,
            bitrate: 0,
            mediaType: "video",
            label: "AUTO"
          });
          this.onGetBitrates.emit(audioList);
        }
        if (videoList.length > 1) {
          videoList.forEach((item) => item.qualityIndex = ++item.qualityIndex);
          videoList.unshift({
            qualityIndex: 0,
            width: 0,
            height: 0,
            bitrate: 0,
            mediaType: "video",
            label: "AUTO"
          });
          this.onGetBitrates.emit(videoList);
        }
      });
      if (drmOptions) {
        this.dash.setProtectionData(drmOptions);
      }
      this.dash.attachSource(this.vgDash);
    } else {
      if (this.target) {
        this.target.pause();
        this.target.seekTime(0);
        this.ref.nativeElement.src = this.vgDash;
      }
    }
  }
  setBitrate(bitrate) {
    if (this.dash) {
      if (bitrate.qualityIndex > 0) {
        if (this.dash.getAutoSwitchQualityFor(bitrate.mediaType)) {
          this.dash.setAutoSwitchQualityFor(bitrate.mediaType, false);
        }
        const nextIndex = bitrate.qualityIndex - 1;
        this.dash.setQualityFor(bitrate.mediaType, nextIndex);
      } else {
        this.dash.setAutoSwitchQualityFor(bitrate.mediaType, true);
      }
    }
  }
  destroyPlayer() {
    if (this.dash) {
      this.dash.reset();
      this.dash = null;
    }
  }
  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
    this.destroyPlayer();
  }
};
VgDASH.ɵfac = function VgDASH_Factory(t) {
  return new (t || VgDASH)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(VgAPI));
};
VgDASH.ɵdir = ɵɵdefineDirective({
  type: VgDASH,
  selectors: [["", "vgDash", ""]],
  inputs: {
    vgDash: "vgDash",
    vgDRMToken: "vgDRMToken",
    vgDRMLicenseServer: "vgDRMLicenseServer"
  },
  outputs: {
    onGetBitrates: "onGetBitrates"
  },
  exportAs: ["vgDash"],
  features: [ɵɵNgOnChangesFeature]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgDASH, [{
    type: Directive,
    args: [{
      selector: "[vgDash]",
      exportAs: "vgDash"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: VgAPI
    }];
  }, {
    vgDash: [{
      type: Input
    }],
    vgDRMToken: [{
      type: Input
    }],
    vgDRMLicenseServer: [{
      type: Input
    }],
    onGetBitrates: [{
      type: Output
    }]
  });
})();
var VgHLS = class {
  constructor(ref, API) {
    this.ref = ref;
    this.API = API;
    this.vgHlsHeaders = {};
    this.onGetBitrates = new EventEmitter();
    this.subscriptions = [];
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.crossorigin = this.ref.nativeElement.getAttribute("crossorigin");
    this.preload = this.ref.nativeElement.getAttribute("preload") !== "none";
    this.vgFor = this.ref.nativeElement.getAttribute("vgFor");
    if (this.vgFor) {
      this.target = this.API.getMediaById(this.vgFor);
    } else {
      this.target = this.API.getDefaultMedia();
    }
    this.config = {
      autoStartLoad: this.preload
    };
    this.config.xhrSetup = (xhr, url) => {
      if (this.crossorigin === "use-credentials") {
        xhr.withCredentials = true;
      }
      for (const key of Object.keys(this.vgHlsHeaders)) {
        xhr.setRequestHeader(key, this.vgHlsHeaders[key]);
      }
    };
    this.createPlayer();
    if (!this.preload) {
      this.subscriptions.push(this.API.subscriptions.play.subscribe(() => {
        if (this.hls) {
          this.hls.startLoad(0);
        }
      }));
    }
  }
  ngOnChanges(changes) {
    if (changes["vgHls"] && changes["vgHls"].currentValue) {
      this.createPlayer();
    } else if (changes["vgHlsHeaders"] && changes["vgHlsHeaders"].currentValue) {
    } else {
      this.destroyPlayer();
    }
  }
  createPlayer() {
    if (this.hls) {
      this.destroyPlayer();
    }
    if (this.vgHls && this.vgHls.indexOf("m3u8") > -1 && Hls.isSupported() && this.API.isPlayerReady) {
      const video = this.ref.nativeElement;
      this.hls = new Hls(this.config);
      this.hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
        const videoList = [];
        videoList.push({
          qualityIndex: 0,
          width: 0,
          height: 0,
          bitrate: 0,
          mediaType: "video",
          label: "AUTO"
        });
        data.levels.forEach((item, index) => {
          videoList.push({
            qualityIndex: ++index,
            width: item.width,
            height: item.height,
            bitrate: item.bitrate,
            mediaType: "video",
            label: item.name
          });
        });
        this.onGetBitrates.emit(videoList);
      });
      this.hls.on(Hls.Events.LEVEL_LOADED, (event, data) => {
        this.target.isLive = data.details.live;
      });
      this.hls.loadSource(this.vgHls);
      this.hls.attachMedia(video);
    } else {
      if (this.target && !!this.target.pause) {
        this.target.pause();
        this.target.seekTime(0);
        this.ref.nativeElement.src = this.vgHls;
      }
    }
  }
  setBitrate(bitrate) {
    if (this.hls) {
      this.hls.nextLevel = bitrate.qualityIndex - 1;
    }
  }
  destroyPlayer() {
    if (this.hls) {
      this.hls.destroy();
      this.hls = null;
    }
  }
  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
    this.destroyPlayer();
    delete this.hls;
  }
};
VgHLS.ɵfac = function VgHLS_Factory(t) {
  return new (t || VgHLS)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(VgAPI));
};
VgHLS.ɵdir = ɵɵdefineDirective({
  type: VgHLS,
  selectors: [["", "vgHls", ""]],
  inputs: {
    vgHls: "vgHls",
    vgHlsHeaders: "vgHlsHeaders"
  },
  outputs: {
    onGetBitrates: "onGetBitrates"
  },
  exportAs: ["vgHls"],
  features: [ɵɵNgOnChangesFeature]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgHLS, [{
    type: Directive,
    args: [{
      selector: "[vgHls]",
      exportAs: "vgHls"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: VgAPI
    }];
  }, {
    vgHls: [{
      type: Input
    }],
    vgHlsHeaders: [{
      type: Input
    }],
    onGetBitrates: [{
      type: Output
    }]
  });
})();
var VgStreamingModule = class {
};
VgStreamingModule.ɵfac = function VgStreamingModule_Factory(t) {
  return new (t || VgStreamingModule)();
};
VgStreamingModule.ɵmod = ɵɵdefineNgModule({
  type: VgStreamingModule,
  declarations: [VgDASH, VgHLS],
  imports: [CommonModule],
  exports: [VgDASH, VgHLS]
});
VgStreamingModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VgStreamingModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [VgDASH, VgHLS],
      exports: [VgDASH, VgHLS]
    }]
  }], null, null);
})();
export {
  Ima,
  VgAPI,
  VgBuffering,
  VgBufferingModule,
  VgControls,
  VgControlsHidden,
  VgControlsModule,
  VgCoreModule,
  VgCuePoints,
  VgDASH,
  VgEvents,
  VgFullscreen,
  VgFullscreenAPI,
  VgHLS,
  VgImaAds,
  VgImaAdsModule,
  VgMedia,
  VgMediaElement,
  VgMute,
  VgOverlayPlay,
  VgOverlayPlayModule,
  VgPlayPause,
  VgPlaybackButton,
  VgPlayer,
  VgQualitySelector,
  VgScrubBar,
  VgScrubBarBufferingTime,
  VgScrubBarCuePoints,
  VgScrubBarCurrentTime,
  VgStates,
  VgStreamingModule,
  VgTimeDisplay,
  VgTrackSelector,
  VgUtcPipe,
  VgUtils,
  VgVolume
};
//# sourceMappingURL=ngx-videogular.js.map
