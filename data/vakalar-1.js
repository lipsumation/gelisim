/* Vaka modu (1): bebeklikten okul çağına eğitim amaçlı kurgusal vakalar.
   steps    = adım adım açılan vaka akışı {h, text, q}
   findings = bulguların gelişimsel okuması [bulgu, düzey (norm | izle | bayrak), gerekçe]
   lenses   = kuramların okuması [kuram, yorum, (isteğe bağlı) evre sırası]
   ddx      = ayırıcı tanı [tanı, sınıflama, lehine, aleyhine]
   Tanı ölçütleri için DSM-5-TR ve DC:0-5 el kitaplarının kendisine başvurulmalıdır. */
ATLAS.cases = [
{
  id: "bakmiyor", age: 0.33, ageLabel: "4 aylık", band: "a1", tags: ["Bebek ruh sağlığı", "Ebeveyn depresyonu", "İlişki"],
  title: "Dört aylık bebek: 'Bana bakmıyor'",
  ask: "Aile hekiminin yönlendirdiği 32 yaşındaki anne, 4 aylık oğlunun kendisine bakmadığını ve gülümsemediğini söylüyor.",
  steps: [
    { h: "Başvuru", text: "İlk çocuk; planlı gebelik, 38. haftada sezaryenle doğum. Anne doğumdan yaklaşık üç hafta sonra uykusuzluk, sık ağlama ve 'bebeğe bir şey olacak' kaygısı yaşamaya başlamış. Eşi işten geç dönüyor, büyükanne başka bir şehirde. Anne 'Ona bakınca başını çeviriyor, galiba beni sevmiyor' diyor.",
      q: "Sorun kimde: bebekte mi, annede mi, ilişkide mi? Hangi bilgilere ihtiyacınız var?" },
    { h: "Gelişim ve tıbbi öykü", text: "Yenidoğan işitme taraması normal. Kilo alımı 25. persentil boyunca düzenli. Bebek sese dönüyor; babasıyla ve aile sağlığı hemşiresiyle oynarken gülümsüyor, agulama yapıyor. Uykusu düzensiz, sık uyanıyor.",
      q: "Bebeğin babasıyla gülümsemesi ayırıcı tanıda ne anlama gelir?" },
    { h: "Gözlem ve tarama", text: "Yüz yüze oyunda anne donuk bir yüz ifadesiyle, uzun sessizliklerle konuşuyor ve bebeğin seslerine geç yanıt veriyor. Bebek kısa bakışlardan sonra başını çeviriyor, elini ağzına götürüyor. Klinisyen oynadığında bebek gülümsüyor ve agulama yapıyor. Edinburgh Doğum Sonrası Depresyon Ölçeği (EPDS) puanı 19; kendine zarar verme maddesine 'nadiren' yanıtı verilmiş.",
      q: "EPDS'nin kendine zarar verme maddesine verilen yanıt görüşmenin akışını nasıl değiştirmeli?" },
    { h: "Ek bilgi", text: "Anne kendi annesinin, kendisi bebekken uzun süre hastanede yattığını biliyor. Bebeğe karşı bir 'boşluk' hissettiğini, ona zarar vermeyi düşünmediğini, ama zaman zaman 'bir sabah uyanmasam herkes için daha iyi olur' diye düşündüğünü söylüyor. Psikotik belirti ve bipolar bozukluk öyküsü yok." }
  ],
  findings: [
    ["Bebek anneyle göz temasını kısa tutup başını çeviriyor", "izle", "Bu yaşta bakışı kaçırmak bebeğin kendini düzenleme yollarındandır (durgun yüz deneyleri). Davranışın yalnız annede görülmesi bebeğe değil ilişkiye özgü bir örüntüyü düşündürür."],
    ["Babası ve klinisyenle sosyal gülümseme ve agulama", "norm", "CDC 4. ay basamakları (dikkat çekmek için kendiliğinden gülümseme, agulama, karşılık olarak ses çıkarma) karşılanıyor."],
    ["İşitme taraması normal, sese dönüyor", "norm", "Duyusal bir neden olasılığını azaltır; görmenin izlenmesi muayeneyle doğrulanmalıdır."],
    ["Annenin yanıtlarında gecikme ve donuk yüz ifadesi", "bayrak", "Murray ve Trevarthen'in çift video deneyinde annenin yanıtlarının zamanlaması bozulduğunda bebekler geri çekiliyordu. Etkileşimin zamanlaması bebeğin katılımını doğrudan etkiler."],
    ["Annede EPDS 19 ve pasif ölüm düşünceleri", "bayrak", "Tarama pozitif ve kendine zarar verme maddesi işaretlenmiş: puandan bağımsız olarak aynı gün güvenlik değerlendirmesi gerekir."],
    ["'Beni sevmiyor' yüklemesi", "izle", "Bebeğin davranışına kötü niyet ya da reddetme anlamı yüklemek, ebeveyn yansıtıcı işlevinin depresyonla zayıfladığını gösterebilir ve ileride olumsuz çocuk sonuçlarını yordar."]
  ],
  lenses: [
    ["stern", "Çekirdek benlik döneminde (2-7 ay) bebek, kendini ve ötekini karşılıklı düzenleme içinde deneyimler; tekrarlanan etkileşimlerden 'birlikte olma şemaları' oluşur. Bebeğin anneyle donuk etkileşimlere özgü bir şema geliştirmesi, başkalarıyla farklı etkileşmesi beklenen bir durumdur."],
    ["winnicott", "Mutlak bağımlılık döneminde annenin 'birincil anneye özgü kaygı' ile bebeğe uyumlanması beklenir. Winnicott'a göre bebek annenin yüzünde kendini görür; depresif bir yüz bebeğe kendi durumunu değil annenin durumunu yansıtır. Burada 'yeterince iyi olmayan' bir anne değil, tutma işlevi depresyonla geçici olarak zayıflamış bir anne vardır."],
    ["bowlby", "Bağlanma henüz 'belirgin bağlanma' evresine ulaşmamıştır, ama ilk yıldaki duyarlılık örüntüsü bağlanma güvenliğinin bilinen yordayıcılarındandır (De Wolff ve van IJzendoorn, 1997; etki orta düzeyde). Annenin tedavisi bebeğin bağlanma sürecinin de bir parçasıdır."],
    ["spitz", "Birinci organizatör olan sosyal gülümseme yerleşmiştir; bebek klinisyene ve babasına gülümsüyor. Sorun organizatörün yokluğu değil, belirli bir ilişkide yanıtın azalmasıdır."],
    ["fonagy", "Gergely ve Watson'ın sosyal biyogeri bildirim modeline göre bebek, annenin 'işaretli' yansıtmaları aracılığıyla kendi duygularını tanımayı öğrenir. Depresyon annenin bebeğin iç durumlarını yansıtma kapasitesini azaltır; 'beni sevmiyor' yorumu bu kapasitedeki düşüşün klinik bir göstergesidir."],
    ["erikson", "Temel güvene karşı güvensizlik: güven, bakımın tutarlılığından ve öngörülebilirliğinden doğar. Bu bakış açısından annenin iyileşmesi ve babanın bakıma katılması bebeğin güven deneyiminin doğrudan bileşenleridir."]
  ],
  brain: { regions: ["amygdala", "hypothalamus", "temporal", "brainstem"],
    text: "Bu yaşta stres tepkisinin düzenlenmesi büyük ölçüde bakımverenin varlığına ve yanıtlarına bağlıdır. Yüz işleme ağları (temporal korteks) hızla uzmanlaşır. Hayvan çalışmalarında anne bakımının stres sistemini epigenetik yollarla etkilediği gösterilmiştir; insanda anne depresyonu ile bebeğin stres fizyolojisi arasındaki ilişkiler çoğunlukla korelasyoneldir." },
  ddx: [
    ["Annede peripartum başlangıçlı majör depresif bozukluk", "DSM-5-TR", "EPDS 19, belirtiler doğumdan sonraki ilk haftalarda başlamış, uykusuzluk, boşluk duygusu, pasif ölüm düşünceleri.", "EPDS tanı koydurmaz; tanı klinik görüşmeyle konur. Tiroit işlevleri ve anemi değerlendirilmelidir."],
    ["İlişkiye özgü bozukluk (bebeklik ve erken çocukluk)", "DC:0-5", "Bebeğin geri çekilmesi yalnızca bir bakımveren ilişkisinde görülüyor.", "Süre ve işlevsellik ölçütleri el kitabına göre değerlendirilmelidir; DC:0-5'in ilişkisel bağlam ekseni ayrıca bakımveren-bebek ilişkisinin uyum düzeyini tanımlar."],
    ["Otizm spektrum bozukluğu", "DSM-5-TR", "Ebeveynin göz teması azlığından yakınması.", "Bebek diğer kişilerle göz teması kuruyor ve gülümsüyor. Prospektif çalışmalarda erken belirtiler 6. aydan sonra azalan sosyal iletişimle ortaya çıkar; izlem yeterlidir."],
    ["Doğum sonrası obsesif kompulsif belirtiler", "DSM-5-TR", "'Bebeğe bir şey olacak' kaygısı.", "Bebeğe zarar verme takıntıları ve kaçınma davranışları ayrıca sorgulanmalıdır."],
    ["Doğum sonrası psikoz ya da bipolar bozukluk", "DSM-5-TR", "Doğum sonrası dönem yüksek risklidir.", "Psikotik belirti ve bipolar öykü yok; yine de sorgulanması zorunludur."],
    ["Bebekte işitme ya da görme sorunu", "Tıbbi", "Bakış kaçırma.", "İşitme taraması normal; bebek sese ve yüzlere yöneliyor."]
  ],
  tools: [
    ["Edinburgh Doğum Sonrası Depresyon Ölçeği (EPDS)", "10 maddelik öz bildirim taraması; Türkçe sürümü var. Kendine zarar verme maddesi ayrıca değerlendirilir."],
    ["Columbia İntihar Şiddeti Derecelendirme Ölçeği (C-SSRS)", "Pasif ölüm düşüncelerinden aktif plana kadar riskin yapılandırılmış değerlendirmesi."],
    ["Yapılandırılmış anne-bebek etkileşim gözlemi", "Yüz yüze oyun, zamanlama, onarım (yanlış uyumların düzeltilmesi) ve bebeğin geri çekilmesi kaydedilir; video kaydı geri bildirim için de kullanılabilir."],
    ["ASQ:SE-2", "Bebeğin sosyal-duygusal gelişiminin ebeveyn bildirimiyle taranması."],
    ["DC:0-5 ilişkisel bağlam ekseni", "Bakımveren-bebek ilişkisinin uyum düzeyini dört basamaklı bir ölçekte tanımlar."],
    ["Babada depresyon taraması (PHQ-9 ya da EPDS)", "Doğum sonrası depresyon babalarda da görülür; destek kaynağının değerlendirilmesi için de gereklidir."]
  ],
  plan: [
    "Anne için aynı gün güvenlik değerlendirmesi: pasif ölüm düşünceleri de risk planı gerektirir; acil iletişim bilgileri ve destek kişileri belirlenir.",
    "Annenin depresyonunun tedavisi: kişilerarası terapi ya da BDT; orta-ağır tabloda emzirmeyle uyumlu bir antidepresan (ör. sertralin) risk ve yararlar birlikte değerlendirilerek düşünülür.",
    "İlişki odaklı müdahale: annenin depresyonu düzelse de anne-bebek ilişkisi kendiliğinden düzelmeyebilir (Forman ve ark., 2007). Video geribildirimli duyarlılık müdahaleleri (VIPP), Çocuk-Ebeveyn Psikoterapisi ya da ABC gibi kısa ve davranış odaklı programlar seçilebilir.",
    "Babanın bakıma katılımı ve sosyal desteğin artırılması; babada depresyon taraması.",
    "Bebeğin 6, 9 ve 12. aylarda CDC basamaklarıyla izlenmesi; özellikle isme yönelme, ortak dikkat ve karşılıklı ses oyunları."
  ],
  synth: "Bebeğin sosyal iletişim becerileri yerinde görünüyor; geri çekilme yalnızca anneyle görülüyor ve annenin depresyonuyla açıklanabiliyor. Bu vakada asıl 'hasta' ilişkidir. Annenin güvenliği ve tedavisi acil önceliktir, ama tek başına yeterli olmayabilir. Bu nedenle ilişki odaklı bir müdahale ve bebeğin gelişim izlemi birlikte planlanır.",
  pearls: [
    "Bebeğin bakış kaçırması bir belirti değil, bir düzenleme stratejisi olabilir. Asıl soru kiminle ve hangi koşulda olduğudur.",
    "EPDS bir tarama aracıdır; kendine zarar verme maddesi işaretlenmişse toplam puan ne olursa olsun güvenlik değerlendirmesi yapılır.",
    "Annenin bebeğe yüklediği olumsuz anlamlar düzeltilecek 'yanlış inançlar' değil, terapinin malzemesidir.",
    "Kalıcı ve ağır doğum sonrası depresyon, çocuğun davranış, okul ve ruh sağlığı sonuçları açısından özellikle yüksek risk taşır (Netsi ve ark., 2018)."
  ],
  qs: [
    "Bu vakada 'hasta' kimdir? DC:0-5'in ilişkisel bağlam ekseni bu soruyu nasıl yanıtlar?",
    "Annenin depresyonu tedaviyle düzelirse anne-bebek etkileşiminin de düzeleceğini varsaymak neden yanlış olabilir?",
    "Winnicott'un 'annenin yüzü ayna' kavramı ile Tronick'in durgun yüz bulguları arasındaki benzerlik ve farklar nelerdir?",
    "Bu bebeğin 12. aydaki değerlendirmesinde hangi basamaklara özellikle bakarsınız?"
  ],
  exps: ["tronick78", "murray85", "dewolff97", "bk03", "lieberman05"],
  refs: ["cox87", "netsi18", "forman07", "tronick78", "murray85", "dewolff97"]
},
{
  id: "isim14", age: 1.17, ageLabel: "14 aylık", band: "a3", tags: ["Sosyal iletişim", "Otizm riski", "Erken müdahale"],
  title: "On dört aylık: 'Adını söyleyince dönmüyor'",
  ask: "Kreş öğretmeninin uyarısıyla getirilen 14 aylık kız çocuğu; adına yanıt vermiyor, el sallamıyor, gösterilen şeye bakmıyor.",
  steps: [
    { h: "Başvuru", text: "Ailenin ikinci çocuğu; ağabeyi 6 yaşında ve tipik gelişimli. Anne 'Müzik açılınca hemen dönüyor ama adını söyleyince dönmüyor' diyor. Dokuzuncu ayda çıkardığı 'dadada' benzeri hecelerin son aylarda azaldığını düşünüyor ama emin değil.",
      q: "Hangi bilgiler işitme sorunu ile sosyal yönelim sorununu ayırmaya yardım eder?" },
    { h: "Gelişim öyküsü", text: "Desteksiz oturma 7, emekleme 9, tutunarak yürüme 12. ayda. Dokuzuncu ayda yabancılara belirgin bir tepki göstermemiş. İşaret etmiyor; bir şey istediğinde annesinin elini tutup nesneye götürüyor. Günde 3-4 saat ekran karşısında kalıyor.",
      q: "Annenin elini alıp nesneye götürmek ile işaret etmek arasındaki fark ne anlatır?" },
    { h: "Gözlem", text: "Oyuncak arabaların tekerleklerini uzun süre çeviriyor. Klinisyen pencereyi gösterip 'Bak!' deyince bakmıyor; adı dört kez söylenince bir kez dönüyor. Anne onu gıdıkladığında gülüp göz teması kuruyor ve oyunun sürmesi için anneye uzanıyor. Baş çevresi persentili ilk ölçümlere göre değişmemiş; el stereotipisi gözlenmiyor. Kulak muayenesi normal.",
      q: "Gıdıklama oyununda anneye uzanması tanısal düşüncenizi nasıl etkiler?" },
    { h: "Ek bilgi", text: "M-CHAT-R/F 16-30 ay için geçerlenmiştir; bu yaşta uygulanamaz. Anne telefonundaki 9. aya ait videolarda bebeğin adına daha sık döndüğünü ve daha çok ses çıkardığını gösteriyor. Davranışsal odyometri planlanıyor." }
  ],
  findings: [
    ["Adına tutarlı yanıt vermeme", "bayrak", "CDC 9. ay listesinde 'adını seslenince bakar' basamağı vardır. Kardeş çalışmalarında isme yönelme 12. ayda sonradan otizm tanısı alacak bebekleri ayırt eden belirtilerdendir (Zwaigenbaum ve ark., 2005). İşitme yine de dışlanmalıdır."],
    ["İşaret etmeme ve el sallamama", "bayrak", "CDC 12. ayda el sallamayı, 15. ayda bir şey istemek için işaret etmeyi bekler. İşaret etme ve bakışı izleme ortak dikkatin temel göstergeleridir."],
    ["Annenin elini alıp nesneye götürme", "izle", "Amaçlı bir iletişimdir, ama ötekinin dikkatini nesneye yöneltmeyi içermez; ortak dikkat olmadan yapılan bir istek davranışıdır."],
    ["Seslerde olası azalma", "bayrak", "Her yaşta beceri kaybı ayrıntılı değerlendirme gerektirir. Ebeveyn bildirimi gerilemeyi çoğu zaman yakalayamaz; videolar değerlidir (Ozonoff ve ark., 2010)."],
    ["Tekerlek çevirme gibi tekrarlayıcı oyun", "izle", "Tek başına tanı koydurmaz; ama sosyal iletişim belirtileriyle birlikte anlam kazanır."],
    ["Gıdıklama oyununda gülme, göz teması ve oyunu sürdürmek için uzanma", "norm", "İkili duygusal etkileşimin kısmen korunduğunu gösterir; bu, otizmi dışlamaz ama müdahalede üzerine kurulacak bir güçtür."],
    ["Motor basamaklar zamanında", "norm", "Gecikmenin genel değil, sosyal iletişime özgü olduğunu düşündürür."],
    ["Günde 3-4 saat ekran", "izle", "Tabloyu açıklamaz, ama yüz yüze konuşma ve oyun fırsatlarını azaltır; azaltılmalıdır."]
  ],
  lenses: [
    ["tomasello", "Dokuzuncu ay devrimi: 9-12. aylar arasında bebekler başkalarını amaçları olan failler olarak görmeye ve ortak dikkate girmeye başlar. İşaret etme ve bakışı izlemenin yokluğu, Tomasello'nun dil ve kültürel öğrenmenin ön koşulu saydığı paylaşılan yönelimselliğin temel taşının eksik olduğunu düşündürür."],
    ["stern", "Öznel benlik döneminde bebek iç durumların paylaşılabileceğini keşfeder. Ortak dikkat ve duygusal uyumlanma olmadan öznelerarası alan kurulamaz; ancak çekirdek benlik dönemine ait yüz yüze ve bedensel oyunun korunması önemlidir."],
    ["piaget", "Üçüncül döngüsel tepkiler döneminde çocuk nesnelerle deneyler yaparak yeni sonuçlar arar. Tekerlek çevirme gibi tekrarlayıcı oyun daha çok ikincil döngüsel tepkilere benzer ve bilişsel keşfin sosyal iletişimden ayrıştığını düşündürür."],
    ["bowlby", "Otizmli çocuklarda da bağlanma davranışları gelişir. Meta-analizde Yabancı Durum'da otizmli çocukların yaklaşık yarısı güvenli bağlanma gösteriyordu (Rutgers ve ark., 2004). Anneye uzanmak ve onda rahatlamak otizmi dışlamaz."],
    ["mahler", "Alıştırma alt evresi. Mahler'in ilk modelindeki 'normal otistik evre' kavramı, yenidoğanların sosyal uyaranlara erken ilgisini gösteren bebek araştırmalarıyla (Stern ve başkaları) reddedildi ve Mahler'in sonraki yazılarında bu terimden uzaklaştığı bildirilir. Bu vaka, 'otistik' sözcüğünün gelişim kuramlarında neden artık kullanılmadığını hatırlatır."],
    ["gesell", "Olgunlaşmacı bakış 'bekleyip görelim' tutumunu destekleyebilir. Ancak sosyal iletişim belirtilerinde beklemek kanıta dayalı değildir; erken müdahale beyin plastisitesinin en yüksek olduğu dönemde başlar."]
  ],
  brain: { regions: ["temporal", "tpj", "mpfc", "amygdala"],
    text: "Ortak dikkat, medial prefrontal korteks, superior temporal sulkus ve temporoparyetal bileşkeyi içeren sosyal beyin ağının erken uzmanlaşmasıyla ilişkilidir. Ailesel risk taşıyan bebeklerde 6-12. aylar arasında kortikal yüzey alanında aşırı genişleme ve 12-24. aylarda beyin hacminde artış, sonradan otizm tanısı alan grupta gösterilmiştir (Hazlett ve ark., 2017). Bunlar grup düzeyinde araştırma bulgularıdır; tanı için kullanılmaz." },
  ddx: [
    ["Otizm spektrum bozukluğu", "DSM-5-TR", "Ortak dikkat ve isme yanıt eksikliği, el kullanımı, tekrarlayıcı oyun, olası ses kaybı.", "14. ayda tanı tutarlılığı sınırlıdır; tanı 18. aydan itibaren güvenle konabilir (Hyman ve ark., 2020). Tanı beklenirken müdahale başlatılır."],
    ["İşitme kaybı", "Tıbbi", "İsme yanıt yok, seslerde azalma.", "Müziğe dönmesi işitmeyi dışlamaz; odyolojik değerlendirme her durumda yapılır."],
    ["Rett sendromu", "Tıbbi", "Kız çocuğu, 6-18. aylarda olası beceri kaybı.", "El stereotipisi yok, baş çevresi büyümesi korunmuş; yine de gerileme sürerse MECP2 açısından değerlendirilir."],
    ["Global gelişimsel gecikme", "DSM-5-TR", "Dil öncesi iletişimde gecikme.", "Motor basamaklar zamanında; gecikme sosyal iletişimle sınırlı görünüyor."],
    ["Dil bozukluğu ya da geç konuşma", "DSM-5-TR", "Sözcük öncesi seslerde azalma.", "Dil bozukluğunda jestler ve ortak dikkat genellikle korunur."],
    ["Yoksunluk ve ihmal ile ilişkili tablolar (reaktif bağlanma bozukluğu)", "DSM-5-TR", "Sosyal yanıtlılıkta azalma.", "Bakım ortamı sıcak ve tutarlı; reaktif bağlanma bozukluğunda sosyal iletişim yetisi vardır ama sıkıntıda rahatlama arama yoktur. Bu çocukta tersine bir örüntü var."]
  ],
  tools: [
    ["CSBS-DP Bebek-Yürümeye Başlayan Çocuk Kontrol Listesi", "6-24 ay için sosyal iletişim taraması; bu yaşta kullanılabilir."],
    ["M-CHAT-R/F", "16-30 ay için iki aşamalı tarama; 16. ayda uygulanır. Toplam puanı 3 ve üzeri olup izlem görüşmesinde 2 ve üzeri kalan çocukların yaklaşık yarısı otizm tanısı almıştır (Robins ve ark., 2014). Türkçe sürümü var."],
    ["ADOS-2 Yürümeye Başlayan Çocuk Modülü", "12-30 ay için yapılandırılmış tanısal gözlem; eğitimli uzman tarafından uygulanır."],
    ["Odyolojik değerlendirme", "Davranışsal odyometri; gerekirse beyin sapı işitsel uyarılmış potansiyelleri (ABR)."],
    ["Nörolojik muayene ve baş çevresi izlemi", "Gerileme, el stereotipileri ve baş çevresi büyümesinde yavaşlama açısından."],
    ["Ev videoları", "Gerilemenin zamanlamasını ve sosyal iletişim davranışlarının seyrini belgelemek için."]
  ],
  plan: [
    "Bekleme yok: klinik endişe, tarama yaşı gelmeden tanısal değerlendirmeye ve erken müdahaleye yönlendirmek için yeterli bir gerekçedir.",
    "Eşzamanlı odyolojik değerlendirme.",
    "Ebeveyn aracılı sosyal iletişim müdahalesi: ortak dikkat, karşılıklı oyun ve taklit üzerine kurulan, çocuğun ilgisini izleyen yaklaşımlar (ör. JASPER ve benzeri yöntemler).",
    "Ekran süresinin azaltılması; yüz yüze konuşma, şarkı ve oyunun artırılması (genel gelişim önerisi).",
    "18. ve 24. aylarda yeniden değerlendirme. Tanı konursa genetik değerlendirme (kromozomal mikrodizi; klinik duruma göre frajil X ve MECP2) planlanır."
  ],
  synth: "Sosyal iletişimin ortak dikkat boyutu (işaret etme, bakışı izleme, isme yönelme) belirgin biçimde etkilenmiş; ikili duygusal etkileşim kısmen korunmuş, motor gelişim normal. Bu tablo otizm spektrum bozukluğu için yüksek risk anlamına gelir ve tanı kesinleşmeden müdahale başlatılmalıdır. Olası beceri kaybı ve kız cinsiyet nedeniyle Rett sendromu ayırıcı tanıda tutulur.",
  pearls: [
    "Müziğe dönüp isme dönmemek işitmeyi dışlamaz; odyolojik değerlendirme her durumda yapılır.",
    "Bağlanma davranışı ve sıcak ikili oyun otizmi dışlamaz.",
    "Tarama aracının yaş aralığı dışındaysanız klinik endişe tek başına sevk gerekçesidir.",
    "Belirtiler doğumda değil, ilk iki yılda sosyal iletişim davranışlarının giderek azalmasıyla ortaya çıkabilir (Ozonoff ve ark., 2010)."
  ],
  qs: [
    "Tomasello'nun 'dokuzuncu ay devrimi' kavramı, bu çocuğun hangi becerilerinin neden önemli olduğunu nasıl açıklar?",
    "'Bekleyip görelim' yaklaşımının bu vakadaki maliyetleri nelerdir?",
    "Mahler'in 'normal otistik evre' kavramı neden terk edildi? Hangi bebek araştırmaları buna yol açtı?",
    "Ekran süresi bu tablonun nedeni olabilir mi? Kanıtlar neyi destekliyor, neyi desteklemiyor?"
  ],
  exps: ["carpenter98", "kasari06", "kuhl03", "johnson91"],
  refs: ["zwaigenbaum05", "ozonoff10", "robins14", "hyman20", "rutgers04", "hazlett17"]
},
{
  id: "ofke25", age: 2.5, ageLabel: "2 yaş 6 ay", band: "a4", tags: ["Duygu düzenleme", "Davranış", "Dil"],
  title: "İki buçuk yaşında öfke nöbetleri",
  ask: "Ebeveynler 2 yaş 6 aylık oğullarının her şeye ağlayıp kendini yere attığını, kreşten de şikâyet geldiğini söylüyor.",
  steps: [
    { h: "Başvuru", text: "Nöbetler günde 2-3 kez, çoğunlukla giyinirken, ekran kapatılınca ve yatma saatinde oluyor; 5-10 dakika sürüyor. Yere yatıp tekmeliyor, bazen 6 aylık kız kardeşine vuruyor. Anne yorgun; baba çocuğun 'şımartıldığını' düşünüyor; evde yaşayan büyükannenin kuralları farklı.",
      q: "Normatif bir öfke nöbetini klinik açıdan anlamlı olandan ayıran özellikler nelerdir?" },
    { h: "Gelişim öyküsü", text: "Yürüme 12. ayda. İki yaşında yaklaşık 20 sözcüğü varmış; şimdi iki sözcüklü cümleleri az ve anlaşılmadığında daha çok öfkeleniyor. Gece 2-3 kez uyanıyor ve horluyor. Bebekliğinde 'kolay yatışmayan, yeniliğe yoğun tepki veren' bir bebek olarak tanımlanıyor.",
      q: "Dil gelişimi ile öfke nöbetleri arasında nasıl bir ilişki beklersiniz?" },
    { h: "Gözlem", text: "Görüşme odasında ilk dakikalarda annesinin yanında, sonra oyuncaklarla oynuyor. Klinisyenle göz teması kuruyor, istediği oyuncağı işaret ediyor. Oyun bitip oyuncaklar toplanırken kısa süre ağlıyor; annesi yanına gelince birkaç dakikada yatışıyor. Kendine zarar verme gözlenmiyor.",
      q: "Gözlenen hızlı toparlanma tablonun ciddiyeti hakkında ne söyler?" },
    { h: "Ek bilgi", text: "Kreşte nöbetler daha seyrek. Ebeveynlerin yanıtları tutarsız: bazen ekranı geri veriyor, bazen bağırıyorlar. Baba kendisinin de çocukken 'çok öfkeli' olduğunu anlatıyor." }
  ],
  findings: [
    ["Günde 2-3 nöbet, 5-10 dakika", "izle", "Geniş bir toplum örnekleminde okul öncesi çocukların %83,7'si 'bazen' öfke nöbeti geçirirken her gün nöbet geçirenler %8,6'ydı (Wakschlag ve ark., 2012). Günlük nöbetler tek başına tanı değildir ama izlenmelidir."],
    ["Belirgin tetikleyiciler ve yetişkin gelince hızlı toparlanma", "norm", "Normatif nöbetler öngörülebilir bağlamlarda ortaya çıkar ve kısa sürede yatışır; klinik açıdan kaygı verici olanlar öngörülemez, uzun ve yıkıcıdır."],
    ["Kız kardeşine vurma", "izle", "Belden ve arkadaşlarının (2008) çalışmasında nöbet sırasında başkalarına yönelik saldırganlık klinik gruplarla ilişkiliydi. Sıklığı ve bağlamı sorgulanmalıdır."],
    ["Kendine zarar verme yok", "norm", "Önemli bir olumsuz bulgu: nöbet sırasında kendine zarar verme, okul öncesi depresyonla ilişkili bulunmuştur (Belden ve ark., 2008)."],
    ["Dil gecikmesi", "bayrak", "CDC 30. ay listesi yaklaşık 50 sözcük ve biri eylem bildiren iki sözcüklü cümleler bekler. Dil ve işitme değerlendirmesi gerekir."],
    ["Horlama ve gece uyanmaları", "izle", "Uyku bozukluğu, özellikle obstrüktif uyku apnesi, gündüz duygu düzenlemesini bozabilir."],
    ["Yeni kardeş ve tutarsız disiplin", "izle", "Bağlamsal stres etkenleri; müdahalenin doğrudan hedefleridir."]
  ],
  lenses: [
    ["mahler", "Yeniden yakınlaşma krizinin uzantısı ve duygusal nesne sürekliliğine geçiş. Çocuk ayrı bir birey olduğunu fark ettikçe hem özerklik hem de annenin yakınlığını ister; öfke nöbetleri bu çatışmanın görünümleridir. Kardeşin doğumu yakınlık ihtiyacını artırmış olabilir."],
    ["erikson", "Özerkliğe karşı utanç ve kuşku: çocuk 'ben yaparım' der ve sınırlarla çatışır. Erikson'a göre aşırı katı ya da tutarsız denetim utanç ve kuşku üretir; sıcak ve tutarlı sınırlar özerkliği destekler."],
    ["freud", "Anal evre: denetim, tutma ve bırakma, ebeveynle güç mücadelesi. Kuramın ampirik desteği sınırlıdır, ama tuvalet eğitimi ve 'inat' temalarının bu yaşta yoğunlaştığı klinik gözlemi doğrudur."],
    ["vygotsky", "Vygotsky'nin tanımladığı üç yaş krizinde negativizm, inatçılık ve kendi istemini ortaya koyma görülür; kriz iradenin doğuşudur. Ayrıca dil henüz davranışın iç düzenleyicisi hâline gelmemiştir: dil gecikmesi bu geçişi zorlaştırır."],
    ["mizac", "Thomas ve Chess'in 'zor mizaç' profili (düzensizlik, yeniliğe olumsuz tepki, yoğun duygulanım) ve 'uyumun iyiliği' kavramı: sorun yalnızca çocuğun mizacı değil, mizaç ile ebeveynlerin beklentileri ve tutarlılığı arasındaki uyumsuzluktur. Rothbart'ın tanımladığı çaba gerektiren kontrol bu yaşlarda yeni gelişmektedir."],
    ["gesell", "Gesell okulunun normatif betimlemelerinde iki buçuk yaş bir 'dengesizlik' ve katılık dönemidir. Olgunlaşmacı bakış, bu dönemin sabırla aşılacak bir evre olduğunu vurgular; ancak dil gecikmesi gibi eşlik eden bulguları açıklamaz."]
  ],
  brain: { regions: ["dlpfc", "acc", "amygdala", "broca"],
    text: "Öfkeyi düzenlemek için gereken prefrontal-limbik bağlantılar okul öncesi dönemde yavaş olgunlaşır; bu yaşta çocuk büyük ölçüde dışsal düzenlemeye, yani bakımverene dayanır. Ön singulat korteks ve dorsolateral prefrontal korteksle ilişkilendirilen çaba gerektiren kontrol 3-4 yaşından sonra belirginleşir. Dil gelişimi, duyguyu sözcüklerle düzenlemeyi mümkün kılar." },
  ddx: [
    ["Normatif öfke nöbetleri", "Tanı değil", "Belirgin tetikleyiciler, hızlı toparlanma, kendine zarar yok, kreşte daha seyrek.", "Günlük sıklık ve kardeşe saldırganlık izlem gerektirir."],
    ["Dil gelişiminde gecikme ya da dil bozukluğu", "DSM-5-TR", "Sözcük dağarcığı ve cümle kurmada gecikme; anlaşılmadığında artan öfke.", "Geç konuşan çocukların bir kısmı kendiliğinden yakalar; değerlendirme ve izlem gerekir."],
    ["Erken çocuklukta öfke ve saldırganlığın düzensizliği bozukluğu", "DC:0-5", "Sık öfke nöbetleri ve saldırganlık.", "Belirtilerin ağır, yaygın ve birden çok ortamda olması gerekir; kreşte nöbetler seyrek."],
    ["Karşıt olma karşı gelme bozukluğu", "DSM-5-TR", "Ev içi çatışma ve öfke.", "5 yaşından küçüklerde davranışların en az 6 ay boyunca çoğu gün görülmesi ve yaşa göre beklenenin belirgin biçimde dışında olması gerekir."],
    ["Otizm spektrum bozukluğu", "DSM-5-TR", "Dil gecikmesi.", "Ortak dikkat, işaret etme ve göz teması var; yine de M-CHAT-R/F uygulanabilir (30 ay, aralık içinde)."],
    ["Obstrüktif uyku apnesi", "Tıbbi", "Horlama, gece uyanmaları.", "Kulak burun boğaz ve uyku değerlendirmesi ile netleşir."],
    ["İhmal, istismar ya da ev içi şiddet", "Tanı değil", "Davranış sorunları her zaman bu açıdan sorgulanmalıdır.", "Öyküde destekleyen bulgu yok; ayrıca sorulmalıdır."]
  ],
  tools: [
    ["MAP-DB (Okul Öncesi Yıkıcı Davranışın Çok Boyutlu Değerlendirmesi)", "Normatif ve kaygı verici öfke kaybını boyutsal olarak ayırt etmek için geliştirilmiştir (Wakschlag ve ark., 2012)."],
    ["CBCL 1½-5 ve C-TRF", "Ebeveyn ve öğretmen formları; Türkçe sürümleri var."],
    ["Eyberg Çocuk Davranış Envanteri (ECBI)", "2-16 yaş; davranış sorunlarının sıklığı ve ebeveynin bunu sorun olarak algılaması."],
    ["M-CHAT-R/F ve dil değerlendirmesi", "Sosyal iletişim taraması ve konuşma-dil terapisti değerlendirmesi; işitme testi."],
    ["ASQ-3 ve ASQ:SE-2", "Genel gelişim ve sosyal-duygusal gelişim taraması."],
    ["Nöbet günlüğü", "İki hafta boyunca sıklık, süre, tetikleyici, saldırganlık, kendine zarar ve toparlanma süresi kaydedilir."]
  ],
  plan: [
    "Ebeveynlere psikoeğitim: normatif nöbetlerin özellikleri ve kırmızı bayraklar; iki haftalık nöbet günlüğü.",
    "Dil ve işitme değerlendirmesi; gerekirse dil terapisi ve evde dili zenginleştiren etkileşimler.",
    "Davranışçı ebeveyn eğitimi (PCIT, Incredible Years, Triple P): olumlu ilgi, betimleyici övgü, tutarlı sınırlar ve mola. Meta-analizlerde bu programlar ebeveyn bildirimli davranış sorunlarını azaltmıştır; etki başlangıçta sorunları daha ağır olan ailelerde daha büyüktür (Thomas ve Zimmer-Gembeck, 2007; Menting ve ark., 2013).",
    "Ebeveynler ve büyükanne arasında kuralların uyumlaştırılması; babanın sürece etkin katılımı.",
    "Kardeş doğumuna karşı her gün çocuğa ayrılmış kısa bir 'özel zaman' (PCIT'in çocuğun yönettiği etkileşim bölümü).",
    "Horlama için kulak burun boğaz ve uyku değerlendirmesi; 3-6 ay sonra yeniden değerlendirme."
  ],
  synth: "Nöbetlerin çoğu normatif özellikler taşıyor: tetikleyiciler öngörülebilir, toparlanma hızlı ve kendine zarar yok. Ancak üç bulgu dikkat gerektiriyor: nöbetlerin hem nedeni hem sonucu olabilecek dil gecikmesi, horlamayla birlikte bozulan uyku ve ebeveynler arasındaki tutarsızlık. Formülasyon şu: zor mizaçlı bir çocukta dil gecikmesi, kardeş doğumu ve tutarsız sınırlar üzerine binen gelişimsel bir düzenleme güçlüğü. İlk basamak bir tanı koymak değil, dil ve işitme değerlendirmesi ile davranışçı ebeveyn eğitimidir.",
  pearls: [
    "Öfke nöbetinin kendisi değil, özellikleri klinik anlam taşır: süre, sıklık, bağlam, saldırganlık, kendine zarar ve toparlanma.",
    "Her öfke nöbeti başvurusunda dil ve işitme değerlendirilmelidir.",
    "Nöbet sırasında kendine zarar verme, okul öncesi depresyon açısından sorgulanmalıdır.",
    "Ebeveyn eğitiminin etkisi başlangıçta sorunları daha ağır olan ailelerde daha büyüktür."
  ],
  qs: [
    "Mahler'in yeniden yakınlaşma krizi ile Vygotsky'nin üç yaş krizi aynı olguyu mu tanımlıyor? Farkları nedir?",
    "'Uyumun iyiliği' kavramı bu ailede hangi müdahaleyi önerir?",
    "Hangi bulgu bu vakayı normatif gruptan klinik gruba taşırdı?",
    "Babanın 'şımartıldı' yorumu ile davranışçı ebeveyn eğitimi yaklaşımı nasıl uzlaştırılabilir?"
  ],
  exps: ["mahler75", "berk92", "moffitt11", "kagan03"],
  refs: ["wakschlag12", "belden08", "potegal03", "thomas07", "menting13"]
},
{
  id: "sessiz4", age: 4.25, ageLabel: "4 yaş 3 ay", band: "a5", tags: ["Kaygı", "Göç ve iki dillilik", "Okul öncesi"],
  title: "Dört yaşında: anaokulunda tek sözcük yok",
  ask: "Anaokulu öğretmeni, 4 yaş 3 aylık kız çocuğunun beş aydır okulda hiç konuşmadığını bildiriyor; evde 'çok konuşkan'.",
  steps: [
    { h: "Başvuru", text: "Aile üç yıl önce Suriye'den göç etmiş; evde Arapça konuşuluyor. Çocuk Türkçeyi parkta, kardeşinden ve televizyondan öğrenmiş. Okulda arkadaşlarıyla jestlerle iletişim kuruyor, öğretmen soru sorunca donup kalıyor. Annesi okula geldiğinde onun kulağına fısıldıyor.",
      q: "Bu tablo ikinci dil edinimindeki 'sessiz dönem'den nasıl ayırt edilir?" },
    { h: "Gelişim öyküsü", text: "Bebekliğinden beri 'çekingen'; yeni ortamlarda annesinin arkasına saklanıyor, aile toplantılarında da az konuşuyor. Annede gençlik yıllarında belirgin sosyal kaygı öyküsü var. Evde Arapça cümleleri yaşına uygun ve akıcı. Ailenin çektiği videoda kardeşiyle oynarken Türkçe cümleler kurduğu görülüyor.",
      q: "Bebeklikten gelen çekingenlik neyin risk etkenidir?" },
    { h: "Gözlem", text: "Klinikte ilk 20 dakika konuşmuyor, yüzü donuk. Annesiyle yalnız kaldığında fısıltıyla Arapça konuşuyor; klinisyen odadan çıkınca annesiyle normal sesle Türkçe konuşmaya başlıyor. Çizimleri yaşına uygun; işitme testi normal. Göç öncesi ya da yolculukta travmatik bir yaşantıya ilişkin belirti saptanmıyor, ama bu konu ayrıca sorgulanıyor.",
      q: "Görüşme odasında gözlediğiniz bu küçük 'deney' tedavi planına nasıl dönüşebilir?" },
    { h: "Ek bilgi", text: "Öğretmen sınıfta ona soru sormayı bırakmış, arkadaşları onun adına konuşuyor. Aile 'büyüyünce geçer' düşüncesinde." }
  ],
  findings: [
    ["Okulda beş aydır hiç konuşmama, evde akıcı konuşma", "bayrak", "DSM-5-TR seçici dilsizlik ölçütleri: konuşmanın beklendiği belirli sosyal ortamlarda sürekli konuşamama, en az bir ay sürme (okulun ilk ayıyla sınırlı olmama) ve işlevselliği etkileme."],
    ["Evde Türkçe cümleler kurabilmesi", "norm", "Sessizliğin dil bilgisi ya da dilde rahatlık eksikliğiyle açıklanamadığını gösterir; bu, DSM-5-TR'nin dışlama ölçütü açısından belirleyicidir."],
    ["Bebeklikten beri yeni ortamlarda çekingenlik", "izle", "Davranışsal ketlenme, sosyal anksiyete bozukluğu için bilinen bir risk etkenidir (Clauss ve Blackford, 2012)."],
    ["Jestlerle iletişim ve arkadaşlık isteği", "norm", "Sosyal ilgi korunmuş; otizm spektrum bozukluğundan ayırt etmeye yardım eder."],
    ["Öğretmenin soru sormaması, arkadaşlarının onun adına konuşması", "izle", "İyi niyetli ama kaçınmayı pekiştiren çevresel uyumlar."],
    ["Göç ve iki dillilik", "izle", "Göçmen ve iki dilli çocuklarda seçici dilsizlik daha sık bildirilir; ama göç tek başına açıklama değildir."],
    ["Annede sosyal kaygı öyküsü", "izle", "Ailesel yatkınlık ve ebeveynin kaçınmayı farkında olmadan modellemesi."]
  ],
  lenses: [
    ["mizac", "Kagan'ın tanımladığı davranışsal ketlenme: yabancı kişilere ve yeni durumlara karşı çekingenlik. Bebeklikte ketlenmiş olarak sınıflanan kişilerin yetişkinlikte yeni yüzlere amigdala yanıtının daha yüksek olduğu gösterilmiştir (Schwartz ve ark., 2003). Rothbart'ın tanımladığı çaba gerektiren kontrol bu yaşlarda gelişir ve ketlenmiş mizacın kaygıya dönüşmesini tamponlayabilir."],
    ["erikson", "Girişimciliğe karşı suçluluk: okul öncesi çocuk girişimde bulunur ve amaçlarının peşine düşer. Seçici dilsizlik sosyal girişimin kaygı tarafından engellenmesi olarak okunabilir; çevrenin kaçınmayı onaylaması bunu pekiştirir."],
    ["vygotsky", "Konuşma önce sosyaldir, sonra içselleşir. Yakınsal gelişim alanı bu vakada çocuğun kimle, nerede ve hangi ses düzeyinde konuştuğunun haritasıdır: annesiyle fısıltı, annesiyle normal ses, klinisyen yanında fısıltı. Bu basamaklar, tedavide kullanılan uyaran soldurma tekniğinin kendisidir."],
    ["kagitcibasi", "Göç sonrası ailenin duygusal bağlılığa dayanan aile modeli ile okulun bağımsızlık ve sözel katılım beklentisi arasında bir gerilim olabilir. Ailenin 'büyüyünce geçer' tutumu ve çocuğun yeni dilde görünür olma kaygısı kültüre duyarlı biçimde birlikte ele alınmalıdır."],
    ["bowlby", "Annenin varlığında konuşup yokluğunda susması, güvenli üs işlevinin belirgin olduğu bir örüntüdür. Bu, güvensiz bağlanmanın kanıtı değildir; kaygılı çocuklar keşif için güvenli üsse daha çok gereksinim duyar."],
    ["afreud", "Anna Freud'un gelişim çizgilerinden 'bencillikten arkadaşlığa' çizgisinde çocuk ilerliyor (jestlerle oyun), ama sözel katılım evdeki güvenli ilişkilerin dışına taşamıyor. Gelişim çizgileri arasındaki bu uyumsuzluk Anna Freud'un klinik değerlendirmede önemsediği bir göstergedir."]
  ],
  brain: { regions: ["amygdala", "acc", "mpfc", "broca"],
    text: "Davranışsal ketlenme, yeniliğe karşı amigdala tepkiselliğinin yüksekliğiyle ilişkilidir. Bu yaşta amigdala-prefrontal düzenleme henüz olgunlaşmamıştır ve ebeveynin varlığı amigdala yanıtını tamponlar (Gee ve ark., 2014). Konuşmanın bağlama göre 'kapanması' dil sistemlerinin değil, tehdit sistemlerinin etkinliğini yansıtır." },
  ddx: [
    ["Seçici dilsizlik", "DSM-5-TR", "Belirli ortamlarda sürekli konuşamama, evde konuşma, beş aylık süre, işlevsellik kaybı.", "Dil bilgisi eksikliği dışlanmalıdır; evde Türkçe konuşabilmesi bunu büyük ölçüde dışlıyor."],
    ["İkinci dil ediniminde sessiz dönem", "Tanı değil", "Göç ve yeni dil.", "Sessiz dönem genellikle birkaç ay sürer ve yeni dille sınırlıdır; bu çocuk okulda iki dilde de konuşmuyor ve evde Türkçe kullanabiliyor."],
    ["Sosyal anksiyete bozukluğu", "DSM-5-TR", "Ketlenme öyküsü, annede sosyal kaygı.", "Seçici dilsizliği olan çocukların çoğunda sosyal kaygı da vardır; birlikte değerlendirilir."],
    ["Dil bozukluğu ya da konuşma sesi bozukluğu", "DSM-5-TR", "İki dilli gelişimde dil değerlendirmesi önemlidir.", "Evde yaşa uygun dil; yine de iki dilde değerlendirme önerilir, çünkü bir kısmında eşlik eden dil güçlükleri vardır."],
    ["Otizm spektrum bozukluğu", "DSM-5-TR", "Okulda sosyal iletişimin kısıtlı görünmesi.", "Sosyal ilgi, jestler ve ortama göre değişen konuşma otizmle uyumlu değil."],
    ["Travma ile ilişkili bozukluklar", "DSM-5-TR", "Göç öyküsü.", "Konuşmama seçici ve kaygı örüntüsüne uyuyor; yeniden yaşantılama ya da kaçınma belirtisi saptanmadı, ama göç öncesi yaşantılar ayrıca sorgulanmalıdır."]
  ],
  tools: [
    ["Seçici Dilsizlik Anketi (SMQ) ve Okul Konuşma Anketi", "Ebeveyn ve öğretmen formlarıyla farklı ortamlarda konuşma sıklığının değerlendirilmesi."],
    ["Okul Öncesi Kaygı Ölçeği (Spence PAS)", "Okul öncesi dönemde kaygı belirtilerinin ebeveyn bildirimiyle taranması."],
    ["İki dilde dil değerlendirmesi", "Gerekirse tercüman ya da iki dilli bir konuşma-dil terapisti ile; işitme testi."],
    ["Konuşma haritası", "Kimle, nerede, hangi ses düzeyinde ve hangi dilde konuştuğunun ayrıntılı dökümü; tedavi basamaklarının temelidir."],
    ["Travma öyküsü görüşmesi", "Göç öncesi ve yolculuk sırasındaki yaşantıların yaşa uygun biçimde sorgulanması."]
  ],
  plan: [
    "Psikoeğitim: 'büyüyünce geçer' beklentisi kanıtla desteklenmiyor. Okul temelli bir örneklemde altı ay sonra belirtiler azalsa da işlev bozukluğu sürüyordu (Bergman ve ark., 2002).",
    "Davranışçı tedavi: uyaran soldurma, şekillendirme ve kademeli maruz bırakma. İlk basamak okulda annesiyle konuşmak; sonra öğretmen kademeli olarak ortama girer. Bütünleşik davranış terapisinin pilot randomize çalışmasında bağımsız değerlendiricilere göre çocukların %75'i tedaviye yanıt verdi (Bergman ve ark., 2013).",
    "Okulla ortak plan: öğretmenin konuşmaya zorlamadan sözel olmayan katılımı ödüllendirmesi; arkadaşların onun adına konuşmasının yavaşça azaltılması.",
    "Annenin kendi sosyal kaygısının değerlendirilmesi ve gerekirse tedaviye yönlendirilmesi.",
    "İlaç birinci basamak değildir; davranışçı tedaviye yanıt vermeyen, daha büyük yaştaki ağır vakalarda SSRİ düşünülebilir, kanıt sınırlıdır.",
    "Ailenin kültürel ve dilsel kimliğine saygı: ana dilin bırakılması önerilmez."
  ],
  synth: "Konuşma becerisi var; eksik olan, konuşabildiği bağlamlardır. Tablo, davranışsal ketlenme mizacı ve ailesel kaygı yatkınlığı üzerine göçün ve yeni dilin getirdiği sosyal görünürlük baskısının eklendiği bir seçici dilsizlikle uyumlu. Çevrenin iyi niyetli uyumları (soru sormamak, onun adına konuşmak) kaçınmayı sürdürüyor. Tedavinin merkezi kliniğin değil okulun içinde yürütülen kademeli bir konuşma planıdır.",
  pearls: [
    "Seçici dilsizlik bir inat değil, bir kaygı bozukluğudur; DSM-5-TR'de anksiyete bozuklukları arasında yer alır.",
    "İki dilli çocukta önce her iki dilde konuşma haritası çıkarılır; dil yetersizliği dışlanmadan tanı konmaz.",
    "'Zorlamayın' ile 'kaçınmaya izin verin' aynı şey değildir."
  ],
  qs: [
    "Vygotsky'nin yakınsal gelişim alanı kavramını bu çocuğun konuşma basamakları üzerinden tanımlayın.",
    "Kagan'ın bulguları 'mizaç kaderdir' anlamına mı gelir? Ketlenmiş çocukların ne kadarı ketlenmiş kalır?",
    "Göç öyküsü olan bir aileye 'evde Türkçe konuşun' önerisinin olası zararları nelerdir?"
  ],
  exps: ["kagan03", "gee13", "kagitcibasi05"],
  refs: ["bergman02", "bergman13", "schwartz03", "clauss12", "gee14"]
},
{
  id: "dikkat6", age: 6.2, ageLabel: "6 yaş 2 ay", band: "a6", tags: ["Dikkat", "Öğrenme", "Okul"],
  title: "Birinci sınıfta: 'Yerinde duramıyor, okumayı sökemiyor'",
  ask: "Birinci sınıf öğretmeni, 6 yaş 2 aylık erkek öğrencinin derste sık sık kalktığını ve okumayı öğrenemediğini bildiriyor; aile 'DEHB testi' istiyor.",
  steps: [
    { h: "Başvuru", text: "Ailenin isteğiyle okula 66 aylıkken başlamış; sınıfının en küçüklerinden. Öğretmene göre derste kalkıyor, sırasını bekleyemiyor, harfleri karıştırıyor ve sınıfın gerisinde. Evde ödevde on dakikada dağılıyor, ama legoyla bir saat oynayabiliyor.",
      q: "Legoyla bir saat oynayabilmesi DEHB'yi dışlar mı?" },
    { h: "Öykü", text: "Okul öncesinde de 'hareketli' bir çocukmuş ama anaokulundan şikâyet gelmemiş. Gece 23.00'te yatıyor, tableti yatakta. Babası okulda okumayı geç söktüğünü ve hâlâ yavaş okuduğunu anlatıyor. Annede son aylarda depresif belirtiler var. Görme ve işitme taraması üç yıl önce yapılmış.",
      q: "Hangi bilgiler eksik? Belirtilerin birden fazla ortamda bulunması ölçütünü nasıl sınarsınız?" },
    { h: "Gözlem ve ölçekler", text: "Görüşmenin ilk 15 dakikası sakin, sonra sandalyesinde kıpırdanıyor. Harf-ses eşleştirmede belirgin güçlük çekiyor; sayılarla ve görsel bulmacalarla başarılı. DSM temelli derecelendirmelerde dikkatsizlik maddeleri hem öğretmen hem ebeveyn formunda yüksek; hiperaktivite-dürtüsellik maddeleri öğretmen formunda yüksek, ebeveyn formunda sınırda.",
      q: "Ebeveyn ve öğretmen derecelendirmeleri arasındaki fark nasıl yorumlanmalı?" },
    { h: "Ek bilgi", text: "Yaşıtlarının çoğundan yaklaşık bir yıl küçük. Okuma değerlendirmesinde fonolojik farkındalık zayıf." }
  ],
  findings: [
    ["Sınıfının en küçüklerinden", "izle", "Aynı sınıfta en küçük olan çocuklar DEHB tanısını daha sık alır: okula giriş kesim tarihine göre Ağustos doğumlularda tanı oranı 10.000'de 85,1, Eylül doğumlularda 63,6 idi (Layton ve ark., 2018). Belirtiler sınıf arkadaşlarıyla değil, yaş normlarıyla karşılaştırılmalıdır."],
    ["Legoyla uzun süre oynayabilme", "norm", "DEHB'de ilgi çekici ve anında ödüllendirici etkinliklerde dikkat korunabilir; bu bulgu DEHB'yi dışlamaz."],
    ["Harf-ses eşleştirme güçlüğü ve babada okuma güçlüğü", "bayrak", "Özgül öğrenme bozukluğu (okuma) riski; DEHB ile sık birlikte görülür."],
    ["Geç yatma ve yatakta tablet", "izle", "Yetersiz uyku dikkatsizliği ve huzursuzluğu taklit edebilir ya da artırabilir."],
    ["Görme ve işitme taramasının üç yıl önce yapılmış olması", "izle", "Yenilenmelidir."],
    ["Anaokulunda şikâyet olmaması", "izle", "DSM-5-TR belirtilerin bir kısmının 12 yaşından önce başlamasını ister; belirtiler okulun getirdiği taleplerle birlikte belirginleşebilir."],
    ["Annede depresif belirtiler", "izle", "Ev ortamını ve ebeveyn derecelendirmelerini etkileyebilir; ayrıca ele alınmalıdır."]
  ],
  lenses: [
    ["piaget", "İşlem öncesi dönemden somut işlemlere geçiş eşiği. Okumanın gerektirdiği sembol-ses eşleştirmesi ve dikkatin sürdürülmesi, bu geçişin başında olan küçük bir çocuk için daha zordur. Göreli yaş, Piagetçi açıdan bir 'hazır olma' sorusudur."],
    ["erikson", "Çalışkanlığa karşı aşağılık duygusu: okul çocuğu yetkinlik duygusunu başarıdan ve ustalıktan kazanır. Tanı konsun ya da konmasın, bu çocuğun 'ben yapamıyorum' öyküsü geliştirmesi en önemli ikincil risktir."],
    ["vygotsky", "Öz-düzenleme önce sosyal, sonra içseldir: özel konuşma okul öncesinde artar ve okul çağında içselleşir. Berk'in çalışmalarında DEHB'li çocuklarda özel konuşmanın daha az içselleşmiş biçimlerde sürdüğü bildirilmiştir. İskele kurma ve yapılandırılmış sınıf düzenlemeleri öz-düzenlemeyi destekler."],
    ["case", "Robbie Case'in modelinde çalışma belleği kapasitesi yaşla artar; uygulama ve otomatikleşme belleğe boş alan açar. Kod çözme otomatikleşmedikçe okuma çalışma belleğini tüketir ve bu durum dışarıdan dikkatsizlik gibi görünür."],
    ["sroufe", "Gelişimsel psikopatolojinin eşsonluluk ilkesi: dikkatsizlik farklı yollardan (nörogelişimsel yatkınlık, uyku, kaygı, öğrenme güçlüğü, ev stresi) aynı görünüme ulaşabilir. Değerlendirmenin amacı bu yolları ayırt etmektir."]
  ],
  brain: { regions: ["dlpfc", "striatum", "parietal", "cerebellum"],
    text: "DEHB'de kortikal olgunlaşma gecikir: kortikal kalınlığın zirveye ulaştığı medyan yaş DEHB'li çocuklarda 10,5, tipik gelişen çocuklarda 7,5 yaştı ve gecikme en çok prefrontal bölgelerde belirgindi (Shaw ve ark., 2007). Bulgu grup düzeyindedir, bireysel tanı için kullanılmaz. Okumada sol temporoparyetal ağdaki fonolojik işleme güçlüğü özgül öğrenme bozukluğuyla ilişkilidir." },
  ddx: [
    ["Dikkat eksikliği hiperaktivite bozukluğu", "DSM-5-TR", "İki ortamda dikkatsizlik, öğretmen bildiriminde hiperaktivite-dürtüsellik.", "Belirtiler göreli yaş, uyku ve öğrenme güçlüğüyle kısmen açıklanabilir; altı aylık süre, birden çok ortam ve işlev bozukluğu ölçütleri dikkatle sınanmalıdır."],
    ["Özgül öğrenme bozukluğu (okuma)", "DSM-5-TR", "Fonolojik farkındalık güçlüğü, aile öyküsü.", "Tanı için hedefe yönelik müdahaleye rağmen en az altı ay süren güçlük gerekir; müdahale tanıyı beklemeden başlar."],
    ["Göreli yaşa bağlı olgunlaşma farkı", "Tanı değil", "Sınıfın en küçüklerinden.", "Belirtiler yaş normlarının belirgin biçimde dışındaysa açıklama olarak yeterli değildir."],
    ["Yetersiz uyku ya da uyku bozukluğu", "Tıbbi", "Geç yatma, yatakta ekran.", "Uyku düzeni düzeltildikten sonra yeniden derecelendirme yapılmalıdır."],
    ["Kaygı ya da ev içi stres", "Tanı değil", "Annede depresif belirtiler.", "Kaygı belirtileri ayrıca sorgulanmalıdır."],
    ["Görme ya da işitme sorunu", "Tıbbi", "Sınıfta dikkat güçlüğü.", "Tarama güncellenmelidir."],
    ["Zihinsel yetersizlik", "DSM-5-TR", "Okul başarısında düşüklük.", "Sayılarla ve görsel bulmacalarla başarılı; gerekirse bilişsel değerlendirme yapılır."]
  ],
  tools: [
    ["Turgay DSM-IV Temelli Yıkıcı Davranım Bozuklukları Tarama ve Değerlendirme Ölçeği", "Ebeveyn ve öğretmen formları; Türkiye'de yaygın olarak kullanılır."],
    ["Conners, Vanderbilt ya da SNAP-IV derecelendirme ölçekleri", "Belirti şiddeti ve tedavi izlemi için."],
    ["K-SADS-PL", "Yarı yapılandırılmış tanı görüşmesi; Türkçe sürümü var."],
    ["WISC ile bilişsel değerlendirme ve okuma-yazma değerlendirmesi", "Fonolojik farkındalık, kod çözme hızı ve doğruluğu."],
    ["Uyku öyküsü ve uyku günlüğü", "Yatma saati, ekran kullanımı, horlama."],
    ["Görme ve işitme testi", "Güncel tarama."],
    ["Annede depresyon taraması (PHQ-9)", "Ev ortamının değerlendirilmesi için."]
  ],
  plan: [
    "Tanıyı tek bir 'teste' indirgemeden çok kaynaklı değerlendirme: iki ortam, yaşa göre normlar ve göreli yaşın göz önünde bulundurulması.",
    "Uyku düzeni (yatak odasında ekran olmaması, düzenli yatma saati) ve 4-6 hafta sonra yeniden derecelendirme.",
    "Okuma değerlendirmesi ve tanıyı beklemeden sistematik ses temelli okuma desteği.",
    "Sınıf içi düzenlemeler: öğretmene yakın oturma, kısa ve bölünmüş görevler, sık geri bildirim, hareket araları.",
    "DEHB tanısı konursa: 6 yaş ve üzerinde ilaç tedavisi ile davranışçı müdahalelerin birlikte kullanılması önerilir. MTA çalışmasında 14 ayda dikkatle yürütülen ilaç tedavisi temel belirtilerde davranışçı tedaviden üstündü; birleşik tedavi ek işlevsel kazanımlar sağladı (MTA Cooperative Group, 1999).",
    "Annenin depresyonu için yönlendirme ve davranışçı ebeveyn eğitimi."
  ],
  synth: "Dikkatsizlik gerçek, ama tek bir açıklaması yok: sınıfın en küçüğü olmak, olası bir okuma bozukluğu, yetersiz uyku ve evdeki stres aynı tabloyu üretebilir. Değerlendirmede soru 'DEHB var mı?' olmaktan çıkıp 'bu çocuğun dikkatini neler tüketiyor?' olmalıdır. Bu etkenler ele alındıktan sonra DEHB tanısı sürüyorsa kanıta dayalı tedavi gecikmeden başlatılır.",
  pearls: [
    "Göreli yaş etkisi: belirtileri sınıf arkadaşlarıyla değil, yaş normlarıyla karşılaştırın.",
    "Sevdiği bir etkinlikte uzun süre dikkatini sürdürebilmek DEHB'yi dışlamaz.",
    "Özgül öğrenme bozukluğu tanısı müdahaleye yanıtsızlık gerektirir; müdahale tanıyı beklemeden başlar.",
    "DEHB ile özgül öğrenme bozukluğu sık birlikte görülür; birini bulmak diğerini aramayı bırakmak için gerekçe değildir."
  ],
  qs: [
    "Shaw ve arkadaşlarının 'olgunlaşma gecikmesi' bulgusu göreli yaş etkisi tartışmasıyla nasıl ilişkilendirilebilir?",
    "Erikson'un çalışkanlık evresi açısından bu çocuğun okula bir yıl geç başlaması bir seçenek olabilir miydi?",
    "MTA çalışmasının 14 aylık bulguları uzun dönem izlem sonuçlarıyla birlikte nasıl yorumlanmalı?"
  ],
  exps: ["berk92", "diamond07", "moffitt11", "giedd99"],
  refs: ["layton18", "shaw07", "mta99"]
}
];
