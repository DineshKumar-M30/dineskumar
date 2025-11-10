import React from "react";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "₹2,499",
      image: "https://m.media-amazon.com/images/I/71rBHKQSdKL.jpg",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "₹3,999",
      image: "https://m.media-amazon.com/images/I/71XA0QCW5lL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: "₹1,799",
      image: "https://m.media-amazon.com/images/I/717ihVDRrlL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 4,
      name: "Laptop Bag",
      price: "₹899",
      image: "https://m.media-amazon.com/images/I/91YKs4ljXFL.jpg",
    },
  ];

  return (
    <div className="container">
      <h1 className="title">🛒 Simple E-Commerce Page</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-img" />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <button className="btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
