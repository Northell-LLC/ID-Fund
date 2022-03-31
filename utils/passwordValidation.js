function checkPassword (rule, selector) {
    document.querySelector(selector).src = `../../assets/images/${rule ?  'check' : 'uncheck'}-field.svg`;
}

function handlePasswordChange (event) {
    const { value } = event.target;

    const rules = [
        value.length >= 8,
        /[a-z]/.test(value) && value !== '',
        /[A-Z]/.test(value) && value !== '',
        /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value) && value !== '',
        /\d/.test(value)
    ]

    rules.forEach((rule, index) => {
        checkPassword(rule, `#validation_field_${index + 1}`);
    })
}

const password = document.querySelector('#password');
password.addEventListener('input', handlePasswordChange);
