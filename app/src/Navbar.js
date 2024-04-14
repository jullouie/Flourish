import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './pics/Flowerish.png'; // Assuming the logo is in the src folder

function NavBar() {
    const [showTasks, setShowTasks] = useState(false);

    const handleTasksClick = () => {
        setShowTasks(!showTasks); // Toggle the tasks view
    };

    return (
        <nav className="navbar">
            <Link to="/">
                <img src={logo} alt="Flowerish Logo" className="navbar-logo" />
            </Link>
            <div className="navbar-links">
                {showTasks ? (
                    <>
                        <button className="nav-link" onClick={handleTasksClick}>Main Menu</button>
                        <Link to="/nightOut" className="nav-link" onClick={() => setShowTasks(false)}>Night Out</Link>
                        <Link to="/athletics" className="nav-link" onClick={() => setShowTasks(false)}>Athletics</Link>
                        <Link to="/academics" className="nav-link" onClick={() => setShowTasks(false)}>Academics</Link>
                    </>
                ) : (
                    <>
                        <button className="nav-link" onClick={handleTasksClick}>Tasks</button>
                        <Link to="/garden" className="nav-link">Garden</Link>
                        <Link to="/shop" className="nav-link">Shop</Link>
                        <Link to="/login" className="nav-link">Log In</Link>
                        <Link to="/register" className="nav-link">Register</Link>
                        <Link to="/groups" className="nav-link">Groups</Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default NavBar;
