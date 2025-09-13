import "../header.css";
import SearchForm from "./SearchForm";
import Logo from "./Logo";
import Time from "./Time";

function Header() {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <Time />
        <SearchForm />
      </div>
    </header>
  );
}

export default Header;
