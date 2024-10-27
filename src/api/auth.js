import axios from './axios';

export const authAPI = {
  login: async (login, password) => {
    const response = await axios.post('/auth', { login, password });
    return response.data;
  }
};