import React from "react";
import { useDispatch } from "react-redux";
import "./Footer.css";
import {
  updateAnimes,
  currentSearch,
  incrementPageNumberAction,
} from "../redux/actions";

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(incrementPageNumberAction());
      }}
      className="button_loadMore"
    >
      Load More
    </button>
  );
};

export default Footer;
