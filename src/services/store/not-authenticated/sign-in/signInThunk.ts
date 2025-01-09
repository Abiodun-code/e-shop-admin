import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../../api/apiClient";
import { clearAuth, setAuth } from "./signInSlice";
import { toast } from "react-toastify";

export const signInUser = createAsyncThunk("auth/signIn", async({email, password}:{email:string, password:string}, {rejectWithValue, dispatch})=>{
  try {
    const response = await apiClient.post("auth/login", {email, password})
    const accessToken = response.data.accessToken;
    const refreshToken = response.data.refreshToken;
    const role = response.data.role;

    // Check if the user is an admin
    if (role !== 'ROLE_ADMIN') {
      toast.error('Only admins are allowed to sign in.');
      return rejectWithValue({ message: 'Access denied. Admins only.' });
    }

    await localStorage.setItem("accessToken", accessToken)
    await localStorage.setItem("refreshToken", refreshToken)

    dispatch(setAuth({accessToken, refreshToken}))

    return response.data;
  } catch (error) {
    if(error.response && error.response.data){
      return rejectWithValue(error.response.data)
    }
    return rejectWithValue({ message: 'Something went wrong' }); // fallback message
  }
})

export const signOutUser = createAsyncThunk('auth/signOut', async (_, { dispatch }) => {
  try {
    // Clear only relevant keys
    await localStorage.removeItem("accessToken")
    await localStorage.removeItem("refreshToken")
    await localStorage.removeItem("user")

    // Reset Redux state
    dispatch(clearAuth());

    return toast.success('Sign out successful');
  } catch (error) {
    console.error('Error during logout:', error);
    throw error;
  }
});
