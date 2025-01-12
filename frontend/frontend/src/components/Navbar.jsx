import { Link } from 'react-router-dom'; // Added import statement

const Navbar = () => {  
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link className="navbar-brand" to="/">MERN Stack</Link>
            <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/create">Create</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
    };
    export default Navbar;