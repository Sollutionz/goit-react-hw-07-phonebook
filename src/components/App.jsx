import React, { createContext, useEffect} from 'react';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { ContactForm } from './contactForm/ContactForm';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'store/selectors';
import { deleteContactThunk, getContactsThunk } from 'store/contacts/thunk';
export const Context = createContext();

export const App = () => {
  const {items} = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };
  
  function getFiltered() {
    return items.filter(contact => contact.name.toLowerCase().includes(filter));
  }  

  const filteredContacts = getFiltered();

  useEffect(() => {
    dispatch(getContactsThunk())
  },[dispatch])

  return (
    <>
      <Context.Provider value={deleteContact}>
        <ContactForm />
        <div className="container">
          <Filter />
          <ContactList
            contacts={filteredContacts}
            deleteContact={deleteContact}
          />
        </div>
      </Context.Provider>
    </>
  );
};

export default App;
