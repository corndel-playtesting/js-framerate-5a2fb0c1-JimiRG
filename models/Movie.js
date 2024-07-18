import db from '../db/index.js'

// creating a movie class
class Movie {
  
  // creating a static property on that movie class - an array of allowed genres
  static allowedGenres = [
    'Adventure',
    'Action',
    'Animation',
    'Biography',
    'Crime',
    'Drama',
    'Fantasy',
    'History',
    'Horror',
    'Mystery',
    'Romance',
    'War'
  ]

  // defining a static method on the class that finds all moveis contained within the specificied genre
  static async findAll(genre) {

    // selecting all movies and joining
    const query = [
      'select movies.*',
      'from movies',
      'left join reviews on movies.id = reviews.movieId'
    ]

    const values = []
  
    // if the user has specificed a genre
    if (genre) {
      // include films where genre includes the one specificed
      query.push('where lower(movies.genre) like ?')
      values.push('%' + genre + '%')
    }

    // after the WHERE clauses have been applied, then group by and order appropriately
    query.push('group by movies.id')
    query.push('order by movies.releaseDate desc')

    // join the whole query into a single string and pass through the genre as the ? wildcard
    const results = await db.raw(query.join(' '), values)
    return results
  }

  // creating a static findById method which accepts the id as the parameter
  static async findById(id) {
    const query = 'select * from movies where id = ?'
    const results = await db.raw(query, [id])
    return results[0]
  }

  // creating a findReviews method which accepts id as the paramter
  static async findReviews(id) {
    const query = 'select * from reviews where movieId = ?'
    const results = await db.raw(query, [id])
    return results
  }
}

export default Movie
