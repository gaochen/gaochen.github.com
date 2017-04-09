var krpanoplugin = function() {
    function ji(e) {
        return ".yes.on.true.1" [l](("." + e)[f]()) >= 0
    }

    function Fi(e) {}

    function Ii() {
        Ti = 0;
        if (Dr[jt] || Wr)
            if (Dr[k]) {
                var e = ("" + navigator[bt])[f]()[l]("ucbrowser") > 0;
                Dr.chrome || Dr[st] ? Ti = 2 : e && (Ti = 2)
            } else Ti = 2;
        if (Ti > 0) {
            oi == 0 && (Ti = 1);
            if (Dr[p] && Wr) setTimeout(Ri, 10);
            else {
                window[s](Ti == 1 ? c : y, Ui, t);
                var r = Pr[a] != "" && Pr[a] != o;
                setTimeout(Ri, Dr[p] ? 10 : r ? 1500 : 3e3)
            }
        } else wi == t && (wi = n, _r[et](Pr[a], Pr))
    }

    function qi() {
        wi == t && (wi = n, di = n, vi = n, mi = n, gi = t, as(), _r[et](Pr[j], Pr))
    }

    function Ri() {
        window[r](c, Ui, t), window[r](y, Ui, t), Dr[p] && Wr ? qi() : wi == t && (wi = n, _r[et](Pr[a], Pr))
    }

    function Ui(e) {
        window[r](e.type, Ui, t), e.type == c || e.type == y && e[Ft] && e.rotationRate ? (wi = n, di = n, vi = n, Dr[p] && (mi = n), as(), _r[et](Pr[j], Pr)) : Dr[p] && Wr ? qi() : wi == t && (wi = n, _r[et](Pr[a], Pr))
    }

    function es(e) {
        di = t, e[Kt] > 0 && (zi = e[0], _r.trace(0, "WebVR Display: " + zi.displayName + " (connected=" + zi.isConnected + ", presenting=" + zi[Ht] + ", canpresent=" + zi[W].canPresent + " externaldisplay=" + zi[W][Hn] + ")"), di = n, zi && zi[W] && zi[W].canPresent), di ? (si == t && Dr[k] && (gi = n), window[s]("vrdisplaypresentchange", ts, t), _r[et](Pr[j], Pr)) : Dr[p] && Wr ? qi() : wi == t && (wi = n, _r[et](Pr[a], Pr))
    }

    function ts(e) {
        _r[D][$] = n;
        var i = _r[x][Ln],
            o = _r[b][I];
        zi[W][Hn] && (zi[Ht] ? Dr[p] && (_i && ("onpointerlockchange" in document ? document[s]("pointerlockchange", rs, t) : "onmozpointerlockchange" in document && document[s]("mozpointerlockchange", rs, t), Di.apply(o), _s = 1, i[s](St, Ds, t)), o[s](Et, js, t), document[s](Lr, ns, t)) : (document[r](Lr, ns, t), o[r](Et, js, t), i[r](St, Ds, t)))
    }

    function ns(e) {
        e.keyCode == 27 && Ss()
    }

    function rs() {
        var e = _r[b][I];
        document[Dn] !== e && document[dn] !== e && Ss()
    }

    function is(e) {
        var r;
        for (r = 0; r < e[Kt]; r++)
            if (e[r] instanceof HMDVRDevice) {
                Wi = e[r], Wi[v] ? (Vi = Wi[v](Dt), $i = Wi[v](Q), Ki = Vi[dr], Qi = $i[dr], Gi = Vi[fn], Yi = $i[fn]) : Wi[Ot] && Wi[H] && (Ki = Wi[Ot](Dt), Qi = Wi[Ot](Q), Gi = Wi[H](Dt), Yi = Wi[H](Q));
                var i = 2 * Math.max(Gi.leftDegrees, Gi.rightDegrees),
                    s = 2 * Math.max(Gi.upDegrees, Gi.downDegrees);
                Zi = Math.max(i, s);
                break
            }
        for (r = 0; r < e[Kt]; r++)
            if (e[r] instanceof PositionSensorVRDevice)
                if (Wi == o || Wi[Sr] == e[r][Sr]) {
                    Xi = e[r];
                    break
                }
        Wi || Xi ? (di = n, si == t && Dr[k] && (gi = n), _r[et](Pr[j], Pr)) : Dr[p] && Wr ? qi() : wi == t && (wi = n, _r[et](Pr[a], Pr))
    }

    function os(e) {
        pi = e;
        if (e) {
            ss = {
                imagehfov: _r.image.hfov,
                continuousupdates: _r[m][C],
                usercontrol: _r[x][Xt],
                mousetype: _r[x][mn],
                contextmenu_touch: _r[On].touch,
                loadwhilemoving: _r[b][U],
                stereo: _r[b][_n],
                stereooverlap: _r[b][pt],
                hlookat: _r[m][Y],
                vlookat: _r[m][nn],
                camroll: _r[m][An],
                fovmin: _r[m][Wt],
                fovmax: _r[m][zt],
                fisheye: _r[m][ut],
                fov: _r[m].fov,
                maxpixelzoom: _r[m][g],
                fovtype: _r[m][it],
                stereographic: _r[m][N],
                fisheyefovlink: _r[m][w],
                pannini: _r[m][tt],
                architectural: _r[m][d],
                limitview: _r[m][A],
                area_mode: _r[D].mode,
                area_align: _r[D].align,
                area_x: _r[D].x,
                area_y: _r[D].y,
                area_width: _r[D][vt],
                area_height: _r[D][B],
                maxmem: _r.memory[ur]
            }, _r[D].mode = "align", _r[D].align = "lefttop", _r[D].x = "0", _r[D].y = "0", _r[D][vt] = "100%", _r[D][B] = "100%", _r[D][$] = n, _r[On].touch = t, _r[m][C] = n, mi && Dr[p] && !_i ? _r[x][mn] = "drag2d" : _r[x][Xt] = ir, _r[b][_n] = n, _r[b][U] = n, _r[m][A] = ir, _r[m][tt] = 0, _r[m][d] = 0, _r[m][it] = yr, _r[m][Wt] = 0, _r[m][zt] = 179, _r[m][ut] = 0, _r[m].fov = Zi, _r[m][g] = 0, _r[m][N] = n, _r[m][w] = 0, ki = _r[m][Y], Bs = 0, Dr[p] || (ki -= Gs()), Ms();
            if (vi || gi) cs(0, 0), mi && Dr[p] && !_i || (_r[ft] = n);
            ks(), Xr && Os(n), _r.set("events[__webvr].keep", n), _r.set("events[__webvr].onnewpano", Ls), _r.set("events[__webvr].onresize", As), (vi || gi) && Ca(n), _r[et](Pr.onentervr, Pr)
        } else {
            Hr[r](Dr[T][_][q], Ps);
            if (ss) {
                _r.set("events[__webvr].name", o), _r[m][C] = ss[C], _r[x][Xt] = ss[Xt], _r[x][mn] = ss[mn], _r[On].touch = ss.contextmenu_touch, _r[b][U] = ss[U], _r[b][_n] = ss[_n], _r[b][pt] = ss[pt], _r[m][An] = 0;
                if (ss.imagehfov == _r.image.hfov) _r[m][Wt] = ss[Wt], _r[m][zt] = ss[zt], _r[m].fov = ss.fov, _r[m][g] = ss[g], _r[m][it] = ss[it], _r[m][A] = ss[A], _r[m][ut] = ss[ut], _r[m][N] = ss[N], _r[m][w] = ss[w], _r[m][tt] = ss[tt], _r[m][d] = ss[d];
                else {
                    var i = _r.xml[m];
                    _r[m][Wt] = i && !isNaN(Number(i[Wt])) ? Number(i[Wt]) : 1, _r[m][zt] = i && !isNaN(Number(i[zt])) ? Number(i[zt]) : 140, _r[m].fov = i && !isNaN(Number(i.fov)) ? Number(i.fov) : 90, _r[m][ut] = i && !isNaN(Number(i[ut])) ? Number(i[ut]) : 0, _r[m][tt] = i && !isNaN(Number(i[tt])) ? Number(i[tt]) : 0, _r[m][d] = i && !isNaN(Number(i[d])) ? Number(i[d]) : 0, _r[m][g] = i && !isNaN(Number(i[g])) ? Number(i[g]) : 2, _r[m][it] = i && i[it] ? i[it] : "MFOV", _r[m][A] = i && i[A] ? i[A] : sn, _r[m][N] = n, _r[m][w] = .5
                }
                _r[D].mode = ss.area_mode, _r[D].align = ss.area_align, _r[D].x = ss.area_x, _r[D].y = ss.area_y, _r[D][vt] = ss.area_width, _r[D][B] = ss.area_height, _r[D][$] = n, _r[Lt] = -1, _r[ot] = t, _r.memory[ur] = ss[ur], ss = o, li && (po(li, t), li = o), Ca(t), Os(t), Ms(), _r[et](Pr.onexitvr, Pr)
            }
        }
    }

    function as() {
        if (us) return us;
        var e = Nr,
            r = 0,
            i = 1536,
            s = Math.min(screen[vt], screen[B]),
            u = Math.max(screen[vt], screen[B]),
            a = window.devicePixelRatio || 1,
            c = t;
        if (Dr.iphone)
            if (u == 568) {
                var h = _r[yn].context,
                    p = "" + h.getParameter(h.VERSION);
                p[l]("A8 GPU") > 0 ? Dr.ipod ? (e = "iPod 6", r = 4) : (e = cr, r = 4.7) : p[l]("A9 GPU") > 0 ? (e = "iPhone 6S", r = 4.7) : p[l]("SGX") > 0 ? (e = "iPhone 5", r = 4, i = 1024) : p[l]("A7 GPU") > 0 ? (e = "iPhone 5S", r = 4, i = 1024) : (e = "iPhone", r = 4.7)
            } else u == 667 ? a == 2 ? (e = cr, r = 4.7) : (e = rr, r = 5.5) : u == 736 && (e = rr, r = 5.5);
        else if (Dr[jt]) {
            var d = navigator[bt],
                v = o,
                m = d[l]("("),
                g = d[l](")");
            if (m > 0 && g > m) {
                var y = ("" + d[It](m + 1, g))[cn](";");
                if (y[Kt] > 2) {
                    v = y[y[Kt] - 1].trim();
                    var b = v[f]()[l](" build/");
                    b > 0 && (v = v[It](0, b)), v = v[cn](" ").join("-")[cn]("_").join("-")[cn]("/").join("-"), v[It](0, 3)[f]() == "rv:" && (v = o)
                }
            }
            if (v) {
                var w = fs(v[f]());
                w ? (e = w[0], r = Number(w[1])) : _r.trace(2, "WebVR - unknown device: " + v)
            }
        }
        r == 0 && c == t && (Ei == t && (Ei = n, _r[et](Pr[pn], Pr)), mi ? r = 7 : r = 5);
        var E = Math[wn](r * r / (1 + s / u * (s / u))) * 25.4,
            S = E * s / u;
        return us = {
            screendiagonal_inch: r,
            screenwidth_mm: E,
            screenheight_mm: S,
            screenwidth_px: u * a,
            screenheight_px: s * a,
            devicename: e,
            best_res: i
        }, us
    }

    function fs(e) {
        var t = {
            "sm-n750": ["Note 3 Neo", 5.5],
            "sm-n900": ["Note 3", 5.7],
            "sm-n910": ["Note 4", 5.7],
            "sm-n916": ["Note 4", 5.7],
            "sm-n920": ["Note 5", 5.7],
            "sm-n915": ["Note Edge", 5.6],
            "gt-i930": [Yn, 4.7],
            "gt-i950": [Zn, 4.7],
            "galaxy-s3": [Yn, 4.7],
            "galaxy-s4": [Zn, 4.7],
            "sc-04f": [gt, 5.1],
            "[scl23": [gt, 5.1],
            "sm-g530": ["Galaxy Grand Prime", 5],
            "sm-g720": ["Galaxy Grand Max", 5.25],
            "sm-g800": ["Galaxy S5 Mini", 4.5],
            "sm-g850": ["Galaxy Alpha", 4.7],
            "sm-g860": ["Galaxy S5 Sport", 5.1],
            "sm-g870": ["Galaxy S5 Active", 5.1],
            "sm-g890": ["Galaxy S6 Active", 5.1],
            "sm-g903": ["Galaxy S5 Neo", 5.1],
            "sm-g900": [gt, 5.1],
            "sm-g906": [gt, 5.1],
            "sm-g901": ["Galaxy S5+", 5.1],
            "sm-g920": ["Galaxy S6", 5.1],
            "sm-g925": ["Galaxy S6 Edge", 5.1],
            "sm-g928": ["Galaxy S6+ Edge", 5.7],
            "sm-g930": ["Galaxy S7", 5.1],
            "sm-g935": ["Galaxy S7 Edge", 5.5],
            "sm-a300": [er, 4.5],
            "sm-a310": [er, 4.7],
            "sm-a500": [tr, 5],
            "sm-a510": [tr, 5.2],
            "sm-a700": [nr, 5.5],
            "sm-a710": [nr, 5.5],
            "sm-a800": ["Galaxy A8", 5.7],
            "sm-a900": ["Galaxy A9", 6],
            "sm-e500": ["Galaxy E5", 5],
            "sm-e700": ["Galaxy E7", 5.5],
            "sm-j320": ["Galaxy J3", 5],
            "sm-j500": ["Galaxy J5", 5],
            "sm-j700": ["Galaxy J7", 5.5],
            c6916: ["Xperia Z1s", 5],
            c6902: [mt, 5],
            c6903: [mt, 5],
            c6906: [mt, 5],
            c6943: [mt, 5],
            c6802: [at, 6.4],
            c6806: [at, 6.4],
            c6833: [at, 6.4],
            d5503: ["Xperia Z1 Compact", 4.3],
            d2533: ["Xperia C3", 5.5],
            d6563: ["Xperia Z2a", 5],
            d5322: ["Xperia T2", 6],
            d5803: [en, 4.6],
            d5833: [en, 4.6],
            d6603: [ct, 5.2],
            d6633: [ct, 5.2],
            d6653: [ct, 5.2],
            d6708: [ct, 5.2],
            e5633: [lt, 5],
            e5643: [lt, 5],
            e5653: [lt, 5],
            e5663: [lt, 5],
            e5303: [O, 5.5],
            e5306: [O, 5.5],
            e5333: [O, 5.5],
            e5343: [O, 5.5],
            e5353: [O, 5.5],
            e5363: [O, 5.5],
            e5506: [ht, 6],
            e5533: [ht, 6],
            e5553: [ht, 6],
            e5563: [ht, 6],
            e6508: ["Xperia Z4v", 5.2],
            e6533: ["Xperia Z3+", 5.2],
            e6603: [Gn, 5.2],
            "xperia-z4": ["Xperia Z4", 5.2],
            "xperia-z5": [Gn, 5.2],
            "so-02h": ["Xperia Z5 Compact", 4.6],
            "so-03h": ["Xperia Z5 Premium", 5.5],
            "lg-d80": [hn, 5.2],
            "lg-f320": [hn, 5.2],
            "[vs980": [hn, 5.2],
            "lg-ls980": [hn, 5.2],
            "lg-d85": [P, 5.5],
            lgls990: [P, 5.5],
            lgus990: [P, 5.5],
            "lg-as990": [P, 5.5],
            "lg-fs400": [P, 5.5],
            "lg-fs460": [P, 5.5],
            lgv31: [P, 5.5],
            "[as985": [P, 5.5],
            "[vs985": [P, 5.5],
            "lg-f460": ["LG G3 Prime", 5.5],
            "lg-d690": ["LG G3 Stylus", 5.5],
            "lg-d722": [qt, 5],
            "lg-d724": [qt, 5],
            "lg-d725": [qt, 5],
            "lg-d728": [qt, 5],
            "lg-h525": ["LG G4c", 5],
            "lg-h735": ["LG G4 Beat", 5.5],
            "lg-as811": [E, 5.5],
            "lg-as991": [E, 5.5],
            "lg-f500": [E, 5.5],
            "lg-h810": [E, 5.5],
            "lg-h811": [E, 5.5],
            "lg-h812": [E, 5.5],
            "lg-h815": [E, 5.5],
            "lg-h818": [E, 5.5],
            "lg-h819": [E, 5.5],
            lgus991: [E, 5.5],
            lgls991: [E, 5.5],
            "[as986": [E, 5.5],
            "[vs986": [E, 5.5],
            h830: [$n, 5.3],
            h840: [$n, 5.3],
            h850: [$n, 5.3],
            "lg-e98": [on, 5.5],
            "lg-f240": [on, 5.5],
            "lg-h420": [or, 4.7],
            "lg-h440": [or, 4.7],
            "lg-h500": [un, 5],
            "lg-h502": [un, 5],
            "lg-h520": [un, 5],
            "lg-h540": [S, 5.7],
            "lg-h542": [S, 5.7],
            "lg-h630": [S, 5.7],
            "lg-h631": [S, 5.7],
            "lg-h635": [S, 5.7],
            lgms631: [S, 5.7],
            "lg-f600": [J, 5.7],
            "lg-h900": [J, 5.7],
            "lg-h901": [J, 5.7],
            "lg-h961": [J, 5.7],
            "lg-h962": [J, 5.7],
            "[vs990": [J, 5.7],
            "lg-d95": [Jt, 6],
            "lg-fs340": [Jt, 6],
            "lg-ls995": [Jt, 6],
            "lg-f510": [M, 5.5],
            "lg-h95": [M, 5.5],
            lgas995: [M, 5.5],
            lgls996: [M, 5.5],
            lgus996: [M, 5.5],
            "htc-x9u": ["HTC One X9", 5.5],
            "htc-m9p": [In, 5.2],
            "htc-one-m9p": [In, 5.2],
            "htc-one-m9": [$t, 5],
            "htc-m9u": [$t, 5],
            htc6535: [$t, 5],
            "htc-m8s": [Jn, 5],
            "htc-one-e8": [Jn, 5],
            "htc-m8": [G, 5],
            "htc-one-m8": [G, 5],
            "htc-0p6b": [G, 5],
            htc6525: [G, 5],
            "htc-a9": [Vn, 5],
            "htc-one-a9": [Vn, 5],
            "htc-one-e9": [Xn, 5.5],
            "htc-d826": [Xn, 5.5],
            "htc-desire-eye": ["HTC Desire Eye", 5.2],
            "htc-d728": [kn, 5.5],
            "htc-desire-728": [kn, 5.5],
            "htc-d626": [Tn, 5],
            "htc-d630": [Tn, 5],
            "htc-d828": ["HTC Desire 828", 5.5],
            "htc-desire-820": ["HTC Desire 820", 5.5],
            "htc-b830x": ["HTC Butterfly 3", 5.2],
            "htc-one]": [Or, 4.7],
            "htcone]": [Or, 4.7],
            moto3: ["Moto G Turbo", 5],
            xt105: [Qt, 4.7],
            xt106: [Qt, 4.7],
            xt108: [Qt, 4.7],
            xt109: [Qt, 4.7],
            xt1021: [zn, 5.5],
            xt1563: [zn, 5.5],
            xt157: ["Moto X Style", 5.7],
            xt125: ["Moto Droid Turbo", 5.2],
            xt1580: ["Moto X Force", 5.4],
            xt1585: ["Moto Droid Turbo 2", 5.4],
            "mt8-": ["Mate 8", 6],
            "mt7-": ["Mate 7", 6],
            "crr-": ["Mate S", 5.5],
            "hol-u19": ["Honor Holly", 5],
            "chm-u": ["Honor 4C", 5],
            "che1-": [br, 5.5],
            "che2-": [br, 5.5],
            "kiw-tl00h": ["Honor 5X", 5.5],
            "h60-l01": ["Honor 6", 5],
            "pe-tl10": [wr, 5.5],
            "pe-ul00": [wr, 5.5],
            "plk-l01": [Ar, 5.2],
            "plk-ul00": [Ar, 5.2],
            "ath-al00": ["Honor 7i", 5.2],
            "tit-": ["Enjoy 5", 5],
            "ale-l21": ["P8lite", 5],
            "ale-ul00": ["P8lite", 5],
            "gra-l09": ["P8", 5.2],
            "gra-ul10": ["P8", 5.2],
            p8max: ["P8max", 6.8],
            "p7-l": ["P7", 5],
            "p6-u06": ["P6", 4.7],
            "rio-l01": ["G8", 5.5],
            "g7-tl00": ["G7", 5.5],
            "rio-al00": ["G7+", 5.5],
            "scc-u21": ["Y6", 5],
            "scl-l21": ["Y6", 5],
            "hol-t00": ["3C", 5],
            a7010: ["Vibe K4 Note", 5.5],
            x3a40: ["Vibe X3", 5.5],
            "k50-t5": ["K3 Note", 5.5],
            a7000: ["A7000", 5.5],
            a6000: ["A6000", 5.5],
            "redmi-note-3": ["Redmi Note 3", 5.5],
            "redmi-note-2": ["Redmi Note 2", 5.5],
            "redmi-3": ["Redmi 3", 5],
            "redmi-2": ["Redmi 2", 4.7],
            "mi-4": ["Mi 4", 5],
            "mi-3": ["Mi 3", 5],
            "mi-note": ["Mi Note", 5.7],
            ze551ml: ["Zenfone 2", 5.5],
            ze601kl: [K, 6],
            z011d: [K, 6],
            ze551kl: [K, 5.5],
            zd551kl: [xn, 5.5],
            z00ud: [xn, 5.5],
            zx550: [Pn, 5.5],
            zx551ml: [Pn, 5.5],
            "one a2003": ["OnePlus 2", 5.5],
            "[one]": [z, 5.5],
            a0001: [z, 5.5],
            e1003: ["OnePlus X", 5],
            a2001: [z, 5.5],
            a2005: [z, 5.5],
            "lumia-520": ["Lumia 520", 4],
            "lumia-535": ["Lumia 535", 5],
            "lumia-540": ["Lumia 540", 5],
            "lumia-550": ["Lumia 550", 4.7],
            "lumia-630": ["Lumia 630", 4.5],
            "lumia-635": ["Lumia 635", 4.5],
            "lumia-640-xl": ["Lumia 640 XL", 5.7],
            "lumia-640": ["Lumia 640", 5],
            "lumia-730": ["Lumia 730", 4.7],
            "lumia-735": ["Lumia 735", 4.7],
            "lumia-830": ["Lumia 830", 5],
            "lumia-930": ["Lumia 930", 5],
            "lumia-950-xl": ["Lumia 950 XL", 5.7],
            "lumia-950": ["Lumia 950", 5.2],
            "lumia-1020": ["Lumia 1020", 4.5],
            "lumia-1320": ["Lumia 1320", 6],
            "lumia-1520": ["Lumia 1520", 6],
            "nexus-4": ["Nexus 4", 4.7],
            "nexus-5x": [Er, 5.2],
            "nexus-5": ["Nexus 5", 5],
            "lg-h791": [Er, 5.2],
            "nexus-6p": ["Nexus 6P", 5.7],
            "nexus-6": ["Nexus 6", 5.96],
            "[list-end]": [Nr, 5]
        };
        e = "[" + e + "]";
        for (dev in t)
            if (e[l](dev) >= 0) {
                var n = t[dev];
                return Array.isArray(n) || (n = t[n]), n
            }
        return o
    }

    function ls() {
        Yr < 1 ? Yr = 1 : Yr > 179.9 && (Yr = 179.9), Zr < 0 ? Zr = 0 : Zr > 5 && (Zr = 5);
        var e = ei[cn]("|"),
            t;
        for (t = 0; t < 4; t++) {
            var r = Number(e[t]);
            isNaN(r) && (r = t == 0 ? 1 : 0), ti[t] = r
        }
        ni = ti[0] != 1 || ti[1] != 0 || ti[2] != 0 || ti[3] != 0, Si[u] && (vi || gi) && (cs(0, 0), Ca(n))
    }

    function cs(e, r) {
        var i = as(),
            s = 0,
            o = 0,
            u = _r[yn].canvas;
        if (u) {
            var a = Number(_r[b].framebufferscale);
            s = u[vt], o = u[B], !isNaN(a) && a != 0 && (s /= a, o /= a)
        }
        if (e <= 0 || r <= 0) e = s, r = o;
        var f = Yr,
            l = Zr;
        f = Math.tan(f * .5 * Hi), l = Math.exp(l) - 1;
        var c = Math.atan(f) * 2 / 2,
            h = l * 1e3,
            p = 1e3,
            d = p * Math.sin(c),
            v = p * Math.cos(c),
            m = 2 * Math.atan(d / (h + v));
        f = Math.tan(m / 2);
        var g = l,
            y = Kr;
        y /= Gr;
        var w = i.screenwidth_mm,
            E = i.screenheight_mm;
        if (Qr > 0) {
            var S = Math.min(screen[vt], screen[B]),
                x = Math.max(screen[vt], screen[B]);
            w = Math[wn](Qr * Qr / (1 + S / x * (S / x))) * 25.4, E = w * S / x
        }
        var T = w / 2 - y,
            N = 2 * (T / w),
            C = e,
            k = r,
            L = i.screenwidth_px,
            A = i.screenheight_px,
            O = n;
        if (mi || Dr.tablet || r > e) O = t;
        C <= 0 && (C = s), k <= 0 && (k = o);
        var M = E / 70.9,
            _ = f;
        _ *= M, Li = M / .69, O && (_ *= k / A, N = 2 * (w * (C / L) / 2 - y) / (w * (C / L)));
        var D = 2 * Math.atan(_) * Bi;
        Ai = D, Oi = g, Mi = N, hs()
    }

    function hs() {
        var e = _r[m];
        Ai > 0 && (e[ut] = Oi, e.fov = Ai, e[Wt] = Ai, e[zt] = Ai, e[g] = 0, e[it] = yr, e[N] = n, e[w] = 0, e[A] = ir, e[d] = 0, e[tt] = 0, _r[b][pt] = Mi)
    }

    function ps() {
        var e = _r[m];
        e[it] = yr, e[A] = ir, e[N] = n, e[w] = 0, e[d] = 0, e[tt] = 0, e[Wt] = 0, e[zt] = 179, e.fov = Zi, e[ut] = 0, e[g] = 0
    }

    function ds() {
        return Dr[p] && Wi && Wi.deviceName ? Wi.deviceName : (as(), us ? us[Wn] : "")
    }

    function vs() {
        return us ? us.screendiagonal_inch : 0
    }

    function ms(e) {
        if (("" + e)[f]() == sn) Qr = 0, ls();
        else {
            var t = parseFloat(e);
            if (isNaN(t) || t <= 0) t = 0;
            Qr = t, ls()
        }
    }

    function gs() {
        var e = Qr;
        return e <= 0 ? sn : e
    }

    function ys() {
        return Dr[k] && bi == t ? _r[b][I] : _r[yn].canvas
    }

    function bs() {
        Si[u] && (vi || gi) && (cs(0, 0), Ca(n))
    }

    function ws() {
        if (di && pi == t)
            if (vi == t)
                if (zi) {
                    Dr[k] && Hr[s](Dr[T][_][q], Ps);
                    if (oo()) {
                        Rr && _r.set(ft, n);
                        var e = {
                                source: _r[yn].canvas
                            },
                            r = t,
                            i = navigator[bt][l]("Chrome/51.0.");
                        i > 0 && parseInt(navigator[bt][It](i + 12)) < 2701 && (r = n), r == t && (e = [e]), zi.requestPresent(e).then(function() {
                            Si[u] = n, os(n), xi = n;
                            var e = _r[b][I];
                            window.activekrpanowindow = e.id, e.focus()
                        }, function() {})
                    } else Si[u] = n, xi = t, os(n), Es(n)
                } else {
                    var o = ys();
                    Hr[s](Dr[T][_][q], Hs), Si[u] = n, os(n), xi = n, gi = t, si == t && Dr[k] && (gi = n), gi && (xi = t), o[Dr[T][_].requestfullscreen]({
                        vrDisplay: Wi,
                        vrDistortion: xi
                    }), Dr[jt] && Ts(_r[m][Y]), xi == t && cs()
                }
        else {
            Hr[s](Dr[T][_][q], Hs), Si[u] = n, os(n);
            if (Dr[jt] || Dr.tablet) Ti == 1 ? window[s](c, no, n) : Ti == 2 && window[s](y, pu, n);
            mi == t && Dr[T][_].touch && _r[x][Ln][s](Dr[T][_][qn], Cs, t)
        }
    }

    function Es(e) {
        if (Dr[p] || Vr == t) return;
        try {
            var n = typeof screen[h] == "object" && screen[h].type && screen[h].lock;
            if (e) {
                var r = "" + (n ? screen[h].type : screen[h] || screen[gr]),
                    i = r[l](Gt) >= 0 ? r : Gt;
                screen[ar] ? screen[ar](i) : screen[Bn] ? screen[Bn](i) : n && screen[h].lock(i)
            } else screen[Rn] ? screen[Rn]() : screen[bn] ? screen[bn]() : n && screen[h].unlock()
        } catch (s) {}
    }

    function Ss() {
        Si[u] = t, _r.get(ft) && _r.set(ft, t), zi && oo() && zi.exitPresent(), window[r](c, no, n), window[r](y, pu, n), Dr[T][_].touch && _r[x][Ln][r](Dr[T][_][qn], Cs, t), os(t), _r[m][$] = n
    }

    function xs() {
        di && (pi ? Ss() : ws())
    }

    function Ts(e) {
        e === undefined ? e = 0 : (e = Number(e), isNaN(e) && (e = 0));
        var t = _r[m][Y];
        if (zi) zi.resetPose(), t = 0, ki = 0;
        else if (Xi) {
            try {
                Xi.resetSensor !== undefined && Xi.resetSensor()
            } catch (n) {}
            try {
                Xi.zeroSensor !== undefined && Xi.zeroSensor()
            } catch (n) {}
            t = 0, ki = 0
        }
        mi && (_r[m][Y] = e), ki = ki - t + e, Bs = 0
    }

    function Cs(e) {
        var i = t;
        if (zr == t) i = n;
        else {
            var u = _r[x].getMousePos(e[pr] ? e[pr][0] : e);
            u.x /= _r.stagescale, u.y /= _r.stagescale;
            if (e.type == Dr[T][_][qn]) Ns == o ? (Ns = u, _r[x][Ln][s](Dr[T][_][sr], Cs, n), _r[x][Ln][s](Dr[T][_][Tr], Cs, n)) : i = n;
            else if (e.type == Dr[T][_][Tr]) i = n;
            else if (e.type == Dr[T][_][sr] && Ns) {
                var a = Ns.x,
                    f = u.x;
                if (_r[b][_n]) {
                    var l = _r.stagewidth * .5;
                    (a >= l || f >= l) && (a < l || f < l) && (f = a)
                }
                var c = _r[mr](a, Ns.y, t),
                    h = _r[mr](f, u.y, t),
                    p = h.x - c.x;
                Ns = u, ki -= p
            }
        }
        i && (Ns = o, _r[x][Ln][r](Dr[T][_][sr], Cs, n), _r[x][Ln][r](Dr[T][_][Tr], Cs, n))
    }

    function ks() {
        if (Ir == t) _r[Lt] = -1, _r[ot] = t;
        else if (_r.image.type == "cube" && _r.image.multires) {
            var e = as().best_res,
                r = 0,
                s = -1,
                o = 0,
                u = _r.image.level.getArray(),
                a = u[Kt];
            if (a > 0)
                for (i = 0; i < a; i++) {
                    var f = u[i].tiledimagewidth,
                        l = Math.abs(f - e);
                    if (s == -1 || l < s) r = f, s = l, o = i
                }
            if (s > 0) {
                _r[Lt] = o, _r[ot] = n;
                if (r > 0) {
                    var c = 4 + 8 * (r * r * 6 + 1048575 >> 20);
                    c > _r.memory[ur] && (_r.memory[ur] = c)
                }
            }
        }
    }

    function Ls() {
        Si[u] && ks()
    }

    function As() {
        Ls(), ls()
    }

    function Ms() {
        Ni = 0, Ys.t = 0, Zs.t = 0, Ju(), Yu = 0, $u = t, su = o
    }

    function Ds(e) {
        _s == 1 ? (Pi.apply(document), _s = 0) : (Di.apply(ys()), _s = 1)
    }

    function Ps(e) {
        var n = !!(Hr[Mt] || Hr[V] || Hr[xt] || Hr[F] || Hr[nt]);
        n == t && Ss()
    }

    function Hs(e) {
        var i = ys(),
            o = !!(Hr[Mt] || Hr[V] || Hr[xt] || Hr[F] || Hr[nt]);
        if (o && Si[u]) {
            try {
                Dr[p] && _i && (Di.apply(i), mi && (_s = 1, _r[x][Ln][s](St, Ds, t)))
            } catch (a) {}
            Es(n), Dr[p] && i[s](Et, js, t)
        } else Es(t), window[r](c, no, n), window[r](y, pu, n), i[r](Et, js, t), _r[x][Ln][r](St, Ds, t), Si[u] = t, os(t)
    }

    function js(e) {
        var t = ys();
        zi && (t = _r[b][I]);
        if (Hr[Dn] === t || Hr[dn] === t) {
            var n = e.movementX || e.mozMovementX,
                r = e.movementY || e.mozMovementY;
            if (!isNaN(n)) {
                Bs += n * jr;
                while (Bs < 0) Bs += Math.PI * 2;
                while (Bs >= Math.PI * 2) Bs -= Math.PI * 2
            } else n = 0;
            mi && (isNaN(r) && (r = 0), _r[m][Y] += n * jr * Bi, _r[m][nn] = Math.max(Math.min(_r[m][nn] + r * jr * Bi, 120), -120))
        }
    }

    function Fs(e, t, n, r) {
        this.x = e, this.y = t, this.z = n, this.w = r
    }

    function Is(e) {
        var t = Math[wn](e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w);
        t === 0 ? (e.x = e.y = e.z = 0, e.w = 1) : (t = 1 / t, e.x *= t, e.y *= t, e.z *= t, e.w *= t)
    }

    function qs(e) {
        e.x *= -1, e.y *= -1, e.z *= -1, Is(e)
    }

    function Rs(e, t) {
        return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w
    }

    function Us(e) {
        return Math[wn](e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w)
    }

    function zs(e, t) {
        var n = e.x,
            r = e.y,
            i = e.z,
            s = e.w,
            o = t.x,
            u = t.y,
            a = t.z,
            f = t.w;
        e.x = n * f + s * o + r * a - i * u, e.y = r * f + s * u + i * o - n * a, e.z = i * f + s * a + n * u - r * o, e.w = s * f - n * o - r * u - i * a
    }

    function Ws(e, t) {
        var n = t.x,
            r = t.y,
            i = t.z,
            s = t.w,
            o = e.x,
            u = e.y,
            a = e.z,
            f = e.w;
        e.x = n * f + s * o + r * a - i * u, e.y = r * f + s * u + i * o - n * a, e.z = i * f + s * a + n * u - r * o, e.w = s * f - n * o - r * u - i * a
    }

    function Xs(e, t, n) {
        var r = e.x,
            i = e.y,
            s = e.z,
            o = e.w,
            u = r * t.x + i * t.y + s * t.z + o * t.w;
        u < 0 ? (u = -u, e.x = -t.x, e.y = -t.y, e.z = -t.z, e.w = -t.w) : (e.x = t.x, e.y = t.y, e.z = t.z, e.w = t.w);
        if (u >= 1) {
            e.w = o, e.x = r, e.y = i, e.z = s;
            return
        }
        var a = Math.acos(u),
            f = Math[wn](1 - u * u);
        if (Math.abs(f) < .001) {
            e.w = .5 * (o + e.w), e.x = .5 * (r + e.x), e.y = .5 * (i + e.y), e.z = .5 * (s + e.z);
            return
        }
        var l = Math.sin((1 - n) * a) / f,
            c = Math.sin(n * a) / f;
        e.w = o * l + e.w * c, e.x = r * l + e.x * c, e.y = i * l + e.y * c, e.z = s * l + e.z * c
    }

    function Vs(e, t, n) {
        var r = n / 2,
            i = Math.sin(r);
        e.x = t.x * i, e.y = t.y * i, e.z = t.z * i, e.w = Math.cos(r)
    }

    function $s(e, t, n, r, i) {
        var s = Math.cos(t / 2),
            o = Math.cos(n / 2),
            u = Math.cos(r / 2),
            a = Math.sin(t / 2),
            f = Math.sin(n / 2),
            l = Math.sin(r / 2);
        return i === "XYZ" ? (e.x = a * o * u + s * f * l, e.y = s * f * u - a * o * l, e.z = s * o * l + a * f * u, e.w = s * o * u - a * f * l) : i === ln ? (e.x = a * o * u + s * f * l, e.y = s * f * u - a * o * l, e.z = s * o * l - a * f * u, e.w = s * o * u + a * f * l) : i === "ZXY" ? (e.x = a * o * u - s * f * l, e.y = s * f * u + a * o * l, e.z = s * o * l + a * f * u, e.w = s * o * u - a * f * l) : i === "ZYX" ? (e.x = a * o * u - s * f * l, e.y = s * f * u + a * o * l, e.z = s * o * l - a * f * u, e.w = s * o * u + a * f * l) : i === "YZX" ? (e.x = a * o * u + s * f * l, e.y = s * f * u + a * o * l, e.z = s * o * l - a * f * u, e.w = s * o * u - a * f * l) : i === "XZY" && (e.x = a * o * u - s * f * l, e.y = s * f * u - a * o * l, e.z = s * o * l + a * f * u, e.w = s * o * u + a * f * l), e
    }

    function Js(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h, p, d;
        i = t.x, s = t.y, o = t.z, u = Math[wn](i * i + s * s + o * o), u > 0 && (i /= u, s /= u, o /= u), a = n.x, f = n.y, l = n.z, c = Math[wn](a * a + f * f + l * l), c > 0 && (a /= c, f /= c, l /= c), r = i * a + s * f + o * l + 1, r < 1e-6 ? (r = 0, Math.abs(i) > Math.abs(o) ? (h = -s, p = i, d = 0) : (h = 0, p = -o, d = s)) : (h = s * l - o * f, p = o * a - i * l, d = i * f - s * a), e.x = h, e.y = p, e.z = d, e.w = r, Is(e)
    }

    function Ks(e, t, n) {
        function r(e, t, n) {
            return e < t ? t : e > n ? n : e
        }
        if (!t || isNaN(t.x) || isNaN(t.y) || isNaN(t.z) || isNaN(t.w)) return;
        var i = t.x * t.x,
            s = t.y * t.y,
            o = t.z * t.z,
            u = t.w * t.w;
        if (n === "XYZ") e[0] = Math[Bt](2 * (t.x * t.w - t.y * t.z), u - i - s + o), e[1] = Math.asin(r(2 * (t.x * t.z + t.y * t.w), -1, 1)), e[2] = Math[Bt](2 * (t.z * t.w - t.x * t.y), u + i - s - o);
        else if (n === ln) e[0] = Math.asin(r(2 * (t.x * t.w - t.y * t.z), -1, 1)), e[1] = Math[Bt](2 * (t.x * t.z + t.y * t.w), u - i - s + o), e[2] = Math[Bt](2 * (t.x * t.y + t.z * t.w), u - i + s - o);
        else if (n === "ZXY") e[0] = Math.asin(r(2 * (t.x * t.w + t.y * t.z), -1, 1)), e[1] = Math[Bt](2 * (t.y * t.w - t.z * t.x), u - i - s + o), e[2] = Math[Bt](2 * (t.z * t.w - t.x * t.y), u - i + s - o);
        else if (n === "ZYX") e[0] = Math[Bt](2 * (t.x * t.w + t.z * t.y), u - i - s + o), e[1] = Math.asin(r(2 * (t.y * t.w - t.x * t.z), -1, 1)), e[2] = Math[Bt](2 * (t.x * t.y + t.z * t.w), u + i - s - o);
        else if (n === "YZX") e[0] = Math[Bt](2 * (t.x * t.w - t.z * t.y), u - i + s - o), e[1] = Math[Bt](2 * (t.y * t.w - t.x * t.z), u + i - s - o), e[2] = Math.asin(r(2 * (t.x * t.y + t.z * t.w), -1, 1));
        else {
            if (n !== "XZY") return;
            e[0] = Math[Bt](2 * (t.x * t.w + t.y * t.z), u - i + s - o), e[1] = Math[Bt](2 * (t.x * t.z + t.y * t.w), u + i - s - o), e[2] = Math.asin(r(2 * (t.z * t.w - t.x * t.y), -1, 1))
        }
    }

    function Qs(e, t) {
        var n, r, i, s;
        e == o ? (n = Math.tan(50 * Hi), r = Math.tan(50 * Hi), i = Math.tan(45 * Hi), s = Math.tan(45 * Hi)) : (n = Math.tan(e.upDegrees * Hi), r = Math.tan(e.downDegrees * Hi), i = Math.tan(e.leftDegrees * Hi), s = Math.tan(e.rightDegrees * Hi));
        var u = 2 / (i + s),
            a = 2 / (n + r);
        t[0] = u, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -a, t[6] = 0, t[7] = 0, t[8] = (i - s) * u * .5, t[9] = -((n - r) * a * .5), t[10] = 65535 / 65536, t[11] = 1, t[12] = 0, t[13] = 0, t[14] = 65535 / 65536 - 1, t[15] = 1
    }

    function Gs() {
        var e = Number.NaN,
            t = screen[vt] > screen[B],
            n = screen[h] || screen.msOrientation || screen[gr];
        if (n) {
            n = ("" + n)[f]();
            var r = n[l]("portrait") >= 0,
                i = n[l](Gt) >= 0,
                s = n[l]("primary") >= 0,
                o = n[l]("secondary") >= 0;
            r && s ? e = 0 : i && s ? e = 90 : i && o ? e = -90 : r && o && (e = 180), !isNaN(e) && !Dr[jt] && (e -= 90)
        }
        return isNaN(e) && (e = _r._have_top_access ? top[h] : window[h]), isNaN(e) && (Dr[jt] ? e = t ? 90 : 0 : e = t ? 0 : 90), Dr.tablet && Dr[st] && (e += 90), e
    }

    function no(e) {
        if (!Si[u]) return;
        var t = _r[yt],
            n = t - hu;
        hu = t;
        var r = Gs() * Hi,
            i = e.alpha * Hi,
            s = e.beta * Hi,
            a = e.gamma * Hi;
        to === o && (to = i), i = i - to + Math.PI;
        var f = Math.cos(i),
            l = Math.sin(i),
            c = Math.cos(s),
            h = Math.sin(s),
            p = Math.cos(a),
            d = Math.sin(a);
        i = Math[Bt](-l * h * p - f * d, l * d - f * h * p), s = -Math.asin(c * p), a = Math[Bt](c * d, -h) - Math.PI, Ys.q.x = Zs.q.x, Ys.q.y = Zs.q.y, Ys.q.z = Zs.q.z, Ys.q.w = Zs.q.w, Ys.t = Zs.t;
        var v = Zs.q;
        Zs.t = t, Ni++, $s(v, s, i + r, a - r, ln)
    }

    function so() {
        if (Si[u]) {
            _r[m][C] = n;
            var e = [0, 0, 0];
            if (zi) {
                var t = zi.getPose();
                if (t) {
                    ro = t;
                    var r = t[h];
                    io.x = r[0], io.y = r[1], io.z = r[2], io.w = r[3], Ks(e, io, ln);
                    var i = 0;
                    Dr[k] && (i = Gs()), i += ki, _r[m][Y] = (-e[1] + Bs) * Bi + i, _r[m][nn] = -e[0] * Bi, _r[m][An] = -e[2] * Bi
                }
            } else if (Xi) {
                Ji = Xi.getState();
                if (Ji) {
                    gi ? hs() : ps();
                    if (Fr) {
                        var s = Ji.position;
                        if (s) {
                            Bs = 0;
                            var a = 400;
                            _r[m].tx = s.x * a, _r[m].ty = s.y * a, _r[m].tz = s.z * a
                        }
                    }
                    Ks(e, Ji[h], ln);
                    var i = 0;
                    Dr[k] && (i = Gs()), i += ki, _r[m][Y] = (-e[1] + Bs) * Bi + i, _r[m][nn] = -e[0] * Bi, _r[m][An] = -e[2] * Bi
                }
            } else if (vi) {
                hs();
                if (Ni > Ci) {
                    var f = o;
                    if (ui == 0) f = Zs.q;
                    else if ((ui == 4 || ui >= 6) && Ti == 2) f = Zs.q, lu(f);
                    else if (ui <= 3 || ui == 5 || Ti == 1)
                        if (Ys.t > 0 && Zs.t > 0) {
                            var l = _r[yt],
                                c = Zs.t - Ys.t,
                                p = 0,
                                d = 0,
                                v = 1;
                            ui == 1 || ui == 2 ? p = l - Zs.t : (p = l - Ys.t, v = 2), c <= 0 ? d = 1 : (d = p / c, d > v && (d = v)), eo.x = Ys.q.x, eo.y = Ys.q.y, eo.z = Ys.q.z, eo.w = Ys.q.w, Xs(eo, Zs.q, d), f = eo
                        }
                    if (f) {
                        Ks(e, f, ln);
                        var i = Gs();
                        _r[m][Y] = ki + (-e[1] + Bs) * Bi + i, _r[m][nn] = -e[0] * Bi, _r[m][An] = -e[2] * Bi
                    }
                }
            }
        }
    }

    function oo() {
        var e = n;
        return Dr[k] && si == t && (e = t), e
    }

    function uo(e) {
        return zi && oo() ? (zi.requestAnimationFrame(e), n) : t
    }

    function ao() {
        zi && zi[Ht] && ro && zi.submitFrame(ro)
    }

    function fo(e, r) {
        if (vi == t && xi == n)
            if (zi) {
                var i = zi[v](e == 1 ? Dt : Q);
                Qs(i.fieldOfView, r)
            } else Qs(e == 1 ? Gi : Yi, r)
    }

    function lo(e) {
        var t = 0;
        if (zi) {
            var n = zi[v](e == 1 ? Dt : Q);
            t = n.offset[0]
        } else e == 1 ? Ki && Ki.x ? t = Ki.x : t = -0.03 : e == 2 && (Qi && Qi.x ? t = Qi.x : t = .03);
        return t *= 320 / Br, t
    }

    function co(e, r) {
        var i = 0,
            s = 0;
        if (zi) {
            if (zi[Ht]) {
                var a = zi[v](Dt),
                    f = zi[v](Q);
                i = Math.max(a.renderWidth, f.renderWidth) * 2, s = Math.max(a.renderHeight, f.renderHeight);
                if (i > 0 && s > 0) return i *= qr, s *= qr, {
                    w: i,
                    h: s
                }
            }
            return o
        }
        var l = !!(Hr[Mt] || Hr[V] || Hr[xt] || Hr[F] || Hr[nt]);
        if (Si[u] && l && vi == t && xi == n) {
            if (Vi) i = Math.max(Vi[X][vt] + $i[X][vt], $i[X].x + $i[X][vt]), s = Math.max(Vi[X][B], $i[X][B]);
            else if (L in Wi) {
                var c = Wi[L](Dt),
                    h = Wi[L](Q);
                i = c[vt] + h[vt], s = Math.max(c[B], h[B])
            } else if (wt in Wi) {
                var d = Wi[wt]();
                i = d[vt], s = d[B]
            } else Ct in Wi ? (i = Wi[Ct][vt], s = Wi[Ct][B]) : (i = 2e3, s = 1056);
            Dr[p] && Dr[st] && (i = e, s = r);
            if (i > 0 && s > 0) return i *= qr, s *= qr, {
                w: i,
                h: s
            }
        } else Si[u] && (vi || xi == t) && cs(e, r);
        return o
    }

    function ho(e) {
        var e = ("" + e)[f](),
            r = e[l](vr),
            i = e.lastIndexOf("]");
        if (r >= 0 && i > r) {
            var s = e[It](r + 8, i),
                u = vr + s + "]";
            u != ai && (ai = u, li && (po(li, t), li = o), li = _r.get(ai), li && po(li, n))
        }
    }

    function po(e, r) {
        if (r == n) e[Un] = {
            visible: e[Mn],
            enabled: e[u],
            flying: e.flying,
            scaleflying: e[Rt],
            distorted: e[vn],
            zorder: e.zorder,
            scale: e.scale,
            depth: e.depth,
            onover: e.onover,
            onout: e.onout
        }, e[u] = t, e.flying = 1, e[Rt] = t, e[vn] = n, e.zorder = 999999999;
        else {
            var i = e[Un];
            i && (e[Mn] = i[Mn], e[u] = i[u], e.flying = i.flying, e[Rt] = i[Rt], e[vn] = i[vn], e.zorder = i.zorder, e.scale = i.scale, e.depth = i.depth, e.onover = i.onover, e.onout = i.onout, e[Un] = i = o)
        }
    }

    function vo() {
        if (ai) {
            var e = li;
            e == o && (e = _r.get(ai), e && (po(e, n), li = e));
            if (e) {
                if (!Si[u]) return e[Mn] = t, o;
                e.onover = ci, e.onout = hi, e[u] = fi, e[Mn] = n
            }
            return e
        }
        return o
    }

    function mo() {
        this.x = 0, this.y = 0, this.z = 0
    }

    function go(e, t, n, r) {
        e.x = t, e.y = n, e.z = r
    }

    function yo(e, t) {
        e.x = t.x, e.y = t.y, e.z = t.z
    }

    function bo(e) {
        e.x = 0, e.y = 0, e.z = 0
    }

    function wo(e, t, n) {
        t == 0 ? e.x = n : t == 1 ? e.y = n : e.z = n
    }

    function Eo(e) {
        return Math[wn](e.x * e.x + e.y * e.y + e.z * e.z)
    }

    function So(e) {
        var t = Eo(e);
        t > 0 ? xo(e, 1 / t) : (e.x = 0, e.y = 0, e.z = 0)
    }

    function xo(e, t) {
        e.x *= t, e.y *= t, e.z *= t
    }

    function To(e, t, n) {
        go(n, e.x - t.x, e.y - t.y, e.z - t.z)
    }

    function No(e, t, n) {
        go(n, e.y * t.z - e.z * t.y, e.z * t.x - e.x * t.z, e.x * t.y - e.y * t.x)
    }

    function Co(e, t) {
        return e.x * t.x + e.y * t.y + e.z * t.z
    }

    function ko() {
        var e;
        return typeof Float64Array != "undefined" ? e = new Float64Array(9) : e = new Array(9), Ao(e), e
    }

    function Lo(e) {
        e[0] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = 0
    }

    function Ao(e) {
        e[0] = e[4] = e[8] = 1, e[1] = e[2] = e[3] = e[5] = e[6] = e[7] = 0
    }

    function Oo(e, t) {
        e[0] = e[4] = e[8] = t
    }

    function Mo(e, t) {
        e[0] *= t, e[1] *= t, e[2] *= t, e[3] *= t, e[4] *= t, e[5] *= t, e[6] *= t, e[7] *= t, e[8] *= t
    }

    function _o(e, t) {
        var n = e[1],
            r = e[2],
            i = e[5];
        t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = n, t[4] = e[4], t[5] = e[7], t[6] = r, t[7] = i, t[8] = e[8]
    }

    function Do(e, t, n) {
        e[t] = n.x, e[t + 3] = n.y, e[t + 6] = n.z
    }

    function Po(e, t) {
        e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8]
    }

    function Ho(e, t) {
        var n = e[0] * (e[4] * e[8] - e[7] * e[5]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
        n != 0 && (n = 1 / n, t[0] = (e[4] * e[8] - e[7] * e[5]) * n, t[1] = -(e[1] * e[8] - e[2] * e[7]) * n, t[2] = (e[1] * e[5] - e[2] * e[4]) * n, t[3] = -(e[3] * e[8] - e[5] * e[6]) * n, t[4] = (e[0] * e[8] - e[2] * e[6]) * n, t[5] = -(e[0] * e[5] - e[3] * e[2]) * n, t[6] = (e[3] * e[7] - e[6] * e[4]) * n, t[7] = -(e[0] * e[7] - e[6] * e[1]) * n, t[8] = (e[0] * e[4] - e[3] * e[1]) * n)
    }

    function Bo(e, t) {
        e[0] -= t[0], e[1] -= t[1], e[2] -= t[2], e[3] -= t[3], e[4] -= t[4], e[5] -= t[5], e[6] -= t[6], e[7] -= t[7], e[8] -= t[8]
    }

    function jo(e, t) {
        e[0] += t[0], e[1] += t[1], e[2] += t[2], e[3] += t[3], e[4] += t[4], e[5] += t[5], e[6] += t[6], e[7] += t[7], e[8] += t[8]
    }

    function Fo(e, t, n) {
        var r = t[0],
            i = t[1],
            s = t[2],
            o = t[3],
            u = t[4],
            a = t[5],
            f = t[6],
            l = t[7],
            c = t[8],
            h = e[0],
            p = e[1],
            d = e[2];
        n[0] = h * r + p * o + d * f, n[1] = h * i + p * u + d * l, n[2] = h * s + p * a + d * c, h = e[3], p = e[4], d = e[5], n[3] = h * r + p * o + d * f, n[4] = h * i + p * u + d * l, n[5] = h * s + p * a + d * c, h = e[6], p = e[7], d = e[8], n[6] = h * r + p * o + d * f, n[7] = h * i + p * u + d * l, n[8] = h * s + p * a + d * c
    }

    function Io(e, t, n) {
        var r = e[0] * t.x + e[1] * t.y + e[2] * t.z,
            i = e[3] * t.x + e[4] * t.y + e[5] * t.z,
            s = e[6] * t.x + e[7] * t.y + e[8] * t.z;
        n.x = r, n.y = i, n.z = s
    }

    function qo(e, t, n) {
        n[0] = e[0] + t[0], n[1] = e[1] + t[1], n[2] = e[2] + t[2], n[3] = e[3] + t[3], n[4] = e[4] + t[4], n[5] = e[5] + t[5], n[6] = e[6] + t[6], n[7] = e[7] + t[7], n[8] = e[8] + t[8]
    }

    function Qo(e, t, n) {
        No(e, t, Uo);
        if (Eo(Uo) == 0) Ao(n);
        else {
            yo(zo, e), yo(Wo, t), So(Uo), So(zo), So(Wo);
            var r = Vo,
                i = $o;
            No(Uo, zo, Ro), r[0] = zo.x, r[1] = zo.y, r[2] = zo.z, r[3] = Uo.x, r[4] = Uo.y, r[5] = Uo.z, r[6] = Ro.x, r[7] = Ro.y, r[8] = Ro.z, No(Uo, Wo, Ro), i[0] = Wo.x, i[3] = Wo.y, i[6] = Wo.z, i[1] = Uo.x, i[4] = Uo.y, i[7] = Uo.z, i[2] = Ro.x, i[5] = Ro.y, i[8] = Ro.z, Fo(i, r, n)
        }
    }

    function Go(e, t) {
        var n = Co(e, e),
            r = Math[wn](n),
            i, s;
        if (n < 1e-8) i = 1 - 1 / 6 * n, s = .5;
        else if (n < 1e-6) s = .5 - .25 * (1 / 6) * n, i = 1 - n * (1 / 6) * (1 - .05 * n);
        else {
            var o = 1 / r;
            i = Math.sin(r) * o, s = (1 - Math.cos(r)) * o * o
        }
        Zo(e, i, s, t)
    }

    function Yo(e, t) {
        var n = (e[0] + e[4] + e[8] - 1) * .5;
        go(t, (e[7] - e[5]) / 2, (e[2] - e[6]) / 2, (e[3] - e[1]) / 2);
        var r = Eo(t);
        if (n > Math.SQRT1_2) r > 0 && xo(t, Math.asin(r) / r);
        else if (n > -Math.SQRT1_2) {
            var i = Math.acos(n);
            xo(t, i / r)
        } else {
            var i = Math.PI - Math.asin(r),
                s = e[0] - n,
                o = e[4] - n,
                u = e[8] - n,
                a = Jo;
            s * s > o * o && s * s > u * u ? go(a, s, (e[3] + e[1]) / 2, (e[2] + e[6]) / 2) : o * o > u * u ? go(a, (e[3] + e[1]) / 2, o, (e[7] + e[5]) / 2) : go(a, (e[2] + e[6]) / 2, (e[7] + e[5]) / 2, u), Co(a, t) < 0 && xo(a, -1), So(a), xo(a, i), yo(t, a)
        }
    }

    function Zo(e, t, n, r) {
        var i = e.x * e.x,
            s = e.y * e.y,
            o = e.z * e.z;
        r[0] = 1 - n * (s + o), r[4] = 1 - n * (i + o), r[8] = 1 - n * (i + s);
        var u = t * e.z,
            a = n * e.x * e.y;
        r[1] = a - u, r[3] = a + u, u = t * e.y, a = n * e.x * e.z, r[2] = a + u, r[6] = a - u, u = t * e.x, a = n * e.y * e.z, r[5] = a - u, r[7] = a + u
    }

    function eu(e, t, n, r) {
        t *= Hi, n *= Hi, r *= Hi;
        var i = Math.cos(t),
            s = Math.sin(t),
            o = Math.cos(n),
            u = Math.sin(n),
            a = Math.cos(r),
            f = Math.sin(r),
            l = i * u,
            c = s * u;
        e[0] = o * a, e[1] = l * a + i * f, e[2] = -c * a + s * f, e[3] = -o * f, e[4] = -l * f + i * a, e[5] = c * f + s * a, e[6] = u, e[7] = -s * o, e[8] = i * o
    }

    function tu(e, t) {
        var n = e[0] + e[4] + e[8],
            r;
        n > 0 ? (r = Math[wn](1 + n) * 2, t.x = (e[5] - e[7]) / r, t.y = (e[6] - e[2]) / r, t.z = (e[1] - e[3]) / r, t.w = .25 * r) : e[0] > e[4] && e[0] > e[8] ? (r = Math[wn](1 + e[0] - e[4] - e[8]) * 2, t.x = .25 * r, t.y = (e[3] + e[1]) / r, t.z = (e[6] + e[2]) / r, t.w = (e[5] - e[7]) / r) : e[4] > e[8] ? (r = Math[wn](1 + e[4] - e[0] - e[8]) * 2, t.x = (e[3] + e[1]) / r, t.y = .25 * r, t.z = (e[7] + e[5]) / r, t.w = (e[6] - e[2]) / r) : (r = Math[wn](1 + e[8] - e[0] - e[4]) * 2, t.x = (e[6] + e[2]) / r, t.y = (e[7] + e[5]) / r, t.z = .25 * r, t.w = (e[1] - e[3]) / r)
    }

    function lu(e) {
        if (du) {
            var t = Gs();
            t != su && (su = t, eu(uu, 0, 0, -t), eu(ou, -90, 0, +t));
            var n;
            if (ui <= 1 || ui == 3) n = ea();
            else {
                var r = _r[yt],
                    i = (r - nu) / 1e3,
                    s = i;
                ui == 2 ? s += 2 / 60 : ui == 6 ? s += 1 / 60 : ui == 7 && (s += 2 / 60), n = ia(s)
            }
            Fo(uu, n, fu), Fo(fu, ou, au), tu(au, e)
        }
    }

    function pu(e) {
        if (!Si[u]) return;
        var r = _r[yt],
            i = r - hu;
        hu = r, i > 5e3 && (Ms(), i = .16), Ni++;
        if (Ni < Ci) return;
        $u == t && ($u = n, Ju());
        var s = e[Ft],
            a = s.x,
            f = s.y,
            l = s.z;
        a == o && (a = 0), f == o && (f = 9.81), l == o && (l = 0);
        var c = e.acceleration;
        if (c) {
            var h = c.x,
                p = c.y,
                d = c.z;
            h == o && (h = 0), p == o && (p = 0), d == o && (d = 0), a -= h, f -= p, l -= d
        }
        if (Dr.ios || Dr.ie) a *= -1, f *= -1, l *= -1;
        var v = e.rotationRate,
            m = v.alpha,
            g = v.beta,
            y = v.gamma;
        m == o && (m = 0), g == o && (g = 0), y == o && (y = 0);
        if (Dr.ios || Dr[st] || Dr.ie) {
            m *= Hi, g *= Hi, y *= Hi;
            if (Dr.ie) {
                var b = m,
                    w = g,
                    E = y;
                m = w, g = E, y = b
            }
        }
        ba ? Na(i, m, g, y) : $r && cu(m, g, y, r);
        var S = wa;
        m -= S.rx, g -= S.ry, y -= S.rz, go(ru, a, f, l), Gu(ru, i), nu = r, go(iu, m, g, y), Zu(iu, r);
        if (ui <= 3 || ui == 5) Ys.q.x = Zs.q.x, Ys.q.y = Zs.q.y, Ys.q.z = Zs.q.z, Ys.q.w = Zs.q.w, Ys.t = Zs.t, lu(Zs.q), Zs.t = r
    }

    function Ju() {
        Ao(ku), Ao(Lu), Lo(Ou), Oo(Ou, zu), Lo(Au), Oo(Au, 1), Lo(Pu), Oo(Pu, Wu), Lo(_u), Lo(Mu), Lo(Du), bo(Eu), bo(bu), bo(yu), bo(wu), bo(gu), go(mu, 0, 0, Xu), du = t
    }

    function Ku(e, t) {
        Io(e, mu, yu), Qo(yu, bu, Uu), Yo(Uu, t)
    }

    function Qu() {
        _o(Lu, qu), Fo(Ou, qu, Ru), Fo(Lu, Ru, Ou), Ao(Lu)
    }

    function Gu(e, t) {
        yo(bu, e);
        if (du) {
            Ku(ku, Eu), t < 5 && (t = 5);
            var r = 1e3 / 60 / t,
                i = Vu * r,
                s = 1 / Vu,
                o = Su;
            for (var u = 0; u < 3; u++) bo(o), wo(o, u, s), Go(o, Hu), Fo(Hu, ku, Bu), Ku(Bu, xu), To(Eu, xu, Tu), xo(Tu, i), Do(Mu, u, Tu);
            _o(Mu, ju), Fo(Ou, ju, Fu), Fo(Mu, Fu, Iu), qo(Iu, Pu, _u), Ho(_u, ju), _o(Mu, Fu), Fo(Fu, ju, Iu), Fo(Ou, Iu, Du), Io(Du, Eu, gu), Fo(Du, Mu, ju), Ao(Fu), Bo(Fu, ju), Fo(Fu, Ou, ju), Po(Ou, ju), Go(gu, Lu), Fo(Lu, ku, ku), Qu()
        } else Qo(mu, bu, ku), du = n
    }

    function Zu(e, t) {
        if (Yu != 0) {
            var n = (t - Yu) / 1e3;
            n > 1 && (n = 1), yo(wu, e), xo(wu, -n), Go(wu, Lu), Po(Nu, ku), Fo(Lu, ku, Nu), Po(ku, Nu), Qu(), Po(Cu, Au), Mo(Cu, n * n), jo(Ou, Cu)
        }
        Yu = t, yo(vu, e)
    }

    function ea() {
        return ku
    }

    function ia(e) {
        var t = ta;
        yo(t, vu), xo(t, -e);
        var n = na;
        Go(t, n);
        var r = ra;
        return Fo(n, ku, r), r
    }

    function ca(e) {
        var t = e[l]("://");
        if (t > 0) {
            var n = e[l]("/", t + 3),
                r = e[It](0, t)[f](),
                i = e[It](t + 3, n),
                s = e[It](n);
            return [r, i, s]
        }
        return o
    }

    function ha(e) {
        if (ua == o) {
            var r = ca(sa),
                i = ca(window[xr].href),
                u = i[0];
            if (u == "http" || u == "https") {
                if (Dr.ie || Dr.edge) u = "https";
                aa = u + "://" + r[1], fa = aa + r[2];
                var a = document[kr]("iframe");
                a.style.cssText = "position:absolute;width:1px;height:1px;left:-9999px;visibility:hidden;", _r[b][I].appendChild(a), ua = a, a[s]("load", function() {
                    oa = n, e(ua)
                }, t), window[s]("message", da, t), a.src = fa
            }
        } else oa && e(ua)
    }

    function pa(e) {
        ha(function(t) {
            try {
                t.contentWindow.postMessage(e, aa)
            } catch (n) {}
        })
    }

    function da(e) {
        if (e.origin == aa) {
            var t = "" + e.data;
            t[It](0, 15) == "webvr_settings:" && va(t[It](15))
        }
    }

    function va(e) {
        var t = e[cn](tn),
            r = Number(t[0]),
            i = Number(t[1]),
            s = Number(t[2]),
            o = Number(t[3]),
            u = Number(t[4]),
            a = Number(t[5]),
            f = Number(t[6]),
            l = Number(t[7]),
            c = Number(t[8]),
            h = Number(t[9]),
            p = "" + t[10],
            d = Number(t[11]);
        isNaN(f) && (f = 0), isNaN(l) && (l = 0), isNaN(c) && (c = 0), isNaN(h) && (h = 1), isNaN(d) && (d = 0), p[cn]("|")[Kt] != 4 && (p = Qn), !isNaN(r) && r >= 30 && r < 90 && !isNaN(i) && i >= 0 && i < 12 && !isNaN(s) && s >= 1 && s < 180 && !isNaN(o) && o >= 0 && o < 10 && !isNaN(u) && u >= 1 && u < 500 && !isNaN(a) && a >= 0 && a < 10 && !isNaN(h) && h > 0 && h < 2 && (Kr = r, Qr = i, Yr = s, Zr = o, ii = u, ui = a, wa.rx = f, wa.ry = l, wa.rz = c, Gr = h, ei = p, ri = d, yi = n)
    }

    function ma(e) {
        var n = ("" + e)[f]() != "local";
        if (Dr[st] || Dr.ios || Dr.safari || Dr[p]) n = t;
        return n
    }

    function ga(e) {
        if (vi || gi) {
            if (la) try {
                var t = window.localStorage;
                if (t) {
                    var n = t[fr](En);
                    n || (n = t[fr](Sn)), n || (n = t[fr](Nn)), n || (n = t[fr](gn)), n && va(n)
                }
            } catch (r) {}
            ma(e) && pa("load.4")
        }
    }

    function ya(e) {
        if (vi || gi) {
            var n = Kr + tn + Qr + tn + Yr + tn + Zr + tn + ii + tn + ui + tn + wa.rx + tn + wa.ry + tn + wa.rz + tn + Gr + tn + ei + tn + ri;
            if (la) try {
                var r = window.localStorage;
                r && (r[lr](En, n), r[lr](Sn, n[cn](tn)[It](0, 10).join(tn)), r[lr](Nn, n[cn](tn)[It](0, 9).join(tn)), r[lr](gn, n[cn](tn)[It](0, 6).join(tn)))
            } catch (i) {}
            var s = ("" + e)[f]() != "local";
            if (Dr[st] || Dr.ios) s = t;
            ma(e) && pa("save.4:" + n)
        }
    }

    function xa(e, r) {
        pi && vi && !mi && (ba = n, $r = t, Ea = e, Sa = r, Na(-1))
    }

    function Ta() {
        ba = t, wa.rx = 0, wa.ry = 0, wa.rz = 0
    }
    var e = "registerattribute",
        t = !1,
        n = !0,
        r = "removeEventListener",
        s = "addEventListener",
        o = null,
        u = "enabled",
        a = "onunavailable",
        f = "toLowerCase",
        l = "indexOf",
        c = "deviceorientation",
        h = "orientation",
        p = "desktop",
        d = "architectural",
        v = "getEyeParameters",
        m = "view",
        g = "maxpixelzoom",
        y = "devicemotion",
        b = "display",
        w = "fisheyefovlink",
        E = "LG G4",
        S = "LG G4 Stylus",
        x = "control",
        T = "browser",
        N = "stereographic",
        C = "continuousupdates",
        k = "android",
        L = "getRecommendedEyeRenderRect",
        A = "limitview",
        O = "Xperia C4",
        M = "LG G Flex 2",
        _ = "events",
        D = "area",
        P = "LG G3",
        H = "getCurrentEyeFieldOfView",
        B = "height",
        j = "onavailable",
        F = "webkitFullscreenElement",
        I = "viewerlayer",
        q = "fullscreenchange",
        R = "#ifdef GL_FRAGMENT_PRECISION_HIGH\n",
        U = "loadwhilemoving",
        z = "OnePlus One",
        W = "capabilities",
        X = "renderRect",
        V = "mozFullScreenElement",
        $ = "haschanged",
        J = "LG V10",
        K = "Zenfone 2 Laser",
        Q = "right",
        G = "HTC One M8",
        Y = "hlookat",
        Z = "float b = texture2D(sm,vB).b;",
        et = "call",
        tt = "pannini",
        nt = "msFullscreenElement",
        rt = "float r = texture2D(sm,vR).r;",
        it = "fovtype",
        st = "firefox",
        ot = "downloadlockedlevel",
        ut = "fisheye",
        at = "Xperia Z Ultra",
        ft = "fullscreen",
        lt = "Xperia M5",
        ct = "Xperia Z3",
        ht = "Xperia C5",
        pt = "stereooverlap",
        dt = "uniform1f",
        vt = "width",
        mt = "Xperia Z1",
        gt = "Galaxy S5",
        yt = "timertick",
        bt = "userAgent",
        wt = "getRecommendedRenderTargetSize",
        Et = "mousemove",
        St = "mousedown",
        xt = "webkitIsFullScreen",
        Tt = "vec2 vR = center + v * ca;",
        Nt = "vec2 vB = center + v / ca;",
        Ct = "renderTargetSize",
        kt = "precision mediump float;\n",
        Lt = "lockmultireslevel",
        At = "documentElement",
        Ot = "getEyeTranslation",
        Mt = "fullscreenElement",
        _t = "precision highp float;\n",
        Dt = "left",
        Pt = "#endif\n",
        Ht = "isPresenting",
        Bt = "atan2",
        jt = "mobile",
        Ft = "accelerationIncludingGravity",
        It = "slice",
        qt = "LG G3 S",
        Rt = "scaleflying",
        Ut = "vec2 v = tx - center;",
        zt = "fovmax",
        Wt = "fovmin",
        Xt = "usercontrol",
        Vt = "uniform sampler2D sm;",
        $t = "HTC One M9",
        Jt = "LG G Flex",
        Kt = "length",
        Qt = "Moto X",
        Gt = "landscape",
        Yt = "useProgram",
        Zt = "uniform float ol;",
        en = "Xperia Z3 Compact",
        tn = ",",
        nn = "vlookat",
        rn = "uniform float ca;",
        sn = "auto",
        on = "LG Optimus G Pro",
        un = "LG Magna",
        an = "varying vec2 tx;",
        fn = "recommendedFieldOfView",
        ln = "YXZ",
        cn = "split",
        hn = "LG G2",
        pn = "onunknowndevice",
        dn = "mozPointerLockElement",
        vn = "distorted",
        mn = "mousetype",
        gn = "krpano.webvr.1",
        yn = "webGL",
        bn = "mozUnlockOrientation",
        wn = "sqrt",
        En = "krpano.webvr.4",
        Sn = "krpano.webvr.3",
        xn = "Zenfone Selfie",
        Tn = "HTC Desire 626",
        Nn = "krpano.webvr.2",
        Cn = "#ifdef GL_ES\n",
        kn = "HTC Desire 728",
        Ln = "layer",
        An = "camroll",
        On = "contextmenu",
        Mn = "visible",
        _n = "stereo",
        Dn = "pointerLockElement",
        Pn = "Zenfone Zoom",
        Hn = "hasExternalDisplay",
        Bn = "mozLockOrientation",
        jn = "mozGetVRDevices",
        Fn = "void main()",
        In = "HTC One M9+",
        qn = "touchstart",
        Rn = "unlockOrientation",
        Un = "_VR_backup",
        zn = "Moto X Play",
        Wn = "devicename",
        Xn = "HTC One E9",
        Vn = "HTC One A9",
        $n = "LG G5",
        Jn = "HTC One E8",
        Kn = "getVRDisplays",
        Qn = "1|0|0|0",
        Gn = "Xperia Z5",
        Yn = "Galaxy S3",
        Zn = "Galaxy S4",
        er = "Galaxy A3",
        tr = "Galaxy A5",
        nr = "Galaxy A7",
        rr = "iPhone 6+",
        ir = "off",
        sr = "touchmove",
        or = "LG Spirit",
        ur = "maxmem",
        ar = "lockOrientation",
        fr = "getItem",
        lr = "setItem",
        cr = "iPhone 6",
        hr = "createppshader",
        pr = "changedTouches",
        dr = "eyeTranslation",
        vr = "hotspot[",
        mr = "screentosphere",
        gr = "mozOrientation",
        yr = "VFOV",
        br = "Honor 4X",
        wr = "Honor 6+",
        Er = "Nexus 5X",
        Sr = "hardwareUnitId",
        xr = "location",
        Tr = "touchend",
        Nr = "Unknown",
        Cr = "#else\n",
        kr = "createElement",
        Lr = "keydown",
        Ar = "Honor 7",
        Or = "HTC One",
        Mr = this;
    Mr.name = "WebVR", Mr.version = "1.19-pr4", Mr.build = "2016-04-07";
    var _r = o,
        Dr = o,
        Pr = o,
        Hr = document,
        Br = 1,
        jr = .00125,
        Fr = t,
        Ir = n,
        qr = 1,
        Rr = n,
        Ur = n,
        zr = t,
        Wr = t,
        Xr = n,
        Vr = n,
        $r = t,
        Jr = t,
        Kr = 63.5,
        Qr = sn,
        Gr = 1,
        Yr = 96,
        Zr = .6,
        ei = Qn,
        ti = [1, 0, 0, 0],
        ni = t,
        ri = 0,
        ii = 100,
        si = t,
        oi = 1,
        ui = 3,
        ai = "",
        fi = n,
        li = o,
        ci = o,
        hi = o,
        pi = t,
        di = t,
        vi = t,
        mi = t,
        gi = t,
        yi = t,
        bi = t,
        wi = t,
        Ei = t,
        Si = {
            enabled: t,
            eyetranslt: lo,
            requestframe: uo,
            updateview: so,
            submitframe: ao,
            prjmatrix: fo,
            getsize: co,
            getcursor: vo
        },
        xi = n,
        Ti = 0,
        Ni = 0,
        Ci = 6,
        ki = 0,
        Li = 1,
        Ai = 0,
        Oi = 0,
        Mi = 0,
        _i = t,
        Di = o,
        Pi = o,
        Hi = Math.PI / 180,
        Bi = 180 / Math.PI;
    Mr.registerplugin = function(r, i, s) {
        _r = r, Pr = s;
        if (_r.version < "1.19" || _r.build < "2015-07-09") {
            _r.trace(3, "WebVR plugin - too old krpano version (min. 1.19)");
            return
        }
        if (_r.webVR) return;
        Dr = _r.device, ("" + navigator[bt])[f]()[l]("mobile vr") >= 0 && (bi = n, si = n), Pr[e]("worldscale", Br, function(e) {
            var t = Number(e);
            isNaN(t) || (Br = Math.max(t, .1))
        }, function() {
            return Br
        }), Pr[e]("mousespeed", jr, function(e) {
            var t = Number(e);
            isNaN(t) || (jr = t)
        }, function() {
            return jr
        }), Pr[e]("pos_tracking", Fr, function(e) {
            Fr = ji(e)
        }, function() {
            return Fr
        }), Pr[e]("multireslock", Ir, function(e) {
            Ir = ji(e), Si[u] && ks()
        }, function() {
            return Ir
        }), Pr[e]("oversampling", qr, function(e) {
            qr = Number(e), _r[D][$] = n
        }, function() {
            return qr
        }), Pr[e]("fullscreen_mirroring", Rr, function(e) {
            Rr = ji(e)
        }, function() {
            return Rr
        }), Pr[e]("mobilevr_support", Ur, function(e) {
            Ur = ji(e)
        }, function() {
            return Ur
        }), Pr[e]("mobilevr_touch_support", zr, function(e) {
            zr = ji(e)
        }, function() {
            return zr
        }), Pr[e]("mobilevr_fake_support", Wr, function(e) {
            Wr = ji(e)
        }, function() {
            return Wr
        }), Pr[e]("mobilevr_ipd", Kr, function(e) {
            var t = Number(e);
            isNaN(t) || (Kr = t), ls()
        }, function() {
            return Kr
        }), Pr[e]("mobilevr_screensize", Qr, function(e) {
            ms(e)
        }, function() {
            return gs()
        }), Pr[e]("mobilevr_lens_fov", Yr, function(e) {
            var t = Number(e);
            isNaN(t) || (Yr = t, ls())
        }, function() {
            return Yr
        }), Pr[e]("mobilevr_lens_overlap", Gr, function(e) {
            var t = Number(e);
            isNaN(t) || (Gr = t, ls())
        }, function() {
            return Gr
        }), Pr[e]("mobilevr_lens_dist", Zr, function(e) {
            var t = Number(e);
            isNaN(t) || (Zr = t, ls())
        }, function() {
            return Zr
        }), Pr[e]("mobilevr_lens_dist2", ei, function(e) {
            ei = e, ls()
        }, function() {
            return ei
        }), Pr[e]("mobilevr_lens_ca", ri, function(e) {
            var t = Number(e);
            isNaN(t) || (ri = t, ls())
        }, function() {
            return ri
        }), Pr[e]("mobilevr_lens_vign", ii, function(e) {
            var t = Number(e);
            isNaN(t) || (ii = t, ls())
        }, function() {
            return ii
        }), Pr[e]("mobilevr_webvr_dist", si, function(e) {
            si = ji(e)
        }, function() {
            return si
        }), Pr[e]("mobilevr_wakelock", Xr, function(e) {
            Xr = ji(e)
        }, function() {
            return Xr
        }), Pr[e]("mobilevr_orientationlock", Vr, function(e) {
            Vr = ji(e)
        }, function() {
            return Vr
        }), Pr[e]("mobilevr_autocalibration", $r, function(e) {
            $r = ji(e)
        }, function() {
            return $r
        }), Pr[e]("mobilevr_webvr_firefox", Jr, function(e) {
            Jr = ji(e)
        }, function() {
            return Jr
        }), Pr[e]("mobilevr_sensor", oi, function(e) {
            oi = parseInt(e) & 1
        }, function() {
            return oi
        }), Pr[e]("mobilevr_sensor_mode", ui, function(e) {
            var t = parseInt(e);
            t >= 0 && t <= 7 && (ui = t), Ni = 0
        }, function() {
            return ui
        }), Pr[e]("vr_cursor", ai, function(e) {
            ho(e)
        }, function() {
            return ai
        }), Pr[e]("vr_cursor_enabled", fi, function(e) {
            fi = ji(e)
        }, function() {
            return fi
        }), Pr[e]("vr_cursor_onover", ci, function(e) {
            ci = e
        }, function() {
            return ci
        }), Pr[e]("vr_cursor_onout", hi, function(e) {
            hi = e
        }, function() {
            return hi
        }), Pr[e]("isavailable", di, function(e) {}, function() {
            return di
        }), Pr[e]("isenabled", pi, function(e) {}, function() {
            return pi
        }), Pr[e]("iswebvr", !vi, function(e) {}, function() {
            return !vi || gi
        }), Pr[e]("ismobilevr", vi, function(e) {}, function() {
            return vi || gi
        }), Pr[e]("isfake", mi, function(e) {}, function() {
            return mi
        }), Pr[e]("havesettings", yi, function(e) {}, function() {
            return yi
        }), Pr[e](Wn, "", function(e) {}, function() {
            return ds()
        }), Pr[e]("devicesize", "", function(e) {}, function() {
            return vs()
        }), Pr[e](j, o), Pr[e](a, o), Pr[e](pn, o), Pr[e]("onentervr", o), Pr[e]("onexitvr", o), Pr.entervr = ws, Pr.exitvr = Ss, Pr.togglevr = xs, Pr.resetsensor = Ts, Pr.lookat = Ts, Pr.loadsettings = ga, Pr.savesettings = ya, Pr.calibrate = xa, Pr.resetcalibration = Ta, Pr.update = bs;
        if (_r[yn]) {
            _r.webVR = Si;
            var c = t;
            Dr[k] && Dr[st] && Jr == t && (c = n);
            var h = document[At].requestPointerLock || document[At].mozRequestPointerLock || document[At].webkitRequestPointerLock,
                p = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock;
            h && p && (_i = n, Di = h, Pi = p);
            try {
                c == t && navigator[Kn] ? navigator[Kn]().then(es) : c == t && navigator.getVRDevices ? navigator.getVRDevices().then(is) : c == t && navigator[jn] ? navigator[jn](is) : Ur ? Ii() : wi == t && (wi = n, _r[et](Pr[a], Pr))
            } catch (d) {}
        } else wi == t && (wi = n, _r[et](Pr[a], Pr))
    }, Mr.unloadplugin = function() {
        Ss(), Os(t, n), _r.webVR = o
    };
    var zi = o,
        Wi = o,
        Xi = o,
        Vi = o,
        $i = o,
        Ji = o,
        Ki = o,
        Qi = o,
        Gi = o,
        Yi = o,
        Zi = 100,
        ss = o,
        us = o,
        Ns = o,
        Os = function() {
            var e = o,
                n = o;
            return function(r, i) {
                if (Dr[jt] && mi == t)
                    if (r)
                        if (Dr.ios) {
                            var s = 15;
                            e = window.setInterval(function() {
                                window[xr] = window[xr], window.setTimeout(window.stop, 0), window.setTimeout(_r.Kloader.iOSWakelockCheck, 1)
                            }, s * 1e3)
                        } else Dr[k] && (n == o && (n = document[kr]("video"), n.setAttribute("loop", ""), n.canPlayType("video/webm") != "" && (n.src = ka)), n.play());
                else {
                    e && (window.clearInterval(e), e = o);
                    if (n && i) {
                        n.pause();
                        try {
                            n.src = "", n.removeAttribute("src")
                        } catch (u) {}
                        n = o
                    }
                }
            }
        }(),
        _s = 0,
        Bs = 0,
        Ys = {
            q: new Fs(0, 0, 0, 1),
            t: 0
        },
        Zs = {
            q: new Fs(0, 0, 0, 1),
            t: 0
        },
        eo = new Fs(0, 0, 0, 1),
        to = o,
        ro = o,
        io = new Fs(0, 0, 0, 1),
        Ro = new mo,
        Uo = new mo,
        zo = new mo,
        Wo = new mo,
        Xo = new mo,
        Vo = ko(),
        $o = ko(),
        Jo = new mo,
        Ko = new mo,
        nu = 0,
        ru = new mo,
        iu = new mo,
        su = o,
        ou = ko(),
        uu = ko(),
        au = ko(),
        fu = ko(),
        cu = function() {
            var e = 0,
                t = 0,
                n = 0,
                r = 0,
                i = 0,
                s = 0,
                o = 0,
                u = 0,
                a = 0,
                f = 0,
                l = 1,
                c = 0,
                h = 0,
                p = 0,
                d = .03;
            return function(c, h, p, v) {
                var m = c - e,
                    g = h - t,
                    y = p - n,
                    b = v - r;
                e = c, t = h, n = p, r = v;
                var w = Math[wn](m * m + g * g + y * y);
                if (b > 500) {
                    i = 0;
                    return
                }
                if (i == 0) {
                    i = b, s = w;
                    return
                }
                i = i * .95 + .05 * b;
                var E = Math.min(15 * i / 1e3, .5);
                s = s * (1 - E) + E * w;
                var S = wa;
                s < d ? (o++, u += c, a += h, f += p, o > 19 && (S.rx = S.rx * (1 - l) + l * (u / o), S.ry = S.ry * (1 - l) + l * (a / o), S.rz = S.rz * (1 - l) + l * (f / o), l > .5 && (l *= .9), s = 10, d *= .5)) : (o = 1, u = c, a = h, f = p)
            }
        }(),
        hu = 0,
        du = t,
        vu = new mo,
        mu = new mo,
        gu = new mo,
        yu = new mo,
        bu = new mo,
        wu = new mo,
        Eu = new mo,
        Su = new mo,
        xu = new mo,
        Tu = new mo,
        Nu = ko(),
        Cu = ko(),
        ku = ko(),
        Lu = ko(),
        Au = ko(),
        Ou = ko(),
        Mu = ko(),
        _u = ko(),
        Du = ko(),
        Pu = ko(),
        Hu = ko(),
        Bu = ko(),
        ju = ko(),
        Fu = ko(),
        Iu = ko(),
        qu = ko(),
        Ru = ko(),
        Uu = ko(),
        zu = 20,
        Wu = .5,
        Xu = 9.81,
        Vu = 1e7,
        $u = t,
        Yu = 0,
        ta = new mo,
        na = ko(),
        ra = ko(),
        sa = "http://d8d913s460fub.cloudfront.net/krpanocloud/webvr_localstorage.html?v=4",
        oa = t,
        ua = o,
        aa = o,
        fa = o,
        la = n,
        ba = t,
        wa = {
            rx: 0,
            ry: 0,
            rz: 0
        },
        Ea = o,
        Sa = o,
        Na = function() {
            function i() {
                var t = 0,
                    r = n * 3,
                    i = 0,
                    s = 0,
                    o = 0,
                    u = 0,
                    a = 0,
                    f = 0,
                    l = 0,
                    c = 0,
                    h = 0,
                    p = 0;
                for (t = 0; t < r; t += 3) i += e[t | 0], s += e[t + 1 | 0], o += e[t + 2 | 0];
                i /= n, s /= n, o /= n;
                for (t = 0; t < r; t += 3) l = e[t | 0] - i, c = e[t + 1 | 0] - s, h = e[t + 2 | 0] - o, u += l * l, a += c * c, f += h * h;
                u = Math[wn](u / n), a = Math[wn](a / n), f = Math[wn](f / n), p = Math[wn](u * u + a * a + f * f);
                if (p < .05) {
                    var d = wa;
                    d.rx = i, d.ry = s, d.rz = o, Ea && _r[et](Ea, Pr)
                } else Sa && _r[et](Sa, Pr)
            }
            var e = new Array(300),
                n = 0,
                r = 0;
            return function(s, o, u, a) {
                if (s < 0) {
                    n = 0, r = _r[yt];
                    return
                }
                var f = _r[yt] - r;
                if (f > 500) {
                    var l = n * 3;
                    e[l | 0] = o, e[l + 1 | 0] = u, e[l + 2 | 0] = a, n++;
                    if (n > 100 || f > 2500) ba = t, i()
                }
            }
        }(),
        Ca = function() {
            function u(t) {
                for (i = 0; i < t[Kt]; i++)
                    if (e && t[i] === e || r && t[i] === r) t.splice(i, 1), i--
            }
            var e = o,
                n = "" + Cn + R + _t + Cr + kt + Pt + Pt + Vt + an + rn + Zt + Fn + "{" + "float g = texture2D(sm,tx).g;" + "vec2 center = vec2(0.5 + (0.5 - ol)*(step(0.5,tx.x) - 0.5), 0.5);" + Ut + Tt + rt + Nt + Z + "gl_FragColor=vec4(r,g,b,1.0);" + "}",
                r = o,
                s = "" + Cn + R + _t + Cr + kt + Pt + Pt + Vt + an + "uniform vec2 sz;" + "uniform float ss;" + rn + Zt + "uniform float vg;" + "uniform vec4 dd;" + Fn + "{" + "float vig = 0.015;" + "float side = step(0.5,tx.x) - 0.5;" + "float aspect = (sz.x / sz.y);" + "vec2 center = vec2(0.5 + (0.5 - ol)*side, 0.5);" + Ut + "v.x = v.x * aspect;" + "v *= 2.0 * ss;" + "float rs = dot(v,v);" + "v = v * (dd.x + rs*(dd.y + rs*(dd.z + rs*dd.w)));" + "v /= 2.0 * ss;" + "v.x = v.x / aspect;" + "vec2 vG = center + v;" + "float a = (1.0 - smoothstep(vG.x-vig - side*ol, vG.x - side*ol, center.x - 0.25)) * " + "(1.0 - smoothstep(center.x + 0.25 - vG.x + side*ol - vig, center.x + 0.25 - vG.x + side*ol, 0.0)) * " + "(1.0 - smoothstep(vG.y-vig, vG.y, 0.0)) * " + "(1.0 - smoothstep(1.0 - vG.y-vig,1.0 - vG.y, 0.0));" + "a *= smoothstep(rs-vig, rs+vig, vg);" + Tt + Nt + rt + "float g = texture2D(sm,vG).g;" + Z + "gl_FragColor=vec4(a*r,a*g,a*b,1.0);" + "}";
            return function(i) {
                var a = _r[yn];
                if (a) {
                    var f, l = a.context,
                        c = a.ppshaders,
                        h = 1 - ri * .1 / Li;
                    ni == t && h > .999999 && h < 1.000001 && (i = t), _r[b][_n] == t && (i = t);
                    if (i)
                        if (ni) {
                            r == o && (r = a[hr](s, "ss,ca,dd,ol,sz,vg"));
                            if (r) {
                                var p = 1 / ti[0],
                                    d = ti[1],
                                    v = ti[2],
                                    m = ti[3];
                                a[Yt](r.prg), l[dt](r.ss, Li), l[dt](r.ca, h), l.uniform4f(r.dd, p, p * d, p * v, p * m), l[dt](r.ol, .5 * Mi * (1 + (Gr - 1) * .1)), l[dt](r.vg, ii / 30), a[Yt](o), u(c), c.push(r)
                            }
                        } else e == o && (e = a[hr](n, "ca,ol")), e && (a[Yt](e.prg), l[dt](e.ca, h), l[dt](e.ol, .5 * Mi * (1 + (Gr - 1) * .1)), a[Yt](o), u(c), c.push(e));
                    else u(c)
                }
            }
        }(),
        ka = "data:video/webm;base64,GkXfowEAAAAAAAAfQoaBAUL3gQFC8oEEQvOBCEKChHdlYm1Ch4ECQoWBAhhTgGcBAAAAAAABzRFNm3RALE27i1OrhBVJqWZTrIHfTbuMU6uEFlSua1OsggEuTbuMU6uEHFO7a1OsggGw7AEAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmAQAAAAAAAEMq17GDD0JATYCMTGF2ZjU2LjMuMTAwV0GMTGF2ZjU2LjMuMTAwc6SQC+JFWnEfyt4nOD98NcnLDESJiAAAAAAAAAAAFlSuawEAAAAAAABCrgEAAAAAAAA514EBc8WBAZyBACK1nIN1bmSGhVZfVlA4g4EBI+ODgw9CQOABAAAAAAAADrCBCLqBCFSwgQhUuoEIH0O2dQEAAAAAAAAo54EAo6OBAACAEAIAnQEqCAAIAABHCIWFiIWEiAICAAwNYAD+/6PeABxTu2sBAAAAAAAAEbuPs4EAt4r3gQHxggF88IED"
};