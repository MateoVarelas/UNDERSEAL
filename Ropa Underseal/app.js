/* ============================================
   UNDERSEAL - App JavaScript
   ============================================ */

// ============================================
// DATOS DE PRODUCTOS
// ============================================
const products = [
    // CAMISETAS
    {
        id: 1,
        name: "No Signal Tee",
        type: "camiseta",
        price: 29,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        sizes: ["S", "M", "L", "XL"],
        badge: null,
        description: "Camiseta de algodón orgánico con diseño minimalista. Mensaje oculto bajo luz UV.",
        serial: "U13-7X"
    },
    {
        id: 2,
        name: "Classified Tee",
        type: "camiseta",
        price: 34,
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
        sizes: ["S", "M", "L", "XL"],
        badge: "Nuevo",
        description: "Tejido premium con estampado termocrómico. Cambia de color con el calor corporal."
    },
    {
        id: 3,
        name: "Ghost Mode Tee",
        type: "camiseta",
        price: 32,
        image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop",
        sizes: ["S", "M", "L", "XL"],
        badge: null,
        description: "Tejido técnico transpirable. Diseño reflectante para visibilidad mínima."
    },
    {
        id: 4,
        name: "Blind Spot Tee",
        type: "camiseta",
        price: 27,
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
        sizes: ["S", "M", "L", "XL"],
        badge: "Best Seller",
        description: "Corte oversize. Algodón peinado de alta calidad."
    },
    {
        id: 5,
        name: "Zero Trace Tee",
        type: "camiseta",
        price: 39,
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
        sizes: ["S", "M", "L", "XL"],
        badge: null,
        description: "Tejido antibacteriano. Secado rápido. Ideal para cualquier condición."
    },
    {
        id: 6,
        name: "Protocol Tee",
        type: "camiseta",
        price: 31,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        sizes: ["S", "M", "L", "XL"],
        badge: null,
        description: "Diseño con código QR oculto que redirecciona a contenido exclusivo."
    },
    // SUDADERAS
    {
        id: 7,
        name: "Access Hoodie",
        type: "sudadera",
        price: 69,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
        sizes: ["S", "M", "L", "XL"],
        badge: null,
        description: "Sudadera con capucha extragrande. Bolsillo canguro profundo. Algodón heaviest.",
        serial: "VIN-99"
    },
    {
        id: 8,
        name: "Underseal Core Hoodie",
        type: "sudadera",
        price: 79,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
        sizes: ["S", "M", "L", "XL"],
        badge: "Edición Limitada",
        description: "Sudadera de felpa suave. Logo bordado. Puños y cintura ajustados."
    },
    {
        id: 9,
        name: "Blackout Hoodie",
        type: "sudadera",
        price: 65,
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=400&fit=crop",
        sizes: ["S", "M", "L", "XL"],
        badge: null,
        description: "Tejido resistente al agua. Capucha reforzada. Ideal para condiciones extremas."
    },
    {
        id: 10,
        name: "Shadow Fleet Hoodie",
        type: "sudadera",
        price: 72,
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=400&fit=crop",
        sizes: ["S", "M", "L", "XL"],
        badge: null,
        description: "Sudadera de cuello alto. Cierre frontal asimétrico. Bolsillos ocultos."
    },
    {
        id: 11,
        name: "Night Ops Hoodie",
        type: "sudadera",
        price: 55,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
        sizes: ["S", "M", "L", "XL"],
        badge: "Oferta",
        description: "Sudadera ligera pero cálida. Perfecta para layering. Secado rápido."
    },
    {
        id: 12,
        name: "Ghost Protocol Hoodie",
        type: "sudadera",
        price: 85,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
        sizes: ["S", "M", "L", "XL"],
        badge: "Exclusive",
        description: "Edición numerada. Tejido de lujo con acabados premium. Solo 100 unidades."
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

// Terminal state
let terminalUser = null;
let terminalLevel = 1;
let unlockedSections = [];
let userAlias = 'guest';

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
    setupEventListeners();
});

