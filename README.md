# gelisim
Farklı Kuramlara Göre Gelişim Basamakları

**Ruhsal Gelişim Atlası**: psikiyatri ve çocuk psikiyatrisi asistanları ile uzmanları için hazırlanmış etkileşimli bir gelişim kaynağıdır. Klasik ve az bilinen gelişim kuramlarını aynı yaş ekseninde karşılaştırır, nörobiyolojik gelişimle eşleştirir ve kuramları sınayan deneyleri doğrulanmış kaynaklarıyla gösterir.

Açmak için `index.html` dosyasını tarayıcıda açmanız yeterlidir (sunucu ya da kurulum gerekmez). GitHub Pages ile de yayınlanabilir.

## Görünümler

| Görünüm | İçerik |
| --- | --- |
| **Kapak** | Başlık levhası; kuram ailelerinin yaşam boyu akış grafiği (her şeridin kalınlığı o yaşta evre tanımlayan kuram sayısı) ve ortalama kortikal olgunlaşma çizgisi; içindekiler ve atlasın özeti. |
| **Yaş** | 15 yaş dönemi. 0-5 yaş için CDC 2022 kontrol listelerinin tamamı (12 yaş noktası, 159 basamak, Türkçe), araştırma literatüründen ek basamaklar, değerlendirme gerektiren durumlar, beyin gelişimi ve küçük beyin haritası, DSM-5-TR / DC:0-5 psikopatoloji penceresi, tarama ve değerlendirme araçları, kuramların o döneme bakışı, deneyler. |
| **Kuram** | 42 kuram. Ana fikir, gelişimin motoru, yöntem, kanıt düzeyi; evrelerin görevi, basamakları, olumlu ve olumsuz sonucu, nörobiyolojik karşılığı; biyolojik bakış; eleştiriler; klinik uygulama; deneyler (destekler / sorgular); temel kaynaklar. |
| **Karşılaştır** | 2-3 kuramı aynı yaş satırlarında yan yana gösterir; isteğe bağlı nörobiyoloji sütunu; akademik notlu 13 hazır karşılaştırma. |
| **Beyin levhaları** | Gray's Anatomy (1918) Şekil 726 ve 727 gravürleri üzerinde 18 bölge (serebellum ve beyin sapı aynı üslupta eklenmiş); yaş kaydırıcısı ve yaşam boyu oynatma; bölge işlevi, olgunlaşma eğrisi, zaman çizelgesi, ilgili kuramlar, çalışmalar ve klinik bağlantı; o yaşta en hızlı değişen bölgeler. |
| **Çizelge** | Tüm kuramların evreleri ve yedi nörobiyolojik iz aynı yaş ekseninde. |
| **Deneyler** | 95 çalışma (9'u kurama dayalı müdahale denemesi): yöntem, bulgu, desteklediği ve sorguladığı kuramlar, kanıt durumu, DOI ve PubMed bağlantıları. |
| **Ders ve sunum** | Yaş dönemi, kuram, karşılaştırma ve yaşam boyu turu dersleri; 16:9 sunum, konuşmacı notları, otomatik tartışma soruları; klavye (←/→, N, F, Esc) ve kaydırma ile gezinme. Yaş, kuram ve karşılaştırma ekranlarında "Sun" düğmesi. |
| **Kaynakça** | 141 doğrulanmış kaynak (DOI: Crossref, PMID: PubMed) ve kuramların temel eserleri. |

## Kuramlar

- **Psikanalitik ve nesne ilişkileri:** Freud, Klein, Spitz, Winnicott, Anna Freud, Blos, Kohut, Mahler, Kernberg
- **Psikososyal ve kimlik:** Erikson, Sullivan, Marcia, Kağıtçıbaşı, Arnett
- **Bilişsel:** Piaget, Vygotsky (yaş krizleri dahil), Fischer, Case
- **Bağlanma ve öznelerarasılık:** Bowlby ve Ainsworth, Stern, Fonagy ve Gergely, Tomasello, Crittenden (DMM)
- **Ahlak, ego ve anlam:** Kohlberg, Selman, Loevinger, Kegan, Fowler, Gilligan
- **Yetişkinlik ve yaşlanma:** Jung, Levinson, Vaillant, Baltes, Carstensen, Tornstam
- **Biyolojik ve evrimsel:** Gesell, Thelen ve Smith, mizaç (Thomas ve Chess, Kagan, Rothbart), yaşam öyküsü kuramı, ergen beyninde ikili sistemler, nörosekansiyel model
- **Gelişimsel psikopatoloji:** Sroufe, Cicchetti ve Rutter

## Tasarım

Gravür: 19. yüzyıl anatomi atlası üslubu (sepya mürekkep, fildişi kâğıt, levha çerçeveleri, Cormorant ve EB Garamond, küçük büyük harfler, eski üslup rakamlar). Koyu temada aynı atlas "gece levhası" olarak görünür. Her kuram ailesinin bir simgesi vardır; çizelgede seçili yaş çizgisi ve imleç kılavuzu, yaş değişiminde yumuşak geçiş bulunur.

## Kaynaklar ve yöntem notları

- 0-5 yaş basamakları CDC "Learn the Signs. Act Early." sayfalarından kelimesi kelimesine çevrilmiştir. Basamaklar çocukların en az %75'inin ulaşması beklenen becerilerdir: Zubler ve ark. (2022), *Pediatrics*, 149(3), e2021052138, https://doi.org/10.1542/peds.2021-052138
- Deney kaynaklarının DOI ve PMID numaraları tek tek doğrulanmıştır.
- Beyin haritasındaki olgunlaşma endeksi şematiktir. Her bölge için yaş-değer çapa noktaları Gogtay ve ark. (2004), Bethlehem ve ark. (2022), Huttenlocher ve Dabholkar (1997) ile Casey ve ark. (2008) bulgularının nitel özetidir; ölçülmüş bir değer değildir.
- Beyin levhaları: Henry Vandyke Carter, *Gray's Anatomy of the Human Body*, 20. baskı (1918), Şekil 726 ve 727; kamu malı (Wikimedia Commons).
- Tanı ölçütleri için DSM-5-TR ve DC:0-5 el kitaplarının kendisine başvurulmalıdır.

## Dosya yapısı

```
index.html               Sayfa iskeleti
assets/style.css         Görsel tasarım (açık ve koyu tema)
assets/util.js           Ortak yardımcılar, veri birleştirme, olgunlaşma modeli
assets/app.js            Yaş, kuram, çizelge ve deney görünümleri; yönlendirme
assets/view-brain.js     Beyin haritası
assets/view-compare.js   Karşılaştırma modu
assets/view-refs.js      Kaynakça
assets/view-cover.js     Kapak ve akış grafiği
assets/view-deck.js      Ders kurucu ve sunum modu
assets/img/              Gray's Anatomy levhaları (kamu malı)
data/temel.js            Kuram aileleri, kanıt ölçeği, nörobiyolojik izler
data/yaslar-*.js         Yaş dönemleri
data/cdc.js              CDC 2022 basamakları (Türkçe)
data/yas-klinik.js       Ek basamaklar, psikopatoloji penceresi, tarama araçları
data/kuramlar-*.js       Kuramlar ve evreleri
data/kuram-klinik.js     İlk 29 kuramın klinik uygulaması ve temel eserleri
data/deneyler-*.js       Deneyler ve müdahale çalışmaları
data/kaynaklar.js        Doğrulanmış kaynaklar (DOI / PMID)
data/beyin.js            Beyin bölgeleri ve olgunlaşma eğrileri
data/karsilastirma.js    Hazır karşılaştırmalar ve notlar
```

İçerik eklemek için ilgili `data/` dosyasına aynı biçimde yeni bir kayıt eklemek yeterlidir; sayfa yeni kaydı tüm görünümlere otomatik olarak yerleştirir.

Bu kaynak eğitim amaçlıdır ve klinik değerlendirmenin yerini tutmaz.
