import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { FontFamily } from '../../core/constants/ElementBaseStyles';

const ButtonWithIcon = ({
  title,
  isSelected,
  clickHandler,
  icon
}) => {
  return (
    <Box style={{ display: 'flex', flexDirection: 'row', zIndex: 99999, marginLeft: '24px', cursor: 'pointer' }} onClick={() => {
      clickHandler();
    }}>
      <img style={{ width: '20px', height: '20px' }} src={icon} alt={''} />
      <Box style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignContent: 'center', alignSelf: 'center' }}>
        <Typography style={{ marginLeft: '6px', fontSize: '12px', fontFamily: FontFamily, fontWeight: isSelected === true ? '600' : '400' }} >
          {title}
        </Typography>
        {isSelected === true &&
          <Box style={{ justifyContent: 'center', display: 'flex' }}>
            <Box style={{ backgroundColor: '#222B45', height: '2px', width: '6px' }}></Box>
          </Box>
        }
      </Box>
    </Box>
  );
};

export default ButtonWithIcon;
