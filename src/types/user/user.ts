import { RoleEnum } from "constants/role"
import { ShowPermission } from "./permission"

export interface BaseUser {
    username: string,
    email: string,
    first_name: string,
    last_name: string,
    password: string,
    staff_role: RoleEnum | ShowPermission
}

export interface ShowUser extends BaseUser {
    pk: number,
    create_at: string,
    staff_role: ShowPermission
}

export interface User extends BaseUser {
    staffRole?: ShowPermission
}

export interface UpdateUser {
    pk: number,
    username: string,
    email: string,
    first_name: string,
    last_name: string,
    staff_role?: number
}