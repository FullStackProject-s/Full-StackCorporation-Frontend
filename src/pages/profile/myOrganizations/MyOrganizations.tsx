import React from 'react'

import { Navbar } from 'components/common/profileNavbar/Navbar';
import { MyOrganizationsContent } from 'components/pages/profile/myOrganizations/myOrganizationContent/MyOrganizationsContent';

import styles from './myOrganizations.module.scss'

export const MyOrganizations: React.FC = () => {

    return (
        <section className = {styles.baseSection}>
            <div className="mainContainer">
                <div className = {styles.pageContent}>
                    <Navbar />
                    <MyOrganizationsContent />
                </div>
            </div>
        </section>
    );
}