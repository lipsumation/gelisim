/* Ayrıntılı kuram profilleri (5): Anna Freud, Kohut, Kernberg. */
ATLAS.profiles = ATLAS.profiles || {};

ATLAS.profiles.afreud = {
  life: "Anna Freud: 3 Aralık 1895, Viyana – 9 Ekim 1982, Londra",
  bio: [
    "Sigmund Freud'un altı çocuğunun en küçüğüdür. Viyana'da ilkokul öğretmeni olarak çalıştı; çocuklarla bu deneyimi, psikanalizi eğitim ve gözlemle birleştiren yaklaşımının temelini oluşturdu. Babası tarafından analiz edildi (1918-1922 ve 1924); bu durum bugün etik açıdan kabul edilemez sayılır. 1922'de Viyana Psikanaliz Derneği'ne katıldı. 1927'de çocuk analizinin tekniğine giriş üzerine yazdığı kitapla Melanie Klein'dan farklı bir çocuk analizi anlayışı ortaya koydu.",
    "1937'de Dorothy Burlingham ile Viyana'da yoksul ailelerin küçük çocukları için Jackson Kreşi'ni açtı. 1938'de Gestapo'nun sorgusundan sonra ailesiyle Londra'ya göç etti. Savaş yıllarında Hampstead Savaş Kreşleri'nde ailelerinden ayrılmış çocukları gözledi; bu gözlemler Bowlby ve Robertson'ların çalışmalarına zemin hazırladı. Kurduğu Hampstead Çocuk Terapisi Kursu ve Kliniği bugün Anna Freud Ulusal Çocuk ve Aile Merkezi adıyla sürüyor. Yale'de Goldstein ve Solnit ile yaptığı çalışma, çocuk velayeti hukukunda 'psikolojik ebeveyn' kavramını yerleştirdi."
  ],
  timeline: [
    [1895, "Viyana'da doğum"], [1922, "Viyana Psikanaliz Derneği'ne katılım"], [1927, "Çocuk Analizinin Tekniğine Giriş"],
    [1936, "Ego ve Savunma Mekanizmaları"], [1937, "Jackson Kreşi (Dorothy Burlingham ile)"], [1938, "Londra'ya göç"],
    [1941, "Hampstead Savaş Kreşleri (1941-1945); Savaş ve Çocuklar (1943), Ailesiz Bebekler (1944)"],
    [1951, "Bulldogs Bank çocukları (Sophie Dann ile)"], [1952, "Hampstead Çocuk Terapisi Kliniği"], [1958, "Ergenlik"],
    [1965, "Çocuklukta Normallik ve Patoloji: gelişim çizgileri ve Gelişim Profili"],
    [1973, "Goldstein ve Solnit ile: Çocuğun Yüksek Yararının Ötesinde"], [1982, "Londra'da ölüm"]
  ],
  concepts: [
    ["Savunma mekanizmaları", "Egonun kaygıya karşı kullandığı işlemlerin ilk sistematik sınıflaması: bastırma, gerileme, karşıt tepki oluşturma, yalıtma, yapılanı bozma, yansıtma, içe yansıtma, kendine yöneltme, tersine çevirme, yüceltme."],
    ["Saldırganla özdeşim", "Çocuğun korktuğu kişinin özelliklerini ya da saldırganlığını üstlenerek kaygısını yönetmesi; örneğin diş hekiminden dönen çocuğun 'doktorculuk' oyununda başkasının canını yakması."],
    ["Özgecil teslimiyet", "Kişinin kendi isteklerinden vazgeçip onları başkası aracılığıyla doyurması."],
    ["Fantezide, sözde ve eylemde inkâr", "Küçük çocuğa özgü, gerçeği oyun ve fantezide tersine çeviren savunmalar; yaşa uygun olduklarında normaldir."],
    ["Ego kısıtlaması", "Kaygı ya da hayal kırıklığı yaratan etkinliklerden çekilme; çocukta ilgi alanlarının daralması olarak görülebilir."],
    ["Ergenliğe özgü savunmalar", "Dürtü artışına karşı çilecilik (zevklerin reddi) ve entelektüalizasyon (duygusal çatışmanın soyut tartışmaya çevrilmesi)."],
    ["Gelişim çizgileri", "Bağımlılıktan duygusal kendine yetmeye, emmeden akılcı beslenmeye, ıslaklıktan mesane denetimine, beden bakımında sorumluluğa, benmerkezcilikten arkadaşlığa, bedenden oyuncağa ve oyundan işe uzanan paralel çizgiler."],
    ["Gelişim Profili", "Çocuğun dürtü, ego ve süperego gelişimini, gelişim çizgileri arasındaki dengeyi, savunmaları ve sabitlenme noktalarını sistematik olarak değerlendiren Hampstead vaka formülasyonu."],
    ["Gelişimsel yardım", "Çatışmaları yorumlamaktan çok eksik kalmış gelişim işlevlerini destekleyen terapötik tutum; ağır yoksunluk yaşamış çocuklarla çalışmanın temeli."],
    ["Psikolojik ebeveyn", "Çocuğun günlük bakımını sürekli ve duygusal olarak üstlenen kişi; biyolojik bağdan bağımsız olarak çocuğun ilişki sürekliliğinin korunması gerektiği ilkesi."]
  ],
  stageFields: {
    labels: ["Bağımlılık çizgisi", "Diğer çizgilerde beklenen", "Kaygı ve savunmalar", "Klinik ipucu"],
    rows: [
      ["Anne-bebek ikilisi tek bir birim gibi işler", "Emme ve beslenme ritmi, uyku düzeni", "Ego henüz ayrışmamıştır; düzenleme bakımverenden gelir", "Beslenme ve uyku sorunları ikili düzeyde değerlendirilir; erken ayrılık ve bakım kesintisi"],
      ["İhtiyaç doyurucu (anaklitik) ilişki: nesnenin değeri doyuma bağlı", "Emmeden kaşığa ve yarı katı gıdalara geçiş", "Nesneyi kaybetme kaygısı", "Bu dönemde uzun ayrılıklar ağır sıkıntı yaratır (Robertson'ların gözlemleri)"],
      ["Nesne sürekliliği: annenin iç temsili ihtiyaç olmadığında da korunur", "Bedenden oyuncağa: geçiş nesnesi; kendi kendine yemeye başlama", "Nesnenin sevgisini kaybetme kaygısı", "Kreşe başlama ve hastane yatışlarında ayrılığın planlanması"],
      ["Ön-Ödipal ikircikli ilişki: yapışma ve denetleme", "Islaklıktan kuruluğa: tuvalet eğitimi; beslenmede inat", "Denetim kaygısı; karşıt tepki oluşturmanın ilk biçimleri, inkâr", "Tuvalet eğitiminde güç mücadelesinin kronikleşmesi kabızlık ve dışkı tutmaya yol açabilir"],
      ["Nesneye yönelik, sahiplenici ve rekabetçi ilişki", "Benmerkezcilikten arkadaşlığa: ilk oyun arkadaşları; beden bakımında kısmi sorumluluk", "Hadım edilme kaygısı ve suçluluk; özdeşim, bastırma, fantezide inkâr", "Korkular ve kâbuslar bu yaşta normatiftir; kalıcılaşırsa ya da işlevi bozarsa değerlendirilir"],
      ["Duygusal yatırımın ebeveynden öğretmen, akran ve ideallere kayması", "Oyundan işe: görev tamamlama; bedensel bağımsızlık; arkadaşlık", "Karşıt tepki oluşturma, yüceltme, yapılanı bozma; ritüellerin bir kısmı normatiftir", "Okul başarısı ve arkadaşlık temel göstergelerdir; çizgiler arasındaki belirgin dengesizlik değerlendirme gerektirir"],
      ["İhtiyaç doyurucu tutumlara geçici dönüş", "Düzensizlik, huysuzluk, beden bakımında gevşeme", "Gerileme ve ikirciklik", "Gelişimin hizmetindeki geçici gerileme ile kalıcı gerilemeyi ayırt etmek"],
      ["Ebeveyn bağlarından kopma ve aile dışı nesnelere yönelme", "Aile dışı bağlar, iş ve idealler", "Çilecilik, entelektüalizasyon, yer değiştirme, sevginin nefrete dönüşmesi", "Anna Freud ergenlikte çalkantıyı beklenen bir durum saydı; boylamsal çalışmalar ise ergenlerin çoğunda ağır çalkantı olmadığını gösterdi (Offer, 1969). Ağır belirtiler 'normal ergenlik' diye geçiştirilmemelidir"]
    ]
  },
  evolution: [
    [1927, "Çocuk analizinde eğitsel yaklaşım: hazırlık dönemi, olumlu ilişki, ebeveynle çalışma; Klein'ın derin yorum tekniğiyle karşıtlık."],
    [1936, "Ego psikolojisi: analizin odağını bilinçdışı içerikten egonun savunmalarına kaydırma."],
    [1941, "Gözlem dönemi: Hampstead Savaş Kreşleri; ayrılık ve kurum bakımının etkileri, kreşlerde 'aile grupları'."],
    [1965, "Gelişim çizgileri ve Gelişim Profili: belirtiyi yaşa ve çizgiler arası dengeye göre yorumlama."],
    [1987, "Sonrası: Cramer'in savunmaların gelişimine ilişkin ampirik çalışmaları, DSM-IV'te savunma işlevselliği ölçeği; Hampstead geleneğinin mentalizasyon temelli tedavilerle birleşmesi (Anna Freud Merkezi)."]
  ],
  classic: {
    title: "Hampstead Savaş Kreşleri",
    text: [
      "Anna Freud ve Dorothy Burlingham, Londra bombardımanı sırasında aileleri tarafından bırakılmış ya da evleri yıkılmış çocukları Hampstead Savaş Kreşleri'nde (1941-1945) gözledi. Personelin tuttuğu ayrıntılı notlar Savaş ve Çocuklar (1943) ve Ailesiz Bebekler (1944) kitaplarına dönüştü.",
      "Gözlemlerin en çok aktarılan bulgusu, çocukların bombardımandan çok annelerinden ayrılmaktan etkilendiği ve tehlikeye tepkilerinin yanlarındaki yetişkinin tepkisini yansıttığıydı. Kurumda büyüyen bebeklerin konuşma ve duygusal gelişimde geride kaldığı, bakımveren değişikliklerinin yoğun sıkıntı yarattığı görüldü. Bunun üzerine kreşte çocuklar küçük 'aile gruplarına' ayrıldı ve her gruba sürekli bir bakımveren atandı."
    ],
    critique: [
      "Notlar analitik eğitim almış gözlemciler tarafından tutuldu ve yorumla iç içedir; sistematik bir karşılaştırma grubu ya da önceden tanımlanmış ölçütler yoktu. Savaş koşulları, kurum bakımının etkisini öteki etkenlerden ayırmayı zorlaştırır.",
      "Bununla birlikte gözlemler, Spitz'in ve Robertson'ların çalışmalarıyla birlikte, ayrılığın ve bakım sürekliliğinin önemine ilişkin sonraki araştırmaların ve hastane ile kurum politikalarındaki değişikliklerin öncülleri oldu."
    ],
    exps: ["freuddann51", "robertson52", "spitz45"]
  },
  vignette: {
    title: "Okulda 'çok olgun', gece altını ıslatan 7 yaşında çocuk",
    case: "Yedi yaşında bir kız çocuğu okulda başarılı, öğretmenine göre 'yaşından olgun'. Ancak hemen her gece altını ıslatıyor, annesinden ayrı uyuyamıyor ve arkadaş evinde yatıya kalmayı reddediyor. Gündüz idrar kaçırması yok. Babası çocukken geç kuru kalmış.",
    classic: "Anna Freud'un gelişim çizgileriyle: bilişsel ve okul çizgisi (oyundan işe) ileride, ıslaklıktan kuruluğa ve bağımlılıktan kendine yetmeye çizgileri geride. Çizgiler arasındaki bu dengesizlik Gelişim Profili'nde ayrıntılı olarak incelenir; ayrılık kaygısı ve olası savunmalar (ör. başarıyla telafi) değerlendirilir.",
    modern: "Güncel yaklaşım: DSM-5-TR'ye göre en az 5 yaşında, en az üç ay boyunca haftada iki kez ya da belirgin sıkıntıyla seyreden yatak ıslatma enürezistir. Sıklığı 5 yaşta %5-10, 10 yaşta %3-5'tir ve aile öyküsü sıktır. Kabızlık, idrar yolu enfeksiyonu, diyabet ve uyku apnesi dışlanır. Birinci basamak tedavi enürezis alarmı, gerekirse desmopresindir. Ayrılık kaygısı ayrıca değerlendirilir (SCARED) ve gerekirse BDT uygulanır. Çocuk suçlanmaz; enürezisin isteğe bağlı olmadığı aileye anlatılır."
  },
  misconceptions: [
    "Anna Freud yalnızca babasının fikirlerini sürdürmedi; ego psikolojisini ve gözleme dayalı çocuk analizini bağımsız olarak kurdu.",
    "Savunma mekanizmaları kendi başına patolojik değildir. Belirleyici olan savunmanın yaşa uygunluğu, esnekliği ve işlevselliği ne ölçüde kısıtladığıdır.",
    "Gelişim çizgileri arasındaki küçük dengesizlikler normaldir; patolojiyi düşündüren belirgin ve kalıcı dengesizliktir.",
    "'Ergenlikte normal olmak anormaldir' görüşü boylamsal çalışmalarla desteklenmedi; ergenlerin çoğu ağır bir çalkantı yaşamaz.",
    "Anna Freud ile Klein arasındaki ayrılık yalnızca kişisel değildi: Anna Freud çocukla eğitsel ve destekleyici bir ittifakı, ebeveynle çalışmayı ve yorumun dozlanmasını savundu."
  ],
  measures: [
    ["Hampstead Gelişim Profili", "Çocuğun dürtü, ego ve süperego gelişimini ve gelişim çizgilerini sistematik olarak değerlendiren klinik formülasyon şablonu."],
    ["Savunma Mekanizmaları Kılavuzu (DMM)", "Cramer'in TAT öyküleri üzerinden inkâr, yansıtma ve özdeşim savunmalarını puanlayan, çocuk ve ergenlerde gelişimsel çalışmalarda kullanılan yöntemi."],
    ["Savunma Mekanizmaları Derecelendirme Ölçeği (DMRS)", "Perry'nin görüşme kayıtları üzerinden savunmaları olgunluk düzeyine göre derecelendiren yöntemi."],
    ["Savunma Tarzları Anketi (DSQ)", "Bond'un geliştirdiği öz bildirim ölçeği; olgun, nevrotik ve olgunlaşmamış savunma tarzlarını ayırır."]
  ],
  exps: ["freuddann51", "cramer07", "sandstrom03"]
};

