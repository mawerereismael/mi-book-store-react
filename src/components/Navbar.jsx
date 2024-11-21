import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle,
  Book as BookIcon,
  Business as BusinessIcon,
  LibraryBooks as LibraryBooksIcon,
  Group as GroupIcon,
  Home as HomeIcon,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is small
  const [anchorEl, setAnchorEl] = useState(null);
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState(null);
  const isAdmin = true; // Placeholder, replace with actual logic to check if user is admin

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleUserMenuOpen = (event) => {
    setUserMenuAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchorEl(null);
  };

  const activeStyle = {
    textDecoration: 'none',
    color: 'white',
    textTransform: 'lowercase',
    fontSize: '0.875rem',
    borderBottom: '2px solid white',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const inactiveStyle = {
    textDecoration: 'none',
    color: 'white',
    textTransform: 'lowercase',
    fontSize: '0.875rem',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'darkgrey' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
            <HomeIcon /> mi book store
          </NavLink>
        </Typography>

        {isSmallScreen ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{ ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{ '& .MuiPaper-root': { backgroundColor: 'darkgrey', color: 'white' } }}
            >
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/publications" style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
                  <LibraryBooksIcon /> publications
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/services" style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
                  <BookIcon /> services
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/business" style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
                  <BusinessIcon /> business
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/authors" style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
                  <GroupIcon /> authors
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/library" style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
                  <LibraryBooksIcon /> library
                </NavLink>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex' }}>
            <Button
              color="inherit"
              component={NavLink}
              to="/publications"
              sx={{ textTransform: 'lowercase', fontSize: '0.875rem' }}
              style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
            >
              <LibraryBooksIcon /> publications
            </Button>
            <Button
              color="inherit"
              component={NavLink}
              to="/services"
              sx={{ textTransform: 'lowercase', fontSize: '0.875rem' }}
              style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
            >
              <BookIcon /> services
            </Button>
            <Button
              color="inherit"
              component={NavLink}
              to="/business"
              sx={{ textTransform: 'lowercase', fontSize: '0.875rem' }}
              style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
            >
              <BusinessIcon /> business
            </Button>
            <Button
              color="inherit"
              component={NavLink}
              to="/authors"
              sx={{ textTransform: 'lowercase', fontSize: '0.875rem' }}
              style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
            >
              <GroupIcon /> authors
            </Button>
            <Button
              color="inherit"
              component={NavLink}
              to="/library"
              sx={{ textTransform: 'lowercase', fontSize: '0.875rem' }}
              style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
            >
              <LibraryBooksIcon /> library
            </Button>
          </Box>
        )}

        <IconButton
          edge="end"
          color="inherit"
          aria-label="user menu"
          onClick={handleUserMenuOpen}
          sx={{ ml: 2 }}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={userMenuAnchorEl}
          open={Boolean(userMenuAnchorEl)}
          onClose={handleUserMenuClose}
          sx={{ '& .MuiPaper-root': { backgroundColor: 'darkgrey', color: 'white' } }}
        >
          <MenuItem onClick={handleUserMenuClose}>
            <NavLink to="/signin" style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
              <AccountCircle /> Sign In
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleUserMenuClose}>
            <NavLink to="/signup" style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
              <AccountCircle /> Sign Up
            </NavLink>
          </MenuItem>
          {isAdmin && (
            <MenuItem onClick={handleUserMenuClose}>
              <NavLink to="/admin/dashboard" style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
                <HomeIcon /> Admin Dashboard
              </NavLink>
            </MenuItem>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
