import React from 'react';

import { Box, Typography } from '@mui/material';
import Link from '@mui/material/Link';

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
        <Typography>
          <Link href="https://t.me/natti_jun_front/239" target="_blank">
            Об ивенте 
          </Link>
        </Typography>
        <Typography>
          <Link href="https://github.com/side-progects/react-event-oct2024" target="_blank">
              GitHub проекта
          </Link>
        </Typography>
        <Typography>
          <Link href="https://t.me/natti_jun_front_chat" target="_blank">
              Чат для джунов
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
