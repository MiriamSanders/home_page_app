import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="blog-header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <img src="logo.png" alt="Logo" />
                </Link>

                <nav className="nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
