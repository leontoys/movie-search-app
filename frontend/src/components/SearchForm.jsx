import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => { 
  const [query, setQuery] = useState(''); //to read the query

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    onSearch(query); // Call onSearch with the query
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query} //Bind input value to query
        onChange={(e) => setQuery(e.target.value)} //Update query on input change
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;