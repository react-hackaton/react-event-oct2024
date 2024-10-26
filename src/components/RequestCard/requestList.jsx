import React from "react";

import { Box } from "@mui/material";

import requestCardData from "../../data/requestCardData.js";

import RequestCard from "./index.jsx";

function RequestList() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "24px",
        padding: "16px",
      }}
    >
      {requestCardData.map((request) => (
        <RequestCard key={request.id} request={request} />
      ))}
    </Box>
  );
}

export default RequestList;
