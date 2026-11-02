/* Kuramlar (7/7): Biyolojik ve evrimsel kuramlar. */
ATLAS.theories.push(
{
  id: "gesell", fam: "biy", name: "Olgunlaşma kuramı", who: "Arnold Gesell", years: "1925-1956", rare: false,
  core: "Gelişim, genetik olarak belirlenmiş bir zaman çizelgesini izler. Çevre bu sırayı değiştirmez, yalnızca destekler ya da bozar. Motor gelişim baştan ayağa (sefalokaudal) ve gövdeden uçlara (proksimodistal) ilerler. Gesell çocuk gelişim normlarını ilk kez sistematik olarak çıkardı ve gelişimin denge ile dengesizlik dönemleri arasında salındığını öne sürdü.",
  engine: "Biyolojik olgunlaşma ve 'hazır olma'.",
  method: "Yale Çocuk Gelişimi Kliniği'nde film kayıtları, normatif gözlemler, ikiz çalışmaları.",
  ev: 3, evNote: "Motor gelişimin sırası kültürlerarası olarak tutarlıdır. Zamanlamanın yalnızca olgunlaşmayla belirlendiği iddiası ise desteklenmez: pratik ve kültür zamanlamayı değiştirir.",
  labels: ["Denge", "Dengesizlik"],
  stages: [
    { from: 0, to: 1.25, name: "Motor sıralama", sub: "Baştan ayağa, gövdeden uçlara",
      task: "Baş kontrolü, gövde kontrolü, oturma, emekleme ve yürüme belirli bir sırayla gelir.",
      ms: ["3-4 ay: baş kontrolü", "6-8 ay: oturma", "8-10 ay: emekleme", "~12 ay: yürüme"], good: "Sıralı olgunlaşma", risk: "Zorlayıcı erken eğitim",
      neuro: "Miyelinizasyon da baştan aşağıya ve merkezden çevreye ilerler; kortikospinal yolların olgunlaşması motor sıralamayla paraleldir." },
    { from: 1.25, to: 5, name: "Erken çocukluk döngüleri", sub: "Denge ve dengesizlik",
      task: "Gesell Enstitüsü'ne göre 2 yaş dengeli, 2,5 yaş katı ve inatçı, 3 yaş işbirlikçi, 3,5 yaş güvensiz, 4 yaş taşkın ve 5 yaş yeniden dengelidir.",
      ms: ["2,5 yaş: katılık", "4 yaş: sınır tanımazlık", "5 yaş: denge"], good: "Dengeli dönemler", risk: "Dengesiz dönemlerin patoloji sanılması",
      neuro: "Dil ve yürütücü işlevlerdeki hızlı ilerlemeler geçici düzensizlik dönemleri yaratabilir." },
    { from: 5, to: 10, name: "Okul çağı döngüleri", sub: "6 çatışmalı, 7 içe dönük, 8 genişleyen",
      task: "6 yaş çatışmalı ve dengesiz, 7 yaş içe dönük, 8 yaş dışa açılan, 9 yaş kaygılı ama bağımsız, 10 yaş dengelidir.",
      ms: ["Okula hazır olma", "7 yaş: içe dönüklük", "10 yaş: 'altın çağ'"], good: "Okula uyum", risk: "Okula hazır olma testlerinin yanlış kullanımı",
      neuro: "Adrenarş ve yürütücü işlevlerdeki hızlanma." },
    { from: 10, to: 16, name: "Gençlik döngüleri", sub: "On ile on altı yaş",
      task: "Ergenliğe geçiş, puberte ve yeni dengesizlik ile denge dönemleri.",
      ms: ["Puberte", "Özerklik arayışı"], good: "Yeni denge", risk: "-",
      neuro: "Gonadarş ve ergen beyninin yeniden yapılanması." }
  ],
  bio: [
    "Gesell ve Thompson'ın ikiz deneyinde merdiven çıkma eğitimi alan ikiz, eğitim almayana kısa sürede yetişilmiştir; bu sonuç olgunlaşmanın önceliğine kanıt olarak yorumlandı.",
    "WHO'nun beş ülkede yaptığı çok merkezli çalışma, altı temel motor basamağın sırasının evrensel olduğunu, ama ulaşma yaşlarının geniş bir 'pencere' içinde değiştiğini gösterdi (ör. bağımsız yürüme 8-18 ay)."
  ],
  crit: [
    "Pratik ve kültür zamanlamayı değiştirir: bebeklerine oturma ve yürüme alıştırması yaptıran toplumlarda (Kenya'da Kipsigis) bu beceriler daha erken ortaya çıkar.",
    "Normlar beyaz, orta sınıf ABD'li çocuklardan çıkarılmıştır. 'Hazır olma' kavramı okula başlamanın gereksiz yere ertelenmesinde kullanılmıştır.",
    "Dinamik sistemler kuramı (Thelen) motor gelişimin yalnızca beyin olgunlaşmasıyla açıklanamayacağını göstermiştir."
  ],
  exps: ["gesell29", "who06", "thelen82"]
},
{
  id: "thelen", fam: "biy", name: "Dinamik sistemler", who: "Esther Thelen ve Linda Smith", years: "1982-1994", rare: true,
  core: "Gelişim, beyinde yazılı bir programın açılması değildir. Beden, beyin, görev ve çevrenin gerçek zamanlı etkileşiminden kendiliğinden örgütlenen örüntülerdir. Beceri 'evreleri', sistemin farklı kararlı durumları arasındaki geçişlerdir; kilo ya da kas gücü gibi küçük değişiklikler büyük niteliksel sıçramalara yol açabilir.",
  engine: "Kendiliğinden örgütlenme; birden fazla etkenin (bedensel, nöral, çevresel) eşzamanlı etkileşimi.",
  method: "Mikrogenetik deneyler, kinematik ölçümler, matematiksel modelleme.",
  ev: 3, evNote: "Motor gelişim ve A-değil-B hatası üzerindeki deneyler güçlüdür. Yüksek düzey bilişsel ve duygusal gelişime uygulanması ise sınırlıdır.",
  labels: ["Kazanım", "Sınırlılık"],
  stages: [
    { from: 0, to: 0.17, name: "Yenidoğan adımlaması", sub: "Refleks gibi görünen örüntü",
      task: "Dik tutulan yenidoğan adımlama hareketleri yapar.",
      ms: ["Adımlama refleksi"], good: "Motor örüntü hazırdır", risk: "-",
      neuro: "Omurilik düzeyinde ritmik örüntü üreteçleri." },
    { from: 0.17, to: 0.5, name: "'Kaybolan' refleks", sub: "Beden değişir, beyin değil",
      task: "Adımlama ortadan kaybolur. Thelen bunun kortikal ketlemeden değil, bacakların kas gücüne göre hızla ağırlaşmasından kaynaklandığını gösterdi. Aynı dönemde her bebek uzanmayı kendi kas örüntüsüyle farklı yoldan keşfeder.",
      ms: ["Bacaklar suya batırılınca adımlama geri gelir", "Bireysel uzanma çözümleri"], good: "Esnek motor öğrenme", risk: "-",
      neuro: "Aynı davranış farklı nöral ve bedensel çözümlerle elde edilebilir; etkinliğe bağlı nöral seçilim (Edelman)." },
    { from: 0.5, to: 0.9, name: "A-değil-B hatası", sub: "Motor bellek ve beden duruşu",
      task: "Smith ve Thelen'e göre A-değil-B hatası nesne kavramı eksikliğinden değil, tekrar eden uzanmanın motor belleğinden kaynaklanır. Bebek B denemesinde ayağa kaldırılınca hata büyük ölçüde kaybolur.",
      ms: ["Duruş değişince hatanın kaybolması"], good: "Bağlama duyarlı davranış", risk: "-",
      neuro: "Dinamik alan modeli: görsel girdi, motor bellek ve bekleme süresinin etkileşimi." },
    { from: 0.9, to: 1.5, name: "Yürümenin ortaya çıkışı", sub: "Birçok etkenin buluşması",
      task: "Yürüme; bacak gücü, denge, motivasyon, beden oranları ve çevre bir araya gelince ortaya çıkar. Emekleyerek öğrenilen tehlike algısı yürümeye kendiliğinden aktarılmaz; yeniden öğrenilir (Adolph).",
      ms: ["İlk adımlar", "Yeni duruşta tehlike algısının yeniden öğrenilmesi"], good: "Bağımsız hareket", risk: "-",
      neuro: "Serebellum, bazal ganglionlar ve motor korteksin deneyime bağlı ayarlanması." }
  ],
  bio: [
    "Thelen, motor gelişimin 'beyin olgunlaşır, davranış ortaya çıkar' biçimindeki tek yönlü açıklamasına karşı çıktı: beden ve çevre de gelişimin nedenlerindendir.",
    "Kuram, Edelman'ın nöral Darwinizmi ile uyumludur: sık kullanılan bağlantılar seçilir ve güçlenir."
  ],
  crit: [
    "Motor gelişim dışındaki alanlara uygulanması büyük ölçüde metafor düzeyinde kalmıştır.",
    "Matematiksel modeller karmaşıktır; klinik uygulama için öngörü üretmesi zordur."
  ],
  exps: ["thelen82", "gesell29", "diamond89"]
},
{
  id: "mizac", fam: "biy", name: "Mizaç ve uyumun iyiliği", who: "Thomas ve Chess, Kagan, Rothbart", years: "1956-", rare: false,
  core: "Çocuklar dünyaya farklı tepkisellik ve öz-düzenleme eğilimleriyle gelir. Mizaç biyolojik temellidir, ama çevreyle etkileşerek kişiliğe dönüşür. Sonucu belirleyen mizacın kendisi değil, mizaç ile çevrenin talepleri arasındaki uyumdur ('uyumun iyiliği').",
  engine: "Tepkisellik ve öz-düzenleme sistemleri; çevreyle uyum.",
  method: "New York Boylamsal Çalışması (1956'dan beri), laboratuvar gözlemi, ebeveyn ölçekleri, beyin görüntüleme.",
  ev: 4, evNote: "Mizacın bireysel farklılıkları, kalıtsallığı ve orta düzeyde sürekliliği güçlü biçimde desteklenir. Aday gen ile çevre etkileşimi bulguları ise büyük çalışmalarda tekrarlanamamıştır.",
  labels: ["Kazanım", "Risk"],
  stages: [
    { from: 0, to: 0.5, name: "Tepkisellik", sub: "Olumsuz duygulanım, yatışabilirlik",
      task: "Thomas ve Chess çocukların yaklaşık %40'ını kolay, %10'unu zor, %15'ini ısınması yavaş mizaçlı olarak tanımladı. Kagan'a göre 4 aylıkların yaklaşık beşte biri uyarana yüksek tepkiseldir.",
      ms: ["Uyku ve beslenme ritmi", "Yatışabilirlik", "Uyarana tepki yoğunluğu"], good: "Uyumlu bakım", risk: "Zor mizaç ile sert ebeveynlik birleşimi",
      neuro: "Amigdala ve otonom sinir sistemi tepkiselliği; frontal EEG asimetrisi." },
    { from: 0.5, to: 2, name: "Korku ve ketlenme", sub: "Davranışsal ketlenme",
      task: "8-10. aylarda korku sistemi devreye girer. 2 yaşta yabancı insan ve nesnelere karşı çekingenlik (davranışsal ketlenme) ölçülebilir.",
      ms: ["Yeniliğe yaklaşma ya da çekilme"], good: "Temkinlilik", risk: "Ketlenmiş çocuklarda sonraki sosyal kaygı riski",
      neuro: "2 yaşında ketlenmiş olarak sınıflanan yetişkinler yeni yüzlere daha güçlü amigdala yanıtı verir (Schwartz ve ark., 2003)." },
    { from: 2, to: 7, name: "Çaba gerektiren kontrol", sub: "Öz-düzenlemenin doğuşu",
      task: "Çocuk baskın bir tepkiyi bastırıp daha uygun olanı seçmeyi öğrenir (Rothbart). Bu, sonraki öz-denetimin temelidir.",
      ms: ["Bekleyebilme", "Dikkati yönlendirme", "Kurallara uyma"], good: "Öz-düzenleme", risk: "Düşük öz-denetim: Dunedin çalışmasında yetişkin sağlık, gelir ve suç sonuçlarını öngörür",
      neuro: "Ön singulat korteks ve yürütücü dikkat ağının olgunlaşması (Posner ve Rothbart)." },
    { from: 7, to: 90, name: "Kişiliğe dönüşüm", sub: "Mizaçtan Beş Faktöre",
      task: "Olumsuz duygulanım nevrotikliğe, sosyallik dışadönüklüğe, çaba gerektiren kontrol sorumluluğa dönüşür.",
      ms: ["Kişilik özellikleri", "Yaşla artan olgunluk"], good: "Uyumlu kişilik", risk: "Mizaç-çevre uyumsuzluğunun birikimi",
      neuro: "Kişilik özellikleri orta düzeyde kalıtsaldır (~%40-50) ve yaşam boyu değişime açıktır." }
  ],
  bio: [
    "Mizaç, biyolojik bakış açısının çocuk psikiyatrisindeki en doğrudan karşılığıdır. Kagan'ın ketlenme çalışmaları amigdala tepkiselliğine, Fox'un çalışmaları frontal EEG asimetrisine dayanır.",
    "'Farklı duyarlılık' hipotezine göre (Belsky ve Pluess) yüksek tepkisel çocuklar kötü çevrelerden daha çok etkilenir, ama destekleyici çevrelerden de daha çok yararlanır ('orkide ve karahindiba')."
  ],
  crit: [
    "Ölçüm büyük ölçüde ebeveyn bildirimine dayanır.",
    "5-HTTLPR gibi aday gen-çevre etkileşimi bulguları büyük ölçekli çalışmalarda doğrulanamamıştır."
  ],
  exps: ["kagan03", "moffitt11"]
},
{
  id: "yasamoykusu", fam: "biy", name: "Yaşam öyküsü ve uyumsal kalibrasyon", who: "Belsky, Steinberg, Draper; Del Giudice, Ellis", years: "1991-2011", rare: true,
  core: "Evrimsel açıdan gelişim, sınırlı kaynakların büyüme, üreme ve bakım arasında paylaştırılmasıdır. Erken yaşam koşulları (sert ve öngörülemez ya da güvenli ve öngörülebilir), çocuğun stres sistemini, bağlanma biçimini ve puberte zamanlamasını o çevreye uygun bir stratejiye göre 'kalibre eder'. Güvensiz bağlanma bir bozukluk değil, tehlikeli bir çevreye uyumsal bir yanıt olarak yeniden yorumlanır.",
  engine: "Çevresel ipuçları (sertlik, öngörülemezlik) ve stres tepki sisteminin kalibrasyonu.",
  method: "Boylamsal kohortlar (NICHD SECCYD), hayvan çalışmaları, evrimsel modelleme.",
  ev: 3, evNote: "Erken stres ile erken puberte arasındaki ilişki birçok kohortta bulunmuştur, ama etki küçüktür ve kısmen genetik karıştırıcılarla açıklanabilir.",
  labels: ["Uyumsal işlev", "Bedel"],
  stages: [
    { from: 0, to: 5, name: "Erken çocukluk", sub: "Çevrenin okunması",
      task: "Bakımın güvenilirliği, sertlik ve öngörülemezlik ipuçları bağlanma ve stres sistemlerini kalibre eder.",
      ms: ["Bağlanma örüntüsü", "Stres tepkisi profili"], good: "Çevreye uygun strateji", risk: "Uyumsal ama sağlığa bedeli olan stres sistemi",
      neuro: "Uyumsal Kalibrasyon Modeli dört stres tepkisi profili tanımlar: duyarlı, tamponlanmış, tetikte ve duygusuz." },
    { from: 6, to: 9, name: "Orta çocukluk geçişi", sub: "Adrenarş: ikinci geçiş noktası",
      task: "Del Giudice'e göre adrenarş bir 'geçiş noktasıdır': güvensiz bağlanan erkek çocuklar daha çok kaçınan, kız çocuklar daha çok kaygılı örüntüye kayar; sosyal statü yarışması başlar.",
      ms: ["Cinsiyet farklılıklarının belirginleşmesi", "Akran statüsü"], good: "Sosyal öğrenme", risk: "Saldırganlık ya da kaygı örüntülerinin pekişmesi",
      neuro: "DHEA ve DHEA-S artışı; Freud'un 'latans' dönemine biyolojik bir yeniden yorum." },
    { from: 9, to: 16, name: "Puberte zamanlaması", sub: "Hızlı ya da yavaş strateji",
      task: "Sert ve öngörülemez çevrelerde puberte daha erken başlama eğilimindedir: 4,5 yaşında sert ebeveynlik daha erken menarşla ilişkilidir (Belsky ve ark., 2007).",
      ms: ["Menarş yaşı", "Erken cinsel ilgi"], good: "Kısa ömür beklentisinde erken üreme", risk: "Erken puberte: depresyon, madde kullanımı, riskli cinsel davranış",
      neuro: "Erken yoksunluk amigdala-mPFC bağlantısının daha erken yetişkin örüntüsüne geçmesiyle ilişkilidir (Gee ve ark., 2013)." },
    { from: 16, to: 40, name: "Yetişkin stratejisi", sub: "Üreme ve ebeveyn yatırımı",
      task: "Hızlı stratejide daha erken cinsel etkinlik ve kısa vadeli ilişkiler, yavaş stratejide geç üreme ve yüksek ebeveyn yatırımı görülür.",
      ms: ["İlişki biçimleri", "Ebeveynlik yatırımı"], good: "Çevreye uyum", risk: "Kuşaklararası aktarım",
      neuro: "Stres sistemi profilleri yetişkinlikte sağlık sonuçlarına taşınır." }
  ],
  bio: [
    "Bu yaklaşım bağlanma kuramını evrimsel biyolojiyle birleştirir. Erken çevre ile beyin olgunlaşma hızı arasındaki ilişki bugün aktif bir araştırma alanıdır: yoksunluk ve tehdit bazı devrelerin olgunlaşmasını hızlandırabilir."
  ],
  crit: [
    "Erken stresin puberteye etkisi küçüktür; kardeş ve kuzen karşılaştırmaları ilişkinin bir kısmının genetik olduğunu düşündürür.",
    "Olumsuz koşulların 'uyumsal' diye adlandırılması, bunların kabul edilebilir olduğu biçiminde yanlış anlaşılmamalıdır."
  ],
  exps: ["belsky07", "gee13", "era17"]
},
{
  id: "ikilisistem", fam: "biy", name: "Ergen beyni: ikili sistemler", who: "Laurence Steinberg; B. J. Casey", years: "2008", rare: true,
  core: "Ergenlikte puberteye bağlı olarak hızla duyarlılaşan sosyoduygusal ödül sistemi (ventral striatum) ile yavaş ve doğrusal olgunlaşan bilişsel kontrol sistemi (prefrontal korteks) arasındaki zamanlama farkı, risk almanın, duyum aramanın ve akran etkisinin ergenlikte zirve yapmasını açıklar.",
  engine: "Ödül ve kontrol sistemlerinin farklı olgunlaşma hızları.",
  method: "Davranışsal deneyler (Stoplight sürüş oyunu), fMRI, 11 ülkede kültürlerarası örneklem.",
  ev: 3, evNote: "Davranışsal örüntü (duyum aramanın ters U eğrisi, öz-düzenlemenin doğrusal artışı) kültürlerarası olarak desteklenir. 'Dengesizlik'in nörogörüntüleme kanıtı ise tutarsızdır.",
  labels: ["Fırsat", "Risk"],
  stages: [
    { from: 0, to: 10, name: "Çocukluk", sub: "Düşük ödül duyarlılığı",
      task: "Ödül duyarlılığı görece düşüktür; bilişsel kontrol olgunlaşmamıştır ama ebeveyn denetimi bu açığı kapatır.",
      ms: ["Ebeveyn denetimi"], good: "Güvenli öğrenme", risk: "-",
      neuro: "Prefrontal kontrol doğrusal ve yavaş gelişir." },
    { from: 10, to: 17, name: "Erken ve orta ergenlik", sub: "Dengesizlik",
      task: "Puberteyle ödül sistemi hızla duyarlılaşır, kontrol geride kalır. Akranların varlığında risk alma artar.",
      ms: ["Duyum arama", "Akran etkisi", "Yeniliğe yönelme"], good: "Keşif, bağımsızlık, sosyal öğrenme", risk: "Kazalar, madde kullanımı, riskli cinsellik",
      neuro: "Akranlar izlerken ergenlerde ventral striatum etkinliği ve risk alma artar; yetişkinlerde artmaz (Chein ve ark., 2011)." },
    { from: 17, to: 25, name: "Geç ergenlik ve genç yetişkinlik", sub: "Dengenin kurulması",
      task: "Duyum arama yaklaşık 19 yaşında zirve yapıp düşer; öz-düzenleme 20'lerin ortasına kadar artar.",
      ms: ["Duyum aramada düşüş", "Öz-düzenlemede artış"], good: "Daha dengeli kararlar", risk: "Duygusal ('sıcak') koşullarda risk sürer",
      neuro: "Ergenlerin 'soğuk' bilişsel kapasitesi ~16 yaşında yetişkin düzeyine ulaşır, ama psikososyal olgunluk daha geç gelir (Icenogle ve ark., 2019)." },
    { from: 25, to: 90, name: "Yetişkinlik", sub: "Denge",
      task: "Ödül duyarlılığı azalır, kontrol sistemi istikrarlıdır.",
      ms: ["Uzun vadeli planlama"], good: "Denge", risk: "-",
      neuro: "Frontostriatal bağlantılar yetişkin düzeyindedir." }
  ],
  bio: [
    "Model doğrudan nörobiyolojik bir kuramdır ve hukuka da yansımıştır: ABD Yüksek Mahkemesi 2005'te 18 yaş altındakilere idam cezasını kaldırırken ergen gelişimine dair araştırmalara dayandı.",
    "Ernst'in üçlü modeli, ödül ve kontrol sistemlerine amigdala merkezli bir kaçınma sistemi ekler."
  ],
  crit: [
    "Pfeifer ve Allen (2012) gibi eleştirmenlere göre beyin görüntüleme kanıtı tutarsızdır ve model ergenleri aşırı basit biçimde 'eksik' olarak tanımlar.",
    "Risk alma aynı zamanda uyumsaldır: keşfi, öğrenmeyi ve bağımsızlaşmayı sağlar. Ergenlerin önemli bir kısmı belirgin risk almaz."
  ],
  exps: ["chein11", "steinberg18", "giedd99", "gee13"]
}
);
