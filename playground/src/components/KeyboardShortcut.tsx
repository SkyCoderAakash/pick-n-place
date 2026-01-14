import React from "react";

interface KeyboardShortcutProps {
  keyName: string;
  description: string;
}

export const KeyboardShortcut: React.FC<KeyboardShortcutProps> = ({
  keyName,
  description,
}) => (
  <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-gray-50 rounded-lg md:rounded-xl">
    <kbd className="px-2 py-1 md:px-3 md:py-1 bg-gray-200 text-gray-700 rounded md:rounded-lg font-mono text-xs md:text-sm font-bold">
      {keyName}
    </kbd>
    <span className="text-xs md:text-sm text-gray-700">{description}</span>
  </div>
);
