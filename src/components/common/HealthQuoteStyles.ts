import { makeStyles } from '@mui/styles';
import { FontFamily, FontColor } from '../../core';

export const useHealthQuoteStyles = makeStyles(
  {
    description: {
      color: FontColor,
      fontSize: '14px',
      fontWeight: '400',
      fontFamily: FontFamily,
      fontStyle: 'normal',
      marginBottom: '0px',
      '@media (max-width: 1024px)': {
        fontSize: '14px',
      },
      '& i': {
        opacity: '.3',
      },
      '& strong': {
        // display: "block",
        textAlign: 'right',
        fontSize: '14px',
        fontWeight: 400,
        paddingTop: '5px',
        paddingLeft: '5px',
        // color: 'rgb(70, 215, 203)',
        '@media (max-width: 1024px)': {
          fontSize: '12px',
        },
      },
    },
  },
  { index: 1 }
);
