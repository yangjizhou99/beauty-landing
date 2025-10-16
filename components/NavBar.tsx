"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/config";
import { buildLineUrlWithUTM } from "@/lib/utm";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLineClick = () => {
    const href = buildLineUrlWithUTM(BRAND.lineJoinUrl, { section: "navbar" });
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const navItems = [
    { href: "#services", label: "服務項目" },
    { href: "#portfolio", label: "作品展示" },
    { href: "#reviews", label: "客戶評價" },
    { href: "/about", label: "關於我們" },
    { href: "#location", label: "到店資訊" },
    { href: "#faq", label: "常見問題" }
  ];

  return (
    <motion.nav 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-[var(--brand-accent)]/20" 
          : "bg-white/80 backdrop-blur-sm border-b border-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[var(--brand-accent)] to-[var(--brand-warm-brown)] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">美</span>
              </div>
              {/* Logo 光晕效果 */}
              <div className="absolute inset-0 rounded-full bg-[var(--brand-accent)]/30 blur-md -z-10"></div>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-[var(--brand-text)] to-[var(--brand-warm-brown)] bg-clip-text text-transparent">
              {BRAND.name}
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a 
                key={item.href}
                href={item.href} 
                className="relative text-[var(--brand-text)] hover:text-[var(--brand-accent)] transition-colors font-medium group"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.label}
                {/* 悬停下划线动画 */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-soft-gold)] group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={handleLineClick}
                  className="btn-gradient text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl"
                >
                  <span className="mr-2">💬</span>
                  加 LINE 預約
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="開啟選單"
            whileTap={{ scale: 0.95 }}
          >
            <motion.svg 
              className="h-6 w-6 text-[var(--brand-text)]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden border-t bg-white/95 backdrop-blur-sm"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div 
                className="px-2 pt-4 pb-6 space-y-2"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {navItems.map((item, index) => (
                  <motion.a 
                    key={item.href}
                    href={item.href} 
                    className="block px-4 py-3 text-[var(--brand-text)] hover:text-[var(--brand-accent)] hover:bg-[var(--brand-bg)]/50 rounded-lg transition-all duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                
                <motion.div 
                  className="px-4 pt-4"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    onClick={handleLineClick}
                    className="w-full btn-gradient text-white font-semibold py-3 rounded-full"
                  >
                    <span className="mr-2">💬</span>
                    加 LINE 預約
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

