import React from "react";
import { useSelector } from "react-redux";
import "../styles/Loading.css";

const Loading = () => {
  let error = useSelector((state) => state.error);
  let load = useSelector((state) => state.load);
  return (
    <section className="loading">
      <h1 className="loading-text">
        {error
          ? "Oops! Something Went Wrong"
          : "Please Enter Your Favourite Anime"}
      </h1>
    </section>
  );
};

export default Loading;
