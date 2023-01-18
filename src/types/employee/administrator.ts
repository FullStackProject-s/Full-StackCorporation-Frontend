import { ShowProfile } from "types/user/profile";

export interface ShowAdministrator {
    pk: number,
    profile: ShowProfile,
    profileAvatar: string,
    aboutUser: string
}

export interface Administrator {
    profile: number
}