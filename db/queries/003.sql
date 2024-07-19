SELECT movies.*
FROM movies
LEFT JOIN reviews ON movies.id = reviews.movieId
WHERE lower(movies.genre) LIKE '%Drama%'
GROUP BY movies.id
ORDER BY movies.releaseDate DESC