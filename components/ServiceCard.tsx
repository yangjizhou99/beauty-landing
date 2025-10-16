"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Service } from "@/lib/config";
import { BRAND } from "@/lib/config";
import { buildLineUrlWithUTM } from "@/lib/utm";
import Image from "next/image";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const handleLineClick = () => {
    const href = buildLineUrlWithUTM(BRAND.lineJoinUrl, { 
      section: "services", 
      service: service.id 
    });
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <Card className="h-full bg-[var(--brand-surface)] border-[var(--brand-accent)]/20 hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* 服务图片 */}
      {service.image && (
        <div className="relative h-48 w-full">
          <img
            src={service.image}
            alt={service.imageAlt || service.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      )}
      
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-3">
          <div className="w-16 h-16 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center">
            <span className="text-2xl">
              {service.id === "lash" && "✨"}
              {service.id === "face" && "💆"}
              {service.id === "scalp" && "🌿"}
              {service.id === "nail" && "💅"}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-2 mb-2">
          <CardTitle className="text-xl text-[var(--brand-text)]">
            {service.title}
          </CardTitle>
          {service.badge && (
            <Badge 
              variant={service.badge === "招牌" ? "default" : "secondary"}
              className="bg-[var(--brand-accent)] text-white"
            >
              {service.badge}
            </Badge>
          )}
        </div>
        
        <p className="text-[var(--brand-text)]/70 text-sm leading-relaxed">
          {service.tagline}
        </p>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3 mb-6">
          {service.priceRange && (
            <div className="flex justify-between items-center text-sm">
              <span className="text-[var(--brand-text)]/60">價格</span>
              <span className="font-semibold text-[var(--brand-accent)]">
                {service.priceRange}
              </span>
            </div>
          )}
          
          {service.duration && (
            <div className="flex justify-between items-center text-sm">
              <span className="text-[var(--brand-text)]/60">時長</span>
              <span className="text-[var(--brand-text)]">
                {service.duration}
              </span>
            </div>
          )}
        </div>
        
        <Button 
          onClick={handleLineClick}
          className="w-full bg-[var(--brand-accent)] hover:bg-[var(--brand-accent)]/90 text-white"
        >
          立即預約
        </Button>
      </CardContent>
    </Card>
  );
}

