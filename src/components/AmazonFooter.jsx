import React from 'react';
import { Link } from 'react-router-dom';

export default function AmazonFooter() {
  return (
    <footer className="amazon-footer">
      <div className="footer-back-to-top">
        <button onClick={() => window.scrollTo(0, 0)}>Back to top</button>
      </div>
      
      <div className="footer-content">
        <div className="amazon-container">
          <div className="footer-sections">
            <div className="footer-section">
              <h4>Get to Know Us</h4>
              <ul className="footer-links">
                <li><Link to="/about">About ZOVAi.in</Link></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press Releases</a></li>
                <li><a href="#">ZOVAi Science</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Make Money with Us</h4>
              <ul className="footer-links">
                <li><a href="#">Sell on ZOVAi.in</a></li>
                <li><a href="#">Sell under ZOVAi Accelerator</a></li>
                <li><a href="#">Become an Affiliate</a></li>
                <li><a href="#">Advertise Your Products</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>ZOVAi Payment Products</h4>
              <ul className="footer-links">
                <li><a href="#">ZOVAi Business Card</a></li>
                <li><a href="#">Shop with Points</a></li>
                <li><a href="#">Reload Your Balance</a></li>
                <li><a href="#">ZOVAi Currency Converter</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Let Us Help You</h4>
              <ul className="footer-links">
                <li><a href="#">Your Account</a></li>
                <li><Link to="/orders">Your Orders</Link></li>
                <li><a href="#">Shipping Rates & Policies</a></li>
                <li><a href="#">Returns & Replacements</a></li>
                <li><Link to="/contact">Help</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="amazon-container">
          <div className="footer-logo-section">
            <Link to="/" className="footer-logo">
              <span className="logo-text">ZOVAi</span>
              <span className="logo-domain">.in</span>
            </Link>
            <div className="footer-country">
              <span>🇮🇳 India</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="amazon-container">
          <div className="copyright-links">
            <a href="#">Conditions of Use & Sale</a>
            <a href="#">Privacy Notice</a>
            <a href="#">Interest-Based Ads</a>
          </div>
          <p>&copy; 1996-2024, ZOVAi.in, Inc. or its affiliates</p>
        </div>
      </div>
    </footer>
  );
}