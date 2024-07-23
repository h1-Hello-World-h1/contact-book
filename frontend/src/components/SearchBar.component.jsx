import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className='searchbar'>
      <input 
        type="text" 
        placeholder="Search contacts" 
        value={searchTerm} 
        onChange={(e) => onSearchChange(e.target.value)} 
      />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
};

export default SearchBar;
