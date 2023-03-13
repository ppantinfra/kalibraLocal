import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily } from '../../../core';

const useStyles = makeStyles({
  circularProgressBox: {
    '& p': {
      fontFamily: FontFamily,
      color: FontColor,

      '&:first-child': {
        fontSize: '22px',
        fontWeight: 600,
      },
      '&:last-child': {
        fontSize: '10px',
        width: '60px',
      }
    },
    '& span': {
      fontSize: '10px',
      fontFamily: FontFamily,
      color: FontColor,
      fontWeight: 400
    }
  }
});

const CircularProgressBar = ({ strokeWidth, backgroundPadding, progressValue, pathColor, progressText }) => {
  const classes = useStyles();
  return (
    <Box sx={{ height: 124, width: 124, margin: 'auto' }} className={classes.circularProgressBox}>
      <CircularProgressbarWithChildren
        strokeWidth={strokeWidth}
        backgroundPadding={backgroundPadding}
        styles={buildStyles({
          strokeLinecap: 'butt',
          pathColor: pathColor
        })}
        value={progressValue}
      >
        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography>
            {progressValue}
            <span>%</span>
          </Typography>
          <Typography>{progressText}</Typography>
        </Box>
      </CircularProgressbarWithChildren>
    </Box>
  );
};

export default CircularProgressBar;
