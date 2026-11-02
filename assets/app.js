/* Ruhsal Gelişim Atlası: görünümler (yaş, kuram, çizelge, deneyler). Bağımlılık yok. */
(function () {
  "use strict";
  var A = window.ATLAS;
  A.ages.sort(function (a, b) { return a.from - b.from; });

  var famById = {}, thById = {}, expById = {}, famOrder = {};
  A.families.forEach(function (f, i) { famById[f.id] = f; famOrder[f.id] = i; });
  A.theories.forEach(function (t, i) { t._i = i; thById[t.id] = t; });
  A.experiments.forEach(function (e) { expById[e.id] = e; });
  A.theories.sort(function (a, b) { return famOrder[a.fam] - famOrder[b.fam] || a._i - b._i; });

  var BOUNDS = A.ages.map(function (a) { return a.from; }).concat([A.ages[A.ages.length - 1].to]);
  var NB = A.ages.length;

  var state = { view: "yas", age: "a2", theory: "erikson", fams: {}, expStatus: 0, expQ: "" };
  A.families.forEach(function (f) { state.fams[f.id] = true; });
  try {
    var saved = JSON.parse(localStorage.getItem("ruhsal-atlas") || "{}");
    if (saved.age && A.ages.some(function (a) { return a.id === saved.age; })) state.age = saved.age;
    if (saved.theory && thById[saved.theory]) state.theory = saved.theory;
    if (saved.fams) Object.keys(state.fams).forEach(function (k) { if (k in saved.fams) state.fams[k] = !!saved.fams[k]; });
  } catch (e) { /* depolama yoksa varsayılanlar */ }
  function save() {
    try { localStorage.setItem("ruhsal-atlas", JSON.stringify({ age: state.age, theory: state.theory, fams: state.fams })); } catch (e) { /* yok say */ }
  }

  /* ---------- yardımcılar ---------- */
  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function num(y) { var r = Math.round(y * 10) / 10; return String(r).replace(".", ","); }
  function months(y) { return Math.round(y * 12); }
  function fmtRange(a, b) {
    if (b >= 90) return (a <= 0 ? "Doğum" : a < 2 ? months(a) + " ay" : num(a) + " yaş") + " ve sonrası";
    if (a < 0) return "Gebelik";
    if (b <= 2) return months(a) + "–" + months(b) + " ay";
    if (a < 2) return (a === 0 ? "0" : months(a) + " ay") + " – " + num(b) + " yaş";
    return num(a) + "–" + num(b) + " yaş";
  }
  function xPos(y) {
    if (y <= BOUNDS[0]) return 0;
    if (y >= BOUNDS[NB]) return 1;
    for (var i = 0; i < NB; i++) {
      if (y < BOUNDS[i + 1]) return (i + (y - BOUNDS[i]) / (BOUNDS[i + 1] - BOUNDS[i])) / NB;
    }
    return 1;
  }
  function overlap(s, band) { return Math.min(s.to, band.to) - Math.max(s.from, band.from); }
  function famColor(id) { return famById[id] ? famById[id].color : "var(--muted)"; }
  function visibleTheories() { return A.theories.filter(function (t) { return state.fams[t.fam]; }); }
  function bandOf(y) {
    for (var i = 0; i < NB; i++) if (y < A.ages[i].to) return A.ages[i];
    return A.ages[NB - 1];
  }
  function pack(items) {
    var rows = [];
    items.forEach(function (it) {
      var r = 0;
      while (rows[r] && rows[r].some(function (o) { return it.from < o.to - 1e-6 && it.to > o.from + 1e-6; })) r++;
      (rows[r] = rows[r] || []).push(it);
      it._row = r;
    });
    return Math.max(rows.length, 1);
  }
  function statusPill(st) { return '<span class="status s' + st + '">' + esc(A.status[st].label) + "</span>"; }

  var ICONS = {
    motor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="13" cy="4" r="2"/><path d="M11 21l2-6-3-3 2-5 4 3h3M8 12l2-5M13 15l3 6"/></svg>',
    dil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12h5"/></svg>',
    sosyal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="8" cy="8" r="3"/><circle cx="16.5" cy="9" r="2.5"/><path d="M3 20c0-3 2.5-5.5 5-5.5s5 2.5 5 5.5M14 20c0-2.4 1.2-4.5 3-4.5s3.5 2 3.5 4.5"/></svg>',
    bilis: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/></svg>'
  };
  var DOMAINS = [["motor", "Motor"], ["dil", "Dil ve iletişim"], ["sosyal", "Sosyal-duygusal"], ["bilis", "Bilişsel"]];

  /* ---------- üst bilgi ve aile filtresi ---------- */
  function renderStats() {
    var rare = A.theories.filter(function (t) { return t.rare; }).length;
    $("stats").innerHTML = "<span><b>" + A.theories.length + "</b> kuram</span><span><b>" + rare + "</b> tanesi ders kitaplarında az yer alır</span><span><b>" + NB + "</b> yaş dönemi</span><span><b>" + A.experiments.length + "</b> deney ve çalışma</span>";
  }
  function renderFamilies() {
    var all = A.families.every(function (f) { return state.fams[f.id]; });
    var html = '<button type="button" class="fam-chip" id="fam-all" aria-pressed="' + all + '" style="--c:var(--ink)"><span class="dot"></span>Tümü</button>';
    A.families.forEach(function (f) {
      html += '<button type="button" class="fam-chip" data-fam="' + f.id + '" aria-pressed="' + !!state.fams[f.id] + '" style="--c:' + f.color + '"><span class="dot"></span>' + esc(f.short) + "</button>";
    });
    $("familyFilter").innerHTML = html;
  }
  $("familyFilter").addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    if (b.id === "fam-all") A.families.forEach(function (f) { state.fams[f.id] = true; });
    else state.fams[b.dataset.fam] = !state.fams[b.dataset.fam];
    save(); renderFamilies(); renderCurrent();
  });

  /* ---------- YAŞ GÖRÜNÜMÜ ---------- */
  function theoriesInBand(band) {
    var out = [];
    visibleTheories().forEach(function (t) {
      var st = t.stages.filter(function (s) { return overlap(s, band) > 1e-6; });
      if (st.length) out.push({ t: t, stages: st });
    });
    return out;
  }
  function renderAgeStrip() {
    var counts = A.ages.map(function (b) { return theoriesInBand(b).length; });
    var max = Math.max.apply(null, counts.concat([1]));
    $("ageStrip").innerHTML = A.ages.map(function (b, i) {
      return '<button type="button" class="agebtn" role="option" data-age="' + b.id + '" aria-selected="' + (b.id === state.age) + '" title="Bu dönemi ele alan kuram sayısı: ' + counts[i] + '">' +
        '<span class="a">' + esc(b.range) + '</span><span class="n">' + esc(b.name) + '</span><span class="bar"><i style="width:' + Math.round(counts[i] / max * 100) + '%"></i></span></button>';
    }).join("");
    var sel = $("ageStrip").querySelector('[aria-selected="true"]');
    if (sel && sel.scrollIntoView) sel.scrollIntoView({ block: "nearest", inline: "center" });
  }
  function expMini(ids, ctxTheory) {
    var list = ids.map(function (id) { return expById[id]; }).filter(Boolean);
    if (!list.length) return '<p class="empty">Bu kuramı doğrudan sınayan deneysel çalışma yok denecek kadar azdır.</p>';
    return '<div class="exp-mini">' + list.map(function (e) {
      var rel = "";
      if (ctxTheory) {
        if (e.sup.indexOf(ctxTheory) > -1) rel = "<span>destekler</span>";
        else if (e.ch.indexOf(ctxTheory) > -1) rel = "<span>sorgular</span>";
        else rel = "<span>ilgili</span>";
      }
      return '<button type="button" data-exp="' + e.id + '"><span class="t">' + esc(e.title) + '</span><span class="m"><span>' + e.year + "</span>" + statusPill(e.st) + rel + "</span></button>";
    }).join("") + "</div>";
  }
  function renderAgeDetail() {
    var i = A.ages.findIndex(function (a) { return a.id === state.age; });
    var b = A.ages[i];
    var ms = DOMAINS.filter(function (d) { return b.ms[d[0]] && b.ms[d[0]].length; }).map(function (d) {
      return '<div class="ms"><h4>' + ICONS[d[0]] + esc(d[1]) + '</h4><ul class="clean">' + b.ms[d[0]].map(function (m) {
        return '<li><span class="when">' + esc(m[0]) + "</span><span>" + esc(m[1]) + "</span></li>";
      }).join("") + "</ul></div>";
    }).join("");
    var flags = b.flags && b.flags.length ? '<div class="flags"><div class="panel-title">Kırmızı bayraklar · değerlendirme gerektirir</div><ul class="ticks">' + b.flags.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul></div>" : "";
    var lenses = theoriesInBand(b).map(function (x) {
      var primary = x.stages.slice().sort(function (p, q) { return overlap(q, b) - overlap(p, b); })[0];
      var others = x.stages.filter(function (s) { return s !== primary; });
      var idx = x.t.stages.indexOf(primary);
      return '<button type="button" class="lens" data-theory="' + x.t.id + '" data-stage="' + idx + '" style="--c:' + famColor(x.t.fam) + '">' +
        '<span class="who"><span class="dot"></span>' + esc(x.t.who) + '<span class="yrs">' + esc(fmtRange(primary.from, primary.to)) + "</span></span>" +
        "<h4>" + esc(primary.name) + "</h4>" +
        '<span class="task">' + esc(primary.task) + "</span>" +
        (others.length ? '<span class="who">Bu dönemde ayrıca: ' + others.map(function (s) { return esc(s.name); }).join(", ") + "</span>" : "") +
        (primary.neuro && primary.neuro !== "-" ? '<span class="neuro-link"><b>Beyin:</b> ' + esc(primary.neuro) + "</span>" : "") +
        "</button>";
    }).join("");
    $("ageDetail").innerHTML =
      '<div class="age-head"><div><div class="range">' + esc(b.range.toLocaleUpperCase("tr")) + "</div><h2>" + esc(b.name) + "</h2></div>" +
      '<div class="pager"><button type="button" id="agePrev"' + (i === 0 ? " disabled" : "") + '>← Önceki</button><button type="button" id="ageNext"' + (i === NB - 1 ? " disabled" : "") + ">Sonraki →</button></div>" +
      '<p class="gist">' + esc(b.gist) + "</p></div>" +
      '<div class="age-grid"><section class="panel"><div class="panel-title">Gelişim basamakları</div><div class="milestones">' + ms + "</div>" + flags + "</section>" +
      '<aside class="panel neuro"><div class="panel-title">Beyinde neler oluyor</div><ul class="clean">' + b.neuro.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + "</ul>" +
      (b.clinic ? '<div class="clin">' + b.clinic + "</div>" : "") + "</aside></div>" +
      '<div class="section-h"><h3>Kuramlar bu dönemi nasıl okur?</h3><span>' + theoriesInBand(b).length + " kuram · ayrıntı için karta dokunun</span></div>" +
      (lenses ? '<div class="lens-grid">' + lenses + "</div>" : '<p class="empty">Seçili kuram ailelerinde bu dönemi ele alan kuram yok. Üstteki filtreden aile ekleyin.</p>') +
      '<div class="section-h"><h3>Bu döneme ait deneyler</h3><span>' + b.exps.length + " çalışma</span></div>" + expMini(b.exps);
  }
  function setAge(id) { state.age = id; save(); renderAgeStrip(); renderAgeDetail(); }
  $("ageStrip").addEventListener("click", function (e) { var b = e.target.closest("[data-age]"); if (b) setAge(b.dataset.age); });
  $("ageStrip").addEventListener("keydown", function (e) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    var i = A.ages.findIndex(function (a) { return a.id === state.age; }) + (e.key === "ArrowRight" ? 1 : -1);
    if (i < 0 || i >= NB) return;
    e.preventDefault(); setAge(A.ages[i].id);
    var btn = $("ageStrip").querySelector('[data-age="' + state.age + '"]'); if (btn) btn.focus();
  });
  $("ageDetail").addEventListener("click", function (e) {
    var t;
    if ((t = e.target.closest("#agePrev, #ageNext"))) {
      var i = A.ages.findIndex(function (a) { return a.id === state.age; }) + (t.id === "ageNext" ? 1 : -1);
      if (i >= 0 && i < NB) setAge(A.ages[i].id);
    } else if ((t = e.target.closest(".lens"))) openTheory(t.dataset.theory, +t.dataset.stage);
    else if ((t = e.target.closest("[data-exp]"))) openExp(t.dataset.exp);
  });

  /* ---------- KURAM GÖRÜNÜMÜ ---------- */
  function renderTheoryIndex() {
    var vis = visibleTheories();
    if (vis.length && !state.fams[thById[state.theory].fam]) state.theory = vis[0].id;
    var html = "";
    A.families.forEach(function (f) {
      var ts = vis.filter(function (t) { return t.fam === f.id; });
      if (!ts.length) return;
      html += '<div class="ti-group" style="--c:' + f.color + '"><h5><span class="dot"></span>' + esc(f.name) + "</h5>" + ts.map(function (t) {
        return '<button type="button" class="ti-btn" data-theory="' + t.id + '" aria-current="' + (t.id === state.theory) + '" style="--c:' + f.color + '"><span class="nm">' + esc(t.name) + '</span><span class="sb">' + esc(t.who) + (t.rare ? " · az bilinen" : "") + "</span></button>";
      }).join("") + "</div>";
    });
    $("theoryIndex").innerHTML = html || '<p class="empty">Filtrede seçili aile yok.</p>';
  }
  function miniAxis(t) {
    var items = t.stages.map(function (s, i) { return { from: s.from, to: s.to, i: i, s: s }; });
    var rows = pack(items);
    var h = 100 / rows;
    var segs = items.map(function (it) {
      var l = xPos(it.from) * 100, w = Math.max((xPos(it.to) - xPos(it.from)) * 100, 0.8);
      return '<button type="button" class="seg" data-stage="' + it.i + '" aria-label="' + esc(it.s.name + ", " + fmtRange(it.from, it.to)) + '" data-tip="' + esc(it.s.name) + '" data-tip2="' + esc(fmtRange(it.from, it.to)) + '" style="left:' + l + "%;width:" + w + "%;top:calc(" + (it._row * h) + "% + 3px);height:calc(" + h + '% - 6px);bottom:auto"></button>';
    }).join("");
    var ticks = [0, 1, 3, 6, 12, 18, 40, 65].map(function (y) {
      return '<span style="left:' + xPos(y) * 100 + '%">' + (y === 0 ? "Doğum" : y === 1 ? "1" : y) + "</span>";
    }).join("");
    return '<div class="mini-axis" style="height:' + (16 + rows * 18) + 'px">' + segs + '<div class="ticks">' + ticks + "</div></div>";
  }
  function renderTheoryDetail() {
    var t = thById[state.theory];
    var f = famById[t.fam];
    var labels = t.labels || ["Olumlu çözüm", "Risk"];
    var meter = '<span class="meter" aria-label="Kanıt düzeyi ' + t.ev + '/4">' + [1, 2, 3, 4].map(function (n) { return "<i" + (n <= t.ev ? ' class="on"' : "") + "></i>"; }).join("") + "</span>";
    var stages = t.stages.map(function (s, i) {
      var split = (s.good && s.good !== "-") || (s.risk && s.risk !== "-") ?
        '<div class="split"><div class="good"><b>' + esc(labels[0]) + "</b>" + esc(s.good || "-") + '</div><div class="risk"><b>' + esc(labels[1]) + "</b>" + esc(s.risk || "-") + "</div></div>" : "";
      return '<article class="stage" id="st-' + t.id + "-" + i + '">' +
        '<div class="when">' + esc(fmtRange(s.from, s.to)) + '<small><button type="button" class="linkish" data-goage="' + bandOf(Math.max(s.from, -0.5)).id + '">Bu yaşa git →</button></small></div>' +
        "<div><h4>" + esc(s.name) + "</h4>" + (s.sub ? '<p class="sub">' + esc(s.sub) + "</p>" : "") +
        '<div class="body"><div class="row"><span class="k">Görev</span><p>' + esc(s.task) + "</p></div>" +
        (s.ms && s.ms.length ? '<div class="row"><span class="k">Basamaklar</span><ul class="ticks">' + s.ms.map(function (m) { return "<li>" + esc(m) + "</li>"; }).join("") + "</ul></div>" : "") +
        split +
        (s.neuro && s.neuro !== "-" ? '<div class="row neuro-row"><span class="k">Nörobiyoloji</span><p>' + esc(s.neuro) + "</p></div>" : "") +
        "</div></div></article>";
    }).join("");
    var related = t.exps.slice();
    A.experiments.forEach(function (e) {
      if ((e.sup.indexOf(t.id) > -1 || e.ch.indexOf(t.id) > -1) && related.indexOf(e.id) < 0) related.push(e.id);
    });
    related.sort(function (a, b) { return (expById[a] ? expById[a].year : 0) - (expById[b] ? expById[b].year : 0); });
    var select = '<div class="theory-select"><label class="sr" for="theorySelect">Kuram seç</label><select id="theorySelect">' +
      visibleTheories().map(function (x) { return '<option value="' + x.id + '"' + (x.id === t.id ? " selected" : "") + ">" + esc(x.who + ": " + x.name) + "</option>"; }).join("") + "</select></div>";
    $("theoryDetail").innerHTML = select +
      '<header class="td-head" style="--c:' + f.color + '"><div class="tags"><span class="tag fam-tag" style="--c:' + f.color + '">' + esc(f.name) + "</span>" +
      (t.rare ? '<span class="tag rare">Ders kitaplarında az yer alır</span>' : "") + '<span class="tag">' + esc(t.years) + "</span></div>" +
      "<h2>" + esc(t.name) + '</h2><p class="by">' + esc(t.who) + '</p><p class="core">' + esc(t.core) + "</p></header>" +
      '<div class="td-facts"><div class="panel"><div class="panel-title">Gelişimin motoru</div><p>' + esc(t.engine) + '</p></div>' +
      '<div class="panel"><div class="panel-title">Yöntem</div><p>' + esc(t.method) + '</p></div>' +
      '<div class="panel"><div class="panel-title">Kanıt düzeyi ' + meter + "</div><p><b>" + esc(A.evidenceScale[t.ev]) + ".</b> " + esc(t.evNote) + "</p></div></div>" +
      '<div class="panel-title">Yaş ekseninde basamaklar</div><div style="--c:' + f.color + '">' + miniAxis(t) + "</div>" +
      '<div class="stages" style="--c:' + f.color + '">' + stages + "</div>" +
      '<div class="td-cols"><section class="panel bio"><div class="panel-title">Biyolojik bakış açısı</div>' + t.bio.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</section>" +
      '<section class="panel crit"><div class="panel-title">Eleştiriler ve sınırlılıklar</div>' + t.crit.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</section></div>" +
      '<div class="section-h"><h3>Kanıtlar ve deneyler</h3><span>' + related.length + " çalışma</span></div>" + expMini(related, t.id);
  }
  function openTheory(id, stageIdx) {
    state.theory = id; save();
    if (location.hash !== "#kuram") { pendingStage = stageIdx; location.hash = "kuram"; }
    else { renderTheoryIndex(); renderTheoryDetail(); focusStage(stageIdx); }
  }
  var pendingStage = null;
  function focusStage(i) {
    if (i == null || isNaN(i)) { window.scrollTo(0, 0); return; }
    var el = $("st-" + state.theory + "-" + i);
    if (!el) return;
    el.classList.add("hl");
    el.scrollIntoView({ block: "start" });
    setTimeout(function () { el.classList.remove("hl"); }, 2400);
  }
  $("theoryIndex").addEventListener("click", function (e) {
    var b = e.target.closest("[data-theory]");
    if (b) { state.theory = b.dataset.theory; save(); renderTheoryIndex(); renderTheoryDetail(); window.scrollTo(0, 0); }
  });
  $("theoryDetail").addEventListener("change", function (e) {
    if (e.target.id === "theorySelect") { state.theory = e.target.value; save(); renderTheoryIndex(); renderTheoryDetail(); }
  });
  $("theoryDetail").addEventListener("click", function (e) {
    var t;
    if ((t = e.target.closest("[data-goage]"))) { state.age = t.dataset.goage; save(); location.hash = "yas"; }
    else if ((t = e.target.closest(".seg"))) focusStage(+t.dataset.stage);
    else if ((t = e.target.closest("[data-exp]"))) openExp(t.dataset.exp);
  });

  /* ---------- KARŞILAŞTIRMALI ÇİZELGE ---------- */
  function bars(items, extra) {
    var rows = pack(items);
    var h = 100 / rows;
    return {
      rows: rows, html: items.map(function (it) {
        var l = xPos(it.from) * 100, w = Math.max((xPos(it.to) - xPos(it.from)) * 100, 0.6);
        return '<button type="button" class="ch-bar" ' + extra(it) + ' style="left:calc(' + l + "% + 1px);width:calc(" + w + "% - 2px);top:calc(" + (it._row * h) + "% + 4px);height:calc(" + h + '% - 8px);bottom:auto"><span>' + esc(it.label) + "</span></button>";
      }).join("")
    };
  }
  function lane(cls, labelHtml, items, extra, color) {
    var b = bars(items, extra);
    return labelHtml + '<div class="ch-lane ' + cls + '" style="--c:' + color + ";min-height:" + (10 + b.rows * 34) + 'px">' + b.html + "</div>";
  }
  function renderChart() {
    var cols = A.ages.map(function (a) {
      return '<button type="button" class="ch-col" data-age="' + a.id + '"><b>' + esc(a.range) + "</b><span>" + esc(a.name) + "</span></button>";
    }).join("");
    var html = '<div class="ch-corner">Kuram / yaş</div><div class="ch-cols" style="grid-template-columns:repeat(' + NB + ',1fr)">' + cols + "</div>";
    html += '<div class="ch-group" style="--c:var(--f-neu)">Nörobiyolojik gelişim</div>';
    A.neuroTracks.forEach(function (tr) {
      var items = tr.bars.map(function (b) { return { from: b.from, to: b.to, label: b.label }; });
      html += lane("neuro-lane", '<div class="ch-label"><span class="nm">' + esc(tr.name) + '</span><span class="sb">' + esc(tr.sub) + "</span></div>", items, function (it) {
        return 'data-goage="' + bandOf(Math.max(it.from, -0.5)).id + '" data-tip="' + esc(it.label) + '" data-tip2="' + esc(fmtRange(it.from, it.to)) + '"';
      }, "var(--f-neu)");
    });
    A.families.forEach(function (f) {
      var ts = visibleTheories().filter(function (t) { return t.fam === f.id; });
      if (!ts.length) return;
      html += '<div class="ch-group" style="--c:' + f.color + '">' + esc(f.name) + "</div>";
      ts.forEach(function (t) {
        var items = t.stages.map(function (s, i) { return { from: s.from, to: s.to, label: s.name, i: i, s: s }; });
        html += lane("", '<button type="button" class="ch-label" data-theory="' + t.id + '"><span class="nm">' + esc(t.who) + '</span><span class="sb">' + esc(t.name) + "</span></button>", items, function (it) {
          return 'data-theory="' + t.id + '" data-stage="' + it.i + '" data-tip="' + esc(it.s.name) + '" data-tip2="' + esc(fmtRange(it.from, it.to) + " · " + t.who) + '" data-tip3="' + esc(it.s.task) + '"';
        }, f.color);
      });
    });
    var chart = $("chart");
    chart.innerHTML = html;
    chart.style.setProperty("--gridlines", "repeating-linear-gradient(to right, transparent 0, transparent calc(100% / " + NB + " - 1px), var(--line) calc(100% / " + NB + " - 1px), var(--line) calc(100% / " + NB + "))");
  }
  $("chart").addEventListener("click", function (e) {
    var t = e.target.closest("button");
    if (!t) return;
    hideTip();
    if (t.dataset.theory) openTheory(t.dataset.theory, t.dataset.stage != null ? +t.dataset.stage : null);
    else if (t.dataset.age || t.dataset.goage) { state.age = t.dataset.age || t.dataset.goage; save(); location.hash = "yas"; }
  });

  /* ---------- ipucu balonu ---------- */
  var tip = $("tip");
  function showTip(el, x, y) {
    tip.innerHTML = "<b>" + esc(el.dataset.tip) + "</b><i>" + esc(el.dataset.tip2 || "") + "</i>" + (el.dataset.tip3 ? "<div>" + esc(el.dataset.tip3) + "</div>" : "");
    tip.hidden = false;
    var r = tip.getBoundingClientRect();
    var left = Math.min(x + 14, window.innerWidth - r.width - 12);
    var top = y + 16 + r.height > window.innerHeight ? y - r.height - 12 : y + 16;
    tip.style.left = Math.max(8, left) + "px"; tip.style.top = Math.max(8, top) + "px";
  }
  function hideTip() { tip.hidden = true; }
  document.addEventListener("mouseover", function (e) {
    var el = e.target.closest("[data-tip]");
    if (el) showTip(el, e.clientX, e.clientY); else hideTip();
  });
  document.addEventListener("mousemove", function (e) {
    if (tip.hidden) return;
    var el = e.target.closest("[data-tip]");
    if (el) showTip(el, e.clientX, e.clientY);
  });
  document.addEventListener("focusin", function (e) {
    var el = e.target.closest && e.target.closest("[data-tip]");
    if (el) { var r = el.getBoundingClientRect(); showTip(el, r.left, r.bottom - 8); } else hideTip();
  });
  window.addEventListener("scroll", hideTip, { passive: true });

  /* ---------- DENEYLER ---------- */
  function renderExpControls() {
    var opts = [[0, "Tümü"], [1, A.status[1].label], [2, A.status[2].label], [3, A.status[3].label]];
    $("expStatus").innerHTML = opts.map(function (o) {
      return '<button type="button" data-st="' + o[0] + '" aria-pressed="' + (state.expStatus === o[0]) + '">' + esc(o[1]) + "</button>";
    }).join("");
    $("statusLegend").innerHTML = [1, 2, 3].map(function (s) { return "<span>" + statusPill(s) + esc(A.status[s].desc) + "</span>"; }).join("");
  }
  function chip(id, neg) {
    var t = thById[id];
    if (!t) return "";
    return '<button type="button" class="th-chip' + (neg ? " neg" : "") + '" data-theory="' + id + '" style="--c:' + famColor(t.fam) + '">' + esc(t.who.split(/ ve |;|,/)[0]) + "</button>";
  }
  function renderExps() {
    var q = state.expQ.toLocaleLowerCase("tr");
    var allFams = A.families.every(function (f) { return state.fams[f.id]; });
    var list = A.experiments.slice().sort(function (a, b) { return a.year - b.year; }).filter(function (e) {
      if (state.expStatus && e.st !== state.expStatus) return false;
      if (!allFams) {
        var linked = e.sup.concat(e.ch).some(function (id) { return thById[id] && state.fams[thById[id].fam]; });
        if (!linked) return false;
      }
      if (q) {
        var hay = (e.title + " " + e.who + " " + e.method + " " + e.find + " " + e.note + " " + e.age).toLocaleLowerCase("tr");
        if (hay.indexOf(q) < 0) return false;
      }
      return true;
    });
    $("expList").innerHTML = list.length ? list.map(function (e) {
      return '<article class="exp" id="exp-' + e.id + '"><div class="top"><span class="yr">' + e.year + "</span>" + statusPill(e.st) + '<span class="tag">' + esc(e.age) + "</span></div>" +
        "<h4>" + esc(e.title) + '</h4><p class="who">' + esc(e.who) + "</p>" +
        "<dl><dt>Yöntem</dt><dd>" + esc(e.method) + "</dd><dt>Bulgu</dt><dd>" + esc(e.find) + "</dd></dl>" +
        (e.sup.length ? '<div class="rel"><span class="lbl">Destekler</span>' + e.sup.map(function (id) { return chip(id); }).join("") + "</div>" : "") +
        (e.ch.length ? '<div class="rel"><span class="lbl">Sorgular</span>' + e.ch.map(function (id) { return chip(id, true); }).join("") + "</div>" : "") +
        (e.note ? '<p class="note">' + esc(e.note) + "</p>" : "") + "</article>";
    }).join("") : '<p class="empty">Bu ölçütlere uyan deney yok. Aramayı ya da filtreyi değiştirin.</p>';
  }
  $("expStatus").addEventListener("click", function (e) {
    var b = e.target.closest("[data-st]");
    if (b) { state.expStatus = +b.dataset.st; renderExpControls(); renderExps(); }
  });
  $("expSearch").addEventListener("input", function (e) { state.expQ = e.target.value.trim(); renderExps(); });
  $("expList").addEventListener("click", function (e) {
    var b = e.target.closest("[data-theory]");
    if (b) openTheory(b.dataset.theory, null);
  });
  var pendingExp = null;
  function openExp(id) {
    state.expStatus = 0; state.expQ = ""; $("expSearch").value = "";
    var e = expById[id];
    if (e) {
      var linked = e.sup.concat(e.ch).some(function (tid) { return thById[tid] && state.fams[thById[tid].fam]; });
      if (!linked) { A.families.forEach(function (f) { state.fams[f.id] = true; }); renderFamilies(); }
    }
    if (location.hash !== "#deneyler") { pendingExp = id; location.hash = "deneyler"; }
    else { renderExpControls(); renderExps(); flashExp(id); }
  }
  function flashExp(id) {
    var el = $("exp-" + id);
    if (!el) return;
    el.scrollIntoView({ block: "start" });
    el.classList.add("flash");
    setTimeout(function () { el.classList.remove("flash"); }, 2400);
  }

  /* ---------- yönlendirme ---------- */
  var VIEWS = ["yas", "kuram", "cizelge", "deneyler"];
  function renderCurrent() {
    if (state.view === "yas") { renderAgeStrip(); renderAgeDetail(); }
    else if (state.view === "kuram") { renderTheoryIndex(); renderTheoryDetail(); }
    else if (state.view === "cizelge") renderChart();
    else { renderExpControls(); renderExps(); }
  }
  function route() {
    var h = location.hash.replace("#", "");
    state.view = VIEWS.indexOf(h) > -1 ? h : "yas";
    VIEWS.forEach(function (v) { $("view-" + v).hidden = v !== state.view; });
    document.querySelectorAll(".tab").forEach(function (t) { t.setAttribute("aria-selected", String(t.dataset.view === state.view)); });
    hideTip();
    renderCurrent();
    if (state.view === "kuram" && pendingStage !== null) { var s = pendingStage; pendingStage = null; focusStage(s); }
    else if (state.view === "deneyler" && pendingExp) { var id = pendingExp; pendingExp = null; flashExp(id); }
    else window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);

  renderStats();
  renderFamilies();
  route();
})();
