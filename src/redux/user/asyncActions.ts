import { createAsyncThunk } from "@reduxjs/toolkit";

import UserService from "api/user/userService";
import axios from "axios";

import { ShowUser, UpdateUser } from "types/user/user";
import { setError } from "./userSlice";

export const getMe = createAsyncThunk<ShowUser>(
    "user/getMe", 
    async (_, thunkAPI) => {
        try {
            const response: any = await UserService.getMe()
            thunkAPI.dispatch(setError(""));
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("Error");
        }
    }
)

export const updateUser = createAsyncThunk<ShowUser, UpdateUser>(
    "user/updateUser", 
    async ({username, email, first_name, last_name, pk}, thunkAPI) => {
        try {
            const response: any = await UserService.updateUser(username, email, first_name, last_name, pk)
            thunkAPI.dispatch(setError(""));
            return response.data
        } catch (error) {
            console.log(error)
            if (axios.isAxiosError(error)) {
                thunkAPI.dispatch(setError(`${error?.response?.data?.username || error?.response?.data?.email}`))
                return thunkAPI.rejectWithValue("Token not valid");
            } else {
                throw new Error('different error than axios');
            }
        }
    }
)