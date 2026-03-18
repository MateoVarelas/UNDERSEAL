/* ============================================
   UNDERSEAL - App JavaScript
   ============================================ */

// ============================================
// DATOS DE PRODUCTOS
// ============================================
const products = [
    // CAMISETAS OVERSIZE
    {
        id: 1,
        name: "UNDERSIGNAL TEE",
        type: "camiseta",
        price: 35,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        badge: null,
        description: "Camiseta oversize de algodón orgánico 250g. Diseño minimalista con logo bordado en espalda. Corte extralargo.",
        serial: "U13-7X",
        collection: "OVERSIZED"
    },
    {
        id: 2,
        name: "UNDECLASSIFIED TEE",
        type: "camiseta",
        price: 39,
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=800&fit=crop",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        badge: "Nuevo",
        description: "Tejido premium heavyweight. Estampado en pecho y espalda. Cuello reforzado.",
        collection: "OVERSIZED"
    },
    {
        id: 3,
        name: "GHOST PROTOCOL TEE",
        type: "camiseta",
        price: 38,
        image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&h=800&fit=crop",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        badge: null,
        description: "Tejido técnico transpirable. Diseño reflectante. Corte boyfriend oversize.",
        collection: "OVERSIZED"
    },
    {
        id: 4,
        name: "BLIND SPOT TEE",
        type: "camiseta",
        price: 32,
        image: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=600&h=800&fit=crop",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        badge: "Best Seller",
        description: "Corte oversize vero. Algodón peinado de alta calidad. Logo en nuca.",
        collection: "OVERSIZED"
    },
    // SUDADERAS OVERSIZE
    {
        id: 5,
        name: "UNDERCORE HOODIE",
        type: "sudadera",
        price: 89,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        badge: null,
        description: "Sudadera oversize extragrande. Bolsillo canguro profundo. Capucha doble. Algodón heaviest 400g.",
        serial: "VIN-99",
        collection: "OVERSIZED"
    },
    {
        id: 6,
        name: "UNDEREAL CORE HOODIE",
        type: "sudadera",
        price: 95,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        badge: "Edición Limitada",
        description: "Sudadera de felpa suave premium. Logo bordado en ambos brazos. Puños y cintura ribeteados.",
        collection: "OVERSIZED"
    },
    {
        id: 7,
        name: "BLACKOUT PULLOVER",
        type: "sudadera",
        price: 82,
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=800&fit=crop",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        badge: null,
        description: "Tejido resistente al agua. Capucha reforzada oversize. Acabado mate.",
        collection: "OVERSIZED"
    },
    {
        id: 8,
        name: "SHADOW CREW OVERSIZE",
        type: "sudadera",
        price: 88,
        image: "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=600&h=800&fit=crop",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        badge: null,
        description: "Corte crewneck oversize. Cierre asimétrico. Bolsillos ocultos con cremallera.",
        collection: "OVERSIZED"
    },
    // CHANDALS OVERSIZE
    {
        id: 9,
        name: "UNDERTECH TRACKSUIT",
        type: "chandal",
        price: 129,
        image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600&h=800&fit=crop",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        badge: null,
        description: "Chandal oversize completo. Pantalón amplio con cordón ajuste. Chaqueta con cremallera frontal.",
        collection: "OVERSIZED"
    },
    {
        id: 10,
        name: "SHADOW RUN SUIT",
        type: "chandal",
        price: 145,
        image: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=600&h=800&fit=crop",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        badge: "Nuevo",
        description: "Chandal técnico oversize. Tejido anti-viento. Detalles reflectantes. Perfecto para running urbano.",
        collection: "OVERSIZED"
    },
    {
        id: 11,
        name: "NIGHT OPS SUIT",
        type: "chandal",
        price: 155,
        image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=800&fit=crop",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        badge: null,
        description: "Chandal de lujo oversize. Tejido stretch 4-way. Cierre de botones ocultos. Logo bordado.",
        collection: "OVERSIZED"
    },
    {
        id: 12,
        name: "GHOST MOVEMENT SUIT",
        type: "chandal",
        price: 139,
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=800&fit=crop",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        badge: "Best Seller",
        description: "Chandal oversize relax. Tejido suave terciopelo. Elástica con cordón. Lavado fácil.",
        collection: "OVERSIZED"
    }
];

// ============================================
// ESTADO DE LA APP
// ============================================
let cart = JSON.parse(localStorage.getItem('underseal_cart')) || [];
let currentFilter = 'all';
let selectedSize = null;
let selectedQuantity = 1;
let selectedProduct = null;

