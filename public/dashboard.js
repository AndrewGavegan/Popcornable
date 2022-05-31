// vanilla javascript for dashboard.handlebars where you view reviews for a particular movie //
const newReview = async (e) => {
    e.preventDefault();

    // grab movie name from wherever it is displayed in the handlebars files //
    const movieID = document.querySelector('').value.trim();
    const reviewBody = document.querySelector('').value.trim();

    if (movieID && reviewBody) {
        const res = await fetch('/api/review/post', {
            method: 'POST',
            body: JSON.stringify({ movieID, reviewBody }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
            document.location.replace('/dashboard');
        }
    }
};

// needs to link to the button for creating a new review under the movie //
document.querySelector('').addEventListener('click', newReview);