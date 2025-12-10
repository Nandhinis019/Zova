import './App.css'
import './AmazonStyles.css'
import { Route, Routes } from "react-router-dom";
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Orders from './components/Orders';
import OrderConfirmation from './components/OrderConfirmation';
import Login from './components/Login';
import AmazonHeader from './components/AmazonHeader';
import AmazonHomepage from './components/AmazonHomepage';
import AmazonProductGrid from './components/AmazonProductGrid';
import AmazonFooter from './components/AmazonFooter';
import EnhancedProduct from './components/EnhancedProduct';
import AIAssistant from './components/AIAssistant';
import About from './components/About';
import Contact from './components/Contact';
import CategoryProducts from './components/CategoryProducts';
import DiscountProducts from './components/DiscountProducts';
import ProtectedRoute from './components/ProtectedRoute';
import { products } from './utils/api';
import { useState, useEffect } from 'react';

function App() {
  const [cart,setCart]= useState([]);
  const [orders,setOrders]= useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [language, setLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  },[cart, isLoggedIn]);
  
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("orders", JSON.stringify(orders));
    }
  },[orders, isLoggedIn]);
  
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const loginStatus = localStorage.getItem('isLoggedIn');
    
    if (token && loginStatus === 'true') {
      setIsLoggedIn(true);
      const savedCart = localStorage.getItem('cart');
      const savedOrders = localStorage.getItem('orders');
      if (savedCart) setCart(JSON.parse(savedCart));
      if (savedOrders) setOrders(JSON.parse(savedOrders));
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (credentials) => {
    // Simple authentication - in real app, validate with backend
    if (credentials.email && credentials.password) {
      const token = 'zovai_' + Date.now();
      localStorage.setItem('authToken', token);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', credentials.email);
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('authToken');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('cart');
    localStorage.removeItem('orders');
    setCart([]);
    setOrders([]);
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <h1>🚀 ZOVAi.in</h1>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="login-only-app">
        <Login onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <>
     <div className="app-container">
      <AmazonHeader 
        cart={cart} 
        orders={orders} 
        isLoggedIn={isLoggedIn} 
        onLogout={handleLogout}
        language={language}
        onLanguageChange={setLanguage}
      />
      <main>
        <Routes>
          <Route path="/" element={
            <AmazonHomepage 
              cart={cart} 
              setCart={setCart} 
              isLoggedIn={isLoggedIn} 
            />
          }/>
          <Route path="/products" element={
            <AmazonProductGrid 
              cart={cart} 
              setCart={setCart} 
              isLoggedIn={isLoggedIn} 
            />
          }/>
          <Route path="/product/:id" element={
            <div className="full-screen-product">
              <EnhancedProduct 
                orders={orders} 
                setOrders={setOrders} 
                cart={cart} 
                setCart={setCart} 
                isLoggedIn={isLoggedIn} 
              />
            </div>
          } />
          <Route path="/cart" element={
            <div className="full-screen-content">
              <Cart cart={cart} setCart={setCart}/>
            </div>
          } />
          <Route path="/orders" element={
            <div className="full-screen-content">
              <Orders orders={orders} setOrders={setOrders} />
            </div>
          } />
          <Route path="/order-confirmation" element={
            <div className="full-screen-content">
              <OrderConfirmation />
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category/:category" element={<CategoryProducts Cart={cart} setCart={setCart} isLoggedIn={isLoggedIn} />} />
          <Route path="/discounts" element={<DiscountProducts cart={cart} setCart={setCart} isLoggedIn={isLoggedIn} />} />
        </Routes>
      </main>
      <AmazonFooter />
      <AIAssistant />
     </div>
    </>
  )
}

export default App

