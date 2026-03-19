// UNDERDECK - Casino Clandestino JavaScript

// ==================== AUDIO SYSTEM ====================
let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
}

function playSound(type) {
    try {
        const ctx = initAudio();
        if (ctx.state === 'suspended') {
            ctx.resume();
        }
        
        // SLOT SOUNDS
        if (type === 'slotLever') {
            // Lever pull - mechanical clicking
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.type = 'square';
                    osc.frequency.value = 200 + Math.random() * 100;
                    gain.gain.setValueAtTime(0.1, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
                    osc.start();
                    osc.stop(ctx.currentTime + 0.05);
                }, i * 50);
            }
        } else if (type === 'slotSpin') {
            // Reel spinning sound
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(100, ctx.currentTime);
            osc.frequency.linearRampToValueAtTime(300, ctx.currentTime + 0.3);
            gain.gain.setValueAtTime(0.08, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.02, ctx.currentTime + 0.3);
            osc.start();
            osc.stop(ctx.currentTime + 0.3);
        } else if (type === 'slotStop') {
            // Reel stopping - thud
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(150, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.3, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
            osc.start();
            osc.stop(ctx.currentTime + 0.15);
        } else if (type === 'slotWin') {
            // Small win - cheerful ding
            [600, 800].forEach((freq, i) => {
                setTimeout(() => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.type = 'sine';
                    osc.frequency.value = freq;
                    gain.gain.setValueAtTime(0.25, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
                    osc.start();
                    osc.stop(ctx.currentTime + 0.2);
                }, i * 100);
            });
        } else if (type === 'slotJackpot') {
            // Jackpot - triumphant fanfare
            [523, 659, 784, 1047, 1319, 1568].forEach((freq, i) => {
                setTimeout(() => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.type = i < 3 ? 'sine' : 'triangle';
                    osc.frequency.value = freq;
                    gain.gain.setValueAtTime(0.3, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
                    osc.start();
                    osc.stop(ctx.currentTime + 0.4);
                }, i * 150);
            });
        } else if (type === 'slotCoin') {
            // Coin drop
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(1200, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.2, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
            osc.start();
            osc.stop(ctx.currentTime + 0.1);
        }
        // ROULETTE SOUNDS
        else if (type === 'spin' || type === 'rouletteSpin') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(80, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.5);
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
            osc.start();
            osc.stop(ctx.currentTime + 0.5);
        } else if (type === 'win') {
            [523, 659, 784, 1047].forEach((freq, i) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.type = 'sine';
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(0.2, ctx.currentTime + i * 0.15);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.15 + 0.3);
                osc.start(ctx.currentTime + i * 0.15);
                osc.stop(ctx.currentTime + i * 0.15 + 0.3);
            });
        } else if (type === 'lose') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(200, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.3);
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
            osc.start();
            osc.stop(ctx.currentTime + 0.3);
        } else if (type === 'ball') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'square';
            osc.frequency.setValueAtTime(800, ctx.currentTime);
            gain.gain.setValueAtTime(0.05, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
            osc.start();
            osc.stop(ctx.currentTime + 0.05);
        }
    } catch (e) {
        console.log('Audio not supported');
    }
}

// ==================== DATOS ====================
// Access code removed for security - use environment variable or server-side auth

// European Roulette - Orden exacto de ruleta europea
// El 0 está arriba, los números van en sentido horario
const EUROPEAN_ORDER = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26];

// Colores oficiales de la ruleta europea
const ROULETTE_COLORS = {
    0: 'green',
    1: 'red', 2: 'black', 3: 'red', 4: 'black', 5: 'red', 6: 'black',
    7: 'red', 8: 'black', 9: 'red', 10: 'black', 11: 'red', 12: 'black',
    13: 'red', 14: 'black', 15: 'red', 16: 'black', 17: 'red', 18: 'black',
    19: 'red', 20: 'black', 21: 'red', 22: 'black', 23: 'red', 24: 'black',
    25: 'red', 26: 'black', 27: 'red', 28: 'black', 29: 'red', 30: 'black',
    31: 'red', 32: 'black', 33: 'red', 34: 'black', 35: 'red', 36: 'black'
};

// Array de 37 números para compatibilidad
const ROULETTE_NUMBERS = EUROPEAN_ORDER.map(n => ({ num: n, color: ROULETTE_COLORS[n] }));

// === FUNCIONES DE LA RULETA EUROPEA ===

// Obtiene el índice del número en el orden europeo (0-36)
// @param {number} num - El número de la ruleta (0-36)
// @returns {number} Índice en el array EUROPEAN_ORDER (-1 si no existe)
function getEuropeanIndex(num) {
    return EUROPEAN_ORDER.indexOf(num);
}

// Calcula el ángulo objetivo para un número en la ruleta
// @param {number} num - El número de la ruleta (0-36)
// @returns {number} Ángulo en grados donde debe detenerse la bola
function getTargetAngle(num) {
    const index = getEuropeanIndex(num);
    if (index === -1) return 0;
    
    // Cada número ocupa 360/37 grados
    const slotAngle = 360 / 37;
    
    // El 0 está a -90° (arriba), los números van en sentido horario
    // El índice 0 (número 0) debe estar arriba
    const angle = -90 + (index * slotAngle);
    
    return angle;
}

// Obtiene las coordenadas X,Y para posicionar un número en la ruleta
// @param {number} num - El número de la ruleta
// @param {number} radius - Radio en porcentaje (ej: 40)
// @returns {object} {x, y} coordenadas en porcentaje
function getWheelPosition(num, radius = 40) {
    const angle = getTargetAngle(num);
    const radians = angle * (Math.PI / 180);
    
    return {
        x: 50 + radius * Math.cos(radians),
        y: 50 + radius * Math.sin(radians)
    };
}

