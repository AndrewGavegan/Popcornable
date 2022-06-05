const logoutSubmit = async () => {
  const res = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });

  if (res.ok) {
    document.location.assign('/');
  } else {
    alert(res.status);
  }
};
// presumed ID of logoutBtn //
document.querySelector('#logoutBtn').addEventListener('click', logoutSubmit);