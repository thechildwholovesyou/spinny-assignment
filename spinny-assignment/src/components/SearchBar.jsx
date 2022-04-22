import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Header.css";

import { updateAnimes, currentSearch, newAnimes } from "../redux/actions";
const SearchBar = () => {
  let [sval, setSval] = useState("");
  let dispatch = useDispatch();
  return (
    <form className="searchBar">
      <input
        type="text"
        placeholder="Search anime..."
        className="input"
        value={sval}
        onChange={(e) => {
          setSval(e.target.value);
        }}
      />
      <button
        type="button"
        class="btn btn-info"
        onClick={(e) => {
          e.preventDefault();
          dispatch(currentSearch(sval));
          dispatch(newAnimes());
          setSval("");
        }}
      >
        Go..
      </button>
    </form>
  );
};

export default SearchBar;
