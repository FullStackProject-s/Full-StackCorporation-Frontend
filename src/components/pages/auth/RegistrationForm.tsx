import React from 'react'

import { useInputCheck } from 'hooks/formValidation/useInputCheck';

import { registration } from 'redux/auth/asyncActions';
import { useAppDispatch, useAppSelector } from 'redux/store';

import { FormButton } from 'components/ui/formButton/FormButton';
import { InputPassword } from 'components/ui/inputPassword/InputPassword';

import styles from 'components/pages/auth/auth.module.scss'

export const RegistrationForm: React.FC = () => {
    
    const dispatch = useAppDispatch();

    const username = useInputCheck("", {isEmpty: true, minLength: 5, maxLength: 25})
    const email = useInputCheck("", {isEmpty: true, maxLength: 25, isEmail: true})
    const first_name = useInputCheck("", {isEmpty: true, maxLength: 25})
    const last_name = useInputCheck("", {isEmpty: true, maxLength: 25})
    const password = useInputCheck("", {isEmpty: true, minLength: 8, maxLength: 25})
    const rePassword = useInputCheck("", {isEmpty: true, isPassword: password.value})

    const { error, message } = useAppSelector(state => state.user)

    const inputLabels = [
      {
        label: "USERNAME",
        value: username,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => username.onChange(e),
        onBlur: (e: React.FocusEvent<HTMLInputElement>) => username.onBlur(e)
      }, 
      {
        label: "EMAIL",
        value: email,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => email.onChange(e),
        onBlur: (e: React.FocusEvent<HTMLInputElement>) => email.onBlur(e)
      }, 
      {
        label: "FIRSTNAME",
        value: first_name,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => first_name.onChange(e),
        onBlur: (e: React.FocusEvent<HTMLInputElement>) => first_name.onBlur(e)
      }, 
      {
        label: "SECONDNAME",
        value: last_name,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => last_name.onChange(e),
        onBlur: (e: React.FocusEvent<HTMLInputElement>) => last_name.onBlur(e)
      }
    ]

    return (
      <form className = {styles.formContainer} action="">
        {
            inputLabels.map((el, index) => (
                <>
                    <label key = {`${index}_label`} className = {styles.label}>{el.label}:</label>
                    <input 
                      key = {`${index}_input`} 
                      className = {styles.input} 
                      type="text" value = {el.value.value} 
                      onChange = {(e: React.ChangeEvent<HTMLInputElement>) => el.onChange(e)}
                      onBlur = {(e: React.FocusEvent<HTMLInputElement>) => el.onBlur(e)}
                    />
                    {
                      (el.value.isFocus && el.value.errorMessage) && <p className = {styles.alertMessage}>{el.value.errorMessage}</p>
                    }
                </>
            ))
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
        <InputPassword 
          labelName = "REPEAT PASSWORD"
          value = {rePassword.value} 
          onChange = {rePassword.onChange}
          onBlur = {rePassword.onBlur}
        />
        {
          (rePassword.isFocus && rePassword.errorMessage) && <p className = {styles.alertMessage}>{rePassword.errorMessage}</p>
        }
        <FormButton 
          disabled = {!username.formValid || !email.formValid || !first_name.formValid || !last_name.formValid || !password.formValid || !rePassword.formValid} 
          onClick = {() => dispatch(registration({
            username: username.value,
            email: email.value,
            first_name: first_name.value,
            last_name: last_name.value,
            password: password.value
          }))}>
          SIGN UP
        </FormButton>
        {
          error && <p className = {styles.alertMessage}>{error}</p>
        }
        {
          message && <p className = {styles.alertMessage}>{message}</p>
        }
      </form>
    );
}