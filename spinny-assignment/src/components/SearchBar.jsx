import React, { useState } from "react";
import "./Header.css";
const SearchBar = () => {
  let [sVal, setNewSval] = useState("");

  return (
    <form className="searchBar">
      <input
        type="text"
        placeholder="Search anime..."
        autoFocus={true}
        className="input"
        value={sVal}
        onChange={(e) => {
          setNewSval(e.target.value);
        }}
      />
      <button type="button" class="btn btn-info">
        Go..
      </button>
    </form>
  );
};

export default SearchBar;
