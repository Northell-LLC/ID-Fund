function handlePasswordChange (event) {
    if(event.target.value.length >= 8) {
        document.querySelector('#validation_field_1').src = '../../assets/images/check-field.svg'
    } else {
        document.querySelector('#validation_field_1').src = '../../assets/images/uncheck-field.svg'
    }

    if(/[a-z]/.test(event.target.value) && event.target.value !== '') {
        document.querySelector('#validation_field_2').src = '../../assets/images/check-field.svg'
    } else {
        document.querySelector('#validation_field_2').src = '../../assets/images/uncheck-field.svg'
    }

    if(/[A-Z]/.test(event.target.value) && event.target.value !== '') {
        document.querySelector('#validation_field_3').src = '../../assets/images/check-field.svg'
    } else {
        document.querySelector('#validation_field_3').src = '../../assets/images/uncheck-field.svg'
    }

    if(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(event.target.value) && event.target.value !== '') {
        document.querySelector('#validation_field_4').src = '../../assets/images/check-field.svg'
    } else {
        document.querySelector('#validation_field_4').src = '../../assets/images/uncheck-field.svg'
    }

    if(/\d/.test(event.target.value)) {
        document.querySelector('#validation_field_5').src = '../../assets/images/check-field.svg'
    } else {
        document.querySelector('#validation_field_5').src = '../../assets/images/uncheck-field.svg'
    }
}

const password = document.querySelector('#password');
password.addEventListener('input', handlePasswordChange);
