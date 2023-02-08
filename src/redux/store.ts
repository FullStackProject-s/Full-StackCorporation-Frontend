import {configureStore} from "@reduxjs/toolkit"
import { useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';

import userReducer from "./user/userSlice"
import profileReducer from "./profile/profileSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        profile: profileReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;