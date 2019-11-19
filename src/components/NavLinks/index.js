import React from 'react';
import { NavLink } from 'react-router-dom';

const component = 'nav';

function NavLinks() {
    return (
        <ul className={`${component}`}>
            <li className={`${component}__item`}>
                <NavLink exact to='/'>Home</NavLink>
            </li>
            <li className={`${component}__item`}>
                <NavLink to='/books'>Books</NavLink>
            </li>
            <li className={`${component}__item`}>
                <NavLink to='/manage'>Manage</NavLink>
            </li>
            <li className={`${component}__item`}>
                <NavLink to='/auth'>Auth</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks;