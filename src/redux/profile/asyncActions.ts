import { createAsyncThunk } from "@reduxjs/toolkit";

import profileService from "api/profile/profileService";

import { ShowProfile } from "types/user/profile";

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