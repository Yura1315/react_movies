import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search_bar">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search_input"
          placeholder="Search"
        />
      </div>
    </form>
  );
};

export default SearchBar;
