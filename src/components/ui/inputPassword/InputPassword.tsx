import React, {useState} from "react";

import { EyePasswordClose } from 'components/ui/svg/EyePasswordClose';
import { EyePasswordOpen } from 'components/ui/svg/EyePasswordOpen';

import styles from './inputPassword.module.scss'

type InputPAsswordType = {
    labelName: string,
    value?: string,
    onChange?: Function
}

export const InputPassword: React.FC<InputPAsswordType> = ({labelName, value, onChange}) => {
    const [isVisiblePassword, setVisibilityPassword] = useState(false);

    return (
        <>
        <label className = {styles.label}>{labelName}:</label>
        <div className = {styles.passwordInputWrapper}>
            <input 
                className = {styles.input_password} 
                type={isVisiblePassword ? "text" : "password"} 
                value = {value}
                onChange = {onChange ? (e) => onChange(e.target.value) : () => {}}
            />
            <div
                onClick={() => setVisibilityPassword(!isVisiblePassword)}
                className = {styles.passwordSvgWrapper}
            >
                {isVisiblePassword ? <EyePasswordOpen /> : <EyePasswordClose />}
            </div>
        </div>
        </>
    )
}