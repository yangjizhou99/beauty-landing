"use client";
import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scaleIn";
  delay?: number;
  duration?: number;
}

export default function ScrollAnimation({ 
  children, 
  className = "", 
  animation = "fadeIn",
  delay = 0,
  duration = 600
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in");
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay]);

  const getAnimationClass = () => {
    const baseClasses = "opacity-0 transition-all duration-700 ease-out";
    
    switch (animation) {
      case "fadeIn":
        return `${baseClasses} [&.animate-in]:opacity-100`;
      case "slideUp":
        return `${baseClasses} translate-y-8 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100`;
      case "slideLeft":
        return `${baseClasses} translate-x-8 [&.animate-in]:translate-x-0 [&.animate-in]:opacity-100`;
      case "slideRight":
        return `${baseClasses} -translate-x-8 [&.animate-in]:translate-x-0 [&.animate-in]:opacity-100`;
      case "scaleIn":
        return `${baseClasses} scale-95 [&.animate-in]:scale-100 [&.animate-in]:opacity-100`;
      default:
        return `${baseClasses} [&.animate-in]:opacity-100`;
    }
  };

  return (
    <div 
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
}
