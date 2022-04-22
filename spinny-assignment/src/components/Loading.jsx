import React from "react";
import "./Loading.css";
import Spinner from "./Spinner";
const Loading = () => {
  return (
    <section className="loading">
      <h2 className="loading-text">
        <Spinner />
      </h2>
    </section>
  );
};

export default Loading;
