
const loginFormHandler = async (event) => {
    event.preventDefault();


    const email = document.querySelector('#email-login').value;
    const password = document.querySelector('#password-login').value;
    const loginAlert = document.querySelector('#loginAlert');
    const signupAlert = document.querySelector('#signupAlert');
    if (email && password) {
        const response = await fetch('api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            signupAlert.style.display = "none";
            loginAlert.style.display = "inline";

        }
    }
}

  document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler)


