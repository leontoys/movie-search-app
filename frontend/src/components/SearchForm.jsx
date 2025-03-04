import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => { 
  const [query, setQuery] = useState(''); //to read the query

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    onSearch(query); // Call onSearch with the query
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label" htmlFor="query">
        Movie Name
      </label>        
      <input className='input'
        name = 'query'
        type="text"
        placeholder="Search for a movie..."
        value={query} //Bind input value to query
        onChange={(e) => setQuery(e.target.value)} //Update query on input change
      />
      <button className='button' type="submit">Search</button>
    </form>
  );
};

export default SearchForm;