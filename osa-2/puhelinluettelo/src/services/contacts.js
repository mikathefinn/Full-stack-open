import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getContacts = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => res.data);
};
export default { getContacts };
