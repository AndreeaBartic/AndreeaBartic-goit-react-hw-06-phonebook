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
      // Directly using immer's ability to "mutate" the state
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
  // Optional: Adding extraReducers if you have any asynchronous actions or want to handle actions from other slices
  extraReducers: builder => {
    builder.addCase('some/otherAction', (state, action) => {
      // Handle some other action
    });
    // You can add more cases as needed
  },
});

export const { addContact, removeContact, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
