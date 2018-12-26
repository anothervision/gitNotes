!function(e, t) {
    function n(e) {
        var t = e.length, n = ue.type(e);
        return !ue.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)));
    }
    function r(e) {
        var t = be[e] = {};
        return ue.each(e.match(ce) || [], function(e, n) {
            t[n] = !0;
        }), t;
    }
    function i(e, n, r, i) {
        if (ue.acceptData(e)) {
            var o, a, s = ue.expando, u = e.nodeType, l = u ? ue.cache : e, c = u ? e[s] : e[s] && s;
            if (c && l[c] && (i || l[c].data) || r !== t || "string" != typeof n) return c || (c = u ? e[s] = ee.pop() || ue.guid++ : s), 
            l[c] || (l[c] = u ? {} : {
                toJSON: ue.noop
            }), "object" != typeof n && "function" != typeof n || (i ? l[c] = ue.extend(l[c], n) : l[c].data = ue.extend(l[c].data, n)), 
            a = l[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[ue.camelCase(n)] = r), 
            "string" == typeof n ? null == (o = a[n]) && (o = a[ue.camelCase(n)]) : o = a, o;
        }
    }
    function o(e, t, n) {
        if (ue.acceptData(e)) {
            var r, i, o = e.nodeType, a = o ? ue.cache : e, u = o ? e[ue.expando] : ue.expando;
            if (a[u]) {
                if (t && (r = n ? a[u] : a[u].data)) {
                    i = (t = ue.isArray(t) ? t.concat(ue.map(t, ue.camelCase)) : t in r ? [ t ] : (t = ue.camelCase(t)) in r ? [ t ] : t.split(" ")).length;
                    for (;i--; ) delete r[t[i]];
                    if (n ? !s(r) : !ue.isEmptyObject(r)) return;
                }
                (n || (delete a[u].data, s(a[u]))) && (o ? ue.cleanData([ e ], !0) : ue.support.deleteExpando || a != a.window ? delete a[u] : a[u] = null);
            }
        }
    }
    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(we, "-$1").toLowerCase();
            if ("string" == typeof (r = e.getAttribute(i))) {
                try {
                    r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : xe.test(r) ? ue.parseJSON(r) : r);
                } catch (e) {}
                ue.data(e, n, r);
            } else r = t;
        }
        return r;
    }
    function s(e) {
        var t;
        for (t in e) if (("data" !== t || !ue.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0;
    }
    function u() {
        return !0;
    }
    function l() {
        return !1;
    }
    function c() {
        try {
            return J.activeElement;
        } catch (e) {}
    }
    function f(e, t) {
        do {
            e = e[t];
        } while (e && 1 !== e.nodeType);
        return e;
    }
    function p(e, t, n) {
        if (ue.isFunction(t)) return ue.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n;
        });
        if (t.nodeType) return ue.grep(e, function(e) {
            return e === t !== n;
        });
        if ("string" == typeof t) {
            if (Oe.test(t)) return ue.filter(t, e, n);
            t = ue.filter(t, e);
        }
        return ue.grep(e, function(e) {
            return ue.inArray(e, t) >= 0 !== n;
        });
    }
    function d(e) {
        var t = Re.split("|"), n = e.createDocumentFragment();
        if (n.createElement) for (;t.length; ) n.createElement(t.pop());
        return n;
    }
    function h(e, t) {
        return ue.nodeName(e, "table") && ue.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
    }
    function m(e) {
        return e.type = (null !== ue.find.attr(e, "type")) + "/" + e.type, e;
    }
    function g(e) {
        var t = Ke.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function y(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) ue._data(n, "globalEval", !t || ue._data(t[r], "globalEval"));
    }
    function v(e, t) {
        if (1 === t.nodeType && ue.hasData(e)) {
            var n, r, i, o = ue._data(e), a = ue._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s) for (r = 0, i = s[n].length; r < i; r++) ue.event.add(t, n, s[n][r]);
            }
            a.data && (a.data = ue.extend({}, a.data));
        }
    }
    function b(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ue.support.noCloneEvent && t[ue.expando]) {
                i = ue._data(t);
                for (r in i.events) ue.removeEvent(t, r, i.handle);
                t.removeAttribute(ue.expando);
            }
            "script" === n && t.text !== e.text ? (m(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), 
            ue.support.html5Clone && e.innerHTML && !ue.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Je.test(e.type) ? (t.defaultChecked = t.checked = e.checked, 
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
        }
    }
    function x(e, n) {
        var r, i, o = 0, a = typeof e.getElementsByTagName !== V ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== V ? e.querySelectorAll(n || "*") : t;
        if (!a) for (a = [], r = e.childNodes || e; null != (i = r[o]); o++) !n || ue.nodeName(i, n) ? a.push(i) : ue.merge(a, x(i, n));
        return n === t || n && ue.nodeName(e, n) ? ue.merge([ e ], a) : a;
    }
    function w(e) {
        Je.test(e.type) && (e.defaultChecked = e.checked);
    }
    function T(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = yt.length; i--; ) if ((t = yt[i] + n) in e) return t;
        return r;
    }
    function C(e, t) {
        return e = t || e, "none" === ue.css(e, "display") || !ue.contains(e.ownerDocument, e);
    }
    function N(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++) (r = e[a]).style && (o[a] = ue._data(r, "olddisplay"), 
        n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && C(r) && (o[a] = ue._data(r, "olddisplay", A(r.nodeName)))) : o[a] || (i = C(r), 
        (n && "none" !== n || !i) && ue._data(r, "olddisplay", i ? n : ue.css(r, "display"))));
        for (a = 0; a < s; a++) (r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e;
    }
    function k(e, t, n) {
        var r = ct.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }
    function E(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += ue.css(e, n + gt[o], !0, i)), 
        r ? ("content" === n && (a -= ue.css(e, "padding" + gt[o], !0, i)), "margin" !== n && (a -= ue.css(e, "border" + gt[o] + "Width", !0, i))) : (a += ue.css(e, "padding" + gt[o], !0, i), 
        "padding" !== n && (a += ue.css(e, "border" + gt[o] + "Width", !0, i)));
        return a;
    }
    function S(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = rt(e), a = ue.support.boxSizing && "border-box" === ue.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = it(e, t, o)) < 0 || null == i) && (i = e.style[t]), ft.test(i)) return i;
            r = a && (ue.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
        }
        return i + E(e, t, n || (a ? "border" : "content"), r, o) + "px";
    }
    function A(e) {
        var t = J, n = dt[e];
        return n || ("none" !== (n = j(e, t)) && n || ((t = ((nt = (nt || ue("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement))[0].contentWindow || nt[0].contentDocument).document).write("<!doctype html><html><body>"), 
        t.close(), n = j(e, t), nt.detach()), dt[e] = n), n;
    }
    function j(e, t) {
        var n = ue(t.createElement(e)).appendTo(t.body), r = ue.css(n[0], "display");
        return n.remove(), r;
    }
    function D(e, t, n, r) {
        var i;
        if (ue.isArray(t)) ue.each(t, function(t, i) {
            n || bt.test(e) ? r(e, i) : D(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
        }); else if (n || "object" !== ue.type(t)) r(e, t); else for (i in t) D(e + "[" + i + "]", t[i], n, r);
    }
    function L(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(ce) || [];
            if (ue.isFunction(n)) for (;r = o[i++]; ) "+" === r[0] ? (r = r.slice(1) || "*", 
            (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function H(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, ue.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), 
                i(l), !1);
            }), u;
        }
        var o = {}, a = e === Ot;
        return i(t.dataTypes[0]) || !o["*"] && i("*");
    }
    function q(e, n) {
        var r, i, o = ue.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && ue.extend(!0, e, r), e;
    }
    function _(e, n, r) {
        for (var i, o, a, s, u = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), 
        o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o) for (s in u) if (u[s] && u[s].test(o)) {
            l.unshift(s);
            break;
        }
        if (l[0] in r) a = l[0]; else {
            for (s in r) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    a = s;
                    break;
                }
                i || (i = s);
            }
            a = a || i;
        }
        if (a) return a !== l[0] && l.unshift(a), r[a];
    }
    function M(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), 
        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                break;
            }
            if (!0 !== a) if (a && e.throws) t = a(t); else try {
                t = a(t);
            } catch (e) {
                return {
                    state: "parsererror",
                    error: a ? e : "No conversion from " + u + " to " + o
                };
            }
        }
        return {
            state: "success",
            data: t
        };
    }
    function O() {
        try {
            return new e.XMLHttpRequest();
        } catch (e) {}
    }
    function F() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
    }
    function B() {
        return setTimeout(function() {
            zt = t;
        }), zt = ue.now();
    }
    function P(e, t, n) {
        for (var r, i = (Gt[t] || []).concat(Gt["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
    }
    function R(e, t, n) {
        var r, i, o = 0, a = Jt.length, s = ue.Deferred().always(function() {
            delete u.elem;
        }), u = function() {
            if (i) return !1;
            for (var t = zt || B(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
            return s.notifyWith(e, [ l, r, n ]), r < 1 && a ? n : (s.resolveWith(e, [ l ]), 
            !1);
        }, l = s.promise({
            elem: e,
            props: ue.extend({}, t),
            opts: ue.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: zt || B(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = ue.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r;
            },
            stop: function(t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) l.tweens[n].run(1);
                return t ? s.resolveWith(e, [ l, t ]) : s.rejectWith(e, [ l, t ]), this;
            }
        }), c = l.props;
        for (W(c, l.opts.specialEasing); o < a; o++) if (r = Jt[o].call(l, e, c, l.opts)) return r;
        return ue.map(c, P, l), ue.isFunction(l.opts.start) && l.opts.start.call(e, l), 
        ue.fx.timer(ue.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
    }
    function W(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = ue.camelCase(n), i = t[r], o = e[n], ue.isArray(o) && (i = o[1], 
        o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ue.cssHooks[r]) && "expand" in a) {
            o = a.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
    }
    function $(e, t, n, r, i) {
        return new $.prototype.init(e, t, n, r, i);
    }
    function I(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = gt[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function z(e) {
        return ue.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow);
    }
    var X, U, V = typeof t, Y = e.location, J = e.document, G = J.documentElement, Q = e.jQuery, K = e.$, Z = {}, ee = [], te = ee.concat, ne = ee.push, re = ee.slice, ie = ee.indexOf, oe = Z.toString, ae = Z.hasOwnProperty, se = "1.10.1".trim, ue = function(e, t) {
        return new ue.fn.init(e, t, U);
    }, le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ce = /\S+/g, fe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, pe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, he = /^-ms-/, me = /-([\da-z])/gi, ge = function(e, t) {
        return t.toUpperCase();
    }, ye = function(e) {
        (J.addEventListener || "load" === e.type || "complete" === J.readyState) && (ve(), 
        ue.ready());
    }, ve = function() {
        J.addEventListener ? (J.removeEventListener("DOMContentLoaded", ye, !1), e.removeEventListener("load", ye, !1)) : (J.detachEvent("onreadystatechange", ye), 
        e.detachEvent("onload", ye));
    };
    ue.fn = ue.prototype = {
        jquery: "1.10.1",
        constructor: ue,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [ null, e, null ] : pe.exec(e)) || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof ue ? n[0] : n, ue.merge(this, ue.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : J, !0)), 
                    de.test(i[1]) && ue.isPlainObject(n)) for (i in n) ue.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this;
                }
                if ((o = J.getElementById(i[2])) && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o;
                }
                return this.context = J, this.selector = e, this;
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ue.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, 
            this.context = e.context), ue.makeArray(e, this));
        },
        selector: "",
        length: 0,
        toArray: function() {
            return re.call(this);
        },
        get: function(e) {
            return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e];
        },
        pushStack: function(e) {
            var t = ue.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t;
        },
        each: function(e, t) {
            return ue.each(this, e, t);
        },
        ready: function(e) {
            return ue.ready.promise().done(e), this;
        },
        slice: function() {
            return this.pushStack(re.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
        },
        map: function(e) {
            return this.pushStack(ue.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: ne,
        sort: [].sort,
        splice: [].splice
    }, ue.fn.init.prototype = ue.fn, ue.extend = ue.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {}, u = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || ue.isFunction(s) || (s = {}), 
        l === u && (s = this, --u); u < l; u++) if (null != (o = arguments[u])) for (i in o) e = s[i], 
        s !== (r = o[i]) && (c && r && (ue.isPlainObject(r) || (n = ue.isArray(r))) ? (n ? (n = !1, 
        a = e && ue.isArray(e) ? e : []) : a = e && ue.isPlainObject(e) ? e : {}, s[i] = ue.extend(c, a, r)) : r !== t && (s[i] = r));
        return s;
    }, ue.extend({
        expando: "jQuery" + ("1.10.1" + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === ue && (e.$ = K), t && e.jQuery === ue && (e.jQuery = Q), ue;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ue.readyWait++ : ue.ready(!0);
        },
        ready: function(e) {
            if (!0 === e ? !--ue.readyWait : !ue.isReady) {
                if (!J.body) return setTimeout(ue.ready);
                ue.isReady = !0, !0 !== e && --ue.readyWait > 0 || (X.resolveWith(J, [ ue ]), ue.fn.trigger && ue(J).trigger("ready").off("ready"));
            }
        },
        isFunction: function(e) {
            return "function" === ue.type(e);
        },
        isArray: Array.isArray || function(e) {
            return "array" === ue.type(e);
        },
        isWindow: function(e) {
            return null != e && e == e.window;
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
        },
        type: function(e) {
            return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? Z[oe.call(e)] || "object" : typeof e;
        },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== ue.type(e) || e.nodeType || ue.isWindow(e)) return !1;
            try {
                if (e.constructor && !ae.call(e, "constructor") && !ae.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (e) {
                return !1;
            }
            if (ue.support.ownLast) for (n in e) return ae.call(e, n);
            for (n in e) ;
            return n === t || ae.call(e, n);
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        error: function(e) {
            throw new Error(e);
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || J;
            var r = de.exec(e), i = !n && [];
            return r ? [ t.createElement(r[1]) ] : (r = ue.buildFragment([ e ], t, i), i && ue(i).remove(), 
            ue.merge([], r.childNodes));
        },
        parseJSON: function(t) {
            if (e.JSON && e.JSON.parse) try {
                return e.JSON.parse(t);
            } catch (e) {}
            if (null === t) return t;
            if ("string" == typeof t && t) try {
                return new Function("return " + t)();
            } catch (e) {}
            ue.error("Invalid JSON: " + t);
        },
        parseXML: function(n) {
            var r;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? r = new DOMParser().parseFromString(n, "text/xml") : ((r = new ActiveXObject("Microsoft.XMLDOM")).async = "false", 
                r.loadXML(n));
            } catch (e) {
                r = t;
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ue.error("Invalid XML: " + n), 
            r;
        },
        noop: function() {},
        globalEval: function(t) {
            t && ue.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t);
            })(t);
        },
        camelCase: function(e) {
            return e.replace(he, "ms-").replace(me, ge);
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, t, r) {
            var i = 0, o = e.length, a = n(e);
            if (r) {
                if (a) for (;i < o && !1 !== t.apply(e[i], r); i++) ; else for (i in e) if (!1 === t.apply(e[i], r)) break;
            } else if (a) for (;i < o && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e;
        },
        trim: se && !se.call("\ufeff ") ? function(e) {
            return null == e ? "" : se.call(e);
        } : function(e) {
            return null == e ? "" : (e + "").replace(fe, "");
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ue.merge(r, "string" == typeof e ? [ e ] : e) : ne.call(r, e)), 
            r;
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (ie) return ie.call(t, e, n);
                for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++) if (n in t && t[n] === e) return n;
            }
            return -1;
        },
        merge: function(e, n) {
            var r = n.length, i = e.length, o = 0;
            if ("number" == typeof r) for (;o < r; o++) e[i++] = n[o]; else for (;n[o] !== t; ) e[i++] = n[o++];
            return e.length = i, e;
        },
        grep: function(e, t, n) {
            var r = [], i = 0, o = e.length;
            for (n = !!n; i < o; i++) n !== !!t(e[i], i) && r.push(e[i]);
            return r;
        },
        map: function(e, t, r) {
            var i, o = 0, a = e.length, s = [];
            if (n(e)) for (;o < a; o++) null != (i = t(e[o], o, r)) && (s[s.length] = i); else for (o in e) null != (i = t(e[o], o, r)) && (s[s.length] = i);
            return te.apply([], s);
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), ue.isFunction(e) ? (r = re.call(arguments, 2), 
            i = function() {
                return e.apply(n || this, r.concat(re.call(arguments)));
            }, i.guid = e.guid = e.guid || ue.guid++, i) : t;
        },
        access: function(e, n, r, i, o, a, s) {
            var u = 0, l = e.length, c = null == r;
            if ("object" === ue.type(r)) {
                o = !0;
                for (u in r) ue.access(e, n, u, r[u], !0, a, s);
            } else if (i !== t && (o = !0, ue.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), 
            n = null) : (c = n, n = function(e, t, n) {
                return c.call(ue(e), n);
            })), n)) for (;u < l; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
            return o ? e : c ? n.call(e) : l ? n(e[0], r) : a;
        },
        now: function() {
            return new Date().getTime();
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i;
        }
    }), ue.ready.promise = function(t) {
        if (!X) if (X = ue.Deferred(), "complete" === J.readyState) setTimeout(ue.ready); else if (J.addEventListener) J.addEventListener("DOMContentLoaded", ye, !1), 
        e.addEventListener("load", ye, !1); else {
            J.attachEvent("onreadystatechange", ye), e.attachEvent("onload", ye);
            var n = !1;
            try {
                n = null == e.frameElement && J.documentElement;
            } catch (e) {}
            n && n.doScroll && function e() {
                if (!ue.isReady) {
                    try {
                        n.doScroll("left");
                    } catch (t) {
                        return setTimeout(e, 50);
                    }
                    ve(), ue.ready();
                }
            }();
        }
        return X.promise(t);
    }, ue.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Z["[object " + t + "]"] = t.toLowerCase();
    }), U = ue(J), function(e, t) {
        function n(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p, m;
            if ((t ? t.ownerDocument || t : $) !== _ && q(t), t = t || _, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (O && !r) {
                if (i = xe.exec(e)) if (a = i[1]) {
                    if (9 === s) {
                        if (!(o = t.getElementById(a)) || !o.parentNode) return n;
                        if (o.id === a) return n.push(o), n;
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && R(t, o) && o.id === a) return n.push(o), 
                    n;
                } else {
                    if (i[2]) return te.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = i[3]) && k.getElementsByClassName && t.getElementsByClassName) return te.apply(n, t.getElementsByClassName(a)), 
                    n;
                }
                if (k.qsa && (!F || !F.test(e))) {
                    if (f = c = W, p = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = d(e), (c = t.getAttribute("id")) ? f = c.replace(Ce, "\\$&") : t.setAttribute("id", f), 
                        f = "[id='" + f + "'] ", u = l.length; u--; ) l[u] = f + h(l[u]);
                        p = he.test(e) && t.parentNode || t, m = l.join(",");
                    }
                    if (m) try {
                        return te.apply(n, p.querySelectorAll(m)), n;
                    } catch (e) {} finally {
                        c || t.removeAttribute("id");
                    }
                }
            }
            return T(e.replace(fe, "$1"), t, n, r);
        }
        function r(e) {
            return be.test(e + "");
        }
        function i() {
            function e(n, r) {
                return t.push(n += " ") > S.cacheLength && delete e[t.shift()], e[n] = r;
            }
            var t = [];
            return e;
        }
        function o(e) {
            return e[W] = !0, e;
        }
        function a(e) {
            var t = _.createElement("div");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function s(e, t, n) {
            for (var r, i = (e = e.split("|")).length, o = n ? null : t; i--; ) (r = S.attrHandle[e[i]]) && r !== t || (S.attrHandle[e[i]] = o);
        }
        function u(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : !0 === e[t] ? t.toLowerCase() : null;
        }
        function l(e, t) {
            return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }
        function c(e) {
            if ("input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }
        function f(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
            if (r) return r;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function p(e) {
            return o(function(t) {
                return t = +t, o(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; ) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                });
            });
        }
        function d(e, t) {
            var r, i, o, a, s, u, l, c = U[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, u = [], l = S.preFilter; s; ) {
                r && !(i = pe.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), 
                r = !1, (i = de.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(fe, " ")
                }), s = s.slice(r.length));
                for (a in S.filter) !(i = ve[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), 
                o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break;
            }
            return t ? s.length : s ? n.error(e) : U(e, u).slice(0);
        }
        function h(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function m(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, o = z++;
            return t.first ? function(t, n, o) {
                for (;t = t[r]; ) if (1 === t.nodeType || i) return e(t, n, o);
            } : function(t, n, a) {
                var s, u, l, c = I + " " + o;
                if (a) {
                    for (;t = t[r]; ) if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
                } else for (;t = t[r]; ) if (1 === t.nodeType || i) if (l = t[W] || (t[W] = {}), 
                (u = l[r]) && u[0] === c) {
                    if (!0 === (s = u[1]) || s === E) return !0 === s;
                } else if (u = l[r] = [ c ], u[1] = e(t, n, a) || E, !0 === u[1]) return !0;
            };
        }
        function g(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                return !0;
            } : e[0];
        }
        function y(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), 
            l && t.push(s)));
            return a;
        }
        function v(e, t, n, r, i, a) {
            return r && !r[W] && (r = v(r)), i && !i[W] && (i = v(i, a)), o(function(o, a, s, u) {
                var l, c, f, p = [], d = [], h = a.length, m = o || w(t || "*", s.nodeType ? [ s ] : s, []), g = !e || !o && t ? m : y(m, p, e, s, u), v = n ? i || (o ? e : h || r) ? [] : a : g;
                if (n && n(g, v, s, u), r) for (l = y(v, d), r(l, [], s, u), c = l.length; c--; ) (f = l[c]) && (v[d[c]] = !(g[d[c]] = f));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (l = [], c = v.length; c--; ) (f = v[c]) && l.push(g[c] = f);
                            i(null, v = [], l, u);
                        }
                        for (c = v.length; c--; ) (f = v[c]) && (l = i ? re.call(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
                    }
                } else v = y(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : te.apply(a, v);
            });
        }
        function b(e) {
            for (var t, n, r, i = e.length, o = S.relative[e[0].type], a = o || S.relative[" "], s = o ? 1 : 0, u = m(function(e) {
                return e === t;
            }, a, !0), l = m(function(e) {
                return re.call(t, e) > -1;
            }, a, !0), c = [ function(e, n, r) {
                return !o && (r || n !== L) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
            } ]; s < i; s++) if (n = S.relative[e[s].type]) c = [ m(g(c), n) ]; else {
                if ((n = S.filter[e[s].type].apply(null, e[s].matches))[W]) {
                    for (r = ++s; r < i && !S.relative[e[r].type]; r++) ;
                    return v(s > 1 && g(c), s > 1 && h(e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*" : ""
                    })).replace(fe, "$1"), n, s < r && b(e.slice(s, r)), r < i && b(e = e.slice(r)), r < i && h(e));
                }
                c.push(n);
            }
            return g(c);
        }
        function x(e, t) {
            var r = 0, i = t.length > 0, a = e.length > 0, s = function(o, s, u, l, c) {
                var f, p, d, h = [], m = 0, g = "0", v = o && [], b = null != c, x = L, w = o || a && S.find.TAG("*", c && s.parentNode || s), T = I += null == x ? 1 : Math.random() || .1;
                for (b && (L = s !== _ && s, E = r); null != (f = w[g]); g++) {
                    if (a && f) {
                        for (p = 0; d = e[p++]; ) if (d(f, s, u)) {
                            l.push(f);
                            break;
                        }
                        b && (I = T, E = ++r);
                    }
                    i && ((f = !d && f) && m--, o && v.push(f));
                }
                if (m += g, i && g !== m) {
                    for (p = 0; d = t[p++]; ) d(v, h, s, u);
                    if (o) {
                        if (m > 0) for (;g--; ) v[g] || h[g] || (h[g] = Z.call(l));
                        h = y(h);
                    }
                    te.apply(l, h), b && !o && h.length > 0 && m + t.length > 1 && n.uniqueSort(l);
                }
                return b && (I = T, L = x), v;
            };
            return i ? o(s) : s;
        }
        function w(e, t, r) {
            for (var i = 0, o = t.length; i < o; i++) n(e, t[i], r);
            return r;
        }
        function T(e, t, n, r) {
            var i, o, a, s, u, l = d(e);
            if (!r && 1 === l.length) {
                if ((o = l[0] = l[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && k.getById && 9 === t.nodeType && O && S.relative[o[1].type]) {
                    if (!(t = (S.find.ID(a.matches[0].replace(Ne, ke), t) || [])[0])) return n;
                    e = e.slice(o.shift().value.length);
                }
                for (i = ve.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !S.relative[s = a.type]); ) if ((u = S.find[s]) && (r = u(a.matches[0].replace(Ne, ke), he.test(o[0].type) && t.parentNode || t))) {
                    if (o.splice(i, 1), !(e = r.length && h(o))) return te.apply(n, r), n;
                    break;
                }
            }
            return D(e, l)(r, t, !O, n, he.test(e)), n;
        }
        function C() {}
        var N, k, E, S, A, j, D, L, H, q, _, M, O, F, B, P, R, W = "sizzle" + -new Date(), $ = e.document, I = 0, z = 0, X = i(), U = i(), V = i(), Y = !1, J = function() {
            return 0;
        }, G = 1 << 31, Q = {}.hasOwnProperty, K = [], Z = K.pop, ee = K.push, te = K.push, ne = K.slice, re = K.indexOf || function(e) {
            for (var t = 0, n = this.length; t < n; t++) if (this[t] === e) return t;
            return -1;
        }, ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", oe = "[\\x20\\t\\r\\n\\f]", ae = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", se = ae.replace("w", "w#"), le = "\\[" + oe + "*(" + ae + ")" + oe + "*(?:([*^$|!~]?=)" + oe + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + se + ")|)|)" + oe + "*\\]", ce = ":(" + ae + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + le.replace(3, 8) + ")*)|.*)\\)|)", fe = new RegExp("^" + oe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + oe + "+$", "g"), pe = new RegExp("^" + oe + "*," + oe + "*"), de = new RegExp("^" + oe + "*([>+~]|" + oe + ")" + oe + "*"), he = new RegExp(oe + "*[+~]"), me = new RegExp("=" + oe + "*([^\\]'\"]*)" + oe + "*\\]", "g"), ge = new RegExp(ce), ye = new RegExp("^" + se + "$"), ve = {
            ID: new RegExp("^#(" + ae + ")"),
            CLASS: new RegExp("^\\.(" + ae + ")"),
            TAG: new RegExp("^(" + ae.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + le),
            PSEUDO: new RegExp("^" + ce),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + oe + "*(even|odd|(([+-]|)(\\d*)n|)" + oe + "*(?:([+-]|)" + oe + "*(\\d+)|))" + oe + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + ie + ")$", "i"),
            needsContext: new RegExp("^" + oe + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + oe + "*((?:-\\d)?\\d*)" + oe + "*\\)|)(?=[^-]|$)", "i")
        }, be = /^[^{]+\{\s*\[native \w/, xe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, we = /^(?:input|select|textarea|button)$/i, Te = /^h\d$/i, Ce = /'|\\/g, Ne = new RegExp("\\\\([\\da-f]{1,6}" + oe + "?|(" + oe + ")|.)", "ig"), ke = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
        };
        try {
            te.apply(K = ne.call($.childNodes), $.childNodes), K[$.childNodes.length].nodeType;
        } catch (e) {
            te = {
                apply: K.length ? function(e, t) {
                    ee.apply(e, ne.call(t));
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
                    e.length = n - 1;
                }
            };
        }
        j = n.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }, k = n.support = {}, q = n.setDocument = function(e) {
            var t = e ? e.ownerDocument || e : $, n = t.parentWindow;
            return t !== _ && 9 === t.nodeType && t.documentElement ? (_ = t, M = t.documentElement, 
            O = !j(t), n && n.frameElement && n.attachEvent("onbeforeunload", function() {
                q();
            }), k.attributes = a(function(e) {
                return e.innerHTML = "<a href='#'></a>", s("type|href|height|width", l, "#" === e.firstChild.getAttribute("href")), 
                s(ie, u, null == e.getAttribute("disabled")), e.className = "i", !e.getAttribute("className");
            }), k.input = a(function(e) {
                return e.innerHTML = "<input>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
            }), s("value", c, k.attributes && k.input), k.getElementsByTagName = a(function(e) {
                return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length;
            }), k.getElementsByClassName = a(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 
                2 === e.getElementsByClassName("i").length;
            }), k.getById = a(function(e) {
                return M.appendChild(e).id = W, !t.getElementsByName || !t.getElementsByName(W).length;
            }), k.getById ? (S.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [ n ] : [];
                }
            }, S.filter.ID = function(e) {
                var t = e.replace(Ne, ke);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }) : (delete S.find.ID, S.filter.ID = function(e) {
                var t = e.replace(Ne, ke);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }), S.find.TAG = k.getElementsByTagName ? function(e, t) {
                if (void 0 !== t.getElementsByTagName) return t.getElementsByTagName(e);
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;n = o[i++]; ) 1 === n.nodeType && r.push(n);
                    return r;
                }
                return o;
            }, S.find.CLASS = k.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && O) return t.getElementsByClassName(e);
            }, B = [], F = [], (k.qsa = r(t.querySelectorAll)) && (a(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || F.push("\\[" + oe + "*(?:value|" + ie + ")"), 
                e.querySelectorAll(":checked").length || F.push(":checked");
            }), a(function(e) {
                var n = t.createElement("input");
                n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && F.push("[*^$]=" + oe + "*(?:''|\"\")"), 
                e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
                F.push(",.*:");
            })), (k.matchesSelector = r(P = M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && a(function(e) {
                k.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), B.push("!=", ce);
            }), F = F.length && new RegExp(F.join("|")), B = B.length && new RegExp(B.join("|")), 
            R = r(M.contains) || M.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, k.sortDetached = a(function(e) {
                return 1 & e.compareDocumentPosition(t.createElement("div"));
            }), J = M.compareDocumentPosition ? function(e, n) {
                if (e === n) return Y = !0, 0;
                var r = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
                return r ? 1 & r || !k.sortDetached && n.compareDocumentPosition(e) === r ? e === t || R($, e) ? -1 : n === t || R($, n) ? 1 : H ? re.call(H, e) - re.call(H, n) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
            } : function(e, n) {
                var r, i = 0, o = e.parentNode, a = n.parentNode, s = [ e ], u = [ n ];
                if (e === n) return Y = !0, 0;
                if (!o || !a) return e === t ? -1 : n === t ? 1 : o ? -1 : a ? 1 : H ? re.call(H, e) - re.call(H, n) : 0;
                if (o === a) return f(e, n);
                for (r = e; r = r.parentNode; ) s.unshift(r);
                for (r = n; r = r.parentNode; ) u.unshift(r);
                for (;s[i] === u[i]; ) i++;
                return i ? f(s[i], u[i]) : s[i] === $ ? -1 : u[i] === $ ? 1 : 0;
            }, t) : _;
        }, n.matches = function(e, t) {
            return n(e, null, null, t);
        }, n.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== _ && q(e), t = t.replace(me, "='$1']"), k.matchesSelector && O && (!B || !B.test(t)) && (!F || !F.test(t))) try {
                var r = P.call(e, t);
                if (r || k.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
            } catch (e) {}
            return n(t, _, null, [ e ]).length > 0;
        }, n.contains = function(e, t) {
            return (e.ownerDocument || e) !== _ && q(e), R(e, t);
        }, n.attr = function(e, t) {
            (e.ownerDocument || e) !== _ && q(e);
            var n = S.attrHandle[t.toLowerCase()], r = n && Q.call(S.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 === r ? k.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null : r;
        }, n.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, n.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (Y = !k.detectDuplicates, H = !k.sortStable && e.slice(0), e.sort(J), Y) {
                for (;t = e[i++]; ) t === e[i] && (r = n.push(i));
                for (;r--; ) e.splice(n[r], 1);
            }
            return e;
        }, A = n.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += A(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else for (;t = e[r]; r++) n += A(t);
            return n;
        }, S = n.selectors = {
            cacheLength: 50,
            createPseudo: o,
            match: ve,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Ne, ke), e[3] = (e[4] || e[5] || "").replace(Ne, ke), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return ve.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && ge.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Ne, ke).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = X[e + " "];
                    return t || (t = new RegExp("(^|" + oe + ")" + e + "(" + oe + "|$)")) && X(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, t, r) {
                    return function(i) {
                        var o = n.attr(i, e);
                        return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.slice(-r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t && (o === r || o.slice(0, r.length + 1) === r + "-"));
                    };
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, u) {
                        var l, c, f, p, d, h, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s;
                        if (g) {
                            if (o) {
                                for (;m; ) {
                                    for (f = t; f = f[m]; ) if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                            }
                            if (h = [ a ? g.firstChild : g.lastChild ], a && v) {
                                for (d = (l = (c = g[W] || (g[W] = {}))[e] || [])[0] === I && l[1], p = l[0] === I && l[2], 
                                f = d && g.childNodes[d]; f = ++d && f && f[m] || (p = d = 0) || h.pop(); ) if (1 === f.nodeType && ++p && f === t) {
                                    c[e] = [ I, d, p ];
                                    break;
                                }
                            } else if (v && (l = (t[W] || (t[W] = {}))[e]) && l[0] === I) p = l[1]; else for (;(f = ++d && f && f[m] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++p || (v && ((f[W] || (f[W] = {}))[e] = [ I, p ]), 
                            f !== t)); ) ;
                            return (p -= i) === r || p % r == 0 && p / r >= 0;
                        }
                    };
                },
                PSEUDO: function(e, t) {
                    var r, i = S.pseudos[e] || S.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                    return i[W] ? i(t) : i.length > 1 ? (r = [ e, e, "", t ], S.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function(e, n) {
                        for (var r, o = i(e, t), a = o.length; a--; ) e[r = re.call(e, o[a])] = !(n[r] = o[a]);
                    }) : function(e) {
                        return i(e, 0, r);
                    }) : i;
                }
            },
            pseudos: {
                not: o(function(e) {
                    var t = [], n = [], r = D(e.replace(fe, "$1"));
                    return r[W] ? o(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop();
                    };
                }),
                has: o(function(e) {
                    return function(t) {
                        return n(e, t).length > 0;
                    };
                }),
                contains: o(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || A(t)).indexOf(e) > -1;
                    };
                }),
                lang: o(function(e) {
                    return ye.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(Ne, ke).toLowerCase(), 
                    function(t) {
                        var n;
                        do {
                            if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function(e) {
                    return e === M;
                },
                focus: function(e) {
                    return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: function(e) {
                    return !1 === e.disabled;
                },
                disabled: function(e) {
                    return !0 === e.disabled;
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !S.pseudos.empty(e);
                },
                header: function(e) {
                    return Te.test(e.nodeName);
                },
                input: function(e) {
                    return we.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
                },
                first: p(function() {
                    return [ 0 ];
                }),
                last: p(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: p(function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                }),
                even: p(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: p(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: p(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                    return e;
                }),
                gt: p(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                })
            }
        };
        for (N in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) S.pseudos[N] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }(N);
        for (N in {
            submit: !0,
            reset: !0
        }) S.pseudos[N] = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }(N);
        D = n.compile = function(e, t) {
            var n, r = [], i = [], o = V[e + " "];
            if (!o) {
                for (t || (t = d(e)), n = t.length; n--; ) (o = b(t[n]))[W] ? r.push(o) : i.push(o);
                o = V(e, x(i, r));
            }
            return o;
        }, S.pseudos.nth = S.pseudos.eq, C.prototype = S.filters = S.pseudos, S.setFilters = new C(), 
        k.sortStable = W.split("").sort(J).join("") === W, q(), [ 0, 0 ].sort(J), k.detectDuplicates = Y, 
        ue.find = n, ue.expr = n.selectors, ue.expr[":"] = ue.expr.pseudos, ue.unique = n.uniqueSort, 
        ue.text = n.getText, ue.isXMLDoc = n.isXML, ue.contains = n.contains;
    }(e);
    var be = {};
    ue.Callbacks = function(e) {
        var n, i, o, a, s, u, l = [], c = !(e = "string" == typeof e ? be[e] || r(e) : ue.extend({}, e)).once && [], f = function(t) {
            for (i = e.memory && t, o = !0, s = u || 0, u = 0, a = l.length, n = !0; l && s < a; s++) if (!1 === l[s].apply(t[0], t[1]) && e.stopOnFalse) {
                i = !1;
                break;
            }
            n = !1, l && (c ? c.length && f(c.shift()) : i ? l = [] : p.disable());
        }, p = {
            add: function() {
                if (l) {
                    var t = l.length;
                    !function t(n) {
                        ue.each(n, function(n, r) {
                            var i = ue.type(r);
                            "function" === i ? e.unique && p.has(r) || l.push(r) : r && r.length && "string" !== i && t(r);
                        });
                    }(arguments), n ? a = l.length : i && (u = t, f(i));
                }
                return this;
            },
            remove: function() {
                return l && ue.each(arguments, function(e, t) {
                    for (var r; (r = ue.inArray(t, l, r)) > -1; ) l.splice(r, 1), n && (r <= a && a--, 
                    r <= s && s--);
                }), this;
            },
            has: function(e) {
                return e ? ue.inArray(e, l) > -1 : !(!l || !l.length);
            },
            empty: function() {
                return l = [], a = 0, this;
            },
            disable: function() {
                return l = c = i = t, this;
            },
            disabled: function() {
                return !l;
            },
            lock: function() {
                return c = t, i || p.disable(), this;
            },
            locked: function() {
                return !c;
            },
            fireWith: function(e, t) {
                return t = t || [], t = [ e, t.slice ? t.slice() : t ], !l || o && !c || (n ? c.push(t) : f(t)), 
                this;
            },
            fire: function() {
                return p.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!o;
            }
        };
        return p;
    }, ue.extend({
        Deferred: function(e) {
            var t = [ [ "resolve", "done", ue.Callbacks("once memory"), "resolved" ], [ "reject", "fail", ue.Callbacks("once memory"), "rejected" ], [ "notify", "progress", ue.Callbacks("memory") ] ], n = "pending", r = {
                state: function() {
                    return n;
                },
                always: function() {
                    return i.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var e = arguments;
                    return ue.Deferred(function(n) {
                        ue.each(t, function(t, o) {
                            var a = o[0], s = ue.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && ue.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [ e ] : arguments);
                            });
                        }), e = null;
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? ue.extend(e, r) : r;
                }
            }, i = {};
            return r.pipe = r.then, ue.each(t, function(e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s;
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this;
                }, i[o[0] + "With"] = a.fireWith;
            }), r.promise(i), e && e.call(i, i), i;
        },
        when: function(e) {
            var t, n, r, i = 0, o = re.call(arguments), a = o.length, s = 1 !== a || e && ue.isFunction(e.promise) ? a : 0, u = 1 === s ? e : ue.Deferred(), l = function(e, n, r) {
                return function(i) {
                    n[e] = this, r[e] = arguments.length > 1 ? re.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r);
                };
            };
            if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++) o[i] && ue.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o), u.promise();
        }
    }), ue.support = function(t) {
        var n, r, i, o, a, s, u, l, c, f = J.createElement("div");
        if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        n = f.getElementsByTagName("*") || [], !(r = f.getElementsByTagName("a")[0]) || !r.style || !n.length) return t;
        s = (o = J.createElement("select")).appendChild(J.createElement("option")), i = f.getElementsByTagName("input")[0], 
        r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== f.className, 
        t.leadingWhitespace = 3 === f.firstChild.nodeType, t.tbody = !f.getElementsByTagName("tbody").length, 
        t.htmlSerialize = !!f.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), 
        t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), 
        t.cssFloat = !!r.style.cssFloat, t.checkOn = !!i.value, t.optSelected = s.selected, 
        t.enctype = !!J.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== J.createElement("nav").cloneNode(!0).outerHTML, 
        t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, 
        t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, i.checked = !0, 
        t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete f.test;
        } catch (e) {
            t.deleteExpando = !1;
        }
        (i = J.createElement("input")).setAttribute("value", ""), t.input = "" === i.getAttribute("value"), 
        i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, 
        i.setAttribute("checked", "t"), i.setAttribute("name", "t"), (a = J.createDocumentFragment()).appendChild(i), 
        t.appendChecked = i.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        f.attachEvent && (f.attachEvent("onclick", function() {
            t.noCloneEvent = !1;
        }), f.cloneNode(!0).click());
        for (c in {
            submit: !0,
            change: !0,
            focusin: !0
        }) f.setAttribute(u = "on" + c, "t"), t[c + "Bubbles"] = u in e || !1 === f.attributes[u].expando;
        f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", 
        t.clearCloneStyle = "content-box" === f.style.backgroundClip;
        for (c in ue(t)) break;
        return t.ownLast = "0" !== c, ue(function() {
            var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", a = J.getElementsByTagName("body")[0];
            a && ((n = J.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
            a.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
            (i = f.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none", 
            l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", 
            t.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", 
            ue.swap(a, null != a.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === f.offsetWidth;
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(f, null) || {}).top, 
            t.boxSizingReliable = "4px" === (e.getComputedStyle(f, null) || {
                width: "4px"
            }).width, (r = f.appendChild(J.createElement("div"))).style.cssText = f.style.cssText = o, 
            r.style.marginRight = r.style.width = "0", f.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), 
            typeof f.style.zoom !== V && (f.innerHTML = "", f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", 
            t.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", 
            f.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== f.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), 
            a.removeChild(n), n = f = i = r = null);
        }), n = o = a = s = r = i = null, t;
    }({});
    var xe = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, we = /([A-Z])/g;
    ue.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? ue.cache[e[ue.expando]] : e[ue.expando]) && !s(e);
        },
        data: function(e, t, n) {
            return i(e, t, n);
        },
        removeData: function(e, t) {
            return o(e, t);
        },
        _data: function(e, t, n) {
            return i(e, t, n, !0);
        },
        _removeData: function(e, t) {
            return o(e, t, !0);
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && ue.noData[e.nodeName.toLowerCase()];
            return !t || !0 !== t && e.getAttribute("classid") === t;
        }
    }), ue.fn.extend({
        data: function(e, n) {
            var r, i, o = null, s = 0, u = this[0];
            if (e === t) {
                if (this.length && (o = ue.data(u), 1 === u.nodeType && !ue._data(u, "parsedAttrs"))) {
                    for (r = u.attributes; s < r.length; s++) 0 === (i = r[s].name).indexOf("data-") && a(u, i = ue.camelCase(i.slice(5)), o[i]);
                    ue._data(u, "parsedAttrs", !0);
                }
                return o;
            }
            return "object" == typeof e ? this.each(function() {
                ue.data(this, e);
            }) : arguments.length > 1 ? this.each(function() {
                ue.data(this, e, n);
            }) : u ? a(u, e, ue.data(u, e)) : null;
        },
        removeData: function(e) {
            return this.each(function() {
                ue.removeData(this, e);
            });
        }
    }), ue.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = ue._data(e, t), n && (!r || ue.isArray(n) ? r = ue._data(e, t, ue.makeArray(n)) : r.push(n)), 
            r || [];
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ue.queue(e, t), r = n.length, i = n.shift(), o = ue._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), 
            delete o.stop, i.call(e, function() {
                ue.dequeue(e, t);
            }, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ue._data(e, n) || ue._data(e, n, {
                empty: ue.Callbacks("once memory").add(function() {
                    ue._removeData(e, t + "queue"), ue._removeData(e, n);
                })
            });
        }
    }), ue.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? ue.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = ue.queue(this, e, n);
                ue._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ue.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                ue.dequeue(this, e);
            });
        },
        delay: function(e, t) {
            return e = ue.fx ? ue.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r);
                };
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, n) {
            var r, i = 1, o = ue.Deferred(), a = this, s = this.length, u = function() {
                --i || o.resolveWith(a, [ a ]);
            };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--; ) (r = ue._data(a[s], e + "queueHooks")) && r.empty && (i++, 
            r.empty.add(u));
            return u(), o.promise(n);
        }
    });
    var Te, Ce, Ne = /[\t\r\n\f]/g, ke = /\r/g, Ee = /^(?:input|select|textarea|button|object)$/i, Se = /^(?:a|area)$/i, Ae = /^(?:checked|selected)$/i, je = ue.support.getSetAttribute, De = ue.support.input;
    ue.fn.extend({
        attr: function(e, t) {
            return ue.access(this, ue.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                ue.removeAttr(this, e);
            });
        },
        prop: function(e, t) {
            return ue.access(this, ue.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return e = ue.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e];
                } catch (e) {}
            });
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, u = "string" == typeof e && e;
            if (ue.isFunction(e)) return this.each(function(t) {
                ue(this).addClass(e.call(this, t, this.className));
            });
            if (u) for (t = (e || "").match(ce) || []; a < s; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ne, " ") : " ")) {
                for (o = 0; i = t[o++]; ) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                n.className = ue.trim(r);
            }
            return this;
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, u = 0 === arguments.length || "string" == typeof e && e;
            if (ue.isFunction(e)) return this.each(function(t) {
                ue(this).removeClass(e.call(this, t, this.className));
            });
            if (u) for (t = (e || "").match(ce) || []; a < s; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ne, " ") : "")) {
                for (o = 0; i = t[o++]; ) for (;r.indexOf(" " + i + " ") >= 0; ) r = r.replace(" " + i + " ", " ");
                n.className = e ? ue.trim(r) : "";
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = typeof e, r = "boolean" == typeof t;
            return ue.isFunction(e) ? this.each(function(n) {
                ue(this).toggleClass(e.call(this, n, this.className, t), t);
            }) : this.each(function() {
                if ("string" === n) for (var i, o = 0, a = ue(this), s = t, u = e.match(ce) || []; i = u[o++]; ) a[(s = r ? s : !a.hasClass(i)) ? "addClass" : "removeClass"](i); else n !== V && "boolean" !== n || (this.className && ue._data(this, "__className__", this.className), 
                this.className = this.className || !1 === e ? "" : ue._data(this, "__className__") || "");
            });
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ne, " ").indexOf(t) >= 0) return !0;
            return !1;
        },
        val: function(e) {
            var n, r, i, o = this[0];
            if (arguments.length) return i = ue.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (null == (o = i ? e.call(this, n, ue(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : ue.isArray(o) && (o = ue.map(o, function(e) {
                    return null == e ? "" : e + "";
                })), (r = ue.valHooks[this.type] || ue.valHooks[this.nodeName.toLowerCase()]) && "set" in r && r.set(this, o, "value") !== t || (this.value = o));
            });
            if (o) return (r = ue.valHooks[o.type] || ue.valHooks[o.nodeName.toLowerCase()]) && "get" in r && (n = r.get(o, "value")) !== t ? n : "string" == typeof (n = o.value) ? n.replace(ke, "") : null == n ? "" : n;
        }
    }), ue.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ue.find.attr(e, "value");
                    return null != t ? t : e.text;
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++) if (((n = r[u]).selected || u === i) && (ue.support.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ue.nodeName(n.parentNode, "optgroup"))) {
                        if (t = ue(n).val(), o) return t;
                        a.push(t);
                    }
                    return a;
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = ue.makeArray(t), a = i.length; a--; ) ((r = i[a]).selected = ue.inArray(ue(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        },
        attr: function(e, n, r) {
            var i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === V ? ue.prop(e, n, r) : (1 === a && ue.isXMLDoc(e) || (n = n.toLowerCase(), 
            i = ue.attrHooks[n] || (ue.expr.match.bool.test(n) ? Ce : Te)), r === t ? i && "get" in i && null !== (o = i.get(e, n)) ? o : null == (o = ue.find.attr(e, n)) ? t : o : null !== r ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), 
            r) : void ue.removeAttr(e, n));
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(ce);
            if (o && 1 === e.nodeType) for (;n = o[i++]; ) r = ue.propFix[n] || n, ue.expr.match.bool.test(n) ? De && je || !Ae.test(n) ? e[r] = !1 : e[ue.camelCase("default-" + n)] = e[r] = !1 : ue.attr(e, n, ""), 
            e.removeAttribute(je ? n : r);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ue.support.radioValue && "radio" === t && ue.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, n, r) {
            var i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return (1 !== a || !ue.isXMLDoc(e)) && (n = ue.propFix[n] || n, 
            o = ue.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ue.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ee.test(e.nodeName) || Se.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        }
    }), Ce = {
        set: function(e, t, n) {
            return !1 === t ? ue.removeAttr(e, n) : De && je || !Ae.test(n) ? e.setAttribute(!je && ue.propFix[n] || n, n) : e[ue.camelCase("default-" + n)] = e[n] = !0, 
            n;
        }
    }, ue.each(ue.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = ue.expr.attrHandle[n] || ue.find.attr;
        ue.expr.attrHandle[n] = De && je || !Ae.test(n) ? function(e, n, i) {
            var o = ue.expr.attrHandle[n], a = i ? t : (ue.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return ue.expr.attrHandle[n] = o, a;
        } : function(e, n, r) {
            return r ? t : e[ue.camelCase("default-" + n)] ? n.toLowerCase() : null;
        };
    }), De && je || (ue.attrHooks.value = {
        set: function(e, t, n) {
            if (!ue.nodeName(e, "input")) return Te && Te.set(e, t, n);
            e.defaultValue = t;
        }
    }), je || (Te = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", 
            "value" === r || n === e.getAttribute(r) ? n : t;
        }
    }, ue.expr.attrHandle.id = ue.expr.attrHandle.name = ue.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null;
    }, ue.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t;
        },
        set: Te.set
    }, ue.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Te.set(e, "" !== t && t, n);
        }
    }, ue.each([ "width", "height" ], function(e, t) {
        ue.attrHooks[t] = {
            set: function(e, n) {
                if ("" === n) return e.setAttribute(t, "auto"), n;
            }
        };
    })), ue.support.hrefNormalized || ue.each([ "href", "src" ], function(e, t) {
        ue.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4);
            }
        };
    }), ue.support.style || (ue.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t;
        },
        set: function(e, t) {
            return e.style.cssText = t + "";
        }
    }), ue.support.optSelected || (ue.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
        }
    }), ue.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        ue.propFix[this.toLowerCase()] = this;
    }), ue.support.enctype || (ue.propFix.enctype = "encoding"), ue.each([ "radio", "checkbox" ], function() {
        ue.valHooks[this] = {
            set: function(e, t) {
                if (ue.isArray(t)) return e.checked = ue.inArray(ue(e).val(), t) >= 0;
            }
        }, ue.support.checkOn || (ue.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    });
    var Le = /^(?:input|select|textarea)$/i, He = /^key/, qe = /^(?:mouse|contextmenu)|click/, _e = /^(?:focusinfocus|focusoutblur)$/, Me = /^([^.]*)(?:\.(.+)|)$/;
    ue.event = {
        global: {},
        add: function(e, n, r, i, o) {
            var a, s, u, l, c, f, p, d, h, m, g, y = ue._data(e);
            if (y) {
                for (r.handler && (r = (l = r).handler, o = l.selector), r.guid || (r.guid = ue.guid++), 
                (s = y.events) || (s = y.events = {}), (f = y.handle) || ((f = y.handle = function(e) {
                    return typeof ue === V || e && ue.event.triggered === e.type ? t : ue.event.dispatch.apply(f.elem, arguments);
                }).elem = e), u = (n = (n || "").match(ce) || [ "" ]).length; u--; ) h = g = (a = Me.exec(n[u]) || [])[1], 
                m = (a[2] || "").split(".").sort(), h && (c = ue.event.special[h] || {}, h = (o ? c.delegateType : c.bindType) || h, 
                c = ue.event.special[h] || {}, p = ue.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && ue.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, l), (d = s[h]) || ((d = s[h] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, m, f) || (e.addEventListener ? e.addEventListener(h, f, !1) : e.attachEvent && e.attachEvent("on" + h, f))), 
                c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), 
                ue.event.global[h] = !0);
                e = null;
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, m, g = ue.hasData(e) && ue._data(e);
            if (g && (c = g.events)) {
                for (l = (t = (t || "").match(ce) || [ "" ]).length; l--; ) if (s = Me.exec(t[l]) || [], 
                d = m = s[1], h = (s[2] || "").split(".").sort(), d) {
                    for (f = ue.event.special[d] || {}, p = c[d = (r ? f.delegateType : f.bindType) || d] || [], 
                    s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length; o--; ) a = p[o], 
                    !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), 
                    a.selector && p.delegateCount--, f.remove && f.remove.call(e, a));
                    u && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || ue.removeEvent(e, d, g.handle), 
                    delete c[d]);
                } else for (d in c) ue.event.remove(e, d + t[l], n, r, !0);
                ue.isEmptyObject(c) && (delete g.handle, ue._removeData(e, "events"));
            }
        },
        trigger: function(n, r, i, o) {
            var a, s, u, l, c, f, p, d = [ i || J ], h = ae.call(n, "type") ? n.type : n, m = ae.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || J, 3 !== i.nodeType && 8 !== i.nodeType && !_e.test(h + ue.event.triggered) && (h.indexOf(".") >= 0 && (h = (m = h.split(".")).shift(), 
            m.sort()), s = h.indexOf(":") < 0 && "on" + h, n = n[ue.expando] ? n : new ue.Event(h, "object" == typeof n && n), 
            n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            n.result = t, n.target || (n.target = i), r = null == r ? [ n ] : ue.makeArray(r, [ n ]), 
            c = ue.event.special[h] || {}, o || !c.trigger || !1 !== c.trigger.apply(i, r))) {
                if (!o && !c.noBubble && !ue.isWindow(i)) {
                    for (l = c.delegateType || h, _e.test(l + h) || (u = u.parentNode); u; u = u.parentNode) d.push(u), 
                    f = u;
                    f === (i.ownerDocument || J) && d.push(f.defaultView || f.parentWindow || e);
                }
                for (p = 0; (u = d[p++]) && !n.isPropagationStopped(); ) n.type = p > 1 ? l : c.bindType || h, 
                (a = (ue._data(u, "events") || {})[n.type] && ue._data(u, "handle")) && a.apply(u, r), 
                (a = s && u[s]) && ue.acceptData(u) && a.apply && !1 === a.apply(u, r) && n.preventDefault();
                if (n.type = h, !o && !n.isDefaultPrevented() && (!c._default || !1 === c._default.apply(d.pop(), r)) && ue.acceptData(i) && s && i[h] && !ue.isWindow(i)) {
                    (f = i[s]) && (i[s] = null), ue.event.triggered = h;
                    try {
                        i[h]();
                    } catch (e) {}
                    ue.event.triggered = t, f && (i[s] = f);
                }
                return n.result;
            }
        },
        dispatch: function(e) {
            e = ue.event.fix(e);
            var n, r, i, o, a, s = [], u = re.call(arguments), l = (ue._data(this, "events") || {})[e.type] || [], c = ue.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (s = ue.event.handlers.call(this, e, l), n = 0; (o = s[n++]) && !e.isPropagationStopped(); ) for (e.currentTarget = o.elem, 
                a = 0; (i = o.handlers[a++]) && !e.isImmediatePropagationStopped(); ) e.namespace_re && !e.namespace_re.test(i.namespace) || (e.handleObj = i, 
                e.data = i.data, (r = ((ue.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u)) !== t && !1 === (e.result = r) && (e.preventDefault(), 
                e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [], u = n.delegateCount, l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type)) for (;l != this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                for (o = [], a = 0; a < u; a++) o[r = (i = n[a]).selector + " "] === t && (o[r] = i.needsContext ? ue(r, this).index(l) >= 0 : ue.find(r, this, null, [ l ]).length), 
                o[r] && o.push(i);
                o.length && s.push({
                    elem: l,
                    handlers: o
                });
            }
            return u < n.length && s.push({
                elem: this,
                handlers: n.slice(u)
            }), s;
        },
        fix: function(e) {
            if (e[ue.expando]) return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = qe.test(i) ? this.mouseHooks : He.test(i) ? this.keyHooks : {}), 
            r = a.props ? this.props.concat(a.props) : this.props, e = new ue.Event(o), t = r.length; t--; ) e[n = r[t]] = o[n];
            return e.target || (e.target = o.srcElement || J), 3 === e.target.nodeType && (e.target = e.target.parentNode), 
            e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), 
                e;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, a = n.button, s = n.fromElement;
                return null == e.pageX && null != n.clientX && (o = (i = e.target.ownerDocument || J).documentElement, 
                r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), 
                e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), 
                !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), 
                e;
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== c() && this.focus) try {
                        return this.focus(), !1;
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === c() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (ue.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), 
                    !1;
                },
                _default: function(e) {
                    return ue.nodeName(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result);
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = ue.extend(new ue.Event(), n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? ue.event.trigger(i, null, t) : ue.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
        }
    }, ue.removeEvent = J.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === V && (e[r] = null), e.detachEvent(r, n));
    }, ue.Event = function(e, t) {
        if (!(this instanceof ue.Event)) return new ue.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? u : l) : this.type = e, 
        t && ue.extend(this, t), this.timeStamp = e && e.timeStamp || ue.now(), this[ue.expando] = !0;
    }, ue.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = u, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = u, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = u, this.stopPropagation();
        }
    }, ue.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        ue.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || ue.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), 
                e.type = t), n;
            }
        };
    }), ue.support.submitBubbles || (ue.event.special.submit = {
        setup: function() {
            if (ue.nodeName(this, "form")) return !1;
            ue.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target, r = ue.nodeName(n, "input") || ue.nodeName(n, "button") ? n.form : t;
                r && !ue._data(r, "submitBubbles") && (ue.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0;
                }), ue._data(r, "submitBubbles", !0));
            });
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ue.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown: function() {
            if (ue.nodeName(this, "form")) return !1;
            ue.event.remove(this, "._submit");
        }
    }), ue.support.changeBubbles || (ue.event.special.change = {
        setup: function() {
            if (Le.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (ue.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
            }), ue.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ue.event.simulate("change", this, e, !0);
            })), !1;
            ue.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Le.test(t.nodeName) && !ue._data(t, "changeBubbles") && (ue.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ue.event.simulate("change", this.parentNode, e, !0);
                }), ue._data(t, "changeBubbles", !0));
            });
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments);
        },
        teardown: function() {
            return ue.event.remove(this, "._change"), !Le.test(this.nodeName);
        }
    }), ue.support.focusinBubbles || ue.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0, r = function(e) {
            ue.event.simulate(t, e.target, ue.event.fix(e), !0);
        };
        ue.event.special[t] = {
            setup: function() {
                0 == n++ && J.addEventListener(e, r, !0);
            },
            teardown: function() {
                0 == --n && J.removeEventListener(e, r, !0);
            }
        };
    }), ue.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this;
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, 
            r = t) : (i = r, r = n, n = t)), !1 === i) i = l; else if (!i) return this;
            return 1 === o && (s = i, (i = function(e) {
                return ue().off(e), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = ue.guid++)), this.each(function() {
                ue.event.add(this, e, i, r, n);
            });
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1);
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ue(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), 
            this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this;
            }
            return !1 !== n && "function" != typeof n || (r = n, n = t), !1 === r && (r = l), 
            this.each(function() {
                ue.event.remove(this, e, r, n);
            });
        },
        trigger: function(e, t) {
            return this.each(function() {
                ue.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return ue.event.trigger(e, t, n, !0);
        }
    });
    var Oe = /^.[^:#\[\.,]*$/, Fe = /^(?:parents|prev(?:Until|All))/, Be = ue.expr.match.needsContext, Pe = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ue.fn.extend({
        find: function(e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e) return this.pushStack(ue(e).filter(function() {
                for (t = 0; t < i; t++) if (ue.contains(r[t], this)) return !0;
            }));
            for (t = 0; t < i; t++) ue.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? ue.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, 
            n;
        },
        has: function(e) {
            var t, n = ue(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++) if (ue.contains(this, n[t])) return !0;
            });
        },
        not: function(e) {
            return this.pushStack(p(this, e || [], !0));
        },
        filter: function(e) {
            return this.pushStack(p(this, e || [], !1));
        },
        is: function(e) {
            return !!p(this, "string" == typeof e && Be.test(e) ? ue(e) : e || [], !1).length;
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = Be.test(e) || "string" != typeof e ? ue(e, t || this.context) : 0; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ue.find.matchesSelector(n, e))) {
                n = o.push(n);
                break;
            }
            return this.pushStack(o.length > 1 ? ue.unique(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? ue.inArray(this[0], ue(e)) : ue.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            var n = "string" == typeof e ? ue(e, t) : ue.makeArray(e && e.nodeType ? [ e ] : e), r = ue.merge(this.get(), n);
            return this.pushStack(ue.unique(r));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), ue.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return ue.dir(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return ue.dir(e, "parentNode", n);
        },
        next: function(e) {
            return f(e, "nextSibling");
        },
        prev: function(e) {
            return f(e, "previousSibling");
        },
        nextAll: function(e) {
            return ue.dir(e, "nextSibling");
        },
        prevAll: function(e) {
            return ue.dir(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return ue.dir(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return ue.dir(e, "previousSibling", n);
        },
        siblings: function(e) {
            return ue.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return ue.sibling(e.firstChild);
        },
        contents: function(e) {
            return ue.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ue.merge([], e.childNodes);
        }
    }, function(e, t) {
        ue.fn[e] = function(n, r) {
            var i = ue.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ue.filter(r, i)), 
            this.length > 1 && (Pe[e] || (i = ue.unique(i)), Fe.test(e) && (i = i.reverse())), 
            this.pushStack(i);
        };
    }), ue.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ue.find.matchesSelector(r, e) ? [ r ] : [] : ue.find.matches(e, ue.grep(t, function(e) {
                return 1 === e.nodeType;
            }));
        },
        dir: function(e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ue(o).is(r)); ) 1 === o.nodeType && i.push(o), 
            o = o[n];
            return i;
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        }
    });
    var Re = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", We = / jQuery\d+="(?:null|\d+)"/g, $e = new RegExp("<(?:" + Re + ")[\\s/>]", "i"), Ie = /^\s+/, ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Xe = /<([\w:]+)/, Ue = /<tbody/i, Ve = /<|&#?\w+;/, Ye = /<(?:script|style|link)/i, Je = /^(?:checkbox|radio)$/i, Ge = /checked\s*(?:[^=]|=\s*.checked.)/i, Qe = /^$|\/(?:java|ecma)script/i, Ke = /^true\/(.*)/, Ze = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, et = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: ue.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, tt = d(J).appendChild(J.createElement("div"));
    et.optgroup = et.option, et.tbody = et.tfoot = et.colgroup = et.caption = et.thead, 
    et.th = et.td, ue.fn.extend({
        text: function(e) {
            return ue.access(this, function(e) {
                return e === t ? ue.text(this) : this.empty().append((this[0] && this[0].ownerDocument || J).createTextNode(e));
            }, null, e, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || h(this, e).appendChild(e);
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        remove: function(e, t) {
            for (var n, r = e ? ue.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ue.cleanData(x(n)), 
            n.parentNode && (t && ue.contains(n.ownerDocument, n) && y(x(n, "script")), n.parentNode.removeChild(n));
            return this;
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ue.cleanData(x(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
                e.options && ue.nodeName(e, "select") && (e.options.length = 0);
            }
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return ue.clone(this, e, t);
            });
        },
        html: function(e) {
            return ue.access(this, function(e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(We, "") : t;
                if ("string" == typeof e && !Ye.test(e) && (ue.support.htmlSerialize || !$e.test(e)) && (ue.support.leadingWhitespace || !Ie.test(e)) && !et[(Xe.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = e.replace(ze, "<$1></$2>");
                    try {
                        for (;r < i; r++) 1 === (n = this[r] || {}).nodeType && (ue.cleanData(x(n, !1)), 
                        n.innerHTML = e);
                        n = 0;
                    } catch (e) {}
                }
                n && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var e = ue.map(this, function(e) {
                return [ e.nextSibling, e.parentNode ];
            }), t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++], i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), ue(this).remove(), i.insertBefore(n, r));
            }, !0), t ? this : this.remove();
        },
        detach: function(e) {
            return this.remove(e, !0);
        },
        domManip: function(e, t, n) {
            e = te.apply([], e);
            var r, i, o, a, s, u, l = 0, c = this.length, f = this, p = c - 1, d = e[0], h = ue.isFunction(d);
            if (h || !(c <= 1 || "string" != typeof d || ue.support.checkClone) && Ge.test(d)) return this.each(function(r) {
                var i = f.eq(r);
                h && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n);
            });
            if (c && (u = ue.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = u.firstChild, 
            1 === u.childNodes.length && (u = r), r)) {
                for (o = (a = ue.map(x(u, "script"), m)).length; l < c; l++) i = u, l !== p && (i = ue.clone(i, !0, !0), 
                o && ue.merge(a, x(i, "script"))), t.call(this[l], i, l);
                if (o) for (s = a[a.length - 1].ownerDocument, ue.map(a, g), l = 0; l < o; l++) i = a[l], 
                Qe.test(i.type || "") && !ue._data(i, "globalEval") && ue.contains(s, i) && (i.src ? ue._evalUrl(i.src) : ue.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ze, "")));
                u = r = null;
            }
            return this;
        }
    }), ue.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ue.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = ue(e), a = o.length - 1; r <= a; r++) n = r === a ? this : this.clone(!0), 
            ue(o[r])[t](n), ne.apply(i, n.get());
            return this.pushStack(i);
        };
    }), ue.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, u = ue.contains(e.ownerDocument, e);
            if (ue.support.html5Clone || ue.isXMLDoc(e) || !$e.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (tt.innerHTML = e.outerHTML, 
            tt.removeChild(o = tt.firstChild)), !(ue.support.noCloneEvent && ue.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ue.isXMLDoc(e))) for (r = x(o), 
            s = x(e), a = 0; null != (i = s[a]); ++a) r[a] && b(i, r[a]);
            if (t) if (n) for (s = s || x(e), r = r || x(o), a = 0; null != (i = s[a]); a++) v(i, r[a]); else v(e, o);
            return (r = x(o, "script")).length > 0 && y(r, !u && x(e, "script")), r = s = i = null, 
            o;
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, l, c, f = e.length, p = d(t), h = [], m = 0; m < f; m++) if ((o = e[m]) || 0 === o) if ("object" === ue.type(o)) ue.merge(h, o.nodeType ? [ o ] : o); else if (Ve.test(o)) {
                for (s = s || p.appendChild(t.createElement("div")), u = (Xe.exec(o) || [ "", "" ])[1].toLowerCase(), 
                c = et[u] || et._default, s.innerHTML = c[1] + o.replace(ze, "<$1></$2>") + c[2], 
                i = c[0]; i--; ) s = s.lastChild;
                if (!ue.support.leadingWhitespace && Ie.test(o) && h.push(t.createTextNode(Ie.exec(o)[0])), 
                !ue.support.tbody) for (i = (o = "table" !== u || Ue.test(o) ? "<table>" !== c[1] || Ue.test(o) ? 0 : s : s.firstChild) && o.childNodes.length; i--; ) ue.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (ue.merge(h, s.childNodes), s.textContent = ""; s.firstChild; ) s.removeChild(s.firstChild);
                s = p.lastChild;
            } else h.push(t.createTextNode(o));
            for (s && p.removeChild(s), ue.support.appendChecked || ue.grep(x(h, "input"), w), 
            m = 0; o = h[m++]; ) if ((!r || -1 === ue.inArray(o, r)) && (a = ue.contains(o.ownerDocument, o), 
            s = x(p.appendChild(o), "script"), a && y(s), n)) for (i = 0; o = s[i++]; ) Qe.test(o.type || "") && n.push(o);
            return s = null, p;
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = ue.expando, u = ue.cache, l = ue.support.deleteExpando, c = ue.event.special; null != (n = e[a]); a++) if ((t || ue.acceptData(n)) && (i = n[s], 
            o = i && u[i])) {
                if (o.events) for (r in o.events) c[r] ? ue.event.remove(n, r) : ue.removeEvent(n, r, o.handle);
                u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== V ? n.removeAttribute(s) : n[s] = null, 
                ee.push(i));
            }
        },
        _evalUrl: function(e) {
            return ue.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            });
        }
    }), ue.fn.extend({
        wrapAll: function(e) {
            if (ue.isFunction(e)) return this.each(function(t) {
                ue(this).wrapAll(e.call(this, t));
            });
            if (this[0]) {
                var t = ue(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
                    return e;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(e) {
            return ue.isFunction(e) ? this.each(function(t) {
                ue(this).wrapInner(e.call(this, t));
            }) : this.each(function() {
                var t = ue(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = ue.isFunction(e);
            return this.each(function(n) {
                ue(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                ue.nodeName(this, "body") || ue(this).replaceWith(this.childNodes);
            }).end();
        }
    });
    var nt, rt, it, ot = /alpha\([^)]*\)/i, at = /opacity\s*=\s*([^)]*)/, st = /^(top|right|bottom|left)$/, ut = /^(none|table(?!-c[ea]).+)/, lt = /^margin/, ct = new RegExp("^(" + le + ")(.*)$", "i"), ft = new RegExp("^(" + le + ")(?!px)[a-z%]+$", "i"), pt = new RegExp("^([+-])=(" + le + ")", "i"), dt = {
        BODY: "block"
    }, ht = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, mt = {
        letterSpacing: 0,
        fontWeight: 400
    }, gt = [ "Top", "Right", "Bottom", "Left" ], yt = [ "Webkit", "O", "Moz", "ms" ];
    ue.fn.extend({
        css: function(e, n) {
            return ue.access(this, function(e, n, r) {
                var i, o, a = {}, s = 0;
                if (ue.isArray(n)) {
                    for (o = rt(e), i = n.length; s < i; s++) a[n[s]] = ue.css(e, n[s], !1, o);
                    return a;
                }
                return r !== t ? ue.style(e, n, r) : ue.css(e, n);
            }, e, n, arguments.length > 1);
        },
        show: function() {
            return N(this, !0);
        },
        hide: function() {
            return N(this);
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : C(this)) ? ue(this).show() : ue(this).hide();
            });
        }
    }), ue.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = it(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: ue.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = ue.camelCase(n), l = e.style;
                if (n = ue.cssProps[u] || (ue.cssProps[u] = T(l, u)), s = ue.cssHooks[n] || ue.cssHooks[u], 
                r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                if (!("string" == (a = typeof r) && (o = pt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ue.css(e, n)), 
                a = "number"), null == r || "number" === a && isNaN(r) || ("number" !== a || ue.cssNumber[u] || (r += "px"), 
                ue.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), 
                s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    l[n] = r;
                } catch (e) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, u = ue.camelCase(n);
            return n = ue.cssProps[u] || (ue.cssProps[u] = T(e.style, u)), (s = ue.cssHooks[n] || ue.cssHooks[u]) && "get" in s && (a = s.get(e, !0, r)), 
            a === t && (a = it(e, n, i)), "normal" === a && n in mt && (a = mt[n]), "" === r || r ? (o = parseFloat(a), 
            !0 === r || ue.isNumeric(o) ? o || 0 : a) : a;
        }
    }), e.getComputedStyle ? (rt = function(t) {
        return e.getComputedStyle(t, null);
    }, it = function(e, n, r) {
        var i, o, a, s = r || rt(e), u = s ? s.getPropertyValue(n) || s[n] : t, l = e.style;
        return s && ("" !== u || ue.contains(e.ownerDocument, e) || (u = ue.style(e, n)), 
        ft.test(u) && lt.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, 
        u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u;
    }) : J.documentElement.currentStyle && (rt = function(e) {
        return e.currentStyle;
    }, it = function(e, n, r) {
        var i, o, a, s = r || rt(e), u = s ? s[n] : t, l = e.style;
        return null == u && l && l[n] && (u = l[n]), ft.test(u) && !st.test(n) && (i = l.left, 
        (a = (o = e.runtimeStyle) && o.left) && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, 
        u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u;
    }), ue.each([ "height", "width" ], function(e, t) {
        ue.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return 0 === e.offsetWidth && ut.test(ue.css(e, "display")) ? ue.swap(e, ht, function() {
                    return S(e, t, r);
                }) : S(e, t, r);
            },
            set: function(e, n, r) {
                var i = r && rt(e);
                return k(0, n, r ? E(e, t, r, ue.support.boxSizing && "border-box" === ue.css(e, "boxSizing", !1, i), i) : 0);
            }
        };
    }), ue.support.opacity || (ue.cssHooks.opacity = {
        get: function(e, t) {
            return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
        },
        set: function(e, t) {
            var n = e.style, r = e.currentStyle, i = ue.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ue.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), 
            "" === t || r && !r.filter) || (n.filter = ot.test(o) ? o.replace(ot, i) : o + " " + i);
        }
    }), ue(function() {
        ue.support.reliableMarginRight || (ue.cssHooks.marginRight = {
            get: function(e, t) {
                if (t) return ue.swap(e, {
                    display: "inline-block"
                }, it, [ e, "marginRight" ]);
            }
        }), !ue.support.pixelPosition && ue.fn.position && ue.each([ "top", "left" ], function(e, t) {
            ue.cssHooks[t] = {
                get: function(e, n) {
                    if (n) return n = it(e, t), ft.test(n) ? ue(e).position()[t] + "px" : n;
                }
            };
        });
    }), ue.expr && ue.expr.filters && (ue.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ue.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ue.css(e, "display"));
    }, ue.expr.filters.visible = function(e) {
        return !ue.expr.filters.hidden(e);
    }), ue.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ue.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; r < 4; r++) i[e + gt[r] + t] = o[r] || o[r - 2] || o[0];
                return i;
            }
        }, lt.test(e) || (ue.cssHooks[e + t].set = k);
    });
    var vt = /%20/g, bt = /\[\]$/, xt = /\r?\n/g, wt = /^(?:submit|button|image|reset|file)$/i, Tt = /^(?:input|select|textarea|keygen)/i;
    ue.fn.extend({
        serialize: function() {
            return ue.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ue.prop(this, "elements");
                return e ? ue.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !ue(this).is(":disabled") && Tt.test(this.nodeName) && !wt.test(e) && (this.checked || !Je.test(e));
            }).map(function(e, t) {
                var n = ue(this).val();
                return null == n ? null : ue.isArray(n) ? ue.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(xt, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(xt, "\r\n")
                };
            }).get();
        }
    }), ue.param = function(e, n) {
        var r, i = [], o = function(e, t) {
            t = ue.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        if (n === t && (n = ue.ajaxSettings && ue.ajaxSettings.traditional), ue.isArray(e) || e.jquery && !ue.isPlainObject(e)) ue.each(e, function() {
            o(this.name, this.value);
        }); else for (r in e) D(r, e[r], n, o);
        return i.join("&").replace(vt, "+");
    }, ue.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ue.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), ue.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    });
    var Ct, Nt, kt = ue.now(), Et = /\?/, St = /#.*$/, At = /([?&])_=[^&]*/, jt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Dt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Lt = /^(?:GET|HEAD)$/, Ht = /^\/\//, qt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, _t = ue.fn.load, Mt = {}, Ot = {}, Ft = "*/".concat("*");
    try {
        Nt = Y.href;
    } catch (e) {
        (Nt = J.createElement("a")).href = "", Nt = Nt.href;
    }
    Ct = qt.exec(Nt.toLowerCase()) || [], ue.fn.load = function(e, n, r) {
        if ("string" != typeof e && _t) return _t.apply(this, arguments);
        var i, o, a, s = this, u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), ue.isFunction(n) ? (r = n, 
        n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ue.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments, s.html(i ? ue("<div>").append(ue.parseHTML(e)).find(i) : e);
        }).complete(r && function(e, t) {
            s.each(r, o || [ e.responseText, t, e ]);
        }), this;
    }, ue.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        ue.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), ue.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Nt,
            type: "GET",
            isLocal: Dt.test(Ct[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ft,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ue.parseJSON,
                "text xml": ue.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? q(q(e, ue.ajaxSettings), t) : q(ue.ajaxSettings, e);
        },
        ajaxPrefilter: L(Mt),
        ajaxTransport: L(Ot),
        ajax: function(e, n) {
            function r(e, n, r, i) {
                var o, f, v, b, w, C = n;
                2 !== x && (x = 2, u && clearTimeout(u), c = t, s = i || "", T.readyState = e > 0 ? 4 : 0, 
                o = e >= 200 && e < 300 || 304 === e, r && (b = _(p, T, r)), b = M(p, b, T, o), 
                o ? (p.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (ue.lastModified[a] = w), 
                (w = T.getResponseHeader("etag")) && (ue.etag[a] = w)), 204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, 
                f = b.data, o = !(v = b.error))) : (v = C, !e && C || (C = "error", e < 0 && (e = 0))), 
                T.status = e, T.statusText = (n || C) + "", o ? m.resolveWith(d, [ f, C, T ]) : m.rejectWith(d, [ T, C, v ]), 
                T.statusCode(y), y = t, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [ T, p, o ? f : v ]), 
                g.fireWith(d, [ T, C ]), l && (h.trigger("ajaxComplete", [ T, p ]), --ue.active || ue.event.trigger("ajaxStop")));
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, u, l, c, f, p = ue.ajaxSetup({}, n), d = p.context || p, h = p.context && (d.nodeType || d.jquery) ? ue(d) : ue.event, m = ue.Deferred(), g = ue.Callbacks("once memory"), y = p.statusCode || {}, v = {}, b = {}, x = 0, w = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!f) for (f = {}; t = jt.exec(s); ) f[t[1].toLowerCase()] = t[2];
                        t = f[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? s : null;
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = b[n] = b[n] || e, v[e] = t), this;
                },
                overrideMimeType: function(e) {
                    return x || (p.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (x < 2) for (t in e) y[t] = [ y[t], e[t] ]; else T.always(e[T.status]);
                    return this;
                },
                abort: function(e) {
                    var t = e || w;
                    return c && c.abort(t), r(0, t), this;
                }
            };
            if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || Nt) + "").replace(St, "").replace(Ht, Ct[1] + "//"), 
            p.type = n.method || n.type || p.method || p.type, p.dataTypes = ue.trim(p.dataType || "*").toLowerCase().match(ce) || [ "" ], 
            null == p.crossDomain && (i = qt.exec(p.url.toLowerCase()), p.crossDomain = !(!i || i[1] === Ct[1] && i[2] === Ct[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Ct[3] || ("http:" === Ct[1] ? "80" : "443")))), 
            p.data && p.processData && "string" != typeof p.data && (p.data = ue.param(p.data, p.traditional)), 
            H(Mt, p, n, T), 2 === x) return T;
            (l = p.global) && 0 == ue.active++ && ue.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), 
            p.hasContent = !Lt.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (Et.test(a) ? "&" : "?") + p.data, 
            delete p.data), !1 === p.cache && (p.url = At.test(a) ? a.replace(At, "$1_=" + kt++) : a + (Et.test(a) ? "&" : "?") + "_=" + kt++)), 
            p.ifModified && (ue.lastModified[a] && T.setRequestHeader("If-Modified-Since", ue.lastModified[a]), 
            ue.etag[a] && T.setRequestHeader("If-None-Match", ue.etag[a])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), 
            T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : p.accepts["*"]);
            for (o in p.headers) T.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (!1 === p.beforeSend.call(d, T, p) || 2 === x)) return T.abort();
            w = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            }) T[o](p[o]);
            if (c = H(Ot, p, n, T)) {
                T.readyState = 1, l && h.trigger("ajaxSend", [ T, p ]), p.async && p.timeout > 0 && (u = setTimeout(function() {
                    T.abort("timeout");
                }, p.timeout));
                try {
                    x = 1, c.send(v, r);
                } catch (e) {
                    if (!(x < 2)) throw e;
                    r(-1, e);
                }
            } else r(-1, "No Transport");
            return T;
        },
        getJSON: function(e, t, n) {
            return ue.get(e, t, n, "json");
        },
        getScript: function(e, n) {
            return ue.get(e, t, n, "script");
        }
    }), ue.each([ "get", "post" ], function(e, n) {
        ue[n] = function(e, r, i, o) {
            return ue.isFunction(r) && (o = o || i, i = r, r = t), ue.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            });
        };
    }), ue.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ue.globalEval(e), e;
            }
        }
    }), ue.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
    }), ue.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = J.head || ue("head")[0] || J.documentElement;
            return {
                send: function(t, i) {
                    (n = J.createElement("script")).async = !0, e.scriptCharset && (n.charset = e.scriptCharset), 
                    n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, 
                        n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"));
                    }, r.insertBefore(n, r.firstChild);
                },
                abort: function() {
                    n && n.onload(t, !0);
                }
            };
        }
    });
    var Bt = [], Pt = /(=)\?(?=&|$)|\?\?/;
    ue.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Bt.pop() || ue.expando + "_" + kt++;
            return this[e] = !0, e;
        }
    }), ue.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, u = !1 !== n.jsonp && (Pt.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Pt.test(n.data) && "data");
        if (u || "jsonp" === n.dataTypes[0]) return o = n.jsonpCallback = ue.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, 
        u ? n[u] = n[u].replace(Pt, "$1" + o) : !1 !== n.jsonp && (n.url += (Et.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), 
        n.converters["script json"] = function() {
            return s || ue.error(o + " was not called"), s[0];
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments;
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Bt.push(o)), s && ue.isFunction(a) && a(s[0]), 
            s = a = t;
        }), "script";
    });
    var Rt, Wt, $t = 0, It = e.ActiveXObject && function() {
        var e;
        for (e in Rt) Rt[e](t, !0);
    };
    ue.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && O() || F();
    } : O, Wt = ue.ajaxSettings.xhr(), ue.support.cors = !!Wt && "withCredentials" in Wt, 
    (Wt = ue.support.ajax = !!Wt) && ue.ajaxTransport(function(n) {
        if (!n.crossDomain || ue.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), 
                    n.xhrFields) for (s in n.xhrFields) u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) u.setRequestHeader(s, i[s]);
                    } catch (e) {}
                    u.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, l, c, f;
                        try {
                            if (r && (i || 4 === u.readyState)) if (r = t, a && (u.onreadystatechange = ue.noop, 
                            It && delete Rt[a]), i) 4 !== u.readyState && u.abort(); else {
                                f = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (f.text = u.responseText);
                                try {
                                    c = u.statusText;
                                } catch (e) {
                                    c = "";
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404;
                            }
                        } catch (e) {
                            i || o(-1, e);
                        }
                        f && o(s, c, f, l);
                    }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++$t, It && (Rt || (Rt = {}, 
                    ue(e).unload(It)), Rt[a] = r), u.onreadystatechange = r) : r();
                },
                abort: function() {
                    r && r(t, !0);
                }
            };
        }
    });
    var zt, Xt, Ut = /^(?:toggle|show|hide)$/, Vt = new RegExp("^(?:([+-])=|)(" + le + ")([a-z%]*)$", "i"), Yt = /queueHooks$/, Jt = [ function(e, t, n) {
        var r, i, o, a, s, u, l = this, c = {}, f = e.style, p = e.nodeType && C(e), d = ue._data(e, "fxshow");
        n.queue || (null == (s = ue._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, u = s.empty.fire, 
        s.empty.fire = function() {
            s.unqueued || u();
        }), s.unqueued++, l.always(function() {
            l.always(function() {
                s.unqueued--, ue.queue(e, "fx").length || s.empty.fire();
            });
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [ f.overflow, f.overflowX, f.overflowY ], 
        "inline" === ue.css(e, "display") && "none" === ue.css(e, "float") && (ue.support.inlineBlockNeedsLayout && "inline" !== A(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), 
        n.overflow && (f.overflow = "hidden", ue.support.shrinkWrapBlocks || l.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2];
        }));
        for (r in t) if (i = t[r], Ut.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) continue;
            c[r] = d && d[r] || ue.style(e, r);
        }
        if (!ue.isEmptyObject(c)) {
            d ? "hidden" in d && (p = d.hidden) : d = ue._data(e, "fxshow", {}), o && (d.hidden = !p), 
            p ? ue(e).show() : l.done(function() {
                ue(e).hide();
            }), l.done(function() {
                var t;
                ue._removeData(e, "fxshow");
                for (t in c) ue.style(e, t, c[t]);
            });
            for (r in c) a = P(p ? d[r] : 0, r, l), r in d || (d[r] = a.start, p && (a.end = a.start, 
            a.start = "width" === r || "height" === r ? 1 : 0));
        }
    } ], Gt = {
        "*": [ function(e, t) {
            var n = this.createTween(e, t), r = n.cur(), i = Vt.exec(t), o = i && i[3] || (ue.cssNumber[e] ? "" : "px"), a = (ue.cssNumber[e] || "px" !== o && +r) && Vt.exec(ue.css(n.elem, e)), s = 1, u = 20;
            if (a && a[3] !== o) {
                o = o || a[3], i = i || [], a = +r || 1;
                do {
                    a /= s = s || ".5", ue.style(n.elem, e, a + o);
                } while (s !== (s = n.cur() / r) && 1 !== s && --u);
            }
            return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), 
            n;
        } ]
    };
    ue.Animation = ue.extend(R, {
        tweener: function(e, t) {
            ue.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], Gt[n] = Gt[n] || [], Gt[n].unshift(t);
        },
        prefilter: function(e, t) {
            t ? Jt.unshift(e) : Jt.push(e);
        }
    }), ue.Tween = $, $.prototype = {
        constructor: $,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), 
            this.end = r, this.unit = o || (ue.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = $.propHooks[this.prop];
            return e && e.get ? e.get(this) : $.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = $.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ue.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : $.propHooks._default.set(this), this;
        }
    }, $.prototype.init.prototype = $.prototype, $.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ue.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop];
            },
            set: function(e) {
                ue.fx.step[e.prop] ? ue.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ue.cssProps[e.prop]] || ue.cssHooks[e.prop]) ? ue.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
            }
        }
    }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, ue.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = ue.fn[t];
        ue.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, r, i);
        };
    }), ue.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(C).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(e, t, n, r) {
            var i = ue.isEmptyObject(e), o = ue.speed(t, n, r), a = function() {
                var t = R(this, ue.extend({}, e), o);
                (i || ue._data(this, "finish")) && t.stop(!0);
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r);
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && !1 !== e && this.queue(e || "fx", []), 
            this.each(function() {
                var t = !0, n = null != e && e + "queueHooks", o = ue.timers, a = ue._data(this);
                if (n) a[n] && a[n].stop && i(a[n]); else for (n in a) a[n] && a[n].stop && Yt.test(n) && i(a[n]);
                for (n = o.length; n--; ) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), 
                t = !1, o.splice(n, 1));
                !t && r || ue.dequeue(this, e);
            });
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = ue._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = ue.timers, a = r ? r.length : 0;
                for (n.finish = !0, ue.queue(this, e, []), i && i.stop && i.stop.call(this, !0), 
                t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
                o.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
            });
        }
    }), ue.each({
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        ue.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), ue.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? ue.extend({}, e) : {
            complete: n || !n && t || ue.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ue.isFunction(t) && t
        };
        return r.duration = ue.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ue.fx.speeds ? ue.fx.speeds[r.duration] : ue.fx.speeds._default, 
        null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            ue.isFunction(r.old) && r.old.call(this), r.queue && ue.dequeue(this, r.queue);
        }, r;
    }, ue.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }
    }, ue.timers = [], ue.fx = $.prototype.init, ue.fx.tick = function() {
        var e, n = ue.timers, r = 0;
        for (zt = ue.now(); r < n.length; r++) (e = n[r])() || n[r] !== e || n.splice(r--, 1);
        n.length || ue.fx.stop(), zt = t;
    }, ue.fx.timer = function(e) {
        e() && ue.timers.push(e) && ue.fx.start();
    }, ue.fx.interval = 13, ue.fx.start = function() {
        Xt || (Xt = setInterval(ue.fx.tick, ue.fx.interval));
    }, ue.fx.stop = function() {
        clearInterval(Xt), Xt = null;
    }, ue.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ue.fx.step = {}, ue.expr && ue.expr.filters && (ue.expr.filters.animated = function(e) {
        return ue.grep(ue.timers, function(t) {
            return e === t.elem;
        }).length;
    }), ue.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            ue.offset.setOffset(this, e, t);
        });
        var n, r, i = {
            top: 0,
            left: 0
        }, o = this[0], a = o && o.ownerDocument;
        if (a) return n = a.documentElement, ue.contains(n, o) ? (typeof o.getBoundingClientRect !== V && (i = o.getBoundingClientRect()), 
        r = z(a), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i;
    }, ue.offset = {
        setOffset: function(e, t, n) {
            var r = ue.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = ue(e), s = a.offset(), u = ue.css(e, "top"), l = ue.css(e, "left"), c = {}, f = {};
            ("absolute" === r || "fixed" === r) && ue.inArray("auto", [ u, l ]) > -1 ? (i = (f = a.position()).top, 
            o = f.left) : (i = parseFloat(u) || 0, o = parseFloat(l) || 0), ue.isFunction(t) && (t = t.call(e, n, s)), 
            null != t.top && (c.top = t.top - s.top + i), null != t.left && (c.left = t.left - s.left + o), 
            "using" in t ? t.using.call(e, c) : a.css(c);
        }
    }, ue.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
                return "fixed" === ue.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), ue.nodeName(e[0], "html") || (n = e.offset()), n.top += ue.css(e[0], "borderTopWidth", !0), 
                n.left += ue.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ue.css(r, "marginTop", !0),
                    left: t.left - n.left - ue.css(r, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || G; e && !ue.nodeName(e, "html") && "static" === ue.css(e, "position"); ) e = e.offsetParent;
                return e || G;
            });
        }
    }), ue.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        ue.fn[e] = function(i) {
            return ue.access(this, function(e, i, o) {
                var a = z(e);
                if (o === t) return a ? n in a ? a[n] : a.document.documentElement[i] : e[i];
                a ? a.scrollTo(r ? ue(a).scrollLeft() : o, r ? o : ue(a).scrollTop()) : e[i] = o;
            }, e, i, arguments.length, null);
        };
    }), ue.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        ue.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            ue.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i), s = r || (!0 === i || !0 === o ? "margin" : "border");
                return ue.access(this, function(n, r, i) {
                    var o;
                    return ue.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, 
                    Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ue.css(n, r, s) : ue.style(n, r, i, s);
                }, n, a ? i : t, a, null);
            };
        });
    }), ue.fn.size = function() {
        return this.length;
    }, ue.fn.andSelf = ue.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ue : (e.jQuery = e.$ = ue, 
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return ue;
    }));
}(window);