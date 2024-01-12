import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    removeContact: (state, action) => {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      if (index !== -1) {
        state.contacts.splice(index, 1);
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const createContact = newContact => {
  return dispatch => {
    dispatch(addContact(newContact));
  };
};

export const { addContact, removeContact, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
