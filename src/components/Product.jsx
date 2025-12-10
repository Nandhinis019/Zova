import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../utils/api";

export default function Product({ orders, setOrders }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => String(p._id) === id);

  if (!product) return <p>Product not found!</p>;

  const handleBuyNow = () => {
    setOrders([...orders, product]);
    navigate('/order-confirmation', { state: { product } });
  };

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="details-image" />

      <div className="details-content">
        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>
        <p>{product.description}</p>

        <button onClick={handleBuyNow} className="buy-now-btn">Buy Now</button>
        <Link to="/" className="back-btn">← Back to Products</Link>
      </div>
    </div>
  );
}

