import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import LanguageSwitcher from './LanguageSwitcher';
import LocationTracker from './LocationTracker';
import UserProfile from './UserProfile';

export default function Navbar({ cart, orders, isLoggedIn, onLogout, language, onLanguageChange }) {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-utilities">
          <LocationTracker />
          <LanguageSwitcher 
            currentLanguage={language} 
            onLanguageChange={onLanguageChange} 
          />
        </div>
      </div>
      
      <div className="header-main">
        <div className="logo-section">
          <Link to="/" className="logo">🚀 ZOVAi.in</Link>
          <span className="header-slogan">"Smart Shopping, Smarter Deals" ✨</span>
        </div>
        
        <div className="search-section">
          <SearchBar />
        </div>
        
        <div className="header-actions">
          <Link to="/discounts" className="discount-btn">
            🏷️ Offers
          </Link>
          
          {isLoggedIn ? (
            <>
              <UserProfile isLoggedIn={isLoggedIn} />
              <Link to="/cart" className="header-link">
                🛒 Cart ({cart.length})
              </Link>
              <Link to="/orders" className="header-link">
                📦 Orders ({orders.length})
              </Link>
              <button 
                onClick={onLogout}
                className="logout-btn"
              >
                🚪 Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="header-link">🔐 Login</Link>
          )}
        </div>
      </div>
    </header>
  );
}