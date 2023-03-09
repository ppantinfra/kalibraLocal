import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily, AppColor, ButtonColor } from '../../core';

export const useIntelligenceDetailsScreenStyles = makeStyles(
  {
    page_Content: {
      '& .MuiTablePagination-selectLabel': {
        display: 'none'
      }
    },
    screenTitle: {
      fontSize: '30px !important',
      fontFamily: FontFamily,
      color: FontColor,
      paddingBottom: '10px',
      fontWeight: 600
    },

    /*** Intelligence client detail styles   ***/
    invidualTrendHeading: {
      fontSize: '16px !important',
      fontFamily: FontFamily,
      color: FontColor,
      paddingBottom: '10px'
    },
    IfilterAndLinkSection: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '@media (max-width: 768px)': {
        marginTop: '12px'
      },
      '@media (max-width: 820px)': {
        flexDirection: 'column'
      }
    },
    ifals_left: {
      '@media (max-width: 820px)': {
        marginRight: 'auto',
        marginLeft: 0
      }
    },
    ifals_right: {
      display: 'flex',
      justifyContent: 'space-between',
      columnGap: '24px',
      marginBottom: '10px',
      alignItems: 'center',
      '@media (max-width: 820px)': {
        marginTop: '10px'
      },
      '@media (max-width: 600px)': {
        // rowGap: '12px',
        marginBottom: '20px'
        // marginTop: '5px'
      },
      '@media (max-width: 480px)': {
        flexWrap: 'wrap'
      },
      '@media (max-width: 359px)': {
        width: '100%'
      },
      '& p': {
        color: FontColor,
        fontSize: '14px',
        fontWeight: 600
      },
      '& a': {
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        color: FontColor,
        fontSize: '14px',
        position: 'relative',

        '& img': {
          marginRight: '9.1px'
        }
      }
    },
    mui_tablist: {
      '& .MuiTab-root.Mui-selected ': {
        color: `${FontColor} !important`
      },
      '& .MuiTabs-flexContainer': {
        columnGap: '10px',
        rowGap: '10px',
        '@media (min-width: 1280px)': {
          flexWrap: 'wrap'
        }
      },
      '&  .MuiTabs-scrollButtons': {
        '@media (max-width:359px)': {
          width: '28px'
        }
      }
    },
    mui_tabButton: {
      display: 'flex',
      flexDirection: 'row',
      fontFamily: FontFamily,
      fontWeight: '400',
      fontSize: 14,
      color: '#222B45',
      padding: '0 5px',
      borderRadius: '5px',
      textTransform: 'capitalize',
      transition: '.3s ease',
      whiteSpace: 'break-spaces',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      minHeight: '48px',
      '@media (max-width:768px)': {
        fontSize: '14px'
      },
      '&.MuiTab-root.Mui-selected': {
        fontWeight: '600'
      },
      '& img': {
        marginBottom: '0 !important'
      },
      '& svg': {
        color: '#46D7CB',
        width: '20px'
      }
    },
    backtoLink: {
      paddingBottom: '10px',

      '& svg': {
        fontSize: '35px',
        color: AppColor.kalibraThemeColor,
        transition: '.3s all',
        '&:hover': {
          color: ButtonColor
        }
      }
    },
    chevronLeftIcon: {
      fontSize: '35px',
      color: AppColor.kalibraThemeColor,
      transition: '.3s all',
      '&:hover': {
        color: ButtonColor
      }
    },
    ifalsl_fieldBox: {
      display: 'flex',
      '& a ~ div': {
        display: 'none'
      },
      '& svg': {
       
      }
    },
    ifalsl_searchField: {
      '& .MuiInputBase-formControl': {
        background: '#fff',
        border: '1px solid #C5CEE0',
        borderRadius: '10px',
        height: '37px',

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
        padding: '0 14px',
        '@media (max-width: 412px)': {
          paddingRight: '16px !important'
        }
      },
      '& .MuiAutocomplete-input': {
        width: 'auto !important',
        minWidth: 'auto !important'
      },
      '& .MuiOutlinedInput-notchedOutline': {
        outline: 'none',
        border: 'none'
      }
    }
  },
  { index: 1 }
);
