import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../../api/apiClient";

const initialState = {
  user: null, // Stores the global user data
  isLoading: false,
  error: null,
};

// Create async thunk for fetching current user from backend API using Axios
export const fetchCurrentUser = createAsyncThunk(
  "user/fetchCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get("api/current-user");

      return response.data; // Assuming the response contains the user data
    } catch (error) {
      // Handle the error and provide a rejection value
      return rejectWithValue(error.response?.data?.message || error.message || "Failed to fetch user");
    }
  }
);

// Create async thunk for updating user in AsyncStorage
export const updateUserInAsyncStorage = createAsyncThunk(
  "user/updateInAsyncStorage",
  async (updatedUser, { rejectWithValue }) => {
    try {
      await localStorage.setItem("user", JSON.stringify(updatedUser));
      return updatedUser;
    } catch (error) {
      return rejectWithValue("Failed to update user in AsyncStorage");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCurrentUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(updateUserInAsyncStorage.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const updateUserReducer = userSlice.reducer;