import React from 'react';
import SearchForm from './components/SearchForm';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <SearchForm />
      <MovieList />
    </div>
  );
}

export default App;