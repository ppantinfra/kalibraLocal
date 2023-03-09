import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { SnackBarsToastStyles } from './SnackBarsToastStyles';

type SnackBarProps = {
  openSnackBar?: boolean;
  snackBarMessage?: string;
  setOpenSnackBar?: any;
  isError?: boolean;
};

const SnackBarsToast = ({
  openSnackBar,
  snackBarMessage,
  setOpenSnackBar,
  isError,
}: SnackBarProps) => {
  const classes = SnackBarsToastStyles();

  const handleCloseSnackBar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackBar(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnackBar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Box>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
        message={snackBarMessage}
        action={action}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        className={'snackBar-customRoot'}
        ContentProps={{
          classes: {
            root:
              isError === true
                ? classes.snackBarErrorClass
                : classes.snackBarSuccessClass,
          },
        }}
      />
    </Box>
  );
};
export default SnackBarsToast;
