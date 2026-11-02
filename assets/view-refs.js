/* Kaynakça: doğrulanmış makaleler (DOI / PubMed), kuramların temel eserleri, genel kaynaklar. */
(function () {
  "use strict";
  var A = window.ATLAS, U = A.U, esc = U.esc;
  var view = document.getElementById("view-kaynakca");
  var q = "";

  function citedBy() {
    var map = {};
    Object.keys(A.expRefs || {}).forEach(function (eid) {
      (A.expRefs[eid] || []).forEach(function (k) { (map[k] = map[k] || []).push(eid); });
    });
    return map;
  }
  function caseMap() {
    var map = {};
    (A.cases || []).forEach(function (c) { (c.refs || []).forEach(function (k) { (map[k] = map[k] || []).push(c); }); });
    return map;
  }
  function item(r, back, cases) {
    var links = [];
    if (r.doi) links.push('<a href="https://doi.org/' + esc(r.doi) + '" target="_blank" rel="noopener">DOI</a>');
    if (r.pmid) links.push('<a href="https://pubmed.ncbi.nlm.nih.gov/' + esc(r.pmid) + '/" target="_blank" rel="noopener">PubMed</a>');
    var b = (back || []).map(function (eid) { var e = U.expById[eid]; return e ? '<button type="button" class="th-chip" data-exp="' + eid + '" style="--c:var(--f-neu)">' + esc(e.title) + "</button>" : ""; }).join("");
    b += (cases || []).map(function (c) { return '<button type="button" class="th-chip" data-case="' + c.id + '" style="--c:var(--accent)">Vaka: ' + esc(c.ageLabel + ", " + c.title) + "</button>"; }).join("");
    return "<li>" + esc(r.apa) + (links.length ? ' <span class="reflinks">' + links.join(" · ") + "</span>" : "") + (b ? '<div class="rel">' + b + "</div>" : "") + "</li>";
  }
  function match(s) { return !q || s.toLocaleLowerCase("tr").indexOf(q) > -1; }
  function list() {
    var refs = A.refs || {}, cb = citedBy(), cm = caseMap();
    var keys = Object.keys(refs).filter(function (k) { return (A.generalRefs || []).indexOf(k) < 0 && match(refs[k].apa); })
      .sort(function (a, b) { return refs[a].apa.localeCompare(refs[b].apa, "tr"); });
    var gen = (A.generalRefs || []).filter(function (k) { return refs[k] && match(refs[k].apa); });
    var prim = A.theories.filter(function (t) { return t.primary && t.primary.some(match); });
    var cdc = A.cdcMeta && match(A.cdcMeta.citation) ? '<section class="ref-sec"><h3>Gelişim basamakları</h3><ul class="refs"><li>' + esc(A.cdcMeta.citation) +
      ' <span class="reflinks"><a href="https://doi.org/' + esc(A.cdcMeta.doi) + '" target="_blank" rel="noopener">DOI</a> · <a href="https://pubmed.ncbi.nlm.nih.gov/' + esc(A.cdcMeta.pmid) + '/" target="_blank" rel="noopener">PubMed</a> · <a href="' + esc(A.cdcMeta.url) + '" target="_blank" rel="noopener">CDC kontrol listeleri</a></span><p class="src-note">' + esc(A.cdcMeta.method) + "</p></li></ul></section>" : "";
    U.$("refList").innerHTML = cdc +
      '<section class="ref-sec"><h3>Deneysel çalışmalar, meta-analizler, müdahale denemeleri ve klinik araçlar <span>' + keys.length + "</span></h3><ol class=\"refs\">" + keys.map(function (k) { return item(refs[k], cb[k], cm[k]); }).join("") + "</ol></section>" +
      (gen.length ? '<section class="ref-sec"><h3>Nörobiyoloji ve klinik genel kaynaklar <span>' + gen.length + '</span></h3><ul class="refs">' + gen.map(function (k) { return item(refs[k], null, cm[k]); }).join("") + "</ul></section>" : "") +
      '<section class="ref-sec"><h3>Kuramların temel eserleri</h3>' + prim.map(function (t) {
        return '<div class="ref-th"><button type="button" class="linkish" data-theory="' + t.id + '">' + esc(t.who + ": " + t.name) + '</button><ul class="refs">' + t.primary.filter(match).map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul></div>";
      }).join("") + "</section>";
  }
  function render() {
    U.$("refWrap").innerHTML = '<p class="hint">Makalelerin DOI numaraları Crossref üzerinden, PMID numaraları PubMed üzerinden tek tek doğrulanmıştır. Kitap ve bölümlerin DOI\'si yoktur; psikoloji dergilerinin bir kısmı PubMed\'de dizinlenmediğinden PMID verilmemiştir. Bir kaynağın altındaki düğmeler, o kaynağı kullanan deney kartlarını ve vakaları açar.</p>' +
      '<label class="search"><span class="sr">Kaynak ara</span><input id="refSearch" type="search" placeholder="Yazar, yıl ya da başlık ara" value="' + esc(q) + '"></label><div id="refList"></div>';
    list();
  }
  view.addEventListener("input", function (e) { if (e.target.id === "refSearch") { q = e.target.value.trim().toLocaleLowerCase("tr"); list(); } });
  view.addEventListener("click", function (e) {
    var t;
    if ((t = e.target.closest("[data-exp]"))) A.nav.exp(t.dataset.exp);
    else if ((t = e.target.closest("[data-case]"))) A.nav["case"](t.dataset.case);
    else if ((t = e.target.closest("[data-theory]"))) A.nav.theory(t.dataset.theory, null);
  });
  A.views.kaynakca = { render: render };
})();
