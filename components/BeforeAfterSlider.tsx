"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
  workId: string;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt,
  workId,
  onClose,
  onPrevious,
  onNext
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 追踪交互事件
  const trackInteraction = useCallback((position: number) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "before_after_interact", {
        work_id: workId,
        slider_position: Math.round(position)
      });
    }
  }, [workId]);

  // 处理拖拽
  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    setSliderPosition(percentage);
    trackInteraction(percentage);
  }, [isDragging, trackInteraction]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // 处理触摸事件
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!containerRef.current) return;
    
    e.preventDefault();
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    setSliderPosition(percentage);
    trackInteraction(percentage);
  }, [trackInteraction]);

  // 键盘导航
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowLeft" && onPrevious) {
      onPrevious();
    } else if (e.key === "ArrowRight" && onNext) {
      onNext();
    }
  }, [onClose, onPrevious, onNext]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleKeyDown]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      {/* 关闭按钮 */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
        aria-label="关闭对比"
      >
        <X size={24} />
      </button>

      {/* 导航按钮 */}
      {onPrevious && (
        <button
          onClick={onPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
          aria-label="上一个作品"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {onNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
          aria-label="下一个作品"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* 对比容器 */}
      <div 
        ref={containerRef}
        className="relative w-full max-w-4xl aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden cursor-ew-resize"
        onMouseDown={handleMouseDown}
        role="img"
        aria-label={`${alt} - 前后对比，可拖拽查看`}
        tabIndex={0}
      >
        {/* Before 图片 */}
        <div className="absolute inset-0">
          <Image
            src={beforeSrc || "/beauty-landing/images/portfolio/placeholder.svg"}
            alt={`${alt} - 前`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
          />
        </div>

        {/* After 图片 */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={afterSrc || "/beauty-landing/images/portfolio/placeholder.svg"}
            alt={`${alt} - 后`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
          />
        </div>

        {/* 分割线 */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-gray-600 rounded-full"></div>
          </div>
        </div>

        {/* 标签 */}
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-medium">
          前
        </div>
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-medium">
          后
        </div>

        {/* 拖拽提示 */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded text-sm">
          拖拽查看对比效果
        </div>
      </div>
    </div>
  );
}
