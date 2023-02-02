import { SkillLavelEnum } from "constants/skillLavel";

import { ShowProfile } from "types/user/profile";

export interface ShowProjectManager {
    pk: number,
    profile: ShowProfile,
    team: string,
}

export interface ProjectManager {
    profile: number,
    skillLavel: SkillLavelEnum,
    specialities: number[],
    stack: number[]
}