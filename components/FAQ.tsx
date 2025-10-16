"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { QA } from "@/lib/config";

interface FAQProps {
  items: QA[];
}

export default function FAQ({ items }: FAQProps) {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-[var(--brand-bg)] relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-[var(--brand-accent)]/8 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-tr from-[var(--brand-soft-gold)]/6 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--brand-text)] via-[var(--brand-warm-brown)] to-[var(--brand-text)] bg-clip-text text-transparent">
              常見問題
            </h2>
            <p className="text-xl text-[var(--brand-text)]/80 leading-relaxed">
              解答您的疑問，讓預約更安心
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-6">
            {items.map((item, index) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[var(--brand-accent)]/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:no-underline group">
                  <span className="font-semibold text-[var(--brand-text)] text-lg group-hover:text-[var(--brand-accent)] transition-colors">
                    {item.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <div className="bg-gradient-to-r from-[var(--brand-light-pink)]/20 to-[var(--brand-cream)]/20 rounded-xl p-6 border-l-4 border-[var(--brand-accent)]">
                    <p className="text-[var(--brand-text)]/80 leading-relaxed text-base">
                      {item.a}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* 更多問題提示 */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[var(--brand-light-pink)]/30 to-[var(--brand-cream)]/30 rounded-2xl border border-[var(--brand-accent)]/20 shadow-lg">
              <span className="text-2xl">💬</span>
              <p className="text-[var(--brand-text)]/80 font-medium text-lg">
                還有其他問題？歡迎加 LINE 直接詢問
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

