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
var t, e, te, ie = ["/22181265/ConvertCase_728x90_ATF", "/22181265/ConvertCase_300x250_Belowtxtbox_1", "/22181265/ConvertCase_300x250_Belowtxtbox_2"], ne = '<img src="/img/copy.svg" class="copy" alt="Copy to Clipboard">';
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
function _() {
    var _ = content.value
      , $ = ""
      , ee = function(_) {
        var $ = "";
        for (let i = 0; i < _.length; i++)
            $ += "ㅤ ";
        return $
    }(_ = "" == _ ? content.placeholder : _);
    if ("object" == typeof ee)
        for (var te in ee)
            isNaN(te) && ($ += "<h3>" + te + "</h3>"),
            $ += "<p>" + ee[te] + ne + "</p>";
    else
        $ = "<p>" + ee + "</p>";
    document.getElementById("output").innerHTML = $
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
}),
_(),
content.addEventListener("input", function(e) {
    _(),
    se()
}),
content.addEventListener("propertychange", function(e) {
    _(),
    se()
});
