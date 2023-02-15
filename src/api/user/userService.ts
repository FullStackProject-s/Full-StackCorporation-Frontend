import { $apiGet, $apiPatch, $apiPost } from "api/axios";
import { AxiosResponse } from "axios";
import { ShowUser } from "types/user/user"

export default class UserService {

    static async getMe(): Promise<AxiosResponse<ShowUser>> {
        return $apiGet.get<ShowUser>("user/me/")
    }

    static async updateUser(username: string | "", email: string, first_name: string, last_name: string, id: number): Promise<AxiosResponse<ShowUser>> {
        return $apiPatch.patch<ShowUser>(`user/update-user/${id}`, {username, email, first_name, last_name})
    }
}