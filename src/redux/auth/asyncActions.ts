import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "api/auth/authService";
import axios from "axios";
import { Access, Login } from "types/auth/auth";
import { ShowUser, BaseUser } from "types/user/user";

export const checkAuth = createAsyncThunk(
    "user/checkAuth", 
    async (_, thunkAPI) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        };
        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_DOMAIN}/auth/token/refresh/`,
                config,
                { withCredentials: true }
            );
            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Token not valid");
        }
    }
)

export const login = createAsyncThunk<Access, Login>(
    "user/login", 
    async ({username, password}) => {        
        try {
            const response: any = await AuthService.login(username, password)
            console.log(response);
            return response.data
        } catch (error) {
            console.log(error)
        }
})

export const registration = createAsyncThunk<ShowUser, BaseUser>(
    "user/registration", 
    async ({username, email, first_name, last_name, password}) => {
        try {
            const response: any = await AuthService.registration(username, email, first_name, last_name, password)
            console.log(response);
            return response.data
        } catch (error) {
            console.log(error)
        }
})

export const logout = createAsyncThunk(
    "user/logout", 
    async () => {
        try {
            const response: any = await AuthService.logout()
            console.log(response);
            return response.data
        } catch (error) {
            console.log(error)
        }
})