import React, { useState } from 'react';
import { TextField, Button, Grid, Box, Typography, Paper, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // useNavigate instead of useHistory

const SignIn = () => {
  const navigate = useNavigate(); // Replacing useHistory with useNavigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
      setOpenSnackbar(true);
      return;
    }

    // Simulate authentication logic (you can replace it with actual authentication logic)
    if (email === 'user@example.com' && password === 'password') {
      navigate('/dashboard'); // Navigate to dashboard after successful login
    } else {
      setError('Invalid credentials');
      setOpenSnackbar(true);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0', // Branding background color
        fontFamily: 'Arial, sans-serif', // Branding font
        marginBottom: 2
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: 3,
          maxWidth: 400,
          width: '100%',
          backgroundColor: '#ffffff',
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" align="center" sx={{ marginBottom: 2 }}>
          Sign In
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!error}
                helperText={error ? error : ''}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!error}
                helperText={error ? error : ''}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                sx={{ marginTop: 2 }}
              >
                Sign In
              </Button>
            </Grid>
          </Grid>
        </form>
        <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
          Don't have an account?{' '}
          <Button
            color="primary"
            onClick={() => navigate('/signup')} // Replacing history.push with navigate
            sx={{ textTransform: 'none' }}
          >
            Sign Up
          </Button>
        </Typography>
      </Paper>

      {/* Snackbar for error handling */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message={error}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Box>
  );
};

export default SignIn;
