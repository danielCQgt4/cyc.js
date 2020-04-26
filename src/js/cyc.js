const load = function (c) {
    if (c && (typeof c === 'object')) {
        const a = window.location.pathname;
        var e = gN(c.n);
        for (i = 0; i < e.length; i++) {
            if (e[i].dataset.path == a) {
                e[i].className += ' ' + c.a;
                break;
            }
        }
    } else {
        console.error("Not valid obj");
    }
}
const rmM = function (t, a) {
    if (gI(t) && t) {
        var e = gI(t);
        if (typeof a == 'boolean' && a) {
            t.className += ' close-element-cyc';
            setTimeout(() => {
                e.parentNode.removeChild(e);
            }, 400);
        } else {
            e.parentNode.removeChild(e);
        }
    }
}
const nI = function (t) {
    const e = ndom("img");
    return t && "object" == typeof t && Object.assign(e, t), e;
}
const ndom = function (t, l) {
    if (typeof t == 'number') {
        for (let i = 0; i < l; i++) {
            const e = document.createElement('div');
            arr.push(e);
        }
        return arr;
    } else if (typeof l == 'number') {
        const arr = [];
        for (let i = 0; i < l; i++) {
            const e = t ? document.createElement(t) : ndom("div");
            arr.push(e);
        }
        return arr;
    } else if (l && l != undefined && typeof l != 'number') {
        const arr = [];
        let m;
        for (let i = 0; i < arguments.length; i++) {
            m = arguments[i];
            const e = typeof m == 'string' ? document.createElement(arguments[i])
                : document.createElement('div');
            arr.push(e);
        }
        return arr;
    } else {
        return t ? document.createElement(t) : ndom("div");
    }
}
const ntn = (t) => {
    return t || console.error("Not text gotted"), document.createTextNode(t);
}
const gI = (t) => {
    return t || console.error("Not id gotted"), document.getElementById(t);
}
const gN = (t) => {
    return t || console.error("Not name gotted"), document.getElementsByName(t);
};
const cyc = {};
(() => {

    const p = (c, cb) => {
        const ajx = new XMLHttpRequest();
        ajx.open(c.method, c.u, true),
            c.headers.forEach(h => {
                ajx.setRequestHeader(h.t, h.d);
            }),
            ajx.timeout = 3500,
            ajx.onreadystatechange = function () {
                if (4 == this.readyState) {
                    cb(this.responseText, this.status);
                }
            },
            ajx.onerror = () => {
                console.log('Error');
                cb(null);
            },
            ajx.send(c.d);
    }

    const ajxJson = (m, u, d, cb, h) => {
        const post = {
            method: m,
            u,
            d: typeof d != 'string' ? JSON.stringify(d) : d,
            headers: [
                {
                    t: 'Content-type',
                    d: 'application/json'
                }
            ]
        };
        if (h) {
            h.forEach(o => {
                post.headers.push(o);
            });
        }
        p(post, o => {
            try {
                o = JSON.parse(o);
                cb(o);
            } catch (e) {
                cb(o);
            }
        });
    }

    const ajxForm = (m, u, d, cb, h) => {
        if (typeof d == 'object') {
            d = jF(d);
        }
        const post = {
            method: m,
            u,
            d,
            headers: [
                {
                    t: 'Content-type',
                    d: 'application/x-www-form-urlencoded'
                }
            ]
        };
        if (h) {
            h.forEach(o => {
                post.headers.push(o);
            });
        }
        p(post, o => {
            try {
                o = JSON.parse(o);
                cb(o);
            } catch (e) {
                cb(o);
            }
        });
    }

    const jF = (j) => {
        var r = '';
        if (typeof j == 'object') {
            var k = Object.keys(j);
            var l = k.length;
            for (var i = 0; i < l; i++) {
                r += k[i] + '=' + j[k[i]];
                if (i < (l - 1)) {
                    r += '&';
                }
            }
        }
        return r;
    }

    const g1 = (t) => {
        const d = ndom();
        d.setAttribute('id', t.id || 'diag-gen'),
            d.setAttribute('class', 'diag-back');
        const i = ndom();
        i.setAttribute('id', t.id + '-c' || 'diag-c-gen'),
            i.setAttribute('class', 'diag-container-2'),
            d.appendChild(i);
        const e = ndom();
        return e.setAttribute('class', 'diag-body-2'),
            i.appendChild(e),
        {
            db: d,
            dbo: e,
            dc: i
        }
    }
    const g2 = (t, e) => {
        null == t && (t = {
            type: !0
        });
        const {
            db: n,
            dbo: i,
            dc: z
        }
            = function (t) {
                const e = ndom();
                e.setAttribute('id', t.id || 'diag-gen'),
                    e.setAttribute('class', 'diag-back');
                const n = ndom();
                n.setAttribute('id', t.id + '-c' || 'diag-c-gen'),
                    n.setAttribute('class', 'diag-container'),
                    e.appendChild(n);
                const i = ndom();
                return i.setAttribute('class', 'diag-body'),
                    n.appendChild(i),
                {
                    db: e,
                    dbo: i,
                    dc: n
                }
            }({
                id: 'gen-se-gen'
            });
        typeof t.type == 'number' ?
            (t.type ?
                (t.c = 'success', t.title
                    || (t.title = 'Exito'), t.text
                    || (t.text = 'La tarea fue completada'), t.btn
                    || (t.btn = 'Ok'))
                : (t.c = 'error', t.title
                    || (t.title = 'Error'), t.text
                    || (t.text = 'Ocurrio un problema'), t.btn
                    || (t.btn = 'Ok'))
            ) : (t.c = 'confirm', t.title
                || (t.title = '¿Esta segur@?'), t.text
                || (t.text = 'Que desea continuar con esta operacion. Esto puede provocar problemas en un futuro'), t.btn
                || (t.btn1 = 'Ok')
                || (t.btn2 = 'Cancelar'));

        const c = gI('body'),
            s = ndom();
        s.setAttribute('class', 'diag-' + t.c),
            i.appendChild(s);
        const d = ndom();
        d.setAttribute('class', 'diag-' + t.c + '-top');
        const o = ndom();
        o.setAttribute('class', 'diag-' + t.c + '-top-inner'),
            d.appendChild(o);
        const a = ndom();
        const r = ndom();
        const l = ndom();
        typeof t.type == 'number' ? (
            a.setAttribute('class', 'diag-' + t.c + '-check'),
            o.appendChild(a),
            r.setAttribute('class', 'diag-' + t.c + '-check-ltb'),
            a.appendChild(r),
            l.setAttribute('class', 'diag-' + t.c + '-chech-lbt'),
            a.appendChild(l))
            : (
                a.setAttribute('class', 'diag-' + t.c + '-x'),
                a.appendChild(ntn('?')),
                o.appendChild(a)
            );
        const p = ndom();
        p.setAttribute('class', 'diag-' + t.c + '-center');
        const b = ndom('span');
        b.setAttribute('class', 'diag-' + t.c + '-center-title'),
            b.appendChild(ntn(t.title)),
            p.appendChild(b);
        const u = ndom('p');
        u.setAttribute('class', 'diag-' + t.c + '-center-msg'),
            u.appendChild(ntn(t.text)),
            p.appendChild(u);
        const g = ndom();
        g.setAttribute('class', 'diag-' + t.c + '-bottom');
        const m = ndom('button');
        const m2 = ndom('button');
        typeof t.type == 'number' ? (
            m.setAttribute('class', 'diag-' + t.c + '-btn'),
            m.appendChild(ntn(t.btn || 'Ok')),
            m.addEventListener('click', () => {
                e && 'function' == typeof e ? e() : z.setAttribute('class', 'diag-container-close'),
                    setTimeout(() => {
                        rmM(z.id),
                            n.setAttribute('class', 'diag-back-close'),
                            setTimeout(() => {
                                rmM(n.id)
                            }, 400)
                    }, 500)
            }),
            g.appendChild(m)) :
            (
                m.setAttribute('class', 'diag-' + t.c + '-error-btn'),
                m.appendChild(ntn(t.btn2 || 'Cancelar')),
                m.addEventListener('click', () => {
                    e && 'function' == typeof e ? e(false) : z.setAttribute('class', 'diag-container-close'),
                        setTimeout(() => {
                            rmM(z.id),
                                n.setAttribute('class', 'diag-back-close'),
                                setTimeout(() => {
                                    rmM(n.id)
                                }, 400)
                        }, 500)
                }),
                g.appendChild(m),

                m2.setAttribute('class', 'diag-' + t.c + '-success-btn'),
                m2.appendChild(ntn(t.btn1 || 'Ok')),
                m2.addEventListener('click', () => {
                    if (e && 'function' == typeof e) {
                        e(true);
                    }
                }),
                g.appendChild(m2)
            )
        s.appendChild(d),
            s.appendChild(p),
            s.appendChild(g),
            c.appendChild(n);
        return {
            n,
            g,
            rm: function () {
                z.setAttribute('class', 'diag-container-close'),
                    setTimeout(() => {
                        rmM(z.id),
                            n.setAttribute('class', 'diag-back-close'),
                            setTimeout(() => {
                                rmM(n.id)
                            }, 400)
                    }, 500)
            }
        }
    }

    class CyC {
        /*
        * Modals
        */
        diagW(t) {
            null == t && (t = 'Un momento');
            const { db: d, dbo: i, dc: e } = g1({
                id: 'diag-wait'
            }),
                n = gI('body'),
                s = ndom();
            //Simplify
            s.setAttribute('class', 'diag-wait'),
                i.appendChild(s);
            const a = ndom();
            a.setAttribute('class', 'diag-wait-top');
            const o = ndom();
            o.setAttribute('class', 'diag-wait-top-inner'),
                a.appendChild(o);
            const c = ndom();
            c.setAttribute('class', 'diag-wait-x'),
                o.appendChild(c);
            const l = ndom();
            l.setAttribute('class', 'diag-wait-check-ltb'),
                c.appendChild(l);
            const p = ndom();
            p.setAttribute('class', 'diag-wait-chech-lbt'),
                c.appendChild(p);
            const r = ndom();
            r.setAttribute('class', 'diag-wait-center');
            const b = ndom('span');
            b.setAttribute('class', 'diag-wait-center-title'),
                b.appendChild(ntn(t || 'Un momento')),
                r.appendChild(b);
            const u = ndom();
            u.setAttribute('class', 'diag-wait-bottom');
            const m = ndom();
            return m.setAttribute('class', 'load-pg load-pg-primary'),
                u.appendChild(m),
                s.appendChild(a),
                s.appendChild(r),
                s.appendChild(u),
                n.appendChild(d),
            {
                db: d,
                rm: function () {
                    e.setAttribute('class', 'diag-container-2-close'),
                        setTimeout(() => {
                            rmM(e.id),
                                d.setAttribute('class', 'diag-back-close'),
                                setTimeout(() => {
                                    rmM(d.id)
                                }, 400)
                        }, 500)
                }
            }
        }
        diagE(e, n) {
            if (null == e) (e = {
            }).type = 0,
                e.c = 'error',
                e.title = 'Error',
                e.text = 'Ocurrio un problema',
                e.btn = 'Ok';
            else if ('string' == typeof e) {
                const t = {
                    c: 'error',
                    title: 'Error',
                    text: e,
                    btn: 'Ok'
                };
                e = t
            } else 'object' != typeof e && ((e = {
            }).c = 'error', e.title = 'Error', e.text = 'Ocurrio problema', e.btn = 'Ok');
            return e.type = 0,
                g2(e, n)
        }
        diagS(e, n) {
            if (null == e) (e = {
            }).type = 1,
                e.c = 'success',
                e.title = 'Exito',
                e.text = 'La tarea fue completada',
                e.btn = 'Ok';
            else if ('string' == typeof e) {
                const t = {
                    c: 'success',
                    title: 'Exito',
                    text: e,
                    btn: 'Ok'
                };
                e = t
            } else 'object' != typeof e && ((e = {
            }).type = 1, e.c = 'success', e.title = 'Exito', e.text = 'La tarea fue completada', e.btn = 'Ok');
            return e.type = 1,
                g2(e, n)
        }
        diagC(e, n) {
            if (null == e) (e = {
            }).type = false,
                e.c = 'confirm',
                e.title = '¿Esta segur@?',
                e.text = 'Que desea continuar con esta operacion. Esto puede provocar problemas en un futuro',
                e.btn1 = 'Ok',
                e.btn2 = 'Cancelar';
            else if ('string' == typeof e) {
                const t = {
                    c: 'confirm',
                    title: '¿Esta segur@?',
                    text: e,
                    btn1: 'Ok',
                    btn2: 'Cancelar'
                };
                e = t
            } else 'object' != typeof e && ((e = {
            }).type = false, e.c = 'confirm', e.title = '¿Esta segur@?', e.text = 'Que desea continuar con esta operacion. Esto puede provocar problemas en un futuro', e.btn1 = 'Ok', e.btn2 = 'Cancelar');
            return e.type = false,
                g2(e, n)
        }
        /*
        * Ajax
        */
        postJson(u, d, cb, h) {
            ajxJson('POST', u, d, cb, h);
        }
        postForm(u, d, cb, h) {
            ajxForm('POST', u, d, cb, h);
        }
        putJson(u, d, cb, h) {
            ajxJson('PUT', u, d, cb, h);
        }
        putForm(u, d, cb, h) {
            ajxForm('PUT', u, d, cb, h);
        }
        deleteJson(u, d, cb, h) {
            ajxJson('DELETE', u, d, cb, h);
        }
        deleteForm(u, d, cb, h) {
            ajxForm('DELETE', u, d, cb, h);
        }
        getJson(u, d, cb, h) {
            ajxJson('GET', u, d, cb, h);
        }
        getForm(u, d, cb, h) {
            ajxForm('GET', u, d, cb, h);
        }
        /*
        * Messages
        */
        m(t, e) {
            var i = ndom("div"),
                r = ndom("input");
            return (
                i.setAttribute("id", "error-msg"),
                i.setAttribute('class', 'error-msg border-r-8 pt-2 pb-2 pl-1 pr-1 mb w-100'),
                i.appendChild(ntn(t)),
                rmM(i.id),
                r.addEventListener("click", function () {
                    rmM(i.id);
                }),
                r.setAttribute("class", "m-btn"),
                r.setAttribute("value", "X"),
                r.setAttribute("type", "button"),
                i.appendChild(r),
                e.insertBefore(i, e.childNodes[0]),
                i
            );
        }
        sM(t, e) {
            var i = this.m(t, e);
            return i.setAttribute("class", "s-msg cyc-p-1 cyc-mb"), i;
        }
        eM(t, e) {
            var i = this.m(t, e);
            return i.setAttribute("class", "error-msg cyc-p-1 cyc-mb"), i;
        }
        /*
        * Other
        */
        vld = function () {
            var data;
            var arr = [];
            for (var i = 0, l = arguments.length; i < l; i++) {
                data = arguments[i];
                if (data) {
                    if (typeof data == 'object') {
                        if (data.id) {
                            if (!(!!data.value)) {
                                arr.push(data);
                            }
                        }
                    } else {
                        if (!(!!data)) {
                            arr.push(data);
                        }
                    }
                } else {
                }
            }
            if (arr.length == 0) {
                arr = [];
            }
            return {
                valid: !(arr.length > 0),
                array: arr
            };
        }
        resetFields = function () {
            var data;
            for (var i = 0, l = arguments.length; i < l; i++) {
                data = arguments[i];
                if (data) {
                    if (typeof data == 'object') {
                        data.value = '';
                    }
                }
            }
        }
        readOnly = function () {
            for (var i = 0, l = arguments.length; i < l; i++) {
                arguments[i].setAttribute('readonly', 'true');
            }
        }
        isEmail(e) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(e).toLowerCase());
        }
        jsonForm(j) {
            return jF(j);
        }
        tog(t, e) {
            if ((null == e && (e = 1), "none" != t.style.display))
                var i = 100,
                    r = setInterval(() => {
                        i >= 0
                            ? ((t.style.opacity = i / 100), (i -= 1))
                            : ((t.style.display = "none"), clearInterval(r));
                    }, e);
            else {
                i = 0;
                (t.style.opacity = 0), (t.style.display = "block");
                r = setInterval(() => {
                    i <= 100
                        ? ((t.style.opacity = i / 100), (i += 1))
                        : ((t.style.display = "block"), clearInterval(r));
                }, e);
            }
        }
        iF(e) {
            for (var i = 0, l = arguments.length; i < l; i++) {
                arguments[i].style = e ? "border: 1px solid #ff0000;" : "";
            }
        }
        filter(f, v) {
            const arr = [];
            let add = false;
            let keys;
            f.forEach(obj => {
                keys = Object.keys(obj);
                for (let i = 0; i < keys.length; i++) {
                    console.log(add, String(obj[keys[i]]).toLocaleLowerCase(),String(v).toLocaleLowerCase());
                    if (!add && String(obj[keys[i]]).toLocaleLowerCase().includes(String(v).toLocaleLowerCase())) {
                        add = true;
                        arr.push(obj);
                        break;
                    }
                }
                add = false;
            });
            return arr;
        }
    };
    cyc.o = new CyC();
})();

const app = {
    o: cyc.o
}

const d = {
    title: 'foo',
    body: 'bar',
    userId: 1,
    other: true
};
const d2 = {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
    other: true
};
const d3 = {

};
const w = app.o.diagW();
app.o.deleteJson('https://jsonplaceholder.typicode.com/posts/1', d, json => {
    w.rm();
    if (json) {
        console.log(json);
    } else {
        app.o.diagE();
    }
});

const ar = [{
    id: 1,
    nombre: 'Daniel Coto',
    titulo: 'js'
}, {
    id: 2,
    nombre: 'Melissa Benoist',
    titulo: 'SuperGirl'
}];

const r = app.o.filter(ar, 'me');
console.log(r);
