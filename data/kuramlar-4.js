/* Kuramlar (4/7): Bağlanma ve öznelerarasılık kuramları. */
ATLAS.theories.push(
{
  id: "bowlby", fam: "bag", name: "Bağlanma", who: "John Bowlby ve Mary Ainsworth", years: "1969-1982", rare: false,
  core: "Bağlanma, tehlike anında bakımverene yakınlığı koruyarak hayatta kalmayı sağlayan, evrimsel olarak seçilmiş bir davranış sistemidir. Bebek bakımverenin ulaşılabilirliği ve duyarlılığına göre 'içsel çalışma modelleri' kurar; bu modeller sonraki ilişkilere taşınır.",
  engine: "Bağlanma ve keşif sistemleri arasındaki denge; bakımverenin duyarlılığı.",
  method: "Etoloji (Lorenz, Hinde), hayvan deneyleri (Harlow), ayrılık gözlemleri (Robertson), Yabancı Durum Prosedürü ve Yetişkin Bağlanma Görüşmesi.",
  ev: 4, evNote: "Gelişim psikolojisinin en güçlü ampirik temele sahip kuramlarından biridir; deneysel, boylamsal, kültürlerarası ve biyolojik kanıtla desteklenir.",
  stages: [
    { from: 0, to: 0.12, name: "Ön-bağlanma", sub: "0-6 hafta",
      task: "Ağlama, gülümseme ve bakma gibi sinyaller herhangi bir yetişkine yöneliktir; bebek yakınlığı sağlamak için hazır gelir.",
      ms: ["Ağlama, tutunma", "Anne sesini ve kokusunu tanıma"], good: "Yakınlık sinyalleri", risk: "Bakımın yokluğu",
      neuro: "Yenidoğan anne sesini ve kokusunu tanır; bu tercih prenatal deneyime dayanır." },
    { from: 0.12, to: 0.6, name: "Oluşmakta olan bağlanma", sub: "6 hafta - 6/8 ay",
      task: "Bebek tanıdık kişilere farklı yanıt verir, ama ayrılığı henüz protesto etmez.",
      ms: ["Tanıdık yüze farklı gülümseme", "Tanıdık kişiyle daha çabuk yatışma"], good: "Tercihli ilişki", risk: "Duyarsız ya da tutarsız bakım",
      neuro: "Oksitosin ve endojen opioid sistemleri anne-bebek eşzamanlılığıyla ilişkilidir (Feldman); bakımın kalitesi stres sistemini ayarlar." },
    { from: 0.6, to: 2, name: "Belirgin bağlanma", sub: "6/8 ay - 18/24 ay",
      task: "Seçici bağlanma kurulur: ayrılık protestosu, yabancı kaygısı ve bakımvereni güvenli üs olarak kullanma. Yabancı Durum Prosedürü bu dönemde (12-18 ay) uygulanır.",
      ms: ["Ayrılık protestosu", "Güvenli üs davranışı", "Bağlanma örüntüsü: güvenli (B), kaçınan (A), kaygılı-ikircikli (C), dağınık (D)"],
      good: "Güvenli bağlanma: keşif ile yakınlık arasında esnek denge", risk: "Kaçınan, kaygılı ya da dağınık bağlanma; dağınık bağlanma sonraki psikopatolojiyle en güçlü ilişkiye sahiptir",
      neuro: "Bükreş projesinde 24 aydan önce aileye yerleştirilen çocuklarda güvenli bağlanma oranı daha yüksektir; bağlanma için bir duyarlı dönem olduğunu düşündürür." },
    { from: 2, to: 5, name: "Amaca göre düzeltilmiş ortaklık", sub: "24 ay +",
      task: "Dil ve zihin kuramıyla çocuk bakımverenin hedeflerini anlar; ayrılıklar konuşularak ve pazarlıkla yönetilir.",
      ms: ["'Ne zaman döneceksin?'", "Ayrılığa sözel hazırlık", "Ortak planlar"], good: "Karşılıklı ve esnek ilişki", risk: "Rol değişimi, ebeveyni kontrol etme",
      neuro: "Zihin kuramı ve dil ağlarının gelişimi; çocuklukta annenin varlığı amigdala tepkisini tamponlar (Gee ve ark., 2014)." },
    { from: 5, to: 90, name: "İçsel çalışma modelleri", sub: "Yaşam boyu",
      task: "Bağlanma deneyimleri kendilik ve başkaları hakkındaki temsillere dönüşür; romantik ilişkilere ve ebeveynliğe taşınır.",
      ms: ["Yetişkin bağlanması: özerk, kayıtsız, saplantılı, çözülmemiş", "Romantik bağlanma (Hazan ve Shaver)", "Kuşaklararası aktarım"], good: "Özerk-güvenli zihin durumu", risk: "Çözülmemiş travma ve kayıp",
      neuro: "Ebeveynin bağlanma temsili (AAI) bebeğin bağlanmasını meta-analitik olarak öngörür; bağlanma güvenliği yetişkinlikte stres tepkisi ve duygu düzenleme ağlarıyla ilişkilidir." }
  ],
  bio: [
    "Bowlby, Lorenz'in damgalanma ve Hinde'nin etoloji çalışmalarından yola çıktı. Harlow'un yavru maymunları beslenmeden çok temas rahatlığına bağlandığını gösterdi; bu, bağlanmanın 'besleyene duyulan sevgi' olduğu dürtü kuramlarını çürüttü.",
    "Meaney'nin sıçan çalışmaları, annenin bakım davranışının yavrunun stres genlerini epigenetik olarak programladığını gösterdi. Panksepp ayrılık sıkıntısını opioid ve oksitosinle düzenlenen subkortikal bir 'PANİK/YAS' sistemine bağladı.",
    "İnsanda kurumsal yoksunluk (BEIP, ERA) beyin hacmi, EEG etkinliği ve HPA ekseni üzerinde kalıcı izler bırakır; erken aile bakımı bu etkileri kısmen önler."
  ],
  crit: [
    "Tek bir birincil bağlanma figürü (monotropi) iddiası, çoklu bakımverenli toplumlarda (Efe, Aka) yapılan gözlemlerle sorgulanmıştır.",
    "Yabancı Durum Prosedürünün kültürel geçerliliği tartışılır: kaygılı-ikircikli örüntü Japonya'da, kaçınan örüntü Almanya'da daha sıktır.",
    "Erken bağlanmanın yetişkinliğe sürekliliği orta düzeydedir ve yaşam olaylarıyla değişir. Duyarlılık ile bağlanma arasındaki ilişki de orta düzeydedir ('aktarım boşluğu'); mizacın katkısı tartışılmaktadır."
  ],
  exps: ["harlow58", "ainsworth78", "robertson52", "dewolff97", "fonagy91", "meaney04", "beip07", "era17", "gee13"]
},
{
  id: "stern", fam: "bag", name: "Benlik duyguları", who: "Daniel Stern", years: "1985", rare: true,
  core: "Bebek doğumdan itibaren kendini ve başkasını ayırt eder; 'simbiyotik' ya da 'otistik' bir evre yoktur. Gelişim, birbirinin yerine geçmeyen, üst üste eklenen ve yaşam boyu etkin kalan benlik duygusu katmanlarıyla ilerler.",
  engine: "Bebeğin algısal ve bilişsel kapasiteleri ile bakımverenin duygusal uyumlanması.",
  method: "Deneysel bebek araştırmalarının psikanalitik kuramla birleştirilmesi; anne-bebek etkileşimlerinin mikro analizi.",
  ev: 3, evNote: "Bebeğin erken sosyal kapasitelerine dair bulguların çoğu sağlamdır; yenidoğan taklidi gibi bazıları ise tartışmalı hale gelmiştir.",
  stages: [
    { from: 0, to: 0.17, name: "Beliren benlik", sub: "0-2 ay",
      task: "Bebek farklı duyulardan gelen deneyimleri birleştirir (amodal algı) ve deneyimin 'canlılık duygulanımlarını' (yükselen, sönen, patlayan) yaşar.",
      ms: ["Amodal algı: ağızla dokunduğu emziği gözle tanıma (Meltzoff ve Borton, 1979)", "Yüz ve ses tercihi"], good: "Örgütlenmenin doğuşu", risk: "-",
      neuro: "Çok duyulu bütünleşme subkortikal (superior kolikulus) ve erken kortikal yollarla sağlanır." },
    { from: 0.17, to: 0.58, name: "Çekirdek benlik", sub: "2-7 ay",
      task: "Bebek kendini eylemlerinin yazarı (faillik), bütünlüklü bir beden, kendine ait duygular ve süreklilik olarak deneyimler. 'Başkasıyla birlikte olma' deneyimleri biriktirilir.",
      ms: ["Yüz yüze karşılıklı oyun", "Olumsallık algısı", "Durgun yüze tepki"], good: "Çekirdek kendilik ve çekirdek ötekilik", risk: "Olumsallığın bozulması (ör. depresif bakımveren)",
      neuro: "Bebekler bakımverenin tepkilerinin zamanlamasına çok duyarlıdır; gecikmeli tepki etkileşimi bozar (Murray ve Trevarthen, 1985)." },
    { from: 0.58, to: 1.25, name: "Öznel benlik", sub: "7-15 ay",
      task: "Bebek iç durumların paylaşılabildiğini keşfeder: ortak dikkat, niyet paylaşımı ve duygulanım uyumlanması (annenin bebeğin duygusunu başka bir kipte yansıtması).",
      ms: ["Ortak dikkat", "Duygulanım uyumlanması", "Sosyal referans"], good: "Öznelerarası ilişki", risk: "Uyumlanmanın seçici ya da yanlış olması: bazı duygular 'paylaşılamaz' hale gelir",
      neuro: "9. ay devrimi (Tomasello): ortak dikkat ve işaret etme dorsomedial PFC ve sosyal dikkat ağlarıyla ilişkilidir." },
    { from: 1.25, to: 3, name: "Sözel benlik", sub: "15-18 ay ve sonrası",
      task: "Dil paylaşmayı kolaylaştırır ama deneyimi de böler: yaşanan deneyim ile söze dökülen arasında bir boşluk açılır.",
      ms: ["Aynada kendini tanıma", "Sembolik oyun", "Kendinden söz etme"], good: "Ortak anlam yaratma", risk: "Yaşanan ve anlatılan deneyimin ayrışması",
      neuro: "Dil ağlarının uzmanlaşması ve öz-farkındalık (18-24 ay)." },
    { from: 3, to: 90, name: "Anlatısal benlik", sub: "3-4 yaş ve sonrası",
      task: "Çocuk kendi yaşam öyküsünü anlatmaya başlar; benlik bir anlatı olarak örgütlenir.",
      ms: ["Otobiyografik anlatı", "Ebeveynle geçmişi birlikte anlatma"], good: "Tutarlı yaşam öyküsü", risk: "Parçalı, tutarsız anlatı",
      neuro: "Hipokampus-PFC ağları otobiyografik belleği destekler. Ebeveynin ayrıntılı anlatı tarzı çocuğun anılarının zenginliğini artırır (Fivush, Reese)." }
  ],
  bio: [
    "Stern, deneysel bebek araştırmasını psikanalizle birleştirdi. Durgun yüz, çift video ve ortak dikkat çalışmaları, bebeğin ilk aylardan itibaren etkileşime ayarlı bir sosyal varlık olduğunu gösterir.",
    "Feldman'ın 'biyodavranışsal eşzamanlılık' bulguları (anne ve bebek arasında kalp ritmi ve oksitosin uyumu) Stern'in uyumlanma kavramına biyolojik bir karşılık sunar."
  ],
  crit: [
    "Klinik olarak yeniden kurulan bebek ile deneysel olarak gözlenen bebek arasındaki köprü tartışmalıdır.",
    "Yenidoğan taklidi gibi kurama destek veren bazı bulgular büyük replikasyon çalışmalarında doğrulanamamıştır."
  ],
  exps: ["johnson91", "tronick78", "murray85", "meltzoff77", "lewis79"]
},
{
  id: "fonagy", fam: "bag", name: "Zihinselleştirme", who: "Peter Fonagy ve György Gergely", years: "1991-2002", rare: true,
  core: "Zihinselleştirme, kendinin ve başkalarının davranışlarını içsel durumlar (düşünce, duygu, niyet) üzerinden anlama kapasitesidir. Doğuştan gelmez: bakımverenin bebeğin zihnini aklında tutması ve onun duygularını 'işaretli' biçimde yansıtmasıyla gelişir.",
  engine: "Güvenli bağlanma içinde işaretli aynalama (sosyal biyogeribildirim) ve epistemik güven.",
  method: "Ebeveyn yansıtıcı işlev ölçümü (AAI üzerinden), gelişimsel deneyler, MBT ile klinik çalışmalar.",
  ev: 3, evNote: "Ebeveyn yansıtıcı işlevinin bebek bağlanmasını öngörmesi ve MBT'nin sınır kişilikte etkinliği desteklenmiştir. Ön-zihinselleştirme modlarının zamanlaması ise doğrudan sınanmamıştır.",
  stages: [
    { from: 0, to: 0.5, name: "Fiziksel fail", sub: "0-6 ay",
      task: "Bebek kendini ve başkalarını dünyada fiziksel etkiler yaratan varlıklar olarak anlar.",
      ms: ["Olumsallık algısı", "Bakımveren tepkisine duyarlılık"], good: "Faillik duygusu", risk: "Olumsallığın bozulması",
      neuro: "Bebekler kendi eylemleri ile çevredeki tepkiler arasındaki eşleşmeyi algılar (olumsallık algılama modülü, Gergely ve Watson)." },
    { from: 0.5, to: 1.5, name: "Teleolojik mod", sub: "9-18 ay",
      task: "Davranış görünür amaçlar ve fiziksel kısıtlar üzerinden anlaşılır. Bir şeyin anlamı ancak somut bir eylemle kanıtlanır.",
      ms: ["12 ayda 'akılcı eylem' beklentisi (Gergely ve Csibra)", "Amaca yönelik davranışı anlama"], good: "Amaç anlayışı", risk: "Yetişkinlikte bu moda geri dönüş: kendine zarar verme gibi somut 'kanıt' arayışı",
      neuro: "Amaca yönelik eylem algısında superior temporal sulkus ve fronto-parietal ağlar rol oynar." },
    { from: 1.5, to: 4, name: "Psişik eşdeğerlik ve 'mış gibi' modu", sub: "2-4 yaş",
      task: "İki ayrı mod: psişik eşdeğerlikte iç dünya dış gerçekliğe eşittir (korkulan canavar gerçekten oradadır); 'mış gibi' modunda ise iç dünya gerçeklikten tamamen kopuktur (oyunda).",
      ms: ["Gece korkuları", "Oyunda zengin hayal gücü"], good: "Oyunun koruyucu alanı", risk: "Yetişkinlikte psişik eşdeğerlik: 'Hissediyorsam doğrudur'",
      neuro: "Prefrontal ağlar henüz zihinsel durumu gerçeklikten ayırmayı tam olarak desteklemez." },
    { from: 4, to: 6, name: "Temsili zihinselleştirme", sub: "4-6 yaş",
      task: "İki mod bütünleşir: düşüncelerin gerçekliğin temsilleri olduğu ve yanlış olabileceği anlaşılır.",
      ms: ["Yanlış inanç görevi", "Görünüş-gerçeklik ayrımı"], good: "Zihin kuramı", risk: "Bütünleşmenin gecikmesi",
      neuro: "Temporoparyetal bileşke ve medial PFC zihin kuramı ağı olarak uzmanlaşır." },
    { from: 6, to: 90, name: "Yansıtıcı zihinselleştirme", sub: "Okul çağı ve sonrası",
      task: "İkinci derece inançlar, karışık duygular ve kendi zihnine yansıtıcı bakış gelişir. Ergenlikte geçici bir dalgalanma yaşanır; stres altında herkes ön-zihinselleştirme modlarına dönebilir.",
      ms: ["İkinci derece zihin kuramı", "Karışık duyguları anlama", "Kendini öyküleme"], good: "Esnek, merakla zihinselleştirme", risk: "Stres ve bağlanma etkinleşmesinde zihinselleştirmenin çökmesi",
      neuro: "Yüksek uyarılmada prefrontal korteks devreden çıkar ve otomatik, amigdala ağırlıklı tepkiler öne geçer (Arnsten; Luyten ve Fonagy'nin 'geçiş noktası' modeli)." }
  ],
  bio: [
    "Gergely ve Watson'ın 'sosyal biyogeribildirim' modeline göre bebek kendi duygusunu ilk kez annenin yüzünde, abartılı ve 'işaretli' bir yansıma olarak görür. İşaret, bu duygunun annenin değil bebeğin olduğunu anlatır.",
    "Zihinselleştirme ağı (mPFC, TPJ, prekuneus, temporal kutuplar) ile tehdit sistemleri arasındaki karşılıklı ketleme, stres altında zihinselleştirmenin neden çöktüğünü açıklar."
  ],
  crit: [
    "Kavram çok geniştir ve ölçümü (Yansıtıcı İşlev Ölçeği) emek yoğundur.",
    "MBT'nin etkinliği RKÇ'lerle gösterilmiştir, ama iyileşmenin gerçekten zihinselleştirmenin artmasından kaynaklandığı daha az açıktır."
  ],
  exps: ["fonagy91", "wimmer83", "onishi05", "tronick78"]
}
);
