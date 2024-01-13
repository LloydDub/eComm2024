import "./App.css";
// App.js
import React from "react";
import ProductList from "./components/ProductList"; // Adjust the path as necessary

function App() {
  return (
    <div className="App">
      <h1>Welcome to Our Store</h1>
      <ProductList />
    </div>
  );
}

export default App;
