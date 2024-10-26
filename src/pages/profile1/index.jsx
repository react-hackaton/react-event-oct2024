import { Container, Typography, Grid2, Box, Paper } from "@mui/material";
import ProfileCard from "../../components/ProfileCard.jsx";

const ProfilePage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h5">Мой профиль</Typography>

        <Box display="flex" justifyContent="between" alignItems="center">
          <Box sx={{ width: "320px" }}>
            <ProfileCard/>
          </Box>
          <Box sx={{ width: "1080px", border: "2px solid green" }}>
            Item 2
          </Box>
        </Box>

      </Container>
    </>
  );
};

export default ProfilePage;

// import * as React from 'react';
//
// import Grid2 from '@mui/material/Grid2';

