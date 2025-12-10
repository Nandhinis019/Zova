import React from 'react'

export default function Orders({ orders, setOrders }) {
  const cancelOrder = (orderId) => {
    setOrders(orders.filter(order => order.orderId !== orderId));
    alert('Order cancelled successfully!');
  };

  if (orders.length === 0) {
    return (
      <div className="orders-container">
        <div className="amazon-container">
          <h2>Your Orders</h2>
          <div className="empty-orders">
            <p>You have no orders yet.</p>
            <a href="/" className="continue-shopping">Continue Shopping</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-container">
      <div className="amazon-container">
        <h2>Your Orders ({orders.length} items)</h2>

        <div className="orders-items">
          {orders.map((order) => (
            <div key={order.orderId || order._id} className="order-item">
              <div className="order-header">
                <div className="order-info">
                  <span className="order-date">Ordered on {new Date(order.orderDate).toLocaleDateString()}</span>
                  <span className="order-id">Order ID: #{order.orderId}</span>
                </div>
                <div className="order-status">
                  <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
                </div>
              </div>
              
              <div className="order-content">
                <img src={order.image} alt={order.name || order.title} className="order-image" />
                <div className="item-details">
                  <h3>{order.name || order.title}</h3>
                  <p className="order-price">₹{order.price} x {order.quantity || 1}</p>
                  <p className="order-total">Total: ₹{(order.price * (order.quantity || 1)).toFixed(0)}</p>
                  
                  <div className="order-actions">
                    {order.status === 'Ordered' && (
                      <button 
                        onClick={() => cancelOrder(order.orderId || order._id)} 
                        className="cancel-btn"
                      >
                        Cancel Order
                      </button>
                    )}
                    <button className="track-btn">Track Package</button>
                    <button className="reorder-btn">Buy Again</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
