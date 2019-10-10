// Email validation
const nameInput = document.querySelectorAll('input[type="text"]');
const emailInput = document.querySelector('input[type="email"]');
const passInput = document.querySelector('input[type="password"]');
const submit = document.querySelector('form button');
const errorText = document.querySelectorAll('form span');

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email.value).toLowerCase());
}

function validateName(name) {
    var re = /^[a-zA-Z]{1,}$/;
    return re.test(String(name.value).toLowerCase());
}

function validatePassword(password) {
    var re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(String(password.value).toLowerCase());
}

function errorInput(input) {
    input.style.backgroundImage = 'url(images/icon-error.svg)';
    input.style.paddingRight = '50px';
    input.style.border = '2px solid var(--primary-color-red)';
    input.style.marginBottom = '0';
}

function correctInput(input, errorText) {
    input.style.backgroundImage = 'none';
    input.style.paddingRight = '10px';
    input.style.border = '1px solid var(--neutral-color-garyishblue)';
    errorText.innerHTML = '';
}

submit.addEventListener('click', () => {
    // First name
    if (nameInput[0].value === '') {
        errorInput(nameInput[0]);
        errorText[0].innerHTML = 'First Name cannot be empty';
    }
    else if (validateName(nameInput[0]) === false) {
        errorInput(nameInput[0]);
        errorText[0].innerHTML = 'First Name is incorrect';
    } else {
        correctInput(nameInput[0], errorText[0]);
    } 

    // Last name
    if (nameInput[1].value === '') {
        errorInput(nameInput[1]);
        errorText[1].innerHTML = 'Last Name cannot be empty';
    }
    else if (validateName(nameInput[1]) === false) {
        errorInput(nameInput[1]);
        errorText[1].innerHTML = 'Last Name is incorrect';
    } else {
        correctInput(nameInput[1], errorText[1]);
    }

    // Email
    if (emailInput.value === '') {
        errorInput(emailInput);
        errorText[2].innerHTML = 'Email cannot be empty';
    }
    else if (validateEmail(emailInput) === false) {
        errorInput(emailInput);
        errorText[2].innerHTML = 'Email is incorrect';
    } else {
        correctInput(emailInput, errorText[2]);
    }

    // Password
    if (passInput.value === '') {
        errorInput(passInput);
        errorText[3].innerHTML = 'Password cannot be empty';
    }
    else if (validatePassword(passInput) === false) {
        errorInput(passInput);
        errorText[3].innerHTML = 'Password is incorrect';
    } else {
        correctInput(passInput, errorText[3]);
    }
});