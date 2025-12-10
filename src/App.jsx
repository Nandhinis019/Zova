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

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  },[cart]);
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  },[orders]);
  
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    if (loginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

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
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
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
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <div className="full-screen-content">
                <Cart cart={cart} setCart={setCart}/>
              </div>
            </ProtectedRoute>
          } />
          <Route path="/orders" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <div className="full-screen-content">
                <Orders orders={orders} setOrders={setOrders} />
              </div>
            </ProtectedRoute>
          } />
          <Route path="/order-confirmation" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <div className="full-screen-content">
                <OrderConfirmation />
              </div>
            </ProtectedRoute>
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

