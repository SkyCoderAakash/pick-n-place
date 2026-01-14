import React from "react";

export const CreditSection: React.FC = () => (
  <div className="max-w-2xl mx-auto mb-8 md:mb-12 p-4 md:p-6 bg-white/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-200 shadow-sm">
    <div className="flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-3">
      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
        <svg
          className="w-3 h-3 md:w-4 md:h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </div>
      <h3 className="text-sm md:text-lg font-semibold text-gray-800">
        Inspired by
      </h3>
    </div>
    <p className="text-xs md:text-sm text-gray-700 text-center">
      This component is inspired by the original{" "}
      <a
        href="https://jgthms.com/picknplace.js/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-blue-600 hover:text-blue-700 underline"
      >
        picknplace.js
      </a>{" "}
      by{" "}
      <a
        href="https://jgthms.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-purple-600 hover:text-purple-700"
      >
        @jgthms
      </a>
      . A brilliant proof of concept showcasing a viable drag and drop
      alternative.
    </p>
  </div>
);
