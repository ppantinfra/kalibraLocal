import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily } from '../../core';

export const GenomicStyles = makeStyles(
  {
    _container: {
      marginTop: '10px',
      marginBottom: '10px',
      '& .genomic_tiles_scrollbar': {
       
        '@media (min-width:1500px)': {
          height: '20vmax'
        },
        '@media (min-width:1599px)': {
          height: '15vmax'
        },
        '@media (min-width:2999px)': {
          height: '11vmax'
        },
        // '@media (max-width:1200px)': {
        //   height: '23vmax'
        // },
        // '@media (max-width:768px)': {
        //   height: '28vmax'
        // }
      }
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
  },
  { index: 1 }
);
