!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/auto-light"]=t():e["video/player/auto-light"]=t()}(self,(function(){return function(){"use strict";var e,t,n={579:function(e){e.exports=coreApis.componentApis.video.playerLight},109:function(e){e.exports=coreApis.utils}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return n[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var u={};e=e||[null,t({}),t([]),t(t)];for(var a=2&o&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){u[e]=function(){return n[e]}}));return u.default=function(){return n},r.d(i,u),i},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){r.d(i,{component:function(){return o}});var e=coreApis.componentApis.video.playerAgent,t=coreApis.observer;let n;const o={name:"playerAutoLight",displayName:"播放时自动关灯",urlInclude:coreApis.utils.urls.allVideoUrls,tags:[componentsTags.video],description:{"zh-CN":"在视频播放时自动关灯, 暂停或结束时再自动打开."},entry:async()=>{const{isEmbeddedPlayer:o}=await Promise.resolve().then(r.t.bind(r,109,23)),{lightOn:i,lightOff:u}=await Promise.resolve().then(r.t.bind(r,579,23));o()||(0,t.videoChange)((async()=>{if(null!=n){const e=await n.query.video.element();e.removeEventListener("ended",i),e.removeEventListener("pause",i),e.removeEventListener("play",u)}n=e.playerAgent;const t=await n.query.video.element();n.isAutoPlay()&&u(),t.addEventListener("ended",i),t.addEventListener("pause",i),t.addEventListener("play",u)}))},commitHash:"a05f7bb7441c6f123e5b87969840434690bca341",coreVersion:"2.1.7"}}(),i=i.component}()}));