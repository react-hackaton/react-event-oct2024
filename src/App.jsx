import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { Layout } from "./components/Layout";
import LoginPage from "./pages/login";
import ProfilePage from "./pages/profile";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          {/*<Route path="/contact" element={<Contact />} />*/}
          {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
