const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

Movie.init(
{
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false,
  } ,
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  runtime: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  director: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Movie;