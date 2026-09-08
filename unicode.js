t = this,
e = function() {
    return n = {
        686: function(t, e, n) {
            "use strict";
            n.d(e, {
                default: function() {
                    return b
                }
            });
            var e = n(279)
              , i = n.n(e)
              , e = n(370)
              , u = n.n(e)
              , e = n(817)
              , r = n.n(e);
            function c(t) {
                try {
                    document.execCommand(t)
                } catch (t) {}
            }
            function a(t) {
                return t = r()(t),
                c("cut"),
                t
            }
            function o(t, e) {
                var n, o;
                n = t,
                o = "rtl" === document.documentElement.getAttribute("dir"),
                (t = document.createElement("textarea")).style.fontSize = "12pt",
                t.style.border = "0",
                t.style.padding = "0",
                t.style.margin = "0",
                t.style.position = "absolute",
                t.style[o ? "right" : "left"] = "-9999px",
                o = window.pageYOffset || document.documentElement.scrollTop,
                t.style.top = "".concat(o, "px"),
                t.setAttribute("readonly", ""),
                t.value = n;
                return e.container.appendChild(t),
                e = r()(t),
                c("copy"),
                t.remove(),
                e
            }
            function f(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                    container: document.body
                }
                  , n = "";
                return "string" == typeof t ? n = o(t, e) : t instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(null == t ? void 0 : t.type) ? n = o(t.value, e) : (n = r()(t),
                c("copy")),
                n
            }
            function l(t) {
                return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function p(t) {
                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function d(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            function y(t, e) {
                return (y = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e,
                    t
                }
                )(t, e)
            }
            function v(t) {
                return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
                )(t)
            }
            function m(t, e) {
                if (t = "data-clipboard-".concat(t),
                e.hasAttribute(t))
                    return e.getAttribute(t)
            }
            var b = function() {
                !function(t, e) {
                    if ("function" != typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && y(t, e)
                }(r, i());
                var t, n, o = function(n) {
                    var o = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ("function" == typeof Proxy)
                            return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                            !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function() {
                        var e = v(n)
                          , t = o ? (t = v(this).constructor,
                        Reflect.construct(e, arguments, t)) : e.apply(this, arguments)
                          , e = this;
                        return !t || "object" !== p(t) && "function" != typeof t ? function() {
                            if (void 0 !== e)
                                return e;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }() : t
                    }
                }(r);
                function r(t, e) {
                    var n;
                    return function(t) {
                        if (!(t instanceof r))
                            throw new TypeError("Cannot call a class as a function")
                    }(this),
                    (n = o.call(this)).resolveOptions(e),
                    n.listenClick(t),
                    n
                }
                return n = [{
                    key: "copy",
                    value: function(t) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                            container: document.body
                        };
                        return f(t, e)
                    }
                }, {
                    key: "cut",
                    value: a
                }, {
                    key: "isSupported",
                    value: function() {
                        var t = "string" == typeof (t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]) ? [t] : t
                          , e = !!document.queryCommandSupported;
                        return t.forEach(function(t) {
                            e = e && !!document.queryCommandSupported(t)
                        }),
                        e
                    }
                }],
                d((t = r).prototype, [{
                    key: "resolveOptions",
                    value: function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = "function" == typeof t.action ? t.action : this.defaultAction,
                        this.target = "function" == typeof t.target ? t.target : this.defaultTarget,
                        this.text = "function" == typeof t.text ? t.text : this.defaultText,
                        this.container = "object" === p(t.container) ? t.container : document.body
                    }
                }, {
                    key: "listenClick",
                    value: function(t) {
                        var e = this;
                        this.listener = u()(t, "click", function(t) {
                            return e.onClick(t)
                        })
                    }
                }, {
                    key: "onClick",
                    value: function(t) {
                        var e = t.delegateTarget || t.currentTarget
                          , n = this.action(e) || "copy"
                          , t = function() {
                            var n = void 0 === (e = (t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).action) ? "copy" : e
                              , o = t.container
                              , e = t.target
                              , t = t.text;
                            if ("copy" !== n && "cut" !== n)
                                throw new Error('Invalid "action" value, use either "copy" or "cut"');
                            if (void 0 !== e) {
                                if (!e || "object" !== l(e) || 1 !== e.nodeType)
                                    throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === n && e.hasAttribute("disabled"))
                                    throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === n && (e.hasAttribute("readonly") || e.hasAttribute("disabled")))
                                    throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')
                            }
                            return t ? f(t, {
                                container: o
                            }) : e ? "cut" === n ? a(e) : f(e, {
                                container: o
                            }) : void 0
                        }({
                            action: n,
                            container: this.container,
                            target: this.target(e),
                            text: this.text(e)
                        });
                        this.emit(t ? "success" : "error", {
                            action: n,
                            text: t,
                            trigger: e,
                            clearSelection: function() {
                                e && e.focus(),
                                window.getSelection().removeAllRanges()
                            }
                        })
                    }
                }, {
                    key: "defaultAction",
                    value: function(t) {
                        return m("action", t)
                    }
                }, {
                    key: "defaultTarget",
                    value: function(t) {
                        if (t = m("target", t))
                            return document.querySelector(t)
                    }
                }, {
                    key: "defaultText",
                    value: function(t) {
                        return m("text", t)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.listener.destroy()
                    }
                }]),
                d(t, n),
                r
            }()
        },
        828: function(t) {
            var e;
            "undefined" == typeof Element || Element.prototype.matches || ((e = Element.prototype).matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector),
            t.exports = function(t, e) {
                for (; t && 9 !== t.nodeType; ) {
                    if ("function" == typeof t.matches && t.matches(e))
                        return t;
                    t = t.parentNode
                }
            }
        },
        438: function(t, e, n) {
            var u = n(828);
            function i(t, e, n, o, r) {
                var i = function(e, n, t, o) {
                    return function(t) {
                        t.delegateTarget = u(t.target, n),
                        t.delegateTarget && o.call(e, t)
                    }
                }
                .apply(this, arguments);
                return t.addEventListener(n, i, r),
                {
                    destroy: function() {
                        t.removeEventListener(n, i, r)
                    }
                }
            }
            t.exports = function(t, e, n, o, r) {
                return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)),
                Array.prototype.map.call(t, function(t) {
                    return i(t, e, n, o, r)
                }))
            }
        },
        879: function(t, n) {
            n.node = function(t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
            }
            ,
            n.nodeList = function(t) {
                var e = Object.prototype.toString.call(t);
                return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length"in t && (0 === t.length || n.node(t[0]))
            }
            ,
            n.string = function(t) {
                return "string" == typeof t || t instanceof String
            }
            ,
            n.fn = function(t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            }
        },
        370: function(t, e, n) {
            var f = n(879)
              , l = n(438);
            t.exports = function(t, e, n) {
                if (!t && !e && !n)
                    throw new Error("Missing required arguments");
                if (!f.string(e))
                    throw new TypeError("Second argument must be a String");
                if (!f.fn(n))
                    throw new TypeError("Third argument must be a Function");
                if (f.node(t))
                    return (u = t).addEventListener(c = e, a = n),
                    {
                        destroy: function() {
                            u.removeEventListener(c, a)
                        }
                    };
                if (f.nodeList(t))
                    return o = t,
                    r = e,
                    i = n,
                    Array.prototype.forEach.call(o, function(t) {
                        t.addEventListener(r, i)
                    }),
                    {
                        destroy: function() {
                            Array.prototype.forEach.call(o, function(t) {
                                t.removeEventListener(r, i)
                            })
                        }
                    };
                if (f.string(t))
                    return l(document.body, t, e, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                var o, r, i, u, c, a
            }
        },
        817: function(t) {
            t.exports = function(t) {
                var e, n = "SELECT" === t.nodeName ? (t.focus(),
                t.value) : "INPUT" === t.nodeName || "TEXTAREA" === t.nodeName ? ((e = t.hasAttribute("readonly")) || t.setAttribute("readonly", ""),
                t.select(),
                t.setSelectionRange(0, t.value.length),
                e || t.removeAttribute("readonly"),
                t.value) : (t.hasAttribute("contenteditable") && t.focus(),
                n = window.getSelection(),
                (e = document.createRange()).selectNodeContents(t),
                n.removeAllRanges(),
                n.addRange(e),
                n.toString());
                return n
            }
        },
        279: function(t) {
            function e() {}
            e.prototype = {
                on: function(t, e, n) {
                    var o = this.e || (this.e = {});
                    return (o[t] || (o[t] = [])).push({
                        fn: e,
                        ctx: n
                    }),
                    this
                },
                once: function(t, e, n) {
                    var o = this;
                    function r() {
                        o.off(t, r),
                        e.apply(n, arguments)
                    }
                    return r._ = e,
                    this.on(t, r, n)
                },
                emit: function(t) {
                    for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o < r; o++)
                        n[o].fn.apply(n[o].ctx, e);
                    return this
                },
                off: function(t, e) {
                    var n = this.e || (this.e = {})
                      , o = n[t]
                      , r = [];
                    if (o && e)
                        for (var i = 0, u = o.length; i < u; i++)
                            o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
                    return r.length ? n[t] = r : delete n[t],
                    this
                }
            },
            t.exports = e,
            t.exports.TinyEmitter = e
        }
    },
    r = {},
    o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return o.d(e, {
            a: e
        }),
        e
    }
    ,
    o.d = function(t, e) {
        for (var n in e)
            o.o(e, n) && !o.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: e[n]
            })
    }
    ,
    o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    o(686).default;
    function o(t) {
        var e;
        return (r[t] || (e = r[t] = {
            exports: {}
        },
        n[t](e, e.exports, o),
        e)).exports
    }
    var n, r
}
,
"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e(),
t = this,
e = function() {
    "use strict";
    function c(a, b, c) {
        var d = new XMLHttpRequest;
        d.open("GET", a),
        d.responseType = "blob",
        d.onload = function() {
            g(d.response, b, c)
        }
        ,
        d.onerror = function() {}
        ,
        d.send()
    }
    function d(a) {
        var b = new XMLHttpRequest;
        b.open("HEAD", a, !1);
        try {
            b.send()
        } catch (a) {}
        return 200 <= b.status && b.status <= 299
    }
    function e(a) {
        try {
            a.dispatchEvent(new MouseEvent("click"))
        } catch (c) {
            var b = document.createEvent("MouseEvents");
            b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null),
            a.dispatchEvent(b)
        }
    }
    var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0
      , a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent)
      , g = f.saveAs || ("object" != typeof window || window !== f ? function() {}
    : "download"in HTMLAnchorElement.prototype && !a ? function(b, g, h) {
        var i = f.URL || f.webkitURL
          , j = document.createElement("a");
        g = g || b.name || "download",
        j.download = g,
        j.rel = "noopener",
        "string" == typeof b ? (j.href = b,
        j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b),
        setTimeout(function() {
            i.revokeObjectURL(j.href)
        }, 4e4),
        setTimeout(function() {
            e(j)
        }, 0))
    }
    : "msSaveOrOpenBlob"in navigator ? function(f, g, h) {
        var i;
        g = g || f.name || "download",
        "string" != typeof f ? navigator.msSaveOrOpenBlob(function(a, b) {
            return void 0 === b ? b = {
                autoBom: !1
            } : "object" != typeof b && (b = {
                autoBom: !b
            }),
            b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\ufeff", a],{
                type: a.type
            }) : a
        }(f, h), g) : d(f) ? c(f, g, h) : ((i = document.createElement("a")).href = f,
        i.target = "_blank",
        setTimeout(function() {
            e(i)
        }))
    }
    : function(b, d, e, g) {
        if ((g = g || open("", "_blank")) && (g.document.title = g.document.body.innerText = "downloading..."),
        "string" == typeof b)
            return c(b, d, e);
        var k, l, m, d = "application/octet-stream" === b.type, e = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
        (j || d && e || a) && "undefined" != typeof FileReader ? ((k = new FileReader).onloadend = function() {
            var a = k.result
              , a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;");
            g ? g.location.href = a : location = a,
            g = null
        }
        ,
        k.readAsDataURL(b)) : (l = f.URL || f.webkitURL,
        m = l.createObjectURL(b),
        g ? g.location = m : location.href = m,
        g = null,
        setTimeout(function() {
            l.revokeObjectURL(m)
        }, 4e4))
    }
    );
    f.saveAs = g.saveAs = g,
    "undefined" != typeof module && (module.exports = g)
}
,
"function" == typeof define && define.amd ? define([], e) : "undefined" != typeof exports ? e() : (e(),
t.FileSaver = {});
var t, e, te, ie = ["/22181265/ConvertCase_728x90_ATF", "/22181265/ConvertCase_300x250_Belowtxtbox_1", "/22181265/ConvertCase_300x250_Belowtxtbox_2"], oe = '<img src="../svg/copy.svg" class="copy" alt="Copy to Clipboard">';
function ue(_, $) {
    var ee;
    "undefined" != typeof gtag && (value = 0,
    null != (ee = document.getElementById("word_count")) && (value = parseInt(ee.innerHTML)),
    gtag("event", $, {
        event_category: _,
        value: value
    }))
}
function le(_) {
    var $ = _.value
      , _ = (void 0 === _.value && ($ = _.innerText),
    document.getElementById("char_count").innerHTML = $.length,
    0)
      , ee = $.trim().replace(/\s+/gi, " ")
      , ee = (0 < ee.length && (_ = ee.split(" ").length),
    document.getElementById("word_count").innerHTML = _,
    0);
    0 < $.length && (ee = $.split(/\r*\n/).length),
    document.getElementById("line_count").innerHTML = ee
}
function de(_, $) {
    clearTimeout(te);
    var ee = document.querySelector(".messages");
    ee.innerHTML = '<div class="message ' + $ + '">' + _ + "</div>",
    te = setTimeout(function() {
        ee.innerHTML = ""
    }, 3e3)
}
var $ = Date.now()
  , ee = [];
