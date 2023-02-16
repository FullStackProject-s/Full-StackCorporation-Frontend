import { useEffect, useState } from 'react'

import { Validation } from 'types/hooks/validation/validation';
import { ValidationEnum } from 'constants/validation';

export const useValidation = (value: string, validationTypes: Validation) => {

    const [isEmpty, setEmpty] = useState(true);
    const [minLength, setMinLength] = useState(false);
    const [maxLength, setMaxLength] = useState(false);
    const [isPassword, setPassword] = useState(false);
    const [isEmail, setEmail] = useState(false);
    const [formValid, setFormValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        for(const validation in validationTypes) {
            switch (validation) {
                case ValidationEnum.minLength:
                    setMinLength(value.length < (validationTypes.minLength ? validationTypes.minLength : 0))
                    break;
                case ValidationEnum.maxLength:
                    setMaxLength(value.length > (validationTypes.maxLength ? validationTypes.maxLength : 0))
                    break;
                case ValidationEnum.isEmpty:
                    setEmpty(!Boolean(value))
                    break;
                case ValidationEnum.isPassword:
                    setPassword(!(value === validationTypes.isPassword))
                    break;
                case ValidationEnum.isEmail:
                    const re = /(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)/
                    setEmail(!(re.test(String(value).toLocaleLowerCase())))
                    break;
                default:
                    break;
            }
        }
    }, [value])

    const findError = () => {
        if (isEmpty) {
            setErrorMessage("Empty Field")
            return 0
        } else if (minLength) {
            setErrorMessage(`Length less than ${validationTypes.minLength}`)
            return 0
        } else if (maxLength) {
            setErrorMessage(`Length more than ${validationTypes.maxLength}`)
            return 0
        } else if (isPassword) {
            setErrorMessage("Password mismatch")
            return 0
        } else if (isEmail) {
            setErrorMessage("Wrong email")
            return 0
        } else {
            setErrorMessage("")
            return 0
        }
    }

    useEffect(() => {
        if (isEmpty || minLength || maxLength || isPassword || isEmail) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }   

        findError()

    }, [isEmpty, minLength, maxLength, isPassword, isEmail])

    return {
        isEmpty,
        minLength,
        maxLength,
        isPassword,
        isEmail,
        formValid,
        errorMessage
    }

}