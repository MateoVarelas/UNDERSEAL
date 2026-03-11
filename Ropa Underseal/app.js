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
// TERMINAL - SISTEMA DE HACKING MEJORADO
// ============================================
function setupTerminal() {
    const commandInput = document.getElementById('terminalCommand');
    
    commandInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            executeCommand(commandInput.value);
            commandInput.value = '';
        }
    });
    
    document.getElementById('terminalModal').addEventListener('transitionend', () => {
        if (document.getElementById('terminalModal').classList.contains('active')) {
            commandInput.focus();
        }
    });
}

function openTerminal() {
    document.getElementById('terminalModal').classList.add('active');
    addTerminalOutput('=== TERMINAL UNDERSEAL v2.4.1 ===', 'info');
    addTerminalOutput('Escribe "?" para ayuda', 'info');
}

function closeTerminal() {
    document.getElementById('terminalModal').classList.remove('active');
    // Reset state
    terminalUser = null;
    terminalLevel = 0;
    userAlias = 'guest';
    hackProgress = 0;
    discoveredCommands = ['?'];
    bruteforceAttempts = 0;
    systemCompromised = false;
}

function addTerminalOutput(text, type = 'output') {
    const output = document.getElementById('terminalOutput');
    output.innerHTML += `<div class="terminal-line ${type}">${text}</div>`;
    output.scrollTop = output.scrollHeight;
}

