import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily, FontStyle, ButtonStyles, ButtonRadius, DefaulPrimarytColor } from '../../core';

export const useAddClientStyles = makeStyles(
  {
    formContent: {
      display: 'flex',
      flexDirection: 'column',
      '& .MuiInputAdornment-root': {
        '& p': {
          color: '#33B7B8 !important'
        }
      },
      '& .MuiInputBase-formControl': {
        border: 'none',
        background: '#F8F9FC',
        borderRadius: '8px'
      },
      '& input': {
        fontSize: '15px',
        border: 'none',
        borderRadius: ButtonRadius,
        '@media (max-width:768px)': {
          fontSize: '13px',
          padding: '14.5px 14px'
        },

        '@media (max-width:1280px)': {
          fontSize: '14px'
        }
      },
      '& p': {
        fontSize: '14px',
        fontFamily: FontFamily,
        fontWeight: '400'
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
          fontSize: '16px',

          '@media (max-width:1280px)': {
            fontSize: '14px'
          }
        }
      },
      '& .Mui-focused.MuiInputLabel-formControl': {
        color: '#46D7CB'
      },

      //   '& .MuiTextField-root': {
      //     paddingBottom: '32px'
      //   },

      '& .MuiOutlinedInput-root': {
        fontSize: '15px',
        '@media (max-width:768px)': {
          fontSize: '13px'
        }
      }
    },
    buttonBox: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: 0
      // marginTop: '32px'
    },
    submitBtn: {
      ...ButtonStyles(
        '12px 24px',
        DefaulPrimarytColor.primary500green,
        '#fff !important',
        'capitalize',
        'none',
        ButtonRadius,
        `${FontFamily} !important`,
        FontStyle,
        '500',
        '14px',
        '16px',
        'none',
        'none'
      ),
      height: '40px',
      width: '98px',
      '&:hover': {
        background: '#53c0b7',
        boxShadow: 'none'
      }
    },

    yesBtn: {
      background: '#46D7CB',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#fff',
      // width: '100%',
      width: '87px',
      height: '40px',
      outline: 'none',
      boxShadow: 'none',
      textTransform: 'capitalize',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '12px 24px',
      textDecoration: 'none',
      '&:hover': {
        background: '#3ba89f'
      }
    },
    noBtn: {
      background: '#fff',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#8F9BB3',
      //   width: '100%',
      width: '87px',
      height: '40px',
      outline: 'none',
      boxShadow: 'none',
      textTransform: 'capitalize',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '12px 24px',
      textDecoration: 'none',
      '&:hover': {
        background: 'transparent'
      }
    },
    heading: {
      fontFamily: FontFamily,
      fontStyle: FontStyle,
      color: FontColor,
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '140%',
      // textAlign: 'center',
      padding: '0 0 16px'
    },
    text: {
      fontFamily: FontFamily,
      fontStyle: FontStyle,
      color: FontColor,
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '140%',
      padding: '0 0 24px'
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
    },

    UserAvatar: {
      height: '40px',
      width: '40px'
    },
    userInfo: {
      background: 'transparent !important',
      cursor: 'pointer',
      '@media (max-width: 1100px)': {
        paddingRight: '45px'
      },
      '& :hover': {
        color: '#33B7B8'
      }
    },
    userName: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      margin: 0,
      padding: 0,
      background: 'transparent !important',
      fontSize: '16px !important',
      fontFamily: FontFamily,
      fontWeight: '400',
      color: FontColor,
      fontStyle: FontStyle
    }
  },
  { index: 1 }
);
