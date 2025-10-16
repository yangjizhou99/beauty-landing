"use client";
import { Review } from "@/lib/config";
import ReviewCard from "./ReviewCard";

interface ReviewListProps {
  items: Review[];
}

export default function ReviewList({ items }: ReviewListProps) {
  // 按评分排序，优先显示高分评价
  const sortedReviews = [...items].sort((a, b) => (b.rating || 0) - (a.rating || 0));

  // 计算平均评分
  const validRatings = items.filter(item => item.rating).map(item => item.rating!);
  const averageRating = validRatings.length > 0 
    ? validRatings.reduce((sum, rating) => sum + rating, 0) / validRatings.length 
    : 0;

  // 按来源分组统计
  const sourceStats = items.reduce((acc, review) => {
    acc[review.source] = (acc[review.source] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-[var(--brand-cream)]/30 to-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-10 w-28 h-28 bg-gradient-to-bl from-[var(--brand-accent)]/8 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-10 w-36 h-36 bg-gradient-to-tr from-[var(--brand-soft-gold)]/6 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* 标题和统计信息 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--brand-text)] via-[var(--brand-warm-brown)] to-[var(--brand-text)] bg-clip-text text-transparent">
            客戶評價
          </h2>
          <p className="text-xl text-[var(--brand-text)]/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            真實客戶反饋，見證專業服務品質
          </p>

          {/* 评分统计 */}
          {averageRating > 0 && (
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[var(--brand-accent)]/10">
                <div className="text-4xl font-bold text-[var(--brand-accent)] mb-2">
                  {averageRating.toFixed(1)}
                </div>
                <div className="text-sm text-[var(--brand-text)]/70 font-medium">
                  平均評分
                </div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[var(--brand-accent)]/10">
                <div className="text-3xl font-bold text-[var(--brand-text)] mb-2">
                  {items.length}
                </div>
                <div className="text-sm text-[var(--brand-text)]/70 font-medium">
                  精選評價
                </div>
              </div>
            </div>
          )}

          {/* 来源统计 */}
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {Object.entries(sourceStats).map(([source, count]) => (
              <span key={source} className="px-4 py-2 bg-white/60 backdrop-blur-sm text-[var(--brand-text)]/80 rounded-full border border-[var(--brand-accent)]/20 font-medium">
                {source}: {count}則
              </span>
            ))}
          </div>
        </div>

        {/* 评价网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sortedReviews.map((review, index) => (
            <div 
              key={review.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* 底部提示 */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[var(--brand-light-pink)]/30 to-[var(--brand-cream)]/30 rounded-2xl p-8 max-w-3xl mx-auto border border-[var(--brand-accent)]/20 shadow-lg">
            <h3 className="text-2xl font-bold text-[var(--brand-text)] mb-4">
              想要分享您的體驗？
            </h3>
            <p className="text-[var(--brand-text)]/80 mb-6 text-lg">
              歡迎在 Google、Instagram 或小紅書上分享您的美麗體驗
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-white rounded-full text-[var(--brand-text)] font-medium shadow-md hover:shadow-lg transition-shadow">
                🔍 Google 評價
              </span>
              <span className="px-6 py-3 bg-white rounded-full text-[var(--brand-text)] font-medium shadow-md hover:shadow-lg transition-shadow">
                📸 Instagram 分享
              </span>
              <span className="px-6 py-3 bg-white rounded-full text-[var(--brand-text)] font-medium shadow-md hover:shadow-lg transition-shadow">
                📖 小紅書筆記
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
