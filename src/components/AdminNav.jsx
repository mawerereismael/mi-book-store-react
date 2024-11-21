import React from 'react';
import { Box, Typography, Grid, Paper, Button, Divider } from '@mui/material';
import {
  Home as HomeIcon,
  LibraryBooks as LibraryBooksIcon,
  AccountCircle as AccountCircleIcon,
  Business as BusinessIcon,
  People as PeopleIcon,
} from '@mui/icons-material';
import { Link, useLocation, Outlet } from 'react-router-dom';

const AdminNav = () => {
  const location = useLocation(); // Get current location to highlight the active link

  // Active link styles
  const activeLinkStyle = {
    backgroundColor: '#1565c0',
    color: '#fff',
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', padding: 2 }}>
      {/* Sidebar - Navigation */}
      <Paper
        sx={{
          width: 240,
          backgroundColor: '#f5f5f5',
          boxShadow: 3,
          height: 'calc(100% - 16px)', // Account for padding
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 2,
        }}
      >
        <Box sx={{ textAlign: 'center', marginBottom: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            Admin Dashboard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Manage your platform
          </Typography>
        </Box>
        <Divider sx={{ marginBottom: 3 }} />
        <Grid container spacing={2} sx={{ flexDirection: 'column' }}>
          {/* Dashboard Button */}
          <Grid item>
            <Link to="/admin/dashboard" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  width: '100%',
                  padding: 2,
                  justifyContent: 'flex-start',
                  ...((location.pathname === '/admin/dashboard') ? activeLinkStyle : {}),
                }}
              >
                <HomeIcon sx={{ fontSize: '2rem', marginRight: 1 }} />
                Dashboard
              </Button>
            </Link>
          </Grid>

          {/* Authors Button */}
          <Grid item>
            <Link to="/admin/adminauthors" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  width: '100%',
                  padding: 2,
                  justifyContent: 'flex-start',
                  ...((location.pathname === '/admin/adminauthors') ? activeLinkStyle : {}),
                }}
              >
                <AccountCircleIcon sx={{ fontSize: '2rem', marginRight: 1 }} />
                Authors
              </Button>
            </Link>
          </Grid>

          {/* Publications Button */}
          <Grid item>
            <Link to="/admin/adminpub" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  width: '100%',
                  padding: 2,
                  justifyContent: 'flex-start',
                  ...((location.pathname === '/admin/adminpub') ? activeLinkStyle : {}),
                }}
              >
                <LibraryBooksIcon sx={{ fontSize: '2rem', marginRight: 1 }} />
                Publications
              </Button>
            </Link>
          </Grid>

          {/* Users Button */}
          <Grid item>
            <Link to="/admin/adminusers" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  width: '100%',
                  padding: 2,
                  justifyContent: 'flex-start',
                  ...((location.pathname === '/admin/adminusers') ? activeLinkStyle : {}),
                }}
              >
                <PeopleIcon sx={{ fontSize: '2rem', marginRight: 1 }} />
                Users
              </Button>
            </Link>
          </Grid>

          {/* Business Button */}
          <Grid item>
            <Link to="/admin/adminbusiness" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  width: '100%',
                  padding: 2,
                  justifyContent: 'flex-start',
                  ...((location.pathname === '/admin/adminbusiness') ? activeLinkStyle : {}),
                }}
              >
                <BusinessIcon sx={{ fontSize: '2rem', marginRight: 1 }} />
                Business
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>

      {/* Main Content Area */}
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: '#eaeaea',
          marginLeft: 2,
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          overflowY: 'auto', // Allow scrolling if content overflows
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminNav;
