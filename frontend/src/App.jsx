import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import MovieList from './components/MovieList';
import './App.css';

function App() {

  const [movies,setMovies] = useState([])
  const [loading,setLoading] = useState(false) //for loading status
 
  const onSearch = async (query) => {
    if(!query) return

    setLoading(true) //we are querying - starts loading
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
    finally{
      setLoading(false)
    }


  };

  return (
    <div className="container">
      <h1 className='title'>Movie Search App</h1>
      <SearchForm onSearch={onSearch} />
      {
        loading ? 
        ( <p>Loading ...</p> ) 
        :(
          <MovieList movies={movies}/>
        )
      }
    </div>
  );
}

export default App;