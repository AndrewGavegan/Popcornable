const userInput = document.querySelector('#userInput');
const userList = document.querySelector('#datalistOptions');

userInput.addEventListener('keyup', async function (e) {
  e.preventDefault();
  const res = await fetch('../movieApi/assets/json/allMovies.json');
  console.log(res);
  const data = await res.json();
  console.log(data);
})