ATLAS.profiles.kohut = {
  life: "Heinz Kohut: 3 Mayıs 1913, Viyana – 8 Ekim 1981, Chicago",
  bio: [
    "Kohut Viyana'da kültürlü bir Yahudi ailenin tek çocuğu olarak doğdu. 1938'de Viyana Üniversitesi Tıp Fakültesi'nden mezun oldu ve August Aichhorn ile analize başladı. Nazilerden kaçarak 1939'da İngiltere'ye, 1940'ta Amerika Birleşik Devletleri'ne geçti. Chicago Üniversitesi'nde nöroloji ve psikiyatri eğitimi aldı, ardından Chicago Psikanaliz Enstitüsü'nde psikanalist olarak yetişti.",
    "1960'larda klasik psikanalizin önde gelen isimlerindendi ve 1964-1965'te Amerikan Psikanaliz Derneği'nin başkanlığını yaptı. Narsisistik hastalarla çalışırken klasik yorumların bu hastalarda işe yaramadığını, buna karşılık aynalama ve idealleştirme aktarımlarının ortaya çıktığını gözledi. Kendiliğin Analizi (1971) ile başlayan ve Kendiliğin Onarımı (1977) ile dürtü kuramından ayrılan kendilik psikolojisi, onu klasik psikanalizden uzaklaştırdı. Son kitabı Analiz Nasıl Tedavi Eder? ölümünden sonra (1984) yayımlandı."
  ],
  timeline: [
    [1913, "Viyana'da doğum"], [1938, "Viyana Üniversitesi'nden tıp diploması"], [1940, "Amerika Birleşik Devletleri ve Chicago"],
    [1959, "İçebakış, empati ve psikanaliz: empatinin bir gözlem yöntemi olarak tanımlanması"],
    [1964, "Amerikan Psikanaliz Derneği başkanlığı (1964-1965)"], [1966, "Narsisizmin biçimleri ve dönüşümleri"],
    [1971, "Kendiliğin Analizi"], [1972, "Narsisizm ve narsisistik öfke üzerine düşünceler"],
    [1977, "Kendiliğin Onarımı"], [1979, "Bay Z'nin iki analizi"], [1981, "Chicago'da ölüm"], [1984, "Analiz Nasıl Tedavi Eder?"]
  ],
  concepts: [
    ["Kendilik-nesnesi", "Kişinin kendilik bütünlüğünü ve özsaygısını sürdürmek için deneyimlediği öteki ya da işlev; bir kişi, bir grup ya da bir değer olabilir. Gereksinim yaşam boyu sürer."],
    ["Aynalama", "Çocuğun teşhirci coşkusunun ve başarılarının 'annenin gözündeki parıltı' ile onaylanması."],
    ["İdealleştirme", "Güçlü, sakin ve bilge bir figüre katılarak yatışma ve güven duyma gereksinimi."],
    ["İkizlik (alter ego)", "Başkalarına benzer olma, 'insanlar arasında bir insan' olma deneyimi."],
    ["Büyüklenmeci kendilik ve idealleştirilmiş ebeveyn imgosu", "Arkaik kendiliğin iki kutbu; sağlıklı gelişimde hırslara ve ideallere dönüşür."],
    ["İki kutuplu kendilik ve gerilim yayı", "Hırs kutbu ile idealler kutbu arasında yetenek ve becerilerin oluşturduğu gerilim alanı."],
    ["Optimal düş kırıklığı", "Kendilik-nesnesinin kaçınılmaz ama ölçülü, yönetilebilir başarısızlıkları; çocuğun bu işlevleri kendi yapısına dönüştürmesini sağlar."],
    ["Dönüştürücü içselleştirme", "Kendilik-nesnesinin işlevlerinin (yatıştırma, onaylama) küçük ve ölçülü başarısızlıklar sonucunda kişinin kendi kapasitesine dönüşmesi."],
    ["Empati (dolaylı içebakış)", "Başkasının iç deneyimini onun bakış açısından anlamaya yönelik gözlem yöntemi; onaylamak ya da hoş görmek anlamına gelmez."],
    ["Narsisistik öfke", "Kendilik-nesnesinin başarısızlığı ya da aşağılanma karşısında ortaya çıkan, intikam arayan ve süreklileşebilen öfke."],
    ["Kopuş ve onarım", "Terapide empatik başarısızlıkların ve bunların birlikte anlaşılmasının iyileştirici süreç olarak görülmesi."]
  ],
  stageFields: {
    labels: ["Kendilik-nesnesi gereksinimi", "Yeterli yanıt", "Yanıt aksarsa", "Klinik ipucu"],
    rows: [
      ["Bedensel ve duygusal durumların tutarlı biçimde düzenlenmesi", "Bakımverenin empatik, öngörülebilir yanıtı", "Parçalanma kaygısı; kendilik bütünlüğünün kırılganlığı", "Yetişkinde ağır stres altında 'dağılma' ve boşluk deneyimleri bu düzeyle ilişkilendirilir"],
      ["Aynalanma ve güçlü, sakin bir ebeveyne katılma", "Coşkunun onaylanması, yatıştırma; ölçülü ve yönetilebilir düş kırıklıkları", "Kırılgan özsaygı, boşluk, kendini yatıştıramama; onay arayışının süreklileşmesi", "Terapide aynalama ve idealleştirme aktarımlarının tanınması; terapistin ilgisindeki küçük kopuşlara yoğun tepki"],
      ["Rekabetçi ve şefkatli duyguların gururla karşılanması", "Ebeveynin tehdit edilmemiş, neşeli ve sınır koyan yanıtı", "Kohut'a göre patolojik Ödipus kompleksi, ebeveynin kendilik-nesnesi işlevindeki başarısızlığın ürünüdür", "Ödipal temalar kendilik zayıflığı bağlamında okunur"],
      ["Başkalarına benzer olma ve birlikte çalışma (ikizlik)", "Akran grubu, ustalık ve beceri kazanımı", "Yabancılaşma, 'insanlar arasında bir insan' olamama", "Dışlanan ya da zorbalığa uğrayan çocukta ikizlik gereksinimi karşılanmaz"],
      ["Olgun kendilik-nesneleri: eş, arkadaşlar, değerler, kültür", "Karşılıklı ilişkiler, gerçekçi hırslar ve içselleştirilmiş idealler", "Narsisistik kişilik bozukluğu, narsisistik öfke, kronik boşluk", "Kırılgan (vulnerable) ve büyüklenmeci (grandiose) narsisizm ayrımı; terapide kopuş-onarım döngüleri"]
    ]
  },
  evolution: [
    [1959, "Yöntem: empati ve içebakış psikanalizin temel gözlem araçları olarak tanımlandı."],
    [1966, "Narsisizmin kendi gelişim çizgisi: sağlıklı narsisizm yaratıcılık, empati, mizah ve bilgeliğe dönüşebilir."],
    [1971, "Kendiliğin Analizi: narsisistik aktarımlar (aynalama, idealleştirme) klasik dürtü kuramı çerçevesinde."],
    [1977, "Kendiliğin Onarımı: iki kutuplu kendilik; kendilik psikolojisinin dürtü kuramından ayrılması."],
    [1984, "Sonrası: öznelerarası yaklaşımlar (Stolorow), ilişkisel psikanaliz; kırılgan ve büyüklenmeci narsisizm üzerine ampirik çalışmalar; çocukta narsisizmin kökenlerine ilişkin boylamsal araştırmalar."]
  ],
  classic: {
    title: "Bay Z'nin iki analizi",
    text: [
      "Kohut (1979), yirmili yaşların ortasında, yalnız yaşayan ve ilişki kurmakta güçlük çeken bir genç adam olan Bay Z'nin iki ayrı analizini yayımladı. İlk analiz klasik bir yaklaşımla yürütüldü: Bay Z'nin talepkârlığı ve büyüklenmeciliği aktarımda direnç olarak yorumlandı, Ödipal çatışmalar ele alındı. Belirtiler kısmen düzeldi.",
      "Birkaç yıl sonra yapılan ikinci analiz kendilik psikolojisi çerçevesinde yürütüldü. Bu kez Bay Z'nin annesinin onu kendi gereksinimleri için kullanan müdahaleci tutumu ve uzun süre yanında olmayan babasının idealleştirilme gereksinimi ön plana çıktı. Kohut ikinci analizin daha derin ve kalıcı bir değişim sağladığını bildirdi ve vakayı yeni kuramın klinik üstünlüğünün kanıtı olarak sundu."
    ],
    critique: [
      "Tek bir vakadır ve iki analizi aynı kişi aktarır; sonuçlar bağımsız ölçümlerle karşılaştırılmamıştır. Kohut'un biyografisini yazan Charles Strozier ve başkaları, Bay Z'nin büyük olasılıkla Kohut'un kendisi olduğunu ileri sürdü; bu, vakanın kanıt değerini daha da tartışmalı kılar.",
      "Gelişim modeli yetişkin aktarımlarından geriye doğru çıkarılmıştır. Çocuklarla yapılan boylamsal çalışmalarda narsisizmi ebeveyn sıcaklığının eksikliği değil, çocuğun başkalarından üstün görülmesi öngördü (Brummelman ve ark., 2015). Ergenlerde ise narsisizm ancak utandırıldıktan sonra saldırganlığa yol açtı (Thomaes ve ark., 2008); bu bulgu narsisistik öfke kavramıyla örtüşür."
    ],
    exps: ["brummelman15", "thomaes08"]
  },
  vignette: {
    title: "Eleştiriye öfkeyle, beğeni almamaya 'yok olmuş gibi' tepki veren 16 yaşında genç",
    case: "On altı yaşında bir erkek öğrenci, öğretmeninin ödevini sınıf önünde eleştirmesinden sonra öğretmene bağırıp sınıftan çıkıyor. Sosyal medyada paylaşımları yeterince beğeni almadığında 'yok olmuş gibi' hissettiğini, günlerce odasından çıkmadığını anlatıyor. Ailesi onu çocukluğundan beri 'özel ve üstün yetenekli' olarak görüyor.",
    classic: "Kohut'un kavramlarıyla: aynalanma gereksinimi karşılanmamış kırılgan bir kendilik. Eleştiri ve görülmeme deneyimi kendiliğin bütünlüğünü tehdit ediyor; öfke narsisistik öfkedir, geri çekilme ise kendilik parçalanmasına karşı bir korunma. Terapide empatik ayarlanma ve kopuş-onarım döngüleri temel araçlardır.",
    modern: "Güncel yaklaşım: depresyon, sosyal kaygı, intihar düşünceleri (özellikle utanç ve aşağılanma sonrasında) ve sosyal medya kullanımı değerlendirilir. Ergenlerde kişilik bozukluğu tanısı dikkatle ve boyutsal olarak konur; narsisistik özellikler Çocuk Narsisizm Ölçeği ya da Patolojik Narsisizm Envanteri ile ölçülebilir. Duygu düzenleme becerilerine odaklanan yaklaşımlar (ergenler için DBT becerileri, MBT-A) ve aile çalışması önerilir. Ailelere, çocuğu başkalarından üstün görmek yerine sıcaklık ve koşulsuz kabul göstermenin sağlıklı benlik saygısıyla ilişkili olduğu anlatılır."
  },
  misconceptions: [
    "Kohut narsisizmi kötü bir şey olarak görmez; sağlıklı narsisizm (özsaygı, hırs, idealler, mizah) yaşam boyu gelişir.",
    "Kendilik-nesnesi bir kişiden çok bir işlevdir; bir grup, bir değer ya da kültür de bu işlevi görebilir.",
    "Optimal düş kırıklığı, çocuğu bilerek hayal kırıklığına uğratmak değildir; kaçınılmaz ve ölçülü başarısızlıkların empatik bir ilişki içinde yaşanmasıdır.",
    "Kohut'ta empati onaylama ya da hoş görme değil, başkasının deneyimini onun bakış açısından anlamaya yönelik bir gözlem yöntemidir.",
    "'Çocuğu övmek narsisizm üretir' de 'hiç övmemek gerekir' de yanlıştır: boylamsal bulgulara göre çocuğu başkalarından üstün görmek narsisizmi, sıcaklık ise sağlıklı benlik saygısını öngörür."
  ],
  measures: [
    ["Narsisistik Kişilik Envanteri (NPI)", "Raskin ve Hall'un büyüklenmeci narsisizmi ölçen öz bildirim ölçeği; en yaygın kullanılan araştırma aracı."],
    ["Patolojik Narsisizm Envanteri (PNI)", "Pincus ve arkadaşlarının büyüklenmeci ve kırılgan narsisizmi birlikte değerlendiren ölçeği."],
    ["Aşırı Duyarlı Narsisizm Ölçeği (HSNS)", "Hendin ve Cheek'in kırılgan narsisizme odaklanan kısa ölçeği."],
    ["Çocuk Narsisizm Ölçeği (CNS)", "Thomaes ve arkadaşlarının çocuk ve erken ergenler için geliştirdiği on maddelik ölçek."],
    ["Kendilik-Nesnesi Gereksinimleri Envanteri (SONI)", "Banai, Mikulincer ve Shaver'ın aynalama, idealleştirme ve ikizlik gereksinimlerini ölçmeye yönelik araştırma ölçeği."]
  ],
  exps: ["brummelman15", "thomaes08"]
};