// === ANIMACIONES DE LA RULETA ===

// Calcula la rotación necesaria para que un número quede debajo del puntero
// @param {number} winningNumber - Número ganador (0-36)
// @returns {number} Rotación en grados
function getWheelRotation(winningNumber) {
    const targetAngle = getTargetAngle(winningNumber); // Ángulo donde está el número
    const slotAngle = 360 / 37;
    
    // El puntero está arriba (0°), los números van en sentido horario
    // Para que el número quede arriba, necesitamos rotar la ruleta
    // en sentido antihorario para "traer" el número arriba
    const rotationToTop = -targetAngle;
    
    // Añadir vueltas completas (mínimo 5) para efecto realista
    const fullSpins = 1800; // 5 vueltas
    
    return fullSpins + rotationToTop;
}

// Anima la ruleta para que el número ganador quede debajo del puntero
// @param {number} winningNumber - Número ganador
// @param {HTMLElement} wheelSpinner - Elemento del spinner
// @param {Function} onComplete - Callback cuando termine
function animateWheelTo(winningNumber, wheelSpinner, onComplete) {
    if (!wheelSpinner) {
        if (onComplete) onComplete();
        return;
    }
    
    const rotation = getWheelRotation(winningNumber);
    
    // Animación suave con deceleración realista
    wheelSpinner.style.transition = 'transform 5s cubic-bezier(0.17, 0.67, 0.12, 0.99)';
    wheelSpinner.style.transform = `rotate(${rotation}deg)`;
    
    // Callback después de la animación
    if (onComplete) {
        setTimeout(onComplete, 5000);
    }
}

// Calcula la posición de la bola para que caiga en el número ganador
// @param {number} winningNumber - Número ganador
// @returns {object} {x, y} coordenadas en porcentaje para la bola
function getBallPosition(winningNumber) {
    // La bola cae un poco más hacia el centro que los números
    const targetAngle = getTargetAngle(winningNumber);
    const radians = targetAngle * (Math.PI / 180);
    
    // Radio más pequeño para la bola (está más cerca del centro)
    const ballRadius = 35;
    
    return {
        x: 50 + ballRadius * Math.cos(radians),
        y: 50 + ballRadius * Math.sin(radians)
    };
}

// Anima la bola para que caiga exactamente en el número ganador
// @param {number} winningNumber - Número ganador
// @param {HTMLElement} ball - Elemento de la bola
// @param {Function} onComplete - Callback cuando termine
function animateBallTo(winningNumber, ball, onComplete) {
    if (!ball) {
        if (onComplete) onComplete();
        return;
    }
    
    const pos = getBallPosition(winningNumber);
    
    // Primero mostrar la bola
    ball.style.display = 'block';
    
    // Animación de la bola: spin rápido + caída al número
    // Fase 1: Girar rápido por la pista (1.5s)
    // Fase 2: Caer al número con rebote (2s)
    
    // Posición inicial: arriba
    ball.style.left = '50%';
    ball.style.top = '0%';
    ball.style.transform = 'translate(-50%, -50%)';
    ball.style.transition = 'none';
    
    // Después de un momento, empezar a girar
    setTimeout(() => {
        // Fase de spin rápido por la pista
        ball.style.transition = 'left 1.5s ease-out, top 1.5s ease-out';
        
        // Girar por la pista primero (varias vueltas)
        // Usamos posiciones intermedias para simular el giro
        let spinTime = 0;
        const spinInterval = setInterval(() => {
            // Posición aleatoria en la pista mientras gira
            const randomAngle = Math.random() * 360;
            const rad = randomAngle * (Math.PI / 180);
            ball.style.left = (50 + 42 * Math.cos(rad)) + '%';
            ball.style.top = (50 + 42 * Math.sin(rad)) + '%';
            
            spinTime += 100;
            if (spinTime >= 1200) {
                clearInterval(spinInterval);
                
                // Ahora caer al número específico
                ball.style.transition = 'left 2s cubic-bezier(0.25, 0.46, 0.45, 0.94), top 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                ball.style.left = pos.x + '%';
                ball.style.top = pos.y + '%';
                
                // Pequeño rebote al caer
                setTimeout(() => {
                    ball.style.transition = 'left 0.15s ease-out, top 0.15s ease-out';
                    const bounceOffset = 3; // pixels de rebote
                    ball.style.top = (pos.y - bounceOffset/2) + '%';
                    
                    setTimeout(() => {
                        ball.style.top = pos.y + '%';
                        
                        if (onComplete) {
                            setTimeout(onComplete, 200);
                        }
                    }, 150);
                }, 1800);
            }
        }, 100);
    }, 300);
}

const SLOT_SYMBOLS = ['🗝️', '📜', '💰', '👑', '🎭', '🕯️'];
const SLOT_PAYOUTS = {
    '👑': 50,   // Crown - highest
    '🗝️': 30,   // Key
    '📜': 20,   // Secret scroll
    '💰': 15,   // Money bag
    '🎭': 10,   // Mask
    '🕯️': 5    // Candle - lowest
};

// ==================== JACKPOT ACUMULATIVO ====================
let jackpotState = {
    current: 5000,
    base: 5000,
    lastWin: 0,
    lastWinTime: null,
    progress: 0
};

