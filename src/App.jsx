import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import "react-toastify/dist/ReactToastify.css";
import { Layout } from "./components/Layout";
import Help from "./pages/help/index";
import LoginPage from "./pages/login";
import ProfilePage from "./pages/profile";
import Requests from "./pages/requests";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            {/* Защищенные маршруты */}
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/help-request" element={<Help />} />
              <Route path="/requests" element={<Requests />} />
            </Route>

            {/*<Route path="*" element={<NotFound />} />*/}
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;