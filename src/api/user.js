import api from './axios.js';

// Получение данных профиля пользователя
export const fetchUserProfile = async () => {
  try {
    const response = await api.get('/user/profile');
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

// Обновление данных профиля
export const updateUserProfile = async (profileData) => {
  try {
    const response = await api.put('/user/profile', profileData);
    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

// Обновление контактной информации
export const updateUserContacts = async (contactsData) => {
  try {
    const response = await api.put('/user/contacts', contactsData);
    return response.data;
  } catch (error) {
    console.error('Error updating user contacts:', error);
    throw error;
  }
};

// Добавление нового места локации
export const addUserLocation = async (locationData) => {
  try {
    const response = await api.post('/user/locations', locationData);
    return response.data;
  } catch (error) {
    console.error('Error adding user location:', error);
    throw error;
  }
};

// Добавление информации об образовании
export const addUserEducation = async (educationData) => {
  try {
    const response = await api.post('/user/educations', educationData);
    return response.data;
  } catch (error) {
    console.error('Error adding user education:', error);
    throw error;
  }
};