import React from 'react';
import { Box, Typography, Stack, Button, Card } from '@mui/material';
import ProfileImg from '../assets/CardMedia.svg';

const ProfileCard = () => {
  return (
    <Card variant="outlined">
      <img src={ProfileImg} alt="profile image" loading="lazy" />
      <Stack
        direction="column"
        spacing={2}
        sx={{
          height: '196px',
          p: 2,
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography variant="h6">Ангелина Фомина</Typography>
          <Stack direction="row">
            <Typography variant="subtitle2">Статус:</Typography>
            <Typography>Начинающий</Typography>
          </Stack>
        </Box>

        <Button variant="outlined" fullWidth color="inherit">
          Выйти из аккаунта
        </Button>
      </Stack>
    </Card>
  );
};

export default ProfileCard;
