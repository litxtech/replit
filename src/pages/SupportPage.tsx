import { useState } from 'react'

type SupportCategory = {
  id: string
  title: string
  description: string
  checklist: string[]
  contactHint: string
}

const categories: SupportCategory[] = [
  {
    id: 'event',
    title: 'Olay Var Hakkında',
    description: 'Etkinlik oluşturma, bildirilen olaylara katılma veya bildirim eşikleriyle ilgili sorun yaşıyorsanız bu bölümü seçin.',
    checklist: [
      'Olay oluştururken hata mı alıyorsunuz?',
      'Konum/ilçe seçimi görünmüyor mu?',
      'Bildirim gitmedi veya geç mi ulaştı?'
    ],
    contactHint: 'Olay kimliği veya ekran görüntüsü eklemeniz süreci hızlandırır.'
  },
  {
    id: 'post',
    title: 'Paylaşım Hakkında',
    description: 'Gönderi paylaşırken yaşanan teknik problemleri veya moderasyon itirazlarını buradan bildirebilirsiniz.',
    checklist: [
      'Fotoğraf/video yüklenmiyor mu?',
      'İçerik beklenmedik şekilde kaldırıldı mı?',
      'Hashtag araması çalışmıyor mu?'
    ],
    contactHint: 'Paylaşım ID’si veya kaldırılma zamanı önemli.'
  },
  {
    id: 'auth',
    title: 'Kayıt Olma / Giriş',
    description: 'E-posta, Google ya da Apple girişlerinde sorun yaşarsanız bu kategoriyi seçin.',
    checklist: [
      'Doğrulama e-postası gelmedi mi?',
      'Şifre sıfırlama bağlantısı çalışmıyor mu?',
      'Supabase doğrulama ekranında takılıyor musunuz?'
    ],
    contactHint: 'Kullandığınız cihaz/OS ve saat dilimi bilgisini iletin.'
  },
  {
    id: 'other',
    title: 'Diğer Özellikler',
    description: 'Profil, rozetler, AI cevapları veya başka tüm istekleriniz için burayı kullanın.',
    checklist: [
      'Profil rozetleriniz görünmüyor mu?',
      'AI yanıtlarında hata mı var?',
      'Dil/çeviri ile ilgili öneriniz mi var?'
    ],
    contactHint: 'Kısa video ya da log paylaşımı ekibin işini kolaylaştırır.'
  }
]

export function SupportPage() {
  const [selectedCategory, setSelectedCategory] = useState<SupportCategory>(categories[0])
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        <header className="space-y-3 border-b border-gray-200 pb-6">
          <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">MyTrabzon Destek Merkezi</p>
          <h1 className="text-3xl font-bold">Uygulama ile ilgili yardım mı gerekiyor?</h1>
          <p className="text-gray-600">
            Aşağıdaki kategorilerden size uygun olanı seçin. “Destek Bileti Oluştur” butonuna bastığınızda seçtiğiniz konuyla ilgili form açılır ve bizi doğrudan bilgilendirebilirsiniz.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category)
                setIsFormOpen(false)
              }}
              className={`text-left rounded-2xl border p-5 transition-all ${
                selectedCategory.id === category.id
                  ? 'border-blue-500 bg-blue-50 shadow-lg'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/60'
              }`}
            >
              <h2 className="text-lg font-semibold mb-2">{category.title}</h2>
              <p className="text-sm text-gray-600">{category.description}</p>
            </button>
          ))}
        </div>

        <section className="rounded-2xl border border-gray-200 p-6 space-y-4 bg-gray-50">
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase">Seçilen konu</p>
            <h3 className="text-2xl font-bold">{selectedCategory.title}</h3>
            <p className="text-gray-600 mt-2">{selectedCategory.description}</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-gray-800">Hızlı kontrol listesi</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {selectedCategory.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-500">{selectedCategory.contactHint}</p>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 text-white font-semibold px-6 py-3 hover:bg-blue-700 transition-colors"
          >
            Destek Bileti Oluştur
          </button>
        </section>

        {isFormOpen && (
          <section className="rounded-2xl border border-blue-200 p-6 space-y-4 bg-white shadow-lg">
            <h4 className="text-xl font-semibold">Destek Formu</h4>
            <p className="text-sm text-gray-600">
              Seçilen konu: <span className="font-semibold text-blue-600">{selectedCategory.title}</span>
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                  placeholder="Örn. Soner Toprak"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sorununuzu anlatın</label>
                <textarea
                  rows={4}
                  className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                  placeholder="Hangi adımda sorun yaşıyorsunuz? Lütfen mümkün olduğunca detay verin."
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-xl bg-blue-600 text-white font-semibold px-5 py-2 hover:bg-blue-700 transition-colors"
                >
                  Destek talebi gönder
                </button>
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="rounded-xl border border-gray-300 text-gray-700 font-semibold px-5 py-2 hover:bg-gray-100 transition-colors"
                >
                  Formu kapat
                </button>
              </div>
              <p className="text-xs text-gray-500">
                Form gönderimleri Supabase destek tablosuna kaydedilir ve 24 saat içinde yanıtlanır.
              </p>
            </form>
          </section>
        )}
      </div>
    </div>
  )
}

