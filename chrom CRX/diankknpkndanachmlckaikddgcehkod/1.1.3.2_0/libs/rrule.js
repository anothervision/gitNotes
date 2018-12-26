!function(a){var b,c="undefined"!=typeof module&&module.exports;c?b=require("underscore"):a._?b=a._:b||"undefined"==typeof require||(b=require("underscore"));var d=function(){if(!d._nlp)if(c)d._nlp=require("./nlp");else if(!(d._nlp=a._RRuleNLP))throw"You need to include rrule/nlp.js for fromText/toText to work.";return d._nlp},e={MONTH_DAYS:[31,28,31,30,31,30,31,31,30,31,30,31],ONE_DAY:864e5,MAXYEAR:9999,ORDINAL_BASE:new Date(1970,0,1),PY_WEEKDAYS:[6,0,1,2,3,4,5],getYearDay:function(a){var b=new Date(a.getFullYear(),a.getMonth(),a.getDate());return Math.ceil((b-new Date(a.getFullYear(),0,1))/e.ONE_DAY)+1},isLeapYear:function(a){return a instanceof Date&&(a=a.getFullYear()),a%4===0&&a%100!==0||a%400===0},tzOffset:function(a){return 60*a.getTimezoneOffset()*1e3},daysBetween:function(a,b){var c=a.getTime()-e.tzOffset(a),d=b.getTime()-e.tzOffset(b),f=Math.abs(c-d);return Math.round(f/e.ONE_DAY)},toOrdinal:function(a){return e.daysBetween(a,e.ORDINAL_BASE)},fromOrdinal:function(a){var b=a*e.ONE_DAY;return new Date(e.ORDINAL_BASE.getTime()-e.tzOffset(e.ORDINAL_BASE)+b+e.tzOffset(new Date(b)))},monthRange:function(a,b){var c=new Date(a,b,1);return[e.getWeekday(c),e.getMonthDays(c)]},getMonthDays:function(a){var b=a.getMonth();return 1==b&&e.isLeapYear(a)?29:e.MONTH_DAYS[b]},getWeekday:function(a){return e.PY_WEEKDAYS[a.getDay()]},combine:function(a,b){return b=b||a,new Date(a.getFullYear(),a.getMonth(),a.getDate(),b.getHours(),b.getMinutes(),b.getSeconds())},clone:function(a){var b=new Date(a.getTime());return b.setMilliseconds(0),b},cloneDates:function(a){for(var b=[],c=0;c<a.length;c++)b.push(e.clone(a[c]));return b},sort:function(a){a.sort(function(a,b){return a.getTime()-b.getTime()})},timeToUntilString:function(a){for(var b,c=new Date(a),d=[c.getUTCFullYear(),c.getUTCMonth()+1,c.getUTCDate(),"T",c.getUTCHours(),c.getUTCMinutes(),c.getUTCSeconds(),"Z"],e=0;e<d.length;e++)b=d[e],!/[TZ]/.test(b)&&10>b&&(d[e]="0"+String(b));return d.join("")},untilStringToDate:function(a){var b=/^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z)?$/,c=b.exec(a);if(!c)throw new Error("Invalid UNTIL value: "+a);return c[4]?new Date(Date.UTC(c[1],c[2]-1,c[3],c[5]||0,c[6]||0,c[7]||0)):new Date(c[1],c[2]-1,c[3])}};e.Time=function(a,b,c){this.hour=a,this.minute=b,this.second=c},e.Time.prototype={getHours:function(){return this.hour},getMinutes:function(){return this.minute},getSeconds:function(){return this.second},getTime:function(){return 1e3*(60*this.hour*60+60*this.minute+this.second)}};var f=function(a,b){1===arguments.length&&(b=a,a=0);for(var c=[],d=a;b>d;d++)c.push(d);return c},g=function(a,b){var c=0,d=[];if(a instanceof Array)for(;b>c;c++)d[c]=[].concat(a);else for(;b>c;c++)d[c]=a;return d},h=function(a,b){var c=a%b;return 0>c*b?c+b:c},i=function(a,b){return{div:Math.floor(a/b),mod:h(a,b)}},j=function(a){return a instanceof Array&&0==a.length?!1:Boolean(a)},k=[].concat(g(1,31),g(2,28),g(3,31),g(4,30),g(5,31),g(6,30),g(7,31),g(8,31),g(9,30),g(10,31),g(11,30),g(12,31),g(1,7)),l=[].concat(g(1,31),g(2,29),g(3,31),g(4,30),g(5,31),g(6,30),g(7,31),g(8,31),g(9,30),g(10,31),g(11,30),g(12,31),g(1,7)),m=f(1,29),n=f(1,30),o=f(1,31),p=f(1,32),q=[].concat(p,n,p,o,p,o,p,p,o,p,o,p,p.slice(0,7)),r=[].concat(p,m,p,o,p,o,p,p,o,p,o,p,p.slice(0,7));m=f(-28,0),n=f(-29,0),o=f(-30,0),p=f(-31,0);var s=[].concat(p,n,p,o,p,o,p,p,o,p,o,p,p.slice(0,7)),t=[].concat(p,m,p,o,p,o,p,p,o,p,o,p,p.slice(0,7)),u=[0,31,60,91,121,152,182,213,244,274,305,335,366],v=[0,31,59,90,120,151,181,212,243,273,304,334,365],w=function(){for(var a=[],b=0;55>b;b++)a=a.concat(f(7));return a}(),x=function(a,b){if(0===b)throw"Can't create weekday with n == 0";this.weekday=a,this.n=b};x.prototype={nth:function(a){return this.n==a?this:new x(this.weekday,a)},equals:function(a){return this.weekday==a.weekday&&this.n==a.n},toString:function(){var a=["MO","TU","WE","TH","FR","SA","SU"][this.weekday];return this.n&&(a=(this.n>0?"+":"")+String(this.n)+a),a},getJsWeekday:function(){return 6==this.weekday?0:this.weekday+1}};var y=function(a,c){this._string=null;var d=b.clone(y.DEFAULT_OPTIONS);a=a||{},this._cache=c?null:{all:!1,before:[],after:[],between:[]};var f=b(a).chain().keys().reject(function(a){return b.has(d,a)}).value();if(f.length)throw"Invalid options: "+f.join(", ");if(!y.FREQUENCIES[a.freq])throw"Invalid frequency: "+String(a.freq);this.origOptions=b.clone(a);var g;if(this.options=g=b.extend({},d,a),null!==g.byeaster)throw new Error("byeaster not implemented");if(g.dtstart||(g.dtstart=new Date,g.dtstart.setMilliseconds(0)),null===g.wkst?g.wkst=y.MO.weekday:"number"==typeof g.wkst||(g.wkst=g.wkst.weekday),null!==g.bysetpos){"number"==typeof g.bysetpos&&(g.bysetpos=[g.bysetpos]);for(var h=0;h<g.bysetpos.length;h++){var i=g.bysetpos[h];if(0==i||!(i>=-366&&366>=i))throw"bysetpos must be between 1 and 366, or between -366 and -1"}}if(!(j(g.byweekno)||j(g.byyearday)||j(g.bymonthday)||null!==g.byweekday||null!==g.byeaster))switch(g.freq){case y.YEARLY:g.bymonth||(g.bymonth=g.dtstart.getMonth()+1),g.bymonthday=g.dtstart.getDate();break;case y.MONTHLY:g.bymonthday=g.dtstart.getDate();break;case y.WEEKLY:g.byweekday=e.getWeekday(g.dtstart)}if(null===g.bymonth||g.bymonth instanceof Array||(g.bymonth=[g.bymonth]),null===g.byyearday||g.byyearday instanceof Array||(g.byyearday=[g.byyearday]),null===g.bymonthday)g.bymonthday=[],g.bynmonthday=[];else if(g.bymonthday instanceof Array){var k=[],l=[];for(h=0;h<g.bymonthday.length;h++){var i=g.bymonthday[h];i>0?k.push(i):0>i&&l.push(i)}g.bymonthday=k,g.bynmonthday=l}else g.bymonthday<0?(g.bynmonthday=[g.bymonthday],g.bymonthday=[]):(g.bynmonthday=[],g.bymonthday=[g.bymonthday]);if(null===g.byweekno||g.byweekno instanceof Array||(g.byweekno=[g.byweekno]),null===g.byweekday)g.bynweekday=null;else if("number"==typeof g.byweekday)g.byweekday=[g.byweekday],g.bynweekday=null;else if(g.byweekday instanceof x)!g.byweekday.n||g.freq>y.MONTHLY?(g.byweekday=[g.byweekday.weekday],g.bynweekday=null):(g.bynweekday=[[g.byweekday.weekday,g.byweekday.n]],g.byweekday=null);else{var m=[],n=[];for(h=0;h<g.byweekday.length;h++){var o=g.byweekday[h];"number"==typeof o?m.push(o):!o.n||g.freq>y.MONTHLY?m.push(o.weekday):n.push([o.weekday,o.n])}g.byweekday=j(m)?m:null,g.bynweekday=j(n)?n:null}if(null===g.byhour?g.byhour=g.freq<y.HOURLY?[g.dtstart.getHours()]:null:"number"==typeof g.byhour&&(g.byhour=[g.byhour]),null===g.byminute?g.byminute=g.freq<y.MINUTELY?[g.dtstart.getMinutes()]:null:"number"==typeof g.byminute&&(g.byminute=[g.byminute]),null===g.bysecond?g.bysecond=g.freq<y.SECONDLY?[g.dtstart.getSeconds()]:null:"number"==typeof g.bysecond&&(g.bysecond=[g.bysecond]),g.freq>=y.HOURLY)this.timeset=null;else{for(this.timeset=[],h=0;h<g.byhour.length;h++)for(var p=g.byhour[h],q=0;q<g.byminute.length;q++)for(var r=g.byminute[q],s=0;s<g.bysecond.length;s++){var t=g.bysecond[s];this.timeset.push(new e.Time(p,r,t))}e.sort(this.timeset)}};y.FREQUENCIES=["YEARLY","MONTHLY","WEEKLY","DAILY","HOURLY","MINUTELY","SECONDLY"],y.YEARLY=0,y.MONTHLY=1,y.WEEKLY=2,y.DAILY=3,y.HOURLY=4,y.MINUTELY=5,y.SECONDLY=6,y.MO=new x(0),y.TU=new x(1),y.WE=new x(2),y.TH=new x(3),y.FR=new x(4),y.SA=new x(5),y.SU=new x(6),y.DEFAULT_OPTIONS={freq:null,dtstart:null,interval:1,wkst:y.MO,count:null,until:null,bysetpos:null,bymonth:null,bymonthday:null,byyearday:null,byweekno:null,byweekday:null,byhour:null,byminute:null,bysecond:null,tt_skip:null,tt_workday:null,byeaster:null},y.parseText=function(a,b){return d().parseText(a,b)},y.fromText=function(a,b){return d().fromText(a,b)},y.optionsToString=function(a){var c,d,f,g,h=[];d=b.intersection(b.keys(y.DEFAULT_OPTIONS),b.keys(a));for(var i=0;i<d.length;i++)if(c=d[i].toUpperCase(),f=a[d[i]],g=[],!(null===f||f instanceof Array&&!f.length)){switch(c){case"FREQ":f=y.FREQUENCIES[a.freq];break;case"WKST":f=f.toString();break;case"BYWEEKDAY":c="BYDAY",f instanceof Array||(f=[f]);for(var j,k=0;k<f.length;k++)j=f[k],j instanceof x||(j=j instanceof Array?new x(j[0],j[1]):new x(j)),g[k]=j.toString();f=g;break;case"DTSTART":case"UNTIL":f=e.timeToUntilString(f);break;default:if(f instanceof Array){for(var k=0;k<f.length;k++)g[k]=String(f[k]);f=g}else f=String(f)}h.push([c,f])}for(var l=[],i=0;i<h.length;i++){var m=h[i];l.push(m[0]+"="+m[1].toString())}return l.join(";")},y.prototype={all:function(a){if(a)return this._iter(new B("all",{},a));var b=this._cacheGet("all");return b===!1&&(b=this._iter(new A("all",{})),this._cacheAdd("all",b)),b},between:function(a,b,c,d,e){var f={before:b,after:a,inc:c,skip:e};if(d)return this._iter(new B("between",f,d));var g=this._cacheGet("between",f);return g===!1&&(g=this._iter(new A("between",f)),this._cacheAdd("between",g,f)),g},before:function(a,b){var c={dt:a,inc:b},d=this._cacheGet("before",c);return d===!1&&(d=this._iter(new A("before",c)),this._cacheAdd("before",d,c)),d},after:function(a,b,c){var d={dt:a,inc:b,skip:c},e=this._cacheGet("after",d);return e===!1&&(e=this._iter(new A("after",d)),this._cacheAdd("after",e,d)),e},count:function(){return this.all().length},toString:function(){return y.optionsToString(this.origOptions)},toText:function(a,b){return d().toText(this,a,b)},isFullyConvertibleToText:function(){return d().isFullyConvertible(this)},_cacheAdd:function(a,b,c){this._cache&&(b&&(b=b instanceof Date?e.clone(b):e.cloneDates(b)),"all"==a?this._cache.all=b:(c._value=b,this._cache[a].push(c)))},_cacheGet:function(a,b){if(!this._cache)return!1;var c=!1;if("all"==a)c=this._cache.all;else a:for(var d,f=0;f<this._cache[a].length;f++){d=this._cache[a][f];for(var g in b)if(b.hasOwnProperty(g)&&String(b[g])!=String(d[g]))continue a;c=d._value;break}if(!c&&this._cache.all){for(var h=new A(a,b),f=0;f<this._cache.all.length&&h.accept(this._cache.all[f]);f++);c=h.getValue(),this._cacheAdd(a,c,b)}return c instanceof Array?e.cloneDates(c):c instanceof Date?e.clone(c):c},clone:function(){return new y(this.origOptions)},_iter:function(a){var c=this.options.dtstart,d=c.getFullYear(),f=c.getMonth()+1,g=c.getDate(),k=c.getHours(),l=c.getMinutes(),m=c.getSeconds(),n=e.getWeekday(c),o=(e.getYearDay(c),this.options.freq),p=this.options.interval,q=this.options.wkst,r=this.options.until,s=this.options.bymonth,t=this.options.byweekno,u=this.options.byyearday,v=this.options.byweekday,w=this.options.byeaster,x=this.options.bymonthday,A=this.options.bynmonthday,B=this.options.bysetpos,C=this.options.byhour,D=this.options.byminute,E=this.options.bysecond;tt_skip=this.options.tt_skip;var F=new z(this);F.rebuild(d,f);var G={};G[y.YEARLY]=F.ydayset,G[y.MONTHLY]=F.mdayset,G[y.WEEKLY]=F.wdayset,G[y.DAILY]=F.ddayset,G[y.HOURLY]=F.ddayset,G[y.MINUTELY]=F.ddayset,G[y.SECONDLY]=F.ddayset,G=G[o];var H;if(o<y.HOURLY)H=this.timeset;else{var I={};I[y.HOURLY]=F.htimeset,I[y.MINUTELY]=F.mtimeset,I[y.SECONDLY]=F.stimeset,I=I[o],H=o>=y.HOURLY&&j(C)&&!b.include(C,k)||o>=y.MINUTELY&&j(D)&&!b.include(D,l)||o>=y.SECONDLY&&j(E)&&!b.include(E,l)?[]:I.call(F,k,l,m)}for(var J,K,L,M,N,O,P,Q,R,S,T,U,V,W=0,X=this.options.count;;){for(Q=G.call(F,d,f,g),S=Q[0],T=Q[1],U=Q[2],J=!1,L=T;U>L;L++)K=S[L],(j(s)&&!b.include(s,F.mmask[K])||j(t)&&!F.wnomask[K]||j(v)&&!b.include(v,F.wdaymask[K])||j(F.nwdaymask)&&!F.nwdaymask[K]||j(w)&&!F.eastermask[K]||(j(x)||j(A))&&!b.include(x,F.mdaymask[K])&&!b.include(A,F.nmdaymask[K])||j(u)&&(K<F.yearlen&&!b.include(u,K+1)&&!b.include(u,-F.yearlen+K)||K>=F.yearlen&&!b.include(u,K+1-F.yearlen)&&!b.include(u,-F.nextyearlen+K-F.yearlen)))&&(S[K]=null,J=!0);if(j(B)&&j(H)){var Y,Z,$=[];for(L=0;L<B.length;L++){var R=B[L];0>R?(Y=Math.floor(R/H.length),Z=h(R,H.length)):(Y=Math.floor((R-1)/H.length),Z=h(R-1,H.length));try{for(Q=[],M=T;U>M;M++){var _=S[M];null!==_&&Q.push(_)}K=0>Y?Q.slice(Y)[0]:Q[Y];var aa=H[Z],ba=e.fromOrdinal(F.yearordinal+K),ca=e.combine(ba,aa);b.include($,ca)||$.push(ca)}catch(da){}}for(e.sort($),L=0;L<$.length;L++){var ca=$[L];if(r&&ca>r)return this._len=W,a.getValue();if(ca>=c){if(++W,!a.accept(ca))return a.getValue();if(X&&(--X,!X))return this._len=W,a.getValue()}}}else for(L=T;U>L;L++)if(K=S[L],null!==K){var ba=e.fromOrdinal(F.yearordinal+K);for(M=0;M<H.length;M++){var aa=H[M],ca=e.combine(ba,aa);if(r&&ca>r)return this._len=W,a.getValue();if(ca>=c){if(++W,!a.accept(ca))return a.getValue();if(X&&(--X,!X))return this._len=W,a.getValue()}}}if(V=!1,o==y.YEARLY){if(d+=p,d>e.MAXYEAR)return this._len=W,a.getValue();F.rebuild(d,f)}else if(o==y.MONTHLY){if(f+=p,f>12&&(O=Math.floor(f/12),P=h(f,12),f=P,d+=O,0==f&&(f=12,--d),d>e.MAXYEAR))return this._len=W,a.getValue();F.rebuild(d,f)}else if(o==y.WEEKLY)g+=q>n?-(n+1+(6-q))+7*p:-(n-q)+7*p,n=q,V=!0;else if(o==y.DAILY)g+=p,V=!0;else if(o==y.HOURLY){for(J&&(k+=Math.floor((23-k)/p)*p);;)if(k+=p,N=i(k,24),O=N.div,P=N.mod,O&&(k=P,g+=O,V=!0),!j(C)||b.include(C,k))break;H=I.call(F,k,l,m)}else if(o==y.MINUTELY){for(J&&(l+=Math.floor((1439-(60*k+l))/p)*p);;)if(l+=p,N=i(l,60),O=N.div,P=N.mod,O&&(l=P,k+=O,N=i(k,24),O=N.div,P=N.mod,O&&(k=P,g+=O,V=!0,J=!1)),(!j(C)||b.include(C,k))&&(!j(D)||b.include(D,l)))break;H=I.call(F,k,l,m)}else if(o==y.SECONDLY){for(J&&(m+=Math.floor((86399-(3600*k+60*l+m))/p)*p);;)if(m+=p,N=i(m,60),O=N.div,P=N.mod,O&&(m=P,l+=O,N=i(l,60),O=N.div,P=N.mod,O&&(l=P,k+=O,N=i(k,24),O=N.div,P=N.mod,O&&(k=P,g+=O,V=!0))),(!j(C)||b.include(C,k))&&(!j(D)||b.include(D,l))&&(!j(E)||b.include(E,m)))break;H=I.call(F,k,l,m)}if(V&&g>28){var ea=e.monthRange(d,f-1)[1];if(g>ea){for(;g>ea;){if(g-=ea,++f,13==f&&(f=1,++d,d>e.MAXYEAR))return this._len=W,a.getValue();ea=e.monthRange(d,f-1)[1]}F.rebuild(d,f)}}}}},y.parseString=function(a){if(a=a.replace(/^\s+|\s+$/,""),!a.length)return null;var b,c,d,f,g,h=a.split(";"),i={};for(b=0;b<h.length;b++)if(h[b])switch(g=h[b].split("="),d=g[0],f=g[1],d){case"FREQ":i.freq=y[f];break;case"WKST":i.wkst=y[f];break;case"COUNT":case"INTERVAL":case"BYSETPOS":case"BYMONTH":case"BYMONTHDAY":case"BYYEARDAY":case"BYWEEKNO":case"BYHOUR":case"BYMINUTE":case"BYSECOND":if(-1!=f.indexOf(","))for(f=f.split(","),c=0;c<f.length;c++)/^[+-]?\d+$/.test(f[c])&&(f[c]=Number(f[c]));else/^[+-]?\d+$/.test(f)&&(f=Number(f));d=d.toLowerCase(),i[d]=f;break;case"BYDAY":var j,k,l,m=f.split(",");for(i.byweekday=[],c=0;c<m.length;c++)l=m[c],2==l.length?(k=y[l],i.byweekday.push(k)):(l=l.match(/^([+-]?\d)([A-Z]{2})$/),j=Number(l[1]),k=l[2],k=y[k].weekday,i.byweekday.push(new x(k,j)));break;case"DTSTART":i.dtstart=e.untilStringToDate(f);break;case"UNTIL":i.until=e.untilStringToDate(f);break;case"TT_SKIP":i.tt_skip=f;break;case"TT_WORKDAY":i.tt_workday=f;break;default:throw new Error("Unknown RRULE property '"+d+"'")}return i},y.fromString=function(a){return new y(y.parseString(a))};var z=function(a){this.rrule=a,this.lastyear=null,this.lastmonth=null,this.yearlen=null,this.nextyearlen=null,this.yearordinal=null,this.yearweekday=null,this.mmask=null,this.mrange=null,this.mdaymask=null,this.nmdaymask=null,this.wdaymask=null,this.wnomask=null,this.nwdaymask=null,this.eastermask=null};z.prototype.rebuild=function(a,c){var d=this.rrule;if(a!=this.lastyear){this.yearlen=e.isLeapYear(a)?366:365,this.nextyearlen=e.isLeapYear(a+1)?366:365;var f=new Date(a,0,1);this.yearordinal=e.toOrdinal(f),this.yearweekday=e.getWeekday(f);var i=e.getWeekday(new Date(a,0,1));if(365==this.yearlen?(this.mmask=[].concat(k),this.mdaymask=[].concat(r),this.nmdaymask=[].concat(t),this.wdaymask=w.slice(i),this.mrange=[].concat(v)):(this.mmask=[].concat(l),this.mdaymask=[].concat(q),this.nmdaymask=[].concat(s),this.wdaymask=w.slice(i),this.mrange=[].concat(u)),j(d.options.byweekno)){this.wnomask=g(0,this.yearlen+7);var m,n,o;m=n=h(7-this.yearweekday+d.options.wkst,7),m>=4?(m=0,o=this.yearlen+h(this.yearweekday-d.options.wkst,7)):o=this.yearlen-m;for(var p,x,z=Math.floor(o/7),A=h(o,7),B=Math.floor(z+A/4),C=0;C<d.options.byweekno.length;C++)if(p=d.options.byweekno[C],0>p&&(p+=B+1),p>0&&B>=p){p>1?(x=m+7*(p-1),m!=n&&(x-=7-n)):x=m;for(var D=0;7>D&&(this.wnomask[x]=1,x++,this.wdaymask[x]!=d.options.wkst);D++);}if(b.include(d.options.byweekno,1)){var x=m+7*B;if(m!=n&&(x-=7-n),x<this.yearlen)for(var C=0;7>C&&(this.wnomask[x]=1,x+=1,this.wdaymask[x]!=d.options.wkst);C++);}if(m){var E;if(b.include(d.options.byweekno,-1))E=-1;else{var F=e.getWeekday(new Date(a-1,0,1)),G=h(7-F+d.options.wkst,7),H=e.isLeapYear(a-1)?366:365;G>=4?(G=0,E=Math.floor(52+h(H+h(F-d.options.wkst,7),7)/4)):E=Math.floor(52+h(this.yearlen-m,7)/4)}if(b.include(d.options.byweekno,E))for(var x=0;m>x;x++)this.wnomask[x]=1}}else this.wnomask=null}if(j(d.options.bynweekday)&&(c!=this.lastmonth||a!=this.lastyear)){var I=[];if(d.options.freq==y.YEARLY)if(j(d.options.bymonth))for(C=0;C<d.options.bymonth.length;C++)c=d.options.bymonth[C],I.push(this.mrange.slice(c-1,c+1));else I=[[0,this.yearlen]];else d.options.freq==y.MONTHLY&&(I=[this.mrange.slice(c-1,c+1)]);if(j(I)){this.nwdaymask=g(0,this.yearlen);for(var C=0;C<I.length;C++){var J=I[C],K=J[0],L=J[1];L-=1;for(var D=0;D<d.options.bynweekday.length;D++){var i=d.options.bynweekday[D][0],p=d.options.bynweekday[D][1];0>p?(x=L+7*(p+1),x-=h(this.wdaymask[x]-i,7)):(x=K+7*(p-1),x+=h(7-this.wdaymask[x]+i,7)),x>=K&&L>=x&&(this.nwdaymask[x]=1)}}}j(d.options.byeaster),this.lastyear=a,this.lastmonth=c}},z.prototype.ydayset=function(a,b,c){return[f(this.yearlen),0,this.yearlen]},z.prototype.mdayset=function(a,b,c){for(var d=g(null,this.yearlen),e=this.mrange[b-1],f=this.mrange[b],h=e;f>h;h++)d[h]=h;return[d,e,f]},z.prototype.wdayset=function(a,b,c){for(var d=g(null,this.yearlen+7),f=e.toOrdinal(new Date(a,b-1,c))-this.yearordinal,h=f,i=0;7>i&&(d[f]=f,++f,this.wdaymask[f]!=this.rrule.options.wkst);i++);return[d,h,f]},z.prototype.ddayset=function(a,b,c){var d=g(null,this.yearlen),f=e.toOrdinal(new Date(a,b-1,c))-this.yearordinal;return d[f]=f,[d,f,f+1]},z.prototype.htimeset=function(a,b,c){for(var d=[],f=this.rrule,g=0;g<f.options.byminute.length;g++){b=f.options.byminute[g];for(var h=0;h<f.options.bysecond.length;h++)c=f.options.bysecond[h],d.push(new e.Time(a,b,c))}return e.sort(d),d},z.prototype.mtimeset=function(a,b,c){for(var d=[],f=this.rrule,g=0;g<f.options.bysecond.length;g++)c=f.options.bysecond[g],d.push(new e.Time(a,b,c));return e.sort(d),d},z.prototype.stimeset=function(a,b,c){return[new e.Time(a,b,c)]};var A=function(a,b){this.init(a,b)};A.prototype={init:function(a,b){this.method=a,this.args=b,this._result=[],this.minDate=null,this.maxDate=null,"between"==a?(this.maxDate=b.inc?b.before:new Date(b.before.getTime()-1),this.minDate=b.inc?b.after:new Date(b.after.getTime()+1)):"before"==a?this.maxDate=b.inc?b.dt:new Date(b.dt.getTime()-1):"after"==a&&(this.minDate=b.inc?b.dt:new Date(b.dt.getTime()+1))},accept:function(a){var b=this.minDate&&a<this.minDate,c=this.maxDate&&a>this.maxDate;if("between"==this.method){if(b)return!0;if(c)return!1}else if("before"==this.method){if(c)return!1}else if("after"==this.method)return b?!0:(this.add(a),!1);return this.add(a)},add:function(a){return this._result.push(a),!0},getValue:function(){switch(this.method){case"all":case"between":return this._result;case"before":case"after":return this._result.length?this._result[this._result.length-1]:null}}};var B=function(a,c,d){var e=["all","between"];if(!b.include(e,a))throw'Invalid method "'+a+'". Only all and between works with iterator.';this.add=function(a){return d(a,this._result.length)?(this._result.push(a),!0):!1},this.init(a,c)};B.prototype=A.prototype,c&&(module.exports={RRule:y}),"undefined"==typeof ender&&(a.RRule=y),"function"==typeof define&&define.amd&&define("rrule",[],function(){return y})}(this);