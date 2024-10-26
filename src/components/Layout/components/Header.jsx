import React from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Typography } from "@mui/material";

export function Header() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={84}
      padding="10px"
      sx={{
        boxShadow: "0px 3px 1px -2px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height={64}
        width={1500}
        padding="10px"
      >
        {/* <Logo /> */}
        <Typography>Logo</Typography>
        <Typography>Запросы о помощи</Typography>
        <Button
          variant="outlined"
          color="inherit"
          endIcon={<ArrowForwardIosIcon />}
        >
          Войти
        </Button>
      </Box>
    </Box>
  );
}
