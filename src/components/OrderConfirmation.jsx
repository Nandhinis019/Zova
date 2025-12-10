import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function OrderConfirmation() {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <p>Order confirmation not available.</p>;
  }

  return (
    <div className="order-confirmation">
      <h1>Order has been placed!</h1>
      <div className="confirmation-details">
        <img src={product.image} alt={product.name} className="confirmation-image" />
        <div className="confirmation-content">
          <h2>{product.name}</h2>
          <p className="price">₹{product.price}</p>
          <p>{product.description}</p>
          <p>Thank you for your purchase!</p>
          <Link to="/orders" className="confirmation-btn primary">View All Orders</Link>
          <Link to="/" className="confirmation-btn secondary">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
}
