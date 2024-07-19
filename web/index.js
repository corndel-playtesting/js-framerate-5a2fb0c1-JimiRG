import { Router } from "express";
import Movie from "../models/Movie.js";

const web = new Router();

web.get('/', async (req, res) => {
    res.render('index', {title: 'Home'})
});

web.get('/movies', async (req, res) => {
    const movies = await Movie.findAll()
    res.render('movies/index', {movies, title: 'Movies'})
})

export default web