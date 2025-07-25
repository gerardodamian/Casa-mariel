import React, { useState } from 'react';
import { MessageCircle, ShoppingCart, Star, Info, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product, viewMode = 'grid' }) => {
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(false);

  const handleWhatsAppClick = () => {
    const message = `¡Hola! Me interesa el producto: ${product.name} - $${product.price.toFixed(2)}`;
    const url = `https://wa.me/3517181975?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleShowInfo = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (viewMode === 'list') {
    return (
      <div className="product-card list-view">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          <div className="product-overlay">
            <button className="quick-action" onClick={handleWhatsAppClick}>
              <MessageCircle size={16} />
            </button>
          </div>
        </div>
        
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          
          {product.features && (
            <div className="product-features">
              <h4>Características:</h4>
              <ul>
                {product.features.slice(0, 2).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="product-actions">
          <div className="product-price">${product.price.toFixed(2)}</div>
          <div className="action-buttons">
            <button className="btn-whatsapp" onClick={handleWhatsAppClick}>
              <MessageCircle size={16} />
              Consultar
            </button>
            <button className="btn-cart" onClick={handleAddToCart}>
              <ShoppingCart size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="product-card grid-view">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          <div className="product-overlay">
            <button className="quick-action" onClick={handleWhatsAppClick}>
              <MessageCircle size={16} />
              Consultar
            </button>
            <button className="quick-action info-btn" onClick={handleShowInfo}>
              <Info size={16} />
              Info
            </button>
          </div>
          <div className="product-badge">Nuevo</div>
        </div>
        
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          
          <div className="product-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                size={14} 
                className={star <= 4 ? 'star-filled' : 'star-empty'} 
              />
            ))}
            <span className="rating-text">(4.0)</span>
          </div>
          
          <div className="product-footer">
            <div className="product-price">${product.price.toFixed(2)}</div>
            <button className="btn-add-cart" onClick={handleAddToCart}>
              <ShoppingCart size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Información */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{product.name}</h2>
              <button className="modal-close" onClick={handleCloseModal}>
                <X size={20} />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="modal-image">
                <img src={product.image} alt={product.name} />
              </div>
              
              <div className="modal-details">
                <div className="modal-price">${product.price.toFixed(2)}</div>
                
                <div className="modal-description">
                  <h3>Descripción</h3>
                  <p>{product.description}</p>
                </div>
                
                {product.features && product.features.length > 0 && (
                  <div className="modal-features">
                    <h3>Características</h3>
                    <ul>
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="modal-actions">
                  <button className="btn-modal-whatsapp" onClick={handleWhatsAppClick}>
                    <MessageCircle size={16} />
                    Consultar por WhatsApp
                  </button>
                  <button className="btn-modal-cart" onClick={handleAddToCart}>
                    <ShoppingCart size={16} />
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
