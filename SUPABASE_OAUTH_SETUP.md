# Supabase OAuth Provider Yapılandırma Rehberi

Google ve X (Twitter) ile giriş/kayıt işlemlerinin çalışması için Supabase Dashboard'da OAuth provider'ları yapılandırmanız gerekiyor.

## 1. Google OAuth Yapılandırması

### Adım 1: Google Cloud Console'da Proje Oluşturma

1. https://console.cloud.google.com/ adresine gidin
2. Yeni bir proje oluşturun veya mevcut projeyi seçin
3. **APIs & Services** > **Credentials** bölümüne gidin
4. **Create Credentials** > **OAuth client ID** seçin
5. **Application type**: Web application seçin
6. **Authorized JavaScript origins** ekleyin:
   ```
   https://www.litxtech.com
   https://litxtech.com
   http://localhost:3000
   http://localhost:8081
   ```
7. **Authorized redirect URIs** ekleyin:
   ```
   https://YOUR_PROJECT_ID.supabase.co/auth/v1/callback
   ```
   (YOUR_PROJECT_ID'i Supabase Dashboard'dan alın)
8. **Client ID** ve **Client Secret** değerlerini kopyalayın

### Adım 2: Supabase'de Google Provider'ı Aktif Etme

1. Supabase Dashboard'a gidin: https://supabase.com/dashboard
2. Projenizi seçin
3. **Settings** > **Authentication** > **Providers** bölümüne gidin
4. **Google** provider'ını bulun ve **Enable** butonuna tıklayın
5. **Client ID (for OAuth)** alanına Google'dan aldığınız Client ID'yi yapıştırın
6. **Client Secret (for OAuth)** alanına Google'dan aldığınız Client Secret'ı yapıştırın
7. **Save** butonuna tıklayın

## 2. X (Twitter) OAuth Yapılandırması

### Adım 1: Twitter Developer Portal'da Uygulama Oluşturma

1. https://developer.twitter.com/ adresine gidin
2. Twitter Developer hesabınızla giriş yapın (yoksa oluşturun)
3. **Developer Portal** > **Projects & Apps** bölümüne gidin
4. Yeni bir **App** oluşturun
5. **App settings** > **User authentication settings** bölümüne gidin
6. **App permissions**: Read and write seçin
7. **Type of App**: Web App seçin
8. **Callback URI / Redirect URL** ekleyin:
   ```
   https://YOUR_PROJECT_ID.supabase.co/auth/v1/callback
   ```
9. **Website URL** ekleyin:
   ```
   https://www.litxtech.com
   ```
10. **App ID**, **API Key**, **API Secret** değerlerini kopyalayın

### Adım 2: Supabase'de Twitter Provider'ı Aktif Etme

1. Supabase Dashboard'da **Settings** > **Authentication** > **Providers** bölümüne gidin
2. **Twitter** provider'ını bulun ve **Enable** butonuna tıklayın
3. **API Key** alanına Twitter'dan aldığınız API Key'i yapıştırın
4. **API Secret Key** alanına Twitter'dan aldığınız API Secret'ı yapıştırın
5. **Save** butonuna tıklayın

## 3. Redirect URL Kontrolü

Supabase Dashboard'da **Settings** > **Authentication** > **URL Configuration** bölümünde şu URL'lerin olduğundan emin olun:

```
https://www.litxtech.com/auth/callback
https://litxtech.com/auth/callback
http://localhost:3000/auth/callback
http://localhost:8081/auth/callback
mytrabzon://auth/callback
litxtech://auth/callback
```

## 4. Test Etme

1. `/auth` sayfasına gidin
2. "Google ile Giriş Yap" veya "X (Twitter) ile Giriş Yap" butonuna tıklayın
3. OAuth provider'ın login sayfasına yönlendirilmelisiniz
4. Giriş yaptıktan sonra `/auth/callback` sayfasına yönlendirilmelisiniz
5. Başarılı giriş sonrası ana sayfaya veya onboarding sayfasına yönlendirilmelisiniz

## Sorun Giderme

### "OAuth provider not enabled" hatası
- Supabase Dashboard'da provider'ın aktif olduğundan emin olun
- Client ID ve Secret'ların doğru girildiğini kontrol edin

### "Redirect URI mismatch" hatası
- Google Cloud Console ve Twitter Developer Portal'da redirect URI'lerin doğru olduğundan emin olun
- Supabase project ID'nizi doğru kullandığınızı kontrol edin

### "Invalid client" hatası
- Client ID ve Secret'ların doğru kopyalandığından emin olun
- Boşluk veya fazladan karakter olmadığını kontrol edin

### OAuth sayfası açılmıyor
- Browser console'da hata mesajlarını kontrol edin
- Network tab'ında API isteklerini kontrol edin
- Supabase URL ve key'lerin doğru yapılandırıldığından emin olun

## Önemli Notlar

- OAuth provider ayarları değişikliklerinin etkili olması birkaç dakika sürebilir
- Production ve development için ayrı OAuth uygulamaları oluşturmanız önerilir
- Client Secret'ları asla frontend kodunda veya public repository'lerde saklamayın
- Twitter API v2 kullanıyorsanız, OAuth 2.0 ayarlarını kontrol edin

