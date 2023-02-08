export interface Access {
    access: string
}

export interface Login {
    username: string,
    password: string
}

export interface Activation {
    uid: string,
    token: string
}

export interface ResetPassword {
    email: string
}

export interface ResetPasswordConfirm {
    uid: string,
    token: string
    new_password: string
}