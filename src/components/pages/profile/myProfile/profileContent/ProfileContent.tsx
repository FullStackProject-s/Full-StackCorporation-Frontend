import React, { useState } from 'react'

import { useAppDispatch } from 'redux/store';
import { resetPassword } from 'redux/auth/asyncActions';

import { ShowProfile } from 'types/user/profile';

import { UploadAvatar } from 'components/ui/uploadAvatar/UploadAvatar';

import styles from './profileContent.module.scss'
import { Avatar } from 'components/common/avatar/Avatar';

export const ProfileContent: React.FC<ShowProfile> = ({user, profile_avatar}) => {

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
        </div>
    );
}