import { createSlice } from "@reduxjs/toolkit";
import { signInUser } from "./signInThunk";

const initialState = {
  error: false,
  isLoading: false,
  message: "",
  accessToken: "",
  refreshToken: "",
}

export const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    setAuth(state, action) {
      state.message = action.payload;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    clearAuth(state) {
      state.message = "";
      state.accessToken = "";
      state.refreshToken = "";
    }
  },
  extraReducers:(builder)=> {
    builder
    .addCase(signInUser.pending, (state)=>{
      state.isLoading = true
    })
    .addCase(signInUser.fulfilled, (state, action)=>{
      state.isLoading = false
      state.error = false
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
    })
    .addCase(signInUser.rejected, (state)=>{
      state.isLoading = false
      state.error = true
    })
  },
})

export const signInReducer = signInSlice.reducer
export const {setAuth, clearAuth} = signInSlice.actions