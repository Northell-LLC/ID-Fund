const userDropdown = document.querySelector('.user-dropdown');
const userDropdownMobile = document.querySelector('.user-dropdown-mobile');
const userMenu = document.querySelector('.user-menu');
const userMenuMobile = document.querySelector('.user-menu-mobile');
const dropdownArrow = document.querySelector('#dropdown-arrow');
const userName = document.querySelector('.user-name');
const userIcon = document.querySelector('.user-icon');
const userIconMobile = document.querySelector('.user-icon-mobile');

userMenu.addEventListener('mouseover', () => {
    userDropdown.classList.add('show-user-dropdown');
    userName.classList.add('user-name-active');
    dropdownArrow.src = '../../assets/images/dropdown-arrow-active.svg';
    userIcon.src = '../../assets/images/person-active.svg';
});

userMenu.addEventListener('mouseout', () => {
    userDropdown.classList.remove('show-user-dropdown');
    userName.classList.remove('user-name-active');
    dropdownArrow.src = '../../assets/images/arrow-down.svg';
    userIcon.src = '../../assets/images/person.svg';
});

userMenuMobile.addEventListener('mouseover', () => {
    userDropdownMobile.classList.add('show-user-dropdown');
    dropdownArrow.classList.add('dropdown-arrow-rotate');
    userIconMobile.src = '../../assets/images/person-active.svg';
});

userMenuMobile.addEventListener('mouseout', () => {
    userDropdownMobile.classList.remove('show-user-dropdown');
    dropdownArrow.classList.remove('dropdown-arrow-rotate');
    userIconMobile.src = '../../assets/images/person.svg';
});

userDropdown.addEventListener('mouseout', () => {
    userDropdown.classList.remove('show-user-dropdown');
    dropdownArrow.classList.remove('dropdown-arrow-rotate');
});

userDropdownMobile.addEventListener('mouseout', () => {
    userDropdownMobile.classList.remove('show-user-dropdown');
    dropdownArrow.classList.remove('dropdown-arrow-rotate');
});