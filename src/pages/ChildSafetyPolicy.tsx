import { Shield, Users, FileText, Mail, Globe, CheckCircle } from 'lucide-react'

export function ChildSafetyPolicy() {
  return (
    <div className="min-h-screen relative">
      <div className="animated-bg"></div>
      <div className="bg-overlay"></div>
      <div className="particles"></div>

      <div className="max-w-4xl mx-auto px-4 py-20 relative z-10">
        <div className="glass-card p-8 mb-8">
          <div className="text-center mb-8">
            <Shield className="w-16 h-16 mx-auto mb-4 text-blue-400" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              📘 MyTRABZON Çocuk Güvenliği Politikası
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Son güncelleme: 11 Kasım 2025 | Yürürlük tarihi: 11 Kasım 2025
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
              MyTRABZON, kullanıcı güvenliği ve özellikle çocukların korunması konusunda en yüksek etik ve yasal standartlara uymayı taahhüt eder.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-200">
            
            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300 px-3 py-1 rounded-full text-lg font-bold mr-4">🔒</span>
                1. Güvenli Topluluk İlkeleri
              </h2>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-4">
                <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                  <li>MyTRABZON'da <strong>18 yaş altı kullanıcılar</strong> doğrudan hedef alınmaz, reklam ve içerikler yetişkin denetimi altındadır.</li>
                  <li>Tüm kullanıcılar topluluk kurallarını kabul ederek kayıt olur.</li>
                  <li><strong>Cinsel içerikli, uygunsuz veya şiddet barındıran paylaşımlar</strong> anında kaldırılır.</li>
                  <li><strong>Otomatik filtreleme (AI moderasyon)</strong> sistemi uygunsuz kelime, fotoğraf veya davranışları tespit edip engeller.</li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300 px-3 py-1 rounded-full text-lg font-bold mr-4">🚫</span>
                2. Çocukların Cinsel İstismarına Karşı Koruma
              </h2>
              
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 dark:border-red-600 p-6 mb-4">
                <p className="text-gray-700 dark:text-gray-300 mb-4 font-semibold">
                  MyTRABZON, çocuk istismarı ve sömürüsüne dair her türlü içeriği veya davranışı kesin olarak yasaklar.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">Tespit edilen her durum:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Derhal uygulamadan kaldırılır</li>
                  <li>Kullanıcı kalıcı olarak yasaklanır</li>
                  <li>Gerekli durumlarda ilgili yasal mercilere bildirilir</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-6 h-6 mr-2 text-green-600 dark:text-green-400" />
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">
                    Raporlama mekanizmamız, kullanıcıların tek dokunuşla şikayet gönder seçeneğiyle hızlı işlem yapmasını sağlar.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300 px-3 py-1 rounded-full text-lg font-bold mr-4">🧠</span>
                3. Şikayet ve Raporlama Süreci
              </h2>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                  <li>Uygulamada <strong>"Şikayet Et"</strong> seçeneği her kullanıcı profili ve içerikte görünür.</li>
                  <li>Şikayetler moderasyon ekibine ve <a href="mailto:support@litxtech.com" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">support@litxtech.com</a> adresine otomatik olarak ulaşır.</li>
                  <li><strong>Tüm raporlar en geç 24 saat içinde incelenir.</strong></li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-300 px-3 py-1 rounded-full text-lg font-bold mr-4">🧑‍💻</span>
                4. Yasal Uyum
              </h2>
              
              <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  MyTRABZON, aşağıdaki uluslararası ve yerel düzenlemelere uygun hareket eder:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-gray-700 dark:text-gray-300">Türkiye Cumhuriyeti Kanunları</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-gray-700 dark:text-gray-300">COPPA (Children's Online Privacy Protection Act)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-gray-700 dark:text-gray-300">EU GDPR – Çocuk Verisi Koruma Maddeleri</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-gray-700 dark:text-gray-300">Google Play Çocuk Güvenliği Standartları</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="bg-teal-100 text-teal-800 dark:bg-teal-900/20 dark:text-teal-300 px-3 py-1 rounded-full text-lg font-bold mr-4">📬</span>
                5. İletişim
              </h2>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Her türlü çocuk güvenliği veya istismar şüphesine dair iletişim adresi:</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <a href="mailto:support@litxtech.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">support@litxtech.com</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <span className="text-gray-700 dark:text-gray-300">Yetkili kişi: <strong>Soner Toprak</strong> (LitxTech LLC – Güvenlik Yetkilisi)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300">Adres: LitxTech LLC, 30 N Gould St STE R, Sheridan, WY 82801, USA</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300 px-3 py-1 rounded-full text-lg font-bold mr-4">📄</span>
                6. Politika Güncellemeleri
              </h2>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                <p className="text-gray-700 dark:text-gray-300">
                  Bu politika zaman zaman güncellenebilir. Her güncellemede en son sürüm{' '}
                  <a href="https://mytrabzon.com/child-safety-policy" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">
                    https://mytrabzon.com/child-safety-policy
                  </a>{' '}
                  adresinde yayınlanır.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}
