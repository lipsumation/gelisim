/* Kuramlar (1/4): Psikanalitik ve nesne ilişkileri kuramları.
   Alanlar: ev = genel kanıt düzeyi (1-4), rare = standart ders kitaplarında az yer alan kuram. */
ATLAS.theories.push(
{
  id: "freud", fam: "psa", name: "Psikoseksüel gelişim", who: "Sigmund Freud", years: "1905", rare: false,
  core: "Yaşam enerjisi (libido) bedenin farklı haz bölgelerine sırayla yönelir. Her evrede doyum aşırı ya da yetersiz kalırsa 'takılma' (fiksasyon) oluşur ve bu, yetişkin karakterini ve psikopatolojisini biçimlendirir.",
  engine: "Dürtü (libido) ve biyolojik olgunlaşma; id, ego ve süperego arasındaki çatışma.",
  method: "Yetişkin hastaların serbest çağrışımları ve rüyalarından geriye dönük çıkarım; tek vaka çalışmaları (Küçük Hans).",
  ev: 1, evNote: "Evreler doğrudan sınanabilir öngörü üretmez. Bilinçdışı işlemleme ve bebeklik amnezisi gibi gözlemler doğrulanmıştır, ancak Freud'un önerdiği nedenlerle değil.",
  stages: [
    { from: 0, to: 1.5, name: "Oral evre", sub: "Ağız: emme, ısırma",
      task: "Beslenme ve bağımlılık deneyimi üzerinden haz; ilk nesne ilişkisi memeyle kurulur.",
      ms: ["Emme ve ağızla keşif", "Diş çıkarma: oral-sadistik alt evre (Abraham)", "Sütten kesilme"],
      good: "Güven ve haz alabilme kapasitesi", risk: "Oral fiksasyon: bağımlılık, aşırı yeme, sigara; saflık ya da iğneleyicilik",
      neuro: "Emme ve arama refleksleri beyin sapı düzeyindedir. Somatosensoriyel kortekste ağız ve yüz geniş temsil edilir; ağız ilk aylarda nesneleri tanımanın başlıca aracıdır." },
    { from: 1.5, to: 3, name: "Anal evre", sub: "Tutma ve bırakma",
      task: "Tuvalet eğitimiyle dışsal kurallarla tanışma ve öz-denetim; ebeveynle güç mücadelesi.",
      ms: ["Sfinkter kontrolü", "İnatlaşma, 'hayır'", "Düzen ve sahiplenme ilgisi"],
      good: "Özerklik, düzen, kontrol duygusu", risk: "Anal-tutucu (aşırı düzen, cimrilik, inatçılık; obsesif karakter) ya da anal-salıverici (dağınıklık)",
      neuro: "Sfinkter kontrolü, kortikal kontrolün pontin işeme merkezine ulaşmasını ve spinal yolların miyelinizasyonunu gerektirir (18-30 ay). Prefrontal ketleme becerisi de bu dönemde ortaya çıkar." },
    { from: 3, to: 6, name: "Fallik evre", sub: "Ödipal karmaşa",
      task: "Karşı cinsten ebeveyne arzu, aynı cinsten ebeveynle rekabet; çatışma özdeşimle çözülür ve süperego oluşur.",
      ms: ["Cinsel farklılıklara merak", "Ebeveynle özdeşim", "Vicdanın (süperego) doğuşu"],
      good: "Cinsiyet kimliği, vicdan, girişkenlik", risk: "Suçluluk, kastrasyon kaygısı; Freud'a göre nevrozların çekirdeği",
      neuro: "Cinsiyet kimliği 2-3 yaşta, cinsiyet sabitliği 5-7 yaşta oturur. Zihin kuramının gelişmesi (4-5 yaş) rekabeti ve kıskançlığı yeni bir düzeye taşır; suçluluk duygusu orbitofrontal ve ventromedial PFC ağlarıyla ilişkilidir." },
    { from: 6, to: 12, name: "Latans dönemi", sub: "Dürtünün sessizliği",
      task: "Cinsel enerji okul, beceri ve aynı cinsten arkadaşlıklara yönelir; bastırma ve yüceltme gibi savunmalar pekişir.",
      ms: ["Okul becerileri", "Aynı cinsten arkadaş grupları", "Kurallara ilgi"],
      good: "Sosyal ve bilişsel beceriler", risk: "Aşırı ketlenme",
      neuro: "Paradoks: bu dönemde adrenarş (6-8 yaş) ile androjen düzeyleri artmaya başlar ve cinsel ilgi kültürlerarası gözlemlerde tamamen kaybolmaz. Del Giudice bu dönemi biyolojik bir 'geçiş' olarak yeniden yorumlar." },
    { from: 12, to: 90, name: "Genital evre", sub: "Olgun cinsellik",
      task: "Puberteyle libido yeniden canlanır ve aile dışındaki bir nesneye yönelir. Olgunluğun ölçütü 'sevebilmek ve çalışabilmek'tir.",
      ms: ["Puberte", "Aile dışı romantik bağlar", "Sevme ve çalışma kapasitesi"],
      good: "Karşılıklı, olgun ilişkiler", risk: "Önceki takılmaların yeniden canlanması",
      neuro: "Hipotalamus-hipofiz-gonad ekseni yeniden etkinleşir; seks steroidleri limbik sistemi yeniden şekillendirir ve ödül sistemi duyarlılaşır." }
  ],
  bio: [
    "Freud bir nöroloğdu; 1895'teki 'Bilimsel Bir Psikoloji Taslağı'nda ruhsal süreçleri nöronlar üzerinden açıklamaya çalıştı. Bugünkü nöropsikanaliz (Solms, Panksepp) dürtü kavramını subkortikal dopaminerjik 'ARAYIŞ' (SEEKING) sistemiyle ilişkilendirir.",
    "Bilinçdışı işlemleme ve bebeklik amnezisi güçlü biçimde doğrulanmıştır. Ancak bebeklik amnezisinin nedeni büyük olasılıkla bastırma değil, hipokampusun olgunlaşmamışlığı ve yüksek nörogenez hızıdır. Bastırmanın bilişsel karşılığı olan 'istemli unutma' ise prefrontal korteksin hipokampusu baskılamasıyla gösterilmiştir."
  ],
  crit: [
    "Kuram, çocukların doğrudan gözlemine değil yetişkin hastalardan geriye dönük çıkarıma dayanır ve yanlışlanabilir öngörü üretmez.",
    "Ödipal karmaşanın evrenselliği antropolojik verilerle (Malinowski, Trobriand) sorgulanmıştır. Oral ve anal karakter kümelerinin varlığına dair bazı kanıtlar vardır, ama bunların emzirme ya da tuvalet eğitimi biçiminden kaynaklandığı gösterilememiştir.",
    "Kadın gelişimine ilişkin görüşleri (penis kıskançlığı) Karen Horney'den başlayarak feminist kuramcılarca eleştirilmiştir."
  ],
  exps: ["fishergreenberg", "anderson01", "akers14", "solms00", "harlow58", "mischel72"]
},
{
  id: "klein", fam: "psa", name: "Paranoid-şizoid ve depresif pozisyonlar", who: "Melanie Klein", years: "1935-1946", rare: true,
  core: "Bebek doğumdan itibaren yoğun bilinçdışı fantezilerle dolu bir iç dünyaya sahiptir. Gelişim düz bir evreler dizisi değil, yaşam boyu gidip gelinen iki 'pozisyon'dur: dünyayı iyi ve kötü diye bölmek ve bütün bir nesne için yas tutabilmek.",
  engine: "Yaşam ve ölüm dürtüleri arasındaki çatışma; kaygı ve kaygıya karşı savunmalar; fantezi.",
  method: "Çocuk analizinde oyun tekniği; klinik vaka çalışmaları.",
  ev: 1, evNote: "Pozisyonlar doğrudan deneysel olarak sınanmamıştır. Kavramları (bölme, yansıtmalı özdeşim) RKÇ'lerle sınanmış bazı tedavilere (aktarım odaklı psikoterapi) temel oluşturmuştur.",
  stages: [
    { from: 0, to: 0.33, name: "Paranoid-şizoid pozisyon", sub: "Bölme ve yansıtmalı özdeşim",
      task: "Bebek doyuran 'iyi meme' ile engelleyen 'kötü meme'yi ayrı nesneler olarak yaşar. Baskın kaygı, zarar görme (persekütif) kaygısıdır.",
      ms: ["Kısmi nesne ilişkisi", "Bölme, yansıtma, içe alma", "İyi nesnenin içselleştirilmesi"],
      good: "İyi nesnenin içe alınmasıyla çekirdek güven", risk: "Yoğun persekütif kaygı; Klein'a göre psikotik ve sınır işleyişin kökü",
      neuro: "Erken bebeklikte duygular ağırlıkla subkortikal sistemlerle (amigdala, hipotalamus, beyin sapı) düzenlenir ve kortikal bütünleştirme sınırlıdır. 'Bölünmüş' deneyim bu açıdan biyolojik olarak makuldür ama doğrudan kanıtı yoktur." },
    { from: 0.33, to: 1, name: "Depresif pozisyon", sub: "Bütün nesne, suçluluk ve onarım",
      task: "Bebek sevdiği ve öfkelendiği annenin aynı kişi olduğunu fark eder. Ona zarar vermiş olma kaygısı suçluluğa ve onarma isteğine dönüşür. Bu pozisyon yaşam boyu yeniden işlenir.",
      ms: ["Bütün nesne ilişkisi", "Yas tutabilme", "Onarım isteği, sembol oluşumu"],
      good: "Kaygıya dayanma, empati, yaratıcılık", risk: "Manik savunmalar (inkâr, küçümseme); depresif kaygıda takılma",
      neuro: "6-9. aylarda tanıdık kişilere seçici bağlanma ve tanıma belleği gelişir; zamana yayılan bütünleşik kişi temsilleri prefrontal-hipokampal ağların olgunlaşmasıyla mümkün hale gelir." }
  ],
  bio: [
    "Klein kuramını biyolojik bir çerçeveye oturtmadı. Bugünkü en yakın karşılıklar: erken duyguların subkortikal düzenlenmesi, 6-9. aydan itibaren kalıcı kişi temsillerinin oluşması ve stres altında 'bölme' benzeri kategorik değerlendirmelerin yeniden ortaya çıkması.",
    "Sınır kişilik bozukluğunda gösterilen amigdala aşırı tepkiselliği ve prefrontal düzenlemenin zayıflığı, Klein'ın paranoid-şizoid işleyiş tanımıyla klinik olarak örtüşen bir tablo çizer."
  ],
  crit: [
    "Yeni doğmuş bebeğe karmaşık fanteziler atfedilmesi, bebeklerin bilişsel kapasitesine dair bulgularla uyumsuzdur (Stern, 1985).",
    "Kanıtların neredeyse tamamı klinik vakalara dayanır; pozisyonların ortaya çıkış zamanlaması sistematik gözlemle sınanmamıştır."
  ],
  exps: []
},
{
  id: "spitz", fam: "psa", name: "Psişik organizatörler", who: "René Spitz", years: "1945-1965", rare: true,
  core: "Ruhsal gelişim, belirli dönemlerde ortaya çıkan ve yeni bir örgütlenme düzeyine geçişi gösteren 'organizatörler' ile ilerler. Spitz psikanalizi doğrudan bebek gözlemi ve filmle birleştiren ilk araştırmacılardandır ve ağır duygusal yoksunluğun bebeği öldürebileceğini gösterdi.",
  engine: "Anne-bebek ilişkisinin duygusal iklimi ile olgunlaşmanın etkileşimi.",
  method: "Kurumlardaki ve ailelerdeki bebeklerin sistematik gözlemi, film kayıtları, gelişim testleri.",
  ev: 3, evNote: "Organizatörlerin zamanlaması (sosyal gülümseme, yabancı kaygısı) güçlü biçimde doğrulanmıştır. Yoksunluk bulguları, yöntem eleştirilerine rağmen sonraki kontrollü çalışmalarla desteklenmiştir.",
  stages: [
    { from: 0, to: 0.17, name: "Nesnesiz evre", sub: "Ayrımlaşmamış deneyim",
      task: "Bebek iç ve dış uyaranları ayırt etmez; yüksek bir uyaran eşiği onu korur.",
      ms: ["Uykuda endojen gülümseme", "Fizyolojik düzenleme"],
      good: "Fizyolojik denge", risk: "Aşırı uyaran ya da yetersiz bakım",
      neuro: "Gülümseme subkortikal kaynaklıdır; kortikal kontrol sınırlıdır." },
    { from: 0.17, to: 0.67, name: "1. organizatör: sosyal gülümseme", sub: "Ön-nesne dönemi",
      task: "Bebek bir yüz şablonuna (iki göz, alın, burun, hareket) gülümser. Gülümseme henüz kişiye özgü değildir.",
      ms: ["2-3 ay: yüze sosyal gülümseme", "Karşılıklı etkileşim döngüsü"],
      good: "Etkileşimin başlaması", risk: "Gecikmiş gülümseme: ilişki ya da duyusal sorun işareti",
      neuro: "Görsel kortikal işlemleme olgunlaştıkça endojen gülümsemenin yerini ekzojen sosyal gülümseme alır." },
    { from: 0.67, to: 1.25, name: "2. organizatör: 8. ay kaygısı", sub: "Libidinal nesnenin kuruluşu",
      task: "Bebek anneyi diğer yüzlerden ayırt eder; yabancı yüz annenin yokluğunu hatırlattığı için kaygı uyandırır.",
      ms: ["7-9 ay: yabancı kaygısı", "Belirli bir sevgi nesnesi"],
      good: "Belirli bir bağlanma nesnesinin kurulması", risk: "6-12 ay arası anneden ayrılan bebeklerde anaklitik depresyon: ağlama, geri çekilme, kilo kaybı, gelişim geriliği",
      neuro: "Amigdala ve korku devrelerinin olgunlaşması, tanıma belleği ve hipokampal işlevlerin gelişmesi; bağlanmanın belirginleştiği dönemle aynıdır." },
    { from: 1.25, to: 2, name: "3. organizatör: 'hayır'", sub: "Semantik iletişim",
      task: "Baş sallayarak ve sözle 'hayır' demek, soyut iletişime ve özerkliğe geçişi gösterir. Çocuk ebeveynin yasağını özdeşim yoluyla alır ve kullanır.",
      ms: ["~15 ay: 'hayır' jesti ve sözcüğü", "Sembolik iletişim"],
      good: "Özerklik ve sembolik iletişim", risk: "Aşırı kısıtlayıcı ya da tutarsız sınırlar",
      neuro: "Dil ağlarının ve prefrontal ketlemenin gelişimi." }
  ],
  bio: [
    "Spitz 'organizatör' kavramını embriyolojiden aldı: belirli bir dönemde ortaya çıkan ve sonraki gelişimi düzenleyen merkez. Bu, bugünkü duyarlı dönem kavramının psikanalitik öncülüdür.",
    "Hospitalizm gözlemleri Romanya yetimhaneleri çalışmalarında (ERA, BEIP) biyolojik olarak doğrulandı: erken kurumsal yoksunluk daha küçük beyin hacmi, düşük EEG alfa gücü ve HPA ekseni düzensizliğiyle ilişkilidir."
  ],
  crit: [
    "Hospitalizm çalışmaları yöntem açısından eleştirilmiştir (Pinneau, 1955): karşılaştırılan gruplar sağlık, beslenme ve enfeksiyon riski açısından denk değildi ve ölçümler standart değildi.",
    "Buna karşın temel bulgu, yani erken duygusal yoksunluğun ağır ve kalıcı etkileri, sonraki kontrollü çalışmalarda doğrulanmıştır."
  ],
  exps: ["spitz45", "robertson52", "beip07", "era17"]
},
{
  id: "winnicott", fam: "psa", name: "Bağımlılıktan bağımsızlığa", who: "Donald W. Winnicott", years: "1951-1965", rare: true,
  core: "'Bebek diye bir şey yoktur, yalnızca bebek ve anne vardır.' Gelişim, kusursuz değil 'yeterince iyi' bir çevrenin tutması (holding) içinde gerçekleşir. Annenin zamanla ayarlanmış küçük başarısızlıkları bebeği gerçeklikle tanıştırır. Geçiş nesneleri ve oyun iç dünya ile dış gerçeklik arasındaki 'ara alan'dır.",
  engine: "Kolaylaştırıcı çevre, birincil annelik meşguliyeti ve olgunlaşma süreçleri.",
  method: "Pediatri ve psikanaliz pratiğinde on binlerce anne-bebek çiftinin klinik gözlemi.",
  ev: 2, evNote: "Kavramlar sezgisel olarak güçlüdür ve bebek araştırmalarındaki 'onarım' bulgularıyla uyumludur, ancak operasyonelleştirilmesi zordur.",
  stages: [
    { from: 0, to: 0.5, name: "Mutlak bağımlılık", sub: "Tutma ve birincil annelik meşguliyeti",
      task: "Anne bebeğin ihtiyaçlarına neredeyse tam uyum sağlar; bebek dünyayı kendisinin yarattığı yanılsamasını yaşar.",
      ms: ["Tutma (holding)", "Bedensel bakım (handling)", "Nesneyi doğru anda sunma"],
      good: "'Süregiden varoluş' duygusu, gerçek kendilik", risk: "Çevresel başarısızlık: uyum sağlayan ama canlılığı olmayan 'sahte kendilik'",
      neuro: "Bebeğin stres düzenlemesi tamamen dışsaldır; bakımveren HPA ekseninin 'dış düzenleyicisidir' (Hofer). Sıçanlarda anne yalama-tımarlamasının stres genlerini epigenetik olarak programlaması bu fikirle uyumludur." },
    { from: 0.5, to: 2, name: "Göreli bağımlılık", sub: "Geçiş nesnesi ve yanılsamadan çıkış",
      task: "Anne yavaş yavaş 'başarısız' olur ve bebek ihtiyacı ile anne arasındaki boşluğu fark eder. Battaniye ya da oyuncak gibi geçiş nesneleri iç ve dış dünya arasında köprü kurar.",
      ms: ["4-12 ay: geçiş nesnesine bağlanma", "Anneyi ayrı bir kişi olarak tanıma", "Oyun"],
      good: "Oyun, yaratıcılık, yalnız kalabilme kapasitesinin tohumu", risk: "Çok erken ya da çok yoğun hayal kırıklığı; geçiş alanının çöküşü",
      neuro: "Ayrılık protestosu ve nesne sürekliliği 6-12. aylarda belirginleşir; bebek annenin yokluğunda onun temsilini tutabilmeye başlar." },
    { from: 2, to: 6, name: "Bağımsızlığa doğru", sub: "Birinin yanında yalnız kalabilmek",
      task: "Çocuk iyi bakımın anılarını içselleştirir ve çevresine güvenerek bağımsızlaşır. Geçiş alanı yaşam boyu kültür, sanat ve dine doğru genişler.",
      ms: ["Yaratıcı oyun", "Birinin yanında yalnız kalabilme", "Kreşe ve ayrılığa uyum"],
      good: "Gerçek kendilik, yaratıcı yaşama", risk: "Sahte kendilik; antisosyal eğilim (Winnicott'a göre yitirilmiş iyi deneyimi geri isteme)",
      neuro: "Öz-düzenleme içselleşir. Gee ve arkadaşlarına (2014) göre çocuklukta annenin yüzü amigdala tepkisini tamponlar; bu etki ergenlikte azalır." }
  ],
  bio: [
    "'Yeterince iyi anne' kavramı, bebek araştırmalarındaki onarım bulgularıyla uyumludur: Tronick'e göre anne-bebek etkileşiminin ancak yaklaşık üçte biri tam eşzamanlıdır. Sağlıklı olan sürekli uyum değil, uyumsuzlukların tekrar tekrar onarılmasıdır.",
    "Holding kavramının biyolojik karşılığı eş düzenlemedir: bakımverenin dokunuşu, ritmi ve sesi bebeğin kalp hızını, kortizolünü ve uyarılmasını düzenler."
  ],
  crit: [
    "Kavramlar klinik gözleme dayanır ve ölçülmesi zordur.",
    "Geçiş nesnesi kullanımı kültüre göre değişir; bebeğin anneyle birlikte uyuduğu toplumlarda çok daha seyrektir. Dolayısıyla evrensel bir gelişim basamağı değildir."
  ],
  exps: ["tronick78", "hongtownes76", "hood08", "meaney04", "gee13"]
},
{
  id: "mahler", fam: "psa", name: "Ayrılma-bireyleşme", who: "Margaret Mahler", years: "1975", rare: false,
  core: "Psikolojik doğum fiziksel doğumla aynı anda gerçekleşmez. Bebek anneyle ortak bir sınır içinde başlar ve üç yıl boyunca adım adım ayrı bir birey olarak 'yumurtadan çıkar'.",
  engine: "Olgunlaşma (özellikle hareket becerisi) ile anne-çocuk ilişkisinin etkileşimi.",
  method: "Masters Children's Center'da anne-bebek çiftlerinin yıllar süren doğal gözlemi.",
  ev: 2, evNote: "Alıştırma ve yeniden yakınlaşma alt evreleri motor ve öz-farkındalık gelişimiyle tutarlıdır. 'Normal otizm' ve 'simbiyoz' evreleri yenidoğan araştırmalarıyla çürütülmüştür.",
  stages: [
    { from: 0, to: 0.08, name: "Normal otistik evre", sub: "Mahler bu evreyi sonradan terk etmiştir",
      task: "Bebeğin fizyolojik dengeye odaklandığı ve dış uyaranlara görece kapalı olduğu varsayılmıştır.",
      ms: ["Fizyolojik düzenleme", "Uyku-uyanıklık döngüsü"],
      good: "Fizyolojik denge", risk: "-",
      neuro: "Yenidoğan araştırmaları bu varsayımı çürüttü: yenidoğanlar yüzleri izler, annenin sesini tanır ve etkileşime yönelir. Mahler yaşamının sonunda bu evreyi 'uyanma' evresi olarak adlandırmayı önerdi." },
    { from: 0.08, to: 0.42, name: "Normal simbiyotik evre", sub: "İkili birlik",
      task: "Bebek kendisini ve anneyi tek bir sistem gibi yaşar; anneye yönelir, sosyal gülümseme başlar.",
      ms: ["Anneye yönelme", "Sosyal gülümseme", "Bedensel yakınlık arayışı"],
      good: "Güvenli 'ortak zar': sonraki ayrışmanın temeli", risk: "Simbiyotik psikoz (Mahler'in ilk klinik ilgisi)",
      neuro: "Duygu ve uyarılmanın bakımverenle birlikte düzenlenmesi (eş düzenleme); anne ve bebek arasında kalp ritmi eşzamanlılığı (Feldman)." },
    { from: 0.42, to: 0.83, name: "Farklılaşma", sub: "Yumurtadan çıkma",
      task: "Bebek annenin yüzünü, saçını, kolyesini inceler; 'gümrük muayenesi' ile yabancıları anneyle karşılaştırır.",
      ms: ["Annenin yüzünü keşfetme", "Yabancı kaygısı", "Kucaktan uzaklaşmaya çalışma"],
      good: "Annenin diğerlerinden ayırt edilmesi", risk: "Ayrışmanın gecikmesi",
      neuro: "Yüz tanıma uzmanlaşması (fusiform bölge), tanıma belleği ve algısal daralma." },
    { from: 0.83, to: 1.33, name: "Alıştırma", sub: "Dünyayla aşk ilişkisi",
      task: "Emekleme ve yürümeyle keşif coşkusu yaşanır. Çocuk kendine hayrandır ve 'duygusal yakıt' almak için anneye döner.",
      ms: ["Bağımsız yürüme", "Neşeli keşif", "Anneye dönüp yakıt alma"],
      good: "Özerklik ve ustalık deneyimi", risk: "Anne ulaşılmaz olursa keşif ketlenir",
      neuro: "Lokomosyon beyindeki uzamsal haritalamayı ve yükseklik korkusunu değiştirir (Campos); keşif dopaminerjik ödül sistemiyle desteklenir." },
    { from: 1.33, to: 2, name: "Yeniden yakınlaşma", sub: "Yeniden yakınlaşma krizi",
      task: "Çocuk ayrı olduğunu fark eder; bağımsızlık isteği ile anneye yapışma arasında gidip gelir ('gölge olma' ve 'kaçıp gitme').",
      ms: ["Aynada kendini tanıma", "Öfke nöbetleri", "Ayrılığa artan duyarlılık"],
      good: "Annenin hem ayrı hem ulaşılabilir olduğunu kabul etme", risk: "Krizin çözülmemesi; Mahler, Masterson ve Kernberg bunu sınır kişilik örgütlenmesinin kökü olarak görmüştür",
      neuro: "Öz-farkındalık (18-24 ay ayna testi) ve öz-bilinçli duygular (utanç, gurur) ortaya çıkar; dil patlaması yaşanır, ama prefrontal düzenleme henüz zayıftır." },
    { from: 2, to: 3, name: "Nesne sürekliliği", sub: "Bireyselliğin pekişmesi",
      task: "Annenin iyi ve kötü yanları kalıcı, bütünleşik bir içsel imgede birleşir. Çocuk anne yokken de bu imgeden güç alabilir.",
      ms: ["Ayrılığa uyum", "Tutarlı kendilik duygusu", "Sembolik oyun"],
      good: "Duygusal nesne sürekliliği", risk: "Bölme mekanizmasının sürmesi",
      neuro: "Temsil kapasitesi ve çalışma belleği gelişir; duygu düzenleme hipokampal-prefrontal ağlarla içselleşmeye başlar." }
  ],
  bio: [
    "Mahler'in evreleri motor gelişime sıkıca bağlıdır: alıştırma evresi bağımsız yürümeyle başlar. Yeniden yakınlaşma krizi, öz-farkındalığın ve öz-bilinçli duyguların ortaya çıktığı dönemle örtüşür.",
    "Ayrılık kaygısının 10-18 aylar arasında zirve yapıp sonra azalması farklı kültürlerde gösterilmiştir (Kagan ve ark.)."
  ],
  crit: [
    "'Normal otizm' ve 'simbiyoz' kavramları yenidoğanların sosyal yönelimini gösteren bulgularla çelişir (Stern, 1985).",
    "Örneklem küçük, beyaz, orta sınıf ve ABD'lidir. Ayrışmanın ideal hedef olarak alınması, karşılıklı bağımlılığa değer veren kültürler açısından kültürel bir önyargı olarak eleştirilir.",
    "Gözlemler standart ölçümlere ve kör değerlendirmeye dayanmaz."
  ],
  exps: ["mahler75", "lewis79", "gibson60", "johnson91", "decasper80"]
}
);
