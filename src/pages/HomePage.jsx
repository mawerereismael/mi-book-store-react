import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';

// Section component for reusable card layout
const Section = ({ title, subtitle, imagePlaceholder, description }) => (
  <Card sx={{ display: 'flex', mb: 4, backgroundColor: '#f5f5f5' }}>
    <CardMedia
      component="img"
      sx={{ width: 160 }}
      image={imagePlaceholder}
      alt={`${title} placeholder`}
    />
    <CardContent sx={{ flex: 1 }}>
      <Typography component="h2" variant="h5" sx={{ fontSize: '1rem' }}>
        {title}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
        {subtitle}
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: '0.875rem' }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const HomePage = () => {
  return (
    <Container sx={{ my: 4, backgroundColor: '#f5f5f5', padding: 2 }}>
      <Typography component="h1" variant="h3" gutterBottom sx={{ fontSize: '1.5rem', mb: 4 }}>
        Welcome to Our Online Library
      </Typography>

      <Typography component="h2" variant="h4" gutterBottom sx={{ fontSize: '1.25rem', mb: 2 }}>
        Publications
      </Typography>
      <Section
        title="Publication Title"
        subtitle="Publication Subtitle"
        imagePlaceholder="https://via.placeholder.com/160"
        description="This is a description of the publication."
      />

      <Typography component="h2" variant="h4" gutterBottom sx={{ fontSize: '1.25rem', mb: 2 }}>
        Business Model
      </Typography>
      <Section
        title="Business Model Title"
        subtitle="Business Model Subtitle"
        imagePlaceholder="https://via.placeholder.com/160"
        description="This is a description of the business model."
      />

      <Typography component="h2" variant="h4" gutterBottom sx={{ fontSize: '1.25rem', mb: 2 }}>
        Business System
      </Typography>
      <Section
        title="Business System Title"
        subtitle="Business System Subtitle"
        imagePlaceholder="https://via.placeholder.com/160"
        description="This is a description of the business system."
      />

      <Typography component="h2" variant="h4" gutterBottom sx={{ fontSize: '1.25rem', mb: 2 }}>
        Our Network Businesses
      </Typography>
      <Grid container spacing={4}>
        {[1, 2, 3].map((business) => (
          <Grid item key={business} xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: '#f5f5f5' }}>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/140"
                alt="Business Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1rem' }}>
                  Business {business}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                  This is a brief description of the business.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography component="h2" variant="h4" gutterBottom sx={{ mt: 4, fontSize: '1.25rem', mb: 2 }}>
        Authors Partnership
      </Typography>
      <Card sx={{ mb: 4, backgroundColor: '#f5f5f5' }}>
        <CardContent>
          <Typography component="h2" variant="h5" sx={{ fontSize: '1rem' }}>
            Partner with Us
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '0.875rem' }}>
            If you are an author and would like to partner with us, please reach out to us. We are always looking for new and exciting content to share with our audience.
          </Typography>
          <Button variant="contained" color="primary" sx={{ fontSize: '0.875rem' }}>
            Contact Us
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default HomePage;