ATLAS.profiles.kernberg = {
  life: "Otto F. Kernberg: 10 Eylül 1928, Viyana",
  bio: [
    "Kernberg Viyana'da doğdu; ailesi 1939'da Nazilerden kaçarak Şili'ye göç etti. Şili Üniversitesi'nde biyoloji ve tıp okudu, psikiyatri ve psikanaliz eğitimini Şili'de aldı. Rockefeller bursuyla Johns Hopkins Üniversitesi'nde Jerome Frank'in yanında psikoterapi araştırması üzerine çalıştı.",
    "1960'larda Topeka'daki Menninger Kliniği'nde çalıştı, kliniğin hastane direktörlüğünü yaptı ve Menninger Psikoterapi Araştırma Projesi'nin nicel bölümünü yönetti. 1970'lerde New York'a geçti; Columbia Üniversitesi'nde ve ardından Cornell Üniversitesi'nde (Weill Cornell Tıp Fakültesi) çalıştı ve Kişilik Bozuklukları Enstitüsü'nü kurdu. 1997-2001 yıllarında Uluslararası Psikanaliz Birliği'nin başkanlığını yaptı. Klein'ın, Edith Jacobson'ın ve Mahler'in kuramlarını ego psikolojisiyle birleştirdi. Eşi çocuk psikiyatristi Paulina Kernberg, çocuk ve ergenlerde kişilik bozuklukları üzerine çalıştı."
  ],
  timeline: [
    [1928, "Viyana'da doğum"], [1939, "Ailesiyle Şili'ye göç"], [1961, "Menninger Kliniği (yaklaşık tarih)"],
    [1967, "Sınır kişilik örgütlenmesi"], [1972, "Menninger Psikoterapi Araştırma Projesi'nin son raporu"],
    [1975, "Sınır Durumlar ve Patolojik Narsisizm"], [1976, "Nesne İlişkileri Kuramı ve Klinik Psikanaliz"],
    [1984, "Ağır Kişilik Bozuklukları: yapısal görüşme"], [1997, "Uluslararası Psikanaliz Birliği başkanlığı (1997-2001)"],
    [1999, "Clarkin, Yeomans ve Kernberg: Aktarım Odaklı Psikoterapi el kitabı"], [2007, "TFP, DBT ve destekleyici terapinin randomize karşılaştırması"],
    [2010, "Doering ve ark.: TFP ile deneyimli toplum terapistlerinin karşılaştırması"]
  ],
  concepts: [
    ["Kendilik-nesne-duygulanım birimleri", "Erken deneyimlerin, bir kendilik temsili, bir nesne temsili ve aralarındaki duygulanımdan oluşan birimler olarak içselleştirilmesi."],
    ["Kişilik örgütlenmesi düzeyleri", "Nevrotik, sınır ve psikotik örgütlenme; kimlik bütünlüğü, savunmaların düzeyi ve gerçeği değerlendirme ölçütleriyle ayrılır."],
    ["Kimlik dağınıklığı", "Kendilik ve önemli ötekiler hakkında bütünleşik olmayan, çelişkili ve hızla değişen algılar; sınır kişilik örgütlenmesinin çekirdeği."],
    ["İlkel savunmalar", "Bölme, yansıtmalı özdeşim, ilkel idealleştirme ve değersizleştirme, inkâr ve her şeye gücü yetme."],
    ["Gerçeği değerlendirme", "Kendilik ile kendilik dışını ayırt edebilme ve toplumsal gerçeklik ölçütlerine duyarlılık; sınır örgütlenmede korunur, psikotik örgütlenmede bozulur."],
    ["Patolojik büyüklenmeci kendilik", "Gerçek kendilik, idealleştirilmiş kendilik ve idealleştirilmiş nesne temsillerinin kaynaşmasıyla oluşan ve narsisistik kişiliğin temelinde olduğu varsayılan yapı."],
    ["Malign narsisizm", "Narsisistik kişilik bozukluğu, antisosyal özellikler, ego ile uyumlu sadizm ve paranoid yönelimin birlikteliği."],
    ["Duygulanımlar dürtülerin yapı taşları", "Kernberg'e göre libido ve saldırganlık, erken duygulanım deneyimlerinin örgütlenmesiyle oluşur; mizaç, duygulanımların yoğunluğunu belirleyen bir etkendir."],
    ["Aktarım Odaklı Psikoterapi (TFP)", "Tedavi sözleşmesi, teknik tarafsızlık ve aktarımda etkinleşen kendilik-nesne ikililerinin 'burada ve şimdi' yorumlanmasına dayanan yapılandırılmış tedavi."],
    ["Yapısal görüşme", "Belirti, kimlik, savunma ve gerçeği değerlendirme alanlarını, görüşmedeki etkileşimi de kullanarak inceleyen tanısal görüşme."]
  ],
  stageFields: {
    labels: ["İçselleştirilen birimler", "Savunmalar", "Takılmada örgütlenme düzeyi", "Klinik ipucu"],
    rows: [
      ["Ayrışmış birim yok; deneyim fizyolojik durumlara göre örgütlenir", "Henüz yok", "Kuramda karşılığı yok", "Mahler'in 'normal otistik evresine' dayanır; bu evre bebek araştırmasıyla desteklenmez"],
      ["Yoğun haz ve acı anlarında oluşan, kendilik ile nesnenin iç içe olduğu iki ayrı birim: 'iyi' ve 'kötü'", "En ilkel bölme", "Psikotik örgütlenme: kendilik-nesne sınırları ve gerçeği değerlendirme bozulur", "Yapısal görüşmede gerçeği değerlendirme, hastanın görüşmecinin bakış açısını dikkate alabilmesiyle sınanır"],
      ["Ayrı ama bölünmüş ikililer: 'sevilen kendilik ve ideal öteki' ile 'öfkeli kendilik ve saldırgan öteki'", "Bölme, yansıtmalı özdeşim, ilkel idealleştirme ve değersizleştirme, inkâr", "Sınır kişilik örgütlenmesi: kimlik dağınıklığı, ilkel savunmalar, korunmuş gerçeği değerlendirme", "Hızla değişen aktarımlar; terapistin karşı aktarımda idealleştirilen ve değersizleştirilen uçlar arasında savrulması"],
      ["Hem sevilen hem öfke duyulan bütün kişiler; ikirciklik taşıyan gerçekçi temsiller ve bütünleşmiş bir süperego", "Bastırma ve ileri düzey savunmalar", "Nevrotik örgütlenme: kimlik bütünleşik, çatışmalar bastırma etrafında örgütlenir", "Yorum odaklı tedavilere uygun; belirtiler belirli çatışma alanlarıyla sınırlı kalır"],
      ["Zaman içinde süreklilik gösteren kendilik ve öteki temsilleri; derin ve karşılıklı ilişkiler", "Olgun savunmalar", "Olgun kişilik örgütlenmesi", "Ergenlikte normatif kimlik krizinde benlik ve ötekiler hakkında bütünleşik algı korunur; kimlik dağınıklığında korunmaz"]
    ]
  },
  evolution: [
    [1967, "Sınır kişilik örgütlenmesi: sınır durumların bir belirti listesi değil, bir kişilik yapısı olarak tanımlanması."],
    [1975, "Nesne ilişkileri sentezi: Klein, Jacobson ve Mahler'in ego psikolojisiyle birleştirilmesi; patolojik narsisizm kuramı."],
    [1984, "Klinik araçlar: yapısal görüşme ve kişilik örgütlenmesi düzeyleri."],
    [1999, "Tedavi el kitabı ve randomize çalışmalar: Aktarım Odaklı Psikoterapi (Clarkin ve ark., 2007; Doering ve ark., 2010)."],
    [2010, "Sonrası: STIPO-R, ergenler için TFP-A ve ergenlikte kimlik değerlendirmesi (AIDA). DSM-5'in alternatif kişilik bozuklukları modelindeki kişilik işlevselliği düzeyi (kimlik, kendini yönetme, empati, yakınlık) Kernberg'in yapısal düşüncesiyle benzerlik taşır."]
  ],
  classic: {
    title: "Menninger Psikoterapi Araştırma Projesi",
    text: [
      "1950'lerde Menninger Vakfı'nda başlayan proje, psikanaliz, dışavurumcu (yorumlayıcı) psikoterapi ve destekleyici psikoterapi gören 42 yetişkin hastayı tedavi süresince ve sonrasında uzun yıllar izledi. Kernberg projenin nicel bölümünü yönetti ve 1972'de ekibiyle son raporu yayımladı.",
      "Kernberg'in yorumuna göre ego gücü düşük, yani sınır örgütlenmeli hastalar, aktarımın yapılandırılmış bir çerçevede yorumlandığı dışavurumcu psikoterapiden, salt destekleyici ya da klasik psikanalitik tedaviden daha fazla yarar görüyordu. Bu yorum, sonradan Aktarım Odaklı Psikoterapi'nin temel düşüncelerinden biri oldu."
    ],
    critique: [
      "Proje randomize değildi; tedavi türleri hastanın özelliklerine göre seçildi ve örneklem küçüktü. Ölçümler büyük ölçüde klinisyen değerlendirmelerine dayanıyordu.",
      "Projenin uzun dönem izlemini yürüten Wallerstein (Tedavide Kırk İki Yaşam, 1986) farklı bir sonuca vardı: destekleyici tedaviler beklenenden fazla yapısal değişim sağlamıştı ve dışavurumcu ile destekleyici öğeler uygulamada iç içeydi. Kernberg'in yaklaşımının randomize sınaması ancak 2000'lerde yapılabildi (Clarkin ve ark., 2007)."
    ],
    exps: ["clarkin07"]
  },
  vignette: {
    title: "Terapistini bir seans idealleştirip ertesi seans değersizleştiren 17 yaşında ergen",
    case: "On yedi yaşında bir kız, ilk seanslarda terapistini 'beni anlayan tek kişi' olarak görüyor; terapist bir randevuyu ertelediğinde ise 'sen de herkes gibisin' diyerek terapiyi bırakmakla tehdit ediyor. Arkadaşlıkları ve romantik ilişkileri kısa ve fırtınalı; kim olduğunu, ne istediğini her hafta farklı anlatıyor. Ara sıra kendine zarar veriyor. Düşünce içeriğinde psikotik belirti yok.",
    classic: "Kernberg'in formülasyonu: sınır kişilik örgütlenmesi. Kimlik dağınıklığı, bölme ve ilkel idealleştirme ile değersizleştirme var; gerçeği değerlendirme korunmuş. Aktarımda 'anlayan ideal öteki' ile 'terk eden kötü öteki' ikilileri sırayla etkinleşiyor. Aktarım Odaklı Psikoterapide bu ikililer bir tedavi sözleşmesi çerçevesinde burada ve şimdi yorumlanır.",
    modern: "Güncel yaklaşım: DSM-5-TR 18 yaşından önce sınır kişilik bozukluğu tanısına, belirtiler en az bir yıl sürmüşse izin verir; erken tanı ve tedavi önerilir. Kimlik gelişimi AIDA ile, kişilik örgütlenmesi STIPO-R ile değerlendirilebilir; normatif ergen kimlik arayışı ayırt edilir. Ergenlerde en güçlü randomize kanıt DBT ve MBT-A içindir; TFP-A'nın kanıtı sınırlı ama gelişmektedir. Eşlik eden depresyon, madde kullanımı ve travma değerlendirilir, çoklu ilaç kullanımından kaçınılır ve aile sürece katılır."
  },
  misconceptions: [
    "Sınır kişilik örgütlenmesi ile DSM'deki sınır kişilik bozukluğu aynı şey değildir. Örgütlenme kavramı daha geniştir; narsisistik, antisosyal, şizoid ve paranoid kişilik bozukluklarını da kapsar.",
    "Bölme yalnızca hastalara özgü değildir; ağır stres altında herkes kullanabilir. Patolojiyi belirleyen, bütünleşmenin kalıcı olarak yokluğudur.",
    "TFP 'katı ve soğuk' bir tedavi değildir. Teknik tarafsızlık, hastanın iç dünyasındaki çatışan güçlerin her birine eşit uzaklıkta durmak demektir; destek ve sıcaklığı dışlamaz.",
    "Kernberg'in gelişim evreleri çocuk gözlemine dayanmaz; yetişkin tedavilerinden ve Mahler'in modelinden türetilmiştir.",
    "Ergenlikte kimlik dağınıklığı tanısı için normatif kimlik arayışının dışlanması gerekir; bütünleşik bir kendilik ve öteki algısının korunması normatif krizin işaretidir."
  ],
  measures: [
    ["Kişilik Örgütlenmesi Yapılandırılmış Görüşmesi (STIPO-R)", "Kimlik, nesne ilişkileri, ilkel savunmalar, saldırganlık ve ahlaki değerler alanlarında kişilik örgütlenmesi düzeyini belirleyen yarı yapılandırılmış görüşme."],
    ["Yapısal görüşme", "Kernberg'in belirti, kimlik, savunma ve gerçeği değerlendirmeyi görüşmedeki etkileşim üzerinden inceleyen klinik görüşmesi."],
    ["Kişilik Örgütlenmesi Envanteri (IPO)", "Lenzenweger, Clarkin, Kernberg ve arkadaşlarının kimlik dağınıklığı, ilkel savunmalar ve gerçeği değerlendirmeyi ölçen öz bildirim ölçeği."],
    ["Ergenlikte Kimlik Gelişimi Değerlendirmesi (AIDA)", "Goth ve arkadaşlarının ergenlerde normatif kimlik arayışını kimlik dağınıklığından ayırmaya yönelik öz bildirim ölçeği."]
  ],
  exps: ["clarkin07", "brummelman15", "thomaes08"]
};

