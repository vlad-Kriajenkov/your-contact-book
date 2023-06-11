import { fetchCurrentUser, logIn, logout, register } from './auth-operation';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};
export const authSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    //! Register
    [register.pending]: state => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    [register.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    //! Login
    [logIn.pending]: state => {
      state.isLoading = true;
    },
    [logIn.fulfilled]: (state, { payload: { user, token } }) => {
      state.isLoading = false;
      state.token = token;
      state.user = user;
      state.isLoggedIn = true;
    },
    [logIn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    //! Logout
    [logout.pending]: state => {
      state.isLoading = true;
    },
    [logout.fulfilled]: state => {
      state.user = { name: '', email: '' };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logout.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    //! FetchCurrentUser
    [fetchCurrentUser.pending]: state => {
      state.isLoading = true;
    },
    [fetchCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [fetchCurrentUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
