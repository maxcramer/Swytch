import React from 'react';

import './NavBar.css';

import SearchBar from '../SearchBar/SearchBar';

const NavBar = props => (
    <header>
        <nav>
            <div className="nav__item">
                Menu Item 1
            </div>
            <div className="nav__item">
                Menu Item 2
            </div>
            <div className="nav__item">
                Menu Item 3
            </div>
            <div className="nav__item">
                Menu Item 4
            </div>
            <div className="nav__item">
                <SearchBar />
            </div>

        </nav>
    </header>
);

export default NavBar;