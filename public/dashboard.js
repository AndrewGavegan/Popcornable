// vanilla javascript for dashboard.handlebars where you view reviews for a particular movie //
const newMovie = async (e) => {
  e.preventDefault();

  // grab id and movie name from wherever it is displayed in the handlebars files //
  const movieID = document.querySelector('').value.trim();
  const movieName = document.querySelector('').value.trim();

  if (movieID && MovieBody) {
    const res = await fetch('/api/Movie/GET', {
      method: 'GET',
      body: JSON.stringify({ movieID, movieName }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      document.location.replace('/dashboard');
    }
  }
};

// needs to link to the button for creating a new Movie under the movie //
document.querySelector('').addEventListener('click', newMovie);