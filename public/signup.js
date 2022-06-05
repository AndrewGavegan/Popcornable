const signUpSubmit = async (e) => {
  e.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    // create a post request with the details entered
    const res = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      // redirect to homepage
      document.location.assign('/');
    } else {
      //  alert user if request has failed
      alert('Error, could not sign in');
    }
  }
};

// presuming element is given the class signUpForm
document.querySelector('.signUpForm').addEventListener('submit', signUpSubmit);