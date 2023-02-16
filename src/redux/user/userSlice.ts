import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMe, updateUser } from "./asyncActions";

import { ShowUser } from "types/user/user";

interface UserState {
    pk: number,
    user: ShowUser,
    isAuth: boolean,
    isActivate: boolean,
    isActivatePassword: boolean,
    isLoading: boolean,
    error: string,
    message: string
}

const initialState: UserState = {
    pk: 0,
    user: {} as ShowUser,
    isAuth: false,
    isActivate: false,
    isActivatePassword: false,
    isLoading: false,
    error: "",
    message: ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        },
        setUser(state, action: PayloadAction<ShowUser>) {
            state.user = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
        setActivate(state, action: PayloadAction<boolean>) {
            state.isActivate = action.payload;
        },
        setActivatePassword(state, action: PayloadAction<boolean>) {
            state.isActivatePassword = action.payload;
        },
        setMessage(state, action: PayloadAction<string>) {
            state.message = action.payload;
        },
    },
    extraReducers: (builder) => {
        // Get Me
        builder.addCase(getMe.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMe.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(getMe.rejected, (state) => {
            state.isLoading = false;
        });
        // Update User
        builder.addCase(updateUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload
        });
        builder.addCase(updateUser.rejected, (state) => {
            state.isLoading = false;
        });
    },
})

export const { setAuth, setUser, setLoading, setError, setActivate, setActivatePassword, setMessage } = userSlice.actions;

export default userSlice.reducer;