const userInput = document.querySelector('#userInput');
const searchBtn = document.querySelector('#submitBtn');

searchBtn.addEventListener('click', async function (event) {
  event.preventDefault();
  res = await userInput.value.toLowerCase().split(' ');
  console.log(res);
  req = await fetch(`/api/movies/${res.join('')}`);
});