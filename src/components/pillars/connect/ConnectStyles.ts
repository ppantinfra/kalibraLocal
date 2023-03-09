import { makeStyles } from '@mui/styles';

import { FontFamily } from '../../../core';
export const ConnectStyles = makeStyles(
  {
    _container: {
      //marginTop: '10px',
      marginBottom: '10px',
    },
    description: {
      fontFamily: FontFamily,
      fontSize : '14px',
      fontWeight: '500',
      paddingLeft: '24px',
      paddingRight:'16px'
    },
  },
  { index: 1 }
);
