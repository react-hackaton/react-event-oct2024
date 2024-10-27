import { Typography, Box } from '@mui/material';
import Help from '../../components/Help.jsx';
import GotMoney from '../../components/GotMoney.jsx';

const HelpRequest = () => {
  return (
    <Box sx={{ backgroundColor: '#F5F5F5', padding: 4 }}>
      <Typography variant="h5">Мой профиль</Typography>

      <Box display="flex" justifyContent="between" alignItems="start" sx={{ gap: 2 }}>
        <Box sx={{ width: '550px' }}>
          <Help />
        </Box>
        <Box sx={{ width: '320px' }}>
          <GotMoney />
        </Box>
      </Box>
    </Box>
  );
};

export default HelpRequest;