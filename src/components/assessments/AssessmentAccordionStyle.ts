import { makeStyles } from '@mui/styles';
import {
  FontColor,
  FontFamily,
  ButtonColor,
  ButtonRadius,
  FontStyle,
  ButtonStyles,
} from '../../core';

export const useAssessmentAccordionStyles = makeStyles(
  {
    pageContent: {
      padding: '10px 0',
      borderRadius: '1vmax',
    },
    backtoLink: {
      paddingBottom: '10px',
    },
    chevronLeftIcon: {},
    multiStepAssFormBox: {
      '& .MuiAccordionDetails-root': {
        // padding: '0px 30px',
      },
      '& .MuiAccordionSummary-root': {
        // borderBottom: '#46d7cb 1px solid',
        // borderTop: '#46d7cb 1px solid',
        // padding: '0px 30px',
      },
      '& .MuiAccordionSummary-root.Mui-expanded': {
        // height: '51px',
        // minHeight: '51px',
        // margin: '0px',
      },
    },
    assessmentGroupsBox: {
      borderRadius: '6px',
      background: '#fff',
      columnGap: '15px',
      color: '#222B45',
      fontSize: '14px',
      marginTop: '0px',

      '& .MuiInputBase-formControl': {
        border: 'none',
        background: '#F8F9FC',
        borderRadius: '6px',
        fontFamily: 'Poppins',
        fontWeight: '500',
      },
      '& input': {
        fontSize: '14px',
        border: 'none',
        // borderRadius: ButtonRadius,
        fontFamily: 'Poppins',
        color: '#222B45',
        '@media (max-width:768px)': {
          fontSize: '13px',
          padding: '14.5px 14px',
        },
      },
      '& .Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          color: '#222B45',
          border: '1px solid #46D7CB',
          outline: '#46D7CB',
        },
      },
      '& .Mui-focused.MuiInputLabel-formControl': {
        color: '#222B45',
      },

      '& .MuiTextField-root': {
        paddingBottom: '8px',
        '@media (max-width:768px)': {
          paddingBottom: '2vmax',
        },
        '@media (max-width:480px)': {
          paddingBottom: '3vmax',
        },
      },

      '& .MuiOutlinedInput-root': {
        fontSize: '14px',
        padding: '0 10px',
        '@media (max-width:768px)': {
          fontSize: '13px',
        },
        '&:hover': {
          border: 'none',
        },
      },

      // Label
      '& .MuiInputLabel-root': {
        fontSize: '10px',
        marginBottom: '-6px',
        letterSpacing: '0.02em',
        color: '#2E3A59',
        fontFamily: FontFamily,
      },
      '& .MuiOutlinedInput-input': {
        padding: '10px 0',
      },

      // suffix typo
      '& .MuiInputAdornment-root .MuiTypography-root': {
        fontSize: '12px',
      },
      '& textarea': {
        fontFamily: FontFamily,
      },
    },
    // groupHeading: {
    //   fontSize: '18px',
    //   fontWeight: '600',
    //   color: FontColor,
    //   fontFamily: FontFamily,
    //   marginBottom: '0px',
    // },
    groupHeading: {
      fontSize: '14px',
      fontWeight: '600',
      color: FontColor,
      fontFamily: FontFamily,
      marginBottom: '0px',
    },
    subGroupHeading: {
      fontSize: '11px',
      fontWeight: '600',
      color: '#222B45',
      fontFamily: FontFamily,
    },
    subGroupBox: {
      // borderBottom: '1px solid rgb(228, 233, 242)',
      padding: '10px 0',
    },

    subGroupFieldBox: {
      display: 'grid',
      gap: '2%',
      gridTemplateColumns: '23% 23% 23% 23%',
      '@media (max-width: 920px)': {
        gridTemplateColumns: '31% 31% 31%',
      },
      '@media (max-width: 768px)': {
        gridTemplateColumns: '48% 48%',
      },
      '@media (max-width: 480px)': {
        gridTemplateColumns: '98%',
      },
    },
    commentBox: {
      marginTop: '2vmax',
      display: 'grid',
      gap: '2%',
      gridTemplateColumns: '48%',
      '& .MuiOutlinedInput-notchedOutline': {
        border: '1px solid #E4E9F2'
      },
      '@media (max-width: 920px)': {
        gridTemplateColumns: '64%',
      },
      '@media (max-width: 768px)': {
        gridTemplateColumns: '98%',
      },
    },

    // Kinetic Assessment form
    assTypeCommentBox: {
      border: '1px solid #EDF1F7',
      color: FontColor,
      fontFamily: FontFamily,
      padding: '16px',
      borderRadius: '6px',
      background: '#fff',
    },
    previousBtn: {
      ...ButtonStyles(
        '0',
        'transparent',
        '#46D7CB',
        'capitalize',
        'none',
        ButtonRadius,
        FontFamily,
        FontStyle,
        '500',
        '16px',
        '20px',
        'none',
        'none'
      ),
      '&:hover': {
        background: 'transparent',
      },
    },
    nextBtn: {
      ...ButtonStyles(
        '15px',
        ButtonColor,
        '#fff',
        'capitalize',
        'none',
        ButtonRadius,
        FontFamily,
        FontStyle,
        '500',
        '16px',
        '20px',
        'none',
        'none'
      ),
      '&:hover': {
        background: '#53c0b7',
        boxShadow: 'none',
      },
    },
    buttonsBox: {
      display: 'flex',
      justifyContent: 'flex-end',
    },

    notchedOutline: {
      border: '1px solid #E4E9F2',
      borderColor: '#E4E9F2',
    },
    expandedAccordion: {
      margin: '0!important',
      '& .MuiAccordionDetails-root': {
        borderTop: '#8F9BB3 1px solid',
        padding: '24px!important'
      },
    },
    accordionSummary: {
      padding: '0px 16px',
      borderTop: '#8F9BB3 1px solid',
      borderBottom: '#8F9BB3 0px solid',
      background: '#F8F9FC',
      minHeight: 'auto!important',
      // "& [data-testid=ExpandMoreIcon]": {
      //   display: "none",
      // },
      '& .MuiAccordionSummary-expandIconWrapper': {
        color: '#46D7CB'
      },
      '& .MuiAccordionSummary-content': {
        margin: '8px 0'
      }
    },
    cb_card: {
      background: '#fff',
      borderRadius: '10px',
      boxShadow: '0px 56px 22px rgba(143, 155, 179, 0.01), 0px 32px 19px rgba(143, 155, 179, 0.05), 0px 14px 14px rgba(143, 155, 179, 0.09), 0px 4px 8px rgba(143, 155, 179, 0.1), 0px 0px 0px rgba(143, 155, 179, 0.1)',
      border: 'none !important',
      padding: '0.5vmax 2vmax 2vmax 2vmax',
      '& .MuiAccordion-root': {
        padding: '0',
        boxShadow: 'none',
        '& .MuiAccordionDetails-root': {
          padding: '0',
        },
      },
    },
    mt2: {
      marginTop: '15px'
    }
  },
  { index: 1 }
);
