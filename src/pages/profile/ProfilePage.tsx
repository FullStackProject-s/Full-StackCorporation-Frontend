import React from 'react'

import { Navbar } from 'components/common/profileNavbar/Navbar'
import { ProfileContent } from 'components/pages/profile/profileContent/ProfileContent';

import styles from './profile.module.scss'

export const ProfilePage: React.FC = () => {

    return (
        <section className = {styles.baseSection}>
            <div className="mainContainer">
                <div className = {styles.pageContent}>
                    <Navbar />
                    <ProfileContent />
                </div>
            </div>
        </section>
    );
}