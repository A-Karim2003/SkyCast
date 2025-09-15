import "../header.css";
import SearchForm from "./SearchForm";
import Logo from "./Logo";
import Time from "./Time";

function Header({ setQuery, query, now }) {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <Time now={now} />
        <SearchForm query={query} setQuery={setQuery} />
      </div>
    </header>
  );
}

export default Header;
