const gotoMovie = async (e) => {
  e.preventDefault();
  const element = e.target;

  if (element.matches('button')) {
    const movieId = e.target.getAttribute('data-movieid');
    if (movieId) {
      document.location.assign('/api/movie/${movieId}');
    }
  }
}

document.querySelector('.movies').addEventListener('click', gotoMovie);