import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Header.css";
import { currentSearchAPIReducer } from "../redux/reducers";
const SearchBar = () => {
  let [sVal, setNewSval] = useState("");
  let dispatch = useDispatch();
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
      <button
        type="button"
        class="btn btn-info"
        onClick={() => {
          dispatch(currentSearchAPIReducer(sVal));
        }}
      >
        Go..
      </button>
    </form>
  );
};

export default SearchBar;
