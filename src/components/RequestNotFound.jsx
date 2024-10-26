import React from "react";

import { Stack, Typography } from "@mui/material";

import notFoundImage from "../assets/notFoundResult.png";

function RequestsNotFound() {
  return (
    <Stack
      sx={{
        display: "flex",
        width: "900px",
        height: "600px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        mt: 2,
      }}
    >
      <img
        src={notFoundImage}
        width="200px"
        height="auto"
        alt="Requests Not Found"
      />
      <Typography variant="h5" color="error" sx={{ fontSize: "14px", mt: 1 }}>
        Запросы не найдены
      </Typography>
    </Stack>
  );
}
export default RequestsNotFound;
