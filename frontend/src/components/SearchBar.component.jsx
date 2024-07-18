import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <input 
      type="text" 
      placeholder="Search contacts" 
      value={searchTerm} 
      onChange={(e) => onSearchChange(e.target.value)} 
    />
  );
};

export default SearchBar;
