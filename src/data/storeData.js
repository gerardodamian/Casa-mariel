export const storeInfo = {
  name: "Casa Mariel",
  slogan: "Todo lo que necesitas para tu hogar",
  address: "Av. Principal 123, Ciudad, País",
  phone: "+54 9 3517181975",
  whatsappNumber: "3517181975",
  email: "info@casayhogar.com",
  location: {
    lat: -33.4489,
    lng: -70.6693
  },
  hours: {
    "Lunes": "9:00 - 19:00",
    "Martes": "9:00 - 19:00", 
    "Miércoles": "9:00 - 19:00",
    "Jueves": "9:00 - 19:00",
    "Viernes": "9:00 - 20:00",
    "Sábado": "9:00 - 20:00",
    "Domingo": "10:00 - 18:00"
  },
  socialMedia: {
    facebook: "https://facebook.com/casayhogar",
    instagram: "https://instagram.com/casayhogar",
    whatsapp: "https://wa.me/3517181975"
  }
};

export const categories = [
  {
    id: 'muebles',
    name: 'Muebles',
    icon: '🪑',
    description: 'Muebles para sala, comedor, dormitorio y oficina',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop'
  },
  {
    id: 'electrodomesticos',
    name: 'Electrodomésticos',
    icon: '🏠',
    description: 'Refrigeradoras, lavadoras, cocinas y más',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop'
  },
  {
    id: 'electronica',
    name: 'Electrónica',
    icon: '📱',
    description: 'Televisores, computadoras, tablets y accesorios',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop'
  },
  {
    id: 'sonido',
    name: 'Audio y Sonido',
    icon: '🎵',
    description: 'Equipos de sonido, parlantes y auriculares',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop'
  },
  {
    id: 'celulares',
    name: 'Celulares',
    icon: '📱',
    description: 'Smartphones y accesorios',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop'
  },
  {
    id: 'bicicletas',
    name: 'Bicicletas',
    icon: '🚲',
    description: 'Bicicletas urbanas, deportivas y accesorios',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
  },
  {
    id: 'hogar',
    name: 'Artículos del Hogar',
    icon: '🏡',
    description: 'Decoración, textiles y accesorios para el hogar',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop'
  }
];

