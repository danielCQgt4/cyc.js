const r = (c) => {
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
const rmM = (t, a) => {
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
const nI = (t) => {
    const e = ndom("img");
    return t && "object" == typeof t && Object.assign(e, t), e;
}
const ndom = (t, l) => {
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
class CyC {
    constructor() {

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
    g1(t) {
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
    g2(t, e) {
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
        console.log(t.type);
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
    diagW(t) {
        null == t && (t = 'Un momento');
        const { db: d, dbo: i, dc: e } = this.g1({
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
            this.g2(e, n)
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
            this.g2(e, n)
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
            this.g2(e, n)
    }
    iF(e) {
        for (var i = 0, l = arguments.length; i < l; i++) {
            arguments[i].style = e ? "border: 1px solid #ff0000;" : "";
        }
    }
}

const app = {
    o: new CyC()
}