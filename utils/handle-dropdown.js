const userDropdown = document.querySelector('.user-dropdown');
const userDropdownMobile = document.querySelector('.user-dropdown-mobile');
const userMenu = document.querySelector('.user-menu');
const userMenuMobile = document.querySelector('.user-menu-mobile');
const dropdownArrow = document.querySelector('#dropdown-arrow');

userMenu.addEventListener('mouseover', () => {
    userDropdown.style.display = 'block';
    dropdownArrow.src = '../../assets/images/arrow-up.svg';
});

userMenu.addEventListener('mouseout', () => {
    userDropdown.style.display = 'none';
    dropdownArrow.src = '../../assets/images/arrow-down.svg';
});

userMenuMobile.addEventListener('mouseover', () => {
    userDropdownMobile.style.display = 'block';
    dropdownArrow.src = '../../assets/images/arrow-up.svg';
});

userMenuMobile.addEventListener('mouseout', () => {
    userDropdownMobile.style.display = 'none';
    dropdownArrow.src = '../../assets/images/arrow-down.svg';
});

userDropdown.addEventListener('mouseout', () => {
    userDropdown.style.display = 'none';
    dropdownArrow.src = '../../assets/images/arrow-down.svg';
});

userDropdownMobile.addEventListener('mouseout', () => {
    userDropdownMobile.style.display = 'none';
    dropdownArrow.src = '../../assets/images/arrow-down.svg';
});