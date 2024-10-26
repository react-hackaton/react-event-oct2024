import React, { useState } from "react";

import { Box, Pagination } from "@mui/material";

import requestCardData from "../../data/requestCardData.js";

import RequestCard from "./index.jsx";

const ITEMS_PER_PAGE = 3;

function RequestList() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(requestCardData.length / ITEMS_PER_PAGE);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const currentItems = requestCardData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 2,
        padding: "16px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {currentItems.map((request) => (
        <RequestCard key={request.id} request={request} />
      ))}
      <Box gridColumn="span 3" display="flex" justifyContent="center" mt={4}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          color="primary"
          size="large"
        />
      </Box>
    </Box>
  );
}

export default RequestList;
