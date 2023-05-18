const form = document.getElementById('form')
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const error = document.querySelector('.error');

const validateFormControl = (formControl) => {
    if (!formControl.validity.valid) {
        formControl.className = 'form-control form-control_invalid';
    } else if (formControl.validity.valid) {
        formControl.className = 'form-control';
    }
};

const validatePassword = (password, confirmPassword) => {
    if (password.value !== '' && confirmPassword.value !== '') {
        if (password.value !== confirmPassword.value) {
            password.className = 'form-control form-control_invalid';
            confirmPassword.className = 'form-control form-control_invalid';
            error.className = 'error error_active';
        } else if (password.value === confirmPassword.value) {
            password.className = 'form-control';
            confirmPassword.className = 'form-control';
            error.className = 'error';
        }
    } else {
        if (password.value !== '') {
            password.className = 'form-control';
        }
        if (confirmPassword.value !== '') {
            confirmPassword.className = 'form-control';
        }
        error.className = 'error';
    }
}

firstName.addEventListener('input', () => {
    validateFormControl(firstName);
});

lastName.addEventListener('input', () => {
    validateFormControl(lastName);
});

email.addEventListener('input', () => {
    validateFormControl(email);
});

phone.addEventListener('input', () => {
    validateFormControl(phone);
});

password.addEventListener('input', () => {
    validateFormControl(password);
    validatePassword(password, confirmPassword);
});

confirmPassword.addEventListener('input', () => {
    validateFormControl(confirmPassword);
    validatePassword(password, confirmPassword);
});

form.addEventListener('submit', (e) => {
    const formControls = [firstName, lastName, email, phone, password, confirmPassword];

    formControls.forEach((formControl) => {
        validateFormControl(formControl);
    });

    validatePassword(password, confirmPassword);

    if (!firstName.validity.valid
        || !lastName.validity.valid
        || !email.validity.valid
        || !phone.validity.valid
        || !password.validity.valid
        || !confirmPassword.validity.valid
        || (password.value !== confirmPassword.value)
    ) {
        e.preventDefault();
    }
});
