import React, { useState } from "react";
import { Search, Filter, Grid, List } from "lucide-react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { products, categories } from "../../data/storeData";
import "./Products.css";

const Products = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [priceRange, setPriceRange] = useState("all");
    const [sortBy, setSortBy] = useState("name");
    const [viewMode, setViewMode] = useState("grid");
    const [showFilters, setShowFilters] = useState(false);

    // Filter products
    const filteredProducts = products
        .filter((product) => {
            const matchesSearch =
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            const matchesCategory =
                selectedCategory === "all" ||
                product.category === selectedCategory;
            const matchesPrice =
                priceRange === "all" ||
                (priceRange === "low" && product.price < 300) ||
                (priceRange === "medium" &&
                    product.price >= 300 &&
                    product.price < 800) ||
                (priceRange === "high" && product.price >= 800);

            return matchesSearch && matchesCategory && matchesPrice;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "name":
                    return a.name.localeCompare(b.name);
                case "price-low":
                    return a.price - b.price;
                case "price-high":
                    return b.price - a.price;
                default:
                    return 0;
            }
        });

    const priceRanges = [
        { value: "all", label: "Todos los precios" },
        { value: "low", label: "Menos de $300" },
        { value: "medium", label: "$300 - $800" },
        { value: "high", label: "Más de $800" },
    ];

    return (
        <div className="products-page">
            <div className="container">
                <div className="products-header">
                    <h1 className="page-title">Todos los Productos</h1>
                    <p className="page-subtitle">
                        Descubre nuestra amplia gama de productos para tu hogar
                    </p>
                </div>

                {/* Search and Controls */}
                <div className="products-controls">
                    <div className="search-bar">
                        <Search className="search-icon" size={20} />
                        <input
                            type="text"
                            placeholder="Buscar productos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>

                    <div className="controls-right">
                        <button
                            className="filter-toggle"
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            <Filter size={20} />
                            Filtros
                        </button>

                        <div className="view-toggle">
                            <button
                                className={`view-btn ${
                                    viewMode === "grid" ? "active" : ""
                                }`}
                                onClick={() => setViewMode("grid")}
                            >
                                <Grid size={20} />
                            </button>
                            <button
                                className={`view-btn ${
                                    viewMode === "list" ? "active" : ""
                                }`}
                                onClick={() => setViewMode("list")}
                            >
                                <List size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className={`filters-panel ${showFilters ? "active" : ""}`}>
                    <div className="filter-group">
                        <label>Categoría:</label>
                        <select
                            value={selectedCategory}
                            onChange={(e) =>
                                setSelectedCategory(e.target.value)
                            }
                        >
                            <option value="all">Todas las categorías</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group">
                        <label>Precio:</label>
                        <select
                            value={priceRange}
                            onChange={(e) => setPriceRange(e.target.value)}
                        >
                            {priceRanges.map((range) => (
                                <option key={range.value} value={range.value}>
                                    {range.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group">
                        <label>Ordenar por:</label>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="name">Nombre</option>
                            <option value="price-low">
                                Precio: Menor a Mayor
                            </option>
                            <option value="price-high">
                                Precio: Mayor a Menor
                            </option>
                        </select>
                    </div>
                </div>

                {/* Results Info */}
                <div className="results-info">
                    <span>{filteredProducts.length} productos encontrados</span>
                </div>

                {/* Products Grid */}
                <div className={`products-grid ${viewMode}`}>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                viewMode={viewMode}
                            />
                        ))
                    ) : (
                        <div className="no-products">
                            <p>
                                No se encontraron productos que coincidan con tu
                                búsqueda.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;
