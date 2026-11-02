/* Kuramlar (9/10): Kültürel, bilişsel, bağlanma ve sosyal biliş alanlarından ek kuramlar. */
ATLAS.theories.push(
{
  id: "kagitcibasi", fam: "pss", name: "Aile değişimi ve özerk-ilişkisel benlik", who: "Çiğdem Kağıtçıbaşı", years: "1990-2007", rare: true,
  core: "Batı psikolojisi özerklik ile ilişkiselliği zıt kutuplar olarak görür; bu kültürel bir yanılgıdır. Kağıtçıbaşı iki ayrı boyut önerir: eylemlilik (özerklik-bağımlılık) ve kişilerarası mesafe (ilişkisellik-ayrıklık). Kentleşen çoğunluk dünyasında yaygınlaşan 'duygusal karşılıklı bağımlılık' aile modelinde yetişen çocuk, hem özerk hem yakın olan 'özerk-ilişkisel benlik' geliştirir.",
  engine: "Sosyoekonomik değişim (kentleşme, eğitim) ile aile modelinin ve ebeveynlik hedeflerinin dönüşümü.",
  method: "Çocuğun Değeri araştırması (1975 ve 2003, Türkiye), Türkiye Erken Destek Projesi (22 yıllık izlem), ölçek geliştirme.",
  ev: 3, evNote: "Erken destek programının uzun dönem etkileri boylamsal olarak gösterilmiştir. Özerk-ilişkisel benlik ölçümleri ağırlıkla öz-bildirime dayanır.",
  labels: ["Uyumlu sonuç", "Risk"],
  stages: [
    { from: 0, to: 6, name: "Erken çocukluk: sıcak kontrol", sub: "Aile modeline göre sosyalleşme",
      task: "Geleneksel modelde itaat ve sadakat, bağımsızlık modelinde erken özerklik öne çıkar. Duygusal karşılıklı bağımlılık modelinde kontrol ile sıcaklık bir aradadır: 'sıcak kontrol' bu bağlamda reddedici olarak algılanmaz.",
      ms: ["Ebeveyn kontrolü ve sıcaklığın birlikteliği", "Okul öncesi bilişsel uyarım"], good: "Güvenli bağ ve gelişimsel uyarım", risk: "Yoksullukta bilişsel uyarım eksikliği",
      neuro: "Erken uyarım ve ebeveyn duyarlılığı dil ve yürütücü işlevlerin gelişimini destekler." },
    { from: 6, to: 12, name: "Okul çağı: çocuğun değerinin dönüşümü", sub: "Ekonomik değerden psikolojik değere",
      task: "Kentleşme ve eğitimle çocuğun ekonomik değeri azalır, psikolojik değeri artar; ebeveynler eğitime yatırım yapar ve özerkliğe daha çok izin verir.",
      ms: ["Okul başarısına yatırım", "Daha az kardeş, daha çok yatırım"], good: "Yeterlik", risk: "Akademik baskı",
      neuro: "Okul deneyimi okuma ve sayı ağlarını şekillendirir." },
    { from: 12, to: 25, name: "Ergenlik ve gençlik: özerk-ilişkisel benlik", sub: "Ayrışmadan özerkleşme",
      task: "Özerklik (eylemlilik) ile yakınlık birlikte gelişir; genç aileden kopmadan kendi kararlarını verebilir.",
      ms: ["Kendi kararlarını alma", "Aileyle yakın bağın sürmesi"], good: "Özerk-ilişkisel benlik", risk: "Batı modeline göre 'bağımlı' diye yanlış değerlendirilme; ya da bağlam değişince çatışma",
      neuro: "Kültür kendilik temsilini etkiler: bazı kolektivist örneklemlerde anne temsili kendilik temsiliyle medial prefrontal bölgede örtüşür (Zhu ve ark., 2007)." },
    { from: 25, to: 90, name: "Yetişkinlik: kuşaklararası bağlar", sub: "Duygusal bağın sürmesi",
      task: "Yaşlı ebeveyne maddi bağımlılık azalırken duygusal bağ ve bakım sorumluluğu sürer.",
      ms: ["Kuşaklararası destek", "Yaşlı ebeveynin bakımı"], good: "Karşılıklı destek", risk: "Bakım veren yükü",
      neuro: "-" }
  ],
  bio: [
    "Kağıtçıbaşı biyolojik bir model önermez; ancak erken bilişsel uyarımın ve ebeveyn desteğinin gelişime etkisini sınayan uygulamalı çalışmalar yürütmüştür. Kültürel nörobilim çalışmaları kendilik temsilinin kültürle şekillendiğini gösterir."
  ],
  crit: [
    "Aile modelleri ideal tiplerdir ve bireyler arasındaki farkları gizleyebilir.",
    "Özerk-ilişkisel benlik ölçekleri ağırlıkla öz-bildirime dayanır."
  ],
  clinic: "Türkiye'de klinik uygulama için doğrudan önemlidir: ayrışmayı (Mahler, Blos) sağlıklı gelişimin tek ölçütü saymamak, ergen-aile ilişkisini kültürel bağlamda değerlendirmek gerekir. Anne-Çocuk Eğitim Programı (AÇEP), Türkiye Erken Destek Projesi'nden doğmuş ve ülke çapında yaygınlaştırılmış bir erken müdahale programıdır.",
  primary: ["Kağıtçıbaşı, Ç. (1996). Family and human development across cultures: A view from the other side. Lawrence Erlbaum.", "Kağıtçıbaşı, Ç. (2005). Autonomy and relatedness in cultural context: Implications for self and family. Journal of Cross-Cultural Psychology, 36(4), 403-422.", "Kağıtçıbaşı, Ç. (2007). Family, self, and human development across cultures (2nd ed.). Lawrence Erlbaum."],
  exps: ["tedp09", "kagitcibasi05"]
},
{
  id: "case", fam: "bil", name: "Merkezi kavramsal yapılar (neo-Piagetçi)", who: "Robbie Case", years: "1985-1996", rare: true,
  core: "Piaget'nin evreleri, işlem belleği (çalışma belleği) kapasitesindeki artış ve alana özgü 'merkezi kavramsal yapılar'la açıklanabilir. Her evrede çocuk önce tek, sonra iki, sonra çok birimi eşgüdümleyebilir. Otomatikleşme ve miyelinizasyon kapasiteyi artırır. Sayı, uzam ve anlatı için ayrı merkezi yapılar vardır ve bunlar öğretimle hızlandırılabilir.",
  engine: "Çalışma belleği kapasitesinin artışı (Pascual-Leone'nin M-kapasitesi), otomatikleşme ve öğretim.",
  method: "Görev analizi, öğretim deneyleri (RightStart / Number Worlds), alanlar arası aktarım çalışmaları.",
  ev: 3, evNote: "Sayı doğrusu temelli öğretimin düşük gelirli çocuklarda sayı kavramını güçlendirdiği deneysel olarak gösterilmiştir. Kapasite ölçümü ise tartışmalıdır.",
  labels: ["Kazanım", "Sınırlılık"],
  stages: [
    { from: 0, to: 1.5, name: "Duyusal-motor eşgüdüm", sub: "Tek, iki ve çok eylem eşgüdümü",
      task: "Algısal ve motor şemaların giderek daha karmaşık biçimde eşgüdümlenmesi.",
      ms: ["Uzanma ve kavrama", "Araç-amaç ilişkisi"], good: "Eylem planlama", risk: "-",
      neuro: "Case, alt evre geçişlerini miyelinizasyon ve EEG koherans döngüleriyle ilişkilendirmiştir." },
    { from: 1.5, to: 5, name: "İlişkisel evre", sub: "Nesneler ve kişiler arasındaki ilişkiler",
      task: "İki nesne ya da olay arasındaki ilişkiyi temsil etme (neden-sonuç, daha çok-daha az).",
      ms: ["Sayma ve 'daha çok' kavramı (ayrı)", "Basit anlatılar"], good: "İlişkisel temsil", risk: "Sayma ile miktar kavramının birleşmemesi",
      neuro: "Çalışma belleği ve prefrontal-parietal ağların gelişimi." },
    { from: 5, to: 11, name: "Boyutsal evre", sub: "Merkezi sayı yapısı: zihinsel sayı doğrusu",
      task: "Sayma ve miktar şemaları birleşerek zihinsel sayı doğrusunu oluşturur; çocuk tek bir boyut boyunca karşılaştırma yapabilir, sonra iki boyutu eşgüdümler.",
      ms: ["Zihinsel sayı doğrusu (~6 yaş)", "İki boyutu birlikte değerlendirme (~9 yaş)", "Zamanda iki olay çizgisiyle anlatı"], good: "Matematik ve anlatı yeterliği", risk: "Merkezi sayı yapısının oluşmaması: matematik güçlüğü",
      neuro: "Sayısal büyüklük temsilinde intraparyetal sulkus uzmanlaşır." },
    { from: 11, to: 19, name: "Vektörel evre", sub: "Soyut boyutlar",
      task: "Boyutlar arası ilişkileri (oran, ivme) soyut olarak temsil etme.",
      ms: ["Oran ve orantı", "Soyut sistemler"], good: "Soyut akıl yürütme", risk: "Eğitim fırsatına bağlılık",
      neuro: "Frontoparyetal ağların ve beyaz cevherin olgunlaşması." }
  ],
  bio: [
    "Case, bilişsel evre geçişlerini prefrontal olgunlaşma, miyelinizasyon ve Thatcher'ın EEG koherans döngüleriyle açıkça ilişkilendiren ilk neo-Piagetçilerdendir. Çalışma belleği kapasitesindeki artış bugün de bilişsel gelişimin temel açıklayıcılarındandır."
  ],
  crit: [
    "Çalışma belleği kapasitesinin bağımsız ölçümü ile evre performansını ayırmak zordur.",
    "Merkezi yapıların alanlar arası aktarımı sınırlıdır."
  ],
  clinic: "Özgül öğrenme bozukluğunda (matematik) sayı doğrusu temelli müdahalelere temel oluşturur: RightStart / Number Worlds programları ve doğrusal sayı tahtası oyunları (Siegler ve Ramani, 2008) düşük gelirli çocuklarda sayı bilgisini artırmıştır.",
  primary: ["Case, R. (1985). Intellectual development: Birth to adulthood. Academic Press.", "Case, R. (1992). The mind's staircase. Lawrence Erlbaum.", "Case, R., & Okamoto, Y. (1996). The role of central conceptual structures in the development of children's thought. Monographs of the Society for Research in Child Development, 61(1-2)."],
  exps: ["case96", "siegler08"]
},
{
  id: "tomasello", fam: "bag", name: "Paylaşılan yönelimsellik", who: "Michael Tomasello", years: "1995-2019", rare: true,
  core: "İnsanı diğer primatlardan ayıran, başkalarıyla ortak hedef, ortak dikkat ve ortak niyet kurabilme kapasitesidir. Bu kapasite gelişimde aşamalı olarak ortaya çıkar: önce ikili duygu paylaşımı, 9. ay civarında ortak dikkat ve işbirliği, yaklaşık 3 yaşta ise kolektif yönelimsellik (normlar, kurallar, 'biz' bakışı). Ahlak, dil ve kültür bu temeller üzerine kurulur.",
  engine: "Paylaşılan yönelimsellik motivasyonu ve becerisi; işbirliğine dayalı etkileşim.",
  method: "Bebek ve küçük çocuklarla deneyler; şempanze ve bonobolarla karşılaştırmalı çalışmalar.",
  ev: 4, evNote: "Ortak dikkat ve işbirliğinin gelişim sırası, yardım etme ve norm uygulama davranışları birçok deneyde tekrarlanmıştır. İnsan-primat farkının büyüklüğü ise tartışılır.",
  labels: ["Kazanım", "Risk"],
  stages: [
    { from: 0, to: 0.75, name: "İkili etkileşim", sub: "Duygu paylaşımı",
      task: "Yüz yüze proto-konuşmalar ve duygu paylaşımı; başkalarının canlı failler olduğunun algılanması.",
      ms: ["Sosyal gülümseme", "Sıra alma"], good: "Duygusal paylaşım", risk: "Sosyal ilginin azlığı",
      neuro: "Yüz ve ses işleyen sosyal algı ağları (STS, fusiform) uzmanlaşır." },
    { from: 0.75, to: 1.5, name: "9. ay devrimi: ortak dikkat", sub: "Üçlü etkileşim",
      task: "Bakış ve işaret takibi, paylaşmak ve bilgi vermek için işaret etme, taklitle öğrenme; 14-18. aylarda kendiliğinden yardım.",
      ms: ["Bakış takibi (9-10 ay)", "İşaret etme (11-12 ay)", "Taklitle öğrenme", "Yardım etme (14-18 ay)"], good: "Ortak dikkat", risk: "Ortak dikkat eksikliği: otizm spektrum bozukluğunun erken işareti",
      neuro: "Ortak dikkat dorsomedial PFC ve sosyal dikkat ağlarını içerir." },
    { from: 1.5, to: 3, name: "Ortak yönelimsellik", sub: "Ortak hedef ve ortak bağlılık",
      task: "Ortak hedefe yönelik işbirliği; rol değiştirebilme; partner bırakırsa onu yeniden oyuna çağırma.",
      ms: ["İşbirliği oyunları", "Rol değiştirme"], good: "İşbirliği", risk: "-",
      neuro: "Zihin kuramının öncülleri ve dil ağlarının gelişimi." },
    { from: 3, to: 6, name: "Kolektif yönelimsellik", sub: "Normlar ve 'biz'",
      task: "Çocuk oyun kurallarını normatif olarak anlar ve ihlallere itiraz eder ('Böyle oynanmaz!'); ortak kazancı eşit paylaşır; ~5 yaşta itibarını yönetmeye başlar.",
      ms: ["Kural ihlaline itiraz (3 yaş)", "Eşit paylaşım", "İtibar yönetimi (~5 yaş)"], good: "Norm ve adalet anlayışı", risk: "Normlara katılık ya da duyarsızlık",
      neuro: "Zihin kuramı ağının (TPJ, mPFC) uzmanlaşması." },
    { from: 6, to: 12, name: "Nesnel kendilik değerlendirmesi", sub: "Ahlaki kimlik ve kurumlar",
      task: "Kendini toplumsal normların bakış açısından değerlendirme; para ve roller gibi kurumsal gerçeklikleri anlama.",
      ms: ["Ahlaki kimlik", "Kurumsal kavramlar"], good: "Ahlaki öz-düzenleme", risk: "-",
      neuro: "Sosyal değerlendirme ağlarının ergenliğe doğru yeniden düzenlenmesi." }
  ],
  bio: [
    "Karşılaştırmalı çalışmalar şempanzelerin de yardım edebildiğini ama ortak hedeflere bağlılık ve norm uygulama gibi davranışların insan çocuklarında belirgin olduğunu gösterir. Ortak dikkatin nöral temeli medial prefrontal ve temporoparyetal ağları içerir."
  ],
  crit: [
    "Primatlarla yapılan karşılaştırmaların, test koşullarının insan çocuklarına daha uygun olması nedeniyle farkı abarttığı ileri sürülmüştür.",
    "Bulguların büyük kısmı Batılı örneklemlerden gelir; işaret etme ve yardım etmenin yaşlarında kültürel farklar vardır ama sıra benzerdir."
  ],
  clinic: "Ortak dikkat, otizm taramasının çekirdeğidir: M-CHAT-R/F'nin kritik maddeleri paylaşmak için gösterme, işaret etme ve bakış takibidir. Ortak dikkati hedefleyen müdahaleler (JASPER; Kasari ve ark., 2006) RKÇ'lerde ortak dikkati ve sonraki dil gelişimini iyileştirmiştir.",
  primary: ["Tomasello, M. (1999). The cultural origins of human cognition. Harvard University Press.", "Tomasello, M., Carpenter, M., Call, J., Behne, T., & Moll, H. (2005). Understanding and sharing intentions: The origins of cultural cognition. Behavioral and Brain Sciences, 28(5), 675-691.", "Tomasello, M. (2019). Becoming human: A theory of ontogeny. Belknap Press."],
  exps: ["carpenter98", "warneken06", "rakoczy08", "kasari06"]
},
{
  id: "crittenden", fam: "bag", name: "Dinamik-Olgunlaşmacı Bağlanma ve Uyum Modeli (DMM)", who: "Patricia M. Crittenden", years: "1995-2016", rare: true,
  core: "Bağlanma örüntüleri 'güvenli' ve 'güvensiz' olarak değil, tehlikeye uyum sağlayan bilgi işleme stratejileri olarak görülmelidir. Çocuk tehlikeli bir ortamda bilişsel (zamansal sıra, sonuçlar) ya da duygusal (duygulanım) bilgiyi abartır veya küçümser. Olgunlaşmayla strateji repertuvarı genişler. 'Dağınık' kategorisi yerine, organize ama tehlikeye özgü stratejiler tanımlanır.",
  engine: "Tehlike ve olgunlaşma: yeni bilişsel yetenekler (dil, aldatma, soyut düşünce) yeni stratejileri mümkün kılar.",
  method: "Yaşa özgü değerlendirmeler: CARE-Index (bebeklik), Okul Öncesi Bağlanma Değerlendirmesi (PAA), okul çağı ve ergen değerlendirmeleri, DMM-AAI.",
  ev: 2, evNote: "Klinik örneklemlerde kullanılmaktadır, ama geçerlik çalışmalarının çoğu modelin geliştiricileri ve yakın çevresi tarafından yapılmıştır.",
  labels: ["Uyumsal işlev", "Klinik risk"],
  stages: [
    { from: 0, to: 1.5, name: "Bebeklik stratejileri", sub: "A1-2, B1-5, C1-2",
      task: "Bebek, bakımverenin tepkisinin öngörülebilirliğine göre olumsuz duygusunu bastırır (A), dengeli kullanır (B) ya da abartır (C).",
      ms: ["Kaçınan (A1-2)", "Dengeli (B1-5)", "İkircikli (C1-2)"], good: "Bakımverenin yakınlığını koruma", risk: "Tehlikeli ortamda erken strateji katılaşması",
      neuro: "Stres sisteminin bakımverenin öngörülebilirliğine göre ayarlanması." },
    { from: 1.5, to: 5, name: "Okul öncesi: zorlayıcı ve zorlantılı stratejiler", sub: "A3-4 ve C3-4",
      task: "Dil, aldatma ve zihin kuramıyla yeni stratejiler mümkün olur: zorlantılı bakımverme ya da uyma (A3-4); öfke ile çaresizlik arasında gidip gelen zorlayıcı strateji (C3-4).",
      ms: ["Zorlantılı uyma ya da bakımverme", "Tehdit edici-çaresiz döngü"], good: "Tutarsız bakımı öngörülebilir kılma", risk: "Klinik olarak karşı gelme, kaygı ya da 'ebeveynleşmiş çocuk'",
      neuro: "Zihin kuramı ve dilin gelişmesi aldatma ve strateji kullanımını mümkün kılar." },
    { from: 5, to: 12, name: "Okul çağı", sub: "Stratejilerin genellenmesi",
      task: "Stratejiler akran ve öğretmen ilişkilerine taşınır ve karmaşıklaşır.",
      ms: ["Akran ilişkilerinde stratejiler"], good: "Daha esnek uyum", risk: "Okulda davranış ya da içe yönelim sorunları",
      neuro: "Yürütücü işlevlerin gelişimi stratejilerin denetimini artırır." },
    { from: 12, to: 20, name: "Ergenlik: uç stratejiler", sub: "A5-8 ve C5-8",
      task: "Cinsel olgunlaşma ve soyut düşünceyle, ağır tehlike altında zorlantılı kendine yeterlilik, yalnızlaşma, saplantılı ya da paranoid stratejiler gibi uç stratejiler ortaya çıkabilir.",
      ms: ["Zorlantılı kendine yeterlilik (A5-6)", "Saplantılı-paranoid (C5-8)"], good: "Hayatta kalma", risk: "Kişilik bozukluğu ve adli sorunlar",
      neuro: "Soyut düşünme ve öz-değerlendirme ağlarının olgunlaşması." },
    { from: 20, to: 90, name: "Yetişkinlik", sub: "DMM-AAI",
      task: "Yetişkin stratejileri, çözülmemiş kayıp ve travma değiştiricileri; ebeveynlikte stratejilerin aktarımı.",
      ms: ["Çözülmemiş travma ve kayıp", "Ebeveynlik"], good: "Bütünleşik (B) strateji, sonradan kazanılmış güvenlik", risk: "Kuşaklararası tehlike döngüsü",
      neuro: "-" }
  ],
  bio: [
    "Model, stratejileri amigdala, HPA ekseni ve ödül sistemi gibi tehlike ve güvenlikle ilgili sistemlerin bilgi işleme biçimleriyle ilişkilendirir. Bu bağlantılar kavramsal düzeydedir."
  ],
  crit: [
    "Spieker ve Crittenden (2010), 306 okul öncesi kaydı iki sistemle sınıflandırdı; uyum yalnızca %50 idi. DMM sınıflamaları risk etkenleri ve sonraki çocuk sonuçlarıyla daha güçlü ilişkiliydi, ancak çalışma modelin geliştiricisinin katılımıyla yapılmıştır.",
    "Değerlendirme eğitimi uzun, kodlama karmaşıktır; bağımsız ekiplerden gelen kanıt sınırlıdır."
  ],
  clinic: "Aile terapisi, koruyucu aile ve velayet değerlendirmelerinde (özellikle İngiltere, İskandinavya ve İtalya'da) kullanılır. Tanıdan çok işlevsel formülasyonu vurgular: belirti, çocuğun tehlikeye uyum stratejisi olarak anlaşılır.",
  primary: ["Crittenden, P. M. (2008). Raising parents: Attachment, parenting and child safety. Willan.", "Crittenden, P. M., & Landini, A. (2011). Assessing adult attachment: A dynamic-maturational approach to discourse analysis. W. W. Norton.", "Crittenden, P. M. (2016). Raising parents (2nd ed.). Routledge."],
  exps: ["spieker10"]
},
{
  id: "selman", fam: "ahl", name: "Sosyal bakış açısı alma", who: "Robert L. Selman", years: "1971-1980", rare: true,
  core: "Kişilerarası anlayış, kendi bakış açısını başkalarınınkinden ayırt edebilme ve bunları eşgüdümleyebilme düzeylerine göre gelişir. Bu düzeyler arkadaşlık anlayışını, çatışma çözme stratejilerini ve ahlaki muhakemeyi belirler.",
  engine: "Bilişsel gelişim ve sosyal deneyim.",
  method: "Kişilerarası ikilemler (ör. 'Holly ağaca tırmanmalı mı?') ile klinik görüşme; boylamsal izlem.",
  ev: 3, evNote: "Düzeylerin sırası boylamsal olarak desteklenmiştir; yaş aralıkları geniştir ve birbiriyle örtüşür.",
  labels: ["Kazanım", "Sınırlılık"],
  stages: [
    { from: 3, to: 6, name: "Düzey 0: Benmerkezci", sub: "Ayrımlaşmamış bakış",
      task: "Çocuk kendi bakış açısı ile başkasınınkini ayırt etmez; başkasının da kendisi gibi hissettiğini varsayar.",
      ms: ["Arkadaş = şu an birlikte oynanan kişi"], good: "-", risk: "Çatışmada fiziksel güç",
      neuro: "Zihin kuramının henüz oluşmadığı dönem." },
    { from: 5, to: 9, name: "Düzey 1: Öznel", sub: "Sosyal-bilgisel",
      task: "Başkasının farklı bilgisi ve bakış açısı olabileceğini anlar, ama ilişki tek yönlüdür.",
      ms: ["Arkadaş = bana iyilik yapan kişi"], good: "Farklı bilgi anlayışı", risk: "Tek yönlü talepler",
      neuro: "Birinci derece yanlış inanç (4-5 yaş) kazanılmıştır." },
    { from: 7, to: 12, name: "Düzey 2: Öz-yansıtıcı", sub: "Karşılıklı",
      task: "Başkasının bakış açısından kendine bakabilir; karşılıklılık, ama 'iyi havada işbirliği'.",
      ms: ["İkinci derece zihin kuramı (6-7 yaş)", "Karşılıklı arkadaşlık"], good: "Karşılıklılık", risk: "Çatışmada ilişkinin kopması",
      neuro: "Zihin kuramı ağının olgunlaşmasının sürmesi." },
    { from: 10, to: 15, name: "Düzey 3: Üçüncü kişi", sub: "Karşılıklı ve dışarıdan bakış",
      task: "İlişkiye dışarıdan, tarafsız bir üçüncü kişinin gözüyle bakabilir; ilişkinin kendisi bir değer kazanır.",
      ms: ["Kalıcı, karşılıklı destek sağlayan dostluk"], good: "Uzlaşma", risk: "Sahiplenici dostluk",
      neuro: "Ergenlikte sosyal beyin ağlarının yeniden düzenlenmesi (Blakemore)." },
    { from: 14, to: 90, name: "Düzey 4: Toplumsal", sub: "Derin ve toplumsal bakış",
      task: "Toplumsal sistemin ve bilinçdışı motivasyonların bakış açısını alabilir.",
      ms: ["Özerk ama karşılıklı bağımlı ilişkiler"], good: "Olgun kişilerarası anlayış", risk: "-",
      neuro: "-" }
  ],
  bio: [
    "Düzey geçişleri zihin kuramındaki gelişmeyle paraleldir: birinci derece yanlış inanç ~4-5 yaşta, ikinci derece ~6-7 yaşta kazanılır; ergenlikte sosyal biliş ağları (mPFC, TPJ) yeniden düzenlenir."
  ],
  crit: [
    "Sözel görüşmeye dayanır ve dil becerisini de ölçer.",
    "Bakış açısı alma kapasitesi ile gerçek sosyal davranış arasındaki ilişki orta düzeydedir."
  ],
  clinic: "Çift terapisi (pair therapy) ve sosyal beceri programlarına temel oluşturmuştur. Davranım bozukluğu ve saldırganlıkta düşmanca niyet yükleme yanlılığı (Dodge'un sosyal bilgi işleme modeli; meta-analiz: Orobio de Castro ve ark., 2002) bu alanın klinik karşılığıdır.",
  primary: ["Selman, R. L. (1980). The growth of interpersonal understanding: Developmental and clinical analyses. Academic Press.", "Selman, R. L., & Schultz, L. H. (1990). Making a friend in youth: Developmental theory and pair therapy. University of Chicago Press."],
  exps: ["selman71", "dodge02"]
}
);
