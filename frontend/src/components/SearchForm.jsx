import React from 'react';

const SearchForm = () => {
  return (
    <form>
      <input type="text" placeholder="Search for a movie..." />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;