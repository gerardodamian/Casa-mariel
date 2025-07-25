# Casa Mariel - Tienda de Muebles y Electrodomésticos

Una aplicación web moderna desarrollada en React para una tienda que vende muebles, artículos del hogar, electrodomésticos, bicicletas, electrónicos, audio y celulares.

## 🚀 Características

- **Página Principal**: Con carrusel de ofertas, categorías y información de la tienda
- **Catálogo Completo**: Vista de todos los productos con filtros y búsqueda
- **Categorías**: Navegación por categorías específicas (Muebles, Electrodomésticos, etc.)
- **Página de Contacto**: Formulario de contacto y información de la tienda
- **Diseño Responsivo**: Optimizado para móviles, tablets y escritorio
- **Integración WhatsApp**: Botones para contacto directo
- **Footer Completo**: Con enlaces, categorías e información de contacto

## 🛒 Categorías Disponibles

1. **Muebles** 🪑 - Sala, comedor, dormitorio y oficina
2. **Electrodomésticos** 🏠 - Refrigeradoras, lavadoras, cocinas
3. **Electrónicos** 📱 - TVs, computadoras, tablets
4. **Audio y Sonido** 🎵 - Equipos de sonido, parlantes, auriculares
5. **Celulares** 📱 - Smartphones y accesorios
6. **Bicicletas** 🚲 - Urbanas, deportivas y accesorios
7. **Artículos del Hogar** 🏡 - Decoración, textiles, accesorios

## 🔧 Instalación y Uso

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

1. Clona o descarga el proyecto
\`\`\`bash
cd muebleria
\`\`\`

2. Instala las dependencias
\`\`\`bash
npm install
\`\`\`

3. Inicia el servidor de desarrollo
\`\`\`bash
npm start
\`\`\`

4. Abre tu navegador en `http://localhost:3000`

## 📁 Estructura del Proyecto

\`\`\`
src/
├── components/          # Componentes reutilizables
│   ├── Navbar/         # Barra de navegación
│   ├── Footer/         # Pie de página
│   └── ProductCard/    # Tarjetas de productos
├── pages/              # Páginas principales
│   ├── Home/           # Página de inicio
│   ├── Products/       # Catálogo y categorías
│   └── Contact/        # Página de contacto
├── data/               # Datos de la aplicación
│   └── storeData.js    # Información de productos y tienda
└── App.js              # Componente principal
\`\`\`

## 🎨 Personalización

### Modificar Información de la Tienda

Edita el archivo \`src/data/storeData.js\` para cambiar:
- Nombre y datos de contacto de la tienda
- Dirección y horarios de atención
- Redes sociales
- Número de WhatsApp

### Agregar/Modificar Productos

En \`src/data/storeData.js\`, modifica el array \`products\` para:
- Agregar nuevos productos
- Cambiar precios e imágenes
- Actualizar descripciones y características

### Personalizar Ofertas

Modifica el array \`weeklyOffers\` para cambiar:
- Descuentos y promociones
- Imágenes de ofertas
- Textos promocionales

## 🌟 Funcionalidades Técnicas

- **React Router**: Navegación entre páginas
- **Responsive Design**: CSS Grid y Flexbox
- **Lucide Icons**: Iconografía moderna
- **Filtros y Búsqueda**: Sistema de filtrado avanzado
- **Carrusel de Ofertas**: Con navegación automática
- **Integración WhatsApp**: Enlaces directos para consultas

## 📱 Páginas Disponibles

1. **/** - Página de inicio con ofertas y categorías
2. **/productos** - Catálogo completo con filtros
3. **/categoria/:categoryId** - Productos por categoría
4. **/contacto** - Formulario de contacto e información

## 🎯 Próximas Mejoras

- [ ] Carrito de compras
- [ ] Sistema de usuarios
- [ ] Pasarela de pagos
- [ ] Panel de administración
- [ ] Sistema de inventario
- [ ] Notificaciones push

## 📞 Soporte

Para cualquier consulta o personalización, contacta a través de:
- WhatsApp: (configurado en storeData.js)
- Email: (configurado en storeData.js)

---

**Desarrollado con ❤️ usando React.js**
