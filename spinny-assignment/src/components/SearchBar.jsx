import React from "react";
import "./Header.css";
const SearchBar = () => {
  return (
    <form className="searchBar">
      <input
        type="text"
        placeholder="Search anime..."
        autoFocus={true}
        className="input"
      />
      <button type="button" class="btn btn-info">
        Go..
      </button>
    </form>
  );
};

export default SearchBar;
