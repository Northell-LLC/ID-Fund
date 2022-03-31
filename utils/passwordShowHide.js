function hideShowPassword () {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    if(type === 'text' ) {
        togglePassword.className = 'bi-eye'
    } else {
        togglePassword.className = 'bi-eye-slash'
    }
}

const togglePassword = document.querySelector('#togglePassword');
togglePassword.addEventListener('click', hideShowPassword);
