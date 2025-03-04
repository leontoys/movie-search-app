import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import MovieList from './components/MovieList';
import './App.css';

function App() {

  const [movies,setMovies] = useState([])
 
  const onSearch = async (query) => {
    if(!query) return

    const apiKey = import.meta.env.VITE_TMDB_API_KEY
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
    try {
      const response = await fetch(url)
      const data = await response.json()
      setMovies(data.results)
      console.log("movies",data.results)

    } catch (error) {
        console.error('Error fetchning movies:',error)
    }


  };

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <SearchForm onSearch={onSearch} />
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;