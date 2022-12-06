import axios from 'axios';

const API_URL = '/api/users/';

const signUp = async (userData) => {
  const response = await axios.post(API_URL, userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const signIn = async (userData) => {
  const response = await axios.post(API_URL + '/signin', userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const signOut = () => {
  localStorage.removeItem('user');
};

const authService = {
  signUp,
  signIn,
  signOut,
};

export default authService;
