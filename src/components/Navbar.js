import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (

        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo"><i className="material-icons">home</i>Northcoders News</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/topics/football">Football</Link></li>
                    <li><Link to="/topics/coding">Coding</Link></li>
                    <li><Link to="/topics/cooking">Cooking</Link></li>
                </ul>
            </div>
        </nav>

    )
}





export default Navigation;