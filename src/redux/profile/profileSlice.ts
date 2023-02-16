import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ShowUser } from "types/user/user";
import { getMe, uploadAvatar } from "./asyncActions";

interface ProfileState {
    pk: number,
    user: ShowUser,
    avatar: string,
    about: string,
    isLoading: boolean,
    error: string
}

const initialState: ProfileState = {
    pk: 0,
    user: {} as ShowUser,
    avatar: "",
    about: "",
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
            state.pk = action.payload.pk ? action.payload.pk : 0
            state.user = action.payload.user
            state.avatar = `${process.env.REACT_APP_API_DOMAIN}${action.payload.profile_avatar}`
            state.about = action.payload.aboutUser ? action.payload.aboutUser : ""
        });
        builder.addCase(getMe.rejected, (state) => {
            state.isLoading = false;
        });
        //Upload Avatar
        builder.addCase(uploadAvatar.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(uploadAvatar.fulfilled, (state, action) => {
            state.isLoading = false;
            state.avatar = `${process.env.REACT_APP_API_DOMAIN}${action.payload.profile_avatar}`
        });
        builder.addCase(uploadAvatar.rejected, (state) => {
            state.isLoading = false;
        });
    },
})

export const { } = profileSlice.actions;

export default profileSlice.reducer;