// Inicializar jackpot
function initJackpot() {
    // Cargar jackpot guardado
    const saved = localStorage.getItem('underdeck_jackpot');
    if (saved) {
        jackpotState = JSON.parse(saved);
    }
    updateJackpotDisplay();
    
    // Aumentar jackpot progresivamente cada 10 segundos
    setInterval(() => {
        if (!gameState.isSpinning) {
            jackpotState.current += Math.floor(Math.random() * 50) + 10;
            jackpotState.progress = (jackpotState.current - jackpotState.base) / 1000;
            updateJackpotDisplay();
            saveJackpot();
        }
    }, 10000);
    
    // Añadir al jackpot cada vez que alguien apuesta
    window.addToJackpot = function(amount) {
        jackpotState.current += Math.floor(amount * 0.1); // 10% de la apuesta va al jackpot
        jackpotState.progress = (jackpotState.current - jackpotState.base) / 1000;
        updateJackpotDisplay();
    };
}

function updateJackpotDisplay() {
    const jackpotEl = document.getElementById('slots-jackpot');
    if (jackpotEl) {
        jackpotEl.textContent = jackpotState.current.toLocaleString();
        // Efecto de shimmer cuando aumenta
        jackpotEl.style.textShadow = `0 0 ${10 + Math.random() * 20}px rgba(255, 215, 0, 0.8)`;
    }
}

function saveJackpot() {
    localStorage.setItem('underdeck_jackpot', JSON.stringify(jackpotState));
}

function triggerJackpotWin(amount) {
    jackpotState.lastWin = amount;
    jackpotState.lastWinTime = new Date();
    jackpotState.current = jackpotState.base; // Reset jackpot
    jackpotState.progress = 0;
    saveJackpot();
    
    // Mostrar animación de jackpotwin
    showJackpotAnimation(amount);
}

function showJackpotAnimation(amount) {
    const container = document.querySelector('.jackpot-box');
    if (container) {
        container.classList.add('jackpot-winning');
        
        // Crear elementos de celebración
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'jackpot-particle';
                particle.innerHTML = '💰';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 0.5 + 's';
                container.appendChild(particle);
                
                setTimeout(() => particle.remove(), 2000);
            }, i * 100);
        }
        
        setTimeout(() => {
            container.classList.remove('jackpot-winning');
        }, 3000);
    }
    
    showToast(`🎉 JACKPOT DE ${amount.toLocaleString()} FICHAS! 🎉`, 'success');
    playSound('slotJackpot');
}

// ==================== ESTADO ====================
let state = {
    fichas: 1000,
    totalFichasGanadas: 0,
    fichasInicializadas: false,
    rewards: {
        drop: false,
        badge: false,
        code: false
    },
    dropReclamado: false,
    selectedBet: 'red',
    rouletteHistory: [],
    slotsHistory: []
};

// Estado de juego
let isSpinning = false;
let isBettingLocked = false;
let soundEnabled = true;

// Sistema de bloqueo durante el spin
function setBettingLocked(locked) {
    isBettingLocked = locked;
    const overlay = document.getElementById('no-more-bets-overlay');
    const betButtons = document.querySelectorAll('.roulette-bet-btn, .num-btn, .zero-btn');
    const betInputs = document.querySelectorAll('.bet-adjuster button, #roulette-bet');
    const clearBtn = document.getElementById('clear-bets');
    
    if (overlay) {
        if (locked) {
            overlay.classList.add('active');
        } else {
            overlay.classList.remove('active');
        }
    }
    
    // Disable bet buttons during spin
    betButtons.forEach(btn => {
        btn.disabled = locked;
    });
    
    // Disable bet inputs during spin
    betInputs.forEach(input => {
        input.disabled = locked;
    });
    
    if (clearBtn) {
        clearBtn.disabled = locked;
    }
}

// Función para limpiar apuestas
function clearBets() {
    if (isBettingLocked) return;
    
    const betButtons = document.querySelectorAll('.roulette-bet-btn.selected, .num-btn.selected');
    betButtons.forEach(btn => btn.classList.remove('selected'));
    
    window.clearRouletteSelection();
}

// Toggle de sonido
function toggleSound() {
    soundEnabled = !soundEnabled;
    const btn = document.getElementById('sound-toggle');
    if (btn) {
        if (soundEnabled) {
            btn.classList.remove('muted');
            btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>';
        } else {
            btn.classList.add('muted');
            btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>';
        }
    }
}

// Modificar playSound para respetar el toggle
const originalPlaySound = playSound;
playSound = function(type) {
    if (!soundEnabled) return;
    originalPlaySound(type);
};

// ==================== LOCALSTORAGE ====================
function loadState() {
    const saved = localStorage.getItem('underdeck_state');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            // Validate loaded state has required fields
            if (parsed && typeof parsed.fichas === 'number') {
                state = { ...state, ...parsed };
            }
        } catch (e) {
            console.error('Failed to load saved state, using defaults:', e);
            localStorage.removeItem('underdeck_state');
        }
    }
    updateFichasDisplay();
}

function saveState() {
    localStorage.setItem('underdeck_state', JSON.stringify(state));
}

// ==================== SISTEMA DE AUDIO ====================
// (audio functions already defined above)

// Bet adjustment function
function adjustBet(amount) {
    const input = document.getElementById('slots-bet');
    let currentValue = parseInt(input.value) || 10;
    let newValue = currentValue + amount;
    if (newValue < 1) newValue = 1;
    if (newValue > 1000) newValue = 1000;
    input.value = newValue;
}

