/* Ayrıntılı kuram profilleri (1/3): Freud, Erikson.
   stageFields: her evre için ek alanlar; sıra kuramın evre sırasıyla aynıdır. */
ATLAS.profiles = ATLAS.profiles || {};

ATLAS.profiles.freud = {
  life: "6 Mayıs 1856, Freiberg (bugün Příbor, Çekya) – 23 Eylül 1939, Londra",
  bio: [
    "Viyana'da tıp okudu ve kariyerine nörolog olarak başladı; Brücke'nin fizyoloji laboratuvarında sinir hücreleri üzerine çalıştı. 1885-86'da Paris'te Charcot'nun yanında histeri ve hipnozla tanıştı. Josef Breuer ile birlikte yayımladığı Histeri Üzerine Çalışmalar (1895), sözle anlatmanın belirtileri hafifletebileceği fikrini ('konuşma tedavisi') ortaya koydu; ünlü Anna O. vakası Breuer'in hastasıydı.",
    "1896'da 'psikanaliz' terimini kullandı. Babasının ölümünden sonra kendi rüyalarını çözümlediği öz-analiz, Düşlerin Yorumu'na (1899/1900) temel oldu. 1923'te çene kanseri tanısı aldı ve ömrünün geri kalanında çok sayıda ameliyat geçirdi. 1938'de Nazi Almanyası'nın Avusturya'yı ilhakından sonra ailesiyle Londra'ya göç etti ve ertesi yıl orada öldü. Kızı Anna Freud çocuk psikanalizinin kurucularındandır."
  ],
  timeline: [
    [1895, "Histeri Üzerine Çalışmalar (Breuer ile)"], [1897, "Baştan çıkarılma kuramından vazgeçiş: fantezi ve iç dürtüye yöneliş"],
    [1900, "Düşlerin Yorumu: bilinçdışı ve topografik model"], [1905, "Cinsellik Üzerine Üç Deneme: psikoseksüel gelişim"],
    [1908, "Karakter ve Anal Erotizm"], [1909, "Küçük Hans vakası; Clark Üniversitesi konferansları"],
    [1914, "Narsisizm Üzerine"], [1920, "Haz İlkesinin Ötesinde: yaşam ve ölüm dürtüleri"],
    [1923, "Ego ve İd: yapısal model"], [1926, "Ketlenme, Belirti ve Kaygı: sinyal kaygısı"]
  ],
  concepts: [
    ["Bilinçdışı", "Bilince erişemeyen ama davranışı, belirtileri, rüyaları ve dil sürçmelerini biçimlendiren ruhsal içerik. Topografik modelde bilinç ve önbilinçle birlikte üç katmandan biridir."],
    ["İd, ego, süperego", "Yapısal model (1923). İd dürtülerin kaynağıdır ve haz ilkesiyle işler; ego gerçeklik ilkesiyle uzlaştırır ve savunmaları yönetir; süperego Ödipal özdeşimle içselleştirilen vicdan ve ego idealidir."],
    ["Libido", "Cinsel dürtünün enerjisi; Freud'da geniş anlamda bedensel haz arayışıdır ve gelişim boyunca farklı bedensel bölgelere yönelir."],
    ["Haz ilkesi ve gerçeklik ilkesi", "Gerilimi hemen boşaltma eğilimi ile doyumu gerçeklik koşullarına göre erteleme yetisi; birincil ve ikincil süreç düşüncesine karşılık gelir."],
    ["Fiksasyon ve regresyon", "Bir evrede aşırı doyum ya da engellenme libidonun bir kısmını o evreye bağlar (fiksasyon); stres altında kişi bu noktaya geri döner (regresyon)."],
    ["Ödipus karmaşası", "3-6 yaşta karşı cinsten ebeveyne arzu ve aynı cinsten ebeveyne rekabetin oluşturduğu çatışma; kastrasyon kaygısı ve özdeşimle çözülür, süperegoyu doğurur."],
    ["Savunma mekanizmaları", "Egonun kaygıya karşı kullandığı bilinçdışı işlemler: bastırma, yansıtma, yer değiştirme, karşıt tepki oluşturma, yalıtma, yüceltme. Anna Freud 1936'da sistemleştirdi."],
    ["Aktarım ve direnç", "Hastanın geçmiş ilişkilerdeki duygularını analiste yöneltmesi ve bilinçdışı içeriğin bilince çıkmasına karşı koyması; psikanalitik tekniğin temel kavramları."],
    ["Sinyal kaygısı", "1926'dan sonra kaygı, savunmaları harekete geçiren bir uyarı işareti olarak tanımlandı; daha önce bastırılmış libidonun dönüşümü olarak görülüyordu."]
  ],
  stageFields: {
    labels: ["Erojen bölge", "Yetişkin karakterde iz", "İlişkili savunmalar", "Freud'a göre ilişkili tablo"],
    rows: [
      ["Ağız, dudaklar, dil", "Oral karakter: bağımlılık, aşırı iyimserlik ya da kötümserlik, açgözlülük; oral-sadistik alt evrede iğneleyicilik", "İçe atma, inkâr, yansıtma", "Bağımlılıklar; Abraham'a göre depresyon"],
      ["Anüs, bağırsak ve mesane kontrolü", "Anal üçlü: düzenlilik, cimrilik, inatçılık (1908); karşıt kutupta dağınıklık", "Karşıt tepki oluşturma, yalıtma, yapılanı geri alma", "Obsesyonel nevroz ('Sıçan Adam', 1909)"],
      ["Penis ve klitoris", "Fallik karakter: gösteriş, rekabet, kendine güven ya da kırılgan erkeksilik", "Bastırma, saldırganla özdeşim", "Histeri ve fobiler ('Küçük Hans', 1909)"],
      ["Belirgin bir bölge yok; enerji beceri ve ilişkilere yönelir", "Çalışkanlık, kural bilinci; aşırısında katılık", "Yüceltme, karşıt tepki oluşturma", "Ketlenmeler"],
      ["Genital bölge; aile dışı bir sevgi nesnesi", "Olgun cinsellik, sevebilme ve çalışabilme", "Olgun savunmalar: yüceltme, mizah", "Önceki takılmalar canlandığında nevrozlar"]
    ]
  },
  evolution: [
    [1897, "Baştan çıkarılma kuramı terk edildi: Freud, nevrozları gerçek çocukluk istismarına bağlamaktan vazgeçip bilinçdışı fanteziye ve dürtüye yöneldi. Bu dönüş, bugün travma ve istismar alanında eleştirel olarak tartışılır."],
    [1914, "Narsisizm kavramı: libidonun kendiliğe yönelmesi; birincil ve ikincil narsisizm ayrımı."],
    [1920, "İkinci dürtü kuramı: cinsel dürtü ve ego dürtüleri yerine yaşam (Eros) ve ölüm (Thanatos) dürtüleri; savaş nevrozlarındaki tekrarlama zorlantısı bu değişikliğin gerekçelerindendir."],
    [1923, "Topografik modelden yapısal modele: id, ego ve süperego. Bilinçdışılık artık bir katman değil, her üç yapının da niteliği olabilir."],
    [1926, "Kaygı kuramı yenilendi: kaygı, tehlikeye karşı egonun verdiği sinyaldir; savunmalar kaygıya yanıt olarak devreye girer."]
  ],
  classic: {
    title: "Küçük Hans (1909)",
    text: [
      "Beş yaşındaki Herbert Graf, sokakta atların ısıracağı ya da düşeceği korkusuyla evden çıkamaz hale gelir. Tedaviyi Freud değil, çocuğun babası Max Graf yürütür; Freud yalnızca bir kez çocukla görüşür ve babanın tuttuğu notlar üzerinden yorum yapar.",
      "Freud fobiyi Ödipal çatışmanın yer değiştirmesi olarak yorumlar: atın ağzındaki siyahlık ve gözlükler babayı, at korkusu babadan duyulan kastrasyon kaygısını simgeler. Hans'ın düşleri ve oyunlarıyla birlikte fobi yatışır. Bu vaka, çocuklarda psikoseksüel kuramın tek doğrudan kanıtı olarak sunulmuştur."
    ],
    critique: [
      "Wolpe ve Rachman (1960) vakayı yeniden incelediler: veriler babanın yönlendirici sorularından gelir, Freud'un yorumları çocuğa telkin edilmiştir ve fobi, Hans'ın bir omnibüs atının yere düştüğünü görmesinin hemen ardından başlamıştır. Onlara göre tablo, koşullanmış bir korku olarak çok daha basit açıklanabilir.",
      "Herbert Graf yetişkinlikte opera yönetmeni oldu; gençliğinde vakayı okuduğunda anlatılan olayları hatırlamadığını söylediği aktarılır. Vaka bugün hem psikanalizin tarihindeki yeri hem de kanıt standartlarının sınırları açısından okutulur."
    ],
    exps: ["wolpe60"]
  },
  vignette: {
    title: "7 yaşında el yıkama ve düzen zorlantıları",
    case: "Yedi yaşındaki bir erkek çocuk günde 30-40 kez el yıkıyor, oyuncaklarını belirli bir sırayla dizmeden yatamıyor; sıra bozulunca öfke nöbetleri geçiriyor. Annesi çocuğun tuvalet eğitiminin 'çok sıkı' yapıldığını anlatıyor.",
    classic: "Klasik psikanalitik formülasyon: anal evreye regresyon; kirlenme ve saldırganlık dürtülerine karşı karşıt tepki oluşturma (temizlik) ve yapılanı geri alma (ritüeller); sert bir süperego. Tedavi olarak dürtü ve savunmaların yorumlandığı uzun süreli çocuk psikanalizi önerilirdi.",
    modern: "Güncel yaklaşım: DSM-5-TR'ye göre obsesif-kompulsif bozukluk değerlendirilir (CY-BOCS ile şiddet; tik bozukluğu ve PANS/PANDAS gibi ayırıcı tanılar). Birinci basamak tedavi maruz bırakma ve tepki önlemeli BDT'dir; orta-ağır olgularda SSRI eklenir. Ailenin ritüellere uyum sağlaması (family accommodation) ayrıca hedeflenir. Freud'un tanımladığı savunma örüntüleri klinik gözlem olarak değerli kalır, ama tuvalet eğitimiyle nedensel bağ kanıtlanmamıştır."
  },
  misconceptions: [
    "Freud 'her şey cinselliktir' demedi; libido, cinsel eylemden geniş bir bedensel haz kavramıdır.",
    "Latans dönemi cinselliğin tamamen yokluğu değil, görece sessizliğidir; Freud da bunu kesin bir yokluk olarak tanımlamadı.",
    "Kuramın evre ve fiksasyon iddiaları görgül olarak desteklenmez; ama bilinçdışı işlemleme, savunma mekanizmaları ve aktarım kavramları klinik ve deneysel olarak yaşamaya devam eder.",
    "Ödipus karmaşası sonraki psikanalistlerde büyük ölçüde değiştirildi: Klein onu bebekliğe taşıdı, Kohut ebeveynin yanıtını merkeze aldı, ilişkisel okullar dürtü yerine ilişkiyi vurguladı."
  ],
  measures: [
    ["Savunma Mekanizmaları Derecelendirme Ölçeği (DMRS)", "Görüşme ya da seans kayıtlarından savunmaların olgunluk düzeyini puanlar (Perry)."],
    ["Savunma Biçimleri Anketi (DSQ-40)", "Olgun, nevrotik ve olgunlaşmamış savunmaları ölçen öz-bildirim aracı."],
    ["OPD-2 ve PDM-2", "Operasyonelleştirilmiş psikodinamik tanı ve Psikodinamik Tanı El Kitabı: yapı, çatışma ve ilişki örüntülerini sistemli değerlendirir."],
    ["Projektif testler", "Rorschach ve TAT psikodinamik gelenekte geliştirildi; puanlama sistemlerinin geçerliği değişkendir (Exner, R-PAS)."]
  ],
  exps: ["wolpe60"]
};

