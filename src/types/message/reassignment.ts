import { ShowProject } from "types/project/project";
import { ShowTeam } from "types/project/team";
import { ShowUser } from "types/user/user";

export interface ShowReassignment {
    pk: number,
    creator: ShowUser,
    text: string,
    create_at: string,
    fromProject: ShowProject,
    toProject: ShowProject,
    fromTeam: ShowTeam,
    toTeam: ShowTeam,
    confirmed: boolean
}

export interface Reassignment {
    creator: number,
    text: string,
    create_at: string,
    fromProject: number,
    toProject: number,
    fromTeam: number,
    toTeam: number,
}