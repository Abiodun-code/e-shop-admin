import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../../api/apiClient";


export const signUpUser = createAsyncThunk("auth/signUp", async({firstName, lastName, email, password}:{firstName: string, lastName:string, email:string, password:string},{rejectWithValue})=>{
  try {
    const response = await apiClient.post("auth/register",{firstName, lastName, email, password})
    return response.data;
  } catch (error) {
    if(error instanceof Error) {
      return rejectWithValue(error.message)
    }
  }
})