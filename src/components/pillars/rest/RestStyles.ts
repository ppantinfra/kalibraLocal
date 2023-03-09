import { makeStyles } from '@mui/styles';
import { FontFamily } from '../../../core';
export const RestStyles = makeStyles(
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
      fontSize: '15px',
      color: '#2B2F3B',
      fontWeight: '500',
      width: '22vmax',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },

    pcspcValue: {
      fontSize: '15px',
      color: 'rgba(43 47 59/75%)',
      fontWeight: '400',
      textAlign: 'end',
    },
  },
  { index: 1 }
);
