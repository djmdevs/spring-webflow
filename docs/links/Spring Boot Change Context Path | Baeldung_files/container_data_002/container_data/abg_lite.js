(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a}; 
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var da=ca(this);function ea(a,b){if(b){var c=da;a=a.split(".");for(var e=0;e<a.length-1;e++){var g=a[e];g in c||(c[g]={});c=c[g]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}} 
function n(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function fa(a){if(!(a instanceof Array)){a=n(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a} 
ea("Promise",function(a){function b(d){this.h=0;this.l=void 0;this.g=[];var f=this.i();try{d(f.resolve,f.reject)}catch(h){f.reject(h)}}function c(){this.g=null}function e(d){return d instanceof b?d:new b(function(f){f(d)})}if(a)return a;c.prototype.h=function(d){if(null==this.g){this.g=[];var f=this;this.i(function(){f.l()})}this.g.push(d)};var g=da.setTimeout;c.prototype.i=function(d){g(d,0)};c.prototype.l=function(){for(;this.g&&this.g.length;){var d=this.g;this.g=[];for(var f=0;f<d.length;++f){var h= 
d[f];d[f]=null;try{h()}catch(l){this.j(l)}}}this.g=null};c.prototype.j=function(d){this.i(function(){throw d;})};b.prototype.i=function(){function d(l){return function(m){h||(h=!0,l.call(f,m))}}var f=this,h=!1;return{resolve:d(this.v),reject:d(this.j)}};b.prototype.v=function(d){if(d===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(d instanceof b)this.A(d);else{a:switch(typeof d){case "object":var f=null!=d;break a;case "function":f=!0;break a;default:f=!1}f?this.u(d):this.m(d)}}; 
b.prototype.u=function(d){var f=void 0;try{f=d.then}catch(h){this.j(h);return}"function"==typeof f?this.B(f,d):this.m(d)};b.prototype.j=function(d){this.o(2,d)};b.prototype.m=function(d){this.o(1,d)};b.prototype.o=function(d,f){if(0!=this.h)throw Error("Cannot settle("+d+", "+f+"): Promise already settled in state"+this.h);this.h=d;this.l=f;this.s()};b.prototype.s=function(){if(null!=this.g){for(var d=0;d<this.g.length;++d)k.h(this.g[d]);this.g=null}};var k=new c;b.prototype.A=function(d){var f=this.i(); 
d.C(f.resolve,f.reject)};b.prototype.B=function(d,f){var h=this.i();try{d.call(f,h.resolve,h.reject)}catch(l){h.reject(l)}};b.prototype.then=function(d,f){function h(r,p){return"function"==typeof r?function(H){try{l(r(H))}catch(x){m(x)}}:p}var l,m,y=new b(function(r,p){l=r;m=p});this.C(h(d,l),h(f,m));return y};b.prototype.catch=function(d){return this.then(void 0,d)};b.prototype.C=function(d,f){function h(){switch(l.h){case 1:d(l.l);break;case 2:f(l.l);break;default:throw Error("Unexpected state: "+ 
l.h);}}var l=this;null==this.g?k.h(h):this.g.push(h)};b.resolve=e;b.reject=function(d){return new b(function(f,h){h(d)})};b.race=function(d){return new b(function(f,h){for(var l=n(d),m=l.next();!m.done;m=l.next())e(m.value).C(f,h)})};b.all=function(d){var f=n(d),h=f.next();return h.done?e([]):new b(function(l,m){function y(H){return function(x){r[H]=x;p--;0==p&&l(r)}}var r=[],p=0;do r.push(void 0),p++,e(h.value).C(y(r.length-1),m),h=f.next();while(!h.done)})};return b}); 
var q=this||self,ha=/^[\w+/_-]+[=]{0,2}$/,t=null;function ia(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&ha.test(a)?a:""}var u="closure_uid_"+(1E9*Math.random()>>>0),ja=0,ka=Date.now||function(){return+new Date};function la(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a}function v(a){return a};var ma=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},na=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,e="string"===typeof a?a.split(""):a,g=0;g<c;g++)g in e&&b.call(void 0,e[g],g,a)};var w;function oa(a,b){this.h=a===pa&&b||"";this.g=qa}var qa={},pa={};function ra(a,b){this.h=a===sa&&b||"";this.g=ta}var ta={};function ua(a){if(void 0===w){var b=null;var c=q.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:v,createScript:v,createScriptURL:v})}catch(e){q.console&&q.console.error(e.message)}w=b}else w=b}a=(b=w)?b.createScriptURL(a):a;return new ra(sa,a)}var sa={};function va(a){va[" "](a);return a}va[" "]=function(){};function wa(){}var xa="function"==typeof Uint8Array;function ya(a,b,c){a.i=null;b||(b=[]);a.o=void 0;a.j=-1;a.g=b;a:{if(b=a.g.length){--b;var e=a.g[b];if(!(null===e||"object"!=typeof e||Array.isArray(e)||xa&&e instanceof Uint8Array)){a.l=b-a.j;a.h=e;break a}}a.l=Number.MAX_VALUE}a.m={};if(c)for(b=0;b<c.length;b++)if(e=c[b],e<a.l)e+=a.j,a.g[e]=a.g[e]||z;else{var g=a.l+a.j;a.g[g]||(a.h=a.g[g]={});a.h[e]=a.h[e]||z}}var z=[]; 
function A(a,b){if(b<a.l){b+=a.j;var c=a.g[b];return c===z?a.g[b]=[]:c}if(a.h)return c=a.h[b],c===z?a.h[b]=[]:c}function B(a,b,c){a=A(a,b);return null==a?c:a}function C(a,b){a=A(a,b);a=null==a?a:!!a;return null==a?!1:a}function za(a){var b=Aa;a.i||(a.i={});if(!a.i[1]){var c=A(a,1);c&&(a.i[1]=new b(c))}return a.i[1]};function Aa(a){ya(this,a,Ba)}la(Aa,wa);var Ba=[28];function Ca(a){ya(this,a,Da)}la(Ca,wa);var Da=[21];function D(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};function E(a){var b=document;return"string"===typeof a?b.getElementById(a):a}function Ea(a){var b=document;b.getElementsByClassName?a=b.getElementsByClassName(a)[0]:(b=document,a=b.querySelectorAll&&b.querySelector&&a?b.querySelector(a?"."+a:""):Fa(b,a)[0]||null);return a||null} 
function Fa(a,b){var c,e;if(a.querySelectorAll&&a.querySelector&&b)return a.querySelectorAll(b?"."+b:"");if(b&&a.getElementsByClassName){var g=a.getElementsByClassName(b);return g}g=a.getElementsByTagName("*");if(b){var k={};for(c=e=0;a=g[c];c++){var d=a.className,f;if(f="function"==typeof d.split)f=0<=ma(d.split(/\s+/),b);f&&(k[e++]=a)}k.length=e;return k}return g}function Ga(a){a&&a.parentNode&&a.parentNode.removeChild(a)};function Ha(a,b){a.google_image_requests||(a.google_image_requests=[]);var c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)};var Ia=0;function Ja(){var a=void 0===a?.01:a;if(!(Math.random()>a)){var b=document.currentScript;b=(b=void 0===b?null:b)&&60==b.getAttribute("data-jc")?b:document.querySelector('[data-jc="60"]');a="https://pagead2.googleadservices.com/pagead/gen_204?id=jca&jc=60&version="+(b&&b.getAttribute("data-jc-version")||"unknown")+"&sample="+a;b=window;var c;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):Ha(b,a)}};var F=document,G=window;function Ka(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}function La(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Ka(a).match(/\S+/g)||[],b=0<=ma(a,b));return b}function I(a,b){if(a.classList)a.classList.add(b);else if(!La(a,b)){var c=Ka(a);b=c+(0<c.length?" "+b:b);"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}};function Ma(a){this.g=(this.serializedAttributionData=a)?new Ca(a):null;this.isMutableImpression=null!=A(this.g,1)&&!!C(za(this.g),33);B(this.g,30,"");this.T=!!C(this.g,11);this.hasUserFeedbackData=!!this.g&&null!=A(this.g,1);this.L=!!C(this.g,4);this.O=!!C(this.g,6);this.K=!!C(this.g,13);B(this.g,8,0);this.creativeIndexSuffix=1<B(this.g,8,0)?B(this.g,7,0).toString():"";this.U=!!C(this.g,17);this.R=!!C(this.g,18);this.J=!!C(this.g,14);this.B=!!C(this.g,15);this.P=1==C(this.g,9);this.openAttributionInline= 
1==C(this.g,10);this.isMobileDevice=!!C(this.g,12);this.S=null;this.N=(a=F.querySelector("[data-slide]"))?"true"===a.getAttribute("data-slide"):!1;(this.F=""!==this.creativeIndexSuffix)&&void 0===G.goog_multislot_cache&&(G.goog_multislot_cache={});if(this.F&&!this.N){if(a=G.goog_multislot_cache.hd,void 0===a){a=!1;var b=F.querySelector("[data-dim]");if(b)if(b=b.getBoundingClientRect(),150<=b.right-b.left&&150<=b.bottom-b.top)a=!1;else{var c=document.body.getBoundingClientRect();150>(1>=Math.abs(c.left- 
b.left)&&1>=Math.abs(c.right-b.right)?b.bottom-b.top:b.right-b.left)&&(a=!0)}else a=!1;window.goog_multislot_cache.hd=a}}else a=!1;this.D=a;this.u=E("abgcp"+this.creativeIndexSuffix);this.s=E("abgc"+this.creativeIndexSuffix);this.h=E("abgs"+this.creativeIndexSuffix);E("abgl"+this.creativeIndexSuffix);this.o=E("abgb"+this.creativeIndexSuffix);this.A=E("abgac"+this.creativeIndexSuffix);E("mute_panel"+this.creativeIndexSuffix);this.v=Ea("goog_delegate_attribution"+this.creativeIndexSuffix);this.isDelegateAttributionActive= 
!!this.v&&!!this.J&&!Ea("goog_delegate_disabled")&&!this.B;if(this.h)a:{a=this.h;b="A";c=a.childNodes;for(var e=0;e<c.length;e++){var g=c.item(e);if("undefined"!=typeof g.tagName&&g.tagName.toUpperCase()==b){a=g;break a}}}else a=null;this.j=a;this.l=this.isDelegateAttributionActive?this.v:E("cbb"+this.creativeIndexSuffix);this.M=this.D?"0"===this.creativeIndexSuffix:!0;this.enableDelegateDismissableMenu=!!this.l&&La(this.l,"goog_dismissable_menu");this.m=null;this.G=0;this.i=this.isDelegateAttributionActive? 
this.v:this.O&&this.u?this.u:this.s;this.I=!!C(this.g,19);this.adbadgeEnabled=!!C(this.g,24);this.enableNativeJakeUi=!!C(this.g,27)};function Na(a,b,c){if(!a)throw Error("bad conv util ctor args");this.h=a;this.g=c};function J(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{va(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function Oa(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}function K(a){a.preventDefault?a.preventDefault():a.returnValue=!1};var Pa=/^true$/.test("false"),Qa=/^true$/.test("false"),Ra=/^true$/.test("true"),Sa=(Ra||!Qa)&&!0;function Ta(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}var Ua=!!window.google_async_iframe_id,L=Ua&&window.parent||window,M=new oa(pa,"//fonts.googleapis.com/css");ua(M instanceof oa&&M.constructor===oa&&M.g===qa?M.h:"type_error:Const");function N(a,b){a&&Ta(b,function(c,e){a.style[e]=c})};function Va(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var Wa=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;function Xa(a,b){this.g=a;this.h=b}function Ya(a,b){this.url=a;this.H=!!b;this.depth=null};function Za(){this.i="&";this.j=!1;this.h={};this.l=0;this.g=[]}function $a(a,b){var c={};c[a]=b;return[c]}function ab(a,b,c,e,g){var k=[];Oa(a,function(d,f){(d=bb(d,b,c,e,g))&&k.push(f+"="+d)});return k.join(b)} 
function bb(a,b,c,e,g){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(e=e||0,e<c.length){for(var k=[],d=0;d<a.length;d++)k.push(bb(a[d],b,c,e+1,g));return k.join(c[e])}}else if("object"==typeof a)return g=g||0,2>g?encodeURIComponent(ab(a,b,c,e,g+1)):"...";return encodeURIComponent(String(a))}function O(a,b,c,e){a.g.push(b);a.h[b]=$a(c,e)} 
function cb(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;var e=db(a)-c.length;if(0>e)return"";a.g.sort(function(m,y){return m-y});c=null;for(var g="",k=0;k<a.g.length;k++)for(var d=a.g[k],f=a.h[d],h=0;h<f.length;h++){if(!e){c=null==c?d:c;break}var l=ab(f[h],a.i,",$");if(l){l=g+l;if(e>=l.length){e-=l.length;b+=l;g=a.i;break}a.j&&(g=e,l[g-1]==a.i&&--g,b+=l.substr(0,g),g=a.i,e=0);c=null==c?d:c}}a="";null!=c&&(a=g+"trn="+c);return b+a} 
function db(a){var b=1,c;for(c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1};function eb(a,b,c,e,g){if((e?a.g:Math.random())<(g||.01))try{if(c instanceof Za)var k=c;else k=new Za,Oa(c,function(f,h){var l=k,m=l.l++;f=$a(h,f);l.g.push(m);l.h[m]=f});var d=cb(k,a.h,"/pagead/gen_204?id="+b+"&");d&&Ha(q,d)}catch(f){}};var P=null;function fb(){var a=q.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):ka()}function gb(){var a=void 0===a?q:a;return(a=a.performance)&&a.now?a.now():null};function hb(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};var Q=q.performance,ib=!!(Q&&Q.mark&&Q.measure&&Q.clearMarks),R=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a;if(a=ib){var b;if(null===P){P="";try{a="";try{a=q.top.location.hash}catch(c){a=q.location.hash}a&&(P=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=P;a=!!b.indexOf&&0<=b.indexOf("1337")}return a}); 
function jb(){var a=S;this.h=[];this.i=a||q;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=R()||(null!=b?b:1>Math.random())}function kb(a){a&&Q&&R()&&(Q.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),Q.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))} 
jb.prototype.start=function(a,b){if(!this.g)return null;var c=gb()||fb();a=new hb(a,b,c);b="goog_"+a.label+"_"+a.uniqueId+"_start";Q&&R()&&Q.mark(b);return a};function lb(){var a=mb;this.l=nb;this.h=null;this.m=this.j;this.g=void 0===a?null:a;this.i=!1}function ob(a,b,c){try{if(a.g&&a.g.g){var e=a.g.start(b.toString(),3);var g=c();var k=a.g;c=e;if(k.g&&"number"===typeof c.value){var d=gb()||fb();c.duration=d-c.value;var f="goog_"+c.label+"_"+c.uniqueId+"_end";Q&&R()&&Q.mark(f);!k.g||2048<k.h.length||k.h.push(c)}}else g=c()}catch(h){k=!0;try{kb(e),k=a.m(b,new Va(h,{message:pb(h)}),void 0,void 0)}catch(l){a.j(217,l)}if(!k)throw h;}return g} 
function qb(a,b){var c=T;return function(e){for(var g=[],k=0;k<arguments.length;++k)g[k]=arguments[k];return ob(c,a,function(){return b.apply(void 0,g)})}} 
lb.prototype.j=function(a,b,c,e,g){g=g||"jserror";try{var k=new Za;k.j=!0;O(k,1,"context",a);b.error&&b.meta&&b.id||(b=new Va(b,{message:pb(b)}));b.msg&&O(k,2,"msg",b.msg.substring(0,512));var d=b.meta||{};if(this.h)try{this.h(d)}catch(U){}if(e)try{e(d)}catch(U){}b=[d];k.g.push(3);k.h[3]=b;e=q;b=[];d=null;do{var f=e;if(J(f)){var h=f.location.href;d=f.document&&f.document.referrer||null}else h=d,d=null;b.push(new Ya(h||""));try{e=f.parent}catch(U){e=null}}while(e&&f!=e);h=0;for(var l=b.length-1;h<= 
l;++h)b[h].depth=l-h;f=q;if(f.location&&f.location.ancestorOrigins&&f.location.ancestorOrigins.length==b.length-1)for(l=1;l<b.length;++l){var m=b[l];m.url||(m.url=f.location.ancestorOrigins[l-1]||"",m.H=!0)}var y=new Ya(q.location.href,!1);f=null;var r=b.length-1;for(m=r;0<=m;--m){var p=b[m];!f&&Wa.test(p.url)&&(f=p);if(p.url&&!p.H){y=p;break}}p=null;var H=b.length&&b[r].url;0!=y.depth&&H&&(p=b[r]);var x=new Xa(y,p);x.h&&O(k,4,"top",x.h.url||"");O(k,5,"url",x.g.url||"");eb(this.l,g,k,this.i,c)}catch(U){try{eb(this.l, 
g,{context:"ecmserr",rctx:a,msg:pb(U),url:x&&x.g.url},this.i,c)}catch(Lb){}}return!0};function pb(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);for(var c;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){}}return b};var nb,T;if(Ua&&!J(L)){var V="."+F.domain;try{for(;2<V.split(".").length&&!J(L);)F.domain=V=V.substr(V.indexOf(".")+1),L=window.parent}catch(a){}J(L)||(L=window)}var S=L,mb=new jb;function rb(){if(!S.google_measure_js_timing){var a=mb;a.g=!1;a.h!=a.i.google_js_reporting_queue&&(R()&&na(a.h,kb),a.h.length=0)}}nb=new function(){var a=void 0===a?G:a;this.h="http:"===a.location.protocol?"http:":"https:";this.g=Math.random()};"number"!==typeof S.google_srt&&(S.google_srt=Math.random());var sb=nb,tb=S.google_srt; 
0<=tb&&1>=tb&&(sb.g=tb);T=new lb; 
T.h=function(a){var b=G.jerExpIds;if(Array.isArray(b)&&0!==b.length){var c=a.eid;if(c){b=fa(c.split(",")).concat(fa(b));c={};for(var e=0,g=0;g<b.length;){var k=b[g++];var d=k;var f=typeof d;d="object"==f&&null!=d||"function"==f?"o"+(Object.prototype.hasOwnProperty.call(d,u)&&d[u]||(d[u]=++ja)):(typeof d).charAt(0)+d;Object.prototype.hasOwnProperty.call(c,d)||(c[d]=!0,b[e++]=k)}b.length=e;a.eid=b.join(",")}else a.eid=b.join(",")}0!==Ia&&(a.jc=String(Ia));(b=G.jerUserAgent)&&(a.useragent=b)};T.i=!0; 
"complete"==S.document.readyState?rb():mb.g&&D(S,"load",function(){rb()});function W(a,b){return qb(a,b)};function ub(a,b){var c=this;this.g=a;this.h=b;this.g.U||(this.j=!1,this.i=null,!this.g.D||this.g.adbadgeEnabled||this.g.M?vb(this):(a={display:"none"},b={width:"15px",height:"15px"},this.g.isMobileDevice?(N(this.g.o,a),N(this.g.h,a),N(this.g.u,b),N(this.g.s,b)):N(this.g.s,a)),wb(this),this.g.enableNativeJakeUi&&I(this.g.A,"abgnac"),this.g.isDelegateAttributionActive?(I(document.body,"goog_delegate_active"),I(document.body,"jaa")):(!this.g.isMutableImpression&&this.g.l&&Ga(this.g.l),setTimeout(function(){I(document.body, 
"jar")},this.g.K?750:100)),this.g.B&&I(document.body,"goog_delegate_disabled"),this.g.I&&G.addEventListener("load",function(){return c.h()}))} 
function wb(a){if(a.g.T)D(a.g.i,"click",W(365,function(c){var e=G.goog_interstitial_display;e&&(e(c),c&&(c.stopPropagation(),c.preventDefault()))}));else if(a.g.isMutableImpression&&a.g.isMobileDevice)D(a.g.i,"click",function(){return a.h()});else if(a.g.isMutableImpression&&!a.g.isMobileDevice&&a.g.l&&D(a.g.l,"click",function(){return a.h()}),a.g.L)xb(a);else{D(a.g.i,"mouseover",W(367,function(){return xb(a)}));D(a.g.i,"mouseout",W(369,function(){return yb(a,500)}));D(a.g.i,"touchstart",W(368,function(){return xb(a)})); 
var b=W(370,function(){return yb(a,4E3)});D(a.g.i,"mouseup",b);D(a.g.i,"touchend",b);D(a.g.i,"touchcancel",b);a.g.j&&D(a.g.j,"click",W(371,function(c){return a.preventDefault(c)}))}}function vb(a){if(a.g.j&&a.g.R){var b=za(a.g.g);b&&null!=A(b,5)&&null!=A(b,6)&&(a.i=new Na(B(b,5,""),B(b,6,""),B(b,19,"")));D(a.g.j,"click",W(452,function(){if(!a.j&&(a.j=!0,a.i)){var c=a.i,e=c.h+"&label=closebutton_whythisad_click";e+="&label_instance=1";c.g&&(e+="&cid="+c.g);Ha(window,e)}}))}} 
function zb(a){var b=a.g.A;b.style.display="block";a.g.enableNativeJakeUi&&window.requestAnimationFrame(function(){I(b,"abgacfo")})}function xb(a){window.clearTimeout(a.g.m);a.g.m=null;a.g.h&&"block"==a.g.h.style.display||(a.g.G=Date.now(),a.g.o&&a.g.h&&(a.g.o.style.display="none",a.g.h.style.display="block"))}function yb(a,b){window.clearTimeout(a.g.m);a.g.m=window.setTimeout(function(){return Ab(a)},b)} 
function Ab(a){window.clearTimeout(a.g.m);a.g.m=null;a.g.o&&a.g.h&&(a.g.o.style.display="block",a.g.h.style.display="none")} 
ub.prototype.preventDefault=function(a){if(this.g.h&&"block"==this.g.h.style.display&&500>Date.now()-this.g.G)K(a);else if(this.g.openAttributionInline){var b=this.g.j.getAttribute("href");window.adSlot?window.adSlot.openAttribution(b)&&K(a):window.openAttribution&&(window.openAttribution(b),K(a))}else this.g.P&&(b=this.g.j.getAttribute("href"),window.adSlot?window.adSlot.openSystemBrowser(b)&&K(a):window.openSystemBrowser&&(window.openSystemBrowser(b),K(a)))};function Bb(a){var b=Cb,c=this;if(!b)throw Error("bad ctor");this.i=b;this.h=a;this.g=!1;Ea("goog_delegate_deferred")?void 0!==G.goog_delegate_deferred_token?Db(this):(a=function(){Db(c)},G.goog_delegate_deferred_token=a,setTimeout(a,5E3)):Db(this)}function Db(a){if(!a.g&&(a.g=!0,G.goog_delegate_deferred_token=void 0,a.h)){var b=a.i;a=a.h;if(!a)throw Error("bad attrdata");a=new Ma(a);new b(a)}};function Eb(){a:{if(Pa)try{var a=G.google_cafe_host||G.top.google_cafe_host;if(a){var b=a;break a}}catch(c){}b="pagead2.googlesyndication.com"}a=Ra?"https":"http";if("relative"===b)return"/pagead/js/r20200610/r20110914/abg_survey.js";a||(a=Sa?"https":"http");q.location&&"https:"==q.location.protocol&&"http"==a&&(a="https");return[a,"://",b,"/pagead/js/r20200610/r20110914/abg_survey.js"].join("")} 
;function Fb(){var a=this;this.g=new Promise(function(b,c){a.resolve=b;a.reject=c})};function Gb(){var a=new Fb;this.promise=a.g;this.resolve=a.resolve}function Hb(a,b){a.google_llp||(a.google_llp={});a=a.google_llp;a[5]||(a[5]=new Gb,b&&b());return a[5]} 
function Ib(){var a=window,b=Eb();return Hb(a,function(){var c=a.document,e=c.createElement("script");var g=ua(b);e.src=g instanceof ra&&g.constructor===ra&&g.g===ta?g.h:"type_error:TrustedResourceUrl";(g=e.ownerDocument&&e.ownerDocument.defaultView)&&g!=q?g=ia(g.document):(null===t&&(t=ia(q.document)),g=t);g&&e.setAttribute("nonce",g);(c=c.getElementsByTagName("script")[0])&&c.parentNode&&c.parentNode.insertBefore(e,c)}).promise};function Cb(a){var b=this;this.g=a;this.h=new ub(this.g,W(359,function(){return Jb(b)}))}function Jb(a){ob(T,373,function(){Ab(a.h);zb(a.h)});Ib().then(function(b){b.createAttributionCard(a.g);a.g.S=b;b.expandAttributionCard()});Ja()};Ia=60;function Kb(a){var b=[a];b=void 0===b?[]:b;q.google_logging_queue||(q.google_logging_queue=[]);q.google_logging_queue.push([11,b]);new Bb(a)}var X=["buildAttribution"],Y=q;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===Kb?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=Kb;}).call(this);
