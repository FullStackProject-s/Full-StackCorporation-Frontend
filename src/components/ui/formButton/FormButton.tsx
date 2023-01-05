import React from "react"
import styles from './formButton.module.scss'

type FormButtonType = {
    disabled: boolean,
    children: string,
}

export const FormButton: React.FC<FormButtonType> = ({
    disabled,
    children,
  }) => {
    
      return (
          <button
              type = "button"
              disabled={disabled || false}
              className = {styles.formButton}
          >
              {children}
          </button>
      )
  }