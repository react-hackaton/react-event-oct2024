import React from "react";

import { Box } from "@mui/material";

import Footer from "./components/Footer";
import { Header } from "./components/Header";

export function Layout({ children }) {
  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <Header />
      <Box
        sx={{
          height: "calc(100vh - 236px)",
          width: 1500,
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
