# gelisim
Farklı Kuramlara Göre Gelişim Basamakları

**Ruhsal Gelişim Atlası**: doğum öncesinden yaşlılığa kadar ruhsal gelişimi farklı kuramcıların gözünden karşılaştıran, nörobiyolojik gelişimle eşleştiren ve iddiaları sınayan deneyleri gösteren etkileşimli bir sayfa.

Açmak için `index.html` dosyasını bir tarayıcıda açmanız yeterli (sunucu ya da kurulum gerekmez). GitHub Pages ile de yayınlanabilir.

## Görünümler

| Görünüm | İçerik |
| --- | --- |
| **Yaş görünümü** | 15 yaş dönemi. Her dönemde motor, dil, sosyal-duygusal ve bilişsel gelişim basamakları; kırmızı bayraklar; beyinde olan biten; o dönemi ele alan her kuramın evresi; ilgili deneyler. |
| **Kuram görünümü** | 29 kuram. Ana fikir, gelişimin motoru, yöntem, kanıt düzeyi; her evrenin görevi, basamakları, olumlu ve olumsuz çözümü, nörobiyolojik karşılığı; biyolojik bakış açısı; eleştiriler. |
| **Karşılaştırmalı çizelge** | Tüm kuramların evreleri ve nörobiyolojik izler (sinaptogenez, miyelinizasyon, duyarlı dönemler, endokrin, stres ekseni, ödül-kontrol dengesi) aynı yaş ekseninde. |
| **Deneyler ve kanıt** | 70 deney ve çalışma. Yöntem, bulgu, hangi kuramı desteklediği ya da sorguladığı ve kanıt durumu (sağlam, kısmi, tartışmalı). |

## Kuramlar

- **Psikanalitik ve nesne ilişkileri:** Freud, Klein, Spitz, Winnicott, Mahler
- **Psikososyal ve kimlik:** Erikson, Sullivan, Marcia, Arnett
- **Bilişsel:** Piaget, Vygotsky (yaş krizleri dahil), Fischer (dinamik beceri kuramı)
- **Bağlanma ve öznelerarasılık:** Bowlby ve Ainsworth, Stern, Fonagy ve Gergely
- **Ahlak, ego ve anlam:** Kohlberg, Loevinger, Kegan, Fowler
- **Yetişkinlik ve yaşlanma:** Jung, Levinson, Vaillant, Carstensen, Tornstam
- **Biyolojik ve evrimsel:** Gesell, Thelen ve Smith (dinamik sistemler), mizaç (Thomas ve Chess, Kagan, Rothbart), yaşam öyküsü kuramı (Belsky, Del Giudice), ergen beyninde ikili sistemler (Steinberg, Casey)

## Dosya yapısı

```
index.html            Sayfa iskeleti
assets/style.css      Görsel tasarım (açık ve koyu tema)
assets/app.js         Görünümleri çizen kod (bağımlılık yok)
data/temel.js         Kuram aileleri, kanıt ölçeği, nörobiyolojik izler
data/yaslar-*.js      Yaş dönemleri: basamaklar, nörobiyoloji, klinik notlar
data/kuramlar-*.js    Kuramlar ve evreleri
data/deneyler-*.js    Deneyler ve çalışmalar
```

İçerik eklemek için ilgili `data/` dosyasına aynı biçimde yeni bir kayıt eklemek yeterlidir; sayfa yeni kaydı otomatik olarak tüm görünümlere yerleştirir.

Bu sayfa eğitim amaçlıdır ve klinik değerlendirmenin yerini tutmaz.
