import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-left">
      <Link to="/">
      <h1 className="navbar-title">Workout Buddy</h1> 
      </Link>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>

      </div>
    </nav>
  );
};

export default Navbar;
