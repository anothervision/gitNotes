"use strict";var bgCloudApi={init:function(){var e=this;infinity.init("api-update-time-v2",{replaceSites:0,updateSearches:0,updateDiscovery:0,updateAdsInAdd:0}),infinity.alarms.onAlarm("checkApiUpdate",function(i){e.checkApiUpdate()}),infinity.alarms.get("checkApiUpdate",function(i){i||infinity.alarms.create("checkApiUpdate",{periodInMinutes:120})}),infinity.alarms.onAlarm("requestApiPerHour",function(i){e.apis.updateSearches(),e.apis.replaceSites()}),infinity.alarms.get("requestApiPerHour",function(i){i||infinity.alarms.create("requestApiPerHour",{periodInMinutes:60})}),infinity.onMessage("recoverySuccess",function(){e.apis.updateSearches()})},checkApiUpdate:function(e){$.ajax({url:"https://infinity-basic.infinitynewtab.com/basic-api/update-time.json",dataType:"json",cache:!1}).done(function(i){infinity.set("api-update-time-v2",i),e&&e()})},apis:{updateSearches:function(){var i=infinity.get("api-update-time-v2");function n(i,e){var n=chrome.i18n.getUILanguage(),t=e.types.map(function(i,e){var t={};return t.name=i.name,i.url.hasOwnProperty(n)?t.url=i.url[n]:t.url=i.url.default,t});i.types=t}$.ajax({url:"https://basic-static-server.infinitynewtab.com/api2.0/searches/data.json?_t="+i.updateSearches,dataType:"json"}).done(function(i){var e=infinity.get("infinity-searches");i.searches.map(function(t,i){t.seId==e.current.seId&&n(e.current,t),e.all.map(function(i,e){i.seId==t.seId&&n(i,t)})}),infinity.set("infinity-searches",e)})},replaceSites:function(i){var e=infinity.get("api-update-time-v2");$.ajax({url:"https://infinity-basic.infinitynewtab.com/basic-api/replace-sites.json?_t="+e.replaceSites,dataType:"json"}).done(function(i){var e=infinity.get("infinity-icons"),r=i.sites.filter(function(i,e){return i.isEnabled});e.map(function(i,e){i.map(function(i,e){i.hasOwnProperty("updateTime")||(i.updateTime=0);for(var t=i.url,n=0;n<r.length;n++){var a=r[n];a.matches.some(function(i){return-1!=t.indexOf(i)})&&i.updateTime<a.updateTime&&(i.url=a.replaceUrl,a.isReplaceName&&(i.name=a.name),i.updateTime=a.updateTime)}})}),infinity.set("infinity-icons",e)})}}};