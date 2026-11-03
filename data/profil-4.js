/* Ayrıntılı kuram profilleri (4/4): Mahler, Klein, Winnicott, Stern. */
ATLAS.profiles = ATLAS.profiles || {};

ATLAS.profiles.mahler = {
  life: "Margaret Schönberger Mahler: 10 Mayıs 1897, Sopron (Macaristan) – 2 Ekim 1985, New York",
  bio: [
    "Mahler, Avusturya-Macaristan sınırındaki Sopron'da, hekim bir babanın kızı olarak doğdu. Budapeşte, Münih ve Jena'da tıp okudu ve 1922'de Heidelberg Üniversitesi'nden mezun oldu. Viyana'da pediatriyle çalışırken çocukların ruhsal sorunlarına yöneldi ve Viyana Psikanaliz Enstitüsü'nde eğitim aldı; August Aichhorn'un suça karışan gençlerle çalışmasından etkilendi.",
    "1938'de eşi Paul Mahler ile önce Londra'ya, ardından New York'a göç etti. 1950'lerde ağır ruhsal bozukluğu olan küçük çocuklarla çalışırken 'otistik' ve 'simbiyotik' çocukluk psikozlarını tanımladı. Manuel Furer ile birlikte New York'taki Masters Children's Center'da önce psikotik çocuklar için anne, çocuk ve terapistin birlikte katıldığı bir tedavi modeli geliştirdi. Ardından Fred Pine ve Anni Bergman ile normal anne-bebek çiftlerini yıllarca gözledikleri araştırmayı yürüttü. Bu araştırmanın ürünü olan İnsan Bebeğinin Psikolojik Doğuşu (1975), ayrılma-bireyleşme kuramının temel metnidir."
  ],
  timeline: [
    [1897, "Sopron'da doğum"], [1922, "Heidelberg Üniversitesi'nden tıp diploması"], [1938, "New York'a göç"],
    [1952, "Çocukluk psikozu ve şizofreni: otistik ve simbiyotik çocukluk psikozları"],
    [1959, "Masters Children's Center'da normal anne-bebek çiftlerinin gözlemi başlar (yaklaşık tarih)"],
    [1968, "Furer ile: İnsan Simbiyozu ve Bireyleşmenin Değişkenleri"],
    [1975, "Pine ve Bergman ile: İnsan Bebeğinin Psikolojik Doğuşu"], [1985, "New York'ta ölüm"]
  ],
  concepts: [
    ["Psikolojik doğum", "Fiziksel doğumdan farklı olarak, ayrı bir birey olma duygusunun ilk üç yılda yavaş yavaş kazanılması."],
    ["Ayrılma ve bireyleşme", "İki iç içe çizgi: ayrılma, anneden ayrımlaşma ve uzaklaşmayı; bireyleşme, çocuğun kendine özgü özelliklerinin (bilişsel, motor, duygusal) gelişmesini anlatır."],
    ["Simbiyoz", "Mahler'e göre bebeğin kendini ve anneyi ortak bir sınır içinde, tek bir sistem gibi yaşadığı dönem. Bugünkü bebek araştırması bu varsayımı desteklemez."],
    ["Yumurtadan çıkma", "Farklılaşma alt evresinde bebeğin daha uyanık, dışa dönük ve araştırıcı bir bakış kazanması."],
    ["Gümrük muayenesi ve geri kontrol", "Bebeğin yabancıların yüzünü inceleyip anneninkiyle karşılaştırması ve keşif sırasında dönüp anneye bakması."],
    ["Duygusal yakıt ikmali", "Alıştırma alt evresinde keşfe çıkan çocuğun kısa süreliğine anneye dönüp bedensel temasla 'yakıt' alması."],
    ["Dünyayla aşk ilişkisi", "Dik yürümeyle gelen coşkulu keşif ve kendine hayranlık; düşmelere ve ayrılıklara görece kayıtsızlık."],
    ["Yeniden yakınlaşma krizi", "Ayrı olduğunu fark eden çocuğun özerklik isteği ile anneye yapışma arasında gidip gelmesi: gölge olma ve kaçıp gitme, ikircik, öfke nöbetleri."],
    ["Duygusal nesne sürekliliği", "Annenin iyi ve hayal kırıklığı yaratan yanlarının bütünleşik, kalıcı bir iç imgede birleşmesi; Piaget'nin bilişsel nesne sürekliliğinden farklıdır."],
    ["Optimal ulaşılabilirlik", "Annenin ne yapışan ne iten, çocuğun hem uzaklaşmasına hem dönmesine izin veren tutumu."]
  ],
  stageFields: {
    labels: ["Mahler'in gözlemleri", "Annenin rolü", "Bugünkü kanıtlar", "Klinik ipucu"],
    rows: [
      ["Uyku ağırlıklı, fizyolojik dengeye yönelik bir bebek; dış uyaranlara karşı bir 'uyaran bariyeri' varsayıldı", "Fizyolojik düzenleme: beslenme, uyku, sakinleştirme", "Reddedildi: yenidoğanlar yüz benzeri desenleri izler, annenin sesini tanır ve bazı hareketleri taklit eder (taklit bulgusu tartışmalıdır)", "'Normal otistik evre' teriminin otizm spektrum bozukluğuyla hiçbir ilgisi yoktur; terim bugün kullanılmamalıdır"],
      ["Anneye yönelme, sosyal gülümseme, bedensel yakınlık arayışı; ikili birlik yanılsaması", "Kucakta tutma, bakışma, bebeğin sinyallerine yanıt", "Bebeklerin kendini ve ötekini erkenden ayırt ettiği gösterildi (Stern); ancak yoğun karşılıklı düzenleme dönemi doğrulandı (Tronick)", "Doğum sonrası depresyon karşılıklı düzenlemeyi bozabilir; bebeğin geri çekilmesine dikkat"],
      ["Daha uyanık bakış ('yumurtadan çıkma'), annenin yüzünü, saçını, takılarını inceleme, gümrük muayenesi, yabancı kaygısı", "Bebeğin kucaktan uzaklaşma ve keşif girişimlerine izin verme", "6-9. aylarda yabancıya temkin ve seçici bağlanmanın belirginleşmesiyle örtüşür", "Yabancı kaygısının hiç olmaması ya da aşırı yoğun olması değerlendirme gerektirir"],
      ["Emekleme ve yürümeyle coşkulu keşif, düşmelere görece kayıtsızlık, anneye dönüp duygusal yakıt alma", "Güvenli üs olarak orada olma", "Bowlby'nin güvenli üs kavramı ve sosyal referans bulgularıyla uyumlu", "Hiç keşfetmeyen ya da anneyi hiç kontrol etmeyen çocuk, bağlanma ve gelişim açısından değerlendirilmeli"],
      ["Kendini aynada tanıma, gölge olma ve kaçıp gitme, ikircik, öfke nöbetleri, ayrılığa artan duyarlılık; kriz yaklaşık 18-24. aylarda", "Sakin, öngörülebilir ve ulaşılabilir kalma; çocuğun hem yaklaşmasına hem uzaklaşmasına izin verme", "Ayna testinde kendini tanıma 18-24. aylarda; öfke nöbetleri bu yaşlarda sıktır", "Masterson ve Kernberg sınır kişilik bozukluğunu bu döneme bağladı; bu nedensel model kanıtla desteklenmemiştir"],
      ["Annenin yokluğunda iç imgeden güç alma, ayrılığa uyum, dil ve sembolik oyun, tutarlı kendilik duygusu", "Kreşe ve ayrılıklara kademeli geçiş; vedalaşma ritüelleri", "Bowlby'nin amaca göre düzeltilmiş ortaklık evresi ve zihin kuramının öncülleriyle örtüşür", "Ayrılık kaygısı bozukluğu ve kreşe uyum güçlüklerinin değerlendirilmesinde kullanışlı bir dil sunar"]
    ]
  },
  evolution: [
    [1952, "Klinik başlangıç: ağır ruhsal bozukluğu olan çocuklarda otistik ve simbiyotik psikoz tanımları."],
    [1959, "Masters Children's Center: normal anne-bebek çiftlerinin yıllar süren doğal gözlemi; kuram bu gözlemlerle evrelere ayrıldı."],
    [1975, "İnsan Bebeğinin Psikolojik Doğuşu: dört alt evreli ayrılma-bireyleşme modeli."],
    [1985, "Bebek araştırmasının eleştirisi: Stern otistik ve simbiyotik evre kavramlarını reddetti; Mahler'in son yıllarında otistik evreden uzaklaştığı bildirilir."],
    [1990, "Bugün: simbiyoz varsayımı terk edildi, ancak yeniden yakınlaşma dönemine ilişkin betimlemeler klinik olarak kullanılmaya devam ediyor (Pine; bebek-ebeveyn psikoterapileri)."]
  ],
  classic: {
    title: "Masters Children's Center gözlemleri",
    text: [
      "Mahler ve ekibi, New York'ta kreşe benzer bir ortamda anneleri ve bebeklerini yaklaşık ilk aylardan üç yaşa kadar haftada birkaç kez gözledi. Gözlemciler odada bulunan katılımcı gözlemcilerdi; ev ziyaretleri, annelerle görüşmeler ve film kayıtları da kullanıldı.",
      "Bu gözlemlerden alt evrelerin davranışsal betimlemeleri çıkarıldı: bebeğin annenin yüzünü incelemesi, 'gümrük muayenesi', keşif sırasında anneye dönüp bakma, ikinci yılda gölge olma ve kaçıp gitme. Betimlemeler, yürümeye başlayan çocuğun anneyle ilişkisini anlatan ve klinisyenlerin bugün de kullandığı bir dil sağladı."
    ],
    critique: [
      "Örneklem küçük, gönüllü ve büyük ölçüde orta sınıftı. Sistematik kodlama, güvenirlik ölçümü ve önceden belirlenmiş hipotez testi yoktu; bulgular başka araştırmacılarca aynı yöntemle tekrarlanmadı.",
      "Konuşma öncesi bebeğin iç deneyimine (simbiyoz, 'ikili birlik') davranıştan çıkarım yapıldı. Sonraki bebek araştırmaları, bebeklerin doğumdan itibaren kendini ve ötekini ayırt ettiğini ve sosyal uyaranlara yöneldiğini göstererek bu çıkarımları sorguladı."
    ],
    exps: ["mahler75", "johnson91", "decasper80"]
  },
  vignette: {
    title: "Kreşe başlarken annesinden ayrılamayan 22 aylık çocuk",
    case: "Yirmi iki aylık bir kız çocuğu, kreşe başladıktan sonra sabahları annesine yapışıyor, evde ise annesi yaklaşınca onu itip kaçıyor. Annesi 'Bir beni istiyor, bir istemiyor' diyor. Akşamları sık öfke nöbetleri var. Dil gelişimi yaşına uygun, uykusu ve yemesi düzenli.",
    classic: "Mahler'in kavramlarıyla: yeniden yakınlaşma krizi. Çocuk ayrı olduğunu fark etmiştir; özerklik isteği ile annenin yakınlığına duyduğu gereksinim arasında gidip geliyor. Annenin görevi, çocuğun bu ikircikliğini kişisel bir reddediş olarak algılamadan sakin ve ulaşılabilir kalmaktır.",
    modern: "Güncel yaklaşım: tablo büyük olasılıkla normatif ayrılık tepkisi ve bu yaşa özgü duygu düzenleme güçlüğüdür. CDC 18 ay ve 2 yaş basamakları, dil ve sosyal iletişim gözden geçirilir. Kreşe kademeli alıştırma, kısa ve öngörülebilir vedalaşma ritüelleri, gizlice ayrılmaktan kaçınma ve geçiş nesnesi önerilir. Ebeveyne bu davranışların gelişimsel anlamı anlatılır. Belirtiler aylarca sürer, işlevselliği belirgin biçimde bozar ya da başka bayraklar eşlik ederse (dil gerilemesi, kendine zarar verme) ayrıntılı değerlendirme yapılır."
  },
  misconceptions: [
    "'Normal otistik evre' otizmle ilgili değildir. Bebek araştırmasıyla reddedilmiştir ve Mahler'in son yıllarında bu evreden uzaklaştığı bildirilir.",
    "Bugünkü kanıtlar bebeğin anneyle 'kaynaşmış' olmadığını, doğumdan itibaren kendini ve ötekini ayırt ettiğini gösterir. Simbiyoz bir yaşantı varsayımıdır, ölçülmüş bir durum değildir.",
    "Yeniden yakınlaşma krizi bir patoloji değildir; ikinci yılın beklenen bir parçasıdır.",
    "Mahler'in 'nesne sürekliliği' kavramı duygusal bir kavramdır ve Piaget'nin bilişsel nesne sürekliliğiyle aynı şey değildir.",
    "Sınır kişilik bozukluğunun yeniden yakınlaşma döneminde 'takılma' sonucu geliştiği görüşü kuramsal bir modeldir; prospektif kanıtla desteklenmemiştir."
  ],
  measures: [
    ["Masters Children's Center gözlem yöntemi", "Doğal ortamda katılımcı gözlem ve film kayıtları; standartlaştırılmış bir ölçüm aracı değildir."],
    ["Ergenlikte Ayrılma-Bireyleşme Testi (SITA)", "Levine ve arkadaşlarının geliştirdiği öz bildirim ölçeği; ergen ve genç yetişkinlerde ayrılma-bireyleşme güçlüklerini değerlendirmeye yöneliktir (araştırma)."],
    ["Psikolojik Ayrılma Envanteri (PSI)", "Hoffman'ın geliştirdiği, ergen ve genç yetişkinlerin ebeveynlerinden işlevsel, tutumsal ve duygusal ayrılmasını ölçen öz bildirim ölçeği (araştırma)."],
    ["Yabancı Durum Prosedürü", "Mahler'in değil Ainsworth'un aracıdır; ama ayrılık ve yeniden birleşme davranışlarını yapılandırılmış biçimde gözlemenin standart yoludur."]
  ],
  exps: ["mahler75", "lewis79"]
};

