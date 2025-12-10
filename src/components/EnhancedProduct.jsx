import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../utils/api";

export default function EnhancedProduct({ orders, setOrders, cart, setCart, isLoggedIn }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const product = products.find((p) => String(p._id) === id || String(p.id) === id);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist.</p>
        <Link to="/" className="back-btn">← Back to Home</Link>
      </div>
    );
  }

  const handleBuyNow = () => {
    if (!isLoggedIn) {
      alert('Please login to place an order');
      navigate('/login');
      return;
    }
    const orderItem = { ...product, quantity, orderId: Date.now(), status: 'Ordered', orderDate: new Date().toISOString() };
    setOrders([...orders, orderItem]);
    navigate('/order-confirmation', { state: { product: orderItem } });
  };

  const addToCart = () => {
    if (!isLoggedIn) {
      alert('Please login to add items to cart');
      navigate('/login');
      return;
    }
    
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
    alert('Added to cart!');
  };

  const discountedPrice = product.discount > 0 
    ? (product.price * (1 - product.discount/100)).toFixed(0)
    : product.price;

  const images = [product.image, product.image, product.image];

  return (
    <div className="amazon-product-page">
      <div className="amazon-container">
        <div className="product-breadcrumb">
          <Link to="/">Home</Link> › <span>{product.title || product.name}</span>
        </div>
        
        <div className="product-main">
          <div className="product-images">
            <div className="image-thumbnails">
              {images.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`${product.name} ${index + 1}`}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
            <div className="main-image">
              <img src={images[selectedImage]} alt={product.name} />
            </div>
          </div>

          <div className="product-info">
            <h1>{product.title || product.name}</h1>
            <div className="product-rating">
              <span className="stars">⭐⭐⭐⭐⭐</span>
              <span className="rating-text">(4.5 out of 5)</span>
              <span className="review-count">1,234 reviews</span>
            </div>
            
            <div className="price-section">
              {product.discount > 0 ? (
                <>
                  <span className="current-price">₹{discountedPrice}</span>
                  <span className="original-price">₹{product.price}</span>
                  <span className="discount-percent">({product.discount}% off)</span>
                </>
              ) : (
                <span className="current-price">₹{product.price}</span>
              )}
            </div>

            <div className="product-features">
              <h3>Key Features:</h3>
              <ul>
                <li>High Quality Materials</li>
                <li>1 Year Warranty</li>
                <li>Free Shipping</li>
                <li>Easy Returns</li>
              </ul>
            </div>

            <div className="quantity-section">
              <label>Quantity:</label>
              <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {[1,2,3,4,5].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>

            <div className="action-buttons">
              <button onClick={addToCart} className="add-to-cart-btn">
                Add to Cart
              </button>
              <button onClick={handleBuyNow} className="buy-now-btn">
                Buy Now
              </button>
            </div>

            <div className="delivery-info">
              <p>📦 FREE delivery by tomorrow</p>
              <p>🔄 Easy 30-day returns</p>
              <p>⚡ Prime eligible</p>
            </div>
          </div>
        </div>

        <div className="product-description">
          <h2>Product Description</h2>
          <p>{product.description}</p>
        </div>

        <div className="product-reviews">
          <h2>Customer Reviews</h2>
          <div className="review-summary">
            <div className="rating-breakdown">
              <span className="avg-rating">4.5</span>
              <div className="stars-large">⭐⭐⭐⭐⭐</div>
              <span>1,234 reviews</span>
            </div>
          </div>
          
          <div className="reviews-list">
            {[1,2,3].map(i => (
              <div key={i} className="review-item">
                <div className="review-header">
                  <span className="reviewer-name">Customer {i}</span>
                  <span className="review-stars">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="review-text">Great product! Highly recommended. Excellent quality and fast delivery.</p>
                <span className="review-date">Reviewed on {new Date().toLocaleDateString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}