import Notiflix from 'notiflix';
import  Form  from './Form/Form';
import  Filter  from './Filter/Filter';
import  Contact from './Contact/Contact';
import { useState, useEffect } from 'react';
import shortid from 'shortid';

Notiflix.Notify.init({
  width: '320px',
  position: 'center-top',
  cssAnimationStyle: 'zoom',
  // closeButton: true,
});
  
export const App = () => {

  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const dataContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(dataContacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  const addName = ({ name, number }) => {
    const user = {
      id: shortid.generate(),
      name,
      number
    };

    const sortFilter = contacts.filter(contact =>
      contact.name === user.name,
    );

    if (sortFilter.length > 0) {
      return alert(
        `${user.name} is already in contacts`
      );
    } else {
      const addContact = [user, ...contacts];
      setContacts(addContact);
      localStorage.setItem('contacts', JSON.stringify(addContact));
    }
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = contactId => {
    const beforeDelete = contacts.filter(item => item.id !== contactId);
    setContacts(beforeDelete)
    localStorage.setItem('contacts', JSON.stringify(beforeDelete));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <Form onSubmit={addName} />
     

   
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <Contact contacts={getVisibleContacts()} onDeleteContact={deleteContact} />
    </div>
  );

};