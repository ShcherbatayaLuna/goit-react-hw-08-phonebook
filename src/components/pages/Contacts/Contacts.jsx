import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import ContactForm from '../../ContactForm/ContactForm';
import Filter from '../../Filter/Filter';
import ContactList from '../../ContactList/ContactList';
import { TitlePrimary, TitleSecondary } from './Contacts.styled';

export default function Contacts() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <TitlePrimary>Phonebook</TitlePrimary>
      <ContactForm />
      {contacts && (
        <>
          <TitleSecondary>Contacts</TitleSecondary>
          <Filter />
          <ContactList />
        </>
      )}
    </>
  );
}
