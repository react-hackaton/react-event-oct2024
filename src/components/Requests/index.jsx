import React from "react";

import GridViewIcon from "@mui/icons-material/GridView";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, IconButton, Typography } from "@mui/material";

import RequestList from "../RequestCard/requestList.jsx";

import FilterPanel from "./FilterPanel";
import SearchResultsHeader from "./searchSection.jsx";

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
          variant="h5"
          sx={{
            textAlign: "start",
            marginLeft: "20px",
            marginTop: "20px",
          }}
        >
          Запросы о помощи
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
          }}
        >
          <Box sx={{ display: "flex", padding: 2 }}>
            <FilterPanel />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "1060px",
            }}
          >
            <Box
              sx={{
                alignContent: "center",
                backgroundColor: "#ffffff",
                padding: "20px",
                height: "100px",
                marginBottom: "45px",
              }}
            >
              <SearchResultsHeader />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "800px",
                backgroundColor: "#ffffff",
              }}
            >
              <Box
                sx={{
                  display: "git merge devflex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  marginLeft: "20px",
                  marginTop: "12px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  Найдено: 21
                </Typography>

                <Box
                  sx={{
                    marginRight: "20px",
                  }}
                >
                  <IconButton aria-label="grid view">
                    <GridViewIcon />
                  </IconButton>
                  <IconButton aria-label="grid view">
                    <GridViewIcon />
                  </IconButton>
                  <IconButton aria-label="map view">
                    <LocationOnIcon />
                  </IconButton>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                }}
              >
                <RequestList />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Requests;
