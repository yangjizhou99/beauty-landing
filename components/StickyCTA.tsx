"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "@/lib/config";
import { buildLineUrlWithUTM } from "@/lib/utm";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // 當頁面向下滾動超過 300px 時顯示
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleLineClick = () => {
    const href = buildLineUrlWithUTM(BRAND.lineJoinUrl, { section: "sticky" });
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-8 right-8 z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20 
          }}
        >
          {/* 脉冲光环 */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-soft-gold)] animate-pulse opacity-30 blur-md scale-110"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-soft-gold)] animate-ping opacity-20 blur-sm scale-125"></div>
          
          {/* 主按钮 */}
          <motion.button
            onClick={handleLineClick}
            className="relative bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-soft-gold)] text-white rounded-full px-8 py-4 shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 font-semibold text-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(156, 126, 108, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              y: [0, -5, 0],
              boxShadow: [
                "0 10px 30px rgba(156, 126, 108, 0.3)",
                "0 15px 35px rgba(156, 126, 108, 0.4)",
                "0 10px 30px rgba(156, 126, 108, 0.3)"
              ]
            }}
            transition={{ 
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <motion.span 
              className="text-2xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              💬
            </motion.span>
            <span>加 LINE 預約</span>
            
            {/* 小装饰点 */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

