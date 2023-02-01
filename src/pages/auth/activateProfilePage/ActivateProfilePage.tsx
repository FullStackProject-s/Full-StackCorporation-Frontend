import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { activation } from 'redux/auth/asyncActions';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { paths } from 'routing/config';

import styles from "./auth.module.scss";

export const ActivateProfilePage: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { uid, token } = useParams();
    const { isLoading, isActivate} = useAppSelector(state => state.user)

    const uidParametr = uid ? uid : ""
    const tokenParametr = token ? token : ""

    useEffect(() => {
       dispatch(activation({uid: uidParametr, token: tokenParametr}))
    }, [])

    if (!isLoading && isActivate ) {
        navigate(paths.loginPage)
    }
    
    return (
        <section className = {styles.sectionActivate}>
            {
                isLoading
                ? <p className = {styles.activationStatus}>Activation...</p>
                : <p className = {styles.activationStatus}>Something went wrong<br/>Profile not activated</p>
            }
        </section>
    )
}
