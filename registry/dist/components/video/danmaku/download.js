!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["video/danmaku/download"]=e():t["video/danmaku/download"]=e()}(self,(function(){return function(){var t={146:function(t,e,i){"use strict";i.r(e),i.d(e,{decodeDanmakuSegment:function(){return a},decodeDanmakuView:function(){return s},proto:function(){return o}});var n=coreApis.runtimeLibrary;const o={nested:{DmWebViewReply:{fields:{state:{type:"int32",id:1},text:{type:"string",id:2},textSide:{type:"string",id:3},dmSge:{type:"DmSegConfig",id:4},flag:{type:"DanmakuFlagConfig",id:5},specialDms:{rule:"repeated",type:"string",id:6},checkBox:{type:"bool",id:7},count:{type:"int64",id:8},commandDms:{rule:"repeated",type:"CommandDm",id:9},dmSetting:{type:"DanmuWebPlayerConfig",id:10}}},CommandDm:{fields:{id:{type:"int64",id:1},oid:{type:"int64",id:2},mid:{type:"int64",id:3},command:{type:"string",id:4},content:{type:"string",id:5},progress:{type:"int32",id:6},ctime:{type:"string",id:7},mtime:{type:"string",id:8},extra:{type:"string",id:9},idStr:{type:"string",id:10}}},DmSegConfig:{fields:{pageSize:{type:"int64",id:1},total:{type:"int64",id:2}}},DanmakuFlagConfig:{fields:{recFlag:{type:"int32",id:1},recText:{type:"string",id:2},recSwitch:{type:"int32",id:3}}},DmSegMobileReply:{fields:{elems:{rule:"repeated",type:"DanmakuElem",id:1}}},DanmakuElem:{fields:{id:{type:"int64",id:1},progress:{type:"int32",id:2},mode:{type:"int32",id:3},fontsize:{type:"int32",id:4},color:{type:"uint32",id:5},midHash:{type:"string",id:6},content:{type:"string",id:7},ctime:{type:"int64",id:8},weight:{type:"int32",id:9},action:{type:"string",id:10},pool:{type:"int32",id:11},idStr:{type:"string",id:12},attr:{type:"int32",id:13}}},DanmuWebPlayerConfig:{fields:{dmSwitch:{type:"bool",id:1},aiSwitch:{type:"bool",id:2},aiLevel:{type:"int32",id:3},blocktop:{type:"bool",id:4},blockscroll:{type:"bool",id:5},blockbottom:{type:"bool",id:6},blockcolor:{type:"bool",id:7},blockspecial:{type:"bool",id:8},preventshade:{type:"bool",id:9},dmask:{type:"bool",id:10},opacity:{type:"float",id:11},dmarea:{type:"int32",id:12},speedplus:{type:"float",id:13},fontsize:{type:"float",id:14},screensync:{type:"bool",id:15},speedsync:{type:"bool",id:16},fontfamily:{type:"string",id:17},bold:{type:"bool",id:18},fontborder:{type:"int32",id:19},drawType:{type:"string",id:20}}}}},r=lodash.curry((async(t,e)=>{const i=new Uint8Array("arrayBuffer"in Blob.prototype?await e.arrayBuffer():await new Response(e).arrayBuffer()),r=(await n.protobufLibrary).Root.fromJSON(o).lookupType(t),a=r.decode(i);return r.toObject(a)})),a=r("DmSegMobileReply"),s=r("DmWebViewReply")},29:function(t,e,i){"use strict";i.r(e),i.d(e,{JsonDanmaku:function(){return S},convertToAss:function(){return x},convertToAssFromJson:function(){return $},getBlobByType:function(){return F},getUserDanmakuConfig:function(){return T}});var n=coreApis.utils.lazyPanel,o=i(729),r=coreApis.utils.sort,a=i(129),s=coreApis.componentApis.video.assUtils;function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}class c{constructor({content:t,time:e,type:i,fontSize:n,color:o}){l(this,"content",void 0),l(this,"time",void 0),l(this,"startTime",void 0),l(this,"type",void 0),l(this,"fontSize",void 0),l(this,"color",void 0),this.content=t,this.time=e,this.startTime=parseFloat(e),this.type=parseInt(i),this.fontSize=parseFloat(n),this.color=parseInt(o)}}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}class u extends c{constructor({content:t,time:e,type:i,fontSize:n,color:o,typeTag:r,colorTag:a,endTime:s}){super({content:t,time:e,type:i,fontSize:n,color:o}),d(this,"typeTag",void 0),d(this,"colorTag",void 0),d(this,"endTime",void 0),this.typeTag=r,this.colorTag=a,this.endTime=s}text(t){let e=t[this.fontSize];e||(e=t[25]);const i=e.match(/Style:(.*?),/)[1].trim();return`Dialogue: 0,${this.time},${this.endTime},${i},,0,0,0,,{${this.typeTag}${this.colorTag}}${this.content}`}}class p{constructor(t,e,i,n,o){d(this,"danmakus",void 0),d(this,"title",void 0),d(this,"fontStyles",void 0),d(this,"blockTypes",void 0),d(this,"resolution",void 0),this.danmakus=t,this.title=e,this.fontStyles=i,this.blockTypes=n,this.resolution=o}generateAss(){return`${`\n[Script Info]\n; Script generated by Bilibili Evolved Danmaku Converter\n; https://github.com/the1812/Bilibili-Evolved/\nTitle: ${this.title}\nScriptType: v4.00+\nPlayResX: ${this.resolution.x}\nPlayResY: ${this.resolution.y}\nTimer: 10.0000\nWrapStyle: 2\nScaledBorderAndShadow: no\n\n[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\n${Object.values(this.fontStyles).join("\n")}\n\n[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\n                `.trim()}\n${this.danmakus.map((t=>t.text(this.fontStyles))).filter((t=>""!==t)).join("\n")}`}}function h(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}class m extends c{constructor({content:t,time:e,type:i,fontSize:n,color:o,timeStamp:r,pool:a,userHash:s,rowId:l}){super({content:t,time:e,type:i,fontSize:n,color:o}),h(this,"timeStamp",void 0),h(this,"pool",void 0),h(this,"userHash",void 0),h(this,"rowId",void 0),h(this,"pDataArray",void 0),this.timeStamp=parseInt(r),this.pool=parseInt(a),this.userHash=s,this.rowId=parseInt(l),this.pDataArray=[e,i,n,o,r,a,s,l]}text(){return`<d p="${this.pDataArray.join(",")}">${this.content}</d>`}static parse(t){const e=t.getAttribute("p"),[i,n,o,r,a,s,l,c]=e.split(","),d=t.innerHTML;return new m({content:d,time:i,type:n,fontSize:o,color:r,timeStamp:a,pool:s,userHash:l,rowId:c})}}class f{constructor(t){h(this,"xml",void 0),h(this,"danmakus",void 0),this.xml=t;const e=(new DOMParser).parseFromString(t,"application/xml").documentElement;this.danmakus=[...e.querySelectorAll("d[p]")].map((t=>m.parse(t)))}}var g=coreApis.utils;let y;function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}!function(t){t[t.Normal=1]="Normal",t[t.Normal2=2]="Normal2",t[t.Normal3=3]="Normal3",t[t.Bottom=4]="Bottom",t[t.Top=5]="Top",t[t.Reversed=6]="Reversed",t[t.Special=7]="Special",t[t.Special2=8]="Special2"}(y||(y={}));class b{constructor(t,e,i,n){v(this,"horizontalStack",void 0),v(this,"horizontalTrack",void 0),v(this,"verticalStack",void 0),v(this,"verticalTrack",void 0),v(this,"resolution",void 0),v(this,"duration",void 0),v(this,"canvas",void 0),v(this,"context",void 0),v(this,"fontSizes",void 0),v(this,"bottomMarginPercent",void 0),v(this,"danmakuHeight",void 0),v(this,"trackHeight",void 0),v(this,"trackCount",void 0),this.horizontalStack=[],this.horizontalTrack=[],this.verticalStack=[],this.verticalTrack=[],this.resolution=e,this.duration=i,this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.fontSizes={30:`64px ${t}`,25:`52px ${t}`,18:`36px ${t}`,45:`90px ${t}`},this.bottomMarginPercent=n,this.generateTracks()}generateTracks(){this.danmakuHeight=52,this.trackHeight=2*b.margin+52,this.trackCount=parseInt((0,g.fixed)(this.resolution.y*(1-this.bottomMarginPercent)/this.trackHeight,0))}getTextSize(t){this.context.font=this.fontSizes[t.fontSize];return[this.context.measureText(t.content).width/2,this.danmakuHeight/2]}getTags(t,{targetTrack:e,initTrackNumber:i,nextTrackNumber:n,willOverlay:o,getTrackItem:r,getTag:a}){const[s,l]=this.getTextSize(t),c=2*s,d=this.duration(t)*c/(this.resolution.x+c)+b.nextDanmakuDelay;let u=i,p=null;const h=t=>o(t,u,c);do{p=e.find(h),u+=n}while(p&&u<=this.trackCount&&u>=0);return u>this.trackCount||u<0?"\\pos(0,-999)":(u-=n,e.push(r(u,c,d)),a({trackNumber:u,x:s,y:l}))}getHorizontalTags(t){return this.getTags(t,{targetTrack:this.horizontalTrack,initTrackNumber:0,nextTrackNumber:1,willOverlay:(e,i,n)=>e.trackNumber===i&&(e.width<n?this.duration(t)*this.resolution.x/(this.resolution.x+n)<=e.end-t.startTime:e.visible>t.startTime),getTrackItem:(e,i,n)=>({width:i,start:t.startTime,visible:t.startTime+n,end:t.startTime+this.duration(t),trackNumber:e}),getTag:({trackNumber:e,x:i,y:n})=>`\\move(${this.resolution.x+i},${e*this.trackHeight+b.margin+n},${-i},${e*this.trackHeight+b.margin+n},0,${1e3*this.duration(t)})`})}getVerticalTags(t){const e="top"===b.danmakuType[t.type];return this.getTags(t,{targetTrack:this.verticalTrack,initTrackNumber:e?0:this.trackCount-1,nextTrackNumber:e?1:-1,willOverlay:(e,i)=>e.trackNumber===i&&e.end>t.startTime,getTrackItem:e=>({start:t.startTime,end:t.startTime+this.duration(t),trackNumber:e}),getTag:({trackNumber:t,y:i})=>e?`\\pos(${this.resolution.x/2},${t*this.trackHeight+b.margin+i})`:`\\pos(${this.resolution.x/2},${this.resolution.y-b.margin-i-(this.trackCount-1-t)*this.trackHeight})`})}push(t){let e="",i=[];switch(b.danmakuType[t.type]){case"normal":case"reversed":e=this.getHorizontalTags(t),i=this.horizontalStack;break;case"top":case"bottom":e=this.getVerticalTags(t),i=this.verticalStack;break;case"special":default:return{tags:"\\pos(0,-999)"}}const n={tags:e};return i.push(n),n}}function k(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}v(b,"danmakuType",{[y.Normal]:"normal",[y.Normal2]:"normal",[y.Normal3]:"normal",[y.Bottom]:"bottom",[y.Top]:"top",[y.Reversed]:"reversed",[y.Special]:"special",[y.Special2]:"special"}),v(b,"margin",4),v(b,"nextDanmakuDelay",.05);class w{constructor({title:t,font:e,alpha:i,duration:n,blockTypes:o,blockFilter:r,resolution:a,bottomMarginPercent:s,bold:l}){k(this,"title",void 0),k(this,"font",void 0),k(this,"alpha",void 0),k(this,"duration",void 0),k(this,"blockTypes",void 0),k(this,"blockFilter",void 0),k(this,"resolution",void 0),k(this,"bold",void 0),k(this,"danmakuStack",void 0),this.title=t,this.font=e,this.alpha=Math.round(255*i).toString(16).toUpperCase().padStart(2,"0"),this.duration=n,this.blockTypes=o,this.blockFilter=r||(()=>!0),this.resolution=a,this.bold=l,this.danmakuStack=new b(e,a,n,s)}get fontStyles(){return{36:`Style: Larger,${this.font},72,&H${this.alpha}FFFFFF,&H${this.alpha}FFFFFF,&H${this.alpha}000000,&H${this.alpha}000000,${this.bold?"1":"0"},0,0,0,100,100,0,0,1,1.2,0,5,0,0,0,0`,30:`Style: Large,${this.font},64,&H${this.alpha}FFFFFF,&H${this.alpha}FFFFFF,&H${this.alpha}000000,&H${this.alpha}000000,${this.bold?"1":"0"},0,0,0,100,100,0,0,1,1.2,0,5,0,0,0,0`,25:`Style: Medium,${this.font},52,&H${this.alpha}FFFFFF,&H${this.alpha}FFFFFF,&H${this.alpha}000000,&H${this.alpha}000000,${this.bold?"1":"0"},0,0,0,100,100,0,0,1,1.2,0,5,0,0,0,0`,18:`Style: Small,${this.font},36,&H${this.alpha}FFFFFF,&H${this.alpha}FFFFFF,&H${this.alpha}000000,&H${this.alpha}000000,${this.bold?"1":"0"},0,0,0,100,100,0,0,1,1.2,0,5,0,0,0,0`,45:`Style: ExtraLarge,${this.font},90,&H${this.alpha}FFFFFF,&H${this.alpha}FFFFFF,&H${this.alpha}000000,&H${this.alpha}000000,${this.bold?"1":"0"},0,0,0,100,100,0,0,1,1.2,0,5,0,0,0,0`}}xmlDanmakuToAssDocument(t){const e=[];for(const i of t){const t=-1!==this.blockTypes.indexOf(i.type),n=-1!==this.blockTypes.indexOf("color")&&i.color!==w.white;if(t||n)continue;if(!this.blockFilter(i))continue;const[o,r]=(0,s.convertTimeByDuration)(i.startTime,this.duration(i));e.push(new u({content:(0,s.normalizeContent)(i.content),time:o,endTime:r,type:i.type.valueOf().toString(),fontSize:i.fontSize.toString(),color:i.color.toString(),typeTag:this.convertType(i),colorTag:(0,s.convertHexColorForDialogue)(i.color.toString(16))}))}return new p(e,this.title,this.fontStyles,this.blockTypes,this.resolution)}xmlStringToAssDocument(t){const e=new f(t);return this.xmlDanmakuToAssDocument(e.danmakus.sort((0,r.ascendingSort)((t=>t.startTime))))}convertType(t){return this.danmakuStack.push(t).tags}}k(w,"white",16777215);class S{constructor(t,e){var i,n,o;this.aid=t,this.cid=e,o=[],(n="jsonDanmakus")in(i=this)?Object.defineProperty(i,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[n]=o}get xmlDanmakus(){return this.jsonDanmakus.map((t=>({content:t.content,time:t.progress?(t.progress/1e3).toString():"0",type:t.mode?.toString()??"1",fontSize:t.fontsize?.toString()??"25",color:t.color?.toString()??"16777215",timeStamp:t.ctime?.toString()??"0",pool:t.pool?.toString()??"0",userHash:t.midHash??"0",rowId:t.idStr??"0"})))}async fetchInfo(){const{decodeDanmakuSegment:t,decodeDanmakuView:e}=await Promise.resolve().then(i.bind(i,146)),n=async t=>(await fetch(t)).blob(),a=await n(`https://api.bilibili.com/x/v2/dm/web/view?type=1&oid=${this.cid}&pid=${this.aid}`);if(!a)throw new Error("获取弹幕信息失败");const s=await e(a),{total:l}=s.dmSge;if(void 0===l)throw new Error(`获取弹幕分页数失败: ${JSON.stringify(lodash.omit(s,"flag"))}`);console.log("segment count =",l);const c=await Promise.all(new Array(l).fill(0).map((async(e,i)=>{const r=await n(`https://api.bilibili.com/x/v2/dm/web/seg.so?type=1&oid=${this.cid}&pid=${this.aid}&segment_index=${i+1}`);if(!r)return(0,o.logError)(new Error(`弹幕片段${i+1}下载失败`)),[];console.log(`received blob for segment ${i+1}`,r);return(await t(r)).elems??[]})));return this.jsonDanmakus=c.flat().sort((0,r.ascendingSort)((t=>t.progress))),this}}const T=async()=>{const t=(0,a.getFriendlyTitle)(),e={font:"微软雅黑",alpha:.4,duration:t=>{switch(t.type){case 4:case 5:return 4;default:return 6}},blockTypes:[7,8],resolution:{x:1920,y:1080},bottomMarginPercent:.15,bold:!1};let i={...e,title:t};try{await(0,n.loadDanmakuSettingsPanel)();const t=localStorage.getItem("bilibili_player_settings");if(t){const e=JSON.parse(t),n=(t,i)=>lodash.get(e,`setting_config.${t}`,i);i.blockTypes=(()=>{const t=[],i={scroll:[1,2,3],top:[5],bottom:[4],color:["color"]};for(const[n,o]of Object.entries(i))!1===lodash.get(e,`block.type_${n}`,!0)&&t.push(...o);return t.concat(7,8)})(),i.bold=n("bold",!1),i.alpha=lodash.clamp(1-parseFloat(n("opacity","0.4")),0,1);const o=1.4-.4*n("fontsize",1);i.resolution={x:Math.round(1920*o),y:Math.round(1080*o)},i.duration=(()=>{const t=18-3*n("speedplus",0);return e=>{switch(e.type){case 4:case 5:return 4;default:return t}}})();const r=n("danmakuArea",0);i.bottomMarginPercent=r>=100?0:r/100,0===i.bottomMarginPercent&&n("preventshade",!1)&&(i.bottomMarginPercent=.15);const a=lodash.get(e,"block.list",[]);i.blockFilter=t=>{for(const e of a)if(e.s)switch(e.t){default:return!0;case"keyword":if(t.content.includes(e.v))return!1;break;case"regexp":if(new RegExp(e.v).test(t.content))return!1;break;case"user":if(t.userHash===e.v)return!1}return!0}}else console.warn("[弹幕转换] 未找到播放器设置"),i={...i,...e};i.font=dq(".bilibili-player-video-danmaku-setting-right-font .bui-select-result").innerText}catch(t){(0,o.logError)(t),i={...i,...e}}for(const[t,n]of Object.entries(i))null==n&&(console.warn("danmaku config invalid for key",t,", value =",n),i[t]=e[n]);return console.log(i),i},x=async t=>new w(await T()).xmlStringToAssDocument(t).generateAss(),$=async t=>new w(await T()).xmlDanmakuToAssDocument(t.xmlDanmakus.map((t=>new m(t)))).generateAss(),F=async(t,e=unsafeWindow)=>{const{aid:i,cid:n}=e,o=await new S(i,n).fetchInfo();switch(t){case"xml":{const t=`\n<?xml version="1.0" encoding="UTF-8"?><i><chatserver>chat.bilibili.com</chatserver><chatid>${n}</chatid><mission>0</mission><maxlimit>${o.xmlDanmakus.length}</maxlimit><state>0</state><real_name>0</real_name><source>k-v</source>\n${o.xmlDanmakus.map((t=>new m(t).text())).join("\n")}\n</i>\n      `.trim();return new Blob([t],{type:"text/xml"})}default:case"json":return new Blob([JSON.stringify(o.jsonDanmakus)],{type:"text/json"});case"ass":return new Blob([await $(o)],{type:"text/ass"})}}},188:function(t,e,i){var n=i(645)((function(t){return t[1]}));n.push([t.id,".download-danmaku-config.download-video-config-section .be-dropdown {\n  text-transform: uppercase;\n}",""]),t.exports=n},645:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=t(e);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,i,n){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var o={};if(n)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var a=this[r][0];null!=a&&(o[a]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);n&&o[l[0]]||(i&&(l[2]?l[2]="".concat(i," and ").concat(l[2]):l[2]=i),e.push(l))}},e}},379:function(t,e,i){"use strict";var n,o=function(){return void 0===n&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
n=Boolean(window&&document&&document.all&&!window.atob)),n},r=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),a=[];function s(t){for(var e=-1,i=0;i<a.length;i++)if(a[i].identifier===t){e=i;break}return e}function l(t,e){for(var i={},n=[],o=0;o<t.length;o++){var r=t[o],l=e.base?r[0]+e.base:r[0],c=i[l]||0,d="".concat(l," ").concat(c);i[l]=c+1;var u=s(d),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:d,updater:g(p,e),references:1}),n.push(d)}return n}function c(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var o=i.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var a=r(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function p(t,e,i,n){var o=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=u(e,o);else{var r=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function h(t,e,i){var n=i.css,o=i.media,r=i.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var m=null,f=0;function g(t,e){var i,n,o;if(e.singleton){var r=f++;i=m||(m=c(e)),n=p.bind(null,i,r,!1),o=p.bind(null,i,r,!0)}else i=c(e),n=h.bind(null,i,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var i=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<i.length;n++){var o=s(i[n]);a[o].references--}for(var r=l(t,e),c=0;c<i.length;c++){var d=s(i[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}i=r}}}},42:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return h}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"multiple-widgets"},[i("DefaultWidget",{attrs:{disabled:t.disabled,name:"下载弹幕 (XML)",icon:"danmaku"},on:{click:function(e){return t.download("xml")}}}),t._v(" "),i("DefaultWidget",{attrs:{disabled:t.disabled,name:"下载弹幕 (JSON)",icon:"danmaku"},on:{click:function(e){return t.download("json")}}}),t._v(" "),i("DefaultWidget",{attrs:{disabled:t.disabled,name:"下载弹幕 (ASS)",icon:"danmaku"},on:{click:function(e){return t.download("ass")}}})],1)};n._withStripped=!0;var o=coreApis.download,r=i(729),a=i(129),s=coreApis.pluginApis.data,l=i(643),c=i(574),d=i(29);(0,s.addData)("ui.icons",(t=>{t.danmaku=c}));var u=Vue.extend({components:{DefaultWidget:l.DefaultWidget},data:()=>({disabled:!1}),methods:{async download(t){try{this.disabled=!0;const e=(0,a.getFriendlyTitle)(),i=await(0,d.getBlobByType)(t);await o.DownloadPackage.single(`${e}.${t}`,i)}catch(t){(0,r.logError)(t)}finally{this.disabled=!1}}}}),p=(0,i(900).Z)(u,n,[],!1,null,null,null);p.options.__file="registry/lib/components/video/danmaku/download/DownloadDanmaku.vue";var h=p.exports},429:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return m}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"download-danmaku-config download-video-config-section"},[i("div",{staticClass:"download-video-config-item"},[i("div",{staticClass:"download-video-config-title"},[t._v("\n      弹幕:\n    ")]),t._v(" "),i("VDropdown",{attrs:{items:t.items},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.item;return[t._v("\n        "+t._s(i)+"\n      ")]}}]),model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1)])};n._withStripped=!0;var o=coreApis.settings,r=i(643);const a=(0,o.getComponentSettings)("downloadVideo").options;var s=Vue.extend({components:{VDropdown:r.VDropdown},data:()=>({type:a.danmakuType??"无",items:["无","ass","json","xml"]}),computed:{enabled(){return"无"!==this.type}},watch:{type(t){a.danmakuType=t}}}),l=i(379),c=i.n(l),d=i(188),u=i.n(d),p={insert:"head",singleton:!1},h=(c()(u(),p),u().locals,(0,i(900).Z)(s,n,[],!1,null,null,null));h.options.__file="registry/lib/components/video/danmaku/download/Plugin.vue";var m=h.exports},900:function(t,e,i){"use strict";function n(t,e,i,n,o,r,a,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):o&&(l=s?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}i.d(e,{Z:function(){return n}})},574:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  viewBox="0 0 24 24"><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h4h5.9H20c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M5,7h8v2H5V7z M7,17H5v-2h2V17z M6.3,13v-2H18v2H6.3z M19,17H9v-2h10V17z M19,9h-4.1V7H19V9z"/></svg>'},643:function(t){"use strict";t.exports=coreApis.ui},729:function(t){"use strict";t.exports=coreApis.utils.log},129:function(t){"use strict";t.exports=coreApis.utils.title}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var r=e[n]={id:n,exports:{}};return t[n](r,r.exports,i),r.exports}i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,{a:e}),e},i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return function(){"use strict";i.d(n,{component:function(){return r}});var t=coreApis.spinQuery,e=coreApis.toast,o=coreApis.utils.urls;const r={name:"downloadDanmaku",displayName:"下载弹幕",description:{"zh-CN":"启用下载弹幕支持, 在视频和番剧页面中可从功能面板里下载弹幕. 请注意 ASS 弹幕下载不会包含高级弹幕, 字幕弹幕等."},tags:[componentsTags.video],entry:none,reload:none,unload:none,plugin:{displayName:"下载视频 - 下载弹幕支持",setup:({addData:t})=>{t("downloadVideo.assets",(async t=>{const{getBlobByType:n}=await Promise.resolve().then(i.bind(i,29));t.push({name:"downloadDanmaku",displayName:"下载弹幕",getAssets:async(t,i)=>{const{type:o,enabled:r}=i;if(!r)return[];const a=e.Toast.info("获取弹幕中...","下载弹幕");let s=0;const l=await Promise.allSettled(t.map((async e=>{const i=await n(o,e.input);return s++,a.message=`获取弹幕中... (${s}/${t.length})`,{name:`${e.input.title}.${o}`,data:i}}))),c=l.filter((t=>"fulfilled"===t.status)),d=l.filter((t=>"rejected"===t.status));return a.message=`获取完成. 成功 ${c.length} 个, 失败 ${d.length} 个.`,c.map((t=>t.value))},component:()=>Promise.resolve().then(i.bind(i,429)).then((t=>t.default))})}))}},urlInclude:o.videoAndBangumiUrls,widget:{condition:t.hasVideo,component:()=>Promise.resolve().then(i.bind(i,42)).then((t=>t.default))},commitHash:"384f0531f678f48999772f4175fbc406bcbbd5e1"}}(),n=n.component}()}));