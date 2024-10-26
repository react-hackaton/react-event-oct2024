import React from "react";

import InfoIcon from "@mui/icons-material/Info";
import { Box, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// eslint-disable-next-line react/prop-types
function ProfileLogin({ title, login, password }) {
  const theme = useTheme();
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        mb: 2,
        display: "flex",
        alignItems: "center",
        border: `1px solid ${theme.palette.primary.main}`,
      }}
    >
      <Box display="flex" alignItems="center" sx={{ mr: 2 }}>
        <InfoIcon color="primary" />
      </Box>

      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Typography variant="body1" fontWeight="bold" sx={{ mb: 0.5 }}>
          {title}
        </Typography>
        <Typography variant="body2">Логин: {login}</Typography>
        <Typography variant="body2">Пароль: {password}</Typography>
      </Box>
    </Paper>
  );
}

export default ProfileLogin;
