function getFirstChildWithTagName(e,t){for(var t=t.toUpperCase(),n=e.childNodes,r=0;r<n.length;r++)if(n[r].nodeName==t)return n[r]}function clearArea(e){return"definition"==e?(document.getElementById("word").innerHTML="",document.getElementById("uk_pron").innerHTML="",document.getElementById("us_pron").innerHTML="",document.getElementById("uk_audio").dispaly="none",document.getElementById("us_audio").dispaly="none",document.getElementById("interpret").innerHTML="",null):void(document.getElementById(e)&&(document.getElementById(e).innerHTML=""))}function showTips(e){var t=document.getElementById("tips");0==e.length?clearArea("tips"):t.innerHTML="<p>"+e+"</p>"}function loggedIn(e){var t=document.getElementById("status"),n=document.createElement("a"),r=document.createElement("a"),o=document.createElement("span"),a=HOST,d=HOST+"/newword.action";n.setAttribute("href",a),r.setAttribute("href",d),n.setAttribute("target","_newtab"),r.setAttribute("target","_newtab"),n.appendChild(document.createTextNode(e)),r.appendChild(document.createTextNode("生词表")),o.innerHTML=" - ",clearArea("status"),t.appendChild(r),t.appendChild(o),t.appendChild(n)}function loggedOut(){var e=document.getElementById("status"),t=document.createElement("a"),n=HOST+"/denglu.action";t.setAttribute("href",n),t.setAttribute("target","_newtab"),t.appendChild(document.createTextNode("登录")),clearArea("status"),e.appendChild(t);document.getElementById("search_area");showTips("提示：使用回车键搜索更快捷。")}function checkLoginStatus(){document.getElementById("input").focus();var e=document.getElementById("status");e.innerHTML="正在检查...",showTips("提示：使用回车键搜索更快捷。");var t=new XMLHttpRequest,n=HOST+"/userInfo.action";t.open("GET",n),t.onreadystatechange=function(){if(4===t.readyState){var e=JSON.parse(t.responseText);"0"!=e.type?(loggedIn(e.name),document.getElementById("input").focus()):(loggedOut(),document.getElementById("input").focus())}},t.send(null)}function addWord(){var e=document.getElementById("jump"),t=(getFirstChildWithTagName(e,"a"),{});e.innerHTML="添加中...",t.word=$("#word").html(),t.course="*",t.wordidx="*",t.infoidx="100",t.selection="*",t.info=info,t.opcode="1",t=JSON.stringify(t),$.post(HOST+"/insertNewWord.action",{newwordlist:t},function(){e.innerHTML="已添加到生词",document.getElementById("input").focus()})}function showEnDefinitions(e){var t=document.getElementById("en_trans");for(var n in e){var r=document.createElement("div");r.setAttribute("class","part-of-speech"),r.innerHTML="<strong>"+n+"</strong>";for(var o=document.createElement("ol"),a=0;a<e[n].length;a++){var d=document.createElement("li");d.innerText=e[n][a],o.appendChild(d)}t.appendChild(r),t.appendChild(o)}}function queryOk(e){function t(e){return e?e.replace(/(\")/g,'\\"').replace(/\'/g,"\\'"):""}showTips("");var n=(e.learning_id,e.wordlist[0]),r=n.interpret.split(/\r?\n/);info=n.interpret,info=t(info),$("#definition").show(),$("#uk_audio").attr("alt",n.word).show(),$("#us_audio").attr("alt",n.word).show(),$("#word").html(n.word),$("#uk_pron").html(n.uk_pron),$("#us_pron").html(n.us_pron),$.each(r,function(e,t){var n=$("<p class='line'>");n.html(t),$("#interpret").append(n)});var o=document.getElementById("jump");$.get(HOST+"/getNewWord.action?word="+n.word+"&infoidx=100",function(e){if(e&&"1"!=e)if(0==e.length){var t=document.createElement("a");t.setAttribute("id","jump_a"),t.setAttribute("href","#"),t.setAttribute("title",n.content),t.appendChild(document.createTextNode("添加到生词本")),o.appendChild(t)}else{var t=document.createElement("a");t.setAttribute("href",HOST+"/newword.action"),t.appendChild(document.createTextNode("查看我的生词")),o.appendChild(t),o.className="jump",t.setAttribute("target","_blank"),o.id=""}else{var t=document.createElement("a");t.setAttribute("href",HOST+"/newword.action"),t.appendChild(document.createTextNode("添加到生词本")),t.setAttribute("target","_blank"),o&&(o.appendChild(t),o.className="jump",o.id="")}})}function queryNotFound(e){clearArea("jump"),showTips('<span class="word">'+e+"</span> 没有找到。"),$("#definition").hide()}function transMark(e){return e?e.replace(/(\")/g,'\\"').replace(/\'/g,"\\'"):""}function query(e){e=transMark(e),showTips("查询中..."),clearArea("jump"),clearArea("definition");var t=new XMLHttpRequest,n=HOST+"/loadLexisList.action?strict=1&word="+e;t.open("GET",n),t.onreadystatechange=function(){if(4===t.readyState){var n=JSON.parse(t.responseText);""!=n.wordlist?queryOk(n):queryNotFound(e)}},t.send(null)}function parse(e){var t=/[^a-zA-Z ]+/g;if(e=e.replace(t,""),0==e.length||-1!=e.search(/^ +$/))return null;var n=e.replace(/ +/," ");return n=n.replace(/^ +| +$/,"")}function click(){var e=document.getElementById("input").value,t=parse(e);null==t?(clearArea("jump"),clearArea("definition"),showTips('<span class="color">英文字符</span>和<span class="color">空格</span>为有效的关键字，请重新输入')):query(t),document.getElementById("input").focus()}function keydown(){if(13==event.keyCode){var e=document.getElementById("input").value,t=parse(e);null==t?(clearArea("jump"),clearArea("definition"),showTips('<span class="color">英文字符</span>和<span class="color">空格</span>为有效的关键字，请重新输入')):query(t)}}function playSound(){var e=document.createElement("audio"),t=$(this).attr("type"),n=$(this).attr("alt"),r=AUDIO_CDN+"/speeches/"+t+"/"+t+"-speech/"+n+".mp3";e.setAttribute("src",r),e.setAttribute("autoplay","true"),e.onerror=function(){showMsg("发音不存在")};var o=document.getElementById("definition");o.appendChild(e),document.getElementById("input").focus()}function showMsg(e){var t=document.querySelector("#tips");clearTimeout(t.timer),t.innerHTML=e,t.style.display="block",t.className="color",t.timer=setTimeout(function(){t.innerHTML="",t.className="",t.style.display="none"},3e3)}var info="",HOST="https://langeasy.com.cn",AUDIO_CDN="https://audio2.beingfine.cn";document.addEventListener("DOMContentLoaded",function(){checkLoginStatus(),document.querySelector("button").addEventListener("click",click),document.querySelector("input").addEventListener("keydown",keydown),document.querySelector("#jump").addEventListener("click",addWord),document.querySelector("#uk_audio").addEventListener("click",playSound),document.querySelector("#us_audio").addEventListener("click",playSound),document.querySelector("#uk_audio").addEventListener("mouseover",playSound),document.querySelector("#us_audio").addEventListener("mouseover",playSound)});