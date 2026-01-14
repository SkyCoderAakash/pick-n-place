# react-pickplace

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

## 📦 Installation

Using npm:

```bash
npm install react-pickplace
```

Using yarn:

```bash
yarn add react-pickplace
```

---

## 🚀 Basic Usage

```bash
import PickPlace from "react-pickplace";

const items = [
  { id: 1, label: "One" },
  { id: 2, label: "Two" },
  { id: 3, label: "Three" }
];

export default function App() {
  return (
    <PickPlace
      items={items}
      renderItem={(item) => <div>{item.label}</div>}
      onChange={(newOrder) => console.log(newOrder)}
    />
  );
}
```

---

## 🙏 Credits & Inspiration

This project is inspired by picknplace.js, a proof of concept created by
@jgthms
.

Original demo: https://jgthms.com/picknplace.js/

Source code: https://github.com/jgthms/picknplace.js

The core idea of replacing traditional drag-and-drop with a
pick → scroll → place interaction comes from this work.

This library adapts and extends the concept for modern React applications,
with a different internal implementation and API design.

---

## 🤝 Contributing

If you’re interested in improving **react-pickplace**, contributions are very welcome!

You can help by:
- reporting bugs
- suggesting new features
- improving documentation
- submitting pull requests

Feel free to open an issue or start a discussion on GitHub:  
👉 https://github.com/SkyCoderAakash/pick-n-place

Every contribution matters 🚀
