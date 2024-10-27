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
//
//
// export const removeFromFavorites = async (requestId) => {
//     try {
//         await request.delete(`/user/favorites/${requestId}`);
//     } catch (error) {
//         console.error("Error removing from favorites:", error);
//         throw error;
//     }
// };
