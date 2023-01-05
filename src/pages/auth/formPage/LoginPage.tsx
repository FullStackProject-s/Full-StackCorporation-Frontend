import React from 'react'
import { NavLink } from 'react-router-dom';
import { paths } from 'routing/config';

import { LoginForm } from 'components/pages/auth/loginForm';

import styles from 'pages/auth/formPage/auth.module.scss'

export const LoginPage: React.FC = () => {

    return (
        <section className = {styles.sectionForm}>
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
            <LoginForm />
        </section>
    );
}