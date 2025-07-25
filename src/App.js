import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ProductsByCategory from './pages/Products/ProductsByCategory';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import CartNotification from './components/CartNotification/CartNotification';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/categoria/:categoryId" element={<ProductsByCategory />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Cart />
        <CartNotification />
      </div>
    </CartProvider>
  );
}

export default App;
