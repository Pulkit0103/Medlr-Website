// components/SearchInput.js
import React from 'react';

const SearchInput = ({ onSearch }) => {
  const handleSearch = (e) => {
    const query = e.target.value;
    onSearch(query);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '300px',
        }}
      />
    </div>
  );
};

export default SearchInput;
