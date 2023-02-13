import { $apiDownload, $apiGet } from "api/axios";
import { AxiosResponse } from "axios";
import { ShowProfile } from "types/user/profile";

export default class ProfileService {
    static async getMe(): Promise<AxiosResponse<ShowProfile>> {
        return $apiGet.get<ShowProfile>("profile/me/")
    }

    static async uploadAvatar(profile_avatar: File, id: number): Promise<AxiosResponse<ShowProfile>> {
        return $apiDownload.post<ShowProfile>(`profile/upload-image/${id}`, {profile_avatar})
    }
}