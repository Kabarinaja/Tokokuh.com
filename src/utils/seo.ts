import { useEffect } from "react";

export interface PageMetadata {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: string;
  schema?: object;
}

export const SEO_CONFIGS: Record<string, PageMetadata> = {
  beranda: {
    title: "TOKOKUH.COM – Aplikasi Kasir Android Offline untuk UMKM",
    description: "TOKOKUH.COM adalah aplikasi kasir Android offline untuk UMKM. Internet mati? Kasir tetap jalan! Kelola transaksi, produk, dan laporan tanpa koneksi internet.",
    canonicalPath: "/beranda",
    ogType: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "TOKOKUH.COM",
      "operatingSystem": "Android",
      "applicationCategory": "BusinessApplication",
      "description": "Aplikasi kasir Android offline untuk UMKM dan pemilik usaha mengelola transaksi penjualan, produk, dan struk tanpa koneksi internet.",
      "offers": [
        {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "IDR",
          "description": "Download gratis via halaman iklan",
          "url": "https://besargaji.com/CXDUDIhU"
        },
        {
          "@type": "Offer",
          "price": "12700",
          "priceCurrency": "IDR",
          "description": "Download praktis tanpa iklan",
          "url": "https://ulik.me/tokokuh/2q459fcbvj6b"
        }
      ]
    }
  },
  aplikasi: {
    title: "Fitur TOKOKUH.COM – Aplikasi Kasir Offline Android",
    description: "Pelajari fitur lengkap aplikasi kasir Android TOKOKUH.COM: katalog produk, keranjang belanja, kalkulasi kembalian, cetak struk nota, riwayat, dan laporan penjualan offline.",
    canonicalPath: "/aplikasi",
    ogType: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Fitur TOKOKUH.COM",
      "operatingSystem": "Android",
      "applicationCategory": "PointOfSale",
      "description": "Fitur lengkap POS aplikasi kasir Android offline untuk mengelola transaksi toko secara mandiri tanpa biaya langganan bulanan."
    }
  },
  tentang: {
    title: "Tentang TOKOKUH.COM – Cerita Founder Logis Denis Prabowo",
    description: "Perjalanan Logis Denis Prabowo mendirikan TOKOKUH.COM. Lulusan SMK jurusan Nautika Kapal Penangkap Ikan (NKPI) asal Indramayu yang belajar teknologi dan coding mandiri.",
    canonicalPath: "/tentang",
    ogType: "profile",
    schema: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Logis Denis Prabowo",
      "jobTitle": "Founder TOKOKUH.COM",
      "birthDate": "2008-02-08",
      "birthPlace": {
        "@type": "Place",
        "name": "Indramayu, Cantigi, Jawa Barat"
      },
      "url": "https://tokokuh.com/tentang"
    }
  },
  pertanyaan: {
    title: "FAQ TOKOKUH.COM – Pertanyaan Seputar Aplikasi Kasir",
    description: "Pertanyaan yang sering diajukan mengenai aplikasi kasir Android TOKOKUH.COM: cara kerja offline, download gratis, cetak struk nota, dan dukungan untuk UMKM.",
    canonicalPath: "/pertanyaan",
    ogType: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Apa itu TOKOKUH.COM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TOKOKUH.COM adalah aplikasi kasir Android yang dirancang untuk membantu pemilik usaha mengelola transaksi, produk, dan aktivitas penjualan dengan lebih praktis."
          }
        },
        {
          "@type": "Question",
          "name": "Apakah aplikasi dapat digunakan tanpa internet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ya, fungsi transaksi kasir, input barang, perhitungan kembalian, dan riwayat dapat berjalan secara offline di perangkat Android Anda."
          }
        }
      ]
    }
  },
  kontak: {
    title: "Kontak TOKOKUH.COM – Hubungi Pengembang",
    description: "Hubungi tim dan pengembang aplikasi kasir TOKOKUH.COM melalui WhatsApp resmi atau email tokokuh.com@gmail.com untuk bantuan dan pertanyaan.",
    canonicalPath: "/kontak",
    ogType: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Kontak TOKOKUH.COM",
      "url": "https://tokokuh.com/kontak"
    }
  },
  sitemap: {
    title: "Sitemap TOKOKUH.COM – Daftar Halaman Website",
    description: "Peta situs resmi TOKOKUH.COM untuk navigasi lengkap seluruh halaman website: Beranda, Aplikasi, Tentang, Pertanyaan, Kontak, dan Dokumen Resmi.",
    canonicalPath: "/sitemap",
    ogType: "website"
  },
  "kebijakan-privasi": {
    title: "Kebijakan Privasi – TOKOKUH.COM",
    description: "Kebijakan privasi resmi aplikasi kasir Android TOKOKUH.COM mengenai keamanan data lokal pengguna dan transparansi operasional.",
    canonicalPath: "/kebijakan-privasi",
    ogType: "website"
  },
  "syarat-ketentuan": {
    title: "Syarat & Ketentuan – TOKOKUH.COM",
    description: "Syarat dan ketentuan penggunaan aplikasi kasir Android TOKOKUH.COM dan situs resmi tokokuh.com.",
    canonicalPath: "/syarat-ketentuan",
    ogType: "website"
  }
};

export function usePageSEO(pageKey: string) {
  useEffect(() => {
    const config = SEO_CONFIGS[pageKey] || SEO_CONFIGS.beranda;
    
    // Update Title
    document.title = config.title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", config.description);

    // Update Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    const fullCanonical = `https://tokokuh.com${config.canonicalPath}`;
    canonical.setAttribute("href", fullCanonical);

    // Update OpenGraph
    const updateOg = (property: string, content: string) => {
      let og = document.querySelector(`meta[property="${property}"]`);
      if (!og) {
        og = document.createElement("meta");
        og.setAttribute("property", property);
        document.head.appendChild(og);
      }
      og.setAttribute("content", content);
    };

    updateOg("og:title", config.title);
    updateOg("og:description", config.description);
    updateOg("og:url", fullCanonical);
    if (config.ogType) updateOg("og:type", config.ogType);

    // Update Twitter
    const updateTwitter = (name: string, content: string) => {
      let tw = document.querySelector(`meta[name="${name}"]`);
      if (!tw) {
        tw = document.createElement("meta");
        tw.setAttribute("name", name);
        document.head.appendChild(tw);
      }
      tw.setAttribute("content", content);
    };

    updateTwitter("twitter:title", config.title);
    updateTwitter("twitter:description", config.description);

    // Update Schema.org JSON-LD
    const existingScript = document.getElementById("page-structured-data");
    if (existingScript) existingScript.remove();

    if (config.schema) {
      const script = document.createElement("script");
      script.id = "page-structured-data";
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify(config.schema);
      document.head.appendChild(script);
    }
  }, [pageKey]);
}
