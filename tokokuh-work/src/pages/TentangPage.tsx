import React from "react";
import { Calendar, MapPin, Briefcase, Award, ExternalLink, Code2, Cpu, Wrench } from "lucide-react";
import { CONTACT_INFO } from "../data/appData";
import { usePageSEO } from "../utils/seo";

export const TentangPage: React.FC = () => {
  usePageSEO("tentang");
  const founder = CONTACT_INFO.founder;

  return (
    <div className="space-y-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center pt-8 max-w-3xl mx-auto">
        <span className="text-xs uppercase font-bold tracking-wider text-[#D6D6D6]">
          Kisah & Filosofi Pengembang
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
          Tentang TOKOKUH.COM
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
          Dedikasi nyata menghadirkan perangkat lunak kasir Android yang fungsional, mandiri, dan berpihak pada kebutuhan nyata para pelaku usaha kecil di Indonesia.
        </p>
      </div>

      {/* Profil Singkat Founder Card */}
      <section className="bg-[#222222] border border-[#333333] rounded-2xl p-6 sm:p-10">
        <div className="pb-8 border-b border-[#303030]">
          <div>
            <div className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-[#292929] text-[#D6D6D6] border border-[#383838] mb-1.5">
              {founder.role}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {founder.name}
            </h2>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 mt-2 text-xs text-[#A1A1AA]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#888888]" />
                Lahir: {founder.birthDate}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#888888]" />
                Asal: {founder.birthPlace}
              </span>
            </div>
          </div>
        </div>

        {/* Narasi Jujur & Natural Perjalanan Pendiri */}
        <div className="pt-8 space-y-5 text-sm sm:text-base text-[#CCCCCC] leading-relaxed">
          <p>
            Saya adalah <strong>Logis Denis Prabowo</strong>, pendiri dan pengembang di balik <strong>TOKOKUH.COM</strong>. Saya memiliki latar belakang pendidikan formal SMK dengan jurusan <em>NKPI (Nautika Kapal Penangkap Ikan)</em>.
          </p>

          <p>
            Walaupun pendidikan formal saya tidak berasal dari jurusan teknologi informasi atau ilmu komputer, saya memiliki ketertarikan yang sangat besar terhadap dunia teknologi—khususnya dalam rancang bangun website dan pengembangan aplikasi digital.
          </p>

          <p>
            Rasa penasaran dan ketertarikan tersebut mendorong saya untuk terus belajar secara mandiri, mengulik logika pemrograman, dan mulai membangun berbagai proyek digital yang nyata dan bermanfaat.
          </p>

          <div className="p-5 my-6 rounded-xl bg-[#292929] border-l-4 border-[#D6D6D6] text-sm text-[#E0E0E0] space-y-2">
            <p className="font-semibold text-white flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#D6D6D6]" />
              Transparansi Proses Pengembangan & Penggunaan AI:
            </p>
            <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
              Dalam proses pengembangan TOKOKUH.COM, saya memanfaatkan kecerdasan buatan (AI) sebagai salah satu alat bantu untuk mempercepat proses belajar, eksplorasi solusi arsitektur, dan pemecahan kendala teknis.
            </p>
            <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
              Namun, proyek ini <strong>bukan sepenuhnya dibuat oleh AI</strong>. Saya tetap terlibat langsung secara penuh dalam perancangan alur kerja, pengujian perangkat, build aplikasi Android, pengelolaan source code, konfigurasi hosting, proses deployment, hingga pengawasan teknis lainnya yang saya kerjakan secara cermat dan manual.
            </p>
          </div>

          <p>
            Saya memiliki keyakinan mendalam bahwa latar belakang jurusan pendidikan formal bukanlah satu-satunya batasan seseorang untuk terus belajar, beradaptasi, dan membangun karya nyata yang bermanfaat di dunia teknologi.
          </p>
        </div>
      </section>

      {/* Portofolio Singkat: Proyek Sebelumnya */}
      <section className="bg-[#202020] border border-[#333333] rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-[#D6D6D6]" />
          <h3 className="text-lg font-bold text-white tracking-tight">Proyek Sebelumnya</h3>
        </div>
        <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
          Sebagai bagian dari perjalanan belajar mandiri dan praktik pengembangan web, berikut adalah proyek digital yang pernah saya bangun:
        </p>

        <div className="p-5 rounded-xl bg-[#292929] border border-[#383838] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white">
                {founder.previousProject.name}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#333333] text-[#A1A1AA]">
                Website
              </span>
            </div>
            <p className="text-xs text-[#A1A1AA]">
              {founder.previousProject.description}
            </p>
            <p className="text-xs text-[#777777] pt-1">
              URL: {founder.previousProject.url}
            </p>
          </div>

          <a
            href={founder.previousProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#333333] hover:bg-[#404040] text-white text-xs font-medium rounded-lg border border-[#484848] transition-colors shrink-0"
          >
            <span>Kunjungi Website</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#D6D6D6]" />
          </a>
        </div>
      </section>

      {/* Visi untuk UMKM */}
      <section className="border border-[#2D2D2D] bg-[#1A1A1A] rounded-2xl p-6 sm:p-8 space-y-3">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Wrench className="w-4 h-4 text-[#D6D6D6]" />
          Prinsip Kerja TOKOKUH.COM
        </h3>
        <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
          TOKOKUH.COM dibangun dengan tujuan tunggal: memberikan kemudahan pencatatan transaksi yang tidak bergantung pada koneksi internet, tidak membebani pelaku usaha dengan sistem berlangganan rumit, dan dapat dioperasikan oleh siapa saja dengan cepat.
        </p>
      </section>
    </div>
  );
};
