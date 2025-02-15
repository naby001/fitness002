import { Link } from "react-router-dom";
import { useLogout } from "../Hooks/useLogout";
import { useAuthContext } from "../Hooks/useAuthContext";
import "./Navbar.css"; // Import the new CSS file

const Navbar = () => {
  const {logout } = useLogout();
  const {user} = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="navbar-title">Workout Buddy</h1> 
      </Link>
      {user && (
        <div>
          <span>{user?.email}</span>
          <button onClick={handleClick}>Log Out</button>
          <Link to="/reco">
            <button>Recommendation</button>
          </Link>
        </div>
      )}
      {!user && (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
