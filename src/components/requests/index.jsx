import React from "react";

import { Box, Typography } from "@mui/material";

import FilterPanel from "./FilterPanel";

function Requests() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100wh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F5F5F5",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "start",
            marginLeft: "40px",
            marginTop: "30px",
          }}
        >
          Запросы о помощи
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            margin: "0 auto",
          }}
        >
          <Box sx={{ display: "flex", padding: 2 }}>
            <FilterPanel />
          </Box>

          <Box sx={{ display: "flex", padding: 2 }}>
            <Box
              sx={{ flex: 1, paddingLeft: 4, width: "1080px", height: "149px" }}
            >
              {/* <SearchResultsHeader /> */}
              <Box
                sx={{ display: "flex", padding: 2, backgroundColor: "blue" }}
              >
                <div>Search</div>
              </Box>

              <Box
                sx={{ display: "flex", padding: 2, backgroundColor: "blue" }}
              >
                <div>Vertical Card</div>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Requests;
