/* Yaş dönemleri (1/2): doğum öncesi – 3 yaş.
   Basamaklar: CDC/AAP 2022 (çocukların ≥%75'inin ulaştığı yaş) ve WHO motor standartları temel alınmıştır. */
ATLAS.ages.push(
{
  id: "prenatal", from: -0.75, to: 0, range: "Gebelik", name: "Doğum öncesi",
  gist: "Beynin temel mimarisi kurulur. Annenin stresi, beslenmesi, enfeksiyonlar ve maddeler bu mimariyi 'programlayabilir'; ruhsal gelişimin biyolojik zemini doğumdan önce şekillenmeye başlar.",
  ms: {
    motor: [["7-8. hf", "İlk kendiliğinden fetal hareketler"], ["16-20. hf", "Anne tekmeleri hissetmeye başlar"], ["3. trimester", "Emme, yutma ve el-ağız hareketleri"]],
    dil: [["24-26. hf", "İşitme işlevsel hale gelir"], ["3. trimester", "Anne sesine kalp hızı değişikliğiyle yanıt"], ["Doğumda", "Annenin sesini ve ana dilin ritmini yabancı seslerden ayırır"]],
    sosyal: [["3. trimester", "Anne stres hormonları (kortizol) plasentadan kısmen geçer"], ["Doğumda", "Annenin kokusuna ve sesine yönelme hazırdır"]],
    bilis: [["3. trimester", "Tekrarlanan uyarana alışma (habitüasyon)"], ["3. trimester", "Doğum öncesi öğrenme: sık okunan hikâyenin ritmini tanıma"]]
  },
  flags: [],
  neuro: [
    "Nöral tüp gebeliğin 3-4. haftasında kapanır; folik asit eksikliği nöral tüp defektlerine yol açar.",
    "Nörogenez yaklaşık 5-25. haftalarda en yoğundur; zirvede dakikada yüz binlerce nöron üretilir.",
    "Nöronlar ventriküler bölgeden kortekse göç eder (≈12-24. hf). Göç bozuklukları lizensefali ve heterotopiye neden olur.",
    "24-32. haftalarda talamokortikal bağlantılar subplate aracılığıyla kurulur; sinaptogenez hızlanır.",
    "Miyelinizasyon beyin sapında başlar; korteks doğumda büyük ölçüde miyelinsizdir."
  ],
  clinic: "<b>Klinik pencere:</b> Prenatal alkol (FASD), enfeksiyonlar (rubella, CMV, Zika), ağır stres ve kıtlık nörogelişimsel risk taşır. Hollanda Açlık Kışı ve ALSPAC verileri, doğum öncesi koşulların erişkin ruh sağlığına kadar uzanan izler bırakabildiğini gösterir.",
  exps: ["decasper80", "heijmans08", "oconnor02"]
},
{
  id: "a0", from: 0, to: 0.25, range: "0–3 ay", name: "Yenidoğan ve erken bebeklik",
  gist: "Bebek refleksler, uyku-uyanıklık döngüleri ve bakımverenle yüz yüze etkileşimle dünyaya ayarlanır. Sosyal gülümseme ilk 'psişik organizatör' olarak ortaya çıkar.",
  ms: {
    motor: [["Doğum", "İlkel refleksler: emme, arama, Moro, avuç içi yakalama"], ["2 ay", "Yüzüstüyken başını kaldırır"], ["2 ay", "Kol ve bacaklarını iki yanda da hareket ettirir; ellerini kısa süre açar"]],
    dil: [["Doğum", "Ağlama ile ihtiyaçlarını iletir"], ["2 ay", "Ağlama dışında sesler çıkarır (agulama)"], ["2 ay", "Yüksek seslere tepki verir"]],
    sosyal: [["Doğum", "Yüz benzeri desenleri gözüyle daha uzun izler"], ["2 ay", "Konuşulunca ya da kucağa alınınca sakinleşir"], ["2 ay", "Siz gülümseyince gülümser (sosyal gülümseme)"]],
    bilis: [["2 ay", "Hareket eden bir şeyi gözüyle izler"], ["2 ay", "Bir oyuncağa birkaç saniye bakar"], ["0-3 ay", "Kendi hareketiyle sonuç arasındaki bağı (olumsallık) fark eder"]]
  },
  flags: ["2. ayda yüksek seslere tepki yok", "Hareket eden nesneyi gözle izlemiyor", "3. ayda sosyal gülümseme yok"],
  neuro: [
    "Beyin doğumda yetişkin hacminin yaklaşık üçte biridir; ilk yılda toplam hacim kabaca iki katına çıkar (Knickmeyer ve ark., 2008).",
    "İlkel refleksler beyin sapı ve omurilik düzeyindedir; kortikospinal yollar olgunlaştıkça 3-6 ayda baskılanır.",
    "Görme keskinliği düşüktür; yüz tercihi subkortikal (kolikulus-pulvinar) yolla açıklanır (Johnson ve Morton).",
    "Sirkadiyen ritim 2-3. ayda oturmaya başlar; endojen gülümsemenin yerini sosyal gülümseme alır."
  ],
  clinic: "<b>Klinik pencere:</b> Doğum sonrası depresyon annelerin yaklaşık %10-15'ini etkiler. Durgun yüz deneyi, bakımverenin duygusal olarak ulaşılamaz oluşunun bebeği nasıl etkilediğini modeller.",
  exps: ["johnson91", "meltzoff77", "decasper80", "tronick78", "murray85"]
},
{
  id: "a1", from: 0.25, to: 0.5, range: "3–6 ay", name: "Karşılıklı etkileşim dönemi",
  gist: "Bebek ve bakımveren yüz yüze 'proto-konuşmalar' kurar. Duygusal ayarlanma, sıra alma ve ilk beklentiler bu karşılıklı ritimde öğrenilir.",
  ms: {
    motor: [["4 ay", "Başını desteksiz dik tutar"], ["4 ay", "Oyuncağa uzanır, elini ağzına götürür"], ["6 ay", "Sırtüstünden yüzüstüne döner"], ["6 ay", "Otururken elleriyle destek alır"]],
    dil: [["4 ay", "Agulama: 'ooo', 'aaa' sesleri"], ["4 ay", "Sesinize başını çevirir"], ["6 ay", "Sizinle sırayla ses çıkarır"], ["6 ay", "Dudak titretme, ciyaklama sesleri"]],
    sosyal: [["4 ay", "Dikkat çekmek için gülümser, güler"], ["4 ay", "Size bakarak, hareket ederek etkileşim başlatır"], ["6 ay", "Tanıdık kişileri tanır"], ["6 ay", "Aynadaki görüntüsüne bakmaktan hoşlanır"]],
    bilis: [["4 ay", "Acıkınca meme ya da biberonu görünce ağzını açar"], ["4 ay", "Ellerine ilgiyle bakar"], ["6 ay", "Nesneleri ağzına götürerek keşfeder"], ["6 ay", "İstediği bir şeye uzanır"]]
  },
  flags: ["4. ayda baş kontrolü yok", "6. ayda dönmüyor, nesneye uzanmıyor", "Sesli gülme ve karşılıklı ses alışverişi yok"],
  neuro: [
    "Görsel kortekste sinaps yoğunluğu hızla zirveye yaklaşır (yaklaşık 4-8. aylar).",
    "Binoküler görme ve stereopsis yaklaşık 4. ayda ortaya çıkar; şaşılık bu dengeyi bozar.",
    "Mini-puberte: 1-6. aylarda gonadal hormonlarda geçici artış görülür.",
    "Frontal EEG asimetrisi yaklaşma ya da çekingenlik eğilimiyle ilişkilendirilmiştir (Fox, Davidson)."
  ],
  clinic: "<b>Klinik pencere:</b> Konjenital katarakt ya da şaşılık bu dönemde tedavi edilmezse ambliyopi kalıcılaşabilir. Kritik dönem kavramının klinikteki en açık karşılığı budur.",
  exps: ["baillargeon87", "hubel63", "legrand01", "tronick78", "murray85"]
},
{
  id: "a2", from: 0.5, to: 1, range: "6–12 ay", name: "Bağlanmanın belirginleştiği dönem",
  gist: "Bebek belirli kişilere seçici olarak bağlanır; yabancı kaygısı ve ayrılık protestosu başlar. Ortak dikkatle 'üçlü' (ben-sen-nesne) ilişki doğar. Algı, ana dilin seslerine ve tanıdık yüzlere göre daralır.",
  ms: {
    motor: [["9 ay", "Desteksiz oturur"], ["9 ay", "Nesneyi bir elinden diğerine aktarır"], ["12 ay", "Tutunarak ayağa kalkar, mobilyaya tutunarak yürür"], ["12 ay", "Başparmak ve işaret parmağıyla küçük nesneleri tutar (kıskaç kavrama)"]],
    dil: [["9 ay", "'Mamama', 'bababa' gibi hece tekrarları (kanonik agulama)"], ["9 ay", "Adı söylenince bakar"], ["12 ay", "El sallar ('bay bay')"], ["12 ay", "Anne/babaya özel bir ad kullanır; 'hayır'ı anlar"]],
    sosyal: [["9 ay", "Yabancılara karşı utangaç, yapışkan ya da korkulu"], ["9 ay", "Yüz ifadeleri gösterir: mutlu, üzgün, kızgın, şaşkın"], ["9-12 ay", "Ortak dikkat: işaret edilen yere bakar"], ["12 ay", "Sizinle 'ce-e' gibi oyunlar oynar"]],
    bilis: [["9 ay", "Gözden kaybolan nesneyi arar"], ["9 ay", "İki nesneyi birbirine vurur"], ["12 ay", "Bir şeyi kaba koyar"], ["12 ay", "Sakladığınız şeyi arar (A-değil-B hatası azalır)"]]
  },
  flags: ["9. ayda adına tepki yok, hece tekrarı yok", "12. ayda işaret etme, el sallama gibi jestler yok", "Desteksiz oturamıyor", "Kazanılmış bir becerinin kaybı (her yaşta kırmızı bayraktır)"],
  neuro: [
    "PET çalışmaları prefrontal kortekste glukoz metabolizmasının yaklaşık 8. ayda arttığını gösterir (Chugani ve ark., 1987).",
    "A-değil-B görevindeki başarı dorsolateral prefrontal korteksin olgunlaşmasıyla ilişkilidir (Diamond ve Goldman-Rakic, 1989).",
    "Algısal daralma: yabancı dil fonemlerini ve başka türlerin yüzlerini ayırt etme yeteneği 6-12 ay arasında azalır.",
    "Emeklemenin başlaması görsel-vestibüler bütünleşmeyi ve yükseklik korkusunu değiştirir (Campos ve ark.)."
  ],
  clinic: "<b>Klinik pencere:</b> Kurumsal bakım ve ağır ihmal bağlanma sisteminin kurulmasını engeller. Bükreş Erken Müdahale Projesi'ne göre 24 aydan önce koruyucu aileye yerleştirilen çocuklarda güvenli bağlanma oranı daha yüksektir.",
  exps: ["werker84", "pascalis02", "diamond89", "gibson60", "kuhl03", "hamlin07", "beip07", "ainsworth78"]
},
{
  id: "a3", from: 1, to: 1.5, range: "12–18 ay", name: "Yürüme ve keşif",
  gist: "Bağımsız yürümeyle dünya genişler. Çocuk bakımvereni 'güvenli üs' olarak kullanır: uzaklaşır, keşfeder, duygusal yakıt için geri döner. İlk kelimeler ve paylaşmak için göstermek ortaya çıkar.",
  ms: {
    motor: [["12-15 ay", "Bağımsız ilk adımlar (WHO: 8-18 ay arası normal)"], ["15 ay", "Parmaklarıyla yiyecekleri alıp yer"], ["18 ay", "Desteksiz yürür; bardaktan içer"], ["18 ay", "Kaşık kullanmaya çalışır; koltuklara tırmanır"]],
    dil: [["15 ay", "'Anne/baba' dışında 1-2 kelime söyler"], ["15 ay", "Adı söylenen tanıdık nesneye bakar"], ["18 ay", "Üç ya da daha fazla kelime kullanır"], ["18 ay", "Jest olmadan tek adımlı yönergeyi izler"]],
    sosyal: [["15 ay", "Sevdiği bir nesneyi size göstermek için getirir"], ["15 ay", "Başka çocukları taklit eder"], ["18 ay", "Sizden uzaklaşır ama yakında olduğunuzu kontrol eder"], ["14-18 ay", "Zorlanan birine kendiliğinden yardım eder"]],
    bilis: [["15 ay", "Nesneleri işlevine uygun kullanmaya çalışır (telefon, kitap)"], ["18 ay", "Basit sembolik oyun: bebeği besler"], ["12-18 ay", "Deneme-yanılma ile sonuçları dener"]]
  },
  flags: ["18. ayda yürümüyor", "16. ayda tek kelime yok", "İlgi paylaşmak için işaret etmiyor", "Bakımverenin gidip gelmesini fark etmiyor"],
  neuro: [
    "Kelime öğrenmesiyle birlikte sol perisilviyan dil ağı (Broca-Wernicke, arkuat fasikül) uzmanlaşır.",
    "Motor korteks, serebellum ve kortikospinal yolların miyelinizasyonu yürümeyi destekler.",
    "Kortikal kalınlık yaklaşık 1,5-2 yaşta zirve yapar, sonra yavaşça incelir (Bethlehem ve ark., 2022).",
    "Prefrontal sinaptogenez duyusal bölgelerden daha geç zirve yapar; budanması ergenliğe kadar sürer."
  ],
  clinic: "<b>Klinik pencere:</b> AAP, otizm spektrum bozukluğu için 18. ve 24. aylarda M-CHAT-R/F ile tarama önerir. Ortak dikkat ve paylaşmak için gösterme eksikliği erken işaretlerdir.",
  exps: ["ainsworth78", "warneken06", "gibson60", "gesell29", "thelen82", "mahler75"]
},
{
  id: "a4", from: 1.5, to: 3, range: "18–36 ay", name: "Özerklik ve benliğin doğuşu",
  gist: "Çocuk aynada kendini tanır, 'ben' ve 'hayır' der. Utanç ve gurur gibi öz-bilinçli duygular ortaya çıkar. Dil patlaması yaşanır, sembolik oyun zenginleşir, tuvalet kontrolü kazanılır.",
  ms: {
    motor: [["2 yaş", "Koşar, topa tekme atar"], ["2 yaş", "Kaşıkla yer"], ["30 ay", "İki ayağıyla zıplar"], ["3 yaş", "Bazı giysilerini kendisi giyer; çatal kullanır"], ["2-3 yaş", "Gündüz tuvalet kontrolü (kültüre göre değişir)"]],
    dil: [["2 yaş", "İki kelimeyi birleştirir ('su ver')"], ["2 yaş", "Kitapta sorulan resmi gösterir"], ["30 ay", "Yaklaşık 50 kelime kullanır"], ["3 yaş", "Sohbette en az iki karşılıklı söz alışverişi"], ["3 yaş", "'Ne, nerede, kim' soruları sorar"]],
    sosyal: [["18-24 ay", "Aynada kendini tanır (allık testi)"], ["2 yaş", "Başkası üzülünce fark eder"], ["2 yaş", "Yeni durumda nasıl tepki vereceğini anlamak için yüzünüze bakar"], ["3 yaş", "Siz ayrıldıktan sonra 10 dakika içinde sakinleşir"], ["3 yaş", "Başka çocukları fark eder, oyuna katılır"]],
    bilis: [["2 yaş", "Birden fazla adımlı sembolik oyun"], ["30 ay", "Basit problem çözme: uzanmak için tabureye çıkar"], ["3 yaş", "Uyarıldığında sıcak fırından uzak durur"], ["3 yaş", "Gösterildiğinde daire çizer"]]
  },
  flags: ["24. ayda anlamlı iki kelimelik ifade yok", "Taklit etmiyor, basit yönergeleri izlemiyor", "3 yaşta konuşması anlaşılmıyor, göz teması yok", "Kazanılmış becerilerin kaybı"],
  neuro: [
    "Dil patlamasıyla dil yollarında (arkuat fasikül) miyelinizasyon hızlanır.",
    "Ön singulat ve prefrontal korteksin olgunlaşmasıyla 'çaba gerektiren kontrol' (effortful control) ortaya çıkar (Rothbart ve Posner).",
    "Kortikal kontrolün pontin işeme merkezi üzerinde güçlenmesi tuvalet kontrolünü mümkün kılar.",
    "Hipokampustaki yüksek nörogenez hızı uzun süreli epizodik anıların silinmesine katkı yapar; bebeklik amnezisinin olası biyolojik temelidir (Akers ve ark., 2014)."
  ],
  clinic: "<b>Klinik pencere:</b> Dil gecikmesinde önce işitme değerlendirilir. Ayırıcı tanıda otizm, işitme kaybı ve gelişimsel dil bozukluğu birlikte düşünülür. Öfke nöbetleri bu yaşta normatiftir; sıklık, süre ve kendine zarar verme ölçütleri ayırt edicidir.",
  exps: ["lewis79", "mahler75", "robertson52", "akers14", "beip07", "era17"]
}
);
