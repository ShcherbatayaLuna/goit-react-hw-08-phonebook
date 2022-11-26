import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contactsOperations.js';

const onPending = state => {
  state.contacts.isLoading = true;
};

const onRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    filterContact: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, onPending)
      .addCase(fetchContacts.rejected, onRejected)
      .addCase(addContact.pending, onPending)
      .addCase(addContact.rejected, onRejected)
      .addCase(deleteContact.pending, onPending)
      .addCase(deleteContact.rejected, onRejected)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = payload;
        state.contacts.items.sort((a, b) => (a.name > b.name ? 1 : -1));
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = [payload, ...state.contacts.items];
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = state.contacts.items.filter(
          ({ id }) => id !== payload.id
        );
      });
  },
});

export const { filterContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
