"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/config";
import { buildLineUrlWithUTM } from "@/lib/utm";
import Image from "next/image";

export default function Hero({ variant = "A" as "A" | "B" | "C" }) {
  const copy = {
    A: { 
      title: "專業細節，讓你的美『看得見』", 
      sub: "美容・美睫・育髮・美甲｜新竹東區｜全年無休、採預約制" 
    },
    B: { 
      title: "把疲憊留在門外，把美好帶回家", 
      sub: "貼心細節・療癒放鬆・技術穩定" 
    },
    C: { 
      title: "想變美？先加 LINE，再出發", 
      sub: "作品集天天更新，熱門款式一次看懂" 
    }
  }[variant];

  const handleLineClick = () => {
    const href = buildLineUrlWithUTM(BRAND.lineJoinUrl, { section: "hero", variant });
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-20 md:py-24 text-center overflow-hidden">
      {/* 工作室环境背景图片 */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/beauty-landing/images/studio-environment-demo.jpg"
          alt="美容工作室环境背景（效果图示意）"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* 渐变遮罩 - 从中心向外淡化，突出环境展示 */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30"></div>
      </div>
      
      {/* 环境展示装饰元素 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 柔和光晕 - 与品牌视觉协调 */}
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-r from-white/30 to-white/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-l from-white/20 to-white/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
        
        {/* 精致几何装饰 */}
        <div className="absolute top-32 right-20 w-6 h-6 bg-white/30 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-4 h-4 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* 品牌色调强调 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-accent)]/5 via-transparent to-[var(--brand-soft-gold)]/5"></div>
      </div>

      <motion.h1 
        className="relative text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-[var(--brand-text)] mb-6"
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="bg-gradient-to-r from-[var(--brand-text)] via-[var(--brand-warm-brown)] to-[var(--brand-text)] bg-clip-text text-transparent">
          {copy.title}
        </span>
      </motion.h1>
      
      <motion.p 
        className="relative text-lg md:text-xl lg:text-2xl text-[var(--brand-text)]/80 max-w-4xl mx-auto leading-relaxed mb-8"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {copy.sub}
      </motion.p>
      
      <motion.div 
        className="relative flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <Button 
          size="lg" 
          onClick={handleLineClick}
          className="btn-gradient text-white px-10 py-4 text-lg font-semibold rounded-full animate-pulse-glow"
        >
          <span className="mr-2">💬</span>
          加 LINE 預約
        </Button>
        
        {/* 次要CTA */}
        <motion.a 
          href="#services"
          className="text-[var(--brand-text)]/70 hover:text-[var(--brand-accent)] transition-colors flex items-center gap-2 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>了解服務</span>
          <motion.svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.a>
      </motion.div>

      {/* 信任指标 */}
      <motion.div 
        className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-[var(--brand-accent)] mb-2">500+</div>
          <div className="text-sm text-[var(--brand-text)]/70">滿意客戶</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-[var(--brand-accent)] mb-2">5年</div>
          <div className="text-sm text-[var(--brand-text)]/70">專業經驗</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-[var(--brand-accent)] mb-2">4.9★</div>
          <div className="text-sm text-[var(--brand-text)]/70">客戶評分</div>
        </div>
      </motion.div>
    </section>
  );
}

