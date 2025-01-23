import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";
import Username from "../user/Username";

const Header = () => {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-wide">Fast react Pizza Co,</Link>
      <SearchOrder/>
      <Username/>
    </header>
  );
};

export default Header;
