import { role } from "constants/role"

export interface ShowPermission {
    pk: number,
    roleName: role
}

export interface Permission {
    roleName: role
}