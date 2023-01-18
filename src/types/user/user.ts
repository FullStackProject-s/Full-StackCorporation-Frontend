import { ShowPermission } from "./permission"

export interface BaseUser {
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    password: string,
}

export interface ShowUser extends BaseUser {
    pk: number,
    createAt: string,
    staffRole: ShowPermission
}

export interface User extends BaseUser {
    staffRole: ShowPermission
}