/* Profillerle eklenen çalışmalar ve temel eserler */
ATLAS.experiments.push(
{ id: "sandstrom03", year: 2003, title: "Çocuklarda savunma mekanizmaları ve uyum", who: "Sandstrom ve Cramer", age: "İlkokul çağı",
  method: "Doksan beş ilkokul öğrencisinin savunma mekanizmaları geçerliği gösterilmiş bir öykü anlatma göreviyle (Cramer'in Savunma Mekanizmaları Kılavuzu) değerlendirildi; uyum ebeveyn ve öz bildirim ölçekleriyle ölçüldü.",
  find: "Gelişimsel olarak olgunlaşmamış bir savunma olan inkârı kullanan çocuklarda sosyal kaygı, depresyon ve ebeveynin bildirdiği içe ve dışa yönelim sorunları daha yüksekti. Olgun bir savunma olan özdeşimi kullanan çocuklar ise sosyal, akademik ve genel yeterlik algısında daha yüksek puan aldı.",
  sup: ["afreud"], ch: [], st: 2,
  note: "Kesitsel ve ilişkisel bir çalışmadır; savunmaların uyuma yol açtığını değil, yaşa uygunluklarının uyumla ilişkili olduğunu gösterir." },
{ id: "cramer07", year: 2007, title: "Savunma mekanizmalarının boylamsal seyri", who: "Phebe Cramer", age: "11, 12 ve 18 yaş",
  method: "İnsan Gelişimi Enstitüsü'nün kuşaklararası çalışmasındaki 150'den fazla kişinin 11, 12 ve 18 yaşlarında anlattığı TAT öyküleri savunma mekanizmaları açısından puanlandı.",
  find: "Her üç yaşta da yansıtma ve özdeşim inkârdan daha sık kullanılıyordu ve yansıtma ile özdeşimin kullanımı erken ergenlikten geç ergenliğe doğru arttı. Bulgular, savunmaların belirli bir gelişimsel sırayla ortaya çıktığını gösteren kesitsel çalışmalarla genel olarak uyumluydu.",
  sup: ["afreud"], ch: [], st: 2,
  note: "Anna Freud'un savunmaların gelişimsel bir sırası olduğu görüşünün ampirik sınamalarından biridir. Ölçüm, yansıtmalı bir teste ve puanlayıcı yorumuna dayanır." },
{ id: "thomaes08", year: 2008, title: "Utanç, narsisizm ve saldırganlık", who: "Thomaes, Bushman, Stegge ve Olthof", age: "Erken ergenlik (ortalama 12 yaş)",
  method: "Narsisizm ve benlik saygısı ölçülen 163 erken ergen, sözde bir rakibe karşı yarışmalı bir görevi kaybetti. Utanç koşulunda rakiplerinin iyi olmadığı söylendi ve kendi adlarını sıralamanın en altında gördüler. Ardından rakiplerine istedikleri şiddette gürültü gönderebildiler (saldırganlık ölçümü).",
  find: "Narsisistik çocuklar ancak utandırıldıktan sonra öteki çocuklardan daha saldırgandı. Düşük benlik saygısı saldırganlığa yol açmadı; en yüksek saldırganlık, yüksek narsisizm ile yüksek benlik saygısının bir arada olduğu çocuklarda görüldü.",
  sup: ["kohut"], ch: [], st: 2,
  note: "Utanca bağlı saldırganlık Kohut'un narsisistik öfke kavramıyla örtüşür. Öte yandan narsisizmin altında düşük benlik saygısı yattığı varsayımını desteklemez." }
);
ATLAS.refs = ATLAS.refs || {};
ATLAS.refs.sandstrom03 = { apa: "Sandstrom, M. J., & Cramer, P. (2003). Defense mechanisms and psychological adjustment in childhood. The Journal of Nervous and Mental Disease, 191(8), 487-495.", doi: "10.1097/01.nmd.0000082214.19699.6f", pmid: "12972850" };
ATLAS.refs.cramer07 = { apa: "Cramer, P. (2007). Longitudinal study of defense mechanisms: Late childhood to late adolescence. Journal of Personality, 75(1), 1-24.", doi: "10.1111/j.1467-6494.2006.00430.x", pmid: "17214589" };
ATLAS.refs.thomaes08 = { apa: "Thomaes, S., Bushman, B. J., Stegge, H., & Olthof, T. (2008). Trumping shame by blasts of noise: Narcissism, self-esteem, shame, and aggression in young adolescents. Child Development, 79(6), 1792-1801.", doi: "10.1111/j.1467-8624.2008.01226.x", pmid: "19037950" };
if (ATLAS.expRefs) ["sandstrom03", "cramer07", "thomaes08"].forEach(function (k) { ATLAS.expRefs[k] = [k]; });
(function (X) {
  /* Temel eser listesi kuramın kendi kaydındaysa oraya, değilse theoryExtras'a eklenir (util.js yalnızca biri yoksa ötekini kullanır). */
  function add(id, items) {
    var t = (ATLAS.theories || []).filter(function (x) { return x.id === id; })[0];
    var list = t && t.primary ? t.primary : ((X[id] = X[id] || {}).primary = (X[id] && X[id].primary) || []);
    items.forEach(function (p) { if (list.indexOf(p) < 0) list.push(p); });
  }
  add("afreud", [
    "Freud, A. (1927). Einführung in die Technik der Kinderanalyse. Internationaler Psychoanalytischer Verlag.",
    "Freud, A., & Burlingham, D. (1943). War and children. Medical War Books.",
    "Freud, A., & Burlingham, D. (1944). Infants without families. International Universities Press.",
    "Freud, A. (1958). Adolescence. The Psychoanalytic Study of the Child, 13, 255-278.",
    "Goldstein, J., Freud, A., & Solnit, A. J. (1973). Beyond the best interests of the child. Free Press."
  ]);
  add("kohut", [
    "Kohut, H. (1959). Introspection, empathy, and psychoanalysis: An examination of the relationship between mode of observation and theory. Journal of the American Psychoanalytic Association, 7(3), 459-483.",
    "Kohut, H. (1966). Forms and transformations of narcissism. Journal of the American Psychoanalytic Association, 14(2), 243-272.",
    "Kohut, H. (1972). Thoughts on narcissism and narcissistic rage. The Psychoanalytic Study of the Child, 27, 360-400.",
    "Kohut, H. (1979). The two analyses of Mr Z. International Journal of Psycho-Analysis, 60(1), 3-27."
  ]);
  add("kernberg", [
    "Kernberg, O. F. (1967). Borderline personality organization. Journal of the American Psychoanalytic Association, 15(3), 641-685.",
    "Kernberg, O. F., Burstein, E. D., Coyne, L., Appelbaum, A., Horwitz, L., & Voth, H. (1972). Psychotherapy and psychoanalysis: Final report of the Menninger Foundation's Psychotherapy Research Project. Bulletin of the Menninger Clinic, 36(1-2), 1-275.",
    "Kernberg, O. F. (1984). Severe personality disorders: Psychotherapeutic strategies. Yale University Press.",
    "Clarkin, J. F., Yeomans, F. E., & Kernberg, O. F. (1999). Psychotherapy for borderline personality. Wiley.",
    "Wallerstein, R. S. (1986). Forty-two lives in treatment: A study of psychoanalysis and psychotherapy. Guilford Press."
  ]);
})(ATLAS.theoryExtras = ATLAS.theoryExtras || {});
