import { skillLavel } from "constants/skillLavel";

import { ShowProfile } from "types/user/profile";
import { ShowTechnology } from "./technology";

export interface ShowDeveloper {
    pk: number,
    profile: ShowProfile,
    team: string,
    skillLavel: skillLavel,
    specialties: string[],
    stack: ShowTechnology[]
}

export interface Developer {
    profile: number,
    skillLavel: skillLavel,
    specialities: number[],
    stack: number[]
}