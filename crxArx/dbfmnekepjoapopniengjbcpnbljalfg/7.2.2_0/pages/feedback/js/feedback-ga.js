"use strict";!function(){var n,r=function(){for(var e=[],n=0;n<=15;n++)e[n]=n.toString(16);return function(){for(var n="",t=1;t<=36;t++)n+=9===t||14===t||19===t||24===t?"-":15===t?4:20===t?e[4*Math.random()|8]:e[16*Math.random()|0];return n}}(),d=(n=(new Date).valueOf(),function(){return n++});var e,i=(e=window.localStorage,{get:function(n){return e.getItem(n)},set:function(n,t){e.setItem(n,t)}});function t(n){var t=this,e=t.baseInfo={v:1,tid:n.trackingId,uid:n.userId},o=i.get("ga:clientId");o||(o=r(),i.set("ga:clientId",o)),e.cid=o,t.systemInfo={sr:window.screen.width+"x"+window.screen.height,sd:window.screen.colorDepth+"-bits",ul:navigator.language},t.extraInfo={dl:window.location.href.split("#")[0]}}t.prototype.event=function(n,t,e){return this.send("event",{ec:n.category,ea:n.action,el:n.label,ev:n.value,ni:!0===n.nonInteraction},t,e)},t.prototype.pageview=function(n){void 0===n&&(n={});return this.send("pageview",{dl:n.location,dh:n.host,dp:n.page,dt:n.title||window.document.title})},t.prototype.send=function(n,t,e,o){var r=this,i=Object.assign({_t:d(),t:n},r.baseInfo,r.systemInfo,t),a=r.extraInfo;for(var c in a)null==i[c]&&(i[c]=a[c]);var s=new XMLHttpRequest,u="https://www.google-analytics.com/collect?"+function(n){var t=[];for(var e in n){var o=n[e];null!=o&&!1!==o&&(!0===o&&(o=1),t.push(encodeURIComponent(e)+"="+encodeURIComponent(o)))}return t.join("&")}(i);return e&&(s.onload=function(){e()}),o&&(s.onerror=function(){o()}),s.open("GET",u,!0),s.send(null),u},window.InfinityGa=t}();