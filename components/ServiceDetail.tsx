"use client";
import { useState } from "react";
import { ChevronDown, MessageCircle, Clock, DollarSign, MapPin } from "lucide-react";
import { Service } from "@/lib/config";
import Image from "next/image";

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

  // 根据服务类型选择对应的背景图片
  const getBackgroundImage = (serviceId: string) => {
    switch (serviceId) {
      case 'lash':
        return '/images/portfolio/lash-natural-demo.webp';
      case 'face':
        return '/images/portfolio/face-care-demo.webp';
      case 'scalp':
        return '/images/portfolio/scalp-care-demo.webp';
      case 'nail':
        return '/images/portfolio/nail-design-demo.webp';
      default:
        return null;
    }
  };

  const backgroundImage = getBackgroundImage(service.id);

  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden card-hover ${className}`}>
      {/* 服务展示图片 */}
      {backgroundImage && (
        <div className="relative h-48 w-full">
          <Image
            src={backgroundImage}
            alt={`${service.title}服务展示（效果图示意）`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* 图片遮罩 - 让图片更美观 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent"></div>
          
          {/* 服务标题叠加在图片上 */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white drop-shadow-lg">
                  {service.title}
                </h3>
                {service.badge && (
                  <span className="inline-block mt-1 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-soft-gold)] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                    {service.badge}
                  </span>
                )}
              </div>
              <div className="text-xs text-white/80 bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
                效果图示意
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* 服务详细信息 */}
      <div className="p-6">
        {/* 服务描述 */}
        <p className="text-[var(--brand-text)]/80 text-base leading-relaxed mb-6">
          {service.tagline}
        </p>

        {/* 服务详情 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {service.priceRange && (
            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-[var(--brand-light-pink)]/20 to-transparent rounded-lg border border-[var(--brand-accent)]/10">
              <div className="p-2 bg-[var(--brand-accent)]/10 rounded-md">
                <DollarSign size={18} className="text-[var(--brand-accent)]" />
              </div>
              <div>
                <span className="text-xs text-[var(--brand-text)]/60 block">價格範圍</span>
                <span className="text-sm font-semibold text-[var(--brand-text)]">{service.priceRange}</span>
              </div>
            </div>
          )}
          {service.duration && (
            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-[var(--brand-cream)]/20 to-transparent rounded-lg border border-[var(--brand-accent)]/10">
              <div className="p-2 bg-[var(--brand-accent)]/10 rounded-md">
                <Clock size={18} className="text-[var(--brand-accent)]" />
              </div>
              <div>
                <span className="text-xs text-[var(--brand-text)]/60 block">服務時長</span>
                <span className="text-sm font-semibold text-[var(--brand-text)]">{service.duration}</span>
              </div>
            </div>
          )}
          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-[var(--brand-cream)]/20 to-transparent rounded-lg border border-[var(--brand-accent)]/10 md:col-span-2">
            <div className="p-2 bg-[var(--brand-accent)]/10 rounded-md">
              <MapPin size={18} className="text-[var(--brand-accent)]" />
            </div>
            <div>
              <span className="text-xs text-[var(--brand-text)]/60 block">服務地點</span>
              <span className="text-sm font-semibold text-[var(--brand-text)]">新竹東區</span>
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
