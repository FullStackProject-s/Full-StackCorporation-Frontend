import $api from "api/axios";
import { AxiosResponse } from "axios";
import { Access, Activation } from "types/auth/auth"
import { ShowUser } from "types/user/user"

export default class AuthService {
    static async login(username: string, password: string): Promise<AxiosResponse<Access>> {
        return $api.post<Access>("auth/token/tokens-obtain/", {username, password})
    }

    static async registration(username: string, email: string, first_name: string, last_name: string, password: string): Promise<AxiosResponse<ShowUser>> {
        return $api.post<ShowUser>("auth/users/", {username, email, first_name, last_name, password})
    }

    static async activation(uid: string, token: string): Promise<AxiosResponse<Activation>> {
        return $api.post<Activation>("auth/users/activation/", {uid, token})
    }

    static async logout(): Promise<void> {
        return $api.post("auth/token/delete/")
    }
}