ATLAS.profiles.erikson = {
  life: "15 Haziran 1902, Frankfurt – 12 Mayıs 1994, Harwich, Massachusetts",
  bio: [
    "Danimarkalı Yahudi bir annenin oğlu olarak doğdu; biyolojik babasını hiç tanımadı. Çocuk doktoru üvey babasının soyadıyla Erik Homburger olarak büyüdü. Gençliğinde sanat eğitimi aldı ve yıllarca Avrupa'yı dolaştı; kendi kimlik arayışı sonradan kuramının merkezine yerleşecekti.",
    "Viyana'da psikanalistlerin çocukları için kurulan küçük bir okulda öğretmenlik yaparken Anna Freud'la çocuk analizi eğitimi aldı ve Montessori diploması edindi. 1933'te ABD'ye göç etti; Boston'ın ilk çocuk psikanalistlerinden oldu. Pine Ridge'de Sioux ve Kaliforniya'da Yurok toplulukları üzerine yaptığı alan çalışmaları, gelişimin kültürle iç içe olduğunu görmesini sağladı. 1939'da ABD vatandaşı olurken adını Erik Homburger Erikson yaptı. Eşi, dansçı ve yazar Joan Erikson kuramın gelişimine doğrudan katkı yaptı."
  ],
  timeline: [
    [1933, "ABD'ye göç; Boston, Harvard ve Yale"], [1937, "Pine Ridge'de Sioux alan çalışması"],
    [1950, "Çocukluk ve Toplum: insanın sekiz çağı"], [1950, "Berkeley'den sadakat yeminini imzalamayı reddederek ayrılır; ardından Austen Riggs Merkezi"],
    [1958, "Genç Adam Luther (psikobiyografi)"], [1968, "Kimlik: Gençlik ve Kriz"],
    [1969, "Gandhi'nin Hakikati (Pulitzer Ödülü, 1970)"], [1982, "Tamamlanmış Yaşam Döngüsü: temel patolojiler"],
    [1997, "Joan Erikson'un genişletilmiş baskısı: dokuzuncu evre"]
  ],
  concepts: [
    ["Epigenetik ilke", "Embriyolojiden alınmıştır: her ego gücünün 'yükselme zamanı' vardır, ama hepsi baştan bir biçimde mevcuttur ve yaşam boyu yeniden işlenir."],
    ["Psikososyal kriz", "Felaket değil, bir dönüm noktası: olgunlaşma ve toplumsal beklentilerin karşılaştığı, gelişimin yön kazandığı dönem."],
    ["Erdem (ego gücü)", "Krizin olumlu kutbu baskın çözüldüğünde kazanılan kalıcı güç: umut, irade, amaç, yeterlik, sadakat, sevgi, özen, bilgelik."],
    ["Temel patoloji", "Olumsuz kutbun baskın kaldığı çözümün kalıcı izi: geri çekilme, zorlantı, ketlenme, eylemsizlik, reddetme, dışlayıcılık, reddedicilik, küçümseme."],
    ["Psikososyal moratoryum", "Toplumun gence tanıdığı, bağlanmadan önce rolleri deneme süresi."],
    ["Kimlik krizi ve kimlik karmaşası", "Terim, İkinci Dünya Savaşı gazilerinde gözlenen süreklilik ve kendilik duygusu kaybından doğdu. Ergenlikte normatif kriz ile süregen kimlik karmaşası ayrılmalıdır."],
    ["Olumsuz kimlik", "Toplumun en istenmeyen gösterdiği rollerle özdeşim; hiç kimlik olmamasına tercih edilen bir kimlik."],
    ["Ritüelleşme", "Kuşaklar arası tekrarlanan etkileşim kalıpları (ör. bebeklikte karşılıklı tanınma); aşırısı ritüelciliğe dönüşür."]
  ],
  stageFields: {
    labels: ["Kriz sorusu", "Temel patoloji", "Önemli ilişkiler", "Psikoseksüel karşılık"],
    rows: [
      ["Dünyaya güvenebilir miyim?", "Geri çekilme", "Annelik figürü", "Oral-duyusal: içe alma"],
      ["Kendim olmam doğru mu?", "Zorlantı", "Ebeveyn figürleri", "Anal-üretral, kas: tutma ve bırakma"],
      ["Yapmam, hareket etmem doğru mu?", "Ketlenme", "Temel aile", "Fallik-lokomotor: girişim"],
      ["Bu dünyada başarabilir miyim?", "Eylemsizlik", "Komşuluk ve okul", "Latans"],
      ["Kimim, ne olabilirim?", "Reddetme", "Akran grupları, liderlik modelleri", "Puberte"],
      ["Sevebilir miyim?", "Dışlayıcılık", "Dostluk, cinsellik, rekabet ve işbirliği ortakları", "Genitalite"],
      ["Yaşamımı değerli kılabilir miyim?", "Reddedicilik", "Ortak ev ve iş bölümü", "Üreme ve yaratıcılık"],
      ["Ben olmak doğru muydu?", "Küçümseme", "İnsanlık, 'benim türüm'", "Duyusal biçimlerin genelleşmesi"]
    ]
  },
  evolution: [
    [1950, "Sekiz evreli model ilk kez Çocukluk ve Toplum'da yayımlandı; Freud'un psikoseksüel evreleri yaşam boyuna genişletildi."],
    [1959, "Kimlik ve Yaşam Döngüsü: evrelerin epigenetik çizelgesi ve kimlik kavramının ayrıntılandırılması."],
    [1964, "Erdemler (ego güçleri) her evreye eşlendi."],
    [1982, "Temel patolojiler ve uyumsuz eğilimler tanımlandı; olumlu ve olumsuz kutuplar arasındaki oran vurgulandı."],
    [1997, "Joan Erikson dokuzuncu evreyi ekledi: çok ileri yaşta önceki bütün krizler, bu kez olumsuz kutup önde olmak üzere yeniden yaşanır; Tornstam'ın gerotransandans kavramına göndermede bulunur."]
  ],
  classic: {
    title: "Psikobiyografi ve kültürlerarası alan çalışması",
    text: [
      "Genç Adam Luther (1958), Martin Luther'in genç yetişkinlikteki kimlik krizini (manastır korosunda yaşadığı söylenen kriz, babasıyla çatışma) kuramın merceğinden okur. Gandhi'nin Hakikati (1969), 1918 Ahmedabad dokuma grevi üzerinden üretkenlik evresini inceler. Bu çalışmalar psikobiyografi türünü kurdu.",
      "Sioux ve Yurok çalışmalarında Erikson, bebek bakımı, sütten kesme ve eğitim uygulamalarının her toplumun yetişkinden beklediği erdemlerle (Sioux'da cömertlik, Yurok'ta tutumluluk) tutarlı olduğunu gösterdi. Gelişim evreleri evrensel çerçeve, içerikleri kültüreldir."
    ],
    critique: [
      "Berkeley'deki oyun kurguları çalışmasında (1951) Erikson, kızların iç mekânlar, erkeklerin yüksek ve dış yapılar kurduğunu bildirip bunu bedensel farklılıklara bağladı ('iç ve dış alan'). Bu yorum kültürel öğrenmeyi göz ardı ettiği ve cinsiyetçi olduğu gerekçesiyle güçlü biçimde eleştirildi.",
      "Psikobiyografiler zengin ama yanlışlanamaz yorumlardır; tarihsel kaynakların seçimi yoruma göre yapılabilir."
    ],
    exps: ["erikson51"]
  },
  vignette: {
    title: "16 yaşında kimlik krizi mi, kimlik karmaşası mı?",
    case: "On altı yaşındaki bir genç son bir yılda üç kez çevresini, giyimini ve ilgi alanlarını tamamen değiştirmiş; okul başarısı düşmüş. Aile 'kim olduğunu bilmiyor' diye endişeli. Ara sıra kendine zarar veriyor.",
    classic: "Eriksoncı formülasyon: kimlik ve rol karmaşası evresinde moratoryum; denemeler normatiftir. Soru, keşfin bağlılığa doğru ilerleyip ilerlemediği ve olumsuz bir kimliğe kapanıp kapanmadığıdır.",
    modern: "Güncel yaklaşım: normatif kimlik keşfi ile kişilik bozukluğundaki kimlik dağınıklığı ayrılır. Kimlik dağınıklığında kendilik ve başkaları hakkında süreklilik ve tutarlılık kaybı, boşluk duygusu ve ilişkilerde istikrarsızlık görülür; kendine zarar verme eşlik ediyorsa sınır kişilik özellikleri değerlendirilir (DSM-5-TR alternatif modeli, AIDA, STIPO). Depresyon, madde kullanımı ve intihar riski ayrıca taranır. Normatif krizde destekleyici yaklaşım yeterli olabilir; kimlik dağınıklığında DBT-A ya da MBT-A gibi yapılandırılmış tedaviler düşünülür."
  },
  misconceptions: [
    "Kriz ya hep ya hiç çözülmez; sağlıklı gelişim olumlu kutbun baskın olduğu bir oran demektir. Biraz güvensizlik, utanç ya da suçluluk uyumsaldır.",
    "Evreler kapanıp bitmez; her kriz sonraki yaşamda yeniden işlenir.",
    "Yaş aralıkları kültüre ve kohorta bağlıdır; model kesin takvim değil, bir sıralamadır.",
    "Kimlik evresi yalnızca meslek seçimi değildir; ideoloji, değerler, cinsellik ve aidiyet de bu evrenin içeriğidir."
  ],
  measures: [
    ["Erikson Psikososyal Evre Envanteri (EPSI)", "İlk altı evrenin çözümünü ölçen öz-bildirim aracı (Rosenthal ve ark., 1981)."],
    ["Psikososyal Gelişim Envanteri (IPD)", "Constantinople'un (1969) geliştirdiği, boylamsal çalışmalarda kullanılan ölçek."],
    ["Kimlik Statüsü Görüşmesi ve EOM-EIS", "Marcia'nın kimlik statülerini görüşme ve ölçekle belirler."],
    ["Loyola Üretkenlik Ölçeği", "Yetişkinlikte üretkenlik kaygılarını ölçer (McAdams ve de St. Aubin, 1992)."]
  ],
  exps: ["erikson51"]
};
