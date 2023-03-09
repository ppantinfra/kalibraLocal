import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily } from '../../core';

export const useStyles = makeStyles(
  {
    renderedContentBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '64vh',

      '& p': {
        fontFamily: FontFamily,
        color: FontColor,
        fontSize: '40px',
        marginTop: '20px',
      },
      '& svg': {
        color: '#46d7cb',
        width: '300px',
        height: '300px',
        transition: '.3s all',
        '&:hover': {
          transform: 'scale(1.2)',
        },
      },
      '& img': {
        color: '#46d7cb',
        width: '284px',
        height: '284px',
        transition: '.3s all',
        '&:hover': {
          transform: 'scale(1.2)',
        },
      },
    },
  },
  { index: 1 }
);

type IProps = {
  //   children: React.ReactNode | React.ReactNode[];
  renderedText: string;
  renderedImageIcon: React.ReactNode | React.ReactNode[];
};

const DummyRedered = ({ renderedText, renderedImageIcon }: IProps) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.renderedContentBox}>
        <Box sx={{ textAlign: 'center' }}>
          <Box>{renderedImageIcon}</Box>
          <Box>
            {' '}
            <Typography>{renderedText}</Typography>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default DummyRedered;
