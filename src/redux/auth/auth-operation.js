import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (userDara, thunkAPI) => {
    try {
      const { data } = await axios.post(`/users/signup`, userDara);
      token.set(data.token);
      Notify.success('Account was created successfully');
      return data;
    } catch (error) {
      Notify.warning(`Oops, something's wrong.`);
      return thunkAPI.rejectWithValue();

    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post(`/users/login`, userData);
      token.set(data.token);
      return data;
    } catch (error) {
      Notify.warning(`Oops, something's wrong.`);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    Notify.warning(`Oops, something's wrong.`);
    return thunkAPI.rejectWithValue();
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/fresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persisterToken = state.auth.token;

    if (persisterToken === null) {
      return;
    }
    token.set(persisterToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
    
      return thunkAPI.rejectWithValue();
    }
  }
);
