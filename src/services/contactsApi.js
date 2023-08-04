import axios from 'axios';

const BASE_URL = 'https://64cd29a5bb31a268409a6f2d.mockapi.io/contacts';

const contactsAPI = axios.create({
  baseURL: BASE_URL,
});

export const getContacts = async () => {
  const res = await contactsAPI.get(`${BASE_URL}`);
    const {data} = res;
  return await data;
};

export const addContact = async data => {
  const res = await contactsAPI.post(`${BASE_URL}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res;
};

export const deleteContact = async id => {
    const res = await contactsAPI.delete(`${BASE_URL}/${id}`);
  return await res;
};
