import React from 'react';
import { useFormik } from 'formik';
import { IBook } from '../models/books';
import { Box, TextField, Button } from '@mui/material';

interface BookFormProps {
  onSubmit: (values: IBook) => void;
  submitButtonLabel: string;
}

const BookForm: React.FC<BookFormProps> = ({ onSubmit, submitButtonLabel }) => {
  const formik = useFormik<IBook>({
    initialValues: {
      title: '',
      author: '',
      genre: '',
      description: '',
    },
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={2}>
        <TextField
          label="Title"
          name="title"
          variant="outlined"
          margin="normal"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <TextField
          label="Author"
          name="author"
          variant="outlined"
          margin="normal"
          onChange={formik.handleChange}
          value={formik.values.author}
        />
        <TextField
          label="Genre"
          name="genre"
          variant="outlined"
          margin="normal"
          onChange={formik.handleChange}
          value={formik.values.genre}
        />
        <TextField
          label="Description"
          name="description"
          variant="outlined"
          margin="normal"
          onChange={formik.handleChange}
          value={formik.values.description}
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary">
          {submitButtonLabel}
        </Button>
      </Box>
    </form>
  );
};

export default BookForm;
