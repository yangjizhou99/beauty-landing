import ServiceCard from "./ServiceCard";
import { Service } from "@/lib/config";

interface ServiceGridProps {
  items: Service[];
}

export default function ServiceGrid({ items }: ServiceGridProps) {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--brand-text)] mb-4">
            服務項目
          </h2>
          <p className="text-lg text-[var(--brand-text)]/70 max-w-2xl mx-auto">
            專業技術 × 優質服務 × 舒適環境，為您打造專屬的美麗體驗
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

