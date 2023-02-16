import React, { useState } from 'react'

import { useAppDispatch } from 'redux/store'
import { resetPassword } from 'redux/auth/asyncActions'

import { ProfileType } from 'types/pages/profile'

import styles from './profileContent.module.scss'

export const ProfileContent: React.FC<ProfileType> = ({user, profile_avatar, about_user}) => {

    const dispatch = useAppDispatch()

    const [changeHandler, setChangeHandler] = useState(false)

    return (
        <div className = {styles.profileContent}>
            <div className = {styles.secondSection}>
                <div className = {styles.imgBlock}>
                    <p>Created at: <span>{user.create_at}</span></p>
                    <img src = {profile_avatar}/>
                    <h3>{user.username}</h3>
                </div>
                <ul className = {styles.infoBlock}>
                    <li className = {styles.infoBlock_el}>
                        <p className = {styles.label}>First name:</p>
                        <p className = {styles.value}>{user.first_name}</p>
                    </li>
                    <li className = {styles.infoBlock_el}>
                        <p className = {styles.label}>Second name:</p>
                        <p className = {styles.value}>{user.last_name}</p>
                    </li>
                    <li className = {styles.infoBlock_el}>
                        <p className = {styles.label}>Email:</p>
                        <p className = {styles.value}>{user.email}</p>
                    </li>
                    <li className = {styles.infoBlock_el}>
                        <button onClick={() => {setChangeHandler(true); dispatch(resetPassword({email: user.email}))}} className = {styles.button}>Change Password</button>
                    </li>
                    {
                        changeHandler && <p className = {styles.confirm}>Confirm operation on your email</p>
                    }
                </ul>
            </div>
            {
                about_user &&
                <div className = {styles.aboutMe}>
                    <p className = {styles.label}>About Me</p>
                    <pre className = {styles.aboutMeText}>{about_user}</pre>
                </div>
            }
        </div>
    );
}