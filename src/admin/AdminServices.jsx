import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tooltip, Grid, Snackbar, Alert } from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon, Save as SaveIcon, Close as CloseIcon } from '@mui/icons-material';
import businessesData from './buz1';

const AdminServices = () => {
  const [businesses, setBusinesses] = useState(businessesData);
  const [openDialog, setOpenDialog] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentBusiness, setCurrentBusiness] = useState({
    id: null,
    title: '',
    description: '',
    imageUrl: ''
  });
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleOpenDialog = (business = null) => {
    if (business) {
      setIsEditMode(true);
      setCurrentBusiness(business);
    } else {
      setIsEditMode(false);
      setCurrentBusiness({
        id: null,
        title: '',
        description: '',
        imageUrl: ''
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentBusiness({
      id: null,
      title: '',
      description: '',
      imageUrl: ''
    });
    setError('');
  };

  const handleSave = () => {
    if (!currentBusiness.title || !currentBusiness.description) {
      setError('Title and Description are required fields.');
      return;
    }

    if (isEditMode) {
      setBusinesses(businesses.map(business => (business.id === currentBusiness.id ? currentBusiness : business)));
    } else {
      setCurrentBusiness(prevState => ({ ...prevState, id: businesses.length + 1 }));
      setBusinesses([...businesses, { ...currentBusiness, id: businesses.length + 1 }]);
    }
    handleCloseDialog();
    setSnackbarOpen(true);
  };

  const handleDelete = (id) => {
    setBusinesses(businesses.filter(business => business.id !== id));
    setSnackbarOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentBusiness({ ...currentBusiness, [name]: value });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: 2, marginBottom: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
        <Typography variant="h4">Admin - Manage Services</Typography>
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={() => handleOpenDialog()}>
          Add Business
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {businesses.map((business) => (
              <TableRow key={business.id}>
                <TableCell>{business.title}</TableCell>
                <TableCell>{business.description}</TableCell>
                <TableCell>
                  <img src={business.imageUrl} alt={business.title} style={{ width: '100px' }} />
                </TableCell>
                <TableCell>
                  <Tooltip title="Edit">
                    <IconButton color="primary" onClick={() => handleOpenDialog(business)}>
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton color="secondary" onClick={() => handleDelete(business.id)}>
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
        <DialogTitle>{isEditMode ? 'Edit Business' : 'Add Business'}</DialogTitle>
        <DialogContent>
          <Box sx={{ padding: 2 }}>
            {error && (
              <Typography color="error" sx={{ marginBottom: 2 }}>
                {error}
              </Typography>
            )}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Title"
                  name="title"
                  value={currentBusiness.title}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  value={currentBusiness.description}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Image URL"
                  name="imageUrl"
                  value={currentBusiness.imageUrl}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary" startIcon={<CloseIcon />}>
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary" startIcon={<SaveIcon />}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Operation Successful!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AdminServices;
