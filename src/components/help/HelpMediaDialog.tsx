import React, { useRef } from 'react';
import { useHelpItemViewStyles } from './HelpItemViewStyles';
import Box from '@mui/material/Box';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Stream } from '@cloudflare/stream-react';

type Props = {
  videoId?: string;
  handleClose?: any;
};

const HelpMediaDialog = ({ videoId, handleClose }: Props) => {
  const classes = useHelpItemViewStyles();

  const videoRef = useRef(null);

  return (
    <Dialog
      fullScreen={true}
      fullWidth
      sx={{
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            width: '90vw',
            maxWidth: '2000px',  // Set your width here
          }
        },
      }}
      open={true}
      onClose={() => { handleClose(); }}
      aria-labelledby="responsive-dialog-title"
      className={classes.bigDialogPopup}
    >
      <DialogContent className={classes.dialogContent}>
        <Box style={{ width: '86.8vw', display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="medium" />
          </IconButton>
        </Box>
        <Box style={{ width: '86vw', marginTop: '18px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>

          <Stream streamRef={videoRef as any} controls volume={0.1} src={String(videoId)} autoplay={true}
            onLoadedData={() => {
              (videoRef.current as any).volume = 0.1;
            }}
            responsive={false}
          />
        </Box>
      </DialogContent>
    </Dialog >
  );
};

export default HelpMediaDialog;