// Terminal state - Sistema de hacking oculto
let terminalUser = null;
let terminalLevel = 0;
let userAlias = 'guest';
let hackProgress = 0;
let discoveredCommands = ['help'];
let bruteforceAttempts = 0;
let systemCompromised = false;

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    updateCartCount();
    setupEventListeners();
    setupTerminal();
});

// ============================================
// RENDERIZADO DE PRODUCTOS
// ============================================
function renderProducts(productsToRender) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = productsToRender.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-type">${product.type}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price}€</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Añadir</button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add click listeners to product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('add-to-cart-btn')) {
                const productId = parseInt(card.dataset.id);
                openProductModal(productId);
            }
        });
    });
}

// ============================================
// FILTROS
// ============================================
function filterProducts(type) {
    currentFilter = type;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === type);
    });
    
    // Filter products
    const filtered = type === 'all' 
        ? products 
        : products.filter(p => p.type === type);
    
    renderProducts(filtered);
}

// ============================================
// CARRITO
// ============================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
            size: null
        });
    }
    
    saveCart();
    updateCartCount();
    showToast(`${product.name} añadido al carrito`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCartItems();
    updateCartTotals();
}

function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            renderCartItems();
            updateCartTotals();
        }
    }
}

function saveCart() {
    localStorage.setItem('underseal_cart', JSON.stringify(cart));
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function renderCartItems() {
    const container = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        container.innerHTML = '<p class="cart-empty">Tu carrito está vacío</p>';
        return;
    }
    
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p class="cart-item-price">${item.price}€</p>
            </div>
            <div class="cart-item-quantity">
                <button onclick="updateCartQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateCartQuantity(${item.id}, 1)">+</button>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">&times;</button>
        </div>
    `).join('');
}

function updateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 5 : 0;
    const total = subtotal + shipping;
    
    document.getElementById('subtotal').textContent = `${subtotal.toFixed(2)} EUR`;
    document.getElementById('shipping').textContent = `${shipping.toFixed(2)} EUR`;
    document.getElementById('total').textContent = `${total.toFixed(2)} EUR`;
    document.getElementById('checkoutTotal').textContent = `${total.toFixed(2)} EUR`;
}

// ============================================
// MODAL DE PRODUCTO
// ============================================
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    selectedProduct = product;
    selectedSize = null;
    selectedQuantity = 1;
    
    const modal = document.getElementById('productModal');
    const detail = document.getElementById('productDetail');
    
    detail.innerHTML = `
        <div class="product-detail-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-detail-info">
            <h2 class="product-detail-name">${product.name}</h2>
            <p class="product-detail-type">${product.type} | ${product.collection || 'OVERSIZED'}</p>
            <p class="product-detail-price">${product.price}€</p>
            <p class="product-detail-description">${product.description}</p>
            ${product.serial ? `<p class="product-serial">Serial: ${product.serial}</p>` : ''}
            
            <div class="size-selector">
                <label>Talla</label>
                <div class="size-options">
                    ${product.sizes.map(size => `
                        <button class="size-btn" data-size="${size}">${size}</button>
                    `).join('')}
                </div>
            </div>
            
            <div class="quantity-selector">
                <label>Cantidad</label>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(-1)">-</button>
                    <span class="quantity-value" id="quantityValue">1</span>
                    <button class="quantity-btn" onclick="updateQuantity(1)">+</button>
                </div>
            </div>
            
            <button class="add-to-cart-btn-large" onclick="addSelectedToCart()">
                Añadir al Carrito
            </button>
        </div>
    `;
    
    // Add size selection listeners
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedSize = btn.dataset.size;
        });
    });
    
    modal.classList.add('active');
}

function updateQuantity(change) {
    selectedQuantity = Math.max(1, selectedQuantity + change);
    document.getElementById('quantityValue').textContent = selectedQuantity;
}

function addSelectedToCart() {
    if (!selectedProduct) return;
    
    // Add multiple items based on quantity
    for (let i = 0; i < selectedQuantity; i++) {
        const existingItem = cart.find(item => item.id === selectedProduct.id);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({
                id: selectedProduct.id,
                name: selectedProduct.name,
                price: selectedProduct.price,
                image: selectedProduct.image,
                quantity: 1,
                size: selectedSize
            });
        }
    }
    
    saveCart();
    updateCartCount();
    closeModal('productModal');
    showToast(`${selectedProduct.name} añadido al carrito`);
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => filterProducts(btn.dataset.filter));
    });
    
    // Cart button
    document.getElementById('cartBtn').addEventListener('click', () => {
        renderCartItems();
        updateCartTotals();
        document.getElementById('cartSidebar').classList.add('active');
        document.getElementById('cartOverlay').classList.add('active');
    });
    
    // Cart close
    document.getElementById('cartClose').addEventListener('click', () => {
        document.getElementById('cartSidebar').classList.remove('active');
        document.getElementById('cartOverlay').classList.remove('active');
    });
    
    document.getElementById('cartOverlay').addEventListener('click', () => {
        document.getElementById('cartSidebar').classList.remove('active');
        document.getElementById('cartOverlay').classList.remove('active');
    });
    
    // Modal close
    document.getElementById('modalClose').addEventListener('click', () => {
        closeModal('productModal');
    });
    
    // Checkout
    document.getElementById('checkoutBtn').addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('El carrito está vacío');
            return;
        }
        document.getElementById('cartSidebar').classList.remove('active');
        document.getElementById('checkoutModal').classList.add('active');
    });
    
    document.getElementById('checkoutClose').addEventListener('click', () => {
        closeModal('checkoutModal');
    });
    
    // Checkout form
    document.getElementById('checkoutForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('¡Pedido realizado con éxito!');
        cart = [];
        saveCart();
        updateCartCount();
        closeModal('checkoutModal');
    });
    
    // Contact form
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('contactForm').style.display = 'none';
        document.getElementById('contactSuccess').style.display = 'block';
    });
    
    // Secret link
    document.getElementById('secretLink').addEventListener('click', (e) => {
        e.preventDefault();
        openTerminal();
    });
    
    // Logo click
    document.getElementById('logo').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Modal overlay click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
}

// ============================================
// TERMINAL - SISTEMA DE HACKEO
// ============================================

var HACK_TARGETS = {
    '192.168.1.25': { name: 'UNDERDECK CASINO', password: 'UNDERS3AL', url: '../Casino clandestino/underdeck.html' },
    '192.168.1.47': { name: 'MERCADO DE COCHES', password: 'GHOST2024', url: '../Mercado de coches/index.html' },
    '192.168.1.99': { name: 'BÓVEDA UNDERSEAL', password: 'ARCHITECT', url: '../vault/index.html' }
};

var currentTarget = null;
var waitingForPassword = false;
var decodeInterval = null;
var networkScanned = false;

function setupTerminal() {
    var commandInput = document.getElementById('terminalCommand');
    if (!commandInput) return;
    
    commandInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            executeCommand(commandInput.value);
            commandInput.value = '';
        }
    });
}

function openTerminal() {
    var modal = document.getElementById('terminalModal');
    if (!modal) return;
    
    modal.classList.add('active');
    var output = document.getElementById('terminalOutput');
    if (output) output.innerHTML = '';
    
    addTerminalOutput('═══════════════════════════════════════', 'info');
    addTerminalOutput('     TERMINAL DE HACKEO', 'info');
    addTerminalOutput('═══════════════════════════════════════', 'info');
    addTerminalOutput('', 'output');
    addTerminalOutput('Escribe "scan" para buscar sistemas.', 'info');
    
    currentTarget = null;
    waitingForPassword = false;
    networkScanned = false;
    
    setTimeout(function() {
        var input = document.getElementById('terminalCommand');
        if (input) input.focus();
    }, 100);
}

function closeTerminal() {
    var modal = document.getElementById('terminalModal');
    if (modal) modal.classList.remove('active');
    currentTarget = null;
    waitingForPassword = false;
    if (decodeInterval) clearInterval(decodeInterval);
}

function addTerminalOutput(text, type) {
    type = type || 'output';
    var output = document.getElementById('terminalOutput');
    if (output) {
        output.innerHTML += '<div class="terminal-line ' + type + '">' + text + '</div>';
        output.scrollTop = output.scrollHeight;
    }
}

function executeCommand(cmd) {
    var command = cmd.trim().toLowerCase();
    addTerminalOutput('> ' + cmd, 'command');
    
    // Comandos especiales que funcionan siempre
    if (command === 'hack' || command === 'decode' || command === 'crack') {
        startDecoder();
        return;
    }
    
    // Si esperamos password
    if (waitingForPassword && currentTarget) {
        checkPassword(cmd);
        return;
    }
    
    if (command === 'scan' || command === 'nmap' || command === 'ls') {
        scanNetwork();
    }
    else if (command === 'clear' || command === 'cls') {
        var output = document.getElementById('terminalOutput');
        if (output) output.innerHTML = '';
    }
    else if (command === 'exit' || command === 'quit' || command === 'close') {
        closeTerminal();
    }
    else if (command === 'help' || command === '?') {
        addTerminalOutput('', 'output');
        addTerminalOutput('  scan   - Escanear red local', 'output');
        addTerminalOutput('  hack   - Crackear password', 'output');
        addTerminalOutput('  exit   - Cerrar', 'output');
        addTerminalOutput('', 'output');
    }
    else if (HACK_TARGETS[command]) {
        connectToTarget(command);
    }
    else if (command.indexOf('192.168.1.') === 0) {
        if (networkScanned) {
            connectToTarget(command);
        } else {
            addTerminalOutput('IP no reconocida. Haz "scan" primero.', 'error');
        }
    }
    else {
        addTerminalOutput('Comando no reconocido.', 'error');
    }
}

function scanNetwork() {
    addTerminalOutput('', 'output');
    addTerminalOutput('Escaneando...', 'info');
    
    setTimeout(function() {
        addTerminalOutput('', 'output');
        addTerminalOutput('═══════════════════════════════════════', 'info');
        addTerminalOutput('     RESULTADOS DEL ESCANEO', 'info');
        addTerminalOutput('═══════════════════════════════════════', 'info');
        addTerminalOutput('', 'output');
        addTerminalOutput('IP detectadas:', 'info');
        addTerminalOutput('  192.168.1.25   [?] PUERTO 443', 'success');
        addTerminalOutput('  192.168.1.47   [?] PUERTO 443', 'success');
        addTerminalOutput('  192.168.1.99   [?] PUERTO 22', 'success');
        addTerminalOutput('', 'output');
        addTerminalOutput('Escribe la IP para conectar:', 'output');
        networkScanned = true;
    }, 2000);
}

function connectToTarget(ip) {
    var targetData = HACK_TARGETS[ip];
    if (!targetData) {
        addTerminalOutput('Conexión rechazada.', 'error');
        return;
    }
    
    currentTarget = ip;
    waitingForPassword = true;
    
    addTerminalOutput('', 'output');
    addTerminalOutput('Conectando a ' + ip + '...', 'info');
    
    setTimeout(function() {
        addTerminalOutput('[OK] Conexión establecida', 'success');
        addTerminalOutput('Password requerida:', 'error');
        addTerminalOutput('', 'output');
        addTerminalOutput('Escribe "hack" para crackear.', 'info');
    }, 1000);
}

function startDecoder() {
    if (!currentTarget) {
        addTerminalOutput('Conecta a un objetivo primero.', 'error');
        return;
    }
    
    var targetData = HACK_TARGETS[currentTarget];
    var password = targetData.password;
    
    addTerminalOutput('', 'output');
    addTerminalOutput('═══════════════════════════════════════', 'info');
    addTerminalOutput('     INICIANDO CRACKER...', 'info');
    addTerminalOutput('═══════════════════════════════════════', 'info');
    
    var iteration = 0;
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
    decodeInterval = setInterval(function() {
        iteration++;
        var display = '';
        for (var i = 0; i < password.length; i++) {
            if (i < iteration) {
                display += password.charAt(i);
            } else {
                display += chars.charAt(Math.floor(Math.random() * chars.length));
            }
        }
        
        addTerminalOutput('  CRACK: ' + display + '_', 'output');
        
        if (iteration > password.length + 2) {
            clearInterval(decodeInterval);
            addTerminalOutput('', 'output');
            addTerminalOutput('[OK] PASSWORD: ' + password, 'success');
            addTerminalOutput('', 'output');
            addTerminalOutput('Introduce la password:', 'info');
        }
    }, 100);
}

function checkPassword(input) {
    var targetData = HACK_TARGETS[currentTarget];
    
    if (input === targetData.password) {
        addTerminalOutput('', 'output');
        addTerminalOutput('═══════════════════════════════════════', 'success');
        addTerminalOutput('     ACCESO CONCEDIDO', 'success');
        addTerminalOutput('═══════════════════════════════════════', 'success');
        
        setTimeout(function() {
            window.open(targetData.url, '_blank');
            currentTarget = null;
            waitingForPassword = false;
        }, 1000);
    } else {
        addTerminalOutput('[X] Password incorrecta', 'error');
    }
}

var closeBtn = document.getElementById('terminalClose');
if (closeBtn) closeBtn.addEventListener('click', closeTerminal);
