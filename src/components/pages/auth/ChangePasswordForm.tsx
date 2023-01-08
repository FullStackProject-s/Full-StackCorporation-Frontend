import React from 'react'

import { FormButton } from 'components/ui/formButton/FormButton';
import { InputPassword } from 'components/ui/inputPassword/InputPassword';

import styles from 'components/pages/auth/auth.module.scss'

export const ChangePasswordForm: React.FC = () => {

    return (
      <form className = {styles.formContainer} action="">
        <InputPassword labelName = "OLD PASSWORD"/>
        <InputPassword labelName = "NEW PASSWORD"/>
        <InputPassword labelName = "CONFIRM NEW PASSWORD"/>
        <FormButton disabled = {false}>Change Password</FormButton>
      </form>
    );
}