import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import FilterContacts from './FilterContacts';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <FilterContacts />
      <ContactList />
    </div>
  );
};
