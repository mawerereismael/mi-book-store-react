import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Box
} from '@mui/material';
import { styled } from '@mui/system';

// Placeholder sections data
const sections = [
  {
    title: 'Value Creation',
    description: 'Discover innovative ways to create value for your customers.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    title: 'Marketing',
    description: 'Effective strategies to market your products and services.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    title: 'Sales',
    description: 'Boost your sales with proven techniques and tools.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    title: 'Value Distribution',
    description: 'Efficiently distribute value to maximize customer satisfaction.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    title: 'Finances',
    description: 'Manage your finances to ensure profitability and growth.',
    imageUrl: 'https://via.placeholder.com/300',
  },
];

// Styled components to maintain the brand style
const StyledContainer = styled(Container)({
  marginTop: '2rem',
  marginBottom: '2rem',
});

const StyledPaper = styled(Paper)({
  padding: '2rem',
  marginBottom: '2rem',
  backgroundColor: '#f5f5f5',  // Subtle background color for paper
});

const Service = () => {
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    solution: '',
    supportFile: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCustomerDetails({
      ...customerDetails,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    setCustomerDetails({
      ...customerDetails,
      supportFile: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form logic (you can replace this with actual submission logic)
    console.log(customerDetails);
  };

  return (
    <StyledContainer maxWidth="md">
      {/* Service Sections */}
      {sections.map((section, index) => (
        <StyledPaper key={index}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <img src={section.imageUrl} alt={section.title} style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h6" sx={{ textTransform: 'lowercase', fontSize: '0.875rem' }} gutterBottom>
                {section.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'darkgrey', textTransform: 'lowercase', fontSize: '0.875rem' }} gutterBottom>
                {section.description}
              </Typography>
            </Grid>
          </Grid>
        </StyledPaper>
      ))}

      {/* Solution Form */}
      <StyledPaper>
        <Typography variant="h5" component="h1" sx={{ textTransform: 'lowercase', fontSize: '1.25rem' }} gutterBottom>
          Submit Your Solution
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Name"
                name="name"
                value={customerDetails.name}
                onChange={handleChange}
                required
                sx={{ fontSize: '0.875rem' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={customerDetails.email}
                onChange={handleChange}
                required
                sx={{ fontSize: '0.875rem' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Solution Details"
                name="solution"
                value={customerDetails.solution}
                onChange={handleChange}
                multiline
                rows={4}
                required
                sx={{ fontSize: '0.875rem' }}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                accept="image/*,video/*,audio/*"
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span" sx={{ fontSize: '0.875rem' }}>
                  Upload File
                </Button>
              </label>
              {customerDetails.supportFile && (
                <Typography variant="body2" sx={{ fontSize: '0.75rem', color: 'gray', mt: 1 }}>
                  File: {customerDetails.supportFile.name}
                </Typography>
              )}
            </Grid>
          </Grid>
          <Box mt={2}>
            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ fontSize: '0.875rem' }}>
              Submit
            </Button>
          </Box>
        </form>
      </StyledPaper>
    </StyledContainer>
  );
};

export default Service;
