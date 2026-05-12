import { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Cart state
  const [cartItems, setCartItems] = useState([]);

  // Category state
  const [category, setCategory] = useState("All");

  // Product data
  const products = [
    { id: 1, name: "Apple", category: "Fruits" },
    { id: 2, name: "Banana", category: "Fruits" },
    { id: 3, name: "Carrot", category: "Vegetables" },
    { id: 4, name: "Tomato", category: "Vegetables" },
    { id: 5, name: "Milk", category: "Dairy" },
  ];

  // Toggle dark mode
  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  // Add to cart
  function addToCart(product) {
    setCartItems([...cartItems, product]);
  }

  // Filtered products
  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>Grocery App</h1>

      <DarkModeToggle
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        products={filteredProducts}
        addToCart={addToCart}
      />

      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;