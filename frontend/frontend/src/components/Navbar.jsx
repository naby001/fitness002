import { Link } from "react-router-dom";
import { useLogout } from "../Hooks/useLogout";

const Navbar = () => {
  const {logout } =useLogout()

  const handleClick=()=>{
    logout()

  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-left">
      <Link to="/">
      <h1 className="navbar-title">Workout Buddy</h1> 
      </Link>
      <div>
        <button onClick={handleClick}>Log  Out</button>
      </div>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>

      </div>
    </nav>
  );
};

export default Navbar;
