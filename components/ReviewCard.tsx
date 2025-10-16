"use client";
import { Review } from "@/lib/config";
import { Star, MapPin, Calendar } from "lucide-react";

interface ReviewCardProps {
  review: Review;
}

// 来源图标映射
const getSourceIcon = (source: string) => {
  switch (source) {
    case "Google":
      return "🔍";
    case "IG":
      return "📸";
    case "小紅書":
      return "📖";
    default:
      return "⭐";
  }
};

// 来源颜色映射
const getSourceColor = (source: string) => {
  switch (source) {
    case "Google":
      return "bg-blue-100 text-blue-700";
    case "IG":
      return "bg-pink-100 text-pink-700";
    case "小紅書":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

// 渲染星级评分
const renderStars = (rating?: number) => {
  if (!rating) return null;
  
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${
            i < rating 
              ? "fill-yellow-400 text-yellow-400" 
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover relative overflow-hidden">
      {/* 装饰性背景 */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[var(--brand-accent)]/5 to-transparent rounded-bl-full"></div>
      
      {/* 引用装饰 */}
      <div className="absolute top-6 left-6 text-6xl text-[var(--brand-accent)]/10 font-serif leading-none">
        "
      </div>

      {/* 头部信息 */}
      <div className="flex items-start justify-between mb-6 relative z-10">
        <div className="flex items-center gap-4">
          {/* 来源标识 */}
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow-md ${getSourceColor(review.source)}`}>
            <span className="text-lg">{getSourceIcon(review.source)}</span>
            <span>{review.source}</span>
          </div>
          
          {/* 评分 */}
          {review.rating && (
            <div className="flex items-center gap-1">
              {renderStars(review.rating)}
              <span className="text-sm font-semibold text-[var(--brand-text)] ml-1">
                {review.rating}.0
              </span>
            </div>
          )}
        </div>
        
        {/* 日期 */}
        {review.date && (
          <div className="flex items-center gap-2 text-[var(--brand-text)]/60 text-sm bg-[var(--brand-bg)]/50 px-3 py-1 rounded-full">
            <Calendar size={14} />
            <span>{review.date}</span>
          </div>
        )}
      </div>

      {/* 评价内容 */}
      <blockquote className="text-[var(--brand-text)] text-lg leading-relaxed mb-6 relative z-10 pl-4">
        {review.text}
      </blockquote>

      {/* 作者信息 */}
      {review.author && (
        <div className="flex items-center gap-3 text-sm text-[var(--brand-text)]/80 relative z-10">
          <div className="w-10 h-10 bg-gradient-to-br from-[var(--brand-accent)] to-[var(--brand-soft-gold)] rounded-full flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">
              {review.author.charAt(0)}
            </span>
          </div>
          <div>
            <span className="font-semibold block">{review.author}</span>
            <div className="flex items-center gap-1 text-xs text-[var(--brand-accent)]">
              <MapPin size={12} />
              <span>新竹東區</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
