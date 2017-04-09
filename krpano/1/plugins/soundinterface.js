var krpanoplugin = function() {
    function t() {
        var a = document.visibilityState;
        p(!(!0 === document.hidden || "hidden" == a || "prerender" == a || "unloaded" == a))
    }

    function C() {}

    function D() {
        var a = arguments;
        if (1 < a.length) {
            var b = String(a[0]).toLowerCase(),
                g = a[1],
                E = 2 < a.length ? parseInt(a[2]) : 1,
                m = 3 < a.length ? a[3] : null;
            if ("auto" == b || "null" == b || "" == b) b = "autoid_" + f.timertick + "_" + Math.ceil(1E3 * f.random);
            var h = g,
                a = h.split("|");
            if (1 < a.length) {
                if (null == d && (d = "", h = document.createElement("audio"), !(null === h || void 0 === h)))
                    if (d += ".wav",
                        void 0 !== h.canPlayType) {
                        var j = h.canPlayType("audio/ogg");
                        j.match(/maybe|probably/i) && (d += ".ogg", d += ".oga");
                        !1 == (l.android && l.firefox) && (j = h.canPlayType("audio/mpeg"), j.match(/maybe|probably/i) && (d += ".mp3", d += ".mp2", d += ".mpa"));
                        j = h.canPlayType("audio/mp4");
                        j.match(/maybe|probably/i) && (d += ".mp4");
                        j = h.canPlayType("audio/wav");
                        j.match(/maybe|probably/i) && (d += ".wav")
                    } else d += ".mp3";
                var j = a.length,
                    n, h = null;
                for (n = 0; n < j; n++) {
                    var q = String(a[n]).toLowerCase(),
                        q = q.slice(q.lastIndexOf("."));
                    if (0 < d.indexOf(q)) {
                        h =
                            a[n];
                        break
                    }
                }
                null == h && (h = a)
            }
            a = x.rootpath;
            null != a && 0 < a.length && "null" != String(a).toLowerCase() ? "/" != a.charAt(a.length - 1) && (a += "/") : a = "";
            var g = a = unescape(f.parsePath(a + h)),
                c = null;
            if (r && y && void 0 !== e[b]) {
                c = e[b];
                try {
                    c.currentTime = 0, c.pause()
                } catch (p) {}
                e[b] = null;
                delete e[b];
                c = null
            }
            if (null != c || void 0 !== e[b]) {
                null == c ? c = e[b] : e[b] = c;
                try {
                    c.currentTime = 0, c.pause()
                } catch (s) {}
            } else {
                c = document.createElement("audio");
                if (!c) {
                    f.trace(2, z);
                    return
                }
                c.addEventListener("error", function() {
                    f.trace(3, "soundinterface - loading of " +
                        g + " failed!");
                    e[b] = null;
                    delete e[b];
                    c = null
                }, !0);
                c.addEventListener("ended", function() {
                    try {
                        0 < c.loopcount ? (c.loopcount--, 0 == c.loopcount ? m && f.call(m) : (c.currentTime = 0, c.play())) : (c.currentTime = 0, c.play())
                    } catch (a) {}
                }, !0);
                e[b] = c
            }
            try {
                if (c.loopcount = E, c.src = g, c && (c.volume = u, c.play()), r && c && c.paused) {
                    var v = document.body,
                        w = function() {
                            try {
                                v.removeEventListener("touchstart", w, !0), k && k.paused && !k.ended && k.play()
                            } catch (a) {
                                k = null
                            }
                        };
                    v.removeEventListener("touchstart", w, !0);
                    k = c;
                    v.addEventListener("touchstart", w, !0)
                }
            } catch (t) {
                f.trace(2, z)
            }
        }
    }

    function F(a) {
        if (a = e[String(a).toLowerCase()]) try {
            a.pause()
        } catch (b) {}
    }

    function G(a) {
        if (a = e[String(a).toLowerCase()]) try {
            a.paused && a.play()
        } catch (b) {}
    }

    function H(a) {
        if (a = e[String(a).toLowerCase()]) try {
            a.paused ? a.play() : a.pause()
        } catch (b) {}
    }

    function I(a) {
        if (a = e[String(a).toLowerCase()]) {
            a == k && (k = null);
            try {
                a.currentTime = 0, a.pause()
            } catch (b) {}
        }
    }

    function A() {
        var a, b;
        for (a in e)
            if ((b = e[a]) && void 0 !== b.paused) {
                try {
                    b.pause()
                } catch (g) {}
                e[a] = null
            }
        e = [];
        k = null
    }

    function p(a) {
        var b,
            g;
        for (b in e) {
            g = e[b];
            try {
                g && void 0 !== g.paused && (!1 == a ? !1 == g.paused && (g.pause(), g.needresume = !0) : g.needresume && g.play())
            } catch (d) {}
        }
    }

    function B() {
        u = m ? 0 : s;
        var a, b;
        for (a in e)
            if (b = e[a]) try {
                b.volume = u, r && (m ? !1 == b.paused && (b._krp_muted = !0, b.pause()) : !0 == b._krp_muted && (b._krp_muted = !1, b.play()))
            } catch (d) {}
    }
    var f = null,
        x = null,
        l = null,
        e = [],
        k = null,
        r = !1,
        y = !1,
        z = "Soundinterface Plugin - HTML5 audio is not supported by this browser!",
        u = 1,
        s = 1,
        m = !1;
    this.registerplugin = function(a, b, d) {
        f = a;
        x = d;
        l = f.device;
        "1.17" > f.version ?
            f.trace(3, "Soundinterface Plugin - too old krpano version, min. version is 1.17!") : (d.keep = !0, d.registerattribute("rootpath", ""), d.registerattribute("volume", 1, function(a) {
                    s = a;
                    B()
                }, function() {
                    return s
                }), d.registerattribute("mute", !1, function(a) {
                    m = 0 <= "yesontrue1".indexOf(String(a).toLowerCase());
                    B()
                }, function() {
                    return m
                }), f.soundinterface = d, f.preloadsound = C, f.playsound = D, f.pausesound = F, f.resumesound = G, f.pausesoundtoggle = H, f.stopsound = I, f.stopallsounds = A, y = l.ios && 4.2 > l.iosversion, r = l.ios || l.android,
                window.addEventListener("pagehide", function() {
                    p(!1)
                }, !1), window.addEventListener("pageshow", function() {
                    p(!0)
                }, !1), document.addEventListener("visibilitychange", t, !1))
    };
    this.unloadplugin = function() {
        try {
            A(), document.removeEventListener("visibilitychange", t)
        } catch (a) {}
    };
    var d = null
};