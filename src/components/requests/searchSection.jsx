import React from "react";

import { Search, GridView, List } from "@mui/icons-material";
import { Box, TextField, Typography, IconButton } from "@mui/material";

function SearchResultsHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
      }}
    >
      <Typography variant="h6">Найдено: </Typography>
      <TextField
        placeholder="Введите название задачи или организации"
        InputProps={{
          startAdornment: (
            <IconButton>
              <Search />
            </IconButton>
          ),
        }}
        variant="outlined"
        fullWidth
        sx={{ maxWidth: "400px", ml: 2 }}
      />
      <Box sx={{ display: "flex", ml: 2 }}>
        <IconButton>
          <GridView />
        </IconButton>
        <IconButton>
          <List />
        </IconButton>
      </Box>
    </Box>
  );
}

export default SearchResultsHeader;
