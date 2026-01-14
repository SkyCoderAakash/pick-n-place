import React from "react";

interface StatCardProps {
  number: string;
  title: string;
  description: string;
  color: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  number,
  title,
  description,
  color,
}) => (
  <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-200 shadow-sm">
    <div className={`text-2xl md:text-3xl font-bold ${color} mb-2`}>
      {number}
    </div>
    <h3 className="font-semibold text-gray-800 mb-1 md:mb-2">{title}</h3>
    <p className="text-xs md:text-sm text-gray-600">{description}</p>
  </div>
);
