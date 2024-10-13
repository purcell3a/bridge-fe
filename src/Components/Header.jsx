import { Link } from 'react-router-dom';
import './Header.css'; // Adjust according to your actual file structure

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Wrap the logo inside a Link */}
        <Link to="/">
          <img src="bridge.webp" alt="logo" className="logo" />
        </Link>
        <div>Bridge</div>
      </div>
      <div className="routes">
        <Link to="/">Home</Link>
        <Link to="/chatroom">Chat Room</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </header>
  );
};

export default Header;
