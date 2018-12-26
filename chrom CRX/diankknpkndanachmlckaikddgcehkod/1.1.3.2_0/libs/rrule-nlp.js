!function(a){var b,c,d="undefined"!=typeof module&&module.exports;if(d)b=require("underscore"),c=require("./rrule").RRule;else if(a.RRule||a._)c=a.RRule,b=a._;else{if("undefined"==typeof require)throw"rrule.js and underscore.js are required for rrule/nlp.js to work";c||(c=require("rrule")),b||"undefined"==typeof require||(b=require("underscore"))}var e=function(a,c,d){if(this.gettext=c||function(a){return a},this.language=d||j,this.text="",this.rrule=a,this.freq=a.options.freq,this.options=a.options,this.origOptions=a.origOptions,this.origOptions.bymonthday){var e=[].concat(this.options.bymonthday),f=[].concat(this.options.bynmonthday);e.sort(),f.sort(),f.reverse(),this.bymonthday=e.concat(f),this.bymonthday.length||(this.bymonthday=null)}if(this.origOptions.byweekday){var g=this.origOptions.byweekday instanceof Array?this.origOptions.byweekday:[this.origOptions.byweekday],h=String(g);this.byweekday={allWeeks:b.filter(g,function(a){return!Boolean(a.n)}),someWeeks:b.filter(g,function(a){return Boolean(a.n)}),isWeekdays:-1!=h.indexOf("MO")&&-1!=h.indexOf("TU")&&-1!=h.indexOf("WE")&&-1!=h.indexOf("TH")&&-1!=h.indexOf("FR")&&-1==h.indexOf("SA")&&-1==h.indexOf("SU")};var i=function(a,b){return a.weekday-b.weekday};this.byweekday.allWeeks.sort(i),this.byweekday.someWeeks.sort(i),this.byweekday.allWeeks.length||(this.byweekday.allWeeks=null),this.byweekday.someWeeks.length||(this.byweekday.someWeeks=null)}else this.byweekday=null};e.IMPLEMENTED=[];var f=["count","until","interval","byweekday","bymonthday","bymonth"];e.IMPLEMENTED[c.DAILY]=["tt_skip","tt_skip"].concat(f),e.IMPLEMENTED[c.WEEKLY]=f,e.IMPLEMENTED[c.MONTHLY]=["tt_workday"].concat(f),e.IMPLEMENTED[c.YEARLY]=["byweekno","byyearday"].concat(f),e.isFullyConvertible=function(a){var c=!0;return a.options.freq in e.IMPLEMENTED?a.origOptions.until&&a.origOptions.count?!1:(b.each(a.origOptions,function(d,f){return b.contains(["dtstart","wkst","freq","tt_skip","tt_workday"],f)?!0:b.include(e.IMPLEMENTED[a.options.freq],f)?void 0:(c=!1,!1)}),c):!1},e.prototype={isFullyConvertible:function(){return e.isFullyConvertible(this.rrule)},toString:function(){var a=this.gettext;if(!(this.options.freq in e.IMPLEMENTED))return a("RRule error: Unable to fully convert this rrule to text");if(this.text=[a("every")],this[c.FREQUENCIES[this.options.freq]](),this.options.until){this.add(a("until"));var b=this.options.until;this.add(this.language.monthNames[b.getMonth()]).add(b.getDate()+",").add(b.getFullYear())}else this.options.count&&this.add(a("for")).add(this.options.count).add(a(this.plural(this.options.count)?"times":"time"));return this.isFullyConvertible()||this.add(a("(~ approximate)")),this.text.join("")},DAILY:function(){var a=this.gettext;1!=this.options.interval&&this.add(this.options.interval),this.byweekday&&this.byweekday.isWeekdays?this.add(a(this.plural(this.options.interval)?"weekdays":"weekday")):this.add(a(this.plural(this.options.interval)?"days":"day")),this.origOptions.bymonth&&(this.add(a("in")),this._bymonth()),this.bymonthday?this._bymonthday():this.byweekday&&this._byweekday()},WEEKLY:function(){var a=this.gettext;1!=this.options.interval&&this.add(this.options.interval).add(a(this.plural(this.options.interval)?"weeks":"week")),this.byweekday&&this.byweekday.isWeekdays?1==this.options.interval?this.add(a(this.plural(this.options.interval)?"weekdays":"weekday")):this.add(a("ON")).add(a("weekdays")):(1==this.options.interval&&this.add(a("week")),this.origOptions.bymonth&&(this.add(a("in")),this._bymonth()),this.bymonthday?this._bymonthday():this.byweekday&&this._byweekday())},MONTHLY:function(){var a=this.gettext;this.origOptions.bymonth?(1!=this.options.interval&&(this.add(this.options.interval).add(a("months")),this.plural(this.options.interval)&&this.add(a("in"))),this._bymonth()):(1!=this.options.interval&&this.add(this.options.interval),this.add(a(this.plural(this.options.interval)?"months":"month"))),this.bymonthday?this._bymonthday():this.byweekday&&this._byweekday()},YEARLY:function(){var a=this.gettext;this.origOptions.bymonth?(1!=this.options.interval&&(this.add(this.options.interval),this.add(a("years"))),this._bymonth()):(1!=this.options.interval&&this.add(this.options.interval),this.add(a(this.plural(this.options.interval)?"years":"year"))),this.bymonthday?this._bymonthday():this.byweekday&&this._byweekday(),this.options.byyearday&&this.add(a("on the")).add(this.list(this.options.byyearday,this.nth,a("and"))).add(a("day")),this.options.byweekno&&this.add(a("in")).add(a(this.plural(this.options.byweekno.length)?"weeks":"week")).add(this.list(this.options.byweekno,null,a("and")))},_bymonthday:function(){var a=this.gettext;this.byweekday&&this.byweekday.allWeeks?this.add(a("on")).add(this.list(this.byweekday.allWeeks,this.weekdaytext,a("or"))).add(a("the")).add(this.list(this.bymonthday,this.nth,a("or"))):this.add(a("on the")).add(this.list(this.bymonthday,this.nth,a("and")))},_byweekday:function(){var a=this.gettext;this.byweekday.allWeeks&&!this.byweekday.isWeekdays&&this.add(a("on")).add(this.list(this.byweekday.allWeeks,this.weekdaytext)),this.byweekday.someWeeks&&(this.byweekday.allWeeks&&this.add(a("and")),this.add(a("on the")).add(this.list(this.byweekday.someWeeks,this.weekdaytext,a("and"))))},_bymonth:function(){this.add(this.list(this.options.bymonth,this.monthtext,this.gettext("and")))},nth:function(a){var b,c,d=this.gettext;if(-1==a)return d("last")+(this.options.tt_workday?" "+d("workday"):"");switch(c=Math.abs(a)){case 1:case 21:case 31:b=c+d("st");break;case 2:case 22:b=c+d("nd");break;case 3:case 23:b=c+d("rd");break;default:b=c+d("th")}return 0>a?b+" "+d("last")+(this.options.tt_workday?" "+d("workday"):""):b+(this.options.tt_workday?" "+d("workday"):"")},monthtext:function(a){return this.language.monthNames[a-1]},weekdaytext:function(a){return(a.n?this.nth(a.n)+" ":"")+this.language.dayNames[a.getJsWeekday()]},plural:function(a){return a%100!=1},add:function(a){return this.text.push(" "),this.text.push(a),this},list:function(a,c,d,e){var f=function(a,b,c){for(var d="",e=0;e<a.length;e++)0!=e&&(d+=e==a.length-1?" "+c+" ":b+" "),d+=a[e];return d};e=e||",",c=c||function(a){return a};var g=this,h=function(a){return c.call(g,a)};return d?f(b.map(a,h),e,d):b.map(a,h).join(e+" ")}};var g=function(a,b){return new c(h(a,b))},h=function(a,b){function d(){m.expect("every");var a;if((a=m.accept("number"))&&(n.interval=parseInt(a[0])),m.isDone())throw"Unexpected end";switch(m.symbol){case"day(s)":n.freq=c.DAILY,m.nextSymbol()&&(e(),l());break;case"weekday(s)":n.freq=c.WEEKLY,n.byweekday=[c.MO,c.TU,c.WE,c.TH,c.FR],m.nextSymbol(),l();break;case"week(s)":n.freq=c.WEEKLY,m.nextSymbol()&&(e(),l());break;case"month(s)":n.freq=c.MONTHLY,m.nextSymbol()&&(e(),l());break;case"year(s)":n.freq=c.YEARLY,m.nextSymbol()&&(e(),l());break;case"monday":case"tuesday":case"wednesday":case"thursday":case"friday":case"saturday":case"sunday":if(n.freq=c.WEEKLY,n.byweekday=[c[m.symbol.substr(0,2).toUpperCase()]],!m.nextSymbol())return;for(;m.accept("comma");){if(m.isDone())throw"Unexpected end";var b;if(!(b=g()))throw"Unexpected symbol "+m.symbol+", expected weekday";n.byweekday.push(c[b]),m.nextSymbol()}k(),l();break;case"january":case"february":case"march":case"april":case"may":case"june":case"july":case"august":case"september":case"october":case"november":case"december":if(n.freq=c.YEARLY,n.bymonth=[f()],!m.nextSymbol())return;for(;m.accept("comma");){if(m.isDone())throw"Unexpected end";var d;if(!(d=f()))throw"Unexpected symbol "+m.symbol+", expected month";n.bymonth.push(d),m.nextSymbol()}e(),l();break;default:throw"Unknown symbol"}}function e(){var a=m.accept("on"),b=m.accept("the");if(a||b)do{var d,e,i;if(d=h())(e=g())?(m.nextSymbol(),n.byweekday||(n.byweekday=[]),n.byweekday.push(c[e].nth(d))):(n.bymonthday||(n.bymonthday=[]),n.bymonthday.push(d),m.accept("day(s)"));else if(e=g())m.nextSymbol(),n.byweekday||(n.byweekday=[]),n.byweekday.push(c[e]);else if("weekday(s)"==m.symbol)m.nextSymbol(),n.byweekday||(n.byweekday=[]),n.byweekday.push(c.MO),n.byweekday.push(c.TU),n.byweekday.push(c.WE),n.byweekday.push(c.TH),n.byweekday.push(c.FR);else if("week(s)"==m.symbol){m.nextSymbol();var j;if(!(j=m.accept("number")))throw"Unexpected symbol "+m.symbol+", expected week number";for(n.byweekno=[j[0]];m.accept("comma");){if(!(j=m.accept("number")))throw"Unexpected symbol "+m.symbol+"; expected monthday";n.byweekno.push(j[0])}}else{if(!(i=f()))return;m.nextSymbol(),n.bymonth||(n.bymonth=[]),n.bymonth.push(i)}}while(m.accept("comma")||m.accept("the")||m.accept("on"))}function f(){switch(m.symbol){case"january":return 1;case"february":return 2;case"march":return 3;case"april":return 4;case"may":return 5;case"june":return 6;case"july":return 7;case"august":return 8;case"september":return 9;case"october":return 10;case"november":return 11;case"december":return 12;default:return!1}}function g(){switch(m.symbol){case"monday":case"tuesday":case"wednesday":case"thursday":case"friday":case"saturday":case"sunday":return m.symbol.substr(0,2).toUpperCase();default:return!1}}function h(){switch(m.symbol){case"last":return m.nextSymbol(),-1;case"first":return m.nextSymbol(),1;case"second":return m.nextSymbol(),m.accept("last")?-2:2;case"third":return m.nextSymbol(),m.accept("last")?-3:3;case"nth":var a=parseInt(m.value[1]);if(-366>a||a>366)throw"Nth out of range: "+a;return m.nextSymbol(),m.accept("last")?-a:a;default:return!1}}function k(){m.accept("on"),m.accept("the");var a;if(a=h())for(n.bymonthday=[a],m.nextSymbol();m.accept("comma");){if(!(a=h()))throw"Unexpected symbol "+m.symbol+"; expected monthday";n.bymonthday.push(a),m.nextSymbol()}}function l(){if("until"==m.symbol){var a=Date.parse(m.text);if(!a)throw"Cannot parse until date:"+m.text;n.until=new Date(a)}else m.accept("for")&&(n.count=m.value[0],m.expect("number"))}var m=new i((b||j).tokens);if(!m.start(a))return null;var n={};return d(),n},i=function(a){this.rules=a};i.prototype.start=function(a){return this.text=a,this.done=!1,this.nextSymbol()},i.prototype.isDone=function(){return this.done&&null==this.symbol},i.prototype.nextSymbol=function(){var a,c,d=this;this.symbol=null,this.value=null;do{if(this.done)return!1;if(a=null,b.each(this.rules,function(b,e){var f;(f=b.exec(d.text))&&(null==a||f[0].length>a[0].length)&&(a=f,c=e)}),null!=a&&(this.text=this.text.substr(a[0].length),""==this.text&&(this.done=!0)),null==a)return this.done=!0,this.symbol=null,void(this.value=null)}while("SKIP"==c);return this.symbol=c,this.value=a,!0},i.prototype.accept=function(a){if(this.symbol==a){if(this.value){var b=this.value;return this.nextSymbol(),b}return this.nextSymbol(),!0}return!1},i.prototype.expect=function(a){if(this.accept(a))return!0;throw"expected "+a+" but found "+this.symbol};var j={dayNames:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],tokens:{SKIP:/^[ \r\n\t]+|^\.$/,number:/^[1-9][0-9]*/,numberAsText:/^(one|two|three)/i,every:/^every/i,"day(s)":/^days?/i,"weekday(s)":/^weekdays?/i,"week(s)":/^weeks?/i,"month(s)":/^months?/i,"year(s)":/^years?/i,on:/^(on|in)/i,the:/^the/i,first:/^first/i,second:/^second/i,third:/^third/i,nth:/^([1-9][0-9]*)(\.|th|nd|rd|st)/i,last:/^last/i,"for":/^for/i,"time(s)":/^times?/i,until:/^(un)?til/i,monday:/^mo(n(day)?)?/i,tuesday:/^tu(e(s(day)?)?)?/i,wednesday:/^we(d(n(esday)?)?)?/i,thursday:/^th(u(r(sday)?)?)?/i,friday:/^fr(i(day)?)?/i,saturday:/^sa(t(urday)?)?/i,sunday:/^su(n(day)?)?/i,january:/^jan(uary)?/i,february:/^feb(ruary)?/i,march:/^mar(ch)?/i,april:/^apr(il)?/i,may:/^may/i,june:/^june?/i,july:/^july?/i,august:/^aug(ust)?/i,september:/^sep(t(ember)?)?/i,october:/^oct(ober)?/i,november:/^nov(ember)?/i,december:/^dec(ember)?/i,comma:/^(,\s*|(and|or)\s*)+/i}},k={fromText:g,parseText:h,isFullyConvertible:e.isFullyConvertible,toText:function(a,b,c){return new e(a,b,c).toString()}};d?module.exports=k:a._RRuleNLP=k,"function"==typeof define&&define.amd&&define("rrule",[],function(){return c})}(this);