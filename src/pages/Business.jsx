import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Button, Grid, CardMedia } from '@mui/material';
import businessData from './buz';  // Import sample data

// Helper function to capitalize sentences
const capitalizeSentences = (text) => {
  return text.replace(/(?:^|\.\s*)([a-z])/g, (match) => match.toUpperCase());
};

const Business = () => {
  const [expandedBusinessId, setExpandedBusinessId] = useState(null);

  const handleToggleDetails = (id) => {
    setExpandedBusinessId(prevId => (prevId === id ? null : id));
  };

  return (
    <Box sx={{ my: 4 }}>
      <Grid container spacing={2}>
        {businessData.map((business) => (
          <Grid item xs={12} sm={6} md={4} key={business.id}>
            <Card sx={{ backgroundColor: '#f5f5f5', color: 'black', padding: 2 }}>
              <CardMedia
                component="img"
                height="140"
                image={business.imageUrl}  // Placeholder image URL
                alt={business.name}
                sx={{ marginBottom: 2 }} // Adding margin below the image
              />
              <CardContent sx={{ paddingBottom: 2 }}>
                <Typography variant="h6" sx={{ textTransform: 'lowercase', fontSize: '0.875rem', marginBottom: 1 }}>
                  {capitalizeSentences(business.name)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'darkgrey', textTransform: 'lowercase', fontSize: '0.875rem', marginBottom: 1 }}>
                  {capitalizeSentences(business.category)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'darkgrey', textTransform: 'lowercase', fontSize: '0.875rem', marginBottom: 1 }}>
                  Email: {business.email}
                </Typography>
                <Typography variant="body2" sx={{ color: 'darkgrey', textTransform: 'lowercase', fontSize: '0.875rem', marginBottom: 1 }}>
                  Website: <a href={business.website} target="_blank" rel="noopener noreferrer">{business.website}</a>
                </Typography>

                {/* Show short description */}
                <Typography variant="body2" sx={{ textTransform: 'lowercase', fontSize: '0.875rem', mt: 1, marginBottom: 2 }}>
                  {capitalizeSentences(business.description)}
                </Typography>

                {/* More button to show details */}
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleToggleDetails(business.id)}
                  sx={{ mt: 2, fontSize: '0.875rem' }}
                >
                  {expandedBusinessId === business.id ? 'Show Less' : 'More'}
                </Button>

                {/* Full details section */}
                {expandedBusinessId === business.id && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" sx={{ textTransform: 'lowercase', fontSize: '0.75rem', marginBottom: 1 }}>
                      {capitalizeSentences(business.fullDetails)}
                    </Typography>
                    <Typography variant="body2" sx={{ textTransform: 'lowercase', fontSize: '0.75rem', marginBottom: 1 }}>
                      Location: {capitalizeSentences(business.location)}
                    </Typography>
                    <Typography variant="body2" sx={{ textTransform: 'lowercase', fontSize: '0.75rem' }}>
                      Phone: {business.phone}
                    </Typography>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Business;
