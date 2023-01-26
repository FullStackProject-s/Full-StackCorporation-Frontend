import React from 'react'
import { NavLink } from 'react-router-dom';
import { logout } from 'redux/auth/asyncActions';
import { useAppDispatch } from 'redux/store';
import { paths } from 'routing/config';

import { linksList } from './navbar-data-mock';

import styles from './navbar.module.scss'

export const Navbar: React.FC = () => {
    const dispatch = useAppDispatch()
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
            <NavLink 
                end
                className={({ isActive }) => {
                    const linkClasses = [styles.navBar_el];
                    if (isActive) linkClasses.push(styles.active);
                    return linkClasses.join(" "); 
                }} 
                to = {paths.loginPage}
                onClick = {() => {dispatch(logout())}}
                >
                Sign Out
            </NavLink>
        </nav>
    );
}