import React from "react";
import { products } from "../utils/api";
import { Link } from "react-router-dom";

export default function Products({ setCart, Cart, isLoggedIn }) {
  const addTOCart = (item) => {
    if (!isLoggedIn) {
      // Redirect to login will be handled by the navigate
      window.location.href = '/login';
      return;
    }
    setCart([...Cart, item]);
  };
    
  return (
    <div className="products-container">
      <h2 className="page-title">Our Products</h2>

      <div className="product-grid">
        {products.map((p) => (
          <div key={p._id} className="product-card">
            <img src={p.image} alt={p.name} className="product-image" />

            <h3>{p.name}</h3>
            <p className="price">₹{p.price}</p>

            <button onClick={() => addTOCart(p)}>ADD to Cart</button>
            <Link className="view-btn" to={`/product/${p._id}`}>
              View Details →
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}








