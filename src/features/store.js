import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user/userSlice';
import jobSlice from './job/JobSlice';



export const store = configureStore({
    reducer: {
        user: userReducer,
        // job: jobSlice
    }
})
