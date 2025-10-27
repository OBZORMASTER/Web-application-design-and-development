document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    clearErrors();
    hideSuccessMessage();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    let isValid = true;

    if (!name) {
        showError('nameError', 'Ім\'я обов\'язкове для заповнення');
        markFieldInvalid('name');
        isValid = false;
    }

    if (!email) {
        showError('emailError', 'Email обов\'язковий для заповнення');
        markFieldInvalid('email');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('emailError', 'Введіть коректний email адрес');
        markFieldInvalid('email');
        isValid = false;
    }

    if (!password) {
        showError('passwordError', 'Пароль обов\'язковий для заповнення');
        markFieldInvalid('password');
        isValid = false;
    } else if (password.length < 6) {
        showError('passwordError', 'Пароль повинен містити мінімум 6 символів');
        markFieldInvalid('password');
        isValid = false;
    }

    if (!confirmPassword) {
        showError('confirmPasswordError', 'Підтвердження пароля обов\'язкове');
        markFieldInvalid('confirmPassword');
        isValid = false;
    } else if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Паролі не збігаються');
        markFieldInvalid('confirmPassword');
        isValid = false;
    }

    if (isValid) {
        showSuccessMessage('Форма успішно відправлена!');
        console.log('Дані форми:', { name, email, password });
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
    
    const inputElements = document.querySelectorAll('input');
    inputElements.forEach(input => {
        input.classList.remove('error');
    });
}

function markFieldInvalid(fieldId) {
    document.getElementById(fieldId).classList.add('error');
}

function showSuccessMessage(message) {
    const successElement = document.getElementById('successMessage');
    successElement.textContent = message;
    successElement.style.display = 'block';
}

function hideSuccessMessage() {
    document.getElementById('successMessage').style.display = 'none';
}

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function() {
        this.classList.remove('error');
        const errorId = this.id + 'Error';
        document.getElementById(errorId).textContent = '';
        hideSuccessMessage();
    });
});