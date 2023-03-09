import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import { TransitionProps } from '@mui/material/transitions';
import { makeStyles } from '@mui/styles';

const useActivityLoggerConfirmationModal = makeStyles(
  {
    act_template_diolog: {
      '& .MuiDialog-paper': {
        width: '60%',
      },

      '& .act_template_diologh': {
        '& .MuiDialog-paper': {},
      },
    },
    dialogContentBox: {
      padding: '2vmax',
    },
    tempModalHeading: {
      display: 'flex',
      columnGap: '10px',
      paddingBottom: '20px',
      alignItems: 'center',
      '& p': {
        color: '#222B45',
        fontSize: '24px',
        fontFamily: 'Poppins',
        fontWeight: '600',
      },
    },
    imgBox: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tempModalMessage: {
      '& p': {
        color: '#222B45',
        fontSize: '16px',
        fontFamily: 'Poppins',
        fontWeight: '400',
      },
    },
    buttonBox: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '20px',
      columnGap: '10px',
    },
    cancelBtn: {
      position: 'static',
      padding: '15px 20px',
      background: '#E4E9F2 !important',
      color: '#222B45 !important',
      borderRadius: '10px',
      textTransform: 'capitalize',
      border: 'none',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '20px',
      width: '106px',
    },
    saveBtn: {
      position: 'static',
      padding: '15px 20px',
      background: 'rgb(70, 215, 203) !important',
      color: '#fff !important',
      borderRadius: '10px',
      textTransform: 'capitalize',
      border: 'none',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '12px',
      width: '106px',
      '&:hover': {
        background: '#3ba89f',
      },
    },
  },
  { index: 1 }
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} timeout={500} />;
});

type Props = {
  openTemplateModal: boolean;
  hideTemplateModal: () => void;
  templateModalMessage: any;
  templateModalHeader: any;
  templateButtonLabel: any;
  confirmModalIcon: any;
  submitButton: any;
  iconBgColor: any;
};

const ActivityLoggerConfirmationModal = ({
  openTemplateModal,
  hideTemplateModal,
  templateModalMessage,
  templateModalHeader,
  templateButtonLabel,
  confirmModalIcon,
  submitButton,
  iconBgColor,
}: Props) => {
  const classes = useActivityLoggerConfirmationModal();

  return (
    <Dialog
      open={openTemplateModal}
      TransitionComponent={Transition}
      maxWidth={'md'}
      onClose={hideTemplateModal}
      aria-describedby="alert-dialog-slide-description"
      className={`${classes.act_template_diolog} act_template_diologh `}
    >
      <DialogContent>
        <Box className={classes.dialogContentBox}>
          <Box className={classes.tempModalHeading}>
            <Box style={{ background: iconBgColor }} className={classes.imgBox}>
              <img src={confirmModalIcon} alt="" />
            </Box>
            <Typography>{templateModalHeader}</Typography>
          </Box>

          <Box className={classes.tempModalMessage} id="fieledBox">
            <Typography>{templateModalMessage}</Typography>
          </Box>

          <Box className={classes.buttonBox}>
            <Button className={classes.cancelBtn} onClick={hideTemplateModal}>
              Cancel
            </Button>
            <Button className={classes.saveBtn} onClick={submitButton}>
              {templateButtonLabel}
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ActivityLoggerConfirmationModal;
