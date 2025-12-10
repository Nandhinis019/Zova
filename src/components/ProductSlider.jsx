import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductSlider({ products, Cart, setCart, isLoggedIn }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const addToCart = (item) => {
    if (!isLoggedIn) {
      window.location.href = '/login';
      return;
    }
    setCart([...Cart, item]);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className="product-slider">
      <h2 className="slider-title">Featured Products</h2>
      <div className="slider-container">
        <button className="slider-btn prev" onClick={prevSlide}>❮</button>
        
        <div className="slider-wrapper">
          <div 
            className="slider-track" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {products.map((product, index) => (
              <div key={product._id} className="slider-card">
                <img src={product.image} alt={product.name} className="slider-image" />
                <div className="slider-content">
                  <h3>{product.name}</h3>
                  <p className="slider-price">₹{product.price}</p>
                  <p className="slider-description">{product.description}</p>
                  <div className="slider-actions">
                    <button onClick={() => addToCart(product)} className="slider-add-btn">
                      Add to Cart
                    </button>
                    <Link to={`/product/${product._id}`} className="slider-view-btn">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button className="slider-btn next" onClick={nextSlide}>❯</button>
      </div>
      
      <div className="slider-dots">
        {products.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}