// ============================================
// RENDERIZADO DE PRODUCTOS
// ============================================
function renderProducts(filter = 'all') {
    const grid = document.getElementById('productsGrid');
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.type === filter);
    
    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-type">${product.type}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price} EUR</span>
                    <button class="add-to-cart-btn" data-id="${product.id}">Añadir</button>
                </div>
            </div>
        </div>
    `).join('');

    // Agregar event listeners a las cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('add-to-cart-btn')) {
                const productId = parseInt(card.dataset.id);
                openProductModal(productId);
            }
        });
    });

    // Agregar event listeners a los botones de añadir
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.id);
            quickAddToCart(productId);
        });
    });
}

// ============================================
// FILTROS
// ============================================
function setupEventListeners() {
    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderProducts(currentFilter);
        });
    });

    // Carrito
    document.getElementById('cartBtn').addEventListener('click', openCart);
    document.getElementById('cartClose').addEventListener('click', closeCart);
    document.getElementById('cartOverlay').addEventListener('click', closeCart);

    // Checkout
    document.getElementById('checkoutBtn').addEventListener('click', openCheckout);
    document.getElementById('checkoutClose').addEventListener('click', closeCheckout);
    document.getElementById('checkoutForm').addEventListener('submit', handleCheckout);

    // Producto Modal
    document.getElementById('modalClose').addEventListener('click', closeProductModal);
    document.getElementById('productModal').addEventListener('click', (e) => {
        if (e.target.id === 'productModal') closeProductModal();
    });

    // Contacto
    document.getElementById('contactForm').addEventListener('submit', handleContactSubmit);

    // ============================================
    // TERMINAL - Event Listeners
    // ============================================
    document.getElementById('secretLink').addEventListener('click', (e) => {
        e.preventDefault();
        openTerminal();
    });

    document.getElementById('terminalClose').addEventListener('click', closeTerminal);
    document.getElementById('terminalModal').addEventListener('click', function(e) {
        if (e.target.id === 'terminalModal') closeTerminal();
    });

    document.getElementById('terminalCommand').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const input = e.target;
            executeCommand(input.value);
            input.value = '';
        }
    });

    // Cerrar terminal con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeTerminal();
        }
    });
}

// ============================================
// FUNCIONALIDAD DEL CARRITO
// ============================================
function quickAddToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId && item.size === 'M');
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size: 'M',
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
    showToast(product.name + ' añadido al carrito', 'success');
}

function addToCart() {
    if (!selectedProduct || !selectedSize) {
        showToast('Selecciona una talla', 'error');
        return;
    }

    const existingItem = cart.find(item => item.id === selectedProduct.id && item.size === selectedSize);
    
    if (existingItem) {
        existingItem.quantity += selectedQuantity;
    } else {
        cart.push({
            id: selectedProduct.id,
            name: selectedProduct.name,
            price: selectedProduct.price,
            image: selectedProduct.image,
            size: selectedSize,
            quantity: selectedQuantity
        });
    }

    saveCart();
    updateCartCount();
    closeProductModal();
    showToast(selectedProduct.name + ' añadido al carrito', 'success');
    
    // Reset
    selectedSize = null;
    selectedQuantity = 1;
    selectedProduct = null;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCartItems();
    updateCartCount();
}

function updateQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity < 1) {
        cart[index].quantity = 1;
    }
    saveCart();
    renderCartItems();
    updateCartCount();
}

function saveCart() {
    localStorage.setItem('underseal_cart', JSON.stringify(cart));
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function getCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 5 : 0;
    const total = subtotal + shipping;
    return { subtotal, shipping, total };
}

function renderCartItems() {
    const container = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        container.innerHTML = '<div class="cart-empty">Tu carrito está vacío</div>';
        return;
    }

    container.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <h4 class="cart-item-name">${item.name}</h4>
                <p class="cart-item-size">Talla: ${item.size}</p>
                <div class="cart-item-quantity">
                    <button class="cart-qty-btn" onclick="updateQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="cart-qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
                </div>
                <p class="cart-item-price">${(item.price * item.quantity).toFixed(2)} EUR</p>
                <button class="cart-item-remove" onclick="removeFromCart(${index})">Eliminar</button>
            </div>
        </div>
    `).join('');

    // Actualizar totales
    const totals = getCartTotals();
    document.getElementById('subtotal').textContent = totals.subtotal.toFixed(2) + ' EUR';
    document.getElementById('shipping').textContent = totals.shipping === 0 ? 'Gratis' : totals.shipping.toFixed(2) + ' EUR';
    document.getElementById('total').textContent = totals.total.toFixed(2) + ' EUR';
    document.getElementById('checkoutTotal').textContent = totals.total.toFixed(2) + ' EUR';
}

