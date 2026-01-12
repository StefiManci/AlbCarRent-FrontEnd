import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../service/authService";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const data = await authService.login(credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (userInfo, thunkAPI) => {
    try {
      const data = await authService.register(userInfo);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: undefined,
    loading: true,
    error: null,
    userId: null,
    userRole: null,
  },
  reducers: {
    loadTokenFromStorage: (state) => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const userRole = localStorage.getItem("userRole");
      if (token) {
        state.token = token;
      }
      if (userId) {
        state.userId = userId;
      }
      if (userRole) {
        state.userRole = userRole;
      }
      state.loading = false;
    },
    logout: (state) => {
      state.token = undefined;
      state.userId = null;
      state.userRole = null;
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("userRole");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.userId = action.payload.id;
        state.userRole = action.payload.role;
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("userId", action.payload.id);
        localStorage.setItem("userRole", action.payload.role);
      })

      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.userId = action.payload.id;
        state.userRole = action.payload.role;
        localStorage.setItem("userId", action.payload.id);
        localStorage.setItem("userRole", action.payload.role);
        localStorage.setItem("token", action.payload.token);
      })

      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { loadTokenFromStorage, logout } = authSlice.actions;
export default authSlice.reducer;
