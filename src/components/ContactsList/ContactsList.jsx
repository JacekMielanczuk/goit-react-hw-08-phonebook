import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { Button, CircularProgress } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './ContactsList.module.css';
import {
  getContactsOperation,
  deleteContactOperation,
} from 'redux/contacts/operations';
import { getLoading } from 'redux/contacts/selectors';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  const filteredContacts = () =>
    filter
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;

  useEffect(() => {
    dispatch(getContactsOperation());
  }, [dispatch]);

  return (
    <>
      <ul className={styles.list}>
        {contacts.length !== 0 &&
          filteredContacts().map(({ id, name, number }) => (
            <li key={id} className={styles.item}>
              <p className={styles.p}>
                {name}: {number}
              </p>
              <Button
                size="small"
                variant="outlined"
                startIcon={<DeleteIcon />}
                type="button"
                onClick={() => dispatch(deleteContactOperation(id))}
              >
                Delete
              </Button>
            </li>
          ))}
      </ul>
      {loading && <CircularProgress />}
    </>
  );
};

export default ContactsList;
