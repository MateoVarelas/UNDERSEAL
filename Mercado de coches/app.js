/* ============================================
   UNDERSEAL - Mercado de Coches de Lujo
   JavaScript Interactivo
   ============================================ */

// ============================================
// DATOS DE COCHES (Base de datos simulada)
// ============================================
const carsDatabase = [
    {
        id: 1,
        name: "PAGANI HUAYRA",
        year: 2023,
        category: "supersport",
        price: 2850000,
        km: 1500,
        origin: "italia",
        engine: "V12 6.0 biturbo",
        power: "730 CV",
        description: "Obra maestra de la ingeniería italiana. Cada unidad requiere 6 meses de fabricación artesanal. Chasis de carbono y titanio.",
        features: ["Carbon Fiber Body", "Active Aerodynamics", "Launch Control", "Carbon Ceramic Brakes", "Brembo brakes", "Custom Exhaust"],
        image: "imagenes/paganihuayra.jpg",
    },
    {   
        id: 2,
        name: "FERRARI MONZA SP2",
        year: 2024,
        category: "supersport",
        price: 1950000,
        km: 0,
        origin: "italia",
        engine: "V12 6.5 atmosferico",
        power: "809 CV",
        description: "La última creación de Maranello. Solo 499 unidades fabricadas. Herencia de las Ferrari Monza de los años 50.",
        features: ["V12 Natural Aspirated", "0-100 2.9s", "Limited Edition", "Carbon Interior", "Driving Modes", "Side Mirrors Delete"],
        image: "imagenes/ferrarimonza.jpg",
    },
    {
        id: 3,
        name: "BUGATTI CHIRON SUPER SPORT",
        year: 2023,
        category: "supersport",
        price: 3500000,
        km: 2500,
        origin: "francia",
        engine: "W16 8.0 quad-turbo",
        power: "1600 CV",
        description: "El hypercar definitivo. Récord mundial de velocidad a 490 km/h. Producción limitada a 60 unidades.",
        features: ["W16 Engine", "Quad Turbo", "Carbon Fiber", "1600 Horsepower", "GPS Tracking", "Custom Paint Options"],
        image: "imagenes/bugattichiron.jpg",
    },
    {
        id: 4,
        name: "MERCEDES MAYBACH S680",
        year: 2024,
        category: "luxury",
        price: 385000,
        km: 0,
        origin: "alemania",
        engine: "V12 6.0 biturbo",
        power: "612 CV",
        description: "El símbolo definitivo de lujo alemán. Fabricación artesanal con los mejores materiales.",
        features: ["Premium Leather", "Rear Seat Entertainment", "Ambient Lighting", "Massage Seats", "Burmester Audio", "Chauffeur Package"],
        image: "imagenes/mercedesmaybach.jpg",
    },
    {
        id: 5,
        name: "ROLLS ROYCE PHANTOM",
        year: 2023,
        category: "luxury",
        price: 450000,
        km: 3500,
        origin: "reino-unido",
        engine: "V12 6.75 biturbo",
        power: "571 CV",
        description: "El coche más lujoso del mundo. Cada cliente tiene su propio gestor de relaciones personalizado.",
        features: ["Starlight Headliner", "Hand-Painted Coachline", "Premium Wood", "Folding Tables", "Cooler", "Individual Seats"],
        image: "imagenes/rollsroycephantom.jpg"
    },
    {
        id: 6,
        name: "BENTLEY MULSANNE SPEED",
        year: 2022,
        category: "luxury",
        price: 320000,
        km: 8500,
        origin: "reino-unido",
        engine: "V8 6.75 biturbo",
        power: "537 CV",
        description: "La combinación perfecta de rendimiento y elegancia británica. Producción final de una era.",
        features: ["Hand-Stitched Leather", "Wood Veneer", "Naim Audio", "Sports Suspension", "Sunroof", "Privacy Glass"],
        image: "imagenes/bentleymuslane.jpg"
    },
    {
        id: 7,
        name: "RANGE ROVER AUTOBIOGRAPHY",
        year: 2024,
        category: "suv",
        price: 195000,
        km: 0,
        origin: "reino-unido",
        engine: "V8 4.4 biturbo",
        power: "530 CV",
        description: "El SUV de lujo definitivo. Capacidad todo terreno sin sacrificar el confort máximo.",
        features: ["Air Suspension", "Terrain Response", "Panoramic Roof", "Leather Interior", "Third Row", "Tow Package"],
        image: "imagenes/rangeroverautobiography.jpg"
    },
    {
        id: 8,
        name: "MERCEDES G63 AMG",
        year: 2024,
        category: "suv",
        price: 225000,
        km: 1200,
        origin: "alemania",
        engine: "V8 4.0 biturbo",
        power: "585 CV",
        description: "El icono de los SUVs de lujo. Diseño icónico con rendimiento de superdeportivo.",
        features: ["AMG Performance", "Adaptive Suspension", "Carbon Package", "Night Package", "Off-Road Modes", "Differential Lock"],
        image: "imagenes/mercedesg63amg.jpg"
    },
    {
        id: 9,
        name: "DODGE CHALLENGER SRT HELLCAT",
        year: 2023,
        category: "muscle",
        price: 95000,
        km: 5000,
        origin: "usa",
        engine: "V8 6.2 supercharged",
        power: "717 CV",
        description: "El muscle car más extremo jamás fabricado. Pura potencia americana sin electrónicos.",
        features: ["Supercharged V8", "6-Speed Manual", "Line Lock", "Track Package", "Brembo Brakes", "SRT Performance Pages"],
        image: "imagenes/dodgechallengerhellcat.jpg"
    },
    {
        id: 10,
        name: "FORD MUSTANG SHELBY GT500",
        year: 2024,
        category: "muscle",
        price: 115000,
        km: 0,
        origin: "usa",
        engine: "V8 5.2 supercharged",
        power: "760 CV",
        description: "El Mustang más potente de la historia. Tecnología de avión de combate.",
        features: ["Magnesium Intake", "DCT Transmission", "Brembo Carbon", "Track Apps", "Launch Control", "Performance Exhaust"],
        image: "imagenes/fordmustanggt500.jpg",
    },
    {
        id: 11,
        name: "SHELBY COBRA 427",
        year: 1965,
        category: "classic",
        price: 1450000,
        km: 45000,
        origin: "usa",
        engine: "V8 7.0 atmosferico",
        power: "425 CV",
        description: "La leyenda original. Uno de los 31 supervivientes certificados. Documentación completa.",
        features: ["Original Engine", "Matching Numbers", "Factory Hardtop", "Leather Interior", "4-Speed Manual", "Race History"],
        image: "imagenes/shelbycobra427.jpg",
    },
    {
        id: 12,
        name: "FERRARI 250 GTO",
        year: 1962,
        category: "classic",
        price: 7500000,
        km: 72000,
        origin: "italia",
        engine: "V12 3.0",
        power: "300 CV",
        description: "El Ferrari más codiciado del mundo. Solo 36 unidades. Historia de motorsport imborrable.",
        features: ["Concours Condition", "Factory Original", "Tool Roll", "Books & Docs", "Race History", "Ferrari Classiche"],
        image: "imagenes/ferrari250gto.jpg"
    }
];

