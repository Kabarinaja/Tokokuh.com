import React from "react";
import { Map, ArrowRight, ExternalLink, FileCode, CheckCircle2 } from "lucide-react";
import { usePageSEO } from "../utils/seo";

interface SitemapPageItem {
  title: string;
  url: string;
  path: string;
  description: string;
  category: "Halaman Utama" | "Informasi & Kontak" | "Legalitas & Teknis";
}

const SITEMAP_PAGES: SitemapPageItem[] = [
  {
    title: "Beranda Utama",
    url: "https://tokokuh.com/beranda",
    path: "/beranda",
    description: "Halaman pengenalan utama TOKOKUH.COM, showcase orbit lingkaran 3D, ringkasan keunggulan offline, dan tombol unduh resmi.",
    category: "Halaman Utama"
  },
  {
    title: "Katalog Fitur Aplikasi",
    url: "https://tokokuh.com/aplikasi",
    path: "/aplikasi",
    description: "Rincian menyeluruh 11 menu dan fitur kasir Android: katalog produk, keranjang, kalkulasi kembalian, cetak struk, dan laporan penjualan.",
    category: "Halaman Utama"
  },
  {
    title: "Tentang & Cerita Founder",
    url: "https://tokokuh.com/tentang",
    path: "/tentang",
    description: "Profil dan kisah perjalanan Logis Denis Prabowo, lulusan SMK jurusan NKPI asal Indramayu yang mengembangkan aplikasi secara mandiri.",
    category: "Informasi & Kontak"
  },
  {
    title: "Pertanyaan Umum (FAQ)",
    url: "https://tokokuh.com/pertanyaan",
    path: "/pertanyaan",
    description: "Daftar 10 pertanyaan dan jawaban paling sering diajukan mengenai cara kerja kasir offline, metode download, dan panduan instalasi.",
    category: "Informasi & Kontak"
  },
  {
    title: "Kontak & Dukungan Pengembang",
    url: "https://tokokuh.com/kontak",
    path: "/kontak",
    description: "Saluran komunikasi langsung via WhatsApp resmi dan email korespondensi tokokuh.com@gmail.com.",
    category: "Informasi & Kontak"
  },
  {
    title: "Kebijakan Privasi",
    url: "https://tokokuh.com/kebijakan-privasi",
    path: "/kebijakan-privasi",
    description: "Dokumen komitmen privasi dan keamanan data transaksi lokal di memori smartphone pengguna.",
    category: "Legalitas & Teknis"
  },
  {
    title: "Syarat & Ketentuan Penggunaan",
    url: "https://tokokuh.com/syarat-ketentuan",
    path: "/syarat-ketentuan",
    description: "Ketentuan operasional penggunaan aplikasi kasir Android TOKOKUH.COM dan layanan situs resmi.",
    category: "Legalitas & Teknis"
  },
  {
    title: "Peta Situs XML (Mesin Pencari)",
    url: "https://tokokuh.com/sitemap.xml",
    path: "/sitemap.xml",
    description: "Sitemap XML standar untuk perayap Google Search Console dan robot pengindeks mesin pencari.",
    category: "Legalitas & Teknis"
  },
  {
    title: "File robots.txt",
    url: "https://tokokuh.com/robots.txt",
    path: "/robots.txt",
    description: "Direktori izin crawler perayap publik mesin pencari.",
    category: "Legalitas & Teknis"
  }
];

export const SitemapPage: React.FC = () => {
  usePageSEO("sitemap");

  const categories = ["Halaman Utama", "Informasi & Kontak", "Legalitas & Teknis"] as const;

  return (
    <div className="space-y-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center pt-8 max-w-2xl mx-auto">
        <span className="text-xs uppercase font-bold tracking-wider text-[#D6D6D6]">
          Struktur Navigasi Website
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
          Peta Situs TOKOKUH.COM
        </h1>
        <p className="mt-4 text-base text-[#A1A1AA] leading-relaxed">
          Daftar seluruh tautan dan halaman publik resmi yang tersedia pada domain tokokuh.com dengan URL asli tanpa hash.
        </p>
      </div>

      {/* Daftar Kategori Halaman */}
      <div className="space-y-12">
        {categories.map((cat) => {
          const items = SITEMAP_PAGES.filter((p) => p.category === cat);

          return (
            <section key={cat} className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-[#303030]">
                <Map className="w-4 h-4 text-[#D6D6D6]" />
                <h2 className="text-lg font-bold text-white tracking-tight">{cat}</h2>
                <span className="text-xs text-[#777777]">({items.length} halaman)</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((page) => (
                  <div
                    key={page.path}
                    className="p-5 rounded-xl bg-[#202020] border border-[#303030] hover:border-[#484848] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">
                        <a
                          href={page.path}
                          className="hover:text-[#D6D6D6] transition-colors"
                        >
                          {page.title}
                        </a>
                      </h3>
                      <p className="text-xs font-mono text-[#D6D6D6]/90 mb-2">{page.url}</p>
                      <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4">
                        {page.description}
                      </p>
                    </div>

                    <div>
                      <a
                        href={page.path}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#D6D6D6] transition-colors"
                      >
                        <span>Buka Halaman</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Info Tambahan untuk Mesin Pencari */}
      <section className="bg-[#1C1C1C] border border-[#2D2D2D] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <FileCode className="w-4 h-4 text-emerald-400" />
            Format Sitemap XML untuk Google Search Console
          </h3>
          <p className="text-xs text-[#A1A1AA] leading-relaxed">
            Sitemap XML resmi tersedia di <code className="text-white bg-[#252525] px-1.5 py-0.5 rounded">https://tokokuh.com/sitemap.xml</code> siap disubmit ke Google Search Console.
          </p>
        </div>
        <a
          href="/sitemap.xml"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#292929] hover:bg-[#333333] text-white text-xs font-medium rounded-lg border border-[#404040] transition-colors shrink-0"
        >
          <span>Buka sitemap.xml</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </section>
    </div>
  );
};
