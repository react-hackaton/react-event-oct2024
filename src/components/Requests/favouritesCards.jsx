import { useEffect, useState } from 'react';

import { Box, Pagination, Typography } from '@mui/material';

import { fetchRequestById, getFromFavorites } from '../../api/request.js';
import RequestCard from '../RequestCard/index.jsx';

const ITEMS_PER_PAGE = 3;

function FavouritesCards() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await getFromFavorites();
        const uniqueIds = [...new Set(response)];

        const favoriteDetails = await Promise.all(
          uniqueIds.map(async (id) => {
            try {
              const requestDetail = await fetchRequestById(id);
              return requestDetail;
            } catch (err) {
              return null;
            }
          }),
        );

        setFavorites(favoriteDetails.filter((request) => request !== null));
      } catch (err) {
        setError('Failed to load favorites.');
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = favorites.slice(startIndex, endIndex);
  const totalPages = Math.ceil(favorites.length / ITEMS_PER_PAGE);

  if (loading) {
    return <Typography>Loading favorites...</Typography>;
  }

  if (error) {
    return <Typography>{error}</Typography>;
  }

  if (favorites.length === 0) {
    return <Typography>No favorites found.</Typography>;
  }
  return (
    <Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 2,
          padding: '16px',
        }}
      >
        {currentItems.map((request, index) => (
          <RequestCard key={request.id} request={request} />
        ))}
      </Box>
      {totalPages > 1 && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
            size="large"
          />
        </Box>
      )}
    </Box>
  );
}

export default FavouritesCards;
