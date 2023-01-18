import { ShowProject } from "types/project/project"
import { ShowUser } from "types/user/user"

export interface ShowOrganization {
    organizationName: string,
    owner: number,
    organizationAvatar: string,
    projects: ShowProject[],
    members: ShowUser[]
}

export interface Organization {
    organizationName: string,
    owner: number,
    organizationAvatar: string,
    projects: number[],
    members: number[]
}

export interface UploadImage {
    profileAvatar: string
}