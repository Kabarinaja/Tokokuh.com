export interface ScreenshotItem {
  id: string;
  filename: string;
  path: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
}

export const APP_SCREENSHOTS: ScreenshotItem[] = [
  {
    id: "kasir-katalog",
    filename: "tokokuh-kasir-katalog.png",
    path: "/screenshots/tokokuh-kasir-katalog.png",
    title: "Kasir dan Katalog Produk",
    category: "Kasir",
    tagline: "Temukan produk dan mulai transaksi dari satu layar.",
    description: "Tampilan utama kasir menampilkan pencarian produk atau barcode, kategori, katalog bergambar, harga, stok, serta ringkasan keranjang belanja.",
    features: ["Pencarian produk", "Kategori produk", "Informasi harga dan stok", "Ringkasan keranjang"]
  },
  {
    id: "keranjang-belanja",
    filename: "tokokuh-keranjang-belanja.png",
    path: "/screenshots/tokokuh-keranjang-belanja.png",
    title: "Keranjang Belanja",
    category: "Transaksi",
    tagline: "Periksa pesanan sebelum melanjutkan pembayaran.",
    description: "Daftar barang yang dipilih ditampilkan bersama kontrol jumlah, subtotal, dan total tagihan agar kasir dapat memeriksa pesanan sebelum membayar.",
    features: ["Daftar produk terpilih", "Kontrol kuantitas", "Subtotal dan total tagihan", "Tombol lanjut pembayaran"]
  },
  {
    id: "pembayaran",
    filename: "tokokuh-pembayaran-kembalian.png",
    path: "/screenshots/tokokuh-pembayaran-kembalian.png",
    title: "Pembayaran dan Kembalian",
    category: "Pembayaran",
    tagline: "Bantu kasir menghitung pembayaran tunai dengan jelas.",
    description: "Layar pembayaran menampilkan total tagihan, pilihan tunai dan non-tunai, nominal uang diterima, pilihan nominal cepat, serta hasil perhitungan kembalian.",
    features: ["Pilihan tunai dan non-tunai", "Input uang diterima", "Nominal cepat", "Perhitungan kembalian"]
  },
  {
    id: "preview-struk",
    filename: "tokokuh-preview-struk.png",
    path: "/screenshots/tokokuh-preview-struk.png",
    title: "Preview Struk Transaksi",
    category: "Struk",
    tagline: "Tinjau bukti transaksi sebelum mencetaknya.",
    description: "Preview struk menampilkan identitas toko, nomor dan waktu transaksi, kasir, metode pembayaran, daftar barang, subtotal, total, uang bayar, serta kembalian. Tersedia kontrol cetak Bluetooth pada layar aplikasi.",
    features: ["Rincian transaksi", "Identitas toko", "Informasi pembayaran", "Opsi cetak Bluetooth"]
  },
  {
    id: "laporan-finansial",
    filename: "tokokuh-laporan-finansial.png",
    path: "/screenshots/tokokuh-laporan-finansial.png",
    title: "Laporan Finansial dan Omzet",
    category: "Laporan",
    tagline: "Lihat ringkasan performa usaha dalam satu tampilan.",
    description: "Halaman laporan merangkum laba bersih, omzet, laba kotor, modal, biaya operasional, rincian penjualan, jumlah transaksi, dan produk terlaris.",
    features: ["Ringkasan omzet", "Laba dan modal", "Biaya operasional", "Rincian penjualan"]
  },
  {
    id: "inventori",
    filename: "tokokuh-manajemen-inventori.png",
    path: "/screenshots/tokokuh-manajemen-inventori.png",
    title: "Manajemen Produk dan Inventori",
    category: "Produk",
    tagline: "Kelola daftar produk dan pantau informasi stok.",
    description: "Tampilan manajemen produk menyediakan daftar produk, kategori, pencarian nama atau SKU atau barcode, harga, stok, dan akses untuk menambahkan produk.",
    features: ["Daftar produk", "Filter kategori", "Pencarian SKU atau barcode", "Informasi harga dan stok"]
  },
  {
    id: "riwayat-transaksi",
    filename: "tokokuh-riwayat-transaksi.png",
    path: "/screenshots/tokokuh-riwayat-transaksi.png",
    title: "Riwayat Transaksi dan Retur",
    category: "Riwayat",
    tagline: "Telusuri transaksi yang pernah dicatat.",
    description: "Daftar riwayat menampilkan nomor transaksi, waktu, kasir, nominal, serta filter status seperti selesai, retur, dan dibatalkan.",
    features: ["Daftar transaksi", "Pencarian nomor struk atau kasir", "Filter status", "Informasi nominal transaksi"]
  },
  {
    id: "manajemen-shift",
    filename: "tokokuh-manajemen-shift.png",
    path: "/screenshots/tokokuh-manajemen-shift.png",
    title: "Manajemen Shift Kasir",
    category: "Operasional",
    tagline: "Pantau aktivitas kasir selama satu shift.",
    description: "Halaman shift memperlihatkan status shift, kasir, waktu mulai, modal awal, penjualan tunai dan non-tunai, estimasi kas, serta kontrol kas masuk, kas keluar, dan tutup shift.",
    features: ["Status shift", "Modal awal", "Ringkasan penjualan", "Kas masuk dan kas keluar"]
  },
  {
    id: "pengaturan-aplikasi",
    filename: "tokokuh-pengaturan-aplikasi.png",
    path: "/screenshots/tokokuh-pengaturan-aplikasi.png",
    title: "Pengaturan Aplikasi",
    category: "Pengaturan",
    tagline: "Akses konfigurasi penting dari satu menu.",
    description: "Menu pengaturan menampilkan profil toko dan struk, pajak, printer thermal Bluetooth, manajemen karyawan, shift, biaya pengeluaran, serta audit log dan riwayat aktivitas.",
    features: ["Profil toko dan struk", "Pengaturan pajak", "Printer Bluetooth", "Karyawan dan operasional"]
  },
  {
    id: "profil-toko",
    filename: "tokokuh-profil-toko-struk.png",
    path: "/screenshots/tokokuh-profil-toko-struk.png",
    title: "Profil Toko dan Personalisasi Struk",
    category: "Personalisasi",
    tagline: "Sesuaikan identitas usaha pada bukti transaksi.",
    description: "Formulir pengaturan memuat logo, nama usaha, alamat, nomor telepon, website, pesan header, dan footer struk. Informasi kontak pada gambar demo sebaiknya disamarkan sebelum dipublikasikan.",
    features: ["Logo dan nama usaha", "Informasi alamat", "Kontak dan website", "Pesan header dan footer"]
  },
  {
    id: "notifikasi-android",
    filename: "tokokuh-notifikasi-android.png",
    path: "/screenshots/tokokuh-notifikasi-android.png",
    title: "Notifikasi Android",
    category: "Notifikasi",
    tagline: "Contoh notifikasi sistem pada perangkat Android.",
    description: "Tangkapan layar notifikasi TOKOKUH.COM yang memperlihatkan pemberitahuan terkait stok produk. Digunakan sebagai visual pendukung, bukan tampilan utama kasir.",
    features: ["Contoh notifikasi aplikasi", "Peringatan stok produk"]
  }
];

export const DOWNLOAD_LINKS = {
  free: {
    label: "DOWNLOAD GRATIS",
    url: "https://besargaji.com/CXDUDIhU",
    note: "Download aplikasi tanpa biaya. Lanjutkan melalui halaman iklan terlebih dahulu.",
    price: "Gratis"
  },
  practical: {
    label: "DOWNLOAD TANPA IKLAN",
    url: "https://ulik.me/tokokuh/2q459fcbvj6b",
    note: "Lebih praktis, tanpa harus melewati halaman iklan.",
    price: "Rp12.700"
  }
};

export const CONTACT_INFO = {
  email: "tokokuh.com@gmail.com",
  whatsappUrl: "https://wa.me/6282379474173",
  founder: {
    name: "Logis Denis Prabowo",
    birthDate: "08 Februari 2008",
    birthPlace: "Indramayu, Cantigi, Jawa Barat",
    role: "Founder TOKOKUH.COM",
    previousProject: {
      name: "Dicelup Ayam Crispy",
      url: "https://www.dicelupayamcrispy.store",
      description: "Salah satu proyek website digital yang pernah dibangun dan mendapatkan kunjungan pengguna."
    }
  }
};
