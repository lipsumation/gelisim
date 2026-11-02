/* Ortak veri: kuram aileleri, kanıt durumu ölçeği ve nörobiyolojik izler.
   Yaşlar yıl cinsindendir; doğum öncesi negatif değerle (-0.75 = gebeliğin başı) gösterilir. */
window.ATLAS = {
  families: [
    { id: "psa", name: "Psikanalitik ve nesne ilişkileri", short: "Psikanalitik", color: "var(--f-psa)" },
    { id: "pss", name: "Psikososyal ve kimlik", short: "Psikososyal", color: "var(--f-pss)" },
    { id: "bil", name: "Bilişsel", short: "Bilişsel", color: "var(--f-bil)" },
    { id: "bag", name: "Bağlanma ve öznelerarasılık", short: "Bağlanma", color: "var(--f-bag)" },
    { id: "ahl", name: "Ahlak, ego ve anlam", short: "Ahlak ve ego", color: "var(--f-ahl)" },
    { id: "ymb", name: "Yetişkinlik ve yaşlanma", short: "Yaşam boyu", color: "var(--f-ymb)" },
    { id: "biy", name: "Biyolojik ve evrimsel", short: "Biyolojik", color: "var(--f-biy)" }
  ],

  /* Deneylerin kanıt durumu */
  status: {
    1: { label: "Sağlam", desc: "Defalarca tekrarlanmış ya da güçlü tasarımlı (RKÇ, büyük kohort, meta-analiz)" },
    2: { label: "Kısmi", desc: "Bulgu var ama sınırlı örneklem, yalnızca hayvan verisi, karışık replikasyon ya da korelasyonel" },
    3: { label: "Tartışmalı", desc: "Büyük replikasyonlarda doğrulanamamış ya da yorumu ciddi biçimde tartışılan" }
  },

  /* Kuramların genel kanıt düzeyi (1-4) */
  evidenceScale: ["", "Zayıf / büyük ölçüde sınanamaz", "Sınırlı", "Orta", "Güçlü"],

  /* Karşılaştırmalı çizelgedeki nörobiyoloji şeritleri */
  neuroTracks: [
    { name: "Nörogenez ve göç", sub: "Kortikal mimari", bars: [
      { from: -0.72, to: -0.2, label: "Nörogenez ve nöron göçü (gebelik ~5-25. hafta)" },
      { from: -0.2, to: 0, label: "Subplate, talamokortikal bağlantı" }
    ]},
    { name: "Sinapslar", sub: "Oluşum ve budama", bars: [
      { from: -0.2, to: 2, label: "Sinaps patlaması (önce duyusal korteks)" },
      { from: 2, to: 25, label: "Budama: duyusal-motordan prefrontale" }
    ]},
    { name: "Miyelinizasyon", sub: "Beyaz cevher", bars: [
      { from: -0.15, to: 2, label: "Hızlı miyelinizasyon" },
      { from: 2, to: 29, label: "Süren miyelinizasyon, beyaz cevher zirvesi ~29 yaş" },
      { from: 50, to: 90, label: "Beyaz cevher kaybı hızlanır" }
    ]},
    { name: "Duyarlı dönemler", sub: "Deneyime açık pencereler", bars: [
      { from: 0, to: 0.5, label: "Binoküler görme" },
      { from: 0.5, to: 1, label: "Fonem ve yüz daralması" },
      { from: 1, to: 2, label: "Bağlanma penceresi (BEIP: <24 ay)" },
      { from: 12, to: 18, label: "Ergenlik: ikinci plastisite penceresi" }
    ]},
    { name: "Endokrin", sub: "HPG / adrenal eksen", bars: [
      { from: 0.08, to: 0.5, label: "Mini-puberte" },
      { from: 6, to: 9, label: "Adrenarş (DHEA)" },
      { from: 9, to: 16, label: "Gonadarş ve puberte" },
      { from: 45, to: 55, label: "Menopoz geçişi" }
    ]},
    { name: "Stres ekseni", sub: "HPA ve tamponlama", bars: [
      { from: 0.25, to: 12, label: "Ebeveyn varlığı kortizolü tamponlar" },
      { from: 12, to: 18, label: "Tamponlama zayıflar, akranlar öne çıkar" }
    ]},
    { name: "Kontrol ve ödül", sub: "Prefrontal-striatal denge", bars: [
      { from: 0.6, to: 6, label: "Yürütücü işlevlerin doğuşu" },
      { from: 10, to: 19, label: "Ödül duyarlılığı zirvesi" },
      { from: 19, to: 26, label: "Bilişsel kontrol olgunlaşır" },
      { from: 60, to: 90, label: "PFC incelmesi, pozitiflik etkisi" }
    ]}
  ],

  ages: [],
  theories: [],
  experiments: []
};
