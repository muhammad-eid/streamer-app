import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/" className="Header link left">
        Streams List
      </Link>
      <Link to="/login" className="Header link right">
        Login
      </Link>
      <Link to="/stream/show" className="Header link right">
        Stream Show
      </Link>
    </div>
  );
};

export default Header;
