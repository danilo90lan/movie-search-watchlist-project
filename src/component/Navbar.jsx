import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-default">
            <div className="navbar navbar-default">
                <Link className="navbar-brand" to="/">MovieApp</Link>
            </div>
            <div>
                <ul className='navbar-nav'>
                    <li className="nav-item">
                        <Link to = "/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="/watchlist">Watchlist</Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}