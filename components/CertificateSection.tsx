"use client";
import { Award, Users, Clock, Shield } from "lucide-react";

interface Certificate {
  id: string;
  name: string;
  issuer: string;
  year: string;
  description: string;
  icon: "award" | "users" | "clock" | "shield";
}

// 占位证照数据
const certificates: Certificate[] = [
  {
    id: "cert-001",
    name: "丙級美容技術士",
    issuer: "勞動部技能檢定",
    year: "2020",
    description: "具備基礎美容技術與安全衛生知識，可提供專業美容服務",
    icon: "award"
  },
  {
    id: "cert-002", 
    name: "美甲師專業證照",
    issuer: "台灣美甲協會",
    year: "2021",
    description: "專業美甲技術認證，包含凝膠美甲、彩繪設計等專業技能",
    icon: "shield"
  },
  {
    id: "cert-003",
    name: "美睫師認證",
    issuer: "國際美睫協會",
    year: "2022", 
    description: "睫毛延長技術專業認證，具備多種睫毛款式設計能力",
    icon: "users"
  },
  {
    id: "cert-004",
    name: "頭皮養護師",
    issuer: "中華民國美容美髮協會",
    year: "2023",
    description: "專業頭皮檢測與養護技術，提供客製化育髮療程",
    icon: "clock"
  }
];

// 图标映射
const iconMap = {
  award: Award,
  users: Users, 
  clock: Clock,
  shield: Shield
};

interface CertificateSectionProps {
  className?: string;
}

export default function CertificateSection({ className = "" }: CertificateSectionProps) {
  return (
    <section className={`py-16 bg-[var(--brand-surface)] ${className}`}>
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--brand-text)] mb-4">
            專業證照
          </h2>
          <p className="text-lg text-[var(--brand-text)]/70 max-w-2xl mx-auto">
            具備完整專業認證，為您提供安全可靠的服務品質
          </p>
        </div>

        {/* 证照网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certificates.map((cert) => {
            const IconComponent = iconMap[cert.icon] || Award;
            
            return (
              <div
                key={cert.id}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* 图标 */}
                <div className="flex items-center justify-center w-16 h-16 bg-[var(--brand-accent)]/10 rounded-full mb-4 mx-auto group-hover:bg-[var(--brand-accent)]/20 transition-colors">
                  <IconComponent 
                    size={32} 
                    className="text-[var(--brand-accent)]" 
                  />
                </div>

                {/* 证照名称 */}
                <h3 className="text-lg font-semibold text-[var(--brand-text)] mb-2 text-center">
                  {cert.name}
                </h3>

                {/* 发证单位 */}
                <p className="text-sm text-[var(--brand-text)]/60 mb-3 text-center">
                  {cert.issuer}
                </p>

                {/* 年份 */}
                <div className="text-center mb-4">
                  <span className="bg-[var(--brand-accent)] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {cert.year}
                  </span>
                </div>

                {/* 描述 */}
                <p className="text-sm text-[var(--brand-text)]/70 text-center leading-relaxed">
                  {cert.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* 师资介绍 */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* 左侧：头像占位 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-[var(--brand-accent)]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users size={48} className="text-[var(--brand-accent)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--brand-text)] mb-2">
                專業師資團隊
              </h3>
              <p className="text-[var(--brand-text)]/70">
                具備豐富實務經驗與持續進修精神
              </p>
            </div>

            {/* 右侧：师资简介 */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[var(--brand-accent)] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[var(--brand-text)]">
                  <strong>5年以上</strong>美容美睫實務經驗，服務超過<strong>1000+</strong>位客戶
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[var(--brand-accent)] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[var(--brand-text)]">
                  定期參與<strong>國內外專業培訓</strong>，掌握最新技術趨勢
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[var(--brand-accent)] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[var(--brand-text)]">
                  注重<strong>衛生安全</strong>，所有工具皆經過嚴格消毒處理
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[var(--brand-accent)] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[var(--brand-text)]">
                  提供<strong>客製化服務</strong>，根據個人需求調整療程內容
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 底部提示 */}
        <div className="text-center mt-8">
          <p className="text-[var(--brand-text)]/60 text-sm">
            ※ 所有證照均可在現場查驗，歡迎預約時詢問相關資訊
          </p>
        </div>
      </div>
    </section>
  );
}
