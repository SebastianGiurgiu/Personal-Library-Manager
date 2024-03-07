import React from 'react';

const useSnackbar = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>('');

  const showSnackbar = (messageToShow: string) => {
    setMessage(messageToShow);
    setOpen(true);
  };

  const hideSnackbar = () => {
    setOpen(false);
  };

  return { open, message, showSnackbar, hideSnackbar };
};

export default useSnackbar;