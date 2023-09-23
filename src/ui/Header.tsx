import SearchOrder from "@/features/order/SearchOrder";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Khaled</p>
    </header>
  );
};

export default Header;
