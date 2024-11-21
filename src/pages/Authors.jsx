import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Card, CardContent, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// This function simulates file upload
const uploadFiles = (files) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (files.length > 0) {
        resolve('Files uploaded successfully');
      } else {
        reject('No files selected');
      }
    }, 2000); // Simulate delay for file upload
  });
};

const Author = () => {
  const [formData, setFormData] = useState({
    authorName: '',
    bio: '',
    contentTitle: '',
    contentCategory: '',
    language: '',
    files: [],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevData) => ({
      ...prevData,
      files,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    // Basic validation
    if (!formData.authorName || !formData.bio || !formData.contentTitle || !formData.contentCategory || !formData.language) {
      setError('Please fill out all required fields.');
      return;
    }

    setLoading(true);

    try {
      const result = await uploadFiles(formData.files);
      setSuccessMessage(result);
    } catch (uploadError) {
      setError(uploadError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ my: 4, backgroundColor: '#f5f5f5', padding: 2, paddingBottom: '1rem' }}>
      <Card sx={{ backgroundColor: 'white', color: 'black', padding: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom sx={{ fontSize: '1rem' }}>
            Author Details
          </Typography>
          <form onSubmit={handleSubmit}>
            {/* Author Name */}
            <TextField
              name="authorName"
              label="Author Name"
              variant="outlined"
              fullWidth
              required
              value={formData.authorName}
              onChange={handleChange}
              sx={{ mb: 2, fontSize: '0.875rem' }}
            />

            {/* Bio */}
            <TextField
              name="bio"
              label="Bio"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={4}
              value={formData.bio}
              onChange={handleChange}
              sx={{ mb: 2, fontSize: '0.875rem' }}
            />

            {/* Content Title */}
            <TextField
              name="contentTitle"
              label="Content Title"
              variant="outlined"
              fullWidth
              required
              value={formData.contentTitle}
              onChange={handleChange}
              sx={{ mb: 2, fontSize: '0.875rem' }}
            />

            {/* Content Category */}
            <TextField
              name="contentCategory"
              label="Content Category"
              variant="outlined"
              fullWidth
              required
              value={formData.contentCategory}
              onChange={handleChange}
              sx={{ mb: 2, fontSize: '0.875rem' }}
            />

            {/* Language */}
            <TextField
              name="language"
              label="Language"
              variant="outlined"
              fullWidth
              required
              value={formData.language}
              onChange={handleChange}
              sx={{ mb: 2, fontSize: '0.875rem' }}
            />

            {/* File Upload */}
            <Button
              variant="contained"
              component="label"
              fullWidth
              sx={{ mb: 2, fontSize: '0.875rem' }}
            >
              Upload Files
              <input
                type="file"
                hidden
                multiple
                accept="image/*,application/pdf"
                onChange={handleFileChange}
              />
            </Button>

            {/* Error or Success Message */}
            {error && (
              <Typography variant="body2" color="error" sx={{ mb: 2, fontSize: '0.75rem' }}>
                {error}
              </Typography>
            )}
            {successMessage && (
              <Typography variant="body2" color="success.main" sx={{ mb: 2, fontSize: '0.75rem' }}>
                {successMessage}
              </Typography>
            )}

            {/* Submit Button */}
            <Button
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
              disabled={loading}
              sx={{ fontSize: '0.875rem' }}
            >
              {loading ? <CircularProgress size={24} /> : 'Submit'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Author;
