import React from 'react';
import { Box, Card, CardContent, Typography, IconButton, Grid } from '@mui/material';
import { Delete as DeleteIcon, Help as HelpIcon, Visibility as VisibilityIcon, Book as BookIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import publications from './pub';

const Library = () => {
  const navigate = useNavigate();

  const handleView = (id) => {
    console.log(`Viewing publication ${id}`);
    // Implement the view logic here
  };

  const handleDelete = (id) => {
    console.log(`Deleting publication ${id}`);
    // Implement the delete logic here
  };

  const handleHelp = (id) => {
    console.log(`Asking for help on publication ${id}`);
    // Implement the help request logic here
  };

  const handleAlbumClick = (publication) => {
    navigate('/viewer', { state: { publication } }); // Navigate to PublicationViewer with publication data
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: 2, marginBottom: 2 }}>
      {publications.map((publication) => (
        <Card key={publication.id} sx={{ marginBottom: 2, fontSize: 'small' }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <img
                  src={publication.coverImage}
                  alt={`${publication.title} cover`}
                  style={{
                    width: '100%',
                    borderRadius: 8,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography variant="h6" component="div" sx={{ fontSize: 'small' }}>
                  {publication.title}
                </Typography>
                <Typography variant="subtitle1" component="div" sx={{ fontSize: 'small' }}>
                  {publication.subtitle}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: 'small' }}>
                  {publication.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: 'small' }}>
                  Author: {publication.author}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: 'small' }}>
                  Language: {publication.language}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: 'small' }}>
                  Category: {publication.category}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: 'small' }}>
                  Pages: {publication.pages}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: 'small' }}>
                  Price: {publication.price}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: 'small' }}>
                  Published Date: {publication.date}
                </Typography>
                <Box sx={{ marginTop: 1, display: 'flex', justifyContent: 'space-between' }}>
                  <Box>
                    <IconButton onClick={() => handleView(publication.id)} size="small">
                      <VisibilityIcon fontSize="small" />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(publication.id)} size="small">
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                    <IconButton onClick={() => handleHelp(publication.id)} size="small">
                      <HelpIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* Large Book Icon */}
            <Box
              sx={{
                marginTop: 3,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                cursor: 'pointer',
              }}
              onClick={() => handleAlbumClick(publication)} // Navigate to PublicationViewer
            >
              <BookIcon
                sx={{
                  fontSize: 100,
                  color: '#1976d2',
                  marginBottom: 1,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '50%',
                  padding: 2,
                  backgroundColor: '#fff',
                }}
              />
              <Typography variant="subtitle1" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                View Pages
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Library;
