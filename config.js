let currentIndex = 0;
const diapositivas = document.querySelector('.diapositivas');
const indicadores = document.querySelectorAll('.indicador');
const carrusel = document.querySelector('.carrusel');
const mostrarCarruselBtn = document.getElementById('mostrarCarrusel');
const miMusica = document.getElementById('miMusica');

mostrarCarruselBtn.addEventListener('click', () => {
    carrusel.style.display = 'block';
    mostrarCarruselBtn.style.display = 'none';
    document.body.style.backgroundImage = "url(fondo.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    miMusica.play();
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    diapositivas.style.transform = `translateX(${offset}%)`;
    indicadores.forEach(indicador => indicador.classList.remove('active'));
    indicadores[currentIndex].classList.add('active');

    if (currentIndex === indicadores.length - 1) {
        startTypingAnimation();
    } else {
        textoAnimado.innerHTML = "";
    }
}

let startX = 0;
let isDragging = false;

diapositivas.addEventListener('mousedown', (e) => {
    startX = e.pageX;
    isDragging = true;
});


document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const diffX = e.pageX - startX;
    if (diffX > 50) {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateCarousel();
        isDragging = false;
    } else if (diffX < -50) {
        currentIndex = Math.min(currentIndex + 1, indicadores.length - 1);
        updateCarousel();
        isDragging = false;
    }
});

diapositivas.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX;
    isDragging = true;
});

diapositivas.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const diffX = e.touches[0].pageX - startX;
    if (diffX > 50) {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateCarousel();
        isDragging = false;
    } else if (diffX < -50) {
        currentIndex = Math.min(currentIndex + 1, indicadores.length - 1);
        updateCarousel();
        isDragging = false;
    }
});

function startTypingAnimation() {
    const texto = `
    Aunque en todo el tiempo que nos conocemos no todo ha estado bien, 
    ha habido momentos que quedarán por siempre, como mi pancito que te 
    comiste xD. Solo quiero decirte: ¡Feliz cumpleaños! Que en el resto 
    del año tengas éxito en todo lo que te planifiques 🌟
    `;
    textoAnimado.innerHTML = "";
    let i = 0;

    function type() {
        if (i < texto.length) {
            textoAnimado.innerHTML += texto.charAt(i);
            i++;
            setTimeout(type, 200);
        }
    }

    type();
}