ATLAS.profiles.klein = {
  life: "Melanie Klein (doğumda Reizes): 30 Mart 1882, Viyana – 22 Eylül 1960, Londra",
  bio: [
    "Klein Viyana'da, hekim bir babanın dört çocuğundan en küçüğü olarak doğdu. Tıp okumak istedi ama 21 yaşında Arthur Klein ile evlendi ve üniversiteye gitmedi. Ağır depresif dönemler geçirdi. 1910'da Budapeşte'ye taşındı; Freud'un rüyalar üzerine yazdığı kısa kitabı (Über den Traum) okuduktan sonra Sándor Ferenczi ile analize başladı. Ferenczi onu çocuklarla analitik çalışmaya yöneltti. 1919'da Macar Psikanaliz Derneği'ne kabul edildi.",
    "1921'de Berlin'e geçti ve Karl Abraham ile analize başladı. 1926'da Ernest Jones'un davetiyle Londra'ya yerleşti. Oyun tekniğini, iki yaş gibi erken dönemde başlayan Ödipal fantezileri ve erken süperegoyu savunması, Viyana'daki Anna Freud çevresiyle derin bir anlaşmazlığa yol açtı. 1934'te oğlu Hans'ı bir dağ kazasında kaybetti; depresif pozisyon üzerine yazıları bu yasın ardından geldi. Kızı Melitta Schmideberg onun en sert eleştirmenlerinden biri oldu. 1941-1945'teki Tartışmalı Görüşmeler İngiliz Psikanaliz Derneği'ni Kleinci, Anna Freudcu ve Bağımsız gruplara ayırdı. Bion, Segal, Rosenfeld ve Joan Riviere onun çizgisini sürdürdü."
  ],
  timeline: [
    [1882, "Viyana'da doğum"], [1910, "Budapeşte'ye taşınma; ardından Ferenczi ile analiz"], [1919, "Macar Psikanaliz Derneği'ne kabul ve ilk makale"],
    [1921, "Berlin; ardından Karl Abraham ile analiz"], [1926, "Londra'ya yerleşme"], [1932, "Çocukların Psikanalizi"],
    [1935, "Depresif pozisyon kavramı"], [1940, "Yas ve manik-depresif durumlarla ilişkisi"], [1941, "Tartışmalı Görüşmeler başlar (1941-1945)"],
    [1946, "Bazı şizoid mekanizmalar üzerine notlar: paranoid-şizoid pozisyon ve yansıtmalı özdeşim"],
    [1957, "Haset ve Şükran"], [1960, "Londra'da ölüm"], [1961, "Bir Çocuk Analizinin Öyküsü (Richard vakası, ölümünden sonra)"]
  ],
  concepts: [
    ["Bilinçdışı fantezi", "Dürtülerin ruhsal karşılığı olan, doğumdan itibaren var sayılan ve deneyimi biçimlendiren iç senaryolar (Susan Isaacs, 1948)."],
    ["İç nesneler", "Bebeğin fantezide içine aldığı ve iç dünyasında yaşayan anne-baba imgeleri; dış ilişkilerle sürekli etkileşim içindedir."],
    ["Kısmi nesne ve bütün nesne", "Önce annenin parçaları (doyuran ya da engelleyen 'meme') ayrı nesneler olarak yaşanır; sonra aynı kişinin hem iyi hem kötü olabildiği fark edilir."],
    ["Bölme", "İyi ve kötü deneyimleri birbirinden ayrı tutarak iyiyi korumaya yönelik erken savunma."],
    ["Yansıtma ve içe alma", "Kötü deneyimin dışarıya atılması ve iyi deneyimin içeri alınması; iç ve dış dünya arasında sürekli bir alışveriş."],
    ["Yansıtmalı özdeşim", "Benliğin dayanılmaz yanlarının fantezide bir başkasına yerleştirilmesi ve onu denetleme çabası. Bion bunu aynı zamanda bir iletişim biçimi olarak tanımladı; terapide karşı aktarımda hissedilir."],
    ["Persekütif ve depresif kaygı", "Paranoid-şizoid pozisyonda baskın kaygı kendine zarar gelmesidir; depresif pozisyonda ise sevilen nesneye zarar vermiş olma ve onu kaybetme kaygısı."],
    ["Onarım", "Sevilen nesneye fantezide verilen zararı gidermeye yönelik istek; yaratıcılık ve sevginin kaynağı olarak görülür."],
    ["Manik savunmalar", "Depresif kaygıya karşı küçümseme, denetleme ve zafer duygusu."],
    ["Haset ve şükran", "İyi nesnenin kendisine yönelen yıkıcı haset ile iyi deneyimi kabul edip içselleştirmeyi sağlayan şükran."],
    ["Oyun tekniği", "Çocuğun oyununun yetişkinin serbest çağrışımına denk tutulması ve kaygının doğrudan yorumlanması."]
  ],
  stageFields: {
    labels: ["Baskın kaygı", "Savunmalar", "Nesne ilişkisi ve iç dünya", "Klinikte görünümü"],
    rows: [
      ["Persekütif kaygı: saldırıya uğrama, yok edilme, parçalanma", "Bölme, yansıtma, içe alma, yansıtmalı özdeşim, idealleştirme, inkâr", "Kısmi nesneler: idealleştirilmiş 'iyi' ve takipçi 'kötü' nesne; iç dünyada iyi nesnenin korunması", "Yetişkinde 'ya hep ya hiç' algısı, paranoid düşünce, ani idealleştirme ve değersizleştirme; terapistte yoğun karşı aktarım"],
      ["Depresif kaygı: sevilen nesneye zarar vermiş olma ve onu kaybetme; suçluluk", "Onarım, olgun yas; buna karşı manik savunmalar (küçümseme, denetleme, zafer)", "Bütün nesne: aynı kişiye hem sevgi hem öfke duyulabilir; ikircikliğe katlanma ve sembol oluşumu", "Yas tutabilme, suçluluğa dayanabilme ve sorumluluk alma; depresif pozisyon klinik depresyon değildir, ruhsal olgunluğun göstergesidir"]
    ]
  },
  evolution: [
    [1919, "Çocuk analizi ve oyun tekniği: erken Ödipal fanteziler ve erken süperego (Çocukların Psikanalizi, 1932)."],
    [1935, "Depresif pozisyon: bütün nesne, suçluluk, onarım ve yasın kuramı."],
    [1941, "Tartışmalı Görüşmeler: bilinçdışı fantezi kavramı (Isaacs) ve Anna Freud ile çocuk analizinin teknik ilkeleri üzerine ayrılık."],
    [1946, "Paranoid-şizoid pozisyon ve yansıtmalı özdeşim; Haset ve Şükran (1957)."],
    [1962, "Sonrası: Bion'un kapsama kavramı, Segal'in sembolik eşitlik kavramı, Rosenfeld'in psikoz çalışmaları; Kernberg'in nesne ilişkileri kuramı ve aktarım odaklı psikoterapi (TFP)."]
  ],
  classic: {
    title: "Richard vakası: Bir Çocuk Analizinin Öyküsü",
    text: [
      "Klein 1941'de, savaş yıllarında İskoçya'nın Pitlochry kasabasında, okula gidemeyen ve yoğun kaygıları olan on yaşında bir çocuğu ('Richard') dört ay boyunca 93 seans gördü. Her seansın ayrıntılı notlarını tuttu; vaka ölümünden sonra 1961'de yayımlandı.",
      "Richard seanslarda haritalar ve donanmalar çizdi, oyuncak gemilerle savaş oyunları oynadı. Klein bu malzemeyi çocuğun anne ve babaya yönelik bilinçdışı fantezileri, kötü nesnelere karşı kaygısı ve onarma isteği olarak yorumladı. Vaka, Kleinci tekniğin seans seans izlenebildiği tek kapsamlı kaynaktır."
    ],
    critique: [
      "Yorumlar erken, derin ve doğrudan simgeseldir; çocuğun kendi anlamlarıyla karşılaştırılarak sınanmaları mümkün değildir. Savaş ortamının gerçek tehditleri malzemenin önemli bir bölümünü açıklayabilir.",
      "Anna Freud küçük çocuklarda aktarım nevrozunun gelişmediğini, ebeveynlerin ve eğitsel desteğin rolünün göz ardı edildiğini savundu. Bebeğin karmaşık fanteziler kurduğu varsayımı gelişim araştırmasıyla doğrudan sınanamaz. Klein'ın kendi oğlunu (ilk yazılarındaki 'Fritz') analiz etmesi de bugün etik açıdan kabul edilemez."
    ],
    exps: ["clarkin07"]
  },
  vignette: {
    title: "Kardeşi doğduktan sonra oyuncak bebeğe saldıran 5 yaşında çocuk",
    case: "Beş yaşında bir erkek çocuk, kız kardeşi doğduktan iki ay sonra oyunlarında oyuncak bebekleri yere çarpıyor, sonra 'hastaneye' götürüp sarıp sarmalıyor. Geceleri kâbus görüyor, annesi bebeği emzirirken huysuzlaşıyor. Okulda uyumu iyi; kardeşe gerçek bir saldırısı olmamış.",
    classic: "Kleinci formülasyon: annenin bedenine ve onun 'yeni bebeğine' yönelik bilinçdışı saldırgan fanteziler ve bunlara bağlı persekütif kaygı (kâbuslar). Bebekleri 'iyileştirme' oyunu onarım isteğinin, yani depresif pozisyona doğru bir hareketin işaretidir. Oyun tekniğinde kaygı doğrudan yorumlanır.",
    modern: "Güncel yaklaşım: kardeş doğumundan sonra oyunda saldırganlık ve onarım temaları sık ve çoğunlukla normatif bir işleme biçimidir. Bebeğin güvenliği, uyku, ebeveynin stresi ve çocuğa ayrılan birebir zaman gözden geçirilir. Belirtiler sürer ya da işlevselliği bozarsa ebeveyn-çocuk temelli yaklaşımlar (ör. PCIT'in çocuğun yönettiği oyun bölümü) ve gerekirse çocuk psikoterapisi önerilir. Psikodinamik çocuk ve ergen terapilerinin kanıtı sınırlı ama artmaktadır; ergen depresyonunda kısa süreli psikanalitik psikoterapi BDT ile benzer sonuçlar vermiştir (IMPACT, Goodyer ve ark., 2017). Tek başına derin yorum kanıta dayalı bir tedavi değildir."
  },
  misconceptions: [
    "'İyi meme' ve 'kötü meme' gerçek anneyi değil, bebeğin fantezisindeki nesneleri anlatır.",
    "Pozisyonlar aşılıp geride bırakılan evreler değildir; yaşam boyu, stres altında gidip gelinen ruh hâlleridir.",
    "Depresif pozisyon klinik depresyon anlamına gelmez; aksine suçluluğa ve yasa katlanabilmenin, yani ruhsal olgunluğun işaretidir.",
    "Klein çevrenin önemini yok saymadı, ama iç dünyaya ve fanteziye öncelik verdi. Bowlby ve Winnicott ile ayrılığının temel noktası buydu.",
    "Yansıtmalı özdeşim yalnızca bir savunma değildir; Bion'dan sonra terapistin hissettikleri yoluyla hastanın deneyimini anlamanın bir aracı olarak da kullanılır."
  ],
  measures: [
    ["Kişilik Örgütlenmesi Yapılandırılmış Görüşmesi (STIPO)", "Kernberg ve arkadaşlarının kimlik, nesne ilişkileri, ilkel savunmalar ve gerçeklik sınamasını değerlendiren görüşmesi."],
    ["Savunma Mekanizmaları Derecelendirme Ölçeği (DMRS)", "Perry'nin görüşme kayıtları üzerinden bölme ve yansıtmalı özdeşim dahil savunmaları derecelendiren yöntemi."],
    ["Sosyal Bilişler ve Nesne İlişkileri Ölçeği (SCORS)", "Westen'in anlatılar ya da görüşmeler üzerinden nesne ilişkilerinin karmaşıklığını ve duygusal niteliğini puanlayan sistemi."],
    ["Oyun gözlemi", "Kleinci çocuk analizinde tanı ve tedavinin temel malzemesi; standartlaştırılmış bir ölçüm aracı değildir."]
  ],
  exps: ["clarkin07"]
};

