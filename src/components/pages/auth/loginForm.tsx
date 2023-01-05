import React, {useState} from 'react'

import { FormButton } from 'components/ui/formButton/FormButton';
import { EyePasswordClose } from 'components/ui/svg/EyePasswordClose';
import { EyePasswordOpen } from 'components/ui/svg/EyePasswordOpen';

import styles from 'components/pages/auth/auth.module.scss'

export const LoginForm: React.FC = () => {
    const [isVisiblePassword, setVisibilityPassword] = useState(false);

    return (
      <form className = {styles.formContainer} action="">
        <label className = {styles.label}>USERNAME:</label>
        <input className = {styles.input} type="text" />
        <label className = {styles.label}>PASSWORD:</label>
        <div className = {styles.passwordInputWrapper}>
            <input 
                className = {styles.input_password} 
                type={isVisiblePassword ? "text" : "password"} 
            />
            <div
                onClick={() => setVisibilityPassword(!isVisiblePassword)}
                className = {styles.passwordSvgWrapper}
            >
                {isVisiblePassword ? <EyePasswordOpen /> : <EyePasswordClose />}
            </div>
        </div>
        <FormButton disabled = {false}>SIGN IN</FormButton>
      </form>
    );
}