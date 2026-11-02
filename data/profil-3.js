/* Ayrıntılı kuram profilleri (3/3): Bowlby ve Ainsworth, Vygotsky. */
ATLAS.profiles = ATLAS.profiles || {};

ATLAS.profiles.bowlby = {
  life: "John Bowlby: 26 Şubat 1907, Londra – 2 Eylül 1990, Skye Adası · Mary Ainsworth: 1913, Glendale, Ohio – 1999, Charlottesville",
  bio: [
    "Bowlby varlıklı bir cerrah ailesinde, çoğunlukla bakıcılar tarafından büyütüldü; çok sevdiği bakıcısı küçükken ayrıldı ve yedi yaşında yatılı okula gönderildi. Cambridge'de psikoloji ve tıp okuduktan sonra uyum sorunları olan çocuklar için kurulmuş okullarda çalıştı. Psikanaliz eğitimini Joan Riviere ile aldı, vakalarında Melanie Klein'ın süpervizyonunu gördü; Klein'ın çocuğun gerçek ailesini görmezden gelen tutumu, Bowlby'yi gerçek deneyimin önemi üzerinde düşünmeye itti.",
    "Savaş sonrasında Tavistock Kliniği'nde çocuk bölümünü yönetti. Dünya Sağlık Örgütü için hazırladığı Anne Bakımı ve Ruh Sağlığı raporu (1951) kurumsal bakım ve hastane politikalarını değiştirdi. Psikanalizin dürtü kuramından ayrılıp etolojiye (Lorenz, Tinbergen, Hinde) ve Harlow'un çalışmalarına yöneldi. Mary Ainsworth, Uganda'da (1954-55) ve Baltimore'da yaptığı ev gözlemleri ve Yabancı Durum Prosedürü ile kuramı ölçülebilir hale getirdi."
  ],
  timeline: [
    [1944, "Kırk Dört Genç Hırsız"], [1951, "WHO raporu: Anne Bakımı ve Ruh Sağlığı"],
    [1952, "Robertson'ların filmi: İki Yaşında Bir Çocuk Hastaneye Gidiyor"], [1958, "Çocuğun annesine bağının doğası"],
    [1967, "Ainsworth: Uganda'da Bebeklik"], [1969, "Bağlanma ve Kayıp I: Bağlanma"],
    [1973, "Bağlanma ve Kayıp II: Ayrılık"], [1978, "Ainsworth ve ark.: Bağlanma Örüntüleri (Yabancı Durum)"],
    [1980, "Bağlanma ve Kayıp III: Kayıp"], [1985, "Yetişkin Bağlanma Görüşmesi (George, Kaplan ve Main)"],
    [1990, "Main ve Solomon: dağınık (D) bağlanma"]
  ],
  concepts: [
    ["Bağlanma davranış sistemi", "Tehdit, yorgunluk ya da hastalıkta bakımverene yakınlığı sağlayan, evrimsel olarak seçilmiş bir sistem; keşif sistemiyle dengelenir."],
    ["Güvenli üs ve güvenli liman", "Çocuk güvende hissettiğinde bakımverenden keşfe çıkar (güvenli üs), tehlikede ona döner (güvenli liman)."],
    ["İçsel çalışma modelleri", "Kendilik (sevilmeye değer miyim?) ve bakımveren (ulaşılabilir mi?) hakkında deneyimle kurulan temsiller; sonraki ilişkilere yön verir."],
    ["Monotropi ve bağlanma hiyerarşisi", "Bowlby bir birincil figürün öne çıktığını savundu; bugün çoğu çocuğun birden çok bağlanma figürünün olduğu ve bunların bir hiyerarşi oluşturduğu kabul edilir."],
    ["Ayrılık tepkisi", "Uzun ayrılıkta protesto, umutsuzluk ve kopma; yeniden birleşmede kaçınma ya da öfke görülebilir."],
    ["Duyarlılık", "Ainsworth'a göre bebeğin sinyallerini fark etme, doğru yorumlama ve uygun ile zamanında yanıt verme."],
    ["Bağlanma örüntüleri", "Güvenli (B), kaçınan (A), kaygılı-ikircikli (C) ve dağınık (D). Normatif örneklemlerde çocukların yaklaşık üçte ikisi güvenlidir."],
    ["Yas evreleri", "Bowlby ve Parkes: uyuşma; özlem ve arama; dağınıklık ve umutsuzluk; yeniden örgütlenme. Katı bir sıra değil, örtüşen süreçler."]
  ],
  stageFields: {
    labels: ["Bağlanma davranışları", "Ayrılığa ve yabancıya tepki", "Değerlendirme yöntemi", "Klinik ipucu"],
    rows: [
      ["Ağlama, tutunma, emme, göz teması, gülümseme; herkese yönelik", "Ayrılık protestosu yok; yabancı kabul edilir", "Etkileşim gözlemi (NBAS, CARE-Index)", "Yatıştırılamayan ağlama ve beslenme sorunları bakımveren-bebek uyumunu bozabilir"],
      ["Tanıdık kişilere seçici gülümseme ve seslenme", "Belirgin protesto yok", "Bakımveren duyarlılığı gözlemi (Ainsworth duyarlılık ölçekleri)", "Doğum sonrası depresyonda karşılıklılık azalır"],
      ["İzleme, yaklaşma, güvenli üs olarak kullanma, yeniden birleşmede selamlama", "Ayrılık protestosu ve yabancı kaygısı; uzun ayrılıkta protesto, umutsuzluk ve kopma", "Yabancı Durum Prosedürü (12-20 ay), Bağlanma Q-Sort", "9 aydan sonra seçici bağlanmanın yokluğu reaktif bağlanma bozukluğunu, ayrım gözetmeyen yakınlık sosyal ilişki bozukluğunu düşündürür"],
      ["Bakımverenin hedeflerini dikkate alarak pazarlık; ayrılığın sözle hazırlanması", "Kısa ayrılıklar planla tolere edilir", "Cassidy-Marvin okul öncesi sınıflaması, DMM-PAA, MacArthur hikâye kökleri", "Ebeveyni yöneten ya da ona bakım veren çocuk (rol değişimi), dağınık bağlanmanın okul öncesi görünümü olabilir"],
      ["Bağlanma temsilleri ilişkilere ve ebeveynliğe taşınır", "Kayıp ve yasın işlenmesi; çözülmemiş kayıp ve travma", "Çocuk Bağlanma Görüşmesi, Yetişkin Bağlanma Görüşmesi (AAI), ECR", "Ebeveynin çözülmemiş kaybı ya da travması bebekte dağınık bağlanma riskini artırır"]
    ]
  },
  evolution: [
    [1944, "Psikanalitik dönem: suç davranışı erken ayrılıklarla ilişkilendirildi."],
    [1958, "Etolojik dönüş: bağın beslenmeden doğduğu dürtü kuramına karşı birincil bağlanma sistemi önerildi."],
    [1978, "Ainsworth ile görgül dönem: Yabancı Durum Prosedürü ve duyarlılık-bağlanma ilişkisi."],
    [1985, "Temsillere geçiş (Main): Yetişkin Bağlanma Görüşmesi ve kuşaklararası aktarım; ardından dağınık bağlanma ve zihinselleştirme (Fonagy)."],
    [2000, "Biyoloji ve müdahale dönemi: stres sistemi, oksitosin ve epigenetik bulgular; BEIP ve kanıta dayalı bağlanma müdahaleleri."]
  ],
  classic: {
    title: "Kırk dört genç hırsız ve ayrılık filmleri",
    text: [
      "Bowlby (1944), Londra Çocuk Rehberlik Kliniği'ne başvuran ve hırsızlık yapan 44 çocuğu, hırsızlık yapmayan klinik bir kontrol grubuyla karşılaştırdı. 'Duygusuz' (affectionless) olarak tanımladığı 14 çocuğun 12'si, erken çocukluğunda annesinden ya da bakımverenden uzun süre ayrılmıştı.",
      "James ve Joyce Robertson'ın filmleri, kısa hastane yatışlarında bile çocukların protesto, umutsuzluk ve kopma evrelerinden geçtiğini gösterdi. Filmler İngiltere'de hastanelerin ebeveyn ziyaretine açılmasında belirleyici oldu."
    ],
    critique: [
      "1944 çalışması geriye dönüktür, değerlendirmeler kör yapılmamıştır ve aile içi diğer sorunlar kontrol edilmemiştir.",
      "Rutter, Anne Yoksunluğu Yeniden Değerlendirildi (1972) çalışmasında yoksunluğun (bağın kopması) ile bağ hiç kurulamamasının (privation) farklı sonuçları olduğunu, bakımın niteliğinin ve birden çok bakımverenin önemini ve etkilerin kısmen geri döndürülebildiğini gösterdi."
    ],
    exps: ["bowlby44", "robertson52"]
  },
  vignette: {
    title: "Kurumdan evlat edinilmiş 3 yaşında çocuk",
    case: "Üç yaşında, 20 aylıkken kurum bakımından evlat edinilmiş bir çocuk; parkta tanımadığı yetişkinlerin kucağına gidiyor, alışveriş merkezinde ebeveynini kontrol etmeden uzaklaşıyor. Ebeveynler 'çok sosyal ama bize bağlı değil gibi' diyor.",
    classic: "Bağlanma kuramı formülasyonu: erken yoksunluk nedeniyle seçici bağlanma ve güvenli üs davranışı gelişmemiş; ayrım gözetmeyen yakınlık.",
    modern: "Güncel yaklaşım: DSM-5-TR'ye göre sosyal ilişki bozukluğu (yetersiz bakım öyküsü, gelişimsel yaş en az 9 ay) değerlendirilir. Ayırıcı tanıda DEHB, otizm spektrum bozukluğu ve zihinsel yetersizlik düşünülür; Bağlanma Bozuklukları Görüşmesi (DAI) ve gözlem kullanılır. Yabancı Durum Prosedürü tanı aracı değildir. Bakımveren duyarlılığını hedefleyen kanıta dayalı müdahaleler (ABC, CPP, VIPP-SD) önerilir. Zorlayıcı 'tutma' ya da 'yeniden doğuş' terapileri bağlanma kuramına dayanmaz, kanıtsızdır ve zararlıdır (APSAC raporu, 2006)."
  },
  misconceptions: [
    "Bağlanma sevgi ya da sıcaklıkla aynı şey değildir; stres altında korunma için yakınlık aramaya ilişkindir.",
    "Güvensiz bağlanma bir bozukluk değildir; normatif örneklemlerde çocukların yaklaşık üçte biri güvensiz örüntü gösterir.",
    "Yabancı Durum Prosedürü bir araştırma ölçümüdür, bireysel tanı aracı değildir.",
    "Birden çok bağlanma figürü olağandır; babalar, büyükanne ve büyükbabalar ve bakıcılar da bağlanma figürü olabilir.",
    "Erken bağlanma kader değildir: süreklilik orta düzeydedir ve sonraki deneyimlerle değişebilir."
  ],
  measures: [
    ["Yabancı Durum Prosedürü (SSP)", "12-20 aylık bebeklerde laboratuvar gözlemi; A, B, C, D sınıflaması."],
    ["Bağlanma Q-Sort (AQS)", "Ev ortamında gözleme dayalı sürekli güvenlik puanı (Waters ve Deane)."],
    ["Okul öncesi ve okul çağı ölçümleri", "Cassidy-Marvin sınıflaması, MacArthur Hikâye Kökleri Bataryası, Çocuk Bağlanma Görüşmesi."],
    ["Yetişkin Bağlanma Görüşmesi (AAI) ve ECR", "Yetişkinde bağlanma temsilleri (görüşme) ve romantik ilişkilerde bağlanma kaygısı ve kaçınma (öz-bildirim)."],
    ["Bağlanma Bozuklukları Görüşmesi (DAI)", "Reaktif bağlanma bozukluğu ve sosyal ilişki bozukluğu belirtilerini değerlendirir."]
  ],
  exps: ["bowlby44", "chaffin06"]
};

