import React from "react";

export const Footer: React.FC = () => (
  <footer className="mt-8 md:mt-12 lg:mt-16 border-t border-gray-200 bg-white">
    <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 md:py-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
        <div className="text-center sm:text-left text-gray-600 text-sm md:text-base">
          <span className="font-semibold">React PickNPlace</span> • A drag-free
          reordering solution
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="https://jgthms.com/picknplace.js/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm text-gray-500 hover:text-gray-700"
          >
            Inspired by picknplace.js
          </a>
          <div className="w-1 h-1 rounded-full bg-gray-300"></div>
          <a
            href="https://jgthms.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm text-gray-500 hover:text-gray-700"
          >
            Original by @jgthms
          </a>
        </div>
      </div>
    </div>
  </footer>
);
