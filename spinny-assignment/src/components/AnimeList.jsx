import React, { useEffect } from "react";
import "./Anime.css";
import Anime from "./Anime";
import {
  updateAnimes,
  currentSearch,
  incrementPageNumberAction,
} from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const AnimeList = () => {
  let animeList = useSelector((state) => state.animeListReducer);
  let currSearch = useSelector((state) => state.currentSearchReducer);
  let currPage = useSelector((state) => state.incrementPageReducer);

  let dispatch = useDispatch();
  useEffect(() => {
    const fetchAnimes = async () => {
      if (currSearch == undefined || currSearch.length == 0) {
        return;
      }
      const response = await fetch(
        `https://api.jikan.moe/v3/search/anime?q=${currSearch}&limit=16&page=${currPage}`
      ).catch((err) => {
        console.log(err);
      });
      const data = await response.json();
      console.log(data.results);
      dispatch(updateAnimes(data.results));
    };
    fetchAnimes();
  }, [currSearch, currPage]);
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
