import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'features/slice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleRemoveContact = contactId => {
    dispatch(removeContact(contactId));
  };

  const filteredContacts = useMemo(() => {
    return Array.isArray(contacts)
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : [];
  }, [contacts, filter]);

  return (
    <>
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              onClick={() => handleRemoveContact(contact.id)}
              aria-label={`Delete ${contact.name}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
