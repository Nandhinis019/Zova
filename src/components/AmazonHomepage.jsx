import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../utils/api';

const AmazonHomepage = ({ cart, setCart, isLoggedIn }) => {
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

  const discountedProducts = products.filter(p => p.discount > 0).slice(0, 4);
  const bestSellers = products.slice(0, 6);

  return (
    <div className="amazon-homepage">
      {/* Hero Banner */}
      <div className="hero-banner">
        <div className="banner-content">
          <h1>Welcome to ZOVAi.in</h1>
          <p>Discover millions of products with AI-powered recommendations</p>
        </div>
      </div>

      {/* Category Grid */}
      <div className="amazon-container">
        <div className="category-grid">
          <div className="category-card">
            <h3>Electronics</h3>
            <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=200&fit=crop" alt="Electronics" />
            <Link to="/category/electronics">Shop now</Link>
          </div>
          <div className="category-card">
            <h3>Fashion</h3>
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop" alt="Fashion" />
            <Link to="/category/fashion">Shop now</Link>
          </div>
          <div className="category-card">
            <h3>Home & Kitchen</h3>
            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop" alt="Home" />
            <Link to="/category/home">Shop now</Link>
          </div>
          <div className="category-card">
            <h3>Books</h3>
            <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop" alt="Books" />
            <Link to="/category/books">Shop now</Link>
          </div>
        </div>

        {/* Deals Section */}
        <div className="deals-section">
          <h2>Today's Deals</h2>
          <div className="deals-grid">
            {discountedProducts.map(product => (
              <div key={product.id} className="deal-card">
                <div className="deal-badge">-{product.discount}%</div>
                <img src={product.image} alt={product.title} />
                <div className="deal-info">
                  <div className="deal-price">
                    <span className="current-price">₹{(product.price * (1 - product.discount/100)).toFixed(0)}</span>
                    <span className="original-price">₹{product.price}</span>
                  </div>
                  <p className="deal-title">{product.title}</p>
                  <button 
                    onClick={() => addToCart(product)}
                    className="add-to-cart-btn"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Best Sellers */}
        <div className="bestsellers-section">
          <h2>Best Sellers</h2>
          <div className="products-grid">
            {bestSellers.map(product => (
              <div key={product.id} className="product-card">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.title} />
                </Link>
                <div className="product-info">
                  <Link to={`/product/${product.id}`} className="product-title">
                    {product.title}
                  </Link>
                  <div className="product-rating">
                    ⭐⭐⭐⭐⭐ (4.5)
                  </div>
                  <div className="product-price">
                    ₹{product.price}
                    {product.discount > 0 && (
                      <span className="discount-badge">-{product.discount}%</span>
                    )}
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="add-to-cart-btn"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Starting at ₹99 Section */}
        <div className="price-section">
          <h2>Starting ₹99 | Budget finds</h2>
          <div className="price-grid">
            {products.filter(p => p.price < 2000).slice(0, 4).map(product => (
              <div key={product.id} className="price-card">
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <span className="price">₹{product.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazonHomepage;