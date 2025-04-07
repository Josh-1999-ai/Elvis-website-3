
import React from "react";

export function Carousel({ children }) {
  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex gap-4">{children}</div>
    </div>
  );
}

export function CarouselContent({ children }) {
  return <div className="flex gap-4">{children}</div>;
}

export function CarouselItem({ children, className = "" }) {
  return <div className={`min-w-[300px] ${className}`}>{children}</div>;
}
