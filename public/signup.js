const signUpSubmit = async (e) => {
  e.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    // create a post request with the details entered
    const res = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      // redirect to homepage
      document.location.replace('/');
    } else {
      //  alert user if request has failed
      alert('Error, could not sign up \n' + res.statusText);
    }
  }
};

document.querySelector('.signup-form').addEventListener('submit', signUpSubmit);