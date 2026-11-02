/* Kuramlar (8/10): Psikanalitik gelenekten az bilinen ek kuramlar.
   clinic = klinik uygulama, primary = temel kaynaklar (APA). */
ATLAS.theories.push(
{
  id: "afreud", fam: "psa", name: "Gelişim çizgileri", who: "Anna Freud", years: "1936-1965", rare: true,
  core: "Gelişim tek bir libido çizelgesiyle değil, birbirine paralel ilerleyen 'gelişim çizgileri'yle değerlendirilmelidir: bağımlılıktan duygusal kendine yetmeye, emmeden akılcı beslenmeye, ıslaklıktan mesane kontrolüne, beden bakımında sorumsuzluktan sorumluluğa, benmerkezcilikten arkadaşlığa, bedenden oyuncağa ve oyundan işe. Çizgiler arasındaki belirgin dengesizlik (bir alanda ileri, diğerinde geride olmak) patolojinin göstergesidir.",
  engine: "Dürtü ve ego gelişiminin çevreyle etkileşimi; çizgiler arası uyum ya da uyumsuzluk.",
  method: "Hampstead Savaş Kreşleri ve Hampstead Çocuk Terapisi Kliniği'nde gözlem; 'Gelişim Profili' ile sistematik vaka değerlendirmesi.",
  ev: 2, evNote: "Gelişimin alanlar arasında eşzamansız ilerlediği fikri bugünkü çok boyutlu değerlendirmenin temelidir; çizgilerin kendisi sistematik olarak sınanmamıştır.",
  stages: [
    { from: 0, to: 0.5, name: "Biyolojik birlik", sub: "Bağımlılıktan kendine yetmeye · 1. basamak",
      task: "Anne-bebek ikilisi tek bir birim gibi işler; bebek ihtiyaçlarının dışarıdan karşılandığını henüz ayırt etmez.",
      ms: ["Emme ve beslenme ritmi", "Bedensel bakımla yatışma"], good: "Temel güvenlik", risk: "Erken ayrılık ve bakım kesintisi",
      neuro: "Stres ve uyarılma düzenlemesi bakımverene bağımlıdır (eş düzenleme)." },
    { from: 0.5, to: 1, name: "İhtiyaç doyurucu ilişki", sub: "Anaklitik ilişki",
      task: "Nesne, ihtiyacı karşıladığı ölçüde önemlidir; ihtiyaç giderilince ilgi azalır.",
      ms: ["Beslenmede seçicilik", "Emmeden kaşığa geçiş başlangıcı"], good: "Belirli bir bakımverenle ilişki", risk: "Doyum ile sevgi arasındaki karışıklık",
      neuro: "Ödül öğrenmesi ve bakımverenin tanınması; seçici bağlanmanın başlangıcı." },
    { from: 1, to: 2, name: "Nesne sürekliliği", sub: "İhtiyaçtan bağımsız ilişki",
      task: "Anne, ihtiyaç olmadığında da içsel bir temsil olarak korunur; ilişki doyumdan bağımsızlaşır.",
      ms: ["Bedenden oyuncağa: geçiş nesnesi", "Kendi kendine yemeye başlama"], good: "Kalıcı bağ", risk: "Ayrılıklarda temsilin çökmesi",
      neuro: "Çalışma belleği ve temsil kapasitesinin gelişmesi." },
    { from: 2, to: 3, name: "Ön-Ödipal ikircikli ilişki", sub: "Yapışma ve kontrol",
      task: "Çocuk nesneye hem yapışır hem onu kontrol etmeye ve egemenlik kurmaya çalışır.",
      ms: ["Islaklıktan kuruluğa: tuvalet kontrolü", "İnatlaşma"], good: "Özerklik ve kontrol", risk: "Ebeveynle güç mücadelesinin kronikleşmesi",
      neuro: "Pontin işeme merkezinin kortikal kontrolü; çaba gerektiren kontrolün doğuşu." },
    { from: 3, to: 5, name: "Ödipal evre", sub: "Nesneye yönelik ilişki",
      task: "Karşı cinsten ebeveyni sahiplenme, kıskançlık ve rekabet; ebeveynle özdeşim.",
      ms: ["Benmerkezcilikten arkadaşlığa: ilk oyun arkadaşları", "Beden bakımında kısmi sorumluluk"], good: "Özdeşim, vicdan", risk: "Yoğun suçluluk",
      neuro: "Zihin kuramının gelişmesi ve sosyal duyguların karmaşıklaşması." },
    { from: 5, to: 11, name: "Latans", sub: "Akranlar ve toplumsal idealler",
      task: "İlgi ebeveynden akranlara, öğretmenlere ve toplumsal ideallere kayar.",
      ms: ["Oyundan işe: görev tamamlama", "Arkadaşlık"], good: "Beceri ve sosyal bağlar", risk: "Okul ve akran sorunları",
      neuro: "Adrenarş, yürütücü işlevlerdeki hızlanma." },
    { from: 11, to: 13, name: "Ön ergenlik", sub: "Geçici gerileme",
      task: "Dürtü artışıyla eski, ihtiyaç doyurucu tutumlara geçici dönüş.",
      ms: ["Huysuzluk, düzensizlik", "Ebeveyne karşı ikirciklilik"], good: "Gelişimin hizmetinde gerileme", risk: "Gerilemenin kalıcılaşması",
      neuro: "Gonadarşın başlaması, ödül sisteminin duyarlılaşması." },
    { from: 13, to: 19, name: "Ergenlik", sub: "Kopuş mücadelesi",
      task: "Ebeveyn bağlarından kopma ve aile dışı nesnelere yönelme. Anna Freud ergenliğe özgü savunmaları tanımladı: çilecilik ve entelektüalizasyon.",
      ms: ["Çilecilik, entelektüalizasyon", "Aile dışı bağlar"], good: "Özerk yetişkin ilişkileri", risk: "Ergenlikteki çalkantının patolojiden ayırt edilememesi",
      neuro: "Prefrontal-limbik yeniden yapılanma; ebeveyn tamponlamasının azalması." }
  ],
  bio: [
    "Anna Freud pediatrinin ve gözlemin önemini vurguladı. Gelişim çizgileri fikri, farklı nöral sistemlerin farklı hızlarda olgunlaştığını gösteren bulgularla (Gogtay ve ark., 2004) örtüşür: alanlar arası eşzamansızlık beklenen bir durumdur, ancak aşırısı klinik önem taşır."
  ],
  crit: [
    "Çizgiler betimseldir; basamakların sırası ve zamanlaması bağımsız olarak doğrulanmamıştır.",
    "Freud ve Dann'in (1951) Theresienstadt'tan kurtarılan altı çocuğu izlediği çalışma, akran bağlarının anne yokluğunu kısmen telafi edebildiğini göstererek kuramın anne merkezli varsayımlarını da sorgulamıştır."
  ],
  clinic: "'Ego ve Savunma Mekanizmaları' (1936), savunmaların sistematik sınıflamasını başlattı; çocuk psikiyatrisinde ego işlevlerinin ve savunmaların değerlendirilmesi bu geleneğe dayanır. Gelişim Profili, belirtiyi yaşa ve çizgiler arası dengeye göre yorumlamayı öğretir. Kurduğu klinik bugün Anna Freud Ulusal Çocuk ve Aile Merkezi adıyla mentalizasyon temelli tedavilerin merkezlerinden biridir.",
  primary: ["Freud, A. (1936). Das Ich und die Abwehrmechanismen. Internationaler Psychoanalytischer Verlag.", "Freud, A. (1965). Normality and pathology in childhood: Assessments of development. International Universities Press.", "Freud, A., & Dann, S. (1951). An experiment in group upbringing. The Psychoanalytic Study of the Child, 6, 127-168."],
  exps: ["freuddann51"]
},
{
  id: "kohut", fam: "psa", name: "Kendilik psikolojisi", who: "Heinz Kohut", years: "1971-1984", rare: true,
  core: "Narsisizm olgunlaşmamış bir sevgi biçimi değil, kendi gelişim çizgisine sahip ayrı bir alandır. Kendilik, ebeveynin 'kendilik-nesnesi' işlevleriyle oluşur: çocuğun büyüklenmeci kendiliğini aynalamak, idealleştirilebilen sakinleştirici bir figür olmak ve benzerlik (ikizlik) deneyimi sunmak. Ölçülü ve yönetilebilir 'optimal düş kırıklıkları' bu işlevlerin çocuğun kendi yapısına dönüşmesini (dönüştürücü içselleştirme) sağlar.",
  engine: "Empatik aynalama, idealleştirme ve ikizlik ihtiyaçları; optimal düş kırıklığı ve dönüştürücü içselleştirme.",
  method: "Narsisistik kişilik bozukluğu olan yetişkinlerin psikanalizinde gözlenen aktarım biçimleri (aynalama, idealleştirme, ikizlik).",
  ev: 1, evNote: "Gelişimsel iddialar doğrudan sınanmamıştır; kendilik psikolojisi temelli tedavilerin RKÇ kanıtı sınırlıdır.",
  labels: ["Sağlıklı sonuç", "Kendilik bozukluğu riski"],
  stages: [
    { from: 0, to: 0.5, name: "Parçalı kendilik", sub: "Kendilik çekirdekleri",
      task: "Deneyimler henüz bütünleşik bir kendilikte toplanmamıştır; bakımverenin tutarlı yanıtı bütünleşmeyi destekler.",
      ms: ["Bedensel ve duygusal durumların bakımverence düzenlenmesi"], good: "Bütünleşme", risk: "Parçalanma kaygısı",
      neuro: "Duygu düzenlemesi büyük ölçüde dışsaldır." },
    { from: 0.5, to: 3, name: "İki kutuplu arkaik kendilik", sub: "Büyüklenmeci kendilik ve idealleştirilen ebeveyn imgosu",
      task: "Çocuğun teşhirci coşkusu 'annenin gözündeki parıltı' ile aynalanır; aynı zamanda güçlü ve sakin bir ebeveyne katılarak yatışır.",
      ms: ["Gösterme ve övülme isteği", "Ebeveyni yüceltme", "Yatıştırılma"], good: "Sağlıklı hırs ve kendini yatıştırma kapasitesinin tohumları", risk: "Aynalanmama: boşluk, kırılgan özsaygı; idealleştirme başarısızlığı: kendini yatıştıramama",
      neuro: "İşaretli aynalama (Gergely ve Watson) çocuğun kendi duygusunu tanımasını sağlar; eş düzenlemeden öz-düzenlemeye geçiş." },
    { from: 3, to: 6, name: "Ödipal dönem", sub: "Kohut'a göre bir 'neşe' dönemi",
      task: "Ebeveyn çocuğun rekabetçi ve şefkatli duygularına empatik ve gururlu yanıt verirse Ödipal dönem bir çatışmadan çok gelişim fırsatıdır.",
      ms: ["Cinsiyet kimliği", "Rekabet ve şefkat"], good: "Ödipal neşe, sağlam kendilik", risk: "Ebeveynin rekabetçi ya da baştan çıkarıcı yanıtı",
      neuro: "Zihin kuramının gelişimiyle sosyal duyguların karmaşıklaşması." },
    { from: 6, to: 12, name: "İkizlik ve beceriler", sub: "Alter ego ihtiyacı",
      task: "Kendine benzeyenlerle benzerlik deneyimi; yetenek ve beceriler hırs ile idealler arasındaki 'gerilim yayını' doldurur.",
      ms: ["Akranlarla benzerlik", "Beceri kazanımı"], good: "Ait olma ve yeterlik", risk: "Yabancılaşma",
      neuro: "Sosyal karşılaştırma ve akran ilişkilerinin önem kazanması." },
    { from: 12, to: 90, name: "Olgun kendilik", sub: "Kendilik-nesnesi ihtiyacı yaşam boyu sürer",
      task: "Olgun özsaygı, gerçekçi hırslar, içselleştirilmiş idealler, mizah, empati ve bilgelik. Kendilik-nesnesi ihtiyaçları ortadan kalkmaz, olgun ilişkilerle karşılanır.",
      ms: ["Gerçekçi özsaygı", "Değerler ve idealler"], good: "Esnek kendilik", risk: "Narsisistik kişilik bozukluğu, narsisistik öfke",
      neuro: "Özsaygı düzenlemesi medial prefrontal ve ödül ağlarıyla ilişkilendirilmiştir." }
  ],
  bio: [
    "Kohut'un aynalama kavramı, bebek araştırmalarındaki duygulanım uyumlanması (Stern) ve işaretli aynalama (Gergely ve Watson) bulgularıyla kavramsal olarak örtüşür. Doğrudan biyolojik bir model önermemiştir."
  ],
  crit: [
    "Gelişim modeli yetişkin aktarımlarından geriye doğru çıkarılmıştır.",
    "Brummelman ve arkadaşlarının (2015) boylamsal çalışmasında çocuklardaki narsisizmi ebeveynin sıcaklık eksikliği değil, çocuğu aşırı değerli görmesi öngördü. Bu bulgu, narsisizmi empatik yanıt eksikliğine bağlayan psikanalitik açıklamalara karşı sosyal öğrenme açıklamasını destekler."
  ],
  clinic: "Kendilik psikolojisi psikoterapisi empatik ayarlanmayı, kopuş-onarım döngülerini ve aynalama, idealleştirme ile ikizlik aktarımlarının tanınmasını vurgular. Narsisistik kişilik bozukluğunda 'kırılgan' (vulnerable) narsisizm kavramının gelişmesine katkı yapmıştır. Kanıt temeli büyük ölçüde vaka çalışmalarıdır.",
  primary: ["Kohut, H. (1971). The analysis of the self. International Universities Press.", "Kohut, H. (1977). The restoration of the self. International Universities Press.", "Kohut, H. (1984). How does analysis cure? University of Chicago Press."],
  exps: ["brummelman15"]
},
{
  id: "kernberg", fam: "psa", name: "Nesne ilişkileri gelişim evreleri", who: "Otto F. Kernberg", years: "1975-1976", rare: true,
  core: "Erken deneyimler 'kendilik-nesne-duygulanım' birimleri olarak içselleştirilir. Önce olumlu ve olumsuz duygulanımla yüklü birimler ayrı tutulur (bölme). Sağlıklı gelişimde bunlar bütünleşerek gerçekçi ve ikirciklik taşıyan kendilik ve nesne temsillerine dönüşür. Bütünleşmenin başarısızlığı, sınır kişilik örgütlenmesinin (kimlik dağınıklığı, ilkel savunmalar, korunmuş gerçeği değerlendirme) temelidir.",
  engine: "Duygulanımla yüklü kendilik-nesne birimlerinin farklılaşması ve bütünleşmesi.",
  method: "Sınır ve narsisistik hastaların psikanalitik tedavisi; Mahler'in gelişim modeliyle sentez; yapısal görüşme.",
  ev: 2, evNote: "Gelişim sırası geriye dönük çıkarıma dayanır. Kişilik örgütlenmesi kavramı ölçülebilir hale getirilmiştir (STIPO) ve türetilen tedavi (TFP) RKÇ'lerle sınanmıştır.",
  labels: ["Sağlıklı sonuç", "Takılma halinde örgütlenme"],
  stages: [
    { from: 0, to: 0.08, name: "Ayrımlaşmamış evre", sub: "1. evre (Mahler'in 'normal otizmi'ne dayanır)",
      task: "İyi kendilik-nesne temsilinin oluşmasından önceki dönem.",
      ms: ["Fizyolojik düzenleme"], good: "-", risk: "-",
      neuro: "Yenidoğan araştırmaları bu dönemin varsayıldığı kadar 'ayrımlaşmamış' olmadığını gösterir." },
    { from: 0.08, to: 0.5, name: "Ayrımlaşmamış kendilik-nesne temsilleri", sub: "2. evre",
      task: "'İyi' ve 'kötü' birimler ayrı tutulur; kendilik ile nesne henüz ayrışmamıştır.",
      ms: ["Duygusal durumlara göre örgütlenen deneyim"], good: "İyi deneyimlerin içselleştirilmesi", risk: "Takılma: psikotik örgütlenme",
      neuro: "Duygular ağırlıkla subkortikal sistemlerle düzenlenir." },
    { from: 0.5, to: 3, name: "Kendilik ve nesnenin ayrışması", sub: "3. evre",
      task: "Kendilik ve nesne birbirinden ayrışır, ama iyi ve kötü temsiller hâlâ bölünmüştür.",
      ms: ["Seçici bağlanma", "Öz-farkındalık", "Öfke nöbetleri"], good: "Ayrı bir kendilik", risk: "Takılma: sınır kişilik örgütlenmesi",
      neuro: "Ayrı kendilik temsilleri gelişir, ama prefrontal duygu düzenlemesi henüz zayıftır." },
    { from: 3, to: 6, name: "Bütünleşme", sub: "4. evre",
      task: "İyi ve kötü temsiller bütünleşir; ikircikli ama gerçekçi temsiller oluşur. Süperego bütünleşir ve bastırma bölmenin yerini alır.",
      ms: ["İkirciklik tutabilme", "Suçluluk", "Bastırma"], good: "Nevrotik ya da sağlıklı örgütlenme", risk: "Takılma: nevrotik örgütlenme",
      neuro: "Prefrontal-amigdala düzenleyici devrelerin gelişmesi; zihin kuramı." },
    { from: 6, to: 90, name: "Süperego ve kimliğin pekişmesi", sub: "5. evre",
      task: "Tutarlı kimlik, olgun nesne ilişkileri ve bütünleşmiş değerler.",
      ms: ["Tutarlı kimlik", "Derin ve istikrarlı ilişkiler"], good: "Olgun kişilik örgütlenmesi", risk: "Ergenlikte kimlik krizi ile kimlik dağınıklığının ayırt edilmesi gerekir",
      neuro: "Kimlik bütünleşmesi ergenlikteki sosyal beyin yeniden yapılanmasıyla devam eder." }
  ],
  bio: [
    "Kernberg'in tanımladığı kimlik dağınıklığı ve duygu düzenleme güçlüğü, sınır kişilik bozukluğunda gösterilen amigdala aşırı tepkiselliği ve prefrontal düzenlemenin zayıflığıyla klinik olarak örtüşür. Kernberg de mizacın (duygulanım yoğunluğu) yapısal bir etken olduğunu kabul eder."
  ],
  crit: [
    "Gelişim sırası Mahler'in modeline dayandığından onun eleştirilerini de taşır.",
    "Evreler çocuklarda gözlenmemiş, yetişkin hastalardan geriye dönük olarak çıkarılmıştır."
  ],
  clinic: "Aktarım Odaklı Psikoterapi (TFP) sınır kişilik bozukluğunda RKÇ'lerle sınanmıştır (Clarkin ve ark., 2007; Doering ve ark., 2010). Yapısal görüşme ve STIPO-R ile nevrotik, sınır ve psikotik kişilik örgütlenmesi ayrımı yapılır. Ergenler için uyarlaması (TFP-A, Normandin) vardır.",
  primary: ["Kernberg, O. F. (1975). Borderline conditions and pathological narcissism. Jason Aronson.", "Kernberg, O. F. (1976). Object relations theory and clinical psychoanalysis. Jason Aronson."],
  exps: ["clarkin07", "brummelman15"]
},
{
  id: "blos", fam: "psa", name: "Ergenlik ve ikinci bireyleşme", who: "Peter Blos", years: "1962-1967", rare: true,
  core: "Ergenlik, bebeklikteki ayrılma-bireyleşmenin ikinci bir tekrarıdır. Genç, içselleştirilmiş ebeveyn imgelerinden kopar (idealize etmeme), bu kopuşun yasını tutar ve aile dışı sevgi nesnelerine yönelir. Bu süreçteki geçici gerileme normatiftir ve gelişime hizmet eder.",
  engine: "Puberteyle artan dürtüler ve içsel ebeveyn temsillerinden kopuş.",
  method: "Ergenlerle psikanalitik çalışma ve klinik gözlem.",
  ev: 2, evNote: "Ebeveynden duygusal özerkleşme ve akran etkisine artan yatkınlık ölçülmüş ve desteklenmiştir; ergenlikte 'normatif fırtına' varsayımı ise desteklenmez.",
  stages: [
    { from: 10, to: 12, name: "Ön ergenlik", sub: "Dürtülerde nicel artış",
      task: "Pregenital (oral, anal) ilgilere geçici dönüş. Erkeklerde karşı cinsten kaçınma, kızlarda daha erken ve etkin yönelim.",
      ms: ["Huzursuzluk, dağınıklık", "Aynı cinsle gruplaşma"], good: "Gelişimin hizmetinde gerileme", risk: "Gerilemenin kalıcılaşması",
      neuro: "Gonadarşın başlaması ve ödül sisteminin duyarlılaşması." },
    { from: 12, to: 14, name: "Erken ergenlik", sub: "Ebeveyn nesnelerinden çekilme",
      task: "Ebeveynler idealize edilmez; aynı cinsten arkadaş idealleştirilir; süperego gevşer.",
      ms: ["Ebeveynle çatışma", "İdealleştirilen arkadaş"], good: "Duygusal özerkliğin başlangıcı", risk: "Boşluk ve yalnızlık",
      neuro: "Duygusal özerklik erken ergenlikte artar; akran baskısına yatkınlık ~14 yaşta zirve yapar (Steinberg ve Silverberg, 1986)." },
    { from: 14, to: 17, name: "Asıl ergenlik", sub: "Nesne bulma, yas ve âşık olma",
      task: "Ödipal çatışmalar yeniden canlanır; romantik bir nesne bulunur. Yoğun duygular, narsisistik içe çekilme, yas ve âşık olma.",
      ms: ["İlk romantik ilişkiler", "Yoğun duygulanım", "Günlük, şiir, idealler"], good: "Aile dışı sevgi nesnesi", risk: "Depresif çöküş",
      neuro: "Puberte hormonlarının limbik sistemi yeniden şekillendirmesi; ebeveyn tamponlamasının azalması." },
    { from: 17, to: 20, name: "Geç ergenlik", sub: "Karakter oluşumu",
      task: "İstikrarlı kimlik, cinsel kimliğin pekişmesi, yaşam görevlerinin seçimi.",
      ms: ["Meslek ve değer seçimi", "Tutarlı karakter"], good: "Karakter", risk: "Kimlik dağınıklığı",
      neuro: "Prefrontal-limbik bağlantıların güçlenmesi." },
    { from: 20, to: 25, name: "Ergenlik sonrası", sub: "Yetişkin rollerine geçiş",
      task: "Kişiliğin yetişkin rollerle bütünleşmesi; ebeveynle yeni, eşitler arası ilişki.",
      ms: ["Ekonomik bağımsızlık", "Ebeveynle yeniden yakınlaşma"], good: "Olgun özerklik", risk: "Uzayan ergenlik",
      neuro: "Beyaz cevher ve öz-düzenlemenin olgunlaşmasının sürmesi." }
  ],
  bio: [
    "Blos'un ebeveyn imgelerinden kopuş kavramı, ebeveyn varlığının ergenlikte amigdala ve kortizol tepkisini çocukluktaki kadar tamponlamadığını gösteren bulgularla (Gee ve ark., 2014; Hostinar ve ark., 2015) biyolojik bir paralellik taşır."
  ],
  crit: [
    "Kuram klinik örneklemlere dayanır ve ergenliği bir 'fırtına' dönemi olarak genellemeye yatkındır. Offer'ın normal ergen çalışmaları ve Arnett'in (1999) değerlendirmesi, çatışma ve duygudurum dalgalanmalarının arttığını ama ergenlerin çoğunun ağır bir kriz yaşamadığını gösterir.",
    "Erkek gelişimi merkezlidir ve özerkliğin ayrışmayla eşitlenmesi kültürel olarak sorgulanmıştır (Kağıtçıbaşı)."
  ],
  clinic: "Ergen psikoterapisinde gerilemenin ve ebeveynle çatışmanın normatif mi yoksa patolojik mi olduğunu değerlendirmek için kullanılır. Laufer'in 'gelişimsel çöküş' kavramı bu çizginin devamıdır. Yeni ruhsal bozuklukların bu yaşlarda başladığı düşünüldüğünde, normatif çalkantıyı psikopatolojiden ayırmak klinik olarak kritiktir.",
  primary: ["Blos, P. (1962). On adolescence: A psychoanalytic interpretation. Free Press.", "Blos, P. (1967). The second individuation process of adolescence. The Psychoanalytic Study of the Child, 22, 162-186."],
  exps: ["steinberg86", "gee13"]
}
);
