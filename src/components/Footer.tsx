import React from "react";
import { Mail, ShieldCheck, FileText, Map, HelpCircle, PhoneCall, ArrowUpRight } from "lucide-react";
import { CONTACT_INFO, DOWNLOAD_LINKS } from "../data/appData";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/80 border-t border-slate-200 text-slate-600 backdrop-blur-2xl pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Info (col 1-2) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="/beranda" className="inline-block group focus:outline-none focus:ring-2 focus:ring-[#D6D6D6] rounded-lg p-1">
              <img
                src="/assets/aistudio/logo-footer_ed697f36.png"
                alt="Logo TOKOKUH.COM"
                className="h-10 w-auto object-contain opacity-100 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              TOKOKUH.COM adalah aplikasi kasir Android yang dirancang untuk membantu pelaku usaha mengelola transaksi penjualan dengan lebih praktis.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/70 border border-slate-200 rounded-md text-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D6D6D6]" />
                Kasir Offline Handal
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/70 border border-slate-200 rounded-md text-slate-700">
                100% Android UMKM
              </span>
            </div>
          </div>

          {/* Navigasi Utama */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-bold tracking-wider text-slate-900">Menu Utama</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/beranda" className="hover:text-slate-950 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="/aplikasi" className="hover:text-slate-950 transition-colors">
                  Katalog Fitur Aplikasi
                </a>
              </li>
              <li>
                <a href="/tentang" className="hover:text-slate-950 transition-colors">
                  Tentang & Cerita Founder
                </a>
              </li>
              <li>
                <a href="/pertanyaan" className="hover:text-slate-950 transition-colors">
                  Pertanyaan (FAQ)
                </a>
              </li>
              <li>
                <a href="/kontak" className="hover:text-slate-950 transition-colors">
                  Hubungi Kami
                </a>
              </li>
              <li>
                <a href="/sitemap" className="hover:text-slate-950 transition-colors">
                  Peta Situs (Sitemap HTML)
                </a>
              </li>
            </ul>
          </div>

          {/* Download & Layanan */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-bold tracking-wider text-slate-900">Unduh Aplikasi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={DOWNLOAD_LINKS.free.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-slate-950 transition-colors group"
                >
                  <span>{DOWNLOAD_LINKS.free.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={DOWNLOAD_LINKS.practical.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#D6D6D6] transition-colors group"
                >
                  <span className="font-semibold text-slate-900 group-hover:text-slate-700">
                    {DOWNLOAD_LINKS.practical.label}
                  </span>
                  <span className="text-[11px] px-1.5 py-0.2 bg-[#D6D6D6]/20 text-[#D6D6D6] rounded">
                    {DOWNLOAD_LINKS.practical.price}
                  </span>
                </a>
              </li>
              <li className="pt-2 text-xs text-slate-500 leading-relaxed">
                Kompatibel dengan ponsel Android pintar untuk kasir toko kelontong, kafe, kuliner, dan pedagang retail.
              </li>
            </ul>
          </div>

          {/* Legalitas & Kontak */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-bold tracking-wider text-slate-900">Kontak & Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-950 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#D6D6D6]" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-950 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Hubungi melalui WhatsApp</span>
                </a>
              </li>
              <li className="pt-2">
                <a href="/kebijakan-privasi" className="hover:text-slate-950 transition-colors block text-xs">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="/syarat-ketentuan" className="hover:text-slate-950 transition-colors block text-xs">
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" className="hover:text-slate-950 transition-colors block text-xs">
                  Sitemap XML (Search Engine)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} TOKOKUH.COM. All Rights Reserved.</p>
          <p>Didesain secara profesional dengan identitas visual #292929.</p>
        </div>
      </div>
    </footer>
  );
};
