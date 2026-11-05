import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { usePageSEO } from "../utils/seo";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "Apa itu TOKOKUH.COM?",
    answer:
      "TOKOKUH.COM adalah aplikasi kasir Android yang dirancang untuk membantu pemilik usaha dan UMKM mengelola transaksi penjualan, pencatatan produk, perhitungan kembalian, dan cetak struk nota dengan lebih praktis."
  },
  {
    id: 2,
    question: "Apakah TOKOKUH.COM merupakan aplikasi Android?",
    answer:
      "Benar. TOKOKUH.COM dikembangkan dalam format aplikasi Android (APK) yang dapat dipasang dan dioperasikan langsung pada smartphone Android maupun tablet kasir berbasis Android."
  },
  {
    id: 3,
    question: "Apakah aplikasi dapat digunakan tanpa internet?",
    answer:
      "Ya. Aplikasi TOKOKUH.COM menyimpan database produk dan memproses kalkulasi transaksi kasir secara lokal di dalam memori perangkat HP Anda, sehingga tidak memerlukan koneksi internet aktif untuk aktivitas kasir harian."
  },
  {
    id: 4,
    question: "Apakah transaksi kasir tetap berjalan ketika internet mati?",
    answer:
      "Pasti. Ketika sinyal seluler drop, kuota habis, atau wifi mati, Anda tetap bisa memasukkan barang pesanan pembeli ke keranjang, memproses pembayaran tunai, dan melihat kembalian tanpa gangguan sistem."
  },
  {
    id: 5,
    question: "Bagaimana cara mendapatkan aplikasi secara gratis?",
    answer:
      "Anda dapat memilih opsi 'DOWNLOAD GRATIS' pada website ini. Anda akan diarahkan ke tautan distribusi resmi melalui halaman perantara sebelum berkas aplikasi dapat diunduh tanpa biaya."
  },
  {
    id: 6,
    question: "Bagaimana cara mendapatkan aplikasi tanpa melewati iklan?",
    answer:
      "Bagi Anda yang menginginkan proses lebih ringkas dan instan, tersedia opsi 'DOWNLOAD TANPA IKLAN' seharga Rp12.700 melalui platform terverifikasi Ulik.me tanpa perlu melewati halaman iklan."
  },
  {
    id: 7,
    question: "Apakah aplikasi cocok untuk UMKM?",
    answer:
      "Sangat cocok. TOKOKUH.COM dirancang dengan antarmuka yang bersih, mudah dipahami, tidak rumit, dan tidak memberatkan pemilik usaha dengan biaya sewa atau sistem langganan bulanan."
  },
  {
    id: 8,
    question: "Apakah aplikasi mendukung pencetakan struk?",
    answer:
      "Ya. Berdasarkan fitur yang tersedia, aplikasi menyediakan menu pengaturan struk yang dapat dikonfigurasikan dengan printer nota kasir thermal Bluetooth untuk mencetak nama toko, alamat, rincian barang, dan footer nota."
  },
  {
    id: 9,
    question: "Bagaimana cara menghubungi pengembang?",
    answer:
      "Anda dapat menghubungi tim dan pengembang TOKOKUH.COM melalui tombol resmi WhatsApp atau melalui email resmi di tokokuh.com@gmail.com pada halaman Kontak."
  },
  {
    id: 10,
    question: "Bagaimana cara memasang aplikasi di Android?",
    answer:
      "Setelah mengunduh berkas installer APK resmi TOKOKUH.COM, buka berkas tersebut di HP Android Anda. Izinkan pemasangan dari sumber ini (instal dari peramban/pengelola berkas) bila diminta oleh sistem Android, kemudian ikuti instruksi hingga selesai."
  }
];

export const PertanyaanPage: React.FC = () => {
  usePageSEO("pertanyaan");
  const [openIds, setOpenIds] = useState<number[]>([1, 3]); // First & key questions open by default

  const toggleAccordion = (id: number) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <div className="space-y-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center pt-8 max-w-2xl mx-auto">
        <span className="text-xs uppercase font-bold tracking-wider text-[#D6D6D6]">
          Pusat Bantuan & FAQ
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
          Pertanyaan Seputar TOKOKUH.COM
        </h1>
        <p className="mt-4 text-base text-[#A1A1AA] leading-relaxed">
          Temukan jawaban jujur, akurat, dan transparan mengenai operasional aplikasi kasir Android offline kami.
        </p>
      </div>

      {/* Interactive Accordion List */}
      <div className="space-y-3">
        {FAQS.map((faq) => {
          const isOpen = openIds.includes(faq.id);

          return (
            <div
              key={faq.id}
              className="bg-[#202020] border border-[#333333] hover:border-[#444444] rounded-xl transition-all overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(faq.id)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="text-base font-semibold text-white tracking-tight">
                  {faq.id}. {faq.question}
                </span>
                <span
                  className={`w-7 h-7 rounded-lg bg-[#292929] border border-[#383838] flex items-center justify-center shrink-0 text-[#A1A1AA] transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-[#D6D6D6] border-[#D6D6D6]/40" : ""
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-sm text-[#CCCCCC] leading-relaxed border-t border-[#292929] animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigasi ke Halaman Kontak jika belum menemukan jawaban */}
      <section className="bg-[#222222] border border-[#333333] rounded-2xl p-6 sm:p-8 text-center space-y-4">
        <h2 className="text-lg font-bold text-white">Belum Menemukan Jawaban yang Anda Cari?</h2>
        <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-md mx-auto leading-relaxed">
          Tim kami siap membantu menjawab pertanyaan teknis, kendala pemasangan, atau masukan mengenai aplikasi kasir TOKOKUH.COM.
        </p>
        <div>
          <a
            href="/kontak"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#292929] hover:bg-[#333333] text-white border border-[#444444] hover:border-[#D6D6D6] rounded-xl text-xs font-semibold transition-colors"
          >
            <span>Kunjungi Halaman Kontak</span>
            <ArrowRight className="w-4 h-4 text-[#D6D6D6]" />
          </a>
        </div>
      </section>
    </div>
  );
};
