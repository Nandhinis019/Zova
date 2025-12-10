import React from 'react'

export default function Cart({ cart, setCart }) {
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item._id !== id));
  };

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart ({cart.length} items)</h2>
      
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item._id} className="cart-item">
            <img src={item.image} alt={item.name} width="100" />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <button onClick={() => removeFromCart(item._id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="cart-total">
        <h3>Total: ₹{cart.reduce((total, item) => total + item.price, 0)}</h3>
      </div>
    </div>
  )
}
