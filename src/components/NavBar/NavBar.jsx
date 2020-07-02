import React from 'react';

import './NavBar.css';

import SearchBar from '../SearchBar/SearchBar';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const NavBar = props => (
    <header className="navbar">
        <nav className="navbar__navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="spacer"></div>
            <div className="navbar__navigation-items">
                <ul>
                    <li className="nav__item"><a href="/">Menu Item 1</a></li>
                    <li className="nav__item"><a href="/">Menu Item 2</a></li>
                    <li className="nav__item"><a href="/">Menu Item 3</a></li>
                    <li className="nav__item"><a href="/">Menu Item 4</a></li>
                    <li className="nav__item"><SearchBar /></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default NavBar;