// ============================================
// ESTADO DE LA APLICACIÓN
// ============================================
let state = {
    cars: [...carsDatabase],
    filteredCars: [...carsDatabase],
    compareList: [],
    currentCategory: 'todos',
    currentView: 'grid',
    searchQuery: '',
    filters: {
        price: 'todos',
        year: 'todos',
        origin: 'todos'
    }
};

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Verificar acceso
    checkAccess();
    
    // Renderizar catálogo
    renderCars();
    
    // Inicializar event listeners
    setupEventListeners();
    
    // Inicializar carousel
    initCarousel();
}

// ============================================
// SISTEMA DE ACCESO
// ============================================
function checkAccess() {
    const access = localStorage.getItem('underseal_market_access');
    if (access === 'granted') {
        document.getElementById('accessOverlay').classList.add('hidden');
    }
}

function bypassAccess() {
    document.getElementById('accessOverlay').classList.add('hidden');
}

// Valid codes for access (simple validation with input sanitization)
// Note: For production, use server-side validation
const validCodes = ['UNDESEAL2024', 'VIPACCESS', 'CLANDESTINO', 'BLACKMARKET'];

function validateAccessCode(code) {
    // Input validation
    if (!code || typeof code !== 'string') {
        return false;
    }
    
    // Sanitize: trim whitespace, uppercase, limit length
    const sanitized = code.trim().toUpperCase();
    
    if (sanitized.length < 4 || sanitized.length > 20) {
        return false;
    }
    
    // Only allow alphanumeric characters
    if (!/^[A-Z0-9]+$/.test(sanitized)) {
        return false;
    }
    
    // Validate against valid codes
    return validCodes.includes(sanitized);
}

