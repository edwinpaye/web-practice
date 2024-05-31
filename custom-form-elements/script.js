// script.js
document.getElementById('customForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    let isValid = true;

    // Validate username
    const username = form.username;
    if (username.value.trim() === '') {
        showErrorMessage(username, 'Username is required');
        isValid = false;
    } else {
        hideErrorMessage(username);
    }

    // Validate email
    const email = form.email;
    if (!validateEmail(email.value)) {
        showErrorMessage(email, 'Invalid email');
        isValid = false;
    } else {
        hideErrorMessage(email);
    }

    // Validate password
    const password = form.password;
    if (password.value.length < 6) {
        showErrorMessage(password, 'Password must be at least 6 characters');
        isValid = false;
    } else {
        hideErrorMessage(password);
    }

    // Validate confirm password
    const confirmPassword = form['confirm-password'];
    if (confirmPassword.value !== password.value) {
        showErrorMessage(confirmPassword, 'Passwords do not match');
        isValid = false;
    } else {
        hideErrorMessage(confirmPassword);
    }

    // Validate checkbox
    const agree = form.agree;
    if (!agree.checked) {
        showErrorMessage(agree, 'You must agree to the terms');
        isValid = false;
    } else {
        hideErrorMessage(agree);
    }

    // Validate radio buttons
    const gender = form.gender;
    if (![...gender].some(radio => radio.checked)) {
        showErrorMessage(gender[0], 'Please select your gender');
        isValid = false;
    } else {
        hideErrorMessage(gender[0]);
    }

    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function showErrorMessage(input, message) {
    const errorMessage = input.closest('.form-group').querySelector('.error-message');
    errorMessage.textContent = message;
    errorMessage.style.visibility = 'visible';
}

function hideErrorMessage(input) {
    const errorMessage = input.closest('.form-group').querySelector('.error-message');
    errorMessage.style.visibility = 'hidden';
}
