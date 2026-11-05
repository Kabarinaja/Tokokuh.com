import React, { useState } from "react";
import { Menu, X, ArrowDownToLine, Zap, ExternalLink } from "lucide-react";
import { DOWNLOAD_LINKS } from "../data/appData";

interface HeaderProps {
  currentPath: string;
}

const NAV_ITEMS = [
  { name: "Beranda", path: "/beranda" },
  { name: "Aplikasi", path: "/aplikasi" },
  { name: "Tentang", path: "/tentang" },
  { name: "Pertanyaan", path: "/pertanyaan" },
  { name: "Kontak", path: "/kontak" }
];

export const Header: React.FC<HeaderProps> = ({ currentPath }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <>
      <header className="site-header sticky top-0 z-50 border-b backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo link - triggers real HTML navigation */}
            <a
              href="/beranda"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-white/50 rounded-md p-1"
              title="TOKOKUH.COM – Aplikasi Kasir Android"
            >
              <img
                src="/assets/aistudio/logo-header-atas-web_0fc1ebb5.png"
                alt="Logo TOKOKUH.COM"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = currentPath === item.path || (item.path === "/beranda" && currentPath === "/");
                return (
                  <a
                    key={item.path}
                    href={item.path}
                    className={`px-4 py-2 text-sm font-medium transition-colors duration-150 rounded-lg relative ${
                      isActive
                        ? "text-white bg-white/15 border border-white/20"
                        : "text-white/75 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#D6D6D6] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* CTA Download Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                onClick={() => setDownloadModalOpen(true)}
                className="header-download inline-flex items-center gap-2 px-5 py-2.5 font-medium text-sm rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <ArrowDownToLine className="w-4 h-4 text-[#D6D6D6]" />
                <span>Download Aplikasi</span>
              </button>
            </div>

            {/* Mobile hamburger button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setDownloadModalOpen(true)}
                className="header-download inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border"
              >
                <ArrowDownToLine className="w-3.5 h-3.5 text-[#D6D6D6]" />
                <span>Download</span>
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
                aria-label="Buka menu navigasi"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1E1E1E] border-b border-[#303030] px-4 pt-3 pb-5 space-y-1 animate-fadeIn">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPath === item.path || (item.path === "/beranda" && currentPath === "/");
              return (
                <a
                  key={item.path}
                  href={item.path}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-white bg-[#292929] border-l-4 border-[#D6D6D6]"
                      : "text-[#A1A1AA] hover:text-white hover:bg-[#252525]"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-[#303030]">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setDownloadModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#292929] text-white border border-[#D6D6D6] rounded-lg font-medium text-sm"
              >
                <ArrowDownToLine className="w-4 h-4 text-[#D6D6D6]" />
                <span>Pilih Opsi Download</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Download Choice Modal */}
      {downloadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#222222] border border-[#383838] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-left">
            <button
              type="button"
              onClick={() => setDownloadModalOpen(false)}
              className="absolute top-5 right-5 text-[#A1A1AA] hover:text-white p-1 rounded-lg hover:bg-[#303030] transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#292929] border border-[#404040] flex items-center justify-center">
                <ArrowDownToLine className="w-5 h-5 text-[#D6D6D6]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Unduh TOKOKUH.COM</h3>
                <p className="text-xs text-[#A1A1AA]">Aplikasi Kasir Android Offline</p>
              </div>
            </div>

            <p className="text-sm text-[#A1A1AA] my-4 leading-relaxed">
              Tersedia dua metode resmi untuk mengunduh aplikasi TOKOKUH.COM ke perangkat Android Anda:
            </p>

            <div className="space-y-4">
              {/* Opsi 1: Download Gratis */}
              <div className="p-4 rounded-xl bg-[#292929] border border-[#383838] hover:border-[#555555] transition-all">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 mb-1.5">
                      {DOWNLOAD_LINKS.free.price}
                    </span>
                    <h4 className="text-base font-semibold text-white">{DOWNLOAD_LINKS.free.label}</h4>
                  </div>
                </div>
                <p className="text-xs text-[#A1A1AA] mb-4 leading-relaxed">
                  {DOWNLOAD_LINKS.free.note}
                </p>
                <a
                  href={DOWNLOAD_LINKS.free.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#333333] hover:bg-[#404040] text-white text-sm font-medium rounded-lg border border-[#484848] transition-colors active:scale-98"
                >
                  <span>Buka Halaman Download Gratis</span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                </a>
              </div>

              {/* Opsi 2: Download Praktis Tanpa Iklan */}
              <div className="p-4 rounded-xl bg-[#292929] border border-[#D6D6D6]/40 hover:border-[#D6D6D6] transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#D6D6D6] text-white text-[10px] uppercase font-bold tracking-wider px-3 py-0.5 rounded-bl-lg">
                  Rekomendasi
                </div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#D6D6D6]/20 text-[#D6D6D6] border border-[#D6D6D6]/30 mb-1.5">
                      {DOWNLOAD_LINKS.practical.price}
                    </span>
                    <h4 className="text-base font-semibold text-white">{DOWNLOAD_LINKS.practical.label}</h4>
                  </div>
                </div>
                <p className="text-xs text-[#A1A1AA] mb-4 leading-relaxed">
                  {DOWNLOAD_LINKS.practical.note}
                </p>
                <a
                  href={DOWNLOAD_LINKS.practical.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#D6D6D6] hover:bg-[#AFAFAF] text-white text-sm font-semibold rounded-lg transition-colors active:scale-98 shadow-md"
                >
                  <Zap className="w-4 h-4" />
                  <span>Dapatkan Tanpa Iklan ({DOWNLOAD_LINKS.practical.price})</span>
                </a>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[#303030] flex items-center justify-between text-xs text-[#888888]">
              <span>Format: APK Android Resmi</span>
              <span>Privasi Terjaga</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
