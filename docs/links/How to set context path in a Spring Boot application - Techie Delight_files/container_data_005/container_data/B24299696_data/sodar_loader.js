(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
function q(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function r(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:q(a)}}var t="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){if(a==Array.prototype||a==Object.prototype)return a;a[b]=d.value;return a}; 
function u(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var d=a[b];if(d&&d.Math==Math)return d}throw Error("Cannot find global object");}var v=u(this);function w(a,b){if(b){var d=v;a=a.split(".");for(var e=0;e<a.length-1;e++){var h=a[e];h in d||(d[h]={});d=d[h]}a=a[a.length-1];e=d[a];b=b(e);b!=e&&null!=b&&t(d,a,{configurable:!0,writable:!0,value:b})}}var x; 
if("function"==typeof Object.setPrototypeOf)x=Object.setPrototypeOf;else{var y;a:{var z={s:!0},A={};try{A.__proto__=z;y=A.s;break a}catch(a){}y=!1}x=y?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var B=x;function C(){this.f=!1;this.b=null;this.h=void 0;this.a=1;this.o=this.g=0;this.c=null}function D(a){if(a.f)throw new TypeError("Generator is already running");a.f=!0}C.prototype.j=function(a){this.h=a}; 
function H(a,b){a.c={A:b,B:!0};a.a=a.g||a.o}C.prototype.return=function(a){this.c={return:a};this.a=this.o};function I(a){this.a=new C;this.b=a}function J(a,b){D(a.a);var d=a.a.b;if(d)return K(a,"return"in d?d["return"]:function(e){return{value:e,done:!0}},b,a.a.return);a.a.return(b);return L(a)} 
function K(a,b,d,e){try{var h=b.call(a.a.b,d);if(!(h instanceof Object))throw new TypeError("Iterator result "+h+" is not an object");if(!h.done)return a.a.f=!1,h;var l=h.value}catch(c){return a.a.b=null,H(a.a,c),L(a)}a.a.b=null;e.call(a.a,l);return L(a)}function L(a){for(;a.a.a;)try{var b=a.b(a.a);if(b)return a.a.f=!1,{value:b.value,done:!1}}catch(d){a.a.h=void 0,H(a.a,d)}a.a.f=!1;if(a.a.c){b=a.a.c;a.a.c=null;if(b.B)throw b.A;return{value:b.return,done:!0}}return{value:void 0,done:!0}} 
function aa(a){this.next=function(b){D(a.a);a.a.b?b=K(a,a.a.b.next,b,a.a.j):(a.a.j(b),b=L(a));return b};this.throw=function(b){D(a.a);a.a.b?b=K(a,a.a.b["throw"],b,a.a.j):(H(a.a,b),b=L(a));return b};this.return=function(b){return J(a,b)};this[Symbol.iterator]=function(){return this}}function M(a,b){b=new aa(new I(b));B&&a.prototype&&B(b,a.prototype);return b} 
w("Symbol",function(a){function b(h){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new d("jscomp_symbol_"+(h||"")+"_"+e++,h)}function d(h,l){this.a=h;t(this,"description",{configurable:!0,writable:!0,value:l})}if(a)return a;d.prototype.toString=function(){return this.a};var e=0;return b}); 
w("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),d=0;d<b.length;d++){var e=v[b[d]];"function"===typeof e&&"function"!=typeof e.prototype[a]&&t(e.prototype,a,{configurable:!0,writable:!0,value:function(){return ba(q(this))}})}return a});function ba(a){a={next:a};a[Symbol.iterator]=function(){return this};return a} 
w("Promise",function(a){function b(c){this.b=0;this.g=void 0;this.a=[];var f=this.c();try{c(f.resolve,f.reject)}catch(g){f.reject(g)}}function d(){this.a=null}function e(c){return c instanceof b?c:new b(function(f){f(c)})}if(a)return a;d.prototype.b=function(c){if(null==this.a){this.a=[];var f=this;this.c(function(){f.g()})}this.a.push(c)};var h=v.setTimeout;d.prototype.c=function(c){h(c,0)};d.prototype.g=function(){for(;this.a&&this.a.length;){var c=this.a;this.a=[];for(var f=0;f<c.length;++f){var g= 
c[f];c[f]=null;try{g()}catch(k){this.f(k)}}}this.a=null};d.prototype.f=function(c){this.c(function(){throw c;})};b.prototype.c=function(){function c(k){return function(m){g||(g=!0,k.call(f,m))}}var f=this,g=!1;return{resolve:c(this.F),reject:c(this.f)}};b.prototype.F=function(c){if(c===this)this.f(new TypeError("A Promise cannot resolve to itself"));else if(c instanceof b)this.G(c);else{a:switch(typeof c){case "object":var f=null!=c;break a;case "function":f=!0;break a;default:f=!1}f?this.D(c):this.h(c)}}; 
b.prototype.D=function(c){var f=void 0;try{f=c.then}catch(g){this.f(g);return}"function"==typeof f?this.H(f,c):this.h(c)};b.prototype.f=function(c){this.j(2,c)};b.prototype.h=function(c){this.j(1,c)};b.prototype.j=function(c,f){if(0!=this.b)throw Error("Cannot settle("+c+", "+f+"): Promise already settled in state"+this.b);this.b=c;this.g=f;this.o()};b.prototype.o=function(){if(null!=this.a){for(var c=0;c<this.a.length;++c)l.b(this.a[c]);this.a=null}};var l=new d;b.prototype.G=function(c){var f=this.c(); 
c.l(f.resolve,f.reject)};b.prototype.H=function(c,f){var g=this.c();try{c.call(f,g.resolve,g.reject)}catch(k){g.reject(k)}};b.prototype.then=function(c,f){function g(n,p){return"function"==typeof n?function(E){try{k(n(E))}catch(F){m(F)}}:p}var k,m,G=new b(function(n,p){k=n;m=p});this.l(g(c,k),g(f,m));return G};b.prototype.catch=function(c){return this.then(void 0,c)};b.prototype.l=function(c,f){function g(){switch(k.b){case 1:c(k.g);break;case 2:f(k.g);break;default:throw Error("Unexpected state: "+ 
k.b);}}var k=this;null==this.a?l.b(g):this.a.push(g)};b.resolve=e;b.reject=function(c){return new b(function(f,g){g(c)})};b.race=function(c){return new b(function(f,g){for(var k=r(c),m=k.next();!m.done;m=k.next())e(m.value).l(f,g)})};b.all=function(c){var f=r(c),g=f.next();return g.done?e([]):new b(function(k,m){function G(E){return function(F){n[E]=F;p--;0==p&&k(n)}}var n=[],p=0;do n.push(void 0),p++,e(g.value).l(G(n.length-1),m),g=f.next();while(!g.done)})};return b}); 
var N=this||self,ca=/^[\w+/_-]+[=]{0,2}$/,O=null;function P(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&ca.test(a)?a:""}function Q(a){return a};function R(a,b){var d=void 0;return new (d||(d=Promise))(function(e,h){function l(g){try{f(b.next(g))}catch(k){h(k)}}function c(g){try{f(b["throw"](g))}catch(k){h(k)}}function f(g){g.done?e(g.value):(new d(function(k){k(g.value)})).then(l,c)}f((b=b.apply(a,void 0)).next())})};function da(a,b){a.addEventListener&&a.addEventListener("load",b,!1)};var S;function T(a,b){this.b=a===U&&b||"";this.a=V}function W(a){return a instanceof T&&a.constructor===T&&a.a===V?a.b:"type_error:Const"}var V={},U={};function X(a,b){this.b=a===Y&&b||"";this.a=Z}function ea(a){var b=W(new T(U,"//tpc.googlesyndication.com/sodar/%{basename}.js"));if(!fa.test(b))throw Error("Invalid TrustedResourceUrl format: "+b);var d=b.replace(ha,function(e,h){if(!Object.prototype.hasOwnProperty.call(a,h))throw Error('Found marker, "'+h+'", in format string, "'+b+'", but no valid label mapping found in args: '+JSON.stringify(a));e=a[h];return e instanceof T?W(e):encodeURIComponent(String(e))});return ia(d)} 
var ha=/%{(\w+)}/g,fa=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,Z={};function ia(a){if(void 0===S){var b=null;var d=N.trustedTypes;if(d&&d.createPolicy){try{b=d.createPolicy("goog#html",{createHTML:Q,createScript:Q,createScriptURL:Q})}catch(e){N.console&&N.console.error(e.message)}S=b}else S=b}a=(b=S)?b.createScriptURL(a):a;return new X(Y,a)}var Y={};function ja(a){var b;(b=a.ownerDocument&&a.ownerDocument.defaultView)&&b!=N?b=P(b.document):(null===O&&(O=P(N.document)),b=O);b&&a.setAttribute("nonce",b)};function ka(a){var b=window,d=!0;d=void 0===d?!1:d;new Promise(function(e,h){function l(){c.onload=null;c.onerror=null;b.document.body.removeChild(c)}var c=b.document.createElement("script");c.onload=function(){l();e()};c.onerror=function(){l();h(void 0)};c.type="text/javascript";c.src=a instanceof X&&a.constructor===X&&a.a===Z?a.b:"type_error:TrustedResourceUrl";ja(c);d&&"complete"!==b.document.readyState?da(b,function(){b.document.body.appendChild(c)}):b.document.body.appendChild(c)})};function la(a){return R(this,function d(){var e,h,l;return M(d,function(c){switch(c.a){case 1:e="https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid="+a.a+("&tv="+a.b+"&st=")+a.i;h=void 0;c.g=2;var f=ma(e);c.a=4;return{value:f};case 4:h=c.h;c.a=3;c.g=0;break;case 2:c.g=0,c.c=null;case 3:return h?(l=a.m||h.sodar_query_id)&&h.bg_hash_basename&&h.bg_binary?c.return({context:a.c,v:h.bg_hash_basename,u:h.bg_binary,C:a.a+"_"+a.b,m:l,i:a.i}):c.return(void 0):c.return(void 0)}})})} 
function ma(a){return new Promise(function(b,d){var e=new XMLHttpRequest;e.onreadystatechange=function(){e.readyState===e.DONE&&(200<=e.status&&300>e.status?b(JSON.parse(e.responseText)):d())};e.open("GET",a,!0);e.send()})};function na(a){this.a=a.a;this.b=a.b;this.c=a.c;this.m=a.m;this.i=a.i}function oa(){this.a="xfad";this.b="r20100101";this.c="cr";this.i="env"}function pa(){var a=new oa;a.i="int";return new na(a)};(function(){var a=pa();R(this,function d(){var e;return M(d,function(h){if(1==h.a){var l=la(a);h.a=2;return{value:l}}if(e=h.h){l="sodar2";l=void 0===l?"sodar2":l;var c=window,f=c.GoogleGcLKhOms;f&&"function"===typeof f.push||(f=c.GoogleGcLKhOms=[]);var g={};f.push((g._ctx_=e.context,g._bgv_=e.v,g._bgp_=e.u,g._li_=e.C,g._jk_=e.m,g._st_=e.i,g));if(f=c.GoogleDX5YKUSk)c.GoogleDX5YKUSk=void 0,f[1]();l=ea({basename:l});ka(l)}return h.return(e)})})})();}).call(this);
