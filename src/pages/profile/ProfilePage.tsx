import React from 'react'

import { Navbar } from 'components/pages/profile/Navbar'

import styles from './profile.module.scss'

export const ProfilePage: React.FC = () => {

    return (
        <section className = {styles.baseSection}>
            <div className="mainContainer">
                <div className = {styles.pageContent}>
                    <Navbar />
                    <div className = {styles.profileContent}>

                    </div>
                </div>
            </div>
        </section>
    );
}