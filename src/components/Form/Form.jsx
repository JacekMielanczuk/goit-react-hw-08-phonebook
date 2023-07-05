import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Paper, Stack, TextField, Button } from '@mui/material';
import { getContacts } from 'redux/contacts/selectors';
import { postContactOperation } from '../../redux/contacts/operations';

const Form = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;
    const newContact = { name, number };
    contacts.some(contact => name === contact.name)
      ? alert(`${name} is already in contacts.`)
      : dispatch(postContactOperation(newContact));
    event.currentTarget.elements.name.value = '';
    event.currentTarget.elements.number.value = '';
  };

  return (
    <Paper elevation={3} sx={{ p: 2, mt: 5 }}>
      <Box onSubmit={handleSubmit} component="form" autoComplete="off">
        <Stack direction={'column'} spacing={3}>
          <TextField
            fullWidth
            required
            id="standard-basic"
            label="Name"
            variant="standard"
            type="text"
            name="name"
          />
          <TextField
            fullWidth
            required
            id="standard-basic"
            label="Number"
            variant="standard"
            type="tel"
            name="number"
          />
          <Button variant="contained" type="submit" sx={{ m: 1, width: 150 }}>
            Add contact
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default Form;
