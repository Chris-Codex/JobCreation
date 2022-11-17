import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoading: false
}

export const registerUser = createAsyncThunk(
    "user/register",
    async (user, thunkAPI) => {
        console.log(`Register user: ${JSON.stringify(user)}`)
    }
);

export const loginUser = createAsyncThunk(
    "user/login",
    async (user, thunkAPI) => {
        console.log(`Login User is: ${JSON.stringify(user)}`)
    }
)

const userSlice = createSlice({
    name: "user",
    initialState,
   
});

export default userSlice.reducer; 

console.log(userSlice )