/* Ayrıntılı kuram profilleri (2/3): Piaget, Kohlberg. */
ATLAS.profiles = ATLAS.profiles || {};

ATLAS.profiles.piaget = {
  life: "9 Ağustos 1896, Neuchâtel – 16 Eylül 1980, Cenevre",
  bio: [
    "Erken yaşta doğa bilimlerine yöneldi; 11 yaşında albino bir serçe üzerine kısa bir not yayımladı, gençliğinde yumuşakçalar üzerine makaleler yazdı ve 1918'de Neuchâtel'de zooloji doktorasını tamamladı. Zürih'te Bleuler ve Jung'un çevresinde psikanalizle tanıştı.",
    "1919-21'de Paris'te Binet ve Simon'un laboratuvarında akıl yürütme testlerini standartlaştırırken çocukların doğru yanıtlarından çok, yanlış yanıtlarının sistemli olduğunu fark etti. 1921'de Cenevre'deki Rousseau Enstitüsü'ne geçti. Eşi Valentine Châtenay ile üç çocukları Jacqueline, Lucienne ve Laurent'in ayrıntılı gözlemleri bebeklik kuramının temelini oluşturdu. Ömür boyu çalışma arkadaşı Bärbel Inhelder'le birlikte soyut işlemleri inceledi; 1955'te Uluslararası Genetik Epistemoloji Merkezi'ni kurdu. Kendini psikolog değil, bilginin nasıl oluştuğunu inceleyen bir 'genetik epistemolog' olarak tanımladı."
  ],
  timeline: [
    [1918, "Zooloji doktorası (yumuşakçalar)"], [1921, "Cenevre, Rousseau Enstitüsü"],
    [1923, "Çocukta Dil ve Düşünce"], [1926, "Çocukta Dünya Tasarımı: animizm, gerçekçilik"],
    [1932, "Çocukta Ahlaki Yargı"], [1936, "Çocukta Zekânın Doğuşu"],
    [1937, "Çocukta Gerçekliğin İnşası: nesne sürekliliği"], [1941, "Sayı kavramının oluşumu (Szeminska ile)"],
    [1945, "Oyun, Düş ve Taklit"], [1955, "Mantıksal düşünmenin gelişimi (Inhelder ile); Genetik Epistemoloji Merkezi"],
    [1966, "Çocuk Psikolojisi (Inhelder ile)"], [1975, "Bilişsel yapıların dengelenmesi"]
  ],
  concepts: [
    ["Şema", "Tekrarlanabilir ve genellenebilir bir eylem ya da düşünme örüntüsü; bebeklikte kavrama veya emme, sonra zihinsel işlemler."],
    ["Özümseme", "Yeni deneyimi var olan şemalara katma; çocuk her yuvarlak nesneyi 'top' olarak ele alır."],
    ["Uyma", "Şemanın yeni deneyime göre değişmesi; topun her yuvarlak nesne olmadığını öğrenmek."],
    ["Dengeleme", "Özümseme ile uyma arasındaki dengesizliğin giderilmesi; gelişimin asıl motoru."],
    ["İşlem", "İçselleştirilmiş, tersinir ve bir sistem içinde örgütlenmiş zihinsel eylem."],
    ["Tersinirlik", "Bir dönüşümün zihinde geri alınabilmesi (ters çevirme) ya da başka bir değişkenle dengelenmesi (karşılıklılık)."],
    ["Korunum", "Görünüm değişse de miktarın, sayının, kütlenin veya hacmin aynı kaldığını anlama."],
    ["Merkezleme ve merkezden uzaklaşma", "Durumun tek bir göze çarpan özelliğine odaklanma ve birden çok boyutu birlikte değerlendirebilme."],
    ["Benmerkezcilik", "Kendi bakış açısını başkalarınınkinden ayırt edememe; bencillik değil, bilişsel bir sınırlılıktır."],
    ["Animizm, yapaycılık, gerçekçilik", "Cansız nesnelere canlılık yükleme, doğanın insanlar tarafından yapıldığını düşünme ve düşlerin dışarıda olduğunu sanma (1926)."],
    ["Yatay kayma", "Aynı mantıksal yapının farklı içeriklerde farklı yaşlarda kazanılması; ör. sayı korunumu hacim korunumundan yıllar önce."],
    ["Klinik yöntem", "Standart sorular yerine çocuğun yanıtını izleyen esnek görüşme; Piaget'nin temel araştırma tekniği."],
    ["Gelişimin dört etkeni", "Olgunlaşma, fiziksel ve mantıksal-matematiksel deneyim, sosyal aktarım ve dengeleme."]
  ],
  stageFields: {
    labels: ["Klasik görev ya da gözlem", "Tipik çocuk yanıtı", "Klinikte kullanım"],
    rows: [
      ["Emme refleksinin meme dışındaki nesnelere genellenmesi", "Parmağını ya da battaniyeyi emer; emme giderek nesneye göre ayarlanır", "Yenidoğan refleks muayenesi"],
      ["Parmak emme ve ellerini izleme", "Rastlantıyla bulduğu hoş bir eylemi tekrar tekrar yapar", "Görsel takip ve el-ağız koordinasyonu"],
      ["Beşiğe asılı oyuncağı tekmeyle sallama", "İlginç bir sonucu tekrarlamak için eylemi yineler; örtülen oyuncağı aramaz", "Neden-sonuç oyuncaklarına ilgi"],
      ["Örtü altına saklanan oyuncak; A-değil-B görevi", "Örtüyü kaldırıp oyuncağı bulur; oyuncak gözü önünde B'ye taşınınca yine A'da arar", "Nesne sürekliliği ve amaçlı eylem (Uzgiris-Hunt ölçekleri)"],
      ["Nesneleri farklı yükseklik ve biçimlerde düşürme", "Sonucun nasıl değiştiğini görmek için eylemi bilinçli olarak çeşitlendirir", "Keşif oyununun niteliği"],
      ["Ertelenmiş taklit: Jacqueline'in bir gün önce gördüğü bir çocuğun öfke nöbetini taklit etmesi", "Görünmeyen yer değiştirmelerde de nesneyi bulur; çözümü zihinde dener", "Sembolik oyunun başlaması; otizm değerlendirmesinde önemli bir gözlem"],
      ["Üç dağ görevi; korunum görevleri", "Karşıdaki bebeğin de kendisinin gördüğünü gördüğünü söyler; daha uzun diziyi 'daha çok' sayar; 'Güneş beni izliyor, çünkü canlı'", "Hastalık ve ölüm açıklamaları; içkin adalet ('hastalandım, çünkü yaramazlık yaptım')"],
      ["Sıvı korunumu; sınıf kapsama", "'Aynı su: hiçbir şey eklenmedi (özdeşlik), geri dökersek aynı olur (tersinirlik), bu daha uzun ama daha ince (telafi)'", "Okul çağı çocuğuna somut örnek ve çizimlerle psikoeğitim"],
      ["Sarkaç görevi (Inhelder ve Piaget)", "Ağırlığı, ipin uzunluğunu ve itme kuvvetini tek tek değiştirerek salınım süresini yalnızca ip uzunluğunun belirlediğini bulur", "Ergenle varsayımsal düşünmeye dayalı bilişsel çalışma; ergen benmerkezciliği"]
    ]
  },
  evolution: [
    [1923, "İlk dönem: sözel görüşmelerle çocuğun dili, nedensellik, dünya tasarımı ve ahlak yargısı incelendi; yöntem çocuğun dil becerisine fazlaca dayandığı için eleştirildi."],
    [1936, "Bebeklik dönemi: kendi çocuklarının sistemli gözlemiyle duyusal-motor evre ve nesne sürekliliği tanımlandı."],
    [1941, "Somut işlemler: sayı, miktar ve sınıflama üzerine deneyler; işlemlerin mantıksal 'gruplamalar' olarak modellenmesi."],
    [1955, "Soyut işlemler (Inhelder ile): ergenlikte varsayımsal-tümdengelimsel düşünce; genetik epistemoloji programı."],
    [1975, "Dengeleme kuramı yeniden yazıldı; son çalışmalarda olasılık, zorunluluk ve anlam mantığı üzerinde duruldu."]
  ],
  classic: {
    title: "Üç dağ, korunum ve ahlaki yargı görevleri",
    text: [
      "Üç dağ görevinde (Piaget ve Inhelder) çocuk, üç dağdan oluşan bir maketin bir yanında oturur; karşı tarafa bir bebek konur ve çocuktan bebeğin ne gördüğünü gösteren resmi seçmesi istenir. İşlem öncesi çocuk çoğunlukla kendi gördüğü görüntüyü seçer. Korunum görevlerinde eşit miktarlar görünür biçimde dönüştürülür (bardak, dizi, hamur) ve çocuğun miktarın aynı kalıp kalmadığına dair yargısı ve gerekçesi sorgulanır.",
      "Çocukta Ahlaki Yargı (1932) Kohlberg'in çıkış noktasıdır. Bir öyküde bir çocuk kazayla 15 fincan kırar, ötekinde bir çocuk gizlice reçel alırken bir fincan kırar. Küçük çocuklar daha çok zarar veren çocuğu daha suçlu bulur (heteronom ahlak: kurallar değişmez, yargı sonuca göredir); büyük çocuklar niyete bakar (otonom ahlak: kurallar karşılıklı uzlaşmadır). Piaget bu geçişte akran etkileşiminin ve karşılıklılığın rolünü vurguladı."
    ],
    critique: [
      "Çocuğa anlamlı gelen görevlerde yetenekler çok daha erken görülür: Hughes'un polis görevinde okul öncesi çocuklar başka bir bakış açısını hesaba katabildi; McGarrigle ve Donaldson'ın 'yaramaz ayıcık' düzenlemesinde korunum gösteren çocuk sayısı arttı; beklenti ihlali deneyleri bebeklerde erken nesne bilgisine işaret etti.",
      "Soyut işlemler okullaşma ve kültürle güçlü biçimde ilişkilidir (Luria'nın Özbekistan çalışmaları, Dasen'in kültürlerarası çalışmaları)."
    ],
    exps: ["mcgarrigle74", "baillargeon87", "luria76"]
  },
  vignette: {
    title: "Ameliyat olacak 5 yaşındaki çocuğa açıklama yapmak",
    case: "Beş yaşında bir kız çocuğu planlı bir ameliyattan önce çok kaygılı; annesine 'kardeşime vurduğum için hastalandım' diyor. Ailesi ameliyatı 'biraz uyuyacaksın' diye anlatmış; çocuk o geceden beri uyumaktan korkuyor.",
    classic: "Piagetçi formülasyon: işlem öncesi düşünce; içkin adalet (kötü davranış kendiliğinden cezalandırılır), büyülü nedensellik ve sözcüklerin harfiyen anlaşılması. 'Uyumak' ile 'ameliyat' arasında kurulan bağ, çocuğun bakış açısından mantıklıdır.",
    modern: "Güncel yaklaşım: Bibace ve Walsh'un (1980) gelişimsel hastalık kavramları çerçevesi kullanılır; bu yaşta açıklama somut, kısa ve bedensel deneyime dayalı olmalıdır. 'Uyku' yerine 'özel bir ilaçla hiçbir şey hissetmeyeceksin, sonra uyanacaksın' gibi doğru ifadeler, oyunla hazırlık (tıbbi oyun), ziyaret ve ebeveynin yanında bulunması kaygıyı azaltır. Hastalığın suç ya da ceza olmadığı açıkça söylenir. Ölüm kavramının bileşenleri (geri dönüşsüzlük, evrensellik, işlevin durması) çoğu çocukta 5-7 yaş arasında oturur; yas sürecindeki çocukla konuşurken bu dikkate alınır."
  },
  misconceptions: [
    "Evrelerin yaşları değil sırası değişmezdir; Piaget yaşları ortalama değerler olarak verdi.",
    "Benmerkezcilik bencillik ya da empati eksikliği demek değildir.",
    "Piaget sosyal etkileşimi tamamen göz ardı etmedi; ahlak gelişiminde akran karşılıklılığını ve bilişsel çatışmayı önemsedi. Ancak gelişimin öğretimle hızlandırılması sorusunu 'Amerikan sorusu' diye adlandırıp ikincil gördü.",
    "Soyut işlemler herkesin her alanda ulaştığı bir evre değildir; büyük ölçüde eğitim ve uzmanlık alanına bağlıdır."
  ],
  measures: [
    ["Piaget görevleri ve klinik görüşme", "Korunum, sınıflama, sıralama, bakış açısı alma ve soyut akıl yürütme görevleri."],
    ["Uzgiris-Hunt Sıralı Ölçekleri", "Bebeklikte nesne sürekliliği, araç-amaç, taklit ve nedensellik gibi duyusal-motor alanları değerlendirir (1975)."],
    ["Bibace-Walsh hastalık kavramı görüşmesi", "Çocuğun hastalık nedenlerine ilişkin açıklamalarını Piagetçi kategorilere göre sınıflar."]
  ],
  exps: ["bibace80", "speece84", "luria76"]
};

