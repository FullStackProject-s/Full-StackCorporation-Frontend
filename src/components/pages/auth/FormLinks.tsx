import React from "react"
import { NavLink } from 'react-router-dom';
import { paths } from 'routing/config';

import styles from 'components/pages/auth/auth.module.scss'

export const FormLinks: React.FC = () => {
    return (
        <div className = {styles.linksWrapper}>
            <NavLink 
                className={({ isActive }) => {
                    const linkClasses = [styles.links];
                    if (isActive) linkClasses.push(styles.active);
                    return linkClasses.join(" "); 
                }} 
                to = {paths.loginPage}
                >
                SIGN IN
            </NavLink>
            <NavLink 
                className={({ isActive }) => {
                    const linkClasses = [styles.links];
                    if (isActive) linkClasses.push(styles.active);
                    return linkClasses.join(" "); 
                }} 
                to = {paths.registrationPage}
                >
                SIGN UP
            </NavLink>
        </div>
    )
}