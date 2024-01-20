import './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import PropTypes from 'prop-types';
import { ListItem, Link } from '@chakra-ui/react';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <ListItem>
      <div>
        <p>
          {contact.name}: {contact.number}
        </p>
        <Link onClick={handleDelete}>Delete</Link>
      </div>
    </ListItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object,
};