ATLAS.profiles.winnicott = {
  life: "Donald Woods Winnicott: 7 Nisan 1896, Plymouth – 25 Ocak 1971, Londra",
  bio: [
    "Winnicott, Plymouth'ta tüccar ve belediye başkanı olan bir babanın oğlu olarak doğdu. Cambridge'de biyoloji okudu, Birinci Dünya Savaşı'nda donanmada stajyer cerrah olarak görev yaptı ve tıp eğitimini Londra'da St Bartholomew's Hastanesi'nde tamamladı. Yaklaşık kırk yıl Paddington Green Çocuk Hastanesi'nde pediatrist olarak çalıştı ve on binlerce anne-bebek çiftini gördüğünü söyledi.",
    "On yıl James Strachey ile, ardından Joan Riviere ile analiz oldu; Melanie Klein'ın süpervizyonunu aldı, ama sonradan İngiliz Psikanaliz Derneği'nde Bağımsız grubun önde gelen ismi oldu. İkinci Dünya Savaşı'nda Oxfordshire'daki tahliye edilmiş çocuk yurtlarına danışmanlık yaptı; burada sosyal hizmet uzmanı Clare Britton ile tanıştı ve 1951'de evlendi. BBC'deki radyo konuşmalarıyla annelere doğrudan seslendi. İngiliz Psikanaliz Derneği'nin başkanlığını iki kez yaptı (1956-1959, 1965-1968)."
  ],
  timeline: [
    [1896, "Plymouth'ta doğum"], [1923, "Paddington Green Çocuk Hastanesi'nde çalışmaya başlama"], [1931, "Çocukluk Bozuklukları Üzerine Klinik Notlar"],
    [1945, "İlkel duygusal gelişim"], [1949, "Karşı aktarımda nefret"], [1953, "Geçiş nesneleri ve geçiş fenomenleri"],
    [1956, "Birincil annelik meşguliyeti; antisosyal eğilim"], [1958, "Yalnız kalabilme kapasitesi"], [1960, "Gerçek ve sahte kendilik; ebeveyn-bebek ilişkisinin kuramı"],
    [1964, "Çocuk, Aile ve Dış Dünya (radyo konuşmaları)"], [1965, "Olgunlaşma Süreçleri ve Kolaylaştırıcı Çevre"],
    [1967, "Çocuk gelişiminde annenin ve ailenin ayna rolü"], [1971, "Oyun ve Gerçeklik; Çocuk Psikiyatrisinde Terapötik Danışmalar"]
  ],
  concepts: [
    ["Yeterince iyi anne", "Başlangıçta bebeğe neredeyse tam uyum sağlayan, sonra bebeğin artan kapasitesine göre bu uyumu yavaş yavaş azaltan bakımveren. Kusursuzluk değil, zamanla ayarlanmış başarısızlık."],
    ["Birincil annelik meşguliyeti", "Doğum çevresinde annenin dikkatinin neredeyse tamamen bebeğe yönelmesi; Winnicott bunu 'normal bir hastalık' olarak tanımladı."],
    ["Tutma, elleme, nesne sunma", "Kolaylaştırıcı çevrenin üç işlevi: deneyimi güvenilir biçimde taşımak, bedensel bakım ve dünyayı bebeğin kaldırabileceği dozlarda sunmak."],
    ["Yanılsama ve yanılsamadan çıkış", "Bebeğin ihtiyaç duyduğu anda gelen meme ile dünyayı kendisinin yarattığını yaşaması ve sonra bu yanılsamanın yavaş yavaş sönmesi."],
    ["Geçiş nesnesi ve potansiyel alan", "Bebeğin ilk 'ben-olmayan' sahipliği (battaniye, oyuncak); ne tamamen iç ne tamamen dış olan ara alanın ilk temsilcisi. Bu alan oyunu, kültürü ve yaratıcılığı barındırır."],
    ["Gerçek kendilik ve sahte kendilik", "Kendiliğinden ve canlı deneyimin kaynağı olan gerçek kendilik; çevreye uyum için gelişen ve aşırıysa içi boş bir uyumluluğa dönüşen sahte kendilik. Sağlıklı bir sahte kendilik sosyal nezakettir."],
    ["Birinin yanında yalnız kalabilme", "Çocuğun güvenilir bir yetişkinin varlığında kendi işine dalabilmesi; içselleştirilmiş güvenilir çevrenin göstergesi."],
    ["Annenin yüzü ayna", "Bebek annesinin yüzünde kendini görür; anne kendi ruh hâlini değil bebeğin durumunu yansıttığında bebek kendini tanır."],
    ["Nesne kullanımı ve nesnenin hayatta kalması", "Çocuğun saldırganlığına misilleme yapmadan ve çökmeden dayanan nesne gerçek ve dışsal olarak algılanır."],
    ["Antisosyal eğilim", "Yeterince iyi bir deneyimin kaybından sonra ortaya çıkan çalma ve yıkıcılık; Winnicott bunu çevreden onarım isteyen bir 'umut belirtisi' olarak gördü."],
    ["Squiggle oyunu", "Çocukla sırayla birbirinin karalamasını tamamlayarak yapılan ve görüşmenin kendisini terapötik bir deneyime dönüştüren teknik."]
  ],
  stageFields: {
    labels: ["Çevrenin görevi", "Bebeğin ya da çocuğun deneyimi", "Çevre aksarsa", "Klinik ipucu"],
    rows: [
      ["Tutma, elleme ve nesne sunma; birincil annelik meşguliyeti", "Her şeye gücü yettiği yanılsaması; bütünleşme, bedende yerleşme ve gerçeklikle ilk karşılaşma", "'Düşünülemez kaygılar' (parçalanma, sonsuza dek düşme); sahte kendiliğin erken temelleri", "Doğum sonrası dönemde ebeveyni 'tutan' bir çevre gerekir: eş, aile, ev ziyaretleri, ebeveyn depresyonunun tedavisi"],
      ["Kademeli ve dozunda başarısızlık; yanılsamadan çıkışa eşlik", "İhtiyacının farkına varma, geçiş nesnesi, anneyi ayrı bir kişi olarak tanıma", "Ani ve uzun ayrılıklar geçiş nesnesinin anlamını yitirmesine, çocuğun deneyiminin kopmasına yol açabilir", "Geçiş nesnesi uyku ve ayrılıklarda desteklenir; görülme sıklığı kültüre göre değişir ve yokluğu sorun belirtisi değildir"],
      ["Güvenilir aile ve okul; çocuğun saldırganlığına dayanan ve 'hayatta kalan' bir çevre", "Birinin yanında yalnız kalabilme, yaratıcı oyun, ilgi ve sorumluluk kapasitesi", "Yoksunluk sonrasında antisosyal eğilim; aşırı uyumlu sahte kendilik", "Terapötik danışmalar ve squiggle; kreş ve okul geçişlerinin planlanması; ebeveyn danışmanlığında kusursuzluk beklentisinin azaltılması"]
    ]
  },
  evolution: [
    [1931, "Pediatri dönemi: çocukluk bozukluklarının bedensel ve ruhsal yanlarını birlikte ele alan klinik notlar."],
    [1945, "Kleinci çerçeveden ayrılma: ilkel duygusal gelişim, bütünleşme ve çevrenin rolü."],
    [1953, "Geçiş nesneleri ve potansiyel alan: iç ve dış gerçeklik arasındaki ara alan."],
    [1960, "Kolaylaştırıcı çevre kuramı: yeterince iyi anne, tutma, gerçek ve sahte kendilik, yalnız kalabilme kapasitesi."],
    [1971, "Oyun ve Gerçeklik ile nesne kullanımı; sonrasında bebek-ebeveyn psikoterapileri, zihinselleştirme kuramı (aynalama) ve bebek araştırmasındaki uyumsuzluk ve onarım bulguları bu düşünceyle buluştu."]
  ],
  classic: {
    title: "Geçiş nesneleri ve kültürler arası sınamalar",
    text: [
      "Winnicott (1953), bebeklerin 4-12. aylar arasında bir battaniye köşesi, bir bez ya da yumuşak bir oyuncakla özel bir ilişki kurduğunu betimledi. Bu 'ilk ben-olmayan sahiplik' sevgiye de saldırganlığa da dayanmalı, kokusu ve dokusu korunmalı ve ebeveyn tarafından 'Bunu sen mi yarattın, yoksa buldun mu?' diye sorgulanmamalıdır.",
      "Geçiş nesnesi zamanla anlamını yitirir; ama yas tutulmaz, çünkü anlamı oyunun, sanatın ve kültürün ara alanına yayılır. Winnicott bu gözlemi klinik deneyimine dayandırdı ve normal gelişimin bir parçası olarak tanımladı."
    ],
    critique: [
      "Gözlemler klinik ve sistematik olmayan gözlemlerdir. Geçiş nesnelerinin sıklığı kültüre göre değişir: bebekleriyle birlikte uyuyan ve onları sık taşıyan ailelerde geçiş nesnesi daha seyrektir (Hong ve Townes, 1976). Bu, nesnenin evrensel bir gelişim basamağı değil, bakım düzenine bağlı bir uyum olduğunu düşündürür.",
      "Geçiş nesnesinin olup olmaması ruhsal sorunlarla ilişkili bulunmamıştır. Öte yandan küçük çocukların bağlandıkları nesnenin özdeş bir kopyasını reddetmeleri (Hood ve Bloom, 2008), bu nesnelerin yerine konamaz bir anlam taşıdığı düşüncesini destekler."
    ],
    exps: ["hongtownes76", "hood08"]
  },
  vignette: {
    title: "Babası cezaevine girdikten sonra çalmaya başlayan 10 yaşında çocuk",
    case: "On yaşında bir erkek çocuk, babası cezaevine girdikten altı ay sonra evde annesinin çantasından, okulda arkadaşlarından para ve eşya almaya başlıyor. Daha önce uyumlu bir öğrenciymiş. Annesi iki işte çalışıyor; çocuk akşamları çoğunlukla yalnız.",
    classic: "Winnicott'un formülasyonu: antisosyal eğilim. Çocuk yeterince iyi bir deneyimi (babası, düzenli aile yaşamı) kaybetmiştir; çalma, kaybettiğini geri almaya ve çevreyi kendisini tutmaya çağırmaya yönelik bilinçdışı bir umut belirtisidir. Yalnızca cezalandırmak bu umudu söndürebilir; çevrenin güvenilirliğini yeniden kurmak gerekir.",
    modern: "Güncel yaklaşım: ebeveynin cezaevine girmesi olumsuz çocukluk yaşantılarından biridir. Davranım sorunları, DEHB, depresyon, kaygı, travma ve öğrenme güçlükleri değerlendirilir; Turgay DSM-IV ölçeği ve CBCL kullanılabilir. Kanıta dayalı yaklaşımlar davranışçı ebeveyn eğitimi, okulla iş birliği, gözetimin artırılması ve çocuğun babasıyla güvenli ve öngörülebilir teması sürdürmesidir. Daha ağır ve yaygın davranım sorunlarında çok sistemli terapi gibi aile ve çevre temelli programlar düşünülür."
  },
  misconceptions: [
    "'Yeterince iyi anne' vasat anne demek değildir; bebeğin gelişimine göre giderek azalan, zamanla ayarlanmış bir uyumu anlatır.",
    "Geçiş nesnesi olmayan çocukta bir sorun yoktur; sıklığı bakım düzenine ve kültüre göre değişir.",
    "Sahte kendilik her zaman patolojik değildir. Winnicott'a göre sağlıklı bir sahte kendilik, sosyal nezaket ve uyum gibi gerçek kendiliği koruyan bir işleve sahiptir.",
    "'Bebek diye bir şey yoktur' sözü bebeğin bireyselliğini inkâr etmez; bebeğin onu taşıyan bakım ilişkisinden ayrı düşünülemeyeceğini anlatır.",
    "Tutma yalnızca kucakta tutmak değildir; bebeğin deneyiminin bütünüyle güvenilir ve öngörülebilir biçimde taşınmasıdır."
  ],
  measures: [
    ["Ebeveyn Gelişim Görüşmesi (PDI)", "Slade ve arkadaşlarının ebeveynin çocuğunu ve ilişkiyi zihinselleştirme kapasitesini değerlendiren görüşmesi; annenin 'ayna' işlevinin bugünkü ölçümlerinden biri."],
    ["Ebeveyn Yansıtıcı İşlev Ölçeği (PRFQ)", "Luyten ve arkadaşlarının kısa öz bildirim ölçeği."],
    ["CARE-Index", "Crittenden'in bakımveren-bebek etkileşiminde duyarlılık, kontrol ve yanıtsızlığı kısa video kayıtları üzerinden değerlendiren yöntemi."],
    ["Squiggle oyunu", "Klinik bir görüşme tekniğidir; ölçüm aracı değildir."]
  ],
  exps: ["tronick78", "hongtownes76", "hood08"]
};

