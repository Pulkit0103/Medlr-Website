// pages/index.js
import React, { useState } from 'react';
import SearchInput from '../components/SearchInput';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    setSearchQuery(query);

    // Mock API request
    const response = await fetch(`/api/search?query=${query}`);
    const data = await response.json();

    setSearchResults(data.results);
  };

  const handleSort = (criteria) => {
    let sortedResults = [...searchResults];

    if (criteria === 'relevance') {
      
    } else if (criteria === 'price-asc') {
      sortedResults.sort((a, b) => a.Real_Price - b.Real_Price);
    } else if (criteria === 'price-desc') {
      sortedResults.sort((a, b) => b.Real_Price - a.Real_Price);
    } else if (criteria === 'name-asc') {
      sortedResults.sort((a, b) => a.Medicine_Name.localeCompare(b.Medicine_Name));
    } else if (criteria === 'name-desc') {
      sortedResults.sort((a, b) => b.Medicine_Name.localeCompare(a.Medicine_Name));
    }

    setSearchResults(sortedResults);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Search Medicine App</h1>
      <SearchInput onSearch={handleSearch} />

      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '10px' }}>Sort by:</label>
        <select onChange={(e) => handleSort(e.target.value)}>
          <option value="relevance">Relevance</option>
          <option value="price-asc">Price Ascending</option>
          <option value="price-desc">Price Descending</option>
          <option value="name-asc">Name Ascending</option>
          <option value="name-desc">Name Descending</option>
        </select>
      </div>

      <h2 style={{ color: '#555' }}>Search Results for: {searchQuery}</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {searchResults.map((result) => (
          <li
            key={result.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '5px',
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <strong>{result.Medicine_Name}</strong> - Real Price: ${result.Real_Price} - Manufacturer: {result.Manufacturer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
