import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useSuccessDialogStyles } from './SuccessDialogStyles';

type Props = {
  isOpen?: boolean;
  caption?: string;
  description?: string;
  setShowConfirmPopup?: any;
  clickYesBtnHandler?: any;
};

const ConfirmDialog = ({
  caption,
  description,
  setShowConfirmPopup,
  clickYesBtnHandler,
  isOpen
}: Props) => {
  const classes = useSuccessDialogStyles();
  const [open, setOpen] = React.useState(isOpen);

  React.useEffect(() => {
    setOpen(isOpen as any);
  }, [isOpen]);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickYes = () => {
    setOpen(false);
    setShowConfirmPopup(false);
    clickYesBtnHandler();
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
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
            <Typography className={classes.heading}>
              {caption}
            </Typography>
            <Box className={classes.text}>{description}</Box>
          </Box>
        </DialogContent>
        <DialogActions className={classes.buttonBox}>
          <Link
            className={classes.yesBtn}
            onClick={() => handleClickYes()}
          >
            {'Yes'}
          </Link>
          <Link
            className={classes.noBtn}
            onClick={() => {
              setOpen(false);
              setShowConfirmPopup(false);
            }}
          >
            {'No'}
          </Link>
        </DialogActions>
      </Dialog>
    </React.Fragment >
  );
};

export default ConfirmDialog;
