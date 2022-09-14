const express = require('express');

const MovieService = require('./../services/movie.service');
const statusCode = require('../helper/statusCode');
const {
  createMovieSchema,
  createActorSchema,
  updateMovieSchema,
  updatePartialMovieSchema,
  getMovieSchema,
  queryParamsMovieSchema
} = require('./../schemas/movie.schema');
const validatorHandler = require('../middlwares/validator.handler');

const router = express.Router();
const service = new MovieService();

router.get('/', validatorHandler(queryParamsMovieSchema, 'query'), async (req, res, next) => {
  try {
    const queryParams = req.query;
    const movies = await service.find(queryParams);

    res.json(movies);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', validatorHandler(getMovieSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const movie = await service.findOne(id);

      res.json(movie);
    } catch (error) {
      next(error);
    }
  }
);

// Add actors to movie
router.post('/add-actor', validatorHandler(createActorSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newActor = await service.addActor(body);
      res.status(201).json(newActor);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/', validatorHandler(createMovieSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newMovie = await service.create(body);

      res.status(statusCode.Created).json(newMovie);
    } catch (error) {
      next(error);
    }
  }
);

router.put('/:id', validatorHandler(getMovieSchema, 'params'), validatorHandler(updateMovieSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const movie = await service.update(id, body);

      res.json(movie);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id', validatorHandler(getMovieSchema, 'params'), validatorHandler(updatePartialMovieSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const movie = await service.update(id, body);

      res.json(movie);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', validatorHandler(getMovieSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const idDeleted = await service.delete(id);

      res.status(statusCode.OK).json(idDeleted);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
