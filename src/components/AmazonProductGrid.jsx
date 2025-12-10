import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../utils/api';

const AmazonProductGrid = ({ cart, setCart, isLoggedIn }) => {
  const [sortBy, setSortBy] = useState('featured');
  const [filterBy, setFilterBy] = useState('all');

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

  const filteredProducts = products.filter(product => {
    if (filterBy === 'discounted') return product.discount > 0;
    if (filterBy === 'under1000') return product.price < 1000;
    if (filterBy === 'under5000') return product.price < 5000;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'discount': return b.discount - a.discount;
      default: return 0;
    }
  });

  return (
    <div className="amazon-products">
      <div className="amazon-container">
        {/* Filters and Sort */}
        <div className="products-header">
          <div className="results-info">
            <span>1-{sortedProducts.length} of {sortedProducts.length} results</span>
          </div>
          <div className="sort-filter">
            <select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
              <option value="all">All Products</option>
              <option value="discounted">On Sale</option>
              <option value="under1000">Under ₹1,000</option>
              <option value="under5000">Under ₹5,000</option>
            </select>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="discount">Discount</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="amazon-products-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="amazon-product-card">
              {product.discount > 0 && (
                <div className="product-badge">-{product.discount}%</div>
              )}
              
              <Link to={`/product/${product.id}`} className="product-image-link">
                <img src={product.image} alt={product.title} className="product-image" />
              </Link>
              
              <div className="product-details">
                <Link to={`/product/${product.id}`} className="product-name">
                  {product.title}
                </Link>
                
                <div className="product-rating">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="rating-count">(4.5)</span>
                </div>
                
                <div className="product-pricing">
                  {product.discount > 0 ? (
                    <>
                      <span className="current-price">
                        ₹{(product.price * (1 - product.discount/100)).toFixed(0)}
                      </span>
                      <span className="original-price">₹{product.price}</span>
                      <span className="save-amount">
                        Save ₹{(product.price * product.discount/100).toFixed(0)}
                      </span>
                    </>
                  ) : (
                    <span className="current-price">₹{product.price}</span>
                  )}
                </div>
                
                <div className="delivery-info">
                  <span className="prime-badge">Prime</span>
                  <span>FREE Delivery by tomorrow</span>
                </div>
                
                <button 
                  onClick={() => addToCart(product)}
                  className="amazon-add-to-cart"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmazonProductGrid;