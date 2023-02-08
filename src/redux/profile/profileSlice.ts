import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ShowUser } from "types/user/user";
import { getMe } from "./asyncActions";

interface ProfileState {
    user: ShowUser,
    avatar: string,
    isLoading: boolean,
    error: string
}

const initialState: ProfileState = {
    user: {} as ShowUser,
    avatar: "",
    isLoading: false,
    error: ""
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //Get Me
        builder.addCase(getMe.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMe.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload.user
            state.avatar = `${process.env.REACT_APP_API_DOMAIN}${action.payload.profile_avatar}`
        });
        builder.addCase(getMe.rejected, (state) => {
            state.isLoading = false;
        });
    },
})

export const { } = profileSlice.actions;

export default profileSlice.reducer;