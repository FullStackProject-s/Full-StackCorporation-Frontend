import { $apiGet } from "api/axios";
import { AxiosResponse } from "axios";
import { ShowProfile } from "types/user/profile";

export default class ProfileService {
    static async getMe(): Promise<AxiosResponse<ShowProfile>> {
        return $apiGet.get<ShowProfile>("profile/me/")
    }
}