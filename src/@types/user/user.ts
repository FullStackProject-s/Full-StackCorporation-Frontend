import { role } from "constants/role"

export interface BaseUser {
    "username": string,
    "email": string,
    "first_name": string,
    "last_name": string,
    "password": string,
}

export interface ShowUser extends BaseUser {
    "pk": number,
    "create_at": string,
    "staff_role": StaffRole
}

export interface User extends BaseUser {
    "staff_role": StaffRole
}

interface StaffRole {
    "pk": number,
    "role_name": role
}