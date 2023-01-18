import { technology } from "constants/technology";

export interface ShowTechnology {
    pk: number,
    technologyName: string,
    technologyCategory: technology
}

export interface Technology {
    technologyName: string,
    technologyCategory: technology
}