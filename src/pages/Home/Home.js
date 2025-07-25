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
                    <h1 className="hero-title">
                        Bienvenido a {storeInfo.name}
                    </h1>
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
                                Te invitamos a conocer Casa Mariel, un espacio diseñado 
                                pensando en ti y tu familia. Ubicados en el corazón de la ciudad, 
                                nuestra tienda cuenta con amplios espacios para que puedas 
                                recorrer cómodamente todas nuestras secciones.
                            </p>
                            <div className="store-features">
                                <div className="feature-item">
                                    <MapPin size={20} />
                                    <span>Fácil acceso y estacionamiento</span>
                                </div>
                                <div className="feature-item">
                                    <Clock size={20} />
                                    <span>Horarios extendidos para tu comodidad</span>
                                </div>
                                <div className="feature-item">
                                    <MessageCircle size={20} />
                                    <span>Asesoría personalizada</span>
                                </div>
                            </div>
                            <button onClick={handleWhatsAppClick} className="btn btn-primary">
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
                    <h2 className="section-title">¿Por Qué Elegirnos?</h2>
                    <div className="offerings-grid">
                        <div className="offering-card">
                            <div className="offering-icon">🚚</div>
                            <h3>Entrega a Domicilio</h3>
                            <p>
                                Llevamos tus compras hasta la puerta de tu casa
                                de forma segura y rápida.
                            </p>
                        </div>
                        <div className="offering-card">
                            <div className="offering-icon">💳</div>
                            <h3>Múltiples Formas de Pago</h3>
                            <p>
                                Acepta efectivo, tarjetas de crédito/débito y
                                transferencias bancarias.
                            </p>
                        </div>
                        <div className="offering-card">
                            <div className="offering-icon">🔧</div>
                            <h3>Instalación y Servicio</h3>
                            <p>
                                Servicio de instalación profesional para
                                electrodomésticos y muebles.
                            </p>
                        </div>
                        <div className="offering-card">
                            <div className="offering-icon">⭐</div>
                            <h3>Garantía de Calidad</h3>
                            <p>
                                Todos nuestros productos cuentan con garantía y
                                respaldo de fábrica.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

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
