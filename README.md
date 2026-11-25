# GeniCare (MVC, vanilla JS + Capacitor)

## Struktur
```
www/
  index.html              markup semua layar
  css/style.css
  js/
    app.js                bootstrap + router aksi (data-act)
    config.js             FB (Firebase) & AI_URL  <- ISI DI SINI
    models/               data & aturan bisnis (tanpa DOM)
      userModel.js        login/daftar/reset (Firebase atau demo lokal)
      healthModel.js      catatan minum & berkemih, ringkasan 7 hari
      symptomModel.js     aturan hijau/kuning/merah
      quizModel.js        soal + penilaian
      chatModel.js        panggilan ke backend AI + filter darurat
      store.js            penyimpanan per akun (localStorage)
    views/                render & baca form (satu-satunya yang menyentuh DOM)
    controllers/          menghubungkan view <-> model
    utils/
```
Alur: klik di View -> `data-act` -> Controller -> Model -> Controller memanggil View.

## Jalankan di browser
```
npm i
npm run dev        # buka alamat yang tampil, F12 > mode HP
```
(ES module tidak jalan dari file://, gunakan server lokal / ekstensi Live Server.)

## Aktifkan akun sungguhan + reset kata sandi ke email
1. console.firebase.google.com > buat project > Authentication > Sign-in method > Email/Password: aktifkan.
2. Project settings > tambahkan Web app > salin config ke `FB` di `www/js/config.js`.
3. Authentication > Templates > sesuaikan email reset (bahasa Indonesia). Cek folder Spam saat uji.
Kosong = mode demo (email tidak terkirim).

## Agent chat
Isi `AI_URL`. Backend harus: verifikasi Firebase ID token (header `Authorization: Bearer ...`),
batasi request per pengguna, simpan API key AI di server, dan memakai system prompt:
bahasa awam, tidak mendiagnosis, tidak menyarankan obat/antibiotik, arahkan ke dokter untuk tanda bahaya.
Kontrak: POST `{messages:[{role,content}]}` -> `{reply:"..."}`.

## Jadi APK
```
npm i
npx cap add android
npm run sync
npm run android     # Android Studio: Build > Build APK(s) / Generate Signed Bundle (AAB)
```
Ubah `appId` di capacitor.config.json sebelum rilis. Setelah mengubah file di www/, jalankan `npm run sync`.

## Sebelum rilis ke Play Store
- Pengingat minum: ganti ke `@capacitor/local-notifications` (Notification browser tidak andal di WebView).
- Tombol unduh ringkasan: ganti ke `@capacitor/filesystem` + `@capacitor/share`.
- Data masih di perangkat. Untuk sinkron antar perangkat, ganti `store.js` ke Firestore.
- Ikon & splash native: `@capacitor/assets`. Kebijakan privasi wajib (data kesehatan sensitif; UU PDP 27/2022).
- Minta dokter/dosen menelaah konten edukasi dan aturan symptom checker.
