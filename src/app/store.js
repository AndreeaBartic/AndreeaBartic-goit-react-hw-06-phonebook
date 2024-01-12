import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from 'features/slice';
import { loadState, saveState } from 'components/localStorage';

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  preloadedState: persistedState,
});
store.subscribe(() => {
  saveState({
    contacts: store.getState().contacts,
  });
});
