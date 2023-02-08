import { ShowPermission } from "./permission"

export interface BaseUser {
    username: string,
    email: string,
    first_name: string,
    last_name: string,
    password: string,
}

export interface ShowUser extends BaseUser {
    pk: number,
    create_at: string,
    staffRole?: ShowPermission
}

export interface User extends BaseUser {
    staffRole?: ShowPermission
}