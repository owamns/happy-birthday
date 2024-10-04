const sky = document.querySelector('.sky');
const numStars = 50;

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    const size = Math.random() * 3 + 1;
    
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    const duration = Math.random() * 3 + 1;
    star.style.animationDuration = `${duration}s`;

    sky.appendChild(star);
}

for (let i = 0; i < numStars; i++) {
    createStar();
}

const shooting = true;

const shootingStar = document.querySelector('.shooting-star');

function launchShootingStar(speed) {
    shootingStar.style.animation = `none`;

    const startX = Math.random() * window.innerWidth / 2;
    const startY = Math.random() * window.innerHeight / 2;
    
    shootingStar.style.top = `${startY}px`;
    shootingStar.style.left = `${startX}px`;

    shootingStar.offsetHeight; 

    shootingStar.style.animation = `moveStar ${speed}s linear`;

    if (shooting) {
        setTimeout(() => {
            launchShootingStar(speed);
        }, speed * 1000);
    }
}

launchShootingStar(3);
