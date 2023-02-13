import { ShowUser } from "./user";

export interface ShowProfile {
    pk?: number,
    user: ShowUser,
    profile_avatar: string;
    aboutUser?: string
}

export interface Profile {
    user: number,
    aboutUser: string
}

export interface UploadImage {
    pk: number,
    profile_avatar: File;
}