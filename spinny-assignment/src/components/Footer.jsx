import React from "react";
import { useDispatch } from "react-redux";

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
    >
      Load More
    </button>
  );
};

export default Footer;
