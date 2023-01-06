import React from 'react'
import { NavLink } from 'react-router-dom'
import { paths } from 'routing/config'

import { Logo } from 'components/ui/svg/Logo'
import { Profile } from 'components/ui/svg/Profile'

import styles from './header.module.scss'

export const Header: React.FC = () => {
    return (
        <header className = {styles.header}>
            <div className = {styles.mainContainer}>
                <div className = {styles.header_content}>
                    <NavLink className = {styles.logo} to = {paths.homePage}>
                        <Logo/>
                        <h1 className = {styles.logo_label}>Gre<span>&Mi</span></h1>
                    </NavLink>
                    <nav className = {styles.nav}>
                        <NavLink className = {styles.nav_el} to = {paths.organizationsPage}>Corporations</NavLink>
                        <div className = {styles.authWrapper}>
                            <NavLink className = {`${styles.nav_el} ${styles.auth_el}`} to = {paths.loginPage}>Sign In</NavLink>
                            <NavLink className = {`${styles.nav_el} ${styles.auth_el} ${styles.auth_el_alt}`} to = {paths.registrationPage}>Sign Up</NavLink>
                        </div>
                        {/* <Profile /> */}
                    </nav>
                </div>
            </div>
        </header>
    )
}