import { makeStyles } from '@mui/styles';
import { FontFamily } from '../../../core';

export const ScoreDetailStyles = makeStyles(
  {
    _container: {
      //marginTop: '10px',
      marginBottom: '10px',
    },
    noHistoryText: {
      fontSize: '14px',
      fontFamilyP:FontFamily,
      fontWeight: '400'
    },
    closeIcon: {
      position: 'absolute',
      right: '20px',
      top: '20px',
      cursor: 'pointer'
    }
  },
  { index: 1 }
);
