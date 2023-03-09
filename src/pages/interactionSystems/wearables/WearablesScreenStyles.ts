import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily } from '../../../core';

export const WearablesScreenStyles = makeStyles(
  {
    _container: {
      marginTop: '10px',
      marginBottom: '10px',
    },
    backtoLink: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      color: '#2B2F3B',
      textDecoration: 'none',
    },
    backtoClients: {
      display: 'flex',
      color: FontColor,
      fontFamily: FontFamily,
    },
    chevronLeftIcon: {
      color: '#46D7CB',
      background: 'transparent !important',
    }
  },
  { index: 1 }
);
