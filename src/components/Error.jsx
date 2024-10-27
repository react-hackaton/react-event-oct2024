import image from '../assets/Error.png';
import { Stack, Typography } from '@mui/material';
function Error() {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img src={image} width="419px" />
      <Typography variant="h5" color="error" sx={{ fontSize: '14px', mt: -11 }}>
        Ошибка! Не удалось загрузить информацию
      </Typography>
    </Stack>
  );
}
export default Error;
