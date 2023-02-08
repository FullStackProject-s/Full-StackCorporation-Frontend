import { $apiPost } from "api/axios";
import { AxiosResponse } from "axios";
import { Access, Activation, ResetPassword, ResetPasswordConfirm } from "types/auth/auth"
import { ShowUser } from "types/user/user"

export default class AuthService {
    static async login(username: string, password: string): Promise<AxiosResponse<Access>> {
        return $apiPost.post<Access>("auth/token/tokens-obtain/", {username, password})
    }

    static async registration(username: string, email: string, first_name: string, last_name: string, password: string): Promise<AxiosResponse<ShowUser>> {
        return $apiPost.post<ShowUser>("auth/users/", {username, email, first_name, last_name, password})
    }

    static async activation(uid: string, token: string): Promise<AxiosResponse<Activation>> {
        return $apiPost.post<Activation>("auth/users/activation/", {uid, token})
    }

    static async logout(): Promise<void> {
        return $apiPost.post("auth/token/delete/")
    }

    static async resetPassword(email: string): Promise<AxiosResponse<ResetPassword>> {
        return $apiPost.post<ResetPassword>("auth/users/reset_password/", {email})
    }

    static async resetPasswordConfirm(uid: string, token: string, new_password: string): Promise<AxiosResponse<ResetPasswordConfirm>> {
        return $apiPost.post<ResetPasswordConfirm>("auth/users/reset_password_confirm/", {uid, token, new_password})
    }

}