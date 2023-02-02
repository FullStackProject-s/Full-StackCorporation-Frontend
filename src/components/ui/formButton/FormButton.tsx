import React from "react"
import styles from './formButton.module.scss'

type FormButtonType = {
    disabled: boolean,
    children: string,
    onClick?: () => void
}

export const FormButton: React.FC<FormButtonType> = ({
    disabled,
    children,
    onClick
  }) => {
    
    return (
        <button
            type = "button"
            disabled={disabled || false}
            className = {styles.formButton}
            onClick = {onClick}
        >
            {children}
        </button>
    )
  }