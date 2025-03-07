import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import axiosInstance from "../utils/axiosInstance";

const initialState = {
  user: null,
  token: Cookies.get("token") || null,
  isAuthenticated: !!Cookies.get("token"),
  status: "idle",
  error: null,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/register", formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "Invalid Credentials");
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/login", formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "Invalid Credentials");
    }
  }
);

export const getUser = createAsyncThunk(
  "auth/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/auth/user");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data?.error || "Error fetching user");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.status = "idle";
      state.error = null;
      Cookies.remove("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.status = "succeeded";
        Cookies.set("token", action.payload.token, {
          secure: true,
          sameSite: "Strict",
        });
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.token = Cookies.get("token");
        state.status = "succeeded";
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
