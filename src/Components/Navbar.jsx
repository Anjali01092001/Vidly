import React from 'react';
import { Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary m-5">
                <div className="container-fluid">
                    <Link className="nav-link" to="/"><h3>Vidly</h3></Link>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/movies">Movies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/customers">Customers</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/rentals">Rentals</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/loginform">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/registerform">Register</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>   
        </>
    ) 
}

export default Navbar; 