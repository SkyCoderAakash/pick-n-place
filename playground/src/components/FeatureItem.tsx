import React from "react";

interface FeatureItemProps {
  text: string;
  iconColor: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({
  text,
  iconColor,
}) => (
  <li className="flex items-start gap-2 md:gap-3">
    <div
      className={`w-5 h-5 md:w-6 md:h-6 rounded-full ${iconColor} flex items-center justify-center flex-shrink-0 mt-0.5`}
    >
      <svg
        className="w-2.5 h-2.5 md:w-3 md:h-3 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
    <span className="text-xs md:text-sm text-gray-700 flex-1">{text}</span>
  </li>
);
