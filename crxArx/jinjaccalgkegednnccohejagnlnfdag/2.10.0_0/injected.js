!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/",e(e.s=197)}({0:function(t,n,e){"use strict";function r(t,n){return browser.i18n.getMessage(t,n)||t}e.d(n,"i",function(){return r}),e.d(n,"d",function(){return o}),e.d(n,"n",function(){return c}),e.d(n,"j",function(){return i}),e.d(n,"p",function(){return a}),e.d(n,"c",function(){return u}),e.d(n,"m",function(){return d}),e.d(n,"l",function(){return f}),e.d(n,"g",function(){return s}),e.d(n,"h",function(){return l}),e.d(n,"f",function(){return p}),e.d(n,"o",function(){return m}),e.d(n,"a",function(){return v}),e.d(n,"e",function(){return y}),e.d(n,"k",function(){return h}),e.d(n,"b",function(){return g});var o="/public/images/icon128.png";function c(t){return null==t?[]:Array.isArray(t)?t:`${t}`.split(".").filter(Boolean)}function i(){var t=[];return{hook:function(n){return t.push(n),function(){var e=t.indexOf(n);e>=0&&t.splice(e,1)}},fire:function(n){t.slice().forEach(function(t){t(n)})}}}function a(t){var n=browser.runtime.sendMessage(t).then(function(t){var n=t||{},e=n.data,r=n.error;return r?Promise.reject(r):e});return n.catch(function(t){0}),n}function u(t,n){var e;function r(n,r){e=null,t.apply(n,r)}return function(){e&&clearTimeout(e);for(var t=arguments.length,o=new Array(t),c=0;c<t;c++)o[c]=arguments[c];e=setTimeout(r,n,this,o)}}function d(){}function f(t,n){for(var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0",r=t.toString();r.length<n;)r=`${e}${r}`;return r}function s(){return Math.floor(65536*(1+Math.random())).toString(16).slice(-4)}function l(t){return(t||"")+Date.now().toString(36)+s()}function p(t,n){return navigator.languages.map(function(e){return t[`${n}:${e}`]||t[`${n}:${e.toLowerCase()}`]}).find(Boolean)||t[n]||""}var b=["blob","arraybuffer"];function m(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(r,o){var c=new XMLHttpRequest,i=n.responseType;c.open(n.method||"GET",t,!0),b.includes(i)&&(c.responseType=i);var a=Object.assign({},n.headers),u=n.body;u&&"[object Object]"===Object.prototype.toString.call(u)&&(a["Content-Type"]="application/json",u=JSON.stringify(u)),Object.keys(a).forEach(function(t){c.setRequestHeader(t,a[t])}),c.onload=function(){var t=e(c,{status:c.status||200});t.status>300?o(t):r(t)},c.onerror=function(){var t=e(c,{status:-1});o(t)},c.onabort=c.onerror,c.ontimeout=c.onerror,c.send(u)});function e(e,r){var o,c=n.responseType;if(o=b.includes(c)?e.response:e.responseText,"json"===c)try{o=JSON.parse(o)}catch(t){}return Object.assign({url:t,data:o,xhr:e},r)}}function v(t){for(var n=new window.Uint8Array(t),e="",r=0;r<n.length;r+=8192)e+=String.fromCharCode.apply(null,n.subarray(r,r+8192));return e}function y(t,n){var e=new URL(t,n);return["http:","https:","ftp:","data:"].includes(e.protocol)||(e.protocol="http:"),e.href}function h(t){return t&&!/^(file:|data:|https?:\/\/localhost[:\/]|http:\/\/127\.0\.0\.1[:\/])/.test(t)}function g(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.defaultType,r=n.type;if(t){for(var o=`${t}`.split(","),c=o.length,i=o[c-1],a=r||o[c-2]||e||"",u=window.atob(i),d=new window.Uint8Array(u.length),f=0;f<u.length;f+=1)d[f]=u.charCodeAt(f);var s=new Blob([d],{type:a});return URL.createObjectURL(s)}}},12:function(t,n,e){"use strict";e.d(n,"c",function(){return r}),e.d(n,"b",function(){return o}),e.d(n,"a",function(){return c});var r="page",o="content",c="auto"},16:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},18:function(t,n,e){"use strict";e.d(n,"b",function(){return o}),e.d(n,"a",function(){return c});var r=navigator.userAgent,o=/firefox\//i.test(r),c=(/chrome\//i.test(r),/android /i.test(r))},197:function(t,n,e){"use strict";e.r(n);var r=e(6),o=e(82);!function(){var t,n;window.__Violentmonkey||(window.__Violentmonkey=1,t=Object(r.c)(),n=Object(r.c)(),Object(o.a)(t,n),/\.user\.js$/.test(window.location.pathname)&&("complete"===document.readyState?e():window.addEventListener("load",e,!1)));function e(){document.querySelector("title")||Object(r.e)({cmd:"ConfirmInstall",data:{code:document.body.textContent,url:window.location.href,from:document.referrer}}).then(function(){window.history.length>1?window.history.go(-1):Object(r.e)({cmd:"TabClose"})})}}()},21:function(t,n,e){var r=e(66);t.exports=function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){r(t,n,e[n])})}return t}},28:function(t,n,e){"use strict";e.d(n,"b",function(){return i}),e.d(n,"c",function(){return a}),e.d(n,"d",function(){return u}),e.d(n,"a",function(){return d});var r=e(6),o=e(9),c={};function i(){Object(r.e)({cmd:"GetRequestId"}).then(function(t){c[t]=1,o.a.post({cmd:"GotRequestId",data:t})})}function a(t){Object(r.e)({cmd:"HttpRequest",data:t})}function u(t){c[t.id]&&("loadend"===t.type&&delete c[t.id],o.a.post({cmd:"HttpRequested",data:t}))}function d(t){Object(r.e)({cmd:"AbortRequest",data:t})}},49:function(t,n,e){"use strict";(function(t){e.d(n,"a",function(){return o}),e.d(n,"c",function(){return j}),e.d(n,"b",function(){return O});var r=t,o=(r.console,r.CustomEvent),c=(r.Promise,r.isFinite),i=(r.Uint8Array,Array.prototype),a=Object.prototype,u=function(t){return function(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return t.apply(n,r)}},d=u(i.forEach),f=(u(i.map),u(i.indexOf)),s=(i.includes&&u(i.includes),u(a.toString)),l=u(Number.prototype.toString),p=u(String.prototype.slice),b=u(String.prototype.charCodeAt),m=(String.fromCharCode,Object.keys),v=(Object.assign,function(t){return"[object Array]"===s(t)});var y={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},h=/[\\"\u0000-\u001F\u2028\u2029]/g,g=function(t){return y[t]||`\\u${p(l(b(t,0)+65536,16),1)}`},j=JSON.parse;function O(t){if(null==t)return"null";var n=typeof t;if("number"===n)return c(t)?`${t}`:"null";if("boolean"===n)return`${t}`;if("object"===n){if(v(t)){var e="[";return d(t,function(t,n){n&&(e+=","),e+=O(t)}),e+="]"}if("[object Object]"===s(t)){var r="{";return d(m(t),function(n,e){e&&(r+=","),r+=`${O(n)}:${O(t[n])}`}),r+="}"}}return`"${`${t}`.replace(h,g)}"`}}).call(this,e(16))},50:function(t,n,e){"use strict";e.d(n,"c",function(){return u}),e.d(n,"a",function(){return d}),e.d(n,"b",function(){return f});var r=e(0),o=e(6),c=e(9),i={},a={};function u(t){var n=t.key,e=t.data;e.url=Object(r.e)(e.url,window.location.href),Object(o.e)({cmd:"TabOpen",data:e}).then(function(t){var e=t.id;i[n]=e,a[e]=n})}function d(t){var n=i[t];t&&!n||Object(o.e)({cmd:"TabClose",data:{id:n}})}function f(t){var n=a[t];delete a[t],delete i[n],n&&c.a.post({cmd:"TabClosed",data:n})}},51:function(t,n,e){"use strict";e.d(n,"c",function(){return i}),e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u});var r=e(6),o=e(9),c={};function i(t){Object(r.e)({cmd:"Notification",data:t}).then(function(n){c[n]=t.id})}function a(t){var n=c[t];n&&o.a.post({cmd:"NotificationClicked",data:n})}function u(t){var n=c[t];n&&(o.a.post({cmd:"NotificationClosed",data:n}),delete c[t])}},6:function(t,n,e){"use strict";e.d(n,"d",function(){return i}),e.d(n,"c",function(){return a}),e.d(n,"b",function(){return u}),e.d(n,"a",function(){return d});var r=e(49),o=e(0);function c(t){var n=document.querySelector(`#${t}`);if(n)return n.parentNode.removeChild(n),!0}function i(t){var n=document.createElement("script"),e=a();n.id=e,n.textContent=`!${c.toString()}(${JSON.stringify(e)});${t}`,document.documentElement.appendChild(n),c(e)}function a(){return Date.now().toString(36)+Math.random().toString(36).slice(2,6)}function u(t,n,e){return document.addEventListener(t,function(t){var n=Object(r.c)(t.detail);e(n)},!1),function(t){!function(t,n){var e=new r.a(t,{detail:Object(r.b)(n)});document.dispatchEvent(e)}(n,t)}}function d(t,n){Object.defineProperty(window,t,{value(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];n.apply(this,r),delete window[t]},configurable:!0})}e.d(n,"e",function(){return o.p})},63:function(t,n){t.exports=function(t){if(Array.isArray(t))return t}},64:function(t,n){t.exports=function(t,n){var e=[],r=!0,o=!1,c=void 0;try{for(var i,a=t[Symbol.iterator]();!(r=(i=a.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(t){o=!0,c=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw c}}return e}},65:function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},66:function(t,n){t.exports=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},7:function(t,n,e){var r=e(63),o=e(64),c=e(65);t.exports=function(t,n){return r(t)||o(t,n)||c()}},82:function(t,n,e){"use strict";(function(t){e.d(n,"a",function(){return w});var r=e(7),o=e.n(r),c=e(21),i=e.n(c),a=e(18),u=e(0),d=e(12),f=e(6),s=e(9),l=e(50),p=e(51),b=e(28),m=e(83),v=window.top===window,y=window.VMInitInjection,h=[],g=[],j={};var O={Command(t){s.a.post({cmd:"Command",data:t})},GetPopup:$,HttpRequested:b.d,TabClosed:l.b,UpdatedValues(t){s.a.post({cmd:"UpdatedValues",data:t})},NotificationClick:p.a,NotificationClose:p.b};function w(n,e){s.a.post=Object(f.b)(n,e,C),s.a.destId=e;var r=function(){var t=Object(u.h)("VM-");Object(f.d)(`(${function(t){var n=document.createElement("span");n.id=t,document.documentElement.appendChild(n)}.toString()})(${JSON.stringify(t)})`);var n=document.querySelector(`#${t}`),e=!!n;n&&n.parentNode.removeChild(n);return e}();return browser.runtime.onMessage.addListener(function(t,n){var e=O[t.cmd];e&&e(t.data,n)}),Object(f.e)({cmd:"GetInjected",data:{url:window.location.href,reset:v}}).then(function(o){var c={[d.c]:[],[d.b]:[]};o.scripts&&(o.scripts=o.scripts.filter(function(t){return h.push(t.props.id),!(!v&&t.meta.noframes||!t.config.enabled)&&(g.push(t.props.id),!0)}),o.scripts.forEach(function(t){var n=t.custom.injectInto||t.meta.injectInto||o.injectInto;n===d.a&&(n=r?d.c:d.b);var e=c[n];e&&e.push(t)})),$(),new Promise(function(t){return setTimeout(t,v?0:300)}).then(function(){return Object(f.e)({cmd:"SetBadge",data:{ids:g,reset:v}})}),(c[d.c].length||c[d.b].length)&&function(n,e,r,o){var c={};[Object.getOwnPropertyNames(window),Object.getOwnPropertyNames(t)].forEach(function(t){t.forEach(function(t){c[t]=1})});var a=[e,n,Object.keys(c)],u=o[d.c],l=o[d.b];l.length&&(y().apply(void 0,a.concat([d.b])),s.a.ready.then(function(){s.a.post({cmd:"LoadScripts",data:i()({},r,{mode:d.b,scripts:l})})}));u.length&&(Object(f.d)(`(${y.toString()}())(${a.map(function(t){return JSON.stringify(t)}).join(",")})`),s.a.ready.then(function(){s.a.post({cmd:"LoadScripts",data:i()({},r,{mode:d.c,scripts:u})})}))}(n,e,o,c)})}var S={GetRequestId:b.b,HttpRequest:b.c,AbortRequest:b.a,Inject:function(t){var n=o()(t,4),e=n[0],r=n[1],c=n[2],i=n[3],a=[f.a.toString(),JSON.stringify(e),r,JSON.stringify(c)],u=`!${function(t,n,e,r){t(n,e);var o=window[r];o&&o()}.toString()}(${a.join(",")})`;i===d.b?Object(f.e)({cmd:"InjectScript",data:u}):Object(f.d)(u)},TabOpen:l.c,TabClose:l.a,Ready(){s.a.ready=Promise.resolve()},UpdateValue(t){Object(f.e)({cmd:"UpdateValue",data:t})},RegisterMenu(t){if(v){var n=o()(t,1)[0];j[n]=t}$()},UnregisterMenu(t){if(v){var n=o()(t,1)[0];delete j[n]}$()},AddStyle(t){var n=t.css,e=t.callbackId,r=null;if(document.head){r=Object(u.h)("VMst");var o=document.createElement("style");o.id=r,o.textContent=n,document.head.appendChild(o)}s.a.post({cmd:"Callback",data:{callbackId:e,payload:r}})},Notification:p.c,SetClipboard(t){a.b?Object(m.a)(t):Object(f.e)({cmd:"SetClipboard",data:t})},CheckScript(t){var n=t.name,e=t.namespace,r=t.callback;Object(f.e)({cmd:"CheckScript",data:{name:n,namespace:e}}).then(function(t){s.a.post({cmd:"ScriptChecked",data:{callback:r,result:t}})})}};function C(t){var n=S[t.cmd];n&&n(t.data)}function $(){v&&Object(f.e)({cmd:"SetPopup",data:{ids:h,menus:Object.values(j)}})}s.a.ready=new Promise(function(t){S.Ready=t})}).call(this,e(16))},83:function(t,n,e){"use strict";var r;function o(t){t.stopImmediatePropagation(),t.preventDefault();var n=r,e=n.type,o=n.data;t.clipboardData.setData(e||"text/plain",o)}function c(t){var n=t.type,e=t.data;r={type:n,data:e},document.addEventListener("copy",o,!1);document.execCommand("copy",!1,null);document.removeEventListener("copy",o,!1),r=null}e.d(n,"a",function(){return c})},9:function(t,n,e){"use strict";n.a={}}});