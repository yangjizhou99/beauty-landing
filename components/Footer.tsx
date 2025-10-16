import { BRAND } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[var(--brand-surface)] to-[var(--brand-bg)] border-t border-[var(--brand-accent)]/20 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-[var(--brand-accent)]/5 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-tr from-[var(--brand-soft-gold)]/3 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* 品牌資訊 */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[var(--brand-accent)] to-[var(--brand-warm-brown)] flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">美</span>
                </div>
                <div className="absolute inset-0 rounded-full bg-[var(--brand-accent)]/30 blur-md -z-10"></div>
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-[var(--brand-text)] to-[var(--brand-warm-brown)] bg-clip-text text-transparent">
                {BRAND.name}
              </span>
            </div>
            <p className="text-[var(--brand-text)]/80 text-base leading-relaxed mb-6">
              專業細節 × 可視化成果 × 療癒體驗
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <span className="text-lg">📱</span>
              </div>
              <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <span className="text-lg">📸</span>
              </div>
              <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <span className="text-lg">📖</span>
              </div>
            </div>
          </div>

          {/* 營業資訊 */}
          <div>
            <h3 className="font-bold text-xl mb-6 bg-gradient-to-r from-[var(--brand-text)] to-[var(--brand-warm-brown)] bg-clip-text text-transparent">營業資訊</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl">
                <span className="text-lg">📍</span>
                <span className="text-[var(--brand-text)]/80 font-medium">{BRAND.address}</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl">
                <span className="text-lg">🕒</span>
                <span className="text-[var(--brand-text)]/80 font-medium">{BRAND.open}</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl">
                <span className="text-lg">💳</span>
                <span className="text-[var(--brand-text)]/80 font-medium">支付：{BRAND.pay}</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl">
                <span className="text-lg">🚗</span>
                <span className="text-[var(--brand-text)]/80 font-medium">近：{BRAND.areaTags.join("、")}</span>
              </div>
            </div>
          </div>

          {/* 服務項目 */}
          <div>
            <h3 className="font-bold text-xl mb-6 bg-gradient-to-r from-[var(--brand-text)] to-[var(--brand-warm-brown)] bg-clip-text text-transparent">服務項目</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl">
                <span className="text-lg">✨</span>
                <span className="text-[var(--brand-text)]/80 font-medium">美睫服務</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl">
                <span className="text-lg">💆</span>
                <span className="text-[var(--brand-text)]/80 font-medium">臉部保養</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl">
                <span className="text-lg">🌿</span>
                <span className="text-[var(--brand-text)]/80 font-medium">育髮養護</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl">
                <span className="text-lg">💅</span>
                <span className="text-[var(--brand-text)]/80 font-medium">美甲設計</span>
              </div>
            </div>
          </div>
        </div>

        {/* 版權資訊 */}
        <div className="border-t border-[var(--brand-accent)]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[var(--brand-text)]/70 font-medium">
              © 2024 {BRAND.name}. All rights reserved.
            </p>
            <p className="text-[var(--brand-text)]/70 font-medium">
              新竹東區專業美容服務 | 全年無休採預約制
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