ATLAS.profiles.vygotsky = {
  life: "17 Kasım 1896, Orşa (bugün Belarus) – 11 Haziran 1934, Moskova",
  bio: [
    "Gomel'de Yahudi bir ailede büyüdü. Moskova Üniversitesi'nde hukuk okurken Şanyavski Halk Üniversitesi'nde tarih ve felsefe derslerine devam etti. 1917-24 yılları arasında Gomel'de edebiyat ve psikoloji öğretti; Sanatın Psikolojisi adlı çalışmasında Hamlet'i inceledi.",
    "1924'te Leningrad'daki İkinci Psikonöroloji Kongresi'nde yaptığı konuşmayla Moskova Psikoloji Enstitüsü'ne çağrıldı; Aleksandr Luria ve Aleksey Leontiev ile birlikte kültürel-tarihsel psikolojiyi kurdu. Engelli çocuklarla çalışan Deneysel Defektoloji Enstitüsü'nü yönetti. Tüberkülozla mücadele ederken kısa ömrüne çok sayıda eser sığdırdı ve 37 yaşında öldü. Düşünce ve Dil ölümünden hemen sonra yayımlandı. 1936'daki pedoloji kararnamesinin ardından eserleri Sovyetler Birliği'nde yaklaşık yirmi yıl basılmadı; Batı'da 1962'deki İngilizce çeviriyle ve 1978'de yayımlanan Mind in Society derlemesiyle tanındı."
  ],
  timeline: [
    [1924, "İkinci Psikonöroloji Kongresi; Moskova Psikoloji Enstitüsü"], [1925, "Sanatın Psikolojisi"],
    [1927, "Psikolojideki krizin tarihsel anlamı"], [1929, "Deneysel Defektoloji Enstitüsü"],
    [1931, "Luria'nın Özbekistan ve Kırgızistan seferleri (1931-32)"], [1933, "Oyun ve çocuğun zihinsel gelişimindeki rolü (ders)"],
    [1934, "Düşünce ve Dil; yaş sorunu ve yaş krizleri"], [1936, "Pedoloji kararnamesi: eserleri yasaklanır"],
    [1962, "Thought and Language İngilizcede"], [1978, "Mind in Society (derleme)"]
  ],
  concepts: [
    ["Yakınsal gelişim alanı", "Çocuğun tek başına yapabildiği ile daha bilgili birinin yardımıyla yapabildiği arasındaki alan; öğretimin en etkili olduğu yer."],
    ["Gelişimin genel genetik yasası", "Her yüksek işlev iki kez görünür: önce insanlar arasında (sosyal düzlem), sonra çocuğun içinde (psikolojik düzlem)."],
    ["Psikolojik araçlar ve göstergeler", "Dil, sayı sistemleri, yazı ve haritalar gibi kültürel araçlar düşünceyi dönüştürür; bellek ve dikkat 'araçlı' hale gelir."],
    ["İçselleştirme", "Sosyal etkileşimde kullanılan araçların bireysel düşünceye dönüşmesi."],
    ["Özel ve iç konuşma", "Çocuğun kendine yönelik yüksek sesle konuşması öz-düzenleme işlevi görür ve zamanla iç konuşmaya dönüşür; Piaget'nin 'benmerkezci konuşma' yorumuna karşıt."],
    ["Kendiliğinden ve bilimsel kavramlar", "Gündelik deneyimle kazanılan kavramlar ile okulda sistemli öğretilen kavramlar karşılıklı olarak birbirini geliştirir."],
    ["Oyun ve hayali durum", "Rol oyununda çocuk kurallara uymayı ve dürtüsünü ertelemeyi öğrenir; Vygotsky'ye göre oyunda çocuk 'kendi boyundan bir baş uzundur'."],
    ["Yaş krizleri", "Kararlı dönemleri ayıran, yeni bir 'oluşumun' belirdiği kısa çalkantı dönemleri (1, 3, 7, 13 ve 17 yaş)."],
    ["Birincil ve ikincil kusur", "Defektolojide biyolojik sınırlılık (birincil) ile toplumun ona tepkisinden doğan gelişimsel sonuçlar (ikincil) ayrılır; müdahalenin asıl hedefi ikincil kusurdur."],
    ["Perejivanie (yaşantı)", "Çevrenin çocuk üzerindeki etkisinin, çocuğun o çevreyi nasıl yaşadığına bağlı olması."]
  ],
  stageFields: {
    labels: ["Önde gelen etkinlik", "Klinik ve eğitsel çıkarım"],
    rows: [
      ["Fizyolojik uyum ve bakımverenle ilk etkileşimler", "Bakımverenin desteği yeni ortama uyumun aracıdır"],
      ["Yetişkinle doğrudan duygusal iletişim", "Duygusal iletişim yoksunluğu (kurum bakımı) gelişimin bütün alanlarını etkiler"],
      ["Yürüme ve özerk konuşma", "Çocuğa özgü sözcükler geçicidir; ebeveynin bunları genişleterek yanıtlaması dili destekler"],
      ["Nesnelerle yetişkin desteğinde etkinlik", "Dil gelişimi ortak etkinlik içinde desteklenir (diyalojik kitap okuma)"],
      ["İnatçılık, olumsuzluk, 'kendim yapacağım'", "Kriz patoloji değil, yeni bir oluşumun belirtisidir; seçim sunmak güç mücadelesini azaltır"],
      ["Rol oyunu", "Oyun öz-düzenlemenin aracıdır; okul öncesinde oyunu daraltan erken akademik baskı tartışmalıdır"],
      ["Kendiliğindenliğin kaybı, genelleştirilmiş duygular", "Okula geçişteki davranış değişiklikleri gelişimsel bağlamda değerlendirilir"],
      ["Öğrenme etkinliği ve bilimsel kavramlar", "Dinamik değerlendirme: çocuğun destekle neler yapabildiği ölçülür"],
      ["Kavramsal düşünce ve yeni ilgiler; akranlarla yakın iletişim", "Ergenle soyut kavramlar ve akran bağlamı üzerinden çalışma"]
    ]
  },
  evolution: [
    [1925, "Erken dönem: sanat ve bilinç; davranışçılığa ve refleksolojiye eleştiri."],
    [1927, "Araçlı eylem ve kültürel-tarihsel kuramın temelleri; psikolojideki bölünmeye çözüm arayışı."],
    [1930, "Göstergeler, kavram gelişimi ve defektoloji üzerine deneysel çalışmalar."],
    [1934, "Son dönem: yakınsal gelişim alanı, yaş krizleri, yaşantı (perejivanie) ve oyun."],
    [1978, "Batı'da yeniden keşif; Wood, Bruner ve Ross'un iskele kurma kavramı ve sosyokültürel eğitim araştırmaları kuramı geliştirdi."]
  ],
  classic: {
    title: "Vygotsky-Sakharov blokları ve Luria'nın Özbekistan çalışmaları",
    text: [
      "Çifte uyarım yönteminde çocuğa renk, biçim, yükseklik ve büyüklüğü farklı 22 tahta blok verilir; blokların altında 'lag', 'bik', 'mur', 'cev' gibi anlamsız sözcükler yazılıdır. Çocuktan aynı sözcüğe ait olduğunu düşündüğü blokları bulması istenir. Vygotsky kavram gelişiminde evreler tanımladı: düzensiz yığınlar, kompleksler (zincir ve 'psödokavram' dahil), potansiyel kavramlar ve ergenlikte gerçek kavramlar.",
      "Luria'nın 1931-32 seferlerinde okula gitmemiş köylülere şu kıyas soruldu: 'Karın yağdığı uzak kuzeyde bütün ayılar beyazdır. Novaya Zemlya uzak kuzeydedir ve orada hep kar vardır. Oradaki ayılar ne renktir?' Pek çoğu 'Bilmiyorum, ben siyah ayı gördüm' gibi deneyime dayanan yanıtlar verdi; kısa bir okul deneyimi bile soyut-kategorik akıl yürütmeyi artırdı."
    ],
    critique: [
      "Vygotsky'nin metinlerinin bir kısmı ölümünden sonra derlenip düzenlenmiştir; Mind in Society farklı yazıların bir derlemesidir ve bazı kavramlar çeviride değişmiştir.",
      "Luria'nın görevleri katılımcıların kültürüne yabancıydı; yanıtların akıl yürütme yeteneğinden çok görevin sosyal anlamını yansıttığı öne sürüldü."
    ],
    exps: ["luria76", "woodbruner76"]
  },
  vignette: {
    title: "Okumada güçlük çeken 9 yaşında çocuk",
    case: "Dokuz yaşında, üçüncü sınıfta okuma güçlüğü olan bir çocuk; standart testte okuma düzeyi iki sınıf geride. Öğretmeni 'öğrenemiyor' diyor, çocuk okuldan kaçınmaya başlamış.",
    classic: "Vygotskyci formülasyon: statik test çocuğun yalnızca bağımsız düzeyini gösterir; yakınsal gelişim alanı, öğretmenin ipuçlarıyla neler yapabildiğiyle ortaya çıkar. Akran ve öğretmen tepkileri ikincil kusuru (kaçınma, düşük öz-değer) besleyebilir.",
    modern: "Güncel yaklaşım: DSM-5-TR'ye göre özgül öğrenme bozukluğu, hedefe yönelik müdahaleye rağmen en az 6 ay süren güçlükle tanımlanır (müdahaleye yanıt yaklaşımı). Fonolojik farkındalık ve kod çözmeyi hedefleyen yapılandırılmış okuma öğretimi kanıta dayalı tedavidir. Dinamik değerlendirme ve iskele kurma bu öğretimin nasıl verileceğine yön verir. Eşlik eden DEHB, kaygı ve okul reddi değerlendirilir; çocuğa ve aileye güçlük hakkında psikoeğitim verilir."
  },
  misconceptions: [
    "'İskele kurma' terimi Vygotsky'ye ait değildir; Wood, Bruner ve Ross'un (1976) kavramıdır.",
    "Yakınsal gelişim alanı sabit bir zorluk düzeyi değil, belirli bir etkileşim içinde açılan bir alandır.",
    "Vygotsky biyolojiyi dışlamadı; gelişimin doğal ve kültürel çizgilerini birlikte ele aldı.",
    "Piaget ile tam karşıt değildir: Piaget 1962'de Vygotsky'nin eleştirilerine yanıt yazdı ve özel konuşma konusunda yorumlarının farklı olduğunu kabul etti."
  ],
  measures: [
    ["Dinamik değerlendirme", "Test-öğretim-test düzeni ya da kademeli ipuçlarıyla çocuğun öğrenme potansiyelini ölçer (Feuerstein'ın LPAD'si gibi)."],
    ["Müdahaleye yanıt (RTI)", "Okulda kademeli destek ve düzenli izlemle öğrenme güçlüğünün belirlenmesi."],
    ["Özel konuşma gözlem kodlamaları", "Görev sırasındaki kendine yönelik konuşmanın sıklığı ve türü (Berk, Winsler)."]
  ],
  exps: ["luria76", "berk92"]
};
