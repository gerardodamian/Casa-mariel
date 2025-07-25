import React, { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './CartNotification.css';

const CartNotification = () => {
  const { cartItems } = useCart();
  const [lastItem, setLastItem] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (cartItems.length > 0) {
      const newLastItem = cartItems[cartItems.length - 1];
      if (lastItem && newLastItem.id !== lastItem.id) {
        setLastItem(newLastItem);
        setShow(true);
        setTimeout(() => setShow(false), 3000);
      } else if (!lastItem) {
        setLastItem(newLastItem);
      }
    }
  }, [cartItems, lastItem]);

  if (!show || !lastItem) return null;

  return (
    <div className="cart-notification">
      <div className="notification-content">
        <CheckCircle className="notification-icon" size={20} />
        <div className="notification-text">
          <strong>{lastItem.name}</strong> agregado al carrito
        </div>
      </div>
    </div>
  );
};

export default CartNotification;
