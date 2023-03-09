import React from 'react';
import notFoundImg from '../../src/assets/images/404.png';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { FontFamily, FontStyle, ButtonStyles } from '../core/';

export const useNotFoundStyles = makeStyles({
  saveBtn: {
    ...ButtonStyles(
      '12px 24px',
      '#33B7B8 !important',
      '#fff !important',
      'capitalize',
      'none',
      '10px',
      FontFamily,
      FontStyle,
      '500',
      '18px',
      '20px',
      'none',
      'none'
    ),
    '&:hover': {
      background: '#53c0b7',
      boxShadow: 'none',
    },
    '@media (max-width: 768px)': {
      fontSize: '14px',
      padding: '12px',
    },
  },
});

const NotFoundScreen = () => {
  const navigate = useNavigate();
  const classes = useNotFoundStyles();
  return (
    <Box className="notFoundWrapper text-center">
      <img src={notFoundImg} alt="not found" className="notFound" />
      <Typography className="headerTitle mt-2">
        Sorry, we couldn’t find the page you’re looking for
      </Typography>
      <Typography className="mt-0 mb-2 paragraph-text">
        Either the page does not exist anymore, or you may have spelled
        something wrong.
        <br />
        You might want to check the URL again or go back.
      </Typography>
      <Button
        variant="contained"
        className={classes.saveBtn}
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </Button>
    </Box>
  );
};

export default NotFoundScreen;
