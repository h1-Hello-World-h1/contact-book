import React, { useState } from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  const [isInputActive, setIsInputActive] = useState(false);

  return (
    <div className={`searchbar ${isInputActive ? 'search-active' : ''}`}>
      <input 
        type="text" 
        placeholder="Search contacts" 
        value={searchTerm} 
        onChange={(e) => onSearchChange(e.target.value)}
        onFocus={() => setIsInputActive(true)}
        onBlur={() => setIsInputActive(false)} 
      />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
};

export default SearchBar;
