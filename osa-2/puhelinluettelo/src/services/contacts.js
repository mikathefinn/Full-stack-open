import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getContacts = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => res.data);
};
const create = (newContact) => {
  const request = axios.post(baseUrl, newContact);
  return request.then((res) => res.data);
};
const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((res) => res.data);
};

const deleteContact = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then((res) => {
    return res.data;
  });
};

export default { getContacts, deleteContact, create, update };
