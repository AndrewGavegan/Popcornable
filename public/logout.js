const logoutSubmit = async () => {
  const res = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(res.status);
  }
};
// presumed ID of logoutBtn //
document.querySelector('#logoutBtn').addEventListener('click', logoutSubmit);