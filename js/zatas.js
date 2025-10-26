document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const menuOverlay = document.querySelector('.menu-overlay');

    menuIcon.addEventListener('click', () => {
        menuOverlay.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });
});
