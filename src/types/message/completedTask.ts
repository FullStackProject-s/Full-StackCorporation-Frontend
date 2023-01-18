import { ShowUser } from "types/user/user";
import { ShowTask } from "./task";

export interface ShowCompletedTask {
    pk: number,
    creator: ShowUser,
    text: string,
    create_at: string,
    tasks: ShowTask[],
    checked: boolean
}

export interface CompletedTask {
    creator: number,
    text: string,
    tasks: number[],
}