(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{230:function(t,o,n){"use strict";n.d(o,"b",function(){return r}),n.d(o,"a",function(){return i}),n.d(o,"c",function(){return a});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)o.hasOwnProperty(n)&&(t[n]=o[n])})(t,o)};function r(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}function i(t,o,n,e){return new(n||(n=Promise))(function(r,i){function a(t){try{s(e.next(t))}catch(t){i(t)}}function c(t){try{s(e.throw(t))}catch(t){i(t)}}function s(t){t.done?r(t.value):new n(function(o){o(t.value)}).then(a,c)}s((e=e.apply(t,o||[])).next())})}function a(t,o){var n,e,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,e&&(r=2&i[0]?e.return:i[0]?e.throw||((r=e.return)&&r.call(e),0):e.next)&&!(r=r.call(e,i[1])).done)return r;switch(e=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,e=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=o.call(t,a)}catch(t){i=[6,t],e=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}},231:function(t,o,n){"use strict";n.d(o,"a",function(){return r}),n.d(o,"b",function(){return i}),n.d(o,"c",function(){return s}),n.d(o,"d",function(){return l}),n.d(o,"e",function(){return c}),n.d(o,"f",function(){return a}),n.d(o,"g",function(){return b}),n.d(o,"h",function(){return d}),n.d(o,"i",function(){return p}),n.d(o,"j",function(){return u}),n.d(o,"k",function(){return f});var e=n(230);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */function r(t,o,n,r,i){return e.a(this,void 0,void 0,function(){var a;return e.c(this,function(e){switch(e.label){case 0:if(t)return[2,t.attachViewToDom(o,n,i,r)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"==typeof n?o.ownerDocument.createElement(n):n,r&&r.forEach(function(t){return a.classList.add(t)}),i&&Object.assign(a,i),o.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2,a]}})})}function i(t,o){if(o){if(t)return t.removeViewFromDom(o.parentElement,o);o.remove()}return Promise.resolve()}function a(){var t=window.TapticEngine;t&&t.selection()}function c(){var t=window.TapticEngine;t&&t.gestureSelectionStart()}function s(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()}function l(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}function u(t,o){return null!==o.closest(t)}function d(t){var o;return"string"==typeof t&&t.length>0?((o={"ion-color":!0})["ion-color-"+t]=!0,o):void 0}function f(t,o){var n;return(n={})[o]=!0,n[o+"-"+t]=!!t,n}function b(t){var o={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return o[t]=!0}),o}function p(t,o,n,r){return e.a(this,void 0,void 0,function(){var i;return e.c(this,function(e){switch(e.label){case 0:return null==o||"#"===o[0]||-1!==o.indexOf("://")?[3,2]:(i=t.document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[4,i.componentOnReady()]):[3,2];case 1:return e.sent(),[2,i.push(o,r)];case 2:return[2,!1]}})})}},232:function(t,o,n){"use strict";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
function e(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function r(t){return!!t.shadowRoot&&!!t.attachShadow}function i(t){var o=t.closest("ion-item");return o?o.querySelector("ion-label"):null}function a(t,o,n,e,i){if(t||r(o)){var a=o.querySelector("input.aux-input");a||((a=o.ownerDocument.createElement("input")).type="hidden",a.classList.add("aux-input"),o.appendChild(a)),a.disabled=i,a.name=n,a.value=e||""}}function c(t,o,n){return Math.max(t,Math.min(o,n))}function s(t){return t.timeStamp||Date.now()}function l(t){if(t){var o=t.changedTouches;if(o&&o.length>0){var n=o[0];return{x:n.clientX,y:n.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function u(t,o){var n="rtl"===t.document.dir;switch(o){case"start":return n;case"end":return!n;default:throw new Error('"'+o+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function d(t,o){var n=t._original||t;return{_original:t,emit:f(n.emit.bind(n),o)}}function f(t,o){var n;return void 0===o&&(o=0),function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];clearTimeout(n),n=setTimeout.apply(void 0,[t,o].concat(e))}}n.d(o,"a",function(){return e}),n.d(o,"b",function(){return s}),n.d(o,"c",function(){return r}),n.d(o,"d",function(){return i}),n.d(o,"e",function(){return a}),n.d(o,"f",function(){return d}),n.d(o,"g",function(){return u}),n.d(o,"h",function(){return c}),n.d(o,"i",function(){return f}),n.d(o,"j",function(){return l}),n.d(o,"k",function(){return h});var b={ipad:function(t){return y(t,/iPad/i)},iphone:function(t){return y(t,/iPhone/i)},ios:function(t){return y(t,/iPad|iPhone|iPod/i)},android:function(t){return y(t,/android|sink/i)},phablet:function(t){var o=t.innerWidth,n=t.innerHeight,e=Math.min(o,n),r=Math.max(o,n);return e>390&&e<520&&r>620&&r<800},tablet:function(t){var o=t.innerWidth,n=t.innerHeight,e=Math.min(o,n),r=Math.max(o,n);return e>460&&e<820&&r>780&&r<1400},cordova:g,capacitor:m,electron:function(t){return y(t,/electron/)},pwa:function(t){return t.matchMedia("(display-mode: standalone)").matches},mobile:v,desktop:function(t){return!v(t)},hybrid:function(t){return g(t)||m(t)}};function p(t){return function(t){t.Ionic=t.Ionic||{};var o=t.Ionic.platforms;if(null==o){o=t.Ionic.platforms=function(t){return Object.keys(b).filter(function(o){return b[o](t)})}(t);var n=t.document.documentElement.classList;o.forEach(function(t){return n.add("plt-"+t)})}return o}(t)}function h(t,o){return p(t).includes(o)}function v(t){return function(t,o){return t.matchMedia(o).matches}(t,"(any-pointer:coarse)")}function g(t){return!!(t.cordova||t.phonegap||t.PhoneGap)}function m(t){var o=t.Capacitor;return!(!o||!o.isNative)}function y(t,o){return o.test(t.navigator.userAgent)}},73:function(t,o,n){"use strict";n.r(o),n.d(o,"IonButton",function(){return a}),n.d(o,"IonIcon",function(){return l});var e=n(3),r=n(232),i=n(231),a=function(){function t(){var t=this;this.keyFocus=!1,this.buttonType="button",this.disabled=!1,this.routerDirection="forward",this.strong=!1,this.type="button",this.onFocus=function(){t.ionFocus.emit()},this.onKeyUp=function(){t.keyFocus=!0},this.onBlur=function(){t.keyFocus=!1,t.ionBlur.emit()},this.onClick=function(o){if("button"===t.type)return Object(i.i)(t.win,t.href,o,t.routerDirection);if(Object(r.c)(t.el)){var n=t.el.closest("form");if(n){o.preventDefault();var e=document.createElement("button");e.type=t.type,e.style.display="none",n.appendChild(e),e.click(),e.remove()}}return Promise.resolve(!1)}}return t.prototype.componentWillLoad=function(){void 0===this.fill&&(this.fill=this.el.closest("ion-buttons")?"clear":"solid")},t.prototype.hostData=function(){var t,o=this,n=o.buttonType,e=o.keyFocus,r=o.disabled,a=o.expand,c=o.fill,s=o.shape,l=o.size,u=o.strong;return{"ion-activatable":!0,"aria-disabled":this.disabled?"true":null,class:Object.assign({},Object(i.h)(o.color),(t={},t[n]=!0,t[n+"-"+a]=!!a,t[n+"-"+l]=!!l,t[n+"-"+s]=!!s,t[n+"-"+c]=!!c,t[n+"-strong"]=u,t.focused=e,t["button-disabled"]=r,t))}},t.prototype.render=function(){var t=void 0===this.href?"button":"a";return Object(e.b)(t,Object.assign({},"button"===t?{type:this.type}:{href:this.href},{class:"button-native",disabled:this.disabled,onFocus:this.onFocus,onKeyUp:this.onKeyUp,onBlur:this.onBlur,onClick:this.onClick}),Object(e.b)("span",{class:"button-inner"},Object(e.b)("slot",{name:"icon-only"}),Object(e.b)("slot",{name:"start"}),Object(e.b)("slot",null),Object(e.b)("slot",{name:"end"})),"md"===this.mode&&Object(e.b)("ion-ripple-effect",null))},Object.defineProperty(t,"is",{get:function(){return"ion-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{buttonType:{type:String,attr:"button-type",mutable:!0},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",reflectToAttr:!0},el:{elementRef:!0},expand:{type:String,attr:"expand",reflectToAttr:!0},fill:{type:String,attr:"fill",reflectToAttr:!0,mutable:!0},href:{type:String,attr:"href"},keyFocus:{state:!0},mode:{type:String,attr:"mode"},routerDirection:{type:String,attr:"router-direction"},shape:{type:String,attr:"shape",reflectToAttr:!0},size:{type:String,attr:"size",reflectToAttr:!0},strong:{type:Boolean,attr:"strong"},type:{type:String,attr:"type"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--width:auto;--overflow:hidden;--ripple-color:currentColor;display:inline-block;color:var(--color);font-family:var(--ion-font-family,inherit);pointer-events:auto;text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary,#3880ff);--background-focused:var(--ion-color-primary-shade,#3171e0);--color:var(--ion-color-primary-contrast,#fff);--color-activated:var(--ion-color-primary-contrast,#fff);--color-focused:var(--ion-color-primary-contrast,#fff)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-solid.ion-color.focused) .button-native{background:var(--ion-color-shade)}:host(.button-outline){--border-color:var(--ion-color-primary,#3880ff);--background:transparent;--color:var(--ion-color-primary,#3880ff);--color-focused:var(--ion-color-primary,#3880ff)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-outline.focused.ion-color) .button-native{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary,#3880ff)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.button-clear.focused.ion-color) .button-native{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}:host(.button-clear.activated.ion-color) .button-native{background:transparent}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:strict}:host(.button-block) .button-native:after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:strict}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:var(--width);height:var(--height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:content;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native[disabled]{cursor:default;opacity:.5;pointer-events:none}:host(.focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.activated) .button-native{background:var(--background-activated);color:var(--color-activated)}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin:0 .3em 0 -.3em}::slotted(ion-icon[slot=end]){margin:0 -.2em 0 .3em}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}:host{--border-radius:12px;--margin-top:4px;--margin-bottom:4px;--margin-start:2px;--margin-end:2px;--padding-top:0;--padding-bottom:0;--padding-start:1em;--padding-end:1em;--height:2.8em;--transition:background-color,opacity 100ms linear;font-size:16px;font-weight:500;letter-spacing:-.03em}:host(.button-solid){--background-activated:var(--ion-color-primary-shade,#3171e0)}@media (any-hover:hover){:host(.button-solid:hover){--opacity:0.8}}:host(.button-solid.activated){--opacity:1}:host(.button-outline){--border-radius:12px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary,#3880ff);--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--color-activated:var(--ion-color-primary-contrast,#fff)}:host(.button-outline.activated.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}@media (any-hover:hover){:host(.button-clear:hover){--opacity:0.6}}:host(.button-clear.activated){--opacity:0.4}:host(.button-clear){--background-activated:transparent;--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--color-activated:var(--ion-color-primary,#3880ff);--color-focused:var(--ion-color-primary,#3880ff)}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--border-radius:14px;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;--height:2.8em;font-size:20px}:host(.button-small){--border-radius:8px;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;--height:2.1em;font-size:13px}:host(.button-strong){font-weight:600}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}();function c(t,o,n,e){return o=(o||"md").toLowerCase(),n&&"ios"===o?t=n.toLowerCase():e&&"md"===o?t=e.toLowerCase():t&&(t=t.toLowerCase(),/^md-|^ios-|^logo-/.test(t)||(t=o+"-"+t)),"string"!=typeof t||""===t.trim()?null:""!==t.replace(/[a-z]|-|\d/gi,"")?null:t}function s(t){return"string"==typeof t&&(t=t.trim()).length>0&&/(\/|\.)/.test(t)?t:null}var l=function(){function t(){this.isVisible=!1,this.lazy=!1}return t.prototype.componentWillLoad=function(){var t=this;this.waitUntilVisible(this.el,"50px",function(){t.isVisible=!0,t.loadIcon()})},t.prototype.componentDidUnload=function(){this.io&&(this.io.disconnect(),this.io=void 0)},t.prototype.waitUntilVisible=function(t,o,n){var e=this;if(this.lazy&&this.win&&this.win.IntersectionObserver){var r=this.io=new this.win.IntersectionObserver(function(t){t[0].isIntersecting&&(r.disconnect(),e.io=void 0,n())},{rootMargin:o});r.observe(t)}else n()},t.prototype.loadIcon=function(){var t=this;if(!this.isServer&&this.isVisible){var o=this.getUrl();o&&function(t,o,n){var e=u.get(o);return e||(e=fetch(o,{cache:"force-cache"}).then(function(t){return function(t){return t<=299}(t.status)?t.text():Promise.resolve(null)}).then(function(o){return function(t,o,n){if(o){var e=t.createDocumentFragment(),r=t.createElement("div");r.innerHTML=o,e.appendChild(r);for(var i=r.childNodes.length-1;i>=0;i--)"svg"!==r.childNodes[i].nodeName.toLowerCase()&&r.removeChild(r.childNodes[i]);var a=r.firstElementChild;if(a&&"svg"===a.nodeName.toLowerCase()&&(n&&a.setAttribute("class",n),function t(o){if(1===o.nodeType){if("script"===o.nodeName.toLowerCase())return!1;for(var n=0;n<o.attributes.length;n++){var e=o.attributes[n].value;if("string"==typeof e&&0===e.toLowerCase().indexOf("on"))return!1}for(n=0;n<o.childNodes.length;n++)if(!t(o.childNodes[n]))return!1}return!0}(a)))return r.innerHTML}return""}(t,o,n)}),u.set(o,e)),e}(this.doc,o,"s-ion-icon").then(function(o){return t.svgContent=o})}if(!this.ariaLabel){var n=c(this.name,this.mode,this.ios,this.md);n&&(this.ariaLabel=n.replace("ios-","").replace("md-","").replace(/\-/g," "))}},t.prototype.getUrl=function(){var t=s(this.src);return t||((t=c(this.name,this.mode,this.ios,this.md))?this.getNamedUrl(t):(t=s(this.icon))?t:(t=c(this.icon,this.mode,this.ios,this.md))?this.getNamedUrl(t):null)},t.prototype.getNamedUrl=function(t){return this.resourcesUrl+"svg/"+t+".svg"},t.prototype.hostData=function(){var t;return{role:"img",class:Object.assign({},function(t){var o;return t?((o={"ion-color":!0})["ion-color-"+t]=!0,o):null}(this.color),(t={},t["icon-"+this.size]=!!this.size,t))}},t.prototype.render=function(){return Object(e.b)("div",!this.isServer&&this.svgContent?{class:"icon-inner",innerHTML:this.svgContent}:{class:"icon-inner"})},Object.defineProperty(t,"is",{get:function(){return"ion-icon"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{ariaLabel:{type:String,attr:"aria-label",reflectToAttr:!0,mutable:!0},color:{type:String,attr:"color"},doc:{context:"document"},el:{elementRef:!0},icon:{type:String,attr:"icon",watchCallbacks:["loadIcon"]},ios:{type:String,attr:"ios"},isServer:{context:"isServer"},isVisible:{state:!0},lazy:{type:Boolean,attr:"lazy"},md:{type:String,attr:"md"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name",watchCallbacks:["loadIcon"]},resourcesUrl:{context:"resourcesUrl"},size:{type:String,attr:"size"},src:{type:String,attr:"src",watchCallbacks:["loadIcon"]},svgContent:{state:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{display:inline-block;width:1em;height:1em;contain:strict;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}:host(.ion-color){color:var(--ion-color-base)!important}:host(.icon-small){font-size:18px!important}:host(.icon-large){font-size:32px!important}.icon-inner,svg{display:block;fill:currentColor;stroke:currentColor;height:100%;width:100%}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary,#3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary,#0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary,#f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success,#10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning,#ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger,#f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light,#f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium,#989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark,#222428)}"},enumerable:!0,configurable:!0}),t}(),u=new Map}}]);