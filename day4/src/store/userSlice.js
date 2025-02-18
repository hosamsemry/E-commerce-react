import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getAllUsers, getUserById, addUser, updateUser, deleteUser } from "../api/userApi";

const initialState = {
    user: null,
    loading: false,
    error: null
};

export const registerUser = createAsyncThunk('users/registerUser', async(userData, {rejectWithValue}) => {
    try {
        const checkResponse = await getAllUsers();
        const users = checkResponse.data || [];
  
        const userExists = users.some((user) => user.email === userData.email);
        if (userExists) {
          return rejectWithValue("User with this email already exists!");
        }
  
        const response = await addUser(userData);

  
        if (!response.status || response.status !== 201) {
          throw new Error("Registration failed!");
        }
  
        return userData; 
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
);

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
    
});

export default authSlice.reducer;