import { PickNPlaceItem } from "react-pickplace";

export const initialItems: PickNPlaceItem[] = [
  { id: 1, content: "One" },
  { id: 2, content: "Two" },
  { id: 3, content: "Three" },
  { id: 4, content: "Four" },
  { id: 5, content: "Five" },
  { id: 6, content: "Six" },
  { id: 7, content: "Seven" },
  { id: 8, content: "Eight" },
  { id: 9, content: "Nine" },
  { id: 10, content: "Ten" },
];

export const elementData = [
  {
    key: "a",
    color: "blue" as const,
    letter: "A",
    title: "Element A",
    description: "First custom element",
  },
  {
    key: "b",
    color: "purple" as const,
    letter: "B",
    title: "Element B",
    description: "Second custom element",
  },
  {
    key: "c",
    color: "green" as const,
    letter: "C",
    title: "Element C",
    description: "Third custom element",
  },
  {
    key: "d",
    color: "orange" as const,
    letter: "D",
    title: "Element D",
    description: "Fourth custom element",
  },
  {
    key: "e",
    color: "red" as const,
    letter: "E",
    title: "Element E",
    description: "Fifth custom element",
  },
];

export const colorConfig = {
  blue: {
    bg: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    circleGradient: "from-blue-500 to-cyan-500",
  },
  purple: {
    bg: "from-purple-50 to-pink-100",
    border: "border-purple-200",
    circleGradient: "from-purple-500 to-pink-500",
  },
  green: {
    bg: "from-green-50 to-emerald-100",
    border: "border-green-200",
    circleGradient: "from-green-500 to-emerald-500",
  },
  orange: {
    bg: "from-orange-50 to-amber-100",
    border: "border-orange-200",
    circleGradient: "from-orange-500 to-amber-500",
  },
  red: {
    bg: "from-red-50 to-rose-100",
    border: "border-red-200",
    circleGradient: "from-red-500 to-rose-500",
  },
} as const;

export const fruits = [
  {
    name: "Apple",
    color: "bg-red-500",
    emoji: "🍎",
    description: "Crisp and sweet",
  },
  {
    name: "Banana",
    color: "bg-yellow-500",
    emoji: "🍌",
    description: "Rich in potassium",
  },
  {
    name: "Cherry",
    color: "bg-red-600",
    emoji: "🍒",
    description: "Sweet and tart",
  },
  {
    name: "Grape",
    color: "bg-purple-600",
    emoji: "🍇",
    description: "Small and juicy",
  },
  {
    name: "Orange",
    color: "bg-orange-500",
    emoji: "🍊",
    description: "Vitamin C rich",
  },
];

export const stats = [
  {
    number: "3 Steps",
    title: "Simple Process",
    description: "Pick → Scroll → Place",
    color: "text-blue-600",
  },
  {
    number: "Mobile First",
    title: "Touch Optimized",
    description: "No awkward dragging required",
    color: "text-purple-600",
  },
  {
    number: "TypeScript",
    title: "Type Safe",
    description: "Better developer experience",
    color: "text-pink-600",
  },
];

export const features = [
  {
    text: "Smooth animations and transitions",
    iconColor: "bg-blue-100",
  },
  {
    text: "Keyboard shortcuts support",
    iconColor: "bg-purple-100",
  },
  {
    text: "Mobile-optimized touch interactions",
    iconColor: "bg-green-100",
  },
  {
    text: "Accessible with screen reader support",
    iconColor: "bg-pink-100",
  },
];

export const shortcuts = [
  { keyName: "Enter", description: "Place selected item" },
  { keyName: "Esc", description: "Cancel operation" },
  { keyName: "↑ ↓", description: "Navigate while picked" },
];
