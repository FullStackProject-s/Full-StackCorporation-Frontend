import { createAsyncThunk } from "@reduxjs/toolkit";

import profileService from "api/profile/profileService";
import axios from "axios";
import { checkAuth } from "redux/auth/asyncActions";

import { ShowProfile, UploadImage } from "types/user/profile";

export const getMe = createAsyncThunk<ShowProfile>(
    "profile/getMe", 
    async (_, thunkAPI) => {
        try {
            const response: any = await profileService.getMe()
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("Token not valid");
        }
    }
)

export const uploadAvatar = createAsyncThunk<ShowProfile, UploadImage>(
    "profile/uploadAvatar", 
    async ({profile_avatar, pk}, thunkAPI) => {
        try {
            const response: any = await profileService.uploadAvatar(profile_avatar, pk)
            // const response = await axios.post(
            //     `${process.env.REACT_APP_API_DOMAIN}/profile/upload-image/${pk}`,
            //     formData,
            //     {headers: {
            //         "Content-Type": "multipart/form-data",
            //         Authorization: `Bearer ${localStorage.getItem("token")}`
            //     }}
            // );
            // console.log(response)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("Token not valid");
        }
    }
)