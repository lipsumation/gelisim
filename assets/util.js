/* Ortak yardımcılar ve veri birleştirme. Diğer betiklerden önce, verilerden sonra yüklenir. */
(function () {
  "use strict";
  var A = window.ATLAS;
  A.views = A.views || {};
  A.ages.sort(function (a, b) { return a.from - b.from; });

  /* Ek verileri birleştir */
  A.theories.forEach(function (t, i) {
    t._i = i;
    var x = A.theoryExtras && A.theoryExtras[t.id];
    if (x) { if (!t.clinic) t.clinic = x.clinic; if (!t.primary) t.primary = x.primary; }
    t._year = parseInt(t.years, 10) || 0;
  });
  A.ages.forEach(function (a) {
    var x = A.ageExtras && A.ageExtras[a.id];
    if (x) { a.msx = x.msx; a.dx = x.dx; a.tools = x.tools; }
    a.cdc = (A.cdc || []).filter(function (c) { return c.band === a.id; });
  });

  var famById = {}, famOrder = {}, thById = {}, expById = {};
  A.families.forEach(function (f, i) { famById[f.id] = f; famOrder[f.id] = i; });
  A.theories.sort(function (a, b) { return famOrder[a.fam] - famOrder[b.fam] || a._year - b._year || a._i - b._i; });
  A.theories.forEach(function (t) { thById[t.id] = t; });
  A.experiments.forEach(function (e) { expById[e.id] = e; e.kind = e.kind || ""; });

  var BOUNDS = A.ages.map(function (a) { return a.from; }).concat([A.ages[A.ages.length - 1].to]);
  var NB = A.ages.length;

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function num(y) { var r = Math.round(y * 10) / 10; return String(r).replace(".", ","); }
  function months(y) { return Math.round(y * 12); }
  function fmtAge(y) {
    if (y < 0) return "Gebelik";
    if (y === 0) return "Doğum";
    if (y < 2) return months(y) + " ay";
    return num(y) + " yaş";
  }
  function fmtRange(a, b) {
    if (b >= 90) return (a <= 0 ? "Doğum" : a < 2 ? months(a) + " ay" : num(a) + " yaş") + " ve sonrası";
    if (a < 0 && b <= 0) return "Gebelik";
    if (a < 0) return "Gebelik – " + fmtAge(b);
    if (b <= 2) return months(a) + "–" + months(b) + " ay";
    if (a < 2) return (a === 0 ? "0" : months(a) + " ay") + " – " + num(b) + " yaş";
    return num(a) + "–" + num(b) + " yaş";
  }
  function xPos(y) {
    if (y <= BOUNDS[0]) return 0;
    if (y >= BOUNDS[NB]) return 1;
    for (var i = 0; i < NB; i++) if (y < BOUNDS[i + 1]) return (i + (y - BOUNDS[i]) / (BOUNDS[i + 1] - BOUNDS[i])) / NB;
    return 1;
  }
  function ageAt(x) {
    x = Math.max(0, Math.min(1, x));
    var p = x * NB, i = Math.min(NB - 1, Math.floor(p));
    return BOUNDS[i] + (p - i) * (BOUNDS[i + 1] - BOUNDS[i]);
  }
  function bandOf(y) {
    for (var i = 0; i < NB; i++) if (y < A.ages[i].to) return A.ages[i];
    return A.ages[NB - 1];
  }
  function bandAge(b) { return b.to >= 90 ? 75 : (b.from + b.to) / 2; }
  function overlap(s, band) { return Math.min(s.to, band.to) - Math.max(s.from, band.from); }
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
  function famColor(id) { return famById[id] ? famById[id].color : "var(--muted)"; }
  function statusPill(st) { return '<span class="status s' + st + '">' + esc(A.status[st].label) + "</span>"; }
  function kindPill(e) { return e.kind === "mudahale" ? '<span class="status sk">Müdahale</span>' : ""; }
  function meter(n) {
    return '<span class="meter" aria-label="Kanıt düzeyi ' + n + '/4">' + [1, 2, 3, 4].map(function (k) { return "<i" + (k <= n ? ' class="on"' : "") + "></i>"; }).join("") + "</span>";
  }

  /* Şematik olgunlaşma endeksi (0-1): çapa noktaları arasında doğrusal enterpolasyon */
  function maturity(r, age) {
    var c = r.curve;
    if (age <= c[0][0]) return c[0][1];
    for (var i = 1; i < c.length; i++) {
      if (age <= c[i][0]) return c[i - 1][1] + (c[i][1] - c[i - 1][1]) * (age - c[i - 1][0]) / (c[i][0] - c[i - 1][0]);
    }
    return c[c.length - 1][1];
  }
  function maturitySlope(r, age) {
    var h = 0.02 * Math.max(1, Math.abs(age) / 2);
    return (maturity(r, age + h) - maturity(r, age - h)) / (2 * h);
  }
  function maturityRate(r, age) { return Math.abs(maturitySlope(r, age)); }

  /* Kaynak bağlantıları */
  function refLinks(keys) {
    if (!A.refs || !keys || !keys.length) return "";
    var items = keys.map(function (k) { return A.refs[k]; }).filter(Boolean);
    if (!items.length) return "";
    return '<ul class="refs">' + items.map(function (r) {
      var links = [];
      if (r.doi) links.push('<a href="https://doi.org/' + esc(r.doi) + '" target="_blank" rel="noopener">DOI</a>');
      if (r.pmid) links.push('<a href="https://pubmed.ncbi.nlm.nih.gov/' + esc(r.pmid) + '/" target="_blank" rel="noopener">PubMed</a>');
      return "<li>" + esc(r.apa) + (links.length ? ' <span class="reflinks">' + links.join(" · ") + "</span>" : "") + "</li>";
    }).join("") + "</ul>";
  }

  /* Kuram ailesi simgeleri (gravür çizgisi): göz, kesişen daireler, basamak, zincir, terazi, kum saati, sarmal, dallanan yol */
  var GLYPH = {
    psa: '<path d="M1.5 8c2-3.2 4.2-4.6 6.5-4.6s4.5 1.4 6.5 4.6c-2 3.2-4.2 4.6-6.5 4.6S3.5 11.2 1.5 8z"/><circle cx="8" cy="8" r="2.1"/>',
    pss: '<circle cx="5.8" cy="8" r="3.8"/><circle cx="10.2" cy="8" r="3.8"/>',
    bil: '<path d="M1.5 14.5h4v-4h4v-4h4v-4"/>',
    bag: '<rect x="1.2" y="5.3" width="7.6" height="5.4" rx="2.7"/><rect x="7.2" y="5.3" width="7.6" height="5.4" rx="2.7"/>',
    ahl: '<path d="M8 2.2v11.6M4.5 13.8h7M2.8 4.6h10.4M2.8 4.6L1.2 8.4h3.2zM13.2 4.6l-1.6 3.8h3.2z"/>',
    ymb: '<path d="M3.8 1.8h8.4M3.8 14.2h8.4M4.8 1.8c0 3.6 6.4 3.6 6.4 6.2s-6.4 2.6-6.4 6.2M11.2 1.8c0 3.6-6.4 3.6-6.4 6.2s6.4 2.6 6.4 6.2"/>',
    biy: '<path d="M5 1.5c0 3.8 6 3.6 6 6.5s-6 2.7-6 6.5M11 1.5c0 3.8-6 3.6-6 6.5s6 2.7 6 6.5M5.8 4.5h4.4M5.8 11.5h4.4"/>',
    gps: '<path d="M1.8 14.2c3.2 0 3-6.2 6.2-6.2s3-6 6.2-6M8 8c3.2 0 3 6.2 6.2 6.2"/><circle cx="1.8" cy="14.2" r="1.1"/>'
  };
  function famIcon(id, cls) {
    return '<svg class="glyph' + (cls ? " " + cls : "") + '" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (GLYPH[id] || '<circle cx="8" cy="8" r="3"/>') + "</svg>";
  }
  function roman(n) {
    var v = [[10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]], r = "";
    v.forEach(function (p) { while (n >= p[0]) { r += p[1]; n -= p[0]; } });
    return r;
  }

  A.U = {
    famIcon: famIcon, roman: roman,
    $: function (id) { return document.getElementById(id); },
    esc: esc, num: num, fmtAge: fmtAge, fmtRange: fmtRange, xPos: xPos, ageAt: ageAt, bandOf: bandOf, bandAge: bandAge,
    overlap: overlap, pack: pack, famColor: famColor, statusPill: statusPill, kindPill: kindPill, meter: meter,
    maturity: maturity, maturityRate: maturityRate, maturitySlope: maturitySlope, refLinks: refLinks,
    famById: famById, famOrder: famOrder, thById: thById, expById: expById, BOUNDS: BOUNDS, NB: NB
  };
})();
