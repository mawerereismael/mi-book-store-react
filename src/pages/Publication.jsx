import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import publications from './pub';

const capitalizeSentence = (sentence) => {
  if (typeof sentence !== 'string') {
    return sentence; // Return as is if it's not a string
  }
  return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
};

const Publication = () => {
  const { id } = useParams();
  const publication = publications.find((pub) => pub.id === parseInt(id));
  const [transactionStatus, setTransactionStatus] = useState('');

  if (!publication) return <Typography>Publication not found</Typography>;

  const handleTransaction = () => {
    const success = Math.random() > 0.5; // Random success/failure simulation
    setTransactionStatus(success ? 'Transaction successful!' : 'Transaction failed. Please try again.');
  };

  return (
    <Box sx={{ my: 4, backgroundColor: '#f5f5f5', padding: 2 }}>
      <Card sx={{ backgroundColor: 'white', color: 'black', mx: 2, p: 2 }}>
        <CardMedia
          component="img"
          height="200"
          image={publication.coverImage}
          alt={publication.title}
        />
        <CardContent>
          <Typography variant="h6" component="div" sx={{ textTransform: 'none', fontSize: 'small', mb: 2 }}>
            {capitalizeSentence(publication.title)}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'darkgrey', textTransform: 'none', fontSize: 'small', mb: 2 }}>
            {capitalizeSentence(publication.subtitle)}
          </Typography>
          <Typography variant="body1" sx={{ color: 'black', textTransform: 'none', fontSize: 'small', mb: 2 }}>
            {capitalizeSentence(publication.description)}
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Category" secondary={capitalizeSentence(publication.category)} sx={{ textTransform: 'none', fontSize: 'small' }} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Language" secondary={capitalizeSentence(publication.language)} sx={{ textTransform: 'none', fontSize: 'small' }} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Author" secondary={capitalizeSentence(publication.author)} sx={{ textTransform: 'none', fontSize: 'small' }} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={publication.email} sx={{ textTransform: 'none', fontSize: 'small' }} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Pages" secondary={publication.pages} sx={{ textTransform: 'none', fontSize: 'small' }} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Price" secondary={publication.price === '$0' ? 'Free' : publication.price} sx={{ textTransform: 'none', fontSize: 'small' }} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Date" secondary={publication.date} sx={{ textTransform: 'none', fontSize: 'small' }} />
            </ListItem>
            {publication.files.map((file, index) => (
              <ListItem key={index}>
                <img src={file} alt={`File ${index + 1}`} style={{ width: '100px', height: '100px', marginRight: '10px', borderRadius: 8, boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }} />
              </ListItem>
            ))}
          </List>
          
          {/* Container for the Button */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button
              variant="contained"
              color={publication.price === '$0' ? 'success' : 'primary'}
              onClick={handleTransaction}
              sx={{ textTransform: 'none', fontSize: 'small', width: '100%', maxWidth: '200px' }}
            >
              {publication.price === '$0' ? 'Free' : 'Buy'}
            </Button>
          </Box>

          {transactionStatus && (
            <Typography
              variant="body1"
              color={transactionStatus.includes('successful') ? 'green' : 'red'}
              sx={{ mt: 2, textTransform: 'none', fontSize: 'small' }}
            >
              {capitalizeSentence(transactionStatus)}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Publication;
