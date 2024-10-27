import api from './axios.js';

export const fetchRequests = async () => {
  try {
    const response = await api.get('/request');
    return response.data;
  } catch (error) {
    console.error('Error fetching requests:', error);
    throw error;
  }
};

export const addToFavorites = async (requestId) => {
  try {
    await api.post('/user/favourites', { requestId });
  } catch (error) {
    console.error('Error adding to favorites: error', error);
    throw error;
  }
};

export const removeFromFavorites = async (requestId) => {
  try {
    await api.delete(`/user/favourites/${requestId}`);
  } catch (error) {
    console.error('Error removing from favorites:', error);
    throw error;
  }
};

export const getFromFavorites = async () => {
  try {
    const response = await api.get('/user/favourites');
    return response.data;
  } catch (error) {
    console.error('Error adding to favorites: error', error);
    throw error;
  }
};

export const fetchRequestById = async (id) => {
  try {
    const response = await api.get(`/request/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching request by ID:', error);
    throw error;
  }
};
