import React, { useState } from "react";
import {
  ArrowDownToLine,
  Zap,
  WifiOff,
  ShoppingBag,
  Receipt,
  FileSpreadsheet,
  CheckCircle2,
  Clock,
  Smartphone,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { Orbit3D } from "../components/Orbit3D";
import { DOWNLOAD_LINKS, APP_SCREENSHOTS } from "../data/appData";
import { usePageSEO } from "../utils/seo";

export const BerandaPage: React.FC = () => {
  usePageSEO("beranda");
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-12 pb-12 overflow-hidden">
        {/* Subtle background ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-slate-200/60 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Brand icon on a warm charcoal surface for clear contrast */}
          <div className="flex justify-center mb-6">
            <div className="app-brand-icon h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full shadow-[0_14px_36px_rgba(35,29,24,0.18)]">
              <img
                src="/assets/aistudio/logo-icon_pavicon_11ec2b2c.png"
                alt="Icon TOKOKUH.COM"
                className="block h-full w-full rounded-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
            INTERNET MATI? <br className="hidden sm:inline" />
            <span className="text-[#D6D6D6] underline decoration-[#D6D6D6]/40 decoration-4 underline-offset-8">
              KASIR TETAP JALAN.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
            <strong className="text-white">TOKOKUH.COM</strong> adalah aplikasi kasir Android yang dirancang untuk membantu pemilik usaha mengelola transaksi, produk, dan aktivitas penjualan dengan lebih praktis.
          </p>

          {/* Keterangan offline jujur dan terukur */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#222222] border border-[#333333] text-xs text-[#CCCCCC]">
            <WifiOff className="w-4 h-4 text-[#D6D6D6]" />
            <span>Aktivitas transaksi kasir dapat dilakukan tanpa koneksi internet.</span>
          </div>

          {/* Tombol Download CTA Hero */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            {/* Download Gratis */}
            <a
              href={DOWNLOAD_LINKS.free.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#292929] hover:bg-[#333333] text-white font-semibold text-sm rounded-xl border border-[#444444] hover:border-[#666666] transition-all shadow-md active:scale-95"
            >
              <ArrowDownToLine className="w-4 h-4 text-emerald-400" />
              <span>{DOWNLOAD_LINKS.free.label}</span>
            </a>

            {/* Download Praktis */}
            <a
              href={DOWNLOAD_LINKS.practical.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D6D6D6] hover:bg-[#AFAFAF] text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-[#D6D6D6]/20 active:scale-95"
            >
              <Zap className="w-4 h-4" />
              <span>{DOWNLOAD_LINKS.practical.label}</span>
              <span className="text-xs bg-black/25 px-2 py-0.5 rounded-full font-bold ml-1">
                {DOWNLOAD_LINKS.practical.price}
              </span>
            </a>
          </div>

          <div className="mt-3 text-[11px] text-[#777777] max-w-sm mx-auto">
            Pilih metode download sesuai kebutuhan: gratis via halaman iklan atau langsung praktis tanpa iklan.
          </div>
        </div>

        {/* 3D FLOATING ORBIT SCREENSHOT COMPONENT */}
        <div className="mt-12 sm:mt-16 max-w-7xl mx-auto px-2 sm:px-4">


          <Orbit3D />
        </div>
      </section>

      {/* 2. BAGIAN PENGENALAN PRODUK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#202020] border border-[#333333] rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase font-bold tracking-wider text-[#D6D6D6]">
                Solusi Kasir Praktis
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Dirancang untuk Kebutuhan Riil Warung, Toko Kelontong, dan UMKM
              </h2>
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                TOKOKUH.COM lahir dari pemahaman bahwa tidak semua toko atau tempat usaha memiliki koneksi internet stabil sepanjang hari. Banyak kasir terhenti saat jaringan seluler drop atau listrik padam.
              </p>
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                Dengan sistem pemrosesan lokal di perangkat Android, Anda tetap bisa melayani pelanggan yang sedang mengantre, menghitung total belanjaan, mengkalkulasi kembalian uang tunai, dan mencatat transaksi penjualan tanpa perlu khawatir kuota habis.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1.5 bg-[#292929] border border-[#3A3A3A] rounded-lg text-white">
                  Warung Kelontong & Sembako
                </span>
                <span className="px-3 py-1.5 bg-[#292929] border border-[#3A3A3A] rounded-lg text-white">
                  Kedai Kopi & Kuliner
                </span>
                <span className="px-3 py-1.5 bg-[#292929] border border-[#3A3A3A] rounded-lg text-white">
                  Konter Pulsa & Aksesoris
                </span>
                <span className="px-3 py-1.5 bg-[#292929] border border-[#3A3A3A] rounded-lg text-white">
                  Toko Retail Mandiri
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. BAGIAN KEUNGGULAN UTAMA BERDASARKAN FITUR NYATA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-[#D6D6D6]">
            Fitur Yang Nyata & Terbukti
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mt-1">
            Fitur Utama Aplikasi Kasir TOKOKUH.COM
          </h2>
          <p className="text-sm text-[#A1A1AA] max-w-2xl mx-auto mt-2">
            Seluruh keunggulan di bawah ini diambil langsung dari tampilan dan fitur yang benar-benar tersedia dalam aplikasi Android kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Transaksi Kasir Offline */}
          <div className="p-6 bg-[#222222] border border-[#333333] hover:border-[#484848] rounded-xl transition-all space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#292929] border border-[#404040] flex items-center justify-center text-[#D6D6D6]">
              <WifiOff className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Transaksi Kasir Offline</h3>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              Semua aktivitas penjualan kasir berjalan langsung di memori lokal Android tanpa perlu internet aktif.
            </p>
          </div>

          {/* Card 2: Pengelolaan Produk & Kategori */}
          <div className="p-6 bg-[#222222] border border-[#333333] hover:border-[#484848] rounded-xl transition-all space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#292929] border border-[#404040] flex items-center justify-center text-[#D6D6D6]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Pengelolaan Produk</h3>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              Tambah, edit, dan atur kelompok barang dagangan dengan penentuan harga jual dan modal yang rapi.
            </p>
          </div>

          {/* Card 3: Pembayaran & Hitung Kembalian */}
          <div className="p-6 bg-[#222222] border border-[#333333] hover:border-[#484848] rounded-xl transition-all space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#292929] border border-[#404040] flex items-center justify-center text-[#D6D6D6]">
              <Receipt className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Kalkulasi Kembalian</h3>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              Mencegah salah hitung uang kembalian saat transaksi ramai dengan kalkulasi otomatis dan pecahan cepat.
            </p>
          </div>

          {/* Card 4: Laporan & Riwayat Transaksi */}
          <div className="p-6 bg-[#222222] border border-[#333333] hover:border-[#484848] rounded-xl transition-all space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#292929] border border-[#404040] flex items-center justify-center text-[#D6D6D6]">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Laporan & Riwayat</h3>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              Rekapitulasi total pendapatan, jumlah transaksi, dan pembukuan penjualan harian tersimpan rapi.
            </p>
          </div>
        </div>

        {/* CTA ke halaman aplikasi */}
        <div className="mt-10 text-center">
          <a
            href="/aplikasi"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#292929] hover:bg-[#333333] text-white border border-[#444444] hover:border-[#D6D6D6] font-medium text-sm rounded-xl transition-colors group"
          >
            <span>Lihat Rincian Seluruh Fitur Aplikasi</span>
            <ChevronRight className="w-4 h-4 text-[#D6D6D6] transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* 4. PERBANDINGAN DOWNLOAD RESMI */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="download-comparison text-center">
          <span className="download-eyebrow">Dua Pilihan Resmi</span>
          <h2 className="download-heading">
            Dapatkan Aplikasi TOKOKUH.COM Sekarang
          </h2>
          <p className="download-intro">
            Pilih cara yang paling nyaman bagi Anda untuk mulai menggunakan aplikasi kasir Android di toko Anda:
          </p>

          <div className="download-options-grid text-left">
            {/* Opsi Gratis */}
            <article className="download-option-card download-option-free">
              <div>
                <span className="download-price-tag download-free-tag">
                  {DOWNLOAD_LINKS.free.price}
                </span>
                <h3 className="download-option-title">{DOWNLOAD_LINKS.free.label}</h3>
                <p className="download-option-description">
                  {DOWNLOAD_LINKS.free.note}
                </p>
                <ul className="download-benefits">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Tanpa biaya sepeser pun</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Melewati halaman iklan terlebih dahulu</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>File APK Android resmi TOKOKUH.COM</span>
                  </li>
                </ul>
              </div>

              <a
                href={DOWNLOAD_LINKS.free.url}
                target="_blank"
                rel="noopener noreferrer"
                className="download-option-button"
              >
                <span>Unduh Gratis Sekarang</span>
                <ExternalLink className="w-4 h-4 text-emerald-400" />
              </a>
            </article>

            {/* Opsi Praktis Tanpa Iklan */}
            <article className="download-option-card download-option-paid">
              <span className="download-recommend">Lebih Praktis</span>
              <div>
                <span className="download-price-tag download-paid-tag">
                  {DOWNLOAD_LINKS.practical.price}
                </span>
                <h3 className="download-option-title">{DOWNLOAD_LINKS.practical.label}</h3>
                <p className="download-option-description">
                  {DOWNLOAD_LINKS.practical.note}
                </p>
                <ul className="download-benefits">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D6D6D6] shrink-0" />
                    <span>Langsung praktis tanpa lewati iklan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D6D6D6] shrink-0" />
                    <span>Hanya satu kali kontribusi {DOWNLOAD_LINKS.practical.price}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D6D6D6] shrink-0" />
                    <span>Platform distribusi terverifikasi Ulik.me</span>
                  </li>
                </ul>
              </div>

              <a
                href={DOWNLOAD_LINKS.practical.url}
                target="_blank"
                rel="noopener noreferrer"
                className="download-option-button"
              >
                <Zap className="w-4 h-4" />
                <span>Unduh Tanpa Iklan ({DOWNLOAD_LINKS.practical.price})</span>
              </a>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};
