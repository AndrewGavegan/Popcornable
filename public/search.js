const userInput = document.querySelector('#userInput');
const searchBtn = document.querySelector('#submitBtn');

searchBtn.addEventListener('click', async function (event) {
  event.preventDefault();
  res = await userInput.value.toLowerCase().split(' ');
  console.log(res);
  req = await fetch(`/api/movie/${res.join('')}`);
});


const viewBtn = document.querySelector('#viewBtn');

viewBtn.addEventListener('click', async function (e) {
  e.preventDefault();
  const movie_id = e.target.getAttribute('data-movieid')
  document.location.replace(`/api/movie/${movie_id}`);
})