import { Link } from 'react-router-dom';

const Navbar = () => {  
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-left"> {/* Changed to fixed-left */}
           <h1 className="text-center w-full">Workout Buddy</h1> {/* Centered using Tailwind CSS */}
        </nav>
    );
};

export default Navbar;