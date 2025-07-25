import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Search, Sparkles } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { categories } from "../../data/storeData";
import "./Navbar.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { getCartItemsCount, toggleCart } = useCart();

    // Efecto de scroll para cambiar el navbar
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
    };

    // Función para generar sparkles aleatorios
    const generateSparkles = () => {
        return Array.from({ length: 3 }, (_, i) => (
            <Sparkles
                key={i}
                size={12}
                className={`sparkle sparkle-${i + 1}`}
                style={{
                    position: "absolute",
                    color: "#ffd700",
                    opacity: 0.7,
                    animation: `sparkle ${2 + i}s infinite ease-in-out`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                }}
            />
        ));
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="nav-container">
                <Link to="/" className="nav-logo" onClick={closeMenu}>
                    <div className="logo-container">
                        <div style={{ position: "relative" }}>
                            <svg
                                className="logo-icon"
                                viewBox="0 0 50 50"
                                width="45"
                                height="45"
                            >
                                {/* Casa/House shape con gradiente mejorado */}
                                <defs>
                                    <linearGradient
                                        id="houseGradient"
                                        x1="0%"
                                        y1="0%"
                                        x2="100%"
                                        y2="100%"
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor="#ffffff"
                                            stopOpacity="0.9"
                                        />
                                        <stop
                                            offset="50%"
                                            stopColor="#ffd700"
                                            stopOpacity="0.8"
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor="#ffffff"
                                            stopOpacity="0.7"
                                        />
                                    </linearGradient>
                                    <filter id="glow">
                                        <feGaussianBlur
                                            stdDeviation="2"
                                            result="coloredBlur"
                                        />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>

                                {/* Casa/House shape */}
                                <path
                                    d="M25 5 L5 22 L5 45 L20 45 L20 35 L30 35 L30 45 L45 45 L45 22 Z"
                                    fill="url(#houseGradient)"
                                    stroke="#ffffff"
                                    strokeWidth="1.5"
                                    filter="url(#glow)"
                                />
                                {/* Roof */}
                                <path
                                    d="M25 5 L5 22 L8 22 L25 8 L42 22 L45 22 Z"
                                    fill="rgba(255, 255, 255, 0.8)"
                                    filter="url(#glow)"
                                />
                                {/* Door */}
                                <rect
                                    x="22"
                                    y="35"
                                    width="6"
                                    height="10"
                                    fill="rgba(255, 255, 255, 0.9)"
                                    rx="1"
                                />
                                {/* Windows */}
                                <rect
                                    x="10"
                                    y="28"
                                    width="6"
                                    height="6"
                                    fill="#ffd700"
                                    stroke="#ffffff"
                                    strokeWidth="1"
                                    rx="1"
                                />
                                <rect
                                    x="34"
                                    y="28"
                                    width="6"
                                    height="6"
                                    fill="#ffd700"
                                    stroke="#ffffff"
                                    strokeWidth="1"
                                    rx="1"
                                />
                                {/* Door handle */}
                                <circle
                                    cx="26.5"
                                    cy="40"
                                    r="1"
                                    fill="#ffd700"
                                />
                                {/* Decorative elements */}
                                <circle
                                    cx="15"
                                    cy="15"
                                    r="1"
                                    fill="#ffd700"
                                    opacity="0.7"
                                />
                                <circle
                                    cx="35"
                                    cy="15"
                                    r="1"
                                    fill="#ffd700"
                                    opacity="0.7"
                                />
                            </svg>
                            {/* Sparkles animados alrededor del logo */}
                            {generateSparkles()}
                        </div>
                        <div className="logo-text">
                            <span className="logo-main">Casa</span>
                            <span className="logo-sub">Mariel</span>
                        </div>
                    </div>
                </Link>

                <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                    <Link to="/" className="nav-link" onClick={closeMenu}>
                        <span>Inicio</span>
                    </Link>

                    <div
                        className="nav-dropdown"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <Link to="/productos" className="nav-link">
                            <span>Productos</span>
                        </Link>

                        <div
                            className={`dropdown-content ${
                                isDropdownOpen ? "active" : ""
                            }`}
                        >
                            {categories.map((category, index) => (
                                <Link
                                    key={category.id}
                                    to={`/categoria/${category.id}`}
                                    className="dropdown-link"
                                    onClick={closeMenu}
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                        animation: isDropdownOpen
                                            ? "slideInLeft 0.3s ease forwards"
                                            : "none",
                                    }}
                                >
                                    <span className="dropdown-icon">
                                        {category.icon}
                                    </span>
                                    <span>{category.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link
                        to="/contacto"
                        className="nav-link"
                        onClick={closeMenu}
                    >
                        <span>Contacto</span>
                    </Link>

                    <div className="nav-actions">
                        <button
                            className="search-btn"
                            onClick={() => {
                                // Aquí puedes agregar la funcionalidad de búsqueda
                                console.log("Búsqueda activada");
                            }}
                            title="Buscar productos"
                        >
                            <Search size={20} />
                        </button>

                        <button
                            className="cart-btn"
                            onClick={toggleCart}
                            title={`Carrito (${getCartItemsCount()} productos)`}
                        >
                            <ShoppingCart size={20} />
                            {getCartItemsCount() > 0 && (
                                <span className="cart-count">
                                    {getCartItemsCount() > 99
                                        ? "99+"
                                        : getCartItemsCount()}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                <div className="nav-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>

            
            {/* Overlay para móvil - versión mejorada */}
            {isMenuOpen && (
                <div className="mobile-overlay" onClick={closeMenu} />
            )}
        </nav>
    );
};

// Agregar estilos para las animaciones de sparkles
const sparkleStyles = `
  @keyframes sparkle {
    0%, 100% { 
      opacity: 0.7; 
      transform: scale(1) rotate(0deg); 
    }
    50% { 
      opacity: 1; 
      transform: scale(1.2) rotate(180deg); 
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .sparkle-1 {
    animation-delay: 0s;
  }
  
  .sparkle-2 {
    animation-delay: 0.7s;
  }
  
  .sparkle-3 {
    animation-delay: 1.4s;
  }
`;

// Inyectar estilos adicionales
if (typeof document !== "undefined") {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = sparkleStyles;
    document.head.appendChild(styleSheet);
}

export default Navbar;
