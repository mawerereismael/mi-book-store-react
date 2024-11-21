import React from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import { Home as HomeIcon, LibraryBooks as LibraryBooksIcon, AccountCircle as AccountCircleIcon, Business as BusinessIcon, People as PeopleIcon, Settings as SettingsIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Box
      sx={{
        bgcolor: '#eaeaea',
        height: '100%',
        padding: 4,
      }}
    >
      {/* Branding Section */}
      <Box
        sx={{
          textAlign: 'center',
          marginBottom: 4,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          Welcome to the Admin Dashboard
        </Typography>
        <Typography variant="body2" sx={{ color: '#555' }}>
          Manage and monitor all aspects of your platform from here.
        </Typography>
      </Box>

      {/* Quick Access Tools */}
      <Grid container spacing={4} justifyContent="center">
        {/* Dashboard */}
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/admin/dashboard" style={{ textDecoration: 'none' }}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                textAlign: 'center',
                backgroundColor: '#1976d2',
                color: '#fff',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              <HomeIcon sx={{ fontSize: 80, marginBottom: 1 }} />
              <Typography variant="h6">Dashboard</Typography>
            </Paper>
          </Link>
        </Grid>

        {/* Authors */}
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/admin/adminauthors" style={{ textDecoration: 'none' }}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                textAlign: 'center',
                backgroundColor: '#ff7043',
                color: '#fff',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              <AccountCircleIcon sx={{ fontSize: 80, marginBottom: 1 }} />
              <Typography variant="h6">Authors</Typography>
            </Paper>
          </Link>
        </Grid>

        {/* Publications */}
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/admin/adminpub" style={{ textDecoration: 'none' }}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                textAlign: 'center',
                backgroundColor: '#66bb6a',
                color: '#fff',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              <LibraryBooksIcon sx={{ fontSize: 80, marginBottom: 1 }} />
              <Typography variant="h6">Publications</Typography>
            </Paper>
          </Link>
        </Grid>

        {/* Users */}
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/admin/adminuser" style={{ textDecoration: 'none' }}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                textAlign: 'center',
                backgroundColor: '#29b6f6',
                color: '#fff',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              <PeopleIcon sx={{ fontSize: 80, marginBottom: 1 }} />
              <Typography variant="h6">Users</Typography>
            </Paper>
          </Link>
        </Grid>

        {/* Business */}
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/admin/adminbusiness" style={{ textDecoration: 'none' }}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                textAlign: 'center',
                backgroundColor: '#ffa726',
                color: '#fff',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              <BusinessIcon sx={{ fontSize: 80, marginBottom: 1 }} />
              <Typography variant="h6">Business</Typography>
            </Paper>
          </Link>
        </Grid>

        {/* Settings */}
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/admin/adminsettings" style={{ textDecoration: 'none' }}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                textAlign: 'center',
                backgroundColor: '#ab47bc',
                color: '#fff',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              <SettingsIcon sx={{ fontSize: 80, marginBottom: 1 }} />
              <Typography variant="h6">Settings</Typography>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
