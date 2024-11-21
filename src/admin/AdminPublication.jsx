import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, IconButton, Grid, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tooltip } from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon, Save as SaveIcon, Close as CloseIcon } from '@mui/icons-material';
import publicationsData from './pub';

const AdminPublication = () => {
  const [publications, setPublications] = useState(publicationsData);
  const [openDialog, setOpenDialog] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentPublication, setCurrentPublication] = useState({
    id: null,
    title: '',
    subtitle: '',
    category: '',
    language: '',
    coverImage: '',
    description: '',
    author: '',
    email: '',
    pages: '',
    price: '',
    date: '',
    files: []
  });

  const handleOpenDialog = (publication = null) => {
    if (publication) {
      setIsEditMode(true);
      setCurrentPublication(publication);
    } else {
      setIsEditMode(false);
      setCurrentPublication({
        id: null,
        title: '',
        subtitle: '',
        category: '',
        language: '',
        coverImage: '',
        description: '',
        author: '',
        email: '',
        pages: '',
        price: '',
        date: '',
        files: []
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentPublication({
      id: null,
      title: '',
      subtitle: '',
      category: '',
      language: '',
      coverImage: '',
      description: '',
      author: '',
      email: '',
      pages: '',
      price: '',
      date: '',
      files: []
    });
  };

  const handleSave = () => {
    if (isEditMode) {
      setPublications(publications.map(pub => (pub.id === currentPublication.id ? currentPublication : pub)));
    } else {
      setCurrentPublication(prevState => ({ ...prevState, id: publications.length + 1 }));
      setPublications([...publications, { ...currentPublication, id: publications.length + 1 }]);
    }
    handleCloseDialog();
  };

  const handleDelete = (id) => {
    setPublications(publications.filter(pub => pub.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentPublication({ ...currentPublication, [name]: value });
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: 2, marginBottom: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
        <Typography variant="h4">Admin - Manage Publications</Typography>
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={() => handleOpenDialog()}>
          Add Publication
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Language</TableCell>
              <TableCell>Pages</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {publications.map((publication) => (
              <TableRow key={publication.id}>
                <TableCell>{publication.title}</TableCell>
                <TableCell>{publication.author}</TableCell>
                <TableCell>{publication.category}</TableCell>
                <TableCell>{publication.language}</TableCell>
                <TableCell>{publication.pages}</TableCell>
                <TableCell>{publication.price}</TableCell>
                <TableCell>{publication.date}</TableCell>
                <TableCell>
                  <Tooltip title="Edit">
                    <IconButton color="primary" onClick={() => handleOpenDialog(publication)}>
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton color="secondary" onClick={() => handleDelete(publication.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>{isEditMode ? 'Edit Publication' : 'Add Publication'}</DialogTitle>
        <DialogContent>
          <Box sx={{ padding: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Title"
                  name="title"
                  value={currentPublication.title}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Subtitle"
                  name="subtitle"
                  value={currentPublication.subtitle}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Category"
                  name="category"
                  value={currentPublication.category}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Language"
                  name="language"
                  value={currentPublication.language}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Cover Image URL"
                  name="coverImage"
                  value={currentPublication.coverImage}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  value={currentPublication.description}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Author"
                  name="author"
                  value={currentPublication.author}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={currentPublication.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="Pages"
                  name="pages"
                  type="number"
                  value={currentPublication.pages}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="Price"
                  name="price"
                  value={currentPublication.price}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="Published Date"
                  name="date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={currentPublication.date}
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
    </Box>
  );
};

export default AdminPublication;
