import { makeStyles } from '@mui/styles';
import {
  ButtonColor,
  FontColor,
  FontFamily,
  ButtonRadius,
  FontStyle,
  BaseColor,
  DefaulPrimarytColor,
  InputFieldHeight,
  ButtonStyles
} from '../../core';

export const useResetPasswordStyles = makeStyles(
  {
    formContent: {
      display: 'flex',
      flexDirection: 'column',
      '& .signinFormLabel': {
        color: '#8F9BB3 !important',
        fontSize: '14px',
        fontFamily: FontFamily,
        paddingBottom: '8px'
      },
      '.MuiOutlinedInput-input:-webkit-autofill': {
        borderRadius: '8px 0 0 8px !important'
      },
      '& .MuiInputBase-formControl': {
        background: BaseColor.basic200grey
      },
      '& .MuiOutlinedInput-root': {
        color: FontColor,
        fontFamily: FontFamily,
        height: InputFieldHeight,
        borderRadius: ButtonRadius,
        '&:-webkit-autofill': {
          borderRadius: '8px 0 0 8px'
        }
      },
      '& input': {
        padding: '11.5px 14px',
        color: FontColor,
        fontSize: '16px',
        fontWeight: '400',
        borderRadius: '8px 0 0 8px !mportant',

        '@media (max-width:1024px)': {
          padding: '11.5px 14px'
        },
        '&::placeholder': {
          fontWeight: 400
        }
      },

      '& .Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          color: '#46D7CB',
          border: '2px solid #46D7CB',
          outline: '#46D7CB'
        }
      },
      '& .Mui-focused.MuiInputLabel-formControl': {
        color: '#46D7CB'
      },
      '& fieldset': {
        border: 'none'
      },
      // radio checked color
      '& .Mui-checked': {
        color: DefaulPrimarytColor.primary500green
      },

      '@media (max-width:900px)': {
        width: 'unset'
        // width: "30vmax",
      }
    },

    labelClassName: {
      color: '#8F9BB3 ',
      fontSize: '14px',
      fontFamily: FontFamily,
      paddingBottom: '8px'
    },
    donnotHaveAccount: {
      textAlign: 'center',
      fontSize: '14px',
      color: BaseColor.basic600grey,
      '& .MuiLink-root': {
        textDecoration: 'none',
        cursor: 'pointer',
        color: DefaulPrimarytColor.primary500green
      }
    },
    otpHeading: {
      color: '#000000',
      fontSize: '18px',
      fontWeight: '600',
      fontFamily: FontFamily,
      textAlign: 'center'
    },

    otpDescription: {
      color: '#000000',
      fontSize: '16px',
      fontFamily: FontFamily,
      textAlign: 'center'
    },
   
    signInBtn: {
      ...ButtonStyles(
        '16px',
        DefaulPrimarytColor.primary500green,
        '#fff !important',
        'capitalize',
        'none',
        ButtonRadius,
        FontFamily,
        FontStyle,
        '500',
        '16px',
        '24px',
        'none',
        'none'
      ),
      width: '100%',
      '&:hover': {
        background: ButtonColor
      }
    },

    formField: {
      display: 'flex',
      flexDirection: 'column-reverse'
    },
    
  },
  { index: 1 }
);
