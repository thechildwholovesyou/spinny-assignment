import "./Header.css";
import SearchBar from "./SearchBar";
const Header = () => {
  let query = 0;
  let pageNo = 0;
  return (
    <header className="header">
      <SearchBar />
      <p className="text-center request-url">
        Requesting :{" "}
        <span className="url">
          {`https://api.jikan.moe/v3/search/anime?q=${query}&limit=16&page=${pageNo}`}
        </span>
      </p>
    </header>
  );
};

export default Header;