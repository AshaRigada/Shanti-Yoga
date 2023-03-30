// Gets the eye-icon and password input element
const eyeIcon = document.querySelector('.eye-icon');
const passwordInput = document.querySelector('#password');

// s a click event listener to the eye-icon
eyeIcon.addEventListener('click', () => {

    // Toggles the 'type' attribute of the password input field

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('bx-hide');
        eyeIcon.classList.add('bx-show');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('bx-show');
        eyeIcon.classList.add('bx-hide');
    }
});

/*
The code above toggles the type attribute of the password input field between password
and text when the eye-icon is clicked. It also toggles the bx-hide and bx-show classes
on the eye-icon element to change its appearance. Note that you'll need to include the
 necessary CSS styles for these classes to work as expected.
 */

