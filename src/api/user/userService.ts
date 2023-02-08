import { $apiGet } from "api/axios";
import { AxiosResponse } from "axios";
import { ShowUser } from "types/user/user"

export default class UserService {
    static async getMe(): Promise<AxiosResponse<ShowUser>> {
        return $apiGet.get<ShowUser>("user/me/")
    }
}