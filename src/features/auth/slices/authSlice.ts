import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "../models";
import axiosInstance from "../../../api/axios";

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

export const signupUser = createAsyncThunk(
    "auth/signup",
    async(userData: { name: string; email: string; password: string; bio: string; role: string }, thunkAPI) => {
    try {        
        const response = await axiosInstance.post("/auth/register", userData);
        return response.data;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data.message || "Signup failed");
    }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
     extraReducers: (builder) => {
        builder
            .addCase(signupUser.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(signupUser.fulfilled,(state,action)=>{
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
     }

})
export default authSlice.reducer