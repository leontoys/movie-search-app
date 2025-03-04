import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <div className="card-list">
      {movies.length === 0 ? (
        <div className="no-movies">
        <p>No movies to display</p>
      </div>      ) : (
        movies.map((movie) => (
          <div className="card" key={movie.id}>
            {movie.poster_path && (
              <img
                className="card--image"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title + ' poster'}
              />
            )}
            <div className="card--content">
              <h3 className="card--title">{movie.title}</h3>
              <p className="card--details">
                <small>RELEASE DATE: {movie.release_date}</small>
              </p>
              <p className="card--details">
                <small>RATING: {movie.vote_average}</small>
              </p>
              <p className="card--desc">{movie.overview}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieList;