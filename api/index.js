import { Router } from "express";
import movieRouter from "./movie.js";

const api = Router();

api.use('/movies', movieRouter);

export default api