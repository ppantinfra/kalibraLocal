import { makeStyles } from '@mui/styles';
import { AppColor,
  FontColor,
  FontFamily,
  ButtonColor,
  ButtonRadius,
  FontStyle,
  ButtonStyles,
} from '../../../core';

export const NuitritionScreenStyles = makeStyles(
  {
    nuitritionSection: {
      '& .css-150xwe8-MuiButtonBase-root-MuiTab-root': {
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '12px 10px',
        minWidth: '35px',
      },
      '& .MuiTab-textColorSecondary.Mui-selected': {
        background: '#fff',
        borderRadius: '5px 0 0 5px',
      },
    },
    nuitritionPanel: {
      background: '#fff',
      flex: '1 1 0%',
      borderRadius: '0 5px 5px 0',
      '@media (max-width: 500px)': {
        flex: '1 1 0%',
      },
    },
    nutritionPanelContent: {
      padding: '0 3vmax',
    },

    // Form styles
    formBox: {
      background: '#fff',
      padding: '1vmax 1vmax 2vmax',
      borderRadius: '1vmax',
      '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
        border: '1px solid rgba(228, 233, 242,.4)',
        background: 'rgba(228, 233, 242,.4)',
      },
    },

    formContent: {
      display: 'flex',
      flexDirection: 'column',
      color: FontColor,
      fontFamily: FontFamily,

      '& .MuiInputBase-formControl': {
        border: 'none',
        background: '#F8F9FC',
      },
      '& input': {
        fontSize: '15px',
        border: 'none',
        borderRadius: ButtonRadius,
        FontFamily: FontFamily,
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
          fontWeight: '600',
          fontSize: '16px',

          '@media (max-width:1280px)': {
            fontSize: '14px',
          },
        },
      },

      '& .MuiTextField-root': {
        paddingBottom: '15px',
        '@media (max-width:768px)': {
          paddingBottom: '2vmax',
        },
        '@media (max-width:480px)': {
          paddingBottom: '3vmax',
        },
      },

      '& .MuiOutlinedInput-root': {
        fontSize: '15px',
        '@media (max-width:768px)': {
          fontSize: '13px',
        },
        '&:hover': {
          border: 'none',
        },
      },

      // Label
      '& .MuiInputLabel-root': {
        fontSize: '16px',
        fontFamily: FontFamily,
      },
      '& .Mui-focused.MuiInputLabel-formControl': {
        color: '#46D7CB',
      },
      // suffix typo
      '& .MuiInputAdornment-root .MuiTypography-root': {
        fontSize: '12px',
      },
      '& textarea': {
        fontFamily: FontFamily,
      },

      '& .Mui-checked': {
        color: '#46D7CB',
      },
    },
    formHeading: {
      fontSize: '18px',
      color: '#2B2F3B',
      marginBottom: '0',
      '@media (max-width: 768px)': {
        fontSize: '15px',
      },
    },
    formSubHeading: {
      fontSize: '14px',
      color: 'rgba(43 47 59/75%)',
      marginBottom: '2vmax',
      '@media (max-width: 768px)': {
        fontSize: '12px',
      },
    },
    snackBarErrorClass: {
      backgroundColor: `${AppColor.red}`,
    },
    snackBarSuccessClass: {
      backgroundColor: '#0D4E67',
    },
    formGroup: {
      display: 'flex',
      columnGap: '4vmax',
      flexWrap: 'wrap',
    },
    formGroupField: {
      flex: '1 1 40%',
      paddingBottom: '2vmax',
      color: 'rgb(18, 19, 20)',
      '@media (max-width:768px)': {
        flex: '1 1 50%',
      },
    },
    buttonsBox: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    saveBtn: {
      ...ButtonStyles(
        '12px 15px',
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
        boxShadow: 'none',
      },
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
      fontFamily: FontFamily,
    },
    chevronLeftIcon: {
      color: '#46D7CB',
      background: 'transparent !important',
    },
    notchedOutline: {},
  },
  { index: 1 }
);
