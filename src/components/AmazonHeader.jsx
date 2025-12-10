import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LocationTracker from './LocationTracker';
import LanguageSwitcher from './LanguageSwitcher';
import UserProfile from './UserProfile';

const AmazonHeader = ({ cart, orders, isLoggedIn, onLogout, language, onLanguageChange }) => {
  const [searchCategory, setSearchCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All', 'Electronics', 'Fashion', 'Home & Kitchen', 'Books', 'Sports', 'Beauty', 'Toys'
  ];

  return (
    <header className="amazon-header">
      {/* Top Bar */}
      <div className="amazon-top-bar">
        <div className="amazon-container">
          {/* Logo */}
          <Link to="/" className="amazon-logo">
            <span className="logo-text">ZOVAi</span>
            <span className="logo-domain">.in</span>
          </Link>

          {/* Deliver to */}
          <div className="deliver-to">
            <span className="deliver-text">Deliver to</span>
            <LocationTracker />
          </div>

          {/* Search Bar */}
          <div className="amazon-search">
            <div className="search-dropdown">
              <select 
                value={searchCategory} 
                onChange={(e) => setSearchCategory(e.target.value)}
                className="category-select"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <input 
              type="text"
              placeholder="Search ZOVAi.in"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button className="search-button">
              <i className="search-icon">🔍</i>
            </button>
          </div>

          {/* Right Side */}
          <div className="amazon-nav-right">
            <LanguageSwitcher 
              currentLanguage={language} 
              onLanguageChange={onLanguageChange} 
            />
            
            {isLoggedIn ? (
              <>
                <div className="nav-item">
                  <span className="nav-line-1">Hello, User</span>
                  <span className="nav-line-2">Account & Lists</span>
                </div>
                <Link to="/orders" className="nav-item">
                  <span className="nav-line-1">Returns</span>
                  <span className="nav-line-2">& Orders</span>
                </Link>
              </>
            ) : (
              <Link to="/login" className="nav-item">
                <span className="nav-line-1">Hello, sign in</span>
                <span className="nav-line-2">Account & Lists</span>
              </Link>
            )}

            <Link to="/cart" className="cart-nav">
              <div className="cart-icon">
                🛒
                <span className="cart-count">{cart.length}</span>
              </div>
              <span className="cart-text">Cart</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="amazon-nav-bar">
        <div className="amazon-container">
          <div className="nav-left">
            <div className="nav-item all-menu">
              <span>☰ All</span>
            </div>
            <Link to="/category/electronics" className="nav-link">Electronics</Link>
            <Link to="/category/fashion" className="nav-link">Fashion</Link>
            <Link to="/category/home" className="nav-link">Home & Kitchen</Link>
            <Link to="/discounts" className="nav-link deals">Today's Deals</Link>
            <Link to="/category/books" className="nav-link">Books</Link>
            <div className="nav-link">Best Sellers</div>
            <div className="nav-link">New Releases</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AmazonHeader;