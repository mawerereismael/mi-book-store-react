import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { Facebook, Twitter, Instagram, LinkedIn, Phone, Email } from '@mui/icons-material';

// Styled components for consistency with the brand
const StyledFooter = styled(Box)({
  backgroundColor: '#f0f0f0', // Lighter grey background close to white
  color: 'black',
  padding: '2rem 0',
  fontSize: '0.875rem', // Consistent font size for footer text
  position: 'relative', // Ensure it does not overlap content
  bottom: 0,
  width: '100%',
});

const FooterLink = styled(Link)({
  color: 'black',
  textDecoration: 'none',
  '&:hover': {
    color: '#90caf9', // Light blue hover effect for links
  },
});

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Column 1: Business Info */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: '1rem' }}>
              Service Business Name
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
              We provide innovative solutions to help you succeed in your business endeavors. From value creation to distribution, we have you covered.
            </Typography>
            <Box mt={2}>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem' }}>
                <Phone sx={{ mr: 1 }} />
                <FooterLink href="tel:+1234567890">+1 (234) 567-890</FooterLink>
              </Typography>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem' }}>
                <Email sx={{ mr: 1 }} />
                <FooterLink href="mailto:contact@business.com">contact@business.com</FooterLink>
              </Typography>
            </Box>
          </Grid>

          {/* Column 2: Navigation Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: '1rem' }}>
              Quick Links
            </Typography>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <FooterLink href="/">Home</FooterLink>
              </Grid>
              <Grid item>
                <FooterLink href="/services">Our Services</FooterLink>
              </Grid>
              <Grid item>
                <FooterLink href="/about">About Us</FooterLink>
              </Grid>
              <Grid item>
                <FooterLink href="/contact">Contact Us</FooterLink>
              </Grid>
            </Grid>
          </Grid>

          {/* Column 3: Social Media Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: '1rem' }}>
              Follow Us
            </Typography>
            <Box>
              <IconButton color="primary" href="https://facebook.com" target="_blank">
                <Facebook />
              </IconButton>
              <IconButton color="primary" href="https://twitter.com" target="_blank">
                <Twitter />
              </IconButton>
              <IconButton color="secondary" href="https://instagram.com" target="_blank">
                <Instagram />
              </IconButton>
              <IconButton color="primary" href="https://linkedin.com" target="_blank">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        
        {/* Copyright Information */}
        <Box mt={4} textAlign="center">
          <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
            &copy; {new Date().getFullYear()} Service Business Name. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
