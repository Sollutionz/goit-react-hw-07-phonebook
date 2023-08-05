import axios from 'axios';

const BASE_URL = 'https://64cd29a5bb31a268409a6f2d.mockapi.io';

const contactsAPI = axios.create({
  baseURL: BASE_URL,
});

export const getContacts = async () => {
  const res = await contactsAPI.get(`/contacts`);
  const { data } = res;
  return await data;
};

export const addContact = async (data) => {
  const res = await contactsAPI.post(`/contacts`,data);
  return await res;
};

export const deleteContact = async id => {
    const res = await contactsAPI.delete(`/contacts/${id}`);
  return await res;
};