// Roulette bet adjustment
function adjustRouletteBet(amount) {
    const input = document.getElementById('roulette-bet');
    let currentValue = parseInt(input.value) || 10;
    let newValue = currentValue + amount;
    if (newValue < 1) newValue = 1;
    // Sin límite máximo
    input.value = newValue;
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('message-toast');
    toast.textContent = message;
    toast.className = 'toast ' + type;
    toast.classList.remove('hidden');
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

function updateFichasDisplay() {
    document.getElementById('fichas-count').textContent = state.fichas;
    document.getElementById('fichas-gained').textContent = state.totalFichasGanadas;
    updateRewardsUI();
}

// ==================== NAVEGACIÓN ====================
function initNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.casino-section');
    
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetSection = btn.dataset.section;
            
            // Update buttons
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update sections
            sections.forEach(s => s.classList.remove('active'));
            document.getElementById(targetSection + '-section').classList.add('active');
        });
    });
}

// ==================== RULETA ====================
let rouletteSelectedBet = 'red';
let rouletteSelectedNumber = null;
let rouletteSelectedNumbers = []; // For multi-number bets (splits, corners, streets)
let rouletteBetAmount = 10;

// Roulette bet types
const ROULETTE_BET_TYPES = {
    // Outside bets
    red: { name: 'Rojo', payout: 2, color: '#c41e3a' },
    black: { name: 'Negro', payout: 2, color: '#1a1a1a' },
    even: { name: 'Par', payout: 2 },
    odd: { name: 'Impar', payout: 2 },
    low: { name: '1-18', payout: 2 },
    high: { name: '19-36', payout: 2 },
    // Dozens
    dozen1: { name: '1st 12', payout: 3, numbers: [1,2,3,4,5,6,7,8,9,10,11,12] },
    dozen2: { name: '2nd 12', payout: 3, numbers: [13,14,15,16,17,18,19,20,21,22,23,24] },
    dozen3: { name: '3rd 12', payout: 3, numbers: [25,26,27,28,29,30,31,32,33,34,35,36] },
    // Columns
    col1: { name: 'Column 1', payout: 3, numbers: [1,4,7,10,13,16,19,22,25,28,31,34] },
    col2: { name: 'Column 2', payout: 3, numbers: [2,5,8,11,14,17,20,23,26,29,32,35] },
    col3: { name: 'Column 3', payout: 3, numbers: [3,6,9,12,15,18,21,24,27,30,33,36] },
    // Special multi-number bets
    firstFour: { name: 'First Four', payout: 8, numbers: [0,1,2,3] }, // European only
    topLine: { name: 'Top Line', payout: 6, numbers: [0,1,2,3] }, // American
    // Single number
    number: { name: 'Número', payout: 35 }
};

function initRoulette() {
    const spinBtn = document.getElementById('spin-roulette');
    const betInput = document.getElementById('roulette-bet');
    // Use correct selectors for new roulette table
    const betButtons = document.querySelectorAll('.roulette-bet-btn');
    const numButtons = document.querySelectorAll('.num-btn');
    const wheelSpinner = document.getElementById('wheel-spinner');
    
    // Populate wheel numbers - posiciones reales en círculo usando ORDEN EUROPEO
    if (wheelSpinner) {
        wheelSpinner.innerHTML = '';
        
        // Usar EUROPEAN_ORDER para posicionar correctamente los números
        EUROPEAN_ORDER.forEach((num, index) => {
            const numDiv = document.createElement('div');
            numDiv.className = 'wheel-number';
            numDiv.dataset.n = num;
            numDiv.dataset.color = ROULETTE_COLORS[num];
            numDiv.textContent = num;
            
            // Calcular ángulo usando getTargetAngle para precisión exacta
            const angle = getTargetAngle(num);
            const radians = angle * (Math.PI / 180);
            
            // Posicionar usando transform - radio de 40% del diámetro
            const radius = 40;
            const x = 50 + radius * Math.cos(radians);
            const y = 50 + radius * Math.sin(radians);
            
            numDiv.style.left = x + '%';
            numDiv.style.top = y + '%';
            numDiv.style.transform = 'translate(-50%, -50%)';
            
            wheelSpinner.appendChild(numDiv);
        });
    }
    
    // Apply red/black classes to number buttons
    const RED_NUMBERS = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
    const BLACK_NUMBERS = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];
    
    numButtons.forEach(btn => {
        const num = parseInt(btn.dataset.num);
        if (num === 0) {
            btn.classList.add('green');
        } else if (RED_NUMBERS.includes(num)) {
            btn.classList.add('red');
        } else if (BLACK_NUMBERS.includes(num)) {
            btn.classList.add('black');
        }
    });
    
    // Reset selection function
    window.clearRouletteSelection = function() {
        betButtons.forEach(b => b.classList.remove('selected'));
        numButtons.forEach(n => n.classList.remove('selected'));
        rouletteSelectedBet = null;
        rouletteSelectedNumber = null;
        rouletteSelectedNumbers = [];
        updateRouletteBetDisplay();
    };
    
    // Bet type buttons (outside bets, dozens, columns)
    betButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Only clear outside bet selection, NOT number selections
            // This allows users to switch between outside bets without losing their number bets
            betButtons.forEach(b => {
                if (b !== btn) b.classList.remove('selected');
            });
            btn.classList.add('selected');
            rouletteSelectedBet = btn.dataset.bet;
            rouletteSelectedNumber = null;
            // Note: We don't clear rouletteSelectedNumbers here to preserve number bets
            updateRouletteBetDisplay();
        });
    });
    
    // Number buttons - allow multiple selection
    numButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const num = parseInt(btn.dataset.num);
            
            // Toggle selection
            if (btn.classList.contains('selected')) {
                btn.classList.remove('selected');
                rouletteSelectedNumbers = rouletteSelectedNumbers.filter(n => n !== num);
            } else {
                // Clear outside bet selection when clicking numbers
                betButtons.forEach(b => b.classList.remove('selected'));
                rouletteSelectedBet = null;
                
                btn.classList.add('selected');
                rouletteSelectedNumbers.push(num);
            }
            
            // Update bet type based on number of selected
            if (rouletteSelectedNumbers.length === 1) {
                rouletteSelectedNumber = rouletteSelectedNumbers[0].toString();
                rouletteSelectedBet = 'number';
            } else if (rouletteSelectedNumbers.length === 2) {
                rouletteSelectedNumber = null;
                rouletteSelectedBet = 'split';
            } else if (rouletteSelectedNumbers.length === 3) {
                rouletteSelectedNumber = null;
                rouletteSelectedBet = 'street';
            } else if (rouletteSelectedNumbers.length === 4) {
                rouletteSelectedNumber = null;
                rouletteSelectedBet = 'corner';
            } else {
                rouletteSelectedNumber = null;
                rouletteSelectedBet = 'multi';
            }
            
            updateRouletteBetDisplay();
        });
    });
    
    // Spin button
    spinBtn.addEventListener('click', spinRoulette);
    
    // Clear bets button
    const clearBtn = document.getElementById('clear-bets');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearBets);
    }
    
    // Set default
    const defaultRed = document.querySelector('.roulette-bet-btn[data-bet="red"]');
    if (defaultRed) defaultRed.classList.add('selected');
    
    updateRouletteBetDisplay();
}

