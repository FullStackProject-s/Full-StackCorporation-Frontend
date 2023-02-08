import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMe } from "./asyncActions";

import { ShowUser } from "types/user/user";

interface UserState {
    user: ShowUser,
    isAuth: boolean,
    isActivate: boolean,
    isActivatePassword: boolean,
    isLoading: boolean,
    error: string
}

const initialState: UserState = {
    user: {} as ShowUser,
    isAuth: false,
    isActivate: false,
    isActivatePassword: false,
    isLoading: false,
    error: ""
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
    },
})

export const { setAuth, setUser, setLoading, setError, setActivate, setActivatePassword } = userSlice.actions;

export default userSlice.reducer;