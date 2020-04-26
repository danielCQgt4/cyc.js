/*function gen1(d) {
            const db = ndom();
            db.setAttribute('id', d.id || 'diag-gen');
            db.setAttribute('class', 'diag-back');
            const dc = ndom();
            dc.setAttribute('class', 'diag-container');
            db.appendChild(dc);
            const dbo = ndom();
            dbo.setAttribute('class', 'diag-body');
            dc.appendChild(dbo);
            return {
                db, dbo
            };
        };*/

        function diagSEgen(t, e) { null == t && (t = { type: !0 }); const { db: n, dbo: d } = gen1({ id: "gen-se-gen" }); t.type ? (t.c = "success", t.title || (t.title = "Exito"), t.text || (t.text = "La tarea fue completada"), t.btn || (t.btn = "Ok")) : (t.c = "error", t.title || (t.title = "Error"), t.text || (t.text = "Ocurrio un problema"), t.btn || (t.btn = "Ok")); const s = gI("body"), c = ndom(); c.setAttribute("class", "diag-" + t.c), d.appendChild(c); const i = ndom(); i.setAttribute("class", "diag-" + t.c + "-top"); const a = ndom(); a.setAttribute("class", "diag-" + t.c + "-top-inner"), i.appendChild(a); const l = ndom(); l.setAttribute("class", "diag-" + t.c + "-check"), a.appendChild(l); const o = ndom(); o.setAttribute("class", "diag-" + t.c + "-check-ltb"), l.appendChild(o); const p = ndom(); p.setAttribute("class", "diag-" + t.c + "-chech-lbt"), l.appendChild(p); const r = ndom(); r.setAttribute("class", "diag-" + t.c + "-center"); const b = ndom("span"); b.setAttribute("class", "diag-" + t.c + "-center-title"), b.appendChild(ntn(t.title)), r.appendChild(b); const h = ndom("p"); h.setAttribute("class", "diag-" + t.c + "-center-msg"), h.appendChild(ntn(t.text)), r.appendChild(h); const g = ndom(); g.setAttribute("class", "diag-" + t.c + "-bottom"); const u = ndom("button"); return u.setAttribute("class", "diag-" + t.c + "-btn"), u.appendChild(ntn(t.btn || "Ok")), u.addEventListener("click", () => { e && "function" == typeof e ? e() : rmM(n.id) }), g.appendChild(u), c.appendChild(i), c.appendChild(r), c.appendChild(g), s.appendChild(n), n }

        function temp(e, t) { if (null == e) (e = {}).type = !0, e.c = "success", e.title = "Exito", e.text = "La tarea fue completada", e.btn = "Ok"; else if ("string" == typeof e) { const t = { c: "success", title: "Exito" }; t.text = e, t.btn = "Ok", e = t } else "object" != typeof e && ((e = {}).type = !0, e.c = "success", e.title = "Exito", e.text = "La tarea fue completada", e.btn = "Ok"); return e.type = !0, diagSEgen(e, t) }

        function temp2(t, e) { if (null == t) (t = {}).type = 0, t.c = "error", t.title = "Error", t.text = "Ocurrio un problema", t.btn = "Ok"; else if ("string" == typeof t) { const e = {}; t.c = "error", t.title = "Error", e.text = t, e.btn = "Ok", t = e } else "object" != typeof t && ((t = {}).c = "error", t.title = "Error", t.text = "Ocurrio problema", t.btn = "Ok"); return t.type = 0, diagSEgen(t, e) }

        /*var d = temp2(null, () => { alert(); rmM(d.id); });

        var d = temp(null, () => { alert(); rmM(d.id); });*/

        // SUCCESS
        function success(d, a) {
            if (d == undefined) {
                d = {};
            }
            const b = gI('body');
            const db = ndom();
            db.setAttribute('id', d.id || 'diag-success');
            db.setAttribute('class', 'diag-back');
            const dc = ndom();
            dc.setAttribute('class', 'diag-container');
            db.appendChild(dc);
            const dbo = ndom();
            dbo.setAttribute('class', 'diag-body');
            dc.appendChild(dbo);
            //Code to success
            const ds = ndom();
            ds.setAttribute('class', 'diag-success');
            dbo.appendChild(ds);
            /*-- TOP --*/
            const dst = ndom();
            dst.setAttribute('class', 'diag-success-top');
            const dsti = ndom();
            dsti.setAttribute('class', 'diag-success-top-inner');
            dst.appendChild(dsti);
            const dstch = ndom();
            dstch.setAttribute('class', 'diag-success-check');
            dsti.appendChild(dstch);
            const dstltb = ndom();
            dstltb.setAttribute('class', 'diag-success-check-ltb');
            dstch.appendChild(dstltb);
            const dstlbt = ndom();
            dstlbt.setAttribute('class', 'diag-success-chech-lbt');
            dstch.appendChild(dstlbt);
            /*--CENTER--*/
            const dsc = ndom();
            dsc.setAttribute('class', 'diag-success-center');
            const dscs = ndom('span');
            dscs.setAttribute('class', 'diag-success-center-title');
            dscs.appendChild(ntn(d.title || 'Success'));
            dsc.appendChild(dscs);
            const dscp = ndom('p');
            dscp.setAttribute('class', 'diag-success-center-msg');
            dscp.appendChild(ntn(d.text || 'The work were successfully done'));
            dsc.appendChild(dscp);
            /*--BOTTOM--*/
            const dsb = ndom();
            dsb.setAttribute('class', 'diag-success-bottom');
            const btn = ndom('button');
            btn.setAttribute('class', 'diag-success-btn');
            btn.appendChild(ntn(d.btn || 'Ok'));
            btn.addEventListener('click', () => {
                if (a) {
                    if (typeof a == 'function') {
                        a();
                    } else {
                        rmM(db.id);
                    }
                } else {
                    rmM(db.id);
                }
            });
            dsb.appendChild(btn);
            ds.appendChild(dst);
            ds.appendChild(dsc);
            ds.appendChild(dsb);
            b.appendChild(db);
            return db;
        };

        //success();

        // ERROR
        function error(d, a) {
            const b = gI('body');
            const db = ndom();
            db.setAttribute('id', d.id || 'diag-error');
            db.setAttribute('class', 'diag-back');
            const dc = ndom();
            dc.setAttribute('class', 'diag-container');
            db.appendChild(dc);
            const dbo = ndom();
            dbo.setAttribute('class', 'diag-body');
            dc.appendChild(dbo);
            //Code to success
            const ds = ndom();
            ds.setAttribute('class', 'diag-error');
            dbo.appendChild(ds);
            /*-- TOP --*/
            const dst = ndom();
            dst.setAttribute('class', 'diag-error-top');
            const dsti = ndom();
            dsti.setAttribute('class', 'diag-error-top-inner');
            dst.appendChild(dsti);
            const dstch = ndom();
            dstch.setAttribute('class', 'diag-error-check');
            dsti.appendChild(dstch);
            const dstltb = ndom();
            dstltb.setAttribute('class', 'diag-error-check-ltb');
            dstch.appendChild(dstltb);
            const dstlbt = ndom();
            dstlbt.setAttribute('class', 'diag-error-chech-lbt');
            dstch.appendChild(dstlbt);
            /*--CENTER--*/
            const dsc = ndom();
            dsc.setAttribute('class', 'diag-error-center');
            const dscs = ndom('span');
            dscs.setAttribute('class', 'diag-error-center-title');
            dscs.appendChild(ntn(d.title || 'Error'));
            dsc.appendChild(dscs);
            const dscp = ndom('p');
            dscp.setAttribute('class', 'diag-error-center-msg');
            dscp.appendChild(ntn(d.text || 'Something went wrong'));
            dsc.appendChild(dscp);
            /*--BOTTOM--*/
            const dsb = ndom();
            dsb.setAttribute('class', 'diag-error-bottom');
            const btn = ndom('button');
            btn.setAttribute('class', 'diag-error-btn');
            btn.appendChild(ntn(d.btn || 'Ok'));
            btn.addEventListener('click', () => {
                if (a) {
                    if (typeof a == 'function') {
                        a();
                    } else {
                        rmM(db.id);
                    }
                } else {
                    rmM(db.id);
                }
            });
            dsb.appendChild(btn);
            ds.appendChild(dst);
            ds.appendChild(dsc);
            ds.appendChild(dsb);
            b.appendChild(db);
            return db;
        };

        //error();
        function gen2(d) {
            const db = ndom();
            db.setAttribute('id', d.id || 'diag-gen');
            db.setAttribute('class', 'diag-back');
            const dc = ndom();
            dc.setAttribute('id', d.id + '-c' || 'diag-c-gen');
            dc.setAttribute('class', 'diag-container-2');
            db.appendChild(dc);
            const dbo = ndom();
            dbo.setAttribute('class', 'diag-body-2');
            dc.appendChild(dbo);
            return {
                db, dbo, dc
            };
        }

        function diagW(d) {
            if (d == undefined) {
                d = 'Un momento';
            }
            const { db, dbo, dc } = gen2({ id: 'd-wait' });
            const b = gI('body');
            //Code to wait
            const ds = ndom();
            ds.setAttribute('class', 'diag-wait');
            dbo.appendChild(ds);
            /*-- TOP --*/
            const dst = ndom();
            dst.setAttribute('class', 'diag-wait-top');
            const dsti = ndom();
            dsti.setAttribute('class', 'diag-wait-top-inner');
            dst.appendChild(dsti);
            const dstch = ndom();
            dstch.setAttribute('class', 'diag-wait-x');
            dsti.appendChild(dstch);
            const dstltb = ndom();
            dstltb.setAttribute('class', 'diag-wait-check-ltb');
            dstch.appendChild(dstltb);
            const dstlbt = ndom();
            dstlbt.setAttribute('class', 'diag-wait-chech-lbt');
            dstch.appendChild(dstlbt);
            /*--CENTER--*/
            const dsc = ndom();
            dsc.setAttribute('class', 'diag-wait-center');
            const dscs = ndom('span');
            dscs.setAttribute('class', 'diag-wait-center-title');
            dscs.appendChild(ntn(d || 'Un momento'));
            dsc.appendChild(dscs);
            /*--BOTTOM--*/
            const dsb = ndom();
            dsb.setAttribute('class', 'diag-wait-bottom');
            const l = ndom();
            l.setAttribute('class', 'load-pg load-pg-primary');
            dsb.appendChild(l);
            ds.appendChild(dst);
            ds.appendChild(dsc);
            ds.appendChild(dsb);
            b.appendChild(db);
            return {
                db: db,
                rm: function () {
                    dc.setAttribute('class', 'diag-container-2-close');
                    setTimeout(() => {
                        rmM(dc.id);
                        db.setAttribute('class', 'diag-back-close');
                        setTimeout(() => {
                            rmM(db.id);
                        }, 400);
                    }, 500);
                }
            };
        }

        /*var w = app.o.diagW('Espere un momento');
        setTimeout(() => {
            w.rm();
        }, 2000);*/
        //app.o.diagS();

