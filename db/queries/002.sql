SELECT movies.*
FROM movies
LEFT JOIN reviews on movies.id = reviews.movieId
WHERE lower(movies.genre) LIKE '%Drama%'