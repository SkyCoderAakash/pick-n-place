import React, { ReactNode } from "react";

interface HeroSectionProps {
  children: ReactNode;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ children }) => (
  <div className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 blur-3xl" />
    <div className="relative max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 md:py-12">
      {children}
    </div>
  </div>
);
