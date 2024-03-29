import React from 'react';
import Box from '@mui/material/Box';
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
      },

    },
    '& span': {
      fontSize: '10px',
      fontFamily: FontFamily,
      color: FontColor,
      fontWeight: 400
    }
  }
});

const SpeciallCircularProgressBar = ({ progressValue, width, strkWidth, borderColor, scoreText }) => {
  const classes = useStyles();
  const radius = (width - strkWidth) / 2;

  // Arc length at 100% coverage is the circle circumference
  const dashArray = radius * Math.PI * 2;
  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - dashArray * progressValue / 100;

  return (
    <Box sx={{ height: width / 2, width: width / 2, margin: 'auto' }} className={classes.circularProgressBox}>
      <svg
        width={width / 2}
        height={width / 2}
        viewBox={`0 0 ${width} ${width}`}>
        <circle
          className="circle-background"

          cx={width / 2}
          cy={width / 2}
          r={radius}
          strokeWidth={'1px'} />
        <circle
          className="circle-progress"
          cx={width / 2}
          cy={width / 2}
          r={radius}
          strokeWidth={`${strkWidth}px`}
          // Start progress marker at 12 O'Clock
          transform={`rotate(-90 ${width / 2} ${width / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            stroke: borderColor
          }} />
        {scoreText.length > 0 && <text
          className="circle-text"
          x="50%"
          y="50%"
          dy="-0.4em"
          textAnchor="middle">
          Duration
        </text>
        }
        <text
          className="circle-text-value"
          x="50%"
          y="50%"
          dy={scoreText.length > 0 ? '1.3em' : '0.3em'}
          style={{ fontSize: scoreText.length > 0 ? '32px' : '17px', fontWeight: scoreText.length > 0 ? '600' : '500' }}
          textAnchor="middle">
          {`${progressValue}%`}
        </text>
      </svg>
    </Box>
  );
};

export default SpeciallCircularProgressBar;
