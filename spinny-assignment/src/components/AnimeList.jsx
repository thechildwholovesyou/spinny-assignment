import React, { useEffect } from "react";
import "./Anime.css";
import Anime from "./Anime";
const AnimeList = () => {
  let query = "naruto";
  let page = 1;

  useEffect(() => {
    const fetchAnimes = async () => {
      const response = await fetch(
        `https://api.jikan.moe/v3/search/anime?q=${query}&limit=16&page=${page}`
      ).catch((err) => {
        console.log(err);
      });
      const data = await response.json();
      console.log(data.results);
    };
    fetchAnimes();
  });

  return (
    <div>
      <section className="anime-container">
        <Anime />
      </section>
    </div>
  );
};

export default AnimeList;
