import React from 'react'

import { FormButton } from 'components/ui/formButton/FormButton';
import { InputPassword } from 'components/ui/inputPassword/InputPassword';

import styles from 'components/pages/auth/auth.module.scss'

const inputLabels = ["USERNAME", "EMAIL", "FIRSTNAME", "SECONDNAME"]

export const RegistrationForm: React.FC = () => {

    return (
      <form className = {styles.formContainer} action="">
        {
            inputLabels.map((el, index) => (
                <>
                    <label key = {`${index}_label`} className = {styles.label}>{el}:</label>
                    <input key = {`${index}_input`} className = {styles.input} type="text" />
                </>
            ))
        }
        <InputPassword labelName = "PASSWORD"/>
        <InputPassword labelName = "REPEAT PASSWORD"/>
        <FormButton disabled = {false}>SIGN UP</FormButton>
      </form>
    );
}