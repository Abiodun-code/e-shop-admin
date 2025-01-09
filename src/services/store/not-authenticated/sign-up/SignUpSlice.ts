import { createSlice } from "@reduxjs/toolkit"
import { resendOtp, signUpUser, verifyOtp } from "./SignUpThunk"

const initialState = {
  error: false,
  success: false,
  isLoading: false
}

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder
    .addCase(signUpUser.pending, (state)=>{
      state.isLoading = true
      state.error = false
      state.success = false
    })
    .addCase(signUpUser.fulfilled, (state)=>{
      state.isLoading = false
      state.success = true
    })
    .addCase(signUpUser.rejected, (state)=>{
      state.isLoading = false
      state.error = true
      state.success = false
    })
    .addCase(verifyOtp.pending, (state)=>{
      state.isLoading = true
      state.error = false
      state.success = false
    })
    .addCase(verifyOtp.fulfilled, (state)=>{
      state.isLoading = false
      state.success = true
    })
    .addCase(verifyOtp.rejected, (state)=>{
      state.isLoading = false
      state.error = true
      state.success = false
    })
    .addCase(resendOtp.pending, (state)=>{
      state.isLoading = true
      state.error = false
      state.success = false
    })
    .addCase(resendOtp.fulfilled, (state)=>{
      state.isLoading = false
      state.success = true
    })
    .addCase(resendOtp.rejected, (state)=>{
      state.isLoading = false
      state.error = true
      state.success = false
    })
  }
})

export const signUpReducer = signUpSlice.reducer