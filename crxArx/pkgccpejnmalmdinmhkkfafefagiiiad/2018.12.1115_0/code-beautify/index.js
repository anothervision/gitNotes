let TRstaticjsmsg_type=function(t){return"object"==typeof t&&(t.exports={CODE_STANDARDS:"code_standards",FCP_HELPER_INIT:"fcp_helper_init",FCP_HELPER_DETECT:"fcp_helper_detect",GET_CSS:"get-css",GET_JS:"get-js",GET_HTML:"get-html",GET_COOKIE:"get-cookie",REMOVE_COOKIE:"remove-cookie",SET_COOKIE:"set-cookie",CSS_READY:"css-ready",JS_READY:"js-ready",HTML_READY:"html-ready",ALL_READY:"all-ready",GET_OPTIONS:"get_options",SET_OPTIONS:"set_options",MENU_SAVED:"menu_saved",START_OPTION:"start-option",OPT_START_FCP:"opt-item-fcp",CALC_PAGE_LOAD_TIME:"calc-page-load-time",GET_PAGE_WPO_INFO:"get_page_wpo_info",SHOW_PAGE_LOAD_TIME:"show-page-load-time",TAB_CREATED_OR_UPDATED:"tab_created_or_updated",REGEXP_TOOL:"regexp",EN_DECODE:"en-decode",JSON_FORMAT:"json-format",QR_CODE:"qr-code",CODE_BEAUTIFY:"code-beautify",JS_CSS_PAGE_BEAUTIFY:"JS_CSS_PAGE_BEAUTIFY",JS_CSS_PAGE_BEAUTIFY_REQUEST:"JS_CSS_PAGE_BEAUTIFY_REQUEST",CODE_COMPRESS:"code-compress",TIME_STAMP:"timestamp",IMAGE_BASE64:"image-base64",RANDOM_PASSWORD:"password",QR_DECODE:"qr-decode",JSON_COMPARE:"json-diff",JSON_PAGE_FORMAT:"JSON_PAGE_FORMAT",JSON_PAGE_FORMAT_REQUEST:"JSON_PAGE_FORMAT_REQUEST",COLOR_PICKER:"color-picker:newImage",SHOW_COLOR_PICKER:"show_color_picker",AJAX_DEBUGGER:"ajax-debugger",AJAX_DEBUGGER_CONSOLE:"ajax-debugger-console",AJAX_DEBUGGER_SWITCH:"ajax-debugger-switch",HTML_TO_MARKDOWN:"html2markdown",PAGE_CAPTURE:"page-capture",PAGE_CAPTURE_SCROLL:"page_capture_scroll",PAGE_CAPTURE_CAPTURE:"page_capture_capture",STICKY_NOTES:"sticky-notes",DEV_TOOLS:"dev-tools",OPEN_OPTIONS_PAGE:"open-options-page"}),t.exports}({exports:{}}),TRbeautifyjs=function(t){return function(){var e=function(){function t(t,e){"use strict";var n,i,r,s,a,_,o,c,l,h,p,u,f,T,d,E,g,O,A,S,m,x,N,K,v,R,y="";function C(t,e){return{mode:e,last_text:t?t.last_text:"",last_word:t?t.last_word:"",var_line:!1,var_line_tainted:!1,var_line_reindented:!1,in_html_comment:!1,multiline_array:!1,if_block:!1,do_block:!1,do_while:!1,in_case_statement:!1,in_case:!1,case_body:!1,indentation_level:t?t.indentation_level+(t.var_line&&t.var_line_reindented?1:0):0,ternary_depth:0}}for(p="\n\r\t ".split(""),u="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_$".split(""),E="0123456789".split(""),f="+ - * / % & ++ -- = += -= *= /= %= == === != !== > < >= <= >> << >>> >>>= >>= <<= && &= | || ! !! , : ? ^ ^= |= ::",f=(f+=" <%= <% %> <?= <? ?>").split(" "),d="continue,try,throw,return,var,if,switch,case,default,for,while,break,function".split(","),v={BlockStatement:"BlockStatement",Statement:"Statement",ObjectLiteral:"ObjectLiteral",ArrayLiteral:"ArrayLiteral",ForInitializer:"ForInitializer",Conditional:"Conditional",Expression:"Expression"},K={TK_START_EXPR:function(){W();if("["===r){if("TK_WORD"===a||")"===c.last_text)return J(c.last_text,d)&&(m=!0),M(v.Expression),void D();G(c.mode)&&("["===c.last_text||"]"===_&&","===c.last_text)&&(R.keep_array_indentation||I())}else"for"===c.last_text?M(v.ForInitializer):J(c.last_text,["if","while"])?M(v.Conditional):M(v.Expression);";"===c.last_text||"TK_START_BLOCK"===a?I():"TK_END_EXPR"===a||"TK_START_EXPR"===a||"TK_END_BLOCK"===a||"."===c.last_text?O&&I():"TK_WORD"!==a&&"TK_OPERATOR"!==a?m=!0:"function"===c.last_word||"typeof"===c.last_word?R.jslint_happy&&(m=!0):(J(c.last_text,d)||"catch"===c.last_text)&&R.space_before_conditional&&(m=!0);"("===r&&("TK_EQUALS"!==a&&"TK_OPERATOR"!==a||c.mode!==v.ObjectLiteral&&w());D(),"["===r&&(M(v.ArrayLiteral),U())},TK_END_EXPR:function(){for(;c.mode===v.Statement;)B();"]"===r&&G(c.mode)&&c.multiline_array&&!R.keep_array_indentation&&I();B(),D(),c.do_while&&l.mode===v.Conditional&&(l.mode=v.Expression,c.do_block=!1,c.do_while=!1)},TK_START_BLOCK:function(){M(v.BlockStatement);var t=X("}");"expand-strict"===R.brace_style?t||I():"expand"===R.brace_style?"TK_OPERATOR"!==a&&("TK_EQUALS"===a||F(c.last_text)&&"else"!==c.last_text?m=!0:I()):"TK_OPERATOR"!==a&&"TK_START_EXPR"!==a?"TK_START_BLOCK"===a?I():m=!0:G(l.mode)&&","===c.last_text&&("}"===_?m=!0:I());D(),U()},TK_END_BLOCK:function(){for(;c.mode===v.Statement;)B();B(),"expand"===R.brace_style||"expand-strict"===R.brace_style?"TK_START_BLOCK"!==a&&I():"TK_START_BLOCK"!==a&&(G(c.mode)&&R.keep_array_indentation?(R.keep_array_indentation=!1,I(),R.keep_array_indentation=!0):I());D()},TK_WORD:function(){W()||!O||j(c.mode)||"TK_OPERATOR"===a&&"--"!==c.last_text&&"++"!==c.last_text||"TK_EQUALS"===a||!R.preserve_newlines&&"var"===c.last_text||I();if(c.do_block&&!c.do_while){if("while"===r)return m=!0,D(),m=!0,void(c.do_while=!0);I(),c.do_block=!1}if(c.if_block&&"else"!==r){for(;c.mode===v.Statement;)B();c.if_block=!1}if("function"===r){if(c.var_line&&"TK_EQUALS"!==a&&(c.var_line_reindented=!0),(k()||";"===c.last_text)&&"{"!==c.last_text&&"TK_BLOCK_COMMENT"!==a&&"TK_COMMENT"!==a){A=k()?A:0,R.preserve_newlines||(A=1);for(var t=0;t<2-A;t++)I(!0)}return"TK_WORD"===a?"get"===c.last_text||"set"===c.last_text||"new"===c.last_text||"return"===c.last_text?m=!0:I():"TK_OPERATOR"===a||"="===c.last_text?m=!0:j(c.mode)||I(),D(),void(c.last_word=r)}if("case"===r||"default"===r&&c.in_case_statement)return I(),(c.case_body||R.jslint_happy)&&(c.indentation_level--,c.case_body=!1),D(),c.in_case=!0,void(c.in_case_statement=!0);g="NONE","TK_END_BLOCK"===a?J(r,["else","catch","finally"])?"expand"===R.brace_style||"end-expand"===R.brace_style||"expand-strict"===R.brace_style?g="NEWLINE":(g="SPACE",m=!0):g="NEWLINE":"TK_SEMICOLON"===a&&c.mode===v.BlockStatement?g="NEWLINE":"TK_SEMICOLON"===a&&j(c.mode)?g="SPACE":"TK_STRING"===a?g="NEWLINE":"TK_WORD"===a?g="SPACE":"TK_START_BLOCK"===a?g="NEWLINE":"TK_END_EXPR"===a&&(m=!0,g="NEWLINE");J(r,d)&&")"!==c.last_text&&(g="else"===c.last_text?"SPACE":"NEWLINE");"TK_COMMA"!==a&&"TK_START_EXPR"!==a&&"TK_EQUALS"!==a&&"TK_OPERATOR"!==a||c.mode!==v.ObjectLiteral&&w();J(r,["else","catch","finally"])?"TK_END_BLOCK"!==a||"expand"===R.brace_style||"end-expand"===R.brace_style||"expand-strict"===R.brace_style?I():(b(!0),"}"!==i[i.length-1]&&I(),m=!0):"NEWLINE"===g?F(c.last_text)?m=!0:"TK_END_EXPR"!==a?"TK_START_EXPR"===a&&"var"===r||":"===c.last_text||("if"===r&&"else"===c.last_word&&"{"!==c.last_text?m=!0:(c.var_line=!1,c.var_line_reindented=!1,I())):J(r,d)&&")"!==c.last_text&&(c.var_line=!1,c.var_line_reindented=!1,I()):G(c.mode)&&","===c.last_text&&"}"===_?I():"SPACE"===g&&(m=!0);D(),c.last_word=r,"var"===r&&(c.var_line=!0,c.var_line_reindented=!1,c.var_line_tainted=!1);"do"===r&&(c.do_block=!0);"if"===r&&(c.if_block=!0)},TK_SEMICOLON:function(){for(;c.mode===v.Statement&&!c.if_block;)B();D(),c.var_line=!1,c.var_line_reindented=!1,c.mode===v.ObjectLiteral&&(c.mode=v.BlockStatement)},TK_STRING:function(){W()?m=!0:"TK_WORD"===a?m=!0:"TK_COMMA"===a||"TK_START_EXPR"===a||"TK_EQUALS"===a||"TK_OPERATOR"===a?c.mode!==v.ObjectLiteral&&w():I();D()},TK_EQUALS:function(){c.var_line&&(c.var_line_tainted=!0);m=!0,D(),m=!0},TK_OPERATOR:function(){var t=!0,e=!0;if(F(c.last_text))return m=!0,void D();if("*"===r&&"TK_DOT"===a&&!_.match(/^\d+$/))return void D();if(":"===r&&c.in_case)return c.case_body=!0,U(),D(),I(),void(c.in_case=!1);if("::"===r)return void D();!O||"--"!==r&&"++"!==r||I();J(r,["--","++","!"])||J(r,["-","+"])&&(J(a,["TK_START_BLOCK","TK_START_EXPR","TK_EQUALS","TK_OPERATOR"])||J(c.last_text,d)||","===c.last_text)?(t=!1,e=!1,";"===c.last_text&&j(c.mode)&&(t=!0),"TK_WORD"===a&&J(c.last_text,d)&&(t=!0),c.mode!==v.BlockStatement&&c.mode!==v.Statement||"{"!==c.last_text&&";"!==c.last_text||I()):":"===r?0===c.ternary_depth?(c.mode===v.BlockStatement&&(c.mode=v.ObjectLiteral),t=!1):c.ternary_depth-=1:"?"===r&&(c.ternary_depth+=1);m=m||t,D(),m=e},TK_COMMA:function(){if(c.var_line)return(j(c.mode)||"TK_END_BLOCK"===a)&&(c.var_line_tainted=!1),c.var_line&&(c.var_line_reindented=!0),D(),void(c.var_line_tainted?(c.var_line_tainted=!1,I()):m=!0);"TK_END_BLOCK"===a&&c.mode!==v.Expression?(D(),c.mode===v.ObjectLiteral&&"}"===c.last_text?I():m=!0):c.mode===v.ObjectLiteral?(D(),I()):(D(),m=!0)},TK_BLOCK_COMMENT:function(){var t,e=function(t){var e=[],n=(t=t.replace(/\x0d/g,"")).indexOf("\n");for(;-1!==n;)e.push(t.substring(0,n)),t=t.substring(n+1),n=t.indexOf("\n");t.length&&e.push(t);return e}(r);if(function(t,e){for(var n=0;n<t.length;n++){var i=L(t[n]);if(i.charAt(0)!==e)return!1}return!0}(e.slice(1),"*"))for(I(!1,!0),D(e[0]),t=1;t<e.length;t++)I(!1,!0),D(" "+L(e[t]));else for(e.length>1?I(!1,!0):"TK_END_BLOCK"===a?I(!1,!0):m=!0,D(e[0]),i.push("\n"),t=1;t<e.length;t++)i.push(e[t]),i.push("\n");X("\n")||I(!1,!0)},TK_INLINE_COMMENT:function(){m=!0,D(),m=!0},TK_COMMENT:function(){O&&I(!1,!0);","!==c.last_text||O||b(!0);m=!0,D(),I(!1,!0)},TK_DOT:function(){F(c.last_text)?m=!0:w(")"===c.last_text&&R.break_chained_methods);D()},TK_UNKNOWN:function(){D(),"\n"===r[r.length-1]&&I()}},R={},void 0!==(e=e||{}).space_after_anon_function&&void 0===e.jslint_happy&&(e.jslint_happy=e.space_after_anon_function),void 0!==e.braces_on_own_line&&(R.brace_style=e.braces_on_own_line?"expand":"collapse"),R.brace_style=e.brace_style?e.brace_style:R.brace_style?R.brace_style:"collapse",R.indent_size=e.indent_size?parseInt(e.indent_size,10):4,R.indent_char=e.indent_char?e.indent_char:" ",R.preserve_newlines=void 0===e.preserve_newlines||e.preserve_newlines,R.break_chained_methods=void 0!==e.break_chained_methods&&e.break_chained_methods,R.max_preserve_newlines=void 0===e.max_preserve_newlines?0:parseInt(e.max_preserve_newlines,10),R.jslint_happy=void 0!==e.jslint_happy&&e.jslint_happy,R.keep_array_indentation=void 0!==e.keep_array_indentation&&e.keep_array_indentation,R.space_before_conditional=void 0===e.space_before_conditional||e.space_before_conditional,R.unescape_strings=void 0!==e.unescape_strings&&e.unescape_strings,R.wrap_line_length=void 0===e.wrap_line_length?0:parseInt(e.wrap_line_length,10),o="";R.indent_size>0;)o+=R.indent_char,R.indent_size-=1;for(;t&&(" "===t.charAt(0)||"\t"===t.charAt(0));)y+=t.charAt(0),t=t.substring(1);function b(t){for(t=void 0!==t&&t;i.length&&(" "===i[i.length-1]||i[i.length-1]===o||i[i.length-1]===y||t&&("\n"===i[i.length-1]||"\r"===i[i.length-1]));)i.pop()}function L(t){return t.replace(/^\s\s*|\s\s*$/,"")}function k(){return i.length&&"\n"===i[i.length-1]}function w(t){if(t=void 0!==t&&t,R.wrap_line_length&&!t){var e=function(t,e){var n=t.length-1;for(n<0&&(n+=t.length),n>t.length-1&&(n=t.length-1),n++;n-- >0;)if(n in t&&t[n]===e)return n;return-1}(i,"\n")+1;e<i.length&&i.slice(e).join("").length+r.length+(m?1:0)>=R.wrap_line_length&&(t=!0)}(R.preserve_newlines&&O||t)&&!k()&&(I(!1,!0),S=!0,O=!1)}function I(t,e){if(S=!1,m=!1,!e&&";"!==c.last_text)for(;c.mode===v.Statement&&!c.if_block;)B();c.mode===v.ArrayLiteral&&(c.multiline_array=!0),i.length&&(!t&&k()||i.push("\n"))}function P(t){if(void 0===t?t=1:"number"!=typeof t&&(t=t?1:0),""!==c.last_text)for(var e=0;e<t;e+=1)i.push(o)}function D(t){t=t||r,k()&&(R.keep_array_indentation&&G(c.mode)&&x.length?i.push(x.join("")+""):(y&&i.push(y),P(c.indentation_level),P(c.var_line&&c.var_line_reindented),P(S))),S=!1,function(){if(m&&i.length){var t=i[i.length-1];k()||" "===t||t===o||i.push(" ")}}(),m=!1,i.push(t)}function U(){c.indentation_level+=1}function M(t){c?(h.push(c),l=c):l=C(null,t),c=C(l,t)}function G(t){return t===v.ArrayLiteral}function j(t){return J(t,[v.ArrayLiteral,v.Expression,v.ForInitializer,v.Conditional])}function B(){h.length>0&&(l=c,c=h.pop())}function W(){return("do"===c.last_text||"else"===c.last_text&&"if"!==r||"TK_END_EXPR"===a&&(l.mode===v.ForInitializer||l.mode===v.Conditional))&&(w(),M(v.Statement),U(),S=!1,!0)}function F(t){return J(t,["case","return","do","if","throw","else"])}function J(t,e){for(var n=0;n<e.length;n+=1)if(e[n]===t)return!0;return!1}function X(t){for(var e=T,i=n.charAt(e);J(i,p)&&i!==t;){if(++e>=N)return!1;i=n.charAt(e)}return i===t}function H(){var t;if(A=0,T>=N)return["","TK_EOF"];O=!1,x=[];var e=n.charAt(T);for(T+=1;J(e,p);){if("\n"===e?(A+=1,x=[]):A&&(e===o?x.push(o):"\r"!==e&&x.push(" ")),T>=N)return["","TK_EOF"];e=n.charAt(T),T+=1}if(J(e,u)){if(T<N)for(;J(n.charAt(T),u)&&(e+=n.charAt(T),(T+=1)!==N););if(T!==N&&e.match(/^[0-9]+[Ee]$/)&&("-"===n.charAt(T)||"+"===n.charAt(T))){var r=n.charAt(T);return T+=1,[e+=r+H()[0],"TK_WORD"]}return"in"===e?[e,"TK_OPERATOR"]:[e,"TK_WORD"]}if("("===e||"["===e)return[e,"TK_START_EXPR"];if(")"===e||"]"===e)return[e,"TK_END_EXPR"];if("{"===e)return[e,"TK_START_BLOCK"];if("}"===e)return[e,"TK_END_BLOCK"];if(";"===e)return[e,"TK_SEMICOLON"];if("/"===e){var s="",_=!0;if("*"===n.charAt(T)){if((T+=1)<N)for(;T<N&&("*"!==n.charAt(T)||!n.charAt(T+1)||"/"!==n.charAt(T+1))&&(s+=e=n.charAt(T),"\n"!==e&&"\r"!==e||(_=!1),!((T+=1)>=N)););return T+=2,_&&0===A?["/*"+s+"*/","TK_INLINE_COMMENT"]:["/*"+s+"*/","TK_BLOCK_COMMENT"]}if("/"===n.charAt(T)){for(s=e;"\r"!==n.charAt(T)&&"\n"!==n.charAt(T)&&(s+=n.charAt(T),!((T+=1)>=N)););return[s,"TK_COMMENT"]}}if("'"===e||'"'===e||"/"===e&&("TK_WORD"===a&&F(c.last_text)||"TK_END_EXPR"===a&&J(l.mode,[v.Conditional,v.ForInitializer])||J(a,["TK_COMMENT","TK_START_EXPR","TK_START_BLOCK","TK_END_BLOCK","TK_OPERATOR","TK_EQUALS","TK_EOF","TK_SEMICOLON","TK_COMMA"]))){var h=e,d=!1,g=!1;if(t=e,T<N)if("/"===h){for(var S=!1;d||S||n.charAt(T)!==h;)if(t+=n.charAt(T),d?d=!1:(d="\\"===n.charAt(T),"["===n.charAt(T)?S=!0:"]"===n.charAt(T)&&(S=!1)),(T+=1)>=N)return[t,"TK_STRING"]}else for(;d||n.charAt(T)!==h;)if(t+=n.charAt(T),d?("x"!==n.charAt(T)&&"u"!==n.charAt(T)||(g=!0),d=!1):d="\\"===n.charAt(T),(T+=1)>=N)return[t,"TK_STRING"];if(T+=1,t+=h,g&&R.unescape_strings&&(t=function(t){for(var e,n=!1,i="",r=0,s="",a=0;n||r<t.length;)if(e=t.charAt(r),r++,n){if(n=!1,"x"===e)s=t.substr(r,2),r+=2;else{if("u"!==e){i+="\\"+e;continue}s=t.substr(r,4),r+=4}if(!s.match(/^[0123456789abcdefABCDEF]+$/))return t;if((a=parseInt(s,16))>=0&&a<32){i+="x"===e?"\\x"+s:"\\u"+s;continue}if(34===a||39===a||92===a)i+="\\"+String.fromCharCode(a);else{if("x"===e&&a>126&&a<=255)return t;i+=String.fromCharCode(a)}}else"\\"===e?n=!0:i+=e;return i}(t)),"/"===h)for(;T<N&&J(n.charAt(T),u);)t+=n.charAt(T),T+=1;return[t,"TK_STRING"]}if("#"===e){if(0===i.length&&"!"===n.charAt(T)){for(t=e;T<N&&"\n"!==e;)t+=e=n.charAt(T),T+=1;return[L(t)+"\n","TK_UNKNOWN"]}var m="#";if(T<N&&J(n.charAt(T),E)){do{m+=e=n.charAt(T),T+=1}while(T<N&&"#"!==e&&"="!==e);return"#"===e||("["===n.charAt(T)&&"]"===n.charAt(T+1)?(m+="[]",T+=2):"{"===n.charAt(T)&&"}"===n.charAt(T+1)&&(m+="{}",T+=2)),[m,"TK_WORD"]}}if("<"===e&&"\x3c!--"===n.substring(T-1,T+3)){for(T+=3,e="\x3c!--";"\n"!==n.charAt(T)&&T<N;)e+=n.charAt(T),T++;return c.in_html_comment=!0,[e,"TK_COMMENT"]}if("-"===e&&c.in_html_comment&&"--\x3e"===n.substring(T-1,T+2))return c.in_html_comment=!1,T+=2,["--\x3e","TK_COMMENT"];if("."===e)return[e,"TK_DOT"];if(J(e,f)){for(;T<N&&J(e+n.charAt(T),f)&&(e+=n.charAt(T),!((T+=1)>=N)););return","===e?[e,"TK_COMMA"]:"="===e?[e,"TK_EQUALS"]:[e,"TK_OPERATOR"]}return[e,"TK_UNKNOWN"]}n=t,N=t.length,a="TK_START_BLOCK",_="",i=[],S=!1,m=!1,x=[],h=[],M(v.BlockStatement),T=0,this.beautify=function(){for(var t,e;t=H(),r=t[0],"TK_EOF"!==(s=t[1]);){if(R.keep_array_indentation&&G(c.mode))for(e=0;e<A;e+=1)I(!0);else if(O=A>0,R.max_preserve_newlines&&A>R.max_preserve_newlines&&(A=R.max_preserve_newlines),R.preserve_newlines&&A>1)for(I(),e=1;e<A;e+=1)I(!0);K[s](),"TK_INLINE_COMMENT"!==s&&"TK_COMMENT"!==s&&"TK_UNKNOWN"!==s&&(_=c.last_text,a=s,c.last_text=r)}return y+i.join("").replace(/[\r\n ]+$/,"")}}self.onmessage=function(e){var n=new t(e.data.js_source_text,e.data.options).beautify();self.postMessage(n)}};t.exports.js_beautify=window.js_beautify=function(t,n,i){"use strict";let r=new Worker(URL.createObjectURL(new Blob(["("+e.toString()+")()"],{type:"text/javascript"})));r.onmessage=function(t){i&&i(t.data)},r.postMessage({js_source_text:t,options:n})}}(),t.exports}({exports:{}}),TRbeautifycssjs=function(t){return function(){t.exports.css_beautify=window.css_beautify=function(t,e,n){"use strict";let i=new Worker(URL.createObjectURL(new Blob(["("+function(){self.onmessage=function(t){var e=function(t,e){var n=(e=e||{}).indent_size||4,i=e.indent_char||" ";"string"==typeof n&&(n=parseInt(n,10));var r,s=/^\s+$/,a=-1;function _(){return r=t.charAt(++a)}function o(){return t.charAt(a+1)}function c(e){for(var n=a;_();)if("\\"===r)_(),_();else{if(r===e)break;if("\n"===r)break}return t.substring(n,a+1)}function l(){for(var t=a;s.test(o());)a++;return a!==t}function h(){var t=a;do{}while(s.test(_()));return a!==t+1}function p(){var e=a;for(_();_();)if("*"===r&&"/"===o()){a++;break}return t.substring(e,a+1)}var u=t.match(/^[\r\n]*[\t ]*/)[0],f=Array(n+1).join(i);function T(){u+=f}function d(){u=u.slice(0,-n)}var E,g={"{":function(t){g.singleSpace(),O.push(t),g.newLine()},"}":function(t){g.newLine(),O.push(t),g.newLine()},newLine:function(t){if(!t)for(;s.test(O[O.length-1]);)O.pop();O.length&&O.push("\n"),u&&O.push(u)},singleSpace:function(){O.length&&!s.test(O[O.length-1])&&O.push(" ")}},O=[];for(u&&O.push(u);;){var A=h();if(!r)break;"{"===r?(T(),g["{"](r)):"}"===r?(d(),g["}"](r)):'"'===r||"'"===r?O.push(c(r)):";"===r?O.push(r,"\n",u):"/"===r&&"*"===o()?(g.newLine(),O.push(p(),"\n",u)):"("===r?(E="url",t.substring(a-E.length,a).toLowerCase()===E?(O.push(r),l(),_()&&(")"!==r&&'"'!==r&&"'"!==r?O.push(c(")")):a--)):(A&&g.singleSpace(),O.push(r),l())):")"===r?O.push(r):","===r?(l(),O.push(r),g.singleSpace()):"]"===r?O.push(r):"["===r||"="===r?(l(),O.push(r)):(A&&g.singleSpace(),O.push(r))}return O.join("").replace(/[\n ]+$/,"")}(t.data.source_text,t.data.options);self.postMessage(e)}}.toString()+")()"],{type:"text/javascript"})));i.onmessage=function(t){n&&n(t.data)},i.postMessage({source_text:t,options:e})}}(),t.exports}({exports:{}}),TRbeautifyhtmljs=function(t){return function(){t.exports.html_beautify=window.html_beautify=function(t,e){return function(t,e,n,i){var r,s,a,_,o,c;for(s=(e=e||{}).indent_size||4,a=e.indent_char||" ",o=e.brace_style||"collapse",_=0===e.max_char?1/0:e.max_char||250,c=e.unformatted||["a","span","bdo","em","strong","dfn","code","samp","kbd","var","cite","abbr","acronym","q","sub","sup","tt","i","b","big","small","u","s","strike","font","ins","del","pre","address","dt","h1","h2","h3","h4","h5","h6"],(r=new function(){return this.pos=0,this.token="",this.current_mode="CONTENT",this.tags={parent:"parent1",parentcount:1,parent1:""},this.tag_type="",this.token_text=this.last_token=this.last_text=this.token_type="",this.Utils={whitespace:"\n\r\t ".split(""),single_token:"br,input,link,meta,!doctype,basefont,base,area,hr,wbr,param,img,isindex,?xml,embed,?php,?,?=".split(","),extra_liners:"head,body,/html".split(","),in_array:function(t,e){for(var n=0;n<e.length;n++)if(t===e[n])return!0;return!1}},this.get_content=function(){for(var t="",e=[],n=!1;"<"!==this.input.charAt(this.pos);){if(this.pos>=this.input.length)return e.length?e.join(""):["","TK_EOF"];if(t=this.input.charAt(this.pos),this.pos++,this.line_char_count++,this.Utils.in_array(t,this.Utils.whitespace))e.length&&(n=!0),this.line_char_count--;else{if(n){if(this.line_char_count>=this.max_char){e.push("\n");for(var i=0;i<this.indent_level;i++)e.push(this.indent_string);this.line_char_count=0}else e.push(" "),this.line_char_count++;n=!1}e.push(t)}}return e.length?e.join(""):""},this.get_contents_to=function(t){if(this.pos===this.input.length)return["","TK_EOF"];var e="",n=new RegExp("</"+t+"\\s*>","igm");n.lastIndex=this.pos;var i=n.exec(this.input),r=i?i.index:this.input.length;return this.pos<r&&(e=this.input.substring(this.pos,r),this.pos=r),e},this.record_tag=function(t){this.tags[t+"count"]?(this.tags[t+"count"]++,this.tags[t+this.tags[t+"count"]]=this.indent_level):(this.tags[t+"count"]=1,this.tags[t+this.tags[t+"count"]]=this.indent_level),this.tags[t+this.tags[t+"count"]+"parent"]=this.tags.parent,this.tags.parent=t+this.tags[t+"count"]},this.retrieve_tag=function(t){if(this.tags[t+"count"]){for(var e=this.tags.parent;e&&t+this.tags[t+"count"]!==e;)e=this.tags[e+"parent"];e&&(this.indent_level=this.tags[t+this.tags[t+"count"]],this.tags.parent=this.tags[e+"parent"]),delete this.tags[t+this.tags[t+"count"]+"parent"],delete this.tags[t+this.tags[t+"count"]],1===this.tags[t+"count"]?delete this.tags[t+"count"]:this.tags[t+"count"]--}},this.get_tag=function(t){var e,n,i="",r=[],s="",a=!1,_=this.pos,o=this.line_char_count;t=void 0!==t&&t;do{if(this.pos>=this.input.length)return t&&(this.pos=_,this.line_char_count=o),r.length?r.join(""):["","TK_EOF"];i=this.input.charAt(this.pos),this.pos++,this.line_char_count++,this.Utils.in_array(i,this.Utils.whitespace)?(a=!0,this.line_char_count--):("'"!==i&&'"'!==i||r[1]&&"!"===r[1]||(i+=this.get_unformatted(i),a=!0),"="===i&&(a=!1),r.length&&"="!==r[r.length-1]&&">"!==i&&a&&(this.line_char_count>=this.max_char?(this.print_newline(!1,r),this.line_char_count=0):(r.push(" "),this.line_char_count++),a=!1),"<"===i&&(e=this.pos-1),r.push(i))}while(">"!==i);var l,h=r.join("");l=-1!==h.indexOf(" ")?h.indexOf(" "):h.indexOf(">");var p=h.substring(1,l).toLowerCase();return"/"===h.charAt(h.length-2)||this.Utils.in_array(p,this.Utils.single_token)?t||(this.tag_type="SINGLE"):"script"===p?t||(this.record_tag(p),this.tag_type="SCRIPT"):"style"===p?t||(this.record_tag(p),this.tag_type="STYLE"):this.is_unformatted(p,c)?(s=this.get_unformatted("</"+p+">",h),r.push(s),e>0&&this.Utils.in_array(this.input.charAt(e-1),this.Utils.whitespace)&&r.splice(0,0,this.input.charAt(e-1)),n=this.pos-1,this.Utils.in_array(this.input.charAt(n+1),this.Utils.whitespace)&&r.push(this.input.charAt(n+1)),this.tag_type="SINGLE"):"!"===p.charAt(0)?-1!==p.indexOf("[if")?(-1!==h.indexOf("!IE")&&(s=this.get_unformatted("--\x3e",h),r.push(s)),t||(this.tag_type="START")):-1!==p.indexOf("[endif")?(this.tag_type="END",this.unindent()):-1!==p.indexOf("[cdata[")?(s=this.get_unformatted("]]>",h),r.push(s),t||(this.tag_type="SINGLE")):(s=this.get_unformatted("--\x3e",h),r.push(s),this.tag_type="SINGLE"):t||("/"===p.charAt(0)?(this.retrieve_tag(p.substring(1)),this.tag_type="END"):(this.record_tag(p),this.tag_type="START"),this.Utils.in_array(p,this.Utils.extra_liners)&&this.print_newline(!0,this.output)),t&&(this.pos=_,this.line_char_count=o),r.join("")},this.get_unformatted=function(t,e){if(e&&-1!==e.toLowerCase().indexOf(t))return"";var n="",i="",r=!0;do{if(this.pos>=this.input.length)return i;if(n=this.input.charAt(this.pos),this.pos++,this.Utils.in_array(n,this.Utils.whitespace)){if(!r){this.line_char_count--;continue}if("\n"===n||"\r"===n){i+="\n",this.line_char_count=0;continue}}i+=n,this.line_char_count++,r=!0}while(-1===i.toLowerCase().indexOf(t));return i},this.get_token=function(){var t;if("TK_TAG_SCRIPT"===this.last_token||"TK_TAG_STYLE"===this.last_token){var e=this.last_token.substr(7);return"string"!=typeof(t=this.get_contents_to(e))?t:[t,"TK_"+e]}return"CONTENT"===this.current_mode?"string"!=typeof(t=this.get_content())?t:[t,"TK_CONTENT"]:"TAG"===this.current_mode?"string"!=typeof(t=this.get_tag())?t:[t,"TK_TAG_"+this.tag_type]:void 0},this.get_full_indent=function(t){return(t=this.indent_level+t||0)<1?"":Array(t+1).join(this.indent_string)},this.is_unformatted=function(t,e){if(!this.Utils.in_array(t,e))return!1;if("a"!==t.toLowerCase()||!this.Utils.in_array("a",e))return!0;var n=(this.get_tag(!0)||"").match(/^\s*<\s*\/?([a-z]*)\s*[^>]*>\s*$/);return!(n&&!this.Utils.in_array(n,e))},this.printer=function(t,e,n,i,r){this.input=t||"",this.output=[],this.indent_character=e,this.indent_string="",this.indent_size=n,this.brace_style=r,this.indent_level=0,this.max_char=i,this.line_char_count=0;for(var s=0;s<this.indent_size;s++)this.indent_string+=this.indent_character;this.print_newline=function(t,e){if(this.line_char_count=0,e&&e.length){if(!t)for(;this.Utils.in_array(e[e.length-1],this.Utils.whitespace);)e.pop();e.push("\n");for(var n=0;n<this.indent_level;n++)e.push(this.indent_string)}},this.print_token=function(t){this.output.push(t)},this.indent=function(){this.indent_level++},this.unindent=function(){this.indent_level>0&&this.indent_level--}},this}).printer(t,a,s,_,o);;){var l=r.get_token();if(r.token_text=l[0],r.token_type=l[1],"TK_EOF"===r.token_type)break;switch(r.token_type){case"TK_TAG_START":r.print_newline(!1,r.output),r.print_token(r.token_text),r.indent(),r.current_mode="CONTENT";break;case"TK_TAG_STYLE":case"TK_TAG_SCRIPT":r.print_newline(!1,r.output),r.print_token(r.token_text),r.current_mode="CONTENT";break;case"TK_TAG_END":if("TK_CONTENT"===r.last_token&&""===r.last_text){var h=r.token_text.match(/\w+/)[0],p=r.output[r.output.length-1].match(/<\s*(\w+)/);null!==p&&p[1]===h||r.print_newline(!0,r.output)}r.print_token(r.token_text),r.current_mode="CONTENT";break;case"TK_TAG_SINGLE":var u=r.token_text.match(/^\s*<([a-z]+)/i);u&&r.Utils.in_array(u[1],c)||r.print_newline(!1,r.output),r.print_token(r.token_text),r.current_mode="CONTENT";break;case"TK_CONTENT":""!==r.token_text&&r.print_token(r.token_text),r.current_mode="TAG";break;case"TK_STYLE":case"TK_SCRIPT":if(""!==r.token_text){r.output.push("\n");var f,T=r.token_text,d=1;"TK_SCRIPT"===r.token_type?f="function"==typeof n&&n:"TK_STYLE"===r.token_type&&(f="function"==typeof i&&i),"keep"===e.indent_scripts?d=0:"separate"===e.indent_scripts&&(d=-r.indent_level);var E=r.get_full_indent(d);if(f)T=f(T.replace(/^\s*/,E),e);else{var g=T.match(/^\s*/)[0].match(/[^\n\r]*$/)[0].split(r.indent_string).length-1,O=r.get_full_indent(d-g);T=T.replace(/^\s*/,E).replace(/\r\n|\r|\n/g,"\n"+O).replace(/\s*$/,"")}T&&(r.print_token(T),r.print_newline(!0,r.output))}r.current_mode="TAG"}r.last_token=r.token_type,r.last_text=r.token_text}return r.output.join("")}(t,e,window.js_beautify,window.css_beautify)}}(),t.exports}({exports:{}}),TRvkbeautifyjs=(function(){function t(t){var e="    ";if(isNaN(parseInt(t)))e=t;else switch(t){case 1:e=" ";break;case 2:e="  ";break;case 3:e="   ";break;case 4:e="    ";break;case 5:e="     ";break;case 6:e="      ";break;case 7:e="       ";break;case 8:e="        ";break;case 9:e="         ";break;case 10:e="          ";break;case 11:e="           ";break;case 12:e="            "}var n=["\n"];for(ix=0;ix<100;ix++)n.push(n[ix]+e);return n}function e(){this.step="\t",this.shift=t(this.step)}function n(t,e){return e-(t.replace(/\(/g,"").length-t.replace(/\)/g,"").length)}function i(t,e){return t.replace(/\s{1,}/g," ").replace(/ AND /gi,"~::~"+e+e+"AND ").replace(/ BETWEEN /gi,"~::~"+e+"BETWEEN ").replace(/ CASE /gi,"~::~"+e+"CASE ").replace(/ ELSE /gi,"~::~"+e+"ELSE ").replace(/ END /gi,"~::~"+e+"END ").replace(/ FROM /gi,"~::~FROM ").replace(/ GROUP\s{1,}BY/gi,"~::~GROUP BY ").replace(/ HAVING /gi,"~::~HAVING ").replace(/ IN /gi," IN ").replace(/ JOIN /gi,"~::~JOIN ").replace(/ CROSS~::~{1,}JOIN /gi,"~::~CROSS JOIN ").replace(/ INNER~::~{1,}JOIN /gi,"~::~INNER JOIN ").replace(/ LEFT~::~{1,}JOIN /gi,"~::~LEFT JOIN ").replace(/ RIGHT~::~{1,}JOIN /gi,"~::~RIGHT JOIN ").replace(/ ON /gi,"~::~"+e+"ON ").replace(/ OR /gi,"~::~"+e+e+"OR ").replace(/ ORDER\s{1,}BY/gi,"~::~ORDER BY ").replace(/ OVER /gi,"~::~"+e+"OVER ").replace(/\(\s{0,}SELECT /gi,"~::~(SELECT ").replace(/\)\s{0,}SELECT /gi,")~::~SELECT ").replace(/ THEN /gi," THEN~::~"+e).replace(/ UNION /gi,"~::~UNION~::~").replace(/ USING /gi,"~::~USING ").replace(/ WHEN /gi,"~::~"+e+"WHEN ").replace(/ WHERE /gi,"~::~WHERE ").replace(/ WITH /gi,"~::~WITH ").replace(/ ALL /gi," ALL ").replace(/ AS /gi," AS ").replace(/ ASC /gi," ASC ").replace(/ DESC /gi," DESC ").replace(/ DISTINCT /gi," DISTINCT ").replace(/ EXISTS /gi," EXISTS ").replace(/ NOT /gi," NOT ").replace(/ NULL /gi," NULL ").replace(/ LIKE /gi," LIKE ").replace(/\s{0,}SELECT /gi,"SELECT ").replace(/\s{0,}UPDATE /gi,"UPDATE ").replace(/ SET /gi," SET ").replace(/~::~{1,}/g,"~::~").split("~::~")}e.prototype.xml=function(e,n){var i=e.replace(/>\s{0,}</g,"><").replace(/</g,"~::~<").replace(/\s*xmlns\:/g,"~::~xmlns:").replace(/\s*xmlns\=/g,"~::~xmlns=").split("~::~"),r=i.length,s=!1,a=0,_="",o=0,c=n?t(n):this.shift;for(o=0;o<r;o++)i[o].search(/<!/)>-1?(_+=c[a]+i[o],s=!0,(i[o].search(/-->/)>-1||i[o].search(/\]>/)>-1||i[o].search(/!DOCTYPE/)>-1)&&(s=!1)):i[o].search(/-->/)>-1||i[o].search(/\]>/)>-1?(_+=i[o],s=!1):/^<\w/.exec(i[o-1])&&/^<\/\w/.exec(i[o])&&/^<[\w:\-\.\,]+/.exec(i[o-1])==/^<\/[\w:\-\.\,]+/.exec(i[o])[0].replace("/","")?(_+=i[o],s||a--):i[o].search(/<\w/)>-1&&-1==i[o].search(/<\//)&&-1==i[o].search(/\/>/)?_=_+=s?i[o]:c[a++]+i[o]:i[o].search(/<\w/)>-1&&i[o].search(/<\//)>-1?_=_+=s?i[o]:c[a]+i[o]:i[o].search(/<\//)>-1?_=_+=s?i[o]:c[--a]+i[o]:i[o].search(/\/>/)>-1?_=_+=s?i[o]:c[a]+i[o]:i[o].search(/<\?/)>-1?_+=c[a]+i[o]:i[o].search(/xmlns\:/)>-1||i[o].search(/xmlns\=/)>-1?_+=c[a]+i[o]:_+=i[o];return"\n"==_[0]?_.slice(1):_},e.prototype.json=function(t,e){return e=e||this.step,"undefined"==typeof JSON?t:"string"==typeof t?JSON.stringify(JSON.parse(t),null,e):"object"==typeof t?JSON.stringify(t,null,e):t},e.prototype.css=function(e,n){var i=e.replace(/\s{1,}/g," ").replace(/\{/g,"{~::~").replace(/\}/g,"~::~}~::~").replace(/\;/g,";~::~").replace(/\/\*/g,"~::~/*").replace(/\*\//g,"*/~::~").replace(/~::~\s{0,}~::~/g,"~::~").split("~::~"),r=i.length,s=0,a="",_=0,o=n?t(n):this.shift;for(_=0;_<r;_++)/\{/.exec(i[_])?a+=o[s++]+i[_]:/\}/.exec(i[_])?a+=o[--s]+i[_]:(/\*\\/.exec(i[_]),a+=o[s]+i[_]);return a.replace(/^\n{1,}/,"")},e.prototype.sql=function(e,r){var s=e.replace(/\s{1,}/g," ").replace(/\'/gi,"~::~'").split("~::~"),a=s.length,_=[],o=0,c=this.step,l=0,h="",p=0,u=r?t(r):this.shift;for(p=0;p<a;p++)_=p%2?_.concat(s[p]):_.concat(i(s[p],c));for(a=_.length,p=0;p<a;p++)l=n(_[p],l),/\s{0,}\s{0,}SELECT\s{0,}/.exec(_[p])&&(_[p]=_[p].replace(/\,/g,",\n"+c+c)),/\s{0,}\s{0,}SET\s{0,}/.exec(_[p])&&(_[p]=_[p].replace(/\,/g,",\n"+c+c)),/\s{0,}\(\s{0,}SELECT\s{0,}/.exec(_[p])?h+=u[++o]+_[p]:/\'/.exec(_[p])?(l<1&&o&&o--,h+=_[p]):(h+=u[o]+_[p],l<1&&o&&o--);return h=h.replace(/^\n{1,}/,"").replace(/\n{1,}/g,"\n")},e.prototype.xmlmin=function(t,e){return(e?t:t.replace(/\<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)\>/g,"").replace(/[ \r\n\t]{1,}xmlns/g," xmlns")).replace(/>\s{0,}</g,"><")},e.prototype.jsonmin=function(t){return"undefined"==typeof JSON?t:JSON.stringify(JSON.parse(t),null,0)},e.prototype.cssmin=function(t,e){return(e?t:t.replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g,"")).replace(/\s{1,}/g," ").replace(/\{\s{1,}/g,"{").replace(/\}\s{1,}/g,"}").replace(/\;\s{1,}/g,";").replace(/\/\*\s{1,}/g,"/*").replace(/\*\/\s{1,}/g,"*/")},e.prototype.sqlmin=function(t){return t.replace(/\s{1,}/g," ").replace(/\s{1,}\(/,"(").replace(/\s{1,}\)/,")")},window.vkbeautify=new e}(),{});new Vue({el:"#pageContainer",data:{selectedType:"Javascript",sourceContent:"",resultContent:""},mounted:function(){chrome.runtime.onMessage.addListener((t,e,n)=>{let i=TRstaticjsmsg_type;t.type===i.TAB_CREATED_OR_UPDATED&&t.event===i.CODE_BEAUTIFY&&t.content&&(this.sourceContent=t.content,this.format())}),this.$refs.codeSource.focus()},methods:{format:function(){if(!this.sourceContent.trim())return alert("内容为空，不需要美化处理！");let t=t=>{t=t.replace(/>/g,"&gt;").replace(/</g,"&lt;"),t='<pre class="language-'+this.selectedType.toLowerCase()+' line-numbers"><code>'+t+"</code></pre>",this.resultContent=t,this.$nextTick(()=>{Prism.highlightAll()})};switch(this.selectedType){case"Javascript":let e={brace_style:"collapse",break_chained_methods:!1,indent_char:" ",indent_scripts:"keep",indent_size:"4",keep_array_indentation:!0,preserve_newlines:!0,space_after_anon_function:!0,space_before_conditional:!0,unescape_strings:!1,wrap_line_length:"120"};TRbeautifyjs.js_beautify(this.sourceContent,e,e=>t(e));break;case"CSS":TRbeautifycssjs.css_beautify(this.sourceContent,{},e=>t(e));break;case"HTML":t(html_beautify(this.sourceContent));break;case"SQL":t(vkbeautify.sql(this.sourceContent,4));break;default:t(vkbeautify.xml(this.sourceContent))}}}});