Absolutely! Here's your full `README.md` rewritten in a **highly polished, professional GitHub style**, with:

* Clean formatting
* Highlighted code blocks
* Clickable GitHub & LinkedIn links
* Improved readability & consistency
* Proper Markdown hierarchy

---

## ✅ Final Polished `README.md`

````markdown
# 💼 React.js Interview Practice – Real Questions & Solutions

This repository contains real-world **React.js developer interview questions** I was asked during a recent technical assessment.

Each challenge is solved using **pure JavaScript logic** (no libraries), following clean code principles and best practices. This repo is a great resource for frontend developers preparing for interviews.

---

## 🚀 Practical Coding Questions

Each of the following problems is solved in a separate JavaScript file in this repo:

### 1️⃣ Fibonacci Series Generator
Generate the first `n` numbers of the Fibonacci sequence.  
📄 File: [`fibonacci.js`](./fibonacci.js)

---

### 2️⃣ Check Anagram
Check if two strings are anagrams of each other.  
📄 File: [`checkAnagram.js`](./checkAnagram.js)

---

### 3️⃣ Rotate Array by K
Rotate an array to the right by `k` steps.  
📄 File: [`rotateArray.js`](./rotateArray.js)

---

### 4️⃣ OOP – Vehicle, Car, Truck (Inheritance)
Create a base class `Vehicle`, and extend it with `Car` and `Truck`, adding unique properties and methods.  
📄 File: [`inheritance.js`](./inheritance.js)

---

## 📘 Theory Questions with Answers

### ✅ What is Semantic HTML?
Semantic HTML uses tags that clearly describe the purpose of the content (e.g. `<header>`, `<article>`, `<section>`).  
**Benefits:**  
- Better accessibility  
- Improved SEO  
- More maintainable code

---

### ✅ Flexbox vs Grid

| Feature        | Flexbox                           | Grid                             |
|----------------|------------------------------------|----------------------------------|
| Layout Type    | One-dimensional (row or column)    | Two-dimensional (rows & columns) |
| Best For       | Component-level layout             | Page-level layout                |
| Flexibility    | Content-based resizing             | Grid-based structure             |

---

### ✅ What are Pseudo-selectors in CSS?
Pseudo-selectors apply styles based on **state** or **position**.

Examples:
```css
button:hover {
  background-color: blue;
}

li:first-child {
  font-weight: bold;
}

li:nth-child(3) {
  color: red;
}
````

---

### ✅ What is Recursion?

A programming technique where a function calls itself.

Example: Factorial

```js
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
```

Use cases: tree traversal, search, backtracking, etc.

---

### ✅ What is React Fiber?

React Fiber is the internal rendering engine of React (from v16 onward).
It improves performance by:

* Breaking rendering work into units
* Supporting **concurrent rendering**
* Prioritizing updates
* Enhancing animation and UX responsiveness

---

### ✅ What is React Suspense?

`React.Suspense` allows components to **wait for asynchronous data or code** to load before rendering.

Example:

```jsx
import { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./MyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

---

### ✅ What is the Context API in React?

Context API allows **global state sharing** without prop drilling.

```jsx
const ThemeContext = React.createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Component />
    </ThemeContext.Provider>
  );
}

// Accessing in child
const theme = useContext(ThemeContext);
```

Common use cases: Auth, Theme, Language settings.

---

### ✅ Google Maps API Integration in React

Install via NPM:

```bash
npm install @react-google-maps/api
```

Example Usage:

```jsx
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 33.6844,
  lng: 73.0479
};

function MyMapComponent() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
```

---

## 🙋‍♂️ About Me

👨‍💻 **Yasir Mehmood**
Frontend Developer | React.js Enthusiast

🔗 [Connect on LinkedIn](https://www.linkedin.com/in/devyasiemehboob)
💻 [Follow me on GitHub](https://github.com/devYasirMehboob)

---

## 🤝 Contributions Welcome

Have your own interview questions or improved solutions?
Feel free to:

* ⭐ Star this repo
* 🍴 Fork it
* 📩 Open pull requests

Together, we grow! 🚀

---



