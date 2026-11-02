/* Kuramlar (2/6): Psikososyal ve kimlik kuramları. */
ATLAS.theories.push(
{
  id: "erikson", fam: "pss", name: "Psikososyal gelişim", who: "Erik H. Erikson", years: "1950", rare: false,
  core: "Yaşam boyu sekiz evrede, her biri bir 'psikososyal kriz' olan iki kutuplu görevle karşılaşırız. Kriz olumlu yönde çözülürse kişiliğe kalıcı bir 'erdem' eklenir. Gelişim bedensel olgunlaşma, ego ve toplumun beklentilerinin kesişiminde gerçekleşir.",
  engine: "Epigenetik ilke: her güç kendi 'yükselme zamanında' öne çıkar, ama hepsi baştan beri vardır ve yaşam boyu yeniden işlenir.",
  method: "Klinik çalışma, farklı kültürlerin (Sioux, Yurok) incelenmesi, psikobiyografiler (Luther, Gandhi).",
  ev: 3, evNote: "Erken evrelerin içeriği (güven ve duyarlı bakım) ile kimlik ve üretkenlik kavramları ölçülmüş ve desteklenmiştir. Evrelerin katı sırası ve yaş sınırları ise desteklenmez.",
  labels: ["Erdem", "Olumsuz çözüm"],
  stages: [
    { from: 0, to: 1.5, name: "Temel güven ve güvensizlik", sub: "Erdem: umut",
      task: "Bakımın tutarlılığı ve güvenilirliği, dünyanın ve kendinin güvenilir olduğu beklentisini kurar.",
      ms: ["Beslenme ve uyku ritmi", "Sosyal gülümseme", "Seçici bağlanma"],
      good: "Umut", risk: "Güvensizlik, geri çekilme",
      neuro: "Bakımveren duyarlılığı bebeğin HPA eksenini ve amigdala-PFC devresini ayarlar. Duyarlılık ile güvenli bağlanma arasındaki meta-analitik ilişki orta düzeydedir (r ≈ .24)." },
    { from: 1.5, to: 3, name: "Özerklik ve utanç-şüphe", sub: "Erdem: irade",
      task: "Kendi bedenini ve seçimlerini kontrol etme: yürüme, konuşma, tuvalet, 'kendim yapacağım'.",
      ms: ["Tuvalet eğitimi", "'Hayır' ve 'kendim'", "Seçim yapma"],
      good: "İrade", risk: "Utanç, kendinden şüphe, kompulsif titizlik",
      neuro: "Ön singulat ve prefrontal korteksin olgunlaşmasıyla çaba gerektiren kontrol ortaya çıkar; utanç ve gurur 18-24. aylarda öz-farkındalıkla birlikte belirir." },
    { from: 3, to: 6, name: "Girişimcilik ve suçluluk", sub: "Erdem: amaç",
      task: "Plan yapma, hayal kurma ve rol oyunlarıyla dünyayı fethetme; vicdanın oluşumu.",
      ms: ["Rol oyunu", "Merak ve 'neden' soruları", "Vicdan"],
      good: "Amaç", risk: "Suçluluk, ketlenme",
      neuro: "Zihin kuramı ağı (TPJ, mPFC) ve orbitofrontal korteks gelişimi; empatik suçluluğun biyolojik temeli." },
    { from: 6, to: 12, name: "Çalışkanlık ve aşağılık", sub: "Erdem: yeterlik",
      task: "Okulda ve oyunda beceri kazanma, bir şey üretme ve tamamlama; akranlarla karşılaştırma.",
      ms: ["Okuma-yazma", "Takım oyunları", "Kendini başkalarıyla kıyaslama"],
      good: "Yeterlik", risk: "Aşağılık duygusu",
      neuro: "Okuma ve aritmetik ağlarının (görsel kelime biçimi alanı, intraparyetal sulkus) uzmanlaşması; frontoparyetal dikkat ağları; adrenarş." },
    { from: 12, to: 18, name: "Kimlik ve rol karmaşası", sub: "Erdem: sadakat",
      task: "Geçmiş özdeşimleri, bedensel değişimleri ve toplumsal rolleri tutarlı bir benlikte birleştirme. Toplum gence bir 'psikososyal moratoryum' tanır.",
      ms: ["Değer ve ideoloji arayışı", "Meslek seçimi", "Akran grubu ve aidiyet"],
      good: "Sadakat", risk: "Rol karmaşası, olumsuz kimlik",
      neuro: "Kendini değerlendirirken medial PFC aktivitesi ergenlerde yetişkinlerden daha yüksektir (Pfeifer ve ark., 2009). Sosyal değerlendirmeye duyarlılık ve ödül sistemi zirve yapar." },
    { from: 18, to: 40, name: "Yakınlık ve yalıtılmışlık", sub: "Erdem: sevgi",
      task: "Kendini kaybetmeden başka biriyle derin ve karşılıklı bir bağ kurma.",
      ms: ["Uzun soluklu partnerlik", "Derin dostluklar", "Bağlılık"],
      good: "Sevgi", risk: "Yalıtılmışlık, yüzeysel ilişkiler",
      neuro: "Oksitosin ve vazopressin sistemleri çift bağını destekler. Yetişkin bağlanma temsilleri (AAI) ilişki örüntülerini ve çocuğa aktarılan bağlanmayı öngörür." },
    { from: 40, to: 65, name: "Üretkenlik ve durgunluk", sub: "Erdem: özen",
      task: "Sonraki kuşağı yetiştirme, üretme, mentorluk; kendinden sonrasına yatırım.",
      ms: ["Ebeveynlik ve mentorluk", "Topluma katkı", "Kalıcı eser"],
      good: "Özen", risk: "Durgunluk, kendine dönme",
      neuro: "Bakım vermek ve başkalarına yardım etmek ödül sistemini (ventral striatum) ve oksitosin sistemini etkinleştirir. Üretkenlik puanı yüksek yetişkinlerde iyi oluş ve sağlık daha yüksektir." },
    { from: 65, to: 90, name: "Benlik bütünlüğü ve umutsuzluk", sub: "Erdem: bilgelik",
      task: "Yaşanmış hayatı olduğu gibi kabul etme ve anlamlandırma; ölümle barışma. Joan Erikson çok ileri yaş için dokuzuncu bir evre önermiştir.",
      ms: ["Yaşamı gözden geçirme", "Kuşaklararası aktarım", "Kayıplarla baş etme"],
      good: "Bilgelik", risk: "Umutsuzluk, pişmanlık, ölüm korkusu",
      neuro: "Pozitiflik etkisi ve gelişen duygu düzenleme; otobiyografik bellek ve varsayılan mod ağı yaşam gözden geçirmeyi destekler." }
  ],
  bio: [
    "Erikson'un 'epigenetik ilke'si embriyolojiden alınmıştır: her organın gelişmek için kendi zamanı vardır. Bugünkü moleküler epigenetikle aynı şey değildir, ama erken bakımın gen ifadesini kalıcı biçimde etkilediğini gösteren bulgular (Meaney) ilginç bir örtüşme sunar.",
    "Güven evresi bağlanma araştırmalarıyla, kimlik evresi Marcia'nın kimlik statüsü çalışmalarıyla, üretkenlik evresi McAdams'ın ölçekleri ve Vaillant'ın 70 yılı aşan boylamsal verisiyle sınanmıştır."
  ],
  crit: [
    "Yaş sınırları gevşektir ve evreler katı bir sırayla ilerlemez; boylamsal çalışmalar (Whitbourne) kohort ve tarih etkilerini gösterir.",
    "Model Batılı ve erkek yaşam döngüsüne göre kurulmuştur. Gilligan, kadınlarda kimlik ve yakınlığın iç içe geliştiğini öne sürmüştür.",
    "Kanıt temeli klinik ve biyografik çalışmalara dayanır; kuramın kendisi doğrudan deneysel değildir."
  ],
  exps: ["dewolff97", "tronick78", "whitbourne92", "marcia66", "uretkenlik", "vaillant"]
},
{
  id: "sullivan", fam: "pss", name: "Kişilerarası gelişim dönemleri", who: "Harry Stack Sullivan", years: "1953", rare: true,
  core: "Kişilik, kişilerarası ilişkilerin ürünüdür. Gelişimi güvenlik (kaygıdan korunma) ve doyum ihtiyaçları yönlendirir. Her dönemde yeni bir ilişki ihtiyacı belirir: şefkat, yetişkin katılımı, akran kabulü, yakın dostluk ve cinsel yakınlık.",
  engine: "Bakımverenden bebeğe 'bulaşan' kaygı ve kişilerarası ihtiyaçlar. 'Benlik sistemi' kaygıyı azaltmak için gelişir.",
  method: "Şizofreni hastalarıyla psikoterapi, kişilerarası gözlem.",
  ev: 3, evNote: "Ön ergenlik dostluğunun (can dostu) ve akran kabulünün önemi boylamsal araştırmalarla desteklenmiştir.",
  stages: [
    { from: 0, to: 1.5, name: "Bebeklik", sub: "Şefkat ihtiyacı",
      task: "Bebek bakımverenin kaygısını empatik yolla 'alır'. Deneyim 'iyi ben', 'kötü ben' ve dehşet verici 'ben-değil' olarak örgütlenir.",
      ms: ["Şefkat arayışı", "Kaygının bulaşması", "'İyi anne / kötü anne' algısı"],
      good: "Güvenlik duygusu", risk: "Yoğun kaygı, 'ben-değil' deneyimleri (çözülme)",
      neuro: "Annenin stresi bebeğe fizyolojik olarak bulaşır: stresli bir görev sonrası annenin kalp hızı ve kaçınma tepkisi bebekte yansır (Waters ve ark., 2014)." },
    { from: 1.5, to: 5, name: "Çocukluk", sub: "Yetişkin katılımı ihtiyacı",
      task: "Dil ve oyunla çocuk yetişkinin oyununa katılmasını ister. Şefkat yerine sürekli reddedilme 'kötü niyetli dönüşüm'e yol açar: çocuk sevgiye düşmanlıkla yanıt vermeyi öğrenir.",
      ms: ["Dil", "Yetişkinle oyun", "Kurallarla tanışma"],
      good: "İşbirliği", risk: "Kötü niyetli dönüşüm",
      neuro: "Dil ve sosyal öğrenmenin hızlanması; ebeveyn tamponlaması stres sistemini düzenler." },
    { from: 5, to: 8.5, name: "Jüvenil dönem", sub: "Akran kabulü",
      task: "Okulda akranlarla rekabet, uzlaşma ve işbirliği öğrenilir; toplumsal kalıplar ve dışlanma deneyimi başlar.",
      ms: ["Okula başlama", "Akran grubu", "Rekabet ve uzlaşma"],
      good: "Sosyal uyum", risk: "Dışlanma, yalnızlık",
      neuro: "Sosyal dışlanma, fiziksel acıyla örtüşen ağları (ön singulat, insula) etkinleştirir." },
    { from: 8.5, to: 12, name: "Ön ergenlik", sub: "Can dostu",
      task: "Aynı cinsten yakın bir arkadaşla ilk gerçek sevgi: diğerinin mutluluğu kendininki kadar önemli hale gelir. Sullivan'a göre bu ilişki önceki örselenmeleri onarabilir.",
      ms: ["Yakın, eşit dostluk", "Sır paylaşımı", "Karşılıklılık"],
      good: "Yakınlık kapasitesi, onarım", risk: "Yalnızlık (Sullivan'a göre en acı deneyim)",
      neuro: "Sosyal ödül ve sosyal acıya duyarlılık artar; puberte öncesi sosyal beyin ağları (mPFC, TPJ) yeniden düzenlenir." },
    { from: 12, to: 15, name: "Erken ergenlik", sub: "Şehvet dinamizmi",
      task: "Cinsel ihtiyaç, yakınlık ve güvenlik ihtiyaçlarıyla çatışabilir; ilişkiler bu üç ihtiyacı birleştirmeye çalışır.",
      ms: ["Cinsel ilginin uyanması", "Karşı ya da aynı cinse yönelim", "Güvenlik-yakınlık-şehvet çatışması"],
      good: "Bütünleşik ilişki arayışı", risk: "Cinsellik ile yakınlığın ayrışması",
      neuro: "Gonadal hormonlar limbik ve ödül sistemini yeniden şekillendirir." },
    { from: 15, to: 21, name: "Geç ergenlik", sub: "Olgun ilişkiler",
      task: "Kalıcı cinsel ve duygusal bağın kurulması, toplumsal yaşama tam katılım.",
      ms: ["Kalıcı romantik ilişki", "İş ve toplumsal roller"],
      good: "Olgun kişilerarası yaşam", risk: "Yalıtılmışlık",
      neuro: "Prefrontal-limbik bağlantıların güçlenmesi ilişkilerde duygu düzenlemesini kolaylaştırır." }
  ],
  bio: [
    "Sullivan'ın 'kaygı bulaşması' fikri, anne ve bebek arasında stresin fizyolojik olarak aktarıldığını gösteren deneylerle desteklenir.",
    "Akran dışlanmasının biyolojik gerçekliği Cyberball deneyleriyle gösterilmiştir; ergenler dışlanmaya yetişkinlerden daha güçlü tepki verir (Sebastian ve ark., 2010)."
  ],
  crit: [
    "Yaş sınırları gevşektir ve kuram büyük ölçüde heteroseksüel ve erkek gelişimi üzerinden kurulmuştur.",
    "Kuramın kendisi doğrudan sınanmamıştır, ama arkadaşlık araştırmaları can dostu hipotezini genel olarak destekler."
  ],
  exps: ["buhrmester87", "cyberball03"]
},
{
  id: "marcia", fam: "pss", name: "Kimlik statüleri", who: "James Marcia", years: "1966", rare: true,
  core: "Erikson'un kimlik krizi iki boyutla ölçülebilir: keşif (seçenekleri araştırmak) ve bağlanma (bir seçime adanmak). Bu iki boyut dört kimlik statüsü verir. Statüler katı evreler değil, yaşam boyu değişebilen konumlardır.",
  engine: "Keşif ve bağlanma; meslek, ideoloji ve ilişkiler alanlarında.",
  method: "Yarı yapılandırılmış Kimlik Statüsü Görüşmesi; sonradan ölçekler (EOM-EIS).",
  ev: 4, evNote: "Yüzlerce çalışmada ölçülmüştür. Meta-analiz, ergenlik ve genç yetişkinlikte ilerleyici değişimi ama aynı zamanda büyük bireysel farkları gösterir.",
  labels: ["Tipik özellik", "Risk"],
  stages: [
    { from: 12, to: 15, name: "Kimlik dağınıklığı", sub: "Keşif yok, bağlanma yok",
      task: "Genç ne seçenekleri araştırır ne de bir yöne adanır.",
      ms: ["Kararsızlık", "Sorumluluktan kaçınma"],
      good: "Erken ergenlikte normatiftir", risk: "Apati, düşük benlik saygısı, madde kullanımı",
      neuro: "Erken ergenlikte kendilik temsilleri henüz parçalıdır; kendilikle ilgili düşünme ağları (mPFC, PCC) gelişmektedir." },
    { from: 12, to: 18, name: "İpotekli kimlik", sub: "Keşif yok, bağlanma var",
      task: "Ebeveynin ya da topluluğun değerleri sorgulanmadan benimsenir.",
      ms: ["Aileden devralınan meslek ve değerler", "Düşük kaygı"],
      good: "Düşük kaygı, istikrar", risk: "Katılık, otoriteye bağımlılık",
      neuro: "Ebeveyn tamponlamasının sürdüğü ve akran etkisinin henüz baskın olmadığı dönemle uyumludur." },
    { from: 15, to: 22, name: "Moratoryum", sub: "Keşif var, bağlanma yok",
      task: "Aktif kriz: seçenekler denenir ama henüz bağlanılmaz. Moratoryumdaki gençlerin oranı ~19 yaşa kadar artar, sonra düşer.",
      ms: ["Fikir, ilişki ve meslek denemeleri", "Yüksek kaygı"],
      good: "Esneklik, keşif", risk: "Uzayan kaygı ve kararsızlık",
      neuro: "Duyum aramanın zirvesi (~19 yaş) ve ödül sisteminin yüksek duyarlılığıyla örtüşür." },
    { from: 18, to: 30, name: "Başarılı kimlik", sub: "Keşif sonrası bağlanma",
      task: "Seçenekler araştırıldıktan sonra bilinçli bir bağlılık kurulur. Bu yaşam boyu yeniden açılabilir (moratoryum-başarı döngüsü).",
      ms: ["Tutarlı değerler", "Meslek ve ilişki bağlılıkları"],
      good: "Yüksek benlik saygısı, olgun ilişkiler", risk: "Yaşam olaylarıyla yeniden açılan kriz",
      neuro: "Prefrontal kontrolün ve uzun mesafeli beyaz cevher bağlantılarının olgunlaşması tutarlı uzun vadeli hedefleri destekler." }
  ],
  bio: [
    "Kimlik keşfinin yoğunlaştığı yıllar, sosyal değerlendirmeye ve ödüle duyarlılığın en yüksek olduğu ergen beyni dönemiyle örtüşür. Kendilikle ilgili düşünmede medial prefrontal korteks ergenlerde yetişkinlere göre daha etkindir."
  ],
  crit: [
    "Statüler bir anın fotoğrafıdır ve bireyler arasında dalgalanır. Meta-analize göre gençlerin önemli bir kısmı genç yetişkinlikte bile başarılı kimliğe ulaşmamıştır.",
    "Model bireyci kültürlere göre kurulmuştur. Yeni 'çift döngü' modelleri (Luyckx, Crocetti) keşfi derinlemesine ve ruminatif keşif olarak ayırarak modeli genişletir."
  ],
  exps: ["marcia66"]
},
{
  id: "arnett", fam: "pss", name: "Beliren ve yerleşik yetişkinlik", who: "Jeffrey Arnett", years: "2000 / 2020", rare: true,
  core: "Sanayileşmiş toplumlarda 18-29 yaşları ne ergenlik ne de tam yetişkinliktir; kendi başına bir gelişim dönemidir. 2020'de Arnett ve arkadaşları 30-45 yaşları için 'yerleşik yetişkinlik' kavramını önerdiler: kariyer ve bakım sorumluluklarının yoğunlaştığı 'kritik dönem'.",
  engine: "Toplumsal-ekonomik değişim (uzayan eğitim, geç evlilik ve ebeveynlik) ile kişisel keşif.",
  method: "Görüşmeler ve ulusal anketler (Clark Poll).",
  ev: 2, evNote: "Betimleyici anket verileri güçlüdür, ama bunun evrensel bir gelişim dönemi mi yoksa ekonomik koşulların ürünü mü olduğu tartışmalıdır.",
  labels: ["Fırsat", "Risk"],
  stages: [
    { from: 18, to: 29, name: "Beliren yetişkinlik", sub: "Beş özellik",
      task: "Kimlik keşfi, istikrarsızlık (taşınma, iş değiştirme), kendine odaklanma, arada kalmışlık hissi ve olasılıklar ile iyimserlik.",
      ms: ["Ebeveyn evinden ayrılma", "Eğitim ve iş denemeleri", "'Kendimi yetişkin hissediyorum ama tam değil'"],
      good: "Keşif, esneklik, iyimserlik", risk: "Ruhsal bozuklukların başlangıç zirvesi; belirsizlik kaygısı",
      neuro: "Beyaz cevher hacmi ~29 yaşta zirve yapar; öz-düzenleme 20'lerin ortasına kadar artar. Ruhsal bozuklukların %62,5'i 25 yaşından önce başlar." },
    { from: 30, to: 45, name: "Yerleşik yetişkinlik", sub: "Kariyer ve bakım sıkışması",
      task: "Kariyerde ilerleme, partnerlik ve çocuk bakımı aynı yıllara sıkışır: 'kariyer ve bakım sıkışması'.",
      ms: ["Kariyer basamakları", "Çocuk bakımı", "Ev ve maddi yükümlülükler"],
      good: "Yetkinlik ve üretkenlik", risk: "Zaman baskısı, tükenmişlik, iş-aile çatışması",
      neuro: "Ebeveynlik beyindeki sosyal biliş ağlarını yeniden düzenler; kronik stres HPA eksenini ve uyku düzenini etkiler." }
  ],
  bio: [
    "Arnett'in dönemi biyolojik olarak da anlamlıdır: prefrontal miyelinizasyon, frontostriatal kontrol devrelerinin olgunlaşması ve beyaz cevherin zirvesi 20'li yaşlara uzanır. Yine de 'beyin 25'te olgunlaşır' ifadesi aşırı basitleştirmedir."
  ],
  crit: [
    "Dönem yalnızca uzun eğitimin ve geç evliliğin yaygın olduğu orta sınıf bağlamlar için geçerlidir. Düşük gelirli ortamlarda yetişkin rolleri çok daha erken başlar.",
    "Côté gibi eleştirmenlere göre bu bir gelişim evresi değil, ekonomik yapının (güvencesiz iş, uzayan eğitim) yarattığı bir durumdur."
  ],
  exps: ["steinberg18", "bethlehem22", "solmi22"]
}
);