ATLAS.profiles.stern = {
  life: "Daniel N. Stern: 16 Ağustos 1934, New York – 12 Kasım 2012, Cenevre",
  bio: [
    "Stern New York'ta tıp ve psikiyatri eğitimi aldı ve Columbia Üniversitesi'nde psikanalist olarak yetişti. 1960'ların sonundan itibaren anne-bebek etkileşimlerini film ve video kayıtları üzerinden kare kare inceleyen mikroanaliz yöntemini geliştirdi. Uzun yıllar Cornell Üniversitesi Tıp Fakültesi'nde ve Cenevre Üniversitesi'nde çalıştı.",
    "Bebeğin Kişilerarası Dünyası (1985), psikanalizin geriye dönük olarak kurduğu 'klinik bebek' ile deneysel araştırmanın 'gözlenen bebeği'ni karşılaştırdı ve Mahler'in otistik ve simbiyotik evrelerini reddetti. Daha sonra annelik takımyıldızı kavramıyla bebek-ebeveyn psikoterapisine, Boston Değişim Süreci Çalışma Grubu'nda geliştirdiği 'şimdiki an' ve örtük ilişkisel bilgi kavramlarıyla da psikoterapide değişim kuramına katkı yaptı."
  ],
  timeline: [
    [1934, "New York'ta doğum"], [1971, "Anne ve 3½ aylık ikizleri üzerine mikroanaliz"], [1977, "İlk İlişki: Bebek ve Anne"],
    [1985, "Bebeğin Kişilerarası Dünyası"], [1990, "Bir Bebeğin Günlüğü"], [1995, "Annelik Takımyıldızı"],
    [1998, "Boston Değişim Süreci Çalışma Grubu: yorumdan 'daha fazlası'; Bir Annenin Doğuşu"],
    [2000, "Bebeğin Kişilerarası Dünyası'nın yeni basımında kuramın gözden geçirilmesi"],
    [2004, "Psikoterapide ve Gündelik Yaşamda Şimdiki An"], [2010, "Canlılık Biçimleri"], [2012, "Cenevre'de ölüm"]
  ],
  concepts: [
    ["Benlik duyguları", "Beliren, çekirdek, öznel, sözel ve anlatısal benlik: birbirinin yerini almayan, üst üste eklenen ve yaşam boyu etkin kalan deneyim katmanları."],
    ["Amodal algı", "Bir duyudan alınan bilginin başka bir duyuya aktarılması; ağızla tanınan emziğin gözle de tanınması gibi."],
    ["Canlılık duygulanımları", "Deneyimin yükselen, sönen, patlayan, uzayan gibi zamansal biçimleri; Stern sonradan bunları 'canlılık biçimleri' olarak geliştirdi."],
    ["Genelleştirilmiş etkileşim temsilleri (RIG)", "Tekrarlanan etkileşimlerin ortalaması olarak belleğe yerleşen beklentiler; içsel çalışma modellerinin yapı taşları."],
    ["Çağrılan yoldaş", "Bebeğin yalnızken bile etkinleştirdiği, bir başkasıyla birlikte olma deneyiminin temsili."],
    ["Kendini düzenleyen öteki", "Bebeğin uyarılma, duygu ve güvenlik deneyimini düzenleyen bakımveren; bu düzenleme bebeğin benlik deneyiminin bir parçasıdır."],
    ["Duygulanım uyumlanması", "Bakımverenin bebeğin duygusunu birebir taklit etmeden, başka bir kipte ama aynı ritim, yoğunluk ve biçimle yansıtması; örneğin bebeğin sevinç çığlığına omuz dansıyla karşılık vermek."],
    ["Klinik bebek ve gözlenen bebek", "Yetişkin terapilerinden geriye doğru kurulan bebek ile doğrudan gözlem ve deneyle incelenen bebek arasındaki ayrım."],
    ["Annelik takımyıldızı", "Doğum sonrası annenin zihinsel örgütlenmesi: bebeğin yaşamı ve büyümesi, birincil ilişkiye girme, destek ağı ve kimliğin yeniden düzenlenmesi temaları."],
    ["Şimdiki an ve örtük ilişkisel bilgi", "Terapide yorumdan bağımsız olarak değişim yaratan karşılaşma anları ve 'başkasıyla nasıl birlikte olunacağına' ilişkin sözel olmayan bilgi."]
  ],
  stageFields: {
    labels: ["Benlik deneyimi", "İlişki deneyimi", "Araştırma kanıtı", "Klinik ipucu"],
    rows: [
      ["Düzenliliğin ve örgütlenmenin ortaya çıkışı; amodal algı; canlılık duygulanımları", "Beslenme, uyku ve uyarılmayı düzenleyen etkileşimler", "Duyular arası eşleştirme (Meltzoff ve Borton, 1979), yüz ve ses tercihi (Johnson; DeCasper ve Fifer)", "Beslenme ve uyku güçlüklerinde bebek-bakımveren uyumu değerlendirilir"],
      ["Faillik, bedensel bütünlük, duygulanımsallık ve süreklilik", "Kendini düzenleyen öteki; tekrarlanan etkileşimlerden genelleştirilmiş temsiller (RIG); çağrılan yoldaş", "Olumsallık algısı, durgun yüz deneyi (Tronick), çift video deneyi (Murray ve Trevarthen)", "Depresif ya da yanıtsız ebeveynle etkileşimde bebeğin geri çekilmesi; video geribildirimli müdahaleler"],
      ["Zihinlerin olduğunu ve iç durumların paylaşılabildiğini keşfetme", "Duygulanım uyumlanması, ortak dikkat, niyetlerin paylaşılması, sosyal referans", "Ortak dikkatin 9-15. aylarda gelişimi (Carpenter ve ark.), sosyal referans (Sorce ve ark.)", "Uyumlanmanın seçici yokluğu ya da aşırı uyumlanma çocuğun hangi deneyimlerinin paylaşılabilir olduğunu biçimlendirir; otizmde öznelerarasılık güçlüğü"],
      ["Kendini nesne olarak görebilme, sembolik oyun ve dil", "Anlamın birlikte kurulması; dil paylaşmayı kolaylaştırır ama yaşanan ile söze dökülen deneyim arasında bir boşluk açar", "Aynada kendini tanıma (Lewis ve Brooks-Gunn), sözcük patlaması", "Erken ve sözel olmayan deneyimlerin izleri söze tam dökülemeyebilir; oyun ve bedensel ifade önemlidir"],
      ["Otobiyografik anlatı; benliğin bir öykü olarak örgütlenmesi", "Ebeveynle geçmişin birlikte anlatılması", "Ebeveynin ayrıntılandırıcı anlatım tarzının çocuğun otobiyografik belleğini zenginleştirdiği gösterilmiştir (Fivush ve arkadaşları)", "Anlatıya dayalı terapiler; evlat edinilen ve koruyucu ailedeki çocuklarla yaşam öyküsü çalışması"]
    ]
  },
  evolution: [
    [1971, "Mikroanaliz: anne-bebek etkileşiminin saniyelik örüntülerle düzenlendiğinin gösterilmesi."],
    [1985, "Benlik duyguları kuramı: evreler yerine katmanlar; otistik ve simbiyotik evrelerin reddi."],
    [1995, "Klinik uygulama: annelik takımyıldızı ve bebek-ebeveyn psikoterapisinde farklı 'giriş kapıları'."],
    [1998, "Psikoterapide değişim: Boston Değişim Süreci Çalışma Grubu, şimdiki an ve örtük ilişkisel bilgi."],
    [2010, "Canlılık biçimleri: hareket, zaman, kuvvet, uzam ve yönelim üzerinden deneyimin dinamik biçimleri; sanat, gelişim ve klinik arasında köprü."]
  ],
  classic: {
    title: "Mikroanaliz: bir anne ve 3½ aylık ikizleri",
    text: [
      "Stern (1971), bir annenin 3½ aylık ikizleriyle oyununu film kayıtları üzerinden kare kare inceledi. İkizlerden biriyle karşılıklı bakışma, yaklaşma ve uzaklaşma uyumlu bir dans gibi akıyordu. Diğeriyle ise 'kovala ve kaç' adını verdiği bir örüntü vardı: anne yaklaştıkça bebek bakışını çeviriyor, bebek kaçtıkça anne daha da yaklaşıyordu.",
      "Bu çalışma, anne-bebek etkileşiminin saniyelik zaman ölçeğinde karşılıklı olarak düzenlendiğini ve aynı annenin farklı bebeklerle farklı örüntüler kurabildiğini gösterdi. Yöntem, sonraki durgun yüz ve çift video çalışmalarının da öncülü oldu."
    ],
    critique: [
      "Tek bir aile üzerinde yapılmış betimleyici bir çalışmadır. Benlik duyguları kuramı da büyük ölçüde davranıştan öznel deneyime yapılan çıkarımlara dayanır ve bir evre modeli olarak doğrudan sınanmamıştır.",
      "Kuramın dayandığı bazı bulgular sonradan tartışmalı hâle geldi: yenidoğan taklidi büyük bir boylamsal çalışmada tekrarlanamadı (Oostenbroek ve ark., 2016). Duygulanım uyumlanması kavramının da standart bir ölçümü yoktur."
    ],
    exps: ["stern71", "murray85", "tronick78", "meltzoff77"]
  },
  vignette: {
    title: "Bebeğinin her sesine 'fazlasıyla' coşkuyla karşılık veren anne",
    case: "Yedi aylık bir bebeğin annesi, bebeğin her sesine ve hareketine yüksek sesle, büyük jestlerle karşılık veriyor; bebek sık sık başını çeviriyor ve oyuncağına dönüyor. Anne 'Benimle oynamak istemiyor' diyor ve kendi annesinin 'soğuk ve mesafeli' olduğunu anlatıyor.",
    classic: "Stern'in kavramlarıyla: aşırı uyumlanma ve müdahaleci uyarım. Bebek uyarılmasını düzenlemek için bakışını çeviriyor. Annelik takımyıldızı açısından annenin kendi annesine ilişkin temsilleri (soğukluğu telafi etme isteği) etkileşime taşınıyor. Terapide giriş kapısı bebek, anne ya da etkileşimin kendisi olabilir.",
    modern: "Güncel yaklaşım: annede kaygı ve depresyon taranır. Video geribildirimli duyarlılık müdahaleleri (VIPP) bebeğin sinyallerini fark etmeyi ve 'bekleme payı' bırakmayı hedefler; bu tür kısa ve davranış odaklı müdahalelerin duyarlılığı artırdığı meta-analizlerle gösterilmiştir. Kendi çocukluk ilişkileri ön plandaysa Çocuk-Ebeveyn Psikoterapisi düşünülür. Bebeğin gelişim basamakları ve sosyal iletişimi izlenir."
  },
  misconceptions: [
    "Benlik duyguları birbirini izleyen ve geride kalan evreler değildir; üst üste eklenen ve yaşam boyu etkin kalan katmanlardır.",
    "Duygulanım uyumlanması taklit değildir; duygunun başka bir kipte, ritmi ve yoğunluğu korunarak yansıtılmasıdır.",
    "Stern bebeğin baştan 'ayrı' olduğunu söylerken yalnızlığı değil, ilişki içinde ayrı bir benlik deneyimini anlatır.",
    "Yaş sınırları yaklaşıktır; kuram doğrudan sınanabilir bir evre modeli olarak değil, araştırma bulgularını örgütleyen bir çerçeve olarak okunmalıdır.",
    "'Şimdiki an' kavramı yorumun önemsiz olduğu anlamına gelmez; yorumun yanında örtük ilişkisel değişimin de terapötik olduğunu vurgular."
  ],
  measures: [
    ["Mikroanalitik video kodlama", "Bakış, yüz ifadesi, ses ve dokunmanın saniye ya da kare düzeyinde kodlanması (araştırma)."],
    ["Yüz Yüze Durgun Yüz Prosedürü (FFSF)", "Etkileşim, durgun yüz ve onarım aşamalarıyla bebeğin düzenleme kapasitesini ve ilişkiyi değerlendiren yapılandırılmış gözlem."],
    ["Çalışma Modeli Çocuk Görüşmesi (WMCI)", "Zeanah ve arkadaşlarının ebeveynin çocuğuna ilişkin temsillerini değerlendiren görüşmesi; annelik takımyıldızı düşüncesine yakındır."],
    ["Duygulanım uyumlanması kodlaması", "Araştırma amaçlı kodlama sistemleri vardır; standart bir klinik ölçüm aracı yoktur."]
  ],
  exps: ["stern71", "johnson91", "carpenter98"]
};

