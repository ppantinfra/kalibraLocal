import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily, FontStyle, ButtonStyles, ButtonRadius, DefaulPrimarytColor } from '../../../core';

export const useAddPractionerStyles = makeStyles(
  {
    formContent: {
      display: 'flex',
      flexDirection: 'column',
      '& .MuiInputAdornment-root': {
        '& p': {
          color: '#33B7B8 !important'
        }
      },
      '& .MuiOutlinedInput-notchedOutline': {
        border: '1px solid #E4E9F2',
      },
      '& .MuiInputBase-formControl': {
        border: 'none',
        background: '#F8F9FC',
        borderRadius: '8px'
      },
      '& .MuiOutlinedInput-input.Mui-disabled': {
        WebkitTextFillColor: 'rgba(0, 0, 0, 0.87)!important',
        color: 'rgba(0, 0, 0, 0.87)!important',
      },
      '& .Mui-disabled': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#E4E9F2!important',
        },
      },
      '& input': {
        fontSize: '14px',
        border: 'none',
        fontFamily: 'Poppins',
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
          border: '1px solid #46D7CB',
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
      },
      '& .radio-control .MuiTypography-root': {
        fontFamily: 'Poppins',
      },
    },
    wd100: {
      flex: '1 1 100%'
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
      // height: '40px',
      // width: '98px',
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
    },
    formGroup: {
      display: 'flex',
      columnGap: '4vmax',
      flexWrap: 'wrap',
      '& .MuiInputBase-root.MuiOutlinedInput-root': {
        background: '#F8F9FC',
        // border: "1px solid #E4E9F2",
        borderRadius: ButtonRadius,
      },
    },
    formGroupField: {
      flex: '1 1 30%',
      maxWidth: '30%',
      paddingBottom: '2vmax',
      color: 'rgb(18, 19, 20)',
      '& .formInputLabels .labelClassName': {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '10px',
        lineHeight: '16px',
        letterSpacing: '0.02em'
      },
      '& input': {
        fontFamily: 'Poppins',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#E4E9F2'
      },
      '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderWidth: '1px!important',
      },
      '& .Mui-focused input': {
        fontSize: '14px',
      },
      '@media (max-width:960px)': {
        flex: '1 1 47%',
        maxWidth: '47%',
      },
      '@media (max-width:736px)': {
        flex: '1 1 100%',
        maxWidth: '100%',
      },

    },
    dateInput: {
      fontFamily: 'Poppins',
      '& input': {
        // textTransform: 'uppercase',
        color: 'rgba(0,0,0,0.38)',
        padding: '16.5px 14px',
        border: '1px solid #afb3ba!important',
        background: '#F8F9FC',
        // '&::-webkit-calendar-picker-indicator': {
        //   width: '30px',
        //   height: '30px',
        //   filter: 'invert(0.6)',
        // },
      },

    },
    selectBox: {
      '& .MuiInputBase-formControl': {
        border: '1px solid #E4E9F2',
        padding: '16.5px 14px',
        '& .MuiNativeSelect-select': {
          fontSize: '14px',
          padding: '0',
          fontWeight: '500',
          fontFamily: FontFamily,
        },
      }
    },
    selectBoxWithPlaceHolder: {
      '& .MuiInputBase-formControl': {
        border: '1px solid #E4E9F2',
        padding: '16.5px 14px',
        '& .MuiNativeSelect-select': {
          color: 'rgba(0,0,0,0.37)',
          fontSize: '14px',
          padding: '0',
          fontWeight: '500',
          fontFamily: FontFamily,
        },
      }
    },

    pageContentWrapper: {
      maxWidth: '550px',
      margin: '15px auto'
    },
    pageContent: {
      background: '#fff',
      borderRadius: '1vmax',
      padding: '1vmax 1vmax 2vmax',
    },


    checkBoxLabel: {
      color: FontColor,
      '& span': {
        fontWeight: 600,
        fontSize: '14px',
        fontFamily: FontFamily
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
  },
  { index: 1 }
);
