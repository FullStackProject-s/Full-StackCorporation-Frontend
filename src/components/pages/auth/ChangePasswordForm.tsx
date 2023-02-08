import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'redux/store';
import { resetPasswordConfirm } from 'redux/auth/asyncActions';

import { paths } from 'routing/config';

import { useInputCheck } from 'hooks/formValidation/useInputCheck';

import { FormButton } from 'components/ui/formButton/FormButton';
import { InputPassword } from 'components/ui/inputPassword/InputPassword';

import styles from 'components/pages/auth/auth.module.scss'

export const ChangePasswordForm: React.FC = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { uid, token } = useParams();
    const { isLoading, isActivatePassword } = useAppSelector(state => state.user)

    const password = useInputCheck("", {isEmpty: true, minLength: 8, maxLength: 25})
    const rePassword = useInputCheck("", {isEmpty: true, isPassword: password.value})

    const uidParametr = uid ? uid : ""
    const tokenParametr = token ? token : ""

    if (!isLoading && isActivatePassword ) {
        navigate(paths.changePasswordPage)
    }

    return (
      <form className = {styles.formContainer} action="">
        <InputPassword 
          labelName = "NEW PASSWORD" 
          value = {password.value} 
          onChange = {password.onChange}
          onBlur = {password.onBlur}
        />
        {
          (password.isFocus && password.errorMessage) && <p className = {styles.alertMessage}>{password.errorMessage}</p>
        }
        <InputPassword 
          labelName = "CONFIRM NEW PASSWORD"
          value = {rePassword.value} 
          onChange = {rePassword.onChange}
          onBlur = {rePassword.onBlur}
        />
        {
          (rePassword.isFocus && rePassword.errorMessage) && <p className = {styles.alertMessage}>{rePassword.errorMessage}</p>
        }
        <FormButton 
          disabled = {!password.formValid || !rePassword.formValid} 
          onClick = {() => dispatch(resetPasswordConfirm({uid: uidParametr, token: tokenParametr, new_password: password.value}))}>
          Change Password
        </FormButton>
      </form>
    );
}