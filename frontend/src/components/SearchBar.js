
import React, { useState } from "react";
import "./SearchBar.css"; // Import the CSS file for styling

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form default behavior
    const params = { keyword, city, category }; // Create search params object
    onSearch(params);
    setKeyword("");
    setCity("");
    setCategory("");
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit} className="search-bar-form">
        {/* Search Keyword */}
        <div className="input-group">
          <div className="input-item">
          <label htmlFor="keyword">SEARCH JOBS BY KEYWORD</label>
          <input
            type="text"
            placeholder="Keywords"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          </div>
          {/* Search City */}
          <div className="input-item">
          <label htmlFor="city">CITY</label>
          <input
            type="text"
            placeholder="All Cities"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          </div>
          {/* Search Category */}
          <div className="input-item">
          <label htmlFor="category">CATEGORY</label>
          <input
            type="text"
            placeholder="All Categories"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          </div>
          <button type="submit" className="circle-button">
            &gt;
          </button>

        </div>
      </form>
    </div>
  );
};

export default SearchBar;
