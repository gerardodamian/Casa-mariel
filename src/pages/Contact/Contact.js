import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { storeInfo } from '../../data/storeData';
import './Contact.css';

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = "¡Hola! Me gustaría hacer una consulta.";
    const url = `https://wa.me/${storeInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar lógica para enviar el formulario
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1 className="page-title">Contáctanos</h1>
          <p className="page-subtitle">
            Estamos aquí para ayudarte. No dudes en contactarnos por cualquier consulta.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Información de Contacto</h2>
            
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-details">
                <h3>Dirección</h3>
                <p>{storeInfo.address}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-details">
                <h3>Teléfono</h3>
                <p>{storeInfo.phone}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>{storeInfo.email}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Clock size={24} />
              </div>
              <div className="contact-details">
                <h3>Horarios de Atención</h3>
                {Object.entries(storeInfo.hours).map(([day, hours]) => (
                  <p key={day}><strong>{day}:</strong> {hours}</p>
                ))}
              </div>
            </div>

            <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
              <MessageCircle size={20} />
              Contactar por WhatsApp
            </button>

            <div className="social-links">
              <h3>Síguenos</h3>
              <div className="social-buttons">
                <a href={storeInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="social-btn facebook">
                  Facebook
                </a>
                <a href={storeInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="social-btn instagram">
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <h2>Envíanos un Mensaje</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="tu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Tu número de teléfono"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Asunto</label>
                <select id="subject" name="subject" required>
                  <option value="">Selecciona un asunto</option>
                  <option value="consulta-producto">Consulta sobre producto</option>
                  <option value="cotizacion">Solicitar cotización</option>
                  <option value="servicio-tecnico">Servicio técnico</option>
                  <option value="garantia">Garantía</option>
                  <option value="entrega">Consulta sobre entrega</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="map-section">
          <h2>Ubicación</h2>
          <div className="map-container">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.0!2d${storeInfo.location.lng}!3d${storeInfo.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI2JzU2LjAiUyA3MMKwNDAnMDkuNCJX!5e0!3m2!1sen!2scl!4v1234567890123`}
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '15px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la tienda"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
