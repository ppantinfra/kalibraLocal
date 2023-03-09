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

export const useSignInFormStyles = makeStyles(
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
        background: '#F8F9FC',
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
        fontWeight: '600',
        borderRadius: '8px 0 0 8px !mportant',

        '@media (max-width:1024px)': {
          padding: '11.5px 14px'
        },
        '&::placeholder': {
          fontWeight: 400
        }
      },
      '& .invalid-parentBox': {
        '& .MuiOutlinedInput-notchedOutline': {
          color: '#46D7CB',
          border: '2px solid #46D7CB',
          outline: '#46D7CB'
        },
        background: '#FFFFFF'
      },

      '& .Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          color: '#46D7CB',
          border: '2px solid #46D7CB',
          outline: '#46D7CB'
        },
        background: '#FFFFFF'
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
    customDatePicker: {
      '& input': {
        // padding: '16.5px 14px',
        border: '1px solid #afb3ba!important',
        background: '#F8F9FC',
      }
    },

    checkBoxLabel: {
      color: FontColor,
      '& span': {
        fontWeight: 600,
        fontSize: '11px',
      },
      '& svg': {
        color: '#8F9BB3'
      },
      '& .MuiCheckbox-root': {
        '&:hover': {
          backgroundColor: 'transparent !important'
        }
      },
      '& .Mui-checked': {
        '& svg': {
          color: DefaulPrimarytColor.primary500green
        },
        color: DefaulPrimarytColor.primary500green
      }
    },

    labelClassName: {
      color: '#8F9BB3 ',
      fontSize: '10px',
      fontFamily: FontFamily,
      paddingBottom: '8px'
    },

    loginHeading: {
      color: '#000000',
      fontSize: '26px',
      fontWeight: '600',
      fontFamily: FontFamily,
      textAlign: 'center'
    },

    otpHeading: {
      color: '#000000',
      fontSize: '20px',
      fontWeight: '600',
      fontFamily: FontFamily,
      textAlign: 'center'
    },
    otpSubHeading: {
      //color: '#000000',
      fontSize: '14px',
      fontWeight: '400',
      fontFamily: FontFamily,
      textAlign: 'center',
      paddingTop: '18px'
    },
  
    otpResendText: {
      textAlign: 'center',
      fontSize: '14px',
      fontFamily: FontFamily,
      color: BaseColor.basic600grey,
      '& .MuiLink-root': {
        textDecoration: 'none',
        color: DefaulPrimarytColor.primary500green
      }
    },
    forgotLink: {
      textDecoration: 'none',
      color: DefaulPrimarytColor.primary500green,
      fontSize: '11px',
      fontWeight: '600',
      paddingBottom: '8px',
      fontFamily: FontFamily,
    },

    SocialLinks: {
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      columnGap: '24px',

      '& .MuiLink-root': {
        textDecoration: 'none',
        display: 'flex',
        columnGap: '5px',
        color: FontColor,
        fontSize: '11px',
        cursor: 'pointer',

        '@media (max-width:950px)': {
          // color: '#fff',
          background: '#fff',
          padding: '5px 10px',
          borderRadius: '25px'
        },
        '@media (min-width:950px)': {
          padding: 0
        }
      }
    },
    donnotHaveAccount: {
      textAlign: 'center',
      fontSize: '14px',
      fontFamily: FontFamily,
      fontWeight:'400',
      color: BaseColor.basic600grey,
      '& .MuiLink-root': {
        textDecoration: 'none',
        color: DefaulPrimarytColor.primary500green
      }
    },
    aggrementText: {
      textAlign: 'center',
      fontSize: '14px',
      marginBottom:'4px',
      fontFamily: FontFamily,
      color: BaseColor.basic600grey,
      '& .MuiLink-root': {
        textDecoration: 'none',
        color: DefaulPrimarytColor.primary500green
      }
    },
    SocialIcons: {
      display: 'flex',
      justifyContent: 'space-between'
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

    resendOTPBtn: {
      ...ButtonStyles(
        '16px',
        'transparent',
        DefaulPrimarytColor.primary500green,
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
      height: '40px',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      textDecoration: 'none',
      columnGap: '8px',

      '@media (max-width: 768px)': {
        fontSize: '12px',
        letterSpacing: '.5px'
      },
      '& svg': {
        paddingRight: '5px'
      }
    },

    /*** Registration */

    formField: {
      display: 'flex',
      flexDirection: 'column-reverse'
    },
    radioGroup: {
      flexWrap: 'nowrap',
      '@media (max-width:900px)': {
        flexWrap: 'wrap'
      },

      '& .MuiFormControlLabel-label': {
        fontWeight: 600,
        fontSize: '14px',
        fontFamily: FontFamily,
      }
    },
    inputLabel: {
      color: 'rgba(0, 0, 0, 0.6) !important',
      fontSize: '13px',
      fontFamily: FontFamily,
      fontWeight: '400'
    },
    visibilityIcon:{
      color: '#231F20'
    }
  },
  { index: 1 }
);
