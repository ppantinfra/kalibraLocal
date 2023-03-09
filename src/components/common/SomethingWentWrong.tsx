import React from 'react';
import notFoundImg from '../../../src/assets/images/404.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SomethingWentWrong = () => {

  return (
    <Box className="notFoundWrapper text-center">
      <img src={notFoundImg} alt="not found" className="notFound" />
      <Typography className="headerTitle mt-2">
       Something Went Wrong
      </Typography>
    </Box>
  );
};


export default SomethingWentWrong;