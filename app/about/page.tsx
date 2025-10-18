import { Metadata } from "next";
import CertificateSection from "@/components/CertificateSection";
import { BASE_METADATA } from "@/lib/seo";

export const metadata: Metadata = {
  ...BASE_METADATA,
  title: "關於我們 - 專業美容工作室",
  description: "新竹東區專業美容工作室品牌故事、師資團隊與專業證照介紹。擁有完整認證的專業美容師團隊，為您提供安全可靠的美容服務。",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--brand-bg)]">
      {/* 品牌故事 Hero */}
      <section className="py-16 bg-gradient-to-b from-[var(--brand-surface)] to-[var(--brand-bg)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--brand-text)] mb-6">
              關於我們
            </h1>
            <p className="text-xl text-[var(--brand-text)]/80 leading-relaxed">
              專業、安全、用心，是我們對每一位客戶的承諾
            </p>
          </div>
        </div>
      </section>

      {/* 品牌故事 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-[var(--brand-text)] mb-8 text-center">
              品牌故事
            </h2>
            
            <div className="prose prose-lg max-w-none text-[var(--brand-text)]/80 leading-relaxed space-y-6">
              <p>
                在新竹東區這個充滿活力的科技城市裡，我們發現了現代女性對於美麗的渴望與時間的珍貴。作為一群熱愛美容事業的專業人士，我們決定創立一個真正以客戶需求為中心的美容工作室。
              </p>
              
              <p>
                我們深知，真正的美麗來自於專業的技術、安全的環境，以及對每一位客戶的用心對待。因此，我們不僅追求技術的精進，更注重服務的品質與客戶的體驗。從科學園區的工程師到好市多商圈的上班族，我們希望每一位來到這裡的女性，都能在繁忙的生活中找到屬於自己的美麗時光。
              </p>
              
              <p>
                我們的使命很簡單：讓專業的美容技術變得觸手可及，讓安全衛生的服務成為基本標準，讓客製化的美麗方案滿足每個人的獨特需求。這就是我們，一個在新竹東區用心經營的美容工作室。
              </p>
            </div>

            {/* 核心價值 */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--brand-accent)]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--brand-text)] mb-2">
                  專業技術
                </h3>
                <p className="text-[var(--brand-text)]/70 text-sm">
                  持續進修最新技術，確保每位客戶都能享受最專業的服務
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--brand-accent)]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--brand-text)] mb-2">
                  安全衛生
                </h3>
                <p className="text-[var(--brand-text)]/70 text-sm">
                  嚴格遵循衛生標準，所有工具皆經過專業消毒處理
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--brand-accent)]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">💝</span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--brand-text)] mb-2">
                  用心服務
                </h3>
                <p className="text-[var(--brand-text)]/70 text-sm">
                  傾聽客戶需求，提供客製化的美麗方案與貼心服務
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 師資與證照 */}
      <CertificateSection />

      {/* 服務理念 */}
      <section className="py-16 bg-[var(--brand-surface)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-[var(--brand-text)] mb-8">
              服務理念
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-[var(--brand-text)] mb-4">
                  🕐 全年無休 · 預約制
                </h3>
                <p className="text-[var(--brand-text)]/70 leading-relaxed">
                  全年無休為您服務，採預約制確保每位客戶都能獲得充足的服務時間與品質。
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-[var(--brand-text)] mb-4">
                  💰 現金／轉帳 · 透明收費
                </h3>
                <p className="text-[var(--brand-text)]/70 leading-relaxed">
                  提供現金與轉帳兩種付款方式，價格透明公開，讓您安心享受服務。
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-[var(--brand-text)] mb-4">
                  🎨 客製化設計
                </h3>
                <p className="text-[var(--brand-text)]/70 leading-relaxed">
                  根據您的個人特色與需求，量身打造最適合的美麗方案。
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-[var(--brand-text)] mb-4">
                  📍 交通便利
                </h3>
                <p className="text-[var(--brand-text)]/70 leading-relaxed">
                  位於新竹東區，近科學園區、好市多商圈，交通便利，停車方便。
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[var(--brand-accent)] text-white rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">
                準備好開始您的美麗之旅了嗎？
              </h3>
              <p className="mb-6 opacity-90">
                立即加 LINE 預約，讓我們為您打造專屬的美麗體驗
              </p>
              <button className="bg-white text-[var(--brand-accent)] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                加 LINE 預約
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}






