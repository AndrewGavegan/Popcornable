const { Movie } = require('../models');

const data = [
    {
        name: "Sound of Metal",
        year: 2019,
        genre: "Drama",
        runtime: 120,
        director: "Darius Marder"
    },
    {
        name: "Spider-Man: Into the Spider-Verse",
        year: 2018,
        genre: "action",
        runtime: 120,
        director: "Bob Persichetti, Peter Ramsey, Rodney Rothman"
    },
    {
        name: "Everything Everywhere All at Once",
        year: 2022,
        genre: "action/comedy",
        runtime: 140,
        director: "Dan Kwan, Daniel Scheinert"
    }
]

const seedMovies = () => Post.bulkCreate(data);
module.exports = seedMovies;