// Initialize sound toggle
function initSoundToggle() {
    const soundBtn = document.getElementById('sound-toggle');
    if (soundBtn) {
        soundBtn.addEventListener('click', toggleSound);
    }
}

// Update bet display
function updateRouletteBetDisplay() {
    const betTypeDisplay = document.getElementById('current-bet-type');
    const betAmountDisplay = document.getElementById('current-bet-amount');
    const betInput = document.getElementById('roulette-bet');
    
    let betType = '';
    let betMultiplier = 1;
    
    if (rouletteSelectedNumbers.length > 0) {
        // Multi-number bet
        if (rouletteSelectedNumbers.length === 1) {
            betType = `Número ${rouletteSelectedNumbers[0]}`;
            betMultiplier = 35;
        } else if (rouletteSelectedNumbers.length === 2) {
            betType = `Pleno (2 números)`;
            betMultiplier = 17;
        } else if (rouletteSelectedNumbers.length === 3) {
            betType = `Calle (3 números)`;
            betMultiplier = 11;
        } else if (rouletteSelectedNumbers.length === 4) {
            betType = `Esquina (4 números)`;
            betMultiplier = 8;
        } else {
            betType = `${rouletteSelectedNumbers.length} números`;
            betMultiplier = 35 / rouletteSelectedNumbers.length;
        }
    } else if (rouletteSelectedBet && ROULETTE_BET_TYPES[rouletteSelectedBet]) {
        const bet = ROULETTE_BET_TYPES[rouletteSelectedBet];
        betType = bet.name;
        betMultiplier = bet.payout;
    }
    
    if (betTypeDisplay) betTypeDisplay.textContent = betType || 'Ninguna';
    
    const currentBet = parseInt(betInput?.value || 10);
    if (betAmountDisplay) {
        const potentialWin = currentBet * betMultiplier;
        betAmountDisplay.textContent = `${currentBet} fichas (ganancia: ${potentialWin})`;
    }
}

function spinRoulette() {
    const betInput = document.getElementById('roulette-bet');
    const bet = parseInt(betInput.value);
    const spinBtn = document.getElementById('spin-roulette');
    
    if (isSpinning) return;
    
    if (isNaN(bet) || bet <= 0) {
        showToast("Apuesta inválida", "error");
        return;
    }
    
    if (bet > state.fichas) {
        showToast("No tienes suficientes fichas", "error");
        return;
    }
    
    // Activar estado spinning y bloquear apuestas
    isSpinning = true;
    setBettingLocked(true);
    spinBtn.disabled = true;
    
    // Initialize audio
    try {
        initAudio();
    } catch(e) {}
    
    // Play spin sound
    playSound('rouletteSpin');
    
    // Deduct bet
    state.fichas -= bet;
    saveState();
    updateFichasDisplay();
    
    // Get winning number (0-36)
    const winningNumber = Math.floor(Math.random() * 37);
    
    // Elements
    const wheelSpinner = document.getElementById('wheel-spinner');
    const rouletteLights = document.querySelector('.roulette-lights');
    const ball = document.getElementById('roulette-ball');
    
    // === FASE 1: PREPARACIÓN ===
    
    // Reset wheel position
    wheelSpinner.style.transition = 'none';
    wheelSpinner.style.transform = 'rotate(0deg)';
    
    // Reset ball - posición inicial arriba
    if (ball) {
        ball.style.display = 'block';
        ball.style.left = '50%';
        ball.style.top = '5%';
        ball.style.transition = 'none';
    }
    
    // Add lights animation
    if (rouletteLights) {
        rouletteLights.classList.add('playing');
    }
    
    // === FASE 2: SPIN - La ruleta gira ===
    
    // Calcular rotación final para que el número quede debajo del puntero
    const targetAngle = getTargetAngle(winningNumber);
    const finalRotation = 1800 + (-90 - targetAngle);
    
    // Iniciar animación de la ruleta
    setTimeout(() => {
        wheelSpinner.style.transition = 'transform 5s cubic-bezier(0.17, 0.67, 0.12, 0.99)';
        wheelSpinner.style.transform = `rotate(${finalRotation}deg)`;
        
        // Animación de la bola: cae hacia el centro
        if (ball) {
            ball.style.transition = 'top 2s ease-in';
            ball.style.top = '15%';
        }
    }, 100);
    
    // === FASE 4: RESULTADO ===
    setTimeout(() => {
        const resultDisplay = document.getElementById('roulette-result-number');
        resultDisplay.textContent = winningNumber;
        resultDisplay.className = 'result-number ' + ROULETTE_COLORS[winningNumber];
        
        // Highlight winning number on wheel
        const wheelNumbers = document.querySelectorAll('.wheel-number');
        wheelNumbers.forEach(num => {
            if (parseInt(num.dataset.n) === winningNumber) {
                num.classList.add('winner');
                setTimeout(() => num.classList.remove('winner'), 2000);
            }
        });
        
        // Stop lights
        if (rouletteLights) {
            rouletteLights.classList.remove('playing');
        }
        
        // Pequeño rebote de la bola
        if (ball) {
            ball.style.transition = 'top 0.1s ease-out';
            ball.style.top = '8%';
            setTimeout(() => {
                ball.style.top = '10%';
            }, 100);
        }
        
        // Resolve bet
        resolveRouletteBet({ num: winningNumber, color: ROULETTE_COLORS[winningNumber] }, bet);
        
        // Desbloquear apuestas
        setTimeout(() => {
            isSpinning = false;
            setBettingLocked(false);
            spinBtn.disabled = false;
        }, 500);
        
    }, 5300);
}

