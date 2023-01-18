import { ShowUser } from "./user";

export interface ShowProfile {
    pk: number,
    user: ShowUser,
    profileAvatar: string;
    aboutUser: string
}

export interface Profile {
    user: number,
    aboutUser: string
}

export interface UploadImage {
    profileAvatar: string;
}