import React from "react";
import "./Anime.css";
import Anime from "./Anime";
const AnimeList = () => {
  return (
    <div>
      <section className="anime-container">
        <Anime />
        <Anime />
        <Anime />
        <Anime />
      </section>
    </div>
  );
};

export default AnimeList;
