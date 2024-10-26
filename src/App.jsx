import React from "react";

import "react-toastify/dist/ReactToastify.css";
import { Layout } from "./components/Layout";
import ProfilePage from "./pages/profile";

function App() {
  return (
    <Layout>

      <ProfilePage />
    </Layout>
  );
}

export default App;
