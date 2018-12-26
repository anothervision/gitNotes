let TRsettings=function(e){let t=function(e){return"object"==typeof e&&(e.exports={CODE_STANDARDS:"code_standards",FCP_HELPER_INIT:"fcp_helper_init",FCP_HELPER_DETECT:"fcp_helper_detect",GET_CSS:"get-css",GET_JS:"get-js",GET_HTML:"get-html",GET_COOKIE:"get-cookie",REMOVE_COOKIE:"remove-cookie",SET_COOKIE:"set-cookie",CSS_READY:"css-ready",JS_READY:"js-ready",HTML_READY:"html-ready",ALL_READY:"all-ready",GET_OPTIONS:"get_options",SET_OPTIONS:"set_options",MENU_SAVED:"menu_saved",START_OPTION:"start-option",OPT_START_FCP:"opt-item-fcp",CALC_PAGE_LOAD_TIME:"calc-page-load-time",GET_PAGE_WPO_INFO:"get_page_wpo_info",SHOW_PAGE_LOAD_TIME:"show-page-load-time",TAB_CREATED_OR_UPDATED:"tab_created_or_updated",REGEXP_TOOL:"regexp",EN_DECODE:"en-decode",JSON_FORMAT:"json-format",QR_CODE:"qr-code",CODE_BEAUTIFY:"code-beautify",JS_CSS_PAGE_BEAUTIFY:"JS_CSS_PAGE_BEAUTIFY",JS_CSS_PAGE_BEAUTIFY_REQUEST:"JS_CSS_PAGE_BEAUTIFY_REQUEST",CODE_COMPRESS:"code-compress",TIME_STAMP:"timestamp",IMAGE_BASE64:"image-base64",RANDOM_PASSWORD:"password",QR_DECODE:"qr-decode",JSON_COMPARE:"json-diff",JSON_PAGE_FORMAT:"JSON_PAGE_FORMAT",JSON_PAGE_FORMAT_REQUEST:"JSON_PAGE_FORMAT_REQUEST",COLOR_PICKER:"color-picker:newImage",SHOW_COLOR_PICKER:"show_color_picker",AJAX_DEBUGGER:"ajax-debugger",AJAX_DEBUGGER_CONSOLE:"ajax-debugger-console",AJAX_DEBUGGER_SWITCH:"ajax-debugger-switch",HTML_TO_MARKDOWN:"html2markdown",PAGE_CAPTURE:"page-capture",PAGE_CAPTURE_SCROLL:"page_capture_scroll",PAGE_CAPTURE_CAPTURE:"page_capture_capture",STICKY_NOTES:"sticky-notes",DEV_TOOLS:"dev-tools",OPEN_OPTIONS_PAGE:"open-options-page"}),e.exports}({exports:{}});return e.exports=(()=>{let e=t,_=["opt_item_contextMenus","JSON_PAGE_FORMAT","EN_DECODE","CODE_BEAUTIFY","CODE_COMPRESS","JSON_FORMAT","JSON_COMPARE","QR_CODE","COLOR_PICKER","REGEXP_TOOL","TIME_STAMP","IMAGE_BASE64","FCP_HELPER_DETECT","SHOW_PAGE_LOAD_TIME","AJAX_DEBUGGER","JS_CSS_PAGE_BEAUTIFY","HTML_TO_MARKDOWN","PAGE_CAPTURE","RANDOM_PASSWORD","FORBID_OPEN_IN_NEW_TAB","MAX_JSON_KEYS_NUMBER","AUTO_TEXT_DECODE","STICKY_NOTES"],E={MENU_PAGE_ENCODING:{icon:"↺",text:"网页编码设置"},MENU_QRCODE_CREATE:{icon:"▣",text:"二维码生成器",contexts:["page","selection","editable","link","image"]},MENU_QRCODE_DECODE:{icon:"◈",text:"二维码解码器",contexts:["image"]},MENU_PAGE_CAPTURE:{icon:"✂",text:"页面滚动截屏"},MENU_COLOR_PICKER:{icon:"☀",text:"页面取色工具",contexts:["page","selection","editable"]},MENU_IMAGE_BASE64:{icon:"⇄",text:"图片与base64",contexts:["image"]},MENU_STR_ENDECODE:{icon:"♨",text:"字符串编解码",contexts:["page","selection","editable"]},MENU_JSON_FORMAT:{icon:"★",text:"JSON格式化",contexts:["page","selection","editable"]},MENU_JSON_COMPARE:{icon:"☃",text:"JSON比对器"},MENU_CODE_FORMAT:{icon:"☂",text:"代码美化工具",contexts:["page","selection","editable"]},MENU_CODE_COMPRESS:{icon:"〓",text:"代码压缩工具"},MENU_AJAX_DEBUGGER:{icon:"▶",text:"Ajax调试功能"},MENU_PAGE_OPTIMI:{icon:"√",text:"页面性能检测"},MENU_TIME_STAMP:{icon:"♖",text:"时间(戳)转换"},MENU_RANDOM_PASS:{icon:"☽",text:"随机密码生成"},MENU_JS_REGEXP:{icon:"✙",text:"JS正则表达式"},MENU_MARKDOWN_TL:{icon:"ⓜ",text:"markown工具"},MENU_CODE_STANDARD:{icon:"☊",text:"编码规范检测"},MENU_STICKY_NOTE:{icon:"▤",text:"我的便签笔记"}},o=()=>_.concat(Object.keys(E));return{getAllOpts:o,setOptsFromBgPage:function(e){o().forEach(t=>{e.some(e=>"string"==typeof e&&e===t?(localStorage.setItem(t,"true"),!0):!("object"!=typeof e||!e.hasOwnProperty(t)||(localStorage.setItem(t,e[t]),0)))||localStorage.setItem(t,"false")})},getOptsFromBgPage:function(e){if(e&&"function"==typeof e){let t={};o().forEach(e=>{let _=localStorage.getItem(e);"MAX_JSON_KEYS_NUMBER"===e?t[e]=_||1e4:"number"==typeof _?t[e]=_:"false"!==_&&(t[e]="true")}),e.call(null,t)}},getOptions:function(t){chrome.runtime.sendMessage({type:e.GET_OPTIONS},t)},setOptions:function(t){chrome.runtime.sendMessage({type:e.SET_OPTIONS,items:t})},getMenuOpts:function(){return E},didMenuSettingSaved:function(e){let t=!!localStorage.getItem("MENU_PAGE_ENCODING");if(!e||"function"!=typeof e)return t;e(t)},getDefaultContextMenus:function(){return["MENU_PAGE_ENCODING","MENU_QRCODE_CREATE","MENU_QRCODE_DECODE","MENU_PAGE_CAPTURE","MENU_COLOR_PICKER","MENU_IMAGE_BASE64","MENU_STR_ENDECODE","MENU_JSON_FORMAT","MENU_CODE_FORMAT"]},askMenuSavedOrNot:function(t){chrome.runtime.sendMessage({type:e.MENU_SAVED},t)}}})(),e.exports}({exports:{}}),Settings=TRsettings;new Vue({el:"#pageContainer",data:{selectedOpts:[],maxJsonKeysNumber:0,auto_text_decode:!1,manifest:{},menuOpts:{},selectedMenu:[],defaultMenu:Settings.getDefaultContextMenus()},created:function(){Settings.getOptions(e=>{this.selectedOpts=Object.keys(e).filter(t=>"string"==typeof e[t]&&/^MENU_/.test(t)?(this.selectedMenu.push(t),!1):"string"==typeof e[t]&&!["MAX_JSON_KEYS_NUMBER","AUTO_TEXT_DECODE"].includes(t)),this.maxJsonKeysNumber=e.MAX_JSON_KEYS_NUMBER,this.auto_text_decode="true"===e.AUTO_TEXT_DECODE,Settings.askMenuSavedOrNot(e=>{e||(this.selectedMenu=this.defaultMenu)})}),this.manifest=chrome.runtime.getManifest(),this.menuOpts=Settings.getMenuOpts()},methods:{close:()=>{chrome.tabs.query({active:!0,currentWindow:!0},e=>{chrome.tabs.remove(e[0].id)})},cancel:function(){this.close()},save:function(){Settings.setOptions(this.selectedOpts.concat([{MAX_JSON_KEYS_NUMBER:parseInt(this.maxJsonKeysNumber,10)},{AUTO_TEXT_DECODE:String(this.auto_text_decode)}]).concat(this.selectedMenu)),setTimeout(()=>{this.close()},1e3)}}});