document.getElementById('accessForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const codeInput = document.getElementById('accessCode');
    const code = codeInput.value;
    
    if (validateAccessCode(code)) {
        localStorage.setItem('underseal_market_access', 'granted');
        showToast('✓ Acceso concedido', 'success');
        document.getElementById('accessOverlay').classList.add('hidden');
    } else {
        showToast('✗ Código inválido', 'error');
        codeInput.value = '';
    }
});

// ============================================
// SEGURIDAD - Funciones de sanitización
// ============================================

// Escape HTML para prevenir XSS
function escapeHtml(text) {
    if (text === null || text === undefined) {
        return '';
    }
    const div = document.createElement('div');
    div.textContent = String(text);
    return div.innerHTML;
}

// ============================================
// RENDERIZADO DEL CATÁLOGO
// ============================================
function renderCars() {
    const grid = document.getElementById('carsGrid');
    grid.innerHTML = '';
    
    const cars = state.filteredCars;
    
    if (cars.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <p>No se encontraron vehículos con los filtros seleccionados</p>
            </div>
        `;
        return;
    }
    
    cars.forEach(car => {
        const card = createCarCard(car);
        grid.appendChild(card);
    });
    
    // Actualizar contador
    document.getElementById('visibleCount').textContent = cars.length;
}

function createCarCard(car) {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.dataset.category = car.category;
    card.dataset.id = car.id;
    
    const isInCompare = state.compareList.includes(car.id);
    const compareActive = isInCompare ? 'active' : '';
    
    // Sanitize dynamic content to prevent XSS
    const safeName = escapeHtml(car.name);
    const safeCategory = escapeHtml(getCategoryLabel(car.category));
    const safeYear = escapeHtml(String(car.year));
    const safeKm = escapeHtml(formatNumber(car.km));
    const safePower = escapeHtml(car.power);
    const safeOrigin = escapeHtml(car.origin.toUpperCase());
    const safePrice = escapeHtml(formatPrice(car.price));
    
    card.innerHTML = `
        <div class="car-image">
            <img src="${car.image}" alt="${safeName}" class="car-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
            <span class="car-image-icon" style="display:none;">🚗</span>
            <span class="car-badge">${safeCategory}</span>
            <button class="car-compare ${compareActive}" onclick="toggleCompareCar(event, ${car.id})" title="Comparar">
                ⚖
            </button>
        </div>
        <div class="car-info">
            <h3 class="car-name">${safeName}</h3>
            <p class="car-year">${safeYear}</p>
            <div class="car-specs">
                <div class="car-spec">
                    <span class="car-spec-label">KMS</span>
                    <span class="car-spec-value">${safeKm} km</span>
                </div>
                <div class="car-spec">
                    <span class="car-spec-label">POT</span>
                    <span class="car-spec-value">${safePower}</span>
                </div>
                <div class="car-spec">
                    <span class="car-spec-label">ORIG</span>
                    <span class="car-spec-value">${safeOrigin}</span>
                </div>
            </div>
            <div class="car-footer">
                <span class="car-price">€${safePrice}</span>
                <button class="car-action" onclick="openCarModal(${car.id})">VER DETALLES</button>
            </div>
        </div>
    `;
    
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.car-compare') && !e.target.closest('.car-action')) {
            openCarModal(car.id);
        }
    });
    
    return card;
}

// ============================================
// MODAL DE DETALLES
// ============================================
function openCarModal(carId) {
    const car = state.cars.find(c => c.id === carId);
    if (!car) return;
    
    const modal = document.getElementById('carModal');
    
    // Llenar datos
    document.getElementById('modalImage').innerHTML = `<img src="${car.image}" alt="${car.name}" class="modal-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span class="placeholder-icon" style="display:none;">🚗</span>`;
    document.getElementById('modalBadge').textContent = getCategoryLabel(car.category);
    document.getElementById('modalTitle').textContent = car.name;
    document.getElementById('modalPrice').textContent = `€${formatPrice(car.price)}`;
    document.getElementById('modalYear').textContent = car.year;
    document.getElementById('modalKm').textContent = `${formatNumber(car.km)} km`;
    document.getElementById('modalOrigin').textContent = car.origin.toUpperCase();
    document.getElementById('modalEngine').textContent = car.engine.toUpperCase();
    document.getElementById('modalPower').textContent = car.power;
    document.getElementById('modalDesc').textContent = car.description;
    
    // Features
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = car.features.map(f => `<li>${f}</li>`).join('');
    
    // Mostrar modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('carModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Cerrar modal con Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closeCompare();
    }
});

