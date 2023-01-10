import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search_bar">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search_input"
          placeholder="Enter movie title..."
        />
        <Link to={`/search/${searchTerm}`}>search</Link>
      </div>
    </form>
  );
};

export default SearchBar;
