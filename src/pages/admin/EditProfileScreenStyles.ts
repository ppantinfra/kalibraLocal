import { makeStyles } from '@mui/styles';
import {
  FontColor,
  FontFamily,
  ButtonColor,
  ButtonRadius,
  FontStyle,
  ButtonStyles,
} from '../../core/';

export const useEditProfileScreenStyles = makeStyles(
  {
    pageContentWrapper: {
      maxWidth: '550px',
      margin: '15px auto'
    },
    pageContent: {
      background: '#fff',
      borderRadius: '1vmax',
      padding: '1vmax 1vmax 2vmax',
    },

    backtoLink: {
      width: '20px',
    },
    chevronLeftIcon: {},
    heading: {
      fontSize: '26px',
      fontWeight: '600',
      color: FontColor,
      fontFamily: FontFamily,
      '@media (max-width: 768px)': {
        fontSize: '20px',
      },
    },
    buttonsBox: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    inputLabel: {
      color: 'rgba(0, 0, 0, 0.6) !important',
      fontSize: '13px',
      fontFamily: FontFamily,
      fontWeight: '400',
    },

    submitBtn: {
      ...ButtonStyles(
        '15px',
        ButtonColor,
        '#fff !important',
        'capitalize',
        'none',
        ButtonRadius,
        FontFamily,
        FontStyle,
        '500',
        '15px',
        '20px',
        'none',
        'none'
      ),
      '&:hover': {
        background: '#53c0b7',
      },
    },

    formContent: {
      display: 'flex',
      flexDirection: 'column',
      '& .MuiInputBase-formControl': {
        border: 'none',
        background: '#F8F9FC',
      },
      '& input': {
        fontSize: '15px',
        border: '1px solid #E4E9F2',
        borderRadius: ButtonRadius,
        '@media (max-width:768px)': {
          fontSize: '13px',
          padding: '14.5px 14px',
        },

        '@media (max-width:1280px)': {
          fontSize: '14px',
        },
      },

      '& .Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          color: '#46D7CB',
          border: '2px solid #46D7CB',
          outline: '#46D7CB',
        },
        '& input': {
          color: FontColor,
          fontFamily: FontFamily,
          fontWeight: '600',
          '@media (max-width:1280px)': {
            fontSize: '14px',
          },
        },
      },
      '& .Mui-focused.MuiInputLabel-formControl': {
        color: '#46D7CB',
      },

      '& .css-8g8ymg-MuiInputBase-root-MuiOutlinedInput-root': {
        '& hover': {
          border: '1px solid #E4E9F2',
        },
      },
      // radio checked color
      '& .css-pbe73e-MuiButtonBase-root-MuiRadio-root.Mui-checked': {
        color: '#46D7CB',
      },
    },
    radioGroup: {
      flexWrap: 'nowrap',
      '@media (max-width:900px)': {
        flexWrap: 'wrap',
      },
    },

    formHeading: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#000',
    },
    labelClassName: {
      color: 'rgba(0, 0, 0, 0.6)',
      fontSize: '14px',
      fontFamily: FontFamily,
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
      flex: '1 1 40%',
      paddingBottom: '2vmax',
      color: 'rgb(18, 19, 20)',
      '@media (max-width:736px)': {
        flex: '1 1 50%',
      },
    },

    notchedOutline: {
      // border: "none",
      border: '1px solid #E4E9F2',
    },
    tenantSelectTitle: {
      fontSize: '14px',
      color: FontColor,
      fontFamily: FontFamily,
      fontWeight: '400'
    },
    tenantselect: {
      outline: 'none',
      color: FontColor,
      marginTop: 10,
      fontSize: '16px',
      borderRadius: ButtonRadius,
      width: '100%',
      '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
        '&:focus-visible': {
          outline: '1px solid #46D7CB',
          borderRadius: ButtonRadius,
        },
      },
      '& :hover': {
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
      },

    },
    customDatePicker: {
      '& input': {
        padding: '16.5px 14px',
        border: '1px solid #afb3ba!important',
        background: '#F8F9FC',
      }
    }
  },
  { index: 1 }
);
