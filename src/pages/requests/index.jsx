import React from "react";

import GridViewIcon from "@mui/icons-material/GridView";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, IconButton, Typography } from "@mui/material";

import RequestList from "../../components/RequestCard/requestList.jsx";
import FilterPanel from "../../components/Requests/filterPanel.jsx";
import SearchResultsHeader from "../../components/Requests/searchSection.jsx";

function Requests() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F5F5F5"
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "start",
            padding: "40px"
          }}
        >
          Запросы о помощи
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            margin: "0 auto",
            paddingRight: "20px"
          }}
        >
          {/* filter */}
          <Box sx={{ display: "flex", padding: "0 20px" }}>
            <FilterPanel />
          </Box>

          {/* main section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              maxWidth: "1060px"
            }}
          >
            <Box
              sx={{
                alignContent: "center",
                backgroundColor: "#ffffff",
                padding: "40px",
                marginBottom: "25px"
              }}
            >
              <SearchResultsHeader />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#ffffff",
                marginBottom: "40px"
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  paddingTop: "20px"
                  // paddingLeft: "20px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "700",
                    paddingLeft: "20px"
                  }}
                >
                  Найдено: 21
                </Typography>

                <Box sx={{
                  paddingRight: "20px"
                }}>
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
                  display: "flex"
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