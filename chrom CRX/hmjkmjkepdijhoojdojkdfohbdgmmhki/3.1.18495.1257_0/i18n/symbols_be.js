var a=this,b=function(f,k){f=f.split(".");var e=a;f[0]in e||"undefined"==typeof e.execScript||e.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||void 0===k?e=e[g]&&e[g]!==Object.prototype[g]?e[g]:e[g]={}:e[g]=k};var c={c:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},b:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}};
c={c:{1E3:{other:"0\u00a0\u0442\u044b\u0441."},1E4:{other:"00\u00a0\u0442\u044b\u0441."},1E5:{other:"000\u00a0\u0442\u044b\u0441."},1E6:{other:"0\u00a0\u043c\u043b\u043d"},1E7:{other:"00\u00a0\u043c\u043b\u043d"},1E8:{other:"000\u00a0\u043c\u043b\u043d"},1E9:{other:"0\u00a0\u043c\u043b\u0440\u0434"},1E10:{other:"00\u00a0\u043c\u043b\u0440\u0434"},1E11:{other:"000\u00a0\u043c\u043b\u0440\u0434"},1E12:{other:"0\u00a0\u0442\u0440\u043b\u043d"},1E13:{other:"00\u00a0\u0442\u0440\u043b\u043d"},1E14:{other:"000\u00a0\u0442\u0440\u043b\u043d"}},
b:{1E3:{other:"0 \u0442\u044b\u0441\u044f\u0447\u044b"},1E4:{other:"00 \u0442\u044b\u0441\u044f\u0447\u044b"},1E5:{other:"000 \u0442\u044b\u0441\u044f\u0447\u044b"},1E6:{other:"0 \u043c\u0456\u043b\u044c\u0451\u043d\u0430"},1E7:{other:"00 \u043c\u0456\u043b\u044c\u0451\u043d\u0430"},1E8:{other:"000 \u043c\u0456\u043b\u044c\u0451\u043d\u0430"},1E9:{other:"0 \u043c\u0456\u043b\u044c\u044f\u0440\u0434\u0430"},1E10:{other:"00 \u043c\u0456\u043b\u044c\u044f\u0440\u0434\u0430"},1E11:{other:"000 \u043c\u0456\u043b\u044c\u044f\u0440\u0434\u0430"},
1E12:{other:"0 \u0442\u0440\u044b\u043b\u044c\u0451\u043d\u0430"},1E13:{other:"00 \u0442\u0440\u044b\u043b\u044c\u0451\u043d\u0430"},1E14:{other:"000 \u0442\u0440\u044b\u043b\u044c\u0451\u043d\u0430"}}};var d={fa:"y",la:"y G",ga:"MMM y",ha:"MMMM y",F:"MMM d",G:"MMMM dd",I:"M/d",H:"MMMM d",ja:"MMM d, y",da:"EEE, MMM d",ka:"EEE, MMM d, y",i:"d"};d={fa:"y",la:"y '\u0433'. G",ga:"LLL y",ha:"LLLL y",F:"d MMM",G:"dd MMMM",I:"d.M",H:"d MMMM",ja:"d MMM y",da:"EEE, d MMM",ka:"EEE, d MMM y",i:"d"};var h={s:["BC","AD"],o:["Before Christ","Anno Domini"],K:"JFMAMJJASOND".split(""),X:"JFMAMJJASOND".split(""),D:"January February March April May June July August September October November December".split(" "),W:"January February March April May June July August September October November December".split(" "),T:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Z:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ca:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
aa:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),V:"Sun Mon Tue Wed Thu Fri Sat".split(" "),$:"Sun Mon Tue Wed Thu Fri Sat".split(" "),L:"SMTWTFS".split(""),Y:"SMTWTFS".split(""),U:["Q1","Q2","Q3","Q4"],R:["1st quarter","2nd quarter","3rd quarter","4th quarter"],a:["AM","PM"],g:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],ba:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],h:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],v:6,ea:[5,6],w:5};
h={s:["\u0434\u0430 \u043d.\u044d.","\u043d.\u044d."],o:["\u0434\u0430 \u043d\u0430\u0440\u0430\u0434\u0436\u044d\u043d\u043d\u044f \u0425\u0440\u044b\u0441\u0442\u043e\u0432\u0430","\u0430\u0434 \u043d\u0430\u0440\u0430\u0434\u0436\u044d\u043d\u043d\u044f \u0425\u0440\u044b\u0441\u0442\u043e\u0432\u0430"],K:"\u0441\u043b\u0441\u043a\u043c\u0447\u043b\u0436\u0432\u043a\u043b\u0441".split(""),X:"\u0441\u043b\u0441\u043a\u043c\u0447\u043b\u0436\u0432\u043a\u043b\u0441".split(""),D:"\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044f \u043b\u044e\u0442\u0430\u0433\u0430 \u0441\u0430\u043a\u0430\u0432\u0456\u043a\u0430 \u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a\u0430 \u043c\u0430\u044f \u0447\u044d\u0440\u0432\u0435\u043d\u044f \u043b\u0456\u043f\u0435\u043d\u044f \u0436\u043d\u0456\u045e\u043d\u044f \u0432\u0435\u0440\u0430\u0441\u043d\u044f \u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a\u0430 \u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434\u0430 \u0441\u043d\u0435\u0436\u043d\u044f".split(" "),
W:"\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044c \u043b\u044e\u0442\u044b \u0441\u0430\u043a\u0430\u0432\u0456\u043a \u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a \u043c\u0430\u0439 \u0447\u044d\u0440\u0432\u0435\u043d\u044c \u043b\u0456\u043f\u0435\u043d\u044c \u0436\u043d\u0456\u0432\u0435\u043d\u044c \u0432\u0435\u0440\u0430\u0441\u0435\u043d\u044c \u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a \u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434 \u0441\u043d\u0435\u0436\u0430\u043d\u044c".split(" "),
T:"\u0441\u0442\u0443 \u043b\u044e\u0442 \u0441\u0430\u043a \u043a\u0440\u0430 \u043c\u0430\u044f \u0447\u044d\u0440 \u043b\u0456\u043f \u0436\u043d\u0456 \u0432\u0435\u0440 \u043a\u0430\u0441 \u043b\u0456\u0441 \u0441\u043d\u0435".split(" "),Z:"\u0441\u0442\u0443 \u043b\u044e\u0442 \u0441\u0430\u043a \u043a\u0440\u0430 \u043c\u0430\u0439 \u0447\u044d\u0440 \u043b\u0456\u043f \u0436\u043d\u0456 \u0432\u0435\u0440 \u043a\u0430\u0441 \u043b\u0456\u0441 \u0441\u043d\u0435".split(" "),ca:"\u043d\u044f\u0434\u0437\u0435\u043b\u044f \u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a \u0430\u045e\u0442\u043e\u0440\u0430\u043a \u0441\u0435\u0440\u0430\u0434\u0430 \u0447\u0430\u0446\u0432\u0435\u0440 \u043f\u044f\u0442\u043d\u0456\u0446\u0430 \u0441\u0443\u0431\u043e\u0442\u0430".split(" "),
aa:"\u043d\u044f\u0434\u0437\u0435\u043b\u044f \u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a \u0430\u045e\u0442\u043e\u0440\u0430\u043a \u0441\u0435\u0440\u0430\u0434\u0430 \u0447\u0430\u0446\u0432\u0435\u0440 \u043f\u044f\u0442\u043d\u0456\u0446\u0430 \u0441\u0443\u0431\u043e\u0442\u0430".split(" "),V:"\u043d\u0434 \u043f\u043d \u0430\u045e \u0441\u0440 \u0447\u0446 \u043f\u0442 \u0441\u0431".split(" "),$:"\u043d\u0434 \u043f\u043d \u0430\u045e \u0441\u0440 \u0447\u0446 \u043f\u0442 \u0441\u0431".split(" "),
L:"\u043d\u043f\u0430\u0441\u0447\u043f\u0441".split(""),Y:"\u043d\u043f\u0430\u0441\u0447\u043f\u0441".split(""),U:["1-\u0448\u044b \u043a\u0432.","2-\u0433\u0456 \u043a\u0432.","3-\u0446\u0456 \u043a\u0432.","4-\u0442\u044b \u043a\u0432."],R:["1-\u0448\u044b \u043a\u0432\u0430\u0440\u0442\u0430\u043b","2-\u0433\u0456 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","3-\u0446\u0456 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","4-\u0442\u044b \u043a\u0432\u0430\u0440\u0442\u0430\u043b"],a:["AM","PM"],g:["EEEE, d MMMM y '\u0433'.",
"d MMMM y '\u0433'.","d.MM.y","d.MM.yy"],ba:["HH:mm:ss, zzzz","HH:mm:ss z","HH:mm:ss","HH:mm"],h:["{1} '\u0443' {0}","{1} '\u0443' {0}","{1}, {0}","{1}, {0}"],v:0,ea:[5,6],w:6};var l={l:".",A:",",M:"%",ia:"0",P:"+",C:"-",u:"E",O:"\u2030",B:"\u221e",J:"NaN",j:"#,##0.###",S:"#E0",N:"#,##0%",f:"\u00a4#,##0.00",m:"USD"};l={l:",",A:"\u00a0",M:"%",ia:"0",P:"+",C:"-",u:"E",O:"\u2030",B:"\u221e",J:"NaN",j:"#,##0.###",S:"#E0",N:"#,##0\u00a0%",f:"#,##0.00\u00a0\u00a4",m:"BYN"};b("I18N_DATETIMESYMBOLS_ERAS",h.s);b("I18N_DATETIMESYMBOLS_ERANAMES",h.o);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",h.K);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",h.X);b("I18N_DATETIMESYMBOLS_MONTHS",h.D);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",h.W);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",h.T);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",h.Z);b("I18N_DATETIMESYMBOLS_WEEKDAYS",h.ca);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",h.aa);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",h.V);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",h.$);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",h.L);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",h.Y);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",h.U);b("I18N_DATETIMESYMBOLS_QUARTERS",h.R);b("I18N_DATETIMESYMBOLS_AMPMS",h.a);b("I18N_DATETIMESYMBOLS_DATEFORMATS",h.g);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",h.ba);b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS",h.h);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",h.v);b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",h.ea);
b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",h.w);b("I18N_DATETIMEPATTERNS_YEAR_FULL",d.fa);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR",d.ga);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL",d.ha);b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR",d.F);b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL",d.G);b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT",d.I);b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM",d.H);b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM",d.da);b("I18N_DATETIMEPATTERNS_DAY_ABBR",d.i);
void 0!==h.ma&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",h.ma);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",l.l);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",l.A);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",l.M);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",l.ia);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",l.P);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",l.C);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",l.u);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",l.O);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",l.B);b("I18N_NUMBERFORMATSYMBOLS_NAN",l.J);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",l.j);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",l.S);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",l.N);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",l.f);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",l.m);b("I18N_COMPACT_DECIMAL_SHORT_PATTERN",c.c);b("I18N_COMPACT_DECIMAL_LONG_PATTERN",c.b);
