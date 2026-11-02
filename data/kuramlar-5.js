/* Kuramlar (5/7): Ahlak, ego ve anlam gelişimi. */
ATLAS.theories.push(
{
  id: "kohlberg", fam: "ahl", name: "Ahlaki muhakeme", who: "Lawrence Kohlberg", years: "1958-1984", rare: false,
  core: "Ahlaki gelişim, ne düşündüğümüzden çok nasıl gerekçelendirdiğimizle ilgilidir. Kişi üç düzey ve altı evrede, cezadan kaçınmaktan evrensel etik ilkelere doğru, giderek daha geniş bir bakış açısıyla akıl yürütür.",
  engine: "Bilişsel gelişim (Piaget) ve bakış açısı alma; ahlaki çatışmalarla karşılaşma.",
  method: "Ahlaki ikilemler (Heinz ikilemi) ve Ahlaki Yargı Görüşmesi; 20 yıllık boylamsal çalışma.",
  ev: 3, evNote: "Evrelerin sırası boylamsal ve kültürlerarası olarak desteklenmiştir. Ancak 5. ve 6. evreler çok nadir görülür ve muhakeme ile davranış arasındaki ilişki zayıftır.",
  labels: ["Gerekçe", "Sınırlılık"],
  stages: [
    { from: 3, to: 7, name: "Ceza ve itaat", sub: "Gelenek öncesi düzey · 1. evre",
      task: "Doğru, cezalandırılmayandır. Otoritenin gücü belirleyicidir.",
      ms: ["'Heinz çalmamalı çünkü hapse girer'"], good: "Kurallara uyma", risk: "Benmerkezci bakış",
      neuro: "Ketleme kontrolü ve zihin kuramı henüz gelişmektedir. Okul öncesi çocuklar yine de ahlaki kuralları geleneksel kurallardan ayırabilir (Smetana, 1981)." },
    { from: 6, to: 10, name: "Araçsal değiş tokuş", sub: "Gelenek öncesi düzey · 2. evre",
      task: "Doğru, kişinin çıkarına hizmet edendir; 'sen bana, ben sana'.",
      ms: ["Adil paylaşım = eşit pay", "Karşılıklı çıkar"], good: "Karşılıklılık", risk: "Pazarlıkçı ahlak",
      neuro: "Bakış açısı alma ve çalışma belleği gelişimi." },
    { from: 9, to: 15, name: "İyi çocuk yönelimi", sub: "Geleneksel düzey · 3. evre",
      task: "Doğru, sevilenlerin onayını kazandıran ve iyi niyetli olandır.",
      ms: ["Niyetin önemi", "Sadakat ve güven"], good: "Empati, ilişkisel ahlak", risk: "Onaya bağımlılık",
      neuro: "Ergenlikte sosyal değerlendirme ve akran onayına duyarlılık artar." },
    { from: 13, to: 25, name: "Yasa ve düzen", sub: "Geleneksel düzey · 4. evre",
      task: "Doğru, toplumsal düzeni sürdüren ve görevini yapandır.",
      ms: ["Toplumun bakış açısı", "Görev ve sorumluluk"], good: "Toplumsal sorumluluk", risk: "Katı kuralcılık",
      neuro: "Soyut düşünme ve prefrontal-temporal ağların olgunlaşması." },
    { from: 20, to: 90, name: "Toplumsal sözleşme", sub: "Gelenek sonrası düzey · 5. evre",
      task: "Yasalar insanlar için vardır ve haklar korunmuyorsa değiştirilebilir.",
      ms: ["Temel haklar", "Demokratik uzlaşma"], good: "İlkeli esneklik", risk: "Az sayıda yetişkin bu düzeye ulaşır",
      neuro: "Ahlaki yargıda ventromedial PFC duygusal değerlendirmeyi, dorsolateral PFC ise bilişsel kontrolü sağlar (Greene)." },
    { from: 25, to: 90, name: "Evrensel etik ilkeler", sub: "Gelenek sonrası düzey · 6. evre",
      task: "Adalet ve insan onuru gibi evrensel ilkelere vicdanla bağlılık.",
      ms: ["Kant'çı ilkeler", "Sivil itaatsizlik"], good: "Evrensel ahlak", risk: "Kohlberg'in kendisi bu evreyi puanlamaktan vazgeçmiştir",
      neuro: "Ampirik olarak çok nadir görüldüğünden biyolojik karşılığı incelenmemiştir." }
  ],
  bio: [
    "Ahlaki yargıların nörobiyolojisi Kohlberg'in salt bilişsel modelini genişletir. Greene'in fMRI çalışmaları duygusal (vmPFC, amigdala) ve hesaplayıcı (DLPFC) süreçlerin yarıştığını gösterir. vmPFC hasarlı hastalar kişisel ikilemlerde belirgin biçimde daha faydacı yargılar verir (Koenigs ve ark., 2007).",
    "Bebeklerde ahlaki değerlendirmeye dair iddialar (yardımcı-engelleyici deneyleri) büyük bir çok merkezli replikasyonda doğrulanamamıştır. 18 aylıkların kendiliğinden yardım davranışı ise sağlamdır."
  ],
  crit: [
    "Gilligan (1982), modelin adalet yönelimini öne çıkarıp kadınlarda daha sık gözlenen 'özen etiğini' düşük puanladığını öne sürdü. Ancak meta-analiz belirgin bir cinsiyet farkı bulmadı (Walker, 1984).",
    "Turiel'in sosyal alan kuramına göre küçük çocuklar bile ahlaki kuralları (zarar vermemek) toplumsal geleneklerden (kıyafet kuralları) ayırır; ahlak tek bir evre merdiveniyle açıklanamaz.",
    "Haidt'ın sosyal sezgici modeline göre ahlaki yargı çoğu zaman hızlı sezgilerle verilir ve gerekçe sonradan kurulur."
  ],
  exps: ["colby83", "smetana81", "greene01", "hamlin07", "warneken06"]
},
{
  id: "loevinger", fam: "ahl", name: "Ego gelişimi", who: "Jane Loevinger", years: "1966-1976", rare: true,
  core: "Ego, kişinin kendini ve dünyayı anlamlandırdığı çerçevedir. Bu çerçeve dürtüsellikten öz-korumaya, uyumculuktan vicdanlılığa ve özerkliğe doğru giderek daha karmaşık hale gelir. Yaş bu ilerlemeyi yalnızca kabaca öngörür; birçok yetişkin orta evrelerde kalır.",
  engine: "Deneyimi bütünleştiren 'ana özellik' olarak ego; karmaşıklaşan kendilik ve ilişki anlayışı.",
  method: "Washington Üniversitesi Cümle Tamamlama Testi (WUSCT).",
  ev: 3, evNote: "Ölçüm aracı geçerli ve güvenilirdir. Meta-analiz ergenlikte artış ve yetişkinlikte durağanlık gösterir; evrelerin katı sırası ise tartışılır.",
  labels: ["Özellik", "Sınırlılık"],
  stages: [
    { from: 2, to: 6, name: "Dürtüsel (E2)", sub: "Ön-toplumsal ve dürtüsel",
      task: "Bedensel dürtüler ve anlık ihtiyaçlar baskındır; başkaları ihtiyaç kaynağı olarak görülür.",
      ms: ["İyi-kötü ayrımı basit", "Dürtüye bağımlılık"], good: "Canlılık", risk: "Yetişkinlikte sürerse dürtüsellik",
      neuro: "Ketleme kontrolünün henüz olgunlaşmadığı dönem." },
    { from: 5, to: 12, name: "Öz-korumacı (E3)", sub: "'Yakalanma' korkusu",
      task: "Kurallar anlaşılır ama kendi çıkarı için kullanılır; suç başkalarına atılır.",
      ms: ["Fırsatçılık", "Kontrol isteği"], good: "Kendini koruma", risk: "Güvensizlik, manipülasyon",
      neuro: "Ödül ve cezaya dayalı öğrenme baskındır." },
    { from: 10, to: 18, name: "Uyumcu (E4)", sub: "Ait olma",
      task: "Grubun kurallarına ve beklentilerine uyulur; görünüş, itibar ve aidiyet önemlidir.",
      ms: ["Klişe düşünce", "Onay arayışı"], good: "Aidiyet", risk: "Bireyselliğin bastırılması",
      neuro: "Akran onayına duyarlılık ve sosyal ödülün zirvesi." },
    { from: 15, to: 30, name: "Öz-farkında (E5)", sub: "Uyumcu-vicdanlı geçişi",
      task: "Kendini gruptan ayrı görmeye başlama; iç yaşama ve olasılıklara farkındalık. Yetişkinlerin en sık bulunduğu evredir.",
      ms: ["İç yaşam farkındalığı", "İstisnaları görme"], good: "Yansıtma", risk: "Kendine dönük kaygı",
      neuro: "Kendilikle ilgili düşünme ağlarının (mPFC, PCC) olgunlaşması." },
    { from: 20, to: 90, name: "Vicdanlı (E6)", sub: "İçselleştirilmiş ölçütler",
      task: "Kendi ölçütlerine göre değerlendirme, uzun vadeli hedefler, sorumluluk.",
      ms: ["İçsel ahlaki ölçütler", "Başarı yönelimi"], good: "Öz-yönetim", risk: "Aşırı sorumluluk ve suçluluk",
      neuro: "Prefrontal planlama ve öz-düzenleme devrelerinin olgunlaşması." },
    { from: 25, to: 90, name: "Bireyci ve özerk (E7-E8)", sub: "Çelişkiye tahammül",
      task: "Bireysellik ve başkalarının özerkliğine saygı; iç çatışmaları tanıma ve tutabilme.",
      ms: ["Belirsizliğe tahammül", "Karşılıklı bağımlılık"], good: "Özerklik", risk: "Az sayıda yetişkin ulaşır",
      neuro: "Biyolojik karşılığı doğrudan incelenmemiştir." },
    { from: 35, to: 90, name: "Bütünleşmiş (E9)", sub: "En ileri evre",
      task: "Kimliğin farklı yanlarını bütünleştirme, kendine ve başkalarına derin şefkat.",
      ms: ["Bütünleşik kimlik"], good: "Bilgelik", risk: "Yetişkinlerin %1'inden azında",
      neuro: "-" }
  ],
  bio: [
    "Loevinger'ın modeli biyolojik değil yapısaldır. Ergenlikteki hızlı ilerleme prefrontal ve sosyal beyin ağlarındaki olgunlaşmayla zaman olarak örtüşür, ama yetişkinlikteki bireysel farkları biyolojiden çok yaşam deneyimleri açıklar."
  ],
  crit: [
    "Ego gelişimi zekâ ve sözel akıcılıkla orta düzeyde ilişkilidir; ölçümün kısmen sözel beceriyi yansıttığı tartışılır.",
    "Ego gelişimi yüksekliği mutlulukla aynı şey değildir; yüksek evrelerdeki kişiler daha fazla iç çatışma bildirebilir."
  ],
  exps: ["loevinger91"]
},
{
  id: "kegan", fam: "ahl", name: "Zihin düzeyleri", who: "Robert Kegan", years: "1982-1994", rare: true,
  core: "Gelişim, 'özne' olarak içinde yaşadığımız şeyin (bizi yöneten) zamanla 'nesne'ye dönüşmesidir (üzerine düşünebildiğimiz). Çocuk dürtülerinin öznesiyken sonra onlara sahip olur; yetişkin ilişkilerinin öznesiyken sonra kendi değer sistemini kurar.",
  engine: "Özne-nesne dönüşümü; kişinin anlamlandırma kapasitesi ile çevrenin taleplerinin uyumsuzluğu.",
  method: "Özne-Nesne Görüşmesi.",
  ev: 2, evNote: "Boylamsal birkaç çalışma (West Point) ilerlemeyi desteklemiştir. Ölçüm uzmanlık gerektirir ve örneklemler sınırlıdır.",
  labels: ["Kazanım", "Sınırlılık"],
  stages: [
    { from: 0, to: 2, name: "Bütünleştiren (0)", sub: "Refleksler öznedir",
      task: "Bebek reflekslerinin ve duyumlarının içindedir.",
      ms: ["Refleksler"], good: "-", risk: "-",
      neuro: "Subkortikal ve duyusal-motor düzenleme." },
    { from: 2, to: 7, name: "Dürtüsel (1. düzen)", sub: "Algı ve dürtüler öznedir",
      task: "Çocuk algılarının ve dürtülerinin içindedir; refleksler artık nesnedir.",
      ms: ["Büyülü düşünce", "Anlık istekler"], good: "Hayal gücü", risk: "Dürtü kontrolü zayıf",
      neuro: "Prefrontal ketlemenin gelişmeye başladığı dönem." },
    { from: 7, to: 14, name: "Emperyal (2. düzen)", sub: "İhtiyaç ve çıkarlar öznedir",
      task: "Kalıcı ihtiyaçlar ve çıkarlar etrafında örgütlenme; başkaları ihtiyaçları karşılayan ya da engelleyen kişilerdir.",
      ms: ["Kurallar ve somut karşılıklılık"], good: "Tutarlı istekler", risk: "Yetişkinlikte sürerse araçsal ilişkiler",
      neuro: "Somut mantık ve çalışma belleğinin artması." },
    { from: 14, to: 90, name: "Kişilerarası (3. düzen)", sub: "İlişkiler öznedir",
      task: "Kişi ilişkilerinin ve grubunun beklentilerinin içindedir; başkalarının görüşlerini içselleştirir ama onlardan ayrışamaz. Yetişkinlerin büyük kısmı burada ya da 3-4 geçişindedir.",
      ms: ["Empati ve sadakat", "'Sen ne düşünürsün?' sorusuna bağımlılık"], good: "Derin bağlılık", risk: "Kendi değerini başkalarının onayına bağlama",
      neuro: "Sosyal değerlendirme ve kendilik ağlarının ergenlikte yeniden düzenlenmesi." },
    { from: 20, to: 90, name: "Kurumsal (4. düzen)", sub: "Kendini yazan zihin",
      task: "Kişi kendi değer sistemini kurar; ilişkiler artık 'nesne'dir, kişi onlar üzerine düşünebilir.",
      ms: ["Öz-yazarlık", "Kendi ölçütleriyle karar verme"], good: "Özerklik, sorumluluk", risk: "Kendi sistemine aşırı bağlılık",
      neuro: "Biyolojik karşılığı doğrudan incelenmemiştir." },
    { from: 35, to: 90, name: "Bireylerarası (5. düzen)", sub: "Kendini dönüştüren zihin",
      task: "Kişi kendi değer sistemini de nesne olarak görebilir; çelişkili sistemleri bir arada tutar.",
      ms: ["Diyalektik düşünme", "Kimliğin akışkanlığı"], good: "Esneklik, bilgelik", risk: "Az sayıda yetişkin, genellikle 40 yaş sonrası",
      neuro: "-" }
  ],
  bio: [
    "Kegan'ın modeli yapısaldır ve doğrudan biyolojik bağlantı kurmaz. Ergenlikte 2. düzenden 3. düzene geçiş, sosyal beyin ağlarının yeniden düzenlenmesi ve akran onayına artan duyarlılıkla zamansal olarak örtüşür."
  ],
  crit: [
    "Özne-Nesne Görüşmesi uzman puanlayıcı gerektirir; örneklemler küçük ve çoğunlukla eğitimli Batılı yetişkinlerdir.",
    "Model, yönetim ve yetişkin eğitimi alanında popülerdir, ama klinik ve gelişimsel araştırmalarda sınırlı kullanılmıştır."
  ],
  exps: ["westpoint05"]
},
{
  id: "fowler", fam: "ahl", name: "İnanç gelişimi", who: "James W. Fowler", years: "1981", rare: true,
  core: "İnanç, dinden bağımsız olarak, kişinin yaşamı anlamlandırma ve en derin değerlerine güvenme biçimidir. Bu 'ruhsal' anlamlandırma, bilişsel ve psikososyal gelişime paralel yedi evrede değişir.",
  engine: "Piaget, Kohlberg ve Erikson'un sentezi; anlam, aidiyet ve aşkınlık arayışı.",
  method: "İnanç Gelişimi Görüşmesi (yaklaşık 359 görüşme).",
  ev: 1, evNote: "Evrelerin betimlemesi zengindir ama görgül temeli sınırlıdır ve büyük ölçüde Hristiyan, Batılı örneklemlere dayanır.",
  labels: ["Kazanım", "Risk"],
  stages: [
    { from: 0, to: 2, name: "Farklılaşmamış inanç (0)", sub: "Temel güven",
      task: "Bakımverenle ilişkide güven, umut ve sevginin tohumları atılır.",
      ms: ["Temel güven"], good: "Güven", risk: "Terk edilme korkusu",
      neuro: "Bağlanma ve stres düzenlemesinin kurulması." },
    { from: 2, to: 7, name: "Sezgisel-yansıtıcı (1)", sub: "İmge ve öyküler",
      task: "Ebeveynlerin inançları ve dinî öyküler imgeler, duygular ve hayal gücüyle sezgisel olarak alınır.",
      ms: ["Güçlü imgeler", "Büyülü düşünce"], good: "Hayal gücü", risk: "Korkutucu imgeler",
      neuro: "Sembolik düşünce ve hayali oyun dönemi." },
    { from: 7, to: 12, name: "Mitik-gerçekçi (2)", sub: "Hikâyeler gerçektir",
      task: "Topluluğun öyküleri, inançları ve kuralları harfi harfine benimsenir; adalet karşılıklılığa dayanır.",
      ms: ["Kelimesi kelimesine yorum", "Karşılıklı adalet"], good: "Aidiyet, düzen", risk: "Katı kuralcılık",
      neuro: "Somut işlemler dönemi." },
    { from: 12, to: 25, name: "Sentetik-geleneksel (3)", sub: "Uyumcu inanç",
      task: "İnanç, kimlik ve aidiyetle bütünleşir; değerler grubun otoritesine dayanır ama henüz eleştirel olarak incelenmez.",
      ms: ["Topluluk kimliği", "Duygusal bağlılık"], good: "Kimlikle bütünleşen inanç", risk: "Otoriteye bağımlılık",
      neuro: "Soyut düşünce ve sosyal değerlendirmeye artan duyarlılık." },
    { from: 18, to: 40, name: "Bireysel-yansıtıcı (4)", sub: "Eleştirel inanç",
      task: "Kişi inancını eleştirel olarak inceler ve kendi sorumluluğunu üstlenir; semboller kavramlara çevrilir.",
      ms: ["Sorgulama", "Kendi seçimi olan inanç"], good: "Özerk inanç", risk: "Aşırı akılcılık, yalnızlık",
      neuro: "Prefrontal ve analitik düşünmenin olgunlaşması." },
    { from: 35, to: 90, name: "Birleştirici (5)", sub: "Paradoksu kucaklama",
      task: "Çelişkilere ve gizeme açıklık; başka geleneklerin hakikatine saygı.",
      ms: ["Paradoksu kabul", "Diyalog"], good: "Derinlik ve alçakgönüllülük", risk: "Edilgenlik",
      neuro: "-" },
    { from: 45, to: 90, name: "Evrenselleştirici (6)", sub: "Nadir evre",
      task: "Kişi evrensel adalet ve sevgi ilkeleri doğrultusunda kendini aşar.",
      ms: ["Evrensel adanmışlık"], good: "Aşkınlık", risk: "Çok nadir",
      neuro: "-" }
  ],
  bio: [
    "Fowler biyolojik bir model önermez. Maneviyatın nörobiyolojisine dair çalışmalar (meditasyon ve dua sırasında varsayılan mod ağı, parietal korteks değişiklikleri) bu evreleri doğrudan sınamaz."
  ],
  crit: [
    "Görgül destek sınırlıdır; evrelerin sırası ve ayrıştırılabilirliği bağımsız olarak doğrulanmamıştır.",
    "Model Batılı Hristiyan bağlamdan çıkmıştır ve Kohlberg'in modeline benzer biçimde bilişsel karmaşıklığı ruhsal olgunlukla eşitleme eğilimindedir."
  ],
  exps: []
}
);
