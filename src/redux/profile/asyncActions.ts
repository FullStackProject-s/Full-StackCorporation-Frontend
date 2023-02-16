import { createAsyncThunk } from "@reduxjs/toolkit";

import profileService from "api/profile/profileService";


import { ShowProfile, UpdateProfile, UploadImage } from "types/user/profile";

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
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("Token not valid");
        }
    }
)

export const updateProfile = createAsyncThunk<ShowProfile, UpdateProfile>(
    "profile/updateProfile", 
    async ({pk, user, about_user}, thunkAPI) => {
        try {
            const response: any = await profileService.updateProfile(pk, user, about_user)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("Token not valid");
        }
    }
)