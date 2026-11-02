/* Beyin gelişimi haritası: şematik yan ve orta hat görünümleri, yaş kaydırıcısı, bölge ayrıntısı. */
(function () {
  "use strict";
  var A = window.ATLAS, U = A.U, esc = U.esc, B = A.brain;
  var rById = {};
  B.regions.forEach(function (r) { rById[r.id] = r; });
  var OUTSIDE = { cerebellum: true, brainstem: true };
  var SULCI = {
    lat: ["M 335 42 C 320 110, 300 170, 290 222", "M 188 292 C 230 262, 290 232, 335 216 C 365 206, 395 196, 420 200", "M 215 302 C 280 288, 360 268, 445 264", "M 262 40 C 258 90, 254 120, 250 140"],
    med: ["M 140 214 C 150 122, 262 92, 360 110 C 400 118, 430 132, 442 152", "M 474 70 C 474 140, 470 200, 456 252", "M 600 252 C 548 246, 506 252, 470 264"]
  };
  var uid = 0;

  function fillFor(m) { return "color-mix(in srgb, var(--f-neu) " + Math.round(6 + 84 * m) + "%, var(--surface))"; }
  function shape(r, sh, age, opts) {
    var m = U.maturity(r, age);
    var cls = "br" + (r.deep ? " deep" : "") + (opts.sel === r.id ? " sel" : "");
    var attrs = ' class="' + cls + '" style="fill:' + fillFor(m) + '"';
    if (opts.interactive) attrs += ' data-region="' + r.id + '" tabindex="0" role="button" aria-label="' + esc(r.name) + '" data-tip="' + esc(r.name) + '" data-tip2="Olgunlaşma endeksi: ' + Math.round(m * 100) + ' / 100"';
    if (sh.poly) return "<polygon points=\"" + sh.poly + "\"" + attrs + "/>";
    if (sh.ellipse) return '<ellipse cx="' + sh.ellipse[0] + '" cy="' + sh.ellipse[1] + '" rx="' + sh.ellipse[2] + '" ry="' + sh.ellipse[3] + '"' + attrs + "/>";
    return '<path d="' + sh.path + '"' + attrs + "/>";
  }
  function svg(v, age, opts) {
    var id = "bc" + (++uid);
    var outline = v === "lat" ? B.outline : B.medialOutline;
    var under = "", clipped = "", deep = "", labels = "";
    B.regions.forEach(function (r) {
      r.shapes.forEach(function (sh) {
        if (sh.v !== v) return;
        if (OUTSIDE[r.id]) under += shape(r, sh, age, opts);
        else if (r.deep) deep += shape(r, sh, age, opts);
        else clipped += shape(r, sh, age, opts);
      });
      if (opts.labels && r.label && r.label.v === v) labels += '<text x="' + r.label.x + '" y="' + r.label.y + '" class="bl">' + esc(r.short) + "</text>";
    });
    return '<svg viewBox="0 0 600 425" class="brain-svg" role="img" aria-label="' + (v === "lat" ? "Beynin yan görünümü" : "Beynin orta hat kesiti") + '">' +
      '<defs><clipPath id="' + id + '"><path d="' + outline + '"/></clipPath></defs>' + under +
      '<path d="' + outline + '" class="b-base"/>' +
      '<g clip-path="url(#' + id + ')">' + clipped + SULCI[v].map(function (d) { return '<path d="' + d + '" class="b-sulcus"/>'; }).join("") + "</g>" +
      '<path d="' + outline + '" class="b-outline"/>' + deep + labels + "</svg>";
  }
  function mini(age) {
    return '<span class="mini-brains">' + svg("lat", age, {}) + svg("med", age, {}) + "</span>";
  }
  function phase(r, age) {
    var m = U.maturity(r, age);
    if (U.maturitySlope(r, age) < -1e-4) return "Yaşa bağlı incelme";
    if (m < 0.3) return "Hızlı büyüme, sinaptogenez";
    if (m < 0.9) return "Budama ve miyelinizasyonla olgunlaşma";
    return "Olgun; plastisite sürer";
  }
  function spark(r, age) {
    var W = 320, H = 86, pts = [];
    for (var i = 0; i <= 120; i++) {
      var x = i / 120, a = U.ageAt(x);
      pts.push((x * W).toFixed(1) + "," + (H - 6 - U.maturity(r, a) * (H - 14)).toFixed(1));
    }
    var cx = U.xPos(age) * W, cy = H - 6 - U.maturity(r, age) * (H - 14);
    var ticks = [0, 1, 6, 18, 65].map(function (y) {
      var x = U.xPos(y) * W;
      return '<line x1="' + x + '" x2="' + x + '" y1="4" y2="' + (H - 6) + '" class="sp-grid"/><text x="' + x + '" y="' + (H + 8) + '" class="sp-t">' + (y === 0 ? "Doğum" : y) + "</text>";
    }).join("");
    return '<svg viewBox="0 0 ' + W + " " + (H + 12) + '" class="spark" role="img" aria-label="Olgunlaşma eğrisi">' + ticks +
      '<polygon points="0,' + (H - 6) + " " + pts.join(" ") + " " + W + "," + (H - 6) + '" class="sp-area"/>' +
      '<polyline points="' + pts.join(" ") + '" class="sp-line"/>' +
      '<line x1="' + cx + '" x2="' + cx + '" y1="4" y2="' + (H - 6) + '" class="sp-now"/><circle cx="' + cx + '" cy="' + cy + '" r="4.5" class="sp-dot"/></svg>';
  }

  function sliderVal() { return Math.round(U.xPos(A.state.brainAge) * 1000); }
  function render() {
    var st = A.state;
    if (!rById[st.brainRegion]) st.brainRegion = "dlpfc";
    U.$("brainWrap").innerHTML =
      '<div class="brain-controls"><button type="button" class="btn" id="brainPlay" aria-pressed="false">▶ Yaşam boyu oynat</button>' +
      '<div class="brain-slider"><label for="brainAge" class="sr">Yaş</label><input type="range" id="brainAge" min="0" max="1000" step="1" value="' + sliderVal() + '">' +
      '<div class="brain-ticks">' + A.ages.map(function (a) { return '<button type="button" data-bage="' + a.id + '" style="left:' + (U.xPos(a.from) * 100) + '%">' + esc(a.range.split(" ")[0].replace("Gebelik", "G")) + "</button>"; }).join("") + "</div></div>" +
      '<output id="brainAgeOut" for="brainAge"></output></div>' +
      '<div class="brain-grid"><div class="brain-figs" id="brainFigs"></div><aside class="panel region-panel" id="regionPanel"></aside></div>' +
      '<div class="brain-bottom"><section class="panel" id="brainNow"></section><section class="panel neuro" id="brainBand"></section></div>' +
      '<p class="src-note">' + esc(B.note) + "</p>";
    update();
  }
  function update() {
    var st = A.state, age = st.brainAge, r = rById[st.brainRegion];
    var band = U.bandOf(age);
    U.$("brainAgeOut").textContent = U.fmtAge(age < 0 ? -0.3 : age) + " · " + band.name;
    U.$("brainFigs").innerHTML =
      "<figure>" + svg("lat", age, { interactive: true, labels: true, sel: st.brainRegion }) + "<figcaption>Yan görünüm (sol hemisfer, ön taraf solda)</figcaption></figure>" +
      "<figure>" + svg("med", age, { interactive: true, labels: true, sel: st.brainRegion }) + "<figcaption>Orta hat kesiti; kesikli çizgili yapılar derindedir ve izdüşüm olarak gösterilmiştir</figcaption></figure>" +
      '<div class="ramp"><span>0</span><i></i><span>100</span><em>Şematik olgunlaşma endeksi</em></div>';
    var m = U.maturity(r, age);
    var near = 0.6 / U.NB;
    U.$("regionPanel").innerHTML =
      '<div class="panel-title">Seçili bölge</div><h3>' + esc(r.name) + "</h3>" +
      '<div class="mat"><span class="mat-bar"><i style="width:' + Math.round(m * 100) + '%"></i></span><b>' + Math.round(m * 100) + "</b><span>" + esc(phase(r, age)) + "</span></div>" +
      spark(r, age) +
      '<p class="rp-func">' + esc(r.func) + "</p>" +
      '<div class="panel-title">Gelişim zaman çizelgesi</div><ul class="clean rp-events">' + r.events.map(function (ev) {
        var on = Math.abs(U.xPos(ev[0]) - U.xPos(age)) < near;
        return '<li class="' + (on ? "on" : "") + '"><span class="when">' + esc(U.fmtAge(ev[0])) + "</span><span>" + esc(ev[1]) + "</span></li>";
      }).join("") + "</ul>" +
      '<div class="panel-title">İlgili kuramlar</div><div class="rel">' + r.theories.map(function (id) { return A.theoryChip(id); }).join("") + "</div>" +
      '<div class="panel-title">Klinik bağlantı</div><p class="rp-clin">' + esc(r.clinic) + "</p>" +
      '<div class="panel-title">İlgili çalışmalar</div>' + A.expMini(r.exps);
    var rates = B.regions.map(function (x) {
      var sl = U.maturitySlope(x, age);
      return { r: x, rate: Math.abs(sl), dir: sl };
    }).filter(function (o) { return o.rate > 0.001; }).sort(function (a, b) { return b.rate - a.rate; }).slice(0, 5);
    var maxR = rates.length ? rates[0].rate : 1;
    U.$("brainNow").innerHTML = '<div class="panel-title">Bu yaşta en hızlı değişen bölgeler</div>' +
      (rates.length ? '<ul class="clean rates">' + rates.map(function (o) {
        return '<li><button type="button" class="linkish" data-region="' + o.r.id + '">' + esc(o.r.name) + '</button><span class="rate-bar"><i style="width:' + Math.round(o.rate / maxR * 100) + '%"></i></span><span class="dir">' + (o.dir >= 0 ? "olgunlaşıyor" : "inceliyor") + "</span></li>";
      }).join("") + "</ul>" : '<p class="empty">Bu yaşta şematik modelde belirgin hızlı değişim yok; bölgeler görece durağan.</p>');
    U.$("brainBand").innerHTML = '<div class="panel-title">' + esc(band.range) + " · " + esc(band.name) + '</div><ul class="clean">' + band.neuro.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + '</ul><button type="button" class="linkish" data-goage="' + band.id + '">Bu yaşın tüm ayrıntısı →</button>';
    var s = U.$("brainAge"); if (s && document.activeElement !== s) s.value = sliderVal();
  }

  var playing = null;
  function stop() {
    if (playing) cancelAnimationFrame(playing);
    playing = null;
    var b = U.$("brainPlay"); if (b) { b.textContent = "▶ Yaşam boyu oynat"; b.setAttribute("aria-pressed", "false"); }
    A.save();
  }
  function play() {
    var b = U.$("brainPlay");
    b.textContent = "❚❚ Durdur"; b.setAttribute("aria-pressed", "true");
    var x0 = U.xPos(A.state.brainAge); if (x0 > 0.98) x0 = 0;
    var t0 = null, DUR = 16000 * (1 - x0);
    function step(ts) {
      if (t0 === null) t0 = ts;
      var x = x0 + (1 - x0) * Math.min(1, (ts - t0) / Math.max(DUR, 1));
      A.state.brainAge = U.ageAt(x);
      update();
      if (x < 1 && U.$("brainPlay")) playing = requestAnimationFrame(step); else stop();
    }
    playing = requestAnimationFrame(step);
  }

  var view = document.getElementById("view-beyin");
  view.addEventListener("input", function (e) {
    if (e.target.id !== "brainAge") return;
    stop();
    A.state.brainAge = U.ageAt(+e.target.value / 1000);
    update();
  });
  view.addEventListener("change", function (e) { if (e.target.id === "brainAge") A.save(); });
  function pick(id) { A.state.brainRegion = id; A.save(); update(); }
  view.addEventListener("click", function (e) {
    var t;
    if ((t = e.target.closest("#brainPlay"))) { if (playing) stop(); else play(); }
    else if ((t = e.target.closest("[data-bage]"))) { stop(); var b = A.ages.find(function (a) { return a.id === t.dataset.bage; }); A.state.brainAge = U.bandAge(b); A.save(); update(); }
    else if ((t = e.target.closest("[data-region]"))) pick(t.dataset.region);
    else if ((t = e.target.closest("[data-goage]"))) { stop(); A.nav.age(t.dataset.goage); }
    else if ((t = e.target.closest(".th-chip"))) { stop(); A.nav.theory(t.dataset.theory, null); }
    else if ((t = e.target.closest("[data-exp]"))) { stop(); A.nav.exp(t.dataset.exp); }
  });
  view.addEventListener("keydown", function (e) {
    var t = e.target.closest && e.target.closest("[data-region]");
    if (t && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); pick(t.dataset.region); }
  });
  window.addEventListener("hashchange", function () { if (location.hash !== "#beyin") stop(); });

  A.views.beyin = { render: render, mini: mini };
})();
