import React from 'react';

export default function DiscountBanner() {
  return (
    <div className="discount-banner">
      <div className="discount-content">
        <div className="discount-text">
          <span className="discount-emoji">🔥</span>
          <span className="discount-main">MEGA SALE</span>
          <span className="discount-sub">Up to 70% OFF</span>
          <span className="discount-emoji">🔥</span>
        </div>
        <div className="discount-timer">
          <span>⏰ Limited Time Only!</span>
        </div>
      </div>
      <div className="discount-sparkles">
        <span className="sparkle">✨</span>
        <span className="sparkle">⭐</span>
        <span className="sparkle">💫</span>
        <span className="sparkle">🌟</span>
      </div>
    </div>
  );
}