import React from "react";

import "react-toastify/dist/ReactToastify.css";
import { Layout } from "./components/Layout";

import ProfilePage from "./pages/profile";
import { Help } from "@mui/icons-material";

function App() {
  return (
    <Layout>

      <ProfilePage />
      <Help/>

    </Layout>
    
  );
}

export default App;
