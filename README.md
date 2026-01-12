# PickNPlace

A **Pick → Scroll → Place** interaction for reordering lists —  
a deliberate alternative to traditional **drag and drop**, designed to be more reliable on touch devices and during scrolling.

This library provides a React component that allows users to **pick an item**, **scroll freely**, and **place it** at the desired position with confirmation.

---

## ✨ Why PickNPlace?

Traditional drag-and-drop interactions often fail when:
- The list is long
- The user needs to scroll
- The device is touch-based
- Precision matters

PickNPlace replaces continuous dragging with **explicit intent**:

> **Pick → Scroll → Place**

This makes reordering:
- More accessible
- More predictable
- Easier on mobile
- Safer (cancelable)

---

## 🧠 Concept

1. User **picks** an item
2. A floating "ghost" follows scroll
3. The list animates to preview the new order
4. User **places** or **cancels**

No accidental drops. No scroll fighting.

---

## 🚀 Installation

```bash
npm install pick-n-place
# or
yarn add pick-n-place
# or
pnpm add pick-n-place
