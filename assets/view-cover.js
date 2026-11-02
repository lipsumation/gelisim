/* Kapak: başlık levhası, kuram ailelerinin yaşam boyu akış grafiği (streamgraph), içindekiler, özet. */
(function () {
  "use strict";
  var A = window.ATLAS, U = A.U, esc = U.esc;
  var view = document.getElementById("view-kapak");
  var W = 1000, H = 300, TOP = 46, N = 260;
  var model = null;

  function compute() {
    var fams = A.families.map(function (f) { return f.id; });
    var rows = [];
    for (var i = 0; i <= N; i++) {
      var x = i / N, age = U.ageAt(x), row = {};
      fams.forEach(function (fid) {
        row[fid] = A.theories.filter(function (t) {
          return t.fam === fid && t.stages.some(function (s) { return s.from <= age && age < s.to; });
        }).length;
      });
      rows.push({ x: x, age: age, c: row });
    }
    /* hafif yumuşatma */
    var sm = rows.map(function (r, i) {
      var o = { x: r.x, age: r.age, c: {} };
      fams.forEach(function (fid) {
        var sum = 0, n = 0;
        for (var k = -3; k <= 3; k++) { var q = rows[i + k]; if (q) { sum += q.c[fid]; n++; } }
        o.c[fid] = sum / n;
      });
      return o;
    });
    var max = Math.max.apply(null, sm.map(function (r) { return fams.reduce(function (a, f) { return a + r.c[f]; }, 0); }));
    var k = (H - TOP - 40) / max, mid = TOP + (H - TOP - 30) / 2;
    var layers = fams.map(function () { return { top: [], bot: [] }; });
    sm.forEach(function (r) {
      var total = fams.reduce(function (a, f) { return a + r.c[f]; }, 0);
      var y = mid - total * k / 2;
      fams.forEach(function (f, j) {
        var h = r.c[f] * k;
        layers[j].top.push([r.x * W, y]); layers[j].bot.push([r.x * W, y + h]);
        y += h;
      });
    });
    /* ortalama kortikal olgunlaşma (şematik) */
    var cortical = A.brain.regions.filter(function (r) { return !r.deep && r.id !== "brainstem" && r.id !== "cerebellum"; });
    var mat = sm.map(function (r) {
      var m = cortical.reduce(function (a, reg) { return a + U.maturity(reg, r.age); }, 0) / cortical.length;
      return [r.x * W, TOP - 8 - m * (TOP - 16)];
    });
    model = { fams: fams, rows: rows, sm: sm, layers: layers, k: k, mat: mat };
  }
  function pts(arr) { return arr.map(function (p) { return p[0].toFixed(1) + "," + p[1].toFixed(1); }).join(" "); }

  function streamSvg() {
    if (!model) compute();
    var defs = "", body = "", labels = "";
    model.fams.forEach(function (fid, j) {
      var f = U.famById[fid], L = model.layers[j];
      defs += '<pattern id="hatch-' + fid + '" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(' + (35 + j * 14) + ')">' +
        '<rect width="5" height="5" style="fill:color-mix(in srgb, ' + f.color + ' 16%, var(--surface))"/><line x1="0" y1="0" x2="0" y2="5" style="stroke:' + f.color + ';stroke-width:1.1;stroke-opacity:0.75"/></pattern>';
      var d = "M " + pts(L.top).replace(/ /g, " L ") + " L " + pts(L.bot.slice().reverse()).replace(/ /g, " L ") + " Z";
      body += '<path d="' + d + '" class="stream" data-fam="' + fid + '" style="fill:url(#hatch-' + fid + ');stroke:' + f.color + '"/>';
      var best = 0, bi = 0;
      L.top.forEach(function (p, i) { var h = L.bot[i][1] - p[1]; if (h > best && i > 8 && i < N - 30) { best = h; bi = i; } });
      if (best > 15) {
        var lx = L.top[bi][0], ly = (L.top[bi][1] + L.bot[bi][1]) / 2 + 5;
        labels += '<text x="' + lx.toFixed(0) + '" y="' + ly.toFixed(0) + '" class="stream-l" style="fill:' + f.color + '">' + esc(f.short) + "</text>";
      }
    });
    var ticks = [[-0.75, "Gebelik"], [0, "Doğum"], [1, "1"], [3, "3"], [6, "6"], [12, "12"], [18, "18"], [25, "25"], [40, "40"], [65, "65 yaş"]].map(function (t) {
      var x = Math.max(4, U.xPos(t[0]) * W);
      return '<line x1="' + x + '" x2="' + x + '" y1="' + TOP + '" y2="' + (H - 22) + '" class="tick-l"/><text x="' + x + '" y="' + (H - 6) + '" class="tick-t">' + t[1] + "</text>";
    }).join("");
    var mat = '<polyline points="' + pts(model.mat) + '" class="mat-line"/><text x="8" y="12" class="mat-t">Ortalama kortikal olgunlaşma (şematik)</text>';
    return '<svg viewBox="0 0 ' + W + " " + H + '" class="stream-svg" role="img" aria-label="Kuram ailelerinin yaşam boyu dağılımı"><defs>' + defs + "</defs>" + ticks + mat + body + labels + "</svg>";
  }

  function contents() {
    var items = [
      ["yas", "Yaş dönemleri", "CDC 2022 basamakları, beyin, psikopatoloji penceresi, tarama araçları"],
      ["kuram", "Kuramlar", A.theories.length + " kuramın evreleri, kanıtı, eleştirisi ve klinik karşılığı"],
      ["karsilastir", "Karşılaştırma", "Kuramları aynı yaş satırlarında yan yana okuma"],
      ["beyin", "Beyin levhaları", "Gray's Anatomy levhaları üzerinde bölgelerin olgunlaşması"],
      ["cizelge", "Çizelge", "Bütün kuramlar ve nörobiyolojik izler tek eksende"],
      ["deneyler", "Deneyler", A.experiments.length + " çalışma, müdahale denemeleri ve kanıt durumu"],
      ["ders", "Ders ve sunum", "Hazır ders akışları, sunum modu, tartışma soruları"],
      ["kaynakca", "Kaynakça", "DOI ve PubMed ile doğrulanmış kaynaklar"]
    ];
    return '<ol class="toc">' + items.map(function (it, i) {
      return '<li><a href="#' + it[0] + '"><span class="toc-n">' + U.roman(i + 1) + '</span><span class="toc-t">' + esc(it[1]) + '</span><span class="toc-d">' + esc(it[2]) + "</span></a></li>";
    }).join("") + "</ol>";
  }

  function render() {
    var rare = A.theories.filter(function (t) { return t.rare; }).length;
    var cdcN = (A.cdc || []).reduce(function (n, c) { return n + c.sosyal.length + c.dil.length + c.bilis.length + c.motor.length; }, 0);
    var rct = A.experiments.filter(function (e) { return e.kind === "mudahale"; }).length;
    U.$("coverWrap").innerHTML =
      '<div class="cover-plate">' +
      '<div class="cover-top"><span>Levha I</span><span>Psikiyatri ve çocuk psikiyatrisi için</span><span>MMXXVI</span></div>' +
      '<h1 class="cover-title">Ruhsal Gelişim Atlası</h1>' +
      '<p class="cover-sub">Doğum öncesinden yaşlılığa: ' + A.theories.length + " kuram, " + U.NB + " yaş dönemi, beynin olgunlaşması ve kanıt</p>" +
      '<figure class="cover-fig"><div class="stream-wrap" id="streamWrap">' + streamSvg() + '<div class="sweep" aria-hidden="true"></div><div class="guide" id="streamGuide" hidden><span></span></div></div>' +
      "<figcaption>Her şerit bir kuram ailesidir; kalınlığı, o yaşta kaç kuramın bir evre tanımladığını gösterir. Üstteki ince çizgi ortalama kortikal olgunlaşmadır. Bir yaşı açmak için grafiğe dokunun.</figcaption></figure>" +
      '<div class="cover-actions"><a class="btn" href="#yas">Yaşa göre keşfet</a><a class="btn ghost" href="#kuram">Kuramları incele</a><a class="btn ghost" href="#beyin">Beyin levhaları</a><a class="btn ghost" href="#ders">Ders ve sunum modu</a></div>' +
      "</div>" +
      '<div class="cover-cols"><section><h2>İçindekiler</h2>' + contents() + "</section>" +
      '<section><h2>Bu atlasta</h2><dl class="cover-stats"><dt>' + A.theories.length + "</dt><dd>kuram; " + rare + " tanesi ders kitaplarında az yer alır</dd><dt>" + cdcN + "</dt><dd>CDC 2022 gelişim basamağı (0-5 yaş, Türkçe)</dd><dt>" + A.experiments.length + "</dt><dd>deney ve çalışma; " + rct + " müdahale denemesi</dd><dt>" + Object.keys(A.refs || {}).length + "</dt><dd>DOI ve PubMed ile doğrulanmış kaynak</dd><dt>" + A.brain.regions.length + "</dt><dd>beyin bölgesi, iki gravür levhası üzerinde</dd></dl>" +
      '<h3>Kuram aileleri</h3><ul class="fam-legend">' + A.families.map(function (f) { return '<li style="--c:' + f.color + '">' + U.famIcon(f.id) + "<span>" + esc(f.name) + "</span></li>"; }).join("") + "</ul></section></div>" +
      '<p class="src-note cover-credit">' + esc(A.brain.credit) + " Gelişim basamakları: " + esc(A.cdcMeta ? A.cdcMeta.citation : "") + "</p>";
  }

  function onMove(e) {
    var wrap = U.$("streamWrap"); if (!wrap || !model) return;
    var r = wrap.getBoundingClientRect(), x = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    var row = model.rows[Math.round(x * N)], band = U.bandOf(row.age);
    var g = U.$("streamGuide"); g.hidden = false; g.style.left = (x * 100) + "%";
    var total = model.fams.reduce(function (a, f) { return a + row.c[f]; }, 0);
    g.firstChild.innerHTML = "<b>" + esc(U.fmtAge(row.age < 0 ? -0.3 : row.age)) + "</b> · " + esc(band.name) + "<br>" + total + " kuram: " +
      model.fams.filter(function (f) { return row.c[f]; }).map(function (f) { return esc(U.famById[f].short) + " " + row.c[f]; }).join(", ");
    g.classList.toggle("flip", x > 0.7);
  }
  view.addEventListener("pointermove", function (e) { if (e.target.closest && e.target.closest("#streamWrap")) onMove(e); });
  view.addEventListener("pointerleave", function () { var g = U.$("streamGuide"); if (g) g.hidden = true; }, true);
  view.addEventListener("click", function (e) {
    var wrap = e.target.closest && e.target.closest("#streamWrap");
    if (!wrap) return;
    var r = wrap.getBoundingClientRect(), x = (e.clientX - r.left) / r.width;
    A.nav.age(U.bandOf(U.ageAt(x)).id);
  });

  A.views.kapak = { render: render };
})();
