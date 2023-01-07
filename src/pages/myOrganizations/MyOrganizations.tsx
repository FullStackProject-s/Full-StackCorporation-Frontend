import React from 'react'

import { Navbar } from 'components/common/profileNavbar/Navbar';

import styles from './myOrganizations.module.scss'

export const MyOrganizations: React.FC = () => {

    return (
        <section className = {styles.baseSection}>
            <div className="mainContainer">
                <div className = {styles.pageContent}>
                    <Navbar />
                </div>
            </div>
        </section>
    );
}