import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { FontColor } from '../../../core';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  _Footer: {
    bottom: '0',
    '& p': {
      color: FontColor,
      fontSize: '14px',
    },
  },
});

const BoxFooter = () => {
  const classes = useStyles();
  return (
    <footer className={`${classes._Footer} footer fixed-bottom`}>
      <Container
        component="section"
        maxWidth="xl"
        sx={{
          width: '100%',
          maxWidth: {
            xl: '92vw',
            lg: '90vw',
            md: '85vw',
            xs: '85vw',
          },
        }}
      >
        <Typography>
          Copyright&copy; 2022 Kalibra, All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default BoxFooter;
