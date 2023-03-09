import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily } from '../../core';

export const BiomeStyles = makeStyles(
  {
    _container: {
      marginTop: '10px',
      marginBottom: '10px',

      '& .biome_tiles_scrollbar': {
       
        '@media (min-width:1500px)': {
          height: '17vmax'
        },
        '@media (min-width:1599px)': {
          height: '13vmax'
        },
        '@media (min-width:2999px)': {
          height: '12vmax'
        },
        '@media (max-width:1200px)': {
          height: '23vmax'
        },
        '@media (max-width:768px)': {
          height: '28vmax'
        }
      }
    },
    biomeImgBox: {
      width: '18vmax',
      margin: 'auto',
      display: 'block',
      '@media (min-width:1599px)': {
        width: '13vmax',
      },
    },
    // Biome Health tiles
    biomeHealthBox: {
      color: '#2B2F3B'
    },
    bhTitleBox: {
      display: 'flex',
      alignItems: 'center',
      columnGap: '1vmax'
    },
    bhImgIconBox: {
      '& img': {
        width: '25px',
        height: '35px'
      }
    },
    bhTitle: {
      color: FontColor,
      fontFamily: FontFamily,
      fontWeight: '600',
      fontSize: '15px',
      paddingTop: '5px'
    },
    bhSubTitle: {},
    bhResult: {
      color: FontColor,
      fontFamily: FontFamily,
      fontSize: '12px',
      paddingBottom: '1vmax',
      '& span': {
        display: 'inline',
        padding: '0.2rem 0.5rem',
        borderRadius: '6px',
        marginLeft: '0.5rem',
        color: 'white',
        fontSize: '12px'
      }
    },
    bhResultDesciption: {
      fontSize: '12px',
      fontFamily: FontFamily,
      paddingBottom: '10px',
      color: FontColor
    },
    bhDesciption: {
      fontFamily: FontFamily,
      fontSize: '12px',
      paddingTop: '10px',
      borderTop: '1px solid rgb(229, 229, 229)'
    }
  },
  { index: 1 }
);
