import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products, categories } from '../../data/storeData';
import './ProductsByCategory.css';

const ProductsByCategory = () => {
  const { categoryId } = useParams();
  
  const category = categories.find(cat => cat.id === categoryId);
  const categoryProducts = products.filter(product => product.category === categoryId);

  if (!category) {
    return (
      <div className="category-page">
        <div className="container">
          <div className="category-not-found">
            <h1>Categoría no encontrada</h1>
            <Link to="/productos" className="btn btn-primary">
              Ver todos los productos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="category-page">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Inicio</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/productos" className="breadcrumb-link">Productos</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{category.name}</span>
        </div>

        {/* Category Header */}
        <div className="category-header">
          <Link to="/productos" className="back-btn">
            <ArrowLeft size={20} />
            Volver a productos
          </Link>
          
          <div className="category-hero">
            <div className="category-hero-content">
              <div className="category-icon-large">{category.icon}</div>
              <h1 className="category-title">{category.name}</h1>
              <p className="category-description">{category.description}</p>
              <div className="category-stats">
                <span className="product-count">
                  {categoryProducts.length} producto{categoryProducts.length !== 1 ? 's' : ''} disponible{categoryProducts.length !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
            <div className="category-hero-image">
              <img src={category.image} alt={category.name} />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {categoryProducts.length > 0 ? (
          <div className="category-products">
            <div className="products-grid">
              {categoryProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ) : (
          <div className="no-products">
            <div className="no-products-content">
              <div className="no-products-icon">📦</div>
              <h3>No hay productos en esta categoría</h3>
              <p>Pronto agregaremos más productos a esta categoría.</p>
              <Link to="/productos" className="btn btn-primary">
                Ver todos los productos
              </Link>
            </div>
          </div>
        )}

        {/* Related Categories */}
        <div className="related-categories">
          <h2 className="section-title">Otras Categorías</h2>
          <div className="related-grid">
            {categories
              .filter(cat => cat.id !== categoryId)
              .slice(0, 3)
              .map(category => (
                <Link 
                  key={category.id}
                  to={`/categoria/${category.id}`}
                  className="related-category-card"
                >
                  <div className="related-image">
                    <img src={category.image} alt={category.name} />
                  </div>
                  <div className="related-content">
                    <span className="related-icon">{category.icon}</span>
                    <h3>{category.name}</h3>
                    <p>{products.filter(p => p.category === category.id).length} productos</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsByCategory;
