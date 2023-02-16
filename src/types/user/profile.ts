import { ShowUser } from "./user";

export interface ShowProfile {
    pk?: number,
    user: ShowUser,
    profile_avatar: string;
    about_user?: string
}

export interface Profile {
    user: number,
    about_user: string
}

export interface UploadImage {
    pk: number,
    profile_avatar: File;
}

export interface UpdateProfile {
    pk: number,
    user: number,
    about_user: string
}