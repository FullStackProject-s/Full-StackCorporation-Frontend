import { ShowDeveloper } from "types/employee/developer"
import { ShowProjectManager } from "types/employee/projectManager"

export interface ShowTeam {
    pk: number,
    teamName: string,
    teamLead: ShowDeveloper,
    projectManager: ShowProjectManager,
    developers: ShowDeveloper[]
    createAt: string,

}

export interface Team {
    teamName: string,
    teamLead: number,
    projectManager: number,
    developers: number[]
}