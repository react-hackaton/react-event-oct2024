import React from "react";

import { Box, Grid } from "@mui/material";

import FilterPanel from "./FilterPanel";

function Requests() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100wh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <Box sx={{ display: "flex", padding: 2 }}>
        <FilterPanel />
        <Box sx={{ flex: 1, paddingLeft: 4 }}>
          {/* <SearchResultsHeader /> */}
          <Box>
            <div>Vertical Card</div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Requests;
