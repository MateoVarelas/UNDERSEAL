# UNDERSEAL - Proyecto Web Clandestino

## Descripción del Proyecto

UNDERSEAL es un proyecto web que simula un mercado clandestino de productos de lujo, incluyendo:
- Mercado de coches de lujo
- Tienda de ropa exclusiva
- Casino clandestino
- Vault (bóveda de documentos clasificados)

## Estilo Visual

El proyecto utiliza un estilo oscuro y clandestino con las siguientes características:

### Paleta de Colores
- **Fondo primario**: #050505 - Negro profundo
- **Fondo secundario**: #0a0a0a - Gris muy oscuro
- **Rojo neón**: #ff1744 - Acento principal
- **Dorado**: #ffc107 - Color de lujo
- **Texto principal**: #e8e8e8 - Blanco suave

### Tipografías
- **Bebas Neue** - Títulos principales
- **Orbitron** - Encabezados
- **JetBrains Mono** - Texto monoespaciado

---

## Estructura de Archivos

```
UNDERSEAL/
├── Casino clandestino/
│   ├── underdeck.html    # Página principal del casino
│   ├── casino.css        # Estilos del casino
│   └── casino.js        # Funcionalidad JavaScript
│
├── Mercado de coches/
│   ├── index.html       # Catálogo de coches
│   ├── styles.css       # Estilos del mercado
│   ├── app.js          # Funcionalidad del mercado
│   └── imagenes/       # Imágenes de los coches
│
├── Ropa Underseal/
│   ├── index.html      # Tienda de ropa
│   ├── styles.css      # Estilos de la tienda
│   └── app.js         # Funcionalidad de la tienda
│
└── vault/
    ├── index.html      # Bóveda de documentos
    └── styles.css     # Estilos de la bóveda
```

---

## Página 1: Mercado de Coches de Lujo

### Características Principales

**Sistema de Acceso**
- Overlay de acceso con código de seguridad
- Contraseñas válidas: `UNDESEAL2024`, `VIPACCESS`, `CLANDESTINO`, `BLACKMARKET`
- Opción de acceso como invitado (bypass)

**Catálogo de Coches**
El mercado incluye 12 vehículos en 5 categorías:
1. **Superdeportivos**: Pagani Huayra, Ferrari Monza SP2, Bugatti Chiron
2. **Luxury Sedan**: Mercedes Maybach S680, Rolls Royce Phantom, Bentley Mulsanne
3. **SUV Premium**: Range Rover Autobiography, Mercedes G63 AMG
4. **Muscle Car**: Dodge Challenger SRT Hellcat, Ford Mustang Shelby GT500
5. **Clásicos**: Shelby Cobra 427, Ferrari 250 GTO

**Funcionalidades**
- Filtros por categoría, precio, año y procedencia
- Búsqueda en tiempo real
- Modal de detalles con especificaciones completas
- Sistema de comparación (hasta 3 vehículos)
- Animaciones y transiciones suaves

**Archivos**
- `index.html`: Estructura HTML con todas las secciones
- `styles.css`: 34,316 bytes de estilos CSS
- `app.js`: 26,363 bytes de JavaScript

---

## Página 2: Casino Clandestino (Underdeck)

### Características Principales

**Temática**
- Ambiente de casino ilegal estilo años 50-60
- Efectos de neón rojo y verde
- Diseño reminiscent de películas de mafia

**Secciones del Casino**
1. **Tragaperras**: Máquinas de Slots con temática clandestina
2. **Ruleta**: Juego de ruleta europea
3. **Blackjack**: Juego de cartas clásico
4. **Bar**: Acceso a bebidas premium

**Funcionalidades**
- Sistema de crédito virtual
- Jackpot progresivo
- Animaciones de luces neon
- Música de fondo (opcional)
- Efectos de sonido

**Archivos**
- `underdeck.html`: Estructura del casino
- `casino.css`: 50,218 bytes de estilos
- `casino.js`: 50,541 bytes de JavaScript

---

## Página 3: Ropa Underseal

### Características Principales

**Catálogo de Ropa**
- Ropa exclusiva de marca
- Diseño minimalista oscuro
- Efectos hover interactivos

**Categorías**
- Camisetas
- Sudaderas
- Accesorios
- Ediciones limitadas

**Funcionalidades**
- Carrito de compras
- Filtros por categoría
- Vista rápida de productos
- Diseño responsive

**Archivos**
- `index.html`: 9,374 bytes
- `styles.css`: 31,018 bytes
- `app.js`: 31,676 bytes

---

## Página 4: Vault (Bóveda)

### Características Principales

**Diseño**
- Estilo de documentos clasificados
- Efecto CRT/pantalla parpadeante
- Tema de hacker/espía

**Contenido**
- Documentos clasificados simulados
- Efecto de texto censurado
- Animaciones de scanlines

**Archivos**
- `index.html`: 13,619 bytes
- `styles.css`: 17,375 bytes

---

## Cómo Ejecutar el Proyecto

### Requisitos
- Navegador web moderno (Chrome, Firefox, Edge)
- Conexión a internet (para fuentes de Google)

### Pasos
1. Abrir cualquiera de los archivos `index.html` en un navegador
2. Para el Mercado de Coches, usar código de acceso o entrar como invitado
3. Navegar por las diferentes secciones

### Notas
- El proyecto funciona completamente en el cliente (sin servidor necesario)
- Algunas imágenes se cargan desde fuentes externas (Wikimedia Commons)
- El estado se guarda en localStorage del navegador

---

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS
- **JavaScript (ES6+)**: Funcionalidad interactiva
- **Google Fonts**: Tipografías externas

---

## Imágenes del Mercado de Coches

El directorio `imagenes/` contiene 12 imágenes de alta calidad:
- bentleymuslane.jpg
- bugattichiron.jpg
- dodgechallengerhellcat.jpg
- ferrari250gto.jpg
- ferrarimonza.jpg
- fordmustanggt500.jpg
- mercedesg63amg.jpg
- mercedesmaybach.jpg
- paganihuayra.jpg
- rangeroverautobiography.jpg
- rollsroycephantom.jpg
- shelbycobra427.jpg

---

## Personalización

### Cambiar Contraseñas
En `Mercado de coches/app.js`, buscar:
```javascript
const validCodes = ['UNDESEAL2024', 'VIPACCESS', 'CLANDESTINO', 'BLACKMARKET'];
```

### Añadir Nuevos Coches
En `Mercado de coches/app.js`, añadir objetos al array `carsDatabase`:
```javascript
{
    id: 13,
    name: "NOMBRE DEL COCHE",
    year: 2024,
    category: "categoria",
    price: 100000,
    km: 0,
    origin: "pais",
    engine: "motor",
    power: "CV",
    description: "descripcion",
    features: ["caracteristica1", "caracteristica2"],
    image: "ruta/imagen.jpg"
}
```

### Cambiar Colores
En los archivos CSS, modificar las variables CSS:
```css
:root {
    --accent-red: #ff1744;
    --accent-gold: #ffc107;
    --bg-primary: #050505;
}
```

---

## Soporte Técnico

Para problemas o preguntas:
- Revisar la consola del navegador (F12)
- Verificar conexión a internet (para fuentes y imágenes)
- Asegurarse de usar un navegador moderno

---

## Notas Legales

Este es un proyecto ficticio/demostrativo. No representa ningún negocio real. Todos los productos mostrados son ejemplos imaginarios.

---

**© 2024 UNDERSEAL - Todos los derechos reservados**
