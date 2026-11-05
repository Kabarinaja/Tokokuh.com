/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BerandaPage } from "./pages/BerandaPage";
import { AplikasiPage } from "./pages/AplikasiPage";
import { TentangPage } from "./pages/TentangPage";
import { PertanyaanPage } from "./pages/PertanyaanPage";
import { KontakPage } from "./pages/KontakPage";
import { SitemapPage } from "./pages/SitemapPage";
import { LegalPage } from "./pages/LegalPage";

export default function App() {
  // Read real browser URL pathname directly
  const pathname = typeof window !== "undefined" ? window.location.pathname.toLowerCase() : "/beranda";

  // Match the route
  const pageContent = useMemo(() => {
    switch (pathname) {
      case "/":
      case "/beranda":
        return <BerandaPage />;
      case "/aplikasi":
        return <AplikasiPage />;
      case "/tentang":
        return <TentangPage />;
      case "/pertanyaan":
        return <PertanyaanPage />;
      case "/kontak":
        return <KontakPage />;
      case "/sitemap":
        return <SitemapPage />;
      case "/kebijakan-privasi":
        return <LegalPage type="privasi" />;
      case "/syarat-ketentuan":
        return <LegalPage type="syarat" />;
      default:
        // If someone hits a sub-path or unknown route, render Beranda with an informative banner
        // rather than breaking, or allow them to go back to /beranda
        return (
          <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-4">
            <h1 className="text-4xl font-extrabold text-white">404 – Halaman Tidak Ditemukan</h1>
            <p className="text-sm text-[#A1A1AA]">
              Halaman dengan alamat <code className="text-[#D6D6D6] font-mono">{pathname}</code> tidak tersedia.
            </p>
            <div className="pt-4">
              <a
                href="/beranda"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#292929] hover:bg-[#333333] text-white font-medium text-sm rounded-xl border border-[#444444]"
              >
                Kembali ke Beranda Resmi
              </a>
            </div>
          </div>
        );
    }
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#191919] text-[#F5F5F5]">
      {/* Header with real navigation links (full page reload) */}
      <Header currentPath={pathname === "/" ? "/beranda" : pathname} />

      {/* Main Page Content */}
      <main className="flex-1 page-enter">{pageContent}</main>

      {/* Official Footer */}
      <Footer />
    </div>
  );
}
