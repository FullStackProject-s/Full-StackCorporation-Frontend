import React from 'react'

import { useNavigate } from 'react-router-dom';
import { paths } from 'routing/config';

import { login } from 'redux/auth/asyncActions';
import { useAppDispatch, useAppSelector } from 'redux/store';

import { useInputCheck } from 'hooks/formValidation/useInputCheck';

import { FormButton } from 'components/ui/formButton/FormButton';
import { InputPassword } from 'components/ui/inputPassword/InputPassword';

import styles from 'components/pages/auth/auth.module.scss'

export const LoginForm: React.FC = () => {
  
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const username = useInputCheck("", {isEmpty: true, minLength: 5, maxLength: 25})
    const password = useInputCheck("", {isEmpty: true, minLength: 8, maxLength: 25})

    const { isAuth, isLoading, error } = useAppSelector(state => state.user)

    if (isAuth && !isLoading) {
      navigate(paths.profilePage)
    }

    return (
      <form className = {styles.formContainer} action="">
        <label className = {styles.label}>Username:</label>
        <input 
          className = {styles.input} 
          type="text" 
          value = {username.value} 
          onChange = {e => username.onChange(e)}
          onBlur = {e => username.onBlur(e)}
        />
        {
          (username.isFocus && username.errorMessage) && <p className = {styles.alertMessage}>{username.errorMessage}</p>
        }
        <InputPassword 
          labelName = "PASSWORD" 
          value = {password.value} 
          onChange = {password.onChange}
          onBlur = {password.onBlur}
        />
        {
          (password.isFocus && password.errorMessage) && <p className = {styles.alertMessage}>{password.errorMessage}</p>
        }
        <FormButton 
          disabled = {!username.formValid || !password.formValid} 
          onClick = {() => dispatch(login({
            username: username.value, 
            password: password.value
          }))}>
          SIGN IN
        </FormButton>
        {
          error && <p className = {styles.alertMessage}>{error}</p>
        }
      </form>
    );
}