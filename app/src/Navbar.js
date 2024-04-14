import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Flowerish.png'; // Assuming the logo is in the src folder

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">
                <img src={logo} alt="Flowerish Logo" className="navbar-logo" />
            </Link>
            <div className="navbar-links">
                <Link to="/next" className="nav-link">Next Page</Link>
                <Link to="/garden" className="nav-link">Garden</Link>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/register" className="nav-link">Register</Link>
            </div>
        </nav>
    );
}

export default Navbar;
