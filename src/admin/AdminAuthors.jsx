import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tooltip, Snackbar, Alert, Grid } from '@mui/material';
import { Delete as DeleteIcon, Visibility as VisibilityIcon, Close as CloseIcon } from '@mui/icons-material'; // Corrected import for CloseIcon
import authorsData from './authors';

const AdminAuthors = () => {
  const [authors, setAuthors] = useState(authorsData);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleOpenDialog = (author) => {
    setSelectedAuthor(author);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedAuthor(null);
  };

  const handleDelete = (id) => {
    setAuthors(authors.filter((author) => author.id !== id));
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: 2, marginBottom: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
        <Typography variant="h4">Admin - Manage Author's Content</Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Author Name</TableCell>
              <TableCell>Bio</TableCell>
              <TableCell>Content Title</TableCell>
              <TableCell>Content Category</TableCell>
              <TableCell>Language</TableCell>
              <TableCell>Files</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {authors.map((author) => (
              <TableRow key={author.id}>
                <TableCell>{author.authorName}</TableCell>
                <TableCell>{author.bio}</TableCell>
                <TableCell>{author.contentTitle}</TableCell>
                <TableCell>{author.contentCategory}</TableCell>
                <TableCell>{author.language}</TableCell>
                <TableCell>
                  {author.files.map((file, index) => (
                    <img key={index} src={file} alt={`File ${index + 1}`} style={{ width: '50px', marginRight: '5px' }} />
                  ))}
                </TableCell>
                <TableCell>
                  <Tooltip title="View">
                    <IconButton color="primary" onClick={() => handleOpenDialog(author)}>
                      <VisibilityIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton color="secondary" onClick={() => handleDelete(author.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Author Details</DialogTitle>
        <DialogContent>
          {selectedAuthor && (
            <Box sx={{ padding: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Author Name"
                    variant="outlined"
                    fullWidth
                    value={selectedAuthor.authorName}
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Bio"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={selectedAuthor.bio}
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Content Title"
                    variant="outlined"
                    fullWidth
                    value={selectedAuthor.contentTitle}
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Content Category"
                    variant="outlined"
                    fullWidth
                    value={selectedAuthor.contentCategory}
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Language"
                    variant="outlined"
                    fullWidth
                    value={selectedAuthor.language}
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Files:
                  </Typography>
                  {selectedAuthor.files.map((file, index) => (
                    <img key={index} src={file} alt={`File ${index + 1}`} style={{ width: '100px', marginRight: '10px' }} />
                  ))}
                </Grid>
              </Grid>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary" startIcon={<CloseIcon />}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Author deleted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AdminAuthors;
