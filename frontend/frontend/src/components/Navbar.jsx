import { Link } from 'react-router-dom';

const Navbar = () => {  
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-left"> {/* Changed to fixed-left */}
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Workout Tracker</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/new">New Workout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;