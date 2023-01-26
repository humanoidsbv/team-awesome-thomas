const toggleButton = document.querySelector('#drawer-icon');
const navMenu = document.querySelector('.nav-menu');
toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('open');
    navMenu.classList.toggle('open');
});
