/* Kuramlar (10/10): Özen etiği, yaşam boyu gelişim, nörosekansiyel model, gelişimsel psikopatoloji. */
ATLAS.theories.push(
{
  id: "gilligan", fam: "ahl", name: "Özen etiği", who: "Carol Gilligan", years: "1982", rare: true,
  core: "Kohlberg'in adalet temelli modeli ilişkisel bağlamı ve 'özen sesini' ihmal eder. Gilligan, kürtaj kararı veren kadınlarla yaptığı görüşmelerden yola çıkarak ahlaki gelişimin kendine özenden başkalarına özene, oradan kendine ve başkasına birlikte özene doğru ilerleyen bir çizgisini tanımladı.",
  engine: "İlişkilerde bağlılık ve sorumluluk; kendini ve başkasını birlikte gözetme.",
  method: "Gerçek ahlaki ikilemler üzerine nitel görüşmeler.",
  ev: 2, evNote: "Meta-analiz özen ve adalet yönelimlerinde yalnızca küçük cinsiyet farkları buldu; ikilemin içeriği cinsiyetten daha belirleyiciydi.",
  labels: ["Kazanım", "Risk"],
  stages: [
    { from: 8, to: 16, name: "Düzey 1: Kendine yönelik özen", sub: "Yaş aralıkları kuramda belirtilmemiştir; yaklaşık",
      task: "Kişi kendi hayatta kalmasını ve ihtiyaçlarını gözetir.", ms: ["Bireysel ihtiyaçlar önce"],
      good: "Kendini koruma", risk: "Yalıtılmışlık", neuro: "-" },
    { from: 14, to: 20, name: "Geçiş 1: Bencillikten sorumluluğa", sub: "Geçiş",
      task: "Kişi kendine yönelik tutumu bencillik olarak eleştirmeye ve başkalarına bağlılığı fark etmeye başlar.",
      ms: ["Sorumluluk duygusu"], good: "Bağlılık farkındalığı", risk: "-", neuro: "-" },
    { from: 16, to: 30, name: "Düzey 2: Fedakârlık olarak iyilik", sub: "Başkalarına özen",
      task: "İyilik, başkalarına özen göstermek ve kendini feda etmekle eşitlenir.",
      ms: ["Başkalarının onayı", "Kendini geri plana atma"], good: "Özen", risk: "Kendini ihmal, ergenlik kızlarında 'sesini kaybetme'",
      neuro: "Ergenlikte kız çocuklarında benlik saygısındaki düşüş meta-analizle gösterilmiştir (Kling ve ark., 1999)." },
    { from: 20, to: 35, name: "Geçiş 2: İyilikten gerçeğe", sub: "Geçiş",
      task: "Kişi kendi ihtiyaçlarını da özenin meşru bir parçası olarak görmeye başlar.",
      ms: ["Kendini de hesaba katma"], good: "Dürüstlük", risk: "-", neuro: "-" },
    { from: 25, to: 90, name: "Düzey 3: Şiddetsizlik ahlakı", sub: "Kendine ve başkasına özen",
      task: "Kimseye (kendine de) zarar vermeme ilkesi; karşılıklı bağımlılığın kabulü.",
      ms: ["Kendini ve başkasını birlikte gözetme"], good: "Olgun özen", risk: "-", neuro: "-" }
  ],
  bio: [
    "Gilligan biyolojik bir model önermez. Özen yöneliminin empatik ilgi ağlarıyla ilişkisi kuramsal düzeyde kalmaktadır."
  ],
  crit: [
    "Örneklem küçük ve özeldir; cinsiyet farklarının özcü bir biçimde yorumlandığı eleştirilmiştir. Meta-analizler (Walker, 1984; Jaffee ve Hyde, 2000) güçlü bir cinsiyet farkı bulmamıştır.",
    "Buna karşın özen etiği, ahlak felsefesinde ve hemşirelik ile psikoterapi kuramlarında kalıcı bir etki bırakmıştır."
  ],
  clinic: "Ergenlik çağındaki kızlarda benlik saygısı düşüşü ve 'sesini kaybetme' (Brown ve Gilligan, 1992) kavramları ergen kızlarda depresyon ve yeme bozukluklarını anlamada kullanılmıştır. İlişkisel-kültürel terapi (Stone Center) bu çizgiden gelişmiştir.",
  primary: ["Gilligan, C. (1982). In a different voice: Psychological theory and women's development. Harvard University Press.", "Brown, L. M., & Gilligan, C. (1992). Meeting at the crossroads: Women's psychology and girls' development. Harvard University Press."],
  exps: ["jaffee00", "kling99", "colby83"]
},
{
  id: "baltes", fam: "ymb", name: "Yaşam boyu gelişim ve SOC", who: "Paul B. Baltes", years: "1987-2003", rare: true,
  core: "Gelişim yaşam boyu sürer; çok yönlüdür (kazanç ve kayıp birlikte), plastiktir ve tarihsel-kültürel bağlama gömülüdür. Yaş ilerledikçe kazanç-kayıp dengesi kayıp yönüne kayar, biyolojinin katkısı azalırken kültürün telafi edici önemi artar. Başarılı gelişimin genel stratejisi Seçim, Optimizasyon ve Telafidir (SOC): ileri yaşta konser veren piyanist Rubinstein daha az parça seçmiş, onları daha çok çalışmış ve hızlı bölümlerden önce yavaşlayarak kontrastı korumuştur.",
  engine: "Kazanç-kayıp dinamiği, plastisite ve SOC stratejileri.",
  method: "Berlin Yaşlanma Çalışması, bilgelik paradigması, 'sınırları zorlama' bilişsel eğitim deneyleri.",
  ev: 3, evNote: "SOC kullanımı iyi oluşla ilişkilidir; yaşlılarda bilişsel plastisite ve sınırları deneysel olarak gösterilmiştir. SOC kavramı ise yanlışlanamayacak kadar geniştir.",
  labels: ["Kazanç", "Kayıp"],
  stages: [
    { from: 0, to: 25, name: "Büyüme", sub: "Kaynaklar büyümeye yönelir",
      task: "Biyolojik ve kültürel kaynaklar büyük ölçüde büyümeye ve yeni beceri kazanımına yönelir.",
      ms: ["Hızlı beceri kazanımı"], good: "Yüksek plastisite", risk: "Erken olumsuz koşulların birikimli etkisi",
      neuro: "Sinaptogenez, budama ve miyelinizasyonun sürdüğü dönem." },
    { from: 25, to: 60, name: "Sürdürme", sub: "Kazanç-kayıp dengesi",
      task: "Kaynaklar giderek sürdürmeye ve kayıpları önlemeye yönelir; uzmanlık ve kristalize bilgi artar.",
      ms: ["Uzmanlık", "Hedeflerin seçimi"], good: "Kristalize bilgi", risk: "Kronik stres ve hastalık",
      neuro: "Akışkan yeteneklerde yavaş düşüş; kristalize yetenekler korunur." },
    { from: 60, to: 80, name: "Üçüncü yaş", sub: "Genç yaşlılık",
      task: "Plastisite sürer; SOC stratejileriyle yüksek işlevsellik ve doyum korunabilir. Bilgelik ileri yaşta da gelişebilir.",
      ms: ["SOC kullanımı", "Bilgelik"], good: "Başarılı uyum", risk: "Duyusal kayıplar ve kronik hastalık",
      neuro: "Yaşlılar bellek stratejilerinden yararlanır, ama gençler kadar değil: plastisitenin sınırları vardır (Kliegl ve ark., 1989)." },
    { from: 80, to: 90, name: "Dördüncü yaş", sub: "Biyolojik kırılganlık",
      task: "Kayıplar belirginleşir; SOC stratejileri sınırlarına ulaşır, demans sıklığı belirgin olarak artar.",
      ms: ["Çoklu kayıplar", "Yoğun bakım ihtiyacı"], good: "Anlam ve ilişki odaklılık", risk: "Kırılganlık, demans, yalnızlık",
      neuro: "Nörodejeneratif patoloji ve rezervin tükenmesi." }
  ],
  bio: [
    "Baltes'e göre 'yaşam boyu mimari tamamlanmamıştır': evrimsel seçilim üreme çağından sonrasını daha az biçimlendirdiği için ileri yaşta biyolojik kayıplar artar, telafi kültürel kaynaklara (teknoloji, eğitim, sosyal destek) daha çok bağlı hale gelir.",
    "ACTIVE çalışması, yaşlılarda hedeflenen bilişsel becerilerin eğitimle iyileşebildiğini ve bazı etkilerin yıllarca sürdüğünü göstermiştir."
  ],
  crit: [
    "SOC çok genel bir çerçevedir ve neredeyse her uyumu açıklayabilir.",
    "'Başarılı yaşlanma' kavramı, kayıpları bireysel başarısızlık gibi gösterebileceği gerekçesiyle eleştirilir."
  ],
  clinic: "Yaşlı psikiyatrisinde işlevsel hedef seçimi, telafi stratejileri ve rehabilitasyon planlamasında kullanılır. Davranışsal aktivasyon ve yaşlılara yönelik problem çözme terapileriyle uyumludur.",
  primary: ["Baltes, P. B. (1987). Theoretical propositions of life-span developmental psychology: On the dynamics between growth and decline. Developmental Psychology, 23(5), 611-626.", "Baltes, P. B. (1997). On the incomplete architecture of human ontogeny. American Psychologist, 52(4), 366-380.", "Baltes, P. B., & Smith, J. (2003). New frontiers in the future of aging: From successful aging of the young old to the dilemmas of the fourth age. Gerontology, 49(2), 123-135."],
  exps: ["freund98", "ball02", "kliegl89"]
},
{
  id: "nmt", fam: "biy", name: "Nörosekansiyel model", who: "Bruce D. Perry", years: "2006-2009", rare: true,
  core: "Beyin aşağıdan yukarıya ve içten dışa sıralı olarak gelişir: beyin sapı, diensefalon, limbik sistem ve korteks. Erken travma, o dönemde hızla gelişen alt yapıları etkiler. Tedavi de aynı sırayla ilerlemelidir: önce düzenleme (ritmik, duyusal etkinlikler), sonra ilişki, en son akıl yürütme ('düzenle, ilişki kur, akıl yürüt').",
  engine: "Kullanıma bağlı nöral gelişim ve hiyerarşik olgunlaşma sırası.",
  method: "Klinik gözlem; NMT Metriği ile işlevsel beyin haritalaması (bağımsız geçerliği sınırlı).",
  ev: 1, evNote: "Klinik olarak popülerdir; bağımsız RKÇ yoktur. Hiyerarşik model, beyin gelişiminin paralel ve etkileşimli doğasını basitleştirir.",
  labels: ["Klinik hedef", "Erken travmada risk"],
  stages: [
    { from: -0.75, to: 0.25, name: "Beyin sapı", sub: "Uyarılma ve fizyolojik düzenleme",
      task: "Uyku, uyarılma, kalp ritmi ve ısı düzenlemesi.", ms: ["Uyku-uyanıklık ritmi"],
      good: "Ritmik ve duyusal düzenleyici etkinlikler", risk: "Aşırı uyarılmışlık, uyku bozuklukları",
      neuro: "Beyin sapının miyelinizasyonu gebelikte başlar ve doğumda büyük ölçüde tamamlanmıştır." },
    { from: 0, to: 1, name: "Diensefalon ve serebellum", sub: "Duyusal bütünleşme ve motor düzenleme",
      task: "Duyusal bütünleşme, motor koordinasyon, iştah ve uyku düzeni.", ms: ["Motor koordinasyon"],
      good: "Hareket, müzik, ritim temelli müdahaleler", risk: "Duyusal ve motor düzensizlik",
      neuro: "Serebellum ilk iki yılda çok hızlı büyür." },
    { from: 0.5, to: 4, name: "Limbik sistem", sub: "Bağlanma ve duygu düzenleme",
      task: "Bağlanma, ödül ve duygu düzenleme.", ms: ["Bağlanma", "Duygu düzenleme"],
      good: "İlişkisel müdahaleler, oyun", risk: "Bağlanma sorunları, duygu düzensizliği",
      neuro: "Amigdala-prefrontal bağlantılar ise çocukluk ve ergenlik boyunca olgunlaşmaya devam eder." },
    { from: 2, to: 25, name: "Korteks", sub: "Dil, soyut düşünce, öz-düzenleme",
      task: "Dil, soyut düşünce, planlama ve öz-düzenleme.", ms: ["Bilişsel ve sözel beceriler"],
      good: "Bilişsel ve sözel terapiler", risk: "Öğrenme ve yürütücü işlev sorunları",
      neuro: "Prefrontal olgunlaşma yirmili yaşlara kadar sürer." }
  ],
  bio: [
    "Modelin genel yönelimi (alt ve duyusal-motor yapıların daha erken, ilişkisel ve prefrontal yapıların daha geç olgunlaşması) miyelinizasyon ve kortikal olgunlaşma verileriyle kabaca uyumludur."
  ],
  crit: [
    "Katı hiyerarşi, MacLean'in artık geçerliliğini yitirmiş 'üçlü beyin' modelini çağrıştırır. Gerçekte beyin bölgeleri paralel ve birbirleriyle etkileşerek gelişir.",
    "Bağımsız randomize çalışma yoktur. Travma odaklı tedavilerde kanıta dayalı seçenekler (travma odaklı BDT, Çocuk-Ebeveyn Psikoterapisi) önceliklidir."
  ],
  clinic: "Travma bilgili okul ve kurum programlarında, koruyucu aile hizmetlerinde yaygın kullanılır. Asistan için önemli olan şudur: model popülerdir ve iyi bir klinik dil sunar, ama etkinlik kanıtı sınırlıdır. Kanıta dayalı tedavilerin yerine değil, onları tamamlayan bir çerçeve olarak düşünülmelidir.",
  primary: ["Perry, B. D. (2006). Applying principles of neurodevelopment to clinical work with maltreated and traumatized children: The neurosequential model of therapeutics. In N. B. Webb (Ed.), Working with traumatized youth in child welfare (pp. 27-52). Guilford Press.", "Perry, B. D. (2009). Examining child maltreatment through a neurodevelopmental lens: Clinical applications of the Neurosequential Model of Therapeutics. Journal of Loss and Trauma, 14(4), 240-255."],
  exps: ["lieberman05"]
},
{
  id: "sroufe", fam: "gps", name: "Evreye özgü görevler ve gelişimsel psikopatoloji", who: "L. Alan Sroufe; Dante Cicchetti; Michael Rutter", years: "1979-1996", rare: true,
  core: "Gelişim, her dönemde öne çıkan 'evreye özgü görevlerin' çözülmesiyle örgütlenir. Önceki uyum sonrakini olasılıksal olarak etkiler ama belirlemez. Normal ve anormal gelişim aynı süreçlerle açıklanır. Eşsonluluk (farklı yollar aynı sonuca götürür) ve çoksonluluk (aynı başlangıç farklı sonuçlara götürür) bu yaklaşımın temel ilkeleridir (Cicchetti ve Rogosch, 1996). Dayanıklılık (Rutter, Masten) da bu çerçevenin parçasıdır.",
  engine: "Gelişimsel basamaklanma (cascade): bir alandaki uyum ya da uyumsuzluk sonraki alanlara yayılır; risk ve koruyucu etkenlerin etkileşimi.",
  method: "Minnesota Risk ve Uyum Boylamsal Çalışması (1975'ten beri, düşük gelirli ilk kez anne olan 267 kadın ve çocukları); diğer boylamsal kohortlar.",
  ev: 4, evNote: "Boylamsal kanıt güçlüdür; tahminler olasılıksaldır ve etkiler orta büyüklüktedir.",
  labels: ["Yetkin uyum", "Risk yolu"],
  stages: [
    { from: 0, to: 0.25, name: "Fizyolojik düzenleme", sub: "0-3 ay",
      task: "Uyku, beslenme ve uyarılmanın bakımverenle birlikte düzenlenmesi.", ms: ["Düzenli ritimler"],
      good: "Düzenli fizyoloji", risk: "Aşırı ağlama, düzenleme güçlüğü", neuro: "Eş düzenleme ve sirkadiyen ritmin oturması." },
    { from: 0.25, to: 0.5, name: "Gerilimin yönetimi", sub: "3-6 ay",
      task: "Uyarılma ve gerilimin karşılıklı etkileşim içinde yönetilmesi.", ms: ["Karşılıklı oyun"],
      good: "Düzenlenmiş uyarılma", risk: "Etkileşimden çekilme", neuro: "Durgun yüz paradigmasındaki toparlanma kapasitesi." },
    { from: 0.5, to: 1, name: "Etkili bağlanma ilişkisi", sub: "6-12 ay",
      task: "Bakımverenle güvenilir bir bağlanma ilişkisinin kurulması.", ms: ["Güvenli üs"],
      good: "Güvenli bağlanma", risk: "Dağınık bağlanma: sonraki çözülme belirtileriyle ilişkili", neuro: "Stres sisteminin bakım niteliğine göre ayarlanması." },
    { from: 1, to: 1.5, name: "Keşif ve ustalık", sub: "12-18 ay",
      task: "Güvenli üsten keşfe çıkma, ustalık deneyimi.", ms: ["Bağımsız keşif"],
      good: "Merak ve ustalık", risk: "Ketlenmiş keşif", neuro: "Lokomosyon ve keşif sistemleri." },
    { from: 1.5, to: 2.5, name: "Bireyleşme ve özerklik", sub: "18-30 ay",
      task: "Özerklik ve bakımverenle bağın birlikte sürdürülmesi; problem çözmede destek kullanımı.", ms: ["Alet kullanımı görevi"],
      good: "Özerk ama bağlı", risk: "Güç mücadelesi, aşırı bağımlılık", neuro: "Çaba gerektiren kontrolün doğuşu." },
    { from: 2.5, to: 5, name: "Dürtü kontrolü ve akranlar", sub: "30-60 ay",
      task: "Dürtü kontrolü, esnek öz-denetim, cinsiyet rolü ve ilk akran ilişkileri.", ms: ["Okul öncesinde akran yetkinliği"],
      good: "Esnek öz-denetim, akran kabulü", risk: "Saldırganlık, çekingenlik", neuro: "Yürütücü işlevlerdeki hızlı artış." },
    { from: 5, to: 12, name: "Okul ve akran yetkinliği", sub: "Orta çocukluk",
      task: "Okul uyumu, akran grubunda kabul, yakın arkadaşlık, yeterlik.", ms: ["Akran grubu", "Okul başarısı"],
      good: "Yeterlik ve sosyal kabul", risk: "Dışlanma, davranım sorunları", neuro: "Adrenarş, frontoparyetal ağlar." },
    { from: 12, to: 18, name: "Kimlik, yakınlık ve özerklik", sub: "Ergenlik",
      task: "Kimlik oluşumu, yakın ve romantik ilişkiler, ebeveynle ilişkinin yeniden düzenlenmesi.", ms: ["Romantik ilişkiler", "Özerklik"],
      good: "Yakınlık ve özerklik", risk: "Riskli davranışlar, psikopatoloji başlangıcı", neuro: "Ergen beyninin yeniden yapılanması." },
    { from: 18, to: 40, name: "Yetişkin uyumu", sub: "İlişkiler, ebeveynlik, iş",
      task: "Partner ilişkisi, ebeveynlik ve iş yaşamında uyum; erken deneyimlerin yetişkin ilişkilerine yansıması.", ms: ["Partner ilişkisi", "Ebeveynlik"],
      good: "Yetkin yetişkin uyumu", risk: "Kuşaklararası aktarım", neuro: "-" }
  ],
  bio: [
    "Gelişimsel psikopatoloji, deneyimin biyolojiye 'gömülmesini' (biological embedding) inceler: erken bakım stres sistemini, epigenetik düzenlemeyi ve beyin devrelerini etkiler. Çoksonluluk ilkesi, aynı biyolojik riskin farklı çevrelerde farklı sonuçlar verebileceğini (farklı duyarlılık) açıklar."
  ],
  crit: [
    "Tahminler olasılıksaldır ve tek tek etkiler orta büyüklüktedir; çok sayıda değişkenle sonradan açıklama riski taşır.",
    "Minnesota örneklemi belirli bir bağlama (düşük gelirli, ABD) aittir."
  ],
  clinic: "Çocuk psikiyatrisinde formülasyonun temel çerçevesidir: belirti gelişimsel bağlamda (yaşa uygun mu, hangi görev aksıyor) değerlendirilir; tanı yanında risk ve koruyucu etkenler ile işlevsellik planlanır. Dayanıklılık odaklı müdahaleler ve erken müdahalenin mantığı bu yaklaşıma dayanır.",
  primary: ["Sroufe, L. A. (1979). The coherence of individual development: Early care, attachment, and subsequent developmental issues. American Psychologist, 34(10), 834-841.", "Sroufe, L. A., & Rutter, M. (1984). The domain of developmental psychopathology. Child Development, 55(1), 17-29.", "Cicchetti, D., & Rogosch, F. A. (1996). Equifinality and multifinality in developmental psychopathology. Development and Psychopathology, 8(4), 597-600.", "Sroufe, L. A., Egeland, B., Carlson, E. A., & Collins, W. A. (2005). The development of the person: The Minnesota study of risk and adaptation from birth to adulthood. Guilford Press."],
  exps: ["sroufe05", "carlson98", "beip07", "era17"]
}
);
