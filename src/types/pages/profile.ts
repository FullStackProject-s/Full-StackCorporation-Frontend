import { ShowUser } from "types/user/user";

export interface SettingsType {
    pk: number,
    user: ShowUser,
    profile_avatar: string;
    about_user: string
}

export interface ProfileType {
    user: ShowUser,
    profile_avatar: string;
    about_user: string
}