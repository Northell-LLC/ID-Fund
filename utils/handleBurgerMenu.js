const navbarToggler = document.querySelector('.navbar-button');
const openBurger = document.querySelector('.open');
const closeBurger = document.querySelector('.close');

navbarToggler.addEventListener('click', () => {
    openBurger.classList.toggle('burger-opened');
    closeBurger.classList.toggle('burger-opened');
})