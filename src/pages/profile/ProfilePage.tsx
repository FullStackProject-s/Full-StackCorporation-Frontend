import React, {useEffect} from 'react'

import { useAppDispatch, useAppSelector } from 'redux/store';
import { getMe } from 'redux/auth/asyncActions';

import { Navbar } from 'components/common/profileNavbar/Navbar'
import { ProfileContent } from 'components/pages/profile/profileContent/ProfileContent';

import styles from './profile.module.scss'

export const ProfilePage: React.FC = () => {
    
    const dispatch = useAppDispatch();

    const { user } = useAppSelector(state => state.user)

    useEffect(() => {
        dispatch(getMe())
    }, [])

    return (
        <section className = {styles.baseSection}>
            <div className="mainContainer">
                <div className = {styles.pageContent}>
                    <Navbar />
                    <ProfileContent {...user}/>
                </div>
            </div>
        </section>
    );
}