function se() {
    $ + 5e3 < Date.now() && ((window.aaw = window.aaw || {
        cmd: []
    }).cmd.push(function() {
        0 < ee.length && (window.aaw.refreshAdunits(ee),
        ee = [])
    }),
    $ = Date.now())
}
function re(_, $, ee, te="string") {
    for (var ne = [], c = 0; c < _.length; c++) {
        var oe = _.charAt(c)
          , re = oe;
        $[re = ee ? oe.toLowerCase() : re] ? ne.push($[re]) : ne.push(oe)
    }
    return ne = "string" == te ? (ne = ne.join("")).replace(/\n/g, "<br>") : ne
}
(window.googletag = window.googletag || {
    cmd: []
}).cmd.push(function() {
    googletag.pubads().addEventListener("impressionViewable", function(_) {
        _ = (_ = _.slot.getAdUnitPath()).replace("22181265,153247860", "22181265");
        ie.includes(_) && ee.push(_)
    })
}),
setInterval(function() {
    var _;
    "visible" === (void 0 !== document.hidden ? _ = "visibilityState" : void 0 !== document.mozHidden ? _ = "mozVisibilityState" : void 0 !== document.msHidden ? _ = "msVisibilityState" : void 0 !== document.webkitHidden && (_ = "webkitVisibilityState"),
    document[_]) && $ + 3e4 < Date.now() && se()
}, 1e3),
document.addEventListener("DOMContentLoaded", function() {
    var _, $ = document.getElementById("content"), ee = document.getElementById("output");
    if (null != document.getElementById("char_count") && (_ = ee,
    null != $ && ((_ = $).addEventListener("focus", function() {
        le(_)
    }),
    $.addEventListener("blur", function() {
        le(_)
    }),
    $.addEventListener("input", function() {
        le(_)
    }),
    $.addEventListener("propertychange", function() {
        le(_)
    }),
    le(_)),
    null != ee) && (ee.addEventListener("focus", function() {
        le(_)
    }),
    ee.addEventListener("blur", function() {
        le(_)
    }),
    ee.addEventListener("input", function() {
        le(_)
    }),
    ee.addEventListener("propertychange", function() {
        le(_)
    }),
    le(_)),
    document.getElementById("copy") && (($ = new ClipboardJS("#copy",{
        text: function(_) {
            return document.querySelectorAll(_.getAttribute("data-clipboard-target"))[0].innerText
        }
    })).on("success", function(e) {
        de("success"),
        ue("Copied", "Copied"),
        se(),
        e.clearSelection()
    }),
    $.on("error", function(e) {
        0 === e.text.length ? de(no_text, "error") : (de(manual_copy, "info"),
        ue("Copied", "Manual"),
        se())
    }),
    (ee = new ClipboardJS(".copy",{
        text: function(_) {
            return _.parentNode.innerText
        }
    })).on("success", function(e) {
        de("success"),
        ue("Copied", "Copied"),
        se(),
        e.clearSelection()
    }),
    ee.on("error", function(e) {
        0 === e.text.length ? de(no_text, "error") : (de(manual_copy, "info"),
        ue("Copied", "Manual"),
        se())
    })),
    document.getElementById("download"))
        try {
            new Blob;
            var file_name = 'download.txt';
            var te = document.getElementById("download");
            te && (te.style.display = "inline-block",
            te.addEventListener("click", function(e) {
                var _, $, ee;
                return "image/webp" === te.getAttribute("data-download-type") ? (ee = function(_) {
                    for (var $ = atob(_.split(",")[1]), _ = _.split(",")[0].split(":")[1].split(";")[0], ee = new ArrayBuffer($.length), te = new Uint8Array(ee), i = 0; i < $.length; i++)
                        te[i] = $.charCodeAt(i);
                    return new Blob([ee],{
                        type: _
                    })
                }((_ = document.getElementById(te.getAttribute("data-download-target").slice(1))).src),
                saveAs(ee, _.getAttribute("data-filename")),
                de(downloaded_image, "success"),
                ue("Download", "Download"),
                se()) : "application/json" === te.getAttribute("data-download-type") ? 0 === ($ = document.getElementById(te.getAttribute("data-download-target").slice(1)).value.replace(/\n/g, "\r\n")).length ? de(no_text, "error") : (ee = new Blob([$],{
                    type: "application/json;charset=utf-8"
                }),
                _ = file_name.replace(".txt", ".json"),
                saveAs(ee, _),
                de(downloaded_json, "success"),
                ue("Download", "Download"),
                se()) : 0 === ($ = ("innerText" === te.getAttribute("data-download-type") ? document.getElementById(te.getAttribute("data-download-target").slice(1)).innerText : document.getElementById(te.getAttribute("data-download-target").slice(1)).value).replace(/\n/g, "\r\n")).length ? de(no_text, "error") : (ee = new Blob([$],{
                    type: "text/plain;charset=utf-8"
                }),
                saveAs(ee, file_name),
                de("success"),
                ue("Download", "Download"),
                se()),
                !1
            }))
        } catch (e) {}
    var ne = document.querySelectorAll(".share");
    if (null != ne)
        for (var i = 0; i < ne.length; i++)
            ne[i].addEventListener("click", function(e) {
                var _, $, ee, te;
                return e.preventDefault(),
                e = this.href,
                _ = 520,
                $ = 320,
                ee = screen.width / 2 - _ / 2,
                te = screen.height / 2 - $ / 2,
                window.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + _ + ",height=" + $ + ",top=" + te + ",left=" + ee),
                !1
            });
});
var ae = {
    a: "𝒶",
    b: "𝒷",
    c: "𝒸",
    d: "𝒹",
    e: "ℯ",
    f: "𝒻",
    g: "ℊ",
    h: "𝒽",
    i: "𝒾",
    j: "𝒿",
    k: "𝓀",
    l: "𝓁",
    m: "𝓂",
    n: "𝓃",
    o: "ℴ",
    p: "𝓅",
    q: "𝓆",
    r: "𝓇",
    s: "𝓈",
    t: "𝓉",
    u: "𝓊",
    v: "𝓋",
    w: "𝓌",
    x: "𝓍",
    y: "𝓎",
    z: "𝓏",
    A: "𝒜",
    B: "ℬ",
    C: "𝒞",
    D: "𝒟",
    E: "ℰ",
    F: "ℱ",
    G: "𝒢",
    H: "ℋ",
    I: "ℐ",
    J: "𝒥",
    K: "𝒦",
    L: "ℒ",
    M: "ℳ",
    N: "𝒩",
    O: "𝒪",
    P: "𝒫",
    Q: "𝒬",
    R: "ℛ",
    S: "𝒮",
    T: "𝒯",
    U: "𝒰",
    V: "𝒱",
    W: "𝒲",
    X: "𝒳",
    Y: "𝒴",
    Z: "𝒵"
}
  , ce = {
    a: "𝓪",
    b: "𝓫",
    c: "𝓬",
    d: "𝓭",
    e: "𝓮",
    f: "𝓯",
    g: "𝓰",
    h: "𝓱",
    i: "𝓲",
    j: "𝓳",
    k: "𝓴",
    l: "𝓵",
    m: "𝓶",
    n: "𝓷",
    o: "𝓸",
    p: "𝓹",
    q: "𝓺",
    r: "𝓻",
    s: "𝓼",
    t: "𝓽",
    u: "𝓾",
    v: "𝓿",
    w: "𝔀",
    x: "𝔁",
    y: "𝔂",
    z: "𝔃",
    A: "𝓐",
    B: "𝓑",
    C: "𝓒",
    D: "𝓓",
    E: "𝓔",
    F: "𝓕",
    G: "𝓖",
    H: "𝓗",
    I: "𝓘",
    J: "𝓙",
    K: "𝓚",
    L: "𝓛",
    M: "𝓜",
    N: "𝓝",
    O: "𝓞",
    P: "𝓟",
    Q: "𝓠",
    R: "𝓡",
    S: "𝓢",
    T: "𝓣",
    U: "𝓤",
    V: "𝓥",
    W: "𝓦",
    X: "𝓧",
    Y: "𝓨",
    Z: "𝓩",
    1: "𝟏",
    2: "𝟐",
    3: "𝟑",
    4: "𝟒",
    5: "𝟓",
    6: "𝟔",
    7: "𝟕",
    8: "𝟖",
    9: "𝟗",
    0: "𝟎",
    "!": "❗",
    "?": "❓"
}
  , fe = {
    a: "𝔞",
    b: "𝔟",
    c: "𝔠",
    d: "𝔡",
    e: "𝔢",
    f: "𝔣",
    g: "𝔤",
    h: "𝔥",
    i: "𝔦",
    j: "𝔧",
    k: "𝔨",
    l: "𝔩",
    m: "𝔪",
    n: "𝔫",
    o: "𝔬",
    p: "𝔭",
    q: "𝔮",
    r: "𝔯",
    s: "𝔰",
    t: "𝔱",
    u: "𝔲",
    v: "𝔳",
    w: "𝔴",
    x: "𝔵",
    y: "𝔶",
    z: "𝔷",
    A: "𝔄",
    B: "𝔅",
    C: "ℭ",
    D: "𝔇",
    E: "𝔈",
    F: "𝔉",
    G: "𝔊",
    H: "ℌ",
    I: "ℑ",
    J: "𝔍",
    K: "𝔎",
    L: "𝔏",
    M: "𝔐",
    N: "𝔑",
    O: "𝔒",
    P: "𝔓",
    Q: "𝔔",
    R: "ℜ",
    S: "𝔖",
    T: "𝔗",
    U: "𝔘",
    V: "𝔙",
    W: "𝔚",
    X: "𝔛",
    Y: "𝔜",
    Z: "ℨ"
}
  , pe = {
    a: "𝖆",
    b: "𝖇",
    c: "𝖈",
    d: "𝖉",
    e: "𝖊",
    f: "𝖋",
    g: "𝖌",
    h: "𝖍",
    i: "𝖎",
    j: "𝖏",
    k: "𝖐",
    l: "𝖑",
    m: "𝖒",
    n: "𝖓",
    o: "𝖔",
    p: "𝖕",
    q: "𝖖",
    r: "𝖗",
    s: "𝖘",
    t: "𝖙",
    u: "𝖚",
    v: "𝖛",
    w: "𝖜",
    x: "𝖝",
    y: "𝖞",
    z: "𝖟",
    A: "𝕬",
    B: "𝕭",
    C: "𝕮",
    D: "𝕯",
    E: "𝕰",
    F: "𝕱",
    G: "𝕲",
    H: "𝕳",
    I: "𝕴",
    J: "𝕵",
    K: "𝕶",
    L: "𝕷",
    M: "𝕸",
    N: "𝕹",
    O: "𝕺",
    P: "𝕻",
    Q: "𝕼",
    R: "𝕽",
    S: "𝕾",
    T: "𝕿",
    U: "𝖀",
    V: "𝖁",
    W: "𝖂",
    X: "𝖃",
    Y: "𝖄",
    Z: "𝖅",
    1: "❗",
    2: "𝟐",
    3: "𝟑",
    4: "𝟒",
    5: "𝟓",
    6: "𝟔",
    7: "𝟕",
    8: "𝟖",
    9: "𝟗",
    0: "𝟎",
    "?": "❓"
}
  , ye = {
    a: "ⓐ",
    b: "ⓑ",
    c: "ⓒ",
    d: "ⓓ",
    e: "ⓔ",
    f: "ⓕ",
    g: "ⓖ",
    h: "ⓗ",
    i: "ⓘ",
    j: "ⓙ",
    k: "ⓚ",
    l: "ⓛ",
    m: "ⓜ",
    n: "ⓝ",
    o: "ⓞ",
    p: "ⓟ",
    q: "ⓠ",
    r: "ⓡ",
    s: "ⓢ",
    t: "ⓣ",
    u: "ⓤ",
    v: "ⓥ",
    w: "ⓦ",
    x: "ⓧ",
    y: "ⓨ",
    z: "ⓩ",
    A: "Ⓐ",
    B: "Ⓑ",
    C: "Ⓒ",
    D: "Ⓓ",
    E: "Ⓔ",
    F: "Ⓕ",
    G: "Ⓖ",
    H: "Ⓗ",
    I: "Ⓘ",
    J: "Ⓙ",
    K: "Ⓚ",
    L: "Ⓛ",
    M: "Ⓜ",
    N: "Ⓝ",
    O: "Ⓞ",
    P: "Ⓟ",
    Q: "Ⓠ",
    R: "Ⓡ",
    S: "Ⓢ",
    T: "Ⓣ",
    U: "Ⓤ",
    V: "Ⓥ",
    W: "Ⓦ",
    X: "Ⓧ",
    Y: "Ⓨ",
    Z: "Ⓩ",
    1: "①",
    2: "②",
    3: "③",
    4: "④",
    5: "⑤",
    6: "⑥",
    7: "⑦",
    8: "⑧",
    9: "⑨",
    0: "⓪"
}
  , me = {
    a: "🅐",
    b: "🅑",
    c: "🅒",
    d: "🅓",
    e: "🅔",
    f: "🅕",
    g: "🅖",
    h: "🅗",
    i: "🅘",
    j: "🅙",
    k: "🅚",
    l: "🅛",
    m: "🅜",
    n: "🅝",
    o: "🅞",
    p: "🅟",
    q: "🅠",
    r: "🅡",
    s: "🅢",
    t: "🅣",
    u: "🅤",
    v: "🅥",
    w: "🅦",
    x: "🅧",
    y: "🅨",
    z: "🅩",
    1: "➊",
    2: "➋",
    3: "➌",
    4: "➍",
    5: "➎",
    6: "➏",
    7: "➐",
    8: "➑",
    9: "➒",
    0: "⓿"
}
  , ve = {
    a: "🄰",
    b: "🄱",
    c: "🄲",
    d: "🄳",
    e: "🄴",
    f: "🄵",
    g: "🄶",
    h: "🄷",
    i: "🄸",
    j: "🄹",
    k: "🄺",
    l: "🄻",
    m: "🄼",
    n: "🄽",
    o: "🄾",
    p: "🄿",
    q: "🅀",
    r: "🅁",
    s: "🅂",
    t: "🅃",
    u: "🅄",
    v: "🅅",
    w: "🅆",
    x: "🅇",
    y: "🅈",
    z: "🅉",
    A: "🄰",
    B: "🄱",
    C: "🄲",
    D: "🄳",
    E: "🄴",
    F: "🄵",
    G: "🄶",
    H: "🄷",
    I: "🄸",
    J: "🄹",
    K: "🄺",
    L: "🄻",
    M: "🄼",
    N: "🄽",
    O: "🄾",
    P: "🄿",
    Q: "🅀",
    R: "🅁",
    S: "🅂",
    T: "🅃",
    U: "🅄",
    V: "🅅",
    W: "🅆",
    X: "🅇",
    Y: "🅈",
    Z: "🅉",
    ".": "⊡"
}
  , ge = {
    a: "🅰",
    b: "🅱",
    c: "🅲",
    d: "🅳",
    e: "🅴",
    f: "🅵",
    g: "🅶",
    h: "🅷",
    i: "🅸",
    j: "🅹",
    k: "🅺",
    l: "🅻",
    m: "🅼",
    n: "🅽",
    o: "🅾",
    p: "🅿",
    q: "🆀",
    r: "🆁",
    s: "🆂",
    t: "🆃",
    u: "🆄",
    v: "🆅",
    w: "🆆",
    x: "🆇",
    y: "🆈",
    z: "🆉",
    A: "🅰",
    B: "🅱",
    C: "🅲",
    D: "🅳",
    E: "🅴",
    F: "🅵",
    G: "🅶",
    H: "🅷",
    I: "🅸",
    J: "🅹",
    K: "🅺",
    L: "🅻",
    M: "🅼",
    N: "🅽",
    O: "🅾",
    P: "🅿",
    Q: "🆀",
    R: "🆁",
    S: "🆂",
    T: "🆃",
    U: "🆄",
    V: "🆅",
    W: "🆆",
    X: "🆇",
    Y: "🆈",
    Z: "🆉"
}
  , he = {
    a: "ᴀ",
    b: "ʙ",
    c: "ᴄ",
    d: "ᴅ",
    e: "ᴇ",
    f: "ꜰ",
    g: "ɢ",
    h: "ʜ",
    i: "ɪ",
    j: "ᴊ",
    k: "ᴋ",
    l: "ʟ",
    m: "ᴍ",
    n: "ɴ",
    o: "ᴏ",
    p: "ᴘ",
    r: "ʀ",
    s: "ꜱ",
    t: "ᴛ",
    u: "ᴜ",
    v: "ᴠ",
    w: "ᴡ",
    y: "ʏ",
    z: "ᴢ"
}
  , be = {
    " ": " ",
    0: "０",
    1: "１",
    2: "２",
    3: "３",
    4: "４",
    5: "５",
    6: "６",
    7: "７",
    8: "８",
    9: "９",
    a: "ａ",
    b: "ｂ",
    c: "ｃ",
    d: "ｄ",
    e: "ｅ",
    f: "ｆ",
    g: "ｇ",
    h: "ｈ",
    i: "ｉ",
    j: "ｊ",
    k: "ｋ",
    l: "ｌ",
    m: "ｍ",
    n: "ｎ",
    o: "ｏ",
    p: "ｐ",
    q: "ｑ",
    r: "ｒ",
    s: "ｓ",
    t: "ｔ",
    u: "ｕ",
    v: "ｖ",
    w: "ｗ",
    x: "ｘ",
    y: "ｙ",
    z: "ｚ",
    A: "Ａ",
    B: "Ｂ",
    C: "Ｃ",
    D: "Ｄ",
    E: "Ｅ",
    F: "Ｆ",
    G: "Ｇ",
    H: "Ｈ",
    I: "Ｉ",
    J: "Ｊ",
    K: "Ｋ",
    L: "Ｌ",
    M: "Ｍ",
    N: "Ｎ",
    O: "Ｏ",
    P: "Ｐ",
    Q: "Ｑ",
    R: "Ｒ",
    S: "Ｓ",
    T: "Ｔ",
    U: "Ｕ",
    V: "Ｖ",
    W: "Ｗ",
    X: "Ｘ",
    Y: "Ｙ",
    Z: "Ｚ",
    "!": "！",
    '"': "゛",
    "#": "＃",
    $: "＄",
    "%": "％",
    "&": "＆",
    "(": "（",
    ")": "）",
    "*": "＊",
    "+": "＋",
    ",": "、",
    "-": "ー",
    ".": "。",
    "/": "／",
    ":": "：",
    ";": "；",
    "<": "〈",
    "=": "＝",
    ">": "〉",
    "?": "？",
    "@": "＠",
    "[": "［",
    "'": "'",
    "]": "］",
    "^": "＾",
    _: "＿",
    "`": "‘",
    "{": "｛",
    "|": "｜",
    "}": "｝",
    "~": "～"
}
  , we = {
    a: "𝚊",
    b: "𝚋",
    c: "𝚌",
    d: "𝚍",
    e: "𝚎",
    f: "𝚏",
    g: "𝚐",
    h: "𝚑",
    i: "𝚒",
    j: "𝚓",
    k: "𝚔",
    l: "𝚕",
    m: "𝚖",
    n: "𝚗",
    o: "𝚘",
    p: "𝚙",
    q: "𝚚",
    r: "𝚛",
    s: "𝚜",
    t: "𝚝",
    u: "𝚞",
    v: "𝚟",
    w: "𝚠",
    x: "𝚡",
    y: "𝚢",
    z: "𝚣",
    A: "𝙰",
    B: "𝙱",
    C: "𝙲",
    D: "𝙳",
    E: "𝙴",
    F: "𝙵",
    G: "𝙶",
    H: "𝙷",
    I: "𝙸",
    J: "𝙹",
    K: "𝙺",
    L: "𝙻",
    M: "𝙼",
    N: "𝙽",
    O: "𝙾",
    P: "𝙿",
    Q: "𝚀",
    R: "𝚁",
    S: "𝚂",
    T: "𝚃",
    U: "𝚄",
    V: "𝚅",
    W: "𝚆",
    X: "𝚇",
    Y: "𝚈",
    Z: "𝚉",
    1: "𝟷",
    2: "𝟸",
    3: "𝟹",
    4: "𝟺",
    5: "𝟻",
    6: "𝟼",
    7: "𝟽",
    8: "𝟾",
    9: "𝟿",
    0: "𝟶",
    "!": "！",
    "?": "？",
    ".": "．"
}
  , Ee = {
    a: "𝖺",
    b: "𝖻",
    c: "𝖼",
    d: "𝖽",
    e: "𝖾",
    f: "𝖿",
    g: "𝗀",
    h: "𝗁",
    i: "𝗂",
    j: "𝗃",
    k: "𝗄",
    l: "𝗅",
    m: "𝗆",
    n: "𝗇",
    o: "𝗈",
    p: "𝗉",
    q: "𝗊",
    r: "𝗋",
    s: "𝗌",
    t: "𝗍",
    u: "𝗎",
    v: "𝗏",
    w: "𝗐",
    x: "𝗑",
    y: "𝗒",
    z: "𝗓",
    A: "𝖠",
    B: "𝖡",
    C: "𝖢",
    D: "𝖣",
    E: "𝖤",
    F: "𝖥",
    G: "𝖦",
    H: "𝖧",
    I: "𝖨",
    J: "𝖩",
    K: "𝖪",
    L: "𝖫",
    M: "𝖬",
    N: "𝖭",
    O: "𝖮",
    P: "𝖯",
    Q: "𝖰",
    R: "𝖱",
    S: "𝖲",
    T: "𝖳",
    U: "𝖴",
    V: "𝖵",
    W: "𝖶",
    X: "𝖷",
    Y: "𝖸",
    Z: "𝖹",
    0: "𝟢",
    1: "𝟣",
    2: "𝟤",
    3: "𝟥",
    4: "𝟦",
    5: "𝟧",
    6: "𝟨",
    7: "𝟩",
    8: "𝟪",
    9: "𝟫"
}
  , Se = {
    a: "𝘢",
    b: "𝘣",
    c: "𝘤",
    d: "𝘥",
    e: "𝘦",
    f: "𝘧",
    g: "𝘨",
    h: "𝘩",
    i: "𝘪",
    j: "𝘫",
    k: "𝘬",
    l: "𝘭",
    m: "𝘮",
    n: "𝘯",
    o: "𝘰",
    p: "𝘱",
    q: "𝘲",
    r: "𝘳",
    s: "𝘴",
    t: "𝘵",
    u: "𝘶",
    v: "𝘷",
    w: "𝘸",
    x: "𝘹",
    y: "𝘺",
    z: "𝘻",
    A: "𝘈",
    B: "𝘉",
    C: "𝘊",
    D: "𝘋",
    E: "𝘌",
    F: "𝘍",
    G: "𝘎",
    H: "𝘏",
    I: "𝘐",
    J: "𝘑",
    K: "𝘒",
    L: "𝘓",
    M: "𝘔",
    N: "𝘕",
    O: "𝘖",
    P: "𝘗",
    Q: "𝘘",
    R: "𝘙",
    S: "𝘚",
    T: "𝘛",
    U: "𝘜",
    V: "𝘝",
    W: "𝘞",
    X: "𝘟",
    Y: "𝘠",
    Z: "𝘡"
}
  , Le = {
    a: "𝗮",
    b: "𝗯",
    c: "𝗰",
    d: "𝗱",
    e: "𝗲",
    f: "𝗳",
    g: "𝗴",
    h: "𝗵",
    i: "𝗶",
    j: "𝗷",
    k: "𝗸",
    l: "𝗹",
    m: "𝗺",
    n: "𝗻",
    o: "𝗼",
    p: "𝗽",
    q: "𝗾",
    r: "𝗿",
    s: "𝘀",
    t: "𝘁",
    u: "𝘂",
    v: "𝘃",
    w: "𝘄",
    x: "𝘅",
    y: "𝘆",
    z: "𝘇",
    A: "𝗔",
    B: "𝗕",
    C: "𝗖",
    D: "𝗗",
    E: "𝗘",
    F: "𝗙",
    G: "𝗚",
    H: "𝗛",
    I: "𝗜",
    J: "𝗝",
    K: "𝗞",
    L: "𝗟",
    M: "𝗠",
    N: "𝗡",
    O: "𝗢",
    P: "𝗣",
    Q: "𝗤",
    R: "𝗥",
    S: "𝗦",
    T: "𝗧",
    U: "𝗨",
    V: "𝗩",
    W: "𝗪",
    X: "𝗫",
    Y: "𝗬",
    Z: "𝗭",
    0: "𝟬",
    1: "𝟭",
    2: "𝟮",
    3: "𝟯",
    4: "𝟰",
    5: "𝟱",
    6: "𝟲",
    7: "𝟳",
    8: "𝟴",
    9: "𝟵"
}
  , xe = {
    a: "𝙖",
    b: "𝙗",
    c: "𝙘",
    d: "𝙙",
    e: "𝙚",
    f: "𝙛",
    g: "𝙜",
    h: "𝙝",
    i: "𝙞",
    j: "𝙟",
    k: "𝙠",
    l: "𝙡",
    m: "𝙢",
    n: "𝙣",
    o: "𝙤",
    p: "𝙥",
    q: "𝙦",
    r: "𝙧",
    s: "𝙨",
    t: "𝙩",
    u: "𝙪",
    v: "𝙫",
    w: "𝙬",
    x: "𝙭",
    y: "𝙮",
    z: "𝙯",
    A: "𝘼",
    B: "𝘽",
    C: "𝘾",
    D: "𝘿",
    E: "𝙀",
    F: "𝙁",
    G: "𝙂",
    H: "𝙃",
    I: "𝙄",
    J: "𝙅",
    K: "𝙆",
    L: "𝙇",
    M: "𝙈",
    N: "𝙉",
    O: "𝙊",
    P: "𝙋",
    Q: "𝙌",
    R: "𝙍",
    S: "𝙎",
    T: "𝙏",
    U: "𝙐",
    V: "𝙑",
    W: "𝙒",
    X: "𝙓",
    Y: "𝙔",
    Z: "𝙕"
};
function _() {
    var _, $ = content.value, ee = ("" == $ && ($ = content.placeholder),
    ""), te = ($ = $,
    (_ = []).Script = re($, ae, !1),
    _["Script (Bold)"] = re($, ce, !1),
    _.Fraktur = re($, fe, !1),
    _["Fraktur (Bold)"] = re($, pe, !1),
    _.Circled = re($, ye, !1),
    _["Circled (Inverted)"] = re($, me, !0),
    _.Squared = re($, ve, !1),
    _["Squared (Inverted)"] = re($, ge, !1),
    _.Capitalized = re($, he, !1),
    _["Full Width"] = re($, be, !1),
    _.Monospace = re($, we, !1),
    _["Sans-Serif"] = re($, Ee, !1),
    _["Sans-Serif (Italic)"] = re($, Se, !1),
    _["Sans-Serif (Bold)"] = re($, Le, !1),
    _["Sans-Serif (Bold Italic)"] = re($, xe, !1),
    _);
    if ("object" == typeof te)
        for (var ne in te)
            isNaN(ne) && (ee += "<h3>" + ne + "</h3>"),
            ee += "<p>" + te[ne] + oe + "</p>";
    else
        ee = "<p>" + te + "</p>";
    document.getElementById("output").innerHTML = ee
}
_(),
content.addEventListener("input", function(e) {
    _(),
    se()
}),
content.addEventListener("propertychange", function(e) {
    _(),
    se()
});
