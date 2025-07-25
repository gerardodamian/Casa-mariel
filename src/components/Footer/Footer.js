import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { storeInfo, categories } from '../../data/storeData';
import './Footer.css';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = "¡Hola! Me gustaría hacer una consulta.";
    const url = `https://wa.me/${storeInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Store Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <span className="logo-icon">🏠</span>
                <h3>{storeInfo.name}</h3>
              </div>
              <p className="footer-description">
                {storeInfo.slogan}. Encuentra todo lo que necesitas para tu hogar en un solo lugar, con la mejor calidad y precios.
              </p>
              <div className="social-links">
                <a href={storeInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="social-link">
                  <Facebook size={20} />
                </a>
                <a href={storeInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                  <Instagram size={20} />
                </a>
                <a href={storeInfo.socialMedia.whatsapp} target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Enlaces Rápidos</h4>
              <ul className="footer-links">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Todos los Productos</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
              </ul>
            </div>

            {/* Categories */}
            <div className="footer-section">
              <h4>Categorías</h4>
              <ul className="footer-links">
                {categories.slice(0, 6).map(category => (
                  <li key={category.id}>
                    <Link to={`/categoria/${category.id}`}>
                      <span className="category-icon">{category.icon}</span>
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4>Información de Contacto</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin size={16} />
                  <span>{storeInfo.address}</span>
                </div>
                <div className="contact-item">
                  <Phone size={16} />
                  <span>{storeInfo.phone}</span>
                </div>
                <div className="contact-item">
                  <Mail size={16} />
                  <span>{storeInfo.email}</span>
                </div>
                <div className="contact-item">
                  <Clock size={16} />
                  <div className="hours-info">
                    <span>Lun - Vie: 9:00 - 19:00</span>
                    <span>Sáb - Dom: 9:00 - 20:00</span>
                  </div>
                </div>
              </div>
              
              <button className="footer-whatsapp-btn" onClick={handleWhatsAppClick}>
                <MessageCircle size={16} />
                Contactar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; 2024 {storeInfo.name}. Todos los derechos reservados.</p>
            <div className="footer-bottom-links">
              <Link to="/terminos">Términos y Condiciones</Link>
              <Link to="/privacidad">Política de Privacidad</Link>
              <Link to="/garantias">Garantías</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
