import React from "react";
import { Mail, PhoneCall, MessageSquare, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { CONTACT_INFO } from "../data/appData";
import { usePageSEO } from "../utils/seo";

export const KontakPage: React.FC = () => {
  usePageSEO("kontak");

  return (
    <div className="space-y-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center pt-8 max-w-2xl mx-auto">
        <span className="text-xs uppercase font-bold tracking-wider text-[#D6D6D6]">
          Saluran Komunikasi Resmi
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
          Hubungi TOKOKUH.COM
        </h1>
        <p className="mt-4 text-base text-[#A1A1AA] leading-relaxed">
          Memiliki pertanyaan mengenai TOKOKUH.COM, mengalami kendala, atau ingin menyampaikan masukan? Silakan hubungi kami melalui saluran komunikasi berikut.
        </p>
      </div>

      {/* Kotak Kontak Resmi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Kartu 1: WhatsApp (Nomor tidak ditampilkan sebagai teks, menggunakan tombol langsung) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#222222] border border-[#333333] hover:border-emerald-600/40 transition-all flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
              <PhoneCall className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">WhatsApp Pengembang</h2>
            <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
              Hubungi layanan pesan cepat kami untuk respon langsung terkait tanya jawab seputar instalasi dan penggunaan aplikasi kasir.
            </p>
            <div className="text-[11px] text-[#777777] flex items-center gap-1.5 pt-1">
              <Clock className="w-3.5 h-3.5" />
              <span>Respon cepat hari kerja</span>
            </div>
          </div>

          <div>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Hubungi melalui WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Kartu 2: Email Resmi */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#222222] border border-[#333333] hover:border-[#D6D6D6]/40 transition-all flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#292929] border border-[#404040] flex items-center justify-center text-[#D6D6D6]">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">Email Korespondensi</h2>
            <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
              Kirimkan surat elektronik untuk kerja sama, masukan fitur baru, atau pertanyaan formal seputar TOKOKUH.COM.
            </p>
            <div className="pt-1">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-sm font-semibold text-white hover:text-[#D6D6D6] transition-colors break-all underline decoration-1 underline-offset-4"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>

          <div>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#292929] hover:bg-[#333333] text-white font-semibold text-sm rounded-xl border border-[#444444] hover:border-[#666666] transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#D6D6D6]" />
              <span>Kirim Email Langsung</span>
            </a>
          </div>
        </div>
      </div>

      {/* Informasi Keamanan & Komitmen */}
      <section className="bg-[#1C1C1C] border border-[#2D2D2D] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-[#A1A1AA]">
        <div className="w-10 h-10 rounded-xl bg-[#252525] border border-[#333333] flex items-center justify-center shrink-0 text-[#D6D6D6]">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <p className="font-semibold text-white mb-0.5">Komitmen Transparansi:</p>
          <p className="leading-relaxed">
            Kami mengutamakan saluran komunikasi langsung tanpa formulir kontak palsu yang tidak terhubung ke backend. Setiap interaksi langsung ditangani oleh pengembang resmi TOKOKUH.COM.
          </p>
        </div>
      </section>
    </div>
  );
};
