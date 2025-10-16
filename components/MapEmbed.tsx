"use client";
import { BRAND } from "@/lib/config";

export default function MapEmbed() {
  const handleMapOpen = () => {
    // 開啟 Google Maps 應用程式
    const mapUrl = "https://maps.app.goo.gl/iLAHqt4WvetcqjQL7";
    window.open(mapUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="location" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--brand-text)] mb-4">
              到店資訊
            </h2>
            <p className="text-lg text-[var(--brand-text)]/70">
              {BRAND.address}｜{BRAND.open}｜支付：{BRAND.pay}
            </p>
          </div>

          {/* 地圖嵌入 */}
          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg mb-6">
            <iframe
              src={BRAND.mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
              title="地圖位置"
              allowFullScreen
            />
          </div>

          {/* 交通資訊 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[var(--brand-surface)] p-6 rounded-xl">
              <h3 className="font-semibold text-[var(--brand-text)] mb-3 flex items-center">
                <span className="mr-2">🚗</span>
                停車資訊
              </h3>
              <ul className="space-y-2 text-sm text-[var(--brand-text)]/70">
                <li>• 路邊停車格（關新路、光復路）</li>
                <li>• 收費停車場（步行 3-5 分鐘）</li>
                <li>• 建議搭乘大眾運輸工具</li>
              </ul>
            </div>

            <div className="bg-[var(--brand-surface)] p-6 rounded-xl">
              <h3 className="font-semibold text-[var(--brand-text)] mb-3 flex items-center">
                <span className="mr-2">🚌</span>
                大眾運輸
              </h3>
              <ul className="space-y-2 text-sm text-[var(--brand-text)]/70">
                <li>• 近關新路站（步行 5 分鐘）</li>
                <li>• 新莊車站（步行 8 分鐘）</li>
                <li>• 多路公車可達</li>
              </ul>
            </div>
          </div>

          {/* 周邊地標 */}
          <div className="mt-6 text-center">
            <p className="text-sm text-[var(--brand-text)]/60 mb-2">
              近：{BRAND.areaTags.join("／")}
            </p>
            <button 
              onClick={handleMapOpen}
              className="inline-flex items-center text-[var(--brand-accent)] hover:text-[var(--brand-accent)]/80 transition-colors text-sm font-medium"
            >
              <span className="mr-1">📍</span>
              在地圖 App 開啟
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

