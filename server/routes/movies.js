import express from 'express';

import { responseMovieDetail, responseMovieLists, responseRecommendedMovies, responseCredits,responseMoviesByGenre, getAll } from '../controllers/movies.js'

const moviesRouter = express.Router();

moviesRouter.get('/:movieId',getAll);
moviesRouter.get('/getMovieDetail/:movieId',responseMovieDetail);
moviesRouter.get('/getRecommendedMovies/:movieId',responseRecommendedMovies);
moviesRouter.get('/getCredits/:movieId',responseCredits);
moviesRouter.get('/getMovieLists/:movieId',responseMovieLists);
moviesRouter.get('/getMoviesByGenre/:genreId',responseMoviesByGenre);


export default moviesRouter;
