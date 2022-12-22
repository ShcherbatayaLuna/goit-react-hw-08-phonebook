import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectToken } from 'redux/auth/authSelectors';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import ContactForm from '../../ContactForm/ContactForm';
import Filter from '../../Filter/Filter';
import ContactList from '../../ContactList/ContactList';
import {Box, TitlePrimary, TitleSecondary } from './Contacts.styled';

export default function Contacts() {
  const contacts = useSelector(selectContacts);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    token && dispatch(fetchContacts());
  }, [dispatch, token]);

  return (
    <Box>
      <TitlePrimary>Phonebook</TitlePrimary>
      <ContactForm />
      {contacts.length > 0 && (
        <>
          <TitleSecondary>Contacts</TitleSecondary>
          <Filter />
          <ContactList />
        </>
      )}
    </Box>
  );
}
