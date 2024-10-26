import React from "react";

import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={152}
      padding="10px"
      sx={{
        boxShadow: "0px 0px 0px 1px rgba(224, 224, 224, 1)",
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
        <Typography>Об ивенте </Typography>
        <Typography>GitHub проекта</Typography>
        <Typography>Чат для джунов</Typography>
      </Box>
    </Box>
  );
}