function resolveRouletteBet(result, bet) {
    const winNumber = result.num;
    const winColor = result.color;
    let won = false;
    let multiplier = 0;
    let betType = '';
    
    // Check for multi-number bets first
    if (rouletteSelectedNumbers.length > 0) {
        // Multi-number bet
        if (rouletteSelectedNumbers.length === 1) {
            // Single number
            betType = `Número ${rouletteSelectedNumbers[0]}`;
            won = rouletteSelectedNumbers[0] === winNumber;
            multiplier = 35;
        } else if (rouletteSelectedNumbers.length === 2) {
            // Split bet (2 numbers)
            betType = `Pleno (${rouletteSelectedNumbers.join(' & ')})`;
            won = rouletteSelectedNumbers.includes(winNumber);
            multiplier = 17;
        } else if (rouletteSelectedNumbers.length === 3) {
            // Street bet (3 numbers)
            betType = `Calle (${rouletteSelectedNumbers.join(', ')})`;
            won = rouletteSelectedNumbers.includes(winNumber);
            multiplier = 11;
        } else if (rouletteSelectedNumbers.length >= 4) {
            // Corner bet (4 numbers)
            betType = `Esquina (${rouletteSelectedNumbers.slice(0, 4).join(', ')}${rouletteSelectedNumbers.length > 4 ? '...' : ''})`;
            won = rouletteSelectedNumbers.includes(winNumber);
            multiplier = 8;
        }
    } else if (rouletteSelectedNumber) {
        // Single number bet (legacy support)
        betType = `Número ${rouletteSelectedNumber}`;
        if (parseInt(rouletteSelectedNumber) === winNumber) {
            won = true;
            multiplier = 35;
        }
    } else if (rouletteSelectedBet) {
        // Other bets
        betType = rouletteSelectedBet;
        switch (rouletteSelectedBet) {
            case 'red':
                won = winColor === 'red';
                multiplier = 2;
                break;
            case 'black':
                won = winColor === 'black';
                multiplier = 2;
                break;
            case 'odd':
                won = winNumber !== 0 && winNumber % 2 !== 0;
                multiplier = 2;
                break;
            case 'even':
                won = winNumber !== 0 && winNumber % 2 === 0;
                multiplier = 2;
                break;
            case 'low':
                won = winNumber >= 1 && winNumber <= 18;
                multiplier = 2;
                break;
            case 'high':
                won = winNumber >= 19 && winNumber <= 36;
                multiplier = 2;
                break;
            case 'dozen1':
                won = winNumber >= 1 && winNumber <= 12;
                multiplier = 3;
                break;
            case 'dozen2':
                won = winNumber >= 13 && winNumber <= 24;
                multiplier = 3;
                break;
            case 'dozen3':
                won = winNumber >= 25 && winNumber <= 36;
                multiplier = 3;
                break;
            case 'col1':
                won = [1,4,7,10,13,16,19,22,25,28,31,34].includes(winNumber);
                multiplier = 3;
                break;
            case 'col2':
                won = [2,5,8,11,14,17,20,23,26,29,32,35].includes(winNumber);
                multiplier = 3;
                break;
            case 'col3':
                won = [3,6,9,12,15,18,21,24,27,30,33,36].includes(winNumber);
                multiplier = 3;
                break;
            case 'firstFour':
                won = [0,1,2,3].includes(winNumber);
                multiplier = 8;
                break;
        }
    }
    
    const winAmount = bet * multiplier;
    
    if (won) {
        state.fichas += winAmount;
        state.totalFichasGanadas += (winAmount - bet);
        showToast(`¡GANASTE! ${winAmount} fichas (${betType})`, "success");
        playSound('win');
    } else {
        showToast(`Perdiste. Salió: ${winNumber} (${winColor})`, "error");
        playSound('lose');
    }
    
    saveState();
    updateFichasDisplay();
    addRouletteHistory(result, won);
}

