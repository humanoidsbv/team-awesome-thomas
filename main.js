const toggleButton = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-menu');
toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('open');
    navMenu.classList.toggle('open');
});
