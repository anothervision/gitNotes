function removeDeprecatedOptions(){var e=["videoAdkill","videoblockcontent","videokillsublink","videoupdatemeta"];e.forEach(function(e){e in localStorage&&delete localStorage[e]})}function setDefaultOptions(){function e(e,t){e in localStorage||(localStorage[e]=t)}e("shouldShowIcon","true"),e("shouldShowBlockElementMenu","true"),removeDeprecatedOptions()}function isWhitelisted(e,t,n){var o=e.indexOf("#");o>=0&&(e=e.substring(0,o));var i=defaultMatcher.matchesAny(e,n||"DOCUMENT",extractHostFromURL(t||e),!1);return i instanceof WhitelistFilter?i:null}function refreshIconAndContextMenu(e){if(e){var t=isWhitelisted(e.url),n=t?"icons/abp-19-whitelisted.png":"icons/abp-19.png";activeNotification?startIconAnimation(e,n):chrome.browserAction.setIcon({tabId:e.id,path:n}),/^https?:/.test(e.url)&&(chrome.browserAction.setTitle({tabId:e.id,title:"广告终结者"}),t?chrome.contextMenus.removeAll():showContextMenu())}}function versionCompare(e,t){if(typeof e+typeof t!="stringstring")return!1;for(var n=e.split("."),o=t.split("."),i=0,r=Math.max(n.length,o.length);i<r;i++){if(n[i]&&!o[i]&&parseInt(n[i])>0||parseInt(n[i])>parseInt(o[i]))return 1;if(o[i]&&!n[i]&&parseInt(o[i])>0||parseInt(n[i])<parseInt(o[i]))return-1}return 0}function doUpdateOrInstall(e,t){function n(){chrome.tabs.create({url:chrome.extension.getURL("firstRun.html")})}if(localStorage.notificationRules=!0,void 0==t)n();else{var o=new Browser;if(versionCompare(t,"3.2.8")<0&&o.browser.indexOf("360")>-1){console.log("fix 360 rule");var i="http://sub.adtchrome.com/adt-chinalist-easylist.txt";i in FilterStorage.knownSubscriptions&&FilterStorage.removeSubscription(FilterStorage.knownSubscriptions[i]);var r=[{homepage:"http://www.adtchrome.com/extension/adt-chinalist-easylist360.html",title:"广告终结者默认过滤规则",url:"http://sub.adtchrome.com/adt-chinalist-easylist360.txt",disabled:!1}];r.forEach(function(e){var t=Subscription.fromURL(e.url);FilterStorage.addSubscription(t),t.disabled=e.disabled,t.title=e.title,t.homepage=e.homepage,t instanceof DownloadableSubscription&&!t.lastDownload&&Synchronizer.execute(t)})}}}function showContextMenu(){chrome.contextMenus.removeAll(function(){"string"==typeof localStorage.shouldShowBlockElementMenu&&"true"==localStorage.shouldShowBlockElementMenu&&chrome.contextMenus.create({title:chrome.i18n.getMessage("block_element"),contexts:["image","video","audio"],onclick:function(e,t){e.srcUrl&&chrome.tabs.sendMessage(t.id,{reqtype:"clickhide-new-filter",filter:e.srcUrl})}})})}function openOptions(e){function t(e){for(var t=chrome.extension.getViews({type:"tab"}),n=0;n<t.length;n++)if("startSubscriptionSelection"in t[n])return t[n];return null}function n(){chrome.windows.getAll({populate:!0},function(e){for(var t=chrome.extension.getURL("options.html"),n=0;n<e.length;n++)for(var o=0;o<e[n].tabs.length;o++)e[n].tabs[o].url==t&&chrome.tabs.update(e[n].tabs[o].id,{selected:!0})})}var o=t();if(o)n(),e(o);else{var i=function(){var n=t();n&&e(n)};chrome.tabs.create({url:chrome.extension.getURL("options.html")},function(e){if("complete"==e.status)i();else{var t=e.id,n=function(e,o,r){e==t&&"complete"==o.status&&(chrome.tabs.onUpdated.removeListener(n),i())};chrome.tabs.onUpdated.addListener(n)}})}}function stopIconAnimation(){iconAnimationTimer&&(clearTimeout(iconAnimationTimer),iconAnimationTimer=null,animatedIconTab=null)}function loadImages(e,t){var n={},o=0;e.forEach(function(i){var r=new Image;r.src=i,r.addEventListener("load",function(){n[i]=r,++o===e.length&&t(n)})})}function startIconAnimation(e,t){stopIconAnimation(),animatedIconTab=e;var n="critical"===activeNotification.severity?"critical":"information",o="icons/notification-"+n+".png",i=[t,o];loadImages(i,function(n){function i(){var t=u[l];c.clearRect(0,0,s.width,s.height),c.globalAlpha=1,c.drawImage(r,0,0),c.globalAlpha=t,c.drawImage(a,0,0);var n=c.getImageData(0,0,s.width,s.height);chrome.browserAction.setIcon({tabId:e.id,imageData:n});var o;if(l++,l<u.length){var d=3e3;o=d/u.length}else l=0,o=1e4;iconAnimationTimer=setTimeout(i,o)}var r=n[t],a=n[o],s=document.createElement("canvas");s.width=r.width,s.height=r.height;var c=s.getContext("2d"),l=0,u=[0,.2,.4,.6,.8,1,1,1,1,1,.8,.6,.4,.2,0];i()})}function prepareNotificationIconAndPopup(){activeNotification.onClicked=function(){var e=animatedIconTab;stopIconAnimation(),activeNotification=null,refreshIconAndContextMenu(e)},chrome.windows.getLastFocused({populate:!0},function(e){chrome.tabs.query({active:!0,windowId:e.id},function(e){e.forEach(refreshIconAndContextMenu)})})}function getFrameId(e,t){if(e in frames)for(var n in frames[e])if(getFrameUrl(e,n)==t)return n;return-1}function extend(e,t){for(var n in t)void 0!==t[n]&&(e[n]=t[n]);return e}with(require("filterClasses"))this.Filter=Filter,this.RegExpFilter=RegExpFilter,this.BlockingFilter=BlockingFilter,this.WhitelistFilter=WhitelistFilter,this.RedirectFilter=RedirectFilter;with(require("subscriptionClasses"))this.Subscription=Subscription,this.DownloadableSubscription=DownloadableSubscription;var FilterStorage=require("filterStorage").FilterStorage,ElemHide=require("elemHide").ElemHide,defaultMatcher=require("matcher").defaultMatcher,Prefs=require("prefs").Prefs,Synchronizer=require("synchronizer").Synchronizer,Utils=require("utils").Utils,Cscript=require("cscript").Cscript;RegExpFilter.typeMap.OBJECT_SUBREQUEST=RegExpFilter.typeMap.OBJECT,RegExpFilter.typeMap.MEDIA=RegExpFilter.typeMap.FONT=RegExpFilter.typeMap.OTHER;var seenDataCorruption=!1;require("filterNotifier").FilterNotifier.addListener(function(e){if("load"==e){var t=require("info").addonVersion,n=localStorage.currentVersion;n!=t&&(localStorage.currentVersion=t,doUpdateOrInstall(t,n))}});var noStyleRulesHosts=["mail.google.com","mail.yahoo.com","www.google.com"];setDefaultOptions();var activeNotification=null,iconAnimationTimer=null,animatedIconTab=null;chrome.runtime.onMessage.addListener(function(e,t,n){switch(e.reqtype){case"get-settings":var o=null,i=null,r=-1,a=-1;t.tab&&(r=t.tab.id,a=getFrameId(r,e.frameUrl));var s=!isFrameWhitelisted(r,a,"DOCUMENT")&&!isFrameWhitelisted(r,a,"ELEMHIDE");if(s&&e.selectors){var c=!1,l=extractHostFromURL(e.frameUrl);o=getBaseDomain(l);for(var u=0;u<noStyleRulesHosts.length;u++){var d=noStyleRulesHosts[u];(l==d||l.length>d.length&&l.substr(l.length-d.length-1)=="."+d)&&(c=!0)}i=ElemHide.getSelectorsForDomain(l,!1),c&&(i=i.filter(function(e){return!/\[style[\^\$]?=/.test(e)}))}n({enabled:s,hostDomain:o,selectors:i});break;case"should-collapse":var r=-1,a=-1;if(t.tab&&(r=t.tab.id,a=getFrameId(r,e.documentUrl)),isFrameWhitelisted(r,a,"DOCUMENT")){n(!1);break}var h=extractHostFromURL(e.url),f=extractHostFromURL(e.documentUrl),m=isThirdParty(h,f),p=defaultMatcher.matchesAny(e.url,e.type,f,m);if(p instanceof BlockingFilter){var g=p.collapse;null==g&&(g="false"!=localStorage.hidePlaceholders),n(g)}else n(!1);break;case"get-domain-enabled-state":if(t.tab)return void n({enabled:!isWhitelisted(t.tab.url)});break;case"add-filters":if(e.filters&&e.filters.length)for(var u=0;u<e.filters.length;u++)FilterStorage.addFilter(Filter.fromText(e.filters[u]));break;case"add-subscription":openOptions(function(t){t.startSubscriptionSelection(e.title,e.url)});break;case"set-localstorage":localStorage[e.lparam]=e.lvalue,chrome.tabs.sendResponse({lparam:e.lparam,lvalue:e.lvalue});break;case"get-script":t.tab||(t.tab={url:""}),n({cscripts:Cscript.exeScript(t.tab.url)});break;case"open-customRuleWindow":chrome.windows.create({url:chrome.extension.getURL("block.html?tabId="+t.tab.id),left:50,top:50,width:435,height:265,type:"popup"});break;default:return!0}}),chrome.windows.getAll({populate:!0},function(e){for(var t=0;t<e.length;t++)for(var n=0;n<e[t].tabs.length;n++)refreshIconAndContextMenu(e[t].tabs[n])}),chrome.tabs.onUpdated.addListener(function(e,t,n){chrome.tabs.sendMessage(e,{reqtype:"clickhide-deactivate"}),"loading"==t.status&&refreshIconAndContextMenu(n)}),chrome.tabs.onActivated.addListener(function(e){refreshIconAndContextMenu(animatedIconTab),chrome.tabs.get(e.tabId,refreshIconAndContextMenu)}),chrome.windows.onFocusChanged.addListener(function(e){refreshIconAndContextMenu(animatedIconTab),chrome.tabs.query({active:!0,windowId:e},function(e){e.forEach(refreshIconAndContextMenu)})}),setTimeout(function(){if(console.log(FilterStorage.subscriptions),0==FilterStorage.subscriptions.length){console.log("error no sub");var e=new Browser;if(e.browser.indexOf("360")>-1)var t="http://sub.adtchrome.com/adt-chinalist-easylist360.txt";else var t="http://sub.adtchrome.com/adt-chinalist-easylist.txt";var n=Subscription.fromURL(t);FilterStorage.addSubscription(n),n.disabled=!1,n.title="广告终结者默认",n.homepage="http://www.adtchrome.com/extension/adt-chinalist-easylist.html",n instanceof DownloadableSubscription&&!n.lastDownload&&(console.log("download"),Synchronizer.execute(n))}},2e4);var $={ajax:function(e){var t=function(){},n={url:".",cache:!0,data:{},headers:{},type:"GET",success:t,aerror:t,complete:t};e=extend(n,e||{}),e.cache||(e.url=e.url+(e.url.indexOf("?")>0?"&":"?")+"noCache="+Math.floor(9e9*Math.random()));var o=function(e,t,n){var o="success";n.success(e,o,t),r(o,t,n)},i=function(e,t,n,o){o.aerror(n,t,e),r(t,n,o)},r=function(e,t,n){n.complete(t,e)},a=new XMLHttpRequest;a.addEventListener("readystatechange",function(){if(4===a.readyState){var t;a.status>=200&&a.status<300||304===a.status?(t=a.responseText,o(t,a,e)):i(a.statusText,"error",a,e)}},!1),a.open(e.type,e.url),"POST"===e.type&&(e.headers=extend(e.headers,{"X-Requested-With":"XMLHttpRequest","Content-type":"application/x-www-form-urlencoded"}));for(var s in e.headers)a.setRequestHeader(s,e.headers[s]);var c="",l=[];for(name in e.data)l.push(encodeURIComponent(name)+"="+encodeURIComponent(e.data[name]));c=l.join("&").replace(/%20/g,"+"),a.send(c)}};!function(e){var t=10485760;e.IOG=function(e,n,o,i){(window.requestFileSystem||window.webkitRequestFileSystem)(window.PERSISTENT,t,function(t){t.root.getFile(e,{create:n},function(e){o(t,e)},i)},i)},e.IOR=function(t,n,o){e.IOG(t,!1,function(e,t){t.file(function(e){var t=new FileReader;t.onloadend=function(){n(t.result)},t.readAsText(e)},o)},o)},e.IOW=function(t,n,o,i){var r=function(t,n,o,i){e.IOG(t,!0,function(e,t){t.createWriter(function(e){e.onwriteend=o,e.onerror=i;var t=new Blob([n],{type:"text/plain"});e.write(t)},i)},i)};e.IOD(t,function(){r(t,n,o,i)},function(){r(t,n,o,i)})},e.IOD=function(t,n,o){e.IOG(t,!1,function(e,t){t.remove(function(){n()},o)},o)},e.IOE=function(t,n){e.IOG(t,!1,function(){n(!0)},function(){n(!1)})}}($);