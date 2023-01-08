import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { paths } from 'routing/config';

import { Edit } from 'components/ui/svg/edit/Edit';

import emptyAvatar from 'assets/img/emptyAvatar.webp'

import styles from './profileContent.module.scss'

export const ProfileContent: React.FC = () => {

    const [isOpenEditInputs, setOpenEditInputs] = useState(false)

    return (
        <div className = {styles.profileContent}>
            <div className = {styles.firstSection}>
                <p>Created at: <span>2023-01-07</span></p>
                <div onClick = {() => setOpenEditInputs(!isOpenEditInputs)} className = {styles.editWrapper}>
                    <p>Edit</p>
                    <Edit />
                </div>
            </div>
            <div className = {styles.secondSection}>
                <div className = {styles.imgBlock}>
                    <img src = {emptyAvatar} alt="avatar" />
                    <h3>Greg_Bog1345</h3>
                </div>
                <ul className = {styles.infoBlock}>
                    <li className = {styles.infoBlock_el}>
                        <p className = {styles.label}>First name:</p>
                        {
                            !isOpenEditInputs 
                            ? <p className = {styles.value}>Gregor</p>
                            : <input required type="text" value = "Gregor"/>
                        }
                    </li>
                    <li className = {styles.infoBlock_el}>
                        <p className = {styles.label}>Second name:</p>
                        {
                            !isOpenEditInputs 
                            ? <p className = {styles.value}>Demidenkov</p>
                            : <input required type="text" value = "Demidenkov"/>
                        }
                    </li>
                    <li className = {styles.infoBlock_el}>
                        <p className = {styles.label}>Email:</p>
                        {
                            !isOpenEditInputs 
                            ? <p className = {styles.value}>greg.demidenkov@yandex.ru</p>
                            : <input required type="text" value = "greg.demidenkov@yandex.ru"/>
                        }
                    </li>
                    <li className = {styles.infoBlock_el}>
                        {
                            !isOpenEditInputs 
                            ? <NavLink to = {paths.changePasswordPage} className = {styles.button}>Change Password</NavLink>
                            : <button className = {styles.button} onClick = {() => setOpenEditInputs(!isOpenEditInputs)}>Apply</button>
                        }
                    </li>
                </ul>
            </div>
        </div>
    );
}