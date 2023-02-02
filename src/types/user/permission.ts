import { RoleEnum } from "constants/role"

export interface ShowPermission {
    pk: number,
    roleName: RoleEnum
}

export interface Permission {
    roleName: RoleEnum
}