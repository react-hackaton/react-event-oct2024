import { Box, Typography } from '@mui/material';

import ProfileCard from '../../components/ProfileCard.jsx';
import TabsSection from '../../components/TabsSection.jsx';

function ProfilePage() {
  return (
    <Box sx={{ backgroundColor: '#F5F5F5', padding: 4 }}>
      <Typography variant="h5">Мой профиль</Typography>

      <Box display="flex" justifyContent="between" alignItems="start" sx={{ gap: 2 }}>
        <Box sx={{ width: '320px' }}>
          <ProfileCard />
        </Box>
        <Box sx={{ width: '1080px' }}>
          <TabsSection />
        </Box>
      </Box>
    </Box>
  );
}

export default ProfilePage;
