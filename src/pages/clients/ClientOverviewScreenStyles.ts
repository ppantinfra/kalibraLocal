import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily, FontStyle, ButtonStyles, DefaulPrimarytColor } from '../../core';

export const useClientOverviewScreenStyles = makeStyles(
  {
    page_Content: {
      '& .MuiTablePagination-selectLabel': {
        '@media (max-width: 768px)': {
          display: 'none'
        }
      }
    },
    dvui_name: {
      color: FontColor,
      fontSize: '18px',
      fontWeight: '600',
      fontFamily: FontFamily,
      lineHeight: '140%',
      marginTop: '7px'
    },

    dvui_text: {
      color: FontColor,
      fontSize: '16px',
      fontWeight: '400',
      fontFamily: FontFamily,
      fontStyle: FontStyle,
      paddingBottom: '16px',
      '@media (max-width: 1024px)': {
        fontSize: '16px'
      }
    },
    dv_clientsFilterSection: {
      display: 'flex',
      justifyContent: 'space-between',
      '@media (max-width: 768px)': {
        marginTop: '12px'
      },
      '@media (max-width: 935px)': {
        flexDirection: 'column'
      }
    },
    dvcfs_clients: {
      // color: "#33B7B8",
      fontSize: '18px',
      fontWeight: '600',
      fontFamily: FontFamily,
      lineHeight: '140%',
      // marginRight: '21px'
    },
    dvcfs_left: {
      display: 'flex',
      alignItems: 'center',

      '& .MuiTabs-flexContainer': {
        alignItems: 'center'
      }
    },
    dvcfs_right: {
      display: 'flex',
      justifyContent: 'space-between',
      columnGap: '24px',
      marginBottom: '10px',
      alignItems: 'center',
      '@media (max-width: 600px)': {
        rowGap: '12px',
        marginBottom: '20px',
        marginTop: '5px'
      },
      '@media (max-width: 480px)': {
        flexDirection: 'column',
        alignItems: 'flex-start',
        rowGap: '12px',
        marginBottom: '20px',
        marginTop: '5px'
      }
    },
    dvfsr_fieldBox: {
      display: 'flex',
      justifyContent: 'space-between',
      columnGap: '10px',
      alignItems: 'center'
    },
    dvfsr_searchField: {
      '& .MuiInputBase-formControl': {
        background: '#fff',
        border: '1px solid #C5CEE0',
        borderRadius: '10px',
        height: '40px',

        '& input': {
          '@media (max-width: 768px)': {
            fontSize: '16px'
          },
          '@media (max-width: 640px)': {
            fontSize: '14px'
          }
        }
      },
      '& .Mui-focused': {},

      '&::placeholder': {
        fontStyle: 'italic'
      },

      '& .MuiAutocomplete-inputRoot': {
        padding: '0 14px'
      },
      '& .MuiAutocomplete-input': {
        width: 'auto !important',
        minWidth: 'auto !important'
      },
      '& .MuiOutlinedInput-notchedOutline': {
        outline: 'none',
        border: 'none'
      }
    },

    addNewClientLink: {
      ...ButtonStyles(
        '12px 24px',
        DefaulPrimarytColor.primary500green,
        '#fff !important',
        'capitalize',
        'none',
        '8px',
        FontFamily,
        FontStyle,
        '500',
        '14px',
        '20px',
        'none',
        'none'
      ),
      height: '40px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      textDecoration: 'none',
      transition: '.3s all',
      '&:hover': {
        background: '#53c0b7'
      },

      '@media (max-width: 768px)': {
        fontSize: '12px',
        letterSpscing: '.5px'
      },
      '& svg': {
        paddingRight: '5px'
      }
    },
    tabIndicator: {
      backgroundColor: 'transparent'
    }
  },
  { index: 1 }
);
