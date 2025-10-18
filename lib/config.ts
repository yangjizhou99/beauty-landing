export const BRAND = {
  name: "C.H Eyelash 慈美睫、美學",
  locale: "zh-TW",
  colors: {
    // 方案A（療癒）：療癒色系
    bg: "#F6EDEA",
    surface: "#F5EEE6", 
    accent: "#9C7E6C",
    text: "#333333"
  },
  lineJoinUrl: process.env.NEXT_PUBLIC_LINE_JOIN_URL || "https://lin.ee/IuBxxNI",
  address: "300新竹市東區世傑路98-8號",
  phone: "0905-203865",
  open: "全年無休｜採預約制",
  pay: "現金／轉帳",
  areaTags: ["好市多商圈", "新竹科學園區", "新莊車站", "關新路"],
  mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.123456789!2d120.123456789!3d24.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346835d89b928273%3A0xa707bbaf0c66c39!2zMzAw5Y-w5p2x5biC5p2x5Yy65Y2X5Yy65rCR5LqM6LevOTgtOOW6t-iDvS5HIEV5ZWxhc2gg5L2z5rCR5q2M44CB6rCR5a246aSo!5e0!3m2!1szh-TW!2stw!4v1234567890123!5m2!1szh-TW!2stw"
}

export type Service = {
  id: string;
  title: string;         // 美睫 / 臉部保養 / 育髮 / 美甲
  tagline: string;       // 一句話價值
  priceRange?: string;   // 例：NT$ 799–1,599（含稅/未稅）
  duration?: string;     // 例：60–90 分
  badge?: "招牌" | "新品" | "限時" | null;
  image?: string;        // 服務展示圖片路徑
  imageAlt?: string;     // 圖片替代文字
};

export type Work = {
  id: string;
  category: "美睫" | "臉部" | "育髮" | "美甲";
  cover: string;         // 圖片路徑
  before?: string;
  after?: string;
  alt: string;           // 圖像替代文字（SEO/無障礙）
};

export type Review = {
  id: string;
  source: "Google" | "IG" | "小紅書" | "其他";
  text: string;
  author?: string;
  rating?: number;       // 1–5
  date?: string;         // YYYY-MM-DD
};

export type QA = {
  id: string;
  q: string;
  a: string;
};

