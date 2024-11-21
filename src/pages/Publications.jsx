import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import publications from './data';

const capitalizeSentence = (sentence) => {
  if (typeof sentence !== 'string') {
    return sentence; // Return as is if it's not a string
  }
  return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
};

const Publications = () => {
  const navigate = useNavigate();
  const [transactionStatus, setTransactionStatus] = useState({});

  const handleTransaction = (id) => {
    const success = Math.random() > 0.5; // Random success/failure simulation
    setTransactionStatus((prevStatus) => ({
      ...prevStatus,
      [id]: success ? 'Transaction successful!' : 'Transaction failed. Please try again.',
    }));
  };

  return (
    <Box sx={{ paddingBottom: '4rem', backgroundColor: 'white', padding: 2, marginBottom: '2rem' }}> {/* Added marginBottom for spacing */}
      <Grid container spacing={2}>
        {publications.map((publication) => (
          <Grid item xs={12} sm={6} md={4} key={publication.id}>
            <Card sx={{ backgroundColor: '#f5f5f5', color: 'black' }}>
              <CardMedia
                component="img"
                height="140"
                image={publication.coverImage}
                alt={publication.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ textTransform: 'none', fontSize: '0.875rem' }}>
                  {capitalizeSentence(publication.title)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'darkgrey', textTransform: 'none', fontSize: '0.875rem' }}>
                  {capitalizeSentence(publication.subtitle)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'darkgrey', textTransform: 'none', fontSize: '0.875rem' }}>
                  {capitalizeSentence(publication.category)}
                </Typography>
                <Button
                  variant="contained"
                  color={publication.price === '$0' ? 'success' : 'primary'}
                  onClick={() => handleTransaction(publication.id)}
                  sx={{ mt: 2, textTransform: 'none', fontSize: '0.875rem' }}
                >
                  {publication.price === '$0' ? 'Free' : 'Buy'}
                </Button>
                {transactionStatus[publication.id] && (
                  <Typography
                    variant="body2"
                    color={transactionStatus[publication.id].includes('successful') ? 'green' : 'red'}
                    sx={{ mt: 1, textTransform: 'none', fontSize: '0.875rem' }}
                  >
                    {capitalizeSentence(transactionStatus[publication.id])}
                  </Typography>
                )}
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => navigate(`/publication/${publication.id}`)}
                  sx={{ mt: 2, ml: 1, textTransform: 'none', fontSize: '0.875rem' }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Publications;
