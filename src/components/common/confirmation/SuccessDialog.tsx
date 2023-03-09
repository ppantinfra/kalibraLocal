import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ImageIcons } from '../../../core';
import { useSuccessDialogStyles } from './SuccessDialogStyles';

type Props = {
  showSuccessPopup?: any;
  successMessage?: string;
  successDescription?: string;
  successNotifyMessage?: string;
  setShowSuccessPopup?: any;
  successDialogCloseHandler?: any;
  showDoneButton?: boolean;
  hideSuccessImage?: boolean;
};

const SuccessDialog = ({
  showSuccessPopup,
  successMessage,
  successDescription,
  successNotifyMessage,
  setShowSuccessPopup,
  successDialogCloseHandler,
  showDoneButton,
  hideSuccessImage
}: Props) => {
  const classes = useSuccessDialogStyles();
  const [open, setOpen] = React.useState(true);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    setOpen(showSuccessPopup);
    setShowSuccessPopup(false);
    successDialogCloseHandler();
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        className={classes.dialogPopup}
      >
        <DialogContent className={classes.dialogContent}>
          {!hideSuccessImage &&
            <Box>
              <img src={ImageIcons.SuccessTickIcon} alt="" />
            </Box>
          }
          <Box className={classes.dialogText}>
            <Typography className={classes.heading}>
              {successMessage}
              {/* {message} */}
            </Typography>
            <Box className={classes.text}>{successDescription}</Box>
            <Box className={classes.notifyText}>{successNotifyMessage}</Box>
          </Box>
        </DialogContent>
        <DialogActions className={classes.buttonBox}>
          {showDoneButton && (
            <Link
              className={classes.doAssBtn}
              onClick={() => successDialogCloseHandler()}
            >
              {'Done'}
            </Link>
          )}


        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default SuccessDialog;
