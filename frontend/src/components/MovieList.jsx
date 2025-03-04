import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.length === 0 ? ( //if no movies found show this mesage
        <p>No movies to display</p>
      ) : (
        movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
            )}
            <div className="movie-details">
              <h3>{movie.title}</h3>
              <p><small>Release Date: {movie.release_date}</small></p>
              <p>{movie.overview}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieList;