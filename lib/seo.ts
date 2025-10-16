import { Metadata } from "next";
import { BRAND } from "@/lib/config";

export const BASE_METADATA: Metadata = {
  metadataBase: new URL("https://beauty-landing.vercel.app"),
  title: {
    default: `新竹東區專業美容｜美睫・臉部保養・育髮・美甲｜${BRAND.name}`,
    template: `%s｜${BRAND.name}`
  },
  description: `新竹東區專業美容工作室，提供美睫、臉部保養、育髮、美甲服務。近科學園區、好市多商圈、關新路。專業技術×安全衛生×客製化服務，讓您的美麗看得見！`,
  keywords: [
    "新竹東區美容", "新竹東區美睫", "新竹東區臉部保養", "新竹東區育髮", "新竹東區美甲",
    "科學園區美容", "好市多商圈美睫", "關新路美甲", "新莊車站美容",
    "專業美睫師", "深層臉部保養", "頭皮養護", "凝膠美甲", "丙級美容師",
    "全年無休", "預約制", "安全衛生", "客製化服務"
  ],
  openGraph: {
    type: "website",
    title: `新竹東區專業美容工作室｜${BRAND.name}`,
    description: `專業美睫、臉部保養、育髮、美甲服務。新竹東區科學園區、好市多商圈首選美容工作室。`,
    images: ["/images/og-demo.jpg"],
    locale: "zh_TW",
    siteName: BRAND.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `新竹東區專業美容｜${BRAND.name}`,
    description: `專業美睫、臉部保養、育髮、美甲服務。讓您的美麗看得見！`,
    images: ["/images/og-demo.jpg"],
  },
  alternates: { 
    canonical: "/" 
  },
  robots: { 
    index: true, 
    follow: true 
  }
}

export function jsonLdBeautySalon() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: BRAND.name,
    description: "新竹東區專業美容工作室，提供美睫、臉部保養、育髮、美甲等專業服務",
    address: { 
      "@type": "PostalAddress", 
      addressLocality: "新竹市東區", 
      addressRegion: "新竹市",
      addressCountry: "TW",
      streetAddress: BRAND.address
    },
    url: "https://beauty-landing.vercel.app",
    openingHours: "Mo-Su 10:00-20:00",
    paymentAccepted: "Cash, BankTransfer",
    areaServed: [
      {
        "@type": "City",
        name: "新竹市"
      },
      {
        "@type": "Place",
        name: "新竹科學園區"
      },
      {
        "@type": "Place", 
        name: "好市多商圈"
      }
    ],
    telephone: "+886-3-1234567", // 占位電話
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "156",
      bestRating: "5",
      worstRating: "1"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "美容服務",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "美睫服務",
            description: "自然到濃密，多款捲翹與長度可選的專業美睫服務"
          },
          priceRange: "NT$ 799–1,599"
        },
        {
          "@type": "Offer", 
          itemOffered: {
            "@type": "Service",
            name: "臉部保養",
            description: "深層清潔、保濕修護、臉部撥筋的專業臉部保養服務"
          },
          priceRange: "NT$ 999–1,999"
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service", 
            name: "育髮服務",
            description: "頭皮健檢與養護的專業育髮服務"
          },
          priceRange: "NT$ 1,200–2,500"
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "美甲服務",
            description: "基礎保養、凝膠設計的專業美甲服務"
          },
          priceRange: "NT$ 699–1,599"
        }
      ]
    }
  }
}

// 生成服务页面的元数据
export function generateServiceMetadata(serviceName: string) {
  return {
    title: `${serviceName} - 新竹東區專業服務`,
    description: `新竹東區專業${serviceName}服務，近科學園區、好市多商圈。專業技術×安全衛生，讓您的美麗看得見！`,
    keywords: [
      `新竹東區${serviceName}`,
      `${serviceName}推薦`,
      "科學園區美容",
      "好市多商圈美容",
      "專業美容師",
      "安全衛生",
      "預約制"
    ]
  };
}

