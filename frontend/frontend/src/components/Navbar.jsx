import { Link } from 'react-router-dom';

const Navbar = () => {  
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-left"> {/* Changed to fixed-left */}
           <h1 className="navbar-title">Workout Buddy</h1> {/* Use CSS class */}
        </nav>
    );
};

export default Navbar;