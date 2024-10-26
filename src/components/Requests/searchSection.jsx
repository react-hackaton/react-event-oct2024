import React from "react";

import { Search } from "@mui/icons-material";
import {
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";

function SearchResultsHeader() {
  return (
    <div>
      <Typography
        sx={{
          marginBottom: "25px",
        }}
      >
        Найти запрос
      </Typography>
      <TextField
        placeholder="Введите название задачи или организации"
        variant="standard" // Use standard variant for the line style
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <Search />
              </IconButton>
            </InputAdornment>
          ),
          disableUnderline: false, // Keeps the underline visible
        }}
        sx={{
          maxWidth: "400px",
        }}
      />
    </div>
    // <Box
    //   sx={{
    //     backgroundColor: "#ffffff",
    //     border: "1px solid",
    //     borderColor: "primary.light",
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "space-between",
    //     alignItems: "flex-start",
    //     mb: 2,
    //   }}
    // >
    //   <Typography
    //     sx={{
    //       marginBottom: "25px",
    //     }}
    //   >
    //     Найти запрос{" "}
    //   </Typography>
    //   <TextField
    //     placeholder="Введите название задачи или организации"
    //     InputProps={{
    //       startAdornment: (
    //         <IconButton>
    //           <Search />
    //         </IconButton>
    //       ),
    //     }}
    //     variant="outlined"
    //     fullWidth
    //     sx={{ maxWidth: "400px", ml: 2 }}
    //   />
    // </Box>
  );
}

export default SearchResultsHeader;