// ============================================
// SISTEMA DE COMPARACIÓN
// ============================================
function toggleCompareCar(event, carId) {
    event.stopPropagation();
    
    const index = state.compareList.indexOf(carId);
    
    if (index === -1) {
        if (state.compareList.length >= 3) {
            showToast('Máximo 3 vehículos para comparar', 'error');
            return;
        }
        state.compareList.push(carId);
        showToast('Añadido al comparador', 'success');
    } else {
        state.compareList.splice(index, 1);
        showToast('Eliminado del comparador', 'success');
    }
    
    // Actualizar UI
    renderCars();
    updateCompareList();
    updateCompareButton();
}

function updateCompareList() {
    const list = document.getElementById('compareList');
    
    if (state.compareList.length === 0) {
        list.innerHTML = '<div class="empty-cart"><span>Sin vehículos para comparar</span></div>';
        return;
    }
    
    list.innerHTML = state.compareList.map(id => {
        const car = state.cars.find(c => c.id === id);
        if (!car) return '';
        
        return `
            <div class="cart-item">
                <img src="${car.image}" alt="${car.name}" class="cart-item-img" onerror="this.style.display='none';">
                <span class="cart-item-icon" style="display:none;">🚗</span>
                <div class="cart-item-info">
                    <div class="cart-item-name">${car.name}</div>
                    <div class="cart-item-price">€${formatPrice(car.price)}</div>
                </div>
                <button class="cart-item-remove" onclick="toggleCompareCar(event, ${car.id})">×</button>
            </div>
        `;
    }).join('');
}

function updateCompareButton() {
    const btn = document.querySelector('.compare-btn');
    btn.disabled = state.compareList.length < 2;
    btn.style.opacity = state.compareList.length < 2 ? '0.5' : '1';
}

function toggleCart() {
    const cart = document.getElementById('floatingCart');
    cart.classList.toggle('active');
}

function compareCars() {
    if (state.compareList.length < 2) {
        showToast('Selecciona al menos 2 vehículos', 'error');
        return;
    }
    
    const compareModal = document.getElementById('compareModal');
    const table = document.getElementById('compareTable');
    
    const cars = state.compareList.map(id => state.cars.find(c => c.id === id));
    
    // Headers
    let html = `
        <div class="compare-row">
            <div class="compare-cell header"></div>
            ${cars.map(car => `
                <div class="compare-cell car-header">
                    <div class="car-icon"><img src="${car.image}" alt="${car.name}" class="compare-thumb" onerror="this.style.display='none';"></div>
                    <div class="car-name">${car.name}</div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Filas de comparación
    const specs = [
        { label: 'PRECIO', key: 'price', format: (v) => `€${formatPrice(v)}` },
        { label: 'AÑO', key: 'year' },
        { label: 'KILOMETRAJE', key: 'km', format: (v) => `${formatNumber(v)} km` },
        { label: 'PROCEDENCIA', key: 'origin', format: (v) => v.toUpperCase() },
        { label: 'MOTOR', key: 'engine', format: (v) => v.toUpperCase() },
        { label: 'POTENCIA', key: 'power' },
        { label: 'CATEGORÍA', key: 'category', format: (v) => getCategoryLabel(v) }
    ];
    
    specs.forEach(spec => {
        html += `
            <div class="compare-row">
                <div class="compare-cell header title">${spec.label}</div>
                ${cars.map(car => {
                    const value = spec.format ? spec.format(car[spec.key]) : car[spec.key];
                    return `<div class="compare-cell value">${value}</div>`;
                }).join('')}
            </div>
        `;
    });
    
    table.innerHTML = html;
    compareModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCompare() {
    document.getElementById('compareModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ============================================
// FILTROS Y BÚSQUEDA
// ============================================
function setupEventListeners() {
    // Categorías
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.currentCategory = btn.dataset.category;
            applyFilters();
        });
    });
    
    // Filtros
    document.getElementById('priceFilter').addEventListener('change', (e) => {
        state.filters.price = e.target.value;
        applyFilters();
    });
    
    document.getElementById('yearFilter').addEventListener('change', (e) => {
        state.filters.year = e.target.value;
        applyFilters();
    });
    
    document.getElementById('originFilter').addEventListener('change', (e) => {
        state.filters.origin = e.target.value;
        applyFilters();
    });
    
    // Búsqueda
    document.getElementById('searchInput').addEventListener('input', (e) => {
        state.searchQuery = e.target.value.toLowerCase();
        applyFilters();
    });
    
    // Vista
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.currentView = btn.dataset.view;
            updateView();
        });
    });
    
    // Navegación
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            scrollToSection(section);
            
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

