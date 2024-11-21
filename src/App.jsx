import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import Library from './pages/Library';
import PublicationViewer from './pages/PublicationViewer';
import Authors from './pages/Authors';
import Business from './pages/Business';
import Profile from './pages/Profile';
import Publication from './pages/Publication';
import Publications from './pages/Publications';
import Services from './pages/Services';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

// Admin Pages
import AdminPublication from './admin/AdminPublication';
import AdminUser from './admin/AdminUser';
import AdminBusiness from './admin/AdminBusiness';
import AdminServices from './admin/AdminServices';
import AdminAuthors from './admin/AdminAuthors';

// Admin Layout with Navigation
import AdminNav from './components/AdminNav';
import Dashboard from './admin/Dashboard';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Public navigation */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/publication/:id" element={<Publication />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/business" element={<Business />} />
        <Route path="/library" element={<Library />} />
        <Route path="/viewer" element={<PublicationViewer />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Admin Routes with Admin Layout */}
        <Route path="/admin" element={<AdminNav />}>
          <Route path="/admin/dashboard" element={<Dashboard />} /> 
          <Route path="/admin/adminpub" element={<AdminPublication />} />
          <Route path="/admin/adminusers" element={<AdminUser />} />
          <Route path="/admin/adminbusiness" element={<AdminBusiness />} />
          <Route path="/admin/adminservice" element={<AdminServices />} />
          <Route path="/admin/adminauthors" element={<AdminAuthors />} />
        </Route>
      </Routes>
      <Footer /> {/* Footer for all pages */}
    </Router>
  );
};

export default App;
