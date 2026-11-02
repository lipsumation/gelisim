/* Kuramlar (6/7): Yetişkinlik ve yaşlanma kuramları. */
ATLAS.theories.push(
{
  id: "jung", fam: "ymb", name: "Bireyleşme ve yaşamın öğleden sonrası", who: "Carl G. Jung", years: "1930", rare: true,
  core: "Yaşam güneşin günlük yolculuğuna benzer. Sabah (gençlik) dış dünyaya uyum, ego ve persona inşasıdır. Öğleden sonra (orta yaş) içe dönme, gölgeyle yüzleşme ve kişiliğin ihmal edilmiş yanlarını bütünleştirerek kendiliğe (Self) doğru bireyleşmedir.",
  engine: "Bilinç ile bilinçdışı arasındaki dengeleyici ilişki; bütünlük arayışı.",
  method: "Klinik çalışma, rüya analizi, kültürlerarası mit ve sembol incelemesi.",
  ev: 1, evNote: "Arketip ve bireyleşme kavramları yanlışlanabilir değildir. Kişiliğin yaşla 'olgunlaştığı' fikri ise kişilik araştırmalarında desteklenir.",
  stages: [
    { from: 0, to: 12, name: "Çocukluk", sub: "Ebeveynlerin ruhsal dünyasında",
      task: "Ego henüz bağımsız değildir; çocuk ebeveynlerinin bilinçdışı sorunlarını taşır.",
      ms: ["Ebeveynle ruhsal kaynaşma", "Egonun doğuşu"], good: "Egonun temelleri", risk: "Ebeveynin yaşanmamış yaşamını taşıma",
      neuro: "Kendilik temsillerinin ve otobiyografik belleğin kurulması." },
    { from: 12, to: 38, name: "Gençlik ve erken yetişkinlik", sub: "Yaşamın sabahı",
      task: "Dünyaya uyum: meslek, eş, toplumsal rol (persona). Baskın psikolojik işlev (düşünme, duygu, duyum ya da sezgi) gelişir.",
      ms: ["Persona inşası", "Toplumsal başarı"], good: "Güçlü ego", risk: "Persona ile özdeşleşme",
      neuro: "Prefrontal kontrol ve sosyal ödül sistemleri dışa dönük hedefleri destekler." },
    { from: 38, to: 65, name: "Orta yaş", sub: "Yaşamın öğleden sonrası",
      task: "İçe dönme; gölge ve anima/animus ile yüzleşme; ihmal edilmiş işlevlerin bütünleşmesi. Jung'a göre 'öğleden sonrayı sabahın programıyla yaşamak' nevroza yol açar.",
      ms: ["Değerlerin gözden geçirilmesi", "Gölgeyle yüzleşme", "Maneviyata ilgi"], good: "Bireyleşme", risk: "Depresyon, katılaşma",
      neuro: "Kişilik araştırmaları yetişkinlikte duygusal dengenin ve sorumluluğun arttığını gösterir (Roberts ve ark., 2006)." },
    { from: 65, to: 90, name: "Yaşlılık", sub: "Anlam ve ölüme hazırlık",
      task: "Kendilikle bütünleşme ve ölümü yaşamın anlamlı bir parçası olarak görme.",
      ms: ["Anlam arayışı", "Ölümle barışma"], good: "Bütünlük", risk: "Anlamsızlık",
      neuro: "Duygu düzenleme ve pozitiflik etkisi ileri yaşta artar." }
  ],
  bio: [
    "Jung'un kendisi kuramını biyolojik olarak temellendirmedi. Bugünkü kişilik araştırmaları 'olgunluk ilkesini' destekler: duygusal denge, uyumluluk ve sorumluluk yetişkinlik boyunca artar."
  ],
  crit: [
    "Arketipler ve kolektif bilinçdışı sınanabilir öngörü üretmez.",
    "Orta yaş krizi herkes için normatif değildir; yaşam doyumundaki U eğrisi de tartışmalıdır."
  ],
  exps: ["roberts06", "ortayas"]
},
{
  id: "levinson", fam: "ymb", name: "Yaşam mevsimleri", who: "Daniel Levinson", years: "1978 / 1996", rare: true,
  core: "Yetişkin yaşamı, istikrarlı 'yapı kurma' dönemleri ile bu yapıların sorgulandığı 'geçiş' dönemlerinin birbirini izlemesiyle ilerler. Her geçişte kişi gençlikteki 'Düş'üyle (yaşam hayali) ve onu destekleyen mentorlarla yeniden yüzleşir.",
  engine: "Yaşam yapısı ile içsel Düş arasındaki uyum ya da uyumsuzluk.",
  method: "40 erkekle (1978) ve 45 kadınla (1996) yapılan biyografik görüşmeler.",
  ev: 1, evNote: "Küçük ve kohorta özgü örneklem; yaş sınırları bağımsız çalışmalarda tekrarlanamamıştır.",
  stages: [
    { from: 17, to: 22, name: "Erken yetişkin geçişi", sub: "Geçiş",
      task: "Ergenlikten ve aileden ayrılma; Düş'ün belirmesi.", ms: ["Aileden ayrılma", "Düş'ün oluşması"],
      good: "Bağımsızlık", risk: "Kopamama", neuro: "Prefrontal kontrolün olgunlaşmasının sürdüğü dönem." },
    { from: 22, to: 28, name: "Erken yetişkinliğe giriş", sub: "Yapı kurma",
      task: "İlk yaşam yapısı: meslek, ilişki ve mentor.", ms: ["Meslek seçimi", "Mentor", "Partner"],
      good: "Bağlılıklar", risk: "Erken kapanma", neuro: "-" },
    { from: 28, to: 33, name: "30 yaş geçişi", sub: "Geçiş",
      task: "İlk yapının gözden geçirilmesi: 'Şimdi değilse asla'.", ms: ["Yeniden değerlendirme"],
      good: "Düzeltme fırsatı", risk: "Kriz", neuro: "-" },
    { from: 33, to: 40, name: "Yerleşme", sub: "Yapı kurma",
      task: "Toplumda yer edinme, 'kendi kendinin efendisi olma'.", ms: ["Kariyerde ilerleme", "Mentordan bağımsızlaşma"],
      good: "Yetkinlik", risk: "Düş'ten uzaklaşma", neuro: "-" },
    { from: 40, to: 45, name: "Orta yaş geçişi", sub: "Geçiş",
      task: "Düş ile gerçekleşenler arasındaki uçurumla yüzleşme; gençlik-yaşlılık, yaratıcılık-yıkıcılık, erillik-dişillik, bağlılık-ayrılık kutuplarının bütünleşmesi.",
      ms: ["Sonluluk farkındalığı", "Kutupların bütünleşmesi"], good: "Yeniden yapılanma", risk: "Orta yaş krizi",
      neuro: "Bu yaşlarda belirgin bir nörobiyolojik dönüm noktası yoktur; Levinson geçişi psikososyal olarak tanımlar." },
    { from: 45, to: 60, name: "Orta yetişkinlik", sub: "Yapı ve 50 yaş geçişi",
      task: "Yeni yaşam yapısı, 50 yaş geçişi ve orta yetişkinliğin doruğu.", ms: ["Mentorluk", "Yeni yapının olgunlaşması"],
      good: "Üretkenlik", risk: "Durağanlık", neuro: "-" },
    { from: 60, to: 90, name: "Geç yetişkinlik", sub: "Geç yetişkin geçişi ve sonrası",
      task: "Yaşlılığa geçiş, kayıplar ve yeni anlam kaynakları.", ms: ["Emeklilik", "Yeni roller"],
      good: "Bilgelik", risk: "Kayıp ve yalıtılmışlık", neuro: "-" }
  ],
  bio: [
    "Levinson geçişleri biyolojik değil psikososyal olaylar olarak tanımlar. Kuramın biyolojik bir eşleşmesi önerilmemiştir."
  ],
  crit: [
    "Örneklem küçük, ABD'li ve 1923-1934 doğumlu bir kohorta aittir; katı yaş aralıkları tekrarlanamamıştır.",
    "Büyük anket çalışmalarına göre orta yaş krizi azınlıkta görülür ve çoğu zaman yaşa değil olaylara bağlıdır."
  ],
  exps: ["ortayas"]
},
{
  id: "vaillant", fam: "ymb", name: "Yetişkin gelişimi ve savunmaların olgunlaşması", who: "George E. Vaillant", years: "1977-2012", rare: true,
  core: "1938'den beri izlenen Harvard mezunu erkekler (Grant Çalışması) ve Boston'ın yoksul mahallelerinden gençlerle (Glueck kohortu) Vaillant, Erikson'un modeline iki evre ekledi. Savunma mekanizmalarının yaşam boyu olgunlaştığını ve olgun savunmaların (yüceltme, mizah, özgecilik, bilinçli erteleme, öngörü) iyi yaşlanmanın en güçlü öngörücüleri arasında olduğunu gösterdi.",
  engine: "Uyum sağlayıcı savunmaların olgunlaşması; ilişkiler; yaşam boyu boylamsal yeniden değerlendirme.",
  method: "Dünyanın en uzun süreli boylamsal yetişkin gelişimi çalışması (80+ yıl).",
  ev: 3, evNote: "Boylamsal veri benzersizdir, ama ilk örneklem beyaz, Harvard mezunu erkeklerdir ve gözlemseldir.",
  labels: ["Kazanım", "Risk"],
  stages: [
    { from: 15, to: 25, name: "Kimlik", sub: "Ebeveynden ayrışma",
      task: "Ebeveynlerden ayrı bir benlik kurma.", ms: ["Bağımsız değerler"],
      good: "Kimlik", risk: "Ebeveyne bağımlılık", neuro: "-" },
    { from: 20, to: 30, name: "Yakınlık", sub: "Karşılıklı bağlılık",
      task: "Başka biriyle karşılıklı, bağlı bir ilişki kurma.", ms: ["Uzun soluklu ilişki"],
      good: "Sevgi", risk: "Yalıtılmışlık", neuro: "-" },
    { from: 25, to: 40, name: "Kariyer pekiştirmesi", sub: "Vaillant'ın eklediği evre",
      task: "İşi bir 'meslek kimliğine' dönüştürme: yetkinlik, bağlılık, memnuniyet ve katkı.",
      ms: ["Meslek kimliği", "Uzmanlaşma"], good: "Yetkinlik", risk: "Tükenmişlik, kendine dönük kariyerizm", neuro: "-" },
    { from: 35, to: 55, name: "Üretkenlik", sub: "Erikson'dan",
      task: "Sonraki kuşağın bakımını ve gelişimini üstlenme.", ms: ["Mentorluk", "Liderlik"],
      good: "Özen", risk: "Durgunluk", neuro: "Bakım vermenin ödül sistemiyle ilişkisi." },
    { from: 55, to: 70, name: "Anlamın bekçisi", sub: "Vaillant'ın eklediği evre",
      task: "Bireylerden çok kültürün ve kurumların değerlerini koruma ve geleceğe aktarma.",
      ms: ["Gelenekleri koruma", "Kurumsal bellek"], good: "Kültürel süreklilik", risk: "Katılık", neuro: "-" },
    { from: 70, to: 90, name: "Bütünlük", sub: "Erikson'dan",
      task: "Yaşamı kabul ve ölümle barışma.", ms: ["Yaşamı gözden geçirme"],
      good: "Bilgelik", risk: "Umutsuzluk", neuro: "Duygu düzenlemenin iyileşmesi." }
  ],
  bio: [
    "Grant Çalışması'nda 50 yaşındaki ilişki doyumu, 80 yaşındaki sağlığı kolesterol düzeyinden daha iyi öngörmüştür (Waldinger ve Schulz). Alkol kötüye kullanımı, kötü yaşlanmanın en güçlü öngörücüsü olarak öne çıkmıştır.",
    "Olgun savunmaların fizyolojik bir karşılığı olarak duygu düzenleme stratejileri (bastırma yerine yeniden değerlendirme) prefrontal-amigdala devreleriyle ilişkilidir."
  ],
  crit: [
    "İlk örneklem yalnızca beyaz, ayrıcalıklı erkeklerden oluşur; sonradan Glueck kohortu ve Terman kadınlarıyla genişletilmiştir.",
    "Gözlemsel bir çalışmadır; nedensellik çıkarımı sınırlıdır."
  ],
  exps: ["vaillant", "uretkenlik"]
},
{
  id: "carstensen", fam: "ymb", name: "Sosyoduygusal seçicilik", who: "Laura Carstensen", years: "1992-", rare: true,
  core: "İnsanlar önlerinde kalan zamanı nasıl algıladıklarına göre hedeflerini seçer. Zaman açık uçlu görüldüğünde bilgi edinme ve yeni ilişkiler öne çıkar; sınırlı görüldüğünde duygusal anlam ve yakın ilişkiler öne geçer. Yaşlılıkta küçülen sosyal ağ bir kayıp değil, bir seçimdir.",
  engine: "Algılanan zaman ufku.",
  method: "Deneyler, deneyim örneklemesi, boylamsal çalışmalar; zaman ufkunun deneysel manipülasyonu.",
  ev: 4, evNote: "Pozitiflik etkisi ve zaman ufkunun hedefleri değiştirmesi pek çok deneyle desteklenmiştir. Kültürler arasında etki büyüklüğü değişir.",
  labels: ["Öncelik", "Risk"],
  stages: [
    { from: 15, to: 40, name: "Açık zaman ufku", sub: "Bilgi hedefleri",
      task: "Gelecek uzun görünür: yeni bilgi, deneyim ve yeni ilişkiler önceliklidir.",
      ms: ["Geniş sosyal ağ", "Yeniliğe yatırım"], good: "Keşif ve öğrenme", risk: "Olumsuz bilgiye dikkat yanlılığı",
      neuro: "Genç yetişkinlerde amigdala olumsuz uyaranlara olumlu olanlardan daha güçlü yanıt verir." },
    { from: 40, to: 65, name: "Geçiş", sub: "Hedeflerin karışımı",
      task: "Zaman ufku daralmaya başlar; bilgi ve duygu hedefleri dengelenir.",
      ms: ["Sosyal ağın seçici olarak daralması"], good: "Seçicilik", risk: "-",
      neuro: "Duygu düzenlemede prefrontal stratejiler güçlenir." },
    { from: 65, to: 90, name: "Sınırlı zaman ufku", sub: "Duygusal anlam hedefleri",
      task: "Duygusal olarak anlamlı yakın ilişkiler önceliklidir; olumlu bilgiye dikkat ve bellek yanlılığı (pozitiflik etkisi).",
      ms: ["Küçük ama yakın ağ", "Pozitiflik etkisi", "Daha iyi duygu düzenleme"], good: "Duygusal iyi oluş", risk: "Yalnızlık ve kayıplar; olumsuz sağlık bilgisinin göz ardı edilmesi",
      neuro: "Yaşlı yetişkinlerde amigdalanın olumsuz uyaranlara yanıtı azalır (Mather ve ark., 2004); pozitiflik etkisi bilişsel kontrolü yüksek yaşlılarda daha belirgindir." }
  ],
  bio: [
    "Belirleyici olan biyolojik yaş değil, algılanan zamandır: ciddi hastalığı olan gençler ya da yaşadığı yerden yakında ayrılacak olanlar da yaşlılar gibi tanıdık kişileri tercih eder. Bu, kuramın yaşlanmanın biyolojik gerilemesine indirgenemeyeceğini gösterir.",
    "Pozitiflik etkisinin bilişsel kontrol gerektirmesi, onun yalnızca nöral gerilemeye bağlı olmadığını, aktif bir düzenleme stratejisi olduğunu düşündürür."
  ],
  crit: [
    "Pozitiflik etkisi Doğu Asya örneklemlerinde daha zayıf bulunmuştur; kültürel değerlerle etkileşir.",
    "Etki deney koşullarına göre değişir; dikkat yönlendirilmediğinde daha belirgindir."
  ],
  exps: ["carstensen03"]
},
{
  id: "tornstam", fam: "ymb", name: "Gerotransandans", who: "Lars Tornstam", years: "1989-2005", rare: true,
  core: "Yaşlılık, orta yaşın değerleriyle ölçülen bir gerileme değil; materyalist ve pragmatik bakıştan daha kozmik ve aşkın bir bakışa geçiştir. Kuram, etkinliği ideal sayan 'başarılı yaşlanma' anlayışına bir alternatif sunar. Joan Erikson'un önerdiği dokuzuncu evreyle de örtüşür.",
  engine: "Yaşam boyu süren, olgunlaşmaya bağlı bir bakış açısı değişimi.",
  method: "İsveç ve Danimarka'da anket ve nitel görüşmeler; Gerotransandans Ölçeği.",
  ev: 1, evNote: "Betimleyici veriler vardır, ama kuramın nedensel ve evrensel iddiaları sınanmamıştır.",
  labels: ["Kazanım", "Risk"],
  stages: [
    { from: 60, to: 90, name: "Gerotransandans", sub: "Üç boyut",
      task: "Kozmik boyut: zaman algısının değişmesi, önceki kuşaklarla bağ, ölüm korkusunun azalması. Benlik boyutu: benmerkezciliğin azalması, bedene odaklanmanın aşılması. İlişki boyutu: yüzeysel ilişkilere ilginin azalması, yalnızlığa olumlu bakış.",
      ms: ["Ölüm korkusunun azalması", "Seçici sosyal ilişkiler", "Yalnızlıktan doyum"], good: "Yaşam doyumu, iç huzur", risk: "Depresif geri çekilme ile karıştırılması",
      neuro: "Doğrudan bir nörobiyolojik çalışma yoktur; ileri yaşta artan duygu düzenleme ve pozitiflik etkisiyle paraleldir." }
  ],
  bio: [
    "Kuram biyolojik bir mekanizma önermez. Sosyoduygusal seçicilik bulgularıyla (seçici ilişkiler, duygusal anlam) örtüşen yanları vardır."
  ],
  crit: [
    "Veriler büyük ölçüde İskandinav örneklemlerinden gelir.",
    "Geri çekilme kuramına (Cumming ve Henry, 1961) benzerliği nedeniyle, yaşlıların toplumdan çekilmesini doğal göstererek normalleştirdiği eleştirilir."
  ],
  exps: ["tornstam97"]
}
);
