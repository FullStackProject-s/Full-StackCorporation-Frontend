import React from 'react'
import { NavLink } from 'react-router-dom'

import emptyAvatar from 'assets/img/emptyAvatar.webp'

import styles from './organizationCart.module.scss'

type OrganizationCartType = {
    orgClass: string
}

export const OrganizationCart: React.FC<OrganizationCartType> = ({orgClass}) => {

    return (
        <NavLink to = "" className = {styles.organizationCart}>
            <div className = {styles.leftSide}>
                <img src = {emptyAvatar} alt="organization avatar" />
                <p>Organization Name</p>
            </div>
            <div className = {styles.rightSide}>
                {
                    orgClass === "myOrg"
                    ? <p>Created at: <span>2023-01-07</span></p>
                    : <p>Join at: <span>2023-01-07</span></p>
                }
            </div>
        </NavLink>
    )
}