import { ShowTeam } from "./team"

export interface ShowProject {
    pk: number,
    projectName: string,
    teams: ShowTeam[],
    organization: string,
    createAt: string,
    deadline: string
}

export interface Project {
    projectName: string,
    teams: number[],
    organization: number,
    deadline: string
}