import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, MessageCircle, User, CreditCard, MapPin } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { storeInfo } from '../../data/storeData';
import './Cart.css';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    isCartOpen,
    toggleCart
  } = useCart();

  const [showCheckout, setShowCheckout] = useState(false);
  const [customerData, setCustomerData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    paymentMethod: 'efectivo',
    deliveryMethod: 'domicilio',
    notes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) return;
    
    if (!customerData.name || !customerData.phone) {
      alert('Por favor completa al menos tu nombre y teléfono');
      return;
    }

    let message = "🛒 *NUEVO PEDIDO*\n\n";
    
    // Datos del cliente
    message += "👤 *DATOS DEL CLIENTE:*\n";
    message += `Nombre: ${customerData.name}\n`;
    message += `Teléfono: ${customerData.phone}\n`;
    if (customerData.email) message += `Email: ${customerData.email}\n`;
    
    // Dirección solo si es entrega a domicilio
    if (customerData.deliveryMethod === 'domicilio') {
      message += `Dirección: ${customerData.address}\n`;
      if (customerData.city) message += `Ciudad: ${customerData.city}\n`;
    }
    
    message += `Forma de pago: ${customerData.paymentMethod === 'efectivo' ? 'Efectivo' : 
                customerData.paymentMethod === 'tarjeta' ? 'Tarjeta de crédito/débito' :
                customerData.paymentMethod === 'transferencia' ? 'Transferencia bancaria' : 'Otro'}\n`;
    message += `Entrega: ${customerData.deliveryMethod === 'domicilio' ? 'A domicilio' : 'Retiro en tienda'}\n\n`;
    
    // Productos
    message += "🛍️ *PRODUCTOS:*\n";
    cartItems.forEach(item => {
      message += `• ${item.name}\n`;
      message += `  Cantidad: ${item.quantity}\n`;
      message += `  Precio unitario: $${item.price.toFixed(2)}\n`;
      message += `  Subtotal: $${(item.price * item.quantity).toFixed(2)}\n\n`;
    });
    
    message += `💰 *TOTAL: $${getCartTotal().toFixed(2)}*\n\n`;
    
    if (customerData.notes) {
      message += `📝 *NOTAS:* ${customerData.notes}\n\n`;
    }
    
    message += "¿Podrían confirmar disponibilidad y proceso de entrega? ¡Gracias!";

    const url = `https://wa.me/${storeInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    
    // Limpiar formulario y carrito después del pedido
    setCustomerData({
      name: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      paymentMethod: 'efectivo',
      deliveryMethod: 'domicilio',
      notes: ''
    });
    clearCart();
    setShowCheckout(false);
  };

  if (!isCartOpen) return null;

  return (
    <div className="cart-overlay" onClick={toggleCart}>
      <div className="cart-sidebar" onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Carrito de Compras</h2>
          <button className="close-cart" onClick={toggleCart}>
            <X size={20} />
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">🛒</div>
              <p>Tu carrito está vacío</p>
              <span>Agrega productos para comenzar</span>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p className="item-price">${item.price.toFixed(2)}</p>
                      
                      <div className="quantity-controls">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="quantity-btn"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="quantity-btn"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="item-actions">
                      <div className="item-total">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="remove-item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <strong>Total: ${getCartTotal().toFixed(2)}</strong>
                </div>
                
                {!showCheckout ? (
                  <div className="cart-actions">
                    <button onClick={clearCart} className="clear-cart-btn">
                      Vaciar Carrito
                    </button>
                    
                    <button onClick={() => setShowCheckout(true)} className="checkout-btn">
                      <User size={16} />
                      Continuar Pedido
                    </button>
                  </div>
                ) : (
                  <div className="checkout-form">
                    <h3>Datos del Cliente</h3>
                    
                    <div className="form-section">
                      <h4><User size={16} /> Información Personal</h4>
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Nombre completo *"
                          value={customerData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Teléfono *"
                          value={customerData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email (opcional)"
                          value={customerData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-section">
                      <h4><MapPin size={16} /> Entrega</h4>
                      <div className="form-group">
                        <select 
                          name="deliveryMethod" 
                          value={customerData.deliveryMethod}
                          onChange={handleInputChange}
                        >
                          <option value="domicilio">Entrega a domicilio</option>
                          <option value="retiro">Retiro en tienda</option>
                        </select>
                      </div>
                      
                      {customerData.deliveryMethod === 'domicilio' && (
                        <>
                          <div className="form-group">
                            <input
                              type="text"
                              name="address"
                              placeholder="Dirección completa *"
                              value={customerData.address}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              name="city"
                              placeholder="Ciudad"
                              value={customerData.city}
                              onChange={handleInputChange}
                            />
                          </div>
                        </>
                      )}
                    </div>

                    <div className="form-section">
                      <h4><CreditCard size={16} /> Forma de Pago</h4>
                      <div className="form-group">
                        <select 
                          name="paymentMethod" 
                          value={customerData.paymentMethod}
                          onChange={handleInputChange}
                        >
                          <option value="efectivo">Efectivo</option>
                          <option value="tarjeta">Tarjeta de crédito/débito</option>
                          <option value="transferencia">Transferencia bancaria</option>
                          <option value="otro">Otro (especificar en notas)</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-section">
                      <div className="form-group">
                        <textarea
                          name="notes"
                          placeholder="Notas adicionales o comentarios especiales..."
                          value={customerData.notes}
                          onChange={handleInputChange}
                          rows="3"
                        />
                      </div>
                    </div>

                    <div className="checkout-actions">
                      <button 
                        onClick={() => setShowCheckout(false)} 
                        className="back-btn"
                      >
                        Volver
                      </button>
                      
                      <button onClick={handleWhatsAppOrder} className="whatsapp-order-btn">
                        <MessageCircle size={16} />
                        Enviar Pedido
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
