import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import FilterContacts from './FilterContacts';
import { store } from 'app/store';
import { Provider } from 'react-redux';

export const App = () => {
  return (
    <Provider store={store}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <FilterContacts />
      <ContactList />
    </Provider>
  );
};
