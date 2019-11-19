import React from 'react';
import { Link } from 'react-router-dom';

import NavLinks from './../../components/NavLinks';
import style from './style.module.css';


function NavBar(props) {
    return (
        <nav className={ style.documentNav }>
            <NavLinks />
            <Link to='/' >
                <h2>The Library</h2>
            </Link>
        </nav>
    )
}


export default NavBar;