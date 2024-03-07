import React from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, TextField, Button, Typography } from '@mui/material';

import { IBook } from '../models/books';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  genre: Yup.string().required('Genre is required'),
  description: Yup.string(),
});

interface BookFormProps {
  onSubmit: (values: IBook) => void;
  submitButtonLabel: string;
  readonly?: boolean | undefined;
  book?: IBook | null;
}

const BookForm: React.FC<BookFormProps> = ({ onSubmit, submitButtonLabel, readonly, book }) => {
  const formik = useFormik<IBook>({
    initialValues: {
      title: book?.title || '',
      author: book?.author || '',
      genre: book?.genre || '',
      description: book?.description || '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <Box
      border={1}
      borderRadius={5}
      borderColor="grey.300"
      p={3}
      maxWidth={500}
      mx="auto"
      mt={3}
      boxShadow={1}
    >
      <Typography variant="h5" gutterBottom>
        {readonly ? 'View Book' : 'Add/Edit Book'}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Title"
          name="title"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          InputProps={{ readOnly: readonly }}
        />

        <TextField
          label="Author"
          name="author"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.author}
          error={formik.touched.author && Boolean(formik.errors.author)}
          helperText={formik.touched.author && formik.errors.author}
          InputProps={{ readOnly: readonly }}
        />

        <TextField
          label="Genre"
          name="genre"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.genre}
          error={formik.touched.genre && Boolean(formik.errors.genre)}
          helperText={formik.touched.genre && formik.errors.genre}
          InputProps={{ readOnly: readonly }}
        />

        <TextField
          label="Description"
          name="description"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          multiline
          rows={4}
          InputProps={{ readOnly: readonly }}
        />
        
        <Button type="submit" variant="contained" color="primary" disabled={readonly} fullWidth>
          {submitButtonLabel}
        </Button>
      </form>
    </Box>
  );
};

export default BookForm;
