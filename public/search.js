const userInput = document.querySelector('#userInput');
const searchBtn = document.querySelector('#submitBtn');

searchBtn.addEventListener('click', async function (event) {
  event.preventDefault();
  res = await userInput.value;

  let movieId;
  const dataOptions = document.querySelectorAll('option');
  dataOptions.forEach(element => {
    if (element.getAttribute('value') === res) {
      movieId = element.getAttribute('data-movieid');
    }
  });

  if (movieId) {
    document.location.assign(`/api/movie/${movieId}`);
  } else {
    alert('Sorry, the movie is not in the database (yet)');
  }
});

const container = document.querySelector('#viewMovies');
container.addEventListener('click', async function (e) {
  e.preventDefault();
  let movie_id = e.target.getAttribute('data-movieid');
  console.log(movie_id);
  document.location.assign(`/api/movie/${movie_id}`);
});