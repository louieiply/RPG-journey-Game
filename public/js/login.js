
const loginFormHandler = async (event) => {
    event.preventDefault();


    const email = document.querySelector('#email-login').value;
    const password = document.querySelector('#password-login').value;

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
            alert(response.ok);
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
            alert('Login route has failed ');
        }
    }
}

const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value;
    const email = document.querySelector('#email-signup').value;
    const password = document.querySelector('#password-signup');
  
    if (name && email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ 
            name, 
            email, 
            password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
        alert('Sign-up has failed ');
      }
    }
  };
  
  document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler)


  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);

