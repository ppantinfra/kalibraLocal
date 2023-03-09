import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily, FontStyle } from '../../../core/';

export const useSuccessDialogStyles = makeStyles( 
  {
    dialogPopup: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '& .MuiDialog-paper': {
        padding: '2vmax 4vmax',
        borderRadius: '2vmax',
      },
      '& .css-yiavyu-MuiBackdrop-root-MuiDialog-backdrop': {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '-1',
      },
    },
    dialogContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dialogText: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    },
    pillarName: {
      fontFamily: FontFamily,
      fontStyle: FontStyle,
      color: FontColor,
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '140%',
      textAlign: 'center',
      // padding: '20px 0',
    },
    pillarBox: {
      marginTop:'16px'
    },
    pillarTitle: {
      fontFamily: FontFamily,
      fontSize:'14px',
      fontWeight:'600',
      textAlign:'left'
    },
    pillarInfo: {
      fontFamily: FontFamily,
      fontSize:'14px',
      fontWeight:'400',
      //textAlign:'left'
    },
    buttonBox: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
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
      cursor:'pointer',
      textDecoration: 'none',
      '&:hover': {
        background: '#3ba89f',
      },
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
      textDecoration: 'none',
      '&:hover': {
        background: '#3ba89f',
      },
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
        background: '#3ba89f',
      },
    },
    heading: {
      fontFamily: FontFamily,
      fontStyle: FontStyle,
      color: FontColor,
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '140%',
      textAlign: 'center',
      padding: '20px 0',
    },
    text: {
      fontFamily: FontFamily,
      fontStyle: FontStyle,
      color: FontColor,
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '140%',
      textAlign: 'center',
      padding: '20px 0',
    },
    notifyText: {
      fontFamily: FontFamily,
      fontStyle: FontStyle,
      color: FontColor,
      fontWeight: '400',
      fontSize: '12px',
    },

    '& .css-hlj6pa-MuiDialogActions-root>:not(:first-of-type)': {
      transition: 'none',
    },
  },
  { index: 1 }
);
