/* Ruhsal Gelişim Atlası: ana görünümler (yaş, kuram, çizelge, deneyler) ve yönlendirme.
   Beyin, karşılaştırma ve kaynakça görünümleri ayrı dosyalarda ATLAS.views altına kaydolur. */
(function () {
  "use strict";
  var A = window.ATLAS, U = A.U, $ = U.$, esc = U.esc;
  var thById = U.thById, expById = U.expById, famById = U.famById, NB = U.NB;

  var state = A.state = { view: "kapak", age: "a2", theory: "erikson", fams: {}, expStatus: 0, expKind: "", expQ: "", brainAge: 1, brainRegion: "dlpfc", compare: ["freud", "erikson"], compareNeuro: true };
  A.families.forEach(function (f) { state.fams[f.id] = true; });
  try {
    var saved = JSON.parse(localStorage.getItem("ruhsal-atlas") || "{}");
    if (saved.age && A.ages.some(function (a) { return a.id === saved.age; })) state.age = saved.age;
    if (saved.theory && thById[saved.theory]) state.theory = saved.theory;
    if (saved.fams) Object.keys(state.fams).forEach(function (k) { if (k in saved.fams) state.fams[k] = !!saved.fams[k]; });
    if (Array.isArray(saved.compare) && saved.compare.every(function (id) { return thById[id]; }) && saved.compare.length) state.compare = saved.compare.slice(0, 3);
    if (typeof saved.brainAge === "number") state.brainAge = saved.brainAge;
    if (saved.brainRegion) state.brainRegion = saved.brainRegion;
  } catch (e) { /* depolama yoksa varsayılanlar */ }
  var save = A.save = function () {
    try { localStorage.setItem("ruhsal-atlas", JSON.stringify({ age: state.age, theory: state.theory, fams: state.fams, compare: state.compare, brainAge: state.brainAge, brainRegion: state.brainRegion })); } catch (e) { /* yok say */ }
  };
  var visibleTheories = A.visibleTheories = function () { return A.theories.filter(function (t) { return state.fams[t.fam]; }); };

  var ICONS = {
    motor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="13" cy="4" r="2"/><path d="M11 21l2-6-3-3 2-5 4 3h3M8 12l2-5M13 15l3 6"/></svg>',
    dil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12h5"/></svg>',
    sosyal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="8" cy="8" r="3"/><circle cx="16.5" cy="9" r="2.5"/><path d="M3 20c0-3 2.5-5.5 5-5.5s5 2.5 5 5.5M14 20c0-2.4 1.2-4.5 3-4.5s3.5 2 3.5 4.5"/></svg>',
    bilis: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/></svg>'
  };
  var DOMAINS = [["sosyal", "Sosyal-duygusal"], ["dil", "Dil ve iletişim"], ["bilis", "Bilişsel"], ["motor", "Motor ve fiziksel"]];

  /* ---------- üst bilgi ve aile filtresi ---------- */
  function renderStats() {
    var rare = A.theories.filter(function (t) { return t.rare; }).length;
    var rct = A.experiments.filter(function (e) { return e.kind === "mudahale"; }).length;
    var cdcN = (A.cdc || []).reduce(function (n, c) { return n + c.sosyal.length + c.dil.length + c.bilis.length + c.motor.length; }, 0);
    $("stats").innerHTML = "<span><b>" + A.theories.length + "</b> kuram (" + rare + " tanesi az bilinen)</span><span><b>" + NB + "</b> yaş dönemi</span><span><b>" + cdcN + "</b> CDC basamağı</span><span><b>" + A.experiments.length + "</b> çalışma (" + rct + " müdahale)</span><span><b>" + A.brain.regions.length + "</b> beyin bölgesi</span>";
  }
  function renderFamilies() {
    var all = A.families.every(function (f) { return state.fams[f.id]; });
    var html = '<button type="button" class="fam-chip" id="fam-all" aria-pressed="' + all + '" style="--c:var(--ink)"><span class="dot"></span>Tümü</button>';
    A.families.forEach(function (f) {
      html += '<button type="button" class="fam-chip" data-fam="' + f.id + '" aria-pressed="' + !!state.fams[f.id] + '" style="--c:' + f.color + '">' + U.famIcon(f.id) + esc(f.short) + "</button>";
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

  /* ---------- ortak: deney mini kartları ---------- */
  var expMini = A.expMini = function (ids, ctxTheory) {
    var list = ids.map(function (id) { return expById[id]; }).filter(Boolean);
    if (!list.length) return '<p class="empty">Bu kuramı doğrudan sınayan deneysel çalışma yok denecek kadar azdır.</p>';
    return '<div class="exp-mini">' + list.map(function (e) {
      var rel = "";
      if (ctxTheory) {
        if (e.sup.indexOf(ctxTheory) > -1) rel = '<span class="rel-s">destekler</span>';
        else if (e.ch.indexOf(ctxTheory) > -1) rel = '<span class="rel-c">sorgular</span>';
        else rel = "<span>ilgili</span>";
      }
      return '<button type="button" data-exp="' + e.id + '"><span class="t">' + esc(e.title) + '</span><span class="m"><span>' + e.year + "</span>" + U.statusPill(e.st) + U.kindPill(e) + rel + "</span></button>";
    }).join("") + "</div>";
  };

  /* ---------- YAŞ GÖRÜNÜMÜ ---------- */
  function theoriesInBand(band) {
    var out = [];
    visibleTheories().forEach(function (t) {
      var st = t.stages.filter(function (s) { return U.overlap(s, band) > 1e-6; });
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
  function msList(items, cls) {
    return '<ul class="clean">' + items.map(function (m) {
      return '<li class="' + (cls || "") + '"><span class="when">' + esc(m[0]) + "</span><span>" + esc(m[1]) + (m[2] ? ' <cite>' + esc(m[2]) + "</cite>" : "") + "</span></li>";
    }).join("") + "</ul>";
  }
  function milestonesHtml(b) {
    var html = "";
    if (b.cdc && b.cdc.length) {
      html += '<div class="cdc-head"><span class="cdc-badge">CDC 2022</span><span>Çocukların en az %75\'inin bu yaşta ulaşması beklenir (Zubler ve ark., 2022)</span></div>';
      html += b.cdc.map(function (c) {
        return '<div class="cdc-age"><h4 class="cdc-age-h">' + esc(c.age) + '</h4><div class="milestones">' + DOMAINS.filter(function (d) { return c[d[0]] && c[d[0]].length; }).map(function (d) {
          return '<div class="ms"><h5>' + ICONS[d[0]] + esc(d[1]) + '</h5><ul class="clean">' + c[d[0]].map(function (m) { return "<li><span>" + esc(m) + "</span></li>"; }).join("") + "</ul></div>";
        }).join("") + "</div></div>";
      }).join("");
      if (b.msx) {
        var extra = DOMAINS.filter(function (d) { return b.msx[d[0]] && b.msx[d[0]].length; });
        if (extra.length) {
          html += '<div class="cdc-age extra"><h4 class="cdc-age-h">Araştırma literatüründen ek basamaklar</h4><div class="milestones">' + extra.map(function (d) {
            return '<div class="ms"><h5>' + ICONS[d[0]] + esc(d[1]) + "</h5>" + msList(b.msx[d[0]]) + "</div>";
          }).join("") + "</div></div>";
        }
      }
    } else if (b.ms) {
      html += '<p class="src-note">Bu dönem için CDC kontrol listesi yoktur; basamaklar gelişim literatüründen derlenmiştir.</p><div class="milestones">' + DOMAINS.filter(function (d) { return b.ms[d[0]] && b.ms[d[0]].length; }).map(function (d) {
        return '<div class="ms"><h5>' + ICONS[d[0]] + esc(d[1]) + "</h5>" + msList(b.ms[d[0]]) + "</div>";
      }).join("") + "</div>";
    }
    return html;
  }
  function renderAgeDetail() {
    var i = A.ages.findIndex(function (a) { return a.id === state.age; });
    var b = A.ages[i];
    var flags = b.flags && b.flags.length ? '<div class="flags"><div class="panel-title">Değerlendirme gerektiren durumlar</div><ul class="ticks">' + b.flags.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" +
      (b.cdc && b.cdc.length && A.cdcMeta ? '<p class="act-early"><b>CDC "Erken davranın":</b> ' + esc(A.cdcMeta.actEarly) + "</p>" : "") + "</div>" : "";
    var bands = theoriesInBand(b);
    var lenses = bands.map(function (x) {
      var primary = x.stages.slice().sort(function (p, q) { return U.overlap(q, b) - U.overlap(p, b); })[0];
      var others = x.stages.filter(function (s) { return s !== primary; });
      var idx = x.t.stages.indexOf(primary);
      return '<button type="button" class="lens" data-theory="' + x.t.id + '" data-stage="' + idx + '" style="--c:' + U.famColor(x.t.fam) + '">' +
        '<span class="who">' + U.famIcon(x.t.fam) + esc(x.t.who) + (x.t.rare ? ' <span class="rare-dot" title="Az bilinen kuram">◆</span>' : "") + '<span class="yrs">' + esc(U.fmtRange(primary.from, primary.to)) + "</span></span>" +
        "<h4>" + esc(primary.name) + "</h4>" +
        '<span class="task">' + esc(primary.task) + "</span>" +
        (others.length ? '<span class="who">Bu dönemde ayrıca: ' + others.map(function (s) { return esc(s.name); }).join(", ") + "</span>" : "") +
        (primary.neuro && primary.neuro !== "-" ? '<span class="neuro-link"><b>Beyin:</b> ' + esc(primary.neuro) + "</span>" : "") +
        "</button>";
    }).join("");
    var dx = b.dx && b.dx.length ? '<section class="panel dxp"><div class="panel-title">Psikopatoloji penceresi <span class="tag">DSM-5-TR' + (b.to <= 6 ? " · DC:0-5" : "") + "</span></div><dl class=\"dxl\">" +
      b.dx.map(function (d) { return "<dt>" + esc(d[0]) + "</dt><dd>" + esc(d[1] || "") + "</dd>"; }).join("") + "</dl></section>" : "";
    var tools = b.tools && b.tools.length ? '<section class="panel toolp"><div class="panel-title">Tarama ve değerlendirme</div><ul class="ticks">' + b.tools.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul></section>" : "";
    var brainMini = A.views.beyin && A.views.beyin.mini ? '<button type="button" class="mini-brain" id="openBrain" aria-label="Bu yaşı beyin haritasında aç">' + A.views.beyin.mini(U.bandAge(b)) + '<span>Beyin haritasında aç →</span></button>' : "";
    $("ageDetail").innerHTML =
      '<div class="age-head"><div><div class="range">' + esc(b.range.toLocaleUpperCase("tr")) + "</div><h2>" + esc(b.name) + "</h2></div>" +
      '<div class="pager"><button type="button" id="agePrev"' + (i === 0 ? " disabled" : "") + '>← Önceki</button><button type="button" id="ageNext"' + (i === NB - 1 ? " disabled" : "") + '>Sonraki →</button><button type="button" class="btn" id="ageSun">▶ Bu dönemi sun</button></div>' +
      '<p class="gist">' + esc(b.gist) + "</p></div>" +
      '<div class="age-grid"><section class="panel"><div class="panel-title">Gelişim basamakları</div>' + milestonesHtml(b) + flags + "</section>" +
      '<aside class="age-side"><section class="panel neuro"><div class="panel-title">Beyinde neler oluyor</div>' + brainMini + '<ul class="clean">' + b.neuro.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + "</ul>" +
      (b.clinic ? '<div class="clin">' + b.clinic + "</div>" : "") + "</section>" + dx + tools + "</aside></div>" +
      '<div class="section-h"><h3>Kuramlar bu dönemi nasıl okur?</h3><span>' + bands.length + " kuram · ◆ az bilinen · ayrıntı için karta dokunun</span></div>" +
      (lenses ? '<div class="lens-grid">' + lenses + "</div>" : '<p class="empty">Seçili kuram ailelerinde bu dönemi ele alan kuram yok. Üstteki filtreden aile ekleyin.</p>') +
      '<div class="section-h"><h3>Bu döneme ait deneyler</h3><span>' + b.exps.length + " çalışma</span></div>" + expMini(b.exps);
  }
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function setAge(id) {
    state.age = id; save();
    var run = function () { renderAgeStrip(); renderAgeDetail(); };
    if (document.startViewTransition && !reduceMotion) document.startViewTransition(run);
    else { run(); var d = $("ageDetail"); d.classList.remove("swap"); void d.offsetWidth; d.classList.add("swap"); }
  }
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
    if ((t = e.target.closest("#ageSun"))) { A.deck.open({ type: "age", id: state.age }); }
    else if ((t = e.target.closest("#agePrev, #ageNext"))) {
      var i = A.ages.findIndex(function (a) { return a.id === state.age; }) + (t.id === "ageNext" ? 1 : -1);
      if (i >= 0 && i < NB) setAge(A.ages[i].id);
    } else if ((t = e.target.closest("#openBrain"))) {
      var b = A.ages.find(function (a) { return a.id === state.age; });
      nav.brain(U.bandAge(b));
    } else if ((t = e.target.closest(".lens"))) nav.theory(t.dataset.theory, +t.dataset.stage);
    else if ((t = e.target.closest("[data-exp]"))) nav.exp(t.dataset.exp);
  });

  /* ---------- KURAM GÖRÜNÜMÜ ---------- */
  function renderTheoryIndex() {
    var vis = visibleTheories();
    if (vis.length && !state.fams[thById[state.theory].fam]) state.theory = vis[0].id;
    var html = "";
    A.families.forEach(function (f) {
      var ts = vis.filter(function (t) { return t.fam === f.id; });
      if (!ts.length) return;
      html += '<div class="ti-group" style="--c:' + f.color + '"><h5>' + U.famIcon(f.id) + esc(f.name) + "</h5>" + ts.map(function (t) {
        return '<button type="button" class="ti-btn" data-theory="' + t.id + '" aria-current="' + (t.id === state.theory) + '" style="--c:' + f.color + '"><span class="nm">' + esc(t.name) + '</span><span class="sb">' + esc(t.who) + (t.rare ? " · az bilinen" : "") + "</span></button>";
      }).join("") + "</div>";
    });
    $("theoryIndex").innerHTML = html || '<p class="empty">Filtrede seçili aile yok.</p>';
  }
  function miniAxis(t) {
    var items = t.stages.map(function (s, i) { return { from: s.from, to: s.to, i: i, s: s }; });
    var rows = U.pack(items);
    var h = 100 / rows;
    var segs = items.map(function (it) {
      var l = U.xPos(it.from) * 100, w = Math.max((U.xPos(it.to) - U.xPos(it.from)) * 100, 0.8);
      return '<button type="button" class="seg" data-stage="' + it.i + '" aria-label="' + esc(it.s.name + ", " + U.fmtRange(it.from, it.to)) + '" data-tip="' + esc(it.s.name) + '" data-tip2="' + esc(U.fmtRange(it.from, it.to)) + '" style="left:' + l + "%;width:" + w + "%;top:calc(" + (it._row * h) + "% + 3px);height:calc(" + h + '% - 6px);bottom:auto"></button>';
    }).join("");
    var ticks = [0, 1, 3, 6, 12, 18, 40, 65].map(function (y) {
      return '<span style="left:' + U.xPos(y) * 100 + '%">' + (y === 0 ? "Doğum" : y) + "</span>";
    }).join("");
    return '<div class="mini-axis" style="height:' + (16 + rows * 18) + 'px">' + segs + '<div class="ticks">' + ticks + "</div></div>";
  }
  function relatedExps(t) {
    var P = A.profiles && A.profiles[t.id];
    var related = t.exps.slice();
    if (P && P.exps) P.exps.forEach(function (id) { if (related.indexOf(id) < 0) related.push(id); });
    A.experiments.forEach(function (e) {
      if ((e.sup.indexOf(t.id) > -1 || e.ch.indexOf(t.id) > -1) && related.indexOf(e.id) < 0) related.push(e.id);
    });
    return related.filter(function (id) { return expById[id]; }).sort(function (a, b) { return expById[a].year - expById[b].year; });
  }
  A.relatedExps = relatedExps;
  function renderTheoryDetail() {
    var t = thById[state.theory];
    var f = famById[t.fam];
    var P = A.profiles && A.profiles[t.id];
    var labels = t.labels || ["Olumlu çözüm", "Risk"];
    var pf = P && P.stageFields;
    var stages = t.stages.map(function (s, i) {
      var split = (s.good && s.good !== "-") || (s.risk && s.risk !== "-") ?
        '<div class="split"><div class="good"><b>' + esc(labels[0]) + "</b>" + esc(s.good || "-") + '</div><div class="risk"><b>' + esc(labels[1]) + "</b>" + esc(s.risk || "-") + "</div></div>" : "";
      var extra = pf && pf.rows[i] ? '<dl class="pf">' + pf.labels.map(function (l, k) { return "<dt>" + esc(l) + "</dt><dd>" + esc(pf.rows[i][k]) + "</dd>"; }).join("") + "</dl>" : "";
      return '<article class="stage" id="st-' + t.id + "-" + i + '">' +
        '<div class="when">' + esc(U.fmtRange(s.from, s.to)) + '<small><button type="button" class="linkish" data-goage="' + U.bandOf(Math.max(s.from, -0.5)).id + '">Bu yaşa git →</button></small></div>' +
        "<div><h4>" + esc(s.name) + "</h4>" + (s.sub ? '<p class="sub">' + esc(s.sub) + "</p>" : "") +
        '<div class="body"><div class="row"><span class="k">Görev</span><p>' + esc(s.task) + "</p></div>" +
        (s.ms && s.ms.length ? '<div class="row"><span class="k">Basamaklar</span><ul class="ticks">' + s.ms.map(function (m) { return "<li>" + esc(m) + "</li>"; }).join("") + "</ul></div>" : "") +
        extra + split +
        (s.neuro && s.neuro !== "-" ? '<div class="row neuro-row"><span class="k">Nörobiyoloji</span><p>' + esc(s.neuro) + "</p></div>" : "") +
        "</div></div></article>";
    }).join("");
    var related = relatedExps(t);
    var presets = (A.comparisons || []).filter(function (c) { return c.ids.indexOf(t.id) > -1; });
    var select = '<div class="theory-select"><label class="sr" for="theorySelect">Kuram seç</label><select id="theorySelect">' +
      visibleTheories().map(function (x) { return '<option value="' + x.id + '"' + (x.id === t.id ? " selected" : "") + ">" + esc(x.who + ": " + x.name) + "</option>"; }).join("") + "</select></div>";
    function sec(id, title, inner, aside) { return '<section class="td-sec" id="ts-' + id + '"><div class="section-h"><h3>' + esc(title) + "</h3>" + (aside ? "<span>" + aside + "</span>" : "") + "</div>" + inner + "</section>"; }
    var navItems = [];
    function nav(id, title) { navItems.push([id, title]); }
    var html = "";
    if (P) {
      nav("kuramci", "Kuramcı ve dönemi");
      html += sec("kuramci", "Kuramcı ve dönemi", '<div class="bio-grid"><div><p class="life">' + esc(P.life) + "</p>" + P.bio.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>" +
        '<ol class="tl">' + P.timeline.map(function (y) { return '<li><span class="tl-y">' + y[0] + "</span><span>" + esc(y[1]) + "</span></li>"; }).join("") + "</ol></div>");
      nav("kavramlar", "Temel kavramlar");
      html += sec("kavramlar", "Temel kavramlar", '<dl class="concepts">' + P.concepts.map(function (c) { return "<div><dt>" + esc(c[0]) + "</dt><dd>" + esc(c[1]) + "</dd></div>"; }).join("") + "</dl>", P.concepts.length + " kavram");
    }
    nav("evreler", "Evreler");
    var summary = pf ? '<details class="stage-sum"><summary>Evre özet tablosu</summary><div class="cmp-scroll"><table class="cmp sum"><thead><tr><th>Evre</th><th>Yaş</th>' + pf.labels.map(function (l) { return "<th>" + esc(l) + "</th>"; }).join("") + "</tr></thead><tbody>" +
      t.stages.map(function (s, i) { return "<tr><th scope=\"row\">" + esc(s.name) + "</th><td>" + esc(U.fmtRange(s.from, s.to)) + "</td>" + (pf.rows[i] || []).map(function (c) { return "<td>" + esc(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div></details>" : "";
    html += sec("evreler", "Evreler", '<div class="panel-title">Yaş ekseninde basamaklar</div><div style="--c:' + f.color + '">' + miniAxis(t) + "</div>" + summary + '<div class="stages" style="--c:' + f.color + '">' + stages + "</div>", t.stages.length + " evre");
    if (P && P.evolution) {
      nav("gelisim", "Kuramın gelişimi");
      html += sec("gelisim", "Kuramın gelişimi", '<ol class="tl evo">' + P.evolution.map(function (y) { return '<li><span class="tl-y">' + y[0] + "</span><span>" + esc(y[1]) + "</span></li>"; }).join("") + "</ol>");
    }
    if (P && P.classic) {
      nav("klasik", "Klasik vaka ve deney");
      html += sec("klasik", P.classic.title, '<div class="classic"><div class="classic-text">' + P.classic.text.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>" +
        '<aside class="panel crit"><div class="panel-title">Eleştiri ve yeniden değerlendirme</div>' + P.classic.critique.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</aside></div>" +
        (P.classic.exps && P.classic.exps.length ? expMini(P.classic.exps, t.id) : ""), "Klasik vaka ve deney");
    }
    nav("biyoloji", "Biyoloji ve eleştiri");
    html += sec("biyoloji", "Biyolojik bakış ve eleştiriler", '<div class="td-cols"><section class="panel bio"><div class="panel-title">Biyolojik bakış açısı</div>' + t.bio.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</section>" +
      '<section class="panel crit"><div class="panel-title">Eleştiriler ve sınırlılıklar</div>' + t.crit.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</section></div>");
    if (t.clinic) { nav("klinik", "Klinik uygulama"); html += sec("klinik", "Klinik uygulama", '<section class="panel clinic-p"><p>' + esc(t.clinic) + "</p></section>"); }
    if (P && P.vignette) {
      var v = P.vignette;
      nav("vinyet", "Klinik vinyet");
      html += sec("vinyet", "Klinik vinyet: " + v.title, '<div class="vignette"><section class="v-case"><div class="panel-title">Vaka</div><p>' + esc(v.case) + "</p></section>" +
        '<section class="v-classic" style="--c:' + f.color + '"><div class="panel-title">Kuramın formülasyonu</div><p>' + esc(v.classic) + "</p></section>" +
        '<section class="v-modern"><div class="panel-title">Güncel kanıta dayalı yaklaşım</div><p>' + esc(v.modern) + "</p></section></div>", "Eğitim amaçlı kurgusal vaka");
    }
    if (P && P.misconceptions) {
      nav("yanlis", "Yanlış anlamalar");
      html += sec("yanlis", "Sık yapılan yanlış anlamalar", '<ul class="miscon">' + P.misconceptions.map(function (m) { return "<li>" + esc(m) + "</li>"; }).join("") + "</ul>");
    }
    if (P && P.measures) {
      nav("olcum", "Ölçüm araçları");
      html += sec("olcum", "Kurama dayalı ölçüm ve değerlendirme araçları", '<dl class="measures">' + P.measures.map(function (m) { return "<div><dt>" + esc(m[0]) + "</dt><dd>" + esc(m[1]) + "</dd></div>"; }).join("") + "</dl>");
    }
    nav("kanit", "Kanıtlar");
    html += sec("kanit", "Kanıtlar ve deneyler", expMini(related, t.id), related.length + " çalışma");
    if (t.primary && t.primary.length) { nav("kaynak", "Temel kaynaklar"); html += sec("kaynak", "Temel kaynaklar", '<ul class="refs primary">' + t.primary.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>"); }

    $("theoryDetail").innerHTML = select +
      '<header class="td-head" style="--c:' + f.color + '"><div class="tags"><span class="tag fam-tag" style="--c:' + f.color + '">' + U.famIcon(f.id) + esc(f.name) + "</span>" +
      (t.rare ? '<span class="tag rare">Ders kitaplarında az yer alır</span>' : "") + '<span class="tag">' + esc(t.years) + "</span>" + (P ? '<span class="tag rare">Ayrıntılı profil</span>' : "") + "</div>" +
      "<h2>" + esc(t.name) + '</h2><p class="by">' + esc(t.who) + '</p><p class="core">' + esc(t.core) + "</p>" +
      '<div class="td-actions"><button type="button" class="btn" id="thSun">▶ Bu kuramı sun</button><button type="button" class="btn ghost" id="cmpAdd">Karşılaştırmaya ekle</button>' +
      presets.map(function (c) { return '<button type="button" class="btn ghost" data-preset="' + c.ids.join(",") + '">' + esc(c.ids.map(function (id) { return thById[id] ? thById[id].who.split(/ ve |;|,/)[0] : id; }).join(" ↔ ")) + "</button>"; }).join("") + "</div></header>" +
      '<nav class="td-nav" aria-label="Bu sayfada"><span>Bu sayfada</span>' + navItems.map(function (n) { return '<button type="button" data-jump="ts-' + n[0] + '">' + esc(n[1]) + "</button>"; }).join("") + "</nav>" +
      '<div class="td-facts"><div class="panel"><div class="panel-title">Gelişimin motoru</div><p>' + esc(t.engine) + '</p></div>' +
      '<div class="panel"><div class="panel-title">Yöntem</div><p>' + esc(t.method) + '</p></div>' +
      '<div class="panel"><div class="panel-title">Kanıt düzeyi ' + U.meter(t.ev) + "</div><p><b>" + esc(A.evidenceScale[t.ev]) + ".</b> " + esc(t.evNote) + "</p></div></div>" + html;
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
    if ((t = e.target.closest("[data-jump]"))) { var el = $(t.dataset.jump); if (el) el.scrollIntoView({ block: "start" }); }
    else if ((t = e.target.closest("[data-goage]"))) { state.age = t.dataset.goage; save(); location.hash = "yas"; }
    else if ((t = e.target.closest("#thSun"))) A.deck.open({ type: "theory", id: state.theory });
    else if ((t = e.target.closest("#cmpAdd"))) {
      var c = state.compare.filter(function (id) { return id !== state.theory; });
      c.unshift(state.theory); state.compare = c.slice(0, 3); save(); location.hash = "karsilastir";
    }
    else if ((t = e.target.closest("[data-preset]"))) nav.compare(t.dataset.preset.split(","));
    else if ((t = e.target.closest(".seg"))) focusStage(+t.dataset.stage);
    else if ((t = e.target.closest("[data-exp]"))) nav.exp(t.dataset.exp);
  });

  /* ---------- KARŞILAŞTIRMALI ÇİZELGE ---------- */
  function bars(items, extra) {
    var rows = U.pack(items);
    var h = 100 / rows;
    return {
      rows: rows, html: items.map(function (it) {
        var l = U.xPos(it.from) * 100, w = Math.max((U.xPos(it.to) - U.xPos(it.from)) * 100, 0.6);
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
        return 'data-goage="' + U.bandOf(Math.max(it.from, -0.5)).id + '" data-tip="' + esc(it.label) + '" data-tip2="' + esc(U.fmtRange(it.from, it.to)) + '"';
      }, "var(--f-neu)");
    });
    A.families.forEach(function (f) {
      var ts = visibleTheories().filter(function (t) { return t.fam === f.id; });
      if (!ts.length) return;
      html += '<div class="ch-group" style="--c:' + f.color + '">' + U.famIcon(f.id) + esc(f.name) + "</div>";
      ts.forEach(function (t) {
        var items = t.stages.map(function (s, i) { return { from: s.from, to: s.to, label: s.name, i: i, s: s }; });
        html += lane("", '<button type="button" class="ch-label" data-theory="' + t.id + '"><span class="nm">' + esc(t.who) + (t.rare ? ' <span class="rare-dot">◆</span>' : "") + '</span><span class="sb">' + esc(t.name) + "</span></button>", items, function (it) {
          return 'data-theory="' + t.id + '" data-stage="' + it.i + '" data-tip="' + esc(it.s.name) + '" data-tip2="' + esc(U.fmtRange(it.from, it.to) + " · " + t.who) + '" data-tip3="' + esc(it.s.task) + '"';
        }, f.color);
      });
    });
    var chart = $("chart");
    var band = A.ages.find(function (a) { return a.id === state.age; }) || A.ages[0];
    var nowX = U.xPos(U.bandAge(band)) * 100;
    html += '<div class="ch-over" aria-hidden="true"><div class="ch-now" style="left:' + nowX + '%"><span>' + esc(band.range) + '</span></div><div class="ch-hover" hidden><span></span></div></div>';
    chart.innerHTML = html;
    chart.style.setProperty("--gridlines", "repeating-linear-gradient(to right, transparent 0, transparent calc(100% / " + NB + " - 1px), var(--line) calc(100% / " + NB + " - 1px), var(--line) calc(100% / " + NB + "))");
  }
  $("chart").addEventListener("mousemove", function (e) {
    var over = $("chart").querySelector(".ch-over"); if (!over) return;
    var r = over.getBoundingClientRect(), x = (e.clientX - r.left) / r.width;
    var hv = over.querySelector(".ch-hover");
    if (x < 0 || x > 1) { hv.hidden = true; return; }
    hv.hidden = false; hv.style.left = (x * 100) + "%";
    var age = U.ageAt(x);
    hv.firstChild.textContent = U.fmtAge(age < 0 ? -0.3 : age);
  });
  $("chart").addEventListener("mouseleave", function () { var hv = $("chart").querySelector(".ch-hover"); if (hv) hv.hidden = true; });
  $("chart").addEventListener("click", function (e) {
    var t = e.target.closest("button");
    if (!t) return;
    hideTip();
    if (t.dataset.theory) nav.theory(t.dataset.theory, t.dataset.stage != null ? +t.dataset.stage : null);
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
  A.hideTip = hideTip;
  document.addEventListener("mouseover", function (e) {
    var el = e.target.closest && e.target.closest("[data-tip]");
    if (el) showTip(el, e.clientX, e.clientY); else hideTip();
  });
  document.addEventListener("mousemove", function (e) {
    if (tip.hidden) return;
    var el = e.target.closest && e.target.closest("[data-tip]");
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
      return '<button type="button" data-st="' + o[0] + '" aria-pressed="' + (state.expStatus === o[0] && !state.expKind) + '">' + esc(o[1]) + "</button>";
    }).join("") + '<button type="button" data-kind="mudahale" aria-pressed="' + (state.expKind === "mudahale") + '">Müdahale çalışmaları</button>';
    $("statusLegend").innerHTML = [1, 2, 3].map(function (s) { return "<span>" + U.statusPill(s) + esc(A.status[s].desc) + "</span>"; }).join("") +
      '<span><span class="status sk">Müdahale</span>Kurama dayalı tedavi ya da önleme çalışması</span>';
  }
  function chip(id, neg) {
    var t = thById[id];
    if (!t) return "";
    return '<button type="button" class="th-chip' + (neg ? " neg" : "") + '" data-theory="' + id + '" style="--c:' + U.famColor(t.fam) + '">' + esc(t.who.split(/ ve |;|,/)[0]) + "</button>";
  }
  A.theoryChip = chip;
  function renderExps() {
    var q = state.expQ.toLocaleLowerCase("tr");
    var allFams = A.families.every(function (f) { return state.fams[f.id]; });
    var list = A.experiments.slice().sort(function (a, b) { return a.year - b.year; }).filter(function (e) {
      if (state.expKind && e.kind !== state.expKind) return false;
      if (!state.expKind && state.expStatus && e.st !== state.expStatus) return false;
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
    $("expCount").textContent = list.length + " çalışma gösteriliyor";
    $("expList").innerHTML = list.length ? list.map(function (e) {
      var refs = A.expRefs ? U.refLinks(A.expRefs[e.id]) : "";
      return '<article class="exp" id="exp-' + e.id + '"><div class="top"><span class="yr">' + e.year + "</span>" + U.statusPill(e.st) + U.kindPill(e) + '<span class="tag">' + esc(e.age) + "</span></div>" +
        "<h4>" + esc(e.title) + '</h4><p class="who">' + esc(e.who) + "</p>" +
        "<dl><dt>Yöntem</dt><dd>" + esc(e.method) + "</dd><dt>Bulgu</dt><dd>" + esc(e.find) + "</dd></dl>" +
        (e.sup.length ? '<div class="rel"><span class="lbl">Destekler</span>' + e.sup.map(function (id) { return chip(id); }).join("") + "</div>" : "") +
        (e.ch.length ? '<div class="rel"><span class="lbl">Sorgular</span>' + e.ch.map(function (id) { return chip(id, true); }).join("") + "</div>" : "") +
        (e.note ? '<p class="note">' + esc(e.note) + "</p>" : "") +
        (refs ? '<details class="exp-refs"><summary>Kaynaklar</summary>' + refs + "</details>" : "") + "</article>";
    }).join("") : '<p class="empty">Bu ölçütlere uyan çalışma yok. Aramayı ya da filtreyi değiştirin.</p>';
  }
  $("expStatus").addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    if (b.dataset.kind) { state.expKind = state.expKind ? "" : b.dataset.kind; state.expStatus = 0; }
    else { state.expStatus = +b.dataset.st; state.expKind = ""; }
    renderExpControls(); renderExps();
  });
  $("expSearch").addEventListener("input", function (e) { state.expQ = e.target.value.trim(); renderExps(); });
  $("expList").addEventListener("click", function (e) {
    var b = e.target.closest("[data-theory]");
    if (b) nav.theory(b.dataset.theory, null);
  });
  var pendingExp = null;
  function flashExp(id) {
    var el = $("exp-" + id);
    if (!el) return;
    el.scrollIntoView({ block: "start" });
    el.classList.add("flash");
    setTimeout(function () { el.classList.remove("flash"); }, 2400);
  }

  /* ---------- gezinme ---------- */
  var nav = A.nav = {
    theory: function (id, stageIdx) {
      state.theory = id; save();
      if (location.hash !== "#kuram") { pendingStage = stageIdx; location.hash = "kuram"; }
      else { renderTheoryIndex(); renderTheoryDetail(); focusStage(stageIdx); }
    },
    exp: function (id) {
      state.expStatus = 0; state.expKind = ""; state.expQ = ""; $("expSearch").value = "";
      var e = expById[id];
      if (e) {
        var linked = e.sup.concat(e.ch).some(function (tid) { return thById[tid] && state.fams[thById[tid].fam]; });
        if (!linked) { A.families.forEach(function (f) { state.fams[f.id] = true; }); renderFamilies(); }
      }
      if (location.hash !== "#deneyler") { pendingExp = id; location.hash = "deneyler"; }
      else { renderExpControls(); renderExps(); flashExp(id); }
    },
    age: function (id) { state.age = id; save(); location.hash = "yas"; },
    brain: function (age, region) {
      state.brainAge = age; if (region) state.brainRegion = region; save();
      if (location.hash !== "#beyin") location.hash = "beyin"; else renderCurrent();
    },
    compare: function (ids) {
      state.compare = ids.filter(function (id) { return thById[id]; }).slice(0, 3); save();
      if (location.hash !== "#karsilastir") location.hash = "karsilastir"; else renderCurrent();
    }
  };

  /* ---------- yönlendirme ---------- */
  var VIEWS = ["kapak", "yas", "kuram", "karsilastir", "beyin", "cizelge", "deneyler", "ders", "kaynakca"];
  function renderCurrent() {
    var v = state.view;
    if (v === "yas") { renderAgeStrip(); renderAgeDetail(); }
    else if (v === "kuram") { renderTheoryIndex(); renderTheoryDetail(); }
    else if (v === "cizelge") renderChart();
    else if (v === "deneyler") { renderExpControls(); renderExps(); }
    else if (A.views[v]) A.views[v].render();
  }
  A.renderCurrent = renderCurrent;
  function route() {
    var h = location.hash.replace("#", "");
    state.view = VIEWS.indexOf(h) > -1 ? h : "kapak";
    document.body.setAttribute("data-view", state.view);
    VIEWS.forEach(function (v) { var el = $("view-" + v); if (el) el.hidden = v !== state.view; });
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
