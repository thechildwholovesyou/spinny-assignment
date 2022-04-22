import React, { useEffect } from "react";
import "./Anime.css";
import Anime from "./Anime";
import Footer from "./Footer";
import Loading from "./Loading";
import {
  updateAnimes,
  currentSearch,
  incrementPageNumberAction,
} from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const AnimeList = () => {
  let animeList = useSelector((state) => state.animeList);
  let currSearch = useSelector((state) => state.currentSearch);
  let currPage = useSelector((state) => state.currPage);
  console.log(currPage);
  let dispatch = useDispatch();
  useEffect(() => {
    const fetchAnimes = async () => {
        
      if (currSearch == undefined || currSearch.length == 0) {
        toast("Please search Your favourite Animes");
        return;
      }
      const response = await fetch(
        `https://api.jikan.moe/v3/search/anime?q=${currSearch}&limit=16&page=${currPage}`
      ).catch((err) => {
        console.log(err);
      });
      const data = await response.json();
      console.log(data.results);

      if (!data.results) {
        if (data.status == 404) {
          //dispatch(error(true));
          toast.error(data.message);
        } else {
          //dispatch(error(true));
          toast.error("Oops some error occured ");
        }
        return;
      }

      dispatch(updateAnimes(data.results));
    };
    fetchAnimes();
  }, [currSearch, currPage]);

  console.log(animeList);

  return (
    <div>
      {currSearch.length == 0 ? (
        <Loading/>
      ) : (
        <>
          <section className="anime-container">
            {animeList.map((el) => {
              return el.map((e) => {
                console.log(e);
                return <Anime image_url={e.image_url} title={e.title} />;
              });
            })}
          </section>
          <Footer />
        </>
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default AnimeList;
