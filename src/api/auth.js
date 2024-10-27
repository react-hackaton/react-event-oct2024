import axios from './axios';

export const authAPI = {
  login: async (login, password) => {
    try {
      const response = await axios.post('/auth', { login, password });
      return response.data;
    } catch (error) {
      const status = error.response && error.response.status;

      if (status === 400) {
        throw new Error('Неверный логин или пароль');
      } else if (status === 500) {
        throw new Error('Сервер временно недоступен');
      }
      throw new Error('Произошла ошибка при входе');
    }
  },
};
