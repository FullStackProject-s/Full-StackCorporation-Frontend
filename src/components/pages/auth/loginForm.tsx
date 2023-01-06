import React from 'react'

import { FormButton } from 'components/ui/formButton/FormButton';
import { InputPassword } from 'components/ui/inputPassword/InputPassword';

import styles from 'components/pages/auth/auth.module.scss'

export const LoginForm: React.FC = () => {

    return (
      <form className = {styles.formContainer} action="">
        <label className = {styles.label}>USERNAME:</label>
        <input className = {styles.input} type="text" />
        <InputPassword labelName = "PASSWORD"/>
        <FormButton disabled = {false}>SIGN IN</FormButton>
      </form>
    );
}