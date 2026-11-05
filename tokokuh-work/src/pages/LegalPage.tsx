import React from "react";
import { ShieldCheck, Lock, HardDrive, Smartphone, EyeOff } from "lucide-react";
import { usePageSEO } from "../utils/seo";

export const LegalPage: React.FC<{ type: "privasi" | "syarat" }> = ({ type }) => {
  const isPrivasi = type === "privasi";
  usePageSEO(isPrivasi ? "kebijakan-privasi" : "syarat-ketentuan");

  return (
    <div className="space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs uppercase font-bold tracking-wider text-[#D6D6D6]">
          Dokumentasi Hukum & Transparansi
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
          {isPrivasi ? "Kebijakan Privasi TOKOKUH.COM" : "Syarat & Ketentuan Penggunaan"}
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-[#A1A1AA]">
          Terakhir diperbarui: 04 November 2026 • Berlaku untuk aplikasi Android dan situs tokokuh.com
        </p>
      </div>

      <div className="bg-[#202020] border border-[#333333] rounded-2xl p-6 sm:p-10 space-y-8 text-sm text-[#CCCCCC] leading-relaxed">
        {isPrivasi ? (
          <>
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-[#D6D6D6]" />
                1. Penyimpanan Data Lokal di Perangkat
              </h2>
              <p>
                Aplikasi kasir TOKOKUH.COM dirancang dengan arsitektur mandiri di mana data barang, nama produk, harga jual, riwayat nota transaksi, dan pembukuan penjualan tersimpan secara lokal di memori internal perangkat Android milik pengguna.
              </p>
              <p>
                Kami tidak mengunggah atau mentransfer database transaksi toko Anda ke server cloud pihak ketiga tanpa izin eksplisit dari Anda.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <EyeOff className="w-5 h-5 text-[#D6D6D6]" />
                2. Tidak Mengumpulkan Informasi Rahasia Pelanggan
              </h2>
              <p>
                Aplikasi ini tidak melacak lokasi GPS pengguna, tidak membaca kontak pribadi, dan tidak meminta akses data sensitif di luar kebutuhan operasional kasir (seperti Bluetooth untuk printer thermal nota).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#D6D6D6]" />
                3. Tautan Distribusi Pihak Ketiga
              </h2>
              <p>
                Situs resmi tokokuh.com menyediakan tautan unduh gratis (melalui halaman perantara iklan) dan tautan unduh praktis tanpa iklan (melalui Ulik.me). Kebijakan privasi platform distribusi eksternal tersebut diatur secara independen oleh penyedia masing-masing.
              </p>
            </section>
          </>
        ) : (
          <>
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#D6D6D6]" />
                1. Penggunaan Aplikasi
              </h2>
              <p>
                Dengan mengunduh, memasang, atau menggunakan aplikasi kasir TOKOKUH.COM, Anda menyetujui untuk menggunakan aplikasi ini untuk keperluan pencatatan transaksi toko yang sah dan tidak melanggar hukum yang berlaku di Republik Indonesia.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#D6D6D6]" />
                2. Tanggung Jawab Perangkat & Pencadangan Data
              </h2>
              <p>
                Karena data transaksi kasir disimpan pada memori lokal HP Android Anda, pengguna bertanggung jawab penuh untuk menjaga kondisi fisik perangkat dan melakukan backup berkala bila berganti ponsel.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#D6D6D6]" />
                3. Batasan Tanggung Jawab
              </h2>
              <p>
                TOKOKUH.COM disediakan "sebagaimana adanya" (as-is). Kami senantiasa berupaya memastikan aplikasi berjalan stabil, namun pengembang tidak bertanggung jawab atas kerugian tidak langsung akibat kerusakan fisik perangkat atau kehilangan data lokal pengguna.
              </p>
            </section>
          </>
        )}
      </div>

      <div className="text-center pt-2">
        <a
          href="/beranda"
          className="text-xs font-semibold text-[#A1A1AA] hover:text-white transition-colors"
        >
          ← Kembali ke Halaman Beranda
        </a>
      </div>
    </div>
  );
};
