const navbarToggler = document.querySelector('.navbar-button');
const openBurger = document.querySelector('#open');
const closeBurger = document.querySelector('#close');

navbarToggler.addEventListener('click', () => {
    if(openBurger.style.display === 'none') {
        openBurger.style.display = 'block';
        closeBurger.style.display = 'none';
    } else {
        openBurger.style.display = 'none';
        closeBurger.style.display = 'block';
    }
})