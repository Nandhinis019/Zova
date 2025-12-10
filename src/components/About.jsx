import React from 'react';

export default function About() {
  return (
    <div className="page-container">
      <div className="about-container">
        <div className="about-hero">
          <h1 className="about-title">About ZOVAi.in</h1>
          <p className="about-subtitle">Your AI-powered smart shopping destination</p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <div className="about-text">
              <h2>🚀 Our Story</h2>
              <p>
                Founded in 2024, ZOVAi.in started with a revolutionary mission: to transform online shopping 
                through artificial intelligence, making it smarter, more personalized, and incredibly efficient. 
                We believe that AI can make shopping decisions easier and more rewarding.
              </p>
              <p>
                Our journey began when our founders envisioned an AI-driven ecommerce platform that 
                understands customer preferences and delivers personalized shopping experiences. 
                Today, we use cutting-edge AI to serve thousands of satisfied customers globally.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">🏢</div>
            </div>
          </div>

          <div className="about-section reverse">
            <div className="about-image">
              <div className="image-placeholder">🎯</div>
            </div>
            <div className="about-text">
              <h2>🎯 Our Mission</h2>
              <p>
                To revolutionize online shopping through AI-powered recommendations, smart pricing algorithms, 
                and personalized experiences that make every customer feel understood and valued.
              </p>
              <p>
                We leverage artificial intelligence to predict customer needs, optimize pricing, 
                and create shopping experiences that are not just transactions, but intelligent interactions.
              </p>
            </div>
          </div>

          <div className="about-section">
            <div className="about-text">
              <h2>💎 Our Values</h2>
              <div className="values-grid">
                <div className="value-item">
                  <h3>🤖 AI-Powered</h3>
                  <p>We use advanced AI to understand your preferences and recommend perfect products.</p>
                </div>
                <div className="value-item">
                  <h3>🎯 Smart Deals</h3>
                  <p>Our AI finds the best deals and discounts tailored to your shopping patterns.</p>
                </div>
                <div className="value-item">
                  <h3>🚀 Innovation</h3>
                  <p>Constantly evolving with the latest AI technology for better shopping experiences.</p>
                </div>
                <div className="value-item">
                  <h3>🌍 Global Reach</h3>
                  <p>Multi-language support and location-aware shopping for customers worldwide.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-section">
            <h2>📊 Our Impact</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <h3>10,000+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat-item">
                <h3>50,000+</h3>
                <p>Orders Delivered</p>
              </div>
              <div className="stat-item">
                <h3>1,000+</h3>
                <p>Products Available</p>
              </div>
              <div className="stat-item">
                <h3>99.9%</h3>
                <p>Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}