import React, {useEffect} from 'react'

import { useAppDispatch, useAppSelector } from 'redux/store';
import { getMe } from 'redux/profile/asyncActions';

import { Navbar } from 'components/common/profileNavbar/Navbar'
import { SettingsContent } from 'components/pages/profile/settings/settingsContent/SettingsContent';

import styles from './settingsPage.module.scss'
import { ShowUser } from 'types/user/user';

export const SettingsPage: React.FC = () => {

    const dispatch = useAppDispatch();

    const { pk, user, avatar, about } = useAppSelector(state => state.profile)

    useEffect(() => {
        dispatch(getMe())
    }, [])
    
    return (
        <section className = {styles.baseSection}>
            <div className="mainContainer">
                <div className = {styles.pageContent}>
                    <Navbar />
                    <SettingsContent user = {user} profile_avatar = {avatar} about_user = {about} pk = {pk}/>
                </div>
            </div>
        </section>
    );
}