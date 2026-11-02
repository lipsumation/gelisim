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
