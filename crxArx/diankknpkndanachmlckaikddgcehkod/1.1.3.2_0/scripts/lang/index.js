define(function(require,exports){var a=window.langJsonEN,b=/(zh\Scn|ru|pt)/i,c=window.Appest?window.Appest.language:navigator.language,d=c.replace("_","-").toLowerCase().replace(/\s*/g,"");if(b.test(c)){var e="langJson"+c.slice(0,2).toUpperCase();a=window[e]}exports.get=function(b){return a[b]},b.test(c)?moment.lang(d):moment.lang("en")});