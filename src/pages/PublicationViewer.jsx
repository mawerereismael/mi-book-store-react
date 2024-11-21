import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, IconButton, Typography, LinearProgress } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';

const PublicationViewer = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const publication = state?.publication;

  const [currentPage, setCurrentPage] = useState(0);

  const handleScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    const progress = Math.floor((scrollTop / (scrollHeight - clientHeight)) * 100);
    setCurrentPage(progress);
  };

  if (!publication) {
    return <Typography variant="h6">No publication selected</Typography>;
  }

  return (
    <Box
      sx={{
        height: '100vh',
        overflowY: 'auto',
        backgroundColor: '#f5f5f5',
      }}
      onScroll={handleScroll}
    >
      {/* Header with Back Button */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          padding: 2,
          backgroundColor: '#fff',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <IconButton onClick={() => navigate(-1)} color="inherit">
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" sx={{ marginLeft: 2 }}>
          {publication.title}
        </Typography>
      </Box>

      {/* Progress Bar */}
      <Box
        sx={{
          position: 'sticky',
          top: 64, // Offset to place it below the header
          zIndex: 10,
          paddingX: 2,
          backgroundColor: '#f5f5f5',
        }}
      >
        <LinearProgress variant="determinate" value={currentPage} />
        <Typography variant="body2" align="center" sx={{ marginTop: 1 }}>
          Progress: {currentPage}%
        </Typography>
      </Box>

      {/* Images Display */}
      <Box sx={{ padding: 2 }}>
        {publication.files.map((file, index) => (
          <Box key={index} sx={{ marginBottom: 2 }}>
            <img
              src={file}
              alt={`Page ${index + 1}`}
              style={{
                width: '100%',
                borderRadius: 8,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PublicationViewer;
