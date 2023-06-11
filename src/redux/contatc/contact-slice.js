import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deletContact,
  getAllContact,
  updated,
} from './contact-operation';


const initialState = {
  contacts: [],
  filter: '',
  error: null,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  extraReducers: {
    //!  getAllContact
    [getAllContact.fulfilled]: (state, { payload }) => {
      state.contacts = payload;
    },
    [getAllContact.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    //!  addContact
    [addContact.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.contacts = [...state.contacts, payload];
    },
    [addContact.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    //!  deletContact
    [deletContact.fulfilled]: (state, { payload }) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== payload.id
      );
    },
    [deletContact.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    //!  updated
    [updated.fulfilled]: (state, { payload }) => {
      const index = state.contacts.findIndex(
        contact => contact.id === payload.id
      );
      state.contacts[index] = payload;
    },
    [updated.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});
export default contactSlice.reducer;
