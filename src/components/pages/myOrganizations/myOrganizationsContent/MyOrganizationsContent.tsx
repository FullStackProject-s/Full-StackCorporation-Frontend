import React from 'react'
import { NavLink } from 'react-router-dom'

import { OrganizationCart } from './organizationCart/OrganizationCart'

import styles from './myOrganizationsContent.module.scss'

export const MyOrganizationsContent: React.FC = () => {

    return (
        <div className = {styles.myOrganizationsContent}>
            <div className = {styles.createOrgWrapper}>
                <NavLink to = "">+ Create Org</NavLink>
            </div>
            <h3 className = {styles.sectionName}>My Organizations</h3>
            <div className = {styles.orgList}>
                <OrganizationCart orgClass = "myOrg"/>
                <OrganizationCart orgClass = "myOrg"/>
            </div>
            <h3 className = {styles.sectionName}>Organizations</h3>
            <div className = {styles.orgList}>
                <OrganizationCart orgClass = "org"/>
                <OrganizationCart orgClass = "org"/>
                <OrganizationCart orgClass = "org"/>
            </div>
        </div>
    )
}