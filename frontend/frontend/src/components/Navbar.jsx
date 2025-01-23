import { Link } from "react-router-dom";
import { useLogout } from "../Hooks/useLogout";
import { useAuthContext } from "../Hooks/useAuthContext";

const Navbar = () => {
  const {logout } =useLogout()
  const {user}=useAuthContext()

  const handleClick=()=>{
    logout()

  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-left">
      <Link to="/">
      <h1 className="navbar-title">Workout Buddy</h1> 
      </Link>
      {user&&(
         
      <div>
        
        <span>{user?.email}</span>
        <button onClick={handleClick}>Log  Out</button>
      </div>
      )}
      {!user&&(<div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>

      </div>)}
    </nav>
  );
};

export default Navbar;
