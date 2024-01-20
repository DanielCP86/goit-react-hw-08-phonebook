import { ContactItem } from '../ContactItem/ContactItem';
import './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/filter/selectors';
import { UnorderedList } from '@chakra-ui/react';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <UnorderedList>
      {filteredContacts.map(contact => {
        return <ContactItem key={contact.id} contact={contact} />;
      })}
    </UnorderedList>
  );
};
