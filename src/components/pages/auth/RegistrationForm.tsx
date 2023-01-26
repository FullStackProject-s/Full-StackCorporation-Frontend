import React, { useState } from 'react'

import { FormButton } from 'components/ui/formButton/FormButton';
import { InputPassword } from 'components/ui/inputPassword/InputPassword';

import styles from 'components/pages/auth/auth.module.scss'
import { registration } from 'redux/auth/asyncActions';
import { useAppDispatch } from 'redux/store';

export const RegistrationForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setSecondName] = useState("");
    const [password, setPassword] = useState("");

    const inputLabels = [
      {
        label: "USERNAME",
        value: username,
        onChange: (val: string) => setUserName(val)
    
      }, 
      {
        label: "EMAIL",
        value: email,
        onChange: (val: string) => setEmail(val)
      }, 
      {
        label: "FIRSTNAME",
        value: first_name,
        onChange: (val: string) => setFirstName(val)
      }, 
      {
        label: "SECONDNAME",
        value: last_name,
        onChange: (val: string) => setSecondName(val)
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
                      type="text" value = {el.value} 
                      onChange = {(e) => el.onChange(e.target.value)}
                    />
                </>
            ))
        }
        <InputPassword labelName = "PASSWORD" value = {password} onChange = {setPassword}/>
        <InputPassword labelName = "REPEAT PASSWORD"/>
        <FormButton disabled = {false} onClick = {() => dispatch(registration({username, email, first_name, last_name, password}))}>SIGN UP</FormButton>
      </form>
    );
}