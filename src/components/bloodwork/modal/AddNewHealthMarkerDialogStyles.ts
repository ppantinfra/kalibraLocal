import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily, FontStyle } from '../../../core';

export const useAddNewHealthMarkerDialogStyles = makeStyles(
  {
    dialogPopup: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '& .MuiDialog-paper': {
        padding: '24px',
        borderRadius: '2vmax'
      },
      '& .css-yiavyu-MuiBackdrop-root-MuiDialog-backdrop': {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '-1'
      },
      '& input': {
        fontSize: '15px',
        border:'none',
        height: '32px',
        '@media (max-width:1280px)': {
          fontSize: '14px'
        }
      },
      '& .MuiInputBase-formControl': {
        //borderRadius: '8px'
      },
      '& .Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          color: '#46D7CB',
          border: '2px solid #46D7CB',
          outline: '#46D7CB'
        },
        '& input': {
          color: FontColor,
          fontFamily: FontFamily,
          fontWeight: '600',
          fontSize: '14px',

          '@media (max-width:1280px)': {
            fontSize: '14px'
          }
        }
      },
      '& .MuiInputAdornment-root .MuiTypography-root': {
        fontSize: '12px',
        fontFamily: FontFamily,
        fontWeight: '400'
      },

      // '& .MuiDialog-container': {
      //   height: 'auto',
      // }
    },
    dialogContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0 24px 20px'
    },
    dialogText: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    },
    buttonBox: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      padding: '0 24px',
    },
    doAssBtn: {
      background: '#46D7CB',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '500',
      color: '#fff',
      width: '100%',
      outline: 'none',
      boxShadow: 'none',
      textTransform: 'capitalize',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '12px',
      textDecoration: 'none',
      '&:hover': {
        background: '#3ba89f'
      }
    },
    yesBtn: {
      background: '#46D7CB',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '500',
      color: '#fff',
      width: '100%',
      outline: 'none',
      boxShadow: 'none',
      textTransform: 'capitalize',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '12px',
      cursor:'pointer',
      textDecoration: 'none',
      '&:hover': {
        background: '#3ba89f'
      }
    },
    yesErrorBtn: {
      background: '#808080',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '500',
      color: '#fff',
      width: '100%',
      outline: 'none',
      boxShadow: 'none',
      textTransform: 'capitalize',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '12px',
      textDecoration: 'none',
      pointerEvents: 'none',
      '&:hover': {
        background: '#3ba89f'
      }
    },
    noBtn: {
      background: '#46D7CB',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '500',
      color: '#fff',
      width: '100%',
      outline: 'none',
      boxShadow: 'none',
      textTransform: 'capitalize',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '12px',
      textDecoration: 'none',
      '&:hover': {
        background: '#3ba89f'
      }
    },
    invalidInputField: {
      width: '50%'
    },
    validInputField: {
      width: '50%',
    },
    minmaxMsg: {
      // color: 'red',
      width: '138px',
      fontFamily: FontFamily,
      fontSize: '11px',
      '@media (max-width: 768px)': {
        width: '60px',
        fontSize: '10px'
      },
      '@media (max-width: 412px)': {
        width: '45px',
        fontSize: '8px'
      }
    },
    selectHealMarkerField: {
      margin: '20px 0',
      height: '32px',
      width: '100%',
      padding: '24px 0',
      background: '#f8f9fc',
      //borderRadius: '8px'
      // '@media (max-width: 768px)': {
      //   width: '85px'
      // },
      // '@media (max-width: 450px)': {
      //   width: '65px'
      // },
      // '@media (max-width: 412px)': {
      //   width: '60px'
      // }
    },
    // selectField: {
    //   height: '32px',
    //   width: '100px',
    //   padding: '24px 0',
    //   borderRadius: '8px',
    //   background: '#f8f9fc',

    // },
    selectField: {
      height: '32px',
      width: '50%',
      //borderRadius: '8px',
      background: '#f8f9fc',
      padding: '24px 0',
      // '@media (max-width: 768px)': {
      //   width: '85px'
      // },
      // '@media (max-width: 450px)': {
      //   width: '65px'
      // },
      // '@media (max-width: 412px)': {
      //   width: '60px'
      // }
    },
    heading: {
      fontFamily: FontFamily,
      fontStyle: FontStyle,
      color: FontColor,
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '140%',
      textAlign: 'center',
      padding: '20px 0'
    },
    text: {
      fontFamily: FontFamily,
      fontStyle: FontStyle,
      color: FontColor,
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '140%',
      textAlign: 'center',
      padding: '20px 0'
    },
    valueAndUnit: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: '8px'
    },
    notifyText: {
      fontFamily: FontFamily,
      fontStyle: FontStyle,
      color: FontColor,
      fontWeight: '400',
      fontSize: '12px'
    },

    '& .css-hlj6pa-MuiDialogActions-root>:not(:first-of-type)': {
      transition: 'none'
    }
  },
  { index: 1 }
);
