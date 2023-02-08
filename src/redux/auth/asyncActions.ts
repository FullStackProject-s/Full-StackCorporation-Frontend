import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import AuthService from "api/auth/authService";

import { setActivate, setActivatePassword, setAuth, setError, setLoading } from "redux/user/userSlice";

import { Activation, Login, ResetPassword, ResetPasswordConfirm } from "types/auth/auth";
import { BaseUser } from "types/user/user";

export const checkAuth = createAsyncThunk(
    "user/checkAuth", 
    async (_, thunkAPI) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
        };
        thunkAPI.dispatch(setLoading(true));
        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_DOMAIN}/auth/token/refresh/`,
                config,
                { withCredentials: true }
            );

            localStorage.setItem('token', res.data.access)
            thunkAPI.dispatch(setAuth(true));
            thunkAPI.dispatch(setLoading(false));
        } catch (e) {
            thunkAPI.dispatch(setLoading(false));
            throw new Error("Token not valid");
        }
    }
)

export const login = createAsyncThunk<void, Login>(
    "user/login", 
    async ({username, password}, thunkAPI) => {    
        thunkAPI.dispatch(setLoading(true));    
        try {
            const response: any = await AuthService.login(username, password)

            localStorage.setItem('token', response.data.access)
            thunkAPI.dispatch(setAuth(true));
            thunkAPI.dispatch(setActivate(true));
            thunkAPI.dispatch(setActivatePassword(true));
            thunkAPI.dispatch(setError(""));
            thunkAPI.dispatch(setLoading(false));
        } catch (error) {
            thunkAPI.dispatch(setLoading(false));
            thunkAPI.dispatch(setError("Incorrect username or password"));
        }
    }
)

export const registration = createAsyncThunk<void, BaseUser>(
    "user/registration", 
    async ({username, email, first_name, last_name, password}, thunkAPI) => {
        thunkAPI.dispatch(setLoading(true)); 
        try {
            await AuthService.registration(username, email, first_name, last_name, password)

            thunkAPI.dispatch(setLoading(false));
            thunkAPI.dispatch(setError(""));
        } catch (error) {
            thunkAPI.dispatch(setLoading(false));
            if (axios.isAxiosError(error)) {
                thunkAPI.dispatch(setError(`${error?.response?.data?.username || error?.response?.data?.email}`))
            } else {
                throw new Error('different error than axios');
            }
        }
    }
)

export const activation = createAsyncThunk<void, Activation>(
    "user/activation", 
    async ({uid, token}, thunkAPI) => {
        thunkAPI.dispatch(setLoading(true)); 
        try {
            await AuthService.activation(uid, token)
            thunkAPI.dispatch(setActivate(true));
            thunkAPI.dispatch(setLoading(false)); 
        } catch (error) {
            thunkAPI.dispatch(setLoading(false)); 
            throw new Error('Error');
        }
    }
)

export const logout = createAsyncThunk(
    "user/logout", 
    async (_, thunkAPI) => {
        thunkAPI.dispatch(setLoading(true)); 
        try {
            await AuthService.logout()
            localStorage.removeItem('token')
            thunkAPI.dispatch(setLoading(false)); 
            window.location.reload()
        } catch (error) {
            thunkAPI.dispatch(setLoading(false)); 
            throw new Error('Error');
        }
    }
)

export const resetPassword = createAsyncThunk<void, ResetPassword>(
    "user/resetPassword", 
    async ({email}, thunkAPI) => {
        thunkAPI.dispatch(setLoading(true)); 
        try {
            await AuthService.resetPassword(email)
            thunkAPI.dispatch(setLoading(false)); 
        } catch (error) {
            thunkAPI.dispatch(setLoading(false)); 
            throw new Error('Error');
        }
    }
)


export const resetPasswordConfirm = createAsyncThunk<void, ResetPasswordConfirm>(
    "user/resetPasswordConfirm", 
    async ({uid, token, new_password}, thunkAPI) => {
        try {
            await AuthService.resetPasswordConfirm(uid, token, new_password)
            thunkAPI.dispatch(setActivatePassword(true));
            thunkAPI.dispatch(setError(""));
            thunkAPI.dispatch(setLoading(false));
        } catch (error) {
            thunkAPI.dispatch(setLoading(false));
            thunkAPI.dispatch(setError("New password is to common"));
        }
    }
)