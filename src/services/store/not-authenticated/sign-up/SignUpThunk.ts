import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../../api/apiClient";


export const signUpUser = createAsyncThunk("auth/signUp", async({firstName, lastName, email, password}:{firstName: string, lastName:string, email:string, password:string},{rejectWithValue})=>{
  try {
    const response = await apiClient.post("auth/register",{firstName, lastName, email, password, role:"ROLE_ADMIN"})
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      return rejectWithValue(error.response.data)
    }
    return rejectWithValue({ message: 'Something went wrong' }); // fallback message
  }
})

export const verifyOtp = createAsyncThunk("auth/verifyOtp", async({otp, email}:{otp: number, email:string},{rejectWithValue})=>{
  try {
    const response = await apiClient.post(`auth/verify-otp/${email}`, {otp})
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      return rejectWithValue(error.response.data)
    }
    return rejectWithValue({ message: 'Something went wrong' }); // fallback message
    
  }
})

export const resendOtp = createAsyncThunk(
  "auth/resendOtp",
  async ({ email }: { email: string }, { rejectWithValue }) => {
    try {
      const res = await apiClient.post(`/auth/resend-otp/${email}`);
      return res.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({message: "Something went wrong"})
    }
  })