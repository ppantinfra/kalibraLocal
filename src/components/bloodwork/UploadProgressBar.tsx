import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? 'rgb(70, 215, 203)' : '#308fe8'
  }
}));

type Props = {
  uploadProgress: number;
};

const UploadProgressBar = ({ uploadProgress }: Props) => {
  return (
    <Box className="mb25" display="flex" alignItems="center">
      <Box width="100%" sx={{ mr: 1 }}>
        <BorderLinearProgress variant="determinate" value={uploadProgress} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${uploadProgress}%`}</Typography>
      </Box>
    </Box>
  );
};

export default UploadProgressBar;
