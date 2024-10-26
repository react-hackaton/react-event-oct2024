import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { Layout } from "./components/Layout";
import Help from "./pages/help/index";
import LoginPage from "./pages/login";
import ProfilePage from "./pages/profile";
//import Requests from "./pages/requests";





function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/help-request" element={<Help />} />
          /*<Route path="/requests" element={<Requests />} />*/
          

          {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
