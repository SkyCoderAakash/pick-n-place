import React, { useState, ReactElement } from "react";
import PickNPlace, {
  type PickNPlaceItem,
  type PickNPlaceItems,
} from "react-pickplace";

import { CreditSection } from "./components/CreditSection";
import { StatCard } from "./components/StatCard";
import { FeatureItem } from "./components/FeatureItem";
import { KeyboardShortcut } from "./components/KeyboardShortcut";
import { DemoSection } from "./components/DemoSection";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";

import {
  initialItems,
  elementData,
  colorConfig,
  fruits,
  stats,
  features,
  shortcuts,
} from "./constants/data";

import { handleOrderChange } from "./utils/handler";

const App: React.FC = () => {
  const [items, setItems] = useState<PickNPlaceItem[]>(initialItems);

  const [reactElements, setReactElements] = useState<ReactElement[]>(
    elementData.map((item) => {
      const colors = colorConfig[item.color];
      return (
        <div
          key={item.key}
          className={`bg-gradient-to-r ${colors.bg} p-3 md:p-4 rounded-lg md:rounded-xl border ${colors.border}`}
        >
          <div className="flex items-center gap-2 md:gap-3">
            <div
              className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r ${colors.circleGradient} flex items-center justify-center text-white font-bold text-sm md:text-base`}
            >
              {item.letter}
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      );
    })
  );

  const onOrderChange = (newItems: PickNPlaceItems) => {
    handleOrderChange(newItems, setItems, setReactElements);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <HeroSection>
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-3 md:mb-4">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs md:text-sm font-medium text-gray-700">
              React Component
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-4">
            React{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              PickNPlace
            </span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8 px-2">
            A modern, drag-free alternative to traditional drag & drop. Pick →
            Scroll → Place.
          </p>

          <CreditSection />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </HeroSection>

      {/* Demo Sections */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 md:py-8">
        {/* Demo 1: Basic Items */}
        <DemoSection
          title="Basic Items"
          description="Simple array of objects with content"
        >
          <div className="mb-3 md:mb-4 p-3 md:p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-lg md:rounded-xl">
            <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
              <svg
                className="w-3 h-3 md:w-4 md:h-4 text-blue-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                Click "Pick" on any item, scroll to position, then "Place"
              </span>
            </div>
          </div>
          <div className="space-y-2 md:space-y-3">
            <PickNPlace items={items} onOrderChange={onOrderChange} />
          </div>
        </DemoSection>

        {/* Demo 2: Custom React Elements */}
        <DemoSection
          title="Styled Components"
          description="Fully customizable React elements"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-2 md:space-y-3">
              <PickNPlace items={reactElements} onOrderChange={onOrderChange} />
            </div>

            <div className="bg-gray-50 rounded-lg md:rounded-xl p-2 md:p-6">
              <h3 className="font-semibold text-gray-800 mb-2 md:mb-3">
                Features
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {features.map((feature, index) => (
                  <FeatureItem key={index} {...feature} />
                ))}
              </ul>
            </div>
          </div>
        </DemoSection>

        {/* Demo 3: Fruit Collection */}
        <DemoSection
          title="Fruit Collection"
          description="Dynamic mapping with icons and colors"
        >
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg md:rounded-xl border border-orange-200 p-2 md:p-6 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2 md:space-y-3">
                <PickNPlace
                  items={fruits.map((fruit, index) => (
                    <div
                      key={index}
                      className="bg-white p-3 md:p-4 rounded-lg md:rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 md:gap-4">
                          <div
                            className={`${fruit.color} w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center text-xl md:text-2xl`}
                          >
                            {fruit.emoji}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                              {fruit.name}
                            </h3>
                            <p className="text-xs md:text-sm text-gray-600">
                              {fruit.description}
                            </p>
                          </div>
                        </div>
                        <div className="text-xs px-2 py-0.5 md:px-3 md:py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
                          #{index + 1}
                        </div>
                      </div>
                    </div>
                  ))}
                  onOrderChange={(newOrder) => {
                    console.log("Fruits reordered:", newOrder);
                  }}
                />
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-6">
                <h3 className="font-semibold text-gray-800 mb-3 md:mb-4">
                  Why PickNPlace?
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="p-3 md:p-4 bg-red-50 rounded-lg border border-red-100">
                    <h4 className="font-medium text-red-800 mb-1 text-sm md:text-base">
                      Traditional Drag & Drop Issues
                    </h4>
                    <p className="text-xs md:text-sm text-red-700">
                      Awkward on mobile, requires precise touch & hold,
                      interferes with scrolling
                    </p>
                  </div>

                  <div className="p-3 md:p-4 bg-green-50 rounded-lg border border-green-100">
                    <h4 className="font-medium text-green-800 mb-1 text-sm md:text-base">
                      PickNPlace Solution
                    </h4>
                    <p className="text-xs md:text-sm text-green-700">
                      Simple 3-step process: Pick → Scroll → Place. Works
                      naturally on all devices
                    </p>
                  </div>

                  <div className="p-3 md:p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <h4 className="font-medium text-blue-800 mb-1 text-sm md:text-base">
                      Perfect For
                    </h4>
                    <ul className="text-xs md:text-sm text-blue-700 list-disc list-inside space-y-1">
                      <li>Mobile applications</li>
                      <li>Long lists that require scrolling</li>
                      <li>Touch-optimized interfaces</li>
                      <li>Accessibility-focused projects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DemoSection>

        {/* Final Credit Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 text-white mb-6 md:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
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
            <div>
              <h3 className="text-lg md:text-xl font-bold">Original Concept</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Based on picknplace.js by @jgthms
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-2 md:space-y-4">
              <h4 className="font-semibold text-blue-300 text-sm md:text-base">
                The Problem
              </h4>
              <p className="text-gray-300 text-xs md:text-sm">
                "I find that the drag and drop experience can quickly become a
                nightmare, especially on mobile. Trying to tap, hold, drag, and
                scroll, all at the same time, is awkward, slow, and
                error-prone."
              </p>
            </div>

            <div className="space-y-2 md:space-y-4">
              <h4 className="font-semibold text-purple-300 text-sm md:text-base">
                The Solution
              </h4>
              <p className="text-gray-300 text-xs md:text-sm">
                "I've long had in mind a simpler 2-step approach: picking an
                item first, then placing it."
              </p>
              <a
                href="https://jgthms.com/picknplace.js/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 text-xs md:text-sm"
              >
                <span>Visit Original</span>
                <svg
                  className="w-3 h-3 md:w-4 md:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl border border-gray-200 p-2 md:p-6 shadow-sm">
          <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4">
            Keyboard Shortcuts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
            {shortcuts.map((shortcut, index) => (
              <KeyboardShortcut key={index} {...shortcut} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
