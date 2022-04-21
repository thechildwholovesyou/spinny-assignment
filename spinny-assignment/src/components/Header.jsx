import "../css/header.css";
const Header = () => {
  return (
    <header className="header">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </header>
  );
};

export default Header;
