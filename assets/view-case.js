/* Vaka modu (#vaka): adım adım açılan eğitim vakaları; bulguların gelişimsel okuması, kuramların yorumu,
   beyin, ayırıcı tanı, değerlendirme araçları ve kanıta dayalı yaklaşım. Sunum için A.deck'e "case" türü ekler. */
(function () {
  "use strict";
  var A = window.ATLAS, U = A.U, esc = U.esc, thById = U.thById;
  var view = document.getElementById("view-vaka");
  var CASES = A.cases || [];
  var byId = {};
  CASES.forEach(function (c) { byId[c.id] = c; });
  var LEVEL = { norm: ["Beklenen", "ok"], izle: ["İzlenmeli", "mid"], bayrak: ["Kırmızı bayrak", "bad"] };
  var KEY = "ruhsal-atlas-vaka";

  /* Durum: seçili vaka, okuma kipi (adım adım / tümü), vaka başına açılan adım sayısı ve öğrencinin ön formülasyonu */
  var S = { id: CASES.length ? CASES[0].id : null, mode: "adim", open: {}, draft: {} };
  try {
    var saved = JSON.parse(localStorage.getItem(KEY) || "{}");
    if (saved.id && byId[saved.id]) S.id = saved.id;
    if (saved.mode === "tam" || saved.mode === "adim") S.mode = saved.mode;
    if (saved.open && typeof saved.open === "object") S.open = saved.open;
    if (saved.draft && typeof saved.draft === "object") S.draft = saved.draft;
  } catch (e) { /* depolama yoksa varsayılanlar */ }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* yok say */ } }

  /* Yardımcılar */
  function stageAt(t, age, idx) {
    if (idx != null && t.stages[idx]) return { s: t.stages[idx], i: idx };
    var hit = null;
    t.stages.forEach(function (s, i) { if (!hit && s.from <= age && age < s.to) hit = { s: s, i: i }; });
    return hit;
  }
  function lensInfo(c, l) {
    var t = thById[l[0]];
    if (!t) return null;
    return { t: t, text: l[1], st: stageAt(t, c.age, l[2]) };
  }
  function band(c) { return A.ages.find(function (a) { return a.id === c.band; }) || U.bandOf(c.age); }
  function months(label) { var n = parseFloat(label); return /yaş/.test(label) ? n * 12 : n; }
  function cdcFor(c) {
    if (!A.cdc || c.age > 5.5) return null;
    var m = c.age * 12, prev = null, next = null;
    A.cdc.forEach(function (k) { var km = months(k.age); if (km <= m + 0.01) prev = k; else if (!next) next = k; });
    return { prev: prev, next: next };
  }
  function opened(c) { return S.mode === "tam" ? c.steps.length + 1 : Math.max(1, Math.min(S.open[c.id] || 1, c.steps.length + 1)); }
  function pill(level) { var L = LEVEL[level] || LEVEL.izle; return '<span class="lv lv-' + L[1] + '">' + esc(L[0]) + "</span>"; }
  function regionName(id) { var r = A.brain.regions.find(function (x) { return x.id === id; }); return r ? r.name : id; }
  function sec(id, title, inner, aside) { return '<section class="cf-sec" id="cs-' + id + '"><div class="section-h"><h3>' + esc(title) + "</h3>" + (aside ? "<span>" + aside + "</span>" : "") + "</div>" + inner + "</section>"; }
  function shortTitle(c) {
    var t = c.title.indexOf(":") > -1 ? c.title.replace(/^[^:]+:\s*/, "") : c.title;
    t = t.replace(/^'(.*)'$/, "$1");
    return t.charAt(0).toLocaleUpperCase("tr") + t.slice(1);
  }
  function casesForTheory(tid) {
    return CASES.filter(function (c) { return c.lenses.some(function (l) { return l[0] === tid; }); });
  }

  /* ---------- görünüm ---------- */
  function strip() {
    return '<div class="case-strip" role="listbox" aria-label="Vakalar">' + CASES.map(function (c, i) {
      var b = band(c);
      return '<button type="button" class="case-card" role="option" data-case="' + c.id + '" aria-selected="' + (c.id === S.id) + '">' +
        '<span class="cc-n">' + U.roman(i + 1) + '</span><span class="cc-age">' + esc(c.ageLabel) + '</span><span class="cc-t">' + esc(shortTitle(c)) + "</span>" +
        '<span class="cc-b">' + esc(b ? b.name : "") + "</span></button>";
    }).join("") + "</div>";
  }
  function stepsHtml(c, n) {
    return '<ol class="cf-steps">' + c.steps.map(function (s, i) {
      if (i >= n) return "";
      return '<li class="cf-step' + (i === n - 1 && S.mode === "adim" ? " fresh" : "") + '"><div class="cf-sn">' + U.roman(i + 1) + '</div><div class="cf-sb"><h4>' + esc(s.h) + "</h4><p>" + esc(s.text) + "</p>" +
        (s.q ? '<p class="cf-think"><b>Durun ve düşünün.</b> ' + esc(s.q) + "</p>" : "") + "</div></li>";
    }).join("") + "</ol>";
  }
  function cdcBlock(c) {
    var k = cdcFor(c);
    if (!k || !k.prev) return "";
    var DOM = [["sosyal", "Sosyal-duygusal"], ["dil", "Dil ve iletişim"], ["bilis", "Bilişsel"], ["motor", "Motor"]];
    function list(cp) {
      return '<div class="cf-cdc-col"><h5>CDC ' + esc(cp.age) + "</h5>" + DOM.map(function (d) {
        return cp[d[0]] && cp[d[0]].length ? '<div><b>' + esc(d[1]) + "</b><ul>" + cp[d[0]].map(function (m) { return "<li>" + esc(m) + "</li>"; }).join("") + "</ul></div>" : "";
      }).join("") + "</div>";
    }
    return '<details class="cf-cdc"><summary>Karşılaştırma ölçütü: CDC ' + esc(k.prev.age) + (k.next ? " ve " + esc(k.next.age) : "") + " kontrol listeleri</summary>" +
      '<p class="hint">Basamaklar çocukların en az %75\'inin o yaşta ulaştığı becerilerdir (Zubler ve ark., 2022). Bir sonraki kontrol listesi, izlemde nelere bakılacağını gösterir.</p>' +
      '<div class="cf-cdc-grid">' + list(k.prev) + (k.next ? list(k.next) : "") + "</div></details>";
  }
  function analysis(c) {
    var b = band(c);
    var html = "";
    var nav = [];
    function add(id, title, inner, aside) { nav.push([id, title]); html += sec(id, title, inner, aside); }
    add("bulgu", "Bulguların gelişimsel okuması",
      '<div class="cmp-scroll"><table class="cmp cf-find"><thead><tr><th>Bulgu</th><th>Değerlendirme</th><th>Gerekçe</th></tr></thead><tbody>' +
      c.findings.map(function (f) { return '<tr><th scope="row">' + esc(f[0]) + "</th><td>" + pill(f[1]) + "</td><td>" + esc(f[2]) + "</td></tr>"; }).join("") + "</tbody></table></div>" + cdcBlock(c),
      c.findings.filter(function (f) { return f[1] === "bayrak"; }).length + " kırmızı bayrak");
    add("kuram", "Kuramlar bu vakayı nasıl okur?",
      '<div class="cf-lenses">' + c.lenses.map(function (l) {
        var x = lensInfo(c, l);
        if (!x) return "";
        var col = U.famColor(x.t.fam);
        return '<article class="cf-lens" style="--c:' + col + '"><div class="who">' + U.famIcon(x.t.fam) + esc(x.t.who) + "</div>" +
          "<h4>" + esc(x.t.name) + "</h4>" +
          (x.st ? '<div class="st">' + esc(x.st.s.name) + " · " + esc(U.fmtRange(x.st.s.from, x.st.s.to)) + "</div>" : '<div class="st">Kuramın evreleri bu yaşı kapsamaz; kavram düzeyinde okuma</div>') +
          "<p>" + esc(x.text) + '</p><button type="button" class="linkish" data-theory="' + x.t.id + '"' + (x.st ? ' data-stage="' + x.st.i + '"' : "") + ">Kurama git →</button></article>";
      }).join("") + "</div>", c.lenses.length + " kuram");
    var fig = A.views.beyin && A.views.beyin.mini ? A.views.beyin.mini(c.age) : "";
    add("beyin", "Nörobiyolojik bağlam",
      '<div class="cf-brain"><button type="button" class="mini-brain" data-brain="' + c.age + '" aria-label="Beyin levhalarında aç">' + fig + "<span>Beyin levhalarında aç →</span></button>" +
      '<div><p>' + esc(c.brain.text) + '</p><div class="cf-regions">' + c.brain.regions.map(function (r) { return '<button type="button" class="btn ghost" data-brain="' + c.age + '" data-region="' + r + '">' + esc(regionName(r)) + "</button>"; }).join("") + "</div></div></div>");
    add("ayirici", "Ayırıcı tanı",
      '<div class="cmp-scroll"><table class="cmp cf-ddx"><thead><tr><th>Olasılık</th><th>Sınıflama</th><th>Lehine</th><th>Aleyhine ya da dikkat</th></tr></thead><tbody>' +
      c.ddx.map(function (d) { return '<tr><th scope="row">' + esc(d[0]) + '</th><td><span class="tag">' + esc(d[1]) + "</span></td><td>" + esc(d[2]) + "</td><td>" + esc(d[3]) + "</td></tr>"; }).join("") + "</tbody></table></div>",
      "Ölçütler için DSM-5-TR ve DC:0-5'e başvurun");
    add("arac", "Değerlendirme ve tarama", '<dl class="measures">' + c.tools.map(function (t) { return "<div><dt>" + esc(t[0]) + "</dt><dd>" + esc(t[1]) + "</dd></div>"; }).join("") + "</dl>");
    add("yaklasim", "Kanıta dayalı yaklaşım", '<ol class="cf-plan">' + c.plan.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ol>");
    add("sentez", "Bütünleştirici formülasyon", '<section class="cf-synth"><p>' + esc(c.synth) + "</p></section>" +
      '<ul class="cf-pearls">' + c.pearls.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>");
    if (c.exps && c.exps.length) add("kanit", "İlgili çalışmalar", A.expMini(c.exps), c.exps.length + " çalışma");
    add("soru", "Tartışma soruları", '<ol class="cf-qs">' + c.qs.map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") + "</ol>");
    if (c.refs && c.refs.length) add("kaynak", "Kaynaklar", U.refLinks(c.refs));
    return { html: html, nav: nav, b: b };
  }
  function render() {
    if (!view) return;
    var wrap = document.getElementById("caseWrap");
    var c = byId[S.id] || CASES[0];
    if (!c) { wrap.innerHTML = '<p class="empty">Vaka bulunamadı.</p>'; return; }
    var i = CASES.indexOf(c), b = band(c), n = opened(c);
    var stepsDone = n > c.steps.length;
    var draft = S.draft[c.id] || "";
    var head = '<header class="cf-head"><div class="cf-kicker"><span>Vaka ' + U.roman(i + 1) + "</span><span>" + esc(c.ageLabel) + "</span>" +
      (b ? '<button type="button" class="linkish" data-goage="' + b.id + '">' + esc(b.name) + " · " + esc(b.range) + " →</button>" : "") + "</div>" +
      "<h2>" + esc(c.title) + '</h2><p class="cf-ask">' + esc(c.ask) + "</p>" +
      '<div class="tags">' + c.tags.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + '<span class="tag rare">Eğitim amaçlı kurgusal vaka</span></div>' +
      '<div class="cf-actions"><div class="seg" role="group" aria-label="Okuma kipi"><button type="button" data-mode="adim" aria-pressed="' + (S.mode === "adim") + '">Adım adım</button><button type="button" data-mode="tam" aria-pressed="' + (S.mode === "tam") + '">Tümünü göster</button></div>' +
      '<button type="button" class="btn" id="caseSun">▶ Vakayı sun</button>' +
      (S.mode === "adim" && n > 1 ? '<button type="button" class="btn ghost" id="caseReset">Baştan başla</button>' : "") + "</div></header>";
    var body = stepsHtml(c, Math.min(n, c.steps.length));
    if (!stepsDone) {
      body += '<div class="cf-next"><button type="button" class="btn" id="caseNext">' + (n < c.steps.length ? "Sonraki adımı aç (" + (n + 1) + "/" + c.steps.length + ")" : "Çözümlemeyi aç") + "</button>" +
        '<span class="hint">' + (n < c.steps.length ? "Her adımda önce kendi düşüncenizi oluşturun." : "Çözümlemeye geçmeden ön formülasyonunuzu yazabilirsiniz.") + "</span></div>";
    }
    body += '<section class="cf-draft"><label for="caseDraft">Ön formülasyonunuz ve ayırıcı tanınız</label><textarea id="caseDraft" rows="3" placeholder="Örneğin: en olası açıklama, dışlanması gerekenler, ilk adım…">' + esc(draft) + '</textarea><span class="hint">Yalnızca bu tarayıcıda saklanır.</span></section>';
    var an = stepsDone ? analysis(c) : null;
    var navHtml = an ? '<nav class="td-nav" aria-label="Bu vakada"><span>Çözümleme</span>' + an.nav.map(function (x) { return '<button type="button" data-jump="cs-' + x[0] + '">' + esc(x[1]) + "</button>"; }).join("") + "</nav>" : "";
    wrap.innerHTML = strip() + '<article class="case-file">' + head + body + navHtml + (an ? an.html : "") +
      '<p class="cf-foot">Vakalar eğitim amacıyla kurgulanmıştır; gerçek kişilerle ilgisi yoktur. Tanı ölçütleri için DSM-5-TR ve DC:0-5 el kitaplarının kendisine başvurulmalıdır. Bu kaynak klinik değerlendirmenin yerini tutmaz.</p></article>';
  }

  function go(id) { if (!byId[id]) return; S.id = id; save(); if (location.hash !== "#vaka") location.hash = "vaka"; else { render(); window.scrollTo(0, 0); } }
  if (view) {
    view.addEventListener("click", function (e) {
      var t, c = byId[S.id];
      if ((t = e.target.closest("[data-case]"))) { S.id = t.dataset.case; save(); render(); var f = view.querySelector(".case-file"); if (f && window.scrollY > f.offsetTop) f.scrollIntoView({ block: "start" }); }
      else if ((t = e.target.closest("[data-mode]"))) { S.mode = t.dataset.mode; save(); render(); }
      else if ((t = e.target.closest("#caseNext"))) {
        S.open[c.id] = opened(c) + 1; save(); render();
        var steps = view.querySelectorAll(".cf-step");
        var target = S.open[c.id] > c.steps.length ? view.querySelector(".td-nav") : steps[steps.length - 1];
        if (target) target.scrollIntoView({ block: "start", behavior: "smooth" });
      }
      else if ((t = e.target.closest("#caseReset"))) { S.open[c.id] = 1; save(); render(); }
      else if ((t = e.target.closest("#caseSun"))) A.deck.open({ type: "case", id: c.id });
      else if ((t = e.target.closest("[data-jump]"))) { var el = document.getElementById(t.dataset.jump); if (el) el.scrollIntoView({ block: "start" }); }
      else if ((t = e.target.closest("[data-goage]"))) A.nav.age(t.dataset.goage);
      else if ((t = e.target.closest("[data-theory]"))) A.nav.theory(t.dataset.theory, t.dataset.stage != null ? +t.dataset.stage : null);
      else if ((t = e.target.closest("[data-brain]"))) A.nav.brain(+t.dataset.brain, t.dataset.region || null);
      else if ((t = e.target.closest("[data-exp]"))) A.nav.exp(t.dataset.exp);
    });
    view.addEventListener("input", function (e) {
      if (e.target.id === "caseDraft") { S.draft[S.id] = e.target.value.slice(0, 4000); save(); }
    });
    view.addEventListener("keydown", function (e) {
      var strip = e.target.closest && e.target.closest(".case-strip");
      if (!strip || (e.key !== "ArrowRight" && e.key !== "ArrowLeft")) return;
      var i = CASES.findIndex(function (c) { return c.id === S.id; }) + (e.key === "ArrowRight" ? 1 : -1);
      if (i < 0 || i >= CASES.length) return;
      e.preventDefault(); S.id = CASES[i].id; save(); render();
      var btn = view.querySelector('[data-case="' + S.id + '"]'); if (btn) btn.focus();
    });
  }

  A.views.vaka = { render: render, go: go, casesForTheory: casesForTheory, stageAt: stageAt, byId: byId, levels: LEVEL, cdcFor: cdcFor, regionName: regionName };
})();
