import React from "react";
import AnimeList from "./components/AnimeList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
const App = () => {
  return (
    <div>
      <Header />
      <AnimeList />
    </div>
  );
};

export default App;
