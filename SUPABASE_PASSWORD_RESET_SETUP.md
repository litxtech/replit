# Supabase Şifre Sıfırlama Ayarları

Şifre sıfırlama özelliğinin çalışması için Supabase Dashboard'da aşağıdaki ayarları yapmanız gerekiyor:

## 1. Site URL Ayarları

1. Supabase Dashboard'a giriş yapın: https://supabase.com/dashboard
2. Projenizi seçin
3. **Settings** > **Authentication** > **URL Configuration** bölümüne gidin
4. **Site URL** alanına sitenizin URL'ini girin:
   ```
   https://www.litxtech.com
   ```
   veya development için:
   ```
   http://localhost:5173
   ```

## 2. Redirect URLs Ayarları

Aynı sayfada **Redirect URLs** bölümüne şu URL'leri ekleyin:

```
https://www.litxtech.com/auth/reset-password
https://www.litxtech.com/auth/callback
http://localhost:5173/auth/reset-password
http://localhost:5173/auth/callback
```

**Önemli:** Her URL'yi ayrı satırda ekleyin ve **Save** butonuna tıklayın.

## 3. Email Template Ayarları (Opsiyonel)

1. **Settings** > **Authentication** > **Email Templates** bölümüne gidin
2. **Reset Password** template'ini seçin
3. Email template'inde `{{ .ConfirmationURL }}` değişkeninin kullanıldığından emin olun

## 4. Test Etme

1. `/auth/reset-password` sayfasına gidin
2. Kayıtlı bir e-posta adresi girin
3. E-postanızı kontrol edin
4. E-postadaki linke tıklayın
5. Yeni şifre belirleme sayfasına yönlendirilmelisiniz

## Sorun Giderme

### E-posta gelmiyor
- Supabase Dashboard'da **Settings** > **Authentication** > **SMTP Settings** bölümünü kontrol edin
- Varsayılan olarak Supabase kendi SMTP sunucusunu kullanır, ancak production için kendi SMTP ayarlarınızı yapmanız önerilir

### Redirect çalışmıyor
- Redirect URL'lerin doğru eklendiğinden emin olun
- URL'lerin tam olarak eşleştiğinden emin olun (trailing slash, http vs https)
- Browser console'da hata mesajlarını kontrol edin

### Token geçersiz hatası
- Token'ların süresi dolmuş olabilir (varsayılan 1 saat)
- Yeni bir şifre sıfırlama isteği gönderin
- Supabase Dashboard'da **Settings** > **Authentication** > **Auth Settings** bölümünde token süresini kontrol edin

## Notlar

- Şifre sıfırlama linkleri 1 saat geçerlidir (varsayılan)
- Her link sadece bir kez kullanılabilir
- Production ortamında HTTPS kullanmanız şiddetle önerilir

