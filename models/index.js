const Movie = require('./movie');
const Review = require('./review');
const User = require('./User');

User.hasMany(Review, { foreignKey: 'user_id' });

User.hasMany(Movie, { foreignKey: 'user_id' });

Movie.hasMany(Review, { foreignKey: 'movie_id' });

Movie.belongsTo(User, { foreignKey: 'user_id' });

Review.belongsTo(Movie, { foreignKey: 'movie_id' });

Review.belongsTo(User, { foreignKey: 'user_id' });

module.exports = { Movie, Review, User };
