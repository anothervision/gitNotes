"use strict";var bgWeather={data:{today:{code:"29",temp:{current:"NaN",high:"NaN",low:"37"},text:"NaN",humidity:"NaN",pressure:"NaN",wind:"NaN"},future:[{code:"34",date:(new Date).getTime()+864e5,day:"Fri",high:"",low:"",text:"NaN"},{code:"28",date:(new Date).getTime()+1728e5,day:"Sat",high:"",low:"",text:"NaN"},{code:"30",date:(new Date).getTime()+2592e5,day:"Sun",high:"",low:"",text:"NaN"},{code:"30",date:(new Date).getTime()+3456e5,day:"Mon",high:"",low:"",text:"NaN"},{code:"39",date:(new Date).getTime()+432e6,day:"Tue",high:"",low:"",text:"NaN"}],location:{city:"Locating",country:"...",region:" NY"},woeid:2459115},init:function(){var t=this;t.initData(function(){t.queryWeather()}),infinity.alarms.onAlarm("queryWeather",function(e){t.queryWeather()}),infinity.alarms.get("queryWeather",function(e){e||infinity.alarms.create("queryWeather",{periodInMinutes:30})}),infinity.onMessage("recoverySuccess",function(){var e=infinity.setting("woeid");e&&t.queryWeather(e)})},initData:function(e){var t=this;try{t.tempUnitC=infinity.setting("tempUnitC")}catch(e){t.tempUnitC=!0}infinity.init("infinity-weather",t.data,!0,function(){e&&e()})},tempUnitC:!0,transUnit:function(t){try{var e=parseInt(t);return this.tempUnitC?Math.round((e-32)/1.8):e}catch(e){return t}},setTheCityWeather:function(t){var i=this;i.initData(function(){i.queryCity(t,function(e){i.queryWeather(e.woeid)})}),infinity.get("infinity-weather",!0,function(e){e&&i.queryCity(t,function(e){i.queryWeather(e.woeid)})})},queryCity:function(e,i){var t="https://www.yahoo.com/news/_td/api/resource/WeatherSearch;text="+encodeURIComponent(e)+"?bkt=news-d-147&device=desktop&feature=cacheContentCanvas%2Ccanvass%2Cfeaturebar%2CdeferModalCluster%2CspecRetry&intl="+chrome.i18n.getUILanguage()+"&lang="+chrome.i18n.getUILanguage()+"&partner=none&region=US&site=fp&tz=America%2FLos_Angeles&ver=2.0.2213002&returnMeta=true&t="+(new Date).getTime();$.ajax({url:t,dataType:"json"}).done(function(e){try{var t=e.data.splice(0,20);t.length&&i&&i(t[0])}catch(e){}})},queryWeather:function(i){infinity.get("infinity-weather",!0,function(e){var a=void 0,t="https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid="+(a=i||e.woeid)+"&format=json&t="+(new Date).getTime();$.ajax({url:t,dataType:"json"}).done(function(e){try{var t=e.query.results;if(t.channel.hasOwnProperty("item")){var i=t.channel,n={};n.today={code:i.item.condition.code,temp:{current:i.item.condition.temp,high:i.item.forecast[0].high,low:i.item.forecast[0].low},text:i.item.condition.text,humidity:i.atmosphere.humidity+" %",pressure:i.atmosphere.humidity+" in",wind:i.wind.speed+" mph"},n.future=[],n.location=i.location,n.woeid=a,infinity.setting("woeid",a),i.item.forecast.map(function(e,t){0<t&&t<6&&n.future.push(e)}),infinity.set("infinity-weather",n,!0),infinity.sendMessage("updateWeather")}}catch(e){}})})}};