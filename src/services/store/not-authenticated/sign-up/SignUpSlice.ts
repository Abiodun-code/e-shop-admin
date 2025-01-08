import { createSlice } from "@reduxjs/toolkit"
import { signUpUser } from "./SignUpThunk"

const initialState = {
  error: false,
  message: "",
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
    })
    .addCase(signUpUser.fulfilled, (state, action)=>{
      state.isLoading = false
      state.message = action.payload
    })
    .addCase(signUpUser.rejected, (state)=>{
      state.isLoading = false
      state.error = true
    })
  }
})

export const signUpReducer = signUpSlice.reducer