function addRouletteHistory(result, won) {
    state.rouletteHistory.unshift({
        number: result.num,
        color: result.color,
        won: won
    });
    
    // Keep only last 10
    if (state.rouletteHistory.length > 10) {
        state.rouletteHistory.pop();
    }
    
    saveState();
    renderRouletteHistory();
}

function renderRouletteHistory() {
    const container = document.getElementById('roulette-history');
    container.innerHTML = '';
    state.rouletteHistory.forEach(h => {
        const item = document.createElement('div');
        item.className = 'history-item ' + (h.won ? 'win' : 'lose');
        item.textContent = h.number + ' (' + h.color + ')';
        container.appendChild(item);
    });
}

// ==================== TRAGAPERRAS ====================
function initSlots() {
    const spinBtn = document.getElementById('spin-slots');
    const betInput = document.getElementById('slots-bet');
    
    spinBtn.addEventListener('click', () => {
        // Initialize audio on user interaction
        try {
            initAudio();
        } catch(e) {}
        
        const bet = parseInt(betInput.value) || 10;
        
        if (isNaN(bet) || bet <= 0 || bet > 1000) {
            showToast("Apuesta inválida (1-1000)", "error");
            return;
        }
        
        if (bet > state.fichas) {
            showToast("No tienes suficientes fichas", "error");
            return;
        }
        
        state.fichas -= bet;
        saveState();
        updateFichasDisplay();
        
        // Play lever and spin sounds
        playSound('slotLever');
        setTimeout(() => playSound('slotSpin'), 250);
        
        spinSlots(bet);
    });
    
    renderSlotsHistory();
}

function spinSlots(bet) {
    const reels = [
        document.querySelector('#slot1 .reel-strip'),
        document.querySelector('#slot2 .reel-strip'),
        document.querySelector('#slot3 .reel-strip')
    ];
    
    const reelElements = [
        document.getElementById('slot1'),
        document.getElementById('slot2'),
        document.getElementById('slot3')
    ];
    
    const spinBtn = document.getElementById('spin-slots');
    const lastWinDisplay = document.getElementById('slots-last-win');
    const lightsContainer = document.querySelector('.slots-lights');
    
    spinBtn.disabled = true;
    lastWinDisplay.textContent = '0';
    
    // Add lights animation
    lightsContainer.classList.add('playing');
    
    // Clear previous winners
    reelElements.forEach(r => r.classList.remove('winner'));
    
    // Generate final results BEFORE animation
    const finalResults = reels.map(() => 
        SLOT_SYMBOLS[Math.floor(Math.random() * SLOT_SYMBOLS.length)]
    );
    
    // Animation for each reel with staggered timing
    let completedReels = 0;
    
    reels.forEach((reel, index) => {
        const reelElement = reelElements[index];
        let spinCount = 0;
        const maxSpins = 15 + index * 3;
        
        reelElement.classList.add('spinning');
        
        const spinInterval = setInterval(() => {
            spinCount++;
            reel.textContent = SLOT_SYMBOLS[Math.floor(Math.random() * SLOT_SYMBOLS.length)];
            
            if (spinCount >= maxSpins) {
                clearInterval(spinInterval);
                reelElement.classList.remove('spinning');
                reel.textContent = finalResults[index];
                
                completedReels++;
                
                // Play stop sound for each reel
                playSound('slotStop');
                
                if (completedReels === 3) {
                    checkSlotResults(finalResults, bet, reelElements, lastWinDisplay, lightsContainer, spinBtn);
                }
            }
        }, 100 + index * 50);
    });
}

function checkSlotResults(results, bet, reelElements, lastWinDisplay, lightsContainer, spinBtn) {
    const multiplierDisplay = document.getElementById('slots-multiplier');
    let currentMultiplier = 1;
    let totalWin = 0;
    let winLines = [];
    let isJackpot = false;
    
    // Clear previous winners
    reelElements.forEach(r => r.classList.remove('winner', 'bonus-win'));
    
    // Añadir parte de la apuesta al jackpot
    if (typeof addToJackpot === 'function') {
        addToJackpot(bet);
    }
    
    // Check for 3 equal symbols (jackpot)
    const firstSymbol = results[0];
    const allSame = results.every(s => s === firstSymbol);
    
    if (allSame) {
        // All 3 symbols match - JACKPOT!
        reelElements.forEach(r => r.classList.add('winner'));
        const payout = SLOT_PAYOUTS[firstSymbol] || 0;
        totalWin = bet * payout;
        currentMultiplier = payout;
        
        // Si es el símbolo más alto (corona), también gana el jackpot acumulativo
        if (firstSymbol === '👑') {
            isJackpot = true;
            totalWin += jackpotState.current;
            triggerJackpotWin(jackpotState.current);
        }
        
        winLines.push(`JACKPOT! ${firstSymbol} x${payout}`);
    } else {
        // Check for pairs (2 matching symbols)
        const symbolCounts = {};
        results.forEach(s => {
            symbolCounts[s] = (symbolCounts[s] || 0) + 1;
        });
        
        // Find pairs
        Object.keys(symbolCounts).forEach(symbol => {
            if (symbolCounts[symbol] === 2) {
                const indices = results.map((s, i) => s === symbol ? i : -1).filter(i => i >= 0);
                if (indices.length >= 2) {
                    reelElements[indices[0]].classList.add('winner');
                    reelElements[indices[1]].classList.add('winner');
                    totalWin += bet * 2;
                    currentMultiplier = Math.max(currentMultiplier, 2);
                    winLines.push(`Par: ${symbol} x2`);
                }
            }
        });
    }
    
    // Update multiplier display
    if (multiplierDisplay) {
        multiplierDisplay.textContent = `x${currentMultiplier}`;
        multiplierDisplay.classList.add('pulse');
        setTimeout(() => multiplierDisplay.classList.remove('pulse'), 500);
    }
    
    lightsContainer.classList.remove('playing');
    resolveSlotsBet(results, bet, totalWin, isJackpot);
    spinBtn.disabled = false;
}

