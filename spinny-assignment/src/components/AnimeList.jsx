import React, { useEffect } from "react";
import "./Anime.css";
import Anime from "./Anime";
import { updateAnimes, currentSearch } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const AnimeList = () => {
  let animeList = useSelector((state) => state.animeListReducer);
  let currSearch = useSelector((state) => state.currentSearchAPIReducer);

  let query = currSearch;
  let page = 1;

  let dispatch = useDispatch();
  useEffect(() => {
    const fetchAnimes = async () => {
      const response = await fetch(
        `https://api.jikan.moe/v3/search/anime?q=${query}&limit=16&page=${page}`
      ).catch((err) => {
        console.log(err);
      });
      const data = await response.json();
      console.log(data.results);
      dispatch(updateAnimes(data.results));
    };
    fetchAnimes();
  }, []);
  console.log(animeList);
  return (
    <div>
      {console.log(animeList)}
      <section className="anime-container">
        {animeList.map((el) => {
          return el.map((e) => {
            console.log(e);
            return <Anime image_url={e.image_url} title={e.title} />;
          });
        })}
      </section>
    </div>
  );
};

export default AnimeList;
