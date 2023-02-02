import { TechnologyEnum } from "constants/technology";

export interface ShowTechnology {
    pk: number,
    technologyName: string,
    technologyCategory: TechnologyEnum
}

export interface Technology {
    technologyName: string,
    technologyCategory: TechnologyEnum
}