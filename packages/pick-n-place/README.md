# react-pickplace

A modern, accessible alternative to traditional drag-and-drop for React.

**Pick → Scroll → Place**  
No dragging. No frustration. Works great on desktop and mobile.

---

## ✨ Features

- 🚫 No drag & drop
- 📱 Mobile-friendly
- ♿ Keyboard & screen-reader accessible
- ⚡ Lightweight, zero dependencies
- 🧠 Simple mental model: **pick → scroll → place**
- 🎯 Works with any list layout

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