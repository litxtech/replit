import { useState } from 'react'
import { Coffee, Heart, Sparkles, CheckCircle, Loader2 } from 'lucide-react'

const DONATION_AMOUNTS = [
  { amount: 3, label: '$3', description: 'Bir fincan kahve' },
  { amount: 5, label: '$5', description: 'İki fincan kahve' },
  { amount: 10, label: '$10', description: 'Üç fincan kahve' },
]

export function DonationPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [donorName, setDonorName] = useState('')

  const handleDonate = async (amount: number) => {
    if (!amount || amount < 1) {
      setError('Lütfen geçerli bir miktar girin')
      return
    }

    try {
      setLoading(true)
      setError('')

      const response = await fetch('https://www.litxtech.com/api/donation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          donorName: donorName || 'Anonim',
          type: 'coffee-donation'
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Bağış işlemi başlatılamadı')
      }

      const data = await response.json()

      if (data.url) {
        // Stripe Checkout'a yönlendir
        window.location.href = data.url
      } else {
        throw new Error('Ödeme sayfası oluşturulamadı')
      }
    } catch (err: any) {
      console.error('Donation error:', err)
      setError(err.message || 'Bağış işlemi sırasında bir hata oluştu')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const amount = selectedAmount || parseFloat(customAmount)
    if (amount) {
      handleDonate(amount)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600 rounded-full mb-6">
            <Coffee className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Toplanan Bağış Öğrenciye Bir Kahve Ismarla
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Öğrencilere destek olmak için küçük bir bağış yapın. Her bağış, bir öğrencinin gününü güzelleştirir.
          </p>
        </div>

        {/* Donation Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Donor Name (Optional) */}
            <div>
              <label htmlFor="donorName" className="block text-sm font-medium text-gray-300 mb-2">
                Adınız (Opsiyonel)
              </label>
              <input
                id="donorName"
                type="text"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                placeholder="İsminiz (anonim kalabilirsiniz)"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Preset Amounts */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-4">
                Bağış Miktarı Seçin
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {DONATION_AMOUNTS.map((donation) => (
                  <button
                    key={donation.amount}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(donation.amount)
                      setCustomAmount('')
                    }}
                    className={`relative p-6 rounded-xl border-2 transition-all duration-200 ${
                      selectedAmount === donation.amount
                        ? 'border-purple-500 bg-purple-500/20 scale-105'
                        : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">
                        {donation.label}
                      </div>
                      <div className="text-sm text-gray-300">
                        {donation.description}
                      </div>
                      {selectedAmount === donation.amount && (
                        <div className="absolute top-2 right-2">
                          <CheckCircle className="w-6 h-6 text-purple-400" />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div>
              <label htmlFor="customAmount" className="block text-sm font-medium text-gray-300 mb-2">
                Veya Özel Miktar Girin ($)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
                  $
                </span>
                <input
                  id="customAmount"
                  type="number"
                  min="1"
                  step="0.01"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount(null)
                  }}
                  placeholder="0.00"
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || (!selectedAmount && !customAmount)}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  İşleniyor...
                </>
              ) : (
                <>
                  <Heart className="w-6 h-6" />
                  Bağış Yap
                </>
              )}
            </button>
          </form>
        </div>

        {/* Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
            <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Güvenli Ödeme</h3>
            <p className="text-gray-400 text-sm">
              Stripe ile güvenli ödeme altyapısı
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
            <Heart className="w-8 h-8 text-pink-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">%100 Şeffaf</h3>
            <p className="text-gray-400 text-sm">
              Tüm bağışlar doğrudan öğrencilere ulaşır
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
            <Coffee className="w-8 h-8 text-amber-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Anında Etki</h3>
            <p className="text-gray-400 text-sm">
              Bağışınız hemen kullanıma hazır
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

