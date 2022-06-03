document.querySelector('').addEventListener('click', newReview);

const newReview = async (e) => {
  e.preventDefault();

  const body = document.querySelector('').value.trim();
  const rating = document.querySelector('').value.trim();
  const movie_id = document.querySelector('').value.trim();

  // for postiong a review //
  if (body && rating) {
    const res = await fetch('/api/users/review', {
      method: 'POST',
      body: JSON.stringify({ body, rating, movie_id }),
      headers: { 'Content-Type': 'application/json' },
    });
    // can change this location once we know exactly what files are named what //
    if (res.ok) {
      document.location.replace(`/movie/${movie_id}`);
    }
  }
};