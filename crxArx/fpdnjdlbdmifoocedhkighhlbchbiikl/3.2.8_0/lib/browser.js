!function(e,n){"function"==typeof define&&(define.amd||define.cmd)?define(n):"object"==typeof exports?module.exports=n():e.Browser=n()}(this,function(){var e=this||{},n="undefined"!=typeof navigator?navigator:{},r=function(e,n){var r=navigator.mimeTypes;for(var i in r)if(r[i][e]==n)return!0;return!1};return function(i){var o=i||n.userAgent||{},a=this,d={Trident:o.indexOf("Trident")>-1||o.indexOf("NET CLR")>-1,Presto:o.indexOf("Presto")>-1,WebKit:o.indexOf("AppleWebKit")>-1,Gecko:o.indexOf("Gecko/")>-1,Safari:o.indexOf("Safari")>-1,Chrome:o.indexOf("Chrome")>-1||o.indexOf("CriOS")>-1,IE:o.indexOf("MSIE")>-1||o.indexOf("Trident")>-1,Edge:o.indexOf("Edge")>-1,Firefox:o.indexOf("Firefox")>-1||o.indexOf("FxiOS")>-1,"Firefox Focus":o.indexOf("Focus")>-1,Chromium:o.indexOf("Chromium")>-1,Opera:o.indexOf("Opera")>-1||o.indexOf("OPR")>-1,Vivaldi:o.indexOf("Vivaldi")>-1,Yandex:o.indexOf("YaBrowser")>-1,Arora:o.indexOf("Arora")>-1,Lunascape:o.indexOf("Lunascape")>-1,QupZilla:o.indexOf("QupZilla")>-1,"Coc Coc":o.indexOf("coc_coc_browser")>-1,Kindle:o.indexOf("Kindle")>-1||o.indexOf("Silk/")>-1,Iceweasel:o.indexOf("Iceweasel")>-1,Konqueror:o.indexOf("Konqueror")>-1,Iceape:o.indexOf("Iceape")>-1,SeaMonkey:o.indexOf("SeaMonkey")>-1,Epiphany:o.indexOf("Epiphany")>-1,360:o.indexOf("QihooBrowser")>-1,"360EE":o.indexOf("360EE")>-1,"360SE":o.indexOf("360SE")>-1,UC:o.indexOf("UC")>-1||o.indexOf(" UBrowser")>-1,QQBrowser:o.indexOf("QQBrowser")>-1,QQ:o.indexOf("QQ/")>-1,Baidu:o.indexOf("Baidu")>-1||o.indexOf("BIDUBrowser")>-1,Maxthon:o.indexOf("Maxthon")>-1,Sogou:o.indexOf("MetaSr")>-1||o.indexOf("Sogou")>-1,LBBROWSER:o.indexOf("LBBROWSER")>-1,"2345Explorer":o.indexOf("2345Explorer")>-1,TheWorld:o.indexOf("TheWorld")>-1,XiaoMi:o.indexOf("MiuiBrowser")>-1,Quark:o.indexOf("Quark")>-1,Qiyu:o.indexOf("Qiyu")>-1,Wechat:o.indexOf("MicroMessenger")>-1,Taobao:o.indexOf("AliApp(TB")>-1,Alipay:o.indexOf("AliApp(AP")>-1,Weibo:o.indexOf("Weibo")>-1,Douban:o.indexOf("com.douban.frodo")>-1,Suning:o.indexOf("SNEBUY-APP")>-1,iQiYi:o.indexOf("IqiyiApp")>-1,Windows:o.indexOf("Windows")>-1,Linux:o.indexOf("Linux")>-1||o.indexOf("X11")>-1,"Mac OS":o.indexOf("Macintosh")>-1,Android:o.indexOf("Android")>-1||o.indexOf("Adr")>-1,Ubuntu:o.indexOf("Ubuntu")>-1,FreeBSD:o.indexOf("FreeBSD")>-1,Debian:o.indexOf("Debian")>-1,"Windows Phone":o.indexOf("IEMobile")>-1||o.indexOf("Windows Phone")>-1,BlackBerry:o.indexOf("BlackBerry")>-1||o.indexOf("RIM")>-1,MeeGo:o.indexOf("MeeGo")>-1,Symbian:o.indexOf("Symbian")>-1,iOS:o.indexOf("like Mac OS X")>-1,"Chrome OS":o.indexOf("CrOS")>-1,WebOS:o.indexOf("hpwOS")>-1,Mobile:o.indexOf("Mobi")>-1||o.indexOf("iPh")>-1||o.indexOf("480")>-1,Tablet:o.indexOf("Tablet")>-1||o.indexOf("Pad")>-1||o.indexOf("Nexus 7")>-1},c=!1;if(e.chrome){var u=o.replace(/^.*Chrome\/([\d]+).*$/,"$1");u>36&&e.showModalDialog?c=!0:u>45&&(c=r("type","application/vnd.chromium.remoting-viewer"))}if(d.Mobile?d.Mobile=!(o.indexOf("iPad")>-1):c&&(r("type","application/gameplugin")?d["360SE"]=!0:d["360EE"]=!0),d.IE||d.Edge){var f=window.screenTop-window.screenY;switch(f){case 71:case 74:case 99:case 102:d["360EE"]=!0;break;case 75:case 74:case 105:case 104:d["360SE"]=!0}}var t={engine:["WebKit","Trident","Gecko","Presto"],browser:["Safari","Chrome","Edge","IE","Firefox","Firefox Focus","Chromium","Opera","Vivaldi","Yandex","Arora","Lunascape","QupZilla","Coc Coc","Kindle","Iceweasel","Konqueror","Iceape","SeaMonkey","Epiphany","360","360SE","360EE","UC","QQBrowser","QQ","Baidu","Maxthon","Sogou","LBBROWSER","2345Explorer","TheWorld","XiaoMi","Quark","Qiyu","Wechat","Taobao","Alipay","Weibo","Douban","Suning","iQiYi"],os:["Windows","Linux","Mac OS","Android","Ubuntu","FreeBSD","Debian","iOS","Windows Phone","BlackBerry","MeeGo","Symbian","Chrome OS","WebOS"],device:["Mobile","Tablet"]};a.device="PC",a.language=function(){var e=n.browserLanguage||n.language,r=e.split("-");return r[1]&&(r[1]=r[1].toUpperCase()),r.join("_")}();for(var p in t)for(var l=0;l<t[p].length;l++){var O=t[p][l];d[O]&&(a[p]=O)}var x={Windows:function(){var e=o.replace(/^.*Windows NT ([\d.]+);.*$/,"$1"),n={6.4:"10",6.3:"8.1",6.2:"8",6.1:"7","6.0":"Vista",5.2:"XP",5.1:"XP","5.0":"2000"};return n[e]||e},Android:function(){return o.replace(/^.*Android ([\d.]+);.*$/,"$1")},iOS:function(){return o.replace(/^.*OS ([\d_]+) like.*$/,"$1").replace(/_/g,".")},Debian:function(){return o.replace(/^.*Debian\/([\d.]+).*$/,"$1")},"Windows Phone":function(){return o.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/,"$2")},"Mac OS":function(){return o.replace(/^.*Mac OS X ([\d_]+).*$/,"$1").replace(/_/g,".")},WebOS:function(){return o.replace(/^.*hpwOS\/([\d.]+);.*$/,"$1")}};a.osVersion="",x[a.os]&&(a.osVersion=x[a.os](),a.osVersion==o&&(a.osVersion=""));var $={Safari:function(){return o.replace(/^.*Version\/([\d.]+).*$/,"$1")},Chrome:function(){return o.replace(/^.*Chrome\/([\d.]+).*$/,"$1").replace(/^.*CriOS\/([\d.]+).*$/,"$1")},IE:function(){return o.replace(/^.*MSIE ([\d.]+).*$/,"$1").replace(/^.*rv:([\d.]+).*$/,"$1")},Edge:function(){return o.replace(/^.*Edge\/([\d.]+).*$/,"$1")},Firefox:function(){return o.replace(/^.*Firefox\/([\d.]+).*$/,"$1").replace(/^.*FxiOS\/([\d.]+).*$/,"$1")},"Firefox Focus":function(){return o.replace(/^.*Focus\/([\d.]+).*$/,"$1")},Chromium:function(){return o.replace(/^.*Chromium\/([\d.]+).*$/,"$1")},Opera:function(){return o.replace(/^.*Opera\/([\d.]+).*$/,"$1").replace(/^.*OPR\/([\d.]+).*$/,"$1")},Vivaldi:function(){return o.replace(/^.*Vivaldi\/([\d.]+).*$/,"$1")},Yandex:function(){return o.replace(/^.*YaBrowser\/([\d.]+).*$/,"$1")},Arora:function(){return o.replace(/^.*Arora\/([\d.]+).*$/,"$1")},Lunascape:function(){return o.replace(/^.*Lunascape[\/\s]([\d.]+).*$/,"$1")},QupZilla:function(){return o.replace(/^.*QupZilla[\/\s]([\d.]+).*$/,"$1")},"Coc Coc":function(){return o.replace(/^.*coc_coc_browser\/([\d.]+).*$/,"$1")},Kindle:function(){return o.replace(/^.*Version\/([\d.]+).*$/,"$1")},Iceweasel:function(){return o.replace(/^.*Iceweasel\/([\d.]+).*$/,"$1")},Konqueror:function(){return o.replace(/^.*Konqueror\/([\d.]+).*$/,"$1")},Iceape:function(){return o.replace(/^.*Iceape\/([\d.]+).*$/,"$1")},SeaMonkey:function(){return o.replace(/^.*SeaMonkey\/([\d.]+).*$/,"$1")},Epiphany:function(){return o.replace(/^.*Epiphany\/([\d.]+).*$/,"$1")},360:function(){return o.replace(/^.*QihooBrowser\/([\d.]+).*$/,"$1")},"360SE":function(){var e={63:"10.0",55:"9.1",45:"8.1",42:"8.0",31:"7.0",21:"6.3"},n=o.replace(/^.*Chrome\/([\d]+).*$/,"$1");return e[n]||""},"360EE":function(){var e={63:"9.5",55:"9.0",50:"8.7",30:"7.5"},n=o.replace(/^.*Chrome\/([\d]+).*$/,"$1");return e[n]||""},Maxthon:function(){return o.replace(/^.*Maxthon\/([\d.]+).*$/,"$1")},QQBrowser:function(){return o.replace(/^.*QQBrowser\/([\d.]+).*$/,"$1")},QQ:function(){return o.replace(/^.*QQ\/([\d.]+).*$/,"$1")},Baidu:function(){return o.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/,"$1")},UC:function(){return o.replace(/^.*UC?Browser\/([\d.]+).*$/,"$1")},Sogou:function(){return o.replace(/^.*SE ([\d.X]+).*$/,"$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/,"$1")},LBBROWSER:function(){var e={57:"6.5",49:"6.0",46:"5.9",42:"5.3",39:"5.2",34:"5.0",29:"4.5",21:"4.0"},n=navigator.userAgent.replace(/^.*Chrome\/([\d]+).*$/,"$1");return e[n]||""},"2345Explorer":function(){return o.replace(/^.*2345Explorer\/([\d.]+).*$/,"$1")},TheWorld:function(){return o.replace(/^.*TheWorld ([\d.]+).*$/,"$1")},XiaoMi:function(){return o.replace(/^.*MiuiBrowser\/([\d.]+).*$/,"$1")},Quark:function(){return o.replace(/^.*Quark\/([\d.]+).*$/,"$1")},Qiyu:function(){return o.replace(/^.*Qiyu\/([\d.]+).*$/,"$1")},Wechat:function(){return o.replace(/^.*MicroMessenger\/([\d.]+).*$/,"$1")},Taobao:function(){return o.replace(/^.*AliApp\(TB\/([\d.]+).*$/,"$1")},Alipay:function(){return o.replace(/^.*AliApp\(AP\/([\d.]+).*$/,"$1")},Weibo:function(){return o.replace(/^.*weibo__([\d.]+).*$/,"$1")},Douban:function(){return o.replace(/^.*com.douban.frodo\/([\d.]+).*$/,"$1")},Suning:function(){return o.replace(/^.*SNEBUY-APP([\d.]+).*$/,"$1")},iQiYi:function(){return o.replace(/^.*IqiyiVersion\/([\d.]+).*$/,"$1")}};a.version="",$[a.browser]&&(a.version=$[a.browser](),a.version==o&&(a.version="")),"Edge"==a.browser?a.engine="EdgeHTML":"Chrome"==a.browser&&parseInt(a.version)>27?a.engine="Blink":"Opera"==a.browser&&parseInt(a.version)>12?a.engine="Blink":"Yandex"==a.browser&&(a.engine="Blink")}});