import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import { AuthProvider } from './context/AuthContext';

import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './components/Layout';
import Help from './pages/help/index';
import LoginPage from './pages/login';
import ProfilePage from './pages/profile';
import Requests from './pages/requests';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="/" element={<LoginPage />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/help-request" element={<Help />} />
              <Route path="/requests" element={<Requests />} />
            </Route>
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Layout>
        <ToastContainer position="bottom-right" autoClose={3000} />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
