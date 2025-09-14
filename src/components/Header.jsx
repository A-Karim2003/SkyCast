import "../header.css";
import SearchForm from "./SearchForm";
import Logo from "./Logo";
import Time from "./Time";

function Header({ setQuery, query }) {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <Time />
        <SearchForm query={query} setQuery={setQuery} />
      </div>
    </header>
  );
}

export default Header;
