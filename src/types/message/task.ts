import { technology } from "constants/technology";
import { ShowUser } from "types/user/user";

export interface ShowTask {
    pk: number,
    creator: ShowUser,
    text: string,
    create_at: string,
    completed: boolean
}

export interface Task {
    technologyName: string,
    technologyCategory: technology
}