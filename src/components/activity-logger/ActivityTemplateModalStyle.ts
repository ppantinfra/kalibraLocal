import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily, FontStyle, ButtonStyles } from '../../core';

export const useActivityTemplateModalStyle = makeStyles(
  {
    act_template_diolog: {
      '& .act_template_diologh': {
        '& .MuiDialog-paper': {},
      },
    },
    dialogContentBox: {
      padding: '2vmax',
    },
    tempModalHeading: {
      paddingBottom: '10px',
      '& p': {
        fontSize: '36px',
        color: FontColor,
        fontFamily: FontFamily,
        fontWeight: '600',
      },
    },
    inputLabel: {
      paddingBottom: '10px',
      color: '#2E3A59',
      fontSize: '16px',
      fontFamily: FontFamily,
      fontWeight: '300',
    },
    buttonBox: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '20px',
    },
    saveBtn: {
      ...ButtonStyles(
        '15px',
        '#33B7B8 !important',
        '#fff !important',
        'capitalize',
        'none',
        '4px',
        FontFamily,
        FontStyle,
        '500',
        '15px',
        '12px',
        'none',
        'none'
      ),
      '&:hover': {
        background: '#53c0b7',
        boxShadow: 'none',
      },
    },
    selectControl: {
      padding: '2.5px 14px',
      height: 'auto',
      minHeight: '1.4375em',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      borderRadius: '4px',
      border: '1.5px solid rgba(0, 0, 0, 0.3) !important',
      '& select': {
        color: '#222B45 !important',
        fontSize: '18px',
        fontWeight: '500',
      },
      '&.Mui-focused': {
        border: '1.5px solid #46d7cb !important',
        width: '100%',
      },

      '& .MuiNativeSelect-select:focus ': {
        backgroundColor: 'transparent !important',
      },

      '& .MuiNativeSelect-select-MuiInputBase-input-MuiInput-input:focus': {
        borderColor: '#46d7cb !important',
        borderRadius: '4px',
        backgroundColor: 'transparent',
      },

      '& .Mui-focused': {
        border: '1px solid #46d7cb',
      },

      '& .invalid-parentBox': {
        border: '1.5px solid red !important',
      },
    },
    fromGroup: {
      columnGap: '1vmax',
      width: '100%',
      '& .MuiTypography-root': {
        fontSize: '12px',
      },
    },
  },
  { index: 1 }
);
