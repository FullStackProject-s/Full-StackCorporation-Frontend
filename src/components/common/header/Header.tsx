import React from 'react'
import { NavLink } from 'react-router-dom'
import { paths } from 'routing/config'

import { Logo } from 'components/ui/svg/Logo'
import { Profile } from 'components/ui/svg/profile/Profile'

import styles from './header.module.scss'
import { store, useAppSelector } from 'redux/store'

export const Header: React.FC = () => {
    const { isAuth } = useAppSelector((state) => state.user)
    return (
        <header className = {styles.header}>
            <div className = {styles.mainContainer}>
                <div className = {styles.header_content}>
                    <NavLink className = {styles.logo} to = {paths.homePage}>
                        <Logo/>
                        <h1 className = {styles.logo_label}>Gre<span>&Mi</span></h1>
                    </NavLink>
                    <nav className = {styles.nav}>
                        <NavLink className = {styles.nav_el} to = {paths.organizationsPage}>Organizations</NavLink>
                        {
                            !isAuth 
                            ?
                            <div className = {styles.authWrapper}>
                                <NavLink className = {`${styles.nav_el} ${styles.auth_el}`} to = {paths.loginPage}>Sign In</NavLink>
                                <NavLink className = {`${styles.nav_el} ${styles.auth_el} ${styles.auth_el_alt}`} to = {paths.registrationPage}>Sign Up</NavLink>
                            </div>
                            :
                            <NavLink to = {paths.profilePage}>
                                <Profile />
                            </NavLink>
                        }
                    </nav>
                </div>
            </div>
        </header>
    )
}