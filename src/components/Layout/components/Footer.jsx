import React from 'react';

import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      sx={{
        height: '152px',
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
        <Typography>Об ивенте </Typography>
        <Typography>GitHub проекта</Typography>
        <Typography>Чат для джунов</Typography>
      </Box>
    </Box>
  );
}
