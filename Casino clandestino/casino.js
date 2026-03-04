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

// European Roulette Numbers (clockwise from top)
const ROULETTE_NUMBERS = [
    { num: 0, color: 'green' },
    { num: 32, color: 'red' },
    { num: 15, color: 'black' },
    { num: 19, color: 'red' },
    { num: 4, color: 'black' },
    { num: 21, color: 'red' },
    { num: 2, color: 'black' },
    { num: 25, color: 'red' },
    { num: 17, color: 'black' },
    { num: 34, color: 'red' },
    { num: 6, color: 'black' },
    { num: 27, color: 'red' },
    { num: 13, color: 'black' },
    { num: 36, color: 'red' },
    { num: 11, color: 'black' },
    { num: 30, color: 'red' },
    { num: 8, color: 'black' },
    { num: 23, color: 'red' },
    { num: 10, color: 'black' },
    { num: 5, color: 'red' },
    { num: 24, color: 'black' },
    { num: 16, color: 'red' },
    { num: 33, color: 'black' },
    { num: 1, color: 'red' },
    { num: 20, color: 'black' },
    { num: 14, color: 'red' },
    { num: 31, color: 'black' },
    { num: 9, color: 'red' },
    { num: 22, color: 'black' },
    { num: 18, color: 'red' },
    { num: 29, color: 'black' },
    { num: 7, color: 'red' },
    { num: 28, color: 'black' },
    { num: 12, color: 'red' },
    { num: 35, color: 'black' },
    { num: 3, color: 'red' }
];

const SLOT_SYMBOLS = ['🗝️', '📜', '💰', '👑', '🎭', '🕯️'];
const SLOT_PAYOUTS = {
    '👑': 50,   // Crown - highest
    '🗝️': 30,   // Key
    '📜': 20,   // Secret scroll
    '💰': 15,   // Money bag
    '🎭': 10,   // Mask
    '🕯️': 5    // Candle - lowest
};

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
    if (newValue > 10000) newValue = 10000;
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

// ==================== SISTEMA DE ACCESO ====================
function initAccessSystem() {
    const overlay = document.getElementById('access-overlay');
    const input = document.getElementById('access-code');
    const btn = document.getElementById('access-btn');
    const error = document.getElementById('access-error');
    
    // Verificar si ya tiene acceso (puedes personalizar esto)
    const hasAccess = localStorage.getItem('underdeck_access');
    if (hasAccess === 'true') {
        overlay.classList.add('hidden');
        document.getElementById('casino-container').classList.remove('hidden');
        return;
    }
    
    btn.addEventListener('click', () => checkAccess(input.value));
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkAccess(input.value);
    });
}

