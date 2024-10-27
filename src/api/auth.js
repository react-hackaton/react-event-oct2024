import axios from './axios';

export const authAPI = {
  login: async (login, password) => {
    try {
      const response = await axios.post('/auth', { login, password });
      return response.data;
    } catch (error) {
      if (error.response?.status === 400) {
        throw new Error('Неверный логин или пароль');
      } else if (error.response?.status === 500) {
        throw new Error('Сервер временно недоступен');
      }
      throw new Error('Произошла ошибка при входе');
    }
  }
};
