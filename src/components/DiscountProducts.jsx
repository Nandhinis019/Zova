import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../utils/api';

const DiscountProducts = ({ cart, setCart, isLoggedIn }) => {
  // Filter products with discount (assuming products have a discount property)
  const discountedProducts = products.filter(product => 
    product.discount && product.discount > 0
  );

  const addToCart = (product) => {
    if (!isLoggedIn) {
      alert('Please login to add items to cart');
      return;
    }
    
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const calculateDiscountedPrice = (price, discount) => {
    return (price - (price * discount / 100)).toFixed(2);
  };

  return (
    <div className="discount-products-container">
      <div className="discount-header">
        <h1>🔥 Special Discounts & Offers</h1>
        <p>Limited time deals - Save big on these amazing products!</p>
      </div>
      
      {discountedProducts.length === 0 ? (
        <div className="no-discounts">
          <h2>🎯 No Active Discounts</h2>
          <p>Check back soon for amazing deals!</p>
          <Link to="/" className="back-to-shop">Continue Shopping</Link>
        </div>
      ) : (
        <div className="discount-grid">
          {discountedProducts.map(product => (
            <div key={product.id} className="discount-card">
              <div className="discount-badge">
                -{product.discount}%
              </div>
              
              <Link to={`/product/${product.id}`}>
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="discount-image"
                />
              </Link>
              
              <div className="discount-content">
                <h3 className="discount-title">{product.title}</h3>
                
                <div className="price-section">
                  <span className="original-price">${product.price}</span>
                  <span className="discounted-price">
                    ${calculateDiscountedPrice(product.price, product.discount)}
                  </span>
                  <span className="savings">
                    Save ${(product.price * product.discount / 100).toFixed(2)}
                  </span>
                </div>
                
                <div className="discount-actions">
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    🛒 Add to Cart
                  </button>
                  <Link 
                    to={`/product/${product.id}`}
                    className="view-details-btn"
                  >
                    👁️ View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DiscountProducts;