const { Movie } = require('../models');

const data = [
  {
    name: 'Sound of Metal',
    year: 2019,
    genre: 'Drama',
    runtime: 120,
    director: 'Darius Marder',
    image_url: 'https://m.media-amazon.com/images/M/MV5BNjcyYjg0M2ItMzMyZS00NmM1LTlhZDMtN2MxN2RhNWY4YTkwXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_UY1200_CR90,0,630,1200_AL_.jpg'
  },
  {
    name: 'Spider-Man: Into the Spider-Verse',
    year: 2018,
    genre: 'action',
    runtime: 120,
    director: 'Bob Persichetti, Peter Ramsey, Rodney Rothman',
    image_url: 'https://alternativemovieposters.com/wp-content/uploads/2019/09/ansin_spiderverse.jpg'
  },
  {
    name: 'Everything Everywhere All at Once',
    year: 2022,
    genre: 'action/comedy',
    runtime: 140,
    director: 'Dan Kwan, Daniel Scheinert',
    image_url: 'https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_FMjpg_UX1000_.jpg'
  }
]

const seedMovies = () => Post.bulkCreate(data);
module.exports = seedMovies;