ATLAS.profiles.kohlberg = {
  life: "25 Ekim 1927, Bronxville, New York – 19 Ocak 1987, Boston",
  bio: [
    "Varlıklı bir ailede büyüdü. Lise sonrası İkinci Dünya Savaşı'nın ardından ticaret filosunda çalıştı; İngiliz ablukasını aşarak Yahudi mültecileri Filistin'e taşıyan bir gemide görev aldı, yakalanıp Kıbrıs'taki bir kampta tutuldu. Bu deneyim, yasaya karşı vicdanın ne zaman haklı olduğu sorusunu kişisel bir soru haline getirdi.",
    "Chicago Üniversitesi'ndeki lisans eğitimini sınavlarla bir yılda tamamladı. 1958'deki doktora tezinde Chicago çevresinden 10-16 yaş arası 72 erkek çocukla ahlaki ikilem görüşmeleri yaptı; bu örneklemin bir kısmı 20 yıldan uzun süre izlendi. 1968'den itibaren Harvard'da Ahlak Eğitimi Merkezi'ni yönetti. 1971'de Belize'de araştırma yaparken kaptığı paraziter enfeksiyon ömrünün geri kalanında süregen ağrı ve depresyona yol açtı. 1987'de yaşamına son verdi."
  ],
  timeline: [
    [1958, "Doktora tezi: 72 erkek çocukla ahlaki ikilem görüşmeleri"], [1969, "Rest, Turiel ve Kohlberg: bir üst evrenin tercih edilmesi"],
    [1969, "'Evre ve sıra': bilişsel-gelişimsel sosyalleşme kuramı"], [1971, "Niantic kadın cezaevinde adil topluluk uygulaması"],
    [1974, "Cambridge'de Cluster School adil topluluk okulu"], [1976, "Ahlaki evreler ve ahlakileşme: evre tablosu"],
    [1983, "20 yıllık boylamsal monografi (Colby, Kohlberg, Gibbs, Lieberman)"], [1984, "Ahlak Gelişiminin Psikolojisi; 6. evre puanlamadan çıkarılır"],
    [1987, "Standart Konu Puanlama el kitabı (Colby ve Kohlberg, ölümünden sonra)"]
  ],
  concepts: [
    ["Ahlaki muhakeme", "Kohlberg'in incelediği şey kararın içeriği değil gerekçenin yapısıdır: 'Heinz çalmalı mı?' sorusuna verilen 'evet' ya da 'hayır' değil, neden."],
    ["Evrelerin özellikleri", "Yapısal bütünlük (bir evre tutarlı bir düşünme biçimidir), değişmez sıra (evreler atlanmaz) ve hiyerarşik bütünleşme (üst evre alttakini içerir)."],
    ["Sosyo-ahlaki bakış açısı", "Evreleri ayıran temel boyut: benmerkezci bireyden ilişkilere, toplumsal sisteme ve toplum öncesi evrensel ilkelere genişleyen bakış."],
    ["Bilişsel çatışma ve +1 evre", "Kişi, kendi evresinin bir üstündeki gerekçeleri en ikna edici bulur; bu gerilim gelişimi tetikler (Turiel, 1966; Rest ve ark., 1969)."],
    ["Rol alma", "Başkasının bakış açısını üstlenebilme; Mead ve Selman'ın çalışmalarıyla bağlantılı, ahlaki gelişimin ön koşulu."],
    ["4½ evresi", "Geleneksel ve gelenek sonrası düzey arasında görecelik ve kuşkuculuğun öne çıktığı geçiş; çoğunlukla üniversite yıllarında."],
    ["A ve B alt tipleri", "Her evre içinde kurala ve otoriteye dayalı (heteronom, A) ve adalet ile karşılıklılığa dayalı (otonom, B) yönelim."],
    ["Adil topluluk", "Öğrencilerin ve personelin kuralları demokratik olarak birlikte belirlediği okul ya da kurum; ahlaki atmosferi geliştirmeyi hedefler."]
  ],
  stageFields: {
    labels: ["Doğru olan", "Doğru davranmanın nedeni", "Sosyal bakış açısı", "Heinz: lehte tipik gerekçe", "Heinz: aleyhte tipik gerekçe"],
    rows: [
      ["Kuralları çiğnememek, otoriteye itaat etmek, fiziksel zarardan kaçınmak", "Cezadan kaçınmak; otoritenin üstün gücü", "Benmerkezci: başkalarının çıkarlarını kendi çıkarından ayırt etmez", "Karısının ölmesine izin verirse başı belaya girer", "Yakalanır ve hapse girer; çalmak kötüdür"],
      ["Kendi çıkarına uygun kurallara uymak; adil olan eşit değiş tokuştur", "Kendi ihtiyaçlarını karşılamak, başkalarının da çıkarı olduğunu kabul etmek", "Somut bireyci", "Karısına ihtiyacı var; yakalanırsa ilacı geri verir, cezası da kısa olur", "Eczacı da işini yapıyor; karısı için hapse girmeye değmez"],
      ["Yakınlarının beklentilerini karşılamak; iyi niyet, güven, sadakat, minnet", "Kendi ve başkalarının gözünde iyi biri olmak; Altın Kural", "İlişkiler içindeki birey: ortak duygu ve beklentiler", "İyi bir koca böyle yapar; çalmasa herkes onu kalpsiz bulur", "Hırsız damgası yer; ailesini utandırır"],
      ["Kabul edilmiş görevleri yerine getirmek; yasalar, başka toplumsal görevlerle çatıştığı uç durumlar dışında korunur", "Kurumun bütün olarak işlemesini sürdürmek; 'herkes böyle yapsaydı ne olurdu?'", "Toplumsal sistem: kurallar ve roller", "Kocanın karısını koruma görevi vardır; ama sonra yasal sorumluluğu üstlenmeli ve borcunu ödemeli", "İhtiyacı olan herkes çalarsa toplum düzeni çöker; yasa yasadır"],
      ["Değerlerin gruptan gruba değişebildiğini bilmek; yaşam ve özgürlük gibi göreli olmayan hakları her koşulda korumak", "Toplumsal sözleşmeye bağlılık; yasalar en çok kişi için en çok iyiliği sağlamak için vardır", "Toplum öncesi: rasyonel bireyin hakları ve değerleri", "Yaşam hakkı mülkiyet hakkından önce gelir; yasa bu durumu öngörmemiştir", "Yasa toplumsal bir sözleşmedir; kişisel kararlar yasanın yerine geçerse güven sarsılır, yasa demokratik yollarla değiştirilmelidir"],
      ["Kendi seçtiği evrensel etik ilkelere (adalet, insan onuru, hakların eşitliği) uymak; yasa ilkeyle çatışırsa ilkeye göre davranmak", "Evrensel ilkelerin geçerliliğine rasyonel inanç ve onlara kişisel bağlılık", "Ahlaki bakış açısı: her insan bir amaçtır, araç değildir", "İnsan yaşamının değeri evrenseldir; vicdan, yasaya aykırı olsa bile yaşamı kurtarmayı gerektirir ve kişi sonucunu üstlenir", "Bu evrede tipik bir aleyhte gerekçe neredeyse yoktur; yaşamın değeri öncelik taşır"]
    ]
  },
  evolution: [
    [1958, "Altı evreli model, Piaget'nin heteronom ve otonom ahlak ayrımının ergenlik ve yetişkinliğe genişletilmesiyle kuruldu."],
    [1969, "Bilişsel-gelişimsel sosyalleşme kuramı: ahlak gelişimi öğrenme değil, bilişsel yapıların yeniden düzenlenmesidir."],
    [1976, "Evreler sosyo-ahlaki bakış açısıyla yeniden tanımlandı; A ve B alt tipleri ve 4½ evresi eklendi."],
    [1983, "Boylamsal veriye göre 6. evre gözlenmediği için kuramsal bir evre olarak bırakıldı; puanlama sistemi standartlaştırıldı."],
    [1990, "Neo-Kohlbergci yaklaşım (Rest): katı evreler yerine kişisel çıkar, norm koruma ve gelenek sonrası 'şemalar'; DIT ile ölçüm."]
  ],
  classic: {
    title: "Heinz ikilemi",
    text: [
      "\"Avrupa'da bir kadın özel bir kanser türünden ölmek üzeredir. Doktorlara göre onu kurtarabilecek tek bir ilaç vardır: aynı kasabadaki bir eczacının yeni bulduğu bir radyum türü. İlacın eczacıya maliyeti 200 dolardır, ama eczacı 2000 dolar istemektedir. Hastanın kocası Heinz tanıdığı herkesten borç alarak ancak 1000 dolar toplayabilir. Eczacıdan ilacı daha ucuza satmasını ya da sonra ödemesine izin vermesini ister; eczacı reddeder. Heinz çaresizlik içinde eczaneye girer ve ilacı çalar. Heinz bunu yapmalı mıydı? Neden?\"",
      "Puanlanan, kararın kendisi değil gerekçedir: aynı karar farklı evrelerden gerekçelendirilebilir (aşağıdaki evre tablosundaki 'lehte' ve 'aleyhte' örneklerine bakın). Görüşmede ek sorular da sorulur: Heinz karısını sevmeseydi? Ölen bir yabancı olsaydı? Yakalanırsa yargıç ne yapmalı? Diğer klasik ikilemler: Joe ile babası (kamp için biriktirilen para), Doktor Jefferson (ötanazi)."
    ],
    critique: [
      "Gilligan (1982) modelin adalet yönelimini öne çıkarıp özen yönelimini düşük puanladığını öne sürdü; meta-analizler belirgin bir cinsiyet farkı bulmadı. Kültürlerarası çalışmalar 1-4. evreleri evrensel buldu, ancak gelenek sonrası düzey eğitimli kentli gruplarda yoğunlaştı (Snarey, 1985).",
      "Muhakeme ile davranış arasındaki ilişki orta düzeydedir (Blasi, 1980). Haidt'ın sezgisel modeline göre ahlaki yargı çoğu zaman hızlı sezgilerle verilir ve gerekçe sonradan kurulur."
    ],
    exps: ["colby83", "blasi80", "jaffee00"]
  },
  vignette: {
    title: "15 yaşında davranım bozukluğu ve ahlaki muhakeme",
    case: "On beş yaşındaki bir genç, akranlarıyla birlikte hırsızlık ve kavgalar nedeniyle getiriliyor. Görüşmede 'Yakalanmadıktan sonra sorun yok', 'O da bana aynısını yapardı' ve 'Kimse zarar görmedi, sigortası var' diyor.",
    classic: "Kohlbergci formülasyon: 2. evre, araçsal değiş tokuş; başkalarının bakış açısını alma ve toplumsal sistem perspektifi gelişmemiş. Gibbs'e göre buna kendine hizmet eden bilişsel çarpıtmalar eşlik eder: benmerkezcilik, suçu başkalarına yükleme, küçümseme ya da yanlış adlandırma, en kötüsünü varsayma.",
    modern: "Güncel yaklaşım: suça karışan gençlerde ahlaki yargı düzeyinin akranlarından belirgin biçimde düşük olduğu meta-analizle gösterilmiştir (Stams ve ark., 2006). Ancak muhakeme eğitimi tek başına suç tekrarını azaltmada sınırlı kanıta sahiptir. Birinci basamak, kanıta dayalı aile ve sistem müdahaleleridir (multisistemik terapi, ebeveyn yönetimi eğitimi); EQUIP ya da Saldırganlığın Yerine Koyma Eğitimi (ART) gibi ahlaki muhakeme bileşeni içeren programlar tamamlayıcı olarak kullanılabilir. Eşlik eden DEHB, öğrenme güçlüğü, madde kullanımı ve travma da değerlendirilir."
  },
  misconceptions: [
    "Kohlberg kararı değil gerekçeyi puanlar; 'çalmalı' yanıtı daha ileri bir evre anlamına gelmez.",
    "6. evre boylamsal verilerde neredeyse hiç gözlenmedi; kuramsal bir uç nokta olarak kaldı.",
    "Kişiler tek bir evrede değil, çoğunlukla bitişik iki evrede yanıt verir; evre, kişinin baskın muhakeme biçimidir.",
    "Ahlaki muhakeme ahlaki davranışla eşdeğer değildir; ilişki orta düzeydedir ve kimlik, duygu ve bağlam aradaki boşluğu doldurur.",
    "Gilligan eleştirisi özen boyutunu kalıcı biçimde gündeme taşıdı, ama güçlü bir cinsiyet farkı iddiası meta-analizlerde doğrulanmadı."
  ],
  measures: [
    ["Ahlaki Yargı Görüşmesi (MJI)", "Üç ikilem üzerine yarı yapılandırılmış görüşme; Standart Konu Puanlama ile evre ve ahlaki olgunluk puanı (Colby ve Kohlberg, 1987)."],
    ["Tanımlayıcı Konular Testi (DIT, DIT-2)", "Rest'in kâğıt-kalem aracı; kişisel çıkar, norm koruma ve gelenek sonrası şemaları ölçer."],
    ["Sosyo-ahlaki Düşünme Ölçüsü (SRM-SF)", "Gibbs ve arkadaşlarının ikilem gerektirmeyen kısa formu; suça karışan gençlerle sık kullanılır."],
    ["Ahlaki Yetkinlik Testi (MCT)", "Lind'in, kişinin kendi görüşüne karşıt gerekçeleri ne ölçüde ilkelere göre değerlendirdiğini ölçen aracı."]
  ],
  exps: ["rest69", "stams06", "blasi80"]
};
