import React, { useState } from 'react';

import { Star, StarBorder } from '@mui/icons-material';
import { Box, Typography, Paper, Button, Divider, IconButton, LinearProgress } from '@mui/material';
import { toast } from 'react-toastify';

import { addToFavorites } from '../../api/request.js';
import defaultImage from '../../assets/requestCard1.png';

function RequestCard({ request }) {
  const {
    id,
    title,
    organization = {},
    location,
    requestGoal,
    requestGoalCurrentValue,
    endingDate,
    contributorsCount,
  } = request;

  // const {region = "Неизвестно", city = "Неизвестно"} = location;
  // const {amount = "0", target = "0", contributorsCount = 0} = collected;
  const progress = (requestGoalCurrentValue / requestGoal) * 100;

  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = async () => {
    try {
      await addToFavorites({ requestId: id });

      setIsFavorited(!isFavorited);
      if (!isFavorited) {
        toast.success('Added to favorites!');
      } else {
        toast.info('Removed from favorites.');
      }
    } catch (error) {
      toast.error('Error updating favorite.');
    }
  };

  const imageUrl = defaultImage;

  return (
    <Paper
      elevation={3}
      sx={{
        width: '270px',
        padding: '16px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt="Donation Image"
        sx={{
          borderRadius: '4px',
          width: '100%',
          maxWidth: '200px',
          height: 'auto',
          margin: '0 auto',
        }}
      />

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: '700',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            WebkitLineClamp: 3,
            lineClamp: 3,
            height: '70px',
          }}
        >
          {title}
        </Typography>
        <IconButton aria-label="favorite" onClick={handleFavoriteClick}>
          {isFavorited ? <Star sx={{ color: 'gold' }} /> : <StarBorder />}
        </IconButton>
      </Box>

      <Divider />

      <Box>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '700',
          }}
        >
          Организатор
        </Typography>
        <Typography variant="body2">{organization.title}</Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '700',
          }}
        >
          Локация
        </Typography>

        <Typography
          sx={{
            fontSize: '14px',
          }}
        >
          Область: {location.district}
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
          }}
        >
          Населенный пункт: {location.city}
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '700',
          }}
        >
          Цель сбора
        </Typography>
        <Typography variant="body2">{requestGoal}</Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '700',
          }}
        >
          Завершение
        </Typography>
        <Typography variant="body2">{endingDate}</Typography>
      </Box>

      <Box mt={2}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '700',
          }}
        >
          Мы собрали
        </Typography>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            mt: '8px',
            mb: '8px',
          }}
        >
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: '8px',
              borderRadius: '4px',
              backgroundColor: '#e0e0e0',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#90caf9',
              },
            }}
          />
          <Typography
            sx={{
              fontSize: '14px',
              position: 'absolute',
              left: 0,
              top: '5px',
              transform: 'translateY(50%)',
            }}
          >
            {requestGoalCurrentValue.toString()} руб
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              position: 'absolute',
              right: 0,
              top: '5px',
              transform: 'translateY(50%)',
            }}
          >
            {requestGoalCurrentValue.toString()} руб
          </Typography>
        </Box>
      </Box>

      <Typography variant="caption" color="textSecondary" mt={1}>
        {contributorsCount.toString()
          ? `Нас уже: ${contributorsCount.toString()}`
          : 'Вы будете первым'}
      </Typography>

      <Button variant="contained" color="primary" fullWidth sx={{ borderRadius: '4px', mt: 2 }}>
        ПОМОЧЬ
      </Button>
    </Paper>
  );
}

export default RequestCard;