function executeCommand(cmd) {
    const command = cmd.trim().toLowerCase();
    addTerminalOutput(`> ${cmd}`, 'command');
    
    // Sistema de comandos ocultos
    const allCommands = {
        // Comandos básicos
        '?': () => {
            addTerminalOutput('Comandos disponibles:', 'info');
            if (discoveredCommands.includes('help') || terminalLevel >= 1) {
                addTerminalOutput('  help - Mostrar ayuda', 'output');
            }
            addTerminalOutput('  ls - Listar archivos', 'output');
            addTerminalOutput('  cat [archivo] - Ver contenido', 'output');
            if (terminalLevel >= 2) {
                addTerminalOutput('  scan - Escanear red', 'output');
                addTerminalOutput('  brute - Fuerza bruta', 'output');
                addTerminalOutput('  exploit - Ejecutar exploit', 'output');
            }
            if (terminalLevel >= 3) {
                addTerminalOutput('  extract - Extraer datos', 'output');
                addTerminalOutput('  backdoor - Crear backdoor', 'output');
                addTerminalOutput('  root - Acceso root', 'output');
            }
        },
        
        'help': () => {
            if (Math.random() > 0.7) {
                addTerminalOutput('Comando no reconocido', 'error');
            } else {
                addTerminalOutput('Usa "?" para ayuda', 'info');
            }
        },
        
        'ls': () => {
            addTerminalOutput('directorio: /var/www/html', 'output');
            addTerminalOutput('  .hidden/', 'output');
            addTerminalOutput('Escribe: cat .hidden/notes.txt', 'info');
        },
        
        'cat': (args) => {
            if (!args) {
                addTerminalOutput('Uso: cat [archivo]', 'error');
                return;
            }
            
            if (args === '.hidden/notes.txt') {
                addTerminalOutput('=== NOTAS SECRETAS ===', 'info');
                addTerminalOutput('Si puedes leer esto, tienes acceso.', 'success');
                addTerminalOutput('Password del sistema: GHOST', 'success');
                addTerminalOutput('Usa "brute" para crackear', 'info');
                terminalLevel = 2;
                addTerminalOutput('Nivel de acceso: 2', 'success');
            } else if (args === 'notes.txt') {
                if (terminalLevel >= 1) {
                    addTerminalOutput('=== NOTAS ===', 'info');
                    addTerminalOutput('Remember: el password del sistema es GHOST', 'output');
                    addTerminalOutput('Las credenciales están en /root/credentials.txt', 'output');
                    addTerminalOutput('Usa brute para crackear', 'output');
                } else {
                    addTerminalOutput('Permiso denegado', 'error');
                    addTerminalOutput('Prueba: cat .hidden/notes.txt', 'info');
                }
            } else if (args === 'config/sys.cfg') {
                addTerminalOutput('SYSTEM CONFIG:', 'info');
                addTerminalOutput('  firewall: ACTIVE', 'output');
                addTerminalOutput('  encryption: AES-256', 'output');
                addTerminalOutput('  vault_location: /dev/sda1', 'output');
            } else {
                addTerminalOutput(`Archivo no encontrado: ${args}`, 'error');
            }
        },
        
        'scan': () => {
            if (terminalLevel < 2) {
                addTerminalOutput('Error: nivel de acceso insuficiente', 'error');
                return;
            }
            
            addTerminalOutput('Iniciando escaneo...', 'info');
            setTimeout(() => {
                addTerminalOutput('[✓] 192.168.1.1 - Router', 'success');
                addTerminalOutput('[✓] 192.168.1.10 - Servidor Underseal', 'success');
                addTerminalOutput('[✓] 192.168.1.99ULT-DB [ - VAPROTEGIDO]', 'warning');
                addTerminalOutput('Puertos abiertos: 22, 80, 443, 3389', 'output');
            }, 1500);
        },
        
        'brute': () => {
            if (terminalLevel < 2) {
                addTerminalOutput('ERROR: Necesitas nivel 2', 'error');
                addTerminalOutput('Escribe: cat .hidden/notes.txt', 'info');
                return;
            }
            
            addTerminalOutput('Iniciando ataque de fuerza bruta...', 'error');
            bruteforceAttempts++;
            
            if (bruteforceAttempts < 3) {
                setTimeout(() => {
                    addTerminalOutput('Intentando...', 'info');
                    addTerminalOutput('Contraseña incorrecta', 'error');
                    addTerminalOutput(`Intentos: ${bruteforceAttempts}/10`, 'warning');
                }, 1500);
            } else if (bruteforceAttempts >= 3 && bruteforceAttempts < 5) {
                setTimeout(() => {
                    addTerminalOutput('Probando diccionario...', 'info');
                    addTerminalOutput('Contraseña incorrecta', 'error');
                    addTerminalOutput('Pista: "G"', 'warning');
                }, 1500);
            } else if (bruteforceAttempts >= 5) {
                setTimeout(() => {
                    addTerminalOutput('>> CONEXIÓN ESTABLECIDA <<', 'success');
                    addTerminalOutput('Password: GHOST', 'success');
                    terminalLevel = 3;
                    systemCompromised = true;
                    addTerminalOutput('Nivel de acceso: 3 (ADMIN)', 'success');
                    discoveredCommands.push('extract', 'backdoor', 'root');
                }, 1500);
            }
        },
        
        'exploit': () => {
            if (terminalLevel < 2) {
                addTerminalOutput('Error: requiere nivel 2', 'error');
                return;
            }
            
            addTerminalOutput('Buscando vulnerabilidades...', 'info');
            setTimeout(() => {
                addTerminalOutput('[!] CVE-2024-XXXX encontrado', 'warning');
                addTerminalOutput('[!] Ejecutando exploit...', 'error');
                setTimeout(() => {
                    addTerminalOutput('>> SHELL INVERTIDO <<', 'success');
                    terminalLevel = 3;
                    systemCompromised = true;
                    addTerminalOutput('Nivel de acceso: 3 (ROOT)', 'success');
                }, 1000);
            }, 1500);
        },
        
        'extract': () => {
            if (!systemCompromised) {
                addTerminalOutput('Sistema no comprometido', 'error');
                return;
            }
            
            addTerminalOutput('Extrayendo datos sensibles...', 'info');
            setTimeout(() => {
                addTerminalOutput('Credenciales encontradas:', 'success');
                addTerminalOutput('  admin:GHOST', 'output');
                addTerminalOutput('  vault:UNDERS£AL2024', 'output');
                addTerminalOutput('  db_root:x7z9qP2m', 'output');
                addTerminalOutput('>> BACKDOOR CREADO <<', 'success');
            }, 1500);
        },
        
        'backdoor': () => {
            if (!systemCompromised) {
                addTerminalOutput('Acceso denegado', 'error');
                return;
            }
            
            addTerminalOutput('Creando persistencia...', 'info');
            setTimeout(() => {
                addTerminalOutput('>> BACKDOOR INSTALADO <<', 'success');
                addTerminalOutput('Puerto: 31337', 'output');
                addTerminalOutput('Conexión reverse shell activada', 'output');
            }, 1000);
        },
        
        'root': () => {
            if (terminalLevel < 3) {
                addTerminalOutput('Acceso denegado', 'error');
                return;
            }
            
            addTerminalOutput('=====================================', 'info');
            addTerminalOutput('     SISTEMA COMPROMETIDO', 'success');
            addTerminalOutput('=====================================', 'info');
            addTerminalOutput('Acceso ROOT obtenido', 'success');
            addTerminalOutput('', 'output');
            addTerminalOutput('>>> COMANDO ESPECIAL: vault <<<', 'success');
            addTerminalOutput('Escribe "vault" para acceder', 'warning');
        },
        
        'vault': () => {
            if (terminalLevel < 3 || !systemCompromised) {
                addTerminalOutput('ACCESO DENEGADO', 'error');
                addTerminalOutput('El sistema está protegido', 'warning');
                addTerminalOutput('Compromete el sistema primero', 'info');
                return;
            }
            
            addTerminalOutput('=====================================', 'success');
            addTerminalOutput('  ACCEDIENDO A LA BÓVEDA...', 'success');
            addTerminalOutput('=====================================', 'success');
            
            setTimeout(() => {
                closeTerminal();
                window.location.href = '../vault/index.html';
            }, 2000);
        },
        
        'clear': () => {
            document.getElementById('terminalOutput').innerHTML = '';
            addTerminalOutput('Terminal limpiado', 'info');
        },
        
        'exit': () => {
            addTerminalOutput('Cerrando sesión...', 'info');
            setTimeout(closeTerminal, 500);
        },
        
        // Comandos de exploración (pistas mínimas)
        'whoami': () => {
            addTerminalOutput(terminalUser || 'guest', 'output');
        },
        
        'pwd': () => {
            addTerminalOutput('/var/www/html', 'output');
        },
        
        'uname': () => {
            addTerminalOutput('Linux underseal-srv 5.4.0-generic', 'output');
        },
        
        'id': () => {
            addTerminalOutput(terminalLevel >= 1 ? 'uid=1000(user) gid=1000(user)' : 'uid=1000(user) gid=1000(user) groups=1000(user)', 'output');
        },
        
        // Easter eggs
        'sudo': () => {
            addTerminalOutput('user is not in the sudoers file', 'error');
        },
        
        'rm': (args) => {
            if (args === '-rf /') {
                addTerminalOutput('NO. Puedo ver lo que haces.', 'error');
            } else {
                addTerminalOutput(`rm: cannot remove '${args}': Permission denied`, 'error');
            }
        },
        
        'ls -la': () => {
            addTerminalOutput('drwxr-xr-x  2 root root  4096 .', 'output');
            addTerminalOutput('-rw-r--r--  1 root root   220 notes.txt', 'output');
            addTerminalOutput('drwxr-xr-x  2 root root  4096 config/', 'output');
            addTerminalOutput('drwxr-xr-x  3 root root  4096 .hidden/', 'output');
        }
    };
    
    // Parse command and arguments
    const parts = command.split(' ');
    const cmdName = parts[0];
    const args = parts.slice(1).join(' ');
    
    if (allCommands[cmdName]) {
        allCommands[cmdName](args);
    } else if (cmdName === '') {
        // Do nothing
    } else {
        // Chance de descubrir que existe el comando
        if (Math.random() > 0.8) {
            addTerminalOutput(`Comando no reconocido: ${cmdName}`, 'error');
        } else {
            addTerminalOutput('Comando no encontrado', 'error');
        }
    }
}

// Close terminal button
document.getElementById('terminalClose').addEventListener('click', closeTerminal);
