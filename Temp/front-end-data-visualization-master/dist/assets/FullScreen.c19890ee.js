import{A as v,b,C as h,o as N,e as C}from"./vendor.b99b632f.js";import{T as F}from"./TileImage.0ebee0ae.js";import{B as E}from"./BingMaps.5a522d6d.js";import{E as S,bW as y,bZ as g,b_ as L,b$ as d,Q as x,bX as w,M as k,V as T,bY as A}from"./ol.bb58850a.js";import{_ as R}from"./index.8bb5b140.js";import"./net.a0d7cd86.js";var M=globalThis&&globalThis.__extends||function(){var n=function(l,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,s){e.__proto__=s}||function(e,s){for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])},n(l,t)};return function(l,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");n(l,t);function e(){this.constructor=l}l.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}}(),p=["fullscreenchange","webkitfullscreenchange","MSFullscreenChange"],_={ENTERFULLSCREEN:"enterfullscreen",LEAVEFULLSCREEN:"leavefullscreen"},q=function(n){M(l,n);function l(t){var e=this,s=t||{};e=n.call(this,{element:document.createElement("div"),target:s.target})||this,e.on,e.once,e.un,e.cssClassName_=s.className!==void 0?s.className:"ol-full-screen",e.activeClassName_=s.activeClassName!==void 0?s.activeClassName.split(" "):[e.cssClassName_+"-true"],e.inactiveClassName_=s.inactiveClassName!==void 0?s.inactiveClassName.split(" "):[e.cssClassName_+"-false"];var a=s.label!==void 0?s.label:"\u2922";e.labelNode_=typeof a=="string"?document.createTextNode(a):a;var r=s.labelActive!==void 0?s.labelActive:"\xD7";e.labelActiveNode_=typeof r=="string"?document.createTextNode(r):r,e.button_=document.createElement("button");var i=s.tipLabel?s.tipLabel:"Toggle full-screen";e.setClassName_(e.button_,u()),e.button_.setAttribute("type","button"),e.button_.title=i,e.button_.appendChild(e.labelNode_),e.button_.addEventListener(S.CLICK,e.handleClick_.bind(e),!1);var c=e.cssClassName_+" "+y+" "+g+" "+(f()?"":L),o=e.element;return o.className=c,o.appendChild(e.button_),e.keys_=s.keys!==void 0?s.keys:!1,e.source_=s.source,e}return l.prototype.handleClick_=function(t){t.preventDefault(),this.handleFullScreen_()},l.prototype.handleFullScreen_=function(){if(!!f()){var t=this.getMap();if(!!t)if(u())U();else{var e=void 0;this.source_?e=typeof this.source_=="string"?document.getElementById(this.source_):this.source_:e=t.getTargetElement(),this.keys_?O(e):m(e)}}},l.prototype.handleFullScreenChange_=function(){var t=this.getMap();u()?(this.setClassName_(this.button_,!0),d(this.labelActiveNode_,this.labelNode_),this.dispatchEvent(_.ENTERFULLSCREEN)):(this.setClassName_(this.button_,!1),d(this.labelNode_,this.labelActiveNode_),this.dispatchEvent(_.LEAVEFULLSCREEN)),t&&t.updateSize()},l.prototype.setClassName_=function(t,e){var s,a,r,i=this.activeClassName_,c=this.inactiveClassName_,o=e?i:c;(s=t.classList).remove.apply(s,i),(a=t.classList).remove.apply(a,c),(r=t.classList).add.apply(r,o)},l.prototype.setMap=function(t){if(n.prototype.setMap.call(this,t),t)for(var e=0,s=p.length;e<s;++e)this.listenerKeys.push(x(document,p[e],this.handleFullScreenChange_,this))},l}(w);function f(){var n=document.body;return!!(n.webkitRequestFullscreen||n.msRequestFullscreen&&document.msFullscreenEnabled||n.requestFullscreen&&document.fullscreenEnabled)}function u(){return!!(document.webkitIsFullScreen||document.msFullscreenElement||document.fullscreenElement)}function m(n){n.requestFullscreen?n.requestFullscreen():n.msRequestFullscreen?n.msRequestFullscreen():n.webkitRequestFullscreen&&n.webkitRequestFullscreen()}function O(n){n.webkitRequestFullscreen?n.webkitRequestFullscreen():m(n)}function U(){document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}var B=q;const j={id:"map",class:"map__x"},P={setup(n){const l=v(),t=b(null);function e(){t.value=new k({target:"map",layers:[new F({source:new E({key:"AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-",imagerySet:"Aerial"})})],view:new T({projection:"EPSG:4326",center:[114.064839,22.548857],zoom:12}),controls:A().extend([new B])})}return h(()=>{l.commit("setComponentPath","src/views/OpenLayers/Basic/pages/FullScreen/FullScreen.vue"),e()}),(s,a)=>(N(),C("div",j))}};var X=R(P,[["__scopeId","data-v-1b4c2b80"]]);export{X as default};
