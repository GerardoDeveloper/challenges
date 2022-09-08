/**
 * Este archivo se encarga de envíar la conexión hacia los modelos,
 * con esto sequelize podrá hacer el mapeo y serialización de datos.
 */

const { Movie, MovieSchema } = require('./movie.model');

// Configura los modelos.
const setupModels = (sequelize) => {
  Movie.init(MovieSchema, Movie.config(sequelize));
};

module.exports = setupModels;