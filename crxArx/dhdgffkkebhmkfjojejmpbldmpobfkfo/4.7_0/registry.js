(function(p){var g=function(){var l=[],g=function(a,b,c){a="string"===typeof a?[a]:a;var e=1,h=function(){return a.every(function(a){return!!f[a]})},d=function(){l.push(function(){h()?c():d()})},m=function(a){0==--e&&c&&(b||h()?c():d())};a.forEach(function(a){void 0===f[a]&&(f[a]=null,n.loadFile(rea.extension.getURL(a+".js"),function(){m(a)}),e++)});m()},f={},d={},k={},n={log:function(){var a,b,c=0,e=[],d={set:function(q){c=q;b=60<=c;a=30<=c;e.forEach(function(a){a(d,c)})},get:function(){return c},
verbose:function(){console.debug.apply(console,arguments)},debug:function(){b&&console.debug.apply(console,arguments)},warn:function(){a&&console.warn.apply(console,arguments)},log:function(){a&&console.log.apply(console,arguments)},info:function(){a&&console.info.apply(console,arguments)},error:function(){console.error.apply(console,arguments)},addChangeListener:function(a){e.push(a)}};d.__defineGetter__("D",function(){return b});d.__defineGetter__("W",function(){return a});return d}(),init:function(){},
verify:function(a){var b=[],c;for(c in d)d.hasOwnProperty(c)&&(3<d[c].length&&"###"===d[c].substr(0,3)?console.log("registry.verify: development version detected @ "+c):d[c]!==a&&(console.warn("registry.verify: expected version "+a+" and detected "+d[c]+" @ "+c),b.push({name:c,version:d[c],expected:a})));return b},register:function(a,b,c,e){if(!f[a]||e)for(d[a]=b,f[a]=c,a=l,l=[];a.length;)a.pop()()},registerRaw:function(a,b,c,e){if(!k[a]||e)d[a]=b,k[a]=c},vendor:function(a,b){return g(a,!0,b)},require:function(a,
b){return g(a,!1,b)},getRaw:function(a){var b=null;if(void 0!==k[a])b=k[a];else{var c=rea.extension.getURL(a);try{var d=new XMLHttpRequest;d.open("GET",c,!1);d.send(null);(b=d.responseText)||console.warn("registry: content of "+a+" is null!")}catch(h){console.log("getRawContent "+h)}}return b},loadFile:function(a,b){a="string"===typeof a?[a]:a;var c=1,d=function(a){0==--c&&b&&b()};a.forEach(function(a){c++;try{var b=document.createElement("script");b.setAttribute("src",a);b.onload=d;b.onerror=function(b){console.warn("registry: self.load "+
a+" failed! ",b);d()};(document.head||document.body||document.documentElement||document).appendChild(b)}catch(f){console.warn("registry: self.load "+a+" failed! ",f),d()}});d()},isDevVersion:function(a){return d[a]&&"###"===d[a].substr(0,3)},get:function(a){var b,c=f[a];"function"===typeof c?(b=Array.prototype.slice.call(arguments,1),b=c.apply(this,b)):c&&(b=c);return b}};return n}();window.setTimeout(g.init,1);p.Registry=g})("undefined"!==typeof rea?rea.globals:window);