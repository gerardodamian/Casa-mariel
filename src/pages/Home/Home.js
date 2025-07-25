import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Clock,
    MapPin,
    Phone,
    MessageCircle,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { storeInfo, weeklyOffers, categories } from "../../data/storeData";
import casaFachada from "../../assets/images/casa.webp";
import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
    const [currentOffer, setCurrentOffer] = useState(0);

    const handleWhatsAppClick = () => {
        const message =
            "¡Hola! Me gustaría hacer una consulta sobre los productos.";
        const url = `https://wa.me/${
            storeInfo.whatsappNumber
        }?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    const nextOffer = () => {
        setCurrentOffer((prev) => (prev + 1) % weeklyOffers.length);
    };

    const prevOffer = () => {
        setCurrentOffer(
            (prev) => (prev - 1 + weeklyOffers.length) % weeklyOffers.length
        );
    };

    useEffect(() => {
        const interval = setInterval(nextOffer, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home">
            {/* Offers Banner Carousel */}
            <section className="offers-banner">
                <div className="offers-carousel">
                    <div
                        className="offer-slide"
                        style={{
                            background: weeklyOffers[currentOffer].bgColor,
                        }}
                    >
                        <div className="offer-content">
                            <div className="offer-text">
                                <div className="offer-discount">
                                    {weeklyOffers[currentOffer].discount}
                                </div>
                                <h2 className="offer-title">
                                    {weeklyOffers[currentOffer].title}
                                </h2>
                                <h3 className="offer-subtitle">
                                    {weeklyOffers[currentOffer].subtitle}
                                </h3>
                                <p className="offer-description">
                                    {weeklyOffers[currentOffer].description}
                                </p>
                                <div className="offer-validity">
                                    {weeklyOffers[currentOffer].validUntil}
                                </div>
                                <Link to="/productos" className="offer-cta">
                                    ¡Ver Productos!
                                </Link>
                            </div>
                            <div className="offer-image">
                                <img
                                    src={weeklyOffers[currentOffer].image}
                                    alt={weeklyOffers[currentOffer].title}
                                />
                            </div>
                        </div>

                        <button
                            className="carousel-btn prev-btn"
                            onClick={prevOffer}
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            className="carousel-btn next-btn"
                            onClick={nextOffer}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div className="carousel-indicators">
                        {weeklyOffers.map((_, index) => (
                            <button
                                key={index}
                                className={`indicator ${
                                    index === currentOffer ? "active" : ""
                                }`}
                                onClick={() => setCurrentOffer(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Bienvenido a {storeInfo.name}
                    </motion.h1>
                    <p className="hero-subtitle">
                        {storeInfo.slogan} - Encuentra todo lo que necesitas en
                        un solo lugar
                    </p>
                    <div className="hero-buttons">
                        <Link to="/productos" className="btn btn-primary">
                            Ver Productos
                        </Link>
                        <button
                            onClick={handleWhatsAppClick}
                            className="btn btn-secondary"
                        >
                            <MessageCircle size={20} />
                            Contactar
                        </button>
                    </div>
                </div>
                <div className="hero-image">
                    <img
                        src={casaFachada}
                        alt="Fachada de Casa Mariel - Nuestra tienda"
                    />
                </div>
            </section>

            {/* Categories Section */}
            <section className="categories">
                <div className="container">
                    <h2 className="section-title">Nuestras Categorías</h2>
                    <div className="categories-grid">
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                to={`/categoria/${category.id}`}
                                className="category-card"
                            >
                                <div className="category-image">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                    />
                                    <div className="category-overlay">
                                        <span className="category-icon">
                                            {category.icon}
                                        </span>
                                    </div>
                                </div>
                                <div className="category-content">
                                    <h3>{category.name}</h3>
                                    <p>{category.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Store Section */}
            <section className="store-section">
                <div className="container">
                    <div className="store-content">
                        <div className="store-info">
                            <h2 className="section-title">Nuestra Tienda</h2>
                            <p className="store-description">
                                Te invitamos a conocer Casa Mariel, un espacio
                                diseñado pensando en ti y tu familia. Ubicados
                                en el corazón de la ciudad, nuestra tienda
                                cuenta con amplios espacios para que puedas
                                recorrer cómodamente todas nuestras secciones.
                            </p>
                            <div className="store-features">
                                <div className="feature-item">
                                    <MapPin size={20} />
                                    <span>Fácil acceso y estacionamiento</span>
                                </div>
                                <div className="feature-item">
                                    <Clock size={20} />
                                    <span>
                                        Horarios extendidos para tu comodidad
                                    </span>
                                </div>
                                <div className="feature-item">
                                    <MessageCircle size={20} />
                                    <span>Asesoría personalizada</span>
                                </div>
                            </div>
                            <button
                                onClick={handleWhatsAppClick}
                                className="btn btn-primary"
                            >
                                <MessageCircle size={20} />
                                Pregunta por nuestros horarios
                            </button>
                        </div>
                        <div className="store-image-large">
                            <img
                                src={casaFachada}
                                alt="Fachada exterior de Casa Mariel"
                                className="store-front-image"
                            />
                            <div className="image-caption">
                                <h4>Casa Mariel</h4>
                                <p>Nuestro local en {storeInfo.address}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Offer Section */}
            <section className="offerings">
                <div className="container">
                    <motion.h2
                        className="section-title sparkles"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        ¿Por Qué Elegirnos?
                    </motion.h2>
                    <div className="offerings-grid">
                        {["🚚", "💳", "🔧", "⭐"].map((icon, i) => (
                            <motion.div
                                key={i}
                                className="offering-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 * i }}
                            >
                                <div className="offering-icon">{icon}</div>
                                <h3>
                                    {
                                        [
                                            "Entrega a Domicilio",
                                            "Múltiples Formas de Pago",
                                            "Instalación y Servicio",
                                            "Garantía de Calidad",
                                        ][i]
                                    }
                                </h3>
                                <p>
                                    {
                                        [
                                            "Llevamos tus compras hasta la puerta de tu casa de forma segura y rápida.",
                                            "Aceptamos efectivo, tarjetas de crédito/débito y transferencias bancarias.",
                                            "Servicio de instalación profesional para electrodomésticos y muebles.",
                                            "Todos nuestros productos cuentan con garantía y respaldo de fábrica.",
                                        ][i]
                                    }
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <a
                    href={`https://wa.me/${storeInfo.whatsappNumber}`}
                    className="whatsapp-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    💬
                </a>
            </section>

            <button
                className="whatsapp-floating-btn"
                onClick={handleWhatsAppClick}
                aria-label="Contactar por WhatsApp"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="white"
                >
                    <path d="M20.52 3.48A11.73 11.73 0 0012 0a11.73 11.73 0 00-8.52 3.48 11.73 11.73 0 00-3.48 8.52c0 2.07.56 4.09 1.62 5.87L0 24l6.16-1.6a11.62 11.62 0 005.84 1.6h.02c3.15 0 6.12-1.23 8.36-3.48a11.73 11.73 0 003.48-8.52 11.73 11.73 0 00-3.54-8.52zm-8.52 17.27c-1.75 0-3.45-.47-4.94-1.37l-.35-.2-3.66.95.97-3.57-.23-.36a8.49 8.49 0 01-1.36-4.93 8.63 8.63 0 0115-6.1 8.5 8.5 0 012.5 6.05c0 4.74-3.86 8.6-8.61 8.6zm4.9-6.53c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.85 1.06-.15.18-.3.2-.57.07a7.88 7.88 0 01-2.32-1.43 8.58 8.58 0 01-1.58-1.96c-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51a.94.94 0 00.3-.51c.03-.14 0-.27-.02-.39-.05-.12-.6-1.45-.82-2-.22-.52-.45-.45-.62-.46a3.4 3.4 0 00-.78-.1c-.24 0-.57.09-.87.44s-1.14 1.12-1.14 2.74 1.17 3.18 1.33 3.41c.17.27 2.3 3.5 5.57 4.91a6.87 6.87 0 003.1.44c.53-.22 1.6-.65 1.83-1.28.22-.62.22-1.15.15-1.27-.07-.12-.26-.18-.53-.32z" />
                </svg>
            </button>

            {/* Location and Hours Section */}
            <section className="location-info">
                <div className="container">
                    <div className="info-grid">
                        <div className="info-content">
                            <h2 className="section-title">Visítanos</h2>

                            <div className="info-item">
                                <MapPin className="info-icon" />
                                <div>
                                    <h3>Ubicación</h3>
                                    <p>{storeInfo.address}</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <Clock className="info-icon" />
                                <div>
                                    <h3>Horarios de Atención</h3>
                                    {Object.entries(storeInfo.hours).map(
                                        ([day, hours]) => (
                                            <p key={day}>
                                                <strong>{day}:</strong> {hours}
                                            </p>
                                        )
                                    )}
                                </div>
                            </div>

                            <div className="info-item">
                                <Phone className="info-icon" />
                                <div>
                                    <h3>Contacto</h3>
                                    <p>{storeInfo.phone}</p>
                                    <p>{storeInfo.email}</p>
                                </div>
                            </div>

                            <button
                                onClick={handleWhatsAppClick}
                                className="whatsapp-btn"
                            >
                                <MessageCircle size={20} />
                                Contactar por WhatsApp
                            </button>
                        </div>

                        <div className="map-container">
                            <iframe
                                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.0!2d${storeInfo.location.lng}!3d${storeInfo.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI2JzU2LjAiUyA3MMKwNDAnMDkuNCJX!5e0!3m2!1sen!2scl!4v1234567890123`}
                                width="100%"
                                height="300"
                                style={{ border: 0, borderRadius: "12px" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación de la tienda"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
