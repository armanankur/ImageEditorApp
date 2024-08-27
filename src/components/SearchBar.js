import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query) {
      onSearch(query);
    } else {
      alert("Please enter a search query.");
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images..."
        style={{
          marginTop: "10px",
          height: "40px",
          width: "400px",
          borderRadius: "12px",
          outline: "none",
          textAlign: "center",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          margin: "25px",
          height: "40px",
          width: "140px",
          color: "#ecf0f1",
          backgroundColor: "#283747",
          borderRadius: "12px",
          fontSize: "15px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