function resolveSlotsBet(results, bet, totalWin, isJackpot = false) {
    const lastWinDisplay = document.getElementById('slots-last-win');
    
    // Update the prize display
    if (lastWinDisplay) {
        lastWinDisplay.textContent = totalWin;
    }
    
    if (totalWin > 0) {
        state.fichas += totalWin;
        state.totalFichasGanadas += (totalWin - bet);
        
        if (isJackpot) {
            showToast(`🎉 JACKPOT! ¡GANASTE ${totalWin.toLocaleString()} fichas! 🎉`, 'success');
            playSound('slotJackpot');
        } else if (totalWin >= bet * 30) {
            showToast(`¡GRAN GANADA! ${totalWin} fichas`, 'success');
            playSound('slotJackpot');
            setTimeout(() => playSound('slotCoin'), 200);
        } else {
            showToast(`¡GANASTE! ${totalWin} fichas`, 'success');
            playSound('slotWin');
            setTimeout(() => playSound('slotCoin'), 100);
        }
    } else {
        showToast("Sin suerte. Intenta de nuevo.", "error");
        playSound('lose');
    }
    
    saveState();
    updateFichasDisplay();
    addSlotsHistory(results, totalWin);
}

function addSlotsHistory(results, win) {
    state.slotsHistory.unshift({
        symbols: results.join(' '),
        won: win > 0,
        amount: win
    });
    
    if (state.slotsHistory.length > 10) {
        state.slotsHistory.pop();
    }
    
    saveState();
    renderSlotsHistory();
}

function renderSlotsHistory() {
    const container = document.getElementById('slots-history');
    container.innerHTML = '';
    state.slotsHistory.forEach(h => {
        const item = document.createElement('div');
        item.className = 'history-item ' + (h.won ? 'win' : 'lose');
        item.textContent = h.symbols + ' - ' + (h.won ? '+' + h.amount : '0');
        container.appendChild(item);
    });
}

// ==================== RECOMPENSAS ====================
function updateRewardsUI() {
    const progress = document.getElementById('reward-progress');
    const needed = document.getElementById('fichas-needed');
    
    // Calculate progress
    let currentNeeded = 1000;
    let percentage = Math.min((state.totalFichasGanadas / currentNeeded) * 100, 100);
    progress.style.width = percentage + '%';
    
    // Check rewards
    const rewardCards = document.querySelectorAll('.reward-card');
    
    // Drop reward (1000 fichas)
    if (state.totalFichasGanadas >= 1000 && !state.rewards.drop) {
        state.rewards.drop = true;
        saveState();
    }
    
    // Badge reward (5000 fichas)
    if (state.totalFichasGanadas >= 5000 && !state.rewards.badge) {
        state.rewards.badge = true;
        saveState();
    }
    
    // Code reward (10000 fichas)
    if (state.totalFichasGanadas >= 10000 && !state.rewards.code) {
        state.rewards.code = true;
        saveState();
    }
    
    // Update card states
    const cards = document.querySelectorAll('.reward-card');
    cards.forEach(card => {
        const reward = card.dataset.reward;
        if (state.rewards[reward]) {
            card.classList.remove('locked');
            card.classList.add('unlocked');
        }
    });
    
    // Show secret drop if unlocked
    if (state.rewards.drop) {
        document.getElementById('secret-drop').classList.remove('hidden');
    }
}

function initRewards() {
    const claimBtn = document.querySelector('.btn-claim');
    
    claimBtn.addEventListener('click', () => {
        if (state.rewards.drop && !state.dropReclamado) {
            state.dropReclamado = true;
            saveState();
            showToast("¡DROP RECLAMADO! Revisa el catálogo", "success");
            claimBtn.textContent = "RECLAMADO";
            claimBtn.disabled = true;
        }
    });
}

// ==================== FICHAS ====================
function initFichas() {
    const addBtn = document.getElementById('add-fichas');
    
    addBtn.addEventListener('click', () => {
        state.fichas += 100;
        saveState();
        updateFichasDisplay();
        showToast("+100 fichas añadidas", "success");
    });
}

// ==================== INICIALIZACIÓN ====================
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initNavigation();
    initRoulette();
    initSlots();
    initRewards();
    initFichas();
    initSoundToggle();
    renderRouletteHistory();
    renderSlotsHistory();
    
    // Easter egg: Konami code gives bonus chips (only after access granted)
    let konamiIndex = 0;
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', (e) => {
        // Only activate if already has access
        if (localStorage.getItem('underdeck_access') !== 'true') return;
        
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                // Give bonus chips instead of bypassing access
                state.fichas += 50;
                saveState();
                updateFichasDisplay();
                showToast("+50 fichas bonus por el easter egg!", "success");
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
});

// ==================== EXPORTAR FUNCIONES ====================
// Limited API for external integration - read-only access
window.underdeck = {
    hasAccess: () => localStorage.getItem('underdeck_access') === 'true'
};
