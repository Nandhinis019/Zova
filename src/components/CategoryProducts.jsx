import React from 'react';
import { useParams, Link } from 'react-router-dom';

const categoryProducts = {
  electronics: [
    { _id: 'e1', name: 'iPhone 15 Pro', price: 89999, image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400', description: 'Latest iPhone with advanced features', category: 'Electronics' },
    { _id: 'e2', name: 'Samsung Galaxy S24', price: 79999, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400', description: 'Premium Android smartphone', category: 'Electronics' },
    { _id: 'e3', name: 'MacBook Pro M3', price: 199999, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400', description: 'Powerful laptop for professionals', category: 'Electronics' }
  ],
  fashion: [
    { _id: 'f1', name: 'Designer T-Shirt', price: 2999, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400', description: 'Premium cotton t-shirt', category: 'Fashion' },
    { _id: 'f2', name: 'Denim Jeans', price: 4999, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400', description: 'Classic blue denim jeans', category: 'Fashion' },
    { _id: 'f3', name: 'Leather Jacket', price: 12999, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', description: 'Genuine leather jacket', category: 'Fashion' }
  ],
  home: [
    { _id: 'h1', name: 'Smart LED Bulb', price: 1299, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400', description: 'WiFi enabled smart bulb', category: 'Home & Garden' },
    { _id: 'h2', name: 'Garden Plant Set', price: 2499, image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400', description: 'Indoor plant collection', category: 'Home & Garden' },
    { _id: 'h3', name: 'Coffee Maker', price: 8999, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400', description: 'Automatic coffee machine', category: 'Home & Garden' }
  ],
  books: [
    { _id: 'b1', name: 'Programming Guide', price: 899, image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400', description: 'Complete programming handbook', category: 'Books' },
    { _id: 'b2', name: 'Design Thinking', price: 1299, image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400', description: 'Creative design methodology', category: 'Books' },
    { _id: 'b3', name: 'Business Strategy', price: 1599, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', description: 'Modern business approaches', category: 'Books' }
  ],
  gaming: [
    { _id: 'g1', name: 'Gaming Headset', price: 5999, image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=400', description: 'Professional gaming headphones', category: 'Gaming' },
    { _id: 'g2', name: 'Mechanical Keyboard', price: 7999, image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400', description: 'RGB mechanical keyboard', category: 'Gaming' },
    { _id: 'g3', name: 'Gaming Mouse', price: 3999, image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400', description: 'High precision gaming mouse', category: 'Gaming' }
  ]
};

export default function CategoryProducts({ Cart, setCart, isLoggedIn }) {
  const { category } = useParams();
  const products = categoryProducts[category] || [];

  const addToCart = (item) => {
    if (!isLoggedIn) {
      window.location.href = '/login';
      return;
    }
    setCart([...Cart, item]);
  };

  return (
    <div className="page-container">
      <div className="category-header">
        <h1 className="category-title">
          {category === 'electronics' && '📱 Electronics'}
          {category === 'fashion' && '👕 Fashion'}
          {category === 'home' && '🏠 Home & Garden'}
          {category === 'books' && '📚 Books'}
          {category === 'gaming' && '🎮 Gaming'}
        </h1>
        <p className="category-subtitle">Discover amazing products in this category</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p className="price">₹{product.price}</p>
            <p className="product-description">{product.description}</p>
            <div className="product-actions">
              <button onClick={() => addToCart(product)}>Add to Cart</button>
              <Link to={`/product/${product._id}`} className="view-btn">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}