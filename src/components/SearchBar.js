import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cheatSheetData from './cheatSheetData';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // Function to filter cheat sheet data based on the query
  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    if (searchQuery.length > 0) {
      const filteredResults = cheatSheetData.filter(item =>
        item.title.toLowerCase().includes(searchQuery) ||
        item.category.toLowerCase().includes(searchQuery) ||
        item.content.toLowerCase().includes(searchQuery)
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        style={{
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          width: '200px'
        }}
      />
      
      {results.length > 0 && (
        <ul style={{
          position: 'absolute',
          top: '40px',
          left: '0',
          background: '#fff',
          border: '1px solid #ccc',
          listStyle: 'none',
          padding: '0',
          margin: '0',
          width: '100%',
          maxHeight: '200px',
          overflowY: 'auto',
          zIndex: 1000
        }}>
          {results.map((result, index) => (
            <li key={index} style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
              <Link to={result.path} style={{ textDecoration: 'none', color: '#333' }}>
                {result.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
