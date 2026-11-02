/* Ders ve sunum modu: ders akışı kurucu (#ders) ve tam ekran sunucu (16:9 slaytlar, notlar, tartışma soruları). */
(function () {
  "use strict";
  var A = window.ATLAS, U = A.U, esc = U.esc, thById = U.thById, expById = U.expById;
  var deck = document.getElementById("deck");
  var D = { slides: [], i: 0, notes: false, title: "" };

  /* ---------- yardımcılar ---------- */
  function firstSentence(s) { var m = String(s || "").match(/^.*?[.!?](\s|$)/); return m ? m[0].trim() : String(s || ""); }
  function firstTwo(s) { var m = String(s || "").match(/^(.*?[.!?](\s|$)){1,2}/); return m ? m[0].trim() : String(s || ""); }
  function chunk(arr, n) { var out = []; for (var i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n)); return out; }
  function shortWho(t) { return t.who.split(/ ve |;|,/)[0]; }
  function inBand(b) {
    return A.theories.map(function (t) {
      var st = t.stages.filter(function (s) { return U.overlap(s, b) > 1e-6; });
      if (!st.length) return null;
      st.sort(function (p, q) { return U.overlap(q, b) - U.overlap(p, b); });
      return { t: t, s: st[0], i: t.stages.indexOf(st[0]) };
    }).filter(Boolean);
  }
  function li(items) { return "<ul>" + items.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>"; }
  /* Slayt nesnesi: başlıktaki %%PART%% yer tutucusu, aynı başlıklı slaytlar için "(k/n)" ile doldurulur.
     split: içerik sığmazsa slaytı ikiye bölen işlev (otomatik sığdırma düzeni kullanır). */
  function slide(kind, label, html, notes, split) { return { kind: kind, label: label, html: html, notes: notes || "", group: kind + "|" + label, split: split || null }; }
  function head(kicker, title) { return '<div class="sl-kicker">' + esc(kicker) + '</div><h2 class="sl-h">' + esc(title) + '<span class="sl-part">%%PART%%</span></h2>'; }
  function halves(arr) { var h = Math.ceil(arr.length / 2); return [arr.slice(0, h), arr.slice(h)]; }

  /* ---------- slayt şablonları ---------- */
  function tTitle(kicker, title, sub, lead, notes) {
    return slide("title", title, '<div class="sl-plate"><div class="sl-kicker">' + esc(kicker) + '</div><h1 class="sl-title">' + esc(title) + "</h1>" + (sub ? '<p class="sl-sub">' + esc(sub) + "</p>" : "") + (lead ? '<p class="sl-lead">' + esc(lead) + "</p>" : "") + "</div>", notes);
  }
  function tCols(kicker, title, cols, notes, cls) {
    var s = slide("cols", title, head(kicker, title) + '<div class="sl-cols n' + cols.length + (cls ? " " + cls : "") + '">' + cols.map(function (c) {
      return '<section><h3>' + (c.icon || "") + esc(c.h) + "</h3>" + li(c.items) + "</section>";
    }).join("") + "</div>", notes);
    if (cols.length >= 2) s.split = function () { var h = halves(cols); return [tCols(kicker, title, h[0], notes, cls), tCols(kicker, title, h[1], notes, cls)]; };
    else if (cols.length === 1 && cols[0].items.length > 1) s.split = function () {
      var h = halves(cols[0].items), c = cols[0];
      return [tCols(kicker, title, [{ icon: c.icon, h: c.h, items: h[0] }], notes, cls), tCols(kicker, title, [{ icon: c.icon, h: c.h, items: h[1] }], notes, cls)];
    };
    return s;
  }
  function tCards(kicker, title, cards, notes) {
    var s = slide("cards", title, head(kicker, title) + '<div class="sl-cards">' + cards.map(function (c) {
      return '<article class="fitbox" style="--c:' + c.color + '"><div class="sl-who">' + c.glyph + '<span class="n">' + esc(c.who) + '</span><span class="r">' + esc(c.range) + "</span></div><h3>" + esc(c.name) + "</h3><p>" + esc(c.text) + "</p></article>";
    }).join("") + "</div>", notes);
    if (cards.length > 1) s.split = function () { var h = halves(cards); return [tCards(kicker, title, h[0], notes), tCards(kicker, title, h[1], notes)]; };
    return s;
  }
  function tTable(kicker, title, headRow, rows, notes) {
    var s = slide("table", title, head(kicker, title) + '<table class="sl-table"><thead><tr>' + headRow.map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("") + "</tr></thead><tbody>" +
      rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + c + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table>", notes);
    if (rows.length > 1) s.split = function () { var h = halves(rows); return [tTable(kicker, title, headRow, h[0], notes), tTable(kicker, title, headRow, h[1], notes)]; };
    return s;
  }
  function tBul(kicker, title, items, notes) {
    var s = slide("bul", title, head(kicker, title) + li(items), notes);
    if (items.length > 1) s.split = function () { var h = halves(items); return [tBul(kicker, title, h[0], notes), tBul(kicker, title, h[1], notes)]; };
    return s;
  }
  function tProse(kicker, title, text, notes) {
    return slide("bul", title, head(kicker, title) + '<p class="sl-lead2">' + esc(text) + "</p>", notes);
  }
  function tBrain(kicker, title, age, items, notes) {
    var fig = A.views.beyin && A.views.beyin.mini ? A.views.beyin.mini(age) : "";
    return slide("brain", title, head(kicker, title) + '<div class="sl-brain"><div class="sl-fig">' + fig + "</div>" + li(items) + "</div>", notes);
  }
  function tQuestions(kicker, qs) {
    var s = slide("q", "Tartışma soruları", head(kicker, "Tartışma soruları") + '<ol class="sl-q">' + qs.map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") + "</ol>",
      "Sorular sayfadaki verilerden otomatik üretilmiştir; ders öncesinde gözden geçirip düzenleyebilirsiniz.");
    if (qs.length > 1) s.split = function () { var h = halves(qs); return [tQuestions(kicker, h[0]), tQuestions(kicker, h[1])]; };
    return s;
  }
  function tRefList(kicker, title, items, notes) {
    var s = slide("refs", title, head(kicker, title) + '<ul class="sl-refs">' + items.join("") + "</ul>", notes);
    if (items.length > 1) s.split = function () { var h = halves(items); return [tRefList(kicker, title, h[0], notes), tRefList(kicker, title, h[1], notes)]; };
    return s;
  }
  function tRefs(kicker, keys, notes) {
    var refs = keys.map(function (k) { return A.refs && A.refs[k]; }).filter(Boolean);
    if (!refs.length) return null;
    return tRefList(kicker, "Kaynaklar", refs.map(function (r) { return "<li>" + esc(r.apa) + (r.doi ? ' <span>doi:' + esc(r.doi) + "</span>" : "") + "</li>"; }), notes);
  }
  function timelineSvg(t) {
    var items = t.stages.map(function (s, i) { return { from: s.from, to: s.to, s: s, i: i }; });
    var rows = U.pack(items), Wd = 1000, rh = 46, Hh = rows * rh + 40, c = U.famColor(t.fam);
    var bars = items.map(function (it) {
      var x = U.xPos(it.from) * Wd, w = Math.max(6, (U.xPos(it.to) - U.xPos(it.from)) * Wd);
      return '<g><rect x="' + x.toFixed(1) + '" y="' + (it._row * rh + 6) + '" width="' + (w - 3).toFixed(1) + '" height="' + (rh - 12) + '" style="fill:color-mix(in srgb, ' + c + ' 22%, var(--surface));stroke:' + c + '"/>' +
        (w > 70 ? '<text x="' + (x + 8).toFixed(1) + '" y="' + (it._row * rh + rh / 2 + 6) + '" class="tl-t">' + esc(it.s.name.length > 30 && w < 220 ? it.s.name.slice(0, 26) + "…" : it.s.name) + "</text>" : "") + "</g>";
    }).join("");
    var ticks = [0, 1, 3, 6, 12, 18, 40, 65].map(function (y) { var x = U.xPos(y) * Wd; return '<line x1="' + x + '" x2="' + x + '" y1="0" y2="' + (Hh - 26) + '" class="tl-g"/><text x="' + x + '" y="' + (Hh - 6) + '" class="tl-a">' + (y === 0 ? "Doğum" : y) + "</text>"; }).join("");
    return '<svg viewBox="0 0 ' + Wd + " " + Hh + '" class="sl-timeline">' + ticks + bars + "</svg>";
  }

  /* ---------- ders akışları ---------- */
  function ageDeck(id, o) {
    var b = A.ages.find(function (a) { return a.id === id; }) || A.ages[3];
    var S = [];
    S.push(tTitle("Yaş dönemi dersi · " + b.range, b.name, b.range, b.gist,
      "Akış: gelişim basamakları, beyin, kuramların bu döneme bakışı, psikopatoloji penceresi, deneyler" + (o.q ? ", tartışma soruları." : ".")));
    var DOM = [["sosyal", "Sosyal-duygusal"], ["dil", "Dil ve iletişim"], ["bilis", "Bilişsel"], ["motor", "Motor ve fiziksel"]];
    if (b.cdc && b.cdc.length) {
      b.cdc.forEach(function (c) {
        S.push(tCols("CDC 2022 · çocukların en az %75'i", c.age + ": gelişim basamakları", DOM.filter(function (d) { return c[d[0]].length; }).map(function (d) { return { h: d[1], items: c[d[0]].map(esc) }; }),
          (A.cdcMeta ? A.cdcMeta.method + " " : "") + "Değerlendirme gerektiren durumlar: " + (b.flags || []).join("; ") + ".", (c.sosyal.length + c.dil.length + c.bilis.length + c.motor.length) > 15 ? "dense xdense" : "dense"));
      });
      if (b.msx) {
        var ex = [];
        DOM.forEach(function (d) { (b.msx[d[0]] || []).forEach(function (m) { ex.push("<b>" + esc(m[0]) + "</b> " + esc(m[1]) + ' <cite>' + esc(m[2]) + "</cite>"); }); });
        if (ex.length) S.push(tBul("Literatür", "Araştırma literatüründen ek basamaklar", ex, "Bu basamaklar CDC listesinde yer almaz; kaynakları yanlarında belirtilmiştir."));
      }
    } else if (b.ms) {
      S.push(tCols("Gelişim literatürü", "Gelişim basamakları", DOM.filter(function (d) { return b.ms[d[0]] && b.ms[d[0]].length; }).map(function (d) {
        return { h: d[1], items: b.ms[d[0]].map(function (m) { return "<b>" + esc(m[0]) + "</b> " + esc(m[1]); }) };
      }), "Bu dönem için CDC kontrol listesi yoktur.", "dense"));
    }
    S.push(tBrain("Nörobiyoloji", "Beyinde neler oluyor", U.bandAge(b), b.neuro.map(esc), String(b.clinic || "").replace(/<[^>]+>/g, "") + " " + A.brain.note));
    var lens = inBand(b);
    chunk(lens, 8).forEach(function (part, k, all) {
      S.push(tCards("Kuramlar", "Kuramlar bu dönemi nasıl okur?", part.map(function (x) {
        return { color: U.famColor(x.t.fam), glyph: U.famIcon(x.t.fam), who: shortWho(x.t), range: U.fmtRange(x.s.from, x.s.to), name: x.s.name, text: firstSentence(x.s.task) };
      }), part.map(function (x) { return shortWho(x.t) + " · " + x.s.name + ": " + (x.s.neuro && x.s.neuro !== "-" ? x.s.neuro : x.s.task); }).join("\n")));
    });
    if ((b.dx && b.dx.length) || (b.tools && b.tools.length)) {
      S.push(tCols("Klinik pencere", "Psikopatoloji ve değerlendirme", [
        { h: "Psikopatoloji penceresi (DSM-5-TR" + (b.to <= 6 ? ", DC:0-5" : "") + ")", items: (b.dx || []).map(function (d) { return "<b>" + esc(d[0]) + "</b>" + (d[1] ? " " + esc(firstSentence(d[1])) : ""); }) },
        { h: "Tarama ve değerlendirme", items: (b.tools || []).map(esc) }
      ], (b.dx || []).map(function (d) { return d[0] + ": " + d[1]; }).join("\n") + "\nTanı ölçütlerinin ayrıntısı için DSM-5-TR ve DC:0-5 el kitaplarına başvurun.", "dense"));
    }
    var exps = b.exps.map(function (id) { return expById[id]; }).filter(Boolean);
    chunk(exps, 6).forEach(function (part, k, all) {
      S.push(tTable("Kanıt", "Bu döneme ait deneyler", ["Yıl", "Çalışma", "Bulgu", "Durum"],
        part.map(function (e) { return [String(e.year), "<b>" + esc(e.title) + "</b><br><span>" + esc(e.who) + "</span>", esc(firstSentence(e.find)), U.statusPill(e.st)]; }),
        part.map(function (e) { return e.title + ": " + e.note; }).join("\n")));
    });
    if (o.q) S.push(tQuestions("Tartışma", ageQuestions(b, lens, exps)));
    var keys = []; exps.forEach(function (e) { (A.expRefs && A.expRefs[e.id] || []).forEach(function (k) { if (keys.indexOf(k) < 0) keys.push(k); }); });
    var r = tRefs("Kaynaklar", keys, "Tam liste Kaynakça bölümündedir."); if (r) S.push(r);
    return { title: b.range + " · " + b.name, slides: S };
  }
  function ageQuestions(b, lens, exps) {
    var q = [];
    var a = lens.find(function (x) { return x.t.fam === "psa" || x.t.fam === "pss"; });
    var c = lens.find(function (x) { return x.t.fam === "bag" || x.t.fam === "biy" || x.t.fam === "bil"; });
    if (a && c) q.push(shortWho(a.t) + " (" + a.s.name + ") ile " + shortWho(c.t) + " (" + c.s.name + ") bu dönemi nasıl farklı açıklıyor? Hangisinin görgül dayanağı daha güçlü?");
    var chl = exps.find(function (e) { return e.ch.length; });
    if (chl) q.push("“" + chl.title + "” çalışması hangi kuramı sorguluyor ve bu bulgu klinik yorumunuzu nasıl etkiler?");
    if (b.dx && b.dx.length) q.push(b.dx[0][0] + " değerlendirmesinde bu dönemin normatif gelişim basamakları ayırıcı tanıya nasıl katkı sağlar?");
    var age = U.bandAge(b);
    var fast = A.brain.regions.map(function (r) { return { r: r, v: U.maturitySlope(r, age) }; }).filter(function (o) { return o.v > 0; }).sort(function (x, y) { return y.v - x.v; }).slice(0, 3);
    if (fast.length) q.push("Bu dönemde en hızlı olgunlaşan bölgeler (" + fast.map(function (o) { return o.r.short; }).join(", ") + ") hangi kuramların öngörüleriyle örtüşüyor?");
    q.push("Bu yaştaki bir çocukla görüşmede dilinizi ve değerlendirmenizi hangi gelişimsel özelliklere göre ayarlarsınız?");
    return q;
  }
  function theoryDeck(id, o) {
    var t = thById[id] || A.theories[0], f = U.famById[t.fam], S = [];
    S.push(tTitle(f.name + " · " + t.years, t.name, t.who, t.core, "Kanıt düzeyi: " + A.evidenceScale[t.ev] + ". " + t.evNote));
    S.push(tCols("Çerçeve", "Gelişimin motoru, yöntem ve kanıt", [
      { h: "Gelişimin motoru", items: [esc(t.engine)] }, { h: "Yöntem", items: [esc(t.method)] },
      { h: "Kanıt düzeyi", items: [U.meter(t.ev) + " <b>" + esc(A.evidenceScale[t.ev]) + "</b>", esc(t.evNote)] }
    ], ""));
    S.push(slide("tl", "Yaş ekseninde evreler", head("Evreler", "Yaş ekseninde evreler") + '<div class="sl-tlw">' + timelineSvg(t) + "</div>", t.stages.map(function (s) { return s.name + " (" + U.fmtRange(s.from, s.to) + ")"; }).join(" · ")));
    var labels = t.labels || ["Olumlu çözüm", "Risk"];
    t.stages.forEach(function (s) {
      var parts = '<p class="sl-lead2">' + esc(s.task) + "</p>" + (s.ms && s.ms.length ? li(s.ms.map(esc)) : "") +
        ((s.good && s.good !== "-") || (s.risk && s.risk !== "-") ? '<div class="sl-split"><div><b>' + esc(labels[0]) + "</b>" + esc(s.good || "-") + "</div><div><b>" + esc(labels[1]) + "</b>" + esc(s.risk || "-") + "</div></div>" : "");
      S.push(slide("stage", s.name, '<div class="sl-kicker">' + esc(U.fmtRange(s.from, s.to)) + (s.sub ? " · " + esc(s.sub) : "") + '</div><h2 class="sl-h" style="color:' + f.color + '">' + esc(s.name) + "</h2>" + parts,
        s.neuro && s.neuro !== "-" ? "Nörobiyoloji: " + s.neuro : ""));
    });
    S.push(tCols("Değerlendirme", "Biyolojik bakış ve eleştiriler", [{ h: "Biyolojik bakış açısı", items: t.bio.map(function (x) { return esc(firstTwo(x)); }) }, { h: "Eleştiriler ve sınırlılıklar", items: t.crit.map(function (x) { return esc(firstTwo(x)); }) }],
      "Biyolojik bakış: " + t.bio.join(" ") + "\nEleştiriler: " + t.crit.join(" "), "dense"));
    if (t.clinic) S.push(tProse("Klinik", "Klinik uygulama", t.clinic, ""));
    var rel = A.relatedExps(t).map(function (id) { return expById[id]; });
    chunk(rel, 6).forEach(function (part, k, all) {
      S.push(tTable("Kanıt", "Kanıtlar ve deneyler", ["Yıl", "Çalışma", "İlişki", "Durum"],
        part.map(function (e) {
          var r = e.sup.indexOf(t.id) > -1 ? "destekler" : e.ch.indexOf(t.id) > -1 ? "sorgular" : "ilgili";
          return [String(e.year), "<b>" + esc(e.title) + "</b><br><span>" + esc(firstSentence(e.find)) + "</span>", r, U.statusPill(e.st)];
        }), part.map(function (e) { return e.title + ": " + e.note; }).join("\n")));
    });
    if (o.q) {
      var sup = rel.find(function (e) { return e.sup.indexOf(t.id) > -1; }), ch = rel.find(function (e) { return e.ch.indexOf(t.id) > -1; });
      var st = t.stages.find(function (s) { return s.neuro && s.neuro !== "-"; });
      var qs = [];
      if (sup || ch) qs.push("Kuramın en güçlü görgül dayanağı" + (sup ? " (“" + sup.title + "”)" : "") + " ve en ciddi itiraz" + (ch ? " (“" + ch.title + "”)" : "") + " nedir?");
      qs.push("Kuramın klinik karşılığı kanıta dayalı mı? Hangi tedaviyi ya da değerlendirme yaklaşımını etkiledi?");
      if (st) qs.push("“" + st.name + "” evresinin nörobiyolojik karşılığı ile kuramın açıklaması arasında nasıl bir ilişki kurarsınız?");
      qs.push("Kuramın varsayımları Türkiye'deki aile ve kültür bağlamında nasıl sınanmalı ya da uyarlanmalı?");
      S.push(tQuestions("Tartışma", qs));
    }
    if (t.primary && t.primary.length) S.push(tRefList("Kaynaklar", "Temel kaynaklar", t.primary.map(function (p) { return "<li>" + esc(p) + "</li>"; }), ""));
    return { title: t.who + " · " + t.name, slides: S };
  }
  function compareDeck(ids, o) {
    var ts = ids.map(function (id) { return thById[id]; }).filter(Boolean);
    var preset = (A.comparisons || []).find(function (c) { return c.ids.length === ids.length && c.ids.every(function (x) { return ids.indexOf(x) > -1; }); });
    var S = [];
    S.push(tTitle("Karşılaştırma dersi", preset ? preset.title : ts.map(shortWho).join(" ↔ "), ts.map(function (t) { return shortWho(t) + ": " + t.name; }).join(" · "), preset ? preset.note : "", ""));
    S.push(tCols("Çerçeve", "Ana fikir ve gelişimin motoru", ts.map(function (t) { return { icon: U.famIcon(t.fam), h: shortWho(t) + ": " + t.name, items: [esc(firstSentence(t.core)), "<b>Motor:</b> " + esc(t.engine)] }; }), ts.map(function (t) { return shortWho(t) + ": " + t.core; }).join("\n"), "dense"));
    var rows = [];
    A.ages.forEach(function (b) {
      var cells = ts.map(function (t) {
        var st = t.stages.filter(function (s) { return U.overlap(s, b) > 1e-6; });
        return st.length ? st.map(function (s) { return "<b>" + esc(s.name) + "</b>"; }).join("<br>") : "—";
      });
      if (cells.some(function (c) { return c !== "—"; })) rows.push(["<b>" + esc(b.range) + "</b><br><span>" + esc(b.name) + "</span>"].concat(cells));
    });
    chunk(rows, 5).forEach(function (part, k, all) {
      S.push(tTable("Yaş satırları", "Evreler yan yana", ["Yaş"].concat(ts.map(shortWho)), part, ""));
    });
    S.push(tCols("Değerlendirme", "Kanıt ve klinik karşılık", ts.map(function (t) {
      return { icon: U.famIcon(t.fam), h: shortWho(t), items: [U.meter(t.ev) + " " + esc(A.evidenceScale[t.ev]), esc(firstSentence(t.crit[0] || "")), "<b>Klinik:</b> " + esc(firstSentence(t.clinic || "-"))] };
    }), ts.map(function (t) { return shortWho(t) + " · klinik: " + (t.clinic || "-"); }).join("\n"), "dense"));
    if (o.q) S.push(tQuestions("Tartışma", [
      "İki kuramın aynı yaş dönemine ilişkin öngörülerini birbirinden ayırt edecek bir çalışma nasıl tasarlanır?",
      "Klinikte hangi durumda hangi kuram daha yararlı bir formülasyon sunar? Bir vaka üzerinden tartışın.",
      preset ? "Karşılaştırma notundaki temel ayrımı destekleyen ya da zayıflatan hangi bulguları biliyorsunuz?" : "Kuramların ortak noktası ve temel ayrımı nedir?"
    ]));
    return { title: "Karşılaştırma · " + ts.map(shortWho).join(" ↔ "), slides: S };
  }
  function tourDeck(o) {
    var S = [tTitle("Yaşam boyu turu", "Ruhsal Gelişim Atlası", "Doğum öncesinden yaşlılığa " + U.NB + " durak", "Her dönem için temel basamaklar, beyin ve kuramların başlıca evreleri.", "")];
    A.ages.forEach(function (b) {
      var keyMs = [];
      if (b.cdc && b.cdc.length) { var c = b.cdc[b.cdc.length - 1]; ["sosyal", "dil", "bilis", "motor"].forEach(function (d) { if (c[d][0]) keyMs.push("<b>" + esc(c.age) + "</b> " + esc(c[d][0])); }); }
      else if (b.ms) ["sosyal", "dil", "bilis", "motor"].forEach(function (d) { var m = b.ms[d] && b.ms[d][0]; if (m) keyMs.push("<b>" + esc(m[0]) + "</b> " + esc(m[1])); });
      var lens = inBand(b).filter(function (x) { return !x.t.rare; }).slice(0, 4);
      S.push(slide("tour", b.name, '<div class="sl-kicker">' + esc(b.range) + '</div><h2 class="sl-h">' + esc(b.name) + '</h2><div class="sl-tour"><div><p class="sl-lead2">' + esc(b.gist) + "</p>" + li(keyMs) + '</div><div class="sl-fig">' + (A.views.beyin ? A.views.beyin.mini(U.bandAge(b)) : "") + "</div>" +
        '<div class="sl-chips">' + lens.map(function (x) { return '<span style="--c:' + U.famColor(x.t.fam) + '">' + U.famIcon(x.t.fam) + esc(shortWho(x.t)) + ": " + esc(x.s.name) + "</span>"; }).join("") + "</div></div>", b.neuro.join("\n")));
    });
    return { title: "Yaşam boyu turu", slides: S };
  }
  function build(spec) {
    var o = { q: spec.q !== false };
    if (spec.type === "theory") return theoryDeck(spec.id, o);
    if (spec.type === "compare") return compareDeck(spec.ids, o);
    if (spec.type === "tour") return tourDeck(o);
    return ageDeck(spec.id, o);
  }

  /* ---------- otomatik sığdırma ----------
     1) Slayt gövdesi taşıyorsa yazı ölçeği (--fit) ikili aramayla en büyük sığan değere indirilir (alt sınır MIN).
     2) Kendi kutusunda taşan kartlar (--cfit) ayrıca küçültülür (alt sınır CMIN).
     3) Hâlâ sığmıyorsa ve içerik bölünebiliyorsa slayt ikiye bölünür ve aynı düzen yeniden uygulanır.
     4) Bölünemeyen içerikte metin satır sayısına göre kısaltılır; tamamı konuşmacı notlarına eklenir.
        Son çare olarak gövde kaydırılabilir yapılır; hiçbir metin görünmez biçimde kaybolmaz. */
  var MIN = 0.6, CMIN = 0.72;
  var slideEl = deck.querySelector(".slide");
  function bodyFits(b) { return b.scrollHeight <= b.clientHeight + 1 && b.scrollWidth <= b.clientWidth + 1; }
  function boxFits(x) { return x.scrollHeight <= x.clientHeight + 1 && x.scrollWidth <= x.clientWidth + 1; }
  function search(set, test, lo) {
    set(1); if (test()) return 1;
    set(lo); if (!test()) return null;
    var hi = 1;
    for (var k = 0; k < 7; k++) { var m = (lo + hi) / 2; set(m); if (test()) lo = m; else hi = m; }
    set(lo); return lo;
  }
  function fit(el) {
    var b = el.querySelector(".sl-body");
    var f = search(function (v) { el.style.setProperty("--fit", v.toFixed(3)); }, function () { return bodyFits(b); }, MIN);
    if (f === null) return { ok: false, body: true, boxes: [] };
    var failed = [];
    [].forEach.call(el.querySelectorAll(".fitbox"), function (x) {
      if (boxFits(x)) return;
      var c = search(function (v) { x.style.setProperty("--cfit", v.toFixed(3)); }, function () { return boxFits(x); }, CMIN);
      if (c === null) failed.push(x);
    });
    return { ok: !failed.length, body: false, boxes: failed, fit: f };
  }
  function clamp(el, r) {
    var cut = [];
    r.boxes.forEach(function (x) {
      var p = x.querySelector("p"); if (!p) return;
      var lh = parseFloat(getComputedStyle(p).lineHeight) || 16;
      var avail = x.clientHeight - (p.offsetTop - x.offsetTop) - 4;
      var lines = Math.max(1, Math.floor(avail / lh));
      p.classList.add("clamped"); p.style.webkitLineClamp = String(lines); p.style.lineClamp = String(lines);
      cut.push(p.textContent);
    });
    if (r.body) { el.style.setProperty("--fit", String(MIN)); el.querySelector(".sl-body").classList.add("scroll"); }
    return cut;
  }
  function partLabel(s) {
    var same = D.slides.filter(function (x) { return x.group === s.group; });
    return same.length > 1 ? " (" + (same.indexOf(s) + 1) + "/" + same.length + ")" : "";
  }
  function paint(s) {
    slideEl.className = "slide k-" + s.kind;
    slideEl.style.removeProperty("--fit");
    slideEl.innerHTML = '<div class="sl-body">' + s.html.replace("%%PART%%", partLabel(s)) + '</div><div class="sl-foot"><span>' + esc(D.title) + "</span><span>" + U.roman(Math.min(D.i + 1, 39)) + "</span></div>";
  }
  function layout() {
    var s = D.slides[D.i], guard = 0;
    paint(s);
    var r = fit(slideEl);
    while (!r.ok && s.split && guard++ < 6) {
      var parts = s.split();
      D.slides.splice(D.i, 1, parts[0], parts[1]);
      s = D.slides[D.i]; paint(s); r = fit(slideEl);
    }
    /* bölme sonrası başlık numaraları değişir: yeniden çiz ve sığdır */
    if (guard) { paint(s); r = fit(slideEl); }
    s._cut = r.ok ? [] : clamp(slideEl, r);
    return s;
  }

  /* Açılışta bütün slaytlar bir kez yerleştirilir: bölmeler önceden yapılır, numaralar ve slayt sayısı baştan kesinleşir */
  function prepass() {
    deck.querySelector(".deck-notes").hidden = !D.notes;
    for (var k = 0; k < D.slides.length; k++) { D.i = k; layout(); }
    D.i = 0;
  }

  /* ---------- sunucu ---------- */
  function show() {
    var n = deck.querySelector(".deck-notes");
    n.hidden = !D.notes; /* not paneli sahneyi küçültür: ölçümden önce son hâline getirilir */
    var s = layout();
    deck.querySelector(".deck-count").textContent = (D.i + 1) + " / " + D.slides.length;
    deck.querySelector(".deck-prog i").style.width = ((D.i + 1) / D.slides.length * 100) + "%";
    var notes = (s.notes || "") + (s._cut && s._cut.length ? "\n\nSlaytta kısaltılan metin:\n" + s._cut.join("\n") : "");
    n.innerHTML = notes ? esc(notes).replace(/\n/g, "<br>") : '<span class="muted">Bu slayt için not yok.</span>';
    deck.querySelector('[data-d="notes"]').setAttribute("aria-pressed", String(D.notes));
  }
  /* not paneli açılıp kapanınca ya da ekran boyutu değişince slayt yeniden sığdırılır */
  function setNotes(v) { D.notes = v; deck.classList.toggle("with-notes", v); show(); }
  var rz = null;
  function refit() { if (deck.hidden) return; clearTimeout(rz); rz = setTimeout(show, 120); }
  window.addEventListener("resize", refit);
  document.addEventListener("fullscreenchange", refit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refit);
  function open(spec) {
    var built = build(spec);
    D.slides = built.slides; D.title = built.title; D.i = 0; D.notes = !!spec.notes;
    deck.hidden = false; document.documentElement.classList.add("deck-open");
    deck.classList.toggle("with-notes", D.notes);
    deck.querySelector(".deck-title").textContent = built.title;
    prepass();
    show();
    deck.focus();
  }
  function close() {
    deck.hidden = true; document.documentElement.classList.remove("deck-open");
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(function () {});
  }
  function go(d) { D.i = Math.max(0, Math.min(D.slides.length - 1, D.i + d)); show(); }
  function fullscreen() {
    if (document.fullscreenElement) { document.exitFullscreen().catch(function () {}); return; }
    if (deck.requestFullscreen) deck.requestFullscreen().catch(function () { /* desteklenmiyor */ });
  }
  deck.addEventListener("click", function (e) {
    var b = e.target.closest("[data-d]");
    if (!b) return;
    var d = b.dataset.d;
    if (d === "next") go(1); else if (d === "prev") go(-1); else if (d === "close") close();
    else if (d === "notes") setNotes(!D.notes); else if (d === "fs") fullscreen();
  });
  document.addEventListener("keydown", function (e) {
    if (deck.hidden) return;
    var k = e.key;
    if (k === "ArrowRight" || k === "PageDown" || k === " ") { e.preventDefault(); go(1); }
    else if (k === "ArrowLeft" || k === "PageUp") { e.preventDefault(); go(-1); }
    else if (k === "Home") { D.i = 0; show(); } else if (k === "End") { D.i = D.slides.length - 1; show(); }
    else if (k === "Escape") close();
    else if (k === "n" || k === "N") setNotes(!D.notes);
    else if (k === "f" || k === "F") fullscreen();
  });
  var px = null;
  deck.addEventListener("pointerdown", function (e) { if (e.target.closest(".deck-stage")) px = e.clientX; });
  deck.addEventListener("pointerup", function (e) { if (px === null) return; var dx = e.clientX - px; px = null; if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1); });

  /* ---------- ders kurucu (#ders) ---------- */
  var view = document.getElementById("view-ders");
  var L = { type: "age", age: "a4", theory: "bowlby", compare: "mahler,stern", q: true, notes: false };
  var TYPES = [["age", "Yaş dönemi dersi"], ["theory", "Kuram dersi"], ["compare", "Karşılaştırma dersi"], ["tour", "Yaşam boyu turu"]];
  function spec() {
    if (L.type === "theory") return { type: "theory", id: L.theory, q: L.q, notes: L.notes };
    if (L.type === "compare") return { type: "compare", ids: L.compare.split(","), q: L.q, notes: L.notes };
    if (L.type === "tour") return { type: "tour", q: L.q, notes: L.notes };
    return { type: "age", id: L.age, q: L.q, notes: L.notes };
  }
  function picker() {
    if (L.type === "age") return '<label class="cmp-sel"><span>Yaş dönemi</span><select id="lsPick">' + A.ages.map(function (a) { return '<option value="' + a.id + '"' + (a.id === L.age ? " selected" : "") + ">" + esc(a.range + " · " + a.name) + "</option>"; }).join("") + "</select></label>";
    if (L.type === "theory") return '<label class="cmp-sel"><span>Kuram</span><select id="lsPick">' + A.families.map(function (f) {
      return '<optgroup label="' + esc(f.name) + '">' + A.theories.filter(function (t) { return t.fam === f.id; }).map(function (t) { return '<option value="' + t.id + '"' + (t.id === L.theory ? " selected" : "") + ">" + esc(shortWho(t) + ": " + t.name) + "</option>"; }).join("") + "</optgroup>";
    }).join("") + "</select></label>";
    if (L.type === "compare") return '<label class="cmp-sel"><span>Karşılaştırma</span><select id="lsPick">' + (A.comparisons || []).map(function (c) { var v = c.ids.join(","); return '<option value="' + v + '"' + (v === L.compare ? " selected" : "") + ">" + esc(c.title + " (" + c.ids.map(function (id) { return shortWho(thById[id]); }).join(", ") + ")") + "</option>"; }).join("") + "</select></label>";
    return '<p class="hint">Bütün yaş dönemlerini birer slaytta özetleyen kısa bir tur.</p>';
  }
  function render() {
    var b = build(spec());
    U.$("lessonWrap").innerHTML =
      '<div class="seg ls-types" role="group" aria-label="Ders türü">' + TYPES.map(function (t) { return '<button type="button" data-lt="' + t[0] + '" aria-pressed="' + (L.type === t[0]) + '">' + esc(t[1]) + "</button>"; }).join("") + "</div>" +
      '<div class="ls-row">' + picker() + '<label class="chk"><input type="checkbox" id="lsQ"' + (L.q ? " checked" : "") + '> Tartışma soruları</label><label class="chk"><input type="checkbox" id="lsN"' + (L.notes ? " checked" : "") + '> Konuşmacı notlarını açık başlat</label><button type="button" class="btn" id="lsStart">▶ Sunumu başlat</button></div>' +
      '<div class="ls-grid"><section class="panel"><div class="panel-title">Ders akışı · ' + b.slides.length + ' slayt</div><ol class="ls-outline">' + b.slides.map(function (s, i) { return '<li><button type="button" class="linkish" data-goto="' + i + '">' + esc(s.label) + "</button></li>"; }).join("") + "</ol></section>" +
      '<section class="panel"><div class="panel-title">Kullanım</div><ul class="ticks"><li><b>→</b>, <b>boşluk</b> ya da sağa kaydırma: sonraki slayt</li><li><b>←</b> ya da sola kaydırma: önceki slayt</li><li><b>N</b>: konuşmacı notları (ek ayrıntılar, kaynaklar)</li><li><b>F</b>: tam ekran (tarayıcı izin verirse)</li><li><b>Esc</b>: sunumdan çık</li></ul>' +
      '<p class="hint">Slaytlar sayfadaki verilerden üretilir; veri dosyalarındaki her güncelleme derslere de yansır. Yaş, kuram ve karşılaştırma ekranlarındaki "Sun" düğmeleriyle de doğrudan sunum açılabilir.</p></section></div>';
  }
  view.addEventListener("click", function (e) {
    var t;
    if ((t = e.target.closest("[data-lt]"))) { L.type = t.dataset.lt; render(); }
    else if ((t = e.target.closest("#lsStart"))) open(spec());
    else if ((t = e.target.closest("[data-goto]"))) { var g = +t.dataset.goto; open(spec()); D.i = Math.min(g, D.slides.length - 1); show(); }
  });
  view.addEventListener("change", function (e) {
    var id = e.target.id;
    if (id === "lsPick") { if (L.type === "age") L.age = e.target.value; else if (L.type === "theory") L.theory = e.target.value; else L.compare = e.target.value; render(); }
    else if (id === "lsQ") { L.q = e.target.checked; render(); }
    else if (id === "lsN") L.notes = e.target.checked;
  });

  A.views.ders = { render: render };
  /* Özel ders akışları için (ve sığdırma düzeninin sınanması için) şablonlar ve doğrudan açma */
  function openSlides(title, slides) {
    D.slides = slides.slice(); D.title = title; D.i = 0; D.notes = false;
    deck.hidden = false; document.documentElement.classList.add("deck-open"); deck.classList.remove("with-notes");
    deck.querySelector(".deck-title").textContent = title;
    prepass(); show(); deck.focus();
  }
  A.deck = { open: open, close: close, go: go, state: D, openSlides: openSlides,
    templates: { cards: tCards, table: tTable, bullets: tBul, prose: tProse, cols: tCols } };
})();
