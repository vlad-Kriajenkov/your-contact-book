import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const addContact = createAsyncThunk(
  'contact/add',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', userData);
      Notify.success('Contact added ');
      return data;
    } catch (error) {
      Notify.failure(`Oops, something's wrong.`);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getAllContact = createAsyncThunk(
  'contact/getAllContact',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const deletContact = createAsyncThunk(
  'contact/delet',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      Notify.success('Contact Delete ');
      return data;
    } catch (error) {
      Notify.failure(`Oops, something's wrong.`);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const updated = createAsyncThunk(
  'contact/updated',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const voteupdate = {
        name,
        number,
      };
      const { data } = await axios.patch(`/contacts/${id}`, voteupdate);
      Notify.success('Contact Updated ');
      return data;
    } catch (error) {
      Notify.failure(`Oops, something's wrong.`);
      return thunkAPI.rejectWithValue();
    }
  }
);
