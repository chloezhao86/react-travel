import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import * as async_hooks from "async_hooks";

interface UserState {
  loading: boolean;
  error: string | null;
  token: string | null;
}

const initialState: UserState = {
  loading: false,
  error: null,
  token: null,
};
export const signIn = createAsyncThunk(
  "user/signIn",
  async (parameters: { email: string; password: string }) => {
    const response = await axios.post(`http://82.157.43.234:8080/auth/login`, {
      email: parameters.email,
      password: parameters.password,
    });
    return {
      data: response.data.token,
    };
  }
);

// @ts-ignore
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.token = action.payload.data;
    }),
      builder.addCase(signIn.pending, (state, action) => {
        state.loading = true;
      }),
      builder.addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as any;
      });
  },
});
