import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";

const Header = () => {
  return (
    <header>
      <Link to="/">Fast react Pizza Co,</Link>
      <SearchOrder/>
      <p>Alim</p>
    </header>
  );
};

export default Header;
