import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { paths } from 'routing/config';

import { login } from 'redux/auth/asyncActions';
import { useAppDispatch, useAppSelector } from 'redux/store';

import { FormButton } from 'components/ui/formButton/FormButton';
import { InputPassword } from 'components/ui/inputPassword/InputPassword';

import styles from 'components/pages/auth/auth.module.scss'

export const LoginForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { isAuth, isLoading } = useAppSelector(state => state.user)

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    if (isAuth && !isLoading) {
      navigate(paths.profilePage)
    }

    return (
      <form className = {styles.formContainer} action="">
        <label className = {styles.label}>USERNAME:</label>
        <input 
          className = {styles.input} 
          type="text" 
          value = {username} 
          onChange = {(e) => setUserName(e.target.value)}
        />
        <InputPassword labelName = "PASSWORD" value = {password} onChange = {setPassword}/>
        <FormButton disabled = {false} onClick = {() => dispatch(login({username, password}))}>SIGN IN</FormButton>
      </form>
    );
}