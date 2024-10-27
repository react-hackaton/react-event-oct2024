import React, { useEffect, useState } from 'react';

import { ListAlt } from '@mui/icons-material';
import GridViewIcon from '@mui/icons-material/GridView';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, IconButton, Pagination, Typography } from '@mui/material';

import { fetchRequests } from '../../api/request.js';
import RequestsNotFound from '../RequestNotFound.jsx';

import RequestCard from './index.jsx';

const ITEMS_PER_PAGE = 3;

function RequestList({ searchTerm }) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  // eslint-disable-next-line no-param-reassign
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchRequests();
        console.log(fetchedData);
        if (Array.isArray(fetchedData)) {
          setData(fetchedData);
        } else {
          setData([]);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const filteredData = data.filter((request) => {
    const title = request.title ? request.title.toLowerCase() : '';
    const organization = request.organization.title ? request.organization.title.toLowerCase() : '';
    const search = searchTerm.toLowerCase();
    return title.includes(search) || organization.includes(search);
  });

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const currentItems = filteredData.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  // eslint-disable-next-line no-param-reassign
  const handleViewChange = (newView) => {
    setView(newView);
    console.log(`View changed to: ${newView}`);
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          paddingTop: '20px',
        }}
      >
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '700',
            paddingLeft: '20px',
          }}
        >
          Найдено: {filteredData.length}
        </Typography>

        <Box
          sx={{
            paddingRight: '20px',
          }}
        >
          <IconButton aria-label="grid view" onClick={() => handleViewChange('grid')}>
            <GridViewIcon />
          </IconButton>
          <IconButton aria-label="list view" onClick={() => handleViewChange('list')}>
            <ListAlt />
          </IconButton>
          <IconButton aria-label="map view" onClick={() => handleViewChange('map')}>
            <LocationOnIcon />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 2,
          padding: '16px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {currentItems.length > 0 ? (
          currentItems.map((request) => <RequestCard key={request.id} request={request} />)
        ) : (
          <RequestsNotFound />
        )}

        {filteredData.length > ITEMS_PER_PAGE && (
          <Box gridColumn="span 3" display="flex" justifyContent="center" mt={4}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handleChange}
              color="primary"
              size="large"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default RequestList;
