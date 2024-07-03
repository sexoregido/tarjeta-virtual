document.getElementById('animateBtn').addEventListener('click', function() {
    const card = document.querySelector('.card');
    card.style.transform = 'rotateY(360deg)';
    setTimeout(() => {
        card.style.transform = 'rotateY(0deg)';
    }, 1000); // Ajusta el tiempo según la duración de la animación
});
