import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";
import Username from "../user/Username";

const Header = () => {
  return (
    <header  className="flex items-center justify-between border-b border-stone-500 bg-yellow-400 p-4 uppercase sm:py-6 sm:px-10">
      <Link to="/" className="tracking-wide">
        Fast react Pizza Co,
      </Link>
      <SearchOrder />
    </header>
  );
};

export default Header;
