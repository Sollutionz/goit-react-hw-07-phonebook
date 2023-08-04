import React, { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'store/selectors';
import { addContactsThunk } from 'store/contacts/thunk';
import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const {items} = useSelector(selectContacts);

  const handleInputChange = e => {
    if (e.currentTarget.name === 'name') {
      setName(e.currentTarget.value);
    } else setPhone(e.currentTarget.value);
  };

  function handleSubmit (e) {
    e.preventDefault();
    const isExistContact = items.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    if (isExistContact) {
      alert(`Contact ${name} is already exists!`);
      return;
    }
    dispatch(addContactsThunk({ name: name.trim(), phone, id: nanoid() }));
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h1 className={css.title}>Phonebook</h1>

      <div className={css.container}>
        <p className={css.inputTitle}>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
          className={css.input}
        />
      </div>

      <div className={css.container}>
        <p className={css.inputTitle}>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleInputChange}
          className={css.input}
        />
      </div>
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};

