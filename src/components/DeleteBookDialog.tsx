import React from 'react';

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Slide } from '@mui/material';

interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteBookDialog: React.FC<Props> = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog open={open} TransitionComponent={Slide} keepMounted onClose={onClose}>
      <DialogTitle>Delete Confirmation</DialogTitle>
      <DialogContent>
        Are you sure you want to delete this book?
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="secondary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteBookDialog;
