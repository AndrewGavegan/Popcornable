const userInput = document.querySelector('#userInput');
const searchBtn = document.querySelector('#submitBtn');

searchBtn.addEventListener('click', async function (event) {
  event.preventDefault();
  res = await userInput.value.toLowerCase().split(' ');
  console.log(res);
  req = await fetch(`/api/movie/${res.join('')}`);
});

const container = document.querySelector('#viewMovies');
container.addEventListener('click', async function (e) {
  e.preventDefault();
  let movie_id = e.target.getAttribute('data-movieid')
  console.log(movie_id);
  document.location.replace(`/api/movie/${movie_id}`);
})