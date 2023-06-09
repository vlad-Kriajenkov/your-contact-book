import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
 

export const addContact = createAsyncThunk('contact/add', async (userData, thunkAPI) => {
  try {
    const { data } = await axios.post('/contacts', userData);
     
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
});

export const getAllContact = createAsyncThunk(
  'contact/getAllContact',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      
      console.log(data);
      return data;
    } catch (error) {
      
      return thunkAPI.rejectWithValue();
    }
  }
);

export const deletContact =  createAsyncThunk('contact/delet', async (contactId, thunkAPI)=>{
  try {
    const {data} = await axios.delete(`/contacts/${contactId}`)
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
}) 

export const updated = createAsyncThunk('contact/updated', async ({id, name, number}, thunkAPI)=>{
  try {
    const voteupdate ={
      name, number
    }
    const {data} = await axios.patch(`/contacts/${id}`,voteupdate )
    console.log(data);
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
})