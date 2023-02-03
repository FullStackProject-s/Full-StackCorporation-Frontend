import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "api/auth/authService";
import axios, { AxiosError } from "axios";
import { Access, Activation, Login } from "types/auth/auth";
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
    async ({username, password}, thunkAPI) => {        
        try {
            const response: any = await AuthService.login(username, password)
            console.log(response);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("Incorrect username or password");
        }
})

export const registration = createAsyncThunk<ShowUser, BaseUser>(
    "user/registration", 
    async ({username, email, first_name, last_name, password}, thunkAPI) => {
        try {
            const response: any = await AuthService.registration(username, email, first_name, last_name, password)
            console.log(response);
            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return thunkAPI.rejectWithValue(`${error?.response?.data?.username || error?.response?.data?.email}`)
              } else {
                throw new Error('different error than axios');
              }
        }
})

export const activation = createAsyncThunk<Activation, Activation>(
    "user/activation", 
    async ({uid, token}) => {
        try {
            const response: any = await AuthService.activation(uid, token)
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