import { createAsyncThunk } from "@reduxjs/toolkit";

import UserService from "api/user/userService";

import { ShowUser } from "types/user/user";

export const getMe = createAsyncThunk<ShowUser>(
    "user/getMe", 
    async (_, thunkAPI) => {
        try {
            const response: any = await UserService.getMe()
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("Error");
        }
    }
)