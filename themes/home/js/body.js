            (function(g, h, c, j, e, l, k) {/*! Jssor */
                new (function() {
                });
                var f = {kc: function(a) {
                        return-c.cos(a * c.PI) / 2 + .5
                    }, Qd: function(a) {
                        return a
                    }, le: function(a) {
                        return a * a
                    }, ke: function(a) {
                        return-a * (a - 2)
                    }, he: function(a) {
                        return(a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
                    }, me: function(a) {
                        return(a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
                    }, ne: function(a) {
                        return(a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
                    }, pe: function(a) {
                        return 1 - c.cos(c.PI / 2 * a)
                    }, ve: function(a) {
                        return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * c.pow(2, 10 * (a - 1)) : 1 / 2 * (-c.pow(2, -10 * --a) + 2)
                    }, Ce: function(a) {
                        return 1 - c.cos(a * c.PI * 2)
                    }}, d = {ue: f.kc, l: f.Qd, o: f.le, sd: f.he, Vd: f.me, z: f.ne, ud: f.pe, vd: f.ve, Ed: f.Ce};
                var b = new function() {
                    var d = this, Ab = /\S+/g, F = 1, yb = 2, fb = 3, eb = 4, jb = 5, G, r = 0, i = 0, s = 0, X = 0, z = 0, I = navigator, ob = I.appName, o = I.userAgent, p = parseFloat;
                    function Ib() {
                        if (!G) {
                            G = {lf: "ontouchstart"in g || "createTouch"in h};
                            var a;
                            if (I.pointerEnabled || (a = I.msPointerEnabled))
                                G.id = a ? "msTouchAction" : "touchAction"
                        }
                        return G
                    }
                    function v(j) {
                        if (!r) {
                            r = -1;
                            if (ob == "Microsoft Internet Explorer" && !!g.attachEvent && !!g.ActiveXObject) {
                                var e = o.indexOf("MSIE");
                                r = F;
                                s = p(o.substring(e + 5, o.indexOf(";", e)));/*@cc_on X=@_jscript_version@*/
                                ;
                                i = h.documentMode || s
                            } else if (ob == "Netscape" && !!g.addEventListener) {
                                var d = o.indexOf("Firefox"), b = o.indexOf("Safari"), f = o.indexOf("Chrome"), c = o.indexOf("AppleWebKit");
                                if (d >= 0) {
                                    r = yb;
                                    i = p(o.substring(d + 8))
                                } else if (b >= 0) {
                                    var k = o.substring(0, b).lastIndexOf("/");
                                    r = f >= 0 ? eb : fb;
                                    i = p(o.substring(k + 1, b))
                                } else {
                                    var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);
                                    if (a) {
                                        r = F;
                                        i = s = p(a[1])
                                    }
                                }
                                if (c >= 0)
                                    z = p(o.substring(c + 12))
                            } else {
                                var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o);
                                if (a) {
                                    r = jb;
                                    i = p(a[2])
                                }
                            }
                        }
                        return j == r
                    }
                    function q() {
                        return v(F)
                    }
                    function Q() {
                        return q() && (i < 6 || h.compatMode == "BackCompat")
                    }
                    function db() {
                        return v(fb)
                    }
                    function ib() {
                        return v(jb)
                    }
                    function vb() {
                        return db() && z > 534 && z < 535
                    }
                    function J() {
                        v();
                        return z > 537 || i > 42 || r == F && i >= 11
                    }
                    function O() {
                        return q() && i < 9
                    }
                    function wb(a) {
                        var b, c;
                        return function(f) {
                            if (!b) {
                                b = e;
                                var d = a.substr(0, 1).toUpperCase() + a.substr(1);
                                n([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function(g, e) {
                                    var b = a;
                                    if (e)
                                        b = g + d;
                                    if (f.style[b] != k)
                                        return c = b
                                })
                            }
                            return c
                        }
                    }
                    function ub(b) {
                        var a;
                        return function(c) {
                            a = a || wb(b)(c) || b;
                            return a
                        }
                    }
                    var K = ub("transform");
                    function nb(a) {
                        return{}.toString.call(a)
                    }
                    var kb = {};
                    n(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(a) {
                        kb["[object " + a + "]"] = a.toLowerCase()
                    });
                    function n(b, d) {
                        var a, c;
                        if (nb(b) == "[object Array]") {
                            for (a = 0; a < b.length; a++)
                                if (c = d(b[a], a, b))
                                    return c
                        } else
                            for (a in b)
                                if (c = d(b[a], a, b))
                                    return c
                    }
                    function C(a) {
                        return a == j ? String(a) : kb[nb(a)] || "object"
                    }
                    function lb(a) {
                        for (var b in a)
                            return e
                    }
                    function A(a) {
                        try {
                            return C(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
                        } catch (b) {
                        }
                    }
                    function u(a, b) {
                        return{x: a, y: b}
                    }
                    function rb(b, a) {
                        setTimeout(b, a || 0)
                    }
                    function H(b, d, c) {
                        var a = !b || b == "inherit" ? "" : b;
                        n(d, function(c) {
                            var b = c.exec(a);
                            if (b) {
                                var d = a.substr(0, b.index), e = a.substr(b.index + b[0].length + 1, a.length - 1);
                                a = d + e
                            }
                        });
                        a = c + (!a.indexOf(" ") ? "" : " ") + a;
                        return a
                    }
                    function tb(b, a) {
                        if (i < 9)
                            b.style.filter = a
                    }
                    d.ff = Ib;
                    d.Dd = q;
                    d.nf = db;
                    d.Md = ib;
                    d.xf = J;
                    d.Db = O;
                    wb("transform");
                    d.Pd = function() {
                        return i
                    };
                    d.wf = function() {
                        v();
                        return z
                    };
                    d.R = rb;
                    function Y(a) {
                        a.constructor === Y.caller && a.Kd && a.Kd.apply(a, Y.caller.arguments)
                    }
                    d.Kd = Y;
                    d.zb = function(a) {
                        if (d.tf(a))
                            a = h.getElementById(a);
                        return a
                    };
                    function t(a) {
                        return a || g.event
                    }
                    d.Od = t;
                    d.pc = function(b) {
                        b = t(b);
                        var a = b.target || b.srcElement || h;
                        if (a.nodeType == 3)
                            a = d.Rd(a);
                        return a
                    };
                    d.gd = function(a) {
                        a = t(a);
                        return{x: a.pageX || a.clientX || 0, y: a.pageY || a.clientY || 0}
                    };
                    function D(c, d, a) {
                        if (a !== k)
                            c.style[d] = a == k ? "" : a;
                        else {
                            var b = c.currentStyle || c.style;
                            a = b[d];
                            if (a == "" && g.getComputedStyle) {
                                b = c.ownerDocument.defaultView.getComputedStyle(c, j);
                                b && (a = b.getPropertyValue(d) || b[d])
                            }
                            return a
                        }
                    }
                    function ab(b, c, a, d) {
                        if (a !== k) {
                            if (a == j)
                                a = "";
                            else
                                d && (a += "px");
                            D(b, c, a)
                        } else
                            return p(D(b, c))
                    }
                    function m(c, a) {
                        var d = a ? ab : D, b;
                        if (a & 4)
                            b = ub(c);
                        return function(e, f) {
                            return d(e, b ? b(e) : c, f, a & 2)
                        }
                    }
                    function Db(b) {
                        if (q() && s < 9) {
                            var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                            return a ? p(a[1]) / 100 : 1
                        } else
                            return p(b.style.opacity || "1")
                    }
                    function Fb(b, a, f) {
                        if (q() && s < 9) {
                            var h = b.style.filter || "", i = new RegExp(/[\s]*alpha\([^\)]*\)/g), e = c.round(100 * a), d = "";
                            if (e < 100 || f)
                                d = "alpha(opacity=" + e + ") ";
                            var g = H(h, [i], d);
                            tb(b, g)
                        } else
                            b.style.opacity = a == 1 ? "" : c.round(a * 100) / 100
                    }
                    var L = {f: ["rotate"], eb: ["rotateX"], Y: ["rotateY"], Ub: ["skewX"], Tb: ["skewY"]};
                    if (!J())
                        L = B(L, {K: ["scaleX", 2], J: ["scaleY", 2], hb: ["translateZ", 1]});
                    function M(d, a) {
                        var c = "";
                        if (a) {
                            if (q() && i && i < 10) {
                                delete a.eb;
                                delete a.Y;
                                delete a.hb
                            }
                            b.m(a, function(d, b) {
                                var a = L[b];
                                if (a) {
                                    var e = a[1] || 0;
                                    if (N[b] != d)
                                        c += " " + a[0] + "(" + d + (["deg", "px", ""])[e] + ")"
                                }
                            });
                            if (J()) {
                                if (a.xb || a.vb || a.hb)
                                    c += " translate3d(" + (a.xb || 0) + "px," + (a.vb || 0) + "px," + (a.hb || 0) + "px)";
                                if (a.K == k)
                                    a.K = 1;
                                if (a.J == k)
                                    a.J = 1;
                                if (a.K != 1 || a.J != 1)
                                    c += " scale3d(" + a.K + ", " + a.J + ", 1)"
                            }
                        }
                        d.style[K(d)] = c
                    }
                    d.Nc = m("transformOrigin", 4);
                    d.Gf = m("backfaceVisibility", 4);
                    d.Kf = m("transformStyle", 4);
                    d.Lf = m("perspective", 6);
                    d.Mf = m("perspectiveOrigin", 4);
                    d.Hf = function(a, b) {
                        if (q() && s < 9 || s < 10 && Q())
                            a.style.zoom = b == 1 ? "" : b;
                        else {
                            var c = K(a), f = "scale(" + b + ")", e = a.style[c], g = new RegExp(/[\s]*scale\(.*?\)/g), d = H(e, [g], f);
                            a.style[c] = d
                        }
                    };
                    d.lc = function(b, a) {
                        return function(c) {
                            c = t(c);
                            var f = c.type, e = c.relatedTarget || (f == "mouseout" ? c.toElement : c.fromElement);
                            (!e || e !== a && !d.Cf(a, e)) && b(c)
                        }
                    };
                    d.k = function(a, e, b, c) {
                        a = d.zb(a);
                        if (a.addEventListener) {
                            e == "mousewheel" && a.addEventListener("DOMMouseScroll", b, c);
                            a.addEventListener(e, b, c)
                        } else if (a.attachEvent) {
                            a.attachEvent("on" + e, b);
                            c && a.setCapture && a.setCapture()
                        }
                    };
                    d.U = function(a, c, e, b) {
                        a = d.zb(a);
                        if (a.removeEventListener) {
                            c == "mousewheel" && a.removeEventListener("DOMMouseScroll", e, b);
                            a.removeEventListener(c, e, b)
                        } else if (a.detachEvent) {
                            a.detachEvent("on" + c, e);
                            b && a.releaseCapture && a.releaseCapture()
                        }
                    };
                    d.Pb = function(a) {
                        a = t(a);
                        a.preventDefault && a.preventDefault();
                        a.cancel = e;
                        a.returnValue = l
                    };
                    d.af = function(a) {
                        a = t(a);
                        a.stopPropagation && a.stopPropagation();
                        a.cancelBubble = e
                    };
                    d.qb = function(d, c) {
                        var a = [].slice.call(arguments, 2), b = function() {
                            var b = a.concat([].slice.call(arguments, 0));
                            return c.apply(d, b)
                        };
                        return b
                    };
                    d.cf = function(a, b) {
                        if (b == k)
                            return a.textContent || a.innerText;
                        var c = h.createTextNode(b);
                        d.jc(a);
                        a.appendChild(c)
                    };
                    d.Vb = function(d, c) {
                        for (var b = [], a = d.firstChild; a; a = a.nextSibling)
                            (c || a.nodeType == 1) && b.push(a);
                        return b
                    };
                    function mb(a, c, e, b) {
                        b = b || "u";
                        for (a = a?a.firstChild:j; a; a = a.nextSibling)
                            if (a.nodeType == 1) {
                                if (U(a, b) == c)
                                    return a;
                                if (!e) {
                                    var d = mb(a, c, e, b);
                                    if (d)
                                        return d
                                }
                            }
                    }
                    d.M = mb;
                    function S(a, d, f, b) {
                        b = b || "u";
                        var c = [];
                        for (a = a?a.firstChild:j; a; a = a.nextSibling)
                            if (a.nodeType == 1) {
                                U(a, b) == d && c.push(a);
                                if (!f) {
                                    var e = S(a, d, f, b);
                                    if (e.length)
                                        c = c.concat(e)
                                }
                            }
                        return c
                    }
                    function gb(a, c, d) {
                        for (a = a?a.firstChild:j; a; a = a.nextSibling)
                            if (a.nodeType == 1) {
                                if (a.tagName == c)
                                    return a;
                                if (!d) {
                                    var b = gb(a, c, d);
                                    if (b)
                                        return b
                                }
                            }
                    }
                    d.gf = gb;
                    function xb(a, c, e) {
                        var b = [];
                        for (a = a?a.firstChild:j; a; a = a.nextSibling)
                            if (a.nodeType == 1) {
                                (!c || a.tagName == c) && b.push(a);
                                if (!e) {
                                    var d = xb(a, c, e);
                                    if (d.length)
                                        b = b.concat(d)
                                }
                            }
                        return b
                    }
                    d.ef = xb;
                    d.Ye = function(b, a) {
                        return b.getElementsByTagName(a)
                    };
                    function B() {
                        var e = arguments, d, c, b, a, g = 1 & e[0], f = 1 + g;
                        d = e[f - 1] || {};
                        for (; f < e.length; f++)
                            if (c = e[f])
                                for (b in c) {
                                    a = c[b];
                                    if (a !== k) {
                                        a = c[b];
                                        var h = d[b];
                                        d[b] = g && (A(h) || A(a)) ? B(g, {}, h, a) : a
                                    }
                                }
                        return d
                    }
                    d.X = B;
                    function Z(f, g) {
                        var d = {}, c, a, b;
                        for (c in f) {
                            a = f[c];
                            b = g[c];
                            if (a !== b) {
                                var e;
                                if (A(a) && A(b)) {
                                    a = Z(a, b);
                                    e = !lb(a)
                                }
                                !e && (d[c] = a)
                            }
                        }
                        return d
                    }
                    d.cd = function(a) {
                        return C(a) == "function"
                    };
                    d.tf = function(a) {
                        return C(a) == "string"
                    };
                    d.ed = function(a) {
                        return!isNaN(p(a)) && isFinite(a)
                    };
                    d.m = n;
                    d.Ee = A;
                    function R(a) {
                        return h.createElement(a)
                    }
                    d.Qb = function() {
                        return R("DIV")
                    };
                    d.Pe = function() {
                        return R("SPAN")
                    };
                    d.Wc = function() {
                    };
                    function V(b, c, a) {
                        if (a == k)
                            return b.getAttribute(c);
                        b.setAttribute(c, a)
                    }
                    function U(a, b) {
                        return V(a, b) || V(a, "data-" + b)
                    }
                    d.ob = V;
                    d.s = U;
                    function x(b, a) {
                        if (a == k)
                            return b.className;
                        b.className = a
                    }
                    d.Uc = x;
                    function qb(b) {
                        var a = {};
                        n(b, function(b) {
                            if (b != k)
                                a[b] = b
                        });
                        return a
                    }
                    function sb(b, a) {
                        return b.match(a || Ab)
                    }
                    function P(b, a) {
                        return qb(sb(b || "", a))
                    }
                    d.Le = sb;
                    function bb(b, c) {
                        var a = "";
                        n(c, function(c) {
                            a && (a += b);
                            a += c
                        });
                        return a
                    }
                    function E(a, c, b) {
                        x(a, bb(" ", B(Z(P(x(a)), P(c)), P(b))))
                    }
                    d.Rd = function(a) {
                        return a.parentNode
                    };
                    d.V = function(a) {
                        d.mb(a, "none")
                    };
                    d.P = function(a, b) {
                        d.mb(a, b ? "none" : "")
                    };
                    d.If = function(b, a) {
                        b.removeAttribute(a)
                    };
                    d.Bf = function() {
                        return q() && i < 10
                    };
                    d.Af = function(d, a) {
                        if (a)
                            d.style.clip = "rect(" + c.round(a.g || a.G || 0) + "px " + c.round(a.B) + "px " + c.round(a.D) + "px " + c.round(a.c || a.F || 0) + "px)";
                        else if (a !== k) {
                            var g = d.style.cssText, f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)], e = H(g, f, "");
                            b.Rb(d, e)
                        }
                    };
                    d.ib = function() {
                        return+new Date
                    };
                    d.Q = function(b, a) {
                        b.appendChild(a)
                    };
                    d.cc = function(b, a, c) {
                        (c || a.parentNode).insertBefore(b, a)
                    };
                    d.bc = function(b, a) {
                        a = a || b.parentNode;
                        a && a.removeChild(b)
                    };
                    d.Ud = function(a, b) {
                        n(a, function(a) {
                            d.bc(a, b)
                        })
                    };
                    d.jc = function(a) {
                        d.Ud(d.Vb(a, e), a)
                    };
                    d.Xd = function(a, b) {
                        var c = d.Rd(a);
                        b & 1 && d.T(a, (d.A(c) - d.A(a)) / 2);
                        b & 2 && d.S(a, (d.E(c) - d.E(a)) / 2)
                    };
                    d.Yd = function(b, a) {
                        return parseInt(b, a || 10)
                    };
                    d.Zd = p;
                    d.Cf = function(b, a) {
                        var c = h.body;
                        while (a && b !== a && c !== a)
                            try {
                                a = a.parentNode
                            } catch (d) {
                                return l
                            }
                        return b === a
                    };
                    function W(e, c, b) {
                        var a = e.cloneNode(!c);
                        !b && d.If(a, "id");
                        return a
                    }
                    d.ab = W;
                    d.yb = function(f, g) {
                        var a = new Image;
                        function b(f, e) {
                            d.U(a, "load", b);
                            d.U(a, "abort", c);
                            d.U(a, "error", c);
                            g && g(a, e)
                        }
                        function c(a) {
                            b(a, e)
                        }
                        if (ib() && i < 11.6 || !f)
                            b(!f);
                        else {
                            d.k(a, "load", b);
                            d.k(a, "abort", c);
                            d.k(a, "error", c);
                            a.src = f
                        }
                    };
                    d.Sd = function(e, a, f) {
                        var c = e.length + 1;
                        function b(b) {
                            c--;
                            if (a && b && b.src == a.src)
                                a = b;
                            !c && f && f(a)
                        }
                        n(e, function(a) {
                            d.yb(a.src, b)
                        });
                        b()
                    };
                    d.Ie = function(a, g, i, h) {
                        if (h)
                            a = W(a);
                        var c = S(a, g);
                        if (!c.length)
                            c = b.Ye(a, g);
                        for (var f = c.length - 1; f > -1; f--) {
                            var d = c[f], e = W(i);
                            x(e, x(d));
                            b.Rb(e, d.style.cssText);
                            b.cc(e, d);
                            b.bc(d)
                        }
                        return a
                    };
                    function Gb(a) {
                        var l = this, p = "", r = ["av", "pv", "ds", "dn"], f = [], q, j = 0, g = 0, e = 0;
                        function i() {
                            E(a, q, f[e || j || g & 2 || g]);
                            b.Z(a, "pointer-events", e ? "none" : "")
                        }
                        function c() {
                            j = 0;
                            i();
                            d.U(h, "mouseup", c);
                            d.U(h, "touchend", c);
                            d.U(h, "touchcancel", c)
                        }
                        function o(a) {
                            if (e)
                                d.Pb(a);
                            else {
                                j = 4;
                                i();
                                d.k(h, "mouseup", c);
                                d.k(h, "touchend", c);
                                d.k(h, "touchcancel", c)
                            }
                        }
                        l.de = function(a) {
                            if (a === k)
                                return g;
                            g = a & 2 || a & 1;
                            i()
                        };
                        l.Fc = function(a) {
                            if (a === k)
                                return!e;
                            e = a ? 0 : 3;
                            i()
                        };
                        l.pb = a = d.zb(a);
                        var m = b.Le(x(a));
                        if (m)
                            p = m.shift();
                        n(r, function(a) {
                            f.push(p + a)
                        });
                        q = bb(" ", f);
                        f.unshift("");
                        d.k(a, "mousedown", o);
                        d.k(a, "touchstart", o)
                    }
                    d.be = function(a) {
                        return new Gb(a)
                    };
                    d.Z = D;
                    d.Bb = m("overflow");
                    d.S = m("top", 2);
                    d.T = m("left", 2);
                    d.A = m("width", 2);
                    d.E = m("height", 2);
                    d.Zc = m("marginLeft", 2);
                    d.fd = m("marginTop", 2);
                    d.I = m("position");
                    d.mb = m("display");
                    d.O = m("zIndex", 1);
                    d.Gb = function(b, a, c) {
                        if (a != k)
                            Fb(b, a, c);
                        else
                            return Db(b)
                    };
                    d.Rb = function(a, b) {
                        if (b != k)
                            a.style.cssText = b;
                        else
                            return a.style.cssText
                    };
                    var T = {a: d.Gb, g: d.S, c: d.T, cb: d.A, bb: d.E, Hb: d.I, Uf: d.mb, v: d.O};
                    function w(g, l) {
                        var f = O(), b = J(), e = vb(), h = K(g);
                        function i(b, d, a) {
                            var e = b.tb(u(-d / 2, -a / 2)), f = b.tb(u(d / 2, -a / 2)), g = b.tb(u(d / 2, a / 2)), h = b.tb(u(-d / 2, a / 2));
                            b.tb(u(300, 300));
                            return u(c.min(e.x, f.x, g.x, h.x) + d / 2, c.min(e.y, f.y, g.y, h.y) + a / 2)
                        }
                        function a(e, a) {
                            a = a || {};
                            var n = a.hb || 0, p = (a.eb || 0) % 360, q = (a.Y || 0) % 360, u = (a.f || 0) % 360, l = a.K, m = a.J, g = a.Vf;
                            if (l == k)
                                l = 1;
                            if (m == k)
                                m = 1;
                            if (g == k)
                                g = 1;
                            if (f) {
                                n = 0;
                                p = 0;
                                q = 0;
                                g = 0
                            }
                            var c = new Cb(a.xb, a.vb, n);
                            c.eb(p);
                            c.Y(q);
                            c.Td(u);
                            c.ce(a.Ub, a.Tb);
                            c.Qc(l, m, g);
                            if (b) {
                                c.wb(a.F, a.G);
                                e.style[h] = c.je()
                            } else if (!X || X < 9) {
                                var o = "", j = {x: 0, y: 0};
                                if (a.fb)
                                    j = i(c, a.fb, a.sb);
                                d.fd(e, j.y);
                                d.Zc(e, j.x);
                                o = c.De();
                                var s = e.style.filter, t = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g), r = H(s, [t], o);
                                tb(e, r)
                            }
                        }
                        w = function(f, c) {
                            c = c || {};
                            var h = c.F, i = c.G, g;
                            n(T, function(a, b) {
                                g = c[b];
                                g !== k && a(f, g)
                            });
                            d.Af(f, c.j);
                            if (!b) {
                                h != k && d.T(f, (c.Oc || 0) + h);
                                i != k && d.S(f, (c.Yc || 0) + i)
                            }
                            if (c.ze)
                                if (e)
                                    rb(d.qb(j, M, f, c));
                                else
                                    a(f, c)
                        };
                        d.Fb = M;
                        if (e)
                            d.Fb = w;
                        if (f)
                            d.Fb = a;
                        else if (!b)
                            a = M;
                        d.L = w;
                        w(g, l)
                    }
                    d.Fb = w;
                    d.L = w;
                    function Cb(i, k, o) {
                        var d = this, b = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, i || 0, k || 0, o || 0, 1], h = c.sin, g = c.cos, l = c.tan;
                        function f(a) {
                            return a * c.PI / 180
                        }
                        function n(a, b) {
                            return{x: a, y: b}
                        }
                        function m(c, e, l, m, o, r, t, u, w, z, A, C, E, b, f, k, a, g, i, n, p, q, s, v, x, y, B, D, F, d, h, j) {
                            return[c * a + e * p + l * x + m * F, c * g + e * q + l * y + m * d, c * i + e * s + l * B + m * h, c * n + e * v + l * D + m * j, o * a + r * p + t * x + u * F, o * g + r * q + t * y + u * d, o * i + r * s + t * B + u * h, o * n + r * v + t * D + u * j, w * a + z * p + A * x + C * F, w * g + z * q + A * y + C * d, w * i + z * s + A * B + C * h, w * n + z * v + A * D + C * j, E * a + b * p + f * x + k * F, E * g + b * q + f * y + k * d, E * i + b * s + f * B + k * h, E * n + b * v + f * D + k * j]
                        }
                        function e(c, a) {
                            return m.apply(j, (a || b).concat(c))
                        }
                        d.Qc = function(a, c, d) {
                            if (a != 1 || c != 1 || d != 1)
                                b = e([a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1])
                        };
                        d.wb = function(a, c, d) {
                            b[12] += a || 0;
                            b[13] += c || 0;
                            b[14] += d || 0
                        };
                        d.eb = function(c) {
                            if (c) {
                                a = f(c);
                                var d = g(a), i = h(a);
                                b = e([1, 0, 0, 0, 0, d, i, 0, 0, -i, d, 0, 0, 0, 0, 1])
                            }
                        };
                        d.Y = function(c) {
                            if (c) {
                                a = f(c);
                                var d = g(a), i = h(a);
                                b = e([d, 0, -i, 0, 0, 1, 0, 0, i, 0, d, 0, 0, 0, 0, 1])
                            }
                        };
                        d.Td = function(c) {
                            if (c) {
                                a = f(c);
                                var d = g(a), i = h(a);
                                b = e([d, i, 0, 0, -i, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                            }
                        };
                        d.ce = function(a, c) {
                            if (a || c) {
                                i = f(a);
                                k = f(c);
                                b = e([1, l(k), 0, 0, l(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                            }
                        };
                        d.tb = function(c) {
                            var a = e(b, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c.x, c.y, 0, 1]);
                            return n(a[12], a[13])
                        };
                        d.je = function() {
                            return"matrix3d(" + b.join(",") + ")"
                        };
                        d.De = function() {
                            return"progid:DXImageTransform.Microsoft.Matrix(M11=" + b[0] + ", M12=" + b[4] + ", M21=" + b[1] + ", M22=" + b[5] + ", SizingMethod='auto expand')"
                        }
                    }
                    new function() {
                        var a = this;
                        function b(d, g) {
                            for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)
                                for (var k = f[c] = [], b = 0; b < h; b++) {
                                    for (var e = 0, a = 0; a < j; a++)
                                        e += d[c][a] * g[a][b];
                                    k[b] = e
                                }
                            return f
                        }
                        a.K = function(b, c) {
                            return a.Ec(b, c, 0)
                        };
                        a.J = function(b, c) {
                            return a.Ec(b, 0, c)
                        };
                        a.Ec = function(a, c, d) {
                            return b(a, [[c, 0], [0, d]])
                        };
                        a.tb = function(d, c) {
                            var a = b(d, [[c.x], [c.y]]);
                            return u(a[0][0], a[1][0])
                        }
                    };
                    var N = {Oc: 0, Yc: 0, F: 0, G: 0, n: 1, K: 1, J: 1, f: 0, eb: 0, Y: 0, xb: 0, vb: 0, hb: 0, Ub: 0, Tb: 0};
                    d.Gc = function(a) {
                        var c = a || {};
                        if (a)
                            if (b.cd(a))
                                c = {zc: c};
                            else if (b.cd(a.j))
                                c.j = {zc: a.j};
                        return c
                    };
                    d.Jc = function(l, m, x, q, z, A, n) {
                        var a = m;
                        if (l) {
                            a = {};
                            for (var g in m) {
                                var B = A[g] || 1, w = z[g] || [0, 1], d = (x - w[0]) / w[1];
                                d = c.min(c.max(d, 0), 1);
                                d = d * B;
                                var u = c.floor(d);
                                if (d != u)
                                    d -= u;
                                var h = q.zc || f.kc, i, C = l[g], o = m[g];
                                if (b.ed(o)) {
                                    h = q[g] || h;
                                    var y = h(d);
                                    i = C + o * y
                                } else {
                                    i = b.X({Mb: {}}, l[g]);
                                    var v = q[g] || {};
                                    b.m(o.Mb || o, function(e, a) {
                                        h = v[a] || v.zc || h;
                                        var c = h(d), b = e * c;
                                        i.Mb[a] = b;
                                        i[a] += b
                                    })
                                }
                                a[g] = i
                            }
                            var t = b.m(m, function(b, a) {
                                return N[a] != k
                            });
                            t && b.m(N, function(c, b) {
                                if (a[b] == k && l[b] !== k)
                                    a[b] = l[b]
                            });
                            if (t) {
                                if (a.n)
                                    a.K = a.J = a.n;
                                a.fb = n.fb;
                                a.sb = n.sb;
                                a.ze = e
                            }
                        }
                        if (m.j && n.wb) {
                            var p = a.j.Mb, s = (p.g || 0) + (p.D || 0), r = (p.c || 0) + (p.B || 0);
                            a.c = (a.c || 0) + r;
                            a.g = (a.g || 0) + s;
                            a.j.c -= r;
                            a.j.B -= r;
                            a.j.g -= s;
                            a.j.D -= s
                        }
                        if (a.j && b.Bf() && !a.j.g && !a.j.c && !a.j.G && !a.j.F && a.j.B == n.fb && a.j.D == n.sb)
                            a.j = j;
                        return a
                    }
                };
                function n() {
                    var a = this, d = [];
                    function i(a, b) {
                        d.push({xc: a, wc: b})
                    }
                    function h(a, c) {
                        b.m(d, function(b, e) {
                            b.xc == a && b.wc === c && d.splice(e, 1)
                        })
                    }
                    a.Jb = a.addEventListener = i;
                    a.removeEventListener = h;
                    a.u = function(a) {
                        var c = [].slice.call(arguments, 1);
                        b.m(d, function(b) {
                            b.xc == a && b.wc.apply(g, c)
                        })
                    }
                }
                var m = function(z, C, f, K, N, M) {
                    z = z || 0;
                    var a = this, q, o, p, u, A = 0, G, H, F, B, y = 0, i = 0, m = 0, D, k, d, h, n, J, w = [], x;
                    function P(a) {
                        d += a;
                        h += a;
                        k += a;
                        i += a;
                        m += a;
                        y += a
                    }
                    function t(p) {
                        var g = p;
                        if (n) {
                            if (g >= h || g <= d && !J)
                                g = ((g - d) % n + n) % n + d;
                            if (f.re && g <= d)
                                g = d + n
                        }
                        if (!D || u || i != g) {
                            var j = c.min(g, h);
                            j = c.max(j, d);
                            if (!D || u || j != m) {
                                if (M) {
                                    var l = (j - k) / (C || 1);
                                    if (f.Vc)
                                        l = 1 - l;
                                    var o = b.Jc(N, M, l, G, F, H, f);
                                    if (x)
                                        b.m(o, function(b, a) {
                                            x[a] && x[a](K, b)
                                        });
                                    else
                                        b.L(K, o)
                                }
                                a.yc(m - k, j - k);
                                var r = m, q = m = j;
                                b.m(w, function(b, c) {
                                    var a = g < i ? w[w.length - c - 1] : b;
                                    a.jb(m - y)
                                });
                                i = g;
                                D = e;
                                a.Ob(r, q)
                            }
                        }
                    }
                    function E(a, b, e) {
                        b && a.H(h);
                        if (!e) {
                            d = c.min(d, a.ad() + y);
                            h = c.max(h, a.uc() + y)
                        }
                        w.push(a)
                    }
                    var r = g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g.msRequestAnimationFrame;
                    if (b.nf() && b.Pd() < 7)
                        r = j;
                    r = r || function(a) {
                        b.R(a, f.gb)
                    };
                    function I() {
                        if (q) {
                            var d = b.ib(), e = c.min(d - A, f.Xc), a = i + e * p;
                            A = d;
                            if (a * p >= o * p)
                                a = o;
                            t(a);
                            if (!u && a * p >= o * p)
                                L(B);
                            else
                                r(I)
                        }
                    }
                    function s(f, g, j) {
                        if (!q) {
                            q = e;
                            u = j;
                            B = g;
                            f = c.max(f, d);
                            f = c.min(f, h);
                            o = f;
                            p = o < i ? -1 : 1;
                            a.Rc();
                            A = b.ib();
                            r(I)
                        }
                    }
                    function L(b) {
                        if (q) {
                            u = q = B = l;
                            a.Pc();
                            b && b()
                        }
                    }
                    a.dd = function(a, b, c) {
                        s(a ? i + a : h, b, c)
                    };
                    a.Mc = s;
                    a.ub = L;
                    a.oe = function(a) {
                        s(a)
                    };
                    a.kb = function() {
                        return i
                    };
                    a.Lc = function() {
                        return o
                    };
                    a.Kb = function() {
                        return m
                    };
                    a.jb = t;
                    a.wb = function(a) {
                        t(i + a)
                    };
                    a.Ic = function() {
                        return q
                    };
                    a.ie = function(a) {
                        n = a
                    };
                    a.H = P;
                    a.Hc = function(a, b) {
                        E(a, 0, b)
                    };
                    a.oc = function(a) {
                        E(a, 1)
                    };
                    a.ad = function() {
                        return d
                    };
                    a.uc = function() {
                        return h
                    };
                    a.Ob = a.Rc = a.Pc = a.yc = b.Wc;
                    a.qc = b.ib();
                    f = b.X({gb: 16, Xc: 50}, f);
                    n = f.rc;
                    J = f.ae;
                    x = f.ge;
                    d = k = z;
                    h = z + C;
                    H = f.W || {};
                    F = f.db || {};
                    G = b.Gc(f.e)
                };
                var o = new function() {
                    var h = this, t = 1, q = 2, r = 4, s = 8, w = 256, x = 512, v = 1024, u = 2048, j = u + t, i = u + q, o = x + t, m = x + q, n = w + r, k = w + s, l = v + r;
                    function g(b, a, c) {
                        c.push(a);
                        b[a] = b[a] || [];
                        b[a].push(c)
                    }
                    h.Sb = function(f) {
                        for (var d = f.q, e = f.C, s = f.nc, t = f.Ae, r = [], a = 0, b = 0, p = d - 1, q = e - 1, h = t - 1, c, b = 0; b < e; b++)
                            for (a = 0; a < d; a++) {
                                switch (s) {
                                    case j:
                                        c = h - (a * e + (q - b));
                                        break;
                                    case l:
                                        c = h - (b * d + (p - a));
                                        break;
                                    case o:
                                        c = h - (a * e + b);
                                    case n:
                                        c = h - (b * d + a);
                                        break;
                                    case i:
                                        c = a * e + b;
                                        break;
                                    case k:
                                        c = b * d + (p - a);
                                        break;
                                    case m:
                                        c = a * e + (q - b);
                                        break;
                                    default:
                                        c = b * d + a
                                }
                                g(r, c, [b, a])
                            }
                        return r
                    };
                    h.te = function(d) {
                        for (var e = [], a, b = 0; b < d.C; b++)
                            for (a = 0; a < d.q; a++)
                                g(e, c.ceil(1e5 * c.random()) % 13, [b, a]);
                        return e
                    }
                }, s = function(k, s, q, u, z) {
                    var d = this, v, g, a, y = 0, x = u.we, r, h = 8;
                    function t(a) {
                        if (a.g)
                            a.G = a.g;
                        if (a.c)
                            a.F = a.c;
                        b.m(a, function(a) {
                            b.Ee(a) && t(a)
                        })
                    }
                    function i(g, d) {
                        var a = {gb: d, i: 1, R: 0, q: 1, C: 1, a: 0, n: 0, j: 0, wb: l, Zb: l, Vc: l, Ib: o.te, nc: 1032, N: {Wb: 0, Eb: 0}, e: f.kc, W: {}, Yb: [], db: {}};
                        b.X(a, g);
                        t(a);
                        a.Ae = a.q * a.C;
                        a.e = b.Gc(a.e);
                        a.bf = c.ceil(a.i / a.gb);
                        a.Je = function(c, b) {
                            c /= a.q;
                            b /= a.C;
                            var f = c + "x" + b;
                            if (!a.Yb[f]) {
                                a.Yb[f] = {cb: c, bb: b};
                                for (var d = 0; d < a.q; d++)
                                    for (var e = 0; e < a.C; e++)
                                        a.Yb[f][e + "," + d] = {g: e * b, B: d * c + c, D: e * b + b, c: d * c}
                            }
                            return a.Yb[f]
                        };
                        if (a.p) {
                            a.p = i(a.p, d);
                            a.Zb = e
                        }
                        return a
                    }
                    function p(B, h, a, w, o, m) {
                        var z = this, u, v = {}, i = {}, n = [], f, d, s, q = a.N.Wb || 0, r = a.N.Eb || 0, g = a.Je(o, m), p = C(a), D = p.length - 1, t = a.i + a.R * D, x = w + t, k = a.Zb, y;
                        x += 50;
                        function C(a) {
                            var b = a.Ib(a);
                            return a.Vc ? b.reverse() : b
                        }
                        z.Kc = x;
                        z.Nb = function(d) {
                            d -= w;
                            var e = d < t;
                            if (e || y) {
                                y = e;
                                if (!k)
                                    d = t - d;
                                var f = c.ceil(d / a.gb);
                                b.m(i, function(a, e) {
                                    var d = c.max(f, a.Jf);
                                    d = c.min(d, a.length - 1);
                                    if (a.Sc != d) {
                                        if (!a.Sc && !k)
                                            b.P(n[e]);
                                        else
                                            d == a.Ke && k && b.V(n[e]);
                                        a.Sc = d;
                                        b.L(n[e], a[d])
                                    }
                                })
                            }
                        };
                        h = b.ab(h);
                        b.Fb(h, j);
                        if (b.Db()) {
                            var E = !h["no-image"], A = b.ef(h);
                            b.m(A, function(a) {
                                (E || a["jssor-slider"]) && b.Gb(a, b.Gb(a), e)
                            })
                        }
                        b.m(p, function(h, j) {
                            b.m(h, function(G) {
                                var K = G[0], J = G[1], t = K + "," + J, n = l, p = l, x = l;
                                if (q && J % 2) {
                                    if (q & 3)
                                        n = !n;
                                    if (q & 12)
                                        p = !p;
                                    if (q & 16)
                                        x = !x
                                }
                                if (r && K % 2) {
                                    if (r & 3)
                                        n = !n;
                                    if (r & 12)
                                        p = !p;
                                    if (r & 16)
                                        x = !x
                                }
                                a.g = a.g || a.j & 4;
                                a.D = a.D || a.j & 8;
                                a.c = a.c || a.j & 1;
                                a.B = a.B || a.j & 2;
                                var E = p ? a.D : a.g, B = p ? a.g : a.D, D = n ? a.B : a.c, C = n ? a.c : a.B;
                                a.j = E || B || D || C;
                                s = {};
                                d = {G: 0, F: 0, a: 1, cb: o, bb: m};
                                f = b.X({}, d);
                                u = b.X({}, g[t]);
                                if (a.a)
                                    d.a = 2 - a.a;
                                if (a.v) {
                                    d.v = a.v;
                                    f.v = 0
                                }
                                var I = a.q * a.C > 1 || a.j;
                                if (a.n || a.f) {
                                    var H = e;
                                    if (b.Db())
                                        if (a.q * a.C > 1)
                                            H = l;
                                        else
                                            I = l;
                                    if (H) {
                                        d.n = a.n ? a.n - 1 : 1;
                                        f.n = 1;
                                        if (b.Db() || b.Md())
                                            d.n = c.min(d.n, 2);
                                        var N = a.f || 0;
                                        d.f = N * 360 * (x ? -1 : 1);
                                        f.f = 0
                                    }
                                }
                                if (I) {
                                    var h = u.Mb = {};
                                    if (a.j) {
                                        var w = a.Tf || 1;
                                        if (E && B) {
                                            h.g = g.bb / 2 * w;
                                            h.D = -h.g
                                        } else if (E)
                                            h.D = -g.bb * w;
                                        else if (B)
                                            h.g = g.bb * w;
                                        if (D && C) {
                                            h.c = g.cb / 2 * w;
                                            h.B = -h.c
                                        } else if (D)
                                            h.B = -g.cb * w;
                                        else if (C)
                                            h.c = g.cb * w
                                    }
                                    s.j = u;
                                    f.j = g[t]
                                }
                                var L = n ? 1 : -1, M = p ? 1 : -1;
                                if (a.x)
                                    d.F += o * a.x * L;
                                if (a.y)
                                    d.G += m * a.y * M;
                                b.m(d, function(a, c) {
                                    if (b.ed(a))
                                        if (a != f[c])
                                            s[c] = a - f[c]
                                });
                                v[t] = k ? f : d;
                                var F = a.bf, A = c.round(j * a.R / a.gb);
                                i[t] = new Array(A);
                                i[t].Jf = A;
                                i[t].Ke = A + F - 1;
                                for (var z = 0; z <= F; z++) {
                                    var y = b.Jc(f, s, z / F, a.e, a.db, a.W, {wb: a.wb, fb: o, sb: m});
                                    y.v = y.v || 1;
                                    i[t].push(y)
                                }
                            })
                        });
                        p.reverse();
                        b.m(p, function(a) {
                            b.m(a, function(c) {
                                var f = c[0], e = c[1], d = f + "," + e, a = h;
                                if (e || f)
                                    a = b.ab(h);
                                b.L(a, v[d]);
                                b.Bb(a, "hidden");
                                b.I(a, "absolute");
                                B.Me(a);
                                n[d] = a;
                                b.P(a, !k)
                            })
                        })
                    }
                    function w() {
                        var b = this, c = 0;
                        m.call(b, 0, v);
                        b.Ob = function(d, b) {
                            if (b - c > h) {
                                c = b;
                                a && a.Nb(b);
                                g && g.Nb(b)
                            }
                        };
                        b.Tc = r
                    }
                    d.Qe = function() {
                        var a = 0, b = u.Ab, d = b.length;
                        if (x)
                            a = y++ % d;
                        else
                            a = c.floor(c.random() * d);
                        b[a] && (b[a].nb = a);
                        return b[a]
                    };
                    d.Te = function(w, x, l, m, b) {
                        r = b;
                        b = i(b, h);
                        var j = m.bd, f = l.bd;
                        j["no-image"] = !m.ec;
                        f["no-image"] = !l.ec;
                        var n = j, o = f, u = b, e = b.p || i({}, h);
                        if (!b.Zb) {
                            n = f;
                            o = j
                        }
                        var t = e.H || 0;
                        g = new p(k, o, e, c.max(t - e.gb, 0), s, q);
                        a = new p(k, n, u, c.max(e.gb - t, 0), s, q);
                        g.Nb(0);
                        a.Nb(0);
                        v = c.max(g.Kc, a.Kc);
                        d.nb = w
                    };
                    d.Cb = function() {
                        k.Cb();
                        g = j;
                        a = j
                    };
                    d.Ef = function() {
                        var b = j;
                        if (a)
                            b = new w;
                        return b
                    };
                    if (b.Db() || b.Md() || z && b.wf() < 537)
                        h = 16;
                    n.call(d);
                    m.call(d, -1e7, 1e7)
                }, i = function(o, fc) {
                    var d = this;
                    function Bc() {
                        var a = this;
                        m.call(a, -1e8, 2e8);
                        a.mf = function() {
                            var b = a.Kb(), d = c.floor(b), f = t(d), e = b - c.floor(b);
                            return{nb: f, kf: d, Hb: e}
                        };
                        a.Ob = function(b, a) {
                            var f = c.floor(a);
                            if (f != a && a > b)
                                f++;
                            Tb(f, e);
                            d.u(i.hf, t(a), t(b), a, b)
                        }
                    }
                    function Ac() {
                        var a = this;
                        m.call(a, 0, 0, {rc: r});
                        b.m(C, function(b) {
                            D & 1 && b.ie(r);
                            a.oc(b);
                            b.H(kb / bc)
                        })
                    }
                    function zc() {
                        var a = this, b = Ub.pb;
                        m.call(a, -1, 2, {e: f.Qd, ge: {Hb: Zb}, rc: r}, b, {Hb: 1}, {Hb: -2});
                        a.ic = b
                    }
                    function mc(o, n) {
                        var b = this, f, g, h, k, c;
                        m.call(b, -1e8, 2e8, {Xc: 100});
                        b.Rc = function() {
                            M = e;
                            R = j;
                            d.u(i.df, t(w.kb()), w.kb())
                        };
                        b.Pc = function() {
                            M = l;
                            k = l;
                            var a = w.mf();
                            d.u(i.pf, t(w.kb()), w.kb());
                            !a.Hb && Dc(a.kf, s)
                        };
                        b.Ob = function(i, e) {
                            var b;
                            if (k)
                                b = c;
                            else {
                                b = g;
                                if (h) {
                                    var d = e / h;
                                    b = a.qf(d) * (g - f) + f
                                }
                            }
                            w.jb(b)
                        };
                        b.Xb = function(a, d, c, e) {
                            f = a;
                            g = d;
                            h = c;
                            w.jb(a);
                            b.jb(0);
                            b.Mc(c, e)
                        };
                        b.fe = function(a) {
                            k = e;
                            c = a;
                            b.dd(a, j, e)
                        };
                        b.sf = function(a) {
                            c = a
                        };
                        w = new Bc;
                        w.Hc(o);
                        w.Hc(n)
                    }
                    function oc() {
                        var c = this, a = Xb();
                        b.O(a, 0);
                        b.Z(a, "pointerEvents", "none");
                        c.pb = a;
                        c.Me = function(c) {
                            b.Q(a, c);
                            b.P(a)
                        };
                        c.Cb = function() {
                            b.V(a);
                            b.jc(a)
                        }
                    }
                    function xc(o, g) {
                        var f = this, q, M, v, k, y = [], x, B, W, H, S, F, h, w, p;
                        m.call(f, -u, u + 1, {});
                        function E(a) {
                            q && q.Id();
                            T(o, a, 0);
                            F = e;
                            q = new I.lb(o, I, b.Zd(b.s(o, "idle")) || lc);
                            q.jb(0)
                        }
                        function Z() {
                            q.qc < I.qc && E()
                        }
                        function O(p, r, o) {
                            if (!H) {
                                H = e;
                                if (k && o) {
                                    var h = o.width, c = o.height, n = h, m = c;
                                    if (h && c && a.rb) {
                                        if (a.rb & 3 && (!(a.rb & 4) || h > K || c > J)) {
                                            var j = l, q = K / J * c / h;
                                            if (a.rb & 1)
                                                j = q > 1;
                                            else if (a.rb & 2)
                                                j = q < 1;
                                            n = j ? h * J / c : K;
                                            m = j ? J : c * K / h
                                        }
                                        b.A(k, n);
                                        b.E(k, m);
                                        b.S(k, (J - m) / 2);
                                        b.T(k, (K - n) / 2)
                                    }
                                    b.I(k, "absolute");
                                    d.u(i.of, g)
                                }
                            }
                            b.V(r);
                            p && p(f)
                        }
                        function Y(b, c, d, e) {
                            if (e == R && s == g && N)
                                if (!Cc) {
                                    var a = t(b);
                                    A.Te(a, g, c, f, d);
                                    c.Ze();
                                    U.H(a - U.ad() - 1);
                                    U.jb(a);
                                    z.Xb(b, b, 0)
                                }
                        }
                        function bb(b) {
                            if (b == R && s == g) {
                                if (!h) {
                                    var a = j;
                                    if (A)
                                        if (A.nb == g)
                                            a = A.Ef();
                                        else
                                            A.Cb();
                                    Z();
                                    h = new vc(o, g, a, q);
                                    h.Hd(p)
                                }
                                !h.Ic() && h.fc()
                            }
                        }
                        function G(d, e, l) {
                            if (d == g) {
                                if (d != e)
                                    C[e] && C[e].jd();
                                else
                                    !l && h && h.jf();
                                p && p.Fc();
                                var m = R = b.ib();
                                f.yb(b.qb(j, bb, m))
                            } else {
                                var k = c.min(g, d), i = c.max(g, d), o = c.min(i - k, k + r - i), n = u + a.Xe - 1;
                                (!S || o <= n) && f.yb()
                            }
                        }
                        function db() {
                            if (s == g && h) {
                                h.ub();
                                p && p.We();
                                p && p.Ve();
                                h.md()
                            }
                        }
                        function eb() {
                            s == g && h && h.ub()
                        }
                        function ab(a) {
                            !P && d.u(i.Ue, g, a)
                        }
                        function Q() {
                            p = w.pInstance;
                            h && h.Hd(p)
                        }
                        f.yb = function(c, a) {
                            a = a || v;
                            if (y.length && !H) {
                                b.P(a);
                                if (!W) {
                                    W = e;
                                    d.u(i.Se, g);
                                    b.m(y, function(a) {
                                        if (!b.ob(a, "src")) {
                                            a.src = b.s(a, "src2");
                                            b.mb(a, a["display-origin"])
                                        }
                                    })
                                }
                                b.Sd(y, k, b.qb(j, O, c, a))
                            } else
                                O(c, a)
                        };
                        f.Re = function() {
                            var i = g;
                            if (a.pd < 0)
                                i -= r;
                            var d = i + a.pd * tc;
                            if (D & 2)
                                d = t(d);
                            if (!(D & 1) && !ib)
                                d = c.max(0, c.min(d, r - u));
                            if (d != g) {
                                if (A) {
                                    var e = A.Qe(r);
                                    if (e) {
                                        var k = R = b.ib(), h = C[t(d)];
                                        return h.yb(b.qb(j, Y, d, h, e, k), v)
                                    }
                                }
                                cb(d)
                            } else if (a.Ac) {
                                f.jd();
                                G(g, g)
                            }
                        };
                        f.vc = function() {
                            G(g, g, e)
                        };
                        f.jd = function() {
                            p && p.We();
                            p && p.Ve();
                            f.qd();
                            h && h.Oe();
                            h = j;
                            E()
                        };
                        f.Ze = function() {
                            b.V(o)
                        };
                        f.qd = function() {
                            b.P(o)
                        };
                        f.Ne = function() {
                            p && p.Fc()
                        };
                        function T(a, c, d) {
                            if (b.ob(a, "jssor-slider"))
                                return;
                            if (!F) {
                                if (a.tagName == "IMG") {
                                    y.push(a);
                                    if (!b.ob(a, "src")) {
                                        S = e;
                                        a["display-origin"] = b.mb(a);
                                        b.V(a)
                                    }
                                }
                                b.O(a, (b.O(a) || 0) + 1);
                                b.fd(a, 0);
                                b.Zc(a, 0)
                            }
                            var f = b.Vb(a);
                            b.m(f, function(f) {
                                var h = f.tagName, i = b.s(f, "u");
                                if (i == "player" && !w) {
                                    w = f;
                                    if (w.pInstance)
                                        Q();
                                    else
                                        b.k(w, "dataavailable", Q)
                                }
                                if (i == "caption") {
                                    if (c) {
                                        b.Nc(f, b.s(f, "to"));
                                        b.Gf(f, b.s(f, "bf"));
                                        b.s(f, "3d") && b.Kf(f, "preserve-3d")
                                    } else if (!b.Dd()) {
                                        var g = b.ab(f, l, e);
                                        b.cc(g, f, a);
                                        b.bc(f, a);
                                        f = g;
                                        c = e
                                    }
                                } else if (!F && !d && !k) {
                                    if (h == "A") {
                                        if (b.s(f, "u") == "image")
                                            k = b.gf(f, "IMG");
                                        else
                                            k = b.M(f, "image", e);
                                        if (k) {
                                            x = f;
                                            b.mb(x, "block");
                                            b.L(x, V);
                                            B = b.ab(x, e);
                                            b.I(x, "relative");
                                            b.Gb(B, 0);
                                            b.Z(B, "backgroundColor", "#000")
                                        }
                                    } else if (h == "IMG" && b.s(f, "u") == "image")
                                        k = f;
                                    if (k) {
                                        k.border = 0;
                                        b.L(k, V)
                                    }
                                }
                                T(f, c, d + 1)
                            })
                        }
                        f.yc = function(c, b) {
                            var a = u - b;
                            Zb(M, a)
                        };
                        f.nb = g;
                        n.call(f);
                        b.Lf(o, b.s(o, "p"));
                        b.Mf(o, b.s(o, "po"));
                        var L = b.M(o, "thumb", e);
                        if (L) {
                            b.ab(L);
                            b.V(L)
                        }
                        b.P(o);
                        v = b.ab(gb);
                        b.O(v, 1e3);
                        b.k(o, "click", ab);
                        E(e);
                        f.ec = k;
                        f.td = B;
                        f.bd = o;
                        f.ic = M = o;
                        b.Q(M, v);
                        d.Jb(203, G);
                        d.Jb(28, eb);
                        d.Jb(24, db)
                    }
                    function vc(y, g, p, q) {
                        var a = this, n = 0, u = 0, h, j, f, c, k, t, r, o = C[g];
                        m.call(a, 0, 0);
                        function v() {
                            b.jc(L);
                            cc && k && o.td && b.Q(L, o.td);
                            b.P(L, !k && o.ec)
                        }
                        function w() {
                            a.fc()
                        }
                        function x(b) {
                            r = b;
                            a.ub();
                            a.fc()
                        }
                        a.fc = function() {
                            var b = a.Kb();
                            if (!B && !M && !r && s == g) {
                                if (!b) {
                                    if (h && !k) {
                                        k = e;
                                        a.md(e);
                                        d.u(i.Ff, g, n, u, h, c)
                                    }
                                    v()
                                }
                                var l, p = i.wd;
                                if (b != c)
                                    if (b == f)
                                        l = c;
                                    else if (b == j)
                                        l = f;
                                    else if (!b)
                                        l = j;
                                    else
                                        l = a.Lc();
                                d.u(p, g, b, n, j, f, c);
                                var m = N && (!E || F);
                                if (b == c)
                                    (f != c && !(E & 12) || m) && o.Re();
                                else
                                    (m || b != f) && a.Mc(l, w)
                            }
                        };
                        a.jf = function() {
                            f == c && f == a.Kb() && a.jb(j)
                        };
                        a.Oe = function() {
                            A && A.nb == g && A.Cb();
                            var b = a.Kb();
                            b < c && d.u(i.wd, g, -b - 1, n, j, f, c)
                        };
                        a.md = function(a) {
                            p && b.Bb(lb, a && p.Tc.xd ? "" : "hidden")
                        };
                        a.yc = function(b, a) {
                            if (k && a >= h) {
                                k = l;
                                v();
                                o.qd();
                                A.Cb();
                                d.u(i.Df, g, n, u, h, c)
                            }
                            d.u(i.zf, g, a, n, j, f, c)
                        };
                        a.Hd = function(a) {
                            if (a && !t) {
                                t = a;
                                a.Jb($JssorPlayer$.Fe, x)
                            }
                        };
                        p && a.oc(p);
                        h = a.uc();
                        a.oc(q);
                        j = h + q.yd;
                        f = h + q.zd;
                        c = a.uc()
                    }
                    function Kb(a, c, d) {
                        b.T(a, c);
                        b.S(a, d)
                    }
                    function Zb(c, b) {
                        var a = x > 0 ? x : fb, d = zb * b * (a & 1), e = Ab * b * (a >> 1 & 1);
                        Kb(c, d, e)
                    }
                    function Pb() {
                        qb = M;
                        Ib = z.Lc();
                        G = w.kb()
                    }
                    function gc() {
                        Pb();
                        if (B || !F && E & 12) {
                            z.ub();
                            d.u(i.yf)
                        }
                    }
                    function ec(f) {
                        if (!B && (F || !(E & 12)) && !z.Ic()) {
                            var d = w.kb(), b = c.ceil(G);
                            if (f && c.abs(H) >= a.Ad) {
                                b = c.ceil(d);
                                b += jb
                            }
                            if (!(D & 1))
                                b = c.min(r - u, c.max(b, 0));
                            var e = c.abs(b - d);
                            e = 1 - c.pow(1 - e, 5);
                            if (!P && qb)
                                z.oe(Ib);
                            else if (d == b) {
                                tb.Ne();
                                tb.vc()
                            } else
                                z.Xb(d, b, e * Vb)
                        }
                    }
                    function Hb(a) {
                        !b.s(b.pc(a), "nodrag") && b.Pb(a)
                    }
                    function rc(a) {
                        Yb(a, 1)
                    }
                    function Yb(a, c) {
                        a = b.Od(a);
                        var k = b.pc(a);
                        if (!O && !b.s(k, "nodrag") && sc() && (!c || a.touches.length == 1)) {
                            B = e;
                            yb = l;
                            R = j;
                            b.k(h, c ? "touchmove" : "mousemove", Bb);
                            b.ib();
                            P = 0;
                            gc();
                            if (!qb)
                                x = 0;
                            if (c) {
                                var g = a.touches[0];
                                ub = g.clientX;
                                vb = g.clientY
                            } else {
                                var f = b.gd(a);
                                ub = f.x;
                                vb = f.y
                            }
                            H = 0;
                            hb = 0;
                            jb = 0;
                            d.u(i.vf, t(G), G, a)
                        }
                    }
                    function Bb(d) {
                        if (B) {
                            d = b.Od(d);
                            var f;
                            if (d.type != "mousemove") {
                                var l = d.touches[0];
                                f = {x: l.clientX, y: l.clientY}
                            } else
                                f = b.gd(d);
                            if (f) {
                                var j = f.x - ub, k = f.y - vb;
                                if (c.floor(G) != G)
                                    x = x || fb & O;
                                if ((j || k) && !x) {
                                    if (O == 3)
                                        if (c.abs(k) > c.abs(j))
                                            x = 2;
                                        else
                                            x = 1;
                                    else
                                        x = O;
                                    if (ob && x == 1 && c.abs(k) - c.abs(j) > 3)
                                        yb = e
                                }
                                if (x) {
                                    var a = k, i = Ab;
                                    if (x == 1) {
                                        a = j;
                                        i = zb
                                    }
                                    if (!(D & 1)) {
                                        if (a > 0) {
                                            var g = i * s, h = a - g;
                                            if (h > 0)
                                                a = g + c.sqrt(h) * 5
                                        }
                                        if (a < 0) {
                                            var g = i * (r - u - s), h = -a - g;
                                            if (h > 0)
                                                a = -g - c.sqrt(h) * 5
                                        }
                                    }
                                    if (H - hb < -2)
                                        jb = 0;
                                    else if (H - hb > 2)
                                        jb = -1;
                                    hb = H;
                                    H = a;
                                    sb = G - H / i / (Y || 1);
                                    if (H && x && !yb) {
                                        b.Pb(d);
                                        if (!M)
                                            z.fe(sb);
                                        else
                                            z.sf(sb)
                                    }
                                }
                            }
                        }
                    }
                    function bb() {
                        qc();
                        if (B) {
                            B = l;
                            b.ib();
                            b.U(h, "mousemove", Bb);
                            b.U(h, "touchmove", Bb);
                            P = H;
                            z.ub();
                            var a = w.kb();
                            d.u(i.uf, t(a), a, t(G), G);
                            E & 12 && Pb();
                            ec(e)
                        }
                    }
                    function jc(c) {
                        if (P) {
                            b.af(c);
                            var a = b.pc(c);
                            while (a && v !== a) {
                                a.tagName == "A" && b.Pb(c);
                                try {
                                    a = a.parentNode
                                } catch (d) {
                                    break
                                }
                            }
                        }
                    }
                    function Jb(a) {
                        C[s];
                        s = t(a);
                        tb = C[s];
                        Tb(a);
                        return s
                    }
                    function Dc(a, b) {
                        x = 0;
                        Jb(a);
                        d.u(i.rf, t(a), b)
                    }
                    function Tb(a, c) {
                        wb = a;
                        b.m(S, function(b) {
                            b.dc(t(a), a, c)
                        })
                    }
                    function sc() {
                        var b = i.Bd || 0, a = X;
                        if (ob)
                            a & 1 && (a &= 1);
                        i.Bd |= a;
                        return O = a & ~b
                    }
                    function qc() {
                        if (O) {
                            i.Bd &= ~X;
                            O = 0
                        }
                    }
                    function Xb() {
                        var a = b.Qb();
                        b.L(a, V);
                        b.I(a, "absolute");
                        return a
                    }
                    function t(a) {
                        return(a % r + r) % r
                    }
                    function kc(b, d) {
                        if (d)
                            if (!D) {
                                b = c.min(c.max(b + wb, 0), r - u);
                                d = l
                            } else if (D & 2) {
                                b = t(b + wb);
                                d = l
                            }
                        cb(b, a.Cc, d)
                    }
                    function xb() {
                        b.m(S, function(a) {
                            a.Bc(a.ac.Pf <= F)
                        })
                    }
                    function hc() {
                        if (!F) {
                            F = 1;
                            xb();
                            if (!B) {
                                E & 12 && ec();
                                E & 3 && C[s].vc()
                            }
                        }
                    }
                    function Ec() {
                        if (F) {
                            F = 0;
                            xb();
                            B || !(E & 12) || gc()
                        }
                    }
                    function ic() {
                        V = {cb: K, bb: J, g: 0, c: 0};
                        b.m(T, function(a) {
                            b.L(a, V);
                            b.I(a, "absolute");
                            b.Bb(a, "hidden");
                            b.V(a)
                        });
                        b.L(gb, V)
                    }
                    function ab(b, a) {
                        cb(b, a, e)
                    }
                    function cb(g, f, j) {
                        if (Rb && (!B && (F || !(E & 12)) || a.kd)) {
                            M = e;
                            B = l;
                            z.ub();
                            if (f == k)
                                f = Vb;
                            var d = Cb.Kb(), b = g;
                            if (j) {
                                b = d + g;
                                if (g > 0)
                                    b = c.ceil(b);
                                else
                                    b = c.floor(b)
                            }
                            if (D & 2)
                                b = t(b);
                            if (!(D & 1))
                                b = c.max(0, c.min(b, r - u));
                            var i = (b - d) % r;
                            b = d + i;
                            var h = d == b ? 0 : f * c.abs(i);
                            h = c.min(h, f * u * 1.5);
                            z.Xb(d, b, h || 1)
                        }
                    }
                    d.dd = function() {
                        if (!N) {
                            N = e;
                            C[s] && C[s].vc()
                        }
                    };
                    function W() {
                        return b.A(y || o)
                    }
                    function nb() {
                        return b.E(y || o)
                    }
                    d.fb = W;
                    d.sb = nb;
                    function Eb(c, d) {
                        if (c == k)
                            return b.A(o);
                        if (!y) {
                            var a = b.Qb(h);
                            b.Uc(a, b.Uc(o));
                            b.Rb(a, b.Rb(o));
                            b.mb(a, "block");
                            b.I(a, "relative");
                            b.S(a, 0);
                            b.T(a, 0);
                            b.Bb(a, "visible");
                            y = b.Qb(h);
                            b.I(y, "absolute");
                            b.S(y, 0);
                            b.T(y, 0);
                            b.A(y, b.A(o));
                            b.E(y, b.E(o));
                            b.Nc(y, "0 0");
                            b.Q(y, a);
                            var g = b.Vb(o);
                            b.Q(o, y);
                            b.Z(o, "backgroundImage", "");
                            b.m(g, function(c) {
                                b.Q(b.s(c, "noscale") ? o : a, c);
                                b.s(c, "autocenter") && Lb.push(c)
                            })
                        }
                        Y = c / (d ? b.E : b.A)(y);
                        b.Hf(y, Y);
                        var f = d ? Y * W() : c, e = d ? c : Y * nb();
                        b.A(o, f);
                        b.E(o, e);
                        b.m(Lb, function(a) {
                            var c = b.Yd(b.s(a, "autocenter"));
                            b.Xd(a, c)
                        })
                    }
                    d.Wd = Eb;
                    n.call(d);
                    d.pb = o = b.zb(o);
                    var a = b.X({rb: 0, Xe: 1, mc: 1, hc: 0, gc: l, Ac: 1, Lb: e, kd: e, pd: 1, Cd: 3e3, rd: 1, Cc: 500, qf: f.ke, Ad: 20, od: 0, q: 1, nd: 0, ye: 1, Dc: 1, ld: 1}, fc);
                    a.Lb = a.Lb && b.xf();
                    if (a.xe != k)
                        a.Cd = a.xe;
                    if (a.He != k)
                        a.nd = a.He;
                    var fb = a.Dc & 3, tc = (a.Dc & 4) / -4 || 1, mb = a.ee, I = b.X({lb: q, Lb: a.Lb}, a.Of);
                    I.Ab = I.Ab || I.Sf;
                    var Fb = a.Ge, Z = a.Rf, eb = a.Qf, Q = !a.ye, y, v = b.M(o, "slides", Q), gb = b.M(o, "loading", Q) || b.Qb(h), Nb = b.M(o, "navigator", Q), dc = b.M(o, "arrowleft", Q), ac = b.M(o, "arrowright", Q), Mb = b.M(o, "thumbnavigator", Q), pc = b.A(v), nc = b.E(v), V, T = [], uc = b.Vb(v);
                    b.m(uc, function(a) {
                        if (a.tagName == "DIV" && !b.s(a, "u"))
                            T.push(a);
                        else
                            b.Db() && b.O(a, (b.O(a) || 0) + 1)
                    });
                    var s = -1, wb, tb, r = T.length, K = a.se || pc, J = a.qe || nc, Wb = a.od, zb = K + Wb, Ab = J + Wb, bc = fb & 1 ? zb : Ab, u = c.min(a.q, r), lb, x, O, yb, S = [], Qb, Sb, Ob, cc, Cc, N, E = a.rd, lc = a.Cd, Vb = a.Cc, rb, ib, kb, Rb = u < r, D = Rb ? a.Ac : 0, X, P, F = 1, M, B, R, ub = 0, vb = 0, H, hb, jb, Cb, w, U, z, Ub = new oc, Y, Lb = [];
                    if (r) {
                        if (a.Lb)
                            Kb = function(a, c, d) {
                                b.Fb(a, {xb: c, vb: d})
                            };
                        N = a.gc;
                        d.ac = fc;
                        ic();
                        b.ob(o, "jssor-slider", e);
                        b.O(v, b.O(v) || 0);
                        b.I(v, "absolute");
                        lb = b.ab(v, e);
                        b.cc(lb, v);
                        if (mb) {
                            cc = mb.Nf;
                            rb = mb.lb;
                            ib = u == 1 && r > 1 && rb && (!b.Dd() || b.Pd() >= 8)
                        }
                        kb = ib || u >= r || !(D & 1) ? 0 : a.nd;
                        X = (u > 1 || kb ? fb : -1) & a.ld;
                        var Gb = v, C = [], A, L, Db = b.ff(), ob = Db.lf, G, qb, Ib, sb;
                        Db.id && b.Z(Gb, Db.id, ([j, "pan-y", "pan-x", "none"])[X] || "");
                        U = new zc;
                        if (ib)
                            A = new rb(Ub, K, J, mb, ob);
                        b.Q(lb, U.ic);
                        b.Bb(v, "hidden");
                        L = Xb();
                        b.Z(L, "backgroundColor", "#000");
                        b.Gb(L, 0);
                        b.cc(L, Gb.firstChild, Gb);
                        for (var db = 0; db < T.length; db++) {
                            var wc = T[db], yc = new xc(wc, db);
                            C.push(yc)
                        }
                        b.V(gb);
                        Cb = new Ac;
                        z = new mc(Cb, U);
                        b.k(v, "click", jc, e);
                        b.k(o, "mouseout", b.lc(hc, o));
                        b.k(o, "mouseover", b.lc(Ec, o));
                        if (X) {
                            b.k(v, "mousedown", Yb);
                            b.k(v, "touchstart", rc);
                            b.k(v, "dragstart", Hb);
                            b.k(v, "selectstart", Hb);
                            b.k(h, "mouseup", bb);
                            b.k(h, "touchend", bb);
                            b.k(h, "touchcancel", bb);
                            b.k(g, "blur", bb)
                        }
                        E &= ob ? 10 : 5;
                        if (Nb && Fb) {
                            Qb = new Fb.lb(Nb, Fb, W(), nb());
                            S.push(Qb)
                        }
                        if (Z && dc && ac) {
                            Z.Ac = D;
                            Z.q = u;
                            Sb = new Z.lb(dc, ac, Z, W(), nb());
                            S.push(Sb)
                        }
                        if (Mb && eb) {
                            eb.hc = a.hc;
                            Ob = new eb.lb(Mb, eb);
                            S.push(Ob)
                        }
                        b.m(S, function(a) {
                            a.tc(r, C, gb);
                            a.Jb(p.hd, kc)
                        });
                        b.Z(o, "visibility", "visible");
                        Eb(W());
                        xb();
                        a.mc && b.k(h, "keydown", function(b) {
                            if (b.keyCode == 37)
                                ab(-a.mc);
                            else
                                b.keyCode == 39 && ab(a.mc)
                        });
                        var pb = a.hc;
                        if (!(D & 1))
                            pb = c.max(0, c.min(pb, r - u));
                        z.Xb(pb, pb, 0)
                    }
                };
                i.Ue = 21;
                i.vf = 22;
                i.uf = 23;
                i.df = 24;
                i.pf = 25;
                i.Se = 26;
                i.of = 27;
                i.yf = 28;
                i.hf = 202;
                i.rf = 203;
                i.Ff = 206;
                i.Df = 207;
                i.zf = 208;
                i.wd = 209;
                var p = {hd: 1}, r = function(d, C) {
                    var f = this;
                    n.call(f);
                    d = b.zb(d);
                    var s, A, z, r, k = 0, a, m, i, w, x, h, g, q, o, B = [], y = [];
                    function v(a) {
                        a != -1 && y[a].de(a == k)
                    }
                    function t(a) {
                        f.u(p.hd, a * m)
                    }
                    f.pb = d;
                    f.dc = function(a) {
                        if (a != r) {
                            var d = k, b = c.floor(a / m);
                            k = b;
                            r = a;
                            v(d);
                            v(b)
                        }
                    };
                    f.Bc = function(a) {
                        b.P(d, a)
                    };
                    var u;
                    f.tc = function(D) {
                        if (!u) {
                            s = c.ceil(D / m);
                            k = 0;
                            var p = q + w, r = o + x, n = c.ceil(s / i) - 1;
                            A = q + p * (!h ? n : i - 1);
                            z = o + r * (h ? n : i - 1);
                            b.A(d, A);
                            b.E(d, z);
                            for (var f = 0; f < s; f++) {
                                var C = b.Pe();
                                b.cf(C, f + 1);
                                var l = b.Ie(g, "numbertemplate", C, e);
                                b.I(l, "absolute");
                                var v = f % (n + 1);
                                b.T(l, !h ? p * v : f % i * p);
                                b.S(l, h ? r * v : c.floor(f / (n + 1)) * r);
                                b.Q(d, l);
                                B[f] = l;
                                a.sc & 1 && b.k(l, "click", b.qb(j, t, f));
                                a.sc & 2 && b.k(l, "mouseover", b.lc(b.qb(j, t, f), l));
                                y[f] = b.be(l)
                            }
                            u = e
                        }
                    };
                    f.ac = a = b.X({Nd: 10, Fd: 10, Ld: 1, sc: 1}, C);
                    g = b.M(d, "prototype");
                    q = b.A(g);
                    o = b.E(g);
                    b.bc(g, d);
                    m = a.Be || 1;
                    i = a.C || 1;
                    w = a.Nd;
                    x = a.Fd;
                    h = a.Ld - 1;
                    a.Qc == l && b.ob(d, "noscale", e);
                    a.Jd && b.ob(d, "autocenter", a.Jd)
                };
                function q(e, d, c) {
                    var a = this;
                    m.call(a, 0, c);
                    a.Id = b.Wc;
                    a.yd = 0;
                    a.zd = c
                }
                jssor_1_slider_init = function() {
                    var h = [{i: 1200, n: 11, f: -1, e: {n: d.o, a: d.l, f: d.o}, a: 2, W: {f: .5}, p: {i: 1200, n: 1, f: 1, e: d.ue, a: 2, W: {f: .5}, H: 90}}, {i: 1400, x: .25, n: 1.5, e: {c: d.Ed, n: d.ud}, a: 2, v: -10, p: {i: 1400, x: -.25, n: 1.5, e: {c: d.Ed, n: d.ud}, a: 2, v: -10}}, {i: 1200, n: 11, f: 1, e: {a: d.l, f: d.o}, a: 2, W: {f: 1}, v: -10, p: {i: 1200, n: 11, f: -1, e: {a: d.l, f: d.o}, a: 2, W: {f: 1}, v: -10, H: 600}}, {i: 1500, x: .5, q: 2, N: {Wb: 3}, e: {c: d.Vd}, a: 2, p: {i: 1500, a: 2}}, {i: 1500, x: -.3, y: .5, n: 1, f: .1, db: {c: [.6, .4], g: [.6, .4], f: [.6, .4], n: [.6, .4]}, e: {c: d.o, g: d.o, a: d.l, f: d.o}, a: 2, p: {i: 1e3, n: 11, f: -.5, e: {a: d.l, f: d.o}, a: 2, H: 200}}, {i: 1500, n: 11, f: .5, db: {c: [.4, .6], g: [.4, .6], f: [.4, .6], n: [.4, .6]}, e: {a: d.l, f: d.o}, a: 2, p: {i: 1e3, n: 1, f: -.5, e: {a: d.l, f: d.o}, a: 2, H: 200}}, {i: 1500, x: .3, db: {c: [.6, .4]}, e: {c: d.o, a: d.l}, a: 2, xd: e, p: {i: 1e3, x: -.3, e: {c: d.o, a: d.l}, a: 2}}, {i: 1200, x: .25, y: .5, f: -.1, e: {c: d.o, g: d.o, a: d.l, f: d.o}, a: 2, p: {i: 1200, x: -.1, y: -.7, f: .1, e: {c: d.o, g: d.o, a: d.l, f: d.o}, a: 2}}, {i: 1600, x: 1, C: 2, N: {Eb: 3}, e: {c: d.z, a: d.l}, a: 2, p: {i: 1600, x: -1, C: 2, N: {Eb: 3}, e: {c: d.z, a: d.l}, a: 2}}, {i: 1600, x: 1, C: 2, N: {Eb: 3}, e: {c: d.z, a: d.l}, a: 2, p: {i: 1600, x: -1, C: 2, N: {Eb: 3}, e: {c: d.z, a: d.l}, a: 2}}, {i: 1600, y: -1, q: 2, N: {Wb: 12}, e: {g: d.z, a: d.l}, a: 2, p: {i: 1600, y: 1, q: 2, N: {Wb: 12}, e: {g: d.z, a: d.l}, a: 2}}, {i: 1200, y: 1, e: {g: d.z, a: d.l}, a: 2, p: {i: 1200, y: -1, e: {g: d.z, a: d.l}, a: 2}}, {i: 1200, x: 1, e: {c: d.z, a: d.l}, a: 2, p: {i: 1200, x: -1, e: {c: d.z, a: d.l}, a: 2}}, {i: 1200, y: -1, e: {g: d.z, a: d.l}, a: 2, v: -10, p: {i: 1200, y: -1, e: {g: d.z, a: d.l}, a: 2, v: -10, H: -100}}, {i: 1200, x: 1, R: 40, q: 6, Ib: o.Sb, e: {c: d.z, a: d.l}, a: 2, v: -10, p: {i: 1200, x: 1, R: 40, q: 6, Ib: o.Sb, e: {g: d.z, a: d.l}, a: 2, v: -10, H: -100}}, {i: 1500, x: -.1, y: -.7, f: .1, db: {c: [.6, .4], g: [.6, .4], f: [.6, .4]}, e: {c: d.o, g: d.o, a: d.l, f: d.o}, a: 2, p: {i: 1e3, x: .2, y: .5, f: -.1, e: {c: d.o, g: d.o, a: d.l, f: d.o}, a: 2}}, {i: 1600, x: -.2, R: 40, q: 12, db: {c: [.4, .6]}, Zb: e, Ib: o.Sb, nc: 260, e: {c: d.vd, a: d.sd}, a: 2, xd: e, W: {g: .5}, p: {i: 1e3, x: .2, R: 40, q: 12, Ib: o.Sb, nc: 1028, e: {c: d.vd, a: d.sd}, a: 2, W: {g: .5}}}], j = {gc: e, rb: 5, ee: {lb: s, Ab: h, we: 1}, Ge: {lb: r}}, f = new i("jssor_1", j);
                    function a() {
                        var b = f.pb.parentNode.clientWidth;
                        if (b) {
                            b = c.min(b, 1349);
                            f.Wd(b)
                        } else
                            g.setTimeout(a, 30)
                    }
                    a();
                    b.k(g, "load", a);
                    b.k(g, "resize", a);
                    b.k(g, "orientationchange", a)
                }
            })(window, document, Math, null, true, false)