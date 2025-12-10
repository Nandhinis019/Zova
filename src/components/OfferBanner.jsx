import React from 'react';

export default function OfferBanner() {
  const offers = [
    "🔥 MEGA SALE: Up to 70% OFF on Electronics! Limited Time Only!",
    "⚡ FLASH DEAL: Buy 2 Get 1 FREE on Fashion Items!",
    "🎉 SPECIAL OFFER: Free Shipping on Orders Above ₹999!",
    "💎 PREMIUM DEALS: Extra 20% OFF on Gaming Accessories!",
    "🌟 NEW ARRIVAL: Latest Collection with 50% Discount!"
  ];

  return (
    <div className="offer-banner">
      <div className="offer-content">
        {offers.map((offer, index) => (
          <span key={index} className="offer-text">{offer}</span>
        ))}
        {/* Duplicate for seamless loop */}
        {offers.map((offer, index) => (
          <span key={`dup-${index}`} className="offer-text">{offer}</span>
        ))}
      </div>
    </div>
  );
}