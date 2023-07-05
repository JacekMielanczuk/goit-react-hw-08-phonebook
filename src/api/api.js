import axios from 'axios';

const CONTACTS_URL = 'contacts';

export const getContacts = () => {
  return axios.get(`${CONTACTS_URL}`);
};

export const addContact = data => {
  return axios.post(`${CONTACTS_URL}`, data);
};

export const deleteContact = id => {
  return axios.delete(`${CONTACTS_URL}/${id}`);
};
