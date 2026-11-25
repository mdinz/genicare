# Backend AI GeniCare (Cloudflare Worker + Gemini, tier GRATIS)

Fungsi: menerima pertanyaan dari aplikasi, memastikan penanya sudah login (token Firebase),
lalu meneruskan ke Gemini API dengan system prompt kesehatan yang aman. API key tidak ada di aplikasi.

## Siapkan (semua gratis, tanpa kartu kredit)
1. API key Gemini: buka aistudio.google.com/apikey, login Google, klik "Create API key".
2. Akun gratis di dash.cloudflare.com.

## Deploy (dari terminal VS Code)
```
cd backend
npx wrangler login
npx wrangler secret put GEMINI_API_KEY     # tempel key, Enter
npx wrangler deploy
```
Hasilnya alamat seperti https://genicare-ai.<akunmu>.workers.dev
Tempel alamat itu ke `AI_URL` di `www/js/config.js`.

## Catatan penting tier gratis
- Ada batas permintaan per menit/hari per project (lihat di aistudio.google.com/rate-limit). Bila habis, aplikasi menampilkan "Layanan AI sedang penuh".
- Di tier gratis, isi percakapan dapat dipakai Google untuk meningkatkan produk mereka. Beri tahu pengguna di kebijakan privasi
  dan sarankan pengguna tidak menulis nama/identitas dalam chat. Untuk rilis luas, pertimbangkan tier berbayar yang datanya tidak dipakai untuk pelatihan.
- Bila muncul error model tidak ditemukan, ganti `MODEL` di wrangler.toml dengan model yang tersedia gratis di AI Studio, lalu `npx wrangler deploy` lagi.
- Pembatas 20 pertanyaan/10 menit/pengguna bersifat sederhana. Untuk produksi, aktifkan Rate Limiting Cloudflare.
- Tambah domain lain ke ALLOWED_ORIGINS bila perlu. Capacitor Android memakai https://localhost.
- Lihat log: `npx wrangler tail`.
