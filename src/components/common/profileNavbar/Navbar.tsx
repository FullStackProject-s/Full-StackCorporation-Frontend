import React from 'react'
import { NavLink } from 'react-router-dom';

import { linksList } from './navbar-data-mock';

import styles from './navbar.module.scss'

export const Navbar: React.FC = () => {

    return (
        <nav className = {styles.navBar}>
            {
                linksList.map((obj, index) => (
                    <NavLink 
                        key = {index}
                        end
                        className={({ isActive }) => {
                            const linkClasses = [styles.navBar_el];
                            if (isActive) linkClasses.push(styles.active);
                            return linkClasses.join(" "); 
                        }} 
                        to = {obj.path}
                        >
                        {obj.label}
                    </NavLink>
                ))
            }
        </nav>
    );
}