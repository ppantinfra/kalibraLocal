import { makeStyles } from '@mui/styles';
import { FontFamily } from '../../../core';
export const MoveStyles = makeStyles(
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
    pcspc_item: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: '10px',
    },
    pcspcText: {
      fontSize: '11px',
      color: '#2B2F3B',
      fontWeight: '400',
      width: '70%',
      fontFamily:FontFamily,
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      '@media (max-width: 1280px)': {
        fontSize: '11px',
      },
    },

    pcspcValue: {
      fontSize: '12px',
      color: 'rgba(43 47 59/75%)',
      fontWeight: '600',
      width: '30%',
      textAlign: 'end',
      '@media (max-width: 1280px)': {
        fontSize: '12px',
      },
    },
  },
  { index: 1 }
);
