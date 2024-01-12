import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'features/slice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  const handleRemoveContact = contactId => {
    dispatch(removeContact(contactId));
  };

  const filteredContacts = Array.isArray(contacts)
    ? contacts.reduce((acc, contact) => {
        if (contact.name.toLowerCase().includes(filter.toLowerCase())) {
          acc.push(contact);
        }
        return acc;
      }, [])
    : [];

  return (
    <>
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => handleRemoveContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
