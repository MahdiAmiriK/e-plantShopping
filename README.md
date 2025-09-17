# e-plantShopping 🌱

A React-based shopping cart application developed as part of the **IBM course: Developing Front-End Applications with React (CAD0210EN)** on edX.  
This project demonstrates the use of React components, Redux Toolkit, and React Hooks to build a functional shopping cart.

---

## 🚀 Features
- Display plant categories and products dynamically from arrays.
- Add products to the cart with quantity management.
- Increment, decrement, and remove items from the cart.
- Display total cost for each item and the entire cart.
- Integration of Redux for global state management.
- Deployed using **GitHub Pages**.

---

## 🛠️ Technologies Used
- **React** (functional components, hooks: `useState`, `useEffect`)
- **Redux Toolkit** for global state management
- **JavaScript (ES6+)**
- **CSS** for styling
- **Vite** as the build tool
- **GitHub Pages** for deployment

---

## 📂 Project Structure
```
src/
├── App.jsx
├── main.jsx
├── store.js
├── CartSlice.js
├── CartItem.jsx
├── ProductList.jsx
├── ProductList.css
├── CartItem.css
```

---

## 🔑 Key Functionalities
- **ProductList Component**: Displays categories of plants, allows adding items to the cart.
- **CartItem Component**: Manages cart display, updates item quantity, removes items, and calculates totals.
- **Redux Store**: Holds the global state of cart items (`addItem`, `removeItem`, `updateQuantity`).

---

## 📸 Screenshots
(Add screenshots of your application here — e.g., product list, cart view, total calculation.)

---

## 🌍 Deployment
The project is deployed using GitHub Pages and can be accessed here:  
👉 [Live Demo](https://mahdiamirik.github.io/e-plantShopping/)

---

## 📌 Author
Developed by **Mahdi Amiri** as part of the final project submission for the IBM course on edX.
