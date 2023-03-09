import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily, FontStyle } from '../../../core';

export const useStyles = makeStyles(
  {
    dialogPopup: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '& .MuiDialog-paper': {
        padding: '24px',
        borderRadius: '8px',
        width: '348px'
      },
      '& .css-yiavyu-MuiBackdrop-root-MuiDialog-backdrop': {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '-1'
      }
    },
    dialogContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0
    },
    dialogText: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
      // alignItems: 'center'
    },
    buttonBox: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      padding: 0
    },

    yesBtn: {
      background: '#46D7CB',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '500',
      color: '#fff',
      width: '100%',
      outline: 'none',
      boxShadow: 'none',
      textTransform: 'capitalize',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '16px',
      textDecoration: 'none',
      '&:hover': {
        background: '#3ba89f'
      }
    },
    noBtn: {
      background: '#fff',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '500',
      color: '#8F9BB3',
      width: '100%',
      outline: 'none',
      boxShadow: 'none',
      textTransform: 'capitalize',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '16px',
      textDecoration: 'none',
      '&:hover': {
        background: 'transparent'
      }
    },
    cancelBtn: {
      background: '#fff',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '500',
      color: '#3ba89f',
      width: '100%',
      outline: 'none',
      boxShadow: 'none',
      textTransform: 'capitalize',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '16px',
      textDecoration: 'none',
      '&:hover': {
        background: 'transparent'
      }
    },
    heading: {
      fontFamily: FontFamily,
      fontStyle: FontStyle,
      color: FontColor,
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '140%',
      // textAlign: 'center',
      padding: '0 0 16px'
    },
    text: {
      fontFamily: FontFamily,
      fontStyle: FontStyle,
      color: FontColor,
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '140%',
      // textAlign: 'center',
      padding: '0 0 24px'
    },
    notifyText: {
      fontFamily: FontFamily,
      fontStyle: FontStyle,
      color: FontColor,
      fontWeight: '400',
      fontSize: '12px'
    },

    '& .css-hlj6pa-MuiDialogActions-root>:not(:first-of-type)': {
      transition: 'none'
    }
  },
  { index: 1 }
);

type Props = {
  isOpen?: boolean;
  caption?: string;
  description?: string;
  setShowConfirmPopup?: any;
  confirmButtonHandler?: any;
  cancelButtonHandler?: any;
  confirmButtonLabel?: string;
  cancelButtonLabel?: string;
};

const ConfirmDialog = ({
  caption,
  description,
  setShowConfirmPopup,
  confirmButtonHandler,
  isOpen,
  confirmButtonLabel,
  cancelButtonLabel
}: Props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(isOpen);

  React.useEffect(() => {
    setOpen(isOpen as any);
  }, [isOpen]);

  const handleClickConfirm = () => {
    setOpen(false);
    setShowConfirmPopup(false);
    confirmButtonHandler();
  };

  return (
    <React.Fragment>
      <Dialog
        open={open as any}
        onClose={() => {
          setShowConfirmPopup(false);
          setOpen(false);
        }}
        aria-labelledby="responsive-dialog-title"
        className={classes.dialogPopup}
      >
        <DialogContent className={classes.dialogContent}>
          <Box className={classes.dialogText}>
            <Typography className={classes.heading}>{caption}</Typography>
            <Box className={classes.text}>{description}</Box>
          </Box>
        </DialogContent>
        <DialogActions className={classes.buttonBox}>
          <Link className={classes.yesBtn} onClick={() => handleClickConfirm()}>
            {confirmButtonLabel}
          </Link>
          <Link
            className={classes.cancelBtn}
            onClick={() => {
              setOpen(false);
              setShowConfirmPopup(false);
            }}
          >
            {cancelButtonLabel}
          </Link>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ConfirmDialog;