function applyFilters() {
    let filtered = [...state.cars];
    
    // Categoría
    if (state.currentCategory !== 'todos') {
        filtered = filtered.filter(car => car.category === state.currentCategory);
    }
    
    // Búsqueda
    if (state.searchQuery) {
        filtered = filtered.filter(car => 
            car.name.toLowerCase().includes(state.searchQuery) ||
            car.description.toLowerCase().includes(state.searchQuery)
        );
    }
    
    // Precio
    if (state.filters.price !== 'todos') {
        const [min, max] = state.filters.price.split('-').map(Number);
        if (max) {
            filtered = filtered.filter(car => car.price >= min && car.price <= max);
        } else {
            filtered = filtered.filter(car => car.price >= min);
        }
    }
    
    // Año
    if (state.filters.year !== 'todos') {
        filtered = filtered.filter(car => {
            if (state.filters.year === 'antiguo') {
                return car.year < 2000;
            }
            return car.year.toString() === state.filters.year;
        });
    }
    
    // Procedencia
    if (state.filters.origin !== 'todos') {
        filtered = filtered.filter(car => car.origin === state.filters.origin);
    }
    
    state.filteredCars = filtered;
    renderCars();
}

function updateView() {
    const grid = document.getElementById('carsGrid');
    
    if (state.currentView === 'list') {
        grid.style.gridTemplateColumns = '1fr';
    } else {
        grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(320px, 1fr))';
    }
}

// ============================================
// NAVEGACIÓN
// ============================================
function scrollToCatalog() {
    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// CAROUSEL HERO
// ============================================
function initCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    let current = 0;
    
    setInterval(() => {
        items.forEach(item => item.classList.remove('active'));
        current = (current + 1) % items.length;
        items[current].classList.add('active');
    }, 3000);
}

// ============================================
// ACCIONES
// ============================================
function inquireCar() {
    showToast('Solicitud enviada. Te contactaremos en breve.', 'success');
    closeModal();
}

function addToCompare() {
    const title = document.getElementById('modalTitle').textContent;
    const car = state.cars.find(c => c.name === title);
    if (car) {
        toggleCompareCar({ stopPropagation: () => {} }, car.id);
    }
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${type === 'success' ? '✓' : '✗'}</span>
        <span class="toast-message">${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ============================================
// UTILIDADES
// ============================================
function formatPrice(price) {
    return price.toLocaleString('es-ES');
}

function formatNumber(num) {
    return num.toLocaleString('es-ES');
}

function getCategoryLabel(category) {
    const labels = {
        'supersport': 'SUPERDEPORTIVO',
        'luxury': 'LUXURY SEDAN',
        'suv': 'SUV PREMIUM',
        'muscle': 'MUSCLE CAR',
        'classic': 'CLÁSICO'
    };
    return labels[category] || category.toUpperCase();
}

// Actualizar contador del carrito
function updateCartCount() {
    const count = document.querySelector('.cart-count');
    count.textContent = state.compareList.length;
}

// Exportar funciones globales
window.bypassAccess = bypassAccess;
window.openCarModal = openCarModal;
window.closeModal = closeModal;
window.toggleCompareCar = toggleCompareCar;
window.toggleCart = toggleCart;
window.compareCars = compareCars;
window.closeCompare = closeCompare;
window.inquireCar = inquireCar;
window.addToCompare = addToCompare;
window.scrollToCatalog = scrollToCatalog;
