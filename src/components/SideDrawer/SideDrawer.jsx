import React from 'react';

import './SideDrawer.css';

import SearchBar from '../SearchBar/SearchBar'

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses = 'side-drawer open';
    }


    return (
        <nav className={drawerClasses}>
            <ul>
                <li className="nav__item-search"><SearchBar /></li>
                <li className="nav__item"><a href="/">Menu Item 1</a></li>
                <li className="nav__item"><a href="/">Menu Item 2</a></li>
                <li className="nav__item"><a href="/">Menu Item 3</a></li>
                <li className="nav__item"><a href="/">Menu Item 4</a></li>
            </ul>
    </nav>
    )  
};

export default sideDrawer;