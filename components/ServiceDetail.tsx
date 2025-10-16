"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle, Clock, DollarSign, MapPin } from "lucide-react";
import { Service } from "@/lib/config";

interface LandingText {
  id: string;
  service: string;
  title: string;
  content: string;
  keywords: string[];
}

interface ServiceDetailProps {
  service: Service;
  landingText?: LandingText;
  className?: string;
}

export default function ServiceDetail({ service, landingText, className = "" }: ServiceDetailProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden card-hover ${className}`}>
      {/* 服务基本信息 */}
      <div className="p-8 relative">
        {/* 装饰性背景 */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[var(--brand-accent)]/5 to-transparent rounded-bl-full"></div>
        
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-3">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[var(--brand-text)] to-[var(--brand-warm-brown)] bg-clip-text text-transparent">
                {service.title}
              </h3>
              {service.badge && (
                <span className="bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-soft-gold)] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                  {service.badge}
                </span>
              )}
            </div>
            <p className="text-[var(--brand-text)]/80 text-lg leading-relaxed mb-6">
              {service.tagline}
            </p>
          </div>
        </div>

        {/* 服务详情 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {service.priceRange && (
            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[var(--brand-light-pink)]/30 to-transparent rounded-xl border border-[var(--brand-accent)]/10">
              <div className="p-2 bg-[var(--brand-accent)]/10 rounded-lg">
                <DollarSign size={20} className="text-[var(--brand-accent)]" />
              </div>
              <div>
                <span className="text-sm text-[var(--brand-text)]/60 block">價格範圍</span>
                <span className="text-base font-semibold text-[var(--brand-text)]">{service.priceRange}</span>
              </div>
            </div>
          )}
          {service.duration && (
            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[var(--brand-cream)]/30 to-transparent rounded-xl border border-[var(--brand-accent)]/10">
              <div className="p-2 bg-[var(--brand-accent)]/10 rounded-lg">
                <Clock size={20} className="text-[var(--brand-accent)]" />
              </div>
              <div>
                <span className="text-sm text-[var(--brand-text)]/60 block">服務時長</span>
                <span className="text-base font-semibold text-[var(--brand-text)]">{service.duration}</span>
              </div>
            </div>
          )}
          <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[var(--brand-light-pink)]/30 to-transparent rounded-xl border border-[var(--brand-accent)]/10">
            <div className="p-2 bg-[var(--brand-accent)]/10 rounded-lg">
              <MapPin size={20} className="text-[var(--brand-accent)]" />
            </div>
            <div>
              <span className="text-sm text-[var(--brand-text)]/60 block">服務地點</span>
              <span className="text-base font-semibold text-[var(--brand-text)]">新竹東區</span>
            </div>
          </div>
        </div>

        {/* 展开/收起按钮 */}
        {landingText && (
          <button
            onClick={toggleExpanded}
            className="flex items-center gap-3 text-[var(--brand-accent)] hover:text-[var(--brand-warm-brown)] transition-all duration-200 text-base font-semibold group"
          >
            <div className="p-2 bg-[var(--brand-accent)]/10 rounded-lg group-hover:bg-[var(--brand-accent)]/20 transition-colors">
              <MessageCircle size={18} />
            </div>
            <span>查看詳細介紹</span>
            <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
              <ChevronDown size={18} />
            </div>
          </button>
        )}
      </div>

      {/* 展开内容：SEO落地文 */}
      {isExpanded && landingText && (
        <div className="border-t bg-[var(--brand-bg)]/50">
          <div className="p-6">
            <h4 className="text-lg font-semibold text-[var(--brand-text)] mb-4">
              {landingText.title}
            </h4>
            
            {/* 内容段落 */}
            <div className="prose prose-sm max-w-none text-[var(--brand-text)]/80 leading-relaxed">
              {landingText.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* 关键词标签 */}
            <div className="mt-6 pt-4 border-t border-[var(--brand-text)]/10">
              <p className="text-sm text-[var(--brand-text)]/60 mb-2">相關關鍵詞：</p>
              <div className="flex flex-wrap gap-2">
                {landingText.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] rounded text-xs"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA按钮 */}
      <div className="p-8 pt-0">
        <button className="w-full btn-gradient text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
          <span>💬</span>
          加 LINE 預約 {service.title}
        </button>
      </div>
    </div>
  );
}
