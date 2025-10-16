import ServiceDetail from "./ServiceDetail";
import { Service } from "@/lib/config";

interface LandingText {
  id: string;
  service: string;
  title: string;
  content: string;
  keywords: string[];
}

interface ServiceGridWithDetailsProps {
  items: Service[];
  landingTexts?: LandingText[];
}

export default function ServiceGridWithDetails({ items, landingTexts = [] }: ServiceGridWithDetailsProps) {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-[var(--brand-cream)]/30 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-[var(--brand-accent)]/5 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-tr from-[var(--brand-soft-gold)]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--brand-text)] via-[var(--brand-warm-brown)] to-[var(--brand-text)] bg-clip-text text-transparent">
            服務項目
          </h2>
          <p className="text-xl text-[var(--brand-text)]/80 max-w-3xl mx-auto leading-relaxed">
            專業技術 × 優質服務 × 舒適環境，為您打造專屬的美麗體驗
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {items.map((service, index) => {
            // 找到对应的落地文
            const matchingLandingText = landingTexts.find(
              text => text.service === service.title
            );
            
            return (
              <div 
                key={service.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ServiceDetail 
                  service={service} 
                  landingText={matchingLandingText}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
