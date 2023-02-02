import React, { useState } from 'react'

import { useValidation } from './useValidation';

import { Validation } from 'types/validation/validation';

export const useInputCheck = (initialValue: string, validationTypes: Validation) => {
    const [value, setValue] = useState(initialValue);
    const [isFocus, setFocus] = useState(false);
    const valid = useValidation(value, validationTypes)


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setFocus(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isFocus,
        ...valid
    }
} 