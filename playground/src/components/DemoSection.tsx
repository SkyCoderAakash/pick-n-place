import React, { ReactNode } from "react";

interface DemoSectionProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const DemoSection: React.FC<DemoSectionProps> = ({
  title,
  description,
  children,
}) => (
  <section className="mb-8 md:mb-12 lg:mb-16">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 md:mb-6">
      <div className="flex-1">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
        <p className="text-sm md:text-base text-gray-600">{description}</p>
      </div>
    </div>
    <div className="bg-white rounded-xl md:rounded-2xl border border-gray-200 p-2 md:p-6 shadow-sm">
      {children}
    </div>
  </section>
);
