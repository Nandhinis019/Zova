import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>🚀 ZOVAi.in</h3>
          <p>"Smart Shopping, Smarter Deals" - Your AI-powered shopping destination for premium products at unbeatable prices. Experience the future of e-commerce!</p>
          <div className="slogan-tags">
            <span className="slogan-tag">✨ Premium Quality</span>
            <span className="slogan-tag">🚀 Fast Delivery</span>
            <span className="slogan-tag">💯 Best Prices</span>
          </div>
          <div className="social-links">
            <a href="#" className="social-link">📘</a>
            <a href="#" className="social-link">📷</a>
            <a href="#" className="social-link">🐦</a>
            <a href="#" className="social-link">💼</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">🏠 Home</Link></li>
            <li><Link to="/cart">🛒 Cart</Link></li>
            <li><Link to="/orders">📦 Orders</Link></li>
            <li><Link to="/about">ℹ️ About Us</Link></li>
            <li><Link to="/contact">📞 Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Categories</h4>
          <ul className="footer-links">
            <li><Link to="/category/electronics">📱 Electronics</Link></li>
            <li><Link to="/category/fashion">👕 Fashion</Link></li>
            <li><Link to="/category/home">🏠 Home & Garden</Link></li>
            <li><Link to="/category/books">📚 Books</Link></li>
            <li><Link to="/category/gaming">🎮 Gaming</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul className="footer-links">
            <li><a href="#">❓ Help Center</a></li>
            <li><a href="#">🚚 Shipping Info</a></li>
            <li><a href="#">↩️ Returns</a></li>
            <li><a href="#">🔒 Privacy Policy</a></li>
            <li><a href="#">📋 Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe to get updates on new products and offers!</p>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-left">
            <p>&copy; 2024 ZOVAi.in. All rights reserved.</p>
            <p className="footer-tagline">"Powered by AI, Driven by You" 🌟</p>
          </div>
          <div className="payment-methods">
            <span>We Accept: 💳 💰 🏦 📱</span>
          </div>
        </div>
      </div>
    </footer>
  );
}