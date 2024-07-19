import { Router } from "express";
import Movie from '../models/Movie.js';

const router = Router();

router.get('/', async (req, res) => {
    let movies
    if (req.query.genre) {
        movies = await Movie.findAll(req.query.genre)
    } else {
        movies = await Movie.findAll();
    }
    res.json(movies);
});

router.get('/:movieId', async (req, res) => {
    const movies = await Movie.findById(req.params.movieId);
    res.json(movies)
});

export default router