function checkAccess(code) {
    const error = document.getElementById('access-error');
    
    // Validate access code - In production, use server-side validation
    // For now, use a hardcoded code (should be environment variable or server-side)
    const VALID_ACCESS_CODES = ['UNDERDECK', 'CASINO2024', 'VIP_ACCESS'];
    const normalizedCode = code.trim().toUpperCase();
    
    if (VALID_ACCESS_CODES.includes(normalizedCode) && code.length >= 4) {
        localStorage.setItem('underdeck_access', 'true');
        document.getElementById('access-overlay').classList.add('hidden');
        document.getElementById('casino-container').classList.remove('hidden');
        showToast("¡Bienvenido al UNDERDECK!", "success");
    } else {
        error.textContent = "Código incorrecto. Acceso denegado.";
        showToast("Código incorrecto", "error");
    }
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
    
    // Populate wheel numbers
    if (wheelSpinner) {
        wheelSpinner.innerHTML = '';
        ROULETTE_NUMBERS.forEach((item, index) => {
            const numDiv = document.createElement('div');
            numDiv.className = 'wheel-number';
            numDiv.dataset.n = item.num;
            numDiv.dataset.color = item.color;
            numDiv.textContent = item.num;
            const angle = (index * 360 / ROULETTE_NUMBERS.length) - 90;
            numDiv.style.setProperty('--num-angle', angle + 'deg');
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
            // Clear previous selection
            window.clearRouletteSelection();
            btn.classList.add('selected');
            rouletteSelectedBet = btn.dataset.bet;
            rouletteSelectedNumber = null;
            rouletteSelectedNumbers = [];
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
    
    // Set default
    const defaultRed = document.querySelector('.roulette-bet-btn[data-bet="red"]');
    if (defaultRed) defaultRed.classList.add('selected');
    
    updateRouletteBetDisplay();
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
    
    if (isNaN(bet) || bet <= 0 || bet > 10000) {
        showToast("Apuesta inválida (1-10000)", "error");
        return;
    }
    
    if (bet > state.fichas) {
        showToast("No tienes suficientes fichas", "error");
        return;
    }
    
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
    
    spinBtn.disabled = true;
    
    // Get winning number
    const winningIndex = Math.floor(Math.random() * ROULETTE_NUMBERS.length);
    const winningNumber = ROULETTE_NUMBERS[winningIndex];
    
    // Elements
    const wheelSpinner = document.getElementById('wheel-spinner');
    const rouletteLights = document.querySelector('.roulette-lights');
    const ball = document.getElementById('roulette-ball');
    const wheel = document.getElementById('roulette-wheel');
    
    // Reset ball position
    if (ball) {
        ball.classList.remove('spinning');
        ball.style.cssText = '';
    }
    
    // Add lights animation
    if (rouletteLights) {
        rouletteLights.classList.add('playing');
    }
    
    // Reset wheel
    wheelSpinner.style.transition = 'none';
    wheelSpinner.style.transform = 'rotate(0deg)';
    
    // Calculate positions
    const wheelRotation = 1440 + (winningIndex * (360 / 37));
    
    // Start wheel spin
    setTimeout(() => {
        wheelSpinner.style.transition = 'transform 4s cubic-bezier(0.15, 0.9, 0.2, 1)';
        wheelSpinner.style.transform = `rotate(${wheelRotation}deg)`;
    }, 50);
    
    // Start ball spinning after wheel starts
    setTimeout(() => {
        if (ball) {
            ball.classList.add('spinning');
            // Ball spins counter to wheel, then slows down
            ball.style.cssText = `
                animation: ballSpin 3s ease-out forwards;
                --target-angle: ${-wheelRotation + 180}deg;
            `;
            
            // Ball clicking sounds
            let clickCount = 0;
            const clickInterval = setInterval(() => {
                playSound('ball');
                clickCount++;
                if (clickCount >= 15) clearInterval(clickInterval);
            }, 180);
        }
    }, 200);
    
    // Show result after spin completes
    setTimeout(() => {
        const resultDisplay = document.getElementById('roulette-result-number');
        resultDisplay.textContent = winningNumber.num;
        resultDisplay.className = 'result-number ' + winningNumber.color;
        
        // Stop lights
        if (rouletteLights) {
            rouletteLights.classList.remove('playing');
        }
        
        // Resolve bet
        resolveRouletteBet(winningNumber, bet);
        spinBtn.disabled = false;
    }, 4200);
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
    
    // Clear previous winners
    reelElements.forEach(r => r.classList.remove('winner', 'bonus-win'));
    
    // Check for 3 equal symbols (jackpot)
    const firstSymbol = results[0];
    const allSame = results.every(s => s === firstSymbol);
    
    if (allSame) {
        // All 3 symbols match - JACKPOT!
        reelElements.forEach(r => r.classList.add('winner'));
        const payout = SLOT_PAYOUTS[firstSymbol] || 0;
        totalWin = bet * payout;
        currentMultiplier = payout;
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
    resolveSlotsBet(results, bet, totalWin);
    spinBtn.disabled = false;
}

function resolveSlotsBet(results, bet, totalWin) {
    const lastWinDisplay = document.getElementById('slots-last-win');
    
    // Update the prize display
    if (lastWinDisplay) {
        lastWinDisplay.textContent = totalWin;
    }
    
    if (totalWin > 0) {
        state.fichas += totalWin;
        state.totalFichasGanadas += (totalWin - bet);
        showToast(`¡GANASTE! ${totalWin} fichas`, "success");
        // Different sounds for big win vs small win
        if (totalWin >= bet * 30) {
            playSound('slotJackpot');
            setTimeout(() => playSound('slotCoin'), 200);
        } else {
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
    initAccessSystem();
    initNavigation();
    initRoulette();
    initSlots();
    initRewards();
    initFichas();
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
