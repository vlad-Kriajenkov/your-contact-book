import { logIn, logout, register } from './auth-operation';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};
 export const authSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [register.pending]: state => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [logIn.pending]: state => {
      state.isLoading = true;
      // state.error = null;
    },
    [logIn.fulfilled]: (state, { payload: { user, token } }) => {
      state.isLoading = false;
      state.token = token;
      state.user = user;
      state.isLoggedIn = true;
    },
    [logout.pending]: state => {
      state.isLoading = true;
    },
    [logout.fulfilled]:(state)=>{
      state.user = { name: '', email: '' }
      state.token = null
      state.isLoggedIn = false;
    }
  },
});

export default authSlice.reducer;
