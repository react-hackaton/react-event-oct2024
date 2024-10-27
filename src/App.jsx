import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './components/Layout';
import Help from './components/help/index';
import LoginPage from './pages/login';
import ProfilePage from './pages/profile';
import Requests from './pages/requests';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import HelpRequest from './pages/helpRequest';

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


              <Route path="help1" element={<HelpRequest/>}/>
            </Route>

            {/*<Route path="*" element={<NotFound />} />*/}
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
