const { Movie } = require('../models');

const data = [
  {
    name: 'Sound of Metal',
    year: 2019,
    genre: 'Drama',
    runtime: 120,
    director: 'Darius Marder',
    image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3178oOJKKPDeQ2legWQvMPpllv.jpg'
  },
  {
    name: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    genre: "action",
    runtime: 120,
    director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg'
  },
  {
    name: "Everything Everywhere All at Once",
    year: 2022,
    genre: "Action, Adventure, Science Fiction",
    runtime: 140,
    director: "Daniel Kwan, Daniel Scheinert",
    image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rKvCys0fMIIi1X9rmJBxTPLAtoU.jpg'
  },
  {
    name: "Fantastic Beasts: The Secrets of Dumbledore",
    year: 2022,
    genre: "Fantasy, Adventure, Action",
    runtime: 140,
    director: "David Yates",
    image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg'
  },
  {
    name: "The Lost City",
    year: 2022,
    genre: "Action, Adventure, Comedy, Romance",
    runtime: 140,
    director: "Adam Nee, Aaron Nee",
    image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/neMZH82Stu91d3iqvLdNQfqPPyl.jpg'
  },
  {
    name: "Morbius",
    year: 2022,
    genre: "Action, Science Fiction, Fantasy",
    runtime: 140,
    director: "Daniel Espinosa",
    image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg'
  },
  {
    name: "Sonic the Hedgehog 2",
    year: 2022,
    genre: "Action, Adventure, Comedy, Romance",
    runtime: 140,
    director: "Jeff Fowler",
    image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg'
  },
  {
    name: "The Northman",
    year: 2022,
    genre: "Action, Adventure, Fantasy, Thriller",
    runtime: 140,
    director: "Robert Eggers",
    image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg'
  },
  {
    name: "Uncharted",
    year: 2022,
    genre: "Action, Adventure",
    runtime: 1,
    director: "Ruben Fleischer",
    image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tlZpSxYuBRoVJBOpUrPdQe9FmFq.jpg'
  },
  {
    name: "The Batman",
    year: 2022,
    genre: "Crime, Mystery, Thriller",
    runtime: 176,
    director: "Matt Reeves",
    image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/74xTEgt7R36Fpooo50r9T25onhq.jpg'
  },
  {
    name: "Doctor Strange in the Multiverse of Madness",
    year: 2022,
    genre: "",
    runtime: 140,
    director: "",
    image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg'
  },
  {
    name: "Spider-Man: No Way Home",
    year: 2021,
    genre: "Fantasy, Action, Adventure",
    runtime: 126,
    director: "Sam Raimi",
    image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg'
  },
  {
    name: "A Day to Die",
    year: 2022,
    genre: "Action, Thriller, Crime",
    runtime: 101,
    director: "Wes Miller",
    image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8Kce1utfytAG5m1PbtVoDzmDZJH.jpg'
  },
  {
    name: "The Exorcism of God",
    year: 2022,
    genre: "Horror",
    runtime: 98,
    director: "Alejandro Hidalgo",
    image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hangTmbxpSV4gpHG7MgSlCWSSFa.jpg.jpg'
  },
  {
    name: "The Contractor",
    year: 2022,
    genre: "Action, Thriller",
    runtime: 103,
    director: "Tarik Saleh",
    image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg'
  },
  {
    name: "Turning Red",
    year: 2022,
    genre: "Animation, Family, Comedy, Fantasy",
    runtime: 100,
    director: "Domee Shi",
    image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg'
  },
  {
    name: "The Bad Guys",
    year: 2022,
    genre: "Animation, Comedy, Family, Crime",
    runtime: 100,
    director: "Pierre Perifel",
    image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7qop80YfuO0BwJa1uXk1DXUUEwv.jpg'
  },
  {
    name: "Memory",
    year: 2022,
    genre: "Action, Thriller, Crime",
    runtime: 114,
    director: "Martin Campbell",
    image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg'
  },
  {
    name: "Moonfall",
    year: 2022,
    genre: "Science Fiction, Adventure, Action",
    runtime: 130,
    director: "Roland Emmerich",
    image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg'
  },
  {
    name: "The Takedown",
    year: 2022,
    genre: "Comedy, Action",
    runtime: 119,
    director: "Louis Leterrier",
    image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h5hVeCfYSb8gIO0F41gqidtb0AI.jpg'
  },
  {
    name: "Ambulance",
    year: 2022,
    genre: "Action, Thriller, Crime",
    runtime: 156,
    director: "Michael Bay",
    image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zT5ynZ0UR6HFfWQSRf2uKtqCyWD.jpg'
  },
  {
    name: "Chip 'n Dale: Rescue Rangers",
    year: 2022,
    genre: "Animation, Family, Comedy, Adventure, Mystery",
    runtime: 99,
    director: "Akiva Schaffer",
    image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7UGmn8TyWPPzkjhLUW58cOUHjPS.jpg'
  },
  {
    name: "Virus-32",
    year: 2022,
    genre: "Horror",
    runtime: 90,
    director: "Gustavo Hernández",
    image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wZiF79hbhLK1U2Pj9bF67NAKXQR.jpg'
  }
]

const seedMovies = () => Movie.bulkCreate(data);
module.exports = seedMovies;