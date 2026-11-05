import React, { useState } from "react";
import {
  WifiOff,
  ShoppingBag,
  Receipt,
  FileSpreadsheet,
  Settings,
  Clock,
  Printer,
  Boxes,
  Maximize2,
  X,
  ArrowDownToLine,
  Zap,
  CheckCircle2,
  Smartphone
} from "lucide-react";
import { APP_SCREENSHOTS, ScreenshotItem, DOWNLOAD_LINKS } from "../data/appData";
import { usePageSEO } from "../utils/seo";

export const AplikasiPage: React.FC = () => {
  usePageSEO("aplikasi");
  const [modalItem, setModalItem] = useState<ScreenshotItem | null>(null);

  return (
    <div className="space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Halaman */}
      <div className="text-center pt-8 max-w-3xl mx-auto">
        <span className="text-xs uppercase font-bold tracking-wider text-[#D6D6D6]">
          Katalog Informasi Produk
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
          Fitur Lengkap Aplikasi Kasir TOKOKUH.COM
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
          Eksplorasi setiap menu, alur transaksi, struk penjualan, dan laporan pembukuan toko berdasarkan 11 tangkapan layar antarmuka asli aplikasi Android kami.
        </p>
      </div>

      {/* SPECIAL SECTION: PENJELASAN OFFLINE WAJIB */}
      <section className="bg-gradient-to-r from-[#242424] via-[#292929] to-[#242424] border border-[#3E3E3E] rounded-2xl p-8 sm:p-10 relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#191919] border border-[#333333] text-xs font-semibold text-[#D6D6D6]">
            <WifiOff className="w-4 h-4" />
            <span>KEMAMPUAN OFFLINE MANDIRI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            TETAP TRANSAKSI MESKI TANPA INTERNET.
          </h2>
          <p className="text-sm sm:text-base text-[#CCCCCC] leading-relaxed">
            Fungsi utama kasir—mulai dari memilih produk barang dagangan, memasukkan ke keranjang belanja, menghitung kembalian uang tunai pembeli, hingga merekam riwayat nota—berjalan sepenuhnya secara offline pada perangkat Android Anda.
          </p>
          <div className="p-4 bg-[#1C1C1C] border border-[#303030] rounded-xl text-xs text-[#A1A1AA] space-y-1">
            <p className="font-semibold text-white">Catatan Transparansi Produk:</p>
            <p>
              Kemampuan offline berlaku untuk aktivitas transaksi kasir dan pembukuan lokal di perangkat. Layanan yang memerlukan internet (seperti mengunduh pembaruan aplikasi baru atau membuka tautan eksternal) tetap membutuhkan koneksi aktif sewajarnya.
            </p>
          </div>
        </div>
      </section>

      {/* DAFTAR SECTION FITUR BERDAMPINGAN DENGAN SCREENSHOT ASLI */}
      <div className="space-y-20">
        {APP_SCREENSHOTS.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-2xl bg-[#202020] border border-[#303030] hover:border-[#444444] transition-all`}
            >
              {/* Gambar Screenshot - Pas dan Penuh Sesuai Ukuran */}
              <div
                className={`lg:col-span-5 flex justify-center ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div
                  onClick={() => setModalItem(item)}
                  className="relative group cursor-pointer overflow-hidden bg-[#171717] border border-[#3E3E3E] rounded-2xl shadow-xl w-full max-w-[290px] aspect-[9/16] transition-all duration-500 hover:-translate-y-2 hover:border-[#D6D6D6]/70 hover:shadow-2xl"
                >
                  <img
                    src={item.path}
                    alt={item.title}
                    className="w-full h-full object-contain object-center rounded-2xl transition-transform duration-500 group-hover:scale-[1.025]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4 rounded-2xl">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#292929]/90 text-white text-xs font-semibold rounded-lg border border-[#444444]">
                      <Maximize2 className="w-3.5 h-3.5 text-[#D6D6D6]" />
                      Klik Perbesar
                    </span>
                    <span className="text-[11px] text-[#A1A1AA] bg-black/60 px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Teks Penjelasan Fitur */}
              <div
                className={`lg:col-span-7 space-y-4 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#D6D6D6] uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#292929] border border-[#383838]">
                    {item.category}
                  </span>
                  <span className="text-xs text-[#777777]">Showcase #{index + 1}</span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">{item.title}</h3>
                
                <p className="text-sm font-medium text-[#D6D6D6]">{item.tagline}</p>

                <p className="text-sm text-[#A1A1AA] leading-relaxed">{item.description}</p>

                {/* Fitur Terbukti */}
                <div className="pt-2">
                  <p className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                    Kapabilitas Layar Ini:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2 text-xs text-[#CCCCCC] bg-[#262626] p-2 rounded-lg border border-[#333333]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Download Section */}
      <section className="bg-[#222222] border border-[#333333] rounded-3xl p-8 sm:p-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Siap Meningkatkan Kerapian Kasir Toko Anda?
        </h2>
        <p className="text-sm text-[#A1A1AA] max-w-xl mx-auto mb-8">
          Pasang aplikasi kasir Android TOKOKUH.COM sekarang juga. Pilih jalur unduh tanpa biaya atau jalur instan tanpa iklan.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href={DOWNLOAD_LINKS.free.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#292929] hover:bg-[#333333] text-white text-sm font-medium rounded-xl border border-[#444444]"
          >
            <ArrowDownToLine className="w-4 h-4 text-emerald-400" />
            <span>{DOWNLOAD_LINKS.free.label}</span>
          </a>

          <a
            href={DOWNLOAD_LINKS.practical.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D6D6D6] hover:bg-[#AFAFAF] text-white text-sm font-semibold rounded-xl shadow-lg shadow-[#D6D6D6]/20"
          >
            <Zap className="w-4 h-4" />
            <span>{DOWNLOAD_LINKS.practical.label} ({DOWNLOAD_LINKS.practical.price})</span>
          </a>
        </div>
      </section>

      {/* Modal Preview */}
      {modalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#1E1E1E] border border-[#383838] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-5 sm:p-6 shadow-2xl relative text-left">
            <button
              type="button"
              onClick={() => setModalItem(null)}
              className="absolute top-4 right-4 text-[#A1A1AA] hover:text-white p-2 rounded-lg bg-[#292929] hover:bg-[#333333] transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-[#292929] text-[#D6D6D6] border border-[#383838]">
              {modalItem.category}
            </span>
            <h3 className="text-xl font-bold text-white mt-1 mb-2">{modalItem.title}</h3>
            <p className="text-xs text-[#A1A1AA] mb-4">{modalItem.description}</p>

            <div className="bg-[#181818] rounded-xl border border-[#303030] p-1 flex items-center justify-center overflow-hidden">
              <img
                src={modalItem.path}
                alt={modalItem.title}
                className="w-full max-h-[580px] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
