const { Movie } = require('../models');

const data = [
    {
        name: 'Sound of Metal',
        year: 2019,
        genre: 'Drama',
        runtime: 120,
        director: 'Darius Marder'
    }
]

const seedMovies = () => Post.bulkCreate(data);
module.exports = seedMovies;