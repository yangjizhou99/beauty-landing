"use client";
import { useState } from "react";
import { Work } from "@/lib/config";
import Image from "next/image";
import BeforeAfterSlider from "./BeforeAfterSlider";

interface PortfolioGridProps {
  items: Work[];
}

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("全部");
  const [currentSliderIndex, setCurrentSliderIndex] = useState<number | null>(null);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  
  const categories = ["全部", ...Array.from(new Set(items.map(item => item.category)))];
  const filteredItems = selectedCategory === "全部" 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  // 追踪分类筛选事件
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "portfolio_view", {
        category: category
      });
    }
  };

  // 打开 Before/After 对比
  const openSlider = (index: number) => {
    setCurrentSliderIndex(index);
    setIsSliderOpen(true);
  };

  // 关闭对比
  const closeSlider = () => {
    setIsSliderOpen(false);
    setCurrentSliderIndex(null);
  };

  // 导航到上一个作品
  const goToPrevious = () => {
    if (currentSliderIndex !== null && currentSliderIndex > 0) {
      setCurrentSliderIndex(currentSliderIndex - 1);
    }
  };

  // 导航到下一个作品
  const goToNext = () => {
    if (currentSliderIndex !== null && currentSliderIndex < filteredItems.length - 1) {
      setCurrentSliderIndex(currentSliderIndex + 1);
    }
  };

  // 获取有 before/after 的作品
  const itemsWithComparison = filteredItems.filter(item => item.before && item.after);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-[var(--brand-bg)] to-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-1/4 w-24 h-24 bg-gradient-to-br from-[var(--brand-soft-gold)]/10 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-1/4 w-32 h-32 bg-gradient-to-tr from-[var(--brand-accent)]/8 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--brand-text)] via-[var(--brand-warm-brown)] to-[var(--brand-text)] bg-clip-text text-transparent">
            作品展示
          </h2>
          <p className="text-xl text-[var(--brand-text)]/80 max-w-3xl mx-auto leading-relaxed">
            真實案例分享，見證專業技術與美麗成果
          </p>
        </div>

        {/* 分類篩選 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 shadow-md ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-soft-gold)] text-white shadow-lg transform scale-105"
                  : "bg-white text-[var(--brand-text)] hover:bg-gradient-to-r hover:from-[var(--brand-accent)]/10 hover:to-[var(--brand-soft-gold)]/10 hover:shadow-lg hover:scale-105"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 作品網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((work, index) => {
            const comparisonIndex = itemsWithComparison.findIndex(item => item.id === work.id);
            const hasComparison = work.before && work.after;
            
            return (
              <div 
                key={work.id}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/images/portfolio/placeholder.svg"
                    alt={work.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* 類別標籤 */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-soft-gold)] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {work.category}
                    </span>
                  </div>

                  {/* 前後對比標示 */}
                  {hasComparison && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/95 backdrop-blur-sm text-[var(--brand-text)] px-3 py-1 rounded-full text-sm font-medium shadow-md">
                        前後對比
                      </span>
                    </div>
                  )}

                  {/* 點擊覆蓋層 */}
                  {hasComparison && (
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer flex items-end justify-center pb-6"
                      onClick={() => openSlider(comparisonIndex)}
                    >
                      <div className="bg-white/95 backdrop-blur-sm text-[var(--brand-text)] px-6 py-3 rounded-full text-base font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="mr-2">🔍</span>
                        點擊查看對比
                      </div>
                    </div>
                  )}

                  {/* 懸停光暈效果 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-accent)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <p className="text-[var(--brand-text)] text-base font-medium leading-relaxed">
                    {work.alt}
                  </p>
                  {hasComparison && (
                    <div className="mt-4 flex items-center gap-2 text-[var(--brand-accent)]">
                      <span className="text-lg">💡</span>
                      <span className="text-sm font-medium">點擊圖片查看前後對比</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* 查看更多提示 */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--brand-light-pink)]/30 to-[var(--brand-cream)]/30 rounded-2xl border border-[var(--brand-accent)]/20">
            <span className="text-2xl">📱</span>
            <p className="text-[var(--brand-text)]/80 font-medium">
              更多作品請關注我們的 LINE 官方帳號
            </p>
          </div>
        </div>
      </div>

      {/* Before/After 滑杆 Dialog */}
      {isSliderOpen && currentSliderIndex !== null && itemsWithComparison[currentSliderIndex] && (
        <BeforeAfterSlider
          beforeSrc={itemsWithComparison[currentSliderIndex].before!}
          afterSrc={itemsWithComparison[currentSliderIndex].after!}
          alt={itemsWithComparison[currentSliderIndex].alt}
          workId={itemsWithComparison[currentSliderIndex].id}
          onClose={closeSlider}
          onPrevious={currentSliderIndex > 0 ? goToPrevious : undefined}
          onNext={currentSliderIndex < itemsWithComparison.length - 1 ? goToNext : undefined}
        />
      )}
    </section>
  );
}

