export interface Validation {
    isEmpty: boolean,
    minLength?: number,
    maxLength?: number,
    isPassword?: string,
    isEmail?: boolean
}