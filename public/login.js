const loginSubmit = async (e) => {
  e.preventDefault();

  // fill in the element on the page to be selected //
  const email = document.querySelector('').value.trim();
  // fill in the element on the page to be selected //
  const password = document.querySelector('').value.trim();

  if (email && password) {
    // api/users/login presuming we use that route //
    const res = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
      // redirects to homepage if you login succesfully //
      document.location.replace('/');
    } else {
      alert('Error, Incorrect username or password');
    }
  }
};

// presuming we name the form element an ID of loginForm //
document.querySelector('loginForm').addEventListener('submit', loginSubmit);
