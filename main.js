// Función para crear copos de nieve
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.opacity = Math.random();
    snowflake.style.width = snowflake.style.height = Math.random() * 5 + 2 + 'px';
    
    const duration = Math.random() * 3 + 2;
    snowflake.style.animation = `snowfall ${duration}s linear infinite`;
    
    document.querySelector('.snow-container').appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

// Crear copos de nieve cada 50ms para un efecto más denso
setInterval(createSnowflake, 50);

// Función para hacer parpadear las luces del árbol
function twinkleTree() {
    const ornaments = document.querySelectorAll('.ornaments::before, .ornaments::after');
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    
    setInterval(() => {
        ornaments.forEach(ornament => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            ornament.style.background = randomColor;
        });
    }, 1000);
}

twinkleTree();

// Control de la música
const musicToggle = document.getElementById('music-toggle');
const christmasMusic = document.getElementById('christmas-music');

musicToggle.addEventListener('click', () => {
    if (christmasMusic.paused) {
        christmasMusic.play();
        musicToggle.textContent = '🔇 Pausar Música';
    } else {
        christmasMusic.pause();
        musicToggle.textContent = '🎵 Música Navideña';
    }
});

// Efecto de nieve al mover el ratón
document.addEventListener('mousemove', (e) => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = e.clientX + 'px';
    snowflake.style.top = e.clientY + 'px';
    snowflake.style.width = snowflake.style.height = '5px';
    snowflake.style.opacity = '0.8';
    document.querySelector('.snow-container').appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, 1500);
});

// Animación de los regalos
function animateGifts() {
    const gifts = document.querySelectorAll('.gift');
    gifts.forEach((gift, index) => {
        gift.style.animation = `giftBounce 0.5s ease-in-out ${index * 0.2}s infinite alternate`;
    });
}

animateGifts();

// Añadir keyframes para la animación de los regalos
const style = document.createElement('style');
style.textContent = `
    @keyframes giftBounce {
        from { transform: translateY(0); }
        to { transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);

