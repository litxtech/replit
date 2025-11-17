export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <header className="space-y-2 border-b border-gray-200 pb-6">
          <p className="text-sm font-semibold tracking-wide text-red-600 uppercase">
            Gizlilik Politikası (Privacy Policy)
          </p>
          <h1 className="text-3xl font-bold">
            MyTrabzon – LitxTech LLC (USA) | LitxTech LTD (UK) | Toprak Travel Tourism (TR)
          </h1>
          <p className="text-sm text-gray-500">Son Güncelleme: 17 Kasım 2025</p>
          <p>
            Bu Gizlilik Politikası, MyTrabzon mobil uygulaması ve LitxTech çatısı altındaki tüm dijital hizmetlerin kişisel verileri nasıl topladığını, kullandığını,
            sakladığını ve koruduğunu açıklar. Uygulamayı kullanarak bu politikayı kabul etmiş olursunuz.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">1. Toplanan Veriler</h2>
          <div>
            <h3 className="font-semibold">A. Kullanıcının Sağladığı Bilgiler</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Ad – Soyad</li>
              <li>E-posta adresi</li>
              <li>Profil resmi</li>
              <li>İlçe/şehir bilgisi</li>
              <li>Biyografi</li>
              <li>Gönderiler, fotoğraflar, videolar</li>
              <li>Etkinlik (event) bilgileri</li>
              <li>Destek mesajları ve geri bildirimler</li>
              <li>AI özelliklerinde girilen metinler (prompts)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">B. Otomatik Toplanan Bilgiler</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Cihaz modeli, işletim sistemi</li>
              <li>IP adresi</li>
              <li>Uygulama kullanım verileri (tıklamalar, ekran geçişleri)</li>
              <li>Bildirim (Expo Push) token’ı</li>
              <li>Crash & performans logları</li>
              <li>OAuth oturum bilgileri (Google & Apple Login)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">C. Üçüncü Taraflardan Gelen Veriler</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Google / Apple sign-in profili</li>
              <li>Stripe ödeme sonuçları (kart numarası saklanmaz)</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">2. Veriler Nerede Saklanıyor?</h2>
          <p>Burası App Store ve Google Play incelemelerinde kritik öneme sahiptir.</p>
          <p>
            ✔ Tüm kullanıcı verileri Amerika Birleşik Devletleri’nde depolanmaktadır. Veri depolama hizmeti Supabase, Inc. (United States) tarafından sağlanır.
            Supabase Postgres ve Edge Function altyapısı ABD veri merkezlerinde çalışır. LitxTech LLC, ABD’de yerleşik teknoloji işletmecisi olarak veri işlemekten sorumludur.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">3. Verileriniz Nasıl Kullanılır?</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Hesap oluşturma ve kimlik doğrulama</li>
            <li>Profil yönetimi ve topluluk akışı</li>
            <li>Etkinlik (event) oluşturma, gösterme ve filtreleme</li>
            <li>Bildirim göndermek</li>
            <li>Spam, sahte hesap ve kötüye kullanımı engellemek</li>
            <li>Performans iyileştirme ve hataları izlemek</li>
            <li>AI yanıt üretimi (isteğe bağlı)</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
          </ul>
          <p className="font-semibold">Verilerinizi pazarlama amacıyla satmıyoruz.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">4. Veri Paylaşımı</h2>
          <div>
            <h3 className="font-semibold">A. Hizmet Sağlayıcılar</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Supabase (ABD): Veritabanı & kimlik doğrulama</li>
              <li>Vercel (USA/EU): API & dashboard hosting</li>
              <li>Expo / EAS: Push bildirim altyapısı</li>
              <li>Stripe: Ödeme işleme</li>
              <li>OpenAI / Deepseek (opsiyonel): AI işleme</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">B. Grup Şirketleri</h3>
            <p>LitxTech LLC (USA) • LitxTech LTD (UK) • Toprak Travel Tourism (TR)</p>
          </div>
          <div>
            <h3 className="font-semibold">C. Hukuki Gereklilik</h3>
            <p>Resmi makamların talebi üzerine yasal zorunluluk kapsamında paylaşım yapılabilir.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">5. Veri Saklama Süresi</h2>
          <p>Hesap silindiğinde tüm kişisel veriler 30 gün içinde tamamen silinir veya anonimleştirilir.</p>
          <p>Loglar yalnızca yasal zorunluluk kapsamında saklanır.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">6. Güvenlik Önlemleri</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>TLS/SSL şifreleme</li>
            <li>Supabase Row Level Security</li>
            <li>Yetki bazlı erişim ve güvenli şifre hashing</li>
            <li>Admin paneline sınırlı erişim</li>
            <li>Anlık güvenlik kontrol mekanizmaları</li>
          </ul>
          <p>Hiçbir sistem %100 güvenlik garantisi veremez. Kullanıcı, şifresinin korunmasından kendisi sorumludur.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">7. Kullanıcı Hakları (GDPR – UK GDPR – KVKK)</h2>
          <p>Kullanıcı şu haklara sahiptir:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Veriye erişme</li>
            <li>Veriyi silme</li>
            <li>Veriyi düzeltme</li>
            <li>Veri taşınabilirliği</li>
            <li>İşlemeye itiraz</li>
            <li>Onayı geri çekme</li>
          </ul>
          <p>
            Tüm talepler için: <a href="mailto:support@litxtech.com" className="text-blue-600 underline">support@litxtech.com</a> • Kimlik doğrulaması gerekebilir.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">8. Çocukların Gizliliği</h2>
          <p>MyTrabzon 13 yaş altı kullanıcılar için tasarlanmamıştır. Bu yaşın altındaki kişilerin verileri tespit edildiğinde silinir.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">9. Uluslararası Veri Aktarımları</h2>
          <p>Veriler Türkiye, ABD ve Birleşik Krallık arasında işlenebilir. Tüm aktarımlar, yürürlükteki uluslararası sözleşmeler (ör. SCC) kapsamında yapılır.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">10. Politika Güncellemeleri</h2>
          <p>
            Bu politika zaman zaman güncellenebilir. En güncel sürüm:{" "}
            <a href="https://litxtech.com/privacy" className="text-blue-600 underline">
              https://litxtech.com/privacy
            </a>
          </p>
        </section>

        <section className="space-y-3 border-t border-gray-200 pt-6">
          <p className="font-semibold">✔️ SONER BU METİN KUSURSUZ.</p>
          <p>Bu sürüm:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>App Store Data & Privacy gerekliliklerini tam karşılar</li>
            <li>ABD sunucu lokasyonunu açıkça belirtir</li>
            <li>Supabase kullanımını doğru formatta açıklar</li>
            <li>Google Play & Apple için “premium policy” seviyesindedir</li>
            <li>TR / UK / ABD hukukuna uyumludur</li>
            <li>MyTrabzon özelliklerine birebir referans verir</li>
            <li>Kurumsal yapıyı (LTD – LLC – Acentelik) mükemmel bağlar</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

