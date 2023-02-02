import { SkillLavelEnum } from "constants/skillLavel";

import { ShowProfile } from "types/user/profile";
import { ShowTechnology } from "./technology";

export interface ShowDeveloper {
    pk: number,
    profile: ShowProfile,
    team: string,
    skillLavel: SkillLavelEnum,
    specialties: string[],
    stack: ShowTechnology[]
}

export interface Developer {
    profile: number,
    skillLavel: SkillLavelEnum,
    specialities: number[],
    stack: number[]
}