/* Yaş dönemleri için akademik ekler:
   msx   = CDC listesinde olmayan, araştırma literatürüne dayalı ek basamaklar [yaş, metin, kaynak]
   dx    = bu dönemde başlayan ya da tanınan bozukluklar (DSM-5-TR; 0-5 yaş için DC:0-5) [tanı, not]
   tools = tarama ve değerlendirme araçları (Türkçe sürümü olanlar belirtilmiştir) */
ATLAS.ageExtras = {
  prenatal: {
    dx: [["Prenatal alkol maruziyetine bağlı nörodavranışsal bozukluk", "DSM-5-TR'de daha ileri araştırma gerektiren durumlar arasındadır; klinikte 'tanımlanmış diğer nörogelişimsel bozukluk' olarak kodlanabilir."],
         ["Gebelikte başlangıçlı depresyon (anne)", "DSM-5-TR: peripartum başlangıç belirteci gebelikte başlayan epizotları da kapsar."]],
    tools: ["Edinburgh Doğum Sonrası Depresyon Ölçeği, gebelikte de kullanılır (Türkçe sürümü var)", "Prenatal bağlanma ölçekleri (araştırma)"]
  },
  a0: {
    msx: {
      motor: [["Doğum", "İlkel refleksler: emme, arama, Moro, avuç içi yakalama, adımlama", "Nelson Pediatri"], ["3-6 ay", "Moro ve avuç içi yakalama refleksleri baskılanır; sürmesi nörolojik değerlendirme gerektirir", "Nelson Pediatri"]],
      sosyal: [["Doğum", "Yüz benzeri desenleri izleme tercihi", "Johnson ve ark., 1991"], ["Doğum", "Annenin sesini tercih etme", "DeCasper ve Fifer, 1980"]],
      bilis: [["0-3 ay", "Kendi hareketi ile sonuç arasındaki olumsallığı fark etme", "Watson; Gergely ve Watson, 1996"]]
    },
    dx: [["DC:0-5: Erken bebeklikte aşırı ağlama bozukluğu", "Ağlamanın süresi, yatıştırılamazlık ve ebeveyn sıkıntısıyla tanımlanır; 'kolik' ile örtüşür."],
         ["Doğum sonrası depresyon (anne ve baba)", "DSM-5-TR peripartum başlangıç belirteci: gebelikte ya da doğumdan sonraki 4 hafta içinde başlangıç."]],
    tools: ["Yenidoğan işitme taraması", "Brazelton Yenidoğan Davranışsal Değerlendirme Ölçeği (NBAS)", "Edinburgh Doğum Sonrası Depresyon Ölçeği (Türkçe sürümü var)"]
  },
  a1: {
    msx: {
      bilis: [["3,5-4,5 ay", "Beklenti ihlali deneylerinde nesne sürekliliği belirtileri", "Baillargeon, 1987"], ["~4 ay", "Binoküler görme ve stereopsis", "Held ve ark., 1980"]],
      sosyal: [["2-6 ay", "Yüz yüze karşılıklı etkileşim; durgun yüze olumsuz tepki ve toparlanma", "Tronick ve ark., 1978"]],
      dil: [["~6 ay", "Ana dilin ünlülerine göre algısal ayarlanma başlar", "Kuhl ve ark., 1992"]]
    },
    dx: [["DC:0-5 uyku ve beslenme bozuklukları", "Yaş alt sınırları ve süre ölçütleri için el kitabına başvurulmalıdır; ilişkisel bağlam (bakımveren-bebek uyumu) eksenlerden biridir."],
         ["Büyüme geriliği (organik olmayan nedenler dahil)", "Beslenme etkileşimi, ebeveyn ruh sağlığı ve ihmal birlikte değerlendirilir."]],
    tools: ["ASQ-3 ve ASQ:SE-2", "Denver II (Türkiye normları var)", "Ankara Gelişim Tarama Envanteri (AGTE, 0-6 yaş; Türkiye'de geliştirilmiştir)"]
  },
  a2: {
    msx: {
      motor: [["3,8-9,2 ay", "Desteksiz oturma için normal pencere", "WHO MGRS, 2006"], ["5,2-13,5 ay", "Emekleme penceresi; çocukların ~%4'ü hiç emeklemez", "WHO MGRS, 2006"]],
      dil: [["6-12 ay", "Ana dil dışındaki fonem ayrımlarında daralma", "Werker ve Tees, 1984"], ["≤10 ay", "Kanonik agulamanın başlaması; gecikmesi risk göstergesidir", "Oller ve ark., 1998"]],
      sosyal: [["7-9 ay", "Yabancı kaygısı (Spitz'in 8. ay kaygısı)", "Spitz, 1965"], ["9-12 ay", "Ortak dikkat: bakış ve işaret takibi", "Carpenter ve ark., 1998"], ["10-12 ay", "Sosyal referans", "Sorce ve ark., 1985"]],
      bilis: [["7,5-12 ay", "A-değil-B hatası azalır; tolere edilen gecikme ayda yaklaşık 2 saniye uzar", "Diamond, 1985"]]
    },
    dx: [["Reaktif bağlanma bozukluğu", "DSM-5-TR: gelişimsel yaş en az 9 ay; belirtiler 5 yaşından önce; ağır yetersiz bakım öyküsü gerekir. OSB ile ayırıcı tanı önemlidir."],
         ["Sosyal ilişki bozukluğu (ayrım gözetmeyen sosyal yakınlık)", "DSM-5-TR: gelişimsel yaş en az 9 ay; yetersiz bakım öyküsü; bağlanma güvenliğinden bağımsız sürebilir."],
         ["Ruminasyon bozukluğu", "Bebeklikte başlayabilir; en az 1 ay süreyle yinelenen geri çıkarma."]],
    tools: ["AGTE ve Denver II", "Bayley-III / Bayley-4", "AAP: 9, 18 ve 30. aylarda standart gelişimsel tarama"]
  },
  a3: {
    msx: {
      motor: [["8,2-17,6 ay", "Bağımsız yürüme için normal pencere", "WHO MGRS, 2006"]],
      sosyal: [["14-18 ay", "Kendiliğinden yardım etme", "Warneken ve Tomasello, 2006"], ["12-15 ay", "Paylaşmak için gösterme ve işaret etme (proto-deklaratif)", "Carpenter ve ark., 1998"]],
      dil: [["12-18 ay", "İlk kelimeler; alıcı dil ifade edici dilin önündedir", "Fenson ve ark., 1994"]],
      bilis: [["12-18 ay", "Deneme-yanılma ile keşif (üçüncül döngüsel tepkiler)", "Piaget, 1936"]]
    },
    dx: [["Otizm spektrum bozukluğu", "Belirtiler sıklıkla 12-24. aylarda fark edilir. 2 yaşında konan tanı büyük ölçüde kalıcıdır (Ozonoff ve ark., 2015)."],
         ["Dil gelişim gecikmesi", "Mutlak değerlendirme ölçütleri: 12 ayda agulama ya da jest yok, 16 ayda tek kelime yok, 24 ayda kendiliğinden iki kelimelik ifade yok, herhangi bir yaşta dil ya da sosyal beceri kaybı (Johnson ve Myers, 2007)."]],
    tools: ["M-CHAT-R/F (16-30 ay; Türkçe sürümü var)", "AGTE, Denver II", "Bayley-4"]
  },
  a4: {
    msx: {
      sosyal: [["18-24 ay", "Aynada kendini tanıma; utanç ve gurur gibi öz-bilinçli duygular", "Lewis ve Brooks-Gunn, 1979"], ["2-3 yaş", "Öfke nöbetleri normatiftir; sıklık, süre ve yıkıcılık klinik olarak ayırt edicidir", "Wakschlag ve ark., 2012"]],
      dil: [["18-24 ay", "Kelime patlaması: yaklaşık 50 kelimeden sonra hızlanma", "Fenson ve ark., 1994"]],
      motor: [["2-3 yaş", "Gündüz tuvalet kontrolü; zamanlama kültüre ve eğitim yaklaşımına göre değişir", "AAP"]],
      bilis: [["18-24 ay", "Ertelenmiş taklit ve sembolik oyun", "Piaget, 1945"]]
    },
    dx: [["Otizm spektrum bozukluğu", "AAP: 18 ve 24. aylarda M-CHAT-R/F ile tarama; pozitif taramada izlem görüşmesi ve tanısal değerlendirme."],
         ["Dil bozukluğu", "Geç konuşanların bir kısmı kendiliğinden yetişir; alıcı dilde gecikme daha kötü seyri öngörür."],
         ["DC:0-5: Erken çocuklukta düzensiz öfke ve saldırganlık bozukluğu", "DC:0-5'e özgü tanı; 24 aydan itibaren konabilir."],
         ["Pika", "DSM-5-TR: gelişimsel düzeye uygun olmamalı; 2 yaşından küçüklerde tanı önerilmez."]],
    tools: ["M-CHAT-R/F (18 ve 24. ay)", "ADOS-2 (küçük çocuk modülü)", "CBCL/1½-5 (Türkçe sürümü var)", "BITSEA", "DC:0-5 ile tanısal formülasyon"]
  },
  a5: {
    msx: {
      bilis: [["4-5 yaş", "Yanlış inanç görevini geçme (zihin kuramı)", "Wellman ve ark., 2001"], ["3-6 yaş", "Ketleme, çalışma belleği ve bilişsel esneklikte hızlı artış", "Diamond, 2013"]],
      dil: [["3-7 yaş", "Özel konuşmanın zirvesi", "Berk, 1992"]],
      sosyal: [["3-5 yaş", "Ahlaki kuralları geleneksel kurallardan ayırma", "Smetana, 1981"], ["2-3 → 5-7 yaş", "Cinsiyet kimliğinden cinsiyet sabitliğine", "Kohlberg, 1966; Ruble ve ark., 2007"]]
    },
    dx: [["Ayrılık kaygısı bozukluğu", "12 yaş altında en sık kaygı bozukluklarındandır."],
         ["Seçici dilsizlik", "Başlangıç genellikle 5 yaşından önce; çoğu zaman okula başlayınca fark edilir."],
         ["Özgül fobi", "Sıklıkla erken çocuklukta başlar."],
         ["DEHB", "Belirtilerin bir kısmı 12 yaşından önce bulunmalıdır; okul öncesinde tanı daha güçtür."],
         ["Karşı gelme bozukluğu", "İlk belirtiler okul öncesinde görülebilir."],
         ["Kaçıngan/kısıtlı yiyecek alımı bozukluğu (ARFID)", "Çoğunlukla bebeklik ve çocuklukta başlar; kilo ve beden imajı kaygısı yoktur."],
         ["Enkoprezis ve enürezis", "Enkoprezis en az 4, enürezis en az 5 yaş (ya da eşdeğer gelişim düzeyi)."]],
    tools: ["CBCL/1½-5 ve C-TRF", "Güçler ve Güçlükler Anketi (SDQ; Türkçe sürümü var)", "WPPSI-IV", "ADOS-2 ve ADI-R"]
  },
  a6: {
    dx: [["Özgül öğrenme bozukluğu", "Okul yıllarında, hedefe yönelik müdahaleye rağmen en az 6 ay süren güçlük."],
         ["Tik bozuklukları ve Tourette bozukluğu", "Tikler tipik olarak 4-6 yaşta başlar, şiddet sıklıkla 10-12 yaşta zirve yapar."],
         ["Yıkıcı duygudurum düzenleme bozukluğu", "Tanı 6-18 yaş arasında konur; başlangıç 10 yaşından önce."],
         ["Davranım bozukluğu, çocukluk başlangıçlı tip", "En az bir ölçüt 10 yaşından önce."],
         ["Obsesif-kompulsif bozukluk", "Erkeklerde daha erken başlar; olguların yaklaşık dörtte biri 14 yaşından önce başlar."]],
    tools: ["K-SADS-PL DSM-5 (Türkçe sürümü var)", "CBCL/6-18 ve TRF", "WISC-IV / WISC-V", "Conners-3; Turgay DSM-IV Tabanlı Yıkıcı Davranış Bozuklukları Ölçeği", "SDQ"]
  },
  a7: {
    dx: [["Sosyal kaygı bozukluğu", "ABD'de ortanca başlangıç yaşı 13'tür; davranışsal ketlenme önemli bir risk etkenidir."],
         ["Majör depresif bozukluk", "Puberteyle birlikte sıklık artar; kızlarda belirgin yükselme."],
         ["Anoreksiya nervoza", "Başlangıç çoğunlukla ergenlik ve genç yetişkinlikte; puberte öncesi başlangıç da görülür."],
         ["Erken puberteye eşlik eden sorunlar", "Erken olgunlaşan kızlarda depresyon ve riskli davranış riski artar."]],
    tools: ["K-SADS-PL DSM-5", "Çocuklar için Depresyon Ölçeği (CDI)", "SCARED (çocuk ve ebeveyn formları)", "CY-BOCS", "Yale Global Tik Şiddeti Ölçeği"]
  },
  a8: {
    dx: [["Majör depresif bozukluk", "Ergenlikte kızlarda sıklık erkeklerin yaklaşık iki katına çıkar."],
         ["İntihar dışı kendine zarar verme", "DSM-5-TR'de daha ileri araştırma gerektiren durumlar arasındadır; başlangıç sıklıkla erken ergenlikte."],
         ["Bulimiya nervoza ve tıkınırcasına yeme bozukluğu", "Ergenlik ve genç yetişkinlikte başlar."],
         ["Madde kullanımı", "Erken başlangıç sonraki bağımlılık riskini artırır."]],
    tools: ["K-SADS-PL DSM-5", "PHQ-A ya da CDI", "SCARED", "CRAFFT (madde kullanımı)", "Columbia İntihar Şiddeti Derecelendirme Ölçeği (C-SSRS)", "HEEADSSS psikososyal görüşmesi"]
  },
  a9: {
    dx: [["Bipolar bozukluk", "Bipolar I'de ilk epizodun ortalama başlangıç yaşı yaklaşık 18'dir."],
         ["Psikoz için klinik yüksek risk ve şizofreni prodromu", "Yapılandırılmış görüşmelerle (SIPS, CAARMS) değerlendirilir."],
         ["Panik bozukluğu", "Başlangıç geç ergenlik ve genç yetişkinlikte artar."],
         ["Madde kullanım bozuklukları", ""]],
    tools: ["SIPS ya da CAARMS", "Young Mani Derecelendirme Ölçeği", "CRAFFT", "C-SSRS"]
  },
  a10: {
    dx: [["Şizofreni", "İlk psikotik epizot erkeklerde 20'lerin başı-ortası, kadınlarda 20'lerin sonunda zirve yapar."],
         ["Sınır kişilik bozukluğu", "Örüntü ergenlik ve erken yetişkinlikte belirginleşir; 18 yaş altında da en az 1 yıl sürmüş belirtilerle tanı konabilir."],
         ["Panik bozukluğu", "ABD'de ortanca başlangıç 20-24 yaş."],
         ["Duygudurum bozuklukları", "Başlangıç zirvesi yaklaşık 20 yaş (Solmi ve ark., 2022)."]],
    tools: ["SCID-5-CV ve SCID-5-PD", "PANSS", "Ergenlik ve genç yetişkinlikte kimlik değerlendirmesi (AIDA)"]
  },
  a11: {
    dx: [["Peripartum depresyon", "Gebelikte ya da doğumdan sonraki 4 hafta içinde başlar; babalarda da görülür."],
         ["Doğum sonrası psikoz", "Bipolar bozukluk öyküsü en güçlü risk etkenidir; psikiyatrik acil durumdur."],
         ["Alkol kullanım bozukluğu", ""]],
    tools: ["Edinburgh Doğum Sonrası Depresyon Ölçeği (anne ve baba)", "AUDIT", "Yetişkin Bağlanma Görüşmesi (araştırma)"]
  },
  a12: {
    dx: [["Kadınlarda şizofrenide ikinci başlangıç zirvesi", "Orta yaşta görülür ve menopoz geçişiyle ilişkilendirilir."],
         ["Perimenopozal depresyon", "Menopoz geçişinde depresyon riski artar."],
         ["Erken başlangıçlı demans", "Frontotemporal demans sıklıkla 45-65 yaşları arasında başlar; davranış değişikliği ilk belirti olabilir."],
         ["Alkol kullanım bozukluğu komplikasyonları", ""]],
    tools: ["PHQ-9", "AUDIT", "MoCA (bilişsel yakınmada; Türkçe sürümü var)"]
  },
  a13: {
    dx: [["Majör nörobilişsel bozukluk (demans)", "Sıklık yaşla birlikte katlanarak artar."],
         ["Geç başlangıçlı depresyon", "Vasküler risk etkenleri ve bilişsel bozulmayla ilişkilidir."],
         ["Deliryum", "Hastanede yatan yaşlılarda sıktır ve sıklıkla tanınmaz."],
         ["Geç başlangıçlı psikoz", "Organik nedenler dışlanmalıdır."]],
    tools: ["MoCA ve MMSE (Türkçe sürümleri var)", "Geriatrik Depresyon Ölçeği", "Konfüzyon Değerlendirme Yöntemi (CAM)", "Günlük yaşam etkinlikleri (ADL/IADL) değerlendirmesi"]
  }
};