export const products = [
  // Muebles
  {
    id: 1,
    name: 'Sofá Moderno 3 Plazas',
    category: 'muebles',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
    description: 'Sofá cómodo y elegante perfecto para tu sala de estar',
    features: ['Tapizado en tela resistente', 'Estructura de madera', 'Cojines extraíbles']
  },
  {
    id: 2,
    name: 'Mesa de Comedor 6 Personas',
    category: 'muebles',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop',
    description: 'Mesa de comedor moderna para 6 personas',
    features: ['Madera maciza', 'Acabado resistente', 'Fácil mantenimiento']
  },
  {
    id: 3,
    name: 'Cama Queen Size',
    category: 'muebles',
    price: 749.99,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop',
    description: 'Cama matrimonial con cabecera tapizada',
    features: ['Incluye base', 'Cabecera acolchada', 'Estructura resistente']
  },
  // Electrodomésticos
  {
    id: 4,
    name: 'Refrigeradora 350L',
    category: 'electrodomesticos',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop',
    description: 'Refrigeradora con freezer y tecnología inverter',
    features: ['Capacidad 350L', 'Eficiencia energética A+', 'No Frost']
  },
  {
    id: 5,
    name: 'Lavadora 8kg',
    category: 'electrodomesticos',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&h=300&fit=crop',
    description: 'Lavadora automática de carga frontal',
    features: ['Capacidad 8kg', '12 programas de lavado', 'Eficiencia energética A++']
  },
  {
    id: 6,
    name: 'Microondas 25L',
    category: 'electrodomesticos',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=300&fit=crop',
    description: 'Microondas con grill y múltiples funciones',
    features: ['Capacidad 25L', 'Función grill', 'Panel digital']
  },
  // Electrónica
  {
    id: 7,
    name: 'Smart TV 55"',
    category: 'electronica',
    price: 1599.99,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop',
    description: 'Televisor Smart 4K con Android TV',
    features: ['Pantalla 55" 4K', 'Android TV', 'HDR', 'WiFi integrado']
  },
  {
    id: 8,
    name: 'Laptop Gaming',
    category: 'electronica',
    price: 2299.99,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
    description: 'Laptop para gaming con tarjeta gráfica dedicada',
    features: ['Intel i7', '16GB RAM', 'GTX 1660Ti', 'SSD 512GB']
  },
  // Audio y Sonido
  {
    id: 9,
    name: 'Equipo de Sonido Bluetooth',
    category: 'sonido',
    price: 449.99,
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    description: 'Sistema de audio con conexión Bluetooth',
    features: ['Potencia 200W', 'Bluetooth 5.0', 'USB/SD', 'Radio FM']
  },
  {
    id: 10,
    name: 'Auriculares Inalámbricos',
    category: 'sonido',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop',
    description: 'Auriculares con cancelación de ruido',
    features: ['Cancelación activa de ruido', 'Batería 30h', 'Carga rápida']
  },
  // Celulares
  {
    id: 11,
    name: 'Smartphone 128GB',
    category: 'celulares',
    price: 699.99,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
    description: 'Smartphone con cámara triple y 5G',
    features: ['Pantalla 6.5"', 'Cámara 48MP', '128GB almacenamiento', 'Conectividad 5G']
  },
  {
    id: 12,
    name: 'Tablet 10"',
    category: 'celulares',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop',
    description: 'Tablet con pantalla HD y WiFi',
    features: ['Pantalla 10" HD', '64GB almacenamiento', 'WiFi', 'Batería larga duración']
  },
  // Bicicletas
  {
    id: 13,
    name: 'Bicicleta Urbana',
    category: 'bicicletas',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    description: 'Bicicleta ideal para la ciudad',
    features: ['21 velocidades', 'Frenos de disco', 'Luces LED', 'Canasta incluida']
  },
  {
    id: 14,
    name: 'Bicicleta de Montaña',
    category: 'bicicletas',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1544191696-15282e169fb8?w=400&h=300&fit=crop',
    description: 'Bicicleta resistente para terrenos difíciles',
    features: ['Suspensión delantera', '27 velocidades', 'Cuadro de aluminio', 'Neumáticos todo terreno']
  },
  // Artículos del Hogar
  {
    id: 15,
    name: 'Set de Cortinas',
    category: 'hogar',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
    description: 'Cortinas blackout para dormitorio',
    features: ['Tela blackout', 'Fácil instalación', 'Lavable en máquina', 'Varios colores']
  },
  {
    id: 16,
    name: 'Lámpara de Mesa',
    category: 'hogar',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=300&fit=crop',
    description: 'Lámpara moderna con base de madera',
    features: ['Base de madera', 'Pantalla de tela', 'Interruptor en cable', 'Bombilla LED incluida']
  }
];

export const weeklyOffers = [
  {
    id: 1,
    title: "Muebles de Sala",
    subtitle: "Renueva tu hogar",
    discount: "30% OFF",
    description: "Encuentra los mejores muebles para tu sala con increíbles descuentos",
    validUntil: "Válido hasta fin de mes",
    bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Electrodomésticos",
    subtitle: "Tecnología para tu hogar",
    discount: "25% OFF",
    description: "Los mejores electrodomésticos con la última tecnología",
    validUntil: "Oferta limitada",
    bgColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Electrónicos",
    subtitle: "Lo último en tecnología",
    discount: "20% OFF",
    description: "Smart TVs, laptops y más con grandes descuentos",
    validUntil: "Por tiempo limitado",
    bgColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=400&fit=crop"
  }
];
