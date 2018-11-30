(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{116:function(t,e,n){"use strict";n.r(e),n.d(e,"IonTab",function(){return a}),n.d(e,"IonTabBar",function(){return s}),n.d(e,"IonTabButton",function(){return c}),n.d(e,"IonTabs",function(){return b});var o=n(230),i=n(3),r=n(231),a=function(){function t(){this.loaded=!1,this.active=!1}return t.prototype.componentWillLoad=function(){},t.prototype.setActive=function(){return o.a(this,void 0,void 0,function(){return o.c(this,function(t){switch(t.label){case 0:return[4,this.prepareLazyLoaded()];case 1:return t.sent(),this.active=!0,[2]}})})},t.prototype.prepareLazyLoaded=function(){return this.loaded||null==this.component?Promise.resolve():(this.loaded=!0,Object(r.a)(this.delegate,this.el,this.component,["ion-page"]))},t.prototype.hostData=function(){var t=this.tab,e=this.active;return{role:"tabpanel","aria-hidden":e?null:"true","aria-labelledby":"tab-button-"+t,id:"tab-view-"+t,class:{"ion-page":void 0===this.component,"tab-hidden":!e}}},t.prototype.render=function(){return Object(i.b)("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-tab"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{active:{type:Boolean,attr:"active",mutable:!0},component:{type:String,attr:"component"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},setActive:{method:!0},tab:{type:String,attr:"tab"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".tab-hidden.sc-ion-tab-h{display:none!important}"},enumerable:!0,configurable:!0}),t}(),s=function(){function t(){this.keyboardVisible=!1,this.layout="icon-top",this.translucent=!1}return t.prototype.selectedTabChanged=function(){this.ionTabBarChanged.emit({tab:this.selectedTab})},t.prototype.onKeyboardWillHide=function(){var t=this;setTimeout(function(){return t.keyboardVisible=!1},50)},t.prototype.onKeyboardWillShow=function(){"bottom"===this.el.getAttribute("slot")&&(this.keyboardVisible=!0)},t.prototype.componentWillLoad=function(){this.selectedTabChanged()},t.prototype.hostData=function(){var t=this.translucent,e=this.keyboardVisible;return{role:"tablist","aria-hidden":e?"true":null,class:Object.assign({},Object(r.h)(this.color),{"tabbar-translucent":t,"tabbar-hidden":e})}},t.prototype.render=function(){return Object(i.b)("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-tab-bar"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},doc:{context:"document"},el:{elementRef:!0},keyboardVisible:{state:!0},layout:{type:String,attr:"layout"},mode:{type:String,attr:"mode"},queue:{context:"queue"},selectedTab:{type:String,attr:"selected-tab",watchCallbacks:["selectedTabChanged"]},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionTabBarChanged",method:"ionTabBarChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"body:keyboardWillHide",method:"onKeyboardWillHide"},{name:"body:keyboardWillShow",method:"onKeyboardWillShow"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-tab-bar-ios-h{padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}.ion-color.sc-ion-tab-bar-ios-h{--background:var(--ion-color-base)}.sc-ion-tab-bar-ios-h.ion-color .sc-ion-tab-bar-ios-s > ion-tab-button{--color:rgba(var(--ion-color-contrast-rgb),0.7);--color-selected:var(--ion-color-contrast);--background-focused:var(--ion-color-shade)}[slot=top].sc-ion-tab-bar-ios-h{border-bottom:var(--border)}[slot=bottom].sc-ion-tab-bar-ios-h{padding-bottom:var(--ion-safe-area-bottom,0);border-top:var(--border)}.tabbar-hidden.sc-ion-tab-bar-ios-h{display:none!important}.sc-ion-tab-bar-ios-h{--background:var(--ion-tab-bar-background,#f8f8f8);--border:0.55px solid var(--ion-tab-bar-border-color,var(--ion-border-color,rgba(0,0,0,0.2)));height:50px}.tabbar-translucent.sc-ion-tab-bar-ios-h{background-color:rgba(var(--ion-color-base-rgb),.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),c=function(){function t(){this.selected=!1,this.disabled=!1}return t.prototype.onTabBarChanged=function(t){this.selected=this.tab===t.detail.tab},t.prototype.onClick=function(t){this.disabled||this.ionTabButtonClick.emit({tab:this.tab,href:this.href,selected:this.selected}),t.preventDefault()},t.prototype.componentWillLoad=function(){void 0===this.layout&&(this.layout=this.config.get("tabButtonLayout","icon-top"))},Object.defineProperty(t.prototype,"hasLabel",{get:function(){return!!this.el.querySelector("ion-label")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasIcon",{get:function(){return!!this.el.querySelector("ion-icon")},enumerable:!0,configurable:!0}),t.prototype.hostData=function(){var t,e=this,n=e.tab,o=e.selected,i=e.layout,a=e.disabled,s=e.hasLabel,c=e.hasIcon;return{role:"tab","ion-activatable":!0,"aria-selected":o?"true":null,id:"tab-button-"+n,"aria-controls":"tab-view-"+n,class:Object.assign({},Object(r.h)(e.color),(t={"tab-selected":o,"tab-disabled":a,"tab-has-label":s,"tab-has-icon":c,"tab-has-label-only":s&&!c,"tab-has-icon-only":c&&!s},t["tab-layout-"+i]=!0,t))}},t.prototype.render=function(){var t=this.mode;return Object(i.b)("a",{href:this.href||"#"},Object(i.b)("slot",null),"md"===t&&Object(i.b)("ion-ripple-effect",null))},Object.defineProperty(t,"is",{get:function(){return"ion-tab-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},disabled:{type:Boolean,attr:"disabled"},doc:{context:"document"},el:{elementRef:!0},href:{type:String,attr:"href"},layout:{type:String,attr:"layout",mutable:!0},mode:{type:String,attr:"mode"},queue:{context:"queue"},selected:{state:!0},tab:{type:String,attr:"tab"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionTabButtonClick",method:"ionTabButtonClick",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"parent:ionTabBarChanged",method:"onTabBarChanged"},{name:"click",method:"onClick"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-tab-button-ios-h{--badge-end:4%;-ms-flex:1;flex:1;color:var(--color)}.sc-ion-tab-button-ios-h, a.sc-ion-tab-button-ios{height:100%}a.sc-ion-tab-button-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:0;padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;width:100%;border:0;outline:none;background:var(--background);text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}a.sc-ion-tab-button-ios:focus-visible{background:var(--background-focused)}@media (any-hover:hover){a.sc-ion-tab-button-ios:hover{color:var(--color-selected)}}.tab-selected.sc-ion-tab-button-ios-h{color:var(--color-selected)}.tab-hidden.sc-ion-tab-button-ios-h{display:none!important}.tab-disabled.sc-ion-tab-button-ios-h{pointer-events:none;opacity:.4}.sc-ion-tab-button-ios-s > ion-label{-ms-flex-order:0;order:0}.sc-ion-tab-button-ios-s > ion-icon{-ms-flex-order:-1;order:-1;height:1em}.sc-ion-tab-button-ios-s > ion-icon, .sc-ion-tab-button-ios-s > ion-label{display:block;-ms-flex-item-align:center;align-self:center;min-width:26px;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.sc-ion-tab-button-ios-h.tab-has-label-only .sc-ion-tab-button-ios-s > ion-label{white-space:normal}.sc-ion-tab-button-ios-s > ion-badge{right:var(--badge-end);padding:1px 6px;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;height:auto;font-size:12px;line-height:16px}.tab-layout-icon-start.sc-ion-tab-button-ios-h   a.sc-ion-tab-button-ios{-ms-flex-direction:row;flex-direction:row}.tab-layout-icon-end.sc-ion-tab-button-ios-h   a.sc-ion-tab-button-ios{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.tab-layout-icon-bottom.sc-ion-tab-button-ios-h   a.sc-ion-tab-button-ios{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.tab-has-icon-only.sc-ion-tab-button-ios-h   a.sc-ion-tab-button-ios, .tab-has-label-only.sc-ion-tab-button-ios-h   a.sc-ion-tab-button-ios, .tab-layout-icon-end.sc-ion-tab-button-ios-h   a.sc-ion-tab-button-ios, .tab-layout-icon-hide.sc-ion-tab-button-ios-h   a.sc-ion-tab-button-ios, .tab-layout-icon-start.sc-ion-tab-button-ios-h   a.sc-ion-tab-button-ios, .tab-layout-label-hide.sc-ion-tab-button-ios-h   a.sc-ion-tab-button-ios{-ms-flex-pack:center;justify-content:center}.sc-ion-tab-button-ios-h.tab-layout-icon-hide .sc-ion-tab-button-ios-s > ion-icon, .sc-ion-tab-button-ios-h.tab-layout-label-hide .sc-ion-tab-button-ios-s > ion-label{display:none}.tab-has-icon-only.sc-ion-tab-button-ios-h, .tab-layout-icon-bottom.sc-ion-tab-button-ios-h, .tab-layout-icon-only.sc-ion-tab-button-ios-h, .tab-layout-icon-top.sc-ion-tab-button-ios-h, .tab-layout-label-hide.sc-ion-tab-button-ios-h{--badge-end:calc(50% - 30px)}.tab-has-label-only.sc-ion-tab-button-ios-h, .tab-layout-icon-end.sc-ion-tab-button-ios-h, .tab-layout-icon-hide.sc-ion-tab-button-ios-h, .tab-layout-icon-start.sc-ion-tab-button-ios-h{--badge-end:calc(50% - 50px)}.sc-ion-tab-button-ios-h{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;--color:var(--ion-tab-bar-color,var(--ion-text-color-step-550,#8c8c8c));--color-selected:var(--ion-tab-bar-color-activated,var(--ion-color-primary,#3880ff));--background:transparent;--background-focused:var(--ion-tab-bar-background-focused,#dadada);max-width:240px;font-size:10px}.sc-ion-tab-button-ios-h.tab-has-label-only .sc-ion-tab-button-ios-s > ion-label{margin:2px 0;font-size:12px;font-size:14px;line-height:1.1}.sc-ion-tab-button-ios-s > ion-label{margin-top:0;margin-bottom:1px;min-height:11px}.sc-ion-tab-button-ios-s > ion-icon{margin-top:4px;font-size:30px}.sc-ion-tab-button-ios-s > ion-icon:before{vertical-align:top}.sc-ion-tab-button-ios-h.tab-layout-icon-end .sc-ion-tab-button-ios-s > ion-label, .sc-ion-tab-button-ios-h.tab-layout-icon-hide .sc-ion-tab-button-ios-s > ion-label, .sc-ion-tab-button-ios-h.tab-layout-icon-start .sc-ion-tab-button-ios-s > ion-label{margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}.sc-ion-tab-button-ios-h.tab-layout-icon-end .sc-ion-tab-button-ios-s > ion-icon, .sc-ion-tab-button-ios-h.tab-layout-icon-start .sc-ion-tab-button-ios-s > ion-icon{min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}.sc-ion-tab-button-ios-h.tab-layout-label-hide .sc-ion-tab-button-ios-s > ion-icon{margin:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),b=function(){function t(){this.transitioning=!1,this.tabs=[],this.useRouter=!1}return t.prototype.componentWillLoad=function(){return o.a(this,void 0,void 0,function(){return o.c(this,function(t){return this.useRouter||(this.useRouter=!!this.doc.querySelector("ion-router")&&!this.el.closest("[no-router]")),this.tabs=Array.from(this.el.querySelectorAll("ion-tab")),this.ionNavWillLoad.emit(),this.componentWillUpdate(),[2]})})},t.prototype.componentDidLoad=function(){this.initSelect()},t.prototype.componentDidUnload=function(){this.tabs.length=0,this.selectedTab=this.leavingTab=void 0},t.prototype.componentWillUpdate=function(){var t=this.el.querySelector("ion-tab-bar");t&&(t.selectedTab=this.selectedTab?this.selectedTab.tab:void 0)},t.prototype.onTabClicked=function(t){var e=t.detail,n=e.href,o=e.tab,i=this.tabs.find(function(t){return t.tab===o});if(this.useRouter&&void 0!==n){var r=this.doc.querySelector("ion-router");r&&r.push(n)}else i&&this.select(i)},t.prototype.select=function(t){return o.a(this,void 0,void 0,function(){var e;return o.c(this,function(n){switch(n.label){case 0:return[4,this.getTab(t)];case 1:return e=n.sent(),this.shouldSwitch(e)?[4,this.setActive(e)]:[2,!1];case 2:return n.sent(),[4,this.notifyRouter()];case 3:return n.sent(),this.tabSwitch(),[2,!0]}})})},t.prototype.setRouteId=function(t){return o.a(this,void 0,void 0,function(){var e,n=this;return o.c(this,function(o){switch(o.label){case 0:return[4,this.getTab(t)];case 1:return e=o.sent(),this.shouldSwitch(e)?[4,this.setActive(e)]:[2,{changed:!1,element:this.selectedTab}];case 2:return o.sent(),[2,{changed:!0,element:this.selectedTab,markVisible:function(){return n.tabSwitch()}}]}})})},t.prototype.getRouteId=function(){return o.a(this,void 0,void 0,function(){var t;return o.c(this,function(e){return[2,void 0!==(t=this.selectedTab&&this.selectedTab.tab)?{id:t,element:this.selectedTab}:void 0]})})},t.prototype.getTab=function(t){return o.a(this,void 0,void 0,function(){var e;return o.c(this,function(n){return(e="string"==typeof t?this.tabs.find(function(e){return e.tab===t}):t)||console.error('tab with id: "'+e+'" does not exist'),[2,e]})})},t.prototype.getSelected=function(){return Promise.resolve(this.selectedTab)},t.prototype.initSelect=function(){return o.a(this,void 0,void 0,function(){return o.c(this,function(t){switch(t.label){case 0:return this.useRouter?[2]:[4,Promise.all(this.tabs.map(function(t){return t.componentOnReady()}))];case 1:return t.sent(),[4,this.select(this.tabs[0])];case 2:return t.sent(),[2]}})})},t.prototype.setActive=function(t){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionNavWillChange.emit(),t.setActive())},t.prototype.tabSwitch=function(){var t=this.selectedTab,e=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&e!==t&&(e&&(e.active=!1),this.ionChange.emit({tab:t}),this.ionNavDidChange.emit())},t.prototype.notifyRouter=function(){if(this.useRouter){var t=this.doc.querySelector("ion-router");if(t)return t.navChanged(1)}return Promise.resolve(!1)},t.prototype.shouldSwitch=function(t){return void 0!==t&&t!==this.selectedTab&&!this.transitioning},t.prototype.render=function(){return[Object(i.b)("slot",{name:"top"}),Object(i.b)("div",{class:"tabs-inner"},Object(i.b)("slot",null)),Object(i.b)("slot",{name:"bottom"})]},Object.defineProperty(t,"is",{get:function(){return"ion-tabs"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{config:{context:"config"},doc:{context:"document"},el:{elementRef:!0},getRouteId:{method:!0},getSelected:{method:!0},getTab:{method:!0},select:{method:!0},selectedTab:{state:!0},setRouteId:{method:!0},tabs:{state:!0},useRouter:{type:Boolean,attr:"use-router",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionTabButtonClick",method:"onTabClicked"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-tabs-h{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;z-index:0}.tabs-inner.sc-ion-tabs, .sc-ion-tabs-h{contain:layout size style}.tabs-inner.sc-ion-tabs{position:relative;-ms-flex:1;flex:1}"},enumerable:!0,configurable:!0}),t}()},230:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return r}),n.d(e,"c",function(){return a});
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
var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function i(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function r(t,e,n,o){return new(n||(n=Promise))(function(i,r){function a(t){try{c(o.next(t))}catch(t){r(t)}}function s(t){try{c(o.throw(t))}catch(t){r(t)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,s)}c((o=o.apply(t,e||[])).next())})}function a(t,e){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}},231:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r}),n.d(e,"c",function(){return c}),n.d(e,"d",function(){return b}),n.d(e,"e",function(){return s}),n.d(e,"f",function(){return a}),n.d(e,"g",function(){return h}),n.d(e,"h",function(){return l}),n.d(e,"i",function(){return f}),n.d(e,"j",function(){return u}),n.d(e,"k",function(){return d});var o=n(230);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */function i(t,e,n,i,r){return o.a(this,void 0,void 0,function(){var a;return o.c(this,function(o){switch(o.label){case 0:if(t)return[2,t.attachViewToDom(e,n,r,i)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"==typeof n?e.ownerDocument.createElement(n):n,i&&i.forEach(function(t){return a.classList.add(t)}),r&&Object.assign(a,r),e.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:o.sent(),o.label=2;case 2:return[2,a]}})})}function r(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}function a(){var t=window.TapticEngine;t&&t.selection()}function s(){var t=window.TapticEngine;t&&t.gestureSelectionStart()}function c(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()}function b(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}function u(t,e){return null!==e.closest(t)}function l(t){var e;return"string"==typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0}function d(t,e){var n;return(n={})[e]=!0,n[e+"-"+t]=!!t,n}function h(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return e[t]=!0}),e}function f(t,e,n,i){return o.a(this,void 0,void 0,function(){var r;return o.c(this,function(o){switch(o.label){case 0:return null==e||"#"===e[0]||-1!==e.indexOf("://")?[3,2]:(r=t.document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[4,r.componentOnReady()]):[3,2];case 1:return o.sent(),[2,r.push(e,i)];case 2:return[2,!1]}})})}}}]);