/* Profillerle eklenen çalışma ve temel eserler */
ATLAS.experiments.push(
{ id: "stern71", year: 1971, title: "Anne-bebek etkileşiminin mikroanalizi", who: "Daniel N. Stern", age: "3½ ay (ikizler)",
  method: "Bir annenin 3½ aylık ikizleriyle oyunu film kayıtları üzerinden kare kare çözümlendi; bakış, yaklaşma ve uzaklaşma davranışlarının zamanlaması incelendi.",
  find: "Etkileşim saniyelik zaman ölçeğinde karşılıklı olarak düzenleniyordu. İkizlerden biriyle uyumlu bir örüntü, diğeriyle 'kovala ve kaç' örüntüsü görüldü: anne yaklaştıkça bebek bakışını çeviriyor, bebek kaçtıkça anne daha çok yaklaşıyordu.",
  sup: ["stern"], ch: [], st: 2,
  note: "Tek aileyle yapılmış betimleyici bir çalışmadır; ama mikroanaliz yöntemi durgun yüz ve çift video çalışmalarının öncülü oldu." }
);
ATLAS.refs = ATLAS.refs || {};
ATLAS.refs.stern71 = { apa: "Stern, D. N. (1971). A micro-analysis of mother-infant interaction: Behavior regulating social contact between a mother and her 3½-month-old twins. Journal of the American Academy of Child Psychiatry, 10(3), 501-517.", doi: "10.1016/s0002-7138(09)61752-0", pmid: "5168603" };
if (ATLAS.expRefs) ATLAS.expRefs.stern71 = ["stern71"];
(function (X) {
  function add(id, items) { X[id] = X[id] || {}; X[id].primary = (X[id].primary || []).concat(items.filter(function (p) { return (X[id].primary || []).indexOf(p) < 0; })); }
  add("mahler", [
    "Mahler, M. S. (1952). On child psychosis and schizophrenia: Autistic and symbiotic infantile psychoses. The Psychoanalytic Study of the Child, 7, 286-305.",
    "Mahler, M. S., & Furer, M. (1968). On human symbiosis and the vicissitudes of individuation: Vol. 1. Infantile psychosis. International Universities Press."
  ]);
  add("klein", [
    "Klein, M. (1932). The psycho-analysis of children. Hogarth Press.",
    "Klein, M. (1940). Mourning and its relation to manic-depressive states. International Journal of Psycho-Analysis, 21, 125-153.",
    "Klein, M. (1957). Envy and gratitude: A study of unconscious sources. Tavistock.",
    "Klein, M. (1961). Narrative of a child analysis. Hogarth Press."
  ]);
  add("winnicott", [
    "Winnicott, D. W. (1949). Hate in the counter-transference. International Journal of Psycho-Analysis, 30, 69-74.",
    "Winnicott, D. W. (1958). The capacity to be alone. International Journal of Psycho-Analysis, 39(5), 416-420.",
    "Winnicott, D. W. (1958). Through paediatrics to psycho-analysis: Collected papers. Tavistock.",
    "Winnicott, D. W. (1971). Playing and reality. Tavistock.",
    "Winnicott, D. W. (1971). Therapeutic consultations in child psychiatry. Hogarth Press."
  ]);
  add("stern", [
    "Stern, D. N. (1977). The first relationship: Infant and mother. Harvard University Press.",
    "Stern, D. N., Sander, L. W., Nahum, J. P., Harrison, A. M., Lyons-Ruth, K., Morgan, A. C., Bruschweiler-Stern, N., & Tronick, E. Z. (1998). Non-interpretive mechanisms in psychoanalytic therapy: The 'something more' than interpretation. International Journal of Psycho-Analysis, 79(5), 903-921.",
    "Stern, D. N. (2004). The present moment in psychotherapy and everyday life. W. W. Norton.",
    "Stern, D. N. (2010). Forms of vitality: Exploring dynamic experience in psychology, the arts, psychotherapy, and development. Oxford University Press."
  ]);
})(ATLAS.theoryExtras = ATLAS.theoryExtras || {});
