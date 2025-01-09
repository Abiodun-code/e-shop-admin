import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInUser, signOutUser } from "./signInThunk";

const initialState = {
  error: null,
  isLoading: false,
  accessToken: "",
  refreshToken: "",
  success: false,
  isAuth: false,
}



export const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    setAuth(state, action) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    clearAuth(state) {
      state.accessToken = "";
      state.refreshToken = "";
      state.success = false;
    }
  },
  extraReducers:(builder)=> {
    builder
    .addCase(signInUser.pending, (state)=>{
      state.isLoading = true
    })
    .addCase(signInUser.fulfilled, (state, action)=>{
      state.isLoading = false
      state.error = null
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
      state.success = true
    })
    .addCase(signInUser.rejected, (state, action)=>{
      state.isLoading = false
      state.error = action.payload || 'Something went wrong'
    })
    .addCase(signOutUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(signOutUser.fulfilled, (state) => {
      state.isLoading = false;
    })
    .addCase(signOutUser.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
})

export const signInReducer = signInSlice.reducer

export const {setAuth, clearAuth} = signInSlice.actions