function openCart() {
    renderCartItems();
    document.getElementById('cartSidebar').classList.add('active');
    document.getElementById('cartOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
    document.getElementById('cartOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// MODAL DE PRODUCTO
// ============================================
function openProductModal(productId) {
    selectedProduct = products.find(p => p.id === productId);
    if (!selectedProduct) return;

    selectedSize = null;
    selectedQuantity = 1;

    const modal = document.getElementById('productModal');
    const detail = document.getElementById('productDetail');

    detail.innerHTML = `
        <div class="product-detail-image">
            <img src="${selectedProduct.image}" alt="${selectedProduct.name}">
        </div>
        <div class="product-detail-info">
            <h2 class="product-detail-name">${selectedProduct.name}</h2>
            <p class="product-detail-type">${selectedProduct.type}</p>
            <p class="product-detail-price">${selectedProduct.price} EUR</p>
            <p style="color: var(--text-secondary); margin-bottom: 1.5rem; font-size: 0.875rem;">${selectedProduct.description}</p>
            
            <div class="size-selector">
                <label>Talla</label>
                <div class="size-options">
                    ${selectedProduct.sizes.map(size => `
                        <button class="size-btn" data-size="${size}">${size}</button>
                    `).join('')}
                </div>
            </div>
            
            <div class="quantity-selector">
                <label>Cantidad</label>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="decreaseQuantity()">-</button>
                    <span class="quantity-value" id="quantityValue">1</span>
                    <button class="quantity-btn" onclick="increaseQuantity()">+</button>
                </div>
            </div>
            
            <button class="add-to-cart-btn-large" onclick="addToCart()">Añadir al Carrito</button>
        </div>
    `;

    // Event listeners para tallas
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedSize = btn.dataset.size;
        });
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
    document.body.style.overflow = '';
}

function increaseQuantity() {
    selectedQuantity++;
    document.getElementById('quantityValue').textContent = selectedQuantity;
}

function decreaseQuantity() {
    if (selectedQuantity > 1) {
        selectedQuantity--;
        document.getElementById('quantityValue').textContent = selectedQuantity;
    }
}

// ============================================
// CHECKOUT
// ============================================
function openCheckout() {
    if (cart.length === 0) {
        showToast('El carrito está vacío', 'error');
        return;
    }
    closeCart();
    document.getElementById('checkoutModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('active');
    document.body.style.overflow = '';
}

function handleCheckout(e) {
    e.preventDefault();
    
    // Validación simple
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const card = document.getElementById('card').value.trim();
    
    if (!name || !email || !card) {
        showToast('Por favor, completa todos los campos', 'error');
        return;
    }

    // Simular procesamiento
    showToast('Procesando pago...', 'success');
    
    setTimeout(() => {
        // Limpiar carrito
        cart = [];
        saveCart();
        updateCartCount();
        
        // Cerrar modal y mostrar éxito
        closeCheckout();
        document.getElementById('checkoutForm').reset();
        
        showToast('¡Pedido realizado con éxito! (Simulado)', 'success');
    }, 1500);
}

// ============================================
// CONTACTO
// ============================================
function handleContactSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    
    if (!name || !email || !message) {
        showToast('Por favor, completa todos los campos', 'error');
        return;
    }
    
    // Validar email simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast('Email inválido', 'error');
        return;
    }
    
    // Simular envío
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('contactSuccess').classList.add('visible');
    
    // Reset form después de un tiempo
    setTimeout(() => {
        document.getElementById('contactForm').reset();
        document.getElementById('contactForm').style.display = 'block';
        document.getElementById('contactSuccess').classList.remove('visible');
    }, 5000);
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================
function showToast(message, type) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toast.className = 'toast ' + type;
    toastMessage.textContent = message;
    toast.classList.add('visible');
    
    setTimeout(() => {
        toast.classList.remove('visible');
    }, 3000);
}

// ============================================
// TERMINAL SECRETA
// ============================================
function openTerminal() {
    document.getElementById('terminalModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Animación de inicio
    var output = document.getElementById('terminalOutput');
    output.innerHTML = '';
    
    var lines = [
        { text: 'Conectando a UNDERSEAL...', delay: 300, type: 'info' },
        { text: 'Estableciendo conexión segura...', delay: 800, type: 'info' },
        { text: 'Acceso autorizado.', delay: 1400, type: 'success' },
        { text: '', delay: 1600, type: 'output' },
        { text: 'Usa "help" para ver comandos disponibles.', delay: 1800, type: 'output' }
    ];
    
    lines.forEach(function(line) {
        setTimeout(function() {
            addTerminalLine(line.text, line.type);
        }, line.delay);
    });
    
    setTimeout(function() {
        document.getElementById('terminalCommand').focus();
    }, 2000);
}

function closeTerminal() {
    document.getElementById('terminalModal').classList.remove('active');
    document.body.style.overflow = '';
}

function executeCommand(cmd) {
    var command = cmd.trim().toLowerCase();
    addTerminalLine('$ ' + cmd, 'command');
    if (!command) return;
    var parts = command.split(' ');
    var mainCmd = parts[0];
    var args = parts.slice(1);
    switch (mainCmd) {
        case 'help': showHelp(); break;
        case 'clear': clearTerminal(); break;
        case 'whoami': showWhoami(); break;
        case 'ls': runLs(args[0]); break;
        case 'cat': runCat(args[0]); break;
        case 'cd': runCd(args[0]); break;
        case 'sudo': runSudo(args[0]); break;
        case 'ping': runPing(args[0]); break;
        case 'nmap': runNmap(); break;
        case 'scan': runScan(); break;
        case 'logs': showLogs(); break;
        case 'decrypt': decryptCode(args[0]); break;
        case 'unlock': runUnlock(args[0]); break;
        case 'key': checkKey(args[0]); break;
        case 'exit': closeTerminal(); break;
        case 'quit': closeTerminal(); break;
        default: addTerminalLine('Comando no reconocido: ' + mainCmd, 'error');
    }
}

function addTerminalLine(text, type) {
    const output = document.getElementById('terminalOutput');
    const line = document.createElement('div');
    line.className = 'terminal-line ' + type;
    line.textContent = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
}

function clearTerminal() {
    var output = document.getElementById('terminalOutput');
    output.innerHTML = '';
}

function showHelp() {
    addTerminalLine('═'.repeat(40), 'info');
    addTerminalLine('COMANDOS DISPONIBLES:', 'info');
    addTerminalLine('═'.repeat(40), 'info');
    addTerminalLine('  whoami   - Mostrar identidad', 'output');
    addTerminalLine('  ls       - Listar archivos', 'output');
    addTerminalLine('  cat      - Leer archivo', 'output');
    addTerminalLine('  cd       - Cambiar directorio', 'output');
    addTerminalLine('  sudo     - Modo administrador', 'output');
    addTerminalLine('  ping     - Probar conexión', 'output');
    addTerminalLine('  nmap     - Escanear puertos', 'output');
    addTerminalLine('  scan     - Buscar pistas', 'output');
    addTerminalLine('  logs     - Ver registros', 'output');
    addTerminalLine('  decrypt  - Descodificar código', 'output');
    addTerminalLine('  unlock   - Desbloquear acceso', 'output');
    addTerminalLine('  key      - Introducir clave', 'output');
    addTerminalLine('  clear    - Limpiar pantalla', 'output');
    addTerminalLine('  exit     - Cerrar terminal', 'output');
    addTerminalLine('═'.repeat(40), 'info');
}

function showWhoami() {
    addTerminalLine('═'.repeat(40), 'info');
    addTerminalLine('USUARIO ACTUAL:', 'info');
    addTerminalLine('═'.repeat(40), 'info');
    addTerminalLine('  nombre: ' + (userAlias || 'guest'), 'output');
    addTerminalLine('  ip: 192.168.1.XXX', 'output');
    addTerminalLine('  nivel: ' + terminalLevel, 'output');
    addTerminalLine('  estado: ' + (terminalLevel >= 2 ? 'ACTIVO' : 'RESTRINGIDO'), 'output');
    addTerminalLine('═'.repeat(40), 'info');
}

function runLs(dir) {
    if (!dir || dir === '.') {
        addTerminalLine('drwx------  2 root root  4096 ene 15 2024 archivos_secretos/', 'output');
        addTerminalLine('-rw-r--r--  1 root root   256 ene 15 2024 notas.txt', 'output');
        addTerminalLine('-rw-r--r--  1 root root  1024 ene 15 2024 claves_encrypt.dat', 'output');
        addTerminalLine('-rw-r--r--  1 root root  2048 ene 15 2024 system.log', 'output');
        addTerminalLine('drwxr-xr-x  1 root root   512 ene 15 2024 mensajes/', 'output');
        addTerminalLine('-rw-------  1 root root    64 ene 15 2024 .hidden_code', 'output');
    } else if (dir === 'archivos_secretos') {
        addTerminalLine('drwx------  5 root root  4096 ene 15 2024 casino/', 'output');
        addTerminalLine('drwx------  5 root root  4096 ene 15 2024 garage/', 'output');
        addTerminalLine('drwx------  5 root root  4096 ene 15 2024 vault/', 'output');
    } else if (dir === 'mensajes') {
        addTerminalLine('-rw-r--r--  1 root root   128 ene 15 2024 mensaje1.txt', 'output');
        addTerminalLine('-rw-r--r--  1 root root   128 ene 15 2024 mensaje2.txt', 'output');
    } else if (dir === 'archivos_secretos/casino') {
        addTerminalLine('-rw-r--r--  1 root root    64 ene 15 2024 acceso.dat', 'output');
        addTerminalLine('-rw-r--r--  1 root root   128 ene 15 2024 reglas.txt', 'output');
    } else if (dir === 'archivos_secretos/garage') {
        addTerminalLine('-rw-r--r--  1 root root    64 ene 15 2024 vin_list.dat', 'output');
        addTerminalLine('-rw-r--r--  1 root root   128 ene 15 2024 inventory.txt', 'output');
    } else if (dir === 'archivos_secretos/vault') {
        addTerminalLine('-rw-------  1 root root    32 ene 15 2024 case_01.dat', 'output');
        addTerminalLine('-rw-------  1 root root    32 ene 15 2024 case_02.dat', 'output');
    } else {
        addTerminalLine('Directorio no encontrado.', 'error');
    }
}

function runCat(file) {
    if (file === 'notas.txt') {
        addTerminalLine('[notas.txt]', 'info');
        addTerminalLine('Busca en los productos.', 'output');
        addTerminalLine('El serial está en el primer producto.', 'output');
        addTerminalLine('', 'output');
        addTerminalLine('Pista: Primera camiseta = código.', 'warning');
    } else if (file === 'mensajes/mensaje1.txt') {
        addTerminalLine('[mensaje1.txt]', 'info');
        addTerminalLine('"El código del casino está relacionado con un número."', 'output');
    } else if (file === 'mensajes/mensaje2.txt') {
        addTerminalLine('[mensaje2.txt]', 'info');
        addTerminalLine('"El garage guarda vehículos con VIN-99."', 'output');
    } else if (file === 'claves_encrypt.dat') {
        addTerminalLine('[claves_encrypt.dat]', 'info');
        addTerminalLine('===== CLAVES ENCRIPTADAS =====', 'warning');
        addTerminalLine('C1: QTwxLTdY', 'output');
        addTerminalLine('C2: QlRVLTk5', 'output');
        addTerminalLine('C3:VkFVTFQtQ0FTRVM=', 'output');
        addTerminalLine('', 'output');
        addTerminalLine('Usa decrypt <codigo> para desencriptar.', 'info');
    } else if (file === 'system.log') {
        addTerminalLine('[system.log]', 'info');
        addTerminalLine('2024-01-15 08:32 Sistema iniciado', 'output');
        addTerminalLine('2024-01-15 09:15 Usuario admin conectado', 'output');
        addTerminalLine('2024-01-15 10:22 Clave U13-7X detectada', 'warning');
        addTerminalLine('2024-01-15 11:45 VIN-99 encontrado', 'warning');
        addTerminalLine('2024-01-15 14:30 Acceso casino bloqueado', 'output');
    } else if (file === '.hidden_code') {
        addTerminalLine('[.hidden_code]', 'info');
        addTerminalLine('═══════════════════════════════', 'warning');
        addTerminalLine('CLAVE MAESTRA: UNDERSEAL-2024', 'warning');
        addTerminalLine('═══════════════════════════════', 'warning');
        addTerminalLine('Nivel de acceso: 5 (ADMIN)', 'success');
    } else if (file === 'archivos_secretos/casino/reglas.txt') {
        addTerminalLine('[reglas.txt]', 'info');
        addTerminalLine('1. Necesitas fichas para jugar', 'output');
        addTerminalLine('2. Gana 1000 fichas para el DROP', 'output');
        addTerminalLine('3. Códigos: U13-7X -> ALPHA-7', 'output');
    } else if (file === 'archivos_secretos/garage/inventory.txt') {
        addTerminalLine('[inventory.txt]', 'info');
        addTerminalLine('- Ghost Rider (fantasma)', 'output');
        addTerminalLine('- Night Wolf (fantasma)', 'output');
        addTerminalLine('- VIN-99 requerido para comprar', 'output');
    } else if (file === 'archivos_secretos/vault/case_01.dat') {
        addTerminalLine('[case_01.dat]', 'info');
        addTerminalLine('Caso: El pendrive perdido', 'output');
        addTerminalLine('Estado: RESUELTO', 'success');
        addTerminalLine('Clave: PEDRO-2024', 'warning');
    } else if (file === 'archivos_secretos/vault/case_02.dat') {
        addTerminalLine('[case_02.dat]', 'info');
        addTerminalLine('Caso: WiFi del aula', 'output');
        addTerminalLine('Estado: ABIERTO', 'warning');
        addTerminalLine('Pista: La clave está en otro caso.', 'output');
    } else if (file === 'archivos_secretos/casino/acceso.dat' || file === 'archivos_secretos/garage/vin_list.dat') {
        addTerminalLine('[' + file + ']', 'info');
        addTerminalLine('Acceso bloqueado.', 'error');
        addTerminalLine('Usa unlock <clave> para desbloquear.', 'info');
    } else {
        addTerminalLine('Archivo no encontrado: ' + file, 'error');
    }
}

function runCd(dir) {
    if (!dir) {
        addTerminalLine('Uso: cd <directorio>', 'error');
    } else if (dir === 'archivos_secretos') {
        addTerminalLine('Cambiando a archivos_secretos/', 'success');
    } else if (dir === '..') {
        addTerminalLine('Volviendo al directorio raíz.', 'output');
    } else {
        addTerminalLine('Directorio no encontrado: ' + dir, 'error');
    }
}

function runSudo(cmd) {
    if (!cmd) {
        addTerminalLine('Uso: sudo <comando>', 'error');
    } else {
        addTerminalLine('Ejecutando: ' + cmd, 'warning');
        setTimeout(function() {
            addTerminalLine('Permiso denegado. Se requiere nivel 3.', 'error');
        }, 500);
    }
}

function runPing(host) {
    var target = host || 'underseal.local';
    addTerminalLine('PING ' + target + ': 32 bytes of data.', 'info');
    setTimeout(function() {
        addTerminalLine('64 bytes from ' + target + ': icmp_seq=1 ttl=64 time=0.0 ms', 'output');
    }, 200);
    setTimeout(function() {
        addTerminalLine('64 bytes from ' + target + ': icmp_seq=2 ttl=64 time=0.0 ms', 'output');
    }, 400);
    setTimeout(function() {
        addTerminalLine('64 bytes from ' + target + ': icmp_seq=3 ttl=64 time=0.0 ms', 'output');
        addTerminalLine('', 'output');
        addTerminalLine('--- ' + target + ' ping statistics ---', 'info');
        addTerminalLine('3 packets transmitted, 3 received, 0% packet loss', 'success');
    }, 600);
}

function runNmap() {
    addTerminalLine('Starting Nmap scan...', 'info');
    setTimeout(function() {
        addTerminalLine('PORT   STATE  SERVICE', 'output');
        addTerminalLine('22/tcp open   ssh', 'output');
    }, 300);
    setTimeout(function() {
        addTerminalLine('80/tcp open   http', 'output');
    }, 600);
    setTimeout(function() {
        addTerminalLine('443/tcp open  https', 'output');
    }, 900);
    setTimeout(function() {
        addTerminalLine('8080/tcp open http-proxy', 'warning');
        addTerminalLine('', 'output');
        addTerminalLine('Puertos abiertos detectados.', 'success');
    }, 1200);
}

function runUnlock(code) {
    if (!code) {
        addTerminalLine('Uso: unlock <codigo>', 'error');
        return;
    }
    addTerminalLine('Verificando: ' + code, 'info');
    setTimeout(function() {
        if (code.toUpperCase() === 'ALPHA-7') {
            addTerminalLine('════════════════════════════════════════', 'success');
            addTerminalLine('  ★ ACCESO DESBLOQUEADO ★', 'success');
            addTerminalLine('════════════════════════════════════════', 'success');
            addTerminalLine('UNDERDECK CASINO abierto.', 'success');
            if (unlockedSections.indexOf('casino') === -1) {
                unlockedSections.push('casino');
                localStorage.setItem('underseal_unlocked_sections', JSON.stringify(unlockedSections));
            }
            addTerminalLine('', 'output');
            addTerminalLine('Usa "open casino" para entrar.', 'info');
        } else if (code.toUpperCase() === 'BETA-99') {
            addTerminalLine('════════════════════════════════════════', 'success');
            addTerminalLine('  ★ ACCESO DESBLOQUEADO ★', 'success');
            addTerminalLine('════════════════════════════════════════', 'success');
            addTerminalLine('NIGHT GARAGE abierto.', 'success');
            if (unlockedSections.indexOf('cars') === -1) {
                unlockedSections.push('cars');
                localStorage.setItem('underseal_unlocked_sections', JSON.stringify(unlockedSections));
            }
            addTerminalLine('', 'output');
            addTerminalLine('Usa "open cars" para entrar.', 'info');
        } else if (code.toUpperCase() === 'UNDERSEAL-2024') {
            addTerminalLine('════════════════════════════════════════', 'success');
            addTerminalLine('  ★★★ MODO ADMIN ★★★', 'success');
            addTerminalLine('════════════════════════════════════════', 'success');
            addTerminalLine('Todo desbloqueado.', 'success');
            terminalLevel = 5;
            unlockedSections = ['casino', 'cars', 'vault'];
            addTerminalLine('', 'output');
            addTerminalLine('Usa "open vault" para entrar.', 'info');
        } else {
            addTerminalLine('Código incorrecto.', 'error');
            addTerminalLine('Pista: Busca en archivos secretos.', 'info');
        }
    }, 600);
}

function showStatus() {
    addTerminalLine('=================================================', 'info');
    addTerminalLine('ESTADO DEL SISTEMA:', 'info');
    addTerminalLine('=================================================', 'info');
    addTerminalLine('  Sistema: ONLINE', 'success');
    addTerminalLine('  Seguridad: NIVEL 3', 'warning');
    addTerminalLine('  Conexión: ENCRIPTADA', 'success');
    addTerminalLine('  Ubicación: UNDERSEAL HQ', 'output');
    addTerminalLine('=================================================', 'info');
}

function runScan() {
    addTerminalLine('Escaneando...', 'info');
    
    setTimeout(function() {
        addTerminalLine('Sistema encontrado.', 'success');
        addTerminalLine('Usa "logs" para más información.', 'info');
    }, 1000);
}

function showLogs() {
    addTerminalLine('[ Sistema ] Registro de actividad', 'info');
    addTerminalLine('[INFO] Clave oculta detectada: U13-7X', 'warning');
    addTerminalLine('[INFO] Busca en los productos.', 'info');
}

function decryptCode(code) {
    if (!code) {
        addTerminalLine('Uso: decrypt <codigo>', 'error');
        return;
    }
    
    addTerminalLine('Descodificando: ' + code + '...', 'info');
    
    // Simple base64 decode
    var decoded = '';
    try {
        decoded = atob(code);
    } catch(e) {
        decoded = code;
    }
    
    setTimeout(function() {
        // Códigos directos
        if (code.toUpperCase() === 'U13-7X' || code.toUpperCase() === 'U137X') {
            addTerminalLine('════════════════════════════════════════', 'success');
            addTerminalLine('  CÓDIGO DESCODIFICADO', 'success');
            addTerminalLine('════════════════════════════════════════', 'success');
            addTerminalLine('  Original: ' + code.toUpperCase(), 'output');
            addTerminalLine('  → Clave: ALPHA-7', 'success');
            addTerminalLine('  → Acceso: Casino', 'success');
            addTerminalLine('', 'output');
            addTerminalLine('Usa unlock ALPHA-7 para desbloquear.', 'info');
            
            localStorage.setItem('underseal_casino_key', 'ALPHA-7');
            
        } else if (code.toUpperCase() === 'VIN-99' || code.toUpperCase() === 'VIN99') {
            addTerminalLine('════════════════════════════════════════', 'success');
            addTerminalLine('  CÓDIGO DESCODIFICADO', 'success');
            addTerminalLine('════════════════════════════════════════', 'success');
            addTerminalLine('  Original: ' + code.toUpperCase(), 'output');
            addTerminalLine('  → Clave: BETA-99', 'success');
            addTerminalLine('  → Acceso: Night Garage', 'success');
            addTerminalLine('', 'output');
            addTerminalLine('Usa unlock BETA-99 para desbloquear.', 'info');
            
            localStorage.setItem('underseal_garage_key', 'BETA-99');
        } else if (decoded.toUpperCase() === 'ALPHA-7') {
            addTerminalLine('════════════════════════════════════════', 'success');
            addTerminalLine('  ACCESO CONCEDIDO', 'success');
            addTerminalLine('════════════════════════════════════════', 'success');
            addTerminalLine('Casino unlocked.', 'success');
            if (unlockedSections.indexOf('casino') === -1) {
                unlockedSections.push('casino');
            }
        } else if (decoded.toUpperCase() === 'BETA-99') {
            addTerminalLine('════════════════════════════════════════', 'success');
            addTerminalLine('  ACCESO CONCEDIDO', 'success');
            addTerminalLine('════════════════════════════════════════', 'success');
            addTerminalLine('Night Garage unlocked.', 'success');
            if (unlockedSections.indexOf('cars') === -1) {
                unlockedSections.push('cars');
            }
        } else if (decoded.toUpperCase() === 'UNDERSEAL-2024') {
            addTerminalLine('════════════════════════════════════════', 'success');
            addTerminalLine('  ★★★ ACCESO MAESTRO ★★★', 'success');
            addTerminalLine('════════════════════════════════════════', 'success');
            addTerminalLine('Nivel: ADMIN', 'success');
            addTerminalLine('Todo el contenido desbloqueado.', 'success');
            terminalLevel = 5;
            unlockedSections = ['casino', 'cars', 'vault'];
        } else if (code.toUpperCase() === 'QTWX-LTY' || decoded.toUpperCase() === 'QTWX-LTY') {
            addTerminalLine('════════════════════════════════════════', 'success');
            addTerminalLine('  CÓDIGO DESCODIFICADO', 'success');
            addTerminalLine('════════════════════════════════════════', 'success');
            addTerminalLine('  → Clave: U13-7X', 'success');
            addTerminalLine('', 'output');
            addTerminalLine('Ahora usa: decrypt U13-7X', 'info');
        } else if (code.toUpperCase() === 'QVRULS05' || decoded.toUpperCase() === 'QVRULS05') {
            addTerminalLine('════════════════════════════════════════', 'success');
            addTerminalLine('  CÓDIGO DESCODIFICADO', 'success');
            addTerminalLine('════════════════════════════════════════', 'success');
            addTerminalLine('  → Clave: VIN-99', 'success');
            addTerminalLine('', 'output');
            addTerminalLine('Ahora usa: decrypt VIN-99', 'info');
        } else {
            addTerminalLine('Código no válido.', 'error');
            addTerminalLine('Pistas: Revisa system.log y claves_encrypt.dat', 'info');
        }
    }, 800);
}

function showProducts() {
    addTerminalLine('=================================================', 'info');
    addTerminalLine('PRODUCTOS CON SERIALES OCULTOS:', 'info');
    addTerminalLine('=================================================', 'info');
    
    products.forEach(function(p, index) {
        if (p.serial) {
            addTerminalLine('  ' + p.name, 'output');
            addTerminalLine('    Serial: ' + p.serial + ' (OCULTO)', 'warning');
        } else {
            addTerminalLine('  ' + p.name, 'output');
        }
    });
    
    addTerminalLine('=================================================', 'info');
    addTerminalLine('Usa "decrypt <serial>" para descodear.', 'info');
}

function openSection(section) {
    if (!section) {
        addTerminalLine('Uso: open <casino|cars|vault>', 'error');
        return;
    }
    
    switch (section.toLowerCase()) {
        case 'casino':
        case 'underdeck':
            if (unlockedSections.indexOf('casino') !== -1 || terminalLevel >= 2) {
                addTerminalLine('=================================================', 'info');
                addTerminalLine('ABRIENDO UNDERDECK CASINO...', 'success');
                addTerminalLine('=================================================', 'info');
                addTerminalLine('');
                addTerminalLine('  ╔═══════════════════════════════════════╗', 'warning');
                addTerminalLine('  ║     🎰 UNDERDECK CASINO 🎰          ║', 'warning');
                addTerminalLine('  ╚═══════════════════════════════════════╝', 'warning');
                addTerminalLine('');
                addTerminalLine('  Estado: ABIERTO', 'success');
                addTerminalLine('  JUEGOS DISPONIBLES:', 'output');
                addTerminalLine('    1. Ruleta Rusa - Apuesta y reza', 'output');
                addTerminalLine('    2. Tragaperras Ghost - Suerteff', 'output');
                addTerminalLine('');
                addTerminalLine('  ¡En construcción! Próximamente...', 'info');
            } else {
                addTerminalLine('=================================================', 'error');
                addTerminalLine('  ACCESO DENEGADO', 'error');
                addTerminalLine('=================================================', 'error');
                addTerminalLine('Se requiere nivel 2 o clave ALPHA-7', 'warning');
                addTerminalLine('Busca el serial U13-7X en los productos.', 'info');
            }
            break;
            
        case 'cars':
        case 'nightgarage':
            if (unlockedSections.indexOf('cars') !== -1 || terminalLevel >= 3) {
                addTerminalLine('=================================================', 'info');
                addTerminalLine('ABRIENDO NIGHT GARAGE...', 'success');
                addTerminalLine('=================================================', 'info');
                addTerminalLine('');
                addTerminalLine('  ╔═══════════════════════════════════════╗', 'warning');
                addTerminalLine('  ║     🚗 NIGHT GARAGE 🚗                ║', 'warning');
                addTerminalLine('  ╚═══════════════════════════════════════╝', 'warning');
                addTerminalLine('');
                addTerminalLine('  Estado: ABIERTO', 'success');
                addTerminalLine('  CHAT CON VENDEDOR: ONLINE', 'success');
                addTerminalLine('');
                addTerminalLine('  "¡Hola! Tengo coches que no existen."', 'output');
                addTerminalLine('  "¿Buscas velocidad o discreción?"', 'output');
                addTerminalLine('');
                addTerminalLine('  ¡En construcción! Próximamente...', 'info');
            } else {
                addTerminalLine('=================================================', 'error');
                addTerminalLine('  ACCESO DENEGADO', 'error');
                addTerminalLine('=================================================', 'error');
                addTerminalLine('Se requiere nivel 3 o clave BETA-99', 'warning');
            }
            break;
            
        case 'vault':
        case 'case':
            addTerminalLine('=================================================', 'error');
            addTerminalLine('  ACCESO DENEGADO', 'error');
            addTerminalLine('=================================================', 'error');
            addTerminalLine('Se requiere completar los casos primero.', 'warning');
            break;
            
        default:
            addTerminalLine('Sección desconocida: ' + section, 'error');
            addTerminalLine('Disponibles: casino, cars, vault', 'info');
    }
}

function checkKey(key) {
    if (!key) {
        addTerminalLine('Uso: key <codigo>', 'error');
        return;
    }
    
    if (key.toUpperCase() === 'ALPHA-7') {
        addTerminalLine('Clave reconocida: ALPHA-7', 'success');
        addTerminalLine('Acceso al casino concedido.', 'success');
    } else if (key.toUpperCase() === 'BETA-99') {
        addTerminalLine('Clave reconocida: BETA-99', 'success');
        addTerminalLine('Acceso a Night Garage concedido.', 'success');
    } else {
        addTerminalLine('Clave no válida.', 'error');
    }
}

// Console log for developers
console.log('%c UNDERSEAL v2.4.1 ', 'background: #dc2626; color: white; font-size: 20px; padding: 10px;');
console.log('%c ¿Has tenido suerte entrando aquí? ', 'color: #dc2626; font-size: 14px;');
console.log('%c Has encontrado la terminal secreta. ', 'color: #3fb950; font-size: 12px;');
