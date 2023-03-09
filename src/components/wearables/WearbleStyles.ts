import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily } from '../../core';

export const WearbleStyles = makeStyles(
  {
    _container: {   
     
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
    },

    genomics_img_box: {
      // width: "63%",
      display: 'flex',
      maxWidth: '100%',
      alignItems: 'center',
      flexDirection: 'column',
      '& img': {
        borderRadius: '5px',
        width: '9vmax',
        '@media (max-width: 1280px)': {
          width: '12vmax',
        },
      },
    },
    genomics_img_footer: {},
    genomics_img_heading: {
      color: '#2B2F3B',
      fontSize: '14px',
      fontWeight: '500',
      textAlign: 'center',
    },
    genomics_img_text: {
      fontSize: '14px',
      color: 'rgba(43 47 59/75%)',
      marginBottom: '2vmax',
      '@media (max-width: 768px)': {
        fontSize: '12px',
      },
    },
    filterIcon: {
      // marginTop: '25px',
      borderRadius: '8px',
      width: '42px',
      height: '39px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#46D7CB',
      cursor: 'pointer',
      '& svg': {
        color: '#fff'
      },
      '@media (max-width: 480px)': {      
        position: 'absolute',
        top: '32px',
        right: '-54px'
      }
    },
    pickeraWrapper: {
      marginBottom: '40px', marginTop: '-20px', alignItems: 'center', flexDirection: 'row', gap: '10px',
      '@media (max-width: 480px)': {      
        width: 'calc(100% - 54px)',
        display: 'block',
        position: 'relative'
    }
    },
    
  },
  { index: 1 }
);
