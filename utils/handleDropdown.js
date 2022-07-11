const userDropdown = document.querySelector('.user-dropdown');
const userDropdownMobile = document.querySelector('.user-dropdown-mobile');
const userMenu = document.querySelector('.user-menu');
const userMenuMobile = document.querySelector('.user-menu-mobile');
const dropdownArrow = document.querySelector('#dropdown-arrow');

userMenu.addEventListener('mouseover', () => {
    userDropdown.classList.add('show-user-dropdown');
    dropdownArrow.classList.add('dropdown-arrow-rotate');
});

userMenu.addEventListener('mouseout', () => {
    userDropdown.classList.remove('show-user-dropdown');
    dropdownArrow.classList.remove('dropdown-arrow-rotate');
});

userMenuMobile.addEventListener('mouseover', () => {
    userDropdownMobile.classList.add('show-user-dropdown');
    dropdownArrow.classList.add('dropdown-arrow-rotate');
});

userMenuMobile.addEventListener('mouseout', () => {
    userDropdownMobile.classList.remove('show-user-dropdown');
    dropdownArrow.classList.remove('dropdown-arrow-rotate');
});

userDropdown.addEventListener('mouseout', () => {
    userDropdown.classList.remove('show-user-dropdown');
    dropdownArrow.classList.remove('dropdown-arrow-rotate');
});

userDropdownMobile.addEventListener('mouseout', () => {
    userDropdownMobile.classList.remove('show-user-dropdown');
    dropdownArrow.classList.remove('dropdown-arrow-rotate');
});