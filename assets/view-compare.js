/* Karşılaştırma modu: 2-3 kuramı aynı yaş satırlarında yan yana gösterir. */
(function () {
  "use strict";
  var A = window.ATLAS, U = A.U, esc = U.esc, thById = U.thById;
  var view = document.getElementById("view-karsilastir");

  function sameSet(a, b) { return a.length === b.length && a.every(function (x) { return b.indexOf(x) > -1; }); }
  function options(sel, allowNone) {
    var html = allowNone ? '<option value="">Üçüncü kuram yok</option>' : "";
    A.families.forEach(function (f) {
      var ts = A.theories.filter(function (t) { return t.fam === f.id; });
      html += '<optgroup label="' + esc(f.name) + '">' + ts.map(function (t) {
        return '<option value="' + t.id + '"' + (t.id === sel ? " selected" : "") + ">" + esc(t.who.split(/;/)[0] + ": " + t.name) + "</option>";
      }).join("") + "</optgroup>";
    });
    return html;
  }
  function render() {
    var st = A.state;
    var ids = st.compare.filter(function (id) { return thById[id]; });
    if (ids.length < 2) ids = ["freud", "erikson"];
    st.compare = ids;
    var ts = ids.map(function (id) { return thById[id]; });
    var preset = (A.comparisons || []).find(function (c) { return sameSet(c.ids, ids); });
    var controls = '<div class="cmp-controls">' + [0, 1, 2].map(function (i) {
      return '<label class="cmp-sel"><span>' + (i + 1) + '. kuram</span><select id="cmp' + i + '" data-i="' + i + '">' + options(ids[i] || "", i === 2) + "</select></label>";
    }).join("") + '<label class="chk"><input type="checkbox" id="cmpNeuro"' + (st.compareNeuro ? " checked" : "") + "> Nörobiyoloji sütunu</label><button type=\"button\" class=\"btn\" id=\"cmpSun\">▶ Karşılaştırmayı sun</button></div>" +
      '<div class="cmp-presets"><span class="lbl">Hazır karşılaştırmalar</span>' + (A.comparisons || []).map(function (c) {
        return '<button type="button" class="btn ghost' + (preset === c ? " on" : "") + '" data-preset="' + c.ids.join(",") + '">' + esc(c.title) + "</button>";
      }).join("") + "</div>";
    var note = preset ? '<section class="panel cmp-note"><div class="panel-title">Karşılaştırma notu</div><h3>' + esc(preset.title) + "</h3><p>" + esc(preset.note) + "</p></section>" : "";

    var neuro = st.compareNeuro;
    var head = '<thead><tr><th class="c-age">Yaş dönemi</th>' + (neuro ? '<th class="c-neu">Nörobiyoloji</th>' : "") + ts.map(function (t) {
      return '<th style="--c:' + U.famColor(t.fam) + '"><button type="button" class="c-th" data-theory="' + t.id + '"><span class="c-fam">' + U.famIcon(t.fam) + esc(U.famById[t.fam].short) + "</span><b>" + esc(t.name) + "</b><span>" + esc(t.who) + " · " + esc(t.years) + "</span>" + U.meter(t.ev) + "</button></th>";
    }).join("") + "</tr></thead>";
    function infoRow(label, fn) {
      return '<tr class="c-info"><th scope="row">' + esc(label) + "</th>" + (neuro ? "<td></td>" : "") + ts.map(function (t) { return "<td>" + fn(t) + "</td>"; }).join("") + "</tr>";
    }
    var rows = infoRow("Ana fikir", function (t) { return esc(t.core); }) + infoRow("Gelişimin motoru", function (t) { return esc(t.engine); });
    var seen = {};
    A.ages.forEach(function (b) {
      var cells = ts.map(function (t) {
        return t.stages.map(function (s, i) { return { s: s, i: i }; }).filter(function (o) { return U.overlap(o.s, b) > 1e-6; });
      });
      if (!cells.some(function (c) { return c.length; })) return;
      rows += '<tr><th scope="row" class="c-age"><button type="button" class="linkish" data-goage="' + b.id + '">' + esc(b.range) + "</button><span>" + esc(b.name) + "</span></th>" +
        (neuro ? '<td class="c-neu"><ul class="clean">' + b.neuro.slice(0, 2).map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + "</ul></td>" : "") +
        cells.map(function (list, k) {
          var t = ts[k];
          if (!list.length) return '<td class="c-empty">—</td>';
          return '<td style="--c:' + U.famColor(t.fam) + '">' + list.map(function (o) {
            var key = t.id + ":" + o.i;
            if (seen[key]) return '<p class="c-cont">↳ sürüyor: ' + esc(o.s.name) + "</p>";
            seen[key] = true;
            return '<div class="c-stage"><button type="button" class="c-sn" data-theory="' + t.id + '" data-stage="' + o.i + '">' + esc(o.s.name) + '</button><span class="c-r">' + esc(U.fmtRange(o.s.from, o.s.to)) + "</span><p>" + esc(o.s.task) + "</p></div>";
          }).join("") + "</td>";
        }).join("") + "</tr>";
    });
    rows += infoRow("Biyolojik bakış", function (t) { return esc(t.bio[0] || ""); }) +
      infoRow("Klinik uygulama", function (t) { return esc(t.clinic || "-"); }) +
      infoRow("Başlıca eleştiri", function (t) { return esc(t.crit[0] || ""); }) +
      infoRow("Kanıt", function (t) { return "<b>" + esc(A.evidenceScale[t.ev]) + ".</b> " + esc(t.evNote) + ' <span class="c-n">' + A.relatedExps(t).length + " çalışma</span>"; });

    U.$("cmpWrap").innerHTML = controls + note + '<div class="cmp-scroll"><table class="cmp' + (neuro ? " with-neu" : "") + '">' + head + "<tbody>" + rows + "</tbody></table></div>";
  }

  view.addEventListener("change", function (e) {
    var st = A.state;
    if (e.target.id === "cmpNeuro") { st.compareNeuro = e.target.checked; render(); return; }
    if (e.target.dataset.i == null) return;
    var vals = [0, 1, 2].map(function (i) { var s = U.$("cmp" + i); return s ? s.value : ""; }).filter(Boolean);
    var uniq = vals.filter(function (v, i) { return vals.indexOf(v) === i; });
    if (uniq.length >= 2) st.compare = uniq;
    A.save(); render();
  });
  view.addEventListener("click", function (e) {
    var t;
    if ((t = e.target.closest("#cmpSun"))) A.deck.open({ type: "compare", ids: A.state.compare });
    else if ((t = e.target.closest("[data-preset]"))) { A.state.compare = t.dataset.preset.split(","); A.save(); render(); }
    else if ((t = e.target.closest("[data-goage]"))) A.nav.age(t.dataset.goage);
    else if ((t = e.target.closest("[data-theory]"))) A.nav.theory(t.dataset.theory, t.dataset.stage != null ? +t.dataset.stage : null);
  });

  A.views.karsilastir = { render: render };
})();
