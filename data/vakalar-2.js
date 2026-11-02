/* Vaka modu (2): okul çağından yaşlılığa eğitim amaçlı kurgusal vakalar ve vaka kaynakları. */
ATLAS.cases.push(
{
  id: "yas9", age: 9.5, ageLabel: "9 yaş 6 ay", band: "a7", tags: ["Yas", "Ayrılık kaygısı", "Aile"],
  title: "Dokuz yaşında: annesinin ölümünden sonra",
  ask: "Babası, 9 yaş 6 aylık kızının annesini sekiz ay önce bir trafik kazasında kaybettiğini, karın ağrıları nedeniyle okula gitmek istemediğini söylüyor.",
  steps: [
    { h: "Başvuru", text: "Ölüm ani olmuş; çocuk kazada değilmiş. 'Üzülmesin' diye cenazeye götürülmemiş. İlk aylarda 'iyi görünüyormuş'; üçüncü aydan sonra karın ağrıları, okula gitmeme, babasından ayrılamama ve geceleri babasının odasında uyuma başlamış. Babası işe döndüğünde sık sık telefon ediyor ve 'Sana da bir şey olacak mı?' diye soruyor.",
      q: "Bu tablo normal yas, uzamış yas, ayrılık kaygısı ve travma sonrası stres bozukluğu arasında nerede duruyor?" },
    { h: "Öykü", text: "Annesinin eşyalarını odasında saklıyor, hayalinde onunla konuşuyor ve rüyasında görüyor. Okul başarısı düşmüş. Arkadaşlarıyla oyunlara katılıyor, ama annesinden söz edilince susuyor. Kazayla ilgili zorlayıcı imgeler yok. Babası kendi yasını 'çocuğun önünde göstermiyor'; uykusuz ve alkol kullanımı artmış.",
      q: "Annesiyle hayalinde konuşması ve eşyalarını saklaması patoloji midir?" },
    { h: "Görüşme", text: "Annesinden söz ederken ağlıyor, sonra rahatlıyor. 'Annem öldü, bir daha gelmeyecek' diyor. Kazanın kendi suçu olduğunu düşünüyor: 'O sabah onu kızdırmıştım, dikkati dağıldı.' Kendine zarar verme düşüncesi olmadığını söylüyor, ama bir kez 'Annemin yanına gitmek istiyorum' dediği öğreniliyor.",
      q: "'Annemin yanına gitmek istiyorum' cümlesi nasıl değerlendirilmeli?" },
    { h: "Ek bilgi", text: "Pediatrik değerlendirmede karın ağrıları için organik bir neden saptanmamış. Okul rehberlik servisi iş birliğine hazır." }
  ],
  findings: [
    ["Annesinin eşyalarını saklama, hayalinde onunla konuşma", "norm", "Ölüyle süregiden bağlar çocuklarda sıktır ve çoğunlukla uyum sağlayıcıdır."],
    ["Ölümün geri dönüşsüz olduğunu anlaması", "norm", "Ölüm kavramının geri dönüşsüzlük, işlevin durması ve evrensellik bileşenleri çoğunlukla 5-7 yaşlarında kavranır (Speece ve Brent, 1984)."],
    ["Kendini suçlama", "izle", "Yasta sık görülür; çocuğun yanlış nedensellik inancı açık ve somut biçimde ele alınmalıdır."],
    ["Okula gitmeme, babadan ayrılamama, ona bir şey olacağı korkusu", "bayrak", "Ayrılık kaygısı belirtileri işlevselliği bozuyor ve dört haftadan uzun sürüyor (DSM-5-TR'de çocuklar için süre ölçütü)."],
    ["Organik nedeni olmayan karın ağrıları", "izle", "Kaygının bedensel ifadesi olabilir; okula gitmemenin pekiştiricisi hâline gelebilir."],
    ["'Annemin yanına gitmek istiyorum'", "bayrak", "Yaslı çocuklarda ölüye kavuşma isteği sık dile getirilir; intihar düşüncesi açık ve doğrudan sorularla değerlendirilmelidir."],
    ["Babanın yasını saklaması, uykusuzluk ve artan alkol kullanımı", "bayrak", "Hayatta kalan ebeveynin uzamış yası ve ruh sağlığı, çocukta depresyon riskini artırır (Melhem ve ark., 2011)."],
    ["Cenazeye götürülmemesi", "izle", "Tek başına patoloji değildir; yaşa uygun hazırlıkla veda ritüellerine katılım genellikle önerilir."]
  ],
  lenses: [
    ["bowlby", "Bowlby çocukların yasa yetişkinlerden daha az değil, farklı biçimde tepki verdiğini savundu. Ona göre sağlıklı yas, gerçeğin açık ve doğru biçimde anlatılmasına ve güvenilir bir yetişkinin desteğine bağlıdır; bilginin saklanması yası 'dondurur'. Ayrılık kaygısı, kalan bağlanma figürünü de kaybetme korkusunun anlaşılır bir uzantısıdır."],
    ["piaget", "Somut işlemler dönemi: ölüm kavramının bileşenleri kavranmıştır. Ancak kendini suçlama, olaylar arasında yanlış nedensel bağlar kurma eğilimini yansıtır ve açıkça konuşulmalıdır."],
    ["erikson", "Çalışkanlığa karşı aşağılık duygusu: okul başarısının düşmesi ve okula gitmeme, yetkinlik deneyiminin kesintiye uğraması anlamına gelir. Okula dönüş tedavinin bir parçasıdır."],
    ["afreud", "Anna Freud ve Dorothy Burlingham'ın savaş yıllarındaki gözlemleri, çocukların tehlikeye ve kayba tepkisinin onlara bakan yetişkinin tepkisinden güçlü biçimde etkilendiğini gösterdi. Babanın yasını gizlemesi çocuğa 'bu konu konuşulamaz' mesajı verebilir."],
    ["winnicott", "Geçiş nesneleri ve geçiş alanı: annenin eşyaları ve hayali konuşmalar iç ve dış gerçeklik arasında bir ara alan sağlar. Bu nesneler kaldırılmamalıdır. Winnicott'un evreleri bu yaşı kapsamaz; kavram düzeyinde bir okumadır."],
    ["sullivan", "Ön ergenlikte yakın arkadaş gereksinimi başlar. Sullivan'a göre bu dönemde kurulan yakınlık, aile içindeki güçlüklerin bazı etkilerini onarabilir; arkadaşlıklar yas sırasında önemli bir koruyucu kaynaktır."]
  ],
  brain: { regions: ["amygdala", "hypothalamus", "hippocampus", "mpfc"],
    text: "Kayıp, hipotalamus-hipofiz-adrenal ekseni ve stres sistemlerini etkinleştirir. Okul çağındaki çocuklarda ebeveyn desteği kortizol tepkisini tamponlamaya devam eder; bu etki ergenlikte zayıflar (Hostinar ve ark., 2015). Bu nedenle kalan ebeveynin ulaşılabilir ve düzenli olması bu yaşta biyolojik açıdan da önemlidir." },
  ddx: [
    ["Beklenen yas tepkisi", "Tanı değil", "Ağlama ve ardından rahatlama, süregiden bağlar, akranlarla oyuna katılım.", "İşlevsellik belirgin biçimde bozulmuş."],
    ["Ayrılık kaygısı bozukluğu", "DSM-5-TR", "Okula gitmeme, babadan ayrılamama, ona zarar geleceği korkusu, bedensel yakınmalar, dört haftadan uzun süre.", "Kayıp bağlamında anlaşılır bir tepki; yine de işlev bozukluğu varsa tanı konur ve tedavi edilir."],
    ["Uzamış yas bozukluğu", "DSM-5-TR", "Yoğun özlem ve ölüyle uğraş; ölümden bu yana sekiz ay geçmiş.", "Çocuk ve ergenlerde ölümden en az altı ay sonra, belirtilerin son bir ayda neredeyse her gün sürmesi gerekir. Kimlik bozulması, duygusal uyuşma ve yaşamın anlamsızlığı gibi belirtiler ayrıca sorgulanmalıdır."],
    ["Travma sonrası stres bozukluğu", "DSM-5-TR", "Yakın bir aile üyesinin kazayla ölümünü öğrenmek travmatik olay ölçütünü karşılayabilir.", "Yeniden yaşantılama ve kazaya ilişkin hatırlatıcılardan kaçınma belirtileri yok."],
    ["Majör depresif bozukluk", "DSM-5-TR", "Okul başarısında düşüş, uyku sorunları.", "Oyunlardan zevk alma ve akran ilişkileri korunmuş; yakın izlem gerekir."],
    ["Somatik belirti bozukluğu", "DSM-5-TR", "Organik nedeni olmayan karın ağrıları.", "Yakınmalar kaygı ve yas bağlamında anlaşılır; somatik belirtilerle aşırı uğraş yok."]
  ],
  tools: [
    ["Karmaşık Yas Envanteri'nin çocuk sürümü (ICG-RC)", "Çocuk ve ergenlerde yas tepkilerinin şiddeti ve seyri."],
    ["UCLA Travma Sonrası Stres Bozukluğu Tepki İndeksi (DSM-5 sürümü)", "Çocuk ve ebeveyn formları."],
    ["Çocuklarda Anksiyete Bozukluklarını Tarama Ölçeği (SCARED)", "Ayrılık kaygısı alt ölçeği dahil; Türkçe sürümü var."],
    ["Çocuklar için Depresyon Ölçeği (ÇDÖ)", "Türkçe sürümü var."],
    ["ASQ ya da C-SSRS ile intihar riski taraması", "'Annemin yanına gitmek istiyorum' cümlesinin açık sorularla değerlendirilmesi."],
    ["Babada depresyon, uzamış yas ve alkol kullanımı değerlendirmesi", "PHQ-9 ve AUDIT; gerekirse yönlendirme."]
  ],
  plan: [
    "Güvenlik: ölüm ve intihar düşüncelerinin açık sorularla değerlendirilmesi.",
    "Doğru ve yaşa uygun bilgi: kazanın kimsenin, özellikle de onun suçu olmadığının açıkça söylenmesi.",
    "Okula kademeli dönüş planı: ayrılık kaygısı için BDT ilkeleri, okulla iş birliği ve gün içinde babaya ulaşma kurallarının birlikte belirlenmesi.",
    "Yas ve travma odaklı BDT bileşenleri (ör. TF-CBT'nin çocukluk çağı travmatik yas modülleri).",
    "Aile temelli müdahale: babanın ebeveynlik becerileri ve kendi ruh sağlığı. Aile Yas Programı'nın randomize çalışmasında program ebeveynliği, başa çıkmayı ve bakımverenin ruh sağlığını iyileştirdi; izlemde içe ve dışa yönelim sorunlarındaki azalma kızlarda ve başlangıçta sorunları yüksek olanlarda görüldü (Sandler ve ark., 2003).",
    "Anma ritüelleri: mezar ziyareti, anı kutusu, annenin hikâyelerinin aile içinde anlatılması."
  ],
  synth: "Bu çocuğun yası durmamış, ama iki etkenle karmaşıklaşmış: kalan ebeveyni de kaybetme korkusuyla beslenen ayrılık kaygısı ve konuşulamayan bir yas ortamı (babanın yasını saklaması, çocuğun yanlış suçluluk inancı). Formülasyon şu: normal bir yas süreci üzerine binen ayrılık kaygısı bozukluğu; uzamış yas açısından izlem. Tedavide çocuk ve baba birlikte ele alınır ve okula dönüş öncelikli hedeftir.",
  pearls: [
    "Çocuklar yas tutmak için 'fazla küçük' değildir; yas farklı biçimde ve dalgalar hâlinde seyreder.",
    "DSM-5-TR'de uzamış yas bozukluğu için zaman ölçütü çocuk ve ergenlerde ölümden en az altı ay sonrasıdır.",
    "Kalan ebeveynin ruh sağlığı, yaslı çocuğun gidişini belirleyen ve değiştirilebilen en önemli etkenlerdendir."
  ],
  qs: [
    "Bowlby'nin çocukların yası hakkındaki görüşleri, kendi döneminin psikanalitik görüşlerinden nasıl ayrılıyordu?",
    "Süregiden bağlar ile uzamış yasın 'ölüyle uğraş' belirtisi nasıl ayırt edilir?",
    "Cenazeye götürülmeme kararı hakkında babaya ne söylerdiniz?"
  ],
  exps: ["speece84", "robertson52", "freuddann51"],
  refs: ["speece84", "melhem11", "sandler03", "hostinar15"]
},
{
  id: "kesik14", age: 14.5, ageLabel: "14 yaş 6 ay", band: "a8", tags: ["Kendine zarar verme", "İntihar riski", "Ergenlik"],
  title: "On dört yaşında: kollarda kesikler",
  ask: "Okul rehber öğretmeni, 14 yaş 6 aylık kız öğrencinin kollarında yüzeysel kesikler fark ediyor; aile onu acil servise getiriyor.",
  steps: [
    { h: "Başvuru", text: "Altı aydır ara ara jiletle ön kolunu kesiyor; son bir ayda haftada 3-4 kez. 'Kesince içimdeki baskı geçiyor' diyor. Erkek arkadaşından ayrıldıktan sonra artmış. Sosyal medyada kendine zarar verme içerikleri paylaşılan bir gruba üye.",
      q: "İlk görüşmede mutlaka sormanız gereken sorular nelerdir?" },
    { h: "Öykü", text: "Son iki ayda üzgün ve uykusuz, ders başarısı düşmüş. 'Ölsem kimse fark etmez' düşünceleri var; plan ya da girişim yok. İlkokulda uzun süre akran zorbalığına uğramış. Annesiyle sık çatışıyor; babası yurt dışında çalışıyor. Ara sıra alkol kullanıyor, başka madde yok. Son aylarda öğün atlıyor.",
      q: "Kendine zarar verme ile intihar riski arasındaki ilişki nasıl değerlendirilmeli?" },
    { h: "Görüşme", text: "Göz teması iyi; duygulanım çökkün ve değişken. İlişkilerinde 'ya hep ya hiç' örüntüsü ve sürekli bir boşluk duygusu tanımlıyor. Kesikler yüzeysel ve enfeksiyon bulgusu yok. ASQ taraması pasif ölüm düşünceleri nedeniyle pozitif; C-SSRS'de aktif intihar düşüncesi, plan ve girişim yok.",
      q: "Gizlilik ile güvenlik arasındaki dengeyi bu ergenle nasıl kurarsınız?" },
    { h: "Ek bilgi", text: "Annesi 'dikkat çekmek için yapıyor' diye düşünüyor. Okul, rehberlik görüşmelerinin sürmesi için velinin onayını istiyor." }
  ],
  findings: [
    ["Altı aydır, son ayda haftada 3-4 kez kendini kesme", "bayrak", "DSM-5-TR'de daha ileri araştırma gerektiren durumlar arasında yer alan intihar dışı kendine zarar verme için önerilen ölçüt, son bir yılda en az beş gün kendine zarar vermektir."],
    ["'Kesince baskı geçiyor'", "izle", "En sık bildirilen işlev olumsuz duyguların azaltılmasıdır; davranış bu rahatlamayla pekişir."],
    ["Pasif ölüm düşünceleri", "bayrak", "İntihar dışı kendine zarar verme, sonraki intihar girişimleri için güçlü bir risk etkenidir; pasif düşünceler de güvenlik planı gerektirir."],
    ["Sosyal medyada kendine zarar içerikli grup", "izle", "Sosyal bulaşma ve davranışın normalleşmesi; aynı zamanda bir aidiyet arayışı."],
    ["İlkokulda akran zorbalığı", "izle", "Kendine zarar verme ve depresyon için bilinen bir risk etkeni."],
    ["İlişkilerde 'ya hep ya hiç' örüntüsü ve boşluk duygusu", "izle", "Beliren sınır kişilik özellikleri düşündürebilir; DSM-5-TR 18 yaşından önce tanıya, belirtiler en az bir yıl sürmüşse izin verir."],
    ["Öğün atlama", "izle", "Yeme davranışı ayrıca taranmalıdır."],
    ["Annenin 'dikkat çekmek için' yorumu", "izle", "Geçersizleyici bir aile ortamı DBT'nin biyososyal modelinde temel etkenlerden biridir; aileyle çalışmanın hedefidir."]
  ],
  lenses: [
    ["ikilisistem", "Ergenlikte duygusal uyarılma ve ödülle ilişkili sistemler (ventral striatum, amigdala) bilişsel denetim sistemlerinden (prefrontal korteks) daha erken olgunlaşır. Yoğun duygu anlarında kısa vadeli rahatlama sağlayan davranışlar daha olasıdır ve akran bağlamı bu eğilimi artırır (Chein ve ark., 2011)."],
    ["blos", "İkinci bireyleşme süreci: ergen ebeveyn imgelerinden duygusal olarak ayrışırken yoğun yalnızlık, boşluk ve ilişkilere aşırı yatırım görülebilir. Ayrılık sonrası artan kendine zarar verme, bireyleşme sürecinde kaybın taşınamaması olarak okunabilir."],
    ["erikson", "Kimliğe karşı rol karmaşası: sosyal medya grubu 'kendini kesen biri' gibi olumsuz bir kimliğe geçici bir aidiyet sağlayabilir. Erikson'un 'olumsuz kimlik' kavramı bu açıdan açıklayıcıdır."],
    ["fonagy", "Zihinselleştirme yoğun bağlanma uyarılması altında çöker. 'Teleolojik kipte' yalnızca fiziksel ve görünür olan değişiklik anlamlı sayılır; iç durum beden üzerinden düzenlenir. Zihinselleştirmeye dayalı ergen tedavisi (MBT-A), kendine zarar veren ergenlerde kendine zarar vermeyi ve depresyonu azaltmıştır (Rossouw ve Fonagy, 2012)."],
    ["kernberg", "Kişilik örgütlenmesi açısından kimlik dağınıklığı ve bölme gibi ilkel savunmalar değerlendirilir. Kernberg'e göre normatif ergenlik kimlik krizinde benliğe ve ötekilere ilişkin bütünleşik bir algı korunur; kimlik dağınıklığında korunmaz. Bu ayrım ergenlikte dikkatle yapılmalıdır."],
    ["sullivan", "Erken ergenlikte yakınlık gereksinimi ile cinsel ilgi çatışabilir. İlk romantik ilişkinin bitmesi, Sullivan'ın vurguladığı kişilerarası güvenlik duygusunu derinden sarsabilir."]
  ],
  brain: { regions: ["amygdala", "striatum", "dlpfc", "acc"],
    text: "Ergenlikte sosyal değerlendirmeye ve dışlanmaya duyarlılık artar; Cyberball çalışmalarında dışlanma ön singulat korteks etkinliğiyle ilişkilendirilmiştir. Kendine zarar verme sonrası yaşanan rahatlamayı ağrı ve duygu düzenleme ağlarının (ön singulat korteks, insula) örtüşmesiyle açıklayan modeller vardır; bu açıklamalar büyük ölçüde kuramsal düzeydedir." },
  ddx: [
    ["İntihar dışı kendine zarar verme", "DSM-5-TR", "Son bir yılda beş günden fazla, intihar niyeti olmadan kendini kesme; gerginliği azaltma işlevi.", "DSM-5-TR'de ayrı bir tanı değil, daha ileri araştırma gerektiren bir durumdur; intihar niyeti her zaman ayrıca değerlendirilir."],
    ["Majör depresif bozukluk", "DSM-5-TR", "İki aydır çökkünlük, uykusuzluk, başarıda düşüş, ölüm düşünceleri.", "Hipomanik dönemler ve eşlik eden durumlar dışlanmalıdır."],
    ["Beliren sınır kişilik bozukluğu", "DSM-5-TR", "İlişkilerde istikrarsızlık, boşluk duygusu, kendine zarar verme, ayrılığa yoğun tepki.", "18 yaşından önce tanı için belirtilerin en az bir yıl sürmesi gerekir; damgalamadan kaçınılarak boyutsal olarak değerlendirilir."],
    ["Travma ve stresle ilişkili bozukluklar", "DSM-5-TR", "Uzun süreli zorbalık öyküsü.", "İstismar dahil diğer travmatik yaşantılar güvenli bir ortamda ayrıca sorgulanmalıdır."],
    ["Yeme bozukluğu", "DSM-5-TR", "Öğün atlama.", "Beden algısı, kilo değişimi ve telafi davranışları sorgulanmalıdır."],
    ["Alkol ya da madde kullanım bozukluğu", "DSM-5-TR", "Ara sıra alkol kullanımı.", "Sıklık ve kendine zarar verme ile ilişkisi CRAFFT ile değerlendirilir."],
    ["Bipolar bozukluk", "DSM-5-TR", "Duygulanımda değişkenlik.", "Belirgin hipomanik dönem öyküsü yok; aile öyküsü sorgulanmalıdır."]
  ],
  tools: [
    ["ASQ (Ask Suicide-Screening Questions)", "Dört soruluk kısa tarama; pediatrik acil serviste geliştirilmiş, duyarlılığı ve negatif öngörü değeri yüksektir (Horowitz ve ark., 2012)."],
    ["Columbia İntihar Şiddeti Derecelendirme Ölçeği (C-SSRS)", "Düşünce, niyet, plan ve davranışın yapılandırılmış değerlendirmesi."],
    ["HEEADSSS psikososyal görüşmesi", "Ev, eğitim, etkinlikler, madde, cinsellik, intihar ve depresyon, güvenlik başlıklarıyla ergen görüşmesi."],
    ["Kendine zarar verme işlevleri ölçeği (ör. ISAS)", "Davranışın sıklığı, yöntemleri ve işlevleri."],
    ["PHQ-A ya da Çocuklar için Depresyon Ölçeği", "Depresif belirti şiddeti ve izlem."],
    ["CRAFFT", "Ergenlerde alkol ve madde kullanımı taraması."]
  ],
  plan: [
    "Güvenlik planı: uyarı işaretleri, başa çıkma yolları, ulaşılabilecek kişiler; ilaçlara ve kesici aletlere erişimin aileyle birlikte azaltılması. Gizliliğin sınırları ergene baştan açıklanır.",
    "Yaraların bakımı ve yargılamayan bir tutum; 'dikkat çekme' yorumunun ergen ve aile üzerindeki geçersizleyici etkisinin ele alınması.",
    "Kanıta dayalı psikoterapi: ergenler için DBT (çok merkezli randomize çalışmada tedavi sonunda intihar girişimi, intihar dışı kendine zarar verme ve toplam kendine zarar vermede destekleyici terapiye üstündü; üstünlük 6-12. aylar arasında azaldı; McCauley ve ark., 2018) ya da MBT-A (Rossouw ve Fonagy, 2012).",
    "Depresyonun tedavisi: psikoterapi; orta-ağır depresyonda fluoksetin düşünülebilir. İlk haftalarda intihar düşünceleri açısından yakın izlem gerekir.",
    "Okulla iş birliği: zorbalık öyküsü, rehberlik servisi ve sosyal medya kullanımının ergenle birlikte gözden geçirilmesi.",
    "Aileyle çalışma: geçersizleyici etkileşimlerin azaltılması ve aile beceri eğitimi."
  ],
  synth: "Kendine zarar verme burada öncelikle bir duygu düzenleme stratejisi. Ancak pasif ölüm düşünceleri, depresif belirtiler ve artan sıklık intihar riskini ciddiye almayı gerektiriyor. Ergenlik döneminin duygusal yoğunluğu, ilk ayrılık deneyimi, zorbalık öyküsü ve geçersizleyici aile etkileşimleri birlikte değerlendirildiğinde tablo, majör depresyon ve beliren duygu düzenleme güçlüğüyle uyumlu. Tedavinin çekirdeği güvenlik planı ve aileyi de içeren yapılandırılmış bir psikoterapidir (DBT ya da MBT-A).",
  pearls: [
    "Kendine zarar vermeyi sormak onu başlatmaz; doğrudan sorun.",
    "'Dikkat çekmek için' yorumu riski küçümser: kendine zarar veren ergenler intihar girişimi için yüksek risk altındadır.",
    "Uluslararası örneklemlerde ergenlerin yaklaşık %17-18'i yaşam boyu en az bir kez kendine zarar verdiğini bildirir (Muehlenkamp ve ark., 2012).",
    "18 yaşından önce sınır kişilik bozukluğu tanısı konabilir, ama belirtilerin en az bir yıl sürmesi ve normatif kimlik arayışından ayırt edilmesi gerekir."
  ],
  qs: [
    "Fonagy'nin 'teleolojik kip' kavramı ile DBT'nin biyososyal modeli kendine zarar vermeyi nasıl farklı açıklar? Tedavide ortak noktaları nelerdir?",
    "Kernberg'in kimlik dağınıklığı ile normatif ergenlik kimlik krizi arasındaki ayrımı bu vakada nasıl yaparsınız?",
    "Sosyal medya grubunun rolünü 'sosyal bulaşma' ve 'aidiyet' kavramlarıyla tartışın."
  ],
  exps: ["chein11", "cyberball03", "bateman09", "carlson98"],
  refs: ["muehlenkamp12", "horowitz12", "mccauley18", "rossouw12", "chein11"]
},
{
  id: "kimlik19", age: 19, ageLabel: "19 yaş", band: "a10", tags: ["Kimlik", "Psikoz riski", "Beliren yetişkinlik"],
  title: "On dokuz yaşında: 'Ne istediğimi bilmiyorum'",
  ask: "Tıp fakültesi birinci sınıf öğrencisi, 19 yaşında erkek; derslere girmiyor ve 'Bu bölümü ailem istedi' diyor. Üniversite sağlık merkezinden yönlendirilmiş.",
  steps: [
    { h: "Başvuru", text: "Başka bir şehirden gelmiş, yurtta kalıyor. Dönem başından beri derslere giderek daha az giriyor ve ilk sınavlarda başarısız olmuş. 'Hayatım başkalarının planı' diyor. Lise yıllarından beri müzikle ilgileniyor ve bölüm değiştirmeyi düşünüyor, ama ailesini 'yıkmaktan' korkuyor.",
      q: "Bu tablo normatif bir kimlik arayışı mı, bir ruhsal bozukluğun başlangıcı mı? Ayırmak için neyi bilmeniz gerekir?" },
    { h: "Öykü", text: "Lisede başarılı ve arkadaş ilişkileri iyiymiş. Son dört ayda arkadaşlarından uzaklaşmış; insanların ona baktığını ve hakkında konuştuğunu hissediyor, ama 'Emin değilim, belki kafamda kuruyorum' diyor. Uyku düzeni bozuk, geceleri oyun oynuyor. Yurtta başladığı esrar kullanımı haftada 3-4 güne çıkmış. Amcasında şizofreni tanısı var.",
      q: "Hangi bilgiler 'kimlik krizi' okumasını değiştirir?" },
    { h: "Görüşme", text: "Kişisel bakımı azalmış, duygulanımı kısıtlı, düşünce akışında hafif dolaylılık var. Varsanı tanımlamıyor; izlendiği hissinin gerçek olmayabileceğini kabul ediyor. Yapılandırılmış değerlendirmede zayıflamış psikotik belirtiler saptanıyor ve son bir yılda işlevsellikte belirgin bir düşüş var.",
      q: "Klinik yüksek risk etiketinin bu gence olası yararları ve zararları nelerdir?" },
    { h: "Ek bilgi", text: "Bölüm değiştirme düşüncesi tutarlı ve uzun süredir var; müzik çalışmalarını sürdürüyor. Aile ile görüşmeye onay veriyor." }
  ],
  findings: [
    ["Bölüm ve gelecek konusunda belirsizlik, ailenin beklentileriyle çatışma", "norm", "Beliren yetişkinlikte kimlik keşfi beklenen bir görevdir (Arnett)."],
    ["Lise yıllarından beri süren tutarlı bir ilgi alanı", "norm", "Etkin bir keşfi, yani moratoryumu düşündürür."],
    ["Arkadaşlardan uzaklaşma, kişisel bakımda azalma ve işlevsellikte düşüş", "bayrak", "Normatif kimlik arayışında işlevsellik genellikle bu ölçüde bozulmaz."],
    ["İçgörünün korunduğu referans fikirleri", "bayrak", "Zayıflamış psikotik belirti; yapılandırılmış değerlendirme gerektirir."],
    ["Amcada şizofreni", "bayrak", "Ailesel yatkınlık."],
    ["Haftada 3-4 gün esrar kullanımı", "bayrak", "Sık esrar kullanımı, özellikle yüksek THC içerikli ürünlerle, psikoz riskini artırır."],
    ["Bozulmuş uyku düzeni", "izle", "Hem belirti hem de kötüleştirici bir etken olabilir."]
  ],
  lenses: [
    ["arnett", "Beliren yetişkinlik kimlik keşfi, istikrarsızlık, kendine odaklanma, 'arada kalmışlık' ve olasılıklar dönemidir. Bu çerçeve, bölüm değiştirme düşüncesini bir belirti olarak değil, dönemin beklenen bir görevi olarak okur."],
    ["marcia", "Lisede ailenin seçimine dayanan ipotekli bir kimlikten aktif keşfin olduğu moratoryuma geçiş. Ancak keşfin eşlik etmediği, kaygısız bir kopukluk dağınıklık statüsünü düşündürür; bu vakadaki işlev kaybı ve geri çekilme bu açıdan dikkat gerektirir.", 2],
    ["erikson", "Kimliğe karşı rol karmaşası ve 'psikososyal moratoryum', yani toplumun gence tanıdığı deneme süresi. Erikson kimlik krizini bir patoloji olarak görmedi; ancak ağır kimlik dağınıklığı tablolarında geçici olarak psikoza benzeyen görünümler olabileceğini yazdı.", 4],
    ["kegan", "Kegan'ın sosyalleşmiş zihinden (3. düzen) kendini yazan zihne (4. düzen) geçiş: kişinin değerlerini ailenin ve çevrenin beklentilerinden ayırabilmesi. Bu geçiş yıllar sürer ve çoğu kişide yirmili yaşlarda tamamlanmaz.", 3],
    ["kagitcibasi", "Özerk-ilişkisel benlik: Türkiye bağlamında aileyle duygusal bağı koruyarak özerklik kazanmak mümkündür; özerklik ile ilişkisellik birbirinin karşıtı değildir. Bölüm kararı aileden kopuş olarak değil, aileyle müzakere olarak çerçevelenebilir."],
    ["ikilisistem", "Ödül sistemlerinin duyarlılığı yirmili yaşların başında da sürer ve beyin hâlâ olgunlaşmaktadır. Bu durum dönemi madde kullanımı açısından duyarlı kılar."]
  ],
  brain: { regions: ["dlpfc", "mpfc", "hippocampus", "striatum"],
    text: "Ruhsal bozuklukların %34,6'sı 14, %48,4'ü 18 ve %62,5'i 25 yaşından önce başlar (Solmi ve ark., 2022); psikotik bozukluklarda başlangıç zirvesi yirmili yaşların başındadır. Ergenlik ve beliren yetişkinlikte prefrontal kortekste süren sinaptik budama, şizofreninin nörogelişimsel modellerinde başlangıç zamanlamasını açıklamak için kullanılır." },
  ddx: [
    ["Normatif kimlik keşfi (moratoryum)", "Tanı değil", "Tutarlı bir ilgi alanı, ailenin beklentileriyle çatışma.", "Belirgin işlev kaybı, sosyal geri çekilme ve referans fikirleri bu açıklamayla örtüşmüyor."],
    ["Zayıflamış psikoz sendromu (klinik yüksek psikoz riski)", "DSM-5-TR", "İçgörünün korunduğu referans fikirleri, son bir yılda işlev düşüşü, aile öyküsü.", "DSM-5-TR'de daha ileri araştırma gerektiren durumlar arasındadır. Klinik yüksek risk grubunda psikoza geçiş riski bir yılda %22, üç yılda %36 olarak bulunmuştur (Fusar-Poli ve ark., 2012); yani çoğu kişi psikoza geçmez."],
    ["Madde kaynaklı psikotik bozukluk", "DSM-5-TR", "Sık esrar kullanımı.", "Belirtilerin madde kullanımıyla zamansal ilişkisi ve bırakınca seyri değerlendirilir."],
    ["Majör depresif bozukluk", "DSM-5-TR", "Geri çekilme, motivasyon kaybı, uyku bozukluğu.", "Çökkün duygudurum ve anhedoni ayrıca sorgulanmalıdır."],
    ["Sosyal anksiyete bozukluğu", "DSM-5-TR", "'İnsanlar bana bakıyor' hissi.", "Sosyal kaygıda olumsuz değerlendirilme korkusu vardır; referans fikirlerinde ise kişi kendisiyle ilgili gizli bir anlam yükler."],
    ["Uyum bozukluğu", "DSM-5-TR", "Yeni şehir, yurt yaşamı, akademik başarısızlık.", "Zayıflamış psikotik belirtileri açıklamaz."]
  ],
  tools: [
    ["CAARMS ya da SIPS", "Klinik yüksek psikoz riskinin yapılandırılmış değerlendirmesi (Yung ve ark., 2005)."],
    ["PHQ-9 ve GAD-7", "Depresyon ve kaygı belirtileri."],
    ["AUDIT ve CUDIT-R", "Alkol ve esrar kullanımının taranması."],
    ["SOFAS", "Sosyal ve mesleki işlevselliğin izlenmesi."],
    ["Kimlik gelişimi ölçekleri (araştırma)", "Kimlik Statüsü Görüşmesi; Kimlik Gelişiminin Boyutları Ölçeği (DIDS)."]
  ],
  plan: [
    "İki yönlü çerçeve: hem kimlik ve kariyer danışmanlığı hem de psikiyatrik izlem.",
    "Erken müdahale ya da klinik yüksek risk hizmetine yönlendirme ve düzenli izlem; psikoz riski yüksek bireylere yönelik BDT, aile desteği, eşlik eden depresyon ve madde kullanımının tedavisi. Tam psikotik tablo yokken antipsikotik ilaç genellikle birinci seçenek değildir.",
    "Esrar kullanımını azaltma ya da bırakma: motivasyonel görüşme.",
    "Uyku düzeninin düzenlenmesi.",
    "Gencin onayıyla aile görüşmesi: bölüm kararının bir krize dönüşmesini önlemek için özerk-ilişkisel bir çerçeve.",
    "Akademik danışmanlık: kayıt dondurma ya da bölüm değiştirme seçeneklerinin aceleye getirilmeden değerlendirilmesi."
  ],
  synth: "İki öykü iç içe: biri gelişimsel (ailenin seçtiği bir kimlikten kendi seçtiği kimliğe geçiş), diğeri klinik (işlev kaybı, referans fikirleri, aile öyküsü ve sık esrar kullanımı). Kimlik arayışını patoloji olarak görmemek kadar, onu psikoz riskini gözden kaçırmanın gerekçesi yapmamak da önemlidir. Formülasyon şu: normatif bir moratoryum süreci içinde klinik yüksek psikoz riski ölçütlerini karşılayan bir tablo. Öncelikler izlem, esrar kullanımının azaltılması ve psikososyal müdahaledir.",
  pearls: [
    "'Normal ergenlik ya da gençlik krizi' açıklaması, işlevsellikteki belirgin düşüşü açıklamaz.",
    "Klinik yüksek risk grubundakilerin çoğu psikoza geçmez; etiketin getirebileceği damgalama dikkatle yönetilmelidir.",
    "Özerklik, ilişkisellikten vazgeçmek demek değildir (Kağıtçıbaşı)."
  ],
  qs: [
    "Marcia'nın kimlik dağınıklığı statüsü ile prodromal geri çekilme nasıl ayırt edilir?",
    "Erikson'un psikososyal moratoryum kavramı Türkiye'deki üniversite sınavı ve bölüm seçimi sistemi açısından ne anlama gelir?",
    "Kimlik statüleri meta-analizi, ergenlik ve gençlikte kimliğin ne kadar değiştiğini gösteriyor? Bu vakayı nasıl etkiler?"
  ],
  exps: ["marcia66", "solmi22", "kagitcibasi05", "bethlehem22"],
  refs: ["fusarpoli12", "yung05", "kroger10", "solmi22"]
},
{
  id: "cekilme76", age: 76, ageLabel: "76 yaş", band: "a13", tags: ["Yaşlılık", "Yas ve depresyon", "Bilişsel yakınma"],
  title: "Yetmiş altı yaşında: 'Artık kimseyi görmek istemiyorum'",
  ask: "Kızı, 76 yaşındaki emekli öğretmen babasının, eşinin ölümünden on ay sonra eve kapandığını, arkadaşlarıyla görüşmediğini ve unutkanlaştığını söylüyor.",
  steps: [
    { h: "Başvuru", text: "Eşi uzun bir kanser sürecinin ardından ölmüş; bakımını kendisi üstlenmiş. Kahvehaneye ve derneğe gitmeyi bırakmış, ama torunlarıyla ve iki yakın arkadaşıyla görüşmeyi sürdürüyor. 'Kalabalıklar yoruyor, artık önemli olan birkaç kişi' diyor. Kızı onun depresyonda olduğunu düşünüyor.",
      q: "Sosyal ağın daralması her zaman bir depresyon belirtisi midir?" },
    { h: "Öykü", text: "İştahı azalmış ve beş kilo vermiş, sabahları çok erken uyanıyor, 'Artık bir işe yaramıyorum' diyor. Telefonda konuşmaları kaçırıyor, televizyonun sesini yükseltiyor. Uyumak için birkaç aydır benzodiazepin kullanıyor. İsimleri ve randevuları unutuyor, ama faturalarını ve ilaçlarını hâlâ kendisi düzenliyor.",
      q: "Bilişsel yakınmaları yorumlamadan önce hangi etkenleri ele almalısınız?" },
    { h: "Görüşme", text: "Soruları sık sık tekrarlatıyor; duygulanımı çökkün, eşinden söz ederken gözleri doluyor. GDS-15 puanı 9. MoCA puanı 23; işitme güçlüğü nedeniyle sözel maddelerde zorlanıyor ve sık 'bilmiyorum' yanıtı veriyor. 'Bazen eşimin yanına gitsem diye düşünüyorum' diyor; plan yok. Evde ruhsatlı bir av tüfeği var.",
      q: "Bu görüşmede hangi bulgu aynı gün müdahale gerektirir?" },
    { h: "Ek bilgi", text: "Laboratuvarda TSH hafif yüksek, B12 alt sınırda. Odyometride iki taraflı orta derecede sensörinöral işitme kaybı saptanıyor." }
  ],
  findings: [
    ["Geniş sosyal çevreden çekilip yakın ilişkileri sürdürme", "norm", "Sosyoduygusal seçicilik kuramına göre zaman ufku daraldıkça kişiler duygusal açıdan anlamlı ilişkileri seçer."],
    ["Eşin ölümünden on ay sonra özlem ve ağlama", "norm", "Yasın beklenen bir parçası. Eşini kaybeden yaşlılarla yapılan prospektif çalışmada en sık örüntü dirençli seyirdi (Bonanno ve ark., 2002)."],
    ["Kilo kaybı, erken uyanma ve değersizlik", "bayrak", "Depresyonun nörovejetatif belirtileri. Yasta özlem ve hüzün baskındır, benlik saygısı genellikle korunur; değersizlik duygusu depresyonu düşündürür."],
    ["Ölüm düşüncesi ve evde silah", "bayrak", "Yaşlı erkekler intihar açısından en yüksek risk gruplarındandır; ateşli silaha erişim aynı gün ele alınmalıdır."],
    ["İşitme kaybı", "bayrak", "Bilişsel test performansını düşürür ve demans için değiştirilebilir bir risk etkenidir (Livingston ve ark., 2024)."],
    ["Benzodiazepin kullanımı", "izle", "Yaşlılarda bilişsel bozulma, düşme ve kırık riskini artırır."],
    ["Faturalarını ve ilaçlarını kendisinin düzenlemesi", "norm", "Karmaşık günlük yaşam etkinliklerinin korunması demans aleyhine bir bulgudur."],
    ["TSH yüksekliği ve sınırda B12", "izle", "Geri döndürülebilir nedenler araştırılmalı ve tedavi edilmelidir."]
  ],
  lenses: [
    ["carstensen", "Sosyoduygusal seçicilik kuramı: algılanan zamanın sınırlı olması, bilgi edinmeye yönelik geniş ağlardan duygusal anlam taşıyan küçük ağlara geçişi getirir. Torunlar ve iki yakın arkadaşla süren ilişkiler bu açıdan uyumludur; ancak kuram depresyonun yol açtığı geri çekilmeyi açıklamaz."],
    ["tornstam", "Gerotransandans: yüzeysel sosyal etkileşimlere ilginin azalması, yalnızlığa olumlu bakış ve kuşaklarla bağın güçlenmesi olgun yaşlanmanın bir parçası olabilir. Klinisyenin görevi bunu patoloji olarak görmemek, ama depresyonla da karıştırmamaktır."],
    ["erikson", "Benlik bütünlüğüne karşı umutsuzluk: yaşam öyküsünü anlamlı bir bütün olarak kabul edebilmek. Bakımını üstlendiği eşini kaybetmek yaşamın anlamını yeniden kurmayı gerektirir; 'Artık bir işe yaramıyorum' cümlesi umutsuzluk ucunun ifadesidir."],
    ["baltes", "Seçim, optimizasyon ve telafi: kişi kayıplar karşısında hedeflerini seçer (birkaç ilişki), kaynaklarını en iyi biçimde kullanır ve kayıpları telafi eder. İşitme cihazı tipik bir telafi aracıdır."],
    ["vaillant", "Harvard Yetişkin Gelişimi Çalışması'nda yakın ilişkilerin niteliği yaşlılıkta sağlık ve iyi oluşun güçlü yordayıcılarındandı. Kalan ilişkilerin korunması ve güçlendirilmesi tedavinin hedefidir."],
    ["jung", "Jung'un 'yaşamın öğleden sonrası': yaşlılıkta yönelim dış dünyadan iç dünyaya döner ve anlam arayışı bu dönemin görevidir. İçe dönüş kendi başına bir belirti değildir."]
  ],
  brain: { regions: ["hippocampus", "dlpfc", "auditory", "amygdala"],
    text: "Yaşlanmayla hipokampus ve prefrontal korteks hacmi azalır. Yaşlı erişkinlerde olumsuz uyaranlara amigdala yanıtının göreli olarak azalması, pozitiflik etkisinin olası açıklamalarından biridir (Mather ve ark., 2004). İşitme kaybı bilişsel yükü artırarak ve sosyal etkileşimi azaltarak bilişsel bozulma riskiyle ilişkilidir." },
  ddx: [
    ["Beklenen yas tepkisi", "Tanı değil", "Özlem, ağlama, on aylık süre, yakın ilişkilerin sürmesi.", "Nörovejetatif belirtiler ve değersizlik duygusu yasla sınırlı bir tabloyu düşündürmüyor."],
    ["Majör depresif bozukluk", "DSM-5-TR", "Kilo kaybı, erken uyanma, değersizlik, ölüm düşünceleri, GDS-15 puanı 9.", "Yas bağlamında da majör depresyon tanısı konabilir ve tedavi edilmelidir."],
    ["Uzamış yas bozukluğu", "DSM-5-TR", "Eşe yoğun özlem.", "Yetişkinlerde ölümden en az 12 ay sonra tanı konabilir; on ay geçmiş."],
    ["Hafif nörobilişsel bozukluk ya da erken demans", "DSM-5-TR", "MoCA 23, unutkanlık.", "İşitme kaybı, depresyon, benzodiazepin ve metabolik etkenler düzeltilmeden yorumlanamaz; karmaşık günlük işlevler korunmuş."],
    ["Depresyona bağlı bilişsel bozulma", "Tanı değil", "Sık 'bilmiyorum' yanıtları, depresif belirtiler.", "Bu kişilerin bir kısmında altta yatan nörodejeneratif bir süreç de olabilir; izlem gerekir."],
    ["Hipotiroidi ya da B12 eksikliği", "Tıbbi", "TSH hafif yüksek, B12 alt sınırda.", "Tek başına tabloyu açıklamaları beklenmez, ama düzeltilmeleri gerekir."],
    ["İlaca bağlı bilişsel etkiler", "Tıbbi", "Benzodiazepin kullanımı.", "Kademeli azaltmayla değerlendirilir."]
  ],
  tools: [
    ["Geriatrik Depresyon Ölçeği (GDS-15)", "Yaşlılara özgü depresyon taraması (Yesavage ve ark., 1982); Türkçe sürümü var."],
    ["Montreal Bilişsel Değerlendirme (MoCA)", "Hafif bilişsel bozukluğa duyarlı bir tarama aracı (Nasreddine ve ark., 2005); Türkçe sürümü var. İşitme düzeltilmeden yorumlanmamalıdır."],
    ["Odyometri ve işitme cihazı değerlendirmesi", "İşitme kaybının düzeyi ve telafi seçenekleri."],
    ["Laboratuvar", "TSH, B12, folat, tam kan sayımı, elektrolitler, glukoz."],
    ["İntihar riski ve silaha erişim değerlendirmesi", "C-SSRS; ateşli silah, ilaç birikimi ve yalnız yaşama durumu."],
    ["İlaçların gözden geçirilmesi (Beers ölçütleri)", "Yaşlılarda kaçınılması önerilen ilaçlar."],
    ["Lawton Araçsal Günlük Yaşam Etkinlikleri Ölçeği", "Karmaşık günlük işlevlerin değerlendirilmesi."]
  ],
  plan: [
    "Güvenlik: aileyle birlikte silahın evden uzaklaştırılması ve bir intihar risk planı.",
    "Depresyonun tedavisi: yas odaklı kişilerarası terapi ya da problem çözme terapisi; antidepresan (ör. sertralin ya da essitalopram) düşük dozla başlanarak, hiponatremi ve düşme açısından izlenerek.",
    "İşitme cihazı ve iletişim düzenlemeleri.",
    "Benzodiazepinin kademeli azaltılması; uykusuzluk için bilişsel davranışçı terapi.",
    "TSH ve B12 değerlerinin tedavisi.",
    "Depresyon ve işitme düzeltildikten 3-6 ay sonra bilişsel değerlendirmenin tekrarlanması.",
    "Sosyal bağlantı: 'daha çok insanla görüş' yerine 'önemli olanlarla daha sık görüş'; kalan anlamlı ilişkilerin desteklenmesi."
  ],
  synth: "Sosyal ağın daralması tek başına sosyoduygusal seçiciliğin ve olgun yaşlanmanın beklenen bir görünümü olabilir. Ancak bu vakada nörovejetatif belirtiler, değersizlik ve ölüm düşünceleri yas üzerine binen bir majör depresyonu düşündürüyor. Bilişsel yakınmalar; işitme kaybı, depresyon, benzodiazepin ve metabolik etkenler düzeltilmeden demans lehine yorumlanmamalı. Kuramlar burada bir 'normal yaşlanma' çerçevesi sunuyor; klinik görev, normali patoloji olarak görmeden tedavi edilebilir olanı gözden kaçırmamaktır.",
  pearls: [
    "Yaşlılıkta daralan sosyal ağ ile depresif geri çekilme farklıdır: soru 'kaç kişi?' değil, 'kalan ilişkiler canlı mı?' olmalıdır.",
    "İşitme düzeltilmeden yapılan bilişsel tarama yanıltıcı olabilir.",
    "Yaşlı bir erkekte ölüm düşüncesi ve silaha erişim aynı gün müdahale gerektiren bir birlikteliktir."
  ],
  qs: [
    "Carstensen ve Tornstam'ın kuramları yaşlılıktaki geri çekilmeyi nasıl yorumlar? Eski 'ilişki kesme' (disengagement) kuramından farkları nelerdir?",
    "Depresyona bağlı bilişsel bozulma ile erken demansı ayırmak için hangi özelliklere bakarsınız?",
    "Baltes'in seçim, optimizasyon ve telafi modeli bu hastanın tedavi planına nasıl çevrilebilir?"
  ],
  exps: ["carstensen03", "tornstam97", "freund98", "vaillant"],
  refs: ["bonanno02", "yesavage82", "nasreddine05", "livingston24", "mather04"]
}
);
ATLAS.refs = ATLAS.refs || {};
(function (r) {
  r.cox87 = { apa: "Cox, J. L., Holden, J. M., & Sagovsky, R. (1987). Detection of postnatal depression: Development of the 10-item Edinburgh Postnatal Depression Scale. British Journal of Psychiatry, 150, 782-786.", doi: "10.1192/bjp.150.6.782", pmid: "3651732" };
  r.netsi18 = { apa: "Netsi, E., Pearson, R. M., Murray, L., Cooper, P., Craske, M. G., & Stein, A. (2018). Association of persistent and severe postnatal depression with child outcomes. JAMA Psychiatry, 75(3), 247-253.", doi: "10.1001/jamapsychiatry.2017.4363", pmid: "29387878" };
  r.forman07 = { apa: "Forman, D. R., O'Hara, M. W., Stuart, S., Gorman, L. L., Larsen, K. E., & Coy, K. C. (2007). Effective treatment for postpartum depression is not sufficient to improve the developing mother-child relationship. Development and Psychopathology, 19(2), 585-602.", doi: "10.1017/S0954579407070289", pmid: "17459185" };
  r.zwaigenbaum05 = { apa: "Zwaigenbaum, L., Bryson, S., Rogers, T., Roberts, W., Brian, J., & Szatmari, P. (2005). Behavioral manifestations of autism in the first year of life. International Journal of Developmental Neuroscience, 23(2-3), 143-152.", doi: "10.1016/j.ijdevneu.2004.05.001", pmid: "15749241" };
  r.ozonoff10 = { apa: "Ozonoff, S., Iosif, A.-M., Baguio, F., Cook, I. C., Hill, M. M., Hutman, T., et al. (2010). A prospective study of the emergence of early behavioral signs of autism. Journal of the American Academy of Child & Adolescent Psychiatry, 49(3), 256-266.", doi: "10.1016/j.jaac.2009.11.009", pmid: "20410715" };
  r.robins14 = { apa: "Robins, D. L., Casagrande, K., Barton, M., Chen, C.-M. A., Dumont-Mathieu, T., & Fein, D. (2014). Validation of the Modified Checklist for Autism in Toddlers, Revised with Follow-up (M-CHAT-R/F). Pediatrics, 133(1), 37-45.", doi: "10.1542/peds.2013-1813", pmid: "24366990" };
  r.hyman20 = { apa: "Hyman, S. L., Levy, S. E., Myers, S. M., & Council on Children with Disabilities, Section on Developmental and Behavioral Pediatrics. (2020). Identification, evaluation, and management of children with autism spectrum disorder. Pediatrics, 145(1), e20193447.", doi: "10.1542/peds.2019-3447", pmid: "31843864" };
  r.rutgers04 = { apa: "Rutgers, A. H., Bakermans-Kranenburg, M. J., van IJzendoorn, M. H., & van Berckelaer-Onnes, I. A. (2004). Autism and attachment: A meta-analytic review. Journal of Child Psychology and Psychiatry, 45(6), 1123-1134.", doi: "10.1111/j.1469-7610.2004.t01-1-00305.x", pmid: "15257669" };
  r.hazlett17 = { apa: "Hazlett, H. C., Gu, H., Munsell, B. C., Kim, S. H., Styner, M., Wolff, J. J., et al. (2017). Early brain development in infants at high risk for autism spectrum disorder. Nature, 542(7641), 348-351.", doi: "10.1038/nature21369", pmid: "28202961" };
  r.wakschlag12 = { apa: "Wakschlag, L. S., Choi, S. W., Carter, A. S., Hullsiek, H., Burns, J., McCarthy, K., et al. (2012). Defining the developmental parameters of temper loss in early childhood: Implications for developmental psychopathology. Journal of Child Psychology and Psychiatry, 53(11), 1099-1108.", doi: "10.1111/j.1469-7610.2012.02595.x", pmid: "22928674" };
  r.belden08 = { apa: "Belden, A. C., Thomson, N. R., & Luby, J. L. (2008). Temper tantrums in healthy versus depressed and disruptive preschoolers: Defining tantrum behaviors associated with clinical problems. The Journal of Pediatrics, 152(1), 117-122.", doi: "10.1016/j.jpeds.2007.06.030", pmid: "18154912" };
  r.potegal03 = { apa: "Potegal, M., & Davidson, R. J. (2003). Temper tantrums in young children: 1. Behavioral composition. Journal of Developmental and Behavioral Pediatrics, 24(3), 140-147.", doi: "10.1097/00004703-200306000-00002", pmid: "12806225" };
  r.thomas07 = { apa: "Thomas, R., & Zimmer-Gembeck, M. J. (2007). Behavioral outcomes of Parent-Child Interaction Therapy and Triple P-Positive Parenting Program: A review and meta-analysis. Journal of Abnormal Child Psychology, 35(3), 475-495.", doi: "10.1007/s10802-007-9104-9", pmid: "17333363" };
  r.menting13 = { apa: "Menting, A. T. A., Orobio de Castro, B., & Matthys, W. (2013). Effectiveness of the Incredible Years parent training to modify disruptive and prosocial child behavior: A meta-analytic review. Clinical Psychology Review, 33(8), 901-913.", doi: "10.1016/j.cpr.2013.07.006", pmid: "23994367" };
  r.bergman02 = { apa: "Bergman, R. L., Piacentini, J., & McCracken, J. T. (2002). Prevalence and description of selective mutism in a school-based sample. Journal of the American Academy of Child & Adolescent Psychiatry, 41(8), 938-946.", doi: "10.1097/00004583-200208000-00012", pmid: "12162629" };
  r.bergman13 = { apa: "Bergman, R. L., Gonzalez, A., Piacentini, J., & Keller, M. L. (2013). Integrated Behavior Therapy for Selective Mutism: A randomized controlled pilot study. Behaviour Research and Therapy, 51(10), 680-689.", doi: "10.1016/j.brat.2013.07.003", pmid: "23933108" };
  r.layton18 = { apa: "Layton, T. J., Barnett, M. L., Hicks, T. R., & Jena, A. B. (2018). Attention deficit-hyperactivity disorder and month of school enrollment. New England Journal of Medicine, 379(22), 2122-2130.", doi: "10.1056/NEJMoa1806828", pmid: "30485780" };
  r.shaw07 = { apa: "Shaw, P., Eckstrand, K., Sharp, W., Blumenthal, J., Lerch, J. P., Greenstein, D., et al. (2007). Attention-deficit/hyperactivity disorder is characterized by a delay in cortical maturation. Proceedings of the National Academy of Sciences, 104(49), 19649-19654.", doi: "10.1073/pnas.0707741104", pmid: "18024590" };
  r.mta99 = { apa: "The MTA Cooperative Group. (1999). A 14-month randomized clinical trial of treatment strategies for attention-deficit/hyperactivity disorder. Archives of General Psychiatry, 56(12), 1073-1086.", doi: "10.1001/archpsyc.56.12.1073", pmid: "10591283" };
  r.melhem11 = { apa: "Melhem, N. M., Porta, G., Shamseddeen, W., Walker Payne, M., & Brent, D. A. (2011). Grief in children and adolescents bereaved by sudden parental death. Archives of General Psychiatry, 68(9), 911-919.", doi: "10.1001/archgenpsychiatry.2011.101", pmid: "21893658" };
  r.sandler03 = { apa: "Sandler, I. N., Ayers, T. S., Wolchik, S. A., Tein, J.-Y., Kwok, O.-M., Haine, R. A., et al. (2003). The Family Bereavement Program: Efficacy evaluation of a theory-based prevention program for parentally bereaved children and adolescents. Journal of Consulting and Clinical Psychology, 71(3), 587-600.", doi: "10.1037/0022-006X.71.3.587", pmid: "12795581" };
  r.muehlenkamp12 = { apa: "Muehlenkamp, J. J., Claes, L., Havertape, L., & Plener, P. L. (2012). International prevalence of adolescent non-suicidal self-injury and deliberate self-harm. Child and Adolescent Psychiatry and Mental Health, 6, 10.", doi: "10.1186/1753-2000-6-10", pmid: "22462815" };
  r.horowitz12 = { apa: "Horowitz, L. M., Bridge, J. A., Teach, S. J., Ballard, E., Klima, J., Rosenstein, D. L., et al. (2012). Ask Suicide-Screening Questions (ASQ): A brief instrument for the pediatric emergency department. Archives of Pediatrics & Adolescent Medicine, 166(12), 1170-1176.", doi: "10.1001/archpediatrics.2012.1276", pmid: "23027429" };
  r.mccauley18 = { apa: "McCauley, E., Berk, M. S., Asarnow, J. R., Adrian, M., Cohen, J., Korslund, K., et al. (2018). Efficacy of dialectical behavior therapy for adolescents at high risk for suicide: A randomized clinical trial. JAMA Psychiatry, 75(8), 777-785.", doi: "10.1001/jamapsychiatry.2018.1109", pmid: "29926087" };
  r.rossouw12 = { apa: "Rossouw, T. I., & Fonagy, P. (2012). Mentalization-based treatment for self-harm in adolescents: A randomized controlled trial. Journal of the American Academy of Child & Adolescent Psychiatry, 51(12), 1304-1313.", doi: "10.1016/j.jaac.2012.09.018", pmid: "23200287" };
  r.fusarpoli12 = { apa: "Fusar-Poli, P., Bonoldi, I., Yung, A. R., Borgwardt, S., Kempton, M. J., Valmaggia, L., et al. (2012). Predicting psychosis: Meta-analysis of transition outcomes in individuals at high clinical risk. Archives of General Psychiatry, 69(3), 220-229.", doi: "10.1001/archgenpsychiatry.2011.1472", pmid: "22393215" };
  r.yung05 = { apa: "Yung, A. R., Yuen, H. P., McGorry, P. D., Phillips, L. J., Kelly, D., Dell'Olio, M., et al. (2005). Mapping the onset of psychosis: The Comprehensive Assessment of At-Risk Mental States. Australian and New Zealand Journal of Psychiatry, 39(11-12), 964-971.", doi: "10.1080/j.1440-1614.2005.01714.x", pmid: "16343296" };
  r.bonanno02 = { apa: "Bonanno, G. A., Wortman, C. B., Lehman, D. R., Tweed, R. G., Haring, M., Sonnega, J., et al. (2002). Resilience to loss and chronic grief: A prospective study from preloss to 18-months postloss. Journal of Personality and Social Psychology, 83(5), 1150-1164.", doi: "10.1037/0022-3514.83.5.1150", pmid: "12416919" };
  r.yesavage82 = { apa: "Yesavage, J. A., Brink, T. L., Rose, T. L., Lum, O., Huang, V., Adey, M., & Leirer, V. O. (1982). Development and validation of a geriatric depression screening scale: A preliminary report. Journal of Psychiatric Research, 17(1), 37-49.", doi: "10.1016/0022-3956(82)90033-4", pmid: "7183759" };
  r.nasreddine05 = { apa: "Nasreddine, Z. S., Phillips, N. A., Bédirian, V., Charbonneau, S., Whitehead, V., Collin, I., et al. (2005). The Montreal Cognitive Assessment, MoCA: A brief screening tool for mild cognitive impairment. Journal of the American Geriatrics Society, 53(4), 695-699.", doi: "10.1111/j.1532-5415.2005.53221.x", pmid: "15817019" };
})(ATLAS.refs);
