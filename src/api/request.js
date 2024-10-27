import axios from 'axios';

const request = axios.create({
  baseURL: 'https://natticharity.eveloth.ru/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchRequests = async () => {
  try {
    const response = await request.get('/request');
    return response.data;
  } catch (error) {
    console.error('Error fetching requests:', error);
    throw error;
  }
};

export const addToFavorites = async (requestId) => {
  try {
    await request.post('/user/favourites', { requestId });
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

export default request;
