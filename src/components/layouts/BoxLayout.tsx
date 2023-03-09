import React from 'react';

import { Box } from '@mui/material';
import BoxFooter from './box/BoxFooter';
import BoxHeader from './box/BoxHeader';

const BoxLayout = ({ outlet }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <BoxHeader />
      {outlet}
      <BoxFooter />
    </Box>
  );
};

export default BoxLayout;
