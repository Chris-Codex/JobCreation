import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    authUser: []
}

export const authSlice = createSlice({
    authUser: "authUser",
    INITIAL_STATE
})