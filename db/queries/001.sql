SELECT movies.*
FROM movies
LEFT JOIN reviews on movies.id = reviews.movieId