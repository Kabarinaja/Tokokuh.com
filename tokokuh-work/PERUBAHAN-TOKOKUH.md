# Perubahan Website TOKOKUH.COM

## Pembaruan utama
- Mengganti 11 screenshot lama dengan 11 screenshot asli terbaru dari arsip SCREENSHOT-APK.
- Menamai ulang aset screenshot berdasarkan fungsi agar mudah dikelola.
- Mengurutkan showcase mengikuti alur transaksi: katalog, keranjang, pembayaran, struk, laporan, inventori, riwayat, shift, pengaturan, profil toko, notifikasi.
- Menyempurnakan komponen Orbit3D: rotasi otomatis, jeda/putar, kontrol sebelumnya/berikutnya, drag mouse, swipe/touch, dan lightbox.
- Mengatur kartu screenshot portrait agar gambar utuh dan tidak terpotong.
- Menambahkan motion system ringan, efek hover, ambient glow, dan animasi masuk halaman.
- Menyesuaikan aksen antarmuka menjadi abu-abu terang/netral di atas charcoal; tidak menambahkan gold/emas.
- Menyamarkan nomor telepon yang tampil pada screenshot struk dan pengaturan toko.
- Memperbarui meta keywords dan tanggal sitemap.
- Mempertahankan navigasi anchor biasa (`href`) sehingga perpindahan antarhalaman melakukan pemuatan dokumen browser penuh.

## File penting yang diubah
- `src/data/appData.ts`
- `src/components/Orbit3D.tsx`
- `src/pages/BerandaPage.tsx`
- `src/pages/AplikasiPage.tsx`
- `src/App.tsx`
- `src/index.css`
- `index.html`
- `public/sitemap.xml`
- `public/screenshots/` (11 aset screenshot baru)

## Catatan
Build produksi belum dapat diverifikasi di lingkungan pengerjaan karena proses instalasi dependency npm mengalami timeout. Jalankan `npm install` lalu `npm run build` di komputer/Codespaces sebelum deploy. URL route dan konfigurasi rewrite Vercel